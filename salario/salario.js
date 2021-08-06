'use strict';
window.onload = (ev) => {
    let arrayNombres = ['Omar', 'Agustín', 'Pedro', 'Roberto', 'Alberto', 'Karla', 'Vanesa', 'Alicia', 'Diana', 'Anabel'];
    let arrayApellidos = ['Sánchez', 'Cárdenas', 'Valdez', 'Tapia', 'Cortez', 'Mendoza', 'Pérez', 'López', 'Méndez', 'Ramírez'];
    
    // Creación de array aleatorio de salarios --------------------------------
    let arraySalarios = [];
    for (let i = 0 ; i < 10 ; i ++) {
        const salario = 5200 * Math.ceil(Math.random() * 30);
        arraySalarios.push(salario);
    };
    console.log(arraySalarios)

    let objElementos = [];
    const selElementos = document.getElementById('selElementos');
    selElementos.setAttribute('size', '10');
    
    for (let i = 0; i < 20; i ++) {
        const valor = Math.floor(Math.random() * 30);
        const elemento = document.createElement('option');
        elemento.value = valor;
        elemento.innerText = valor;
        selElementos.appendChild(elemento);
        arraySalarios.push(valor);
    };

    const btnCalcularPromedio = document.getElementById('btnCalcularPromedio');
    btnCalcularPromedio.addEventListener('click', () => {
        const numPromedio = document.getElementById('numPromedio');
        numPromedio.value = calcularPromedio(arraySalarios);
    });

    const btnCalcularMediana = document.getElementById('btnCalcularMediana');
    btnCalcularMediana.addEventListener('click', () => {
        const numMediana = document.getElementById('numMediana');
        numMediana.value = calcularMediana(arraySalarios);
    });

    const btnCalcularModa = document.getElementById('btnCalcularModa');
    btnCalcularModa.addEventListener('click', () => {
        const numModa = document.getElementById('numModa');
        numModa.value = calcularModa (arraySalarios);
    });

    function calcularPromedio (arraySalarios) {
        const acumulado = arraySalarios.reduce((valorAcumulado, valorActual) => valorAcumulado + valorActual, 0);
        return acumulado / arraySalarios.length;
    };

    function calcularMediana (arraySalarios) {
        arraySalarios.sort((valor1, valor2) => valor1 - valor2);
        if (0 != arraySalarios.length % 2) {
            return arraySalarios[Math.floor(arraySalarios.length / 2)];
        }
        else {
            let arraySalariosCentrales = [];
            arraySalariosCentrales.push(arraySalarios[Math.floor(arraySalarios.length / 2 - 1)]);
            arraySalariosCentrales.push(arraySalarios[Math.floor(arraySalarios.length / 2)]);
            return calcularPromedio(arraySalariosCentrales);
        };
    };

    function calcularModa (arraySalarios) {
        let objetoIncidencias = {};
        arraySalarios.map((elementoActual) => {
            objetoIncidencias[elementoActual] ? objetoIncidencias[elementoActual] ++ : objetoIncidencias[elementoActual] = 1;
        });
        console.log(objetoIncidencias);
        const arrayAcumulados = Object.entries(objetoIncidencias).sort((valor1, valor2) => valor1[1] - valor2[1]);
        console.log(arrayAcumulados);
        return arrayAcumulados[arrayAcumulados.length-1][0] + ' Incidencias: ' + arrayAcumulados[arrayAcumulados.length-1][1];
    };
}