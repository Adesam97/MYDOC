function openNav() {
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("mySidenav").style.left = "5px";
    document.getElementById("main").style.width = "493px"
    document.getElementById("main").style.marginLeft = "215px";
    document.getElementById("main-page").style.opacity = "0.6";
    document.getElementById("toggler").style.display = "none";
    document.getElementById("close-button").style.display = "block";
}


function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main-page").style.opacity = "0";
    document.getElementById("close-button").style.display = "none";
    document.getElementById("toggler").style.display = "block";
}