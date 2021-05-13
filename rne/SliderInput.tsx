import React, { useState } from 'react'
import { Input, Slider, SliderProps, Text } from 'react-native-elements'

interface SliderInputProps {
}

export const SliderInput: React.FC<SliderInputProps & SliderProps> = (props) => {
  const minValue: number = props.minimumValue ?? Number.MIN_VALUE;
  const maxValue: number = props.maximumValue ?? Number.MAX_VALUE;

  function onValueChange(val: number) {
    console.log('onValueChange')
    setSValue(val)
    console.log('setValue')
  }

  const [sValue, setSValue] = useState<number>(0)

  return (
    <>
      <Slider
        step={props.step}
        value={sValue}
        minimumValue={minValue}
        maximumValue={maxValue}
        onValueChange={(val) => {onValueChange(val)}}
      />
      <Input keyboardType='numeric' value={`${sValue}`} 
             onChangeText={
               (val:string) => {
                  let iVal = Number.parseInt(val);
                  let vVal = Number.isNaN(iVal) ? 0 : iVal;
                  setSValue(vVal);
                }
              }/>
      <Text>{sValue}</Text>
    </>
  );
}