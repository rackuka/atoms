import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SliderInput } from './rne/SliderInput';
import { Input, Slider } from 'react-native-elements';

export default function App() {
  const [sliderInputVal, setSliderInputVal] = useState(0)


  return (
    <SafeAreaView>
      <View>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <Slider 
            value={sliderInputVal} 
            step={1} 
            minimumValue={1} 
            maximumValue={40} 
            onValueChange={(val) => {setSliderInputVal(val)}}
            style={{
              borderColor: 'black'
            }}
        />
        <SliderInput 
            value={sliderInputVal} 
            step={1} 
            minimumValue={1} 
            maximumValue={40} 
            onValueChange={(val) => {setSliderInputVal(val)}} 
            style={{
              borderColor: 'green'
            }}
        />
        <Slider 
            value={sliderInputVal} 
            step={1} 
            minimumValue={1} 
            maximumValue={40} 
            onValueChange={(val) => {setSliderInputVal(val)}}
            style={{
              borderColor: 'black'
            }}
        />
        <Input keyboardType='numeric' value={`${sliderInputVal}`} 
              onChangeText={
                (val:string) => {
                    let iVal = Number.parseInt(val);
                    let vVal = Number.isNaN(iVal) ? 0 : iVal;
                    setSliderInputVal(vVal);
                  }
        }/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
