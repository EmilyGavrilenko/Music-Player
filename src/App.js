import { useState } from "react";
import Typography from "@mui/material/Typography";
import UploadButton from "./components/UploadButton";
import MusicImage from "./components/MusicImage";
import "./App.css";

function App() {
    const [image, setImage] = useState(null);

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
    };

    return (
        <div className="App">
            <header className="App-header">
                <Typography variant="h2" sx={{ mb: 4 }}>
                    Music Player
                </Typography>
                {image && <MusicImage image={image} />}
                <UploadButton selectImage={handleChange} />
            </header>
        </div>
    );
}

export default App;
