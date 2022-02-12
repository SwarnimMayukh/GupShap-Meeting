function new_meeting1() {
    x = Math.floor((Math.random() * 10000) + 1);
    document.getElementById("final_code").innerHTML = x;
    localStorage.setItem("final_code",x);
    setTimeout(function(){
    window.location = "index1.html"
},5000);
}
