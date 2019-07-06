1) Function hoisting : 

function foo(){ 
    function bar() { 
        return 3;    
    }
    return bar();
    function bar() {
        return 8;
    }
}

console.log(foo()); // 8  // bar function will be hoisted one after other


2) function and varible hoisting
  a)
  ===================================
    function parent(){
      var hoisted = "I'm a variable";
      function hoisted() {
          return "I'm a function";
      }    
      return hoisted();
    }
    console.log(parent());
    
    output - 
    TypeError: hoisted is not a function
    at parent (/Users/malav/Documents/srm/projects/test-js/test.js:21:12)
    at Object.<anonymous> (/Users/malav/Documents/srm/projects/test-js/test.js:23:13)
    at Module._compile (internal/modules/cjs/loader.js:799:30)
    
    Exp - function declaration will be hoisted and variable declaration hoisting will simply ignored and simple assignmentt will happen,
    in hoisted variable , hence the error.
    
    
 ==========================================
 
 3) variable hoisting
  a) =============================
    var myVar = 'foo';
    (function() {
        console.log('Original value was: ' + myVar);
        var myVar = 'bar';
        console.log('New value is: ' + myVar);
    })();
  
     output - 
     Original value was: undefined
     New value is: bar
     
     ==============================
    
