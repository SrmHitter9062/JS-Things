function Hello(){
	this.name = 'siya';
	this.getName = function(locations){
		console.log("Hello "+this.name + " your stayed at "+ locations)
	}
}

var h = new Hello();
h.getName()
>>Hello siya

/* CALL  */

h.getName.call({name:'Virat'},"kota")

>> Hello Virat your stayed at kota



/* APPLY */


h.getName.apply({name:'Virat'},["kota","delhi"])


/*Bind */

var func = h.getName.bind({name:'adarsh'},"delhi")

func()

>> Hello adarsh your stayed at delhi



->Own Bind implementation


function Hello(){
	this.name = 'siya';
	this.getName = function(){
		console.log("Hello "+this.name + " your stayed at "+ arguments)
	}
}


var h = new Hello()

h.getName.prototype.bind = function (obj){
	var fn = this;
	return function(){
		fn.apply(obj,arguments)
	}

}

var getName = h.getName.bind({name:'sachin'})

getName()

>> Hello sachin your stayed at [object Arguments]

