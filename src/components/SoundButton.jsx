import PropTypes from "prop-types";
import IconSoundActive from "./icons/IconSoundActive.jsx";
import IconSoundMute from "./icons/IconSoundMute.jsx";

const SoundButton = ({ title, state, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="relative bg-primary rounded-full h-14 w-14 flex items-center pl-3.5 button-shadow group"
    >
      {state ? <IconSoundActive /> : <IconSoundMute />}
      <div className="absolute top-full left-1/2 -translate-x-1/2 text-white px-2 rounded mt-2 bg-primary w-max hidden group-hover:block">
        {title}
      </div>
    </button>
  );
};

SoundButton.propTypes = {
  title: PropTypes.any,
  state: PropTypes.any,
  onToggle: PropTypes.any
};

export default SoundButton;
