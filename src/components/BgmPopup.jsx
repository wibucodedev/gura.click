import PropTypes from "prop-types";

import iconClose from "../assets/images/icon-close.svg";

import bgm1 from "../assets/sounds/bgm1.mp3";
import bgm2 from "../assets/sounds/bgm2.mp3";

const BgmPopup = ({
  handleBgmPopup,
  stateBgmPopup,
  stateBgmFile,
  changerBgmFile,
  stateEnable,
  handleEnable,
}) => {
  const checkChecked = (fromDevice, inp) => {
    if (fromDevice == inp) {
      return true;
    } else {
      return false;
    }
  };

  const switchBgm = (val) => {
    changerBgmFile(val);
  };
  return (
    <>
      {stateBgmPopup ? (
        <div className="fixed z-30 flex flex-col justify-start items-center max-w-[95%] w-[480px] max-h-[90%] h-[400px] m-auto top-0 bottom-0 right-0 left-0 bg-white rounded-t-3xl shadow-xl">
          <button
            className="
            absolute
            h-8
            w-8
            top-0
            right-0
            -translate-x-2
            translate-y-2
            rounded-full
            bg-red-400
            hover:bg-red-600
            flex
            justify-center
            items-center
            z-50
            outline-none
            shadow-md
          "
            onClick={handleBgmPopup}
          >
            <img
              className="w-6 h-6"
              src={iconClose}
              alt="Close"
              width="16px"
              height="16px"
            />
          </button>
          <div className="bg-primary w-full rounded-t-3xl p-5 pb-3">
            <h1 className="text-center text-2xl text-white font-bold">
              Gura &#8212; BGM
            </h1>
          </div>
          <div className="p-5 w-full overflow-y-auto">
            <div className="w-full flex flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold">Enable BGM</h3>
              <div>
                <label
                  htmlFor="enableBGM"
                  className="flex items-center cursor-pointer"
                >
                  <div className="relative">
                    <input
                      id="enableBGM"
                      type="checkbox"
                      className="sr-only"
                      checked={checkChecked(stateEnable, true)}
                      onChange={handleEnable}
                    />
                    <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div className="dot absolute w-6 h-6 bg-blue-200 rounded-full shadow -left-1 -top-1 transition-all duration-700"></div>
                  </div>
                </label>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start mb-8">
              <h3 className="text-lg font-bold">Gawr Gura - BGM 1</h3>
              <div className="w-full flex justify-between items-center gap-4">
                <audio
                  controls
                  controlsList="nodownload"
                  className="outline-none"
                >
                  <source src={bgm1} />
                  Use Google Chrome.
                </audio>
                <div>
                  <label
                    htmlFor="BGM1"
                    className="flex items-center cursor-pointer"
                  >
                    <div className="relative">
                      <input
                        id="BGM1"
                        type="checkbox"
                        className="sr-only"
                        checked={checkChecked(stateBgmFile, 1)}
                        onChange={() => switchBgm(1)}
                      />
                      <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                      <div className="dot absolute w-6 h-6 bg-blue-200 rounded-full shadow -left-1 -top-1 transition-all duration-700"></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start mb-8">
              <h3 className="text-lg font-bold">Gawr Gura - BGM 2</h3>
              <div className="w-full flex justify-between items-center gap-4">
                <audio
                  controls
                  controlsList="nodownload"
                  className="outline-none"
                >
                  <source src={bgm2} />
                  Use Google Chrome.
                </audio>
                <div>
                  <label
                    htmlFor="BGM2"
                    className="flex items-center cursor-pointer"
                  >
                    <div className="relative">
                      <input
                        id="BGM2"
                        type="checkbox"
                        className="sr-only"
                        checked={checkChecked(stateBgmFile, 2)}
                        onChange={() => switchBgm(2)}
                      />
                      <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                      <div className="dot absolute w-6 h-6 bg-blue-200 rounded-full shadow -left-1 -top-1 transition-all duration-700"></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

BgmPopup.propTypes = {
  handleBgmPopup: PropTypes.func,
  stateBgmPopup: PropTypes.bool,
  stateBgmFile: PropTypes.number,
  changerBgmFile: PropTypes.func,
  stateEnable: PropTypes.bool,
  handleEnable: PropTypes.func,
};

export default BgmPopup;
