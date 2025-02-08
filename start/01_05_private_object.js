// Create the password and suername constants
// Using the symbol keyowrd from ES6
const username = Symbol("username");
const password = Symbol("password");

// Within the user object we use []
// to make username and password private
const user = {
  [username]: "emmabostian",
  [password]: "1234566",
  age: 27,
  showUserName: () => {
    return username;
  },
};

// returns undefined
console.log(user.username);
console.log(user.password);

// Even does not work with object return
console.log(user.showUserName());

// But like this you can: 
console.log(user[username]);
