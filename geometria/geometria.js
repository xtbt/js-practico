'use strict';
window.onload = (ev) => {
    // CUADRADO ---------------------------------------------------------------
    const btnCuadrado = null != document.getElementById('btnCalcularCuadrado') ? document.getElementById('btnCalcularCuadrado') : null;
    const numLadoCuadrado = null != document.getElementById('numLadoCuadrado') ? document.getElementById('numLadoCuadrado') : null;
    const pAvisoCuadrado = null != document.getElementById('avisoCuadrado') ? document.getElementById('avisoCuadrado') : null;
    const numPerimetroCuadrado = null != document.getElementById('numPerimetroCuadrado') ? document.getElementById('numPerimetroCuadrado') : null;
    const numAreaCuadrado = null != document.getElementById('numAreaCuadrado') ? document.getElementById('numAreaCuadrado') : null;
    if (null != btnCuadrado) {
        btnCuadrado.addEventListener('click', function () {
            let ladoCuadrado = null != numLadoCuadrado ? Number(numLadoCuadrado.value) : 0;
            if (0 != ladoCuadrado) {
                numPerimetroCuadrado.value = calcularPerimetroCuadrado(ladoCuadrado);
                numAreaCuadrado.value = calcularAreaCuadrado(ladoCuadrado);
                pAvisoCuadrado.innerText = '';
            }
            else {
                numPerimetroCuadrado.value = '';
                numAreaCuadrado.value = '';
                pAvisoCuadrado.innerText = 'Se requiere el lado para calcular el perímetro y el área de un cuadrado';
            }
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
    const numBaseRectangulo = null != document.getElementById('numBaseRectangulo') ? document.getElementById('numBaseRectangulo') : null;
    const numAlturaRectangulo = null != document.getElementById('numAlturaRectangulo') ? document.getElementById('numAlturaRectangulo') : null;
    const pAvisoRectangulo = null != document.getElementById('avisoRectangulo') ? document.getElementById('avisoRectangulo') : null;
    const numPerimetroRectangulo = null != document.getElementById('numPerimetroRectangulo') ? document.getElementById('numPerimetroRectangulo') : null;
    const numAreaRectangulo = null != document.getElementById('numAreaRectangulo') ? document.getElementById('numAreaRectangulo') : null;
    if (null != btnRectangulo) {
        btnRectangulo.addEventListener('click', function () {
            let baseRectangulo = null != numBaseRectangulo ? Number(numBaseRectangulo.value) : 0;
            let alturaRectangulo = null != numAlturaRectangulo ? Number(numAlturaRectangulo.value) : 0;
            if (0 != baseRectangulo && 0 != alturaRectangulo) {
                numPerimetroRectangulo.value = calcularPerimetroRectangulo(baseRectangulo, alturaRectangulo);
                numAreaRectangulo.value = calcularAreaRectangulo(baseRectangulo, alturaRectangulo);
                pAvisoRectangulo.innerText = '';
            }
            else {
                numPerimetroRectangulo.value = '';
                numAreaRectangulo.value = '';
                pAvisoRectangulo.innerText = 'Se requiere la base y altura para calcular el perímetro y el área de un rectángulo';
            }
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
    const numBaseTriangulo = null != document.getElementById('numBaseTriangulo') ? document.getElementById('numBaseTriangulo') : null;
    const numLITriangulo = null != document.getElementById('numLITriangulo') ? document.getElementById('numLITriangulo') : null;
    const numLDTriangulo = null != document.getElementById('numLDTriangulo') ? document.getElementById('numLDTriangulo') : null;
    const pAvisoTriangulo = null != document.getElementById('avisoTriangulo') ? document.getElementById('avisoTriangulo') : null;
    const numPerimetroTriangulo = null != document.getElementById('numPerimetroTriangulo') ? document.getElementById('numPerimetroTriangulo') : null;
    const numAreaTriangulo = null != document.getElementById('numAreaTriangulo') ? document.getElementById('numAreaTriangulo') : null;
    if (null != btnTriangulo) {
        btnTriangulo.addEventListener('click', function () {
            let baseTriangulo = null != numBaseTriangulo ? Number(numBaseTriangulo.value) : 0;
            let liTriangulo = null != numLITriangulo ? Number(numLITriangulo.value) : 0;
            let ldTriangulo = null != numLDTriangulo ? Number(numLDTriangulo.value) : 0;
            if (0 != baseTriangulo && 0 != liTriangulo && 0 != ldTriangulo) {
                if (baseTriangulo+liTriangulo <= ldTriangulo || liTriangulo+ldTriangulo <= baseTriangulo || ldTriangulo+baseTriangulo <= liTriangulo) {
                    numPerimetroTriangulo.value = '';
                    numAreaTriangulo.value = '';
                    pAvisoTriangulo.innerText = 'Las medida otorgadas corresponden a un triángulo imposible. La suma de 2 de sus lados siempre debe ser mayor al tercer lado.';
                }
                else {
                    numPerimetroTriangulo.value = calcularPerimetroTriangulo(baseTriangulo, ldTriangulo, liTriangulo);
                    numAreaTriangulo.value = calcularAreaTriangulo(baseTriangulo, ldTriangulo, liTriangulo);
                    pAvisoTriangulo.innerText = '';
                }
            }
            else {
                numPerimetroTriangulo.value = '';
                numAreaTriangulo.value = '';
                pAvisoTriangulo.innerText = 'Se requieren la base y ambos lados para calcular el perímetro y el área de un triángulo';
            };
        });
    };

    function calcularPerimetroTriangulo (baseTriangulo, ldTriangulo, liTriangulo) {
        return Number(baseTriangulo + ldTriangulo + liTriangulo);
    };

    function calcularAreaTriangulo (baseTriangulo, ldTriangulo, liTriangulo) {
        const s = calcularPerimetroTriangulo (baseTriangulo, ldTriangulo, liTriangulo) / 2;
        return Number(Math.sqrt(s * (s-baseTriangulo) * (s-liTriangulo) * (s-ldTriangulo)));
    };

    // CÍRCULO ----------------------------------------------------------------
    const btnCirculo = null != document.getElementById('btnCalcularCirculo') ? document.getElementById('btnCalcularCirculo') : null;
    const pAvisoCirculo = null != document.getElementById('avisoCirculo') ? document.getElementById('avisoCirculo') : null;
    const numPerimetroCirculo = null != document.getElementById('numPerimetroCirculo') ? document.getElementById('numPerimetroCirculo') : null;
    const numAreaCirculo = null != document.getElementById('numAreaCirculo') ? document.getElementById('numAreaCirculo') : null;
    if (null != btnCirculo) {
        btnCirculo.addEventListener('click', function () {
            const numRadioCirculo = null != document.getElementById('numRadioCirculo') ? document.getElementById('numRadioCirculo') : null;
            let radioCirculo = null != numRadioCirculo ? Number(numRadioCirculo.value) : 0;
            if (0 != radioCirculo) {
                numPerimetroCirculo.value = calcularPerimetroCirculo(radioCirculo);
                numAreaCirculo.value = calcularAreaCirculo(radioCirculo);
                pAvisoCirculo.innerText = '';
            }
            else {
                numPerimetroCirculo.value = '';
                numAreaCirculo.value = '';
                pAvisoCirculo.innerText = 'Se requiere el radio del círculo para calcular el perímetro y el área de un triángulo';
            };
        });
    };

    function calcularPerimetroCirculo (radioCirculo) {
        return Number(2 * Math.PI * radioCirculo);
    };

    function calcularAreaCirculo (radioCirculo) {
        return Number(Math.PI * (radioCirculo ** 2));
    };
}