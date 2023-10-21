const COLORS = [
    "#FF0000", // red
    "#FFA500", // orange
    "#FFFF00", // yellow
    "#008000", // green
    "#00FFFF", // cyan
    "#0000FF", // blue
    "#8A2BE2", // blueviolet
    "#FF00FF", // magenta
    "#FFC0CB", // pink
    "#FFD700", // gold
    "#D2691E", // chocolate
    "#008080", // teal
    "#000080", // navy
    "#800080", // purple
    "#A52A2A", // brown
    "#FF4500", // orangered
    "#6A5ACD", // slateblue
    "#00FF00" // limegreen
];

export function addColorsToLabels(labels) {
    let uniqueLabels = [...new Set(labels.map((label) => label.class))];
    let labelColors = uniqueLabels.reduce((arr, label, index) => {
        arr[label] = randomBrightColor(index);
        return arr;
    }, {});
    labels = labels.map((label) => {
        label.color = labelColors[label.class];
        return label;
    });
    return labels;
}

export function groupPointsByY(points) {
    let verticalSort = points.slice().sort((a, b) => a.y - b.y);
    let groups = [];

    verticalSort.forEach((point, index) => {
        if (index === 0) {
            groups.push([point]);
            return;
        } else {
            let previousY = verticalSort[index - 1].y;
            let sameGroup = Math.abs(point.y - previousY) < point.height;
            if (sameGroup) {
                groups[groups.length - 1].push(point);
            } else {
                groups.push([point]);
            }
        }
    });

    groups = groups.map((group) => {
        let horizontalSort = group.slice().sort((a, b) => a.x - b.x);
        return horizontalSort;
    });

    return groups;
}

function randomBrightColor(index) {
    let color = COLORS[index % COLORS.length];
    return color;
}
