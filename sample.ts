// sample.ts
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    introduce(): string {
        return `Hi, I'm ${this.name}`;
    }
}

class MathService {
    multiply(a: number, b: number): number {
        return a * b;
    }
    divide(a: number, b: number): number {
        if (b === 0) throw new Error("Divide by zero");
        return a / b;
    }
}

function sayHello(name: string): string {
    return `Hello, ${name}`;
}

function factorialTS(n: number): number {
    if (n <= 1) return 1;
    return n * factorialTS(n - 1);
}
