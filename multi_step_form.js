//******************************************
//***FUNCTION VALIDATION FORM Page 1 ******
//******************************************
function verification(nom_controle) {
    var longueur = document.getElementById(nom_controle).value.length;
    var b_civilit=false;
     //validation civilite//
     if (nom_controle == 'civilite') {
        if (document.getElementById(nom_controle).value > 0) {
            document.getElementById(nom_controle).style.border = '#9FE855 1px solid';
            b_civilit = true
        }
        else {
            b_civilit = false
            document.getElementById(nom_controle).style.border = '#CC3300 3px solid';
            alert('veuillez selectioner votre civilité')
        }
        console.log(b_civilit);
    }
    //validation string nom & prénon //
    else if (nom_controle == 'nom' || nom_controle == 'prenom') {
        var letters = /^[A-Za-z]+$/;
        if (!document.getElementById(nom_controle).value.match(letters)) {
            document.getElementById(nom_controle).style.border = '#CC3300 3px solid';
            alert("veuillez tapez des lettres");
            b_nom = false;
            b_prenom = false
        }
        else {
            b_nom = true;
            b_prenom = true;
            document.getElementById(nom_controle).style.border = '#096A09 2px solid';
        }
    }
    //validation email//
    else if (nom_controle == 'email') {
        if (document.getElementById(nom_controle).value.indexOf("@") == -1 || document.getElementById(nom_controle).value.indexOf(".") == -1) {
            document.getElementById(nom_controle).style.border = '#CC3300 3px solid';
            alert("veuillez saisir un email valid");
            b_email = false
        }
        else {
            b_email = true
            document.getElementById(nom_controle).style.border = '#9FE855 1px solid';
        }
    }
    //validation telephone//
    else if (nom_controle == 'phone') {
        var number =/^[0-9-+\s()]+$/;
        if (longueur < 10 ||!document.getElementById(nom_controle).value.match(number)) {
            document.getElementById(nom_controle).style.border = '#CC3300 3px solid';
            alert("veuillez saisir un n°téléphone valid");
            b_telephone = false
        }
        else {
            b_telephone = true
            document.getElementById(nom_controle).style.border = '#9FE855 2px solid';
        }
    }
    //validation statut//
    else if(nom_controle == 'statut'){
        if(document.getElementById(nom_controle).value > 0){
            b_statut = true;
            document.getElementById(nom_controle).style.border = '#9FE855 2px solid';
        }
        else{
            b_statut = false;
            document.getElementById(nom_controle).style.border = '#CC3300 3px solid';
            alert("veuillez selectioner un statut");
        }
    }


}


// fontion button suivant avec verification.
function next_step1() {

    // si la valeur des champs est non vide
    if(document.form.prenom.value != "" && document.form.nom.value != "" && document.form.email.value !== "") {
        // alors on passe a l'etape suivante 
                 document.getElementById("first").style.display = "none";
                document.getElementById("second").style.display = "block";
                document.getElementById("active2").style.color = "red";
      }
      else {
        // sinon on affiche un message
        alert("Saisissez tous les champs");
       
      }
      if(document.form.prenom.value == ""){
        document.getElementById('prenom').style.border = '#CC3300 3px solid';
        }
     if(document.form.nom.value == ""){
        document.getElementById('nom').style.border = '#CC3300 3px solid';
        }
     if(document.form.email.value == ""){
            document.getElementById('email').style.border = '#CC3300 3px solid';
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

    
    if(periode == true && duree == true && loisir == true ){
        document.getElementById("second").style.display = "none";
        document.getElementById("third").style.display = "block";
        document.getElementById("active3").style.color = "red";

    }
    if(periode == false){
        document.getElementById('q1').style.color = '#CC3300';
    }
    if(duree == false){
        document.getElementById('q2').style.color = '#CC3300 ';
    }
    if(loisir == false){
        document.getElementById('q3').style.color = '#CC3300';
    }
   
}
// Function that executes on click of second previous button.
function prev_step2() {
document.getElementById("third").style.display = "none";
document.getElementById("second").style.display = "block";
document.getElementById("active2").style.color = "red";
document.getElementById("active3").style.color = "gray";
}

function next_step3() {


    var accompagnant = false;
    var frequence = false;
    var qualite = false;
    
    for (i = 0; i < document.forms['form']['accompagnant'].length; i++) {
        if (document.forms['form']['accompagnant'][i].checked==true) {
            accompagnant= true ;
        }
    }
    for(i =0; i< document.forms['form']['frequence'].length;i++){
        if(document.forms['form']['frequence'][i].checked == true ){
            frequence = true;
    
        }
    }
    for(i =0; i< document.forms['form']['qualite'].length;i++){
        if(document.forms['form']['qualite'][i].checked == true ){
            qualite = true;
        }
    }
    
    if(accompagnant == true && frequence == true && qualite == true){
        document.getElementById("third").style.display = "none";
        document.getElementById("quatre").style.display = "block";
        document.getElementById("active4").style.color = "red";
  
    }
    if(accompagnant == false){
        document.getElementById('q5').style.color = '#CC3300';
    }
    if(frequence == false){
        document.getElementById('q6').style.color = '#CC3300 ';
    }
    if(qualite == false){
        document.getElementById('q7').style.color = '#CC3300';
    
    }
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

//******************************************
//***FUNCTION VALIDATION FORM Page 4******
//******************************************



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
 

function valider() {
    // si la valeur du textarea est non vide
    if(document.form.destinations.value != "" && document.form.commentaire.value != "") {
      // alors on envoie le formulaire
      document.form.submit();
    }
    else {
      // sinon on affiche un message
      alert("Saisissez votre text");
     
    }
    if(document.form.destinations.value == ""){
        document.getElementById('text1').style.border = '#CC3300 3px solid';
    }
    if(document.form.commentaire.value == ""){
        document.getElementById('text2').style.border = '#CC3300 3px solid';
    }
  }
		


