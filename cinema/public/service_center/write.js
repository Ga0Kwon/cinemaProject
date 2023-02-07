function cancel(){
	alert('취소되었습니다.')
	document.querySelector('.sel').value = ``
	document.querySelector('.rad').value = ``
	document.querySelector('.form-control').value = ``
}

function send(){
	let check = true
	let sel = document.querySelector('.sel').value
	let title = document.querySelector('.title').value
	let textarea = document.querySelector('.textarea').value
	let name = document.querySelector('.name').value
	
	let one = document.querySelector('.one').value
	let two = document.querySelector('.two').value
	let thr = document.querySelector('.thr').value
	
	let five = document.querySelector('.five').value
	let six = document.querySelector('.six').value

	if(sel == 'false'){alert('문의종류를 선택해주세요'); check=false; return;}
	if(title  == ''){alert('제목을 입력해주세요'); check=false; return;}
	if(textarea  == ''){alert('내용을 입력해주세요'); check=false; return;}
	if(name  == ''){alert('이름을 입력해주세요'); check=false; return;}
	if((one  == '') && (two  == '') && (thr  == '')){alert('전화번호를 입력해주세요'); check=false; return;}
	if((five  == '') || (six  == '')){alert('이메일을 입력해주세요'); check=false; return;}
	
	if(check=true){alert('등록되었습니다.');}
}