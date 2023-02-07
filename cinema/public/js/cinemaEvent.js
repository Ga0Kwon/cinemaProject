
/*-------------------------------필요한 변수 선언 s-------------------------------*/
let eventCategory = ["special", "영화/예매", "멤버십/CLUB", "CGV극장별", "제휴/할인"];

let specialEvent = [{img : 'special/타이타닉굿즈', name : '[타이타닉] IMAX 스페셜 굿즈', dDay : '2023.02.03~2023.02.28' },
					{img : 'special/필름마크100th', name : 'CGV 필름마크 100th 기념! [파코니의 방구석 어드벤처]', dDay : '2023.01.30~2023.02.12'},
					{img : 'special/바빌론필름마크', name : '[바빌론]필름마크', dDay : '2023.01.31~2023.02.28'},
					{img : 'special/아카데미후보작', name : '[2023 아카데미 기획전]아카데미 후보작을 한눈에!', dDay : '2023.02.06~2023.03.21'},
					{img : 'special/앤트맨과와스프', name : '[앤트맨과 와스프:퀸덤...] 아크릴탑퍼컵 콤보 론칭', dDay : '2023.02.06~2023.02.28'},
					{img : 'special/카운트1+1라이브특가', name : '[카운트]개봉기념! 1+1 라이브특가!', dDay : '2023-02-02~2023-02-12'},
					{img : 'special/디카페인콜드브루', name : '카페인 부담 없이 편안한, 디카페인 콜드브루!', dDay : '2023.02.01~2023.02.28'},
					{img : 'special/폰케이스', name : '인생영화 티켓으로 나만의 폰케이스로 만들기!', dDay : '2023.01.31~2023.02.28'},
					{img : 'special/2월라인업미리', name : '[이달의 아이스콘] 2월 라인업 미리 만나보기', dDay : '2023.01.31~2023.02.28'},]

/*이런 식으로 각각의 객체 배열을 배열로 감쌀 예정 */
let eventItem = [specialEvent]

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
	printEventList(categoryIndex)
}

/*이벤트 요소들을 출력하는 함수 */
function printEventList(itemIndex){
	//html 구성
	let html = ``;
	
	for(let i = 0; i <eventItem[itemIndex].length; i++){
		html += `<div class = "evnet_items" onClick = "evnetInfo()"> <!-- 이벤트 요소 1개 -->
						<div class = "event_img"> <!-- 이벤트 사진 -->
							<img src = "../img/event/${eventItem[itemIndex][i].img}.jpg">
						</div>
						<div class = "event_info">
							<span>${eventItem[itemIndex][i].name}</span>
							<p>${eventItem[itemIndex][i].dDay}</p>
						</div>
				</div>`
	}
	
	document.querySelector('.content').innerHTML = html;
}

/*당첨자를 발표 결과 확인하는 함수*/
function noticeLottery(){
	alert("당첨자 발표!")
}

/*종료된 이벤트 목록을 확인하는 함수*/
function checkEndedEvent(){
	alert("종료된 이벤트!")
}