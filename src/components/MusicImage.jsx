export default function MusicImage({ image }) {
    return (
        <img
            src={image}
            alt="Uploaded"
            style={{ maxHeight: "40vh", maxWidth: "80vw", marginBottom: "20px" }}
        />
    );
}
