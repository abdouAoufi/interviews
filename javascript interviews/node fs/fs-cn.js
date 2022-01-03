const Person = function(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
};

const person = new Person("Aoufi", "Abderahmane");
console.log(person.firstName);
Person.prototype.greet = function(){
	console.log(this);
}

person.greet();
