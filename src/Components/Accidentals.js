import React from "react";
import C from "../Components/Keys/key01.mp3";
import D from "../Components/Keys/key02.mp3";
import F from "../Components/Keys/key03.mp3";
import G from "../Components/Keys/key04.mp3";
import A from "../Components/Keys/key05.mp3";
import C1 from "../Components/Keys/key06.mp3";
import D1 from "../Components/Keys/key07.mp3";
import F1 from "../Components/Keys/key08.mp3";
import G1 from "../Components/Keys/key09.mp3";
import A1 from "../Components/Keys/key10.mp3";

export default function Accidental() {
  function playC() {
    new Audio(C).play();
  }
  function playD() {
    new Audio(D).play();
  }
  function playF() {
    new Audio(F).play();
  }
  function playG() {
    new Audio(G).play();
  }
  function playA() {
    new Audio(A).play();
  }
  function playC1() {
    new Audio(C1).play();
  }
  function playD1() {
    new Audio(D1).play();
  }
  function playF1() {
    new Audio(F1).play();
  }
  function playG1() {
    new Audio(G1).play();
  }
  function playA1() {
    new Audio(A1).play();
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "A" || event.key === "a") playA();
  });

  return (
    <div className="accidentals-container">
      <button className="C" onClick={playC}></button>
      <button clasNames="D" onClick={playD}></button>
      <button className="F" onClick={playF}></button>
      <button className="G" onClick={playG}></button>
      <button className="A" onClick={playA}></button>
      <button className="C1" onClick={playC1}></button>
      <button className="D1" onClick={playD1}></button>
      <button className="F1" onClick={playF1}></button>
      <button className="G1" onClick={playG1}></button>
      <button className="A1" onClick={playA1}></button>
    </div>
  );
}
