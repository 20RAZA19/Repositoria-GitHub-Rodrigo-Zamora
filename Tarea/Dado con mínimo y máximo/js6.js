
function dado(){
    let min = +document.querySelector('#numin').value;
    let max = +document.querySelector('#numax').value;
    const dado = Math.floor(Math.random() * (max - min + 1))  + min;
    document.querySelector('#salida').textContent = dado; 
}