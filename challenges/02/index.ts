function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
    items.reduce((a, v) => {
        forEachFunc(v);
        return undefined;
    }, undefined);
}

myForEach(["a", "b", "c"], (v) => console.log(`for each ${v}`));

function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
    return items.reduce<T[]>((a, v) => (filterFunc(v) ? [...a, v] : a), []);
}

console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], (v) => v % 2 === 0));
console.log(myFilter([{ name: "Sid", hobby: "cricket" },
{ name: "Pra", hobby: "cooking" },
{ name: "Mis", hobby: "cricket" }], (v) => v.hobby === "cricket"));

function myMap<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
    return items.reduce((a, v) => [...a, mapFunc(v)], [] as K[]);
}

console.log(myMap([1, 2, 3, 4, 5, 6, 7, 8, 9], (v) => (v * 10).toString()));