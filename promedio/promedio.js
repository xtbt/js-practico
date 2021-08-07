'use strict';
window.onload = (ev) => {
    let arrayElementos = [];
    const selElementos = document.getElementById('selElementos');
    selElementos.setAttribute('size', '10');
    
    for (let i = 0; i < 20; i ++) {
        const valor = Math.floor(Math.random() * 30);
        const elemento = document.createElement('option');
        elemento.value = valor;
        elemento.innerText = valor;
        selElementos.appendChild(elemento);
        arrayElementos.push(valor);
    };

    const btnCalcularPromedio = document.getElementById('btnCalcularPromedio');
    btnCalcularPromedio.addEventListener('click', () => {
        const numPromedio = document.getElementById('numPromedio');
        numPromedio.value = calcularPromedio(arrayElementos);
    });

    const btnCalcularMediana = document.getElementById('btnCalcularMediana');
    btnCalcularMediana.addEventListener('click', () => {
        const numMediana = document.getElementById('numMediana');
        numMediana.value = calcularMediana(arrayElementos);
    });

    const btnCalcularModa = document.getElementById('btnCalcularModa');
    btnCalcularModa.addEventListener('click', () => {
        const numModa = document.getElementById('numModa');
        numModa.value = calcularModa (arrayElementos);
    });

    function calcularPromedio (arrayElementos) {
        const acumulado = arrayElementos.reduce((valorAcumulado, valorActual) => valorAcumulado + valorActual, 0);
        return acumulado / arrayElementos.length;
    };

    function calcularMediana (arrayElementos) {
        arrayElementos.sort((valor1, valor2) => valor1 - valor2);
        if (0 != arrayElementos.length % 2) {
            return arrayElementos[Math.floor(arrayElementos.length / 2)];
        }
        else {
            let arrayElementosCentrales = [];
            arrayElementosCentrales.push(arrayElementos[Math.floor(arrayElementos.length / 2 - 1)]);
            arrayElementosCentrales.push(arrayElementos[Math.floor(arrayElementos.length / 2)]);
            return calcularPromedio(arrayElementosCentrales);
        };
    };

    function calcularModa (arrayElementos) {
        let objetoIncidencias = {};
        arrayElementos.map((elementoActual) => {
            objetoIncidencias[elementoActual] ? objetoIncidencias[elementoActual] ++ : objetoIncidencias[elementoActual] = 1;
        });
        const arrayAcumulados = Object.entries(objetoIncidencias).sort((valor1, valor2) => valor1[1] - valor2[1]);
        return arrayAcumulados[arrayAcumulados.length-1][0] + ' | Incidencias: ' + arrayAcumulados[arrayAcumulados.length-1][1];
    };
}