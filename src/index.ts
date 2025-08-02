interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

// Log function
function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

// Generic filter function
function filterPersons<T extends Person>(
    persons: Person[],
    personType: T['type'],
    criteria: Partial<Omit<T, 'type'>>
): T[] {
    return persons
        .filter((person): person is T => person.type === personType)
        .filter((person) => {
            return Object.entries(criteria).every(([key, value]) => {
                return person[key as keyof typeof person] === value;
            });
        });
}

// Usage
const usersOfAge23 = filterPersons<User>(persons, 'user', { age: 23 });
const adminsOfAge23 = filterPersons<Admin>(persons, 'admin', { age: 23 });

console.log('Users of age 23:');
usersOfAge23.forEach(logPerson);

console.log();

console.log('Admins of age 23:');
adminsOfAge23.forEach(logPerson);

