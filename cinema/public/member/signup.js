
/* 아이디, 비밀번호, 이메일 배열 선언*/

let userArray = [ 
				{ id: 'qwe123' , pw: 'qwe123' , email: 'qwe123@naver.com'} ,
				{ id: 'asd123' , pw: 'asd123' , email: 'qwe123@naver.com'} ,
				{ id: 'zxc123' , pw: 'zxc123' , email: 'qwe123@naver.com'} ,
				{ id: 'movie' , pw: 'movie' , email: 'qwe123@naver.com'} ,
				{ id: 'actor' , pw: 'actor' , email: 'qwe123@naver.com'} ,
			]


function singupbtn(){ // f s
	let id = document.querySelector('.id').value;
	let pw = document.querySelector('.pw').value;
	let pw_check = document.querySelector('.pw_check').value;
	let name = document.querySelector('.name').value;
	let email = document.querySelector('.email').value;
	let mw = document.querySelector('.mw').value;

	// 유효성검사
	let check = true;	
		//1. id 빈 값일 경우, 빈 값이 아닐 경우
		
		if ( id.length == 0 ){
			document.querySelector('.id_null').style.display = 'block';
			check = false;
			}else if(id.length != 0 ){
			document.querySelector('.id_null').style.display = 'none';				
			} 
			
		//2. pw 빈 값일 경우, 빈 값이 아닐 경우
		if ( pw.length == 0 ){
			document.querySelector('.pw_null').style.display = 'block';
			check = false;
			}else if ( pw.length != 0 )	{
			document.querySelector('.pw_null').style.display = 'none';				
			}
			
			// 2.1 pw 빈 값 X + pw 와 pw_check와 값이 다른 경우, 같은 경우
		if (pw != pw_check){
			document.querySelector('.pwcheck_null').style.display = 'block';
			check = false;
			}else if(pw == pw_check){
			document.querySelector('.pwcheck_null').style.display = 'none';
			}

			// 2.2 pw와 pw_check 값이 같은 경우
		
		// 3. name 빈 값일 경우, 빈 값이 아닐 경우
		if ( name.length == 0 ){
			document.querySelector('.name_null').style.display = 'block';
			check = false;
			}else if ( name.length != 0)	{
			document.querySelector('.name_null').style.display = 'none';				
			}
		// 4. email 빈 값일 경우, 빈 값이 아닐 경우
		if ( email.length == 0 ){
			document.querySelector('.email_null').style.display = 'block';
			check = false;
			} else if ( email.length != 0 && email.indexOf('@') == -1){
			document.querySelector('.email_null').style.display = 'none';
			document.querySelector('.email_null2').style.display = 'block';
			check = false;
			} else if ( email.length != 0 && email.indexOf('@') != -1 ){
			document.querySelector('.email_null2').style.display = 'none';
			}
		
		// 5. 성별이 체크되어 있지 않은 경우
		if ( mw == "성별" ){
			document.querySelector('.mw_null').style.display = 'block';
			check = false;
			} else if ( mw != "성별"){
			document.querySelector('.mw_null').style.display = 'none';
			}
			
	for(let i = 0; i <userArray.length; i++){ // 문구 위치 바꾸면 됨!
		if(id == userArray[i].id){
			document.querySelector('#id_error').style.display = 'inline-block';
		check = false; return; 
		}else if(id != userArray[i].id ){
			document.querySelector('#id_error').style.display = 'none';
		}
	}
	
	if(check){
		location.href="login.html"
	}
	
}// f e

	// x 버튼 누를시 광고 삭제
document.querySelector('.xbtn').addEventListener('click', (e) => {
	document.querySelector('.header_banner').style.display = 'none';
})

document.querySelector('.xbtn2').addEventListener('click', (e) => {
	document.querySelector('.footer_banner').style.display = 'none';
})