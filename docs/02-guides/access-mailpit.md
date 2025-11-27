# Accessing Mailpit

This guide explains how to access and use Mailpit to view emails sent by your applications.

## Overview

Mailpit is an email testing tool that intercepts all emails sent by your applications. This is extremely useful during development as you can see all outgoing emails without needing to configure a real SMTP server.

## Accessing Mailpit

Once Mailpit is installed, it's accessible via web interface at:

```
https://mailpit.svc.dvs.sh
```

<!-- TODO: Add screenshot of Mailpit web interface -->

## Viewing Emails

### Email List

The main Mailpit interface shows a list of all intercepted emails, displaying:
- Sender address
- Recipient address
- Subject
- Timestamp

<!-- TODO: Add screenshot of email list -->

### Email Details

Click on any email to view its full content:
- Headers (From, To, Subject, etc.)
- HTML content
- Plain text content
- Attachments (if any)

<!-- TODO: Add screenshot of email details view -->

## Features

### Search and Filter

Mailpit provides search functionality to find specific emails:
- Search by sender, recipient, or subject
- Filter by date range

<!-- TODO: Add screenshot of search functionality -->

### Email Actions

- **View HTML**: See the rendered HTML email
- **View Raw**: See the raw email source
- **Download**: Download the email as `.eml` file
- **Delete**: Remove the email from the list

## Automatic Configuration

When Mailpit is installed, DevSpaces automatically configures your applications to send emails through Mailpit. No additional configuration is needed.

## Testing Email Functionality

To test that emails are being captured:

1. Trigger an email from your application (password reset, order confirmation, etc.)
2. Check Mailpit - the email should appear within seconds

<!-- TODO: Add screenshot of test email in Mailpit -->

## Troubleshooting

### Emails Not Appearing

If emails don't appear in Mailpit:

1. Verify Mailpit is running: `dvs status`
2. Check application logs: `dvs logs`
3. Ensure Mailpit service is installed: `dvs service install mailpit`

### Access Issues

If you can't access the web interface:

1. Check the service status: `dvs status`
2. Check browser console for SSL certificate errors

## Next Steps

- Learn how to [use phpMyAdmin](/docs/guides/use-phpmyadmin) for database management
- Learn how to [create a PrestaShop site](/docs/guides/create-prestashop-site)
- Learn how to [create a WordPress site](/docs/guides/create-wordpress-site)

