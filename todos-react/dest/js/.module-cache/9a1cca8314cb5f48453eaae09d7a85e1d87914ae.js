var React=require("react"),Filters=React.createClass({displayName:"Filters",getClassName:function(e){return this.props.hash===e?"selected":""},getTodoCount:function(){var e=this.props.todoCount;return e>0?e+" item left":""},getCompletedCount:function(){var e=this.props.completedCount;return e>0?"Clear completed ("+e+")":""},clearCompleted:function(){this.props.clearCompleted()},render:function(){return React.createElement("div",null,React.createElement("span",{id:"todo-count"},this.getTodoCount()),React.createElement("ul",{id:"filters"},React.createElement("li",null,React.createElement("a",{href:"#/",className:this.getClassName("/")},"All")),React.createElement("li",null,React.createElement("a",{href:"#/active",className:this.getClassName("/active")},"Active")),React.createElement("li",null,React.createElement("a",{href:"#/completed",className:this.getClassName("/completed")},"Completed"))),React.createElement("button",{id:"clear-completed",onClick:this.clearCompleted},this.getCompletedCount()))}});module.exports=Filters;