// sample.js
class AuthService {
    login(username, password) {
        if (username === "admin" && password === "1234") {
            return "Login successful!";
        }
        return "Invalid credentials";
    }
    logout() {
        return "User logged out";
    }
}

class MathUtils {
    add(a, b) {
        return a + b;
    }
    square(n) {
        return n * n;
    }
}

function greetUser(name) {
    return `Hello, ${name}!`;
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
