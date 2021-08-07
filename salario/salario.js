'use strict';
window.onload = (ev) => {
    let arrayNombres = ['Omar', 'Agustín', 'Pedro', 'Roberto', 'Alberto', 'Karla', 'Vanessa', 'Alicia', 'Diana', 'Anabel', 'Jonathan', 'Carlos', 'Rocío', 'Leticia', 'Julio', 'José', 'María', 'Carina', 'Jessica', 'Alfredo', 'Salvador', 'Leonardo', 'Andrés'];
    let arrayApellidos = ['Sánchez', 'Cárdenas', 'Valdez', 'Tapia', 'Cortez', 'Mendoza', 'Pérez', 'López', 'Méndez', 'Ramírez', 'Velázquez', 'Rodríguez', 'Luna', 'Medina', 'Fernández', 'Estolano', 'Soto', 'González', 'Reyes', 'Robles', 'Núñez'];
    
    // Creación de array aleatorio de salarios --------------------------------
    let arraySalarios = [];
    for (let i = 0 ; i < 100 ; i ++) {
        const salario = 5200 + Math.ceil(Math.random() * 60000);
        arraySalarios.push(salario);
    };

    // Definición del formateador del resultado de mediana
    const divisa = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });

    let objElementos = [];
    const selElementos = document.getElementById('selElementos');
    selElementos.setAttribute('size', '15');
    const selTop5 = document.getElementById('selTop5');
    selTop5.setAttribute('size', 4);
    
    for (let i = 0; i < 15; i ++) {
        const nombre = arrayNombres[Math.floor(Math.random() * arrayNombres.length)];
        const apellido = arrayApellidos[Math.floor(Math.random() * arrayApellidos.length)];
        const salario = arraySalarios[Math.floor(Math.random() * arraySalarios.length)];
        const elemento = document.createElement('option');
        elemento.value = salario;
        elemento.innerText = nombre + ' ' + apellido + ', Salario: ' + divisa.format(salario);
        selElementos.appendChild(elemento);
        const objElemento = {
            "nombre": nombre, 
            "apellido": apellido, 
            "salario": salario
        };
        objElementos.push(objElemento);
    };

    const btnCalcularTop5 = document.getElementById('btnCalcularTop5');
    const txtMedianaSalarios = document.getElementById('txtMedianaSalarios');
    btnCalcularTop5.addEventListener('click', () => {
        txtMedianaSalarios.value = divisa.format(calcularMedianaSalarios());
        txtSalarioMasBajo.value = divisa.format(objElementos[0].salario);
        txtSalarioMasAlto.value = divisa.format(objElementos[objElementos.length - 1].salario);
        selTop5.innerHTML = '';
        calcularTop5();
    });


    function calcularPromedioSalarios (arrayObjetos) {
        const acumulado = arrayObjetos.reduce((valorAcumulado, elementoActual) => valorAcumulado + elementoActual.salario, 0);
        return acumulado / arrayObjetos.length;
    };

    function calcularMedianaSalarios () {
        objElementos.sort((elemento1, elemento2) => elemento1.salario - elemento2.salario);
        if (0 != objElementos.length % 2) {
            return objElementos[Math.floor(objElementos.length / 2)].salario;
        }
        else {
            let arrayObjetos = [];
            arrayObjetos.push(objElementos[Math.floor(objElementos.length / 2 - 1)]);
            arrayObjetos.push(objElementos[Math.floor(objElementos.length / 2)]);
            return calcularPromedioSalarios(arrayObjetos);
        };
    };

    function calcularTop5 () {
        const decima = Math.floor(objElementos.length / 5);
        for (let i = objElementos.length - (decima) ; i < objElementos.length ; i ++) {
            const elemento = document.createElement('option');
            elemento.value = objElementos[i].salario;
            elemento.innerText = objElementos[i].nombre + ' ' + objElementos[i].apellido + ', Salario: ' + divisa.format(objElementos[i].salario);
            selTop5.appendChild(elemento);
        };
    }
}