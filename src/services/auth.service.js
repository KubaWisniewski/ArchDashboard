const authService = {
  login,
  logout
};

async function login() {
  return {
    loggedIn: true
  };
}
async function logout() {
  return {
    loggedIn: false
  };
}
export default authService;
