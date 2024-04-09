function LoadNAVBAR(){
    const allElements = document.getElementsByTagName('*');

    for(var i=0; i<allElements.length;i++){
        var el = allElements[i];
        var navpath = el.getAttribute("nav-include-path");
        if(navpath){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function (){
                if(this.readyState==4 && this.status==200){
                    el.innerHTML = this.responseText;
                    el.removeAttribute("nav-include-path");
                }
            }
            xhttp.open("GET",navpath,true);
            xhttp.send();
            return;
    }

    }
}

function LoadFOOTER(){ //footbar를 불러오는 새로운 함수
    //문서의 모든 요소 불러오기
    const allElements = document.getElementsByTagName('*');

    for(var i=0; i<allElements.length;i++){
        // 각 반복마다 한 요소를 변수에 저장
        var el = allElements[i];
        //html 코드에서 볼 수 있듯이, footbar.html의 경로를 불러옴 (요소에 해당 속성이 있을 경우에만)
        var footpath = el.getAttribute("foot-include-path");
        //요소가 그 속성을 가지고 있다면:
        if(footpath){
            //서버에 데이터를 요청하기 위해 XMLHttpRquest 객체를 만듬. (xhttp)
            var xhttp = new XMLHttpRequest();
            // readystate 속성이 변경될 때마다 호출
            xhttp.onreadystatechange = function (){
                //readystate==4는 요청이 완료됨, statue==200은 서버로부터 성공적인 응답을 받았음을 의미
                //여기서 this는 XMLHttpRequest 객체의 다양한 속성과 메서드에 접근할 수 있도록 하기 위해 사용함.
                if(this.readyState==4 && this.status==200){
                    //요소의 innerHTML을 응답 텍스트(로드될 내용)로 설정
                    el.innerHTML = this.responseText;
                    //위에서 받은 경로 속성을 삭제
                    el.removeAttribute("foot-include-path");
                }
            }
            //footpath에 지정된 파일을 열기 위해 요청을 초기화
            xhttp.open("GET",footpath,true);
            xhttp.send();
            //'foot-include-path'를 가진 첫 번째 요소를 로드한 후 함수를 종료하여 중복 로드를 방지ㅏㅁ.
            return;
        }

    }
}