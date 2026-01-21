"use client";

export default function WhatsAppButton() {
  const phoneNumber = "2348157009524"; // replace with your WhatsApp number
  const message = "Hello, I'm interested in your jerseys";

  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg hover:bg-green-600 transition"
    >
      <span className="text-lg">💬</span>
      <span className="hidden sm:inline font-medium">Chat on WhatsApp</span>
    </a>
  );
}