let listUrl = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240604';
let infoUrl = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=';




async function getMovieInfo(){
    let res = await fetch(listUrl)
    .then(res=>res.json());

    let movieCd = res.boxOfficeResult.dailyBoxOfficeList[0].movieCd;

    res = await fetch(infoUrl+movieCd)
    .then(res=>res.json());

    console.log(res.movieInfoResult.movieInfo.directors[0].peopleNm)
}


getMovieInfo();