(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),l=n(4),s=n(1),u=n.n(s),m=(n(12),n(0)),d=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={time:new Date},e.timerId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){var t=new Date;e.setState({time:t}),console.info(t.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props.clockName;t!==e.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(t))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:this.props.clockName})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:this.state.time.toUTCString().slice(-12,-4)})]})}}]),n}(u.a.Component);function h(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var k=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},e.timerId=0,e.handleRightClick=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.handleLeftClick=function(){e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({clockName:h()})}),3300),document.addEventListener("contextmenu",this.handleRightClick),document.addEventListener("click",this.handleLeftClick)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),document.removeEventListener("contextmenu",this.handleRightClick),document.removeEventListener("click",this.handleLeftClick)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),t&&Object(m.jsx)(d,{clockName:n})]})}}]),n}(u.a.Component);a.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5a722c7f.chunk.js.map