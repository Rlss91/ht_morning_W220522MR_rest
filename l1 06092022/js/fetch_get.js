/*
    fatch send async request to server,
    the first arg is.
    when we pass only url it will send get request
*/
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json()) //fetch convert the data from server from json to real array of objects
  .then((data) => {
    //real array of objects stored in data
    // console.log(data);
    for (let item of data) {
      console.log(item);
    }
  });
