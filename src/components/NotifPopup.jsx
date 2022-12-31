import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

import gunGura from "../assets/images/gun-gura.svg";
import iconConfetti from "../assets/images/icon-confetti.svg";
import iconClose from "../assets/images/icon-close.svg";

import popPop from "../assets/sounds/pop.mp3";
import cheer from "../assets/sounds/cheer.mp3";

const NotifPopup = () => {
  const [msg, setMsg] = useState("");
  const { width, height } = useWindowSize();
  const popSound = new Audio(popPop);
  const cheerSound = new Audio(cheer);
  let handleGuraClick = window.localStorage.getItem("guraClick");
  useEffect(() => {
    let ids = document.querySelector("#notnot");
    function callConfetti() {
      setTimeout(() => {
      cheerSound.play();
      }, 200)
    }
    if (handleGuraClick == 500) {
      ids.classList.remove("hidden");
      setMsg("500");
      popSound.play();
      callConfetti();
    } else if (handleGuraClick == 1000) {
      ids.classList.remove("hidden");
      setMsg("1K");
      popSound.play();
      callConfetti();
    } else if (handleGuraClick == 5000) {
      ids.classList.remove("hidden");
      setMsg("5K");
      popSound.play();
      callConfetti();
    } else if (handleGuraClick == 10000) {
      ids.classList.remove("hidden");
      setMsg("10K");
      popSound.play();
      callConfetti();
    } else if (handleGuraClick == 50000) {
      ids.classList.remove("hidden");
      setMsg("50K");
      popSound.play();
      callConfetti();
    } else if (handleGuraClick == 100000) {
      ids.classList.remove("hidden");
      setMsg("100K");
      popSound.play();
      callConfetti();
    } else if (handleGuraClick == 500000) {
      ids.classList.remove("hidden");
      setMsg("500K");
      popSound.play();
      callConfetti();
    } else if (handleGuraClick == 1000000) {
      ids.classList.remove("hidden");
      setMsg("1M");
      popSound.play();
      callConfetti();
    } else if (handleGuraClick == 5000000) {
      ids.classList.remove("hidden");
      setMsg("5M");
      popSound.play();
      callConfetti();
    } else if (handleGuraClick == 50000000) {
      ids.classList.remove("hidden");
      setMsg("50M");
      popSound.play();
      callConfetti();
    } else {
      setMsg("");
      ids.classList.add("hidden");
    }
  }, [handleGuraClick]);

  const toggleClose = () => {
    document.querySelector("#notnot").classList.add("hidden");
  };

  return (
    <div
      className="
        w-screen
        h-screen
        flex
        justify-center
        place-items-center
        fixed
        top-0
        right-0
        bg-black bg-opacity-70
        z-30
        hidden
      "
      id="notnot"
    >
      <div className="flex flex-col place-content-center bg-white relative max-w-[85%] w-[480px]">
        <button
          className="
            absolute
            h-8
            w-8
            top-0
            right-0
            translate-x-2
            -translate-y-2
            rounded-full
            bg-red-500
            hover:bg-red-600
            flex
            justify-center
            items-center
            z-40
            outline-none
            shadow-md
          "
          onClick={toggleClose}
        >
          <img
            className="w-6 h-6"
            src={iconClose}
            alt="Close"
            width="16px"
            height="16px"
          />
        </button>
        <div
          className="h-36 bg-blue-600"
        ></div>
        <div className="-mt-28 flex items-center justify-center">
          <img
            className="w-48 h-48"
            src={gunGura}
            alt="Close"
            width="128px"
            height="128px"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-5 mb-4">
          <h1 className="text-3xl font-semibold text-blue-600 tracking-wide break-all mb-4">
            Congratulations
          </h1>
          <div className="flex justify-between items-center">
            <div className="mr-2">
              <img
                className="w-12 h-12 -mt-2"
                src={iconConfetti}
                alt="Congrats!"
                width="48px"
                height="48px"
              />
            </div>
            <div className="">
              <span className="text-5xl font-bold text-red-400">{msg}</span>
              <span className="text-lg font-bold text-red-400">.click</span>
            </div>
          </div>
        </div>
      </div>
      <Confetti width={width} height={height} numberOfPieces={40} />
    </div>
  );
};

NotifPopup.propTypes = {
  handleGuraClick: PropTypes.any,
};

export default NotifPopup;
