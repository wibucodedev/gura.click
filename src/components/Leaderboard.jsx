import { useEffect, useState } from "react";
import CountUp from "react-countup";

import { firebase } from "../firebase/init.js";

const db = firebase.database();

import IconWorldWide from "./icons/IconWorldWide.jsx";
import IconNumberOne from "./icons/IconNumberOne.jsx";
import IconNumberTwo from "./icons/IconNumberTwo.jsx";
import IconNumberThree from "./icons/IconNumberThree.jsx";
import LeaderboardHeader from "./LeaderboardHeader.jsx";
import LeaderboardFooter from "./LeaderboardFooter.jsx";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [leaderboardFetch, setLeaderboardFetch] = useState([]);
  const [leaderboardTemp, setLeaderboardTemp] = useState([]);
  const [firstCountry, setFirstCountry] = useState([]);
  const [firstCountryTemp, setFirstCountryTemp] = useState([]);
  const [cps, setCps] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const getCountry = window.localStorage.getItem("guraClickCountry");
  useEffect(() => {
    setInterval(() => {
      const ref = db.ref("guraClick");
      ref
        .orderByChild("counter")
        .startAt(1)
        .get()
        .then((snap) => {
          let tempArrSort = [];
          tempArrSort = Object.entries(snap.val()).sort(function (a, b) {
            var keyA = a[1].counter,
              keyB = b[1].counter;
            if (keyA > keyB) return -1;
            if (keyA < keyB) return 1;
            return 0;
          });
          setLeaderboardFetch(tempArrSort);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 5000);
  }, []);

  useEffect(() => {
    if (leaderboardFetch.length) {
      setLeaderboardTemp(leaderboard);
      setLeaderboard(leaderboardFetch);
    }
  }, [leaderboardFetch]);

  useEffect(() => {
    if (leaderboard.length) {
      setCps(
        sumClick(leaderboard, "counter") - sumClick(leaderboardTemp, "counter")
      );
    }
    if (leaderboardTemp.length && leaderboard.length) {
      setFirstCountry(leaderboard[0]);
      leaderboardTemp.map((a) => {
        if (a[0] == firstCountry[0]) setFirstCountryTemp(a);
      });
    }
  }, [leaderboard]);

  const toggleLeaderboardOpen = () => {
    setIsOpen((val) => !val);
  };

  const containerStyle =
    "w-full md:w-2/3 lg:w-1/2 rounded-t-3xl px-6 bg-primary text-white transition-transform duration-500 flex flex-col h-[75vh] md:h-[80vh]";

  const sumClick = (items, prop) => {
    return items.reduce(function (a, b) {
      return a + b[1][prop];
    }, 0);
  };

  return (
    <div
      className={`
      ${isOpen ? 'top-0' : 'h-12'}
      fixed bottom-0 inset-x-0 z-20 flex justify-center items-end
    `}
      onClick={(e) => {
        e.stopPropagation()
        setIsOpen(false)
      }}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${containerStyle} ${
          isOpen ? '' : 'translate-y-[calc(100%-2.5rem)]'
        }`}
      >
        <LeaderboardHeader
          isOpen={isOpen}
          onToggle={toggleLeaderboardOpen}
          handleFirstCountryTemp={firstCountryTemp}
          handleFirstCountry={firstCountry}
          handleLeaderboardTemp={leaderboardTemp}
          handleLeaderboard={leaderboard}
        />
        {leaderboardTemp.length ? (
          leaderboard.length ? (
            <ul className='pb-5 divide-y divide-white/20 text-sm md:text-base lg:text-lg tracking-wider flex-grow overflow-auto -mr-4 pr-3'>
              <li className='flex items-center justify-between py-2'>
                <div className='flex items-center gap-3'>
                  <IconWorldWide />
                  World Wide
                </div>
                <div className='flex items-center gap-3 font-semibold'>
                  {cps > 0 && (
                    <span className='text-[#60FFE2]'>
                      <CountUp
                        formattingFn={(num) => {
                          if (num > 999999999) {
                            return `${(num / 10000000000).toFixed(2)}T`
                          }
                          if (num > 9999999) {
                            return `${(num / 100000000).toFixed(2)}B`
                          }
                          if (num > 99999) {
                            return `${(num / 1000000).toFixed(2)}M`
                          }
                          if (num > 999) {
                            return `${(num / 1000).toFixed(2)}K`
                          }
                          return num
                        }}
                        separator={'.'}
                        end={cps}
                        delay={0}
                        duration={0}
                      />{' '}
                      CPS
                    </span>
                  )}
                  <span>
                    <CountUp
                      separator={'.'}
                      start={sumClick(leaderboardTemp, 'counter')}
                      end={sumClick(leaderboard, 'counter')}
                      delay={0}
                      duration={5}
                    />
                  </span>
                </div>
              </li>
              {leaderboard.map((lb, index) => (
                <li
                  className='flex items-center justify-between py-3'
                  key={index}>
                  <div className='flex items-center gap-3'>
                    <div className='w-7 text-center'>
                      {index === 0 ? (
                        <IconNumberOne />
                      ) : index === 1 ? (
                        <IconNumberTwo />
                      ) : index === 2 ? (
                        <IconNumberThree />
                      ) : (
                        `${index + 1}`
                      )}
                    </div>
                    {lb[0] === 'ZZ' ? (
                      <IconWorldWide
                        src={IconWorldWide}
                        alt={lb[0]}
                        width='24px'
                        height='24px'
                      />
                    ) : (
                      <img
                        src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${lb[0]}.svg`}
                        alt={lb[0]}
                        width='24px'
                        height='24px'
                      />
                    )}
                    <span className={`${lb[0] === getCountry && 'font-bold'}`}>
                      {lb[1].name}
                    </span>
                  </div>
                  <div className='flex items-center gap-3 font-semibold'>
                    {leaderboardTemp.length
                      ? leaderboardTemp.map((a) => {
                          if (lb[0] == a[0]) {
                            let cipies = lb[1].counter - a[1].counter
                            if (cipies > 0)
                              return (
                                <span className='text-[#60FFE2]' key={a}>
                                  <CountUp
                                    formattingFn={(num) => {
                                      if (num > 999999999) {
                                        return `${(num / 10000000000).toFixed(
                                          2
                                        )}T`
                                      }
                                      if (num > 9999999) {
                                        return `${(num / 100000000).toFixed(
                                          2
                                        )}B`
                                      }
                                      if (num > 99999) {
                                        return `${(num / 1000000).toFixed(2)}M`
                                      }
                                      if (num > 999) {
                                        return `${(num / 1000).toFixed(2)}K`
                                      }
                                      return num
                                    }}
                                    separator={'.'}
                                    end={cipies}
                                    delay={0}
                                    duration={0}
                                  />{' '}
                                  CPS
                                </span>
                              )
                          }
                        })
                      : null}
                    {leaderboardTemp.length ? (
                      <span>
                        <CountUp
                          separator={'.'}
                          start={leaderboardTemp[index][1].counter}
                          end={lb[1].counter}
                          delay={0}
                          duration={5}
                        />
                      </span>
                    ) : (
                      <span>
                        <CountUp
                          separator={'.'}
                          end={lb[1].counter}
                          delay={0}
                          duration={5}
                        />
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : null
        ) : (
          <div className='text-center font-semibold pt-2 pb-5 tracking-wider flex-grow overflow-auto h-screen mt-4'>
            <span>Loading data...</span>
          </div>
        )}
        <LeaderboardFooter />
      </div>
    </div>
  )
}

export default Leaderboard;
