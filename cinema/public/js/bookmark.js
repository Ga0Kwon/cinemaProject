/*해당 사용자 정보 */
let adminInfo = {
	age : 20, 
	bookmark : ['아바타', '영웅','오늘밤, 세계에서 이 사랑이 사라진다해도','장화신은 고양이']
}

/*고객을 담는 객체 배열 */
let customers = [{name : 'admin', password : "1234", info : adminInfo }]

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
/*북마크 열에 별을 클릭하면 해제 여부를 확인하고 해제해야한다 -> 일단 북마크한 것만 출력하므로 별위 색은 다 클릭되어있k */
function deleteBookmark(i){
	let selectBookMark = document.querySelectorAll('.t_dMovieBookMark');
	
	if(confirm(adminInfo.bookmark[i] + "을/를 북마크에서 삭제하시겠습니까?")){
		adminInfo.bookmark.splice(i, 1);
		selectBookMark[i].classList.remove('selectBookMark');
		console.log(adminInfo);
		alert('삭제되었습니다.');
	}
	printBookMark();
}

