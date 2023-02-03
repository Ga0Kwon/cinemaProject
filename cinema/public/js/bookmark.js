/*해당 사용자 정보 */
let adminInfo = {
	age : 20, 
	bookmark : ['아바타', '영웅','오늘밤, 세계에서 이 사랑이 사라진다해도']
}

/*고객을 담는 객체 배열 */
let customers = [{name : 'admin', password : "1234", info : adminInfo }]

/*--------------------------로그인 성공했을시------------------------ */
//해당 고객의 즐겨찾기 목록을 불러온다. [영화 정보가 category.js에 있으니까 -> 그곳에서 가져온다.(html에서 링크함)]

printBookMark()

function printBookMark(){
	//html 구성
	let html = ``;
	
	for(let i = 0; i < movieInfo.length; i++){
		for(let j = 0; j < adminInfo.bookmark.length; j++){
			if(movieInfo[i].name == adminInfo.bookmark[j]){ //admin 고객의 북마크한 영화 이름과 반복문을 돌린 movieInfo의 영화 제목과 동일하면
				html += `<tr>
							<td style = "text-align : center;" class = "t_dMoviePoster">
								<img style = "width : 130px;" src = "../img/${movieInfo[i].img}.jpg"><!-- 북마크한 영화의 포스터 -->
							</td>
							<td class = "t_dMovieTitle">${movieInfo[i].name}</td> <!-- 북마크한 영화의 제목 -->
							<td class = "t_dMovieAudience">${movieInfo[i].age}세 관람가</td><!-- 북마크한 영화의 관라가 -->
							<td class = "t_dMovieBookMark selectBookMark">★</td><!-- 북마크 여부 및 해제 -->
						</tr>`
			}
		}
	}
	document.querySelector('tbody').innerHTML = html;
}
/*북마크 열에 별을 클릭하면 해제 여부를 확인하고 해제해야한다 -> 일단 북마크한 것만 출력하므로 별위 색은 다 클릭되어있다. */
document.querySelector('.selectBookMark').addEventListener('click', (e) => {
	
})