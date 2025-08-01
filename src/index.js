"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    {
        name: 'claude',
        age: 32,
        occupation: 'developer'
    },
    {
        name: 'mbonimpa',
        age: 29,
        occupation: 'Engineer'
    }
];
function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}`);
}
console.log('Users:');
users.forEach(logPerson);
//# sourceMappingURL=index.js.map