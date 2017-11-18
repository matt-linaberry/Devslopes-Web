//var name = "Jack";
//var age = 23;
//var shootingScore = 45.6;  //float
//
//var message = "Hi, my name is " + name + ". I am " + age + " years old.";

//var firstName = "John";
//var lastName = "JacobJingleHeimerSmith";
//var dateOfBirth = "10-09-82";
//var age = 23;
//
//var profileImageUrl = "http://coolpics.com/johnjacob.jpg";
//
//var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "rd birthday!";
//
//
//console.log(loginWelcomeMessage);

function getTriangleArea(base, height) {
    return (.5 * base * height);
}

console.log("Your triangle area is " + getTriangleArea(3, 5));

function getCircleArea(radius) {
    return (3.14159 * radius * radius);
}

console.log("Your circle area is " + getCircleArea(5));

function getArea(type, p1, p2) {
    if (type === "circle") {
        return (3.14159 * p1 * p1) ;
    } else if (type === "triangle") {
        return (.5 * p1 * p2);
    } else if (type === "rectangle") {
        return (p1 * p2);
    }
}

console.log("Your circle area is " + getArea("circle", 8));
console.log("Your triangle area is " + getArea("triangle", 5,9));
console.log("Your rectangle area is " + getArea("rectangle", 8, 10));
