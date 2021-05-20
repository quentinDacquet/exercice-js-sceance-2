function update(elem) {
    let titre=document.getElementById("titre");

    if (elem.getAttribute("name") == "color") {
        titre.style.background = "rgb(" + elem.value + "," + elem.value + "," + elem.value + ")";
        let valuecolor = document.getElementById("valuecolor");
        valuecolor.innerText = "Valeur du rgb :" + elem.value + ", "+ elem.value + ", " + elem.value;
    }
    else if (elem.getAttribute("name") == "padding") {
        titre.style.padding= elem.value  +"px";
        let valuepadding = document.getElementById("valuepadding");
        valuepadding.innerText = "Valeur du padding :" + elem.value + " px";

    }
    else if (elem.getAttribute("name") == "height") {
        titre.style.height = elem.value  +"px";
        let valueheight = document.getElementById("valueheight");
        valueheight.innerText = "Valeur du height :" + elem.value + " px";
    }
    else if (elem.getAttribute("name") == "width") {
        titre.style.width = elem.value  +"px";
        let valuewidth = document.getElementById("valuewidth");
        valuewidth.innerText = "Valeur du width :" + elem.value + " px";
    }
    else if (elem.getAttribute("name") == "radius") {
        titre.style.borderRadius = elem.value  +"px";
        let valuearrondi = document.getElementById("valuearrondi");
        valuearrondi.innerText = "Valeur du radius :" + elem.value + " px";
    }
    else if (elem.getAttribute("name") == "rotation") {
        titre.style.transform = "rotate(" + elem.value  + "deg)";
        let valuerotate = document.getElementById("valuerotate");
        valuerotate.innerText = "Valeur du rotate :" + elem.value + " deg";
    }                

}