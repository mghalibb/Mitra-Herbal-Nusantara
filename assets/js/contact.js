// Redirect Whatsapp
function sendMessage() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const whatsappMessage = `Hallo Admin, Nama Saya : ${name}. Nomor Saya : ${phone}. Email Saya : ${email}. ${message}`;
  const whatsappNumber = '6281540921193'; // Replace with your WhatsApp number
  const whatsappUrl = `https://wa.me/${6281540921193}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappUrl, '_blank');
}
// Redirect Whatsapp

// Redirect Whatsapp
document.getElementById('contact-panel__form').addEventListener('submit', function (e) {
  e.preventDefault(); // Cegah submit default

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const phone = '6281234567890'; // Ganti dengan nomor WhatsApp tujuan
  const text = `Halo, saya ${name} (${email}).\nPesan: ${message}`;

  const encodedText = encodeURIComponent(text);
  const whatsappURL = `https://wa.me/${6281540921193}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, '_blank'); // Buka WhatsApp di tab baru
});
// Redirect Whatsapp
