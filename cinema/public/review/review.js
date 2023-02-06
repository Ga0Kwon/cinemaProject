/*공용*/
//포스터에 클릭한 영화 배열 확인용
let Num = 0; 

//닫기버튼
document.querySelector('.close').addEventListener('click',(e)=>{
	document.querySelector('.wrap').style.display="none"
})

let movie_tap = ['줄거리','예고편','배우/제작진']

/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/


//영화 클릭시 헤더 이미지
function header_print( N ){
	let movie_img =`<div class="header_img" style="
					background-image: url(movies_DB/header_img/${movies[N].img})">
					</div> `;
	
	document.querySelector('.information_header').innerHTML = movie_img
}



//영화 클릭시 해당 영화의 상세내용 출력문
function introduce( N ){
	Num = N;
	document.querySelector('.wrap').style.display="block"
	let title = `<div class="t_title">
						<h3 class="title">${movies[N].title}</h3>
						<span class="e_title">${movies[N].e_title}</span>
					</div>`
	
	document.querySelector('.top_title').innerHTML = title
					
					
	let rating = `<div class="rating">

						<div class="score">
						<div class="viewer">관람객: ${movies[N].viewers}</div> 
							<div class="star">
								<span class="right-star" style="width:${movies[N].viewers*10}%"></span>
							</div>
						</div> 
					     
					     <div class="score">
						<div class="viewer">네티즌: ${movies[N].netizen}</div> 
							<div class="star">
								<span class="right-star" style="width:${movies[N].netizen*10}%"></span>
							</div>
						</div>
				  </div>`
	
	document.querySelector('.star-rating').innerHTML = rating
					
		let details =   `<div class="summary">
					 	<span class="sub_title">개요 </span>` 
		
		 //무비의 카테고리를 순회한다.
		movies[N].category.forEach((obj)=>{
			details += `<span class="capsule">${obj} | </span>`
		})	
					 	
			details += `<span class="capsule"> ${movies[N].country} |</span>
						<span class="capsule">${movies[N].play}분 |</span>
						<span class="capsule">${movies[N].release}개봉</span>
					</div>
					
					<div class="summary">
					 	<span class="sub_title">감독 </span> 
						<span class="capsule">${movies[N].director} </span> 
					</div>
					
					<div class="summary">
					 	<span class="sub_title">출연 </span> `
		movies[N].Actor.forEach((obj)=>{
			details += `<span class="capsule">${obj}  | </span>`
		})	
		
	 details +=	 `</div>
					
					<div class="summary">
					 	<span class="sub_title">등급 </span> 
						<span class="capsule">[국내]${movies[N].grade} </span> 
					</div>
					
					<div class="summary">
					 	<span class="sub_title">흥행 </span> 
						<span class="capsule">${movies[N].total_viewers.toLocaleString()}명 </span> 
					</div>`		
							
	document.querySelector('.top_introduce').innerHTML = details;
	
	let movie_img = `<img src="movies_DB/img/${movies[N].img}">` 
	
	document.querySelector('.movie_img').innerHTML = movie_img;
	
	header_print( N ) //선택한 영화 헤더 출력
	info('story') //선택한 영화 줄거리 먼저 출력
	evaluate_print(N) //선택한 영화 유저리뷰 출력
	movie_Tap() // 중단 영화 탭 출력
}


//중단 영화탭
function movie_Tap(){
	let tap_category =``;
	movie_tap.forEach((tap)=>{
		tap_category += `<li class="tap_category"  onclick="info('${tap}')"> ${tap} </li>`
	})
	document.querySelector('.movie_tap').innerHTML = tap_category ;
	
	info('줄거리') //초기는 줄거리 출력
}

//중단 줄거리, 예고편, 배우 출력
function info( tap ){
	let info ='';
	if(tap == '줄거리'){
		info +=`${movies[Num].story}`
		tap_Select( tap )
		}
	
	
	if(tap == '예고편'){
		info +=`${movies[Num].tralier}`
		tap_Select(tap)
	}	
	
	if(tap == '배우/제작진'){

		Characters[Num].actor_rol.forEach((actor)=>{
		info += `<div class="movie_actor">
					 <img src="movies_DB/actor_img/${actor.img}">
					 <div class="actor_info">
					 	<div class="actor_name">${actor.name}</div>
					 	<div class="actor_rol">${actor.역할}</div>
					 </div>
				</div>`
		})
	tap_Select(tap)	
	}
	document.querySelector('.data').innerHTML = info
}


//탭 선택시 강조
function tap_Select( tap){
	let tap_li = document.querySelectorAll('.tap_category')
		movie_tap.forEach((tap_category,idx)=>{
			if(tap_category == tap)
			{ tap_li[idx].classList.add('tap_Select')}
			else
			{tap_li[idx].classList.remove('tap_Select')}
		})
}



//하단 유저 리뷰 보기
function evaluate_print( idx ){
	let eva ='';
	
	evaluate[idx].user.forEach((o)=>{
		
		eva += `<div class="user">
				  <div class="user_star"> 
					  <div class="u_star">
							<span class="u_right_star" style="width:${o.netizen*10}%"></span>
					  </div>
				  </div>
				  <div class="u_star_num"> ${o.netizen} </div> 
				  <div class="user_content"> ${o.comment} </div>
				</div>`
					

	})
	
	document.querySelector('.evaluate').innerHTML = eva;
}


/*최 하단 유저 별점*/

const drawStar = (target) => {
	document.querySelector(`.w_star span`).style.width = `${target.value * 10}%`;
	document.querySelector(`.star_num`).innerHTML = `${target.value} 점`
}

/*최 하단 유저 리뷰등록*/
function comment(){
	alert('등록되었습니다');

	let netizen = Math.floor(document.querySelector('.star_btn').value);
	let comment = `${document.querySelector('.comment').value}`;
	
	evaluate[Num].user.push({netizen: netizen, comment: comment});
	evaluate_print(Num); //영화리뷰출력
	
	//리뷰 초기호
	document.querySelector(`.w_star span`).style.width = `${0}%`;
	document.querySelector(`.star_num`).innerHTML = `${0} 점`
	document.querySelector('.comment').value=``;

}


