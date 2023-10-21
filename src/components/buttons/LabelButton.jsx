import Button from "../Button";
// import CircularProgress from "@mui/material/CircularProgress";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const LabelButton = ({ variant, disabled, handleLabelNotes, loading }) => {
    return (
        <Button
            variant={variant}
            startIcon={<MusicNoteIcon />}
            disabled={disabled}
            onClick={handleLabelNotes}
            loading={loading}
        >
            Identify Notes
        </Button>
    );
};

export default LabelButton;
