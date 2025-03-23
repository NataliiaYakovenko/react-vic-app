/*
useEffect=()=>{
    Effect після кожного render,  це є componentDidMount і це є componentDidApdate

    return = () => {    
    Cкидання Effect перед наступним render або перед розмантуванням (componentVillAnmount)
   
    }, [перелік залежностей]

    }

    Якщо [перелік залежностей] порожній  це componentDidMount і це componentVillAnmount
//==========================================================================================

Ефекти, які не потребують скидання:
    - підвантаження інформаціїї api
    - логування
    - звернення до DOM

Ефекти, які потребують скидання:
    - навішування та відписування обробників подій
    - setTimeout / setInterval
*/

import React, { useEffect } from "react";
import { useState } from "react";

function ClickerCounterHuk() {
  const [clickCount, setClicCount] = useState(0);

  useEffect(() => {
    //функція викликається після кожного render,  це є componentDidMount і це є componentDidApdate
    document.title = clickCount;
  }, [clickCount]);

  const handlerClick = () => {
    setClicCount((clickCount) => clickCount + 1);
  };

  useEffect(() => {
    document.body.addEventListener("click", handlerClick);

    //функція для скидання ефекту
    return () => {
      document.body.removeEventListener("click", handlerClick);
    };
  }, []);

  return <div>{clickCount}</div>;
}

export default ClickerCounterHuk;
