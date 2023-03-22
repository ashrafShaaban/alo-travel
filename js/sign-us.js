let  mytextinput=document.querySelectorAll(".sign-u form input[type='text']");

let mybtn=document.querySelector(".sign-u button");

mybtn.onclick = function() {
mytextinput.forEach(i =>{
    console.log(i);
});
}