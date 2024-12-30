/**
 * 배열
 */

const numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers);
for(let i =  0; i < numbers.length; i++){
    console.log(numbers[i]);
}
for(let num of numbers){  // 자바 스크립트에서는 of 사용, foreach
    console.log(num);
}
numbers.forEach((num) => console.log(num)); // => 람다형

numbers.push(10); // 값을 넣을때는 push
console.log(numbers); 
console.log(numbers.pop()); // 스택  값을 꺼낼때는 pop
console.log(numbers.includes(5));   // 값을 포함하고 있는지 확인(java-contains)\
console.log(numbers.indexOf(5));    // 값의 위치(index)
console.log(numbers.lastIndexOf(4));    // 뒤에서 부터 값의 위치(index)
console.log(numbers.concat([11,12,13,14,15]));    // 두 배열의 병합
console.log(numbers);
const newNumbers = numbers.concat([11,12,13,14,15]);
console.log(newNumbers);
const newNumbers2 = [ ...numbers,11, 12, 13, 14, 15]; // ...은 스프레드 연산
console.log(newNumbers2);
const newNumbers3 = numbers.slice(5); // 5 index 전까지 나타냄
console.log(newNumbers3);
const newNumbers4 = numbers
.slice(0, numbers.indexOf(4))
.concat(numbers.slice(numbers.indexOf(4) + 1));
console.log(newNumbers4);
const newNumbers5 = numbers.splice(3, 1); // splice() 처음은 지우고 싶은 위치 두번째는 지우고 싶은 개수
console.log(newNumbers5);
console.log(numbers);
const newNumbers6 = numbers.splice(4, 2, 11, 12, 13);
console.log(newNumbers6);
console.log(numbers);
numbers.splice(4, 0, 20, 21) // 0은 제거 x
console.log(numbers);