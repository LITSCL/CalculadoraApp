import { StyleSheet } from 'react-native';

export const styles: any = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: "black",
  },
  contenedorCalculadora: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "flex-end"
  },
  resultadoGrande: {
    color: "white",
    fontSize: 60,
    textAlign: "right",
    marginBottom: 10
  },
  resultadoChico: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 30,
    textAlign: "right"
  },
  filaBotones: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
  },
  boton: {
    height: 80,
    width: 80,
    backgroundColor: "green",
    justifyContent: "center",
    marginHorizontal: 10,
    borderRadius: 999
  },
  botonTexto: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    color: "green",
    fontWeight: "500"
  }
});