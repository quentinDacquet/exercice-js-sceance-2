
function main(){
    let number = parseInt(prompt('Entrer un nombre'));
        if (isNaN(number)){
            alert('Veuillez entrer un nombre !');
            main();
        } else{
            multiplication();
        }


    function multiplication(){
        document.write("<table>");
        document.write("<tr><td>" + number + "</td></tr>");
        let i;
        for(i = 1; i<=9; i++){
            document.write("<tr><td>" + i + " * " + number + "</td>" + "<td>" + i*number + "</td></tr>");
        }

        document.write("</table>");
    }
}

main();