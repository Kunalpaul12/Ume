# 📧 EmailJS Setup Guide for Ume

This guide will help you set up EmailJS to send order emails to your customers and store.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account

1. Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email

### Step 2: Create an Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (or add SMTP details)
5. Name it something like `gmail_service`
6. Copy your **Service ID** (looks like: `service_xxxxxxxxx`)

### Step 3: Create Email Templates

#### Template 1: Store Owner Notification

1. Go to **Email Templates**
2. Click **Create New Template**
3. Set **Template Name** to `order_notification`
4. Set **Subject** to: `New Order from Ume - {{customer_name}}`
5. Use this template:

```
Hello,

You have received a new order!

Customer Details:
Name: {{customer_name}}
Email: {{customer_email}}
Phone: {{customer_phone}}
Address: {{customer_address}}
City: {{customer_city}}
ZIP: {{customer_zip}}

Items Ordered:
{{items_list}}

Price Breakdown:
Subtotal: ₹{{subtotal}}
Tax (18% GST): ₹{{tax}}
Shipping: ₹{{shipping}}
---
Total: ₹{{total}}

Order ID: {{order_id}}

Please contact the customer to confirm the order and arrange delivery.

Best regards,
Ume Shop System
```

6. Click **Save**
7. Copy your **Template ID** (looks like: `template_xxxxxxxxx`)

#### Template 2: Customer Confirmation (Optional)

1. Click **Create New Template**
2. Set **Template Name** to `customer_confirmation`
3. Set **Subject** to: `Order Confirmation - Ume Homemade Soaps & Lipbalms`
4. Use this template:

```
Hi {{customer_name}},

Thank you for your order! 🎉

Order ID: {{order_id}}

Items Ordered:
{{items_list}}

Total Amount: ₹{{total}}

We will contact you soon to confirm delivery details.

For any queries, please reply to this email.

Warm regards,
Team Ume 🧼
```

5. Click **Save**
6. Copy this **Template ID** too

### Step 4: Get Your Public Key

1. Go to **Account** settings
2. Find **Public Key**
3. Copy it (looks like: `xxxxxxxxx` - about 20-30 chars)

### Step 5: Create `.env.local` File

In your Ume project root, create a `.env.local` file:

```bash
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
VITE_EMAILJS_CUSTOMER_TEMPLATE_ID=template_yyyyyyyyy
VITE_STORE_EMAIL=your_email@gmail.com
```

Replace with your actual values from EmailJS.

### Step 6: Install Dependencies

```bash
cd /Users/kunalpal/Project/Ume
yarn install
```

### Step 7: Test It!

```bash
yarn dev
```

Go to `http://localhost:3000`, add products to cart, and place an order. You should receive an email!

---

## 🔍 Variable Reference

| Variable | Where to Find | Example |
|----------|---------------|---------|
| `VITE_EMAILJS_PUBLIC_KEY` | Account Settings → Public Key | `abc123def456ghi789` |
| `VITE_EMAILJS_SERVICE_ID` | Email Services → Your Service | `service_a1b2c3d4e5` |
| `VITE_EMAILJS_TEMPLATE_ID` | Email Templates → Store Template | `template_x1y2z3a4b5` |
| `VITE_EMAILJS_CUSTOMER_TEMPLATE_ID` | Email Templates → Customer Template | `template_m1n2o3p4q5` |
| `VITE_STORE_EMAIL` | Your email address | `mystore@gmail.com` |

---

## 📌 Tips

- **Free Tier Limit**: 200 emails/month on free plan
- **Upgrade**: If you need more emails, upgrade to a paid plan
- **Template Variables**: Use `{{variable_name}}` in templates, they match the code in `emailService.js`
- **Test Mode**: Before going live, use your personal email to test
- **Debug**: Check browser console for any EmailJS errors

---

## ⚠️ Troubleshooting

### "Emails not sending?"

1. Check `.env.local` file exists and has correct values
2. Verify Email Service is connected in EmailJS dashboard
3. Check browser console for error messages
4. Make sure template variables match exactly

### "Wrong email format?"

Update the template in EmailJS dashboard and re-save. Changes take effect immediately.

### "Rate limited?"

You're on free tier (200/month). Either:
- Wait for next month
- Upgrade EmailJS plan
- Use test mode with fewer emails

---

## 🚀 Next Steps

After emails are working:
1. Customize email templates with your branding
2. Add logo/images to emails
3. Set up email templates in other languages
4. Track email delivery (EmailJS provides logs)

Happy emailing! 📧✨
