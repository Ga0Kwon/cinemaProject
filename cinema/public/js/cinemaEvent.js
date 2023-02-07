
/*-------------------------------필요한 변수 선언 s-------------------------------*/
let eventCategory = ["special", "영화/예매", "멤버십/CLUB", "CGV극장별", "제휴/할인"];
/*-------------------------------필요한 변수 선언 e-------------------------------*/

/*--------------------------js 열릴때 호출해야하는 함수 s---------------------------*/
printEventCategory();
categorySelect(0);
/*--------------------------js 열릴때 호출해야하는 함수 e---------------------------*/

function printEventCategory(){
	//
	let html = `<ul class = "nav">`
	
	for(let i = 0; i < eventCategory.length; i++){ //카테고리 목록 배열만큼 반복
		html += `<li style="cursor: pointer;" class = "navbar-brand nav-item categoryItem" onClick = "categorySelect(${i})">${eventCategory[i]}</li>`
	}
	
	html += `</ul>`
	
	document.querySelector('.category_li').innerHTML = html;
}

function categorySelect(categoryIndex){
	//1) li 요소들을 category라는 배열에 넣음.
	let categoryLi = document.querySelectorAll('.categoryItem')
	/*console.log(categoryLi)*/
	for(let i = 0; i < categoryLi.length; i++){
		if(i == categoryIndex){ /*받은 인덱스[클릭한 li 요소]와 배열의 인덱스가 같으면 css 스타일 적용 */
			categoryLi[i].classList.add('categorySelect');
		}else{
			categoryLi[i].classList.remove('categorySelect');
		}
	}
}


/*당첨자를 발표 결과 확인하는 함수*/
function noticeLottery(){
	alert("당첨자 발표!")
}

/*종료된 이벤트 목록을 확인하는 함수*/
function checkEndedEvent(){
	alert("종료된 이벤트!")
}