
/* 아이디, 비밀번호 배열 선언*/

let userArray = [ 
				{ id: 'qwe123' , pw: 'qwe123'} ,
				{ id: 'asd123' , pw: 'asd123'} ,
				{ id: 'zxc123' , pw: 'zxc123'} ,
				{ id: 'movie' , pw: 'movie'} ,
				{ id: 'actor' , pw: 'actor'} ,
			]

function singupbtn(){
	let id = document.querySelector('.id').value;
	let pw = document.querySelector('.pw').value;
	let pw_check = document.querySelector('.pw_check').value;
	let name = document.querySelector('.name').value;
	let sname = document.querySelector('.sname').value;
	let mw = document.querySelector('.mw').value;

	// 유효성검사
		//1. id 빈 값일 경우, 빈 값이 아닐 경우
		if ( id.length == 0 ){
			document.querySelector('.id_null').style.display = 'block';
			}else if(id.length != 0 ){
			document.querySelector('.id_null').style.display = 'none';				
			}
			
		//2. pw 빈 값일 경우, 빈 값이 아닐 경우
		if ( pw.length == 0 ){
			document.querySelector('.pw_null').style.display = 'block';
			}else if ( pw.length != 0 )	{
			document.querySelector('.pw_null').style.display = 'none';				
			}
			// 2.1 pw 빈 값 X + pw 와 pw_check와 값이 다른 경우, 같은 경우
		if (pw != pw_check){
			document.querySelector('.pwcheck_null').style.display = 'block';
		}else if(pw == pw_check){
			document.querySelector('.pwcheck_null').style.display = 'none';
		}

			// 2.2 pw와 pw_check 값이 같은 경우
		
		// 3. name 빈 값일 경우, 빈 값이 아닐 경우
		if ( name.length == 0 ){
			document.querySelector('.name_null').style.display = 'block';
			}else if ( name.length != 0)	{
			document.querySelector('.name_null').style.display = 'none';				
			}
		
		// 4. 성별이 체크되어 있지 않은 경우
		if ( mw == "성별" ){
			document.querySelector('.mw_null').style.display = 'block';
			} else if ( mw != "성별"){
			document.querySelector('.mw_null').style.display = 'none';
				
			}
			
	
	
	for(let i = 0; i <userArray.length; i++){ // 문구 위치 바꾸면 됨!
		if(id == userArray[i].id){
			document.querySelector('#id_error').style.display = 'inline-block';
		return;
		}else if(id != userArray[i].id ){
			document.querySelector('#id_error').style.display = 'none';
		}
	}
	
}