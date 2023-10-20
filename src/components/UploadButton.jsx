import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1
});

export default function FileUploadButton({ selectImage }) {
    return (
        <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            style={{ backgroundColor: "rgb(131, 21, 249)" }}
        >
            Upload file
            <VisuallyHiddenInput type="file" onChange={selectImage} />
        </Button>
    );
}
