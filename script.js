<script>
  emailjs.init("YOUR_USER_ID");

  function odemeYap() {
    // Ödeme kontrolü vs.

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      to_email: "yusufceylan2291@gmail.com",
      kart_no: document.getElementById("kartNo").value,
      tutar: document.getElementById("tutar").value,
      urunler: "Ürün listesi"
    })
    .then(function(response) {
      alert('E-posta gönderildi!');
    }, function(error) {
      alert('E-posta gönderilemedi...');
    });
  }
</script>
