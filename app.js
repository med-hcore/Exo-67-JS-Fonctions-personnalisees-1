let text1 ="Mon nouveaux texte" ;
let text2 = "Mon nouveau texte";
let text3 = "Mon nouveau texte";
let text4 = "Mon nouveau texte";
let text5 = "Mon nouveau texte";



function monTexte(para, texte){
    document.getElementById(para).innerHTML = texte;
}


monTexte("p1", "Mon nouveau texte1");

monTexte("p2","Mon nouveau texte2");

monTexte("p3", "Mon nouveau texte3");

monTexte("p4","Mon nouveau texte4");

monTexte("p5","Mon nouveau texte5");