onLoad();

function onLoad(){
    let register = document.getElementById("register");
    let cancel = document.getElementsByClassName("cancel");
    let login = document.getElementById("login");



    login.addEventListener("click", ()=>{
        document.getElementById("overlayregister").style.opacity = 0;
        document.getElementById("overlayregister").style.visibility = "hidden";

        document.getElementById("overlaylogin").style.visibility = "visible";
        document.getElementById("overlaylogin").style.opacity = 1;
        });


    register.addEventListener("click", ()=>{
        document.getElementById("overlaylogin").style.opacity = 0;
        document.getElementById("overlaylogin").style.visibility = "hidden";

        document.getElementById("overlayregister").style.visibility = "visible";
        document.getElementById("overlayregister").style.opacity = 1;
        });


    Array.prototype.forEach.call(cancel, (element)=>{
        element.addEventListener("click", ()=>{
            document.getElementById("overlayregister").style.opacity = 0;
            document.getElementById("overlayregister").style.visibility = "hidden";
            document.getElementById("overlaylogin").style.opacity = 0;
            document.getElementById("overlaylogin").style.visibility = "hidden";
        });
    })
}


