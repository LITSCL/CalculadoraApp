import React from 'react';
import { Text, View } from 'react-native';
import { BotonCalculadora } from '../components/BotonCalculadora';
import { styles } from '../themes/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen: () => JSX.Element = () => {

  var {
    numeroAnteriorState,
    numeroActualState,
    armarNumero,
    limpiar,
    positivoNegativo,
    borrar,
    sumar,
    restar,
    multiplicar,
    dividir,
    calcular
  } = useCalculadora();
  
  return (
    <View style={styles.contenedorCalculadora}>
      {
        numeroAnteriorState != "0" && (
          <Text style={styles.resultadoChico}>{numeroAnteriorState}</Text>
        )
      }
      <Text style={styles.resultadoGrande} numberOfLines={1} adjustsFontSizeToFit={true}>{numeroActualState}</Text>

      {/*Fila de botones.*/}
      <View style={styles.filaBotones}>
        <BotonCalculadora texto="C" color="#9B9B9B" accion={limpiar}></BotonCalculadora>
        <BotonCalculadora texto="+/-" color="#9B9B9B" accion={positivoNegativo}></BotonCalculadora>
        <BotonCalculadora texto="del" color="#9B9B9B" accion={borrar}></BotonCalculadora>
        <BotonCalculadora texto="/" color="#FF9427" accion={dividir}></BotonCalculadora>
      </View>

      {/*Fila de botones.*/}
      <View style={styles.filaBotones}>
        <BotonCalculadora texto="7" accion={armarNumero}></BotonCalculadora>
        <BotonCalculadora texto="8" accion={armarNumero}></BotonCalculadora>
        <BotonCalculadora texto="9" accion={armarNumero}></BotonCalculadora>
        <BotonCalculadora texto="X" color="#FF9427" accion={multiplicar}></BotonCalculadora>
      </View>

      {/*Fila de botones.*/}
      <View style={styles.filaBotones}>
        <BotonCalculadora texto="4" accion={armarNumero}></BotonCalculadora>
        <BotonCalculadora texto="5" accion={armarNumero}></BotonCalculadora>
        <BotonCalculadora texto="6" accion={armarNumero}></BotonCalculadora>
        <BotonCalculadora texto="-" color="#FF9427" accion={restar}></BotonCalculadora>
      </View>

      {/*Fila de botones.*/}
      <View style={styles.filaBotones}>
        <BotonCalculadora texto="1" accion={armarNumero}></BotonCalculadora>
        <BotonCalculadora texto="2" accion={armarNumero}></BotonCalculadora>
        <BotonCalculadora texto="3" accion={armarNumero}></BotonCalculadora>
        <BotonCalculadora texto="+" color="#FF9427" accion={sumar}></BotonCalculadora>
      </View>

      {/*Fila de botones.*/}
      <View style={styles.filaBotones}>
        <BotonCalculadora texto="0" ancho={true} accion={armarNumero}></BotonCalculadora>
        <BotonCalculadora texto="." accion={armarNumero}></BotonCalculadora>
        <BotonCalculadora texto="=" accion={calcular}></BotonCalculadora>
      </View>
    </View>
  );
}
