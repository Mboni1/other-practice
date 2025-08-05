"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
exports.logPerson = logPerson;
const users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
exports.users = users;
function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}`);
}
console.log('Users:');
users.forEach(logPerson);
//# sourceMappingURL=index.js.map