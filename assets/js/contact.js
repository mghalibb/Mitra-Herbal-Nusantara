// Redirect Whatsapp
function sendMessageToWhatsapp(event) {
  event.preventDefault(); // ⛔ Mencegah reload halaman

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const text = `Hallo Admin, \nNama Saya : ${name}. \nEmail Saya : ${email}. \nNomor Saya : ${phone}. \nSubject Saya : ${subject}. \nPesan Saya : ${message}`;
  // const text = `Halo, saya ${name},\nEmail: ${email}\nTelepon: ${phone}\nPesan: ${message}`;
  // const encodedText = encodeURIComponent(text);
  // const url = `https://wa.me/${6281540921193}?text=${encodeURIComponent(whatsappMessage)}`;
  // const url = `https://wa.me/6281540921193?text=${encodedText}`;
  const encodedText = encodeURIComponent(text);
  const url = `https://wa.me/6281540921193?text=${encodedText}`;

  window.open(url, '_blank');
  return false; // mencegah form submit
}
// Redirect Whatsapp

// Redirect Whatsapp
// function sendMessageToWhatsApp(event) {
//   event.preventDefault();

//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const phone = document.getElementById('phone').value;
//   const subject = document.getElementById('subject').value;
//   const message = document.getElementById('message').value;

//   const text = `Hallo Admin, \nNama Saya : ${name} \nEmail : ${email} \nNomor : ${phone} \nSubjek : ${subject} \nPesan : ${message}`;
//   const url = `https://wa.me/6281540921193?text=${encodeURIComponent(text)}`;

//   window.open(url, '_blank');
//   return false;
// }
// Redirect Whatsapp
