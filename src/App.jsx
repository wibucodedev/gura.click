import { useEffect, useRef, useState, useCallback } from "react";

import { firebase } from "./firebase/init.js";
const db = firebase.database();

import bgm1 from "./assets/sounds/bgm1.mp3";
import bgm2 from "./assets/sounds/bgm2.mp3";
import guraclicked1 from "./assets/sounds/guraclicked1.mp3";
import guraclicked2 from "./assets/sounds/guraclicked2.mp3";
import guraclicked3 from "./assets/sounds/guraclicked3.mp3";

import guraClicked from "./assets/images/gura-clicked.webp";
import gura from "./assets/images/gura.webp";
import gura2 from "./assets/images/gura2.webp";
import gura2Clicked from "./assets/images/gura2-clicked.webp";
import gura3 from "./assets/images/gura3.webp";
import gura3Clicked from "./assets/images/gura3-clicked.webp";
import gura4 from "./assets/images/gura4.webp";
import gura4Clicked from "./assets/images/gura4-clicked.webp";
import gura5 from "./assets/images/gura5.webp";
import gura5Clicked from "./assets/images/gura5-clicked.webp";

import Leaderboard from "./components/Leaderboard.jsx";
import NotifPopup from "./components/NotifPopup.jsx";

import MenuPopup from "./components/MenuPopup.jsx";
import SharePopup from "./components/SharePopup.jsx";
import VoicePopup from "./components/VoicePopup.jsx";
import BgmPopup from "./components/BgmPopup.jsx";
import CharPopup from "./components/CharPopup.jsx";

import PrivacyPolicyPopup from "./components/PrivacyPolicyPopup.jsx";

import bgDefault from "./assets/images/bg.svg";
import iconMenu from "./assets/images/icon-menu.svg";
import iconShare from "./assets/images/icon-share.svg";
import gplayBadge from "./assets/images/google-play-badge.png";

import Cropper from "react-easy-crop";
import getCroppedImg from "./utils/cropImage.js";

function App() {
  let dateNow = new Date();
  Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }; // https://stackoverflow.com/a/563442/15151995

  const [bgMenu, setBgMenu] = useState(false);
  const [menuPopup, setMenuPopup] = useState(false);
  const [sharePopup, setSharePopup] = useState(false);
  const [voicePopup, setVoicePopup] = useState(false);
  const [bgmPopup, setBgmPopup] = useState(false);
  const [charPopup, setCharPopup] = useState(false);
  const [policyPopup, setPolicyPopup] = useState(false);
  const [gplayShow, setGplayShow] = useState(false);

  const [bgmFile, setBgmFile] = useState(1);
  const [bgm, setBgm] = useState(bgm1);

  const [voiceFile, setVoiceFile] = useState(1);
  const [voiceG, setVoiceG] = useState(guraclicked1);

  const [guraCharFile, setGuraCharFile] = useState(1);
  const [guraCharG, setGuraCharG] = useState(gura);
  const [guraCharClickedG, setGuraCharClickedG] = useState(guraClicked);

  const [counter, setCounter] = useState(0);
  const [country, setCountry] = useState("ZZ");
  const [soundVoice, setSoundVoice] = useState(true);
  const [soundBgm, setSoundBgm] = useState(false);
  const BgmSound = useRef("");
  const PolicyRef = useRef("");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (window.location.pathname.toLowerCase().includes("policy"))
      setPolicyPopup(true);
  }, [PolicyRef]);

  const getClick = JSON.parse(window.localStorage.getItem("guraClick"));
  useEffect(() => {
    if (getClick == null) {
      window.localStorage.setItem("guraClick", 0);
      setCounter(0);
    } else {
      setCounter(getClick);
    }
  }, []);

  // bgm stuff
  const getBgm = JSON.parse(window.localStorage.getItem("guraBGM"));
  useEffect(() => {
    if (getBgm == null) {
      setBgmFile(1);
    } else {
      setBgmFile(getBgm);
    }
  }, []);
  useEffect(() => {
    if (bgmFile == 2) {
      setBgm(bgm2);
    } else {
      setBgm(bgm1);
    }
    window.localStorage.setItem("guraBGM", bgmFile);
  }, [bgmFile]);

  useEffect(() => {
    updateBGM(bgm);
  }, [bgm]);

  const updateBGM = () => {
    if (BgmSound.current) {
      BgmSound.current.pause();
      BgmSound.current.load();
      BgmSound.current.pause();
      BgmSound.current.currentTime = 0;
      setSoundBgm(false);
    }
  };

  // voice stuff
  let guraSound = new Audio(voiceG);

  const getVoice = JSON.parse(window.localStorage.getItem("guraVoice"));
  useEffect(() => {
    if (getVoice == null) {
      setVoiceFile(1);
    } else {
      setVoiceFile(getVoice);
    }
  }, []);
  useEffect(() => {
    if (voiceFile == 3) {
      setVoiceG(guraclicked3);
    } else if (voiceFile == 2) {
      setVoiceG(guraclicked2);
    } else {
      setVoiceG(guraclicked1);
    }
    window.localStorage.setItem("guraVoice", voiceFile);
  }, [voiceFile]);

  useEffect(() => {
    guraSound = new Audio(voiceG);
  }, [voiceG]);

  // char stuff
  const getChar = JSON.parse(window.localStorage.getItem("guraCharFile"));
  useEffect(() => {
    if (getChar == null) {
      setGuraCharFile(1);
    } else {
      setGuraCharFile(getChar);
    }
  }, []);
  useEffect(() => {
    if (guraCharFile == 5) {
      setGuraCharG(gura5);
      setGuraCharClickedG(gura5Clicked);
    } else if (guraCharFile == 4) {
      setGuraCharG(gura4);
      setGuraCharClickedG(gura4Clicked);
    } else if (guraCharFile == 3) {
      setGuraCharG(gura3);
      setGuraCharClickedG(gura3Clicked);
    } else if (guraCharFile == 2) {
      setGuraCharG(gura2);
      setGuraCharClickedG(gura2Clicked);
    } else {
      setGuraCharG(gura);
      setGuraCharClickedG(guraClicked);
    }
    window.localStorage.setItem("guraCharFile", guraCharFile);
  }, [guraCharFile]);

  // country

  const getCountry = window.localStorage.getItem("guraClickCountry");
  useEffect(() => {
    const fetchCountry = () => {
      // ipinfo.io
      fetch(
        "http" +
          (location.protocol === "https:" ? "s" : "") +
          "://ipinfo.io/country?token=dd0eba5cadaec3"
      )
        .then((response) => {
          if (response.status == 200) {
            return response.text();
          } else {
            localStorage.setItem("guraClickCountry", "ZZ");
            setCountry("ZZ");
            console.log("API ERROR");
          }
        })
        .then((res) => {
          localStorage.setItem(
            "guraClickCountryExp",
            dateNow.addDays(3).getTime() / 1000 // set expire 3 hari
          );
          localStorage.setItem("guraClickCountry", res.trim());
          setCountry(res.trim());
        })
        .catch((err) => {
          localStorage.setItem(
            "guraClickCountryExp",
            dateNow.addDays(1).getTime() / 1000 // set expire 1 hari
          );
          localStorage.setItem("guraClickCountry", "ZZ");
          setCountry("ZZ");
          console.log(err);
        });
    };
    // country
    if (getCountry == null || getCountry.length > 2) {
      fetchCountry();
    } else {
      if (
        dateNow.getTime() / 1000 >
        localStorage.getItem("guraClickCountryExp")
      ) {
        localStorage.removeItem("guraClickCountry");
        localStorage.removeItem("guraClickCountryExp");
        fetchCountry();
      } else {
        setCountry(getCountry);
      }
    }
    // eslint-disable-next-line
  }, []);

  const handleGuraClick = () => {
    if (soundVoice) guraSound.play();
    setIsClicked(true);
    setCounter((val) => val + 1);
    window.localStorage.setItem("guraClick", counter + 1);
    setTimeout(() => setIsClicked(false), 100);
    db.ref(`guraClick/${country}`)
      .child("counter")
      .set(firebase.database.ServerValue.increment(1));
  };

  const toggleSoundBgm = () => {
    setSoundBgm((val) => !val);
    if (!soundBgm) BgmSound.current.play();
    else {
      BgmSound.current.pause();
      BgmSound.current.currentTime = 0;
    }
  };

  const counterEl = useRef("");
  const guraEl = useRef("");

  useEffect(() => {
    counterEl.current.style.transform = "scale(130%)";
    guraEl.current.style.transform = "scale(102%) rotate(-2deg)";
    setTimeout(() => {
      counterEl.current.style.transform = "scale(100%)";
      guraEl.current.style.transform = "scale(100%) rotate(0)";
    }, 100);
  }, [counter]);

  // gplay
  useEffect(() => {
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1;
    if (isAndroid) {
      setGplayShow(true);
    }
  }, []);

  // bg stuff
  const [bgImg, setBgImg] = useState("");
  const [pic, setPic] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const blobToBase64 = (blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise((resolve) => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  }; // https://stackoverflow.com/a/61226119

  const uploadBg = () => {
    document.getElementById("fileBg").click();
  };

  const toggleBgMenu = () => {
    setBgMenu((val) => !val);
  };

  const toggleMenuPopup = () => {
    setMenuPopup((val) => !val);
  };

  const toggleSharePopup = () => {
    setSharePopup((val) => !val);
  };

  const toggleVoicePopup = () => {
    setVoicePopup((val) => !val);
  };

  const toggleBgmPopup = () => {
    setBgmPopup((val) => !val);
  };

  const toggleCharPopup = () => {
    setCharPopup((val) => !val);
  };

  const togglePolicyPopup = () => {
    if (window.location.pathname.toLowerCase().includes("policy"))
      history.pushState({}, "", "/");
    setPolicyPopup((val) => !val);
  };

  const resetBG = () => {
    window.localStorage.setItem("guraClickBG", bgDefault);
    setBgImg(bgDefault);
    toggleBgMenu();
    setPic(null);
    window.location.reload();
  };

  const cancelCroppedImge = () => {
    toggleBgMenu();
    setPic(null);
  };

  const getBgImg = window.localStorage.getItem("guraClickBG");
  useEffect(() => {
    if (getBgImg == null) {
      window.localStorage.setItem("guraClickBG", bgDefault);
      setBgImg(bgDefault);
    } else {
      setBgImg(getBgImg);
    }
    // eslint-disable-next-line
  }, []);
  const bodyElem = document.getElementsByTagName("body")[0];
  // bodyElem.style.background =
  //  "url(" + bgImg + ") no-repeat center center fixed";
  //bodyElem.classList.add("guraClickBG_setBG");
  if (bgImg != "") {
    bodyElem.style.setProperty(
      "background",
      "url(" + bgImg + ") no-repeat center center fixed",
      "important"
    );
    bodyElem.style.setProperty("-webkit-background-size", "cover", "important");
    bodyElem.style.setProperty("-moz-background-size", "cover", "important");
    bodyElem.style.setProperty("-o-background-size", "cover", "important");
    bodyElem.style.setProperty("background-size", "cover", "important");
    bodyElem.style.setProperty("background-color", "#EBECF1", "important");
  }

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setPic(reader.result);
      });
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(pic, croppedArea);
      fetch(croppedImage)
        .then((res) => res.blob())
        .then((blob) => blobToBase64(blob))
        .then((base64Image) =>
          window.localStorage.setItem("guraClickBG", base64Image)
        );
      setBgMenu(false);
      setBgImg(croppedImage);
      window.localStorage.setItem("guraClickBG", bgImg);
      setPic(null);
    } catch (e) {
      console.error(e);
    }
  }, [bgImg, croppedArea, pic]);

  return (
    <main className="grid justify-center overflow-hidden pt-2 font-quicksand">
      {!bgImg.includes("assets") ? (
        <div className="fixed inset-0 bg-black opacity-20"></div>
      ) : null}
      <div className="fixed inset-0 opacity-60"></div>
      <div className="pointer-events-none relative z-10 mt-20 text-center mt-20 md:mt-5">
        <h1 className="outline-gura text-6xl font-bold text-primary md:text-7xl">
          GURA CLICK
        </h1>
        <h2
          ref={counterEl}
          className="outline-score text-6xl font-bold text-second md:text-7xl py-5"
        >
          {counter}
        </h2>
      </div>
      <div className="fixed top-3 right-5 z-20 flex items-center gap-5">
        {gplayShow ? (
          <a
            href="https://play.google.com/store/apps/details?id=com.wibucode.guraclick&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            className="button-shadow outline-none group relative flex h-12 w-32 items-center justify-center rounded bg-primary"
            target="blank"
          >
            <img
              className="w-full"
              src={gplayBadge}
              alt="Download on PlayStore"
              width="646"
              height="250"
            />
            <div className="absolute top-full left-1/2 mt-2 hidden w-max -translate-x-1/2 rounded bg-primary px-2 text-white group-hover:block">
              Download on PlayStore
            </div>
          </a>
        ) : null}
        <button
          onClick={toggleSharePopup}
          className="button-shadow outline-none group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary"
        >
          <img
            className="w-6 md:w-7"
            src={iconShare}
            alt="Share"
            width="48"
            height="48"
          />
          <div className="absolute top-full left-1/2 mt-2 hidden w-max -translate-x-1/2 rounded bg-primary px-2 text-white group-hover:block">
            Share
          </div>
        </button>
        <button
          onClick={toggleMenuPopup}
          className="button-shadow outline-none group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary"
        >
          <img
            className="w-6 md:w-7"
            src={iconMenu}
            alt="Share"
            width="48"
            height="48"
          />
          <div className="absolute top-full left-1/2 mt-2 hidden w-max -translate-x-1/2 rounded bg-primary px-2 text-white group-hover:block">
            Menu
          </div>
        </button>
      </div>
      <div className="pointer-events-none fixed inset-0 grid items-end justify-center">
        {isClicked ? (
          <img
            ref={guraEl}
            className="pointer-events-auto h-auto w-full transition-transform duration-75 md:w-[450px]"
            onClick={handleGuraClick}
            src={guraCharClickedG}
            alt="gura"
          />
        ) : (
          <img
            ref={guraEl}
            className="pointer-events-auto h-auto w-full transition-transform duration-75 md:w-[450px]"
            onClick={handleGuraClick}
            src={guraCharG}
            alt="gura"
          />
        )}
      </div>
      <Leaderboard />
      <audio ref={BgmSound} loop autoPlay>
        <source src={bgm} />
      </audio>
      <img className="hidden" src={guraClicked} alt="gura" />
      {bgMenu ? (
        <div className="fixed inset-0 left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-black bg-opacity-70">
          <div className="dark:bg-black-selene relative m-0 m-auto h-auto w-[80%] max-w-[480px] bg-white text-center font-bold">
            <div className="h-12 bg-blue-600"></div>
            <div className="p-5">
              <h5 className="mt-2 mb-4 ml-1 text-left text-xl font-bold">
                Information
              </h5>
              <h3>This will changes the appearance of the background.</h3>
              <div className="mt-5 flex flex-col items-center justify-center">
                <div className="flex w-full items-center justify-center">
                  <button
                    className="font-lg outline-none flex h-[48px] w-80 items-center justify-center rounded-lg border-b-[4px] border-blue-600 bg-blue-400 p-5 font-bold text-white focus:border-b-[1px] dark:border-blue-600 dark:bg-blue-400 dark:text-white dark:focus:border-b-[1px]"
                    onClick={uploadBg}
                  >
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.999 0H1.99902C0.896023 0 -0.000976562 0.897 -0.000976562 2V14C-0.000976562 15.103 0.896023 16 1.99902 16H17.999C19.102 16 19.999 15.103 19.999 14V2C19.999 0.897 19.102 0 17.999 0ZM4.49902 3C4.89685 3 5.27838 3.15804 5.55968 3.43934C5.84099 3.72064 5.99902 4.10218 5.99902 4.5C5.99902 4.89782 5.84099 5.27936 5.55968 5.56066C5.27838 5.84196 4.89685 6 4.49902 6C4.1012 6 3.71967 5.84196 3.43836 5.56066C3.15706 5.27936 2.99902 4.89782 2.99902 4.5C2.99902 4.10218 3.15706 3.72064 3.43836 3.43934C3.71967 3.15804 4.1012 3 4.49902 3ZM9.99902 13H2.99902L6.99902 8L8.49902 10L11.499 6L16.999 13H9.99902Z"
                        fill="white"
                      />
                    </svg>
                    <span className="ml-2">Select File</span>
                  </button>
                </div>
                <div className="mt-5">
                  <button
                    className="outline-none m-0 ml-4 h-[48px] rounded border border-black border-opacity-0 bg-white px-4 py-2 font-bold text-opacity-60 hover:border-opacity-20 hover:text-[#68b6fc] focus:border-opacity-80 focus:text-[#0d0d0d] dark:bg-[#232323] dark:text-gray-400 dark:hover:border-opacity-0 dark:hover:text-white"
                    onClick={resetBG}
                  >
                    Reset
                  </button>
                  <button
                    className="outline-none m-0 ml-4 h-[48px] rounded border border-black border-opacity-0 bg-white px-4 py-2 font-bold text-opacity-60 hover:border-opacity-20 hover:text-[#68b6fc] focus:border-opacity-80 focus:text-[#0d0d0d] dark:bg-[#232323] dark:text-gray-400 dark:hover:border-opacity-0 dark:hover:text-white"
                    onClick={toggleBgMenu}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <input
        name="selectfile"
        type="file"
        id="fileBg"
        accept="image/*"
        hidden
        onChange={onSelectFile}
        onClick={(event) => {
          event.target.value = null;
        }}
      />
      {pic ? (
        <div className="fixed top-0 left-0 z-40 flex h-[100vh] w-[100vw] flex-col items-center justify-center">
          <div className="top-0 h-[70vh] bg-black bg-opacity-90">
            <Cropper
              image={pic}
              crop={crop}
              zoom={zoom}
              aspect={1 / 1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <div className="z-50 flex h-[30%] w-full items-center justify-center gap-4 bg-black bg-opacity-90">
            <button
              onClick={showCroppedImage}
              className="font-lg outline-none flex h-[48px] items-center justify-center rounded-lg border-b-[4px] border-blue-600 bg-blue-400 p-5 font-bold text-white focus:border-b-[1px] dark:border-blue-600 dark:bg-blue-400 dark:text-white dark:focus:border-b-[1px]"
            >
              Take
            </button>
            <button
              onClick={cancelCroppedImge}
              className="font-lg outline-none flex h-[48px] items-center justify-center rounded-lg border-b-[4px] border-red-600 bg-red-400 p-5 font-bold text-white focus:border-b-[1px] dark:border-red-600 dark:bg-red-400 dark:text-white dark:focus:border-b-[1px]"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}
      <NotifPopup />
      <MenuPopup
        handleMenuPopup={toggleMenuPopup}
        handleVoicePopup={toggleVoicePopup}
        handleBgmPopup={toggleBgmPopup}
        handleBgPopup={toggleBgMenu}
        handleCharPopup={toggleCharPopup}
        stateMenuPopup={menuPopup}
      />
      <SharePopup
        handleSharePopup={toggleSharePopup}
        stateSharePopup={sharePopup}
      />
      <VoicePopup
        handleVoicePopup={toggleVoicePopup}
        stateVoicePopup={voicePopup}
        stateVoiceFile={voiceFile}
        changerVoiceFile={setVoiceFile}
        stateEnable={soundVoice}
        handleEnable={setSoundVoice}
      />
      <BgmPopup
        handleBgmPopup={toggleBgmPopup}
        stateBgmPopup={bgmPopup}
        stateBgmFile={bgmFile}
        changerBgmFile={setBgmFile}
        stateEnable={soundBgm}
        handleEnable={toggleSoundBgm}
      />
      <CharPopup
        handleCharPopup={toggleCharPopup}
        stateCharPopup={charPopup}
        stateCharFile={guraCharFile}
        changerCharFile={setGuraCharFile}
      />
      <PrivacyPolicyPopup
        innerRef={PolicyRef}
        handlePolicyPopup={togglePolicyPopup}
        statePolicyPopup={policyPopup}
      />
    </main>
  );
}

export default App;
