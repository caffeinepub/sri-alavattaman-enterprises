# Sri Alavattaman Enterprises

## Current State
Contact form submits to backend only. No WhatsApp redirect is triggered on form submission.

## Requested Changes (Diff)

### Add
- After successful form submission, open WhatsApp chat with the enquiry message pre-filled to 9444010383
- Display a clear instruction to the customer that they need to press Send in WhatsApp
- Show a WhatsApp direct contact button in the Contact section

### Modify
- handleSubmit in Contact.tsx: after onSuccess, open WhatsApp with the customer's name, email, subject, and message pre-filled
- Success message to inform customer to press Send in WhatsApp

### Remove
- Nothing removed

## Implementation Plan
1. In Contact.tsx, on onSuccess, build a WhatsApp URL with the enquiry details and open it
2. Add a note that WhatsApp will open for them to send the message
3. Add a direct WhatsApp button below the contact info
