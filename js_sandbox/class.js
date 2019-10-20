class Person {
  constructor(firstName = 'Bob', lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x,y) {
    return x + y;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  greeting() {
    return `How may I help you ${this.firstName} ${this.lastName}`
  }

  getInfo() {
    return `Membership ${this.membership} with phone number ${this.phone}`
  }

  static getMembershipCost() {
    return 500;
  }

}


const mary = new Person(undefined, 'Williams', '11-13-1980');

console.log(mary);
console.log(mary.greeting());

mary.getsMarried('Tompson');

console.log(mary);

console.log(Person.addNumbers(1,2));

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john.greeting());
console.log(john.getInfo());
console.log(Customer.getMembershipCost());