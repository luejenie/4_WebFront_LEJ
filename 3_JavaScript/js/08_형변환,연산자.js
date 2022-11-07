// 형변환 확인하기
//const btn1 = document.querySelector(".btn1");  //_같은 css선택자 갖고 오기. 여러 개면 첫 번째 것.
 const btn1 = document.getElementsByClassName("btn1")[0]; //_배열로 가지고 와짐. 인덱스 써서 하나만 선택.

btn1.addEventListener("click", function(){
    console.log( "parseInt('123') : " + parseInt('123'));
    console.log( "parseInt('3.14') : " + parseInt('3.14'));
    console.log("--------------------------------------------");
    
    console.log( "parseFloat('123') : " + parseFloat('123'));
    console.log( "parseFloat('3.14') : " + parseFloat('3.14'));
    console.log("--------------------------------------------");
    
    console.log( "Number('123') : " + Number('123'));
    console.log( "Number('3.14') : " + Number('3.14'));
    console.log("--------------------------------------------");
})


// isNaN(값)
const input2 = document.getElementById("input2");
const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function(){
    if(isNaN(input2.value)){
        alert("숫자가 아닙니다.");
    } else{
        alert("숫자 입니다.");
    }
})
//_Number("") == 0  (0숫자로 인식.)
//_input2.value.trim().length == 0 식으로 걸러줘야 함.


// Math 확인
const input3 = document.getElementById("input3");
const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", function(){
    console.log("Math.ceil(값) : " + Math.ceil(input3.value));
    console.log("Math.floor(값) : " + Math.floor(input3.value));
    console.log("Math.trunc(값) : " + Math.trunc(input3.value));
    console.log("Math.round(값) : " + Math.round(input3.value));
})


// Math.random()
document.getElementById("btn4").addEventListener("click", function(){

    // rgb 색상 랜덤 대입(0 ~ 255)
    const r = Math.floor(Math.random() * 256)  // 0.0 <= ran < 256.0 소수점
    const g = Math.floor(Math.random() * 256)  // 0.0 <= ran < 256.0
    const b = Math.floor(Math.random() * 256)  // 0.0 <= ran < 256.0

    document.querySelector("body").style.backgroundColor = "rgb( "+ r +", "+ g +", "+ b +")"
})
