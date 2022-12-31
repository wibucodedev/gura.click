import PropTypes from "prop-types";

import iconClose from "../assets/images/icon-close.svg";

import gura from "../assets/images/gura.webp";
import gura2 from "../assets/images/gura2.webp";
import gura3 from "../assets/images/gura3.webp";
import gura4 from "../assets/images/gura4.webp";
import gura5 from "../assets/images/gura5.webp";

const CharPopup = ({
  handleCharPopup,
  stateCharPopup,
  stateCharFile,
  changerCharFile,
}) => {
  const checkChecked = (fromDevice, inp) => {
    if (fromDevice == inp) {
      return true;
    } else {
      return false;
    }
  };

  const switchChar = (val) => {
    changerCharFile(val);
  };
  return (
    <>
      {stateCharPopup ? (
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
            onClick={handleCharPopup}
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
              Gura &#8212; Skins
            </h1>
          </div>
          <div className="w-full overflow-y-auto p-5">
            <div className="mb-8 flex w-full flex-col items-start justify-start">
              <h3 className="text-lg font-bold">Gawr Gura - 1</h3>
              <div className="flex w-full items-center justify-between gap-4">
                <div className="h-auto w-[84px]">
                  <img
                    src={gura}
                    className="h-full w-full object-cover"
                    alt="Gura 1"
                    width="128"
                    height="128"
                  />
                </div>
                <div>
                  <label
                    htmlFor="gura1"
                    className="flex cursor-pointer items-center"
                  >
                    <div className="relative">
                      <input
                        id="gura1"
                        type="checkbox"
                        className="sr-only"
                        checked={checkChecked(stateCharFile, 1)}
                        onChange={() => switchChar(1)}
                      />
                      <div className="h-4 w-10 rounded-full bg-gray-400 shadow-inner"></div>
                      <div
                        className="
                            dot
                            absolute
                            -left-1
                            -top-1
                            h-6
                            w-6
                            rounded-full
                            bg-blue-200
                            shadow
                            transition-all
                            duration-700
                      "
                      ></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-8 flex w-full flex-col items-start justify-start">
              <h3 className="text-lg font-bold">Gawr Gura - 2</h3>
              <div className="flex w-full items-center justify-between gap-4">
                <div className="h-auto w-[84px]">
                  <img
                    src={gura2}
                    className="h-full w-full object-cover"
                    alt="Gura 2"
                    width="128"
                    height="128"
                  />
                </div>
                <div>
                  <label
                    htmlFor="gura2"
                    className="flex cursor-pointer items-center"
                  >
                    <div className="relative">
                      <input
                        id="gura2"
                        type="checkbox"
                        className="sr-only"
                        checked={checkChecked(stateCharFile, 2)}
                        onChange={() => switchChar(2)}
                      />
                      <div className="h-4 w-10 rounded-full bg-gray-400 shadow-inner"></div>
                      <div
                        className="
                            dot
                            absolute
                            -left-1
                            -top-1
                            h-6
                            w-6
                            rounded-full
                            bg-blue-200
                            shadow
                            transition-all
                            duration-700
                      "
                      ></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-8 flex w-full flex-col items-start justify-start">
              <h3 className="text-lg font-bold">Gawr Gura - 3</h3>
              <div className="flex w-full items-center justify-between gap-4">
                <div className="h-auto w-[84px]">
                  <img
                    src={gura3}
                    className="h-full w-full object-cover"
                    alt="Gura 3"
                    width="128"
                    height="128"
                  />
                </div>
                <div>
                  <label
                    htmlFor="gura3"
                    className="flex cursor-pointer items-center"
                  >
                    <div className="relative">
                      <input
                        id="gura3"
                        type="checkbox"
                        className="sr-only"
                        checked={checkChecked(stateCharFile, 3)}
                        onChange={() => switchChar(3)}
                      />
                      <div className="h-4 w-10 rounded-full bg-gray-400 shadow-inner"></div>
                      <div
                        className="
                            dot
                            absolute
                            -left-1
                            -top-1
                            h-6
                            w-6
                            rounded-full
                            bg-blue-200
                            shadow
                            transition-all
                            duration-700
                      "
                      ></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-8 flex w-full flex-col items-start justify-start">
              <h3 className="text-lg font-bold">Gawr Gura - 4</h3>
              <div className="flex w-full items-center justify-between gap-4">
                <div className="h-auto w-[84px]">
                  <img
                    src={gura4}
                    className="h-full w-full object-cover"
                    alt="Gura 4"
                    width="128"
                    height="128"
                  />
                </div>
                <div>
                  <label
                    htmlFor="gura4"
                    className="flex cursor-pointer items-center"
                  >
                    <div className="relative">
                      <input
                        id="gura4"
                        type="checkbox"
                        className="sr-only"
                        checked={checkChecked(stateCharFile, 4)}
                        onChange={() => switchChar(4)}
                      />
                      <div className="h-4 w-10 rounded-full bg-gray-400 shadow-inner"></div>
                      <div
                        className="
                            dot
                            absolute
                            -left-1
                            -top-1
                            h-6
                            w-6
                            rounded-full
                            bg-blue-200
                            shadow
                            transition-all
                            duration-700
                      "
                      ></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-8 flex w-full flex-col items-start justify-start">
              <h3 className="text-lg font-bold">Gawr Gura - 5</h3>
              <div className="flex w-full items-center justify-between gap-4">
                <div className="h-auto w-[84px]">
                  <img
                    src={gura5}
                    className="h-full w-full object-cover"
                    alt="Gura 5"
                    width="128"
                    height="128"
                  />
                </div>
                <div>
                  <label
                    htmlFor="gura5"
                    className="flex cursor-pointer items-center"
                  >
                    <div className="relative">
                      <input
                        id="gura5"
                        type="checkbox"
                        className="sr-only"
                        checked={checkChecked(stateCharFile, 5)}
                        onChange={() => switchChar(5)}
                      />
                      <div className="h-4 w-10 rounded-full bg-gray-400 shadow-inner"></div>
                      <div
                        className="
                            dot
                            absolute
                            -left-1
                            -top-1
                            h-6
                            w-6
                            rounded-full
                            bg-blue-200
                            shadow
                            transition-all
                            duration-700
                      "
                      ></div>
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

CharPopup.propTypes = {
  handleCharPopup: PropTypes.func,
  stateCharPopup: PropTypes.bool,
  stateCharFile: PropTypes.number,
  changerCharFile: PropTypes.func,
};

export default CharPopup;
