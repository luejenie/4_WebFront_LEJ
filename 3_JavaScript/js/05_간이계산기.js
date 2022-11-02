// Number(얻어온값) -> 문자를 숫자로

/* 
if
switch-case
for
while
do-while
모두 써도 됨.
 */

// 전역 변수
// 요소를 추적하는 것. 값,속성 추적 X
const input1 = document.getElementById("input1");  //_시작되자마자 입력되기 전이라, 비어있음. -> 0 이 나옴.
const input2 = document.getElementById("input2");
const calResult = document.getElementById("calResult");

console.log(input1.value);
console.log(input2.value);


function plus(){ //함수 정의(코드가 있다는 것을 인식하고 호출 전까지 수행X)
    // 함수가 호출되었을 때 내부코드가 해석되면서 수행
    
    const n1 = Number(input1.value);
    const n2 = Number(input2.value);

    console.log(n1 + n2);
    calResult.innerText = n1 + n2;

    // calResult.innerHTML = Number(input1.value) + Number(input2.value);
}

function minus(){
    calResult.innerHTML = Number(input1.value) - Number(input2.value);
}

function multi(){
    calResult.innerHTML = Number(input1.value) * Number(input2.value);
}

function div(){

    if(Number(input2.value) != 0){
        calResult.innerHTML = Number(input1.value) / Number(input2.value);
    } else {
        calResult.innerText = ;
    }
}

function mod(){
    calResult.innerHTML = Number(input1.value) % Number(input2.value);
}

// span요소선택.innerText = n1+n2;

// 0으로 나눌 수 없다.
// 계산 후 값을 지우기.




/*
function plus(){   //함수 정의
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    console.log(n1 + n2);
}

함수를 쓰고 싶으면 호출해야함.
plus();

*/

// function cal(){
//     switch()
// }

/*
const calArr = document.getElementsByTagName("button");


 switch(document.getElementsByTagName("button")==?){
     case 1 : Number(input1.value) + Number(input2.value);
    
 }
*/

// if(document.getElementsByTagName("button")==?){
//     Number(input1.value) + document.getElementsByTagName("button")"" + Number(input2.value);

// }