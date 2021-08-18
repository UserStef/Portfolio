'use strict';
console.log(" -- Start of script -- ");
var xo = new Date(Date.now());
window.addEventListener("click", (ev) =>{

    if(ev.target.dataset.navbox != null){
        console.log(` ── Navigation box: 💠 ${ev.target.dataset.navbox} 📍 ── `);
        let nav = document.getElementById('nav');
        let navbox = document.getElementById('navbox');
        if(navbox.dataset.navbox == "showing"){
            nav.classList.add('hidden');
            navbox.dataset.navbox = "hidding";
            navbox.classList.remove('navbox-displaying');
        } else {
            navbox.classList.add('navbox-displaying');
            nav.classList.remove('hidden');
            navbox.dataset.navbox = "showing";
        }
    }
    
    if(ev.target.dataset.nav == "home"){
        console.log(" ── Navigating back: 💠 Home 📍 ── ");
        document.getElementById('welcome-msg').innerHTML = `You are already here.`;
    }
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