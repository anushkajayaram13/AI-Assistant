// sample.go
package main
import "fmt"

type User struct {
    Name string
}

func (u User) Welcome() string {
    return "Welcome, " + u.Name
}

func Add(a int, b int) int {
    return a + b
}

func Square(n int) int {
    return n * n
}

func main() {
    user := User{Name: "Anushh"}
    fmt.Println(user.Welcome())
    fmt.Println(Add(3, 4))
    fmt.Println(Square(5))
}
