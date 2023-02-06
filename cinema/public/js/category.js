/*카테고리 목록 배열*/
let categoryArrays = ['드라마', '멜로/로맨스', '뮤지컬', '판타지', '액션',
 				'코미디','스릴러','모험','SF','공포','애니메이션']
	 
/*------------------------js실행할때 실행시켜야하는 함수 start-------------------------*/

printCategoryList();
categorySelect(0); //기본값 카테고리 '드라마'

/*-------------------------js실행할때 실행시켜야하는 함수 end--------------------------*/

/*1. 카테고리 출력하는 함수 -> [1)js 열렸을 때]*/
function printCategoryList(){
	//
	let html = `<ul class = "nav">`
	
	for(let i = 0; i < categoryArrays.length; i++){ //카테고리 목록 배열만큼 반복
		html += `<li style="cursor: pointer;" class = "navbar-brand nav-item categoryItem" onClick = "categorySelect(${i})">${categoryArrays[i]}</li>`
	}
	
	html += `</ul>`
	
	document.querySelector('.category_li').innerHTML = html;
}

/*2. 카테고리 선택했을 때 카테고리 선택 디자인 바꾸는 함수 [1) js 열렸을 때  2) 카테고리 선택했을 때 3) input을 통해 검색할 경우 카테고리 li도 바꾸기] */
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
	printMovie(categoryIndex); //카테고리를 선택할때, 카테고리별 영화를 출력해야하므로, 받은 인수를 전달해야한다.
}
/* 3. input을 통해 영화를 검색하여 카테고리를 찾는 경우 [1) 영화제목을 입력받았을 때]*/
document.querySelector('.search_btn').addEventListener('click', (e)=>{
	
	//1) input text를 통해 입력받은 값을 변수에 저장
	let inputMovieName = document.querySelector('.searchMovieTitle').value;
	
	if(inputMovieName == ""){ /*만약, input 값에 입력을 안한 경우 더이상 함수를 실행하지 않는다. */
		return;
	}
	
/*	console.log(inputMovieName)*/
	/*let categoryTitle = [];*/ //일부 혹은 전체 영화 제목이 들어간 카테고리명을 담을 변수
	let findMovieName = []; // 입력한 정보에 관련된 영화 이름들이 들어갈 배열에 저장 
	for(let i = 0; i < movieInfo.length; i++){ //영화 정보를 담고 있는 객체 배열만큼 반복
		/*console.log(movieInfo[i].name)*/
		//input으로 입력받은 일부 혹은 전체 영화 제목(문자열)을 포함하고 있는 영화를 찾았다면.
		if((movieInfo[i].name).includes(inputMovieName)){ 
			//일부 텍스트만을 검색했을 경우 같은 단어를 쓰는 영화가 있을 수 있기 때문에 배열로 저장한다.
			findMovieName.push(movieInfo[i].name);
			/*categoryTitle = movieInfo[i].category*/ //해당 인덱스의 카테고리를 저장한다.
			/*console.log(categoryTitle)*/
		}
	}
	//이름으로 찾은경우 해당 카테고리 select 클래스는 지워줘야하므로
		// 그이유 : 찾은 영화가 만약 유량의 달[드라마]과 유령[액션]이라할 때, "유"를 검색한다고 치면
		// 서로 다른 카테고리이기 때문에 카테고리는 의미가 없다. 
		// 해당 class style을 지워줘야하는 이유
	categorySelect(-1);
	printInputNameMovie(findMovieName); 

	
/*	for(let i = 0; i < categoryArrays.length; i++){ //카테고리 배열의 크기만큼 반복하여 저장한 카테고리명으로 찾는다.
		//0번째를 한 이유는, 제목을 입력하여 영화를 찾는 사람 입장에서 카테고리 창이 변하고 그러는 것은 상관이 없을 것 같아 빼주었다.
		if(categoryTitle[0] == categoryArrays[i]){ //카테고리 배열의 요소 값이 입력받은 영화제목의 카테고리명과 같다면
				//해당 영화 이름을 검색했을 때, 이름이 비슷한 영화만 출력해야하므로 카테고리는 표시 x
			printInputNameMovie(findMovieName); 
		}
		//한 영화가 카테고리를 여러개 가지고 있을 수 있기 때문에 영화마다 가진 카테고리 수만큼 반복문을 돌려줘야한다.
		/*for(let j = 0; j < categoryTitle.length; i++){ 
			if(categoryTitle[j] == categoryArrays[i]){ //카테고리 배열의 요소 값이 입력받은 영화제목의 카테고리명과 같다면
				let index = categoryTitle[0]
				categorySelect(index) //해당 카테고리 인덱스로 카테고리를 선택
			}	
		}
	}*/
	
	/*document.querySelector('.searchMovieTitle').value = ""*/ //선택했다면 카테고리 input 부분 초기화
})

/*영화를 출력하는 함수 */
function printMovie(index){
	//기본 html 구성
	let html = ``
	
	for(let i = 0; i < movieInfo.length; i++){
		let ageColor = movieAgeColor(i);
		/*console.log(ageColor);*/
		for(let j = 0; j < movieInfo[i].category.length; j++){
			if(movieInfo[i].category[j] == categoryArrays[index]){ //영화별로 장르가 한개인게 아니라, 반복문 중첩이어야한다.
				html += `<div class = "movie_item" onClick = "inputBookmark(${i})">
							<div class = "movie_img">
							<span class = "movie_age" style = "background-color : ${ageColor} ">${movieInfo[i].age == 0 ? "전체" : movieInfo[i].age}</span>
							<img src = "../img/${movieInfo[i].img}.jpg">
						</div>
						<div class = "movie_grade">
							★★★★★ 
							<span style="cursor: default; width : ${movieInfo[i].star*4.0}% !important" " class="star_grade">★★★★★</span>
							<span class = "number_grade">${movieInfo[i].star == 0 ? "개봉예정" : movieInfo[i].star}</span>
						</div>
						<div class = "movie_ReleaseBox">
							<span class = "movie_ReleaseDate">개봉일 : ${movieInfo[i].release}</span>
						</div>
					</div> `
			}
		}
				
		/*movieInfo[i].star*4.0에서 4.0을 곱해준 이유는 margin이나 다른 것들로 인해 width가 78만 넘어가도 별 5개로 채워짐.
		  그래서, 10을 곱할 수는 없었고, 계산을 해보니 100%가 별 5개니까 별 한개당 20%인셈 
		  만약, 별점이 7.99일경우 10을 곱하면 79.9이고, 별 한개가 20이니까 별 3개하고 19.9 별 3개에 거의 꽉 찬 별 한개가 칠해지면 됨.
		  그렇게 나오도록 수를 곱해봤는데 4.0이 가장 적당했기 때문에, 4.1으로 선정*/
	}
	document.querySelector('.content').innerHTML = html;
}

/*text input을 통해 영화를 검색하려는 경우에 출력해주는 함수. */
function printInputNameMovie(findMovieName){
	let html = ``;
	
	let findMovieCategory = [];
	
	for(let i = 0; i < movieInfo.length; i++){
		for(let j = 0; j < findMovieName.length; j++){
			//영화 객체 배얄에 있는 영화 제목과 인수로 받은 영화제목배열의 요소값이 일치할때
			if(findMovieName[j] == movieInfo[i].name){ 
				/* 카테고리 배열의 영화 배열의 카테고리명을 넣는다. */
				findMovieCategory.push(movieInfo[i].category)
			}
		}
	}
	
	for(let i = 0; i < movieInfo.length; i++){
		let ageColor = movieAgeColor(i); //관람가에 따른 색상 변경함수 반환값 저장
		for(let j = 0; j < findMovieName.length; j++){
			/* 해당 영화의 카테고리와 영화 이름 배열과 크기는 같을 수밖에 없음 */
			if(movieInfo[i].name == findMovieName[j]){ //만약 인수로 받아온 영화이름과 객체배열 영화이름과 같다면 출력해줘야함!
				html += `<div class = "movie_item" onClick = "inputBookmark(${i})">
							<div class = "movie_img">
							<span class = "movie_category">${findMovieCategory[j]}</span>
							<span class = "movie_age" style = "background-color : ${ageColor} ">${movieInfo[i].age == 0 ? "전체" : movieInfo[i].age}</span>
							<img src = "../img/${movieInfo[i].img}.jpg">
						</div>
						<div class = "movie_grade">
							★★★★★ 
							<span style="cursor: default; width : ${movieInfo[i].star*4.1}% !important" " class="star_grade">★★★★★</span>
							<span class = "number_grade">${movieInfo[i].star == 0 ? "개봉예정" : movieInfo[i].star}</span>
						</div>
						<div class = "movie_ReleaseBox">
							<span class = "movie_ReleaseDate">개봉일 : ${movieInfo[i].release}</span>
						</div>
					</div> `
			}
		}
	}
	document.querySelector('.content').innerHTML = html;
}

/*해당 영화 포스터를 누를 경우 즐겨찾기에 저장할 건지 묻고, 즐겨찾기에 추가하는 함수 */
function inputBookmark(i){
	/*console.log(movieInfo[i].name + "누름");*/
	let check = 0; //유효성 검사
	
	if(confirm(movieInfo[i].name + "를 즐겨찾기 목록에 추가하시겠습니까")){
		for(let j = 0; j < adminInfo.bookmark.length; j++){ //고객 정보에 들어가있는 해당 북마크의 길이만큼
			if(movieInfo[i].name == adminInfo.bookmark[j]){//민약 북마크에 같은 이름의 영화가 있을 경우
				check++;
				alert("이미 즐겨찾기 목록에 있는 영화입니다.");
			}
		}
		if(check == 0){ //우효성 검사 통과하면
			adminInfo.bookmark.push(movieInfo[i].name);	//해당 영화 이름을 배열에 추가한다.
			alert("추가되었습니다.");		
		}
	}
	
	console.log(adminInfo.bookmark); // => 배열에 추가되는지 확인용
}
