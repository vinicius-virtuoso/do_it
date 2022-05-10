import { useEffect, useState } from "react";
import Rotas from "./routes/Rotas";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    console.log(window.localStorage.getItem("Token"));
    if (window.localStorage.getItem("Token") === "true") {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return (
    <>
      <Rotas isAuth={isAuth} setIsAuth={setIsAuth} />
    </>
  );
}

export default App;
