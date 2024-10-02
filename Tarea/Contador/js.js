function iniciar(){
    const n1 = document.querySelector('#n1').value;
    setTimeout(finalizar, n1 * 1000);
}

function finalizar(){
    const audio = document.querySelector('#alarma');
    document.querySelector('#salida').textContent = '!TIEMPO FINALIZADO¡';
    audio.play();
}

