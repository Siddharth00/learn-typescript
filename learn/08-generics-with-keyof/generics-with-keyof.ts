function pluck<DataType, KeyType extends keyof DataType>(
    items: DataType[], key: KeyType
): DataType[KeyType][] {
    return items.map(item => item[key])
}

const dogs = [
    { name: "Mimi", age: 12 },
    { name: "Moti", age: 8 }
]

console.log(pluck(dogs, "age"));

interface BaseEvent {
    time: number;
    user: string;
}
interface EventMap {
    addToCart: BaseEvent & { quantity: number, productId: string },
    checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(name: Name, data: EventMap[Name]): void {
    console.log([name, data]);
}

sendEvent("addToCart", { quantity: 12, productId: "foo", user: "sid", time: 10 });