// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let onlineUsers = [];

// Kullanıcıyı online listesine ekle
app.post("/join", (req, res) => {
  const { username } = req.body;
  if (!onlineUsers.includes(username)) {
    onlineUsers.push(username);
  }
  res.json({ onlineUsers });
});

// Kullanıcıyı online listesinden çıkar
app.post("/leave", (req, res) => {
  const { username } = req.body;
  onlineUsers = onlineUsers.filter(user => user !== username);
  res.json({ onlineUsers });
});

const joinButton = document.getElementById("joinButton");

if (joinButton) {
  joinButton.addEventListener("click", function () {
    alert("Butona tıklandı!");
    joinTournament();
  });

  joinButton.addEventListener("touchend", function (e) {
    e.preventDefault(); // Mobil tarayıcıların varsayılan davranışını engelle
    alert("Butona dokunuldu!");
    joinTournament();
  });
} else {
  console.error("Buton bulunamadı!");
}
