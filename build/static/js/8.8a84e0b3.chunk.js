(this["webpackJsonpkapusta-finance"]=this["webpackJsonpkapusta-finance"]||[]).push([[8],{180:function(e,t,n){"use strict";t.a=n.p+"static/media/sprite_categories.30cc13cf.svg"},196:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var a=function(e){return e.report.expenseOfMonth},c=function(e){return e.report.incomeOfMonth}},210:function(e,t,n){"use strict";var a=n(0),c=n(9),r=n(25),i=n(13),o=n(240),s=n.n(o),l=n(2),u=function(){return Object(l.jsxs)("div",{id:"overlay",className:s.a.toolTipContainer,children:[Object(l.jsx)("p",{className:s.a.toolTipText,children:"\u041f\u0440\u0438\u0432\u0435\u0442! \u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u043d\u0435\u0441\u0438 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0431\u0430\u043b\u0430\u043d\u0441 \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u0447\u0435\u0442\u0430!"}),Object(l.jsx)("p",{className:s.a.toolTipTextComment,children:"\u0422\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0448\u044c \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438 \u043f\u043e\u043a\u0430 \u0438\u0445 \u0443 \u0442\u0435\u0431\u044f \u043d\u0435\u0442 :)"})]})},j=n(39),b=n(33),p={setBalanceOperation:function(e){return function(t){t(b.a.setBalanceRequest()),Object(j.d)(e).then((function(e){var n=e.data;console.log("Balance set",n),t(b.a.setBalanceSuccess(n))})).catch((function(e){t(b.a.setBalanceError(e))}))}}},d={getBalance:function(e){return e.balance.balance}},h=n(36),_=n(241),x=n.n(_);t.a=function(){var e=Object(i.b)();Object(a.useEffect)((function(){e(Object(h.a)())}),[e]);var t=Object(i.c)(d.getBalance),n=Object(c.h)(),o="/report"===n.pathname||"/report/incomes"===n.pathname;return Object(l.jsx)("div",{className:o?x.a.containerReport:x.a.container,children:Object(l.jsxs)("div",{className:o?x.a.formContainerReport:x.a.formContainer,children:[!o&&Object(l.jsx)("div",{className:x.a.linkContainer,children:Object(l.jsx)(r.b,{to:"/report",className:x.a.reportsLink,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u0442\u0447\u0435\u0442\u0430\u043c"})}),Object(l.jsxs)("form",{className:x.a.balanceContainer,onSubmit:function(t){t.preventDefault();var n=t.target.balance.value.split(" ")[0];e(p.setBalanceOperation(n))},children:[Object(l.jsx)("p",{className:x.a.balanceName,children:"\u0411\u0430\u043b\u0430\u043d\u0441:"}),Object(l.jsxs)("div",{className:x.a.inputButtonContainer,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{className:o?x.a.inputFieldReport:x.a.inputField,name:"balance",type:"text",defaultValue:parseFloat(t&&"number"===typeof t?t:0).toFixed(2)+" UAH"}),t?"":Object(l.jsx)(u,{})]},t),Object(l.jsx)("button",{type:"submit",className:o?x.a.submitBtnReport:x.a.submitBtn,children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})]})]})]})})}},240:function(e,t,n){e.exports={toolTipContainer:"Tooltip_toolTipContainer__1vT6A",toolTipText:"Tooltip_toolTipText__3iSAf",toolTipTextComment:"Tooltip_toolTipTextComment__1zXu2"}},241:function(e,t,n){e.exports={container:"Balance_container__18cyy",containerReport:"Balance_containerReport__1fWPD",linkContainer:"Balance_linkContainer__36ifY",reportsLink:"Balance_reportsLink__3OUFB",formContainer:"Balance_formContainer__166Lu",formContainerReport:"Balance_formContainerReport__2tGkq Balance_formContainer__166Lu",balanceContainer:"Balance_balanceContainer__21KaI",inputButtonContainer:"Balance_inputButtonContainer__263Bb",balanceName:"Balance_balanceName__3ba82",inputField:"Balance_inputField__11QT5",inputFieldReport:"Balance_inputFieldReport__WsAKa Balance_inputField__11QT5",submitBtn:"Balance_submitBtn__2sROS",submitBtnReport:"Balance_submitBtnReport__30BeX Balance_submitBtn__2sROS"}},429:function(e,t,n){e.exports={labelList:"Rechart_labelList__qDw3f",chart_box:"Rechart_chart_box__3o2F7",text:"Rechart_text__lpAbD",mobile_box:"Rechart_mobile_box__2rBPc"}},505:function(e,t,n){e.exports={list_wraper:"ReportPage_list_wraper__2aiwE",list:"ReportPage_list__Ezmwo",list_topContainer:"ReportPage_list_topContainer__1OoD6",list_topContainerBalance:"ReportPage_list_topContainerBalance__1-8qK",item:"ReportPage_item__3shc5",title:"ReportPage_title__384Ja",chart_wraper:"ReportPage_chart_wraper__1t0La"}},506:function(e,t,n){e.exports={dataContainer:"UserCount_dataContainer__1LFi5",countText:"UserCount_countText__25KqW",data:"UserCount_data__1RlBH",button:"UserCount_button__ZCyxV",button1:"UserCount_button1__1CZSA"}},507:function(e,t,n){e.exports={goBack:"GoBack_goBack__3wrt0",arrowSvg:"GoBack_arrowSvg__1YwIE",arrowText:"GoBack_arrowText__3h0l0"}},508:function(e,t,n){e.exports={userMount:"UserMount_userMount__Zih54",expenseContainer:"UserMount_expenseContainer__Fgn_7",incomeContainer:"UserMount_incomeContainer__3S0Xp",expenseText:"UserMount_expenseText__IE8K9",userExpense:"UserMount_userExpense__B6aHG",incomeText:"UserMount_incomeText__3ZB89",userIncome:"UserMount_userIncome__1u8dZ",Line:"UserMount_Line__jBqyo"}},589:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(13),r=n(9),i=n(196),o=n(56);var s,l,u=n(578),j=n(579),b=n(304),p=n(305),d=n(306),h=n(584),_=n(591),x=n(307),f=n(204),m=n(429),O=n.n(m),v=n(2),g=function(){var e=Object(r.h)().pathname,t=Object(c.c)(i.b),n=Object(c.c)(i.a),s="/report"===e?t:n,l=function(){var e="object"===typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}var n=Object(a.useState)(t),c=Object(o.a)(n,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){if(!e)return!1;function n(){i(t())}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[t,e]),r}().width;var m,g=((null===s||void 0===s?void 0:s.length)>0?s.find((function(e){return e.isActive})).types:[]).reduce((function(e,t){var n=t.description,a=t.amount,c=n[0].toUpperCase()+n.slice(1).toLowerCase(),r=e.find((function(e){return e.description===c}));if(!r)return e.push({description:c,amount:a}),e;if(r){var i=e.findIndex((function(e){return e.description===c}));return e[i].amount+=a,e}return e}),[]).sort((m="amount",function(e,t){return e[m]<t[m]?1:-1})),w=g.length?g:[0];return l>=768?Object(v.jsx)("div",{className:O.a.chart_box,children:Object(v.jsx)(u.a,{width:"100%",height:422,children:Object(v.jsxs)(j.a,{data:w,margin:{top:30,right:15,bottom:20,left:15},className:O.a.text,children:[Object(v.jsx)(b.a,{dataKey:"amount",barSize:38,radius:[10,10,0,0],label:function(e){e.payload;var t=e.x,n=e.y,a=e.width,c=(e.height,e.value);return Object(v.jsx)("text",{x:t+a/2,y:n,className:O.a.text,textAnchor:"middle",dy:-10,children:"".concat(c," \u0433\u0440\u043d")})},children:w.map((function(e,t){return Object(v.jsx)(p.a,{fill:t%3?"#FFDAC0":"#ff751d"},"cell-".concat(t))}))}),Object(v.jsx)(d.a,{dataKey:"description",axisLine:!1,tickLine:!1,tickCount:9,minTickGap:50,type:"category"}),Object(v.jsx)(h.a,{vertical:!1,horizontal:!1,opacity:.2})," "]})})}):Object(v.jsx)("div",{className:O.a.mobile_box,children:Object(v.jsx)(u.a,{width:"100%",height:500,children:Object(v.jsxs)(_.a,{layout:"vertical",data:w,margin:{top:20,right:5,bottom:10,left:10},children:[Object(v.jsx)(d.a,{type:"number",hide:!0}),Object(v.jsx)(x.a,{dataKey:"description",type:"category",scale:"band",hide:!0}),Object(v.jsxs)(b.a,{dataKey:"amount",barSize:18,radius:[0,10,10,0],label:function(e){e.payload;var t=e.x,n=e.y,a=e.width,c=(e.height,e.value);return Object(v.jsx)("text",{x:t+a/1.11,y:n,className:O.a.text,textAnchor:"middle",dy:-10,children:"".concat(c," \u0433\u0440\u043d")})},children:[w.map((function(e,t){return Object(v.jsx)(p.a,{fill:t%3?"#FFDAC0":"#ff751d"},"cell-".concat(t))})),Object(v.jsx)(f.a,{dataKey:"description",position:"insideLeft",fill:"#52555F"})]})]})})})},w=n(25),A=n(180),C=n(505),B=n.n(C),y=n(506),N=n.n(y),k=n(14),T=n.n(k),R=n(20),E=n(12),S=n.n(E),F=n(21),U=function(e){S.a.defaults.headers.common.Authorization="Bearer ".concat(e)},L=n(79),M=n.n(L),P=function(){var e=Object(c.b)(),t=Object(a.useState)(new Date),n=Object(o.a)(t,2),r=n[0],i=n[1],s=M()(r).format("MM.YYYY");Object(a.useEffect)((function(){e(function(e){return function(){var t=Object(R.a)(T.a.mark((function t(n,a){var c,r,i;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(F.b)()),c=a().auth.token,t.prev=2,U(c),t.next=6,S.a.get("https://kapusta-smart-finance.herokuapp.com/api/v1/transactions/expense/".concat(e));case 6:r=t.sent,i=r.data,n(Object(F.c)(i)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),n(Object(F.a)(t.t0));case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(s))}),[r]),Object(a.useEffect)((function(){e(function(e){return function(){var t=Object(R.a)(T.a.mark((function t(n,a){var c,r,i;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(F.e)()),c=a().auth.token,t.prev=2,U(c),t.next=6,S.a.get("https://kapusta-smart-finance.herokuapp.com/api/v1/transactions/income/".concat(e));case 6:r=t.sent,i=r.data,n(Object(F.f)(i)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),n(Object(F.d)(t.t0));case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(s))}),[r]);var l=function(e){var t="prev"===e?-1:1;i((function(e){var n=new Date(e.getTime()),a=n.getMonth();return n.setMonth(a+t),n>new Date?e:n}))},u=r.getFullYear(),j=r.toLocaleDateString("ru",{month:"long"});return Object(v.jsxs)("div",{className:N.a.dataContainer,children:[Object(v.jsx)("p",{className:N.a.countText,children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u0435\u0440\u0438\u043e\u0434 :"}),Object(v.jsxs)("div",{className:N.a.data,children:[Object(v.jsx)("span",{className:N.a.button,onClick:function(){return l("prev")},children:Object(v.jsx)("svg",{width:"8",height:"15",children:Object(v.jsx)("use",{xlinkHref:"".concat(A.a,"#icon-arrow-left")})})}),j," ",u,Object(v.jsx)("span",{className:N.a.button1,onClick:function(){return l("next")},children:Object(v.jsx)("svg",{width:"8",height:"15",children:Object(v.jsx)("use",{xlinkHref:"".concat(A.a,"#icon-arrow-right")})})})]})]})},I=["title","titleId"];function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},z.apply(this,arguments)}function K(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function D(e,t){var n=e.title,c=e.titleId,r=K(e,I);return a.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",width:1536,height:1024,viewBox:"0 0 1536 1024",ref:t,"aria-labelledby":c},r),void 0===n?a.createElement("title",{id:c},"Vector"):n?a.createElement("title",{id:c},n):null,s||(s=a.createElement("g",{id:"icomoon-ignore"})),l||(l=a.createElement("path",{fill:"#ff751d",d:"M1536 426.667h-1209.173l305.493-306.347-120.32-120.32-512 512 512 512 120.32-120.32-305.493-306.347h1209.173v-170.667z"})))}var Y=a.forwardRef(D),G=(n.p,n(507)),H=n.n(G),Q=function(){var e=Object(r.g)();return Object(v.jsxs)("button",{type:"button",className:H.a.goBack,onClick:function(){e.push("/")},children:[Object(v.jsx)(Y,{className:H.a.arrowSvg}),Object(v.jsx)("p",{className:H.a.arrowText,children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})},q=n(508),X=n.n(q),V=function(){var e=Object(c.c)(i.b),t=Object(c.c)(i.a),n=e.reduce((function(e,t){return e+=t.categorySum}),0),a=t.reduce((function(e,t){return e+=t.categorySum}),0);return Object(v.jsxs)("div",{className:X.a.userMount,children:[Object(v.jsxs)("div",{className:X.a.expenseContainer,children:[Object(v.jsx)("p",{className:X.a.expenseText,children:"\u0420\u0430\u0441\u0445\u043e\u0434\u044b :"}),Object(v.jsxs)("span",{className:X.a.userExpense,children:["-\xa0",n.toFixed(2),"\xa0\u0433\u0440\u043d."]})]}),Object(v.jsx)("img",{className:X.a.Line,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAkCAYAAACjQ+sPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAiSURBVHgB7cYhAQAACAOwQ3KaolCUAPEC959a9GzhJchRcy8iA3exgPGGAAAAAElFTkSuQmCC",alt:"line",width:"2",height:"32"}),Object(v.jsxs)("div",{className:X.a.incomeContainer,children:[Object(v.jsx)("p",{className:X.a.incomeText,children:"\u0414\u043e\u0445\u043e\u0434\u044b :"}),Object(v.jsxs)("span",{className:X.a.userIncome,children:["+\xa0",a.toFixed(2),"\xa0\u0433\u0440\u043d."]})]})]})},W=n(210),Z=n(29),J=(n(51),Object(a.lazy)((function(){return n.e(10).then(n.bind(null,587))}))),$=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,588))}));t.default=function(){var e=Object(r.j)(),t=Object(r.h)(),n=Object(c.b)();Object(a.useEffect)((function(){n(Object(Z.a)(t))}),[]);var i=t.pathname;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:B.a.list_topContainer,children:[Object(v.jsx)(Q,{}),Object(v.jsxs)("div",{className:B.a.list_topContainerBalance,children:[Object(v.jsx)(P,{}),Object(v.jsx)(W.a,{})]})]}),Object(v.jsx)(V,{}),Object(v.jsxs)("div",{className:B.a.list_wraper,children:[Object(v.jsxs)("ul",{className:B.a.list,children:[Object(v.jsx)("li",{className:B.a.item,children:Object(v.jsx)(w.b,{to:"".concat(e.url),children:Object(v.jsx)("svg",{width:"10",height:"15",children:Object(v.jsx)("use",{xlinkHref:"".concat(A.a,"#icon-arrow-left")})})})}),Object(v.jsx)("li",{className:B.a.item,children:"/report"===i?Object(v.jsx)("h3",{className:B.a.title,children:"\u0420\u0430\u0441\u0445\u043e\u0434\u044b"}):Object(v.jsx)("h3",{className:B.a.title,children:"\u0414\u043e\u0445\u043e\u0434\u044b"})}),Object(v.jsx)("li",{className:B.a.item,children:Object(v.jsx)(w.b,{to:"".concat(e.url,"/incomes"),children:Object(v.jsx)("svg",{width:"10",height:"15",children:Object(v.jsx)("use",{xlinkHref:"".concat(A.a,"#icon-arrow-right")})})})})]}),Object(v.jsxs)(r.d,{children:[Object(v.jsx)(r.b,{exact:!0,path:"".concat(e.path),component:J}),Object(v.jsx)(r.b,{exact:!0,path:"".concat(e.path,"/incomes"),component:$})]})]}),Object(v.jsx)("div",{className:B.a.chart_wraper,children:Object(v.jsx)(g,{})})]})}}}]);
//# sourceMappingURL=8.8a84e0b3.chunk.js.map