//문의사항 객체
let suggest=[
	{title:'비밀글 입니다.',writer:'익명' ,day:'2023-02-04', status:false },
	{title:'비밀글 입니다.',writer:'익명' ,day:'2023-02-05', status:false },
	{title:'비밀글 입니다.',writer:'익명' ,day:'2023-02-06', status:false },
	{title:'비밀글 입니다.',writer:'익명' ,day:'2023-02-07', status:false },
	{title:'비밀글 입니다.',writer:'익명' ,day:'2023-02-07', status:false },
	]
	
suggest_print() //문의사항 출력




//문의사항 출력 함수
function suggest_print(){
	let html = `<tr> 
					<th class="number"> 번호 </th> <th> </th> <th class="title"> 제목 </th> <th> 작성자 </th> <th> 작성일 </th> <th> 문의상태[접수/완료]  </th>
				</tr>`;
	suggest.forEach((o,i)=>{
		html += `<tr> 
					<td> ${i+1} </td> <td><img src="잠금.jpg"/> </td> <td><a href="#"> ${o.title} </a></td> <td> ${o.writer} </td> <td> ${o.day} </td>`
					
		if(o.status == false){
			html += ` <td> 문의 접수 </td> 
					</tr>`
		}else{html += ` <td> 문의 접수 </td> 
					</tr>`}		 
				 
				 
				
	})
	document.querySelector('.service_table').innerHTML=html;

}