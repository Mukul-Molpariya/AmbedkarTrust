var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")


function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    document.getElementById(tabname).classList.add("active-tab")
}


function hide() {
    if (col1.style.display != 'block') {
        col1.style.display = 'block';
        col2.style.display = 'none';
        document.getElementById("btn").innerHTML = "हिंदी";
    }
    else {
        col1.style.display = 'none';
        col2.style.display = 'block';
        document.getElementById("btn").innerHTML = "English";
    }
}

function outOfService(){
    window.location.href = 'main/temp.html';
}