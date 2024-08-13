// Exercise 1: Basic Types and Functions

let myNumber: number = 10;
let myString: string = "Hello, TypeScript!";
let myBoolean: boolean = true;

function addNumbers(a: number, b: number): number {
    return a + b;
}

function greet(name: string): string {
    return `Hello, ${name}!`;
}

function toggleBoolean(flag: boolean): boolean {
    return !flag;
}

// Testing Exercise 1 functions
console.log(addNumbers(5, 10));
console.log(greet("TypeScript"));
console.log(toggleBoolean(true));

// Exercise 2: Enums and Interfaces

enum Color {
    Red,
    Green,
    Blue
}

function describeColor(color: Color): string {
    switch (color) {
        case Color.Red:
            return "Red is the color of passion.";
        case Color.Green:
            return "Green is the color of nature.";
        case Color.Blue:
            return "Blue is the color of the sky.";
        default:
            return "Unknown color.";
    }
}

console.log(describeColor(Color.Red));

// 2. Interface and Class for Car
interface Car {
    make: string;
    model: string;
    year: number;
}

class MyCar implements Car {
    constructor(public make: string, public model: string, public year: number) {}

    displayDetails(): string {
        return `Car: ${this.make} ${this.model}, Year: ${this.year}`;
    }
}

const myCar = new MyCar("Toyota", "Corolla", 2021);
console.log(myCar.displayDetails());

// Exercise 3: Enums and Type Assertions

enum UserRole {
    Admin,
    User,
    Guest
}

function getRoleMessage(role: UserRole): string {
    switch (role) {
        case UserRole.Admin:
            return "You have full access.";
        case UserRole.User:
            return "You have limited access.";
        case UserRole.Guest:
            return "You have guest access.";
        default:
            // Type assertion example
            return "Unknown role." as string;
    }
}

console.log(getRoleMessage(UserRole.Admin)); // Output: You have full access.

// Exercise 4: Asynchronous Functions and Promises

function fetchData(): Promise<{ data: string }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: "Mock API data" });
        }, 1000);
    });
}

async function getData(): Promise<void> {
    try {
        const result = await fetchData();
        console.log(result.data);
    } catch (error) {
        console.error("Error fetching data", error);
    }
}

// Testing getData function
getData();
