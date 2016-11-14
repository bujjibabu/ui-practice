var count = 0;
function appendUser() { //js named function
	//alert('on click js calling!!');
	var inputval = document.getElementById('inputName').value;
	console.log('Entered Value::', inputval);
	count ++;
	var userObj = {
		sno: count,
		name: inputval
	};
	// document.getElementById('rollno').innerText = userObj.sno;
	//document.getElementById('output').innerText = userObj.name;
	var node = document.createElement("li");
  var textnode = document.createTextNode(userObj.name);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
		document.getElementById('inputName').value = '';
}; //function def

//appendUser();
var add =  function() { // litteral notation
  val1 = 10;
	val2 = 20;
	console.log('sum::', val1+val2);
};
add();

var val1;
var val2;

var function1 =  function (a) {
	return a*a; //;
};

var function2 =  function (a) {
	return 
	a*a;
}

console.log("function1::", function1(10));
console.log('function2::', function2(10));
//function calling.

function sum (a) {
	var appendval = 100;
	return function (b) {
		return a + b + appendval;
	}
};

// var appendval = 100;
// function sum () {
// 	return a+b;
// };


var output = sum(12)(3);

//var output2 = sum(12,3);

console.log('sum(12)(3)::', output);

var x = (0.1*10 + 0.2*10)/10;
if(x == 0.3) {
	alert('equel');
} else {
	alert('not equel');
}

console.log(999999999999999);
console.log(9999999999999999);
