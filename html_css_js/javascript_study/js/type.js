var name = "김준일"; // var는 변수를 나타낸다 타입이 정해져있지 않다
console.log(name);
console.log(typeof name);  // typeof를 쓰면 데이터 타입을 알 수 있다.
var age = 31;
console.log(age);
console.log(typeof age);
var address; // 대입을 안하면 undefined 출력
console.log(address);
console.log(typeof address); 
address = 10;  
console.log(address);
console.log(typeof address);
address += "10";
console.log(address);
console.log(typeof address);
address = null;
console.log(address);
console.log(typeof address); // null은 object(객체)를 나타낸다
address = {
    si: "부산시",
    gungu: "부산진구",
};
console.log(address);
console.log(typeof address);

/*
 number(숫자 - 정수, 실수)
 string(문자열)
 boolean(논리 - 참, 거짓)
 object(객체) - null
 undefined(type이 없다)
 NaN(Not a Number)
*/