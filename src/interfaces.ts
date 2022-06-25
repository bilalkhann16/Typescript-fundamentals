interface User{
    user: string;
    age?: number;  //optional
    getMessage(): string
}

const user : User = {
    user: "Moster",
    age: 30,
    getMessage() {
        return "hello" + user;
    },
};

const user2 : User = {
    user : "Jack",
    getMessage() {
        return "Hello" + user;
    },
};

console.log(user.age)