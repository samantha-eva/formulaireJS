// fontion button suivant avec verification.
function next_step1(event) {
    var count = 0;
    var input_field = document.getElementsByClassName('text_field');

        for (var i = input_field.length; i > count; i--) {
            if (input_field[i - 1].value == '') {
                count = count + 1;
            } else {
                count = 0;
                document.getElementById("first").style.display = "none";
                document.getElementById("second").style.display = "block";
                document.getElementById("active2").style.color = "red";
            }
        }

    if (count != 0  ) {
    alert("*All Fields are mandatory*"); 
    event.preventDefault();
    } else {
    return true;
    }   
}
// Function that executes on click of first previous button.
function prev_step1() {
document.getElementById("first").style.display = "block";
document.getElementById("second").style.display = "none";
document.getElementById("active1").style.color = "red";
document.getElementById("active2").style.color = "gray";
}
// Function that executes on click of second next button.
function next_step2() {

    var periode = false;
    var duree = false;
    var loisir = false;
 
    for (i = 0; i < document.forms['form']['periode'].length; i++) {
        if (document.forms['form']['periode'][i].checked==true) {
             periode= true ;
        }
    }
    for(i =0; i< document.forms['form']['duree'].length;i++){
        if(document.forms['form']['duree'][i].checked == true ){
            duree = true;

        }
    }
    for(i =0; i< document.forms['form']['loisir'].length;i++){
        if(document.forms['form']['loisir'][i].checked == true ){
            loisir = true;
        }
    }

    if(periode == true && duree == true && loisir == true){
        document.getElementById("second").style.display = "none";
        document.getElementById("third").style.display = "block";
        document.getElementById("active3").style.color = "red";

    }
    duree = false;
    periode =false; 
    duree = false;
}
// Function that executes on click of second previous button.
function prev_step2() {
document.getElementById("third").style.display = "none";
document.getElementById("second").style.display = "block";
document.getElementById("active2").style.color = "red";
document.getElementById("active3").style.color = "gray";
}

function next_step3() {
    document.getElementById("third").style.display = "none";
    document.getElementById("quatre").style.display = "block";
    document.getElementById("active4").style.color = "red";
  
    }
// Function that executes on click of second previous button.
function prev_step3() {
    document.getElementById("quatre").style.display = "none";
    document.getElementById("third").style.display = "block";
    document.getElementById("active4").style.color = "red";
    document.getElementById("active3").style.color = "gray";
    }

// Function Cookies

    function setCookie()
    {
       cookie_nom = escape(document.form.nom.value);
       cookie_prenom = escape(document.form.prenom.value);
       document.cookie="name=" + cookie_nom+ " " +cookie_prenom+"; path=/";
       document.getElementById("cookies").innerHTML = 'Bonjour' + ' ' + cookie_nom+ " "+cookie_prenom;
       document.getElementById("cookies2").innerHTML = 'Bonjour' + ' ' + cookie_nom+ " "+cookie_prenom;
       document.getElementById("cookies3").innerHTML = 'Bonjour' + ' ' + cookie_nom+ " "+cookie_prenom;
    }  

//function nb_commentaire destination
function nb_commentaire(obj){
    var element = document.getElementById('count1');

    element.innerHTML = 50 - obj.value.length;

    if (50 - obj.value.length <= 0) {
        alert("vous avez utilisé le maximun de mots autorise");
    } else {
        element.style.color = 'grey';
    }
}

//function nb_commentaire 
function nb_commentaire2(obj){
    var element = document.getElementById('count2');

    element.innerHTML = 50 - obj.value.length;

    if (50 - obj.value.length <= 0) {
        alert("vous avez utilisé le maximun de mots autorise");
    } else {
        element.style.color = 'grey';
    }
}
 

		


