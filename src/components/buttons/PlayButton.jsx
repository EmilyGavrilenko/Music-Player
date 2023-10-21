import Button from "../Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const PlayButton = ({ variant, disabled, playing, handlePlayMusic }) => {
    return (
        <Button
            variant={variant}
            startIcon={<PlayArrowIcon />}
            disabled={disabled || playing}
            sx={{ backgroundColor: variant !== "contained" ? "#fff" : null }}
            onClick={handlePlayMusic}
        >
            {playing ? "Playing" : "Play Music"}
        </Button>
    );
};

export default PlayButton;
