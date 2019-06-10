onLoad();

function onLoad(){
    let login = document.getElementById("login");
    login.addEventListener("click", ()=>{
        document.getElementById("overlay").style.visibility = "visible";
        document.getElementById("overlay").style.opacity = 1;
        });
}
