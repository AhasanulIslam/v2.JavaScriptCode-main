const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",

    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
  };

  console.log(person.firstName + " is " + person.age + " years old.");

  console.log(person.fullName());