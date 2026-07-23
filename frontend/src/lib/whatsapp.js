// WhatsApp owner number (with country code, no + prefix)
export const OWNER_WHATSAPP = "919652464506";

const encode = (s) => encodeURIComponent(s);

export const openWhatsApp = (message) => {
  const url = `https://wa.me/${OWNER_WHATSAPP}?text=${encode(message)}`;
  // Use window.open to open in a new tab; fall back to location if popup blocked
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) window.location.href = url;
};

export const buildBookingMessage = (data) => {
  return [
    "*NEW CAB BOOKING — KS Cab Services*",
    "",
    `• Name: ${data.fullName}`,
    `• Phone: ${data.phone}`,
    `• Cab: ${data.cab}`,
    `• Pickup: ${data.pickup}`,
    `• Drop: ${data.drop}`,
    `• Date & Time: ${data.datetime}`,
    data.notes ? `• Notes: ${data.notes}` : null,
    "",
    "— Sent from ks-cabs.com",
  ]
    .filter(Boolean)
    .join("\n");
};

export const buildContactMessage = (data) => {
  return [
    "*NEW ENQUIRY — KS Cab Services*",
    "",
    `• Name: ${data.name}`,
    `• Email: ${data.email}`,
    "",
    "Message:",
    data.message,
    "",
    "— Sent from ks-cabs.com",
  ].join("\n");
};
