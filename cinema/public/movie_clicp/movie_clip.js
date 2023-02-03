/*카테고리 목록 배열*/
let categoryArrays = ['전체','드라마', '멜로/로맨스', '뮤지컬', '판타지', '액션',
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
		html += `<li style="cursor: pointer;" class = "navbar-brand nav-item categoryItem" 
				  onClick = "categorySelect(${i})">${categoryArrays[i]}</li>`
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
	
	clip_print(categoryIndex);
}

// 3. 카테고리별 예고편 출력
// 선택한 카테고리와 영화의 카테고리가 동일시 출력해야됨 (전체, 0 인덱스는 제외) 
function clip_print( idx ){
	
	let clip = ``;
	if(idx == 0){
		movies.forEach((o)=>{ //movies.js 파일의 영화 객체의 트레일러 뽑아오기
			clip += ` <div class="movie_tralier">
						 <div class="tralier">
						 	${o.tralier} 
						 </div>
						 <div class="cate"><span class="sub_title">  개요 :  </span>`
		o.category.forEach((category)=>{ //movies.js 파일의 영화 객체의 카테고리
			clip += ` ${category} `
			
		})
		
			clip += `</div>
					 <div class="director"> <span class="sub_title">  감독 :  </span> ${o.director} </div>
					 <div class="cate"><span class="sub_title">  배우 : </span>`
			
			
		o.Actor.forEach((actor)=>{ //movies.js 파일의 영화 객체의 카테고리
			clip += ` ${actor}`
			
		})		  
					  
			clip += `</div> </div>`
					 
		})
	}
	
	document.querySelector('.clip').innerHTML = clip;
}



