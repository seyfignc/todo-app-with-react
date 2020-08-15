import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        const listItems = this.props.items;
        const TodoLine={
            backgroundColor:"blue",
            color:"yellow",
            width:"300px",
            margin:"0 auto",
            display:"flex"
        }
        return (
            <div>
                {
                    listItems.map(item => {
                        return (
                            <div key={item.id} style={TodoLine}>
                                <div style={item.IsCompleted?{textDecoration:"line-through"}:{textDecoration:"none"}}>{item.value}</div>
                                <div><button onClick={()=>this.props.itemDeleted(item)}>Sil</button></div>
                                <div><button onClick={()=>this.props.itemCompleted(item)}>Tamamla</button></div>
                            </div>

                        )
                    })
                }
            </div>
        );
    }
}

export default TodoList;