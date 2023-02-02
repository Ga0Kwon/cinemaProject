//포스터에 클릭한 영화 배열 확인용
let Num = 0; 

//영화 포스터
post();
function post(){
	let post = '';
	 movies.forEach((obj,idx)=>{
		 post += `<img src="../movies_DB/img/${obj.img}" onclick="introduce(${idx})">`
	 })
	 document.querySelector('.post').innerHTML = post
}

//영화의 상세내용 출력문

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
	
	let movie_img = `<img src="../movies_DB/img/${movies[N].img}">` 
	
	document.querySelector('.movie_img').innerHTML = movie_img;
	
	info('story')
	evaluate_print(N)
}

//중단 줄거리 예고편 출력
function info( tap ){
	let info ='';
	if(tap == 'story'){
		info +=`${movies[Num].story}`
	}
	
	if(tap == 'tralier'){
		info +=`${movies[Num].tralier}`
	}	
	
	document.querySelector('.data').innerHTML = info
}

//하단 유저 리뷰
function evaluate_print( N ){
	let eva ='';
	evaluate[`${N}`].forEach((o)=>{
		eva += `<div class="user_star">${o.user_1.netizen}</div>
				<div class="user_star">${o.user_1.comment}</div>	`
	
	})
	
	
	document.querySelector('.evaluate').innerHTML = eva;
}


