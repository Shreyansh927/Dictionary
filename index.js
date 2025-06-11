let searchInp = document.getElementById("searchInp");
let searchBtn = document.getElementById("searchBtn");
let dicCard = document.getElementById("dicCard");
let divline2 = document.getElementById("divline2");
let sear = document.getElementById("sear");
let meaning = document.getElementById("meaning");
let meanCard = document.getElementById("meanCard");
let spinner = document.getElementById("spinner");
let word = document.getElementById("word");
let pos = document.getElementById("pos");

searchInp.onclick = function () {
  searchBtn.classList.add("s-b1");

  sear.style.visibility = "visible";
  searchInp.classList.add("new-search-input");
  setTimeout(function () {
    searchInp.classList.add("ns");
  }, 500);
};

function getMeaning() {
  spinner.classList.add("d-block");
  meanCard.classList.remove("d-block");
  if (searchInp.value === "") {
    spinner.classList.remove("d-block");
    divline2.classList.remove("width");
    divline2.classList.remove("divline1");
    alert("Enter something");
    return;
  } else if (searchInp.value !== "") {
    divline2.classList.remove("divline1");
    let url =
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchInp.value;
    let options = {
      method: "GET",
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        setTimeout(function () {
          divline2.classList.add("width");
        }, 500);
        spinner.classList.remove("d-block");

        meanCard.classList.add("d-block");
        let definition = jsonData[0].meanings[0].definitions[0].definition;
        let poss = jsonData[0].meanings[0].partOfSpeech;
        word.textContent = searchInp.value;
        meaning.textContent = definition;
        pos.textContent = poss;
        divline2.classList.add("divline1");
        console.log(jsonData);
      });
  }
}

searchBtn.addEventListener("click", getMeaning);
