const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');
const ULTIMO_NIVEL = 3;

class Juego {
    constructor() {
        this.inicializar = this.inicializar.bind(this);
        this.inicializar();
        this.generarSecuencia();
        setTimeout(this.siguienteNivel, 500);
    }

    inicializar() {
        this.siguienteNivel = this.siguienteNivel.bind(this);
        this.elegirColor = this.elegirColor.bind(this);
        this.toggleBtnEmpezar();
        this.nivel = 1;
        this.puntaje = 0;
        this.tiempo = 0;
        this.temporizador = setInterval(() => {
            this.tiempo++;
        }, 1000);
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        };
    }
    toggleBtnEmpezar() {
        if (btnEmpezar.classList.contains('hide')) {
            btnEmpezar.classList.remove('hide');
        } else {
            btnEmpezar.classList.add('hide');
        }
    }
    generarSecuencia() {
        // el map no va a funcionar cuando los elementos no estan definidos
        // dentro de un array por eso se inicializa con '0'
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4));
        // Math.random() devuelve un valor entre 0 y 1 y al multiplicarlo por 4 
        // va a dar un valor entre 0 y 4 pero nunca va a llegar a ser 4, y Math.floor()
        // nos va a devolver la parte entera de ese resultado
    }
    siguienteNivel() {
        this.subnivel = 0;
        this.iluminarSecuencia();
        this.agregarEventosClick();
    }
    transformarNumeroAColor(numero) {
        switch (numero) {
            case 0:
                return 'celeste';
            case 1:
                return 'violeta';
            case 2:
                return 'naranja';
            case 3:
                return 'verde';
        }
    }
    transformarColorANumero(color) {
        switch (color) {
            case 'celeste':
                return 0;
            case 'violeta':
                return 1;
            case 'naranja':
                return 2;
            case 'verde':
                return 3;
        }
    }
    iluminarSecuencia() {
        for (let i = 0; i < this.nivel; i++) {
            // utilizamos 'let' y no 'var' porque queremos mantener el color para cada ciclo
            // si utilizamos 'var' siempre va a quedarse con el último valor y no va a actualizarse
            // entonces en el timeout va a llegar siempre el mismo color
            // let color = this.transformarNumeroAColor(this.secuencia[i]);
            // y mejor aún es utilizar 'const' si la variable no vuelve a ser reasignada o modificada
            const color = this.transformarNumeroAColor(this.secuencia[i]);
            setTimeout(() => this.iluminarColor(color), 1000 * i);
        }
    }
    iluminarColor(color) {
        this.colores[color].classList.add('light');
        setTimeout(() => this.apagarColor(color), 350)
    }
    apagarColor(color) {
        this.colores[color].classList.remove('light');
    }
    agregarEventosClick() {
        // El 'this' pasado por el bind en este scope es el objeto/clase 'Juego'
        // esto se hace para no perder la referencia de la clase, porque dentro
        // de la función 'elegirColor' el 'this' default es el elemento html.
        // En la función 'inicializar' se realiza el bind a del 'this' clase 'Juego'
        // a la función 'elegirColor' para no realizarlo en cada línea restante de esta función.
        // this.colores.celeste.addEventListener('click', this.elegirColor.bind(this));
        this.colores.celeste.addEventListener('click', this.elegirColor);
        this.colores.verde.addEventListener('click', this.elegirColor);
        this.colores.violeta.addEventListener('click', this.elegirColor);
        this.colores.naranja.addEventListener('click', this.elegirColor);
    }
    eliminarEventosClick() {
        this.colores.celeste.removeEventListener('click', this.elegirColor);
        this.colores.verde.removeEventListener('click', this.elegirColor);
        this.colores.violeta.removeEventListener('click', this.elegirColor);
        this.colores.naranja.removeEventListener('click', this.elegirColor);
    }
    elegirColor(ev) {
        const nombreColor = ev.target.dataset.color;
        const numeroColor = this.transformarColorANumero(nombreColor);
        this.iluminarColor(nombreColor);
        if (numeroColor === this.secuencia[this.subnivel]) {
            this.subnivel++;
            this.puntaje += 1;
            if (this.subnivel === this.nivel) {
                this.nivel++;
                this.eliminarEventosClick();
                if (this.nivel === (ULTIMO_NIVEL + 1)) {
                    clearInterval(this.temporizador);
                    this.ganoElJuego();
                } else {
                    setTimeout(this.siguienteNivel, 1500);
                }
            }
        } else {
            clearInterval(this.temporizador);
            this.perdioElJuego();
        }
    }
    ganoElJuego() {
        swal('Simon Dice', `Felicitaciones, ganaste el juego!\nPuntaje: ${this.puntaje}\nTiempo: ${this.tiempo} segundos`, 'success')
            .then(this.inicializar);
    }
    perdioElJuego() {
        swal('Simon Dice', `Lo lamentamos, perdiste :(\nPuntaje: ${this.puntaje}\nTiempo: ${this.tiempo} segundos`, 'error')
            .then(() => {
                this.eliminarEventosClick();
                this.inicializar();
            });
    }
}

function empezarJuego() {
    window.juego = new Juego();
}