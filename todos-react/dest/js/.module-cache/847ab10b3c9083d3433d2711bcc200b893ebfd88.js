define(["require","exports","module","react"],function(e,t,n){var r=e("react"),i=13,s=27,o=r.createClass({displayName:"Todo",getInitialState:function(){return{title:this.props.title,time:this.props.time,completed:this.props.completed,onEdit:!1}},componentWillReceiveProps:function(e){this.setState(e)},getClassName:function(){var e=["view"];return this.state.completed&&e.push("completed"),this.state.onEdit&&e.push("edit"),e.join(" ")},handleBlur:function(e){var t=e.target.value.trim(),n={onEdit:!1};t&&t!==this.state.title&&(n.title=t,n.time=(new Date).toLocaleString(),this.updateTodo({title:t,time:time}))},handleKeyup:function(e){var t=e.keyCode;(t===i||t===s)&&this.handleBlur(e)},handleDblclick:function(){var e=this.refs.editor.getDOMNode();e.value=this.state.title,e.focus(),this.setState({onEdit:!0})},removeTodo:function(){this.props.removeTodo(this.props.id)},toggleTodo:function(e){var t={completed:e.target.checked};this.updateTodo(t)},updateTodo:function(e){this.props.updateTodo({id:this.props.id,title:e.title||this.state.title,time:e.time||this.state.time,completed:e.completed!==undefined?e.completed:this.state.completed})},render:function(){var e;return this.state.completed?e=r.createElement("input",{className:"toggle",type:"checkbox",onChange:this.toggleTodo,checked:!0}):e=r.createElement("input",{className:"toggle",type:"checkbox",onChange:this.toggleTodo}),r.createElement("li",{className:this.getClassName()},r.createElement("div",null,e,r.createElement("label",{onDoubleClick:this.handleDblclick},this.state.title),r.createElement("button",{className:"destroy",onClick:this.removeTodo})),r.createElement("input",{className:"edit",onBlur:this.handleBlur,onKeyup:this.handleKeyup,ref:"editor"}))}});n.exports=o});