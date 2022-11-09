
// Node 확인하기
document.getElementById("btn1").addEventListener("click", function(){
    // 부모
    // 요소.parentNode : 요소의 부모 노드를 탐색해서 반환
    
    // 자식
    // 요소.childeNodes : 요소의 자식 노드를 모두 반환(NodeList 형태)
    // 요소.firstChild : 첫 번째 자식 노드 탐색해서 반환
    // 요소.lastChild : 마지막 자식 노드 탐색해서 반환
    // 요소.childeNodes[인덱스]: 인덱스 번째 자식 노드를 모두 반환(NodeList 형태)
    

    // 형제
    // 요소.previousSibling : 요소의 이전 형제 노드를 반환
    // 요소.nextSibling  : 요소의 다음 형제 노드를 반환


    // #test의 자식 노드를 모두 얻어와서 확인
    const testNodeList = document.getElementById("test").childNodes;   //_함수 아닌 속성

    console.log(testNodeList);


    // 노드 탐색
    const li1 = document.getElementById("li1");
    console.log(li1.parentNode);  // 부모 노드 탐색

    // #li1의 부모의 배경색을 orange로 변경 **
    li1.parentNode.style.backgroundColor = "orange";



})