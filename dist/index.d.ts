interface User {
    name: string;
    age: number;
    occupation: string;
}
interface Admin {
    name: string;
    age: number;
    role: string;
}
export type Person = User | Admin;
export declare const persons: Person[];
export declare function logPerson(person: Person): void;
export {};
//# sourceMappingURL=index.d.ts.map