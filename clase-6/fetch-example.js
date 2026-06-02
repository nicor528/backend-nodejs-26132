fetch("url/endpoint", {
    method: "GET"
}).then((result) => result.json())
.then(data => console.log(data))
.catch((error) => console.log(error))