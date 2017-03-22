/**
 * Created by chenghao01 on 2017/3/14.
 */
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import './../css/index.css';
import './../less/index.less';
import './../css/antd.min.css';

import Home from  './../components/home/home.js'
import Hard from  './../components/hard/hard.js'
import Redux from  './../components/redux/redux.js'
import Me from './../components/home/me';


ReactDom.render((
    <Router history={hashHistory}>
        <Route path='/' component={Home}/>
            <Route path="/me" component={Me}/>
        <Route path='/hard' component={Hard}/>
        <Route path='/redux' component={Redux}/>
    </Router>

),document.getElementById('app'));
