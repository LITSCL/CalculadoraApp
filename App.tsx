import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { styles } from './src/themes/appTheme';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor={"black"} barStyle={'light-content'}/>
      <CalculadoraScreen></CalculadoraScreen>
    </SafeAreaView>
  );
}

export default App;
