import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native';
import { Input, Slider, SliderProps, Text } from 'react-native-elements'

interface SliderInputProps {
  thumbSize?: number
}

export const SliderInput: React.FC<SliderInputProps & SliderProps> = (props) => {
  const minValue: number = props.minimumValue ?? 0;
  const maxValue: number = props.maximumValue ?? 1;

  function onValueChange(val: number) {
    if (props.onValueChange !== undefined) {
      props.onValueChange(val)
    }
  }

  const [value, setValue] = useState<number>(props.value === undefined ? minValue : props.value < minValue ? minValue : props.value > maxValue ? maxValue : props.value)
  const [sValue, setSValue] = useState<string>(`${value}`)

  useEffect(() => {
    setValue(props.value ?? minValue)
    setSValue(`${props.value ?? minValue}`)
  }, [props.value])

  useEffect(() => {
    let timer = setTimeout(() => {
      let iVal = Number.parseInt(sValue);
      if (Number.isNaN(iVal) || iVal < minValue || iVal > maxValue) {
        setSValue(`${value}`)
      }
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [sValue])

  return (
    <View style={styles.container}>
      <Slider
        step={props.step}
        style={styles.slider || props.style || props.containerStyle}
        thumbStyle={props.thumbStyle || { ...props.thumbSize && { width: props.thumbSize, height: props.thumbSize}}}
        thumbTintColor={props.thumbTintColor}
        value={value}
        minimumValue={minValue}
        maximumValue={maxValue}
        onValueChange={(val) => {
          setValue(val)
          setSValue(`${val}`)
          onValueChange(val)
        }}
      />
      <Input keyboardType='numeric' value={sValue} 
             containerStyle={styles.input}
             inputStyle={{}}
             textAlign={'center'}
             inputContainerStyle={{borderWidth: 1}}
             onChangeText={
               (val:string) => {
                  let iVal = Number.parseInt(val);
                  if (Number.isNaN(iVal)) {
                    setSValue(val === '' ? val : sValue)
                  }
                  else {
                    setSValue(val);
                    let vVal = iVal < minValue ? minValue : iVal > maxValue ? maxValue : iVal;
                    setValue(vVal);
                    onValueChange(vVal)
                  }
                }
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  slider: {
    flex: 6,
  },
  input: {
    flex: 2,
    height: 40
  },
});
