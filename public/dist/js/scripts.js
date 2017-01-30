// https://www.google.nl/url?sa=t&rct=j&q=&esrc=s&source=web&cd=13&cad=rja&uact=8&ved=0ahUKEwjS9pa76rHRAhVGthoKHUkzAU04ChAWCDMwAg&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fd3-request&usg=AFQjCNEvDqTuSK7s4VUaYuK3fCy6x3DFfg&sig2=DiqJuFKXmrytJ-d08XKOzQ

var url = "https://v2.decipherinc.com/api/v1/surveys/53c/161202/data?format=json";

// d3.json(url, function(data) {
// 	.header("Accept-Language", "en-US")
// 	.header("X-Requested-With", "XMLHttpRequest")
// 	.header("x-apikey", "spheymbxvegyh0dydw9pgc2hfhx69sn7hja5y719n2a2hysb7p7x2z1728yfz6u1")
// 	.user("rachel.van.der.laan@epiphany-rbc.com")
// 	.password("prinsengrachT247")
// 	.mimeType("application/json")
// });

// d3.request(url)
// 	.header("Accept-Language", "en-US")
// 	.header("X-Requested-With", "XMLHttpRequest")
// 	.header("x-apikey", "spheymbxvegyh0dydw9pgc2hfhx69sn7q1rfth1zcs2dpbdu1mfru5q4qkrp7e8v")
// 	.user("rachel.van.der.laan@epiphany-rbc.com")
// 	.password("prinsengrachT247")
// 	.mimeType("application/json")
// 	.response(function(xhr) { return JSON.parse(xhr.responseText); });


// You can add request headers with the #header method:
// https://github.com/mbostock/d3/wiki/Requests#header



d3.json(url)
    .header("x-apikey", "spheymbxvegyh0dydw9pgc2hfhx69sn7q1rfth1zcs2dpbdu1mfru5q4qkrp7e8v")
    .user("rachel.van.der.laan@epiphany-rbc.com")
    .password("prinsengrachT247")
  	.get(function(error, data) {
		 return JSON.parse(data.responseText);
  })
//

// request.get([data][, callback])
// request.user([value])
// request.password([value])

// d3.request(url)
//     .mimeType("application/json")
//     .response(function(xhr) { return JSON.parse(xhr.responseText); })
//     .get(callback);

// header "x-apikey: API_KEY_GOES_HERE
// spheymbxvegyh0dydw9pgc2hfhx69sn7hja5y719n2a2hysb7p7x2z1728yfz6u1

var test;

//# sourceMappingURL=scripts.js.map
