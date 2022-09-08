window.addEventListener("load", () => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json()) //fetch convert the data from server from json to real array of objects
    .then((data) => {
      //real array of objects stored in data
      console.log("data", data);
      console.log("name", data.results[0].name);
      console.log("image", data.results[0].image);
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
});
