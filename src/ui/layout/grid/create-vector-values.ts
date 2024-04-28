type Vector = "rows" | "cols";

export function createVectorValues(vector: Vector) {
    return {
        "1": `grid-${vector}-1`,
        "2": `grid-${vector}-2`,
        "3": `grid-${vector}-3`,
        "4": `grid-${vector}-4`,
        "5": `grid-${vector}-5`,
        "6": `grid-${vector}-6`,
        "7": `grid-${vector}-7`,
        "8": `grid-${vector}-8`,
        "9": `grid-${vector}-9`,
        "10": `grid-${vector}-10`,
        "11": `grid-${vector}-11`,
        "12": `grid-${vector}-12`,
        none: `grid-${vector}-none`,
    };
}
