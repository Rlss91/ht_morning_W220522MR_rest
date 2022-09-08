const postData = async (url = "", data = {}) => {
  try {
    // Default options are marked with *
    let response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  } catch (err) {
    /*
        if fetch fails, we want to return failed promise with the error
    */
    //the long way
    // let promise = new Promise((resolve, reject) => {
    //   reject(err);
    // });
    // return promise;
    //the short way
    return Promise.reject(err);
  }
};

let obj = {
  title: "foo",
  body: "bar",
  userId: 1,
};

postData("https://jsonplaceholder.typicode.com/posts", obj)
  .then((data) => {
    console.log("resource created", data);
  })
  .catch((err) => {
    console.log("post failed", err);
  });
