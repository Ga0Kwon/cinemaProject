//console.log('js')

let posterList = [
	{img : 'item1.jpg', title : '더 퍼스트 슬램덩크' , grade : 12} ,
	{img : 'item2.jpg', title : '교섭' , grade : 12} ,
	{img : 'item3.jpg', title : '아바타2' , grade : 12} ,
	{img : 'item4.jpg', title : '유령' , grade : 15} ,
	{img : 'item5.jpg', title : '상견니' , grade : 15} ,
	{img : 'item6.jpg', title : '메간' , grade : 15} ,
	{img : 'item7.jpg', title : '영웅' , grade : 12} ,
	{img : 'item8.jpg', title : '장화신은 고양이' , grade : '전체'} ,
	{img : 'item9.jpg', title : '오늘 밤 세계에서 이 사랑이 사라진다 해도' , grade : 12} ,
	{img : 'item10.jpg', title : '캐리와 슈퍼콜라' , grade : '전체'} 
]

poster_print();
function poster_print(){
	html = ``
	posterList.forEach( (o,i) => {
		html += `<div class="item">
					<a href="#"><img src="img/${ o.img }"></a>
					<div class="posterinfo">
						<div class="postertitle">${ o.title }<span class="badge rounded-pill grage">${ o.grade }</span></div>
					</div>
				</div>`
	})
	document.querySelector('.itembox').innerHTML = html;
}