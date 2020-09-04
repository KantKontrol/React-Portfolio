var prevScrollpos = window.pageYOffset;

window.onscroll = function() {

    

    var currentScrollPos = window.pageYOffset;
    
    
    if (currentScrollPos < 20) {
        document.getElementById("navbar").classList.remove("animate");
        document.getElementById("navbar").classList.add("un-animate");
    } else {
        document.getElementById("navbar").classList.remove("un-animate");
        document.getElementById("navbar").classList.add("animate");
    }

    prevScrollpos = currentScrollPos;
}