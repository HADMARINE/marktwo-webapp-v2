(this["webpackJsonpdodoli-webapp"]=this["webpackJsonpdodoli-webapp"]||[]).push([[0],{17:function(e,t,n){},29:function(e,t,n){},49:function(e,t,n){e.exports=n(74)},66:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(37),l=n.n(o),c=(n(17),n(5)),s=n(6),i=n(8),m=n(7),u=n(9),d=n(44),p=n(20),h=n(38),b=n.n(h),f=(n(60),n(12)),g=n.n(f),E=n(14),v="https://api.dodoli.net",k=n(25),O=n.n(k),w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={isLogin:!1},n.checkIsLogin=Object(E.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(sessionStorage.getItem("token")){e.next=3;break}return n.setState({isLogin:!1}),e.abrupt("return");case 3:return t={"Content-Type":"application/json","x-access-token":sessionStorage.getItem("token")||"null"},e.next=6,O.a.v4();case 6:return e.t0=e.sent,a={publicip:e.t0},e.next=10,fetch(v+"/auth/verify",{method:"POST",body:JSON.stringify(a),headers:t}).then((function(e){return e.json()})).then((function(e){if(!e.userid)return localStorage.setItem("token",""),void sessionStorage.setItem("userid","");n.setState({isLogin:!0}),sessionStorage.setItem("userid",e.userid)}));case 10:case"end":return e.stop()}}),e)}))),n.checkLocalToken=Object(E.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=localStorage.getItem("token"))&&sessionStorage.setItem("token",t);case 2:case"end":return e.stop()}}),e)}))),document.title="MARKTWO",n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=Object(E.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.checkLocalToken();case 2:return e.next=4,this.checkIsLogin();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=r.a.createElement("span",null,r.a.createElement("a",{className:"Module-loginbutton",href:"/register"},"REGISTER"),r.a.createElement("a",{className:"Module-loginbutton",href:"/login"},"LOGIN")),t=r.a.createElement("span",null,r.a.createElement("a",{className:"Module-loginbutton",href:"/logout"},"LOGOUT"),r.a.createElement("a",{className:"Module-loginbutton",href:"/mypage"},"MYPAGE"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Background-header"},r.a.createElement("div",null,r.a.createElement("a",{className:"Module-mainlogo",style:window.innerWidth>500?{fontSize:"3rem"}:{fontSize:"2rem",marginTop:"0.5rem"},href:"/"},"MARKTWO"),this.state.isLogin?t:e),r.a.createElement("br",null)))}}]),t}(a.Component),y=n(3),j=n(78),x=(n(29),n(4));n(66);function N(){var e=Object(y.a)(["\n  color: white;\n  background-color: rgb(24, 24, 24);\n"]);return N=function(){return e},e}function S(){var e=Object(y.a)(["\n* {\n\n}\n.form-control{\n  \n  background-color: rgb(60,60,60) !important;\n  color: white !important;\n  border-color: black !important;\n\n}"]);return S=function(){return e},e}var C=Object(x.a)(S()),T=x.b.span(N()),M=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={img:n.props.img,title:n.props.title,content:n.props.content,link:n.props.link},n.handleOpenLink=function(){window.location.replace(n.state.link)},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=r.a.createElement("div",{onClick:this.handleOpenLink,className:"max-w-sm rounded overflow-hidden shadow-lg Module-background",style:{margin:"1rem",backgroundColor:"rgb(60,60,60)"}},r.a.createElement("div",{onClick:this.handleOpenLink,className:"px-6 py-4"},r.a.createElement("div",{className:"font-bold text-xl mb-2",style:{fontSize:"5rem"}},this.state.title),r.a.createElement("p",{className:"text-700 text-base",onClick:this.handleOpenLink},this.state.content)));return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(T,null,e))}}]),t}(a.Component);function L(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return L=function(){return e},e}function B(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  word-break: break-all;\n"]);return B=function(){return e},e}function A(){var e=Object(y.a)(["\n  background-color: rgb(24, 24, 24);\n  color: white;\n"]);return A=function(){return e},e}function z(){var e=Object(y.a)(["\nbody {\n  /* margin: 0;\n  padding: 0; */\n  background-color:rgb(24,24,24);\n  color:white;\n  justify-content:center;\n \n}\n.form-control{\n  background-color: rgb(60,60,60) !important;\n  color: white !important;\n  border-color: black !important;\n}"]);return z=function(){return e},e}var I=Object(x.a)(z()),R=x.b.div(A()),P=(x.b.div(B()),x.b.span(L())),F=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLogin:!1},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){sessionStorage.getItem("token")&&this.setState({isLogin:!0})}},{key:"render",value:function(){var e=r.a.createElement("div",{className:"Style-center"},r.a.createElement(I,null),r.a.createElement("div",null,r.a.createElement("p",{className:"Blank-small"}),r.a.createElement("p",{className:"Text-medium"},"\ucf8c\uc801\ud55c \ucef4\ud4e8\ud130\uc2e4 \uc0dd\ud65c\uc758 \uc911\uc2ec"),r.a.createElement("p",{className:"Text-xlarge Text-bold"},"MARKTWO"),r.a.createElement("div",{className:"Blank-medium"}),r.a.createElement("p",{className:"Text-small Text-xlight"},"\uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),r.a.createElement("div",{className:"Blank-xxsmall"}),r.a.createElement(j.a,{variant:"dark",href:"/login",size:"lg",style:{width:"15rem"}},"\ub85c\uadf8\uc778")),r.a.createElement("div",null)),t=r.a.createElement(R,null,r.a.createElement(I,null),r.a.createElement("div",{className:"Style-center"},r.a.createElement("span",{style:{backgroundColor:"white"}},r.a.createElement("p",{className:"Blank-small"}),r.a.createElement("p",{className:"Text-large Text-bold",style:{color:"white"}},"MARKTWO"),r.a.createElement(P,null,r.a.createElement(M,{title:"\ucef4\uc2e4\uc720\ud2f8",content:"\uc5ec\ub7ec\ubd84\uc758 \ucef4\ud4e8\ud130\uc2e4 \uc0dd\ud65c\uc5d0 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\ub294 \uc720\ud2f8\ub9ac\ud2f0\uac00 \ub9ce\uc774 \uc788\uc2b5\ub2c8\ub2e4.",link:"/service/comsil"}),r.a.createElement(M,{title:"\uc720\ud2f8\ub9ac\ud2f0",content:"\uadf8\ub798\ud53d\ud234\ubd80\ud130 \uac8c\uc784, \uc624\ud53c\uc2a4 \ub4f1 \uc6b0\ub9ac\uc5d0\uac8c \uaf2d \ud544\uc694\ud55c \ud504\ub85c\uadf8\ub7a8\ub4e4\uc774 \uc900\ube44\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.",link:"/service/utility"})))));return r.a.createElement(r.a.Fragment,null,this.state.isLogin?t:e)}}]),t}(a.Component),D=n(21),W=n(75),K=n(43),J=n(77);function H(){var e=Object(y.a)(["\n\n"]);return H=function(){return e},e}function G(){var e=Object(y.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  background-color:rgb(24,24,24);\n  color:white;\n}\nbody{\n  background-color:rgb(24,24,24);\n}\n.form-control{\n  \n  background-color: rgb(60,60,60) !important;\n  color: white !important;\n  border-color: black !important;\n  :focus{\n    /* background-color:black; */\n  }\n\n}"]);return G=function(){return e},e}var Z=Object(x.a)(G()),Y=(x.b.img(H()),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isHinder:!0,id:"",password:"",errorMessage:"",isRemember:!1},n.handleHinder=function(){n.setState({isHinder:!n.state.isHinder})},n.handleLogin=Object(E.a)(g.a.mark((function e(){var t,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n.state.id,e.t1=n.state.password,e.next=4,O.a.v4();case 4:return e.t2=e.sent,t={uid:e.t0,password:e.t1,publicip:e.t2},a={"Content-Type":"application/json"},r="",e.next=10,fetch(v+"/auth/",{method:"POST",body:JSON.stringify(t),headers:a}).then((function(e){return e.json()})).then((function(e){e.token?(sessionStorage.setItem("token",e.token.toString()),n.state.isRemember&&localStorage.setItem("token",e.token.toString()),window.location.replace("/")):r=e.message})).catch((function(e){alert("\uc11c\ubc84 \uc5f0\uacb0\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4 : "+e),window.location.replace("/")}));case 10:n.setState({errorMessage:r});case 11:case"end":return e.stop()}}),e)}))),n.handleChange=function(e){var t;n.setState((t={},Object(D.a)(t,e.target.name,e.target.value),Object(D.a)(t,"errorMessage",""),t))},n.handleEnterKey=function(e){13===e.keyCode&&n.handleLogin()},n.handleToggle=function(){n.setState({isRemember:!n.state.isRemember})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(Z,null),r.a.createElement("div",{className:"Style-center"},r.a.createElement("p",{className:"Blank-small"}),r.a.createElement("p",{className:"Text-bold",style:{letterSpacing:"4px",fontSize:"3rem"}},"LOGIN"),r.a.createElement("p",{className:"Blank-xsmall"}),r.a.createElement("div",{className:"Module-input w-auto"},r.a.createElement(W.a,null,r.a.createElement(K.a,{placeholder:"ID",type:"text",size:"lg",value:this.state.id,onChange:this.handleChange,onKeyDown:this.handleEnterKey,name:"id"})),r.a.createElement("div",{className:"Blank-xxsmall"}),r.a.createElement(W.a,null,r.a.createElement(K.a,{placeholder:"Password",type:this.state.isHinder?"password":"text",size:"lg",value:this.state.password,onChange:this.handleChange,onKeyDown:this.handleEnterKey,name:"password"}),r.a.createElement(W.a.Append,null,r.a.createElement(j.a,{onClick:this.handleHinder,variant:"dark"},this.state.isHinder?"\ubcf4\uc774\uae30":"\uc228\uae30\uae30")))),r.a.createElement("div",{className:"Blank-xsmall"}),r.a.createElement(J.a.Check,{type:"switch",label:"Remember me",id:"remember toggle",onChange:this.handleToggle}),r.a.createElement("p",{className:"Blank-xxsmall"}),this.state.errorMessage?r.a.createElement("span",{className:"Module-errormessage"},this.state.errorMessage):r.a.createElement("span",{style:{color:"white"}},"\xa0"),r.a.createElement("div",{className:"Blank-xxsmall"}),r.a.createElement(j.a,{variant:"dark",size:"lg",style:{width:"10rem"},onClick:this.handleLogin},"\ub85c\uadf8\uc778"),r.a.createElement("div",{className:"Blank-xsmall"}),r.a.createElement("div",null,"\ub610\ub294"," ",r.a.createElement("a",{href:"/find/password",style:{color:"skyblue"}},"\ube44\ubc00\ubc88\ud638 \ucc3e\uae30"))))}}]),t}(a.Component));function V(){var e=Object(y.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  background-color:rgb(24,24,24);\n  color:white;\n}\nbody{\n  background-color:rgb(24,24,24);\n}\n.form-control{\n  \n  background-color: rgb(60,60,60) !important;\n  color: white !important;\n  border-color: black !important;\n}"]);return V=function(){return e},e}var $=Object(x.a)(V()),_=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement("div",{className:"Style-center Style-overflow-hidden"},r.a.createElement("div",null,r.a.createElement("p",{className:"Module-notfoundmove"}),r.a.createElement("p",{className:"Module-notfound",style:{backgroundColor:"#00000000"}},"\xa0404\xa0")),r.a.createElement("p",{className:"Module-notfoundmove"}),r.a.createElement("div",null),r.a.createElement("p",{className:"Text-medium"}," Not found"),r.a.createElement("p",{className:"Text-small"},r.a.createElement("code",{style:{color:"white"}},"\ubb34\uc5c7\uc744 \ucc3e\uc544 \ud5e4\uba54\ub358 \uac83\uc77c\uae4c"))))}}]),t}(a.Component),q=n(76);function Q(){var e=Object(y.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  background-color:rgb(24,24,24);\n  color:white !important;\n}\nbody{\n  background-color:rgb(24,24,24);\n}\n.form-control{\n  \n  background-color: rgb(60,60,60) !important;\n  color: white !important;\n  border-color: black !important;\n\n}"]);return Q=function(){return e},e}var U=Object(x.a)(Q()),X=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){localStorage.removeItem("token"),sessionStorage.removeItem("token"),sessionStorage.removeItem("userid"),window.location.replace("/")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null),r.a.createElement("div",{className:"Style-center"},r.a.createElement(q.a,{style:{marginTop:"10rem",marginBottom:"3rem"},animation:"border"}),r.a.createElement("h3",null,"Logging out..")))}}]),t}(a.Component);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(n,!0).forEach((function(t){Object(D.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ne(){var e=Object(y.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  background-color:rgb(24,24,24);\n  color:white;\n}\nbody{\n  background-color:rgb(24,24,24);\n}\n.form-control{\n  \n  background-color: rgb(60,60,60) !important;\n  color: white !important;\n  border-color: black !important;\n  :focus{\n    /* background-color:black; */\n  }\n\n}"]);return ne=function(){return e},e}var ae=Object(x.a)(ne()),re=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",password:"",passwordCheck:"",nickname:"",email:"",isLoading:!1,formErrors:{id:"",password:"",nickname:"",email:""}},n.handleChange=function(){var e=Object(E.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target,e.next=3,n.setState(Object(D.a)({},a.name,t.target.value));case 3:n.verifyForm(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.verifyForm=function(e){switch(e.name){case"id":return e.value.length<4?void n.setState({formErrors:te({},n.state.formErrors,{id:"\uc544\uc774\ub514\ub294 4\uae00\uc790 \uc774\uc0c1\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4."})}):(n.setState({formErrors:te({},n.state.formErrors,{id:""})}),void n.handleOverlap(e));case"password":case"passwordCheck":return new RegExp(/^((?=\S*?[a-z])(?=\S*?[0-9]).{5,})\S$/).test(e.value)?n.state.password!==n.state.passwordCheck?void n.setState({formErrors:te({},n.state.formErrors,{password:"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})}):void n.setState({formErrors:te({},n.state.formErrors,{password:""})}):void n.setState({formErrors:te({},n.state.formErrors,{password:"\uc601\ubb38\uacfc \uc22b\uc790\ub97c \ud3ec\ud568\ud55c 6\uae00\uc790 \uc774\uc0c1\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4."})});case"nickname":n.handleOverlap(e);break;case"email":if(!new RegExp(/^(?:[a-zA-Z0-9])([-_0-9a-zA-Z]+(\.[-_0-9a-zA-Z]+)*|^\"([\001-\010\013\014\016-\037!#-\[\]-\177]|\\[\001-011\013\014\016-\177])*\")@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}\.?$/).test(n.state.email)){n.setState({formErrors:te({},n.state.formErrors,{email:"\uc815\ud655\ud55c \uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})});break}n.setState({formErrors:te({},n.state.formErrors,{email:""})}),n.handleOverlap(e);break;default:return}},n.handleRegister=function(){if(n.setState({isLoading:!0}),n.state.formErrors.email||n.state.formErrors.id||n.state.formErrors.nickname||n.state.formErrors.password)return alert("\uc798\ubabb \uc785\ub825\ub41c \uc815\ubcf4\ub97c \ub2e4\uc2dc \ud655\uc778\ud558\uc138\uc694."),void n.setState({isLoading:!1});if(!n.state.email||!n.state.id||!n.state.nickname||!n.state.password)return alert("\ube44\uc5b4\uc788\ub294 \uc815\ubcf4\uac00 \uc788\uc2b5\ub2c8\ub2e4."),void n.setState({isLoading:!1});var e={uid:n.state.id,password:n.state.password,nickname:n.state.nickname,email:n.state.email};fetch(v+"/user/",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){switch(e.status){case 400:return alert("Error 400 : "+e.message),void n.setState({isLoading:!1});case 422:return alert("Error 422 : "+e.message),void n.setState({isLoading:!1,formErrors:te({},n.state.formErrors,{id:"\ub2e4\ub978 \uc544\uc774\ub514\ub85c \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."}),id:""});case 500:return alert("Error 500 : "+e.message),void n.setState({isLoading:!1})}if(!0===e.state)return alert("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc131\uacf5\ud588\uc2b5\ub2c8\ub2e4."),void window.location.replace("/login")}))},n.handleOverlap=function(){var e=Object(E.a)(g.a.mark((function e(t){var a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={type:t.name,content:t.value},r={"Content-Type":"application/json"},fetch(v+"/user/overlap/",{method:"POST",body:JSON.stringify(a),headers:r}).then((function(e){return e.json()})).then((function(e){400===e.status&&alert("Client Error : "+e.message),!0!==e.overlap?n.setState({formErrors:te({},n.state.formErrors,Object(D.a)({},t.name,""))}):n.setState({formErrors:te({},n.state.formErrors,Object(D.a)({},t.name,"\uc774\ubbf8 \uc0ac\uc6a9\uc911\uc785\ub2c8\ub2e4."))})})).catch((function(e){alert("\uc11c\ubc84 \uc5f0\uacb0\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4 : "+e),window.location.replace("/")})),e.abrupt("return");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Style-center"},r.a.createElement(ae,null),r.a.createElement("div",{className:"Blank-small"}),r.a.createElement("p",{className:"Text-bold",style:{letterSpacing:"4px",fontSize:"3rem"}},"REGISTER"),r.a.createElement("div",{className:"Blank-xsmall"}),r.a.createElement("div",{className:"Module-input"},r.a.createElement(K.a,{placeholder:"ID",type:"id",size:"lg",value:this.state.id,onChange:this.handleChange,name:"id"}),r.a.createElement("div",{className:"Blank-xxsmall"}),this.state.formErrors.id?r.a.createElement("span",{className:"Module-errormessage"},this.state.formErrors.id):r.a.createElement("span",{style:{color:"black"}},"\xa0"),r.a.createElement("div",{className:"Blank-xxsmall"}),r.a.createElement(K.a,{placeholder:"Password",type:"password",size:"lg",value:this.state.password,onChange:this.handleChange,name:"password"}),r.a.createElement("div",{className:"Blank-xxsmall"}),r.a.createElement(K.a,{placeholder:"Verify password",type:"password",size:"lg",value:this.state.passwordCheck,onChange:this.handleChange,name:"passwordCheck"}),r.a.createElement("div",{className:"Blank-xxsmall"}),this.state.formErrors.password?r.a.createElement("span",{className:"Module-errormessage"},this.state.formErrors.password):r.a.createElement("span",{style:{color:"white"}},"\xa0"),r.a.createElement("div",{className:"Blank-xxsmall"}),r.a.createElement(K.a,{placeholder:"Nickname",type:"name",size:"lg",value:this.state.nickname,onChange:this.handleChange,name:"nickname"}),r.a.createElement("div",{className:"Blank-xxsmall"}),this.state.formErrors.nickname?r.a.createElement("span",{className:"Module-errormessage"},this.state.formErrors.nickname):r.a.createElement("span",{style:{color:"white"}},"\xa0"),r.a.createElement("div",{className:"Blank-xxsmall"}),r.a.createElement(K.a,{placeholder:"Email",type:"email",size:"lg",value:this.state.email,onChange:this.handleChange,name:"email"}),r.a.createElement("div",{className:"Blank-xxsmall"}),this.state.formErrors.email?r.a.createElement("span",{className:"Module-errormessage"},this.state.formErrors.email):r.a.createElement("span",{style:{color:"white"}},"\xa0"),r.a.createElement("div",{className:"Blank-xxsmall"}),r.a.createElement(j.a,{size:"lg",variant:"dark",onClick:this.handleRegister,disabled:this.state.isLoading},this.state.isLoading?"Loading...":"\ud68c\uc6d0 \uac00\uc785"),r.a.createElement("div",{className:"Blank-small"}))))}}]),t}(a.Component);function oe(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  word-break: break-all;\n"]);return oe=function(){return e},e}function le(){var e=Object(y.a)(["\nbody {\n  /* margin: 0;\n  padding: 0; */\n  background-color:rgb(24,24,24);\n  color:white;\n  justify-content:center;\n \n}\n.form-control{\n  background-color: rgb(60,60,60) !important;\n  color: white !important;\n  border-color: black !important;\n}"]);return le=function(){return e},e}var ce=Object(x.a)(le()),se=x.b.div(oe()),ie=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,null),r.a.createElement("div",{className:"Blank-small"}),r.a.createElement(se,null,r.a.createElement("p",{style:{fontSize:"3rem",fontWeight:900,letterSpacing:"4px"}},"MY PAGE")))}}]),t}(a.Component);function me(){var e=Object(y.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  background-color:rgb(24,24,24);\n  color:white !important;\n}\n.form-control{\n  \n  background-color: rgb(60,60,60) !important;\n  color: white !important;\n  border-color: black !important;\n\n}"]);return me=function(){return e},e}var ue=Object(x.a)(me()),de=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null),r.a.createElement("p",{className:"Text-medium Text-bold"},"Text"))}}]),t}(a.Component);function pe(){var e=Object(y.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  background-color:rgb(24,24,24);\n  color:white !important;\n}\n.form-control{\n  \n  background-color: rgb(60,60,60) !important;\n  color: white !important;\n  border-color: black !important;\n\n}"]);return pe=function(){return e},e}var he=Object(x.a)(pe()),be=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(he,null))}}]),t}(a.Component);function fe(){var e=Object(y.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  background-color:rgb(24,24,24);\n  color: white !important ;\n}\n.form-control{\n  \n  background-color: rgb(60,60,60) !important;\n  color: white !important;\n  border-color: black !important;\n\n}"]);return fe=function(){return e},e}var ge=Object(x.a)(fe()),Ee=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={img:n.props.img,title:n.props.title,content:n.props.content,link:n.props.link,maclink:n.props.maclink},n.handleOpenLink=function(){window.location.replace(n.state.link)},n.handleOpenMacLink=function(){window.location.replace(n.state.maclink)},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=r.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:this.handleOpenLink},"Download"),t=r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:this.handleOpenLink,style:{marginRight:"1rem"}},"Windows"),r.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:this.handleOpenMacLink},"Mac"));return r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,null),r.a.createElement("div",{className:"max-w-sm rounded overflow-hidden shadow-lg",style:{margin:"1rem"}},r.a.createElement("img",{className:"w-full",src:this.state.img,alt:"Product Photo"}),r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("div",{className:"font-bold text-xl mb-2"},this.state.title),r.a.createElement("p",{className:"text-700 text-base"},this.state.content)),r.a.createElement("div",{className:"px-6 py-4",style:{display:"flex",justifyContent:"center"}},this.state.maclink?t:e)))}}]),t}(a.Component);function ve(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return ve=function(){return e},e}var ke=x.b.div(ve()),Oe=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e;try{e=JSON.parse(this.props.data).map((function(e){return r.a.createElement(Ee,{key:e.id,title:e.title,img:e.img,content:e.content,link:e.link,maclink:e.maclink})}))}catch(t){console.log(t),e=r.a.createElement(Ee,{key:"0",img:"https://occ-0-988-993.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSpHMNyvIRy6PolVWkmMg80JA0Kdcldq3vIxohYsRrtBKVZEyJAW6ls4b6EoKP7DzCQ6Fvnq5C694tN5eN06_Hb5gHp2.webp?r=105",content:"\ud45c\uc2dc\ud560 \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",title:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",link:"/"})}return r.a.createElement(ke,null,e)}}]),t}(a.Component);function we(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return we=function(){return e},e}function ye(){var e=Object(y.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  color : rgb(24,24,24);\n}"]);return ye=function(){return e},e}Oe.defaultProps={data:[]};var je=Object(x.a)(ye()),xe=x.b.div(we()),Ne=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:null},n.handleDataRecieve=Object(E.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v+"/data/comsil",{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.setState({data:JSON.stringify(e.result)})})).catch((function(e){alert(e)}));case 2:case"end":return e.stop()}}),e)}))),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.handleDataRecieve()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(je,null),r.a.createElement("div",{className:"Blank-small"}),r.a.createElement(xe,null,r.a.createElement("div",{className:"Blank-small"}),r.a.createElement("p",{className:"Text-medium Text-bold"},"\ucef4\uc2e4\uc720\ud2f8")),r.a.createElement(xe,null,r.a.createElement(Oe,{data:this.state.data})))}}]),t}(a.Component);function Se(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return Se=function(){return e},e}function Ce(){var e=Object(y.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  background-color:rgb(24,24,24);\n  color:white;\n}\n.form-control{\n  \n  background-color: rgb(60,60,60) !important;\n  color: white !important;\n  border-color: black !important;\n  :focus{\n    /* background-color:black; */\n  }\n\n}"]);return Ce=function(){return e},e}var Te=Object(x.a)(Ce()),Me=x.b.div(Se()),Le=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:null},n.handleDataRecieve=Object(E.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v+"/data/utility",{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.setState({data:JSON.stringify(e.result)})})).catch((function(e){alert(e)}));case 2:case"end":return e.stop()}}),e)}))),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.handleDataRecieve()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Te,null),r.a.createElement("div",{className:"Blank-small"}),r.a.createElement(Me,null,r.a.createElement("div",{className:"Blank-small"}),r.a.createElement("p",{className:"Text-medium Text-bold"},"\uc720\ud2f8\ub9ac\ud2f0")),r.a.createElement(Me,null,r.a.createElement(Oe,{data:this.state.data})))}}]),t}(a.Component),Be=function(e){function t(e){var n;return Object(c.a)(this,t),n=Object(i.a)(this,Object(m.a)(t).call(this,e)),document.title="\ubc18\uc131\ud558\uc138\uc694 - dodol:i",n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement(w,null)),r.a.createElement(d.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:F}),r.a.createElement(p.a,{exact:!0,path:"/login",component:Y}),r.a.createElement(p.a,{exact:!0,path:"/logout",component:X}),r.a.createElement(p.a,{exact:!0,path:"/register",component:re}),r.a.createElement(p.a,{exact:!0,path:"/mypage",component:ie}),r.a.createElement(p.a,{exact:!0,path:"/service/comsil",component:Ne}),r.a.createElement(p.a,{exact:!0,path:"/service/utility",component:Le}),r.a.createElement(p.a,{exact:!0,path:"/find/password",component:de}),r.a.createElement(p.a,{exact:!0,path:"/admin/upload",component:be}),r.a.createElement(p.a,{component:_})),r.a.createElement("div",{className:"App"})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(71).config(),l.a.render(r.a.createElement(Be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.4a997fe8.chunk.js.map