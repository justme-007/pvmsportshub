export function generateWhatsAppLink(
  productName: string,
  price: number
) {
  const phone = "2348157009524"; // replace with your WhatsApp number
  const message = `Hello, I'm interested in ${productName} – ₦${price.toLocaleString()}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}