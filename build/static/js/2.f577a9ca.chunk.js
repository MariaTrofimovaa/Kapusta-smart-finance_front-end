(this["webpackJsonpkapusta-finance"]=this["webpackJsonpkapusta-finance"]||[]).push([[2],{208:function(e,t,a){e.exports={tablDeskWrapper:"TableTransactions_tablDeskWrapper__1Z0WW",mobileWrapper:"TableTransactions_mobileWrapper__cK5WT",listWrapper:"TableTransactions_listWrapper__M-9lx",mobileList:"TableTransactions_mobileList__1ow9s",mobileListItem:"TableTransactions_mobileListItem__HySVW",listWrapperItem:"TableTransactions_listWrapperItem__2ZMdO",textDescMob:"TableTransactions_textDescMob__3Bojl",listWrapperItem2:"TableTransactions_listWrapperItem2__1o3FY",dateMob:"TableTransactions_dateMob__3ewfA",categoryMob:"TableTransactions_categoryMob__jP-OV",amountMob:"TableTransactions_amountMob__384nM",amountMobGreen:"TableTransactions_amountMobGreen__waeMk",btnWrapper:"TableTransactions_btnWrapper__1ONqI",deleteBtn:"TableTransactions_deleteBtn__3zTLz",table:"TableTransactions_table__uO4Lp",tableHead:"TableTransactions_tableHead__3e5BT",tableHeadTr:"TableTransactions_tableHeadTr__3NRe2",tableTransThDate:"TableTransactions_tableTransThDate__xC-8A",tableTransThDescr:"TableTransactions_tableTransThDescr__3iGRm",tableTransThCategory:"TableTransactions_tableTransThCategory__u87vL",tableTransThAmount:"TableTransactions_tableTransThAmount__2dygD",tableTr:"TableTransactions_tableTr__2GSfK",tableBody:"TableTransactions_tableBody__2FbbW",tableDate:"TableTransactions_tableDate__1_t0h",tableDescription:"TableTransactions_tableDescription__1QOiA",tableCategory:"TableTransactions_tableCategory__2KBL0",tableAmount:"TableTransactions_tableAmount__2kh_F",tableAmountIncome:"TableTransactions_tableAmountIncome__2oKsE",tableDelete:"TableTransactions_tableDelete__2GSso"}},210:function(e,t,a){"use strict";var n=a(0),r=a(9),c=a(25),i=a(13),o=a(240),l=a.n(o),s=a(2),b=function(){return Object(s.jsxs)("div",{id:"overlay",className:l.a.toolTipContainer,children:[Object(s.jsx)("p",{className:l.a.toolTipText,children:"\u041f\u0440\u0438\u0432\u0435\u0442! \u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u043d\u0435\u0441\u0438 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0431\u0430\u043b\u0430\u043d\u0441 \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u0447\u0435\u0442\u0430!"}),Object(s.jsx)("p",{className:l.a.toolTipTextComment,children:"\u0422\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0448\u044c \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438 \u043f\u043e\u043a\u0430 \u0438\u0445 \u0443 \u0442\u0435\u0431\u044f \u043d\u0435\u0442 :)"})]})},u=a(39),d=a(33),p={setBalanceOperation:function(e){return function(t){t(d.a.setBalanceRequest()),Object(u.d)(e).then((function(e){var a=e.data;console.log("Balance set",a),t(d.a.setBalanceSuccess(a))})).catch((function(e){t(d.a.setBalanceError(e))}))}}},j={getBalance:function(e){return e.balance.balance}},m=a(36),_=a(241),O=a.n(_);t.a=function(){var e=Object(i.b)();Object(n.useEffect)((function(){e(Object(m.a)())}),[e]);var t=Object(i.c)(j.getBalance),a=Object(r.h)(),o="/report"===a.pathname||"/report/incomes"===a.pathname;return Object(s.jsx)("div",{className:o?O.a.containerReport:O.a.container,children:Object(s.jsxs)("div",{className:o?O.a.formContainerReport:O.a.formContainer,children:[!o&&Object(s.jsx)("div",{className:O.a.linkContainer,children:Object(s.jsx)(c.b,{to:"/report",className:O.a.reportsLink,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u0442\u0447\u0435\u0442\u0430\u043c"})}),Object(s.jsxs)("form",{className:O.a.balanceContainer,onSubmit:function(t){t.preventDefault();var a=t.target.balance.value.split(" ")[0];e(p.setBalanceOperation(a))},children:[Object(s.jsx)("p",{className:O.a.balanceName,children:"\u0411\u0430\u043b\u0430\u043d\u0441:"}),Object(s.jsxs)("div",{className:O.a.inputButtonContainer,children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{className:o?O.a.inputFieldReport:O.a.inputField,name:"balance",type:"text",defaultValue:parseFloat(t&&"number"===typeof t?t:0).toFixed(2)+" UAH"}),t?"":Object(s.jsx)(b,{})]},t),Object(s.jsx)("button",{type:"submit",className:o?O.a.submitBtnReport:O.a.submitBtn,children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})]})]})]})})}},240:function(e,t,a){e.exports={toolTipContainer:"Tooltip_toolTipContainer__1vT6A",toolTipText:"Tooltip_toolTipText__3iSAf",toolTipTextComment:"Tooltip_toolTipTextComment__1zXu2"}},241:function(e,t,a){e.exports={container:"Balance_container__18cyy",containerReport:"Balance_containerReport__1fWPD",linkContainer:"Balance_linkContainer__36ifY",reportsLink:"Balance_reportsLink__3OUFB",formContainer:"Balance_formContainer__166Lu",formContainerReport:"Balance_formContainerReport__2tGkq Balance_formContainer__166Lu",balanceContainer:"Balance_balanceContainer__21KaI",inputButtonContainer:"Balance_inputButtonContainer__263Bb",balanceName:"Balance_balanceName__3ba82",inputField:"Balance_inputField__11QT5",inputFieldReport:"Balance_inputFieldReport__WsAKa Balance_inputField__11QT5",submitBtn:"Balance_submitBtn__2sROS",submitBtnReport:"Balance_submitBtnReport__30BeX Balance_submitBtn__2sROS"}},318:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r}));var n=function(e){return e.transactions.expenseOfDay},r=function(e){return e.transactions.incomeOfDay},c=function(e){return e.transactions.brief},i=function(e){return e.transactions.brief.currentYear}},319:function(e,t,a){"use strict";a(0);var n=a(9),r=a(25),c=a(558),i=a.n(c),o=a(2);t.a=function(e){var t=e.text,a=e.link,c=a===Object(n.h)().pathname;return Object(o.jsx)(o.Fragment,{children:c?Object(o.jsx)(r.b,{to:a,className:i.a.activeLink,children:t}):Object(o.jsx)(r.b,{to:a,className:i.a.notActiveLink,children:t})})}},323:function(e,t,a){"use strict";var n=a(26),r=a(56),c=a(46),i=a(0),o=a(13),l=a(557),s=a.n(l),b=a(2),u=function(){return Object(b.jsxs)("svg",{className:s.a.icon,width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(b.jsx)("path",{d:"M16.308 4.02333L15.9106 2.832C15.7592 2.37827 15.3361 2.07339 14.8579 2.07339H11.5177V0.985886C11.5177 0.442337 11.0758 0 10.5324 0H7.47348C6.93021 0 6.48815 0.442337 6.48815 0.985886V2.07339H3.14803C2.66971 2.07339 2.2466 2.37827 2.09526 2.832L1.69783 4.02333C1.60733 4.29456 1.6532 4.59489 1.82033 4.82684C1.98746 5.05879 2.25786 5.19736 2.54378 5.19736H2.9592L3.87354 16.5038C3.94152 17.3427 4.65343 18 5.49457 18H12.6968C13.5378 18 14.2499 17.3427 14.3177 16.5037L15.232 5.19736H15.4621C15.748 5.19736 16.0184 5.05879 16.1855 4.82698C16.3526 4.59503 16.3985 4.29456 16.308 4.02333ZM7.54284 1.05469H10.463V2.07339H7.54284V1.05469ZM13.2664 16.4187C13.2425 16.7141 12.9923 16.9453 12.6968 16.9453H5.49457C5.19904 16.9453 4.94883 16.7141 4.92493 16.4187L4.01732 5.19736H14.1739L13.2664 16.4187ZM2.76996 4.14267L3.09584 3.16571C3.10326 3.14319 3.12427 3.12808 3.14803 3.12808H14.8579C14.8817 3.12808 14.9026 3.14319 14.9101 3.16571L15.236 4.14267H2.76996Z",fill:"#52555F"}),Object(b.jsx)("path",{d:"M11.5845 16.3813C11.5938 16.3819 11.6031 16.382 11.6124 16.382C11.891 16.382 12.1239 16.1637 12.1385 15.8821L12.6337 6.37593C12.6488 6.08507 12.4252 5.83691 12.1345 5.82181C11.843 5.80629 11.5956 6.03013 11.5804 6.321L11.0853 15.8272C11.0702 16.1181 11.2936 16.3662 11.5845 16.3813Z",fill:"#52555F"}),Object(b.jsx)("path",{d:"M5.89105 15.8833C5.90643 16.1644 6.13906 16.3819 6.41715 16.3819C6.42677 16.3819 6.43665 16.3816 6.4464 16.3811C6.73713 16.3653 6.96001 16.1167 6.94422 15.8259L6.42553 6.31967C6.40974 6.0288 6.16117 5.80592 5.87031 5.82185C5.57959 5.83764 5.3567 6.08621 5.37249 6.37707L5.89105 15.8833Z",fill:"#52555F"}),Object(b.jsx)("path",{d:"M9.00891 16.3819C9.30019 16.3819 9.53625 16.1459 9.53625 15.8546V6.34839C9.53625 6.05711 9.30019 5.82104 9.00891 5.82104C8.71764 5.82104 8.48157 6.05711 8.48157 6.34839V15.8546C8.48157 16.1459 8.71764 16.3819 9.00891 16.3819Z",fill:"#52555F"})]}),Object(b.jsx)("defs",{children:Object(b.jsx)("clipPath",{id:"clip0",children:Object(b.jsx)("rect",{width:"18",height:"18",fill:"white"})})})]})},d=a(62),p=a(208),j=a.n(p),m=function(e){var t=e.item,a=Object(o.b)(),n=Object(i.useState)(!1),l=Object(r.a)(n,2),s=l[0],p=l[1],m=function(e){p(!s)};return Object(b.jsxs)("li",{className:j.a.mobileListItem,children:[Object(b.jsxs)("div",{className:j.a.listWrapperItem,children:[Object(b.jsx)("p",{className:j.a.textDescMob,children:t.description}),Object(b.jsxs)("div",{className:j.a.listWrapperItem2,children:[Object(b.jsx)("p",{className:j.a.dateMob,children:t.date}),Object(b.jsx)("p",{className:j.a.categoryMob,children:t.category})]})]}),Object(b.jsxs)("p",{className:"expense"===t.transactionType?j.a.amountMob:j.a.amountMobGreen,children:["expense"===t.transactionType?-t.amount:t.amount,".00 \u0433\u0440\u043d."]}),Object(b.jsxs)("div",{className:j.a.btnWrapper,children:[Object(b.jsx)("button",{className:j.a.deleteBtn,type:"button",onClick:function(){m()},children:Object(b.jsx)(u,{})}),s&&Object(b.jsx)(d.a,{text:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",onCancel:m,onSubmit:function(){a(c.a.deleteTransaction(t._id))}})]})]},t._id)},_=a(9),O=a(318),f=function(e){var t=e.item,a=Object(o.b)(),n=Object(i.useState)(!1),l=Object(r.a)(n,2),s=l[0],p=l[1],m=function(e){p(!s)};return Object(b.jsxs)("tr",{className:j.a.tableTr,children:[Object(b.jsx)("td",{className:j.a.tableDate,children:t.date}),Object(b.jsx)("td",{className:j.a.tableDescription,children:t.description}),Object(b.jsx)("td",{className:j.a.tableCategory,children:t.category}),Object(b.jsxs)("td",{className:j.a.tableAmount,children:[-t.amount,".00 \u0433\u0440\u043d."]}),Object(b.jsxs)("td",{className:j.a.tableDelete,children:[Object(b.jsx)("button",{className:j.a.deleteBtn,type:"button",onClick:function(){m()},children:Object(b.jsx)(u,{})}),s&&Object(b.jsx)(d.a,{text:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",onCancel:m,onSubmit:function(){a(c.a.deleteTransaction(t._id))}})]})]},t._id)},C=function(e){var t=e.item,a=Object(o.b)(),n=Object(i.useState)(!1),l=Object(r.a)(n,2),s=l[0],p=l[1],m=function(e){p(!s)};return Object(b.jsxs)("tr",{className:j.a.tableTr,children:[Object(b.jsx)("td",{className:j.a.tableDate,children:t.date}),Object(b.jsx)("td",{className:j.a.tableDescription,children:t.description}),Object(b.jsx)("td",{className:j.a.tableCategory,children:t.category}),Object(b.jsxs)("td",{className:j.a.tableAmountIncome,children:[t.amount,".00 \u0433\u0440\u043d."]}),Object(b.jsxs)("td",{className:j.a.tableDelete,children:[Object(b.jsx)("button",{className:j.a.deleteBtn,type:"button",onClick:function(){m()},children:Object(b.jsx)(u,{})}),s&&Object(b.jsx)(d.a,{text:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",onCancel:m,onSubmit:function(){a(c.a.deleteTransaction(t._id))}})]})]},t._id)};t.a=function(){var e=Object(o.c)(O.b),t=Object(o.c)(O.c),a=[].concat(Object(n.a)(e),Object(n.a)(t)),r=Object(_.h)().pathname;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:j.a.tablDeskWrapper,children:Object(b.jsxs)("table",{className:j.a.table,children:[Object(b.jsx)("thead",{className:j.a.tableHead,children:Object(b.jsxs)("tr",{className:j.a.tableHeadTr,children:[Object(b.jsx)("th",{className:j.a.tableTransThDate,children:"\u0414\u0430\u0442\u0430"}),Object(b.jsx)("th",{className:j.a.tableTransThDescr,children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(b.jsx)("th",{className:j.a.tableTransThCategory,children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"}),Object(b.jsx)("th",{className:j.a.tableTransThAmount,children:"\u0421\u0443\u043c\u043c\u0430"})]})}),Object(b.jsx)("tbody",{className:j.a.tableBody,children:"/expense"===r?e.map((function(e){return Object(b.jsx)(f,{item:e},e._id)})):t.map((function(e){return Object(b.jsx)(C,{item:e},e._id)}))})]})}),Object(b.jsx)("div",{className:j.a.mobileWrapper,children:Object(b.jsx)("div",{className:j.a.listWrapper,children:Object(b.jsx)("ul",{className:j.a.mobileList,children:a.map((function(e){return Object(b.jsx)(m,{tableTransaction:a,item:e},e._id)}))})})})]})}},324:function(e,t,a){"use strict";var n,r,c,i,o,l,s,b=a(3),u=a(10),d=a(56),p=a(46),j=a(509),m=a.n(j),_=a(12),O=a.n(_),f=a(0),C=a(13),h=a(24),x=a(61),T=["title","titleId"];function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},g.apply(this,arguments)}function v(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function y(e,t){var a=e.title,b=e.titleId,u=v(e,T);return f.createElement("svg",g({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":b},u),a?f.createElement("title",{id:b},a):null,n||(n=f.createElement("path",{d:"M17.0312 0H2.96875C1.99949 0 1.21094 0.788555 1.21094 1.75781V18.2422C1.21094 19.2114 1.99949 20 2.96875 20H17.0312C18.0005 20 18.7891 19.2114 18.7891 18.2422V1.75781C18.7891 0.788555 18.0005 0 17.0312 0ZM17.6172 18.2422C17.6172 18.5653 17.3543 18.8281 17.0312 18.8281H2.96875C2.64566 18.8281 2.38281 18.5653 2.38281 18.2422V1.75781C2.38281 1.43473 2.64566 1.17188 2.96875 1.17188H17.0312C17.3543 1.17188 17.6172 1.43473 17.6172 1.75781V18.2422Z",fill:"#52555F"})),r||(r=f.createElement("path",{d:"M15.8594 2.34375H4.14062C3.81703 2.34375 3.55469 2.60609 3.55469 2.92969V7.69531C3.55469 8.01891 3.81703 8.28125 4.14062 8.28125H15.8594C16.183 8.28125 16.4453 8.01891 16.4453 7.69531V2.92969C16.4453 2.60609 16.183 2.34375 15.8594 2.34375ZM15.2734 7.10938H4.72656V3.51562H15.2734V7.10938Z",fill:"#52555F"})),c||(c=f.createElement("path",{d:"M6.48438 9.45312H4.14062C3.81703 9.45312 3.55469 9.71547 3.55469 10.0391V12.3828C3.55469 12.7064 3.81703 12.9688 4.14062 12.9688H6.48438C6.80797 12.9688 7.07031 12.7064 7.07031 12.3828V10.0391C7.07031 9.71547 6.80797 9.45312 6.48438 9.45312ZM5.89844 11.7969H4.72656V10.625H5.89844V11.7969Z",fill:"#52555F"})),i||(i=f.createElement("path",{d:"M6.48438 14.1406H4.14062C3.81703 14.1406 3.55469 14.403 3.55469 14.7266V17.0703C3.55469 17.3939 3.81703 17.6562 4.14062 17.6562H6.48438C6.80797 17.6562 7.07031 17.3939 7.07031 17.0703V14.7266C7.07031 14.403 6.80797 14.1406 6.48438 14.1406ZM5.89844 16.4844H4.72656V15.3125H5.89844V16.4844Z",fill:"#52555F"})),o||(o=f.createElement("path",{d:"M11.1719 9.45312H8.82812C8.50453 9.45312 8.24219 9.71547 8.24219 10.0391V12.3828C8.24219 12.7064 8.50453 12.9688 8.82812 12.9688H11.1719C11.4955 12.9688 11.7578 12.7064 11.7578 12.3828V10.0391C11.7578 9.71547 11.4955 9.45312 11.1719 9.45312ZM10.5859 11.7969H9.41406V10.625H10.5859V11.7969Z",fill:"#52555F"})),l||(l=f.createElement("path",{d:"M11.1719 14.1406H8.82812C8.50453 14.1406 8.24219 14.403 8.24219 14.7266V17.0703C8.24219 17.3939 8.50453 17.6562 8.82812 17.6562H11.1719C11.4955 17.6562 11.7578 17.3939 11.7578 17.0703V14.7266C11.7578 14.403 11.4955 14.1406 11.1719 14.1406ZM10.5859 16.4844H9.41406V15.3125H10.5859V16.4844Z",fill:"#52555F"})),s||(s=f.createElement("path",{d:"M15.8594 9.45312H13.5156C13.192 9.45312 12.9297 9.71547 12.9297 10.0391V17.0703C12.9297 17.3939 13.192 17.6562 13.5156 17.6562H15.8594C16.183 17.6562 16.4453 17.3939 16.4453 17.0703V10.0391C16.4453 9.71547 16.183 9.45312 15.8594 9.45312ZM15.2734 16.4844H14.1016V10.625H15.2734V16.4844Z",fill:"#52555F"})))}var V,H=f.forwardRef(y),N=(a.p,["title","titleId"]);function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},w.apply(this,arguments)}function B(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function L(e,t){var a=e.title,n=e.titleId,r=B(e,N);return f.createElement("svg",w({width:12,height:7,viewBox:"0 0 12 7",fill:"#C7CCDC",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),a?f.createElement("title",{id:n},a):null,V||(V=f.createElement("path",{d:"M1 1L6 5L11 1",stroke:"#C7CCDC",strokeWidth:2})))}var M=f.forwardRef(L),F=(a.p,a(9)),k=a(51),D=a(2);t.a=function(){var e=Object(C.c)(h.a),t=Object(C.c)(x.a),a=Object(C.c)(k.b),n=Object(F.i)().transType,r=Object(f.useState)({description:"",amount:"",category:"",transactionType:""}),c=Object(d.a)(r,2),i=c[0],o=c[1],l=Object(f.useState)(null),s=Object(d.a)(l,2),j=(s[0],s[1]),_=Object(f.useState)([]),T=Object(d.a)(_,2),g=T[0],v=T[1],y=Object(C.b)(),V=function(e){return o((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(b.a)({},e.target.name,e.target.value))}))},N=Object(F.g)(),w=Object(f.useRef)(null),B=Object(f.useState)(""),L=Object(d.a)(B,2),E=L[0],Z=L[1];document.addEventListener("mousedown",(function(e){w.current&&E&&!w.current.contains(e.target)&&Z(!1)}));return Object(D.jsxs)("div",{className:m.a.product,children:[Object(D.jsx)("button",{type:"button",className:m.a.arrowBack,onClick:function(){N.push("/main")},children:Object(D.jsx)("svg",{width:"18",height:"12",viewBox:"0 0 18 12",fill:"#FF751D",xmlns:"http://www.w3.org/2000/svg",children:Object(D.jsx)("path",{d:"M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z",fill:"#FF751D"})})}),Object(D.jsxs)("form",{ref:w,className:m.a.productForm,onSubmit:function(n){n.preventDefault(),O.a.defaults.headers.common.Authorization="Bearer ".concat(e),y(p.a.addTransaction(t,i.description,i.amount,i.category,i.transactionType)),o({description:"",amount:"",category:""}),v([]),j(null),a&&N.push("/main")},children:[Object(D.jsx)("input",{placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430",type:"text",name:"description",className:m.a.productDescription,autoComplete:"off",autoFocus:!0,value:i.description,onChange:V,required:!0}),Object(D.jsx)("input",{placeholder:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0442\u043e\u0432\u0430\u0440\u0430",type:"text",name:"category",className:m.a.productCategory,autoComplete:"off",autoFocus:!0,value:i.category,onChange:function(){},onClick:function(){O.a.get("https://kapusta-smart-finance.herokuapp.com/api/v1/categories/".concat(n)).then((function(e){var t=e.data;v((function(){return t.data.result}))})).catch((function(e){v([]),j(null)}))},required:!0}),Object(D.jsx)(M,{className:m.a.arrowDown}),Object(D.jsx)("ul",{className:m.a.productResultList,id:"categories",children:!!g.length&&g.map((function(e){return Object(D.jsx)("li",{className:m.a.productResultListItem,id:e._id,onClick:function(){j(e),o((function(t){return Object(u.a)(Object(u.a)({},t),{},{category:e.category,transactionType:e.transactionType})})),v([])},children:e.category},e._id)}))}),Object(D.jsxs)("div",{className:m.a.productAmountLabelBox,children:[Object(D.jsx)("input",{className:m.a.productAmountInput,placeholder:"0.00",type:"number",name:"amount",value:i.amount,onChange:V,required:!0}),Object(D.jsx)("div",{className:m.a.calculatorLogoContainer,children:Object(D.jsx)(H,{className:m.a.calculatorLogo})})]}),Object(D.jsx)("br",{}),Object(D.jsx)("button",{type:"submit",className:m.a.btnSubmit,children:"\u0412\u0432\u043e\u0434"}),Object(D.jsx)("button",{className:m.a.btnClear,type:"button",onClick:function(){o({description:"",amount:"",category:""})},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})]})]})}},325:function(e,t,a){"use strict";var n,r,c,i,o,l,s,b=a(512),u=a.n(b),d=a(0),p=["title","titleId"];function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},j.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function _(e,t){var a=e.title,b=e.titleId,u=m(e,p);return d.createElement("svg",j({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":b},u),a?d.createElement("title",{id:b},a):null,n||(n=d.createElement("path",{d:"M17.4754 2.0669H16.1634V1.74585C16.1634 1.42226 15.9011 1.15991 15.5775 1.15991C15.2539 1.15991 14.9916 1.42226 14.9916 1.74585V2.0669H13.3747V1.74585C13.3747 1.42226 13.1123 1.15991 12.7887 1.15991C12.4652 1.15991 12.2028 1.42226 12.2028 1.74585V2.0669H10.5859V1.74585C10.5859 1.42226 10.3236 1.15991 10 1.15991C9.67641 1.15991 9.41406 1.42226 9.41406 1.74585V2.0669H7.79719V1.74585C7.79719 1.42226 7.53484 1.15991 7.21125 1.15991C6.88766 1.15991 6.62531 1.42226 6.62531 1.74585V2.0669H5.00844V1.74585C5.00844 1.42226 4.74609 1.15991 4.4225 1.15991C4.09891 1.15991 3.83656 1.42226 3.83656 1.74585V2.0669H2.52461C1.13254 2.0669 0 3.19944 0 4.59147V16.3155C0 17.7076 1.13254 18.8401 2.52461 18.8401H17.4754C18.8675 18.8401 20 17.7075 20 16.3155V4.59147C20 3.19944 18.8675 2.0669 17.4754 2.0669ZM18.8281 16.3155C18.8281 17.0614 18.2213 17.6682 17.4754 17.6682H2.52461C1.77871 17.6682 1.17188 17.0614 1.17188 16.3155V6.73233H18.8281V16.3155ZM18.8281 5.56046H1.17188V4.59147C1.17188 3.84562 1.77871 3.23878 2.52461 3.23878H3.83656V3.4653C3.83656 3.7889 4.09891 4.05124 4.4225 4.05124C4.74609 4.05124 5.00844 3.7889 5.00844 3.4653V3.23878H6.62531V3.4653C6.62531 3.7889 6.88766 4.05124 7.21125 4.05124C7.53484 4.05124 7.79719 3.7889 7.79719 3.4653V3.23878H9.41406V3.4653C9.41406 3.7889 9.67641 4.05124 10 4.05124C10.3236 4.05124 10.5859 3.7889 10.5859 3.4653V3.23878H12.2028V3.4653C12.2028 3.7889 12.4652 4.05124 12.7887 4.05124C13.1123 4.05124 13.3747 3.7889 13.3747 3.4653V3.23878H14.9916V3.4653C14.9916 3.7889 15.2539 4.05124 15.5775 4.05124C15.9011 4.05124 16.1634 3.7889 16.1634 3.4653V3.23878H17.4754C18.2213 3.23878 18.8281 3.84562 18.8281 4.59147V5.56046Z",fill:"#52555F"})),r||(r=d.createElement("path",{d:"M6.5318 7.98169H4.21973C3.89613 7.98169 3.63379 8.24403 3.63379 8.56762V10.9598C3.63379 11.2834 3.89613 11.5457 4.21973 11.5457H6.5318C6.85539 11.5457 7.11773 11.2834 7.11773 10.9598V8.56762C7.11773 8.24403 6.85543 7.98169 6.5318 7.98169ZM5.94586 10.3738H4.80566V9.15356H5.94586V10.3738Z",fill:"#52555F"})),c||(c=d.createElement("path",{d:"M11.1561 7.98169H8.84399C8.5204 7.98169 8.25806 8.24403 8.25806 8.56762V10.9598C8.25806 11.2834 8.5204 11.5457 8.84399 11.5457H11.1561C11.4797 11.5457 11.742 11.2834 11.742 10.9598V8.56762C11.742 8.24403 11.4797 7.98169 11.1561 7.98169ZM10.5701 10.3738H9.42993V9.15356H10.5701V10.3738Z",fill:"#52555F"})),i||(i=d.createElement("path",{d:"M15.7802 7.98169H13.4681C13.1445 7.98169 12.8822 8.24403 12.8822 8.56762V10.9598C12.8822 11.2834 13.1445 11.5457 13.4681 11.5457H15.7802C16.1038 11.5457 16.3661 11.2834 16.3661 10.9598V8.56762C16.3661 8.24403 16.1038 7.98169 15.7802 7.98169ZM15.1943 10.3738H14.0541V9.15356H15.1943V10.3738Z",fill:"#52555F"})),o||(o=d.createElement("path",{d:"M6.5318 12.5256H4.21973C3.89613 12.5256 3.63379 12.788 3.63379 13.1116V15.5037C3.63379 15.8273 3.89613 16.0897 4.21973 16.0897H6.5318C6.85539 16.0897 7.11773 15.8273 7.11773 15.5037V13.1116C7.11773 12.788 6.85543 12.5256 6.5318 12.5256ZM5.94586 14.9178H4.80566V13.6975H5.94586V14.9178Z",fill:"#52555F"})),l||(l=d.createElement("path",{d:"M11.1561 12.5256H8.84399C8.5204 12.5256 8.25806 12.788 8.25806 13.1116V15.5037C8.25806 15.8273 8.5204 16.0897 8.84399 16.0897H11.1561C11.4797 16.0897 11.742 15.8273 11.742 15.5037V13.1116C11.742 12.788 11.4797 12.5256 11.1561 12.5256ZM10.5701 14.9178H9.42993V13.6975H10.5701V14.9178Z",fill:"#52555F"})),s||(s=d.createElement("path",{d:"M15.7802 12.5256H13.4681C13.1445 12.5256 12.8822 12.788 12.8822 13.1116V15.5037C12.8822 15.8273 13.1445 16.0897 13.4681 16.0897H15.7802C16.1038 16.0897 16.3661 15.8273 16.3661 15.5037V13.1116C16.3661 12.788 16.1038 12.5256 15.7802 12.5256ZM15.1943 14.9178H14.0541V13.6975H15.1943V14.9178Z",fill:"#52555F"})))}var O=d.forwardRef(_),f=(a.p,a(510),a(511)),C=a.n(f),h=a(13),x=a(64),T=a(61),g=a(2);t.a=function(){var e=Object(h.b)(),t=Object(h.c)(T.a);return Object(g.jsxs)("div",{className:C.a.box,children:[Object(g.jsx)("div",{className:C.a.datePickerLogo,children:Object(g.jsx)(O,{})}),Object(g.jsx)(u.a,{className:C.a.datePicker,selected:t?new Date(t.split(".").reverse().join("-")):new Date,dateFormat:"dd.MM.yyyy",onChange:function(t){e(Object(x.a)(t.toISOString().slice(0,10).split("-").reverse().join(".")))}})]})}},509:function(e,t,a){e.exports={product:"EnterForm_product__1lLxh",productDescription:"EnterForm_productDescription__2mtPo",productCategory:"EnterForm_productCategory__1tW5y",productResultList:"EnterForm_productResultList__1zcVy",productResultListItem:"EnterForm_productResultListItem__4gl6O",productAmountInput:"EnterForm_productAmountInput__VIgPx",productForm:"EnterForm_productForm__2f6Lr",arrowDown:"EnterForm_arrowDown__3qOlq",productAmountLabelBox:"EnterForm_productAmountLabelBox__VQ-Lz",calculatorLogoContainer:"EnterForm_calculatorLogoContainer__luAjk",btnSubmit:"EnterForm_btnSubmit__3YBQX",btnClear:"EnterForm_btnClear__39YY2",arrowBack:"EnterForm_arrowBack__1SexK"}},511:function(e,t,a){e.exports={box:"Calendar_box__1RwOQ",datePicker:"Calendar_datePicker__3QK_3",datePickerLogo:"Calendar_datePickerLogo__190Id"}},557:function(e,t,a){e.exports={icon:"IconDelete_icon__2DLfN"}},558:function(e,t,a){e.exports={notActiveLink:"BasicFieldTab_notActiveLink__3AuSw",activeLink:"BasicFieldTab_activeLink__3nrgt"}}}]);
//# sourceMappingURL=2.f577a9ca.chunk.js.map