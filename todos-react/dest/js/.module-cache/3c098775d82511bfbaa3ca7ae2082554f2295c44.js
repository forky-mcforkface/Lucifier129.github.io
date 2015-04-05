define(["require","exports","module","react"],function(e,t,n){var r=e("react"),i=13,s=27,o=r.createClass({displayName:"Todo",getInitialState:function(){return{onEdit:!1}},componentWillReceiveProps:function(e){this.setState(e);debugger},getClassName:function(){var e=[];return this.props.completed&&e.push("completed"),this.state.onEdit&&e.push("editing"),e.join(" ")},handleBlur:function(e){var t=e.target.value.trim();this.setState({onEdit:!1}),t&&t!==this.props.title&&this.updateTodo({title:t,time:(new Date).toLocaleString()})},handleKeyup:function(e){var t=e.keyCode;(t===i||t===s)&&this.handleBlur(e)},handleDblclick:function(){var e=this.refs.editor.getDOMNode();e.value=this.props.title,e.focus(),this.setState({onEdit:!0})},removeTodo:function(){this.props.removeTodo(this.props.id)},toggleTodo:function(e){var t={completed:e.target.checked};this.updateTodo(t)},updateTodo:function(e){this.props.updateTodo({id:this.props.id,title:e.title||this.props.title,time:e.time||this.props.time,completed:e.completed!==undefined?e.completed:this.props.completed})},render:function(){var e;return this.props.completed?e=r.createElement("input",{className:"toggle",type:"checkbox",onChange:this.toggleTodo,checked:!0}):e=r.createElement("input",{className:"toggle",type:"checkbox",onChange:this.toggleTodo}),r.createElement("li",{className:this.getClassName()},r.createElement("div",{className:"view"},e,r.createElement("label",{onDoubleClick:this.handleDblclick},this.props.title),r.createElement("button",{className:"destroy",onClick:this.removeTodo})),r.createElement("input",{className:"edit",onBlur:this.handleBlur,onKeyUp:this.handleKeyup,ref:"editor"}))}});n.exports=o});