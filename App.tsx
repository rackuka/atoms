import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SliderInput } from './rne/SliderInput';
import { ButtonGroup, Input, Slider } from 'react-native-elements';

export default function App() {
  const [sliderInputVal, setSliderInputVal] = useState(1)

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <Slider
            value={sliderInputVal} 
            step={10000} 
            minimumValue={50000} 
            maximumValue={150000} 
            thumbStyle={{width: 10, height: 10}}
            onValueChange={(val) => {setSliderInputVal(val)}} 
        />
        <SliderInput 
            value={sliderInputVal} 
            step={10000} 
            minimumValue={50000} 
            maximumValue={150000} 
            thumbTintColor={'green'}
            thumbSize={15}
            // thumbStyle={{width: 10, height: 10}}
            onValueChange={(val) => {setSliderInputVal(val)}} 
            style={{
              borderColor: 'green',
              paddingLeft: '20'
            }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
