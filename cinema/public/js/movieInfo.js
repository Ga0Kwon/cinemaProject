/*영화 정보를 담은 객체 배열*/				
let movieInfo = [{name : '더 퍼스트 슬램덩크', img : 'slam_dunk', category : ['애니메이션'], age : 12, star : 9.24, release : '2023.01.04' },
				 {name : '장화신은 고양이', img : 'PussInBoots', category : ['애니메이션'], age : 0, star : 8.41, release : '2023.01.04'},
				 {name : '캐리의 슈퍼콜라', img : 'CarrieAndSuperKola', category : ['애니메이션'], age : 0, star : 8.69, release : '2023.01.18'},
				 {name : '교섭', img : 'ThePointMan', category : ['드라마'], age : 12, star : 6.30, release : '2023.01.18'},
				 {name : '아바타', img : 'avatar', category : ['액션','모험','SF','스릴러'], age : 12, star : 8.83, release : '2022.12.14'},
				 {name : '메간', img : 'M3GAN', category : ['공포','스릴러','코미디'], age : 15, star : 7.34, release : '2023.01.25'},
				 {name : '유령', img : 'phantom', category : ['액션'], age : 15, star : 6.75, release : '2023.01.18'},
				 {name : '상견니', img : 'SomedayOrOneDay', category : ['드라마','판타지','멜로/로맨스'], age : 15, star : 7.83, release : '2023.01.25'},
				 {name : '영웅', img : 'Hero', category : ['드라마','뮤지컬'], age : 12, star : 8.41, release : '2022.12.21'},
				 {name : '오늘밤, 세계에서 이 사랑이 사라진다해도', img : 'EvenIfThisLoveDissappear', category : ['멜로/로맨스'], age : 12, star : 7.99, release : '2022.11.30'},
				 {name : '유량의 달', img : 'wandering', category : ['드라마'], age : 15, star : 7.47, release : '2023.01.18'},
				 {name : '바빌론', img : 'babylon', category : ['드라마'], age : 19, star : 8.40, release : '2023.02.01'},
				 {name : '타이타닉', img : 'Titanic', category : ['드라마','판타지','멜로/로맨스','액션'], age : 15, star : 9.88, release : '2023.02.08'},
				 {name : '애프터썬', img : 'Aftersun', category : ['드라마'], age : 12, star : 8.29, release : '2023.02.01'},
				 {name : '몬스터 하우스2', img : 'Finnick', category : ['애니메이션'], age : 0, star : 8.62, release : '2023.02.02'},
				 {name : '천룡팔부', img : 'SAKRA', category : ['액션'], age : 15, star : 7.25, release : '2023.01.25'},
				 {name : '코코', img : 'Coco', category : ['애니메이션'], age : 0, star : 9.20, release : '2023.01.25'},
				 {name : '다음 소희', img : 'NextSohee', category : ['드라마'], age : 15, star : 0, release : '2023.02.08'},
				 {name : '네가 떨어뜨린 푸른 하늘', img : 'TheBlueSkiesatYourFeet', category : ['멜로/로맨스'], age : 12, star : 0, release : '2023.02.08'},
				 {name : '이마 베프', img : 'IrmaVep', category : ['코미디'], age : 15, star : 7.47, release : '2023.02.01'}]
				 
/* 영화 관람 영령에 따라 관람가부분 백그라운드 바꿀 수 있도록 */
function movieAgeColor(index){
	if(movieInfo[index].age == 0){ //전체 관람가(0)이면 
		return "#01A40A";
	}else if(movieInfo[index].age > 0 && movieInfo[index].age <= 12){ //나이가 1세 이상 12세 이하면
		return "#005BD4";
	}else if(movieInfo[index].age > 12 && movieInfo[index].age <= 18){ //나이가 13세 이상 15세 이하면
		return "#FF6B00";
	}else if(movieInfo[index].age >= 19){ //청불 영화일경우(19세 이상)
		return "#BD0027";
	}
}