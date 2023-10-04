function openMenuBar(){
    var menubar=document.getElementById("menubar")
    menubar.classList.add("menubarBlock")
}
function menubarClose(){
    var menubar=document.getElementById("menubar")
    menubar.classList.remove("menubarBlock")
}
function closeNav(){
    var menubar=document.getElementById("menubar")
    menubar.classList.remove("menubarBlock")
}



// window.addEventListener("scroll", () => {
//     let scrollTop = window.scrollY;
//     let docHeight = document.body.offsetHeight;
//     let winHeight = window.innerHeight;
//     let scrollPercent = scrollTop / (docHeight - winHeight);
//     let scrollPercentRounded = Math.round(scrollPercent * 100);
//     console.log(scrollPercentRounded) 

//     if(scrollPercentRounded === 27){
//         var scroll_one=document.getElementById("scroll_one")
//         var count=0
//         let one=setInterval(function run(){
//             scroll_one.innerHTML=count++
//             if(count>=1232){
//                 clearInterval(one)
//             }
//         })
//     }
//     else{
//         var scroll_one=document.getElementById("scroll_one")
//         scroll_one.innerHTML=1232
//     }
//   });