function mouseOver() {
	document.getElementById("variable-analysis").classList.add("highlight"); 
}

function mouseOut() {
	document.getElementById("variable-analysis").classList.remove("highlight"); 
}

// Event handler for secret image 
function secretImg() {
    const img = document.getElementById("plot3");
    if (img.src.includes("panda.jpeg")) { //if panda image 
        img.src = "plots/severity.png";   //switch to normal
    } else {
        img.src = "plots/panda.jpeg";   //switch to panda 
    }
}