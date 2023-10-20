import Typography from "@mui/material/Typography";
import UploadButton from "./components/UploadButton";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Typography variant="h2" sx={{ mb: 4 }}>
                    Music Player
                </Typography>
                <UploadButton />
            </header>
        </div>
    );
}

export default App;
