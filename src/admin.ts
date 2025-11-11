// Admin dashboard functionality
// Note: Firebase auth would be imported here when configured

// Logout functionality
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', async () => {
    // Firebase signout would go here
    window.location.href = '/admin-login.html';
  });
}
