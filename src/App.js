import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Button from "./components/Button";
import UploadButton from "./components/UploadButton";
import MusicImage from "./components/MusicImage";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./App.css";
import theme from "./Theme.js";
import { ThemeProvider } from "@mui/material/styles";

function App() {
    const [image, setImage] = useState(null);
    const [notesIdentified, setNotesIdentified] = useState(false);

    const handleChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.substr(0, 5) === "image") {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImage(null);
        }
        setNotesIdentified(false);
    };

    const playMusic = () => {
        setNotesIdentified(false);
    };

    const labelNotes = () => {
        setNotesIdentified(true);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <header className="App-header">
                    <Typography variant="h2" sx={{ mb: 4 }}>
                        Music Player
                    </Typography>
                    {image && <MusicImage image={image} />}
                    <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                        {image && (
                            <LabelButton
                                variant={notesIdentified ? "disabled" : "primary"}
                                disabled={notesIdentified}
                                handleLabelNotes={labelNotes}
                            />
                        )}
                        {image && (
                            <PlayButton
                                variant={notesIdentified ? "primary" : "disabled"}
                                disabled={!notesIdentified}
                                handlePlayMusic={playMusic}
                            />
                        )}
                        <UploadButton
                            selectImage={handleChange}
                            variant={image ? "secondary" : "primary"}
                        />
                    </Box>
                </header>
            </div>
        </ThemeProvider>
    );
}

const LabelButton = ({ variant, disabled, handleLabelNotes }) => {
    return (
        <Button
            variant={variant}
            startIcon={<MusicNoteIcon />}
            disabled={disabled}
            onClick={handleLabelNotes}
        >
            Identify Notes
        </Button>
    );
};

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

export default App;
