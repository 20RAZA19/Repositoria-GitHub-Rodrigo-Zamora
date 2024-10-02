function suma(){
    let n1 = +document.getElementById('n1').value;
    let n2 = +document.getElementById('n2').value;
    mostrarResultado(n1 + n2);
}
function resta(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    mostrarResultado(n1 - n2);
}
function multiplicacion(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    mostrarResultado(n1 * n2);
}
function division(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    mostrarResultado(n1 / n2);
}
function exponente(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    mostrarResultado(n1 ** n2);
}
function raiz(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    mostrarResultado(Math.pow(n1, 1 / n2));
}

function limpiar(){
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('output').value = '';
}

function mostrarResultado(resultado){
    document.getElementById('output').value = resultado;
}



