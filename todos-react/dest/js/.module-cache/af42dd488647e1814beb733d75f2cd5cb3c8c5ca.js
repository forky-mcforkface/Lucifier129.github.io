define(["require","exports","module","react","./todos"],function(e,t,n){var r=e("react"),i=e("./todos"),s=r.createClass({displayName:"Main",handleChange:function(e){var t=e.target.checked,n=this.props.todos;for(var r=n.length-1;r>=0;r--)n[r].completed=t;this.props.updateTodos(n),console.log(n)},render:function(){var e;return this.props.isAllCompleted?e=r.createElement("input",{id:"toggle-all",type:"checkbox",checked:!0,onChange:this.handleChange}):e=r.createElement("input",{id:"toggle-all",type:"checkbox",onChange:this.handleChange}),r.createElement("div",null,e,r.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),r.createElement(i,{todos:this.props.todos,updateTodo:this.props.updateTodo,removeTodo:this.props.removeTodo}))}});n.exports=s});