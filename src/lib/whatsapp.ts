export function openWhatsApp(message?: string) {
  const defaultMessage = `Hi Mo Dilshad,

I visited your website (https://www.dilshad.tech/) and I'm interested in getting a website built.

Name:
Business:
Website Type:
Budget:
Project Details:

Please contact me.`;

  const text = message || defaultMessage;
  const encodedMessage = encodeURIComponent(text);
  const url = `https://wa.me/919569248183?text=${encodedMessage}`;
  
  window.open(url, '_blank');
}
