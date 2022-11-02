
// 전역 변수
// 요소를 추적하는 것. 값,속성 추적 X
const num1 = document.getElementById("num1");  //_시작되자마자 입력되기 전이라, 비어있음. -> 0 이 나옴.
const num2 = document.getElementById("num2");
const result = document.getElementById("result");


function calc(btn){
    // btn == 클릭 이벤트가 발생한 버튼 요소

    // 현재 input 요소에 작성된 값을 얻어와 변수에 저장
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    const op = btn.innerText;  // 클릭된 버튼에 작성된 내용을 얻어옴
                               // ==> + - * / %

    // n1 + op + n2
    //  '2 * 4' = 8;  -> 자바스크립트는 가능함


    // eval("코드 형식의 문자열")
    // -> 매개변수의 문자열을 JS 코드로 해석/수행하는 함수
    // -> 속도가 느림 + 보안 이슈로 인해 사용 지양(사용하지마요...)
    // result.innerText = eval(n1 + op + n2);

    // 해결 방법 : new Function() 사용
    result.innerText = new Function("return " + n1 + op + n2)();
                                    // return 뒤에 꼭 한 칸 띄기!! 안하면 안됨..


}

