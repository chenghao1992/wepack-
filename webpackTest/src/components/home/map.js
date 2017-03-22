import React, {Component} from 'react';
class Demo extends Component{

    render(){
        let items = [{id:1, name:'foo'}, {id:2, name:'bar'}];

        return (
            <div>
                {
                    items.map(item=>{
                        return <div className="item" key={item.id}>{item.name}</div>
                    })
                }


            </div>
        )
    }
}

export default Demo