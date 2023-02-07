//console.log('js')

let posterList = [
	{img : 'item1.jpg', title : '더 퍼스트 슬램덩크'} ,
	{img : 'item2.jpg', title : '교섭'} ,
	{img : 'item3.jpg', title : '아바타2'} ,
	{img : 'item4.jpg', title : '유령'} ,
	{img : 'item5.jpg', title : '상견니'} ,
	{img : 'item6.jpg', title : '메간'} ,
	{img : 'item7.jpg', title : '영웅'} ,
	{img : 'item8.jpg', title : '장화신은 고양이'} ,
	{img : 'item9.jpg', title : '오늘 밤 세계에서 이 사랑이 사라진다 해도'} ,
	{img : 'item10.jpg', title : '캐리와 슈퍼콜라'} 
]

poster_print();

function poster_print(){
	html = ``
	posterList.forEach( (o,i) => {
		html += `<div class="item">
					 <img src="img/mainimg/${o.img}" onclick="introduce(${i})">
					<div>
						<div class="name">${ o.title }</div>
					</div>
				</div>`
	})
	document.querySelector('.itembox').innerHTML = html;
}