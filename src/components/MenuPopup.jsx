import PropTypes from "prop-types";

import iconClose from "../assets/images/icon-close.svg";
import iconImage from "../assets/images/icon-image.svg";
import iconMusic from "../assets/images/icon-music.svg";
import iconVoice from "../assets/images/icon-voice.svg";
import iconPalette from "../assets/images/icon-palette.svg";

const MenuPopup = ({
  handleMenuPopup,
  handleVoicePopup,
  handleBgmPopup,
  handleBgPopup,
  handleCharPopup,
  stateMenuPopup,
}) => {
  return (
    <>
      {stateMenuPopup ? (
        <div className="fixed inset-0 left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-black bg-opacity-20">
          <div className="fixed top-0 bottom-0 right-0 left-0 z-30 m-auto flex h-[400px] max-h-[90%] w-[480px] max-w-[95%] flex-col items-center justify-start rounded-t-3xl bg-white shadow-xl">
            <button
              className="
            outline-none
            absolute
            top-0
            right-0
            z-50
            flex
            h-8
            w-8
            -translate-x-2
            translate-y-2
            items-center
            justify-center
            rounded-full
            bg-red-400
            shadow-md
            hover:bg-red-600
          "
              onClick={handleMenuPopup}
            >
              <img
                className="h-6 w-6"
                src={iconClose}
                alt="Close"
                width="16px"
                height="16px"
              />
            </button>
            <div className="w-full rounded-t-3xl bg-primary p-5 pb-3">
              <h1 className="text-center text-2xl font-bold text-white">
                Main Menu
              </h1>
            </div>
            <div className="grid grid-cols-2 items-start justify-center gap-10 overflow-y-auto p-5 md:mt-6 md:grid-cols-3">
              <div className="flex flex-col items-center justify-center">
                <button
                  onClick={handleVoicePopup}
                  className="button-shadow outline-none group relative mb-1 flex h-14 w-14 items-center justify-center rounded-full bg-primary"
                >
                  <img
                    className="w-4"
                    src={iconVoice}
                    alt="Voice"
                    width="48"
                    height="48"
                  />
                </button>
                <div className="font-semibold tracking-wide opacity-60">
                  Voice
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <button
                  onClick={handleBgmPopup}
                  className="button-shadow outline-none group relative mb-1 flex h-14 w-14 items-center justify-center rounded-full bg-primary"
                >
                  <img
                    className="w-4"
                    src={iconMusic}
                    alt="Music"
                    width="48"
                    height="48"
                  />
                </button>
                <div className="font-semibold tracking-wide opacity-60">
                  BGM
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <button
                  onClick={handleBgPopup}
                  className="button-shadow outline-none group relative mb-1 flex h-14 w-14 items-center justify-center rounded-full bg-primary"
                >
                  <img
                    className="w-4"
                    src={iconImage}
                    alt="Image"
                    width="48"
                    height="48"
                  />
                </button>
                <div className="font-semibold tracking-wide opacity-60">
                  Background
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <button
                  onClick={handleCharPopup}
                  className="button-shadow outline-none group relative mb-1 flex h-14 w-14 items-center justify-center rounded-full bg-primary"
                >
                  <img
                    className="w-4"
                    src={iconPalette}
                    alt="Palette"
                    width="48"
                    height="48"
                  />
                </button>
                <div className="font-semibold tracking-wide opacity-60">
                  Skins
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

MenuPopup.propTypes = {
  handleMenuPopup: PropTypes.func,
  handleVoicePopup: PropTypes.func,
  handleBgmPopup: PropTypes.func,
  handleBgPopup: PropTypes.func,
  handleCharPopup: PropTypes.func,
  stateMenuPopup: PropTypes.bool,
};

export default MenuPopup;
