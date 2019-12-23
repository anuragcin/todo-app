(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},24:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(11),s=a.n(i),l=(a(24),a(2)),c=a(3),r=a(5),d=a(4),u=a(6),h=a(10),m=a(18),p=a(1),b=a(8),g=a(17),v=a.n(g),f=(a(28),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={task:""},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.createTodo(Object(h.a)({},this.state,{id:v()(),completed:!1})),this.setState({task:""})}},{key:"render",value:function(){return o.a.createElement("form",{className:"NewTodoForm",onSubmit:this.handleSubmit},o.a.createElement("label",{htmlFor:"task"},"New Todo"),o.a.createElement("input",{type:"text",placeholder:"New Todo",id:"task",name:"task",value:this.state.task,onChange:this.handleChange}),o.a.createElement("button",null,"Add Todo"))}}]),t}(n.Component)),k=(a(30),a(7)),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={isEditing:!1,task:a.props.task},a.handleRemove=a.handleRemove.bind(Object(p.a)(a)),a.toggleForm=a.toggleForm.bind(Object(p.a)(a)),a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handleUpdate=a.handleUpdate.bind(Object(p.a)(a)),a.handleToggle=a.handleToggle.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleRemove",value:function(){this.props.removeTodo(this.props.id)}},{key:"toggleForm",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleUpdate",value:function(e){e.preventDefault(),this.props.updateTodo(this.props.id,this.state.task),this.setState({isEditing:!1})}},{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleToggle",value:function(e){this.props.toggleTodo(this.props.id)}},{key:"render",value:function(){var e;return e=this.state.isEditing?o.a.createElement(k.CSSTransition,{key:"editing",timeout:500,classNames:"form"},o.a.createElement("form",{className:"Todo-edit-form",onSubmit:this.handleUpdate},o.a.createElement("input",{type:"text",value:this.state.task,name:"task",onChange:this.handleChange}),o.a.createElement("button",null,"Save"))):o.a.createElement(k.CSSTransition,{key:"normal",timeout:500,classNames:"task-text"},o.a.createElement("li",{className:"Todo-task",onClick:this.handleToggle},this.props.task)),o.a.createElement(k.TransitionGroup,{className:this.props.completed?"Todo completed":"Todo"},e,o.a.createElement("div",{className:"Todo-buttons"},o.a.createElement("button",{onClick:this.toggleForm},o.a.createElement("i",{class:"fas fa-pen"})),o.a.createElement("button",{onClick:this.handleRemove},o.a.createElement("i",{class:"fas fa-trash"}))))}}]),t}(n.Component),O=(a(41),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={todos:[]},a.create=a.create.bind(Object(p.a)(a)),a.remove=a.remove.bind(Object(p.a)(a)),a.update=a.update.bind(Object(p.a)(a)),a.toggleCompletion=a.toggleCompletion.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"create",value:function(e){this.setState({todos:[].concat(Object(m.a)(this.state.todos),[e])})}},{key:"remove",value:function(e){this.setState({todos:this.state.todos.filter(function(t){return t.id!==e})})}},{key:"update",value:function(e,t){var a=this.state.todos.map(function(a){return a.id===e?Object(h.a)({},a,{task:t}):a});this.setState({todos:a})}},{key:"toggleCompletion",value:function(e){var t=this.state.todos.map(function(t){return t.id===e?Object(h.a)({},t,{completed:!t.completed}):t});this.setState({todos:t})}},{key:"render",value:function(){var e=this,t=this.state.todos.map(function(t){return o.a.createElement(k.CSSTransition,{key:t.id,timeout:500,classNames:"todo"},o.a.createElement(j,{key:t.id,id:t.id,task:t.task,completed:t.completed,removeTodo:e.remove,updateTodo:e.update,toggleTodo:e.toggleCompletion}))});return o.a.createElement("div",{className:"TodoList"},o.a.createElement("h1",null,"Get To Work! ",o.a.createElement("span",null,"An Animated Todo List Made With React Hooks.")),o.a.createElement(f,{createTodo:this.create}),o.a.createElement("ul",null,o.a.createElement(k.TransitionGroup,{className:"todo-list"},t)))}}]),t}(n.Component)),E=(a(43),function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(O,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.f6b7d38e.chunk.js.map