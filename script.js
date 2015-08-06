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


// POST /codecademy/learn-http HTTP/1.1
// Host: www.codecademy.com
// Content-Type: text/html; charset=UTF-8

// Name=Eric&Age=26


// 10/19

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/doesnt_exist", false);
xhr.send();
// Add your code below!

console.log(xhr.status)
//answer is 404 the requested url does not exist


// 11/19

// HTTP/1.1 200 OK
// Content-Type: text/xml; charset=UTF-8

// <?xml version="1.0" encoding="utf-8"?>
// <string xmlns="http://www.codecademy.com/">Accepted</string>



// 12/19
//parsing the xml
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);




// 13/19

var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';

var json = JSON.parse(demo);
console.log(json);




