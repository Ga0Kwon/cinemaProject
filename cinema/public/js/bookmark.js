
/*--------------------------로그인 성공했을시------------------------ */
//해당 고객의 즐겨찾기 목록을 불러온다. [영화 정보가 category.js에 있으니까 -> 그곳에서 가져온다.(html에서 링크함)]
printBookMark();

function printBookMark(){
	//html 구성
	let html = ``;
	
	for(let i = 0; i < movieInfo.length; i++){
		for(let j = 0; j < adminInfo.bookmark.length; j++){
			if(movieInfo[i].name == adminInfo.bookmark[j]){ //admin 고객의 북마크한 영화 이름과 반복문을 돌린 movieInfo의 영화 제목과 동일하면
				let color = movieAgeColor(i)
				html += `<tr>
							<td style = "text-align : center;" class = "t_dMoviePoster">
								<div class = "movie_imgInfo">
									<img src = "../img/${movieInfo[i].img}.jpg">
									<span class = "movie_age" style = "background-color : ${color} ">${movieInfo[i].age == 0 ? "전체" : movieInfo[i].age}</span>
								</div>
							</td>
							<td class = "t_dMovieTitle">${movieInfo[i].name}</td>
							<td class = "t_dMovieCategory">${movieInfo[i].category}</td>
							<td class = "t_dMovieBookMark selectBookMark">
								<img onClick = "deleteBookmark(${j})" src = "../img/icon/remove.png">
							</td>
						</tr>`
			}
		}
	}
	document.querySelector('tbody').innerHTML = html;
}
