import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
// Get these from https://dashboard.emailjs.com/
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export const sendOrderEmail = async (orderData) => {
  try {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.warn('EmailJS not configured. Order details:', orderData);
      return { success: true, message: 'Order received (email not configured)' };
    }

    const templateParams = {
      to_email: import.meta.env.VITE_STORE_EMAIL,
      customer_name: orderData.formData.name,
      customer_email: orderData.formData.email,
      customer_phone: orderData.formData.phone,
      customer_address: orderData.formData.address,
      customer_city: orderData.formData.city,
      customer_zip: orderData.formData.zipCode,
      items_list: orderData.itemsList,
      subtotal: orderData.subtotal,
      tax: orderData.tax,
      shipping: orderData.shipping,
      total: orderData.total,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
    );

    return { success: true, response };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
};

export const sendCustomerConfirmationEmail = async (orderData) => {
  try {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      return { success: true };
    }

    const templateParams = {
      to_email: orderData.formData.email,
      customer_name: orderData.formData.name,
      items_list: orderData.itemsList,
      total: orderData.total,
      order_id: generateOrderId(),
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID || EMAILJS_TEMPLATE_ID,
      templateParams,
    );

    return { success: true, response };
  } catch (error) {
    console.error('Failed to send customer confirmation email:', error);
    return { success: false, error };
  }
};

export const generateOrderId = () => {
  return `UME-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
};
