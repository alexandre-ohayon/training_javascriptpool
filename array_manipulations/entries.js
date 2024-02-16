// entries method returns an Array Iterator object with key/value pairs

const users = ["Alexandre", "Michael", "Jean", "Michel"];
const u = users.entries();

for (const element of u) {
    console.log(element);
}