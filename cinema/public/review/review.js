function a(){
	console.log('클릭');
	document.querySelector('.wrap').style.display="block";
}

//영화의 상세내용 출력문
introduce();
function introduce(){
	let title = `<div class="t_title">
						<h3 class="title">${movies[0].title}</h3>
						<span class="e_title">${movies[0].e_title}</span>
					</div>`
	
	document.querySelector('.top_title').innerHTML = title
					
					
	let rating = `<div class="rating">

						<div class="score">
						<div class="viewer">관람객: ${movies[0].viewers}</div> 
							<div class="star">
								<span class="right-star" style="width:${movies[0].viewers*10}%"></span>
							</div>
						</div> 
					     
					     <div class="score">
						<div class="viewer">네티즌: ${movies[0].netizen}</div> 
							<div class="star">
								<span class="right-star" style="width:${movies[0].netizen*10}%"></span>
							</div>
						</div>
				  </div>`
	
	document.querySelector('.star-rating').innerHTML = rating
					
		let details =   `<div class="summary">
					 	<span class="sub_title">개요 </span>` 
		
		 //무비의 카테고리를 순회한다.
		movies[0].category.forEach((obj)=>{
			details += `<span class="capsule">${obj} | </span>`
		})	
					 	
			details += `<span class="capsule"> ${movies[0].country} |</span>
						<span class="capsule">${movies[0].play}분 |</span>
						<span class="capsule">${movies[0].release}개봉</span>
					</div>
					
					<div class="summary">
					 	<span class="sub_title">감독 </span> 
						<span class="capsule">${movies[0].director} </span> 
					</div>
					
					<div class="summary">
					 	<span class="sub_title">출연 </span> `
		movies[0].Actor.forEach((obj)=>{
			details += `<span class="capsule">${obj}  | </span>`
		})	
		
	 details +=	 `</div>
					
					<div class="summary">
					 	<span class="sub_title">등급 </span> 
						<span class="capsule">[국내]${movies[0].grade} </span> 
					</div>
					
					<div class="summary">
					 	<span class="sub_title">흥행 </span> 
						<span class="capsule">${movies[0].total_viewers.toLocaleString()}명 </span> 
					</div>`		
							
	document.querySelector('.top_introduce').innerHTML = details;
	
	let movie_img = `<img src="../movies_DB/img/${movies[0].img}">` 
	
	document.querySelector('.movie_img').innerHTML = movie_img;

}


info( 'story' )
function info( tap ){
	let info ='';
	if(tap == 'story'){
		info +=`${Tap[0].story}`
	}
	
	if(tap == 'tralier'){
		info +=`${Tap[0].tralier}`
	}	
	
	
	document.querySelector('.data').innerHTML = info
}




