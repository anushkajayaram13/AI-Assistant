// Sample.java
public class Sample {
    public static class User {
        private String name;
        public User(String name) {
            this.name = name;
        }
        public boolean authenticate(String password) {
            return password.equals("1234");
        }
    }

    public static class MathUtils {
        public int add(int a, int b) {
            return a + b;
        }
        public int square(int n) {
            return n * n;
        }
    }

    public static String greet(String name) {
        return "Hello, " + name;
    }

    public static int factorial(int n) {
        if (n == 0) return 1;
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        User u = new User("Anushh");
        System.out.println(u.authenticate("1234"));
        System.out.println(greet("Ray"));
    }
}
