
// 색 출력 영역

// 요소를 얻어와서 변수에 저장

// 클래스명, 태그명, name속성값, querySelectorAll() 같은 경우
// 요소를 얻어올 때 배열 형식으로 반환!!!!!!! (제발 잊지 말자)
const container = document.getElementsByClassName("container")[0];

const area = document.getElementsByClassName("area");
const box = document.getElementsByClassName("box");
const boxColor = document.getElementsByClassName("box-color");


// JS로 CSS 추가하기

// container 클래스 요소에 display : flex 추가
container.style.display = "flex";

// area 클래스 요소에 
// 높이 170px, 너비 150px, 테두리 1px 검정색 실선
// display : flex, main-axis 방향 : 컬럼
        //area.style.height = "170px";  //_안됨! area는 배열이기 때문에.
// 일반 for문 || for of 둘 중 하나만 사용 가능
for(let item of area){
    // item == area 배열에 담긴 요소를 순차적으로 하나씩 꺼내 저장하는 변수
    item.style.height = "170px";
    item.style.width = "150px";
    item.style.border = "1px solid black";
    item.style.display = "flex";
    item.style.flexDirection = "column";  //_flexDirection <- flex-driection 표기법 변경해서 적으면 됨.
}


// box 클래스 요소에 높이 150px, 아래쪽 테두리 1px 실선 검정색
for(let item of box){
    item.style.height = "150px";
    item.style.borderBottom = "1px solid black";
}   

// box-color 클래스 요소의 테두리와 outline 없애기
for(let item of boxColor){
    item.style.border = "none";
    item.style.outline = "none";
}

// box-color 클래스 요소의 입력된 값이 변했을 때
// 위에 있는 box 클래스 요소의 배경색을 변경
// + 입력된 input 요소 글씨색도 변경
for(let i=0; i<boxColor.length; i++){

    // change  : 포커스를 잃고나서 또는 엔터 입력시 
    //           작성된 값이 이전 값과 다를 경우.  (_이전 값과 다르면 실행이 안됨.)
    // blur    : 포커스를 잃었을 때

    boxColor[i].addEventListener("change", function(){
        // console.log(this.value);

        // box-color input 태그와 같은 인덱스 번째 box 요소 배경색 변경
        box[i].style.backgroundColor = this.value;
        
        //boxColor[i].style.color = this.value; // 글자색 변경
        this.style.color = this.value; // 글자색 변경 (위와 같음)
    })

}


// transition-duration 변경 버튼 클릭 시
// #input1에 작성된 값 만큼의 transition-duration을 
// 모든 박스 요소에 추가
// + #print1 요소의 내용을 #input1에 작성된 값으로 변경
// hint1. transition-duration에 세팅되는 값은 초단위(s) 입니다.

// const print1 = document.getElementById("print1");
// const input1 = document.getElementById("input1");
// const btn1 = document.getElementById("btn1");

// for(let i=0; i<box.length; i++){
    //     btn1.addEventListener("click", function(){
        
        //         box[i].style.transitionDuration = input1.value + "s";
        //         print1.innerText = input1.value;
        //     })
// }



document.getElementById("btn1").addEventListener("click", function(){
    const duration = document.getElementById("input1").value;  // #input1의 값
    
    for(let item of box){ // box 배열에 담긴 요소를 하나씩 꺼내 item에 저장
        item.style.transitionDuration = duration + "s";
    }

    // #print1 요소의 내용을 #input1에 작성된 값으로 변경
    document.getElementById("print1").innerText = duration;

})


// #clearBtn 클릭 시
// .box의 모든 배경색을 없애고
// .box-color에 작성된 값도 없애기
// 초기화

document.getElementById("clearBtn").addEventListener("click", function(){
    for(let item of box){ // .box 배경색 삭제
        item.style.backgroundColor = "";
        item.style.transitionDuration = 0 + "s";
    }

    for(let item of boxColor){ // .box-color 값 삭제
        item.value = "";
    }

    document.getElementById("print1").innerText = 0;
    document.getElementById("input1").value = "";

})