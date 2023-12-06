import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../themes/appTheme';

interface Props {
  texto: string,
  color?: string,
  ancho?: boolean,
  accion: (numeroTexto: string) => void
}

export const BotonCalculadora: (props: Props) => JSX.Element = (props: Props) => {
  var texto: string = props.texto;
  var color: string | undefined = !props.color ? ("#2D2D2D") : (props.color);
  var ancho: boolean | undefined = !props.ancho ? (false) : (props.ancho);
  var accion: (numeroTexto: string) => void = props.accion
  
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View style={{
        ...styles.boton,
        backgroundColor: color,
        width: ancho ? (180) : (80)
      }}>
        <Text style={{
          ...styles.botonTexto,
          color: color == "#9B9B9B" ? ("black") : ("white")
        }}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
}
