(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{38:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(30),s=n.n(r),i=(n(38),n(17)),o=n.n(i),u=n(31),d=n(11),b=n(21),j=n(4),l=n(5),h=n(7),O=n(6),p=n(2),x=n(3),m=n(0),f=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:["Balance: ",this.props.accountBalance]})}}]),n}(c.Component),v=f,g=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:"https://www.india.com/wp-content/uploads/2016/11/Banks-1.jpg",alt:"bank"}),Object(m.jsx)("h1",{children:"Bank of React"}),Object(m.jsx)(p.b,{to:"./Login",children:"Login"}),Object(m.jsx)(p.b,{to:"./userProfile",children:"User Profile"}),Object(m.jsx)(p.b,{to:"./Debits",children:"Debits"}),Object(m.jsx)(p.b,{to:"./Credits",children:"Credits"}),Object(m.jsx)(p.b,{to:"./",children:"Home"}),Object(m.jsx)("h2",{children:"Account Balance"}),Object(m.jsx)(v,{accountBalance:this.props.accountBalance})]})}}]),n}(c.Component),B=g,C=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=Object(d.a)({},e.state.user),c=t.target.name,a=t.target.value;n[c]=a,e.setState({user:n})},e.handleSubmit=function(t){t.preventDefault(),e.props.mockLogIn(e.state.user),e.setState({redirect:!0})},e.state={user:{userName:"",password:""},redirect:!1},e}return Object(l.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(m.jsx)(x.a,{to:"./userProfile"}):Object(m.jsxs)("div",{children:[Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"userName",children:"User Name"}),Object(m.jsx)("input",{type:"text",name:"userName",onChange:this.handleChange,value:this.state.user.userName})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password"})]}),Object(m.jsx)("button",{children:"Log In"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(p.b,{to:"./Login",children:"Login"}),Object(m.jsx)(p.b,{to:"./userProfile",children:"User Profile"}),Object(m.jsx)(p.b,{to:"./Debits",children:"Debits"}),Object(m.jsx)(p.b,{to:"./Credits",children:"Credits"}),Object(m.jsx)(p.b,{to:"./",children:"Home"}),Object(m.jsx)("h2",{children:"Account Balance"}),Object(m.jsx)(v,{accountBalance:this.props.accountBalance})]})]})}}]),n}(c.Component),D=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).debitsView=function(){return e.props.debits.map((function(e){var t=e.date.slice(0,10);return Object(m.jsxs)("li",{children:[e.amount," ",e.description," ",t]},e.id)}))},e.updateDesc=function(t){var n=Object(d.a)({},e.state.debit),c=(new Date).toISOString();n.date=c,n.description=t.target.value,e.setState({debit:n})},e.updateAmount=function(t){var n=Object(d.a)({},e.state.debit);n.amount=t.target.value,e.setState({debit:n})},e.updateDebit=function(t){t.preventDefault(),e.props.addDebit(e.state.debit)},e.state={debit:{id:"",description:"",amount:"",date:""}},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Debits"}),this.debitsView(),Object(m.jsxs)("form",{onSubmit:this.updateDebit,children:[Object(m.jsx)("input",{type:"text",name:"description",onChange:this.updateDesc}),Object(m.jsx)("input",{type:"number",name:"amount",onChange:this.updateAmount}),Object(m.jsx)("button",{type:"submit",children:"Add Debit"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(p.b,{to:"./Login",children:"Login"}),Object(m.jsx)(p.b,{to:"./userProfile",children:"User Profile"}),Object(m.jsx)(p.b,{to:"./Debits",children:"Debits"}),Object(m.jsx)(p.b,{to:"./Credits",children:"Credits"}),Object(m.jsx)(p.b,{to:"./",children:"Home"}),Object(m.jsx)("h2",{children:"Account Balance"}),Object(m.jsx)(v,{accountBalance:this.props.accountBalance})]})]})}}]),n}(c.Component),S=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).creditsView=function(){return e.props.credits.map((function(e){var t=e.date.slice(0,10);return Object(m.jsxs)("li",{children:[e.amount," ",e.description," ",t]},e.id)}))},e.updateDesc=function(t){var n=Object(d.a)({},e.state.credit),c=(new Date).toISOString();n.date=c,n.description=t.target.value,e.setState({credit:n})},e.updateAmount=function(t){var n=Object(d.a)({},e.state.credit);n.amount=t.target.value,e.setState({credit:n})},e.updateCredit=function(t){t.preventDefault(),e.props.addCredit(e.state.credit)},e.state={credit:{id:"",description:"",amount:"",date:""}},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Credits"}),this.creditsView(),Object(m.jsxs)("form",{onSubmit:this.updateCredit,children:[Object(m.jsx)("input",{type:"text",name:"description",onChange:this.updateDesc}),Object(m.jsx)("input",{type:"number",name:"amount",onChange:this.updateAmount}),Object(m.jsx)("button",{type:"submit",children:"Add Credit"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(p.b,{to:"./Login",children:"Login"}),Object(m.jsx)(p.b,{to:"./userProfile",children:"User Profile"}),Object(m.jsx)(p.b,{to:"./Debits",children:"Debits"}),Object(m.jsx)(p.b,{to:"./Credits",children:"Credits"}),Object(m.jsx)(p.b,{to:"./",children:"Home"}),Object(m.jsx)("h2",{children:"Account Balance"}),Object(m.jsx)(v,{accountBalance:this.props.accountBalance})]})]})}}]),n}(c.Component),k=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"User Profile"}),Object(m.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(m.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(p.b,{to:"./Login",children:"Login"}),Object(m.jsx)(p.b,{to:"./userProfile",children:"User Profile"}),Object(m.jsx)(p.b,{to:"./Debits",children:"Debits"}),Object(m.jsx)(p.b,{to:"./Credits",children:"Credits"}),Object(m.jsx)(p.b,{to:"./",children:"Home"}),Object(m.jsx)("h2",{children:"Account Balance"}),Object(m.jsx)(v,{accountBalance:this.props.accountBalance})]})]})}}]),n}(c.Component),y=k,w=n(20),L=n.n(w),P=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).addDebit=function(e){var t=Object(b.a)(c.state.debits),n={description:e.description,amount:e.amount,date:e.date};t.push(n);var a=c.state.accountBalance-e.amount;c.setState({debits:t}),c.setState({accountBalance:a})},c.addCredit=function(e){var t=Object(b.a)(c.state.credits),n={description:e.description,amount:e.amount,date:e.date};t.push(n);var a=c.state.accountBalance+ +e.amount;c.setState({credits:t}),c.setState({accountBalance:a}),console.log(c.state.accountBalance)},c.mockLogIn=function(e){var t=Object(d.a)({},c.state.currentUser);t.userName=e.userName,c.setState({currentUser:t})},c.state={accountBalance:0,currentUser:{userName:"joe_schmoe",memberSince:"07/23/96"},debits:[],credits:[]},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,c,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://moj-api.herokuapp.com/debits");case 2:return t=e.sent,e.next=5,L.a.get("https://moj-api.herokuapp.com/credits");case 5:n=e.sent,t=t.data,n=n.data,c=0,a=0,t.forEach((function(e){c+=e.amount})),n.forEach((function(e){a+=e.amount})),r=a-c,this.setState({debits:t,credits:n,accountBalance:r});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.debits,n=this.state.credits;return Object(m.jsx)(p.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(x.b,{exact:!0,path:"/bank-of-react",render:function(){return Object(m.jsx)(B,{accountBalance:e.state.accountBalance})}}),Object(m.jsx)(x.b,{exact:!0,path:"/bank-of-react/userProfile",render:function(){return Object(m.jsx)(y,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince,accountBalance:e.state.accountBalance})}}),Object(m.jsx)(x.b,{exact:!0,path:"/bank-of-react/login",render:function(){return Object(m.jsx)(C,{user:e.state.currentUser,mockLogIn:e.mockLogIn,accountBalance:e.state.accountBalance})}}),Object(m.jsx)(x.b,{exact:!0,path:"/bank-of-react/debits",render:function(){return Object(m.jsx)(D,{addDebit:e.addDebit,debits:t,accountBalance:e.state.accountBalance})}}),Object(m.jsx)(x.b,{exact:!0,path:"/bank-of-react/credits",render:function(){return Object(m.jsx)(S,{addCredit:e.addCredit,credits:n,accountBalance:e.state.accountBalance})}})]})})}}]),n}(c.Component),U=P,A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(U,{})}),document.getElementById("root")),A()}},[[67,1,2]]]);
//# sourceMappingURL=main.70376ca5.chunk.js.map