import Button from "../Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const PlayButton = ({ variant, disabled, handlePlayMusic }) => {
    return (
        <Button
            variant={variant}
            startIcon={<PlayArrowIcon />}
            disabled={disabled}
            sx={{ backgroundColor: variant !== "contained" ? "#fff" : null }}
            onClick={handlePlayMusic}
        >
            Play Music
        </Button>
    );
};

export default PlayButton;
