type Vector = "rows" | "columns";

export function createVectorValues(vector: Vector) {
    return {
        "1": `grid-rows-${vector}-1`,
        "2": `grid-rows-${vector}-2`,
        "3": `grid-rows-${vector}-3`,
        "4": `grid-rows-${vector}-4`,
        "5": `grid-rows-${vector}-5`,
        "6": `grid-rows-${vector}-6`,
        "7": `grid-rows-${vector}-7`,
        "8": `grid-rows-${vector}-8`,
        "9": `grid-rows-${vector}-9`,
        "10": `grid-rows-${vector}-10`,
        "11": `grid-rows-${vector}-11`,
        "12": `grid-rows-${vector}-12`,
        none: `grid-rows-${vector}-none`,
    };
}
