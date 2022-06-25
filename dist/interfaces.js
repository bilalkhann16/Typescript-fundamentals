var user = {
    user: "Moster",
    age: 30,
    getMessage: function () {
        return "hello" + user;
    }
};
var user2 = {
    user: "Jack",
    getMessage: function () {
        return "Hello" + user;
    }
};
console.log(user.age);
