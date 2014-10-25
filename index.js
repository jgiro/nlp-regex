
res = require('nlp-regex');
var e,ue;

// strings to compare
str1 = 'This jouse is very nice.';
str2 = 'This house is very nice and warm.';

//basic escape and unescape functions 
console.log("Escape "+"<h1>Hello World!</h1>");
e = res.escape('<h1>Hello World!</h1>');
console.log(e);
ue = res.unescape(e);
console.log("Unescape previous escaped string!");
console.log(ue+'\n');

// text similarity functions
console.log("Jaro distance: "+res.jDist(str1,str2));
console.log("Jaro-Winkler distance: "+res.jwDist(str1,str2));
console.log("Levenshtein distance: "+res.lsDist(str1,str2));
console.log("Similar text(%): "+res.sText(str1,str2,true));
