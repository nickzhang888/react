(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"+n12":function(e,t,a){"use strict";a.d(t,"c",function(){return l}),a.d(t,"b",function(){return d}),a.d(t,"e",function(){return s}),a.d(t,"h",function(){return u}),a.d(t,"a",function(){return m}),a.d(t,"g",function(){return h}),a.d(t,"f",function(){return f}),a.d(t,"d",function(){return p});a("p0pE"),a("gWZ8"),a("Pwec");var n=a("CtXQ"),r=a("q1tI"),i=a.n(r),o=(a("Qyje"),a("wd/R"),a("EUZL"),a("EIip")),c=a.n(o);function l(e,t){if(isNaN(parseFloat(e)))return!1;if(t){var a=Math.pow(10,t);e=(Math.round(e*a)/a).toString();var n=e.indexOf(".");n<0&&(n=e.length,e+=".");while(e.length<=n+t)e+="0"}var r=e.toString().split(".");return r[0]=r[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),r.join(".")}var d=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t="object"==typeof e?e.target.value.toString().split("."):e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")},s=function(e){var t=e.target.value;return t&&t.includes(",")&&(t=t.split(",").join("")),t},u=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"\u5fc5\u586b\u9879";return{required:!0,validator:function(n,r,i){var o,c,l;l=r.includes(",")?r.split(",").join(""):r,l?isNaN(l)?i("\u8bf7\u8f93\u5165\u6570\u5b57"):l<=0?i("".concat(a,"\u9700\u5927\u4e8e0")):(l.includes(".")?(o=l.split(".")[0].length,c=l.split(".")[1].length):o=l.length,(o>e||c>t)&&i("\u6574\u6570\u6700\u591a".concat(e,",\u5c0f\u6570\u6700\u591a").concat(t))):i("\u8bf7\u8f93\u5165".concat(a)),i()}}};function m(e,t,a,r,o,c){return i.a.createElement("a",{onClick:c},e,i.a.createElement(n["a"],{type:"asc"==r[o].order?"caret-up":"desc"==r[o].order?"caret-down":""}),a.includes(t)?a.indexOf(t)+1:"")}function h(e,t,a,n){var r=t.find(function(t){return t.columnKey==e});r&&(""==r.order?r.order="asc":"asc"==r.order?r.order="desc":r.order="");var i=a.findIndex(function(e){return e.split(" ")[0]==r.columnKey});i>-1?(a.splice(i,1,"".concat(r.columnKey," ").concat(r.order)),n.splice(i,1,"".concat(r.columnKey))):(a.push("".concat(r.columnKey," ").concat(r.order)),n.push("".concat(r.columnKey)));var o=a.findIndex(function(e){return""==e.split(" ")[1]});o>-1&&(a.splice(o,1),n.splice(o,1))}function f(e,t){t=t||"sheet1";var a={SheetNames:[t],Sheets:{}};a.Sheets[t]=e;var n={bookType:"xlsx",bookSST:!1,type:"binary"},r=c.a.write(a,n),i=new Blob([o(r)],{type:"application/octet-stream"});function o(e){for(var t=new ArrayBuffer(e.length),a=new Uint8Array(t),n=0;n!=e.length;++n)a[n]=255&e.charCodeAt(n);return t}return i}function p(e,t){var a=URL.createObjectURL(e),n=document.createElement("a");n.href=a,n.download=t||"",document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(function(){URL.revokeObjectURL(e)},200)}},10:function(e,t){},4:function(e,t){},5:function(e,t){},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},jGZt:function(e,t,a){"use strict";a.r(t);a("IzEo");var n,r,i,o,c=a("bx4M"),l=(a("2qtc"),a("kLXV")),d=(a("g9YV"),a("wCAj")),s=(a("+L6B"),a("2/Rp")),u=(a("P2fV"),a("NJEC")),m=(a("giR+"),a("fyUT")),h=(a("5NDa"),a("5rEg")),f=(a("sRBo"),a("kaz8")),p=(a("miYZ"),a("tsqr")),y=a("gWZ8"),g=a.n(y),v=a("2Taf"),b=a.n(v),E=a("vZ4D"),k=a.n(E),w=a("l4Ni"),x=a.n(w),C=a("ujKo"),S=a.n(C),j=a("MhPg"),I=a.n(j),O=a("p0pE"),D=a.n(O),K=(a("OaEy"),a("2fM7")),A=(a("y8nQ"),a("Vl3Y")),T=a("q1tI"),V=a.n(T),q=a("MuoO"),N=a("vlZx"),z=a.n(N),L=a("+n12"),B=A["a"].Item,H=K["a"].Option,R=(n=A["a"].create(),r=Object(q["connect"])(function(e){var t=e.loading,a=e.batchTable;return D()({},a,{loading:t.models.batchTable})}),n(i=r((o=function(e){function t(e){var a;return b()(this,t),a=x()(this,S()(t).call(this,e)),a.handleTableChange=function(e,t,n){var r=a.props.dispatch,i=a.state,o=(i.formValues,i.sortArr),c={page:e.current,size:e.pageSize};r({type:"batchTable/fetch",payload:D()({},c,{sort:o})}).then(function(){a.setState({formValues:c})})},a.handleDelete=function(e){var t=g()(a.state.addData);a.setState({addData:t.filter(function(t){return t.key!==e})})},a.handleAdd=function(){var e=a.state,t=e.count,n=e.addData,r={key:t,name:"",age:"",sex:"",address:"",mobile:"",passed:!1};a.setState({addData:[].concat(g()(n),[r]),count:t+1})},a.handleEdit=function(e,t){var n=[];n.push(e),n.forEach(function(e,t){e["key"]=t}),a.setState({flag:t,visible:!0,addData:n,count:n[n.length-1].key+1})},a.handleOk=function(){for(var e=a.props,t=e.form,n=t.getFieldsValue,r=t.validateFields,i=e.dispatch,o=a.state,c=o.addData,l=o.flag,d=c[0].id,s=[],u=c[c.length-1].key+1,m=0;m<u;m++)void 0!=n(["name ".concat(m)])["name ".concat(m)]&&s.push(n(["name ".concat(m),"age ".concat(m),"sex ".concat(m),"mobile ".concat(m),"address ".concat(m),"passed ".concat(m)]));var h=[];s.forEach(function(e){var t={};for(var a in e)t[a.split(" ")[0]]=e[a];h.push(t)}),console.info(h),r(function(e,t){e||("edit"==l?p["a"].success("\u4fee\u6539\u6210\u529f"):p["a"].success("\u65b0\u589e\u6210\u529f"),i({type:"edit"==l?"batchTable/updateList":"batchTable/addList",payload:D()({},h[0],{id:d})}),a.setState({addData:[],visible:!1,flag:""}))})},a.handleClickHeader=function(e){var t=a.props.dispatch,n=a.state,r=n.sortColumns,i=n.sortArr,o=n.sortArrKey;Object(L["g"])(e,r,i,o),a.setState({sortColumns:r,sortArr:i,sortArrKey:o}),t({type:"batchTable/fetch",payload:{sort:i}})},a.downloadExcel=function(){var e=a.props.listData.data,t={},n=[];if(e)for(var r in e){var i={"\u59d3\u540d":e[r].name,"\u5e74\u9f84":e[r].age,"\u6027\u522b":e[r].sex,"\u624b\u673a\u53f7\u7801":"\t".concat(e[r].mobile),"\u4f4f\u5740":e[r].address};n.push(i)}t.fileName="\u4e2a\u4eba\u4fe1\u606f",t.datas=[{sheetData:n,sheetName:"\u4e2a\u4eba\u4fe1\u606f",sheetFilter:["\u59d3\u540d","\u5e74\u9f84","\u6027\u522b","\u624b\u673a\u53f7\u7801","\u4f4f\u5740"],sheetHeader:["\u59d3\u540d","\u5e74\u9f84","\u6027\u522b","\u624b\u673a\u53f7\u7801","\u4f4f\u5740"],columnWidths:[8,8,8,8,8]}];var o=new z.a(t);o.saveExcel()},a.state={visible:!1,formValues:{},addData:[],sortArr:[],sortArrKey:[],sortColumns:[{columnKey:"name",order:""},{columnKey:"age",order:""},{columnKey:"sex",order:""},{columnKey:"mobile",order:""},{columnKey:"address",order:""},{columnKey:"passed",order:""}],count:0},a}return I()(t,e),k()(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"batchTable/fetch",payload:{}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.form.getFieldDecorator,n=t.listData,r=n.data,i=n.current,o=n.pageSize,p=n.total,y=t.loading,g=this.state,v=g.addData,b=g.sortColumns,E=(g.sortArr,g.sortArrKey),k=g.flag,w={current:i,pageSize:o,total:p,pageSizeOptions:["10","30","50"],showSizeChanger:!0,showTotal:function(e){return"\u5171".concat(e,"\u6761\u6570\u636e")}},x=[{title:Object(L["a"])("\u59d3\u540d","name",E,b,0,function(){return e.handleClickHeader("name")}),dataIndex:"name",width:"14%"},{title:Object(L["a"])("\u5e74\u9f84","age",E,b,1,function(){return e.handleClickHeader("age")}),dataIndex:"age",width:"14%"},{title:Object(L["a"])("\u6027\u522b","sex",E,b,2,function(){return e.handleClickHeader("sex")}),dataIndex:"sex",width:"14%"},{title:Object(L["a"])("\u624b\u673a\u53f7\u7801","mobile",E,b,3,function(){return e.handleClickHeader("mobile")}),dataIndex:"mobile",width:"15%"},{title:Object(L["a"])("\u5730\u5740","address",E,b,4,function(){return e.handleClickHeader("address")}),dataIndex:"address",width:"14%"},{title:Object(L["a"])("\u662f\u5426\u5408\u683c","passed",E,b,5,function(){return e.handleClickHeader("passed")}),dataIndex:"passed",width:"14%",render:function(e){return V.a.createElement(f["a"],{checked:e})}},{title:"\u64cd\u4f5c",dataIndex:"operation",width:"14%",render:function(t,a){return V.a.createElement("a",{href:"javascript:;",onClick:function(){return e.handleEdit(a,"edit")}},"\u4fee\u6539")}}],C=[{title:"\u59d3\u540d",dataIndex:"name",width:"15%",render:function(e,t,n){return V.a.createElement(B,{style:{margin:0}},a("name ".concat(t.key),{initialValue:"edit"==k?"".concat(v[n].name):"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u59d3\u540d"}]})(V.a.createElement(h["a"],{style:{width:"100%"}})))}},{title:"\u5e74\u9f84",dataIndex:"age",width:"13%",render:function(e,t,n){return V.a.createElement(B,{style:{margin:0}},a("age ".concat(t.key),{initialValue:"edit"==k?"".concat(v[n].age):"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5e74\u9f84"}]})(V.a.createElement(m["a"],{min:0})))}},{title:"\u6027\u522b",dataIndex:"sex",width:"12%",render:function(e,t,n){return V.a.createElement(B,{style:{margin:0}},a("sex ".concat(t.key),{initialValue:"edit"==k?"".concat(v[n].sex):"",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6027\u522b"}]})(V.a.createElement(K["a"],{style:{width:"100%"}},V.a.createElement(H,{key:"1",value:"\u7537"},"\u7537"),V.a.createElement(H,{key:"2",value:"\u5973"},"\u5973"))))}},{title:"\u624b\u673a\u53f7\u7801",dataIndex:"mobile",width:"15%",render:function(e,t,n){return V.a.createElement(B,{style:{margin:0}},a("mobile ".concat(t.key),{initialValue:"edit"==k?"".concat(v[n].mobile):"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801",pattern:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/}]})(V.a.createElement(h["a"],null)))}},{title:"\u4f4f\u5740",dataIndex:"address",width:"15%",render:function(e,t,n){return V.a.createElement(B,{style:{margin:0}},a("address ".concat(t.key),{initialValue:"edit"==k?"".concat(v[n].address):"",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5730\u5740"}]})(V.a.createElement(K["a"],{style:{width:"100%"}},V.a.createElement(H,{key:"1",value:"\u5357\u4eac\u5e02"},"\u5357\u4eac\u5e02"),V.a.createElement(H,{key:"2",value:"\u5317\u4eac\u5e02"},"\u5317\u4eac\u5e02"),V.a.createElement(H,{key:"3",value:"\u4e0a\u6d77\u5e02"},"\u4e0a\u6d77\u5e02"))))}},{title:"\u662f\u5426\u5408\u683c",dataIndex:"passed",width:"13%",render:function(e,t,n){return V.a.createElement(B,{style:{margin:0}},a("passed ".concat(t.key),{valuePropName:"checked",initialValue:"edit"==k&&v[n].passed,rules:[{required:!0,message:"\u8bf7\u52fe\u9009"}]})(V.a.createElement(f["a"],null)))}},{title:"\u64cd\u4f5c",dataIndex:"operation",render:function(t,a){return V.a.createElement(u["a"],{title:"\u786e\u8ba4\u5220\u9664?",onConfirm:function(){return e.handleDelete(a.key)}},V.a.createElement("a",{href:"javascript:;"},"\u5220\u9664"))}}];return V.a.createElement(c["a"],{bordered:!1},V.a.createElement(s["a"],{onClick:function(){return e.setState({visible:!0})},icon:"plus",type:"primary",style:{marginBottom:16}},"\u65b0\u589e"),"\xa0\xa0",V.a.createElement(s["a"],{onClick:this.downloadExcel,type:"primary",ghost:!0,icon:"download"},"\u5bfc\u51fa"),V.a.createElement(d["a"],{dataSource:r,columns:x,scroll:{y:"calc(100vh - 400px)"},rowKey:"id",loading:y,pagination:w,onChange:this.handleTableChange}),V.a.createElement(l["a"],{width:"70vw",destroyOnClose:!0,title:"edit"==k?"\u4fee\u6539":"\u65b0\u589e",style:{top:24},visible:this.state.visible,onOk:this.handleOk,onCancel:function(){e.setState({visible:!1,flag:"",addData:[]})}},V.a.createElement(s["a"],{onClick:this.handleAdd,type:"primary",ghost:!0,icon:"plus",style:{marginBottom:16}},"\u65b0\u589e"),V.a.createElement(d["a"],{dataSource:v,columns:C,scroll:{y:"calc(100vh - 380px)"},size:"middle"})))}}]),t}(V.a.Component),i=o))||i)||i);t["default"]=R}}]);