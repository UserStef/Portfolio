'use strict';
console.log(" -- Start of script -- ");
var xo = new Date(Date.now());

window.addEventListener('load', async () =>{
    console.log(" -- Start of load event. -- ");
    console.log(`Current Day and Time: \n\t${xo.toLocaleString()}`);

    console.log(" -- End of load event. -- ");
});