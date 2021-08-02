'use strict';
window.onload = (ev) => {
    const productos = [
        {"descripcion": "Bola del dragón de 4 estrellas", "costo": 5550},
        {"descripcion": "Bastón del maestro Roshi", "costo": 320},
        {"descripcion": "Arete derecho de Vegetto", "costo": 75350},
        {"descripcion": "Nube voladora", "costo": 110999},
        {"descripcion": "Capa de Piccolo", "costo": 49867},
        {"descripcion": "Huevo de cell", "costo": 150385},
        {"descripcion": "Maquina del tiempo de Trunks", "costo": 999999},
        {"descripcion": "Espada de Trunks", "costo": 459345}
    ];
    const cupones = [
        {"codigo": "kame-hame-ha", "descuento": 15},
        {"codigo": "sheng-long", "descuento": 30},
        {"codigo": "gogeta", "descuento": 45},
        {"codigo": "kakarotto", "descuento": 60}
    ];

    const divisa = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });

    const producto1 = productos[Math.floor(Math.random() * productos.length)];
    const costoProducto1 = producto1.costo;
    document.getElementById('nombreProducto1').innerText = 'Producto: ' + producto1.descripcion;
    document.getElementById('numCostoProducto1').value = divisa.format(costoProducto1);

    const producto2 = productos[Math.floor(Math.random() * productos.length)];
    const costoProducto2 = producto2.costo;
    document.getElementById('nombreProducto2').innerText = 'Producto: ' + producto2.descripcion;
    document.getElementById('numCostoProducto2').value = divisa.format(costoProducto2);

    // Acciones para forma de descuento fijo ----------------------------------
    const btnCalcularDescuentoFijo = document.getElementById('btnCalcularDescuentoFijo');
    btnCalcularDescuentoFijo.addEventListener('click', function() {
        const descuentoProducto1 = "" != document.getElementById('numDescuentoProducto1').value ? Number(document.getElementById('numDescuentoProducto1').value) : 0;
        const numDescuentoSobreCosto1 = document.getElementById('numDescuentoSobreCosto1');
        const numTotalConDescuento1 = document.getElementById('numTotalConDescuento1');
        const msjAvisoDescuentoFijo = document.getElementById('msjAvisoDescuentoFijo')
        if (0 != descuentoProducto1) {
            numDescuentoSobreCosto1.value = divisa.format(descuentoSobreCosto(costoProducto1, descuentoProducto1));
            numTotalConDescuento1.value = divisa.format(totalConDescuento(costoProducto1, descuentoProducto1));
            msjAvisoDescuentoFijo.innerText = '';
        }
        else {
            numDescuentoSobreCosto1.value = '';
            numTotalConDescuento1.value = '';
            msjAvisoDescuentoFijo.innerText = 'Se debe especificar un número entre 1 y 100';
        }
    })

    const btnCalcularDescuentoCupon = document.getElementById('btnCalcularDescuentoCupon');
    btnCalcularDescuentoCupon.addEventListener('click', function() {
        const cuponDescuento = document.getElementById('txtCuponDescuento2').value;
        const numDescuentoSobreCosto2 = document.getElementById('numDescuentoSobreCosto2');
        const numTotalConDescuento2 = document.getElementById('numTotalConDescuento2');
        const msjInfoCupon = document.getElementById('msjInfoCupon');
        const msjAvisoDescuentoCupon = document.getElementById('msjAvisoDescuentoCupon');
        const cupon = cupones.find(objetoActual => {
            return objetoActual.codigo == cuponDescuento;
        });
        if (undefined != cupon) {
            msjInfoCupon.innerText = 'Descuento aplicado: ' + cupon.descuento + '%';
            numDescuentoSobreCosto2.value = divisa.format(descuentoSobreCosto(costoProducto2, cupon.descuento));
            numTotalConDescuento2.value = divisa.format(totalConDescuento(costoProducto2, cupon.descuento));
            msjAvisoDescuentoCupon.innerText = '';
        }
        else {
            msjInfoCupon.innerText = '';
            numDescuentoSobreCosto2.value = '';
            numTotalConDescuento2.value = '';
            msjAvisoDescuentoCupon.innerText = 'Introduce un código válido';
        };
    })

    function descuentoSobreCosto (costo, descuento) {
        return costo * descuento / 100;
    }

    function totalConDescuento (costo, descuento) {
        return costo - descuentoSobreCosto(costo, descuento);
    }
}