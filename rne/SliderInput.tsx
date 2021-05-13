import React, { useEffect, useState } from 'react'
import { Input, Slider, SliderProps, Text } from 'react-native-elements'

interface SliderInputProps {
}

export const SliderInput: React.FC<SliderInputProps & SliderProps> = (props) => {
  const minValue: number = props.minimumValue ?? Number.MIN_VALUE;
  const maxValue: number = props.maximumValue ?? Number.MAX_VALUE;

  function onValueChange(val: number) {
    setValue(val)
    if (props.onValueChange !== undefined) {
      props.onValueChange(val)
    }
  }

  const [value, setValue] = useState<number>(props.value ?? 0)

  useEffect(() => {
    setValue(props.value ?? 0)
  }, [props.value])
  
  return (
    <>
      <Slider
        step={props.step}
        value={value}
        minimumValue={minValue}
        maximumValue={maxValue}
        onValueChange={(val) => {onValueChange(val)}}
      />
      <Input keyboardType='numeric' value={`${value}`} 
             onChangeText={
               (val:string) => {
                  let iVal = Number.parseInt(val);
                  let vVal = Number.isNaN(iVal) ? 0 : iVal;
                  onValueChange(vVal);
                }
      }/>
    </>
  );
}