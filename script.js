// Kullanıcı verileri (ID ve HL bakiyesi)
const users = {
  "6239818143926927": 0,  // Örnek kullanıcı: ID 1234567890123456, bakiye 100 HL
  "7237223092839246": 0,  // Örnek kullanıcı: ID 1234567890123456, bakiye 100 HL
  "7327239320201653": 0,  // Örnek kullanıcı: ID 1234567890123456, bakiye 100 HL
  "2873979162837741": 0,  // Örnek kullanıcı: ID 1234567890123456, bakiye 100 HL
  "3264916291938302": 0,  // Örnek kullanıcı: ID 1234567890123456, bakiye 100 HL



};

// Bakiye kontrolü
function checkBalance() {
  const userId = document.getElementById('userId').value;
  if (users[userId] !== undefined) {
    document.getElementById('balanceResult').innerText = `Bakiyeniz: ${users[userId]} HL`;
  } else {
    alert('Geçersiz kullanıcı numarası!');
  }
}

// Ürün satın alma
function buyProduct(price, productName) {
  const userId = document.getElementById('userId').value;
  if (!userId || users[userId] === undefined) {
    alert('Lütfen geçerli bir kullanıcı numarası girin.');
    return;
  }

  if (users[userId] >= price) {
    users[userId] -= price;
    alert(`Satın alma işlemi başarılı! ${productName} satın alındı. Kalan bakiyeniz: ${users[userId]} HL`);
    sendEmail(price, productName);
  } else {
    alert('Yetersiz bakiye!');
  }
}

// E-posta gönderme (simüle edilmiş)
function sendEmail(price, productName) {
  const email = 'yusufceylan2291@gmail.com';
  const subject = 'HLK Kulübü - Satın Alma Bildirimi';
  const body = `${productName} ürünü ${price} HL tutarında satın alındı.`;

  // Bu kısım backend ile gerçekleştirilmelidir.
  console.log(`E-posta gönderildi: ${email}\nKonu: ${subject}\nMesaj: ${body}`);
  alert('Satın alma bildirimi e-posta olarak gönderildi.');
}