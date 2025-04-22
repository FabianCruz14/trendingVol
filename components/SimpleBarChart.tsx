import React from 'react';
import { BarChart } from 'react-native-gifted-charts';

// iff need add more data to show, just add below 
type BarData = {value : number, label : string};

type BarProps = {
  //we define a prop that name is 'bar data', they type is BarData
  //just an array of BarData who have one property, its a value they type is number
  barData : BarData[];
  //then continue adding props who need to show in your stat
  frontColor: string;
  barWidth: number;
  barBorderRadius: number;
};

//we declare a Functional Component which take BarProps of type BarProps
export default function SimpleBarChart ({barData, frontColor, barWidth, barBorderRadius} : BarProps) {
  //we declare a barData, that is an array of BarData
  return (
    <BarChart
       frontColor={frontColor}
       barWidth={barWidth}
       data={barData}
       barBorderRadius={barBorderRadius}
    />
  );
};

