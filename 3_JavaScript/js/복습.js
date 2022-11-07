/*
JS의 for문 (4가지)

for문으로 배열 요소 반복 접근하기

1. 일반 for문 - 배열, 컬렉션
        for(let i; i<arr.length; i++){ }

2. forEach문 - 배열
        배열.forEach(function(item, index){반복수행 코드})   
    
3. for of - 배열, 컬렉션   * HTMLCollection, NodeList -> Symbol.iterator가 존재하는 객체에 사용 가능
        for(item of 배열(또는 컬렉션)){}

4. for in - JS 객체용 for문(배열용X)
        for(let key in 객체)  

item : 현재 접근중인 요소
index : 현재 인덱스
*/

const container = document.getElementsByClassName("container")[0];
const area = document.getElementsByClassName("area");
const box = document.getElementsByClassName("box");
const boxColor = document.getElementsByClassName("box-color");

container.style.display = "flex";

for(let item of area){
        item.style.height = "170px";
        item.style.width = "150px";
        item.style.border = "1px solid black";
        item.style.display = "flex";
        item.style.flexDirection = "column";
}

for(let item of box){
        item.style.height = "150px";
        item.style.borderBottom = "1px solid black";
}


for(let item of boxColor){
        item.style.border = "none";
        item.style.outline = "none";
}

for(let i=0; i<boxColor.length; i++){
        boxColor[i].addEventListener("change", function(){
                box[i].style.backgroundColor = this.value;
        })
}


document.getElementById("btn1").addEventListener("click", function(){
        const duration = document.getElementById("input1").value;

        for(let item of box){
                item.style.transitionDuration = duration + "s";
        }

        document.getElementById("print1").innerText = duration;
})

document.getElementById("clearBtn").addEventListener("click",function(){
        for(let item of box){
                item.style.backgroundColor = "";
                item.style.transitionDuration = 0 + "s";
        }

        for(let item of boxColor){
                item.value = "";
        }

        document.getElementById("print1").innerText = 0;
        document.getElementById("input1").value = "";
})