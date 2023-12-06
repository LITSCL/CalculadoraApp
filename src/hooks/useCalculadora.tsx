import { useRef, useState } from 'react';

enum Operadores {
  sumar, restar, multiplicar, dividir
}

interface Return {
  numeroAnteriorState: string,
  numeroActualState: string,
  ultimaOperacion: React.MutableRefObject<Operadores | undefined>,
  limpiar: () => void,
  armarNumero: (numeroTexto: string) => void,
  positivoNegativo: () => void,
  borrar: () => void,
  sumar: () => void,
  restar: () => void,
  multiplicar: () => void,
  dividir: () => void,
  calcular: () => void
}

export const useCalculadora: () => Return = () => {
  var [numeroAnteriorState, setNumeroAnteriorState] = useState<string>("0");
  var [numeroActualState, setNumeroActualState] = useState<string>("0");

  var ultimaOperacion: React.MutableRefObject<Operadores | undefined> = useRef<Operadores>();

  const limpiar: () => void = () => {
    setNumeroActualState("0");
    setNumeroAnteriorState("0");
  }

  const armarNumero: (numeroTexto: string) => void = (numeroTexto: string) => {
    //1. Validar que no se puedan colocar 2 puntos.
    if (numeroActualState.includes(".") && numeroTexto == ".") return;
    //2. Verificar si el numero empieza por "0" o "-0".
    if (numeroActualState.startsWith("0") || numeroActualState.startsWith("-0")) {
      if (numeroTexto == ".") {
        setNumeroActualState(numeroActualState + numeroTexto);
      }
      //3. Verificar si viene un "0" después del punto.
      else if (numeroTexto == "0" && numeroActualState.includes(".")) {
        setNumeroActualState(numeroActualState + numeroTexto);
      }
      //4. Verificar si el primer numero de la cadena no va a ser un "0".
      else if (numeroTexto != "0" && !numeroActualState.includes(".")) {
        setNumeroActualState(numeroTexto);
      }
      //5. Evitar el "0000.0".
      else if (numeroTexto == "0" && !numeroActualState.includes(".")) {
        setNumeroActualState(numeroActualState);
      }
      //6. Agregar el numero en caso de superar todas las validaciones de puntos y ceros.
      else {
        setNumeroActualState(numeroActualState + numeroTexto);
      }
    }
    else {
      //8. Si el numero no empieza por 0, simplemente agregarlo.
      setNumeroActualState(numeroActualState + numeroTexto);
    }
  }

  const positivoNegativo: () => void = () => {
    if (numeroActualState.includes("-")) {
      setNumeroActualState(numeroActualState.replace("-", ""));
    }
    else {
      setNumeroActualState("-" + numeroActualState);
    }
  }

  const borrar: () => void = () => {
    if (numeroActualState.length > 2) {
      setNumeroActualState(numeroActualState.slice(0, -1));
    }
    else if (numeroActualState.length == 2 && numeroActualState.includes("-")) {
      setNumeroActualState("0");
    }
    else if (numeroActualState.length == 2 ) {
      setNumeroActualState(numeroActualState.slice(0, -1));
    }
    else {
      setNumeroActualState("0");
    }
  }

  const traspasarNumero: () => void = () => {
    if (numeroActualState.endsWith(".")) {
      setNumeroAnteriorState(numeroActualState.slice(0, -1));
    }
    else {
      setNumeroAnteriorState(numeroActualState);
    }
    setNumeroActualState("0");
  }

  const sumar: () => void = () => {
    traspasarNumero();
    ultimaOperacion.current = Operadores.sumar;
  }

  const restar: () => void = () => {
    traspasarNumero();
    ultimaOperacion.current = Operadores.restar;
  }

  const multiplicar: () => void = () => {
    traspasarNumero();
    ultimaOperacion.current = Operadores.multiplicar;
  }

  const dividir: () => void = () => {
    traspasarNumero();
    ultimaOperacion.current = Operadores.dividir;
  }

  const calcular: () => void = () => {
    var numero1: number = Number(numeroActualState);
    var numero2: number = Number(numeroAnteriorState);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumeroActualState(`${numero1 + numero2}`);
        break;
      case Operadores.restar:
        if (numero2 != 0) {
          setNumeroActualState(`${numero2 - numero1}`);
        }
          break;
      case Operadores.multiplicar:
        if (numero2 != 0) {
          setNumeroActualState(`${numero1 * numero2}`);
        }
        break;
      case Operadores.dividir:
        if (numero2 != 0) {
          setNumeroActualState(`${numero2 / numero1}`);
        }
        break;
      default:
        break;
    }
    setNumeroAnteriorState("0");
  }

  return {
    numeroAnteriorState,
    numeroActualState,
    ultimaOperacion,
    limpiar,
    armarNumero,
    positivoNegativo,
    borrar,
    sumar,
    restar,
    multiplicar,
    dividir,
    calcular
  };
}