'use strict';
console.log(" -- Start of script -- ");
var xo = new Date(Date.now());
window.addEventListener("click", (ev) =>{

    if(ev.target.dataset.navbox != null){
        console.log(` ── Navigation box: 💠 ${ev.target.dataset.navbox} 📍 ── `);
        let nav = document.getElementById('nav');
        if(ev.target.dataset.navbox == "showing"){
            nav.classList.add('hidden');
            ev.target.dataset.navbox = "hidding";
        } else {
            nav.classList.remove('hidden');
            ev.target.dataset.navbox = "showing";
        }
    }
    
    // if(ev.target.dataset.nav == "home"){
    //     console.log(" ── Navigating back: 💠 Home 📍 ── ");
    // }
    // if(ev.target.dataset.nav != null){
    //     console.log(` ── Navigating to: 💠 ${ev.target.dataset.nav} 📍 ── `);
    //     let navTo = ev.target.dataset.nav;
    //     if(navTo == "resume") {
    //         `https://github.com/UserStef/Resume`;
    //     }
    // }
});

window.addEventListener('load', async () =>{
    console.log(" -- Start of load event. -- ");
    console.log(`Current Day and Time: \n\t${xo.toLocaleString()}`);

    console.log(" -- End of load event. -- ");
});