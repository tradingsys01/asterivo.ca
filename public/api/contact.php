<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input']);
    exit;
}

// Validate required fields
$required_fields = ['firstName', 'lastName', 'email', 'company', 'source'];
foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: $field"]);
        exit;
    }
}

$firstName = filter_var($input['firstName'], FILTER_SANITIZE_STRING);
$lastName = filter_var($input['lastName'], FILTER_SANITIZE_STRING);
$email = filter_var($input['email'], FILTER_VALIDATE_EMAIL);
$company = filter_var($input['company'], FILTER_SANITIZE_STRING);
$phone = isset($input['phone']) ? filter_var($input['phone'], FILTER_SANITIZE_STRING) : '';
$source = filter_var($input['source'], FILTER_SANITIZE_STRING);

if (!$email) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Determine form context based on source
function getFormContext($source) {
    switch ($source) {
        case 'guide-download':
        case 'guide':
            return ['type' => 'Guide Download', 'priority' => 'Low', 'description' => 'Downloaded AI Quick Wins Guide'];
        case 'pricing-starter':
        case 'pricing-growth':
        case 'pricing-scale':
            $plan = str_replace('pricing-', '', $source);
            return ['type' => 'Pricing Inquiry', 'priority' => 'High', 'description' => "Interested in $plan plan"];
        case 'solutions-hero':
        case 'solutions-assessment':
            return ['type' => 'Solutions Inquiry', 'priority' => 'High', 'description' => 'Interested in custom AI solutions'];
        case 'lead-response-system':
        case 'quote-automation':
        case 'invoice-processing':
        case 'report-generation':
            $service = str_replace('-', ' ', $source);
            return ['type' => 'Specific Solution', 'priority' => 'High', 'description' => "Interested in $service"];
        default:
            return ['type' => 'General Inquiry', 'priority' => 'Medium', 'description' => 'General contact form submission'];
    }
}

$context = getFormContext($source);

// Email configuration
$to_email = 'asterivo.ca@gmail.com';
$from_email = 'noreply@asterivo.ca';

// Create notification email for Asterivo
$subject_notification = "🚀 New {$context['type']} Lead: $firstName $lastName from $company";

$message_notification = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: #3b82f6; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .priority-high { border-left: 4px solid #dc2626; background: #fef2f2; padding: 15px; }
        .priority-medium { border-left: 4px solid #f59e0b; background: #fffbeb; padding: 15px; }
        .priority-low { border-left: 4px solid #059669; background: #ecfdf5; padding: 15px; }
        .details { background: #f8fafc; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .footer { background: #f1f5f9; padding: 15px; text-align: center; color: #64748b; }
    </style>
</head>
<body>
    <div class='header'>
        <h1>🚀 New Lead from Asterivo.ca</h1>
    </div>
    
    <div class='content'>
        <div class='priority-" . strtolower($context['priority']) . "'>
            <strong>Priority: {$context['priority']}</strong> | 
            <strong>Type:</strong> {$context['type']} | 
            <strong>Source:</strong> $source
        </div>

        <div class='details'>
            <h2>Contact Information</h2>
            <p><strong>Name:</strong> $firstName $lastName</p>
            <p><strong>Email:</strong> <a href='mailto:$email'>$email</a></p>
            <p><strong>Company:</strong> $company</p>";

if ($phone) {
    $message_notification .= "<p><strong>Phone:</strong> <a href='tel:$phone'>$phone</a></p>";
}

$message_notification .= "
        </div>

        <div class='details'>
            <h2>Lead Context</h2>
            <p><strong>Interest:</strong> {$context['description']}</p>
            <p><strong>Source Page:</strong> $source</p>
            <p><strong>Submission Time:</strong> " . date('Y-m-d H:i:s') . "</p>
        </div>

        <div class='details'>
            <h2>Recommended Next Steps</h2>";

if ($context['priority'] === 'High') {
    $message_notification .= "<p>⚡ <strong>High Priority Lead</strong> - Respond within 2 hours for best conversion</p>";
}

$message_notification .= "
            <ul>
                <li>Send personalized follow-up email within 24 hours</li>
                <li>Schedule discovery call if interested in paid services</li>
                <li>Add to CRM with appropriate tags and source attribution</li>";

if ($context['type'] === 'Guide Download') {
    $message_notification .= "<li>Send AI Quick Wins implementation guide and offer consultation</li>";
} else {
    $message_notification .= "<li>Prepare custom proposal based on their specific interest area</li>";
}

$message_notification .= "
            </ul>
        </div>
    </div>

    <div class='footer'>
        <p>This lead was generated from asterivo.ca | Timestamp: " . date('c') . "</p>
    </div>
</body>
</html>
";

// Create confirmation email for the lead
$subject_confirmation = "Thanks for your interest, $firstName! We'll be in touch soon.";

$message_confirmation = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: #3b82f6; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .highlight { background: #eff6ff; padding: 15px; border-radius: 8px; margin: 15px 0; }
    </style>
</head>
<body>
    <div class='header'>
        <h1>Thank you, $firstName!</h1>
        <p>We've received your information</p>
    </div>
    
    <div class='content'>
        <p>Hi $firstName,</p>
        
        <p>Thanks for your interest in AI automation for $company. We've received your information and will get back to you within 24 hours.</p>

        <div class='highlight'>
            <h3>What happens next?</h3>
            <ul>
                <li>We'll review your specific needs and use case</li>
                <li>Prepare a customized recommendation</li>
                <li>Schedule a brief call to discuss your options</li>
                <li>Provide you with a clear implementation roadmap</li>
            </ul>
        </div>";

if ($context['type'] === 'Guide Download') {
    $message_confirmation .= "<p>In the meantime, you can <a href='https://asterivo.ca/guide'>download your AI Quick Wins Guide</a> if you haven't already.</p>";
}

$message_confirmation .= "
        <p>If you have any immediate questions, feel free to reply to this email.</p>

        <p>Best regards,<br>
        The Asterivo Team<br>
        <a href='https://asterivo.ca'>asterivo.ca</a></p>
    </div>
</body>
</html>
";

// Send emails using PHP mail() function
$headers_notification = [
    'From: Asterivo Website <' . $from_email . '>',
    'Reply-To: ' . $from_email,
    'Content-Type: text/html; charset=UTF-8',
    'MIME-Version: 1.0'
];

$headers_confirmation = [
    'From: Asterivo <' . $from_email . '>',
    'Reply-To: asterivo.ca@gmail.com',
    'Content-Type: text/html; charset=UTF-8',
    'MIME-Version: 1.0'
];

// Send notification email to Asterivo
$notification_sent = mail(
    $to_email,
    $subject_notification,
    $message_notification,
    implode("\r\n", $headers_notification)
);

// Send confirmation email to the lead
$confirmation_sent = mail(
    $email,
    $subject_confirmation,
    $message_confirmation,
    implode("\r\n", $headers_confirmation)
);

if ($notification_sent && $confirmation_sent) {
    echo json_encode([
        'success' => true,
        'message' => 'Form submitted successfully'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send email'
    ]);
}
?>