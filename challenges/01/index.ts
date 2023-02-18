import houses from './houses';
// Consider using '--resolveJsonModule' to import module with '.json' extension in tsconfig.json.
import housesJson from './houses.json';

interface House {
    name: string;
    planets: string | string[];
}

interface HouseWithId {
    id: number;
}

function findHouses(
    input: string | House[],
    filter?: (house: House) => boolean
): HouseWithId[] {
    const houses: House[] = typeof input === 'string' ? JSON.parse(input) : input;

    return (filter ? houses.filter(filter) : houses).map((house) => ({
        id: houses.indexOf(house),
        ...house
    }));
}

console.log(findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides"));
console.log(findHouses(houses, ({ name }) => name === "Corrino"));
console.log(findHouses(JSON.stringify(houses)));
console.log(findHouses(housesJson));