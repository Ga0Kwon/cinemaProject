console.log('js 작동 확인')

/* 아이디, 비밀번호 배열 선언*/

let userArray = [ 
				{ id: 'qwe123' , pw: 'qwe123'} ,
				{ id: 'asd123' , pw: 'asd123'} ,
				{ id: 'zxc123' , pw: 'zxc123'} ,
				{ id: 'movie' , pw: 'movie'} ,
				{ id: 'actor' , pw: 'actor'} ,
			]


/* 로그인 */			
function login(){
	let id = document.querySelector('.login_id').value;
	let pw = document.querySelector('.login_pw').value;
	
	// 유효성검사
	
		// 아이디, 비밀번호 빈칸 입력시 오류메시지 전달
		if( id.length == 0 && pw.length == 0 ){
			document.querySelector('.id_error').style.display = 'block';
			document.querySelector('.pw_error').style.display = 'block';
			}
		// 아이디만 공백일시 오류메시지 전달
		 if( id.length == 0 && pw.length != 0){
			document.querySelector('.id_error').style.display = 'block';
			document.querySelector('.pw_error').style.display = 'none';
	
		// 비밀번호만 공백일시 오류메시지 전달
		} if( pw.length == 0 && id.length != 0 ){
			document.querySelector('.id_error').style.display = 'none';
			document.querySelector('.pw_error').style.display = 'block';
		}
	
	// 아이디, 비밀번호 중복문으로 확인, 대조
		for ( let i = 0 ; i < userArray.length; i++){
			// 아이디, 비밀번호 확인완료 후 메인페이지로 이동
		if(userArray[i].id == id && userArray[i].pw == pw){ 
			location.href="signup.html"
			// 아이디, 비밀번호 틀렸을 경우 오류메시지 전달
		} if (userArray[i].id != id && userArray[i].pw != pw && id.length != 0 && pw.length != 0  ){
			document.querySelector('.error').style.display = 'block';
			document.querySelector('.id_error').style.display = 'none';
			document.querySelector('.pw_error').style.display = 'none';
		}
	}
}


