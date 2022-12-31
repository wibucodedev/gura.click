import PropTypes from "prop-types";

import iconClose from "../assets/images/icon-close.svg";
import iconLink from "../assets/images/icon-link.svg";

import iconFB from "../assets/images/icon-facebook.svg";
import iconTW from "../assets/images/icon-twitter.svg";
import iconRD from "../assets/images/icon-reddit.svg";
import iconTG from "../assets/images/icon-telegram.svg";

const SharePopup = ({ handleSharePopup, stateSharePopup }) => {
  const copyURL = () => {
    let copyText = document.createElement("input");
    document.body.appendChild(copyText);
    copyText.value = window.location.href;
    copyText.select();
    document.execCommand("copy");
    document.body.removeChild(copyText);
    alert("Copied to clipboard!");
  };

  return (
    <>
      {stateSharePopup ? (
        <div className="w-screen h-screen fixed left-0 top-0 inset-0 flex justify-center items-center z-20 bg-black bg-opacity-20">
          <div className="fixed z-20 flex flex-col justify-start items-center max-w-[95%] w-[480px] max-h-[90%] h-[400px] m-auto top-0 bottom-0 right-0 left-0 bg-white rounded-t-3xl shadow-xl">
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
              onClick={handleSharePopup}
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
                Share Menu
              </h1>
            </div>
            <div className="p-5">
              <p className="text-center mb-4">
                Kindly share this website,
                <br />
                1 share from you means a lot for us
                <br />
                and this webstite can still continue to exist today,
                <br />
                thank you :)
              </p>
              <div className="flex justify-center items-center mb-12 md:mb-16">
                <input
                  className="bg-[#F1F1F1] px-5 pr-7 h-[48px] text-left font-bold w-full rounded-l-lg outline-none -mr-2"
                  type="text"
                  value={window.location.href}
                  readOnly
                />
                <button
                  className="w-[64px] h-[48px] bg-primary hover:bg-opacity-80 flex justify-center items-center rounded-lg outline-none"
                  onClick={copyURL}
                >
                  <img
                    className="w-6 h-6"
                    width="32"
                    height="32"
                    src={iconLink}
                  />
                </button>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-5">
                <a
                  className="bg-[#28487C] hover:bg-opacity-80 shadow-md rounded-full p-4"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
                    window.location.href
                  )}`}
                  target="blank"
                  title="Share to Facebook"
                >
                  <img
                    className="w-5 h-5"
                    width="32"
                    height="32"
                    src={iconFB}
                  />
                </a>
                <a
                  className="bg-[#1CA1F2] hover:bg-opacity-80 shadow-md rounded-full p-4"
                  href={`https://twitter.com/intent/tweet?url=${encodeURI(
                    window.location.href
                  )}`}
                  target="blank"
                  title="Share to Twitter"
                >
                  <img
                    className="w-5 h-5"
                    width="32"
                    height="32"
                    src={iconTW}
                  />
                </a>
                <a
                  className="bg-[#FF4400] hover:bg-opacity-80 shadow-md rounded-full p-4"
                  href={`http://www.reddit.com/submit?url=${encodeURI(
                    window.location.href
                  )}`}
                  target="blank"
                  title="Share to Reddit"
                >
                  <img
                    className="w-5 h-5"
                    width="32"
                    height="32"
                    src={iconRD}
                  />
                </a>
                <a
                  className="bg-[#4995BD] hover:bg-opacity-80 shadow-md rounded-full p-4"
                  href={`https://t.me/share/url?url=${encodeURI(
                    window.location.href
                  )}`}
                  target="blank"
                  title="Share to Telegram"
                >
                  <img
                    className="w-5 h-5"
                    width="32"
                    height="32"
                    src={iconTG}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

SharePopup.propTypes = {
  handleSharePopup: PropTypes.func,
  stateSharePopup: PropTypes.bool,
};

export default SharePopup;
