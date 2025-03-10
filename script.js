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

// Online kullanıcıları listele
app.get("/online-users", (req, res) => {
  res.json({ onlineUsers });
});

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor...`);
});
const joinButton = document.getElementById("joinButton");

// Click event'i (masaüstü ve mobil için)
joinButton.addEventListener("click", joinTournament);

// Touch event'i (mobil için)
joinButton.addEventListener("touchend", joinTournament);
