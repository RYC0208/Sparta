class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

async function narutoIsNotOtaku() {
  let title;

  while (true) {
    title = prompt("애니메이션  제목을 입력하세요.", "naruto");
    try {
      res = await loadJson(
        `https://animechan.xyz/api/random/anime?title=${title}`
      );
      break;
    } catch (error) {
      if (error instanceof HttpError && err.response.status === 404) {
        alert("일치하는 애니메이션이 없습니다.");
      } else {
        throw err;
      }
    }
  }
  alert(`${res.character}: ${res.quote}.`);
  return res;
}

narutoIsNotOtaku();
