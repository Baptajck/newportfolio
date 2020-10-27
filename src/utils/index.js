import { useState, useEffect } from 'react';

/**
  * function permettant de voir la largeur/hauteur de la page et de mettre ce que l'on souhaite
  * On peut changer les chiffres pour avoir le rapport qu'on souhaite
  */
export const useWindowSize = () => {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState({
    width: isSSR && window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  const changeWindowSize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}