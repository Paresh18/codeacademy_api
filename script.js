// {
//   "myBlog": {
//     "pageViews": "4720",
//     "subscribers": "1711",
//     "numberOfPosts": "37",
//     "mostRecentPost": "2013-01-04",
//   }
// }


// 5/19   Making a request

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false);


xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);

