import React, { useEffect } from "react";

export default function Timer({dispatch, secondRemaining}) {
const mins = Math.floor(secondRemaining / 60);
const sec = secondRemaining % 60;

  useEffect(function () {
   const id= setInterval(function () {
      dispatch({ type: "tick" });
    }, 1000);
    return  ()=>clearInterval(id)
  }, [dispatch  ]);
  return <div className="timer">{mins} : {sec}</div>;
}
