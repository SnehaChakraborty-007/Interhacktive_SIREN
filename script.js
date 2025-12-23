// ---------------- Firebase Imports ----------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// ---------------- Firebase Configuration ----------------
const firebaseConfig = {
  apiKey: "AIzaSyB5_MvGGuMHdf_CECJIRh6JvCTbNBcZXL0",
  authDomain: "interhacktive-siren.firebaseapp.com",
  databaseURL: "https://interhacktive-siren-default-rtdb.firebaseio.com",
  projectId: "interhacktive-siren",
  storageBucket: "interhacktive-siren.firebasestorage.app",
  messagingSenderId: "220155206084",
  appId: "1:220155206084:web:ab9a783ad2005cf2802c91"
};

// ---------------- Initialize Firebase ----------------
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// ---------------- Siren Toggle ----------------
let isPlaying = false;

window.aud_play = function () {
  const audio = document.getElementById("myAudio");
  if (!audio) return;

  if (!isPlaying) {
    audio.play();
    isPlaying = true;
  } else {
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
  }
};

// ---------------- Form Submission ----------------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const messageInput = document.getElementById("inputText");
    const message = messageInput.value.trim();
    const time = new Date().toLocaleString();

    if (!message) {
      alert("Please enter a message");
      return;
    }

    const messagesRef = ref(database, "distress_messages");

    push(messagesRef, {
      message: message,
      time: time
    }).then(() => {
      messageInput.value = "";
      window.location.href = "direct.html";
    }).catch((error) => {
      console.error("Error saving message:", error);
    });
  });
});
