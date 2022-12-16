function sortingTriangles(arrayOfTriangles) {
    return arrayOfTriangles.sort((a, b) => {
        const [vertices1, a1, b1, c1] = [...Object.values(a)];
        const [vertices2, a2, b2, c2] = [...Object.values(b)];

        const semPerA = (a1 + b1 + c1) / 2;
        const semPerB = (a2 + b2 + c2) / 2;

        const areaA = Math.sqrt(
            semPerA * (semPerA - a1) * (semPerA - b1) * (semPerA - c1)
        );
        const areaB = Math.sqrt(
            semPerB * (semPerB - a2) * (semPerB - b2) * (semPerB - c2)
        );

        if (areaA > areaB) return -1;
        if (areaA < areaB) return 1;

        return 0;
    });
}

module.exports = sortingTriangles;
