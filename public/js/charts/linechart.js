// https://www.google.nl/url?sa=t&rct=j&q=&esrc=s&source=web&cd=13&cad=rja&uact=8&ved=0ahUKEwjS9pa76rHRAhVGthoKHUkzAU04ChAWCDMwAg&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fd3-request&usg=AFQjCNEvDqTuSK7s4VUaYuK3fCy6x3DFfg&sig2=DiqJuFKXmrytJ-d08XKOzQ

var url = "https://v2.decipherinc.com/api/v1/surveys/53c/161202/data?format=json";
//
// d3.json(url, function(data) {
// 	.header("Accept-Language", "en-US")
// 	.header("X-Requested-With", "XMLHttpRequest")
// 	.header("x-apikey", "spheymbxvegyh0dydw9pgc2hfhx69sn7hja5y719n2a2hysb7p7x2z1728yfz6u1")
// 	.user("rachel.van.der.laan@epiphany-rbc.com")
// 	.password("prinsengrachT247")
// 	.mimeType("application/json")
//
// 	console.log(data);
//
// 	// test
// });

// function getData() {
//
// }

d3.request(url)
	.header("Accept-Language", "en-US")
	.header("X-Requested-With", "XMLHttpRequest")
	.header("x-apikey", "spheymbxvegyh0dydw9pgc2hfhx69sn7q1rfth1zcs2dpbdu1mfru5q4qkrp7e8v")
	.user("rachel.van.der.laan@epiphany-rbc.com")
	.password("prinsengrachT247")
	.mimeType("application/json")
	.response(function(xhr) { return JSON.parse(xhr.responseText); });
//



// d3.json("http://something.that.returns.json",function(error,response){
// //TASK 1
// //process http call here.
//
// //TASK 2
// //render the graph here
// });

// You can add request headers with the #header method:
// https://github.com/mbostock/d3/wiki/Requests#header
// d3.json("http://localhost:9001/***/rest/products")
//   .header("header-name", "header-value")
//   .get(function(error, root) {
//     // Your code here.
//   })
//


// d3.json(url, function(data) {
// 	console.log(data)
// })

// request.get([data][, callback])

// request.user([value])
// request.password([value])

// d3.request(url)
//     .mimeType("application/json")
//     .response(function(xhr) { return JSON.parse(xhr.responseText); })
//     .get(callback);



    // curl
	// https://v2.decipherinc.com/api/v1/meta
								// /api/v1/surveys/{survey}/data

	// header "x-apikey: API_KEY_GOES_HERE
	// spheymbxvegyh0dydw9pgc2hfhx69sn7hja5y719n2a2hysb7p7x2z1728yfz6u1
