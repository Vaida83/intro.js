console.clear();

const user = {
    name: 'Jonas',
    age: 99,
    isMaried: true,
};

console.log(user.name);
console.log(user.age);
console.log(user.isMaried);

const userKeys = Object.keys(user);
console.log(userKeys);

for (const key of userKeys) {
    const value = user[Keys];
}

for (let i = 0, i < userKeys.length; i++) {
    const key = userKeys[i];
    console.log(key);

    const value = user[key];
    console.log(value);
}

console.log('-----------------------------');

//FOR-IN

for (const key in user) {
    const value = user[key];
    console.log(key, value);
}
