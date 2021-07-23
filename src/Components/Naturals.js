import React from "react";
import C from "../Components/Keys/key11.mp3";
import D from "../Components/Keys/key12.mp3";
import E from "../Components/Keys/key13.mp3";
import F from "../Components/Keys/key14.mp3";
import G from "../Components/Keys/key15.mp3";
import A from "../Components/Keys/key16.mp3";
import B from "../Components/Keys/key17.mp3";
import C1 from "../Components/Keys/key18.mp3";
import D1 from "../Components/Keys/key19.mp3";
import E1 from "../Components/Keys/key20.mp3";
import F1 from "../Components/Keys/key21.mp3";
import G1 from "../Components/Keys/key22.mp3";
import A1 from "../Components/Keys/key23.mp3";
import B1 from "../Components/Keys/key24.mp3";

export default function Naturals() {
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
  function playE() {
    new Audio(E).play();
  }
  function playB() {
    new Audio(B).play();
  }
  function playE1() {
    new Audio(E1).play();
  }
  function playB1() {
    new Audio(B1).play();
  }

  return (
    <div className="naturals-container">
      <button id="C" onClick={playC}>
        <p></p>
      </button>
      <button id="D" onClick={playD}>
        <p></p>
      </button>
      <button id="E" onClick={playE}>
        <p></p>
      </button>
      <button id="F" onClick={playF}>
        <p></p>
      </button>
      <button id="G" onClick={playG}>
        <p></p>
      </button>
      <button id="A" onClick={playA}>
        <p></p>
      </button>
      <button id="B" onClick={playB}>
        <p></p>
      </button>
      <button id="C1" onClick={playC1}>
        <p></p>
      </button>
      <button id="D1" onClick={playD1}>
        <p></p>
      </button>
      <button id="E1" onClick={playE1}>
        <p></p>
      </button>
      <button id="F1" onClick={playF1}>
        <p></p>
      </button>
      <button id="G1" onClick={playG1}>
        <p></p>
      </button>
      <button id="A1" onClick={playA1}>
        <p></p>
      </button>
      <button id="B1" onClick={playB1}>
        <p></p>
      </button>
    </div>
  );
}
