(this["webpackJsonppotato-demo-test"]=this["webpackJsonppotato-demo-test"]||[]).push([[0],{154:function(e,t,a){e.exports=a(263)},159:function(e,t,a){},161:function(e,t,a){},233:function(e,t,a){},235:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){},250:function(e,t,a){},252:function(e,t,a){},253:function(e,t,a){},254:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),c=a.n(r),s=a(14),i=a(15),u=a(18),l=a(16),d=a(19),p=(a(159),a(275)),m=a(13),f=a.n(m),h=a(28),b=a(75),v=a(269),y=a(9),T=a(151),O=a(39),E=(a(161),a(140)),g=a.n(E),j=a(33),k="";k="/potato-demo-test";var w=Object(j.a)({basename:k}),C=0,N=g.a.create({baseURL:"https://gp-server.hunger-valley.com/",headers:{"t-app-id":"7wfWsfscoq44dWM2dCcQmdV8","t-app-secret":"x8jE2TC8GmbbZ7Hwb8W6vNGw"}});N.interceptors.request.use((function(e){var t=localStorage.getItem("x-token");return t&&(e.headers.Authorization="Bears ".concat(t)),e}),(function(e){return Promise.reject(e)})),N.interceptors.response.use((function(e){return e.headers["x-token"]&&(localStorage.setItem("x-token",e.headers["x-token"]),localStorage.setItem("count",C.toString()),C?C+=1:C=1),localStorage.getItem("timer")||localStorage.setItem("timer","25"),e}),(function(e){return void 0!==e.response&&401!==e.response.status||"/"===w.location.pathname&&w.push("/login"),Promise.reject(e)}));var D,x=N,I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).onChange=function(e,t){var n={};n[e]=t,a.setState(n)},a.submit=Object(h.a)(f.a.mark((function e(){var t,n,o,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.account,o=t.password,r=t.passwordConformation,e.prev=1,e.next=4,x.post("sign_up/user",{account:n,password:o,password_confirmation:r});case 4:c=e.sent,a.props.history.push("/"),console.log(c),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),a.state={account:"",password:"",passwordConformation:""},console.log(a.props),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.account,n=t.password,r=t.passwordConformation;return o.a.createElement("div",{className:"SignUp"},o.a.createElement("h1",null,"\u756a\u8304\u571f\u8c46\u95f9\u949f\u6ce8\u518c"),o.a.createElement(v.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",value:a,prefix:o.a.createElement(y.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),suffix:o.a.createElement(T.a,{title:"Extra information"},o.a.createElement(y.a,{type:"info-circle",style:{color:"rgba(0,0,0,.45)"}})),allowClear:!0,onChange:function(t){return e.onChange("account",t.target.value)}}),o.a.createElement(v.a.Password,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",value:n,onChange:function(t){return e.onChange("password",t.target.value)}}),o.a.createElement(v.a.Password,{placeholder:"\u8bf7\u786e\u8ba4\u5bc6\u7801",value:r,onChange:function(t){return e.onChange("passwordConformation",t.target.value)}}),o.a.createElement(O.a,{className:"SignUpButton",type:"primary",block:!0,onClick:this.submit.bind(this)},"\u6ce8\u518c"),o.a.createElement("p",null,"\u5982\u679c\u4f60\u6709\u8d26\u53f7\uff0c\u8bf7\u7acb\u5373",o.a.createElement(b.a,{to:"/login"},"\u767b\u5f55")))}}]),t}(o.a.Component),S=(a(233),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).onChange=function(e,t){var n={};n[e]=t,a.setState(n)},a.submit=Object(h.a)(f.a.mark((function e(){var t,n,o,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.account,o=t.password,e.prev=1,e.next=4,x.post("sign_in/user",{account:n,password:o});case 4:r=e.sent,console.log(r),a.props.history.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),a.state={account:"",password:""},console.log(a.props),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.account,n=t.password;return o.a.createElement("div",{className:"Login"},o.a.createElement("h1",null,"\u756a\u8304\u571f\u8c46\u95f9\u949f\u767b\u5f55"),o.a.createElement(v.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",value:a,prefix:o.a.createElement(y.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),allowClear:!0,onChange:function(t){return e.onChange("account",t.target.value)}}),o.a.createElement(v.a.Password,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",value:n,onChange:function(t){return e.onChange("password",t.target.value)}}),o.a.createElement(O.a,{className:"LoginButton",type:"primary",block:!0,onClick:this.submit.bind(this)},"\u767b\u5f55"),o.a.createElement("p",null,"\u6ca1\u6709\u8d26\u53f7\uff1f\u8bf7\u7acb\u5373",o.a.createElement(b.a,{to:"/signup"},"\u6ce8\u518c")))}}]),t}(o.a.Component)),_=a(23),M=a(30),A=a(277),P=a(271),H=a(270),U=a(274),W=a(272),B=(a(235),a(276)),L=function(e){return{type:"UPDATE_TODO",payload:e}},F=function(e){return{type:"EDIT_TODO",payload:e}},Y=(a(236),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).addTodo=function(){""!==a.state.description&&a.postTodo()},a.postTodo=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.post("todos",{description:a.state.description});case 3:t=e.sent,console.log(t),a.props.addTodo(t.data.resource),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:a.setState({description:""});case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),a.state={description:""},console.log(a.props),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.description,a=t?o.a.createElement(y.a,{type:"enter",onClick:this.postTodo}):o.a.createElement("span",null);return o.a.createElement("div",{className:"TodoInput"},o.a.createElement(v.a,{placeholder:"\u6dfb\u52a0\u65b0\u4efb\u52a1",className:"input",value:t,onPressEnter:this.addTodo,onChange:function(t){return e.setState({description:t.target.value})},suffix:a}))}}]),t}(o.a.Component)),q={addTodo:function(e){return{type:"ADD_TODO",payload:e}}},K=Object(M.b)((function(e,t){return Object(_.a)({},t)}),q)(Y),R=a(2),V=a.n(R),z=a(273),G=(a(237),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).updateTodo=function(){var e=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.put("todos/".concat(a.props.id),t);case 3:n=e.sent,a.props.updateTodo(n.data.resource),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),a.editTodo=function(){a.props.editTodo(a.props.id)},a.onKeyUp=function(e){13===e.keyCode&&""!==a.state.editText&&a.updateTodo({description:a.state.editText})},a.state={editText:a.props.description},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=o.a.createElement("div",{className:"editing"},o.a.createElement("input",{type:"text",value:this.state.editText,onChange:function(t){return e.setState({editText:t.target.value})},onKeyUp:this.onKeyUp}),o.a.createElement("div",{className:"iconWrapper"},o.a.createElement(y.a,{type:"enter",onClick:function(t){return e.updateTodo({description:e.state.editText})}}),o.a.createElement(y.a,{type:"delete",onClick:function(t){return e.updateTodo({deleted:!0})}}))),a=o.a.createElement("span",{className:"text",onDoubleClick:this.editTodo},this.props.description),n=V()({TodoItem:!0,editing:this.props.editing,completed:this.props.completed});return o.a.createElement("div",{className:n,id:"TodoItem"},o.a.createElement(z.a,{className:"checkbox",checked:this.props.completed,onChange:function(t){return e.updateTodo({completed:t.target.checked})}}),this.props.editing?t:a)}}]),t}(o.a.Component)),J={updateTodo:L,editTodo:F},Q=Object(M.b)((function(e,t){return Object(_.a)({},t)}),J)(G),Z=(a(238),B.a.TreeNode),$=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).isTodoEditable=function(e){a.props.editTodo(e)},a.postTodo=function(){var e=Object(h.a)(f.a.mark((function e(t,n){var o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.completed&&(n.completed_at=new Date),e.prev=1,e.next=4,x.put("todos/".concat(t),n);case 4:o=e.sent,a.props.updateTodo(o.data.resource),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}(),console.log(e),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Todos"},o.a.createElement(K,null),o.a.createElement("div",{className:"todoLists"},this.unCompletedTodos.map((function(t){return o.a.createElement(Q,Object.assign({key:t.id},t,{update:e.postTodo,editTodo:e.isTodoEditable}))})),o.a.createElement(B.a,{showLine:!0,switcherIcon:o.a.createElement(y.a,{type:"down"})},o.a.createElement(Z,{title:"\u6700\u8fd1\u5b8c\u6210\u7684\u4efb\u52a1",key:"0-0-0-2"},this.completedTodos.map((function(t){return o.a.createElement(Z,{key:"tree-".concat(t.id),title:o.a.createElement(Q,Object.assign({key:t.id},t,{update:e.postTodo,editTodo:e.isTodoEditable}))})}))))))}},{key:"unDeletedTodos",get:function(){return this.props.todos.filter((function(e){return!e.deleted}))}},{key:"unCompletedTodos",get:function(){return this.unDeletedTodos.filter((function(e){return!e.completed}))}},{key:"completedTodos",get:function(){return this.unDeletedTodos.filter((function(e){return e.completed}))}}]),t}(o.a.Component),X={editTodo:F,updateTodo:L},ee=Object(M.b)((function(e,t){return Object(_.a)({todos:e.todos},t)}),X)($),te=(a(247),a(248),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={countDown:a.props.timer},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;D=setInterval((function(){var t=e.state.countDown;e.setState({countDown:t-1e3}),document.title="".concat(e.countDown," - \u756a\u8304\u571f\u8c46"),t<1e3&&(document.title="\u756a\u8304\u571f\u8c46",e.props.onFinish(),clearInterval(D))}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(D)}},{key:"render",value:function(){var e=1-this.state.countDown/this.props.duration;return o.a.createElement("div",{className:"CountDown"},o.a.createElement("span",{className:"restTime"},this.countDown),o.a.createElement("div",{className:"progress",style:{width:"".concat(100*e,"%")}}))}},{key:"countDown",get:function(){var e=Math.floor(this.state.countDown/1e3/60),t=Math.floor(this.state.countDown/1e3%60+21);return"".concat(e<10?"0".concat(e):e,":").concat(t<10?"0".concat(t):t)}}]),t}(o.a.Component)),ae=(a(249),H.a.confirm),ne=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).abortTomato=function(){a.updateTomato({aborted:!0}),document.title="\u756a\u8304\u571f\u8c46"},a.showConfirm=function(){ae({title:"\u60a8\u76ee\u524d\u6b63\u5728\u4e00\u4e2a\u756a\u8304\u5de5\u4f5c\u65f6\u95f4\u4e2d\uff0c\u8981\u653e\u5f03\u8fd9\u4e2a\u756a\u8304\u5417\uff1f",onOk:function(){a.abortTomato()},onCancel:function(){console.log("\u53d6\u6d88")},cancelText:"\u53d6\u6d88",okText:"\u786e\u5b9a"})},a.onFinish=function(){a.forceUpdate()},a.onPressEnter=function(){""!==a.state.description&&(a.updateTomato({description:a.state.description,ended_at:new Date}),a.setState({description:""}))},a.updateTomato=function(){var e=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.put("tomatoes/".concat(a.props.unfishedTomato.id),t);case 3:n=e.sent,a.props.updateTomato(n.data.resource),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),a.state={description:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=o.a.createElement("div",null);if(void 0===this.props.unfishedTomato)t=o.a.createElement(O.a,{className:"startTomatoButton",onClick:function(){e.props.startTomato()}},"\u5f00\u59cb\u756a\u8304");else{var a=Date.parse(this.props.unfishedTomato.started_at),n=this.props.unfishedTomato.duration,r=(new Date).getTime();if(r-a>n)t=o.a.createElement("div",{className:"inputWrapper"},o.a.createElement(v.a,{className:"input",value:this.state.description,placeholder:"\u4f60\u521a\u521a\u5b8c\u6210\u4e86\u4ec0\u4e48\u5de5\u4f5c?",onChange:function(t){return e.setState({description:t.target.value})},onPressEnter:this.onPressEnter}),o.a.createElement(y.a,{type:"close-circle",className:"abort",onClick:this.showConfirm}));else if(r-a<n){var c=n-r+a;t=o.a.createElement("div",{className:"countDownWrapper"},o.a.createElement(te,{timer:c,duration:n,onFinish:this.onFinish}),o.a.createElement(y.a,{type:"close-circle",className:"abort",onClick:this.showConfirm}))}}return o.a.createElement("div",{className:"TomatoAction"},t)}}]),t}(o.a.Component),oe=a(267),re=a(265),ce=(a(250),o.a.createElement(y.a,{type:"loading",style:{fontSize:24},spin:!0})),se=function(e){return o.a.createElement("div",{className:"TomatoItem"},o.a.createElement("span",{className:"timeRange"},Object(oe.a)(Date.parse(e.started_at),"H:mm")," - ",Object(oe.a)(Date.parse(e.ended_at),"H:mm")),o.a.createElement("span",{className:"description"},e.description))},ie=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={spinning:!0},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({spinning:!1})}},{key:"render",value:function(){var e=this,t=this.dates.map((function(t){var a=e.props.finishedTomatoes[t];return o.a.createElement("div",{key:t,className:"dailyTomatoes"},o.a.createElement("div",{className:"title"},o.a.createElement("span",{className:"dateTime"},Object(oe.a)(Date.parse(t),"M\u6708dd\u65e5")),o.a.createElement("span",{className:"finishedCount"},"\u5b8c\u6210\u4e86 ",a.length," \u4e2a\u756a\u8304")),a.map((function(e){return o.a.createElement(se,Object.assign({key:e.id},e))})))}));return o.a.createElement("div",{className:"TomatoList"},o.a.createElement(re.a,{indicator:ce,spinning:this.state.spinning}),t)}},{key:"dates",get:function(){return Object.keys(this.props.finishedTomatoes).sort((function(e,t){return Date.parse(t)-Date.parse(e)})).splice(0,3)}}]),t}(o.a.Component),ue=a(61),le=a.n(ue),de=a(266),pe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).startTomato=function(){var e=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.post("tomatoes",{duration:60*t*1e3});case 3:n=e.sent,a.props.addTomato(n.data.resource),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({spinning:!1})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Tomatoes"},o.a.createElement(ne,{startTomato:function(){e.startTomato(e.props.timer)},unfishedTomato:this.unfinishedTomato,updateTomato:this.props.updateTomato}),o.a.createElement(ie,{finishedTomatoes:this.finishedTomatoes}))}},{key:"unfinishedTomato",get:function(){return this.props.tomatoes.filter((function(e){return!e.description&&!e.ended_at&&!e.aborted}))[0]}},{key:"finishedTomatoes",get:function(){var e=this.props.tomatoes.filter((function(e){return e.description&&e.ended_at&&!e.aborted}));return le.a.groupBy(e,(function(e){return Object(oe.a)(Object(de.a)(e.started_at),"yyyy-MM-d")}))}}]),t}(o.a.Component),me={addTomato:function(e){return{type:"ADD_TOMATO",payload:e}},updateTomato:function(e){return{type:"UPDATE_TOMATO",payload:e}}},fe=Object(M.b)((function(e,t){return Object(_.a)({tomatoes:e.tomatoes},t)}),me)(pe),he=a(52),be=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).points=function(){var e=Object.keys(a.props.data).sort((function(e,t){return Date.parse(e)-Date.parse(t)})),t=e[0];if(t){var n=(new Date).getTime()-Date.parse(t),o=0,r=null,c=e.map((function(e){var c=(Date.parse(e)-Date.parse(t))/n*240,s=60*(1-(o+=a.props.data[e].length)/a.props.totalFinishedCount);return r=s,"".concat(c,", ").concat(s)}));return["0,60"].concat(Object(he.a)(c),["240,".concat(r),"240, 60"]).join(" ")}return"0,60 240,60"},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Polygon"},o.a.createElement("svg",{width:"100%",height:"60",preserveAspectRatio:"none"},o.a.createElement("polygon",{fill:"rgba(215,78,78,0.1)",points:this.points()}),o.a.createElement("polyline",{fill:"none",stroke:"rgba(215,78,78,0.5)",strokeWidth:"1",points:this.points(),strokeLinecap:"square"})))}}]),t}(o.a.Component),ve=a(268),ye=a(78),Te=a.n(ye),Oe=(a(252),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).updateTodo=function(){var e=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.put("todos/".concat(a.props.todo.id),t);case 3:n=e.sent,console.log(n),a.props.updateTodo(n.data.resource),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t,a,n=this;return"finished"===this.props.itemType?(e="HH:mm",t=this.props.todo.updated_at,a=o.a.createElement("div",{className:"action"},o.a.createElement("span",{onClick:function(){return n.updateTodo({completed:!1,updated_at:null})}},"\u6062\u590d"),o.a.createElement("span",{onClick:function(){return n.updateTodo({deleted:!0})}},"\u5220\u9664"))):"deleted"===this.props.itemType&&(e="YYYY\u5e74MM\u6708DD\u65e5 HH:mm",t=this.props.todo.created_at,a=o.a.createElement("div",{className:"action"},o.a.createElement("span",{onClick:function(){return n.updateTodo({deleted:!1})}},"\u6062\u590d"))),o.a.createElement("div",{className:"TodoHistoryTodoItem"},o.a.createElement("div",{className:"text"},o.a.createElement("span",{className:"time"},Te()(t).format(e)),o.a.createElement("span",{className:"description"},this.props.todo.description)),a)}}]),t}(o.a.Component)),Ee={updateTodo:L},ge=Object(M.b)((function(e,t){return Object(_.a)({},t)}),Ee)(Oe),je=(a(253),ve.a.TabPane),ke=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.deletedTodos.map((function(e){return o.a.createElement("div",{className:"dailyDelete",key:e.id},o.a.createElement(ge,{key:e.id,todo:e,itemType:"deleted"}))}));return o.a.createElement("div",{className:"TodoHistory"},o.a.createElement(ve.a,{defaultActiveKey:"1",type:"card"},o.a.createElement(je,{tab:"\u5df2\u5b8c\u6210\u7684\u4efb\u52a1",key:"1"},o.a.createElement("div",{className:"TodoHistory",id:"TodoHistory"},this.finishedTodoList)),o.a.createElement(je,{tab:"\u5df2\u5220\u9664\u7684\u4efb\u52a1",key:"2"},o.a.createElement("div",{className:"TodoHistory",id:"TodoHistory"},e))))}},{key:"finishedTodos",get:function(){return this.props.todos.filter((function(e){return e.completed&&!e.deleted}))}},{key:"deletedTodos",get:function(){return this.props.todos.filter((function(e){return e.deleted}))}},{key:"dailyTodos",get:function(){return le.a.groupBy(this.finishedTodos,(function(e){return Object(oe.a)(Object(de.a)(e.updated_at),"yyyy-MM-dd")}))}},{key:"finishedDates",get:function(){return Object.keys(this.dailyTodos).sort((function(e,t){return Date.parse(t)-Date.parse(e)}))}},{key:"finishedTodoList",get:function(){var e=this,t=["\u5468\u65e5","\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d"];return this.finishedDates.map((function(a){return o.a.createElement("div",{className:"dailyTodos",key:a},o.a.createElement("div",{className:"summary"},o.a.createElement("p",{className:"date"},o.a.createElement("span",{className:"dateTime"},Te()(a).format("YYYY\u5e74M\u6708D\u65e5")),o.a.createElement("span",{className:"week"},t[parseInt(Te()(a).format("d"))])),o.a.createElement("p",{className:"finishedCount"},"\u5b8c\u6210\u4e86",e.dailyTodos[a].length,"\u4e2a\u4efb\u52a1")),o.a.createElement("div",{className:"todoList"},e.dailyTodos[a].map((function(e){return o.a.createElement(ge,{key:e.id,todo:e,itemType:"finished"})}))))}))}}]),t}(o.a.Component),we=Object(M.b)((function(e,t){return Object(_.a)({todos:e.todos},t)}))(ke),Ce=(a(254),function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Statistics"},o.a.createElement("ul",{className:"graph"},o.a.createElement("li",null,o.a.createElement("div",{className:"desc"},o.a.createElement("span",{className:"title"},"\u756a\u8304\u5386\u53f2"),o.a.createElement("span",{className:"subtitle"},"\u7d2f\u8ba1\u5b8c\u6210\u756a\u8304"),o.a.createElement("span",{className:"quantity"},this.finishedTomatoes.length)),o.a.createElement(be,{data:this.dailyTomatoes,totalFinishedCount:this.finishedTomatoes.length})),o.a.createElement("li",null,o.a.createElement("div",{className:"desc"},o.a.createElement("span",{className:"title"},"\u4efb\u52a1\u5386\u53f2"),o.a.createElement("span",{className:"subtitle"},"\u7d2f\u8ba1\u5b8c\u6210\u4efb\u52a1"),o.a.createElement("span",{className:"quantity"},this.finishedTodos.length)),o.a.createElement(be,{data:this.dailyTodos,totalFinishedCount:this.finishedTodos.length}))),o.a.createElement(we,null))}},{key:"finishedTodos",get:function(){return this.props.todos.filter((function(e){return e.completed&&!e.deleted}))}},{key:"finishedTomatoes",get:function(){return this.props.tomatoes.filter((function(e){return e.ended_at&&e.description&&!e.aborted}))}},{key:"dailyTodos",get:function(){return le.a.groupBy(this.finishedTodos,(function(e){return Object(oe.a)(Date.parse(e.updated_at),"yyyy-MM-dd")}))}},{key:"dailyTomatoes",get:function(){return le.a.groupBy(this.finishedTomatoes,(function(e){return Object(oe.a)(Date.parse(e.ended_at),"yyyy-MM-dd")}))}}]),t}(o.a.Component)),Ne=Object(M.b)((function(e,t){return Object(_.a)({todos:e.todos,tomatoes:e.tomatoes},t)}))(Ce),De=y.a.createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_808628_b6nuh19mmf5.js"}),xe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).getMe=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("me");case 2:t=e.sent,a.setState(Object(_.a)({},a.state,{user:t.data}));case 4:case"end":return e.stop()}}),e)}))),a.getTodos=Object(h.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("todos");case 3:t=e.sent,n=t.data.resources.map((function(e){return Object(_.a)({},e,{},{editing:!1})})),a.props.initTodos(n),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),a.getTomatoes=Object(h.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("tomatoes");case 3:t=e.sent,n=t.data.resources,a.props.initTomatoes(n),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),a.logout=function(){localStorage.setItem("x-token",""),w.push("/login")},a.handleOk=function(){a.setState(Object(_.a)({},a.state,{visible:!1}))},a.handleCancel=function(){a.setState(Object(_.a)({},a.state,{visible:!1}))},a.showModal=function(){a.setState(Object(_.a)({},a.state,{visible:!0}))},a.onInputValChange=function(e){localStorage.setItem("timer",e.toString()),a.setState(Object(_.a)({},a.state,{timer:e})),console.log("timer: ",a.state.timer)},a.state={user:{},visible:!1,timer:parseInt(localStorage.getItem("timer"))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){1===Number(localStorage.getItem("count"))&&A.a.open({message:"\u4f7f\u7528\u5c0f\u63d0\u793a",description:"\u53cc\u51fbtodo\u5217\u8868\u53ef\u4ee5\u7f16\u8f91\u5662~",onClick:function(){console.log("Notification Clicked!")}})}},{key:"componentWillMount",value:function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getMe();case 2:return e.next=4,this.getTodos();case 4:return e.next=6,this.getTomatoes();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=o.a.createElement(P.a,{className:"menu"},o.a.createElement(P.a.Item,{key:"0"},o.a.createElement("span",{onClick:function(){e.showModal()}},"\u504f\u597d\u8bbe\u7f6e\xa0",o.a.createElement(y.a,{type:"setting"}))),o.a.createElement(P.a.Item,{key:"1",onClick:this.logout.bind(this)},o.a.createElement("span",null,"\u9000\u51fa\u767b\u5f55\xa0",o.a.createElement(y.a,{type:"logout"}))));return o.a.createElement("div",{className:"Home"},o.a.createElement(H.a,{title:"\u8bbe\u7f6e\u4e00\u4e2a\u756a\u8304\u7684\u65f6\u95f4",visible:this.state.visible,onOk:function(){e.handleOk()},onCancel:function(){e.handleCancel()}},o.a.createElement(U.a,{min:1,max:100,defaultValue:parseInt(localStorage.getItem("timer")),onChange:function(t){e.onInputValChange(t)}})," \u5206\u949f"),o.a.createElement("header",null,o.a.createElement("span",{className:"logo"},o.a.createElement(De,{type:"i-Tomato",className:"icon",style:{fontSize:32}}),o.a.createElement("span",{className:"logoName"},"\u756a\u8304\u571f\u8c46\u95f9\u949f")),o.a.createElement(W.a,{className:"dropdown",overlay:t,placement:"bottomRight"},o.a.createElement("span",{onClick:function(e){return e.preventDefault()}},"\u4f60\u597d\uff0c",this.state.user.account," ",o.a.createElement(y.a,{type:"down"})))),o.a.createElement("main",null,o.a.createElement(fe,{timer:this.state.timer}),o.a.createElement(ee,null)),o.a.createElement(Ne,null))}}]),t}(o.a.Component),Ie={initTodos:function(e){return{type:"INIT_TODOS",payload:e}},initTomatoes:function(e){return{type:"INIT_TOMATOES",payload:e}}},Se=Object(M.b)((function(e,t){return Object(_.a)({},t)}),Ie)(xe),_e=a(27),Me=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(_e.b,{history:w},o.a.createElement("div",null,o.a.createElement(p.a,null),o.a.createElement(_e.a,{exact:!0,path:"/",component:Se}),o.a.createElement(_e.a,{exact:!0,path:"/login",component:S}),o.a.createElement(_e.a,{exact:!0,path:"/signUp",component:I})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ae=a(67),Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(he.a)(e),[t.payload]);case"INIT_TODOS":return Object(he.a)(t.payload);case"UPDATE_TODO":return e.map((function(e){return e.id===t.payload.id?t.payload:e}));case"EDIT_TODO":return e.map((function(e){return e.id===t.payload?Object(_.a)({},e,{},{editing:!0}):Object(_.a)({},e,{},{editing:!1})}));default:return e}},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TOMATO":return[].concat(Object(he.a)(e),[t.payload]);case"INIT_TOMATOES":return Object(he.a)(t.payload);case"UPDATE_TOMATO":return e.map((function(e){return e.id===t.payload.id?t.payload:e}));default:return e}},Ue=Object(Ae.b)({todos:Pe,tomatoes:He}),We=(a(262),Object(Ae.c)(Ue));c.a.render(o.a.createElement(M.a,{store:We},o.a.createElement(Me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[154,1,2]]]);
//# sourceMappingURL=main.da4fd8a2.chunk.js.map