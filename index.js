const YOUR_CLIENT_ID = "1078436786302357625";
const YOUR_REDIRECT_URI = "hhttps://merogames.github.io/;
const YOUR_CLIENT_SECRET = "u18hqq7JsXuk1Nr3zxAqtBZ3vcOBwX-c";
const DISCORD_API_BASE_URL = "https://discord.com/api";

let accessToken = "";

function login() {
  window.location.href = `${DISCORD_API_BASE_URL}/oauth2/authorize?client_id=${YOUR_CLIENT_ID}&redirect_uri=${YOUR_REDIRECT_URI}&response_type=code&scope=identify`;
}

function logout() {
  accessToken = "";
  document.getElementById("logout-btn").style.display = "none";
  document.getElementById("profile-btn").style.display = "none";
  document.getElementById("login-btn").style.display = "block";
}

function getUserInfo() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${DISCORD_API_BASE_URL}/users/@me`);
  xhr.setRequestHeader("Authorization", `Bearer ${accessToken}`);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const userInfo = JSON.parse(xhr.responseText);
      const username = userInfo.username + "#" + userInfo.discriminator;
      const avatarUrl = `https://cdn.discordapp.com/avatars/${userInfo.id}/${userInfo.avatar}.png?size=256`;
      document.getElementById("profile-btn").innerText = username;
      document.getElementById("profile-btn").style.display = "block";
      const img = document.createElement("img");
      img.src = avatarUrl;
      document.getElementById("profile-btn").appendChild(img);
      document.getElementById("login-btn").style.display = "none";
      document.getElementById("logout-btn").style.display = "block";
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.send();
}

function login() {
  window.location.href = "https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID_HERE&redirect_uri=YOUR_REDIRECT_URI_HERE&response_type=code&scope=identify";
}

function logout() {
  localStorage.removeItem("discord_token");
  localStorage.removeItem("discord_user");
  window.location.reload();
}

function updateLoginState() {
  const discordUser = JSON.parse(localStorage.getItem("discord_user"));

  if (discordUser) {
    // user is logged in
    document.getElementById("login-btn").style.display = "none";
    document.getElementById("profile-btn").style.display = "block";
    document.getElementById("logout-btn").style.display = "block";
    document.getElementById("profile-btn").innerHTML = discordUser.username;

  } else {
    // user is not logged in
    document.getElementById("login-btn").style.display = "block";
    document.getElementById("profile-btn").style.display = "none";
    document.getElementById("logout-btn").style.display = "none";
  }
}

function loadProfile() {
  const discordUser = JSON.parse(localStorage.getItem("discord_user"));

  if (discordUser) {
    const avatarUrl = `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`;
    document.getElementById("avatar").src = avatarUrl;
    document.getElementById("username").innerHTML = discordUser.username;
  }
}

window.onload = function () {
  updateLoginState();
  loadProfile();
};

document.getElementById("login-btn").addEventListener("click", login);
document.getElementById("logout-btn").addEventListener("click", logout);
