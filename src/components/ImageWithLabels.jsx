import React, { useRef, useEffect } from "react";

export default function ImageWithLabels({ src, labels }) {
    const canvasRef = useRef(null);

    function centerToTopLeft(centerX, centerY, width, height) {
        const topLeftX = centerX - width / 2;
        const topLeftY = centerY - height / 2;
        return { topLeftX, topLeftY };
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const img = new Image();

        img.src = src;
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            labels.forEach((rectangle) => {
                const { topLeftX, topLeftY } = centerToTopLeft(
                    rectangle.x,
                    rectangle.y,
                    rectangle.width,
                    rectangle.height
                );
                ctx.beginPath();
                ctx.rect(topLeftX, topLeftY, rectangle.width, rectangle.height);
                ctx.strokeStyle = rectangle.color;
                ctx.lineWidth = 5;
                ctx.stroke();
            });
        };
    }, [src, labels]);

    return (
        <canvas
            ref={canvasRef}
            style={{ maxHeight: "60vh", maxWidth: "80vw", marginBottom: "20px" }}
        />
    );
}
