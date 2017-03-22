/**
 * Created by chenghao01 on 2017/3/17.
 */
import React, {Component} from 'react';
import ButtonDemo from './ant-design/button';
import DatePickerDemo from './ant-design/datePicker';

export default class Hard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <ButtonDemo/>
                <br/><br/><br/>
                <DatePickerDemo/>
            </div>
        )
    }
}