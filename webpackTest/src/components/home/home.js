/**
 * Created by chenghao01 on 2017/3/17.
 */
import React, {Component} from 'react';
import { Router, Route, hashHistory,Link } from 'react-router';
import {BindTest1,BindTest2,Test3,Test4} from './bind/bind.js'
import Test from './props/props.js';
import Fetch from './fetch.js';
import Welcome from './function-return';
import Demo from './map';

const element = <Welcome name="Sara" />;

export default class  Home extends Component{
    render(){
        return(
            <div>
                <img className="logo" src="./src/img/logo.png" alt=""/>
                <h3>react结合es6学习</h3>
                <hr/>
                <Test name="属性传值">props</Test>
                <p><Link to="me">二级跳转</Link></p>
                <Test4>使用原生事件</Test4>
                <Fetch/>
                {element}
                <Welcome name="ch"/>
                <Demo/>
                <div className="tab">
                    <p><Link to="/">home</Link></p>
                    <p><Link to="hard">hard</Link></p>
                    <p><Link to="redux">redux</Link></p>
                </div>
            </div>

        )

    }
}
