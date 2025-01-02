

function logout( nav) {
  
  window.localStorage.removeItem("tiki-user");
  document.cookie = 'tiki-user' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

  nav("/sign-in");
}
export default logout