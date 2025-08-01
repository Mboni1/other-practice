export type User = {
    name: string;
    age: number;
    occupation: string;
};

 const users: User[] = [
    {
        name: 'Claude',
        age: 32,
        occupation: 'developer'
    },
    {
        name: 'Stanna',
        age: 28,
        occupation: ' IT Engineer'
    }
];
 function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);
