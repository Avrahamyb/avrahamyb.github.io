let result = document.getElementById("result_p")

let operator_type;
let ele1;
let ele2;
let n;
let n_calcul = 1;
let bool = true; // savoir si le champ du resultat est deja rempli 

function button_click(n) {
    if (bool == false) {
        result.innerHTML = ""
        bool = true
    }
    result.innerHTML = result.innerHTML + n.toString();
}

function addition() {
    ele1 = document.getElementById("result_p").innerHTML;
    operator_type = "addition";
    document.getElementById("result_p").innerHTML = "";
}

function soustraction() {
    ele1 = document.getElementById("result_p").innerHTML;
    operator_type = "soustraction";
    document.getElementById("result_p").innerHTML = "";
}

function times() {
    ele1 = document.getElementById("result_p").innerHTML;
    operator_type = "times";
    document.getElementById("result_p").innerHTML = "";
}

function division() {
    ele1 = document.getElementById("result_p").innerHTML;
    operator_type = "division";
    document.getElementById("result_p").innerHTML = "";
}


function button_equal_click() {
    let ele2 = document.getElementById("result_p").innerHTML;

    if (operator_type == "addition") {
        var resultatcalcul = (Number(ele1) + Number(ele2));
        document.getElementById("result_p").innerHTML = resultatcalcul;
    }

    if (operator_type == "soustraction") {
        var resultatcalcul = (Number(ele1) - Number(ele2));
        document.getElementById("result_p").innerHTML = resultatcalcul;
    }

    if (operator_type == "times") {
        var resultatcalcul = (Number(ele1) * Number(ele2));
        document.getElementById("result_p").innerHTML = resultatcalcul;
    }

    if (operator_type == "division") {
        var resultatcalcul = (Number(ele1) / Number(ele2));
        document.getElementById("result_p").innerHTML = resultatcalcul;
    }

    let div_historique = document.getElementById("historique");
    let nv_element = document.createElement("p");


    if (operator_type == "addition") {
        var operator_sign_str = "+"
    }
    if (operator_type == "soustraction") {
        var operator_sign_str = "-"
    }
    if (operator_type == "times") {
        var operator_sign_str = "⨉"
    }
    if (operator_type == "division") {
        var operator_sign_str = "÷"
    }

    nv_element.innerHTML = "calcul " + n_calcul + " : " + ele1 + " " + operator_sign_str + " " + ele2 + " " + "=" + " " + resultatcalcul;
    n_calcul++;
    div_historique.appendChild(nv_element);

    bool = false;

}


function c_btn_clicked() {
    console.log("C button clicked : display reintialised");
    document.getElementById("result_p").innerHTML = ""
}

function ce_btn_clicked() {
    console.log("CE button clicked : all reintialised");
    document.getElementById("result_p").innerHTML = ""

    // reset variables : 
    operator_type = null
    ele1 = null
    ele2 = null
}


