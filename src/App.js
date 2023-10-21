import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { UploadButton, LabelButton, PlayButton } from "./components/buttons";
import { ThemeProvider } from "@mui/material/styles";
import MusicImage from "./components/MusicImage";
import ImageWithLabels from "./components/ImageWithLabels";
import theme from "./Theme.js";
import "./App.css";

// backend
import { getMusicNoteInference } from "./api/inference.js";
import { addColorsToLabels, groupPointsByY } from "./utils";

function App() {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [notesIdentified, setNotesIdentified] = useState(false);
    const [labels, setLabels] = useState(null);

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
        setLabels(null);
    };

    const playMusic = () => {
        // setNotesIdentified(false);
        let pointGroups = groupPointsByY(labels);
        console.log(pointGroups);
    };

    const labelNotes = async () => {
        setLoading(true);
        setLabels(null);
        let _labels = await getMusicNoteInference(image);
        _labels = addColorsToLabels(_labels?.predictions ?? []);
        console.log(_labels);
        setLabels(_labels);
        setNotesIdentified(true);
        setLoading(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <header className="App-header">
                    <Typography variant="h2" sx={{ mb: 4 }}>
                        Music Player
                    </Typography>
                    {image &&
                        (labels ? (
                            <ImageWithLabels src={image} labels={labels} />
                        ) : (
                            <MusicImage image={image} />
                        ))}
                    <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                        {image && (
                            <LabelButton
                                variant={notesIdentified ? "secondary" : "primary"}
                                handleLabelNotes={labelNotes}
                                loading={loading}
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

export default App;
