n8n: Contact Form auto-confirmation workflow
===========================================

Overview
--------
This document provides an n8n workflow you can import that watches the inbox where Netlify Form notifications arrive and automatically sends a confirmation email back to the submitter.

How it works
- IMAP / Email trigger: watches your mailbox for new contact-form submission emails.
- Function node: parses the incoming email body to extract `name`, `email`, and `message` (simple regex-based extraction).
- SMTP (Send) node: sends two emails: one to you (owner) and one to the submitter as a confirmation/copy.

Requirements
- n8n (cloud or self-hosted)
- An email account reachable via IMAP (for the trigger) and SMTP credentials (for sending). You may use Gmail (app password), SendGrid SMTP, or another SMTP provider.
- Add the credentials in n8n (IMAP credentials and SMTP credentials).

Importable workflow (high level)
--------------------------------
Below is a high-level JSON-like description and the important pieces you'll need to configure in n8n. Importing/exporting exact JSON depends on your n8n version; use the UI to create nodes following this layout, or copy/paste the function code below into a Function node.

1) Trigger node: Email read (IMAP)
- Node type: `EmailReadImap` or the equivalent "IMAP Email" node in your n8n instance.
- Credentials: set to your IMAP account.
- Search criteria: unread only (so we don't process the same message twice).

2) Function node: parse email body
- Purpose: extract submitter data from email body that Netlify Forms sent.
- Example code to paste into the Function node:

```javascript
// Input: items[0].json.text (plain body) or items[0].json.html
const raw = (items[0].json.text || items[0].json.html || '').toString();

function find(pattern){
  const m = raw.match(pattern);
  return m ? m[1].trim() : '';
}

// Adjust these patterns to match the exact Netlify notification format
const name = find(/Name:\s*([\s\S]*?)\n\s*Email:/i) || find(/name:\s*(.+)/i);
const email = find(/Email:\s*([\S]+)/i) || find(/email:\s*([\S]+)/i);
const message = find(/Message:\s*([\s\S]*)$/i) || find(/message:\s*([\s\S]*)$/i);

return [{ json: { name, email, message, raw } }];
```

3) SMTP send node: send owner copy (optional)
- Configure to send an email to your `TO_EMAIL` with the parsed content. Use expressions to fill the subject/body from the Function node outputs.

4) SMTP send node: send confirmation to submitter
- Configure an SMTP "Send Email" node to use your sending credentials. Set `To` to `{{$json["email"]}}`, subject like `Thanks — copy of your message to Jason`, and use `{{$json["message"]}}` and `{{$json["name"]}}` inside the body.

5) Mark original email as read
- Configure the IMAP node or add a node that marks the email as read so duplicate processing is avoided.

Security & deliverability
- Use a verified sending domain or SendGrid SMTP to avoid landing in spam.
- Store SMTP credentials in n8n credentials (never in repo).

Notes and debugging tips
- Netlify notification formats vary depending on your site settings. After you receive a test submission, inspect the raw email in n8n (from the IMAP node) and adjust the regex patterns in the Function node accordingly.
- For development you can test with a fake submission sent to the target inbox.

Optional: sample export file
- If you want I can add an exported `workflow.json` ready to import. Tell me whether you use n8n cloud or a self-hosted instance and which SMTP provider you prefer (SendGrid SMTP, Gmail app password, etc.) and I will generate an importable JSON with placeholder credentials and Node IDs.
