interface MyUser {
    name: string;
    id: number;
    email?: string;
}

// interface MyUserOptional {
//     name?: string;
//     id?: string;
//     email?: string;
// }

type MyUserOptional = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptional): MyUser => {
    return {
        ...user,
        ...overrides
    };
};

type RequiredMyUser = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, "email" | "name">;

type RequiredJustEmailAndName = Required<Pick<MyUser, "email" | "name">>;

type UserWithoutId = Omit<MyUser, "id">;

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutId> => {
    return users.reduce((a, v) => {
        const { id, ...other } = v;
        return {
            ...a,
            [id]: other,
        }
    }, {})
}

console.log(mapById(
    [
        { id: 1, name: "Mr Foo" },
        { id: 2, name: "Mrs baz" }
    ]
))