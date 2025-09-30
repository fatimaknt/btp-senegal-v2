<?php
// Fallback for React Router when .htaccess doesn't work
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

// Serve index.html for all routes except assets
if (!preg_match('/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/', $path)) {
    include 'index.html';
} else {
    // Return 404 for missing assets
    http_response_code(404);
    echo 'File not found';
}
?>
