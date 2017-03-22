
import  React,{Component} from 'react';

export class BindTest1 extends Component{
    // constructor(props){
    //     super(props);
    // }


    handleClick(params,arg){
        console.log(params,arg);
    }
//通过bind方法绑定   可以传参
    render(){
        return <button onClick={this.handleClick.bind(this,'test')}>Test1</button>
    }
}

export class BindTest2 extends Component{
    handleClick(){
        console.log('22222')
        this.handleClick=this.handleClick.bind(this)
    }
    render(){
        return <button onClick={this.handleClick}>Test2</button>
    }
}

//箭头函数  内部自动绑定
export class Test3 extends Component{
   handleClick=(e)=>{
        console.log(e)

    }

    render(){
        return <button onClick={this.handleClick}>Test3</button>;
    }
}

//在react中使用原生事件
export class Test4 extends Component{
    handleClick=(e)=>{
        console.log(e)

    }
    componentDidMount(){
        this.refs.button.addEventListener('click',e=>{
            this.handleClick(e)
        })
    }
    componentWillUnMount(){
        this.refs.button.removeEventListener('click')
    }



    render(){
        return <button ref="button">Test44444</button>;
    }
}

