/**
 * Created by chenghao01 on 2017/3/22.
 */
import React, {Component} from 'react';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
}

export default class DatePickerDemo extends Component{
    render(){
        return(
            <div>
                <DatePicker onChange={onChange} />
                <br />
                <MonthPicker onChange={onChange} placeholder="Select month" />
                <br />
                <RangePicker onChange={onChange} />
            </div>
        )
    }
}