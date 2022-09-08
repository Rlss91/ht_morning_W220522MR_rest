let nextPage = null;
let prevPage = null;

window.addEventListener("load", () => {
  loadAndDisplay("https://rickandmortyapi.com/api/character");
  document.getElementById("nextBtn").addEventListener("click", () => {
    if (nextPage) {
      loadAndDisplay(nextPage);
    }
  });
  document.getElementById("prevBtn").addEventListener("click", () => {
    if (prevPage) {
      loadAndDisplay(prevPage);
    }
  });
});

const loadAndDisplay = (url) => {
  fetch(url)
    .then((response) => response.json()) //fetch convert the data from server from json to real array of objects
    .then((data) => {
      //real array of objects stored in data
      console.log("data", data);
      console.log("name", data.results[0].name);
      console.log("image", data.results[0].image);
      nextPage = data.info.next;
      prevPage = data.info.prev;
      let str = "";
      for (let characterItem of data.results) {
        str += `
        <div class="card" style="width: 18rem;">
            <img src="${characterItem.image}" class="card-img-top" alt="${characterItem.name}">
            <div class="card-body">
                <p class="card-text">${characterItem.name}</p>
            </div>
        </div>
      `;
      }
      document.getElementById("cardContainer").innerHTML = str;
    });
};
