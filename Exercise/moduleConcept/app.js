

console.log("IIFE");

// IIFE

var aa=(function testDe(){
    var number=20;
    function add(n1,n2){
        console.log(n1+n2);

    }

    return{
        add,
        number,
    }
})();

aa.add(5,6);
console.log(aa.number);
aa.number=50;
console.log(aa.number);

console.log('====================================');
 


//Commonjs --> require --> Work senkron -->nodejs
//https://browserify.org/  


//amd--> define --> ASENKRON modul definition
//https://requirejs.org/


console.log('====================================');
console.log("Module Concept");
 

//Module

//destructuring
/* 
import { sumOfNumber,multipleOfNumber ,sayHello } from "./utils.js";

sumOfNumber(5,7);
multipleOfNumber(5,7);
sayHello("Muhammet"); 

*/


import * as utilsfunctions from "./utils.js";
utilsfunctions.multipleOfNumber(8,5);

import varsayilan from "./utils.js";
varsayilan("Emre");

import bye,{sumOfNumber,multipleOfNumber} from "./utils.js";
sumOfNumber(5,7);
bye("mehmet");