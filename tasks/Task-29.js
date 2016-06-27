29. Написать функцию, которая создает глубокую копию объекта - то есть создает копию объекта любого уровня вложенности.
	Пример объекта для копирования: 
var obj = {
	"a": 1,
	"b": "2",
	"C": [1,2,3],
	"d": { "aa": "aa",
	       "b" : [3,4,5]
	     },
	"e": ["ee", 19, [6,7,8,{"aaa":11}], 20, {"aaa":10,"bbb":[9,false,11]} ],
	"f": {"aa":[ 12, null, 13, {"bbbb":"1", "cccc": [ 51,52, {"aaaaa":15,"bbbb":null}]}, "2016-02-12T10:48:53.833Z"]}
}

function clone(obj) {
    var copy;

	if (null == obj || "object" != typeof obj) {
		return obj;
	}

	if (obj instanceof Array) {
	copy = [];
	for (var i = 0; i < obj.length; i++) {
  		copy[i] = clone(obj[i]);
	}
	return copy;
	}

	if (obj instanceof Object) {
	copy = {};
	for (var keys in obj) {
	  if (obj.hasOwnProperty(keys)){ 
	    copy[keys] = clone(obj[keys]);
	  }		
	}
	return copy;
	}

	throw new Error("Can't copy!");
}
console.log(clone(obj));

///////////////////////
var copy = Object.assign({}, obj);
console.log(copy);
/////////////////////// 