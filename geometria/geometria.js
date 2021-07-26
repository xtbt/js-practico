'use strict';
window.onload = (ev) => {
    // CUADRADO ---------------------------------------------------------------
    const btnCuadrado = null != document.getElementById('btnCalcularCuadrado') ? document.getElementById('btnCalcularCuadrado') : null;
    if (null != btnCuadrado) {
        btnCuadrado.addEventListener('click', function () {
            const numLadoCuadrado = null != document.getElementById('numLadoCuadrado') ? document.getElementById('numLadoCuadrado') : null;
            let ladoCuadrado = 0;
            if (null != numLadoCuadrado)
                ladoCuadrado = numLadoCuadrado.value;
            if (null != document.getElementById('numPerimetroCuadrado'))
                document.getElementById('numPerimetroCuadrado').value = calcularPerimetroCuadrado(ladoCuadrado);
            if (null != document.getElementById('numAreaCuadrado'))
                document.getElementById('numAreaCuadrado').value = calcularAreaCuadrado(ladoCuadrado);
        });
    };

    function calcularPerimetroCuadrado (ladoCuadrado) {
        return Number(ladoCuadrado * 4);
    };

    function calcularAreaCuadrado (ladoCuadrado) {
        return Number(ladoCuadrado ** 2);
    };

    // RECTÁNGULO -------------------------------------------------------------
    const btnRectangulo = null != document.getElementById('btnCalcularRectangulo') ? document.getElementById('btnCalcularRectangulo') : null;
    if (null != btnRectangulo) {
        btnRectangulo.addEventListener('click', function () {
            const numBaseRectangulo = null != document.getElementById('numBaseRectangulo') ? document.getElementById('numBaseRectangulo') : null;
            const numAlturaRectangulo = null != document.getElementById('numAlturaRectangulo') ? document.getElementById('numAlturaRectangulo') : null;
            let baseRectangulo = 0;
            let alturaRectangulo = 0;
            if (null != numBaseRectangulo && null != numAlturaRectangulo) {
                baseRectangulo = numBaseRectangulo.value;
                alturaRectangulo = numAlturaRectangulo.value;
            };
            if (null != document.getElementById('numPerimetroRectangulo'))
                document.getElementById('numPerimetroRectangulo').value = calcularPerimetroRectangulo(baseRectangulo, alturaRectangulo);
            if (null != document.getElementById('numAreaRectangulo'))
                document.getElementById('numAreaRectangulo').value = calcularAreaRectangulo(baseRectangulo, alturaRectangulo);
        });
    };

    function calcularPerimetroRectangulo (baseRectangulo, alturaRectangulo) {
        return Number(baseRectangulo * 2 + alturaRectangulo * 2);
    };

    function calcularAreaRectangulo (baseRectangulo, alturaRectangulo) {
        return Number(baseRectangulo * alturaRectangulo);
    };

    // TRIÁNGULO --------------------------------------------------------------
    const btnTriangulo = null != document.getElementById('btnCalcularTriangulo') ? document.getElementById('btnCalcularTriangulo') : null;
    if (null != btnTriangulo) {
        btnTriangulo.addEventListener('click', function () {
            const numBaseTriangulo = null != document.getElementById('numBaseTriangulo') ? document.getElementById('numBaseTriangulo') : null;
            const numAlturaTriangulo = null != document.getElementById('numAlturaTriangulo') ? document.getElementById('numAlturaTriangulo') : null;
            let baseTriangulo = 0;
            let alturaTriangulo = 0;
            if (null != numBaseTriangulo && null != numAlturaTriangulo) {
                baseTriangulo = numBaseTriangulo.value;
                alturaTriangulo = numAlturaTriangulo.value;
            };
            if (null != document.getElementById('numPerimetroTriangulo'))
                document.getElementById('numPerimetroTriangulo').value = calcularPerimetroTriangulo(baseTriangulo, alturaTriangulo);
            if (null != document.getElementById('numAreaTriangulo'))
                document.getElementById('numAreaTriangulo').value = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
        });
    };

    function calcularPerimetroTriangulo (baseTriangulo, alturaTriangulo) {
        return Number(baseTriangulo * 2 + alturaTriangulo * 2);
    };

    function calcularAreaTriangulo (baseTriangulo, alturaTriangulo) {
        return Number(baseTriangulo * alturaTriangulo);
    };
}