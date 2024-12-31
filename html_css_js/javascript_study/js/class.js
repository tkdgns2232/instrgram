class User {
    username;
    password;
    name;
    email;

    constructor(username = null, password = null, name = null, email = null) {      // 생성자
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
    }

    toString() {
        return `User = {username: ${this.username}, password:${this.password}}`; // ${}을 사용하여 변수나 표현식에 삽입가능
    }

}

const user = new User("aaa", "1234");
console.log(user.toString());