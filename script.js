const conta = document.getElementById("conta");
const contador = document.getElementById('contador');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos')


function mostraTempo() {
    const tempoReal = setInterval(() => {
        let tempo = new Date();
        conta.innerText = `O horario atual e ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}`;
    }, 1000)
}

function cronometro() {
    for(let h = 0; h <= 23; h++) {
        let horasOption = document.createElement('option');
        horas.appendChild(horasOption);
        horasOption.innerText = h;
    }
    for(let m = 0; m <= 59; m++) {
        let minutosOption = document.createElement('option');
        minutos.appendChild(minutosOption);
        minutosOption.innerHTML = m;
    }
    
    for(let s = 0; s <= 59; s++) {
        let segundosOption = document.createElement('option');
        segundos.appendChild(segundosOption);
        segundosOption.innerText = s;
    }
    function pegaSelecao() {
        let pegouHoras = horas.value;
        let pegouMinutos = minutos.value;
        let pegouSegundos = segundos.value;

        console.log(pegouHoras);
        console.log(pegouMinutos);
        console.log(pegouSegundos);
    }
}
    
