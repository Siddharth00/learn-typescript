export function printToFile(text: string, callback: () => void): void {
    console.log(text);
    callback();
}

export type MutationFunction = (v: number) => number;

export function arrayMutate(
    numbers: number[],
    mutate: MutationFunction
): number[] {
    return numbers.map(mutate);
}

const myNewMutateFunc: MutationFunction = (v: number) => v * 10;

console.log(arrayMutate([3, 4, 5], (v) => v * 5));

export function createAdder(num: number): MutationFunction {
    return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
