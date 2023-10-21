import * as Tone from "tone";

// Function to play notes with durations
export function playNotesWithDurations(synth, labels) {
    let notes = parseNotes(labels);

    let startTime = Tone.now();
    for (const { note, duration, isRest } of notes) {
        if (!isRest) {
            synth.triggerAttackRelease(note, duration, startTime);
        }
        startTime += Tone.Time(duration).toSeconds();
    }
}
export function parseNotes(labels) {
    return labels.map((prediction) => {
        let label = prediction.class;
        let note = convertNote(label.split("-")[0]);
        let duration = label.split("-")[1] + "n";
        let isRest = label.includes("rest");
        return { note, duration, isRest };
    });
}

function convertNote(note) {
    let noteName = note[0];
    let noteOctave = parseInt(note[1]);
    if (["g", "a", "b"].includes(noteName)) {
        noteOctave += 1;
    } else {
        noteOctave += 2;
    }
    return noteName.toUpperCase() + noteOctave.toString();
}
