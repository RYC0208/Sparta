// API 호출
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTZkNzY2ODk0YjY1NmIwNDViNzQwN2IyMGNmNzhkNyIsIm5iZiI6MTcyMTgyODg4Mi44NTY5Miwic3ViIjoiNjZhMGE1ZGJlMzJlODk2ZDY2NTI5YTk2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Jm1wUL6Y1DPltUVJxaauMwtTvqzPfvi6xVV0QnMiW64",
  },
};

//데이터
function MoviesData() {
  //fetch로 데이터 가져오고
  fetch(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
    options
  )
  .then((response) => response.json())
  .then((response) => {
    //응답된 데이터 담아주기
    console.log(response)
    const Movies = response.results;
    SearchMovie(Movies);
  })
  .catch((err) => console.error(err));
}

//검색 이벤트
document.addEventListener("DOMContentLoaded", () => {
  MoviesData();

  // 입력 필드의 값이 변경될 때마다 SearchMovie 함수를 호출
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", () => MoviesData());
});

//감상평 자르기
const substringOverview = (OverviewText, MaxLength) => {
  // 감상평을 요약한 것
  if (OverviewText.length <= MaxLength) {
    return OverviewText;
  }
  return OverviewText.substring(0, MaxLength) + "...";
};

//검색
const SearchMovie = (Movies) => {
  const SearchInput = document.getElementById("searchInput");
  const SearchVal = SearchInput.value.toLowerCase();

  const filteredMovies = Movies.filter((movie) => {
    const MoviesTitle = movie["name"].toLowerCase();
    // 각 영화의 제목을 가져와서 검색 값을 포함하면 데이터를 리턴
    // include는 빈 공간이 있으면 true로 인식하기 때문에 모든 정보가 보여짐
    return MoviesTitle.includes(SearchVal);
  });
  return CreateList(filteredMovies);
};

//영화리스트
const CreateList = (filteredMovies) => {
  // console.log("지금 HTML 생성에 있습니다");
  const movieListArea = document.getElementById("card"); //영화 리스트를 뿌려줄 곳
  movieListArea.innerHTML = "";

  if (filteredMovies != null && filteredMovies != "") {
    filteredMovies.forEach((filteredmovie) => {
      const listItem = document.createElement("div");
      listItem.id = "moviesContainer"; // div id 값을 설정
      listItem.className = "cards"; // div 클래스 값을 설정

      const overview = substringOverview(filteredmovie["overview"], 35);


      // '를 이스케이프 처리하여 replace함수를 사용해 백슬래시(\)로 '를 넣어주어서 완벽한 문자열로 대체해줌
      listItem.innerHTML = `
                <div class="card h-100" onclick="MoiveId( ${filteredmovie["id"]}, '${filteredmovie["name"].replace("'", "\\'")}')">
                  <img
                  src="https://image.tmdb.org/t/p/w500${filteredmovie["poster_path"]}"
                  class="card-img-top"
                  alt="..."
                  />
                <div class="card-body">
                  <h5 class="card-title">${filteredmovie["name"]}</h5>
                  <p class="average">${filteredmovie["vote_average"]}</p>
                  <p class="card-text">${overview}</p>
                </div>
            `;
      movieListArea.appendChild(listItem);
    });
  } 
  // else {
  //   alert("검색 결과가 없습니다");
  //   window.location.reload();
  // }
  };

  const MoiveId = (movieId, movieName) =>{
    alert(movieName + "의 id 값은 : " + movieId);
  }

  //검색창 기본 커서
  document.getElementById('searchInput').focus();