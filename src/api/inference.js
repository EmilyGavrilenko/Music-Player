import axios from "axios";

export async function getMusicNoteInference(image) {
    return await axios({
        method: "POST",
        url: "https://detect.roboflow.com/sheet-music-player/9",
        params: {
            api_key: process.env.REACT_APP_ROBOFLOW_API_KEY,
            confidence: 20,
            overlap: 30
        },
        data: image,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.error(error.message);
        });
}
