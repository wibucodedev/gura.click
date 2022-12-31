import { useEffect, useState } from "react";
import CountUp from "react-countup";
import PropTypes from "prop-types";
import IconArrowUp from "./icons/IconArrowUp.jsx";
import IconScore from "./icons/IconScore.jsx";
import IconGlobe from "./icons/IconWorldWide.jsx";

const LeaderboardHeader = ({
  isOpen,
  onToggle,
  handleFirstCountryTemp,
  handleFirstCountry,
  handleLeaderboardTemp,
  handleLeaderboard,
}) => {
  const [ownCountry, setOwnCountry] = useState([]);
  const [ownCountryTemp, setOwnCountryTemp] = useState([]);

  const getCountry = window.localStorage.getItem("guraClickCountry");
  useEffect(() => {
    if (handleLeaderboardTemp.length) {
      handleLeaderboardTemp.map((a) => {
        if (a[0] == getCountry) setOwnCountryTemp(a);
      });
    }
    if (handleLeaderboard.length) {
      handleLeaderboard.map((a) => {
        if (a[0] == getCountry) setOwnCountry(a);
      });
    }
  }, [handleLeaderboardTemp, handleLeaderboard]);

  const guraClick = window.localStorage.getItem("guraClick");
  useEffect(() => {
    if (ownCountry.length && ownCountryTemp.length) {
      let countryTemp = ownCountryTemp;
      countryTemp[1].counter += 1;
      setOwnCountryTemp(countryTemp);

      let country = ownCountry;
      country[1].counter += 1;
      setOwnCountry(country);
    }
  }, [guraClick]);

  return (
    <div
      onClick={onToggle}
      className="h-10 flex justify-between items-center font-semibold tracking-wider cursor-pointer pt-1"
    >
      <div className="pr-4 mr-4 border-r-2 h-6 flex items-center hidden md:block">
        <IconScore />
      </div>
      {isOpen ? (
        <h2 className="text-base md:text-lg font-bold pt-2">Leaderboard</h2>
      ) : handleLeaderboardTemp.length ? (
        <div className="flex items-center justify-between w-full text-sm md:text-base">
          <div className="flex items-center gap-x-2 md:gap-x-4">
            {handleFirstCountry.length ? (
              <>
                <span>#1</span>
                <span>
                  {handleFirstCountry[0] === "ZZ" ? (
                    <IconGlobe />
                  ) : (
                    <img
                      src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${handleFirstCountry[0]}.svg`}
                      alt={handleFirstCountry[0]}
                      width="24px"
                      height="24px"
                    />
                  )}
                </span>
              </>
            ) : null}
            {handleFirstCountryTemp.length ? (
              handleFirstCountry.length ? (
                <span>
                  <CountUp
                    formattingFn={(num) => {
                      if (num > 99999999999) {
                        return `${(num / 1000000000000).toFixed(2)}T`;
                      }
                      if (num > 99999999) {
                        return `${(num / 1000000000).toFixed(2)}B`;
                      }
                      if (num > 99999) {
                        return `${(num / 1000000).toFixed(2)}M`;
                      }
                      if (num > 999) {
                        return `${(num / 1000).toFixed(2)}K`;
                      }
                      return num;
                    }}
                    separator={"."}
                    start={handleFirstCountryTemp[1].counter}
                    end={handleFirstCountry[1].counter}
                    delay={0}
                    duration={5}
                  />
                </span>
              ) : null
            ) : null}
          </div>
          <div className="text-xl block md:hidden gap-x-0">...</div>
          <div className="flex items-center gap-x-2 md:gap-x-4">
            {ownCountry.length ? (
              <span>
                {ownCountry[0] === "ZZ" ? (
                  <IconGlobe />
                ) : (
                  <img
                    src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${ownCountry[0]}.svg`}
                    alt={ownCountry[0]}
                    width="24px"
                    height="24px"
                  />
                )}
              </span>
            ) : null}
            {ownCountryTemp.length ? (
              ownCountry.length ? (
                <span>
                  <CountUp
                    separator={"."}
                    start={ownCountryTemp[1].counter}
                    end={ownCountry[1].counter}
                    delay={0}
                    duration={2}
                  />
                </span>
              ) : null
            ) : null}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center gap-4">
            <span>gura.waifu.click</span>
          </div>
        </div>
      )}
      <div className="pl-4 ml-4 border-l-2 h-6 flex items-center">
        <span className={isOpen ? "rotate-180" : ""}>
          <IconArrowUp />
        </span>
      </div>
    </div>
  );
};

LeaderboardHeader.propTypes = {
  isOpen: PropTypes.any,
  onToggle: PropTypes.any,
  handleFirstCountryTemp: PropTypes.any,
  handleFirstCountry: PropTypes.any,
  handleLeaderboardTemp: PropTypes.any,
  handleLeaderboard: PropTypes.any,
};

export default LeaderboardHeader;
