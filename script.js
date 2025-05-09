document.addEventListener('DOMContentLoaded', function() {
    // --- DEFINICIÓN DE PLANTILLAS DE FÓRMULAS (AMPLIADA) ---
    const plantillasFormulas = [
        // Átomos individuales (13)
        { id: 'Fe', tipo: 'atomo_simple', simbolo: 'Fe', nombre: 'Hierro', esMolecula: false, esSustanciaCompuesta: false },
        { id: 'Cu', tipo: 'atomo_simple', simbolo: 'Cu', nombre: 'Cobre', esMolecula: false, esSustanciaCompuesta: false },
        { id: 'Al', tipo: 'atomo_simple', simbolo: 'Al', nombre: 'Aluminio', esMolecula: false, esSustanciaCompuesta: false },
        { id: 'Na', tipo: 'atomo_simple', simbolo: 'Na', nombre: 'Sodio', esMolecula: false, esSustanciaCompuesta: false },
        { id: 'C',  tipo: 'atomo_simple', simbolo: 'C',  nombre: 'Carbono', esMolecula: false, esSustanciaCompuesta: false },
        { id: 'Ag', tipo: 'atomo_simple', simbolo: 'Ag', nombre: 'Plata', esMolecula: false, esSustanciaCompuesta: false },
        { id: 'He', tipo: 'atomo_simple', simbolo: 'He', nombre: 'Helio', esMolecula: false, esSustanciaCompuesta: false },
        { id: 'Ne', tipo: 'atomo_simple', simbolo: 'Ne', nombre: 'Neón', esMolecula: false, esSustanciaCompuesta: false },
        { id: 'Ar', tipo: 'atomo_simple', simbolo: 'Ar', nombre: 'Argón', esMolecula: false, esSustanciaCompuesta: false },
        { id: 'Xe', tipo: 'atomo_simple', simbolo: 'Xe', nombre: 'Xenón', esMolecula: false, esSustanciaCompuesta: false },
        { id: 'Pb', tipo: 'atomo_simple', simbolo: 'Pb', nombre: 'Plomo', esMolecula: false, esSustanciaCompuesta: false },
        { id: 'Pt', tipo: 'atomo_simple', simbolo: 'Pt', nombre: 'Platino', esMolecula: false, esSustanciaCompuesta: false },
        { id: 'Au', tipo: 'atomo_simple', simbolo: 'Au', nombre: 'Oro', esMolecula: false, esSustanciaCompuesta: false },

        // Moléculas simples (diatómicas y poliatómicas) (10)
        // El tipo 'molecula_simple_diatomica' se usará para la lógica de preguntas 3b,
        // 'numAtomosEnMoleculaUnica' es la clave aquí.
        { id: 'N2', tipo: 'molecula_simple_diatomica', formulaBase: 'N', subindice: 2, nombreElemento: 'Nitrógeno', esMolecula: true, esSustanciaCompuesta: false, atomosPorMoleculaUnica: { 'N': 2 }, numAtomosEnMoleculaUnica: 2 },
        { id: 'H2', tipo: 'molecula_simple_diatomica', formulaBase: 'H', subindice: 2, nombreElemento: 'Hidrógeno', esMolecula: true, esSustanciaCompuesta: false, atomosPorMoleculaUnica: { 'H': 2 }, numAtomosEnMoleculaUnica: 2 },
        { id: 'O2', tipo: 'molecula_simple_diatomica', formulaBase: 'O', subindice: 2, nombreElemento: 'Oxígeno', esMolecula: true, esSustanciaCompuesta: false, atomosPorMoleculaUnica: { 'O': 2 }, numAtomosEnMoleculaUnica: 2 },
        { id: 'Cl2', tipo: 'molecula_simple_diatomica', formulaBase: 'Cl', subindice: 2, nombreElemento: 'Cloro', esMolecula: true, esSustanciaCompuesta: false, atomosPorMoleculaUnica: { 'Cl': 2 }, numAtomosEnMoleculaUnica: 2 },
        { id: 'Br2', tipo: 'molecula_simple_diatomica', formulaBase: 'Br', subindice: 2, nombreElemento: 'Bromo', esMolecula: true, esSustanciaCompuesta: false, atomosPorMoleculaUnica: { 'Br': 2 }, numAtomosEnMoleculaUnica: 2 },
        { id: 'F2', tipo: 'molecula_simple_diatomica', formulaBase: 'F', subindice: 2, nombreElemento: 'Flúor', esMolecula: true, esSustanciaCompuesta: false, atomosPorMoleculaUnica: { 'F': 2 }, numAtomosEnMoleculaUnica: 2 },
        { id: 'I2', tipo: 'molecula_simple_diatomica', formulaBase: 'I', subindice: 2, nombreElemento: 'Yodo', esMolecula: true, esSustanciaCompuesta: false, atomosPorMoleculaUnica: { 'I': 2 }, numAtomosEnMoleculaUnica: 2 },
        { id: 'O3', tipo: 'molecula_simple_diatomica', formulaBase: 'O', subindice: 3, nombreElemento: 'Ozono', esMolecula: true, esSustanciaCompuesta: false, atomosPorMoleculaUnica: { 'O': 3 }, numAtomosEnMoleculaUnica: 3 }, // Ozono
        { id: 'P4', tipo: 'molecula_simple_diatomica', formulaBase: 'P', subindice: 4, nombreElemento: 'Fósforo', esMolecula: true, esSustanciaCompuesta: false, atomosPorMoleculaUnica: { 'P': 4 }, numAtomosEnMoleculaUnica: 4 }, // Fósforo blanco
        { id: 'S8', tipo: 'molecula_simple_diatomica', formulaBase: 'S', subindice: 8, nombreElemento: 'Azufre', esMolecula: true, esSustanciaCompuesta: false, atomosPorMoleculaUnica: { 'S': 8 }, numAtomosEnMoleculaUnica: 8 }, // Azufre rómbico

        // Moléculas compuestas (19)
        { id: 'H2O', tipo: 'molecula_compuesta', formulaVisible: 'H₂O', nombre: 'Agua', esMolecula: true, esSustanciaCompuesta: true, atomosPorMoleculaUnica: { H: 2, O: 1 } },
        { id: 'CO2', tipo: 'molecula_compuesta', formulaVisible: 'CO₂', nombre: 'Dióxido de Carbono', esMolecula: true, esSustanciaCompuesta: true, atomosPorMoleculaUnica: { C: 1, O: 2 } },
        { id: 'CH4', tipo: 'molecula_compuesta', formulaVisible: 'CH₄', nombre: 'Metano', esMolecula: true, esSustanciaCompuesta: true, atomosPorMoleculaUnica: { C: 1, H: 4 } },
        { id: 'NH3', tipo: 'molecula_compuesta', formulaVisible: 'NH₃', nombre: 'Amoniaco', esMolecula: true, esSustanciaCompuesta: true, atomosPorMoleculaUnica: { N: 1, H: 3 } },
        { id: 'H2SO4', tipo: 'molecula_compuesta', formulaVisible: 'H₂SO₄', nombre: 'Ácido Sulfúrico', esMolecula: true, esSustanciaCompuesta: true, atomosPorMoleculaUnica: { H: 2, S: 1, O: 4 } },
        { id: 'Al(OH)3', tipo: 'molecula_compuesta', formulaVisible: 'Al(OH)₃', nombre: 'Hidróxido de Aluminio', esMolecula: true, esSustanciaCompuesta: true, atomosPorMoleculaUnica: { Al: 1, O: 3, H: 3 } },
        { id: 'NaCl', tipo: 'molecula_compuesta', formulaVisible: 'NaCl', nombre: 'Cloruro de Sodio', esMolecula: true, esSustanciaCompuesta: true, atomosPorMoleculaUnica: { Na: 1, Cl: 1 } },
        { id: 'CO', tipo: 'molecula_compuesta', formulaVisible: 'CO', nombre: 'Monóxido de Carbono', esMolecula: true, esSustanciaCompuesta: true, atomosPorMoleculaUnica: { C: 1, O: 1 } },
        { id: 'NaOH', tipo: 'molecula_compuesta', formulaVisible: 'NaOH', nombre: 'Hidróxido de Sodio', esMolecula: true, esSustanciaCompuesta: true, atomosPorMoleculaUnica: { Na: 1, O: 1, H: 1 } },
        { id: 'HCl', tipo: 'molecula_compuesta', formulaVisible: 'HCl', nombre: 'Cloruro de Hidrógeno', esMolecula: true, esSustanciaCompuesta: true, atomosPorMoleculaUnica: { H: 1, Cl: 1 } },
        { id: 'HBr', tipo: 'molecula_compuesta', formulaVisible: 'HBr', nombre: 'Bromuro de Hidrógeno', esMolecula: true, esSustanciaCompuesta: true, atomosPorMoleculaUnica: { H: 1, Br: 1 } },
        { id: 'FeO', tipo: 'molecula_compuesta', formulaVisible: 'FeO', nombre: 'Óxido de Hierro (II)', esMolecula: true, esSustanciaCompuesta: true, atomosPorMoleculaUnica: { Fe: 1, O: 1 } },
        { id: 'Fe2O3', tipo: 'molecula_compuesta', formulaVisible: 'Fe₂O₃', nombre: 'Óxido de Hierro (III)', esMolecula: true, esSustanciaCompuesta: true, atomosPorMoleculaUnica: { Fe: 2, O: 3 } },
        { id: 'BeCl2', tipo: 'molecula_compuesta', formulaVisible: 'BeCl₂', nombre: 'Cloruro de Berilio', esMolecula: true, esSustanciaCompuesta: true, atomosPorMoleculaUnica: { Be: 1, Cl: 2 } },
        { id: 'Al2O3', tipo: 'molecula_compuesta', formulaVisible: 'Al₂O₃', nombre: 'Óxido de Aluminio', esMolecula: true, esSustanciaCompuesta: true, atomosPorMoleculaUnica: { Al: 2, O: 3 } },
        { id: 'AgCl', tipo: 'molecula_compuesta', formulaVisible: 'AgCl', nombre: 'Cloruro de Plata', esMolecula: true, esSustanciaCompuesta: true, atomosPorMoleculaUnica: { Ag: 1, Cl: 1 } },
        { id: 'FeCl2', tipo: 'molecula_compuesta', formulaVisible: 'FeCl₂', nombre: 'Cloruro de Hierro (II)', esMolecula: true, esSustanciaCompuesta: true, atomosPorMoleculaUnica: { Fe: 1, Cl: 2 } },
        { id: 'FeCl3', tipo: 'molecula_compuesta', formulaVisible: 'FeCl₃', nombre: 'Cloruro de Hierro (III)', esMolecula: true, esSustanciaCompuesta: true, atomosPorMoleculaUnica: { Fe: 1, Cl: 3 } },
        { id: 'Fe2(SO4)3', tipo: 'molecula_compuesta', formulaVisible: 'Fe₂(SO₄)₃', nombre: 'Sulfato de Hierro (III)', esMolecula: true, esSustanciaCompuesta: true, atomosPorMoleculaUnica: { Fe: 2, S: 3, O: 12 } },
    ]; // Total: 13+10+19 = 42 sustancias únicas

    // --- ESTADO DEL JUEGO ---
    let puntuacion = 0;
    let ejemploActualGlobal = {}; // Renombrado para evitar confusión con la variable local
    let coeficienteActual = 1;
    let preguntasRespondidasCorrectamente = 0;
    let totalPreguntasDelEjemplo = 0;

    const TOTAL_EJEMPLOS_POR_SESION = 20;
    let contadorEjemplosSesion = 0;
    let ejemplosSesionActual = []; // Contendrá los 20 ejemplos únicos para la sesión
    let indiceEjemploEnSesion = 0;


    // --- ELEMENTOS DEL DOM ---
    const elPuntuacion = document.getElementById('puntuacion');
    const elExpresionQuimica = document.getElementById('expresionQuimica');
    const elSiguienteEjemploBtn = document.getElementById('siguienteEjemploBtn');
    const elReiniciarSesionBtn = document.getElementById('reiniciarSesionBtn');
    const elMensajeFinal = document.getElementById('mensajeFinal');
    const elContadorEjemplos = document.getElementById('contadorEjemplos');

    // Contenedores de preguntas
    const bloquesPregunta = {
        1: document.getElementById('bloquePregunta1'),
        2: document.getElementById('bloquePregunta2'),
        '3a': document.getElementById('bloquePregunta3a'),
        '3b': document.getElementById('bloquePregunta3b'),
        '3c': document.getElementById('bloquePregunta3c')
    };

    // Feedbacks
    const feedbacks = {
        1: document.getElementById('feedback1'),
        2: document.getElementById('feedback2'),
        '3a': document.getElementById('feedback3a'),
        '3b_moleculas': document.getElementById('feedback3b_moleculas'),
        '3b_atomosPorMolecula': document.getElementById('feedback3b_atomosPorMolecula'),
        '3b_atomosTotales': document.getElementById('feedback3b_atomosTotales'),
        '3c_moleculas': document.getElementById('feedback3c_moleculas')
        // Feedbacks para 3c (átomos en molécula y totales) se generan dinámicamente
    };

    // Inputs y botones específicos
    const inputRespuestaCantidadAtomos = document.getElementById('respuestaCantidadAtomos');
    const btnCorregirCantidadAtomos = document.getElementById('btnCorregirCantidadAtomos'); // Referencia directa al botón
    const inputCantidadMoleculasSimples = document.getElementById('respuestaCantidadMoleculasSimples');
    const inputAtomosPorMoleculaSimple = document.getElementById('respuestaAtomosPorMoleculaSimple');
    const inputAtomosTotalesSimples = document.getElementById('respuestaAtomosTotalesSimples');
    const inputCantidadMoleculasCompuestas = document.getElementById('respuestaCantidadMoleculasCompuestas');
    const containerAtomosPorMoleculaCompuesta = document.getElementById('atomosPorMoleculaCompuestaContainer');
    const containerAtomosTotalesCompuestos = document.getElementById('atomosTotalesCompuestosContainer');


    // --- LÓGICA DEL JUEGO ---

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Intercambio de elementos
        }
    }

    function prepararNuevaSesion() {
        puntuacion = 0;
        actualizarPuntuacion(0); // Actualiza visualmente
        contadorEjemplosSesion = 0;
        indiceEjemploEnSesion = 0;

        // Crear una copia barajada de las plantillas y tomar las primeras 20
        let plantillasBarajadas = [...plantillasFormulas];
        shuffleArray(plantillasBarajadas);
        ejemplosSesionActual = plantillasBarajadas.slice(0, TOTAL_EJEMPLOS_POR_SESION);

        elReiniciarSesionBtn.style.display = 'none';
        iniciarNuevoEjemplo();
    }

    function iniciarNuevoEjemplo() {
        if (indiceEjemploEnSesion >= ejemplosSesionActual.length) {
            // Esto no debería pasar si TOTAL_EJEMPLOS_POR_SESION es alcanzado primero
            finalizarSesion("Error: Se intentó cargar más ejemplos de los preparados.");
            return;
        }

        ejemploActualGlobal = ejemplosSesionActual[indiceEjemploEnSesion];
        indiceEjemploEnSesion++;
        contadorEjemplosSesion++;
        elContadorEjemplos.textContent = `Ejemplo ${contadorEjemplosSesion} de ${TOTAL_EJEMPLOS_POR_SESION}`;

        preguntasRespondidasCorrectamente = 0;
        elMensajeFinal.style.display = 'none';
        elSiguienteEjemploBtn.style.display = 'none';

        coeficienteActual = Math.random() < 0.4 ? 1 : Math.floor(Math.random() * 3) + 2; // Más probabilidad para 1

        let formulaMostrada = "";
        if (ejemploActualGlobal.tipo === 'atomo_simple') {
            formulaMostrada = ejemploActualGlobal.simbolo;
        } else if (ejemploActualGlobal.tipo === 'molecula_simple_diatomica') { // Usamos este tipo para todas las simples (di y poli)
            formulaMostrada = `${ejemploActualGlobal.formulaBase}<sub>${ejemploActualGlobal.subindice}</sub>`;
        } else {
            formulaMostrada = ejemploActualGlobal.formulaVisible;
        }
        elExpresionQuimica.innerHTML = (coeficienteActual > 1 ? coeficienteActual + " " : "") + formulaMostrada;

        resetearInterfazPreguntas();
        mostrarBloquePregunta('1'); // Inicia con la primera pregunta
        configurarPreguntasEspecificas();
    }

    function finalizarSesion(mensaje = "¡Sesión completada!") {
        elMensajeFinal.textContent = `${mensaje} Tu puntuación final es: ${puntuacion}.`;
        elMensajeFinal.style.color = "#16a085";
        elMensajeFinal.style.display = 'block';
        elSiguienteEjemploBtn.style.display = 'none';
        elReiniciarSesionBtn.style.display = 'block';

        // Ocultar todos los bloques de preguntas
        Object.values(bloquesPregunta).forEach(bloque => bloque.style.display = 'none');
    }


    function resetearInterfazPreguntas() {
        Object.values(bloquesPregunta).forEach(bloque => bloque.style.display = 'none');
        Object.values(feedbacks).forEach(fb => { if(fb) fb.textContent = ''; });

        if(inputRespuestaCantidadAtomos) inputRespuestaCantidadAtomos.value = '';
        if(inputCantidadMoleculasSimples) inputCantidadMoleculasSimples.value = '';
        if(inputAtomosPorMoleculaSimple) inputAtomosPorMoleculaSimple.value = '';
        if(inputAtomosTotalesSimples) inputAtomosTotalesSimples.value = '';
        if(inputCantidadMoleculasCompuestas) inputCantidadMoleculasCompuestas.value = '';

        containerAtomosPorMoleculaCompuesta.innerHTML = '';
        containerAtomosTotalesCompuestos.innerHTML = '';

        // Reactivar botones de opción y numéricos
        Object.values(bloquesPregunta).forEach(bloque => {
            bloque.querySelectorAll('button').forEach(btn => btn.disabled = false);
            bloque.querySelectorAll('input[type="number"]').forEach(input => input.disabled = false);
        });
    }

    function mostrarBloquePregunta(idBloque) {
        if (bloquesPregunta[idBloque]) {
            bloquesPregunta[idBloque].style.display = 'block';

            // *** INICIO DE LA CORRECCIÓN ***
            // Asegurar que el botón de corrección del bloque 3a esté habilitado cuando se muestra el bloque.
            if (idBloque === '3a') {
                if (btnCorregirCantidadAtomos) { // btnCorregirCantidadAtomos es la referencia directa al botón
                    btnCorregirCantidadAtomos.disabled = false;
                }
            }
            // Podrías añadir lógica similar para los botones de los bloques 3b y 3c
            // si se observa el mismo problema, accediendo a ellos por su ID o una clase específica.
            // Por ejemplo, para 3b:
            // if (idBloque === '3b') {
            //     bloquesPregunta['3b'].querySelectorAll('button').forEach(btn => btn.disabled = false);
            //     bloquesPregunta['3b'].querySelectorAll('input').forEach(input => input.disabled = false);
            // }
            // if (idBloque === '3c') {
            //     bloquesPregunta['3c'].querySelectorAll('button').forEach(btn => btn.disabled = false);
            //     bloquesPregunta['3c'].querySelectorAll('input').forEach(input => input.disabled = false);
            //     // Para los generados dinámicamente, esto se haría en generarPreguntasDinamicas3c
            // }
            // *** FIN DE LA CORRECCIÓN ***
        }
    }

    function deshabilitarBotonesDelBloque(bloqueId) { // Renombrado para claridad
        const bloque = bloquesPregunta[bloqueId];
        if (bloque) {
            bloque.querySelectorAll('button').forEach(btn => btn.disabled = true);
        }
    }

    function deshabilitarBotonCorreccionInput(botonCorreccion) { // Renombrado para claridad
        botonCorreccion.disabled = true;
        // Opcional: deshabilitar también el input asociado al botón
        // if (botonCorreccion.previousElementSibling && botonCorreccion.previousElementSibling.tagName === 'INPUT') {
        //     botonCorreccion.previousElementSibling.disabled = true;
        // }
    }


    function actualizarPuntuacion(puntos) {
        if (puntos !== 0) { // Solo actualiza si hay cambio real
            puntuacion += puntos;
            elPuntuacion.textContent = puntuacion;
        } else if (contadorEjemplosSesion === 0) { // Para el reinicio de sesión
             elPuntuacion.textContent = puntuacion;
        }
    }

    function mostrarFeedback(feedbackElement, esCorrecto) {
        if (feedbackElement) {
            feedbackElement.textContent = esCorrecto ? '✅' : '❌';
            feedbackElement.className = 'feedback-icon ' + (esCorrecto ? 'ok' : 'ko');
        }
        actualizarPuntuacion(esCorrecto ? 1 : -1);
        if (esCorrecto) {
            preguntasRespondidasCorrectamente++;
        }
    }

    function verificarFinDeEjemplo() {
        // Comprueba si todas las subpreguntas del ejemplo actual han sido respondidas (correcta o incorrectamente)
        // O si una pregunta crucial (1 o 2) fue incorrecta, lo que también finaliza el intento del ejemplo.
        let todasLasSubpreguntasIntentadas = true; // Asumir verdadero inicialmente

        // Si la pregunta 1 está visible y no tiene feedback, no se ha intentado todo.
        if (bloquesPregunta['1'].style.display !== 'none' && feedbacks['1'].textContent === '') {
            todasLasSubpreguntasIntentadas = false;
        }
        // Si la pregunta 1 fue incorrecta, el ejemplo termina ahí para el usuario.
        else if (feedbacks['1'].textContent === '❌') {
            // No hacer nada, el flujo se detiene y se mostrará "Siguiente Ejemplo"
        }
        // Si la pregunta 2 está visible y no tiene feedback (y la 1 fue correcta), no se ha intentado todo.
        else if (bloquesPregunta['2'].style.display !== 'none' && feedbacks['2'].textContent === '') {
            todasLasSubpreguntasIntentadas = false;
        }
        // Si la pregunta 2 fue incorrecta, el ejemplo termina ahí.
        else if (feedbacks['2'].textContent === '❌') {
            // No hacer nada
        }
        // Si las preguntas 1 y 2 fueron correctas, verificar el bloque 3 correspondiente.
        else {
            if (ejemploActualGlobal.tipo === 'atomo_simple' && bloquesPregunta['3a'].style.display !== 'none') {
                if (feedbacks['3a'].textContent === '') todasLasSubpreguntasIntentadas = false;
            } else if (ejemploActualGlobal.tipo === 'molecula_simple_diatomica' && bloquesPregunta['3b'].style.display !== 'none') {
                if (feedbacks['3b_moleculas'].textContent === '' ||
                    feedbacks['3b_atomosPorMolecula'].textContent === '' ||
                    feedbacks['3b_atomosTotales'].textContent === '') todasLasSubpreguntasIntentadas = false;
            } else if (ejemploActualGlobal.tipo === 'molecula_compuesta' && bloquesPregunta['3c'].style.display !== 'none') {
                if (feedbacks['3c_moleculas'].textContent === '') todasLasSubpreguntasIntentadas = false;
                // Chequear feedbacks dinámicos para 3c
                let todosFeedbacksDinamicos3cCompletos = true;
                containerAtomosPorMoleculaCompuesta.querySelectorAll('.feedback-icon').forEach(fb => {
                    if (fb.textContent === '') todosFeedbacksDinamicos3cCompletos = false;
                });
                containerAtomosTotalesCompuestos.querySelectorAll('.feedback-icon').forEach(fb => {
                    if (fb.textContent === '') todosFeedbacksDinamicos3cCompletos = false;
                });
                if (!todosFeedbacksDinamicos3cCompletos) todasLasSubpreguntasIntentadas = false;
            }
        }


        if (preguntasRespondidasCorrectamente === totalPreguntasDelEjemplo) {
            elMensajeFinal.textContent = "¡Muy bien! Todas las respuestas de este ejemplo son correctas.";
            elMensajeFinal.style.color = "#27ae60"; // Verde
            elMensajeFinal.style.display = 'block';
            if (contadorEjemplosSesion < TOTAL_EJEMPLOS_POR_SESION) {
                elSiguienteEjemploBtn.style.display = 'block';
            } else {
                finalizarSesion();
            }
        } else if (todasLasSubpreguntasIntentadas) { // Si se intentaron todas pero no todas fueron correctas
             elMensajeFinal.textContent = "Algunas respuestas no fueron correctas en este ejemplo. Revisa y aprende.";
             elMensajeFinal.style.color = "#e74c3c"; // Rojo
             elMensajeFinal.style.display = 'block';
             if (contadorEjemplosSesion < TOTAL_EJEMPLOS_POR_SESION) {
                elSiguienteEjemploBtn.style.display = 'block';
            } else {
                finalizarSesion("Has completado la sesión. Algunas respuestas no fueron correctas.");
            }
        }
        // Si no se han intentado todas las subpreguntas, no se muestra ningún mensaje final ni el botón "Siguiente Ejemplo" aún.
    }


    function configurarPreguntasEspecificas() {
        totalPreguntasDelEjemplo = 0; // Reiniciar para cada ejemplo

        // Pregunta 1
        totalPreguntasDelEjemplo++;
        bloquesPregunta['1'].querySelectorAll('button').forEach(btn => {
            btn.onclick = () => {
                const respuestaUsuario = btn.dataset.respuesta === 'molecula';
                const esCorrecto = (respuestaUsuario === ejemploActualGlobal.esMolecula);
                mostrarFeedback(feedbacks['1'], esCorrecto);
                deshabilitarBotonesDelBloque('1'); // Deshabilita los botones Sí/No de la pregunta 1
                if (esCorrecto) {
                    mostrarBloquePregunta('2');
                } else {
                    verificarFinDeEjemplo(); // Finaliza el intento de este ejemplo si la Q1 es incorrecta
                }
            };
        });

        // Pregunta 2
        totalPreguntasDelEjemplo++;
        bloquesPregunta['2'].querySelectorAll('button').forEach(btn => {
            btn.onclick = () => {
                const respuestaUsuario = btn.dataset.respuesta === 'compuesta';
                const esCorrecto = (respuestaUsuario === ejemploActualGlobal.esSustanciaCompuesta);
                mostrarFeedback(feedbacks['2'], esCorrecto);
                deshabilitarBotonesDelBloque('2'); // Deshabilita los botones Sí/No de la pregunta 2
                if (esCorrecto) {
                    // Determinar qué bloque 3 mostrar
                    if (ejemploActualGlobal.tipo === 'atomo_simple') {
                        mostrarBloquePregunta('3a');
                        totalPreguntasDelEjemplo++; // Se añade la pregunta 3a
                    } else if (ejemploActualGlobal.tipo === 'molecula_simple_diatomica') {
                        mostrarBloquePregunta('3b');
                        totalPreguntasDelEjemplo += 3; // Se añaden 3 subpreguntas en 3b
                    } else if (ejemploActualGlobal.tipo === 'molecula_compuesta') {
                        mostrarBloquePregunta('3c');
                        totalPreguntasDelEjemplo++; // Por cantidad de moléculas
                        totalPreguntasDelEjemplo += Object.keys(ejemploActualGlobal.atomosPorMoleculaUnica).length; // Por cada tipo de átomo en una molécula
                        totalPreguntasDelEjemplo += Object.keys(ejemploActualGlobal.atomosPorMoleculaUnica).length; // Por cada tipo de átomo en total
                        generarPreguntasDinamicas3c();
                    }
                } else {
                     verificarFinDeEjemplo(); // Finaliza el intento de este ejemplo si la Q2 es incorrecta
                }
            };
        });

        // Pregunta 3a: Cuántos átomos (para átomos individuales)
        btnCorregirCantidadAtomos.onclick = () => {
            const respuestaUsuario = parseInt(inputRespuestaCantidadAtomos.value);
            const esCorrecto = (respuestaUsuario === coeficienteActual);
            mostrarFeedback(feedbacks['3a'], esCorrecto);
            deshabilitarBotonCorreccionInput(btnCorregirCantidadAtomos); // Deshabilita solo este botón de corregir
            verificarFinDeEjemplo();
        };

        // Pregunta 3b: Moléculas simples
        bloquesPregunta['3b'].querySelectorAll('button').forEach(btn => {
            btn.onclick = (e) => {
                const subpregunta = e.target.dataset.subpregunta;
                let esCorrecto = false;
                let feedbackEl;
                let inputEl; // Para deshabilitar el input asociado

                if (subpregunta === 'cantidadMoleculas') {
                    inputEl = inputCantidadMoleculasSimples;
                    esCorrecto = (parseInt(inputEl.value) === coeficienteActual);
                    feedbackEl = feedbacks['3b_moleculas'];
                } else if (subpregunta === 'atomosPorMolecula') {
                    inputEl = inputAtomosPorMoleculaSimple;
                    esCorrecto = (parseInt(inputEl.value) === ejemploActualGlobal.numAtomosEnMoleculaUnica);
                    feedbackEl = feedbacks['3b_atomosPorMolecula'];
                } else if (subpregunta === 'atomosTotales') {
                    inputEl = inputAtomosTotalesSimples;
                    esCorrecto = (parseInt(inputEl.value) === coeficienteActual * ejemploActualGlobal.numAtomosEnMoleculaUnica);
                    feedbackEl = feedbacks['3b_atomosTotales'];
                }
                mostrarFeedback(feedbackEl, esCorrecto);
                deshabilitarBotonCorreccionInput(e.target); // Deshabilita el botón de corregir presionado
                // inputEl.disabled = true; // También deshabilitar el input asociado
                verificarFinDeEjemplo();
            };
        });

        // Pregunta 3c: Moléculas compuestas (botón de cantidad de moléculas)
        bloquesPregunta['3c'].querySelector('button[data-subpregunta="cantidadMoleculas"]').onclick = (e) => {
            const esCorrecto = (parseInt(inputCantidadMoleculasCompuestas.value) === coeficienteActual);
            mostrarFeedback(feedbacks['3c_moleculas'], esCorrecto);
            deshabilitarBotonCorreccionInput(e.target); // Deshabilita el botón de corregir presionado
            // inputCantidadMoleculasCompuestas.disabled = true; // También deshabilitar el input asociado
            verificarFinDeEjemplo();
        };
    }

    function generarPreguntasDinamicas3c() {
        containerAtomosPorMoleculaCompuesta.innerHTML = '<p class="pregunta-texto-interno">¿Cuántos átomos de cada tipo hay en <strong>UNA</strong> molécula?</p>';
        containerAtomosTotalesCompuestos.innerHTML = '<p class="pregunta-texto-interno">¿Cuántos átomos de cada tipo hay <strong>EN TOTAL</strong>?</p>';

        for (const elemento in ejemploActualGlobal.atomosPorMoleculaUnica) {
            // Para "átomos en UNA molécula"
            let divPreguntaUnica = document.createElement('div');
            divPreguntaUnica.className = 'sub-pregunta-dinamica'; // Clase para posible estilo
            divPreguntaUnica.innerHTML = `
                <label for="comp_unica_${elemento}">Átomos de ${elemento}:</label>
                <input type="number" id="comp_unica_${elemento}" min="1">
                <button data-elemento="${elemento}" data-tipo="unica">Corregir</button>
                <span class="feedback-icon" id="fb_comp_unica_${elemento}"></span>
            `;
            containerAtomosPorMoleculaCompuesta.appendChild(divPreguntaUnica);

            // Para "átomos EN TOTAL"
            let divPreguntaTotal = document.createElement('div');
            divPreguntaTotal.className = 'sub-pregunta-dinamica'; // Clase para posible estilo
            divPreguntaTotal.innerHTML = `
                <label for="comp_total_${elemento}">Átomos de ${elemento} (total):</label>
                <input type="number" id="comp_total_${elemento}" min="1">
                <button data-elemento="${elemento}" data-tipo="total">Corregir</button>
                <span class="feedback-icon" id="fb_comp_total_${elemento}"></span>
            `;
            containerAtomosTotalesCompuestos.appendChild(divPreguntaTotal);
        }

        // Añadir event listeners a los botones generados
        containerAtomosPorMoleculaCompuesta.querySelectorAll('button').forEach(btn => {
            btn.onclick = (e) => {
                const el = e.target.dataset.elemento;
                const inputUser = document.getElementById(`comp_unica_${el}`);
                const esCorrecto = (parseInt(inputUser.value) === ejemploActualGlobal.atomosPorMoleculaUnica[el]);
                mostrarFeedback(document.getElementById(`fb_comp_unica_${el}`), esCorrecto);
                deshabilitarBotonCorreccionInput(e.target); // Deshabilita el botón de corregir presionado
                // inputUser.disabled = true; // También deshabilitar el input asociado
                verificarFinDeEjemplo();
            };
        });
        containerAtomosTotalesCompuestos.querySelectorAll('button').forEach(btn => {
            btn.onclick = (e) => {
                const el = e.target.dataset.elemento;
                const inputUser = document.getElementById(`comp_total_${el}`);
                const esCorrecto = (parseInt(inputUser.value) === ejemploActualGlobal.atomosPorMoleculaUnica[el] * coeficienteActual);
                mostrarFeedback(document.getElementById(`fb_comp_total_${el}`), esCorrecto);
                deshabilitarBotonCorreccionInput(e.target); // Deshabilita el botón de corregir presionado
                // inputUser.disabled = true; // También deshabilitar el input asociado
                verificarFinDeEjemplo();
            };
        });
    }


    // --- INICIALIZACIÓN ---
    elSiguienteEjemploBtn.addEventListener('click', iniciarNuevoEjemplo);
    elReiniciarSesionBtn.addEventListener('click', prepararNuevaSesion);
    prepararNuevaSesion(); // Cargar la primera sesión al iniciar
});
