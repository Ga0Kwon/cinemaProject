console.log('js 작동 확인')

/* 아이디, 비밀번호 배열 선언*/

let userArray = [
				{ name: '유재석' , id: 'qwe123' , pw: 'qwe1234' , email: 'qwe123@naver.com'} ,
				{ name: '강호동', id: 'asd123' , pw: 'asd1234' , email: 'asd123@naver.com'} ,
				{ name: '신동엽', id: 'zxc123' , pw: 'zxc1234' , email: 'zxc123@naver.com'} ,
				{ name: '서장훈', id: 'movie' , pw: 'movie1' , email: 'movie@naver.com'} ,
				{ name: '길', id: 'actor' , pw: 'actor1' , email: 'actor@naver.com'} ,
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

	// x 버튼 누를시 광고 삭제
document.querySelector('.xbtn').addEventListener('click', (e) => {
	document.querySelector('.header_banner').style.display = 'none';
})

document.querySelector('.xbtn2').addEventListener('click', (e) => {
	document.querySelector('.footer_banner').style.display = 'none';
})

	
// 아이디 찾기 모달

	// 닫기 버튼 누를 시 모달 닫기
document.querySelector('.modal_close').addEventListener('click' , (e) =>{
	document.querySelector('.modal_wrap').style.display = 'none';
})

	// 아이디 찾기 누를시 id 모달 열기
document.querySelector('.idFind').addEventListener('click' , (e) =>{
	document.querySelector('.modal_wrap').style.display = 'block';
})

	// 아이디 찾기 버튼 누를 시
function id_find(){
	let name = document.querySelector('.name_find').value;
	let email = document.querySelector('.email_find').value;
	
	console.log("이름 입력한 값 : " + name)
	console.log(" 이메일 입력한 값 : " + email)
	
	let html = ``
	
	for( let i = 0 ; i < userArray.length; i++ ){
	html = ``
	if(name == userArray[i].name && email == userArray[i].email){
		console.log('이름, 이메일 같은걸로 확인됨!')
		html += `<h3 class="modal_title"> 아이디 찾기 </h3>	<!-- 제목 -->
				<div class="nametext">이름 <input class="name_find" type="text"> </div>
				<div class="emailtext">이메일 <input class="email_find" type="text"> </div>
				<div style= "display:flex;">	
				<div class="real_idtext"> 비밀번호 </div> <div class="real_id"> ${userArray[i].id} </div> </div>
				</div>
				<div class="modal_btns">
				<button onclick="close()" class="modal_close2">닫기</button>		<!-- 모달 닫기 버튼 -->
				</div>`; break;
		}else{
		html = `<h3 class="modal_title"> 아이디 찾기 </h3>	<!-- 제목 -->
				<div class="nametext">이름 <input class="name_find" type="text"> </div>
				<div class="emailtext">이메일 <input class="email_find" type="text"> </div>
				<div style= "display:flex;">	
				<div class="real_idtext"> 이름이나 이메일이 옳지 않습니다. </div>  </div>
				</div>
				<div class="modal_btns">
				<button onclick="close()" class="modal_close2">닫기</button>		<!-- 모달 닫기 버튼 -->
				</div>`;
		}

	}
	document.querySelector('.modal_box').innerHTML = html
	
	document.querySelector('.modal_close2').addEventListener('click' , (e) =>{
	document.querySelector('.modal_wrap').style.display = 'none';
	})
}

// 비밀번호 찾기 모달

	// 닫기 버튼 누를 시 모달 닫기
document.querySelector('.modal_close2').addEventListener('click' , (e) =>{
	document.querySelector('.modal_wrap2').style.display = 'none';
})

	// 비밀번호 찾기 누를시 id 모달 열기
document.querySelector('.pwFind').addEventListener('click' , (e) =>{
	document.querySelector('.modal_wrap2').style.display = 'block';
})

	// 비밀번호 찾기 버튼 누를 시
function pw_find(){
	let idcheck = document.querySelector('.name_find2').value;
	let emailcheck = document.querySelector('.email_find2').value;
	
	console.log("아이디 입력한 값 : " + idcheck)
	console.log("이메일 입력한 값 : " + emailcheck)
	
	let html = ``
	
	for( let i = 0 ; i < userArray.length; i++ ){
	html = ``
	if(idcheck == userArray[i].id && emailcheck == userArray[i].email){
		console.log('아이디, 이메일 같은걸로 확인됨!')
		html += `<h3 class="modal_title2"> 비밀번호 찾기 </h3>	<!-- 제목 -->
				<div class="nametext2"> ID <input class="name_find2" type="text"> </div>
				<div class="emailtext2">이메일 <input class="email_find2" type="text"> </div>
				<div style= "display:flex;">	
				<div class="real_idtext2"> 비밀번호 </div> <div class="real_id2"> ${userArray[i].pw} </div> </div>
				</div>
				<div class="modal_btns2">
				<button onclick="close()" class="modal_close2">닫기</button>		<!-- 모달 닫기 버튼 -->
				</div>`; break;
		}else{
		html = `<h3 class="modal_title2"> 비밀번호 찾기 </h3>	<!-- 제목 -->
				<div class="nametext2"> ID <input class="name_find2" type="text"> </div>
				<div class="emailtext2">이메일 <input class="email_find2" type="text"> </div>
				<div style= "display:flex;">	
				<div class="real_idtext2"> ID나 이메일이 옳지 않습니다. </div>  </div>
				</div>
				<div class="modal_btns2">
				<button onclick="close()" class="modal_close2">닫기</button>		<!-- 모달 닫기 버튼 -->
				</div>`;
		}

	}
	document.querySelector('.modal_box2').innerHTML = html
	
	document.querySelector('.modal_close2').addEventListener('click' , (e) =>{
	document.querySelector('.modal_wrap2').style.display = 'none';
	})
}