function inputText(elem){
    function abcd(elem){
        let abcd;
        if (elem.value.charAt(0) == "a" || elem.value.charAt(0) == "b" || elem.value.charAt(0) == "c" || elem.value.charAt(0) == "d"){
            abcd = true;
        } else {
            abcd = false;
        }

        if (abcd == true){
            document.write("commence par abcd <br>");
        } else{
            document.write("commence pas par abcd <br>");
        }
        }

    function arobase(elem){
        let aro;
        if (elem.value.indexOf('@') == -1){
            aro = false;
        } else{
            aro = true;
        }
        
        if (aro == true){
            document.write("contient un @ <br>");
        } else {
            document.write("ne contient pas de @ <br>");
        }
    }

    function number(elem){
        const contain = elem.value.split('');
        let containl = contain.length;
        let nbreletter= 0;
        let i;
        let j = 0;

        for (i = 0; i <= containl; i++){
            if (isNaN(parseInt(contain[i]))){
                nbreletter++;
            } else{
                j++
            }
        }

        if (j>0){
            document.write('Contient ' + j + ' nombres <br>');
        } else {
            document.write('ne contient pas de nombre <br>');
            document.write('contient ' + nbreletter + " lettres <br>" );
        }
    }

    function crypt(elem){
        const contain = elem.value.split('');
        let containl = contain.length;
        let x;

        for (x = 0; x < containl; x++){
            if (isNaN(parseInt(contain[x]))){
                document.write(contain[x]);
            } else {
                contain.splice(x, 1, '*');
                document.write(contain[x]);
            }
        }
    }



    abcd(elem);
    arobase(elem);
    number(elem);
    crypt(elem);
    
}