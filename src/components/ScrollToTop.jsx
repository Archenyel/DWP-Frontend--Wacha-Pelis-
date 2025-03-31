import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//este componente se encarga de hacer scroll al inicio de la pagina cuando se cambia de ruta
//es un hook que se ejecuta cada vez que cambia la ruta y hace scroll al inicio de la pagina
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
