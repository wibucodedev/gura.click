import IconCoffe from "./icons/IconCoffe.jsx";

const LeaderboardFooter = () => (
  <div className="pt-5 pb-5 grid place-items-center">
    <p>CPS = Click Per Second</p>
    <div className="my-5 border px-5 py-2 rounded border-white flex items-center justify-center gap-3 cursor-pointer">
      <a
        href="https://ko-fi.com/wibucode"
        className="underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Support gura.waifu.click{" "}
      </a>
      <IconCoffe />
    </div>
    <p>
      <a href="/policy" className="text-white font-bold hover:text-white/70">
        Privacy Policy
      </a>
    </p>
    <p className="text-white/70">
      Powered by
      <a
        href="//wibucode.com "
        className="text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Wibucode
      </a>
    </p>
  </div>
);

export default LeaderboardFooter;
