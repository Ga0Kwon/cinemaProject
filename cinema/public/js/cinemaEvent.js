
/*-------------------------------필요한 변수 선언 s-------------------------------*/
let eventCategory = ["special", "영화/예매", "멤버십/CLUB", "영화찾아삼만리 극장별", "제휴/할인"];

let specialEvent = [{img : 'special/타이타닉굿즈', name : '[타이타닉] IMAX 스페셜 굿즈', dDay : '2023.02.03~2023.02.28' },
					{img : 'special/필름마크100th', name : '영화찾아삼만리 필름마크 100th 기념! [파코니의 방구석 어드벤처]', dDay : '2023.01.30~2023.02.12'},
					{img : 'special/바빌론필름마크', name : '[바빌론]필름마크', dDay : '2023.01.31~2023.02.28'},
					{img : 'special/아카데미후보작', name : '[2023 아카데미 기획전]아카데미 후보작을 한눈에!', dDay : '2023.02.06~2023.03.21'},
					{img : 'special/앤트맨과와스프', name : '[앤트맨과 와스프:퀸덤...] 아크릴탑퍼컵 콤보 론칭', dDay : '2023.02.06~2023.02.28'},
					{img : 'special/카운트1+1라이브특가', name : '[카운트]개봉기념! 1+1 라이브특가!', dDay : '2023-02-02~2023-02-12'},
					{img : 'special/디카페인콜드브루', name : '카페인 부담 없이 편안한, 디카페인 콜드브루!', dDay : '2023.02.01~2023.02.28'},
					{img : 'special/폰케이스', name : '인생영화 티켓으로 나만의 폰케이스로 만들기!', dDay : '2023.01.31~2023.02.28'},
					{img : 'special/2월라인업미리', name : '[이달의 아이스콘] 2월 라인업 미리 만나보기', dDay : '2023.01.31~2023.02.28'},]
					
let movieReserve = [{img : 'reserve/이동진', name : '이동진의 언택트톡[TAR타르]', dDay : '2023.02.06~2023.02.11'},
					{img : 'reserve/뮤지컬레드북3주차', name : '[뮤지컬 레드북]3주차 현장특전 이벤트', dDay : '2023.02.06~2023.02.14'},
					{img : 'reserve/슬램덩크응원', name : '[더 퍼스트 슬램덩크]응원상영', dDay : '2023.02.06~2023.02.12'},
					{img : 'reserve/bts', name : '[BTS:옛 투 컴 인 시네마]2주차 특전', dDay : '2023.02.06~2023.02.14'},
					{img : 'reserve/상견니3주차', name : '<상견니>3주차 현장 증정 이벤트(1차)', dDay : '2023.02.06~2023.02.10'},
					{img : 'reserve/단순한열정', name : '[단순한 열정]라이브러리톡', dDay : '2023.02.06~2023.02.15'},
					{img : 'reserve/뮤지컬레드북N차', name : '[뮤지컬 레드북]N차 관람 SNS 인증 이벤트', dDay : '2023.02.03~2023.02.14'},
					{img : 'reserve/다음소희무대인사', name : '[다음 소희]개봉 무대인사', dDay : '2023.02.02~2023.02.11'},
					{img : 'reserve/성스러운거미', name : '[성스러운 거미]리이브러리톡', dDay : '2023.02.02~2023.02.11'}]
					
let memberShip = [{img : 'membership/vipplay', name : '[영화찾아삼만리 VIP] VIP PLAY', dDay : '2022.12.01~2023.02.28'},
				  {img : 'membership/애프터썬아트하우스', name : '[애프터썬]아트하우스클럽 굿즈', dDay : '2023.01.27~2023.02.14'},
				  {img : 'membership/svip스페셜기프트', name : '[영화찾아삼만리 VIP] SVIP 스페셜 기프트', dDay : ''},
				  {img : 'membership/svip만원의 행복', name : '[영화찾아삼만리 VIP] SVIP 만원의 행복', dDay : ''},
				  {img : 'membership/svip,vvip원데이프리패스', name : '[영화찾아삼만리 VIP] SVIP/VVIP 원데이 프리패스', dDay : ''},
				  {img : 'membership/예매오픈알림서비스', name : '[영화찾아삼만리 VIP] 예매 오픈 알림 서비스', dDay : ''},
				  {img : 'membership/더블적립', name : '[영화찾아삼만리 VIP] 더블 적립', dDay : ''},
				  {img : 'membership/리필적립', name : '[영화찾아삼만리 VIP] 리필 적립', dDay : ''},
				  {img : 'membership/생일콤보', name : '[영화찾아삼만리 VIP] 생일 콤보', dDay : ''}]

let cgvCinema =[{img : 'cgv/', name : '2월 인사이터 X CGV 강의', dDay : '2023.02.07~2023.02.24'},
				{img : 'cgv/', name : 'CGV명동역 씨네라이브러리Re: Open 이벤트', dDay : '2023.02.06~2023.03.31'},
				{img : 'cgv/', name : '압구정 제9회 스토리업쇼츠 상영회', dDay : '2023.02.06~2023.02.18'},
				{img : 'cgv/', name : '2월 14일 사이다경제', dDay : '2023.02.06~2023.02.14'},
				{img : 'cgv/', name : '동탄 PRIVATE BOXOPEN EVENT', dDay : '2023.02.03~2023.02.28'},
				{img : 'cgv/', name : 'CGV서면상상마당 아트라운지', dDay : '2023.02.03~2023.03.02'},
				{img : 'cgv/', name : '배민1 주문하고 경품 받자!', dDay : '2023.02.01~2023.02.28'},
				{img : 'cgv/', name : '[렉쳐콘서트]예술가의 커피 칸타타', dDay : '2023.02.01~2023.02.26'},
				{img : 'cgv/', name : '[삼일절스페셜]대한민국 프리퀄 - 그날의 함성', dDay : '2023.02.01~2023.03.01'}]
/*이런 식으로 각각의 객체 배열을 배열로 감쌀 예정 */
let eventItem = [specialEvent, movieReserve, memberShip]

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