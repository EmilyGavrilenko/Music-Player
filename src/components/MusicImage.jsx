export default function MusicImage({ image }) {
    return (
        <div>
            <img
                src={image}
                alt="Uploaded"
                style={{ maxHeight: "40vh", maxWidth: "80vw", marginBottom: "20px" }}
            />
        </div>
    );
}
