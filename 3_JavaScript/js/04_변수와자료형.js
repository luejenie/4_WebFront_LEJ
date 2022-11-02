
var str = "JS 코드를 함수가 아닌 "
        + "JS 파일 또는 script 태그 내부에 바로 작성하면 "
        + "HTML 랜더링 시 바로 수행된다.";

console.log(str);
// alert(str);


// 변수 선언 위치에 따른 구분
var num1 = 100;  // 전역 변수
num2 = 200;      // 전역 변수

console.log("num1 : " + num1);
console.log("num2 : " + num2);

function test(){ // test 함수 정의  __> 실행이 바로 되지 않고 호출해야 함.
    var num3 = 300;  // function 지역 변수
    num4 = 400;      // 전역 변수

    console.log("함수 내부 num3 : " + num3);
    console.log("함수 내부 num4 : " + num4);

    if(num3 == 300){
        var num5 = 500;
        num6 = 600;
    }

    console.log("if문 종료 후 num5 : " + num5);  // funtion 지역 변수  __if문 밖에서도 사용 가능
    console.log("if문 종료 후 num6 : " + num6);  // 전역 변수
}

test();  // 함수 호출

// console.log("함수 외부 num3 : " + num3); // Uncaught ReferenceError: num3 is not defined 에러
// 함수 종료 후에는 사용 불가

// *** script 언어는 중간에 에러가 발생하면 해석을 멈춤 ***   __아래 num4 코드가 해석이 되지 않아 콘솔에 나오지 않음.

console.log("함수 외부 num4 : " + num4);  // 전역 변수
// 함수 종료 후에도 사용 가능


//console.log("함수 종료 후 num5 : " + num5);  // funtion 지역 변수 
// num5 is not defined 에러

console.log("함수 종료 후 num6 : " + num6);  // 전역 변수


// var 변수명 중복 확인
var num1 = 999;     //_위에서 이미 선언한 var num1과 같은 이름으로 다시 선언 -> 가능함.
console.log("var num1 중복 확인 : " + num1);


// 자로형 확인 (+ 변수 선언 방법)
function typeTest(){
    let temp1 = 100;
    // let temp1 = 200;  // 변수명 중복 X
    // 블록 범위 변수 'temp1'을(를) 다시 선언할 수 없습니다.

    if(temp1 = 100){
        // 블록 범위 scope 확인
        let temp2 = 200;
        const temp3 = 300;
        temp3 = 400; // error _Assignment to constant variable.
                     // 상수형 변수에 값을 할당해서 error
    }   

    console.log(temp1);
    // console.log(temp2);  // error _temp2 is not defined -> if문 밖에서 사용X
    // console.log(temp3);  // error


  //------------------------------------------------------------------


    // 자료형 확인
    const typeBox = document.getElementById("typeBox");

    typeBox.innerHTML = ""; // typeBox 요소 내부의 내용을 빈 문자열로 바꿔라
                            // == 내부 내용 삭제

    // const name2; // 상수는 선언과 동시에 초기화가 필수

    let name;  // undefined
    typeBox.innerHTML += "name : " + name + " / " + typeof name;

    name = "홍길동";  // undefined -> string

    // typeof 변수명 : 해당 변수의 자료형을 반환하는 연산자
    typeBox.innerHTML += "<br><br>name : " + name + " / " + typeof name;


    // number
    const age = 20;
    const height = 178.9;

    typeBox.innerHTML += "<br><br>age : " + age + " / " + typeof age;
    typeBox.innerHTML += "<br><br>height : " + height + " / " + typeof height;


    // boolean
    const isTrue = true;
    typeBox.innerHTML += "<br><br>isTrue : " + isTrue + " / " + typeof isTrue;


    // object(배열, JS객체 등)

    // 배열 선언과 동시에 초기화
    // (Java)
    // int[] arr = {10, 20, 30, 40, 50};

    // JS ([] 대괄호 사용)
    const arr = [10, 20, 30, 40, 50]; 

    typeBox.innerHTML += "<br><br>arr : " + arr + " / " + typeof arr;

    for(let i=0; i<arr.length; i++){
        typeBox.innerHTML += "<br>arr[" + i + "] : " + arr[i];
    }


    // ** JS 객체 **
    // - K:V 쌍으로 이루어짐(Map 형식)
    // - Key는 무조건 String
    // - 리터럴 표기법 : { }
    // const user = { "K":V, "K":V};

    const user = { "id":"user01", "pw":"pass01", "num":123, "a":arr};
    typeBox.innerHTML += "<br><br>user : " + user + " / " + typeof user;
    console.log(user);

    // 객체에 저장된 값 출력
    typeBox.innerHTML += "<br>user.id : " + user.id; 
    typeBox.innerHTML += "<br>user.pw : " + user.pw; 
    typeBox.innerHTML += "<br>user.num : " + user.num; 
    typeBox.innerHTML += "<br>user.a : " + user.a; 
    typeBox.innerHTML += "<br>user.a[2] : " + user.a[2]; 


    // function
    // 1) 변수명 == 함수명
    const fnSum = function(n1, n2){  // 익명 함수 _함수 이름이 없음
        return n1 + n2;
    }
        
        // 함수명만 작성하는 경우 -> 함수에 작성된 코드 자체가 반환  _주석까지
        typeBox.innerHTML += "<br><br>fnSum : " + fnSum + " / " + typeof fnSum;
        
        // 함수명(매개변수) == 함수 호출(함수 코드가 수행됨)
        typeBox.innerHTML += "<br><br>fnSum(1,2) : " + fnSum(1,2);
        
    // 2) 함수를 매개변수로 전달하는 형태
    function plusFn(num, fn){
        // num : number
        // fn  : function

        return num + fn();  //_num + fn 이라고 쓰면 함수 코드가 그대로 출력됨. fn()해야 함수가 호출되어 결과값이 출력.
    }
                                //_ plusFn의 fn자리에 들어감.
    const result = plusFn(100, function(){ return 30 - 10; })

    typeBox.innerHTML += "<br><br>result : " + result;

}