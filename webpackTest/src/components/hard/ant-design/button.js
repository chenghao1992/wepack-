/**
 * Created by chenghao01 on 2017/3/21.
 */
import React, {Component} from 'react';
import { Button } from 'antd';

export default class ButtonDemo extends Component{
    render(){
        return(
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>

        )

    }
}