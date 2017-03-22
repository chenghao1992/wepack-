/**
 * Created by chenghao01 on 2017/3/17.
 */
import React,{Component} from 'react';
var myFetch = require('./../common/myFetch.js');
// import 'fetch';
require('es6-promise');
// require('fetch');
import jQuery from 'jquery';

export default class Fetch extends Component{
        Fetch(){

            fetch('./src/components/home/users.json',{
                method:'get'
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                console.log(data);
            }).catch(function(e) {
                console.log("Oops, error");
            });

            fetch('./src/components/home/users.json').then(response => response.json())
                .then(data => console.log(data))
                .catch(e => console.log("Oops, error", e))
            // function searchResult(json){
            //     alert(json);
            // }

            // jQuery.ajax({
            //     type:'get',
            //     url:"https://testwww.kaisafax.com/cms/platform",
            //     dataType:'jsonp',
            //     success:function (data) {
            //         console.log(data)
            //     }

                // data:{
                //     wd:'a',
                //     callback:searchResult
                // }
            // });

            // var config={
            //     url:'../home/users.json',
            //     // type:"get"
            //     data:{
            //         access_token: 'sfsddfdfsd233',
            //         doctorId: 11111,
            //         patientId: 22222
            //     }
            // };
            //
            // myFetch(config).then(function (data) {
            //     console.log(data)
            //
            // })


            // fetch('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su', { // url: fetch事实标准中可以通过Request相关api进行设置
            //     method: 'POST',
            //     mode: 'cors', // same-origin|no-cors（默认）|cors
            //     credentials: 'include', // omit（默认，不带cookie）|same-origin(同源带cookie)|include(总是带cookie)
            //     headers: { // headers: fetch事实标准中可以通过Header相关api进行设置
            //         'Content-Type': 'application/x-www-form-urlencoded' // default: 'application/json'
            //     },
            //     body: 'wd=b' // body: fetch事实标准中可以通过Body相关api进行设置
            // }).then(function(res){ res: fetch事实标准中可以通过Response相关api进行设置
            //     return res.json();
            // }).then(function(data){
            //     console.log(data);
            // }).catch(function(error){
            //
            // });


        }

        render(){
            return this.Fetch()||null
        }





}