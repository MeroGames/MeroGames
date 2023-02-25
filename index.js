const YOUR_CLIENT_ID = "1078436786302357625";
const YOUR_REDIRECT_URI = "hhttps://merogames.github.io/;
const YOUR_CLIENT_SECRET = "u18hqq7JsXuk1Nr3zxAqtBZ3vcOBwX-c";

// Function to handle login with Discord
function login() {
  window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${YOUR_CLIENT_ID}&redirect_uri=${YOUR_REDIRECT_URI}&response_type=code&scope=identify`;
}

// Function to handle logout
function logout() {
  localStorage.removeItem('token');
  location.reload();
}

// Function to fetch user data
async function fetchUserData(token) {
  const response = await fetch('https://discord.com/api/users/@me', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const userData = await response.json();
  return userData;
}

// Function to display user data
async function displayUserData() {
  const token = localStorage.getItem('token');
  if (!token) {
    return;
  }
  const userData = await fetchUserData(token);
  const profileButton = document.createElement('button');
  const logoutButton = document.createElement('button');
  const profileImg = document.createElement('img');
  const profileName = document.createElement('span');

  profileButton.classList.add('button');
  profileButton.innerHTML = "Profile";
  profileButton.onclick = function() {
    window.location.href = "profile.html";
  };

  logoutButton.classList.add('button');
  logoutButton.innerHTML = "Logout";
  logoutButton.onclick = logout;

  profileImg.src = `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`;
  profileImg.alt = "Profile Image";
  profileImg.classList.add('profile-img');

  profileName.innerHTML = userData.username;
  profileName.classList.add('profile-name');

  const profileContainer = document.getElementById('profile-container');
  profileContainer.appendChild(profileButton);
  profileContainer.appendChild(logoutButton);
  profileContainer.appendChild(profileImg);
  profileContainer.appendChild(profileName);
}

// Event listener for the login button
const loginBtn = document.getElementById('login-btn');
if (loginBtn) {
  loginBtn.addEventListener('click', login);
}

// Event listener for displaying user data on page load
window.addEventListener('load', displayUserData);
