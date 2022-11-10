
// 추가 버튼 클릭 시 동작
document.getElementById("add").addEventListener("click", function(){

    // 이런 모양으로 만들기
    // <div class="row">
    //     <input type="number" class="in">
    //     <span class="remove">&times;</span>
    // </div>

    // div 요소 생성
    const div = document.createElement("div");

    // div에 'row' class추가
    div.classList.add("row");

    // ------------------------------------------

    // input 요소 생성
    const input = document.createElement("input");

    // input에 'in' class 추가
    input.classList.add("in");

    // * 요소에 속성을 추가하거나 변경할 떄 사용하는 함수
    // 요소.setAttribute("속성명", "속성값");
    // <-> 요소.removeAttribute("속성명") : 속성 제거

    // input에 type="number" 추가
    input.setAttribute("type", "number");


    // -------------------------------------------

    // x버튼
    // span 요소 생성 -> 동적으로 요소 생성
    const span = document.createElement("span"); 

    // span에 'remove' class 추가
    span.classList.add("remove");

    // span에 &times; 추가  _html 요소이므로 innerHTML
    span.innerHTML = "&times;";

    // span에 click 이벤트 동작 추가 (동적 요소에 이벤트 추가)
    span.addEventListener("click", function(){
        // alert("동적 요소에 이벤트가 추가됨");

        // 클릭된 X버튼의 부모 요소(div.row)를 삭제  //_this==span
        // 요소.remove() : 해당 요소를 제거
        this.parentElement.remove()
    })


    //---------------------------------------------------
    // 조립 : div > input, span
    /* div.append(input);
    div.append(span); */
    div.append(input, span);

    // .container에 div를 마지막 자식으로 추가
    document.querySelector(".container").append(div);

    input.focus(); // 화면에 추가된 input에 포커스
});

// 추가버튼으로 생성된 X버튼의 클래스가 "remove"이니까
// "remove" 클래스 요소를 모두 얻어와
// for문으로 하나씩 접근해서 click 이벤트 동작을 추가~

// -> 안 됨
// 왜?   __html 해석 순서 때문.
// 처음 HMTL 문서 해석 시 remove라는 클래스를 가진 요소가 존재하지 않기 때문.
// 아래 이벤트 동작 추가 구문이 아무 요소에서 적용되지 않음. __ 한 번 안 된 뒤에는 다시는 해석하지 않아 없는 코드처럼 됨.

// * 처음으로 있던 HTML 요소 == 정적 요소
// * JS로 추가되는 요소 == 동적 요소   __없다가 만들어지는 요소


// 정적요소.remove에 이벤트 동작 추가  _우리가 만든 x버튼 동적요소라서 추가되지 않는 것.
const remove = document.getElementsByClassName("remove");

for(let item of remove){
    item.addEventListener("click", function(){
        alert("삭제");
    })
}


//----------------------------------------------

// 계산 버튼 클릭되었을 때
// input 요소에 작성된 값을 모두 얻어와 합한 후 출력

document.getElementById("calc").addEventListener("click", function(){
    
    // 함수는 호출된 시점의 HTML 화면을 기반으로 해석 진행!!!!
    //_ 함수 밖에서 변수를 선언하면X -> 정적요소에만 반응되기 때문에.
    
    const inputList = document.getElementsByClassName("in");
    console.log(inputList);

    let sum = 0;

    for(let input of inputList){
        //_input이라는 요소가 담긴 것
    
        sum += Number(input.value);  // input요소에 작성된 값 누적
                // 요소에서 읽어온 값 또는 내용은 무조건 string
                // -> 필요 시 데이터 파싱(형태 바꾸기) 진행
    }

    alert("합계 : " + sum);
});

