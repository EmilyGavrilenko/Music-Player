import React, { useState } from "react";
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

    console.log(image);
    return (
        <div>
            {image && (
                <div>
                    <img
                        src={image}
                        alt="Uploaded"
                        style={{ maxHeight: "40vh", maxWidth: "80vw", marginBottom: "20px" }}
                    />
                </div>
            )}
            <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                style={{ backgroundColor: "rgb(131, 21, 249)" }}
            >
                Upload file
                <VisuallyHiddenInput type="file" onChange={handleChange} />
            </Button>
        </div>
    );
}
