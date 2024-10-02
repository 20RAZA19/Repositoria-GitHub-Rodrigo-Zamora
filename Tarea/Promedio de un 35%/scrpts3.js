function promediar(){
    const not1 = +document.querySelector('#nota1').value;
    const not2 = +document.querySelector('#nota2').value;
    const not3 = +document.querySelector('#nota3').value;
    const prom = (not1 * 0.15) + (not2 * 0.10) + (not3 * 0.10)
    document.querySelector('#salida').textContent = prom;
}