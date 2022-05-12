export const isAuthenticated = () => {
  let getToken = window.localStorage.getItem("@Doit:Token");
  let getUser = window.localStorage.getItem("@Doit:User");

  if (getToken && getUser) {
    return true;
  } else {
    return false;
  }
};
