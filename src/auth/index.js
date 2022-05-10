export const isAuthenticated = () => {
  let getToken = window.localStorage.getItem("@Doit:Token");
  console.log(getToken);

  if (getToken) {
    return true;
  } else {
    return false;
  }
};
