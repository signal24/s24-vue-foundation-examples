(function(e){function t(t){for(var s,l,o=t[0],i=t[1],c=t[2],u=0,m=[];u<o.length;u++)l=o[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&m.push(r[l][0]),r[l]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);d&&d(t);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(s=!1)}s&&(n.splice(t--,1),e=l(l.s=a[0]))}return e}var s={},r={app:0},n=[];function l(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=s,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(a,s,function(t){return e[t]}.bind(null,s));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=i;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"02fd":function(e,t,a){},"117d":function(e,t,a){"use strict";a("b91f")},1355:function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("HelloWorld"),e._l(e.rootInjections,(function(e,t){return a(e,{key:t,tag:"component"})}))],2)},n=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v("Components")]),a("h2",[e._v("Ajax Select")]),a("sample-component-ajax-select"),a("h2",[e._v("Alert")]),a("sample-component-alert"),a("h2",[e._v("Modal")]),a("sample-component-modal"),a("h1",[e._v("Directives")]),a("h2",[e._v("Autofocus")]),a("sample-directive-autofocus"),a("h2",[e._v("Confirm Button")]),a("sample-directive-confirm-button"),a("h2",[e._v("Date Input")]),a("sample-directive-date-input"),a("h2",[e._v("Date/Time")]),a("sample-directive-datetime"),a("h2",[e._v("Disabled")]),a("sample-directive-disabled"),a("h2",[e._v("Duration")]),a("sample-directive-duration"),a("h2",[e._v("Read Only")]),a("sample-directive-readonly"),a("h2",[e._v("Tooltip")]),a("sample-directive-tooltip"),a("h2",[e._v("User Text")]),a("sample-directive-user-text"),a("h1",[e._v("Filters")]),a("sample-filters"),a("h1",[e._v("Helpers")]),a("h2",[e._v("Array")]),a("sample-helper-array"),a("h2",[e._v("Context Menu")]),a("sample-helper-context-menu"),a("h2",[e._v("Error")]),a("sample-helper-error"),a("h2",[e._v("HTTP")]),a("sample-helper-http"),a("h2",[e._v("Mask")]),a("sample-helper-mask"),a("h2",[e._v("Number")]),a("sample-helper-number"),a("h2",[e._v("String")]),a("sample-helper-string"),a("h1",[e._v("Plugins")]),a("h2",[e._v("Nested Store")]),a("sample-plugin-store"),a("h2",[e._v("Infinite Scroll")]),a("sample-plugin-infinite-scroll"),a("h2",[e._v("Resize Watcher")]),a("sample-plugin-resize-watcher")],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"},[a("ajax-select",{attrs:{url:"https://api.github.com/search/repositories",params:e.params,preprocessor:e.processItems,"items-key":"items","text-key":"name","null-text":"Select a repository..."},model:{value:e.selectedRepo,callback:function(t){e.selectedRepo=t},expression:"selectedRepo"}}),a("h5",[e._v("Selection:")]),a("pre",[e._v(e._s(JSON.stringify(e.selectedRepo)))])],1)},c=[],d={data(){return{selectedRepo:null}},computed:{params(){return{q:"vuejs"}}},methods:{processItems(e){e.sort((e,t)=>e.name.localeCompare(t.name))}}},u=d,m=a("2877"),h=Object(m["a"])(u,i,c,!1,null,"05024f16",null),p=h.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"},[a("button",{on:{click:e.showAlert}},[e._v("Show alert")]),a("button",{on:{click:e.showConfirm}},[e._v("Show confirm")]),a("button",{on:{click:e.showConfirmDestroy}},[e._v("Show confirm destroy")]),a("button",{on:{click:function(t){return e.showWait()}}},[e._v("Show wait")]),a("button",{on:{click:function(t){return e.showWait("Reticulating splines...")}}},[e._v("Show wait w/ custom message")]),null!==e.wasConfirmed?a("div",[e._v("Confirmed: "+e._s(e.wasConfirmed?"yes":"no"))]):e._e()])},f=[],b={data(){return{wasConfirmed:null}},methods:{showAlert(){this.$alert("Title","Alert text.")},async showConfirm(){this.wasConfirmed=await this.$confirm("Title","Are you sure of this?")},async showConfirmDestroy(){this.wasConfirmed=await this.$confirmDestroy("Title","Are you sure of this?")},async showWait(e){this.$wait(e),setTimeout(()=>{this.$endWait()},1e3)}}},_=b,j=Object(m["a"])(_,v,f,!1,null,"58cc36cc",null),w=j.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.shouldCloseOnMaskClick,expression:"shouldCloseOnMaskClick"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.shouldCloseOnMaskClick)?e._i(e.shouldCloseOnMaskClick,null)>-1:e.shouldCloseOnMaskClick},on:{change:function(t){var a=e.shouldCloseOnMaskClick,s=t.target,r=!!s.checked;if(Array.isArray(a)){var n=null,l=e._i(a,n);s.checked?l<0&&(e.shouldCloseOnMaskClick=a.concat([n])):l>-1&&(e.shouldCloseOnMaskClick=a.slice(0,l).concat(a.slice(l+1)))}else e.shouldCloseOnMaskClick=r}}}),e._v(" Close on mask click")]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.shouldShowCloseX,expression:"shouldShowCloseX"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.shouldShowCloseX)?e._i(e.shouldShowCloseX,null)>-1:e.shouldShowCloseX},on:{change:function(t){var a=e.shouldShowCloseX,s=t.target,r=!!s.checked;if(Array.isArray(a)){var n=null,l=e._i(a,n);s.checked?l<0&&(e.shouldShowCloseX=a.concat([n])):l>-1&&(e.shouldShowCloseX=a.slice(0,l).concat(a.slice(l+1)))}else e.shouldShowCloseX=r}}}),e._v(" Show close X")]),a("button",{on:{click:e.showModal}},[e._v("Show modal")]),e.wasModalShown?a("span",[e._v("Result: "+e._s(e.modalResult||"(cancelled)"))]):e._e()])},k=[],g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("modal",{attrs:{id:"sample-modal","close-on-mask-click":e.shouldCloseOnMaskClick,"close-x":e.shouldShowCloseX}},[a("h1",{attrs:{slot:"header"},slot:"header"},[e._v("Title")]),a("p",[e._v("I have a "+e._s(e.fruit)+". Can you name another food?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.anotherFood,expression:"anotherFood"},{name:"autofocus",rawName:"v-autofocus"}],attrs:{type:"text"},domProps:{value:e.anotherFood},on:{input:function(t){t.target.composing||(e.anotherFood=t.target.value)}}}),a("footer",{attrs:{slot:"footer"},slot:"footer"},[a("button",{on:{click:e.submit}},[e._v("Submit")]),a("button",{attrs:{type:"button"},on:{click:e.cancel}},[e._v("Cancel")])])])},x=[],C={data(){return{fruit:null,shouldCloseOnMaskClick:null,shouldShowCloseX:null,anotherFood:null}},methods:{submit(){if(!this.anotherFood)return this.$alert("Food","Please enter another food!");this.$dismiss(this.anotherFood)},cancel(){this.$dismiss()}}},S=C,O=Object(m["a"])(S,g,x,!1,null,null,null),D=O.exports,E={data(){return{shouldCloseOnMaskClick:!0,shouldShowCloseX:!0,wasModalShown:!1,modalResult:null}},methods:{async showModal(){const e="apple";let t=await this.$modal(D,{fruit:e,shouldCloseOnMaskClick:this.shouldCloseOnMaskClick,shouldShowCloseX:this.shouldShowCloseX});this.wasModalShown=!0,this.modalResult=t}}},R=E,A=(a("8e8d"),Object(m["a"])(R,y,k,!1,null,"38a7529c",null)),T=A.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.shouldRenderField,expression:"shouldRenderField"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.shouldRenderField)?e._i(e.shouldRenderField,null)>-1:e.shouldRenderField},on:{change:function(t){var a=e.shouldRenderField,s=t.target,r=!!s.checked;if(Array.isArray(a)){var n=null,l=e._i(a,n);s.checked?l<0&&(e.shouldRenderField=a.concat([n])):l>-1&&(e.shouldRenderField=a.slice(0,l).concat(a.slice(l+1)))}else e.shouldRenderField=r}}}),e._v(" Render auto-focusing input field ")]),e.shouldRenderField?a("input",{directives:[{name:"autofocus",rawName:"v-autofocus"}],attrs:{type:"text",placeholder:"Type something..."}}):e._e()])},$=[],M={data(){return{shouldRenderField:!1}}},z=M,H=(a("117d"),Object(m["a"])(z,N,$,!1,null,"0ca27653",null)),F=H.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"},[a("button",{directives:[{name:"confirm-button",rawName:"v-confirm-button"}],on:{confirm:e.setConfirmed}},[e._v("Click me")]),e.confirmationTime?a("span",[e._v("Confirmed at "+e._s(e.confirmationTime))]):e._e()])},L=[],B={data(){return{confirmationTime:null}},methods:{setConfirmed(){this.confirmationTime=(new Date).toISOString()}}},I=B,U=Object(m["a"])(I,P,L,!1,null,"361d485f",null),X=U.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.aDate,expression:"aDate"},{name:"date-input",rawName:"v-date-input"}],attrs:{type:"text"},domProps:{value:e.aDate},on:{input:function(t){t.target.composing||(e.aDate=t.target.value)}}}),a("div",[e._v("Value: "+e._s(e.aDate||"(none)"))])])},W=[],V={data(){return{aDate:null}}},Y=V,J=Object(m["a"])(Y,G,W,!1,null,"9cddcfe0",null),q=J.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dateValue,expression:"dateValue"}],attrs:{type:"text"},domProps:{value:e.dateValue},on:{input:function(t){t.target.composing||(e.dateValue=t.target.value)}}})]),a("div",[e._v("Default Format (local): "),a("span",{directives:[{name:"datetime",rawName:"v-datetime",value:e.interpretedDate,expression:"interpretedDate"}]})]),a("div",[e._v("Default Format (UTC): "),a("span",{directives:[{name:"datetime",rawName:"v-datetime",value:e.interpretedDate,expression:"interpretedDate"}],attrs:{"display-utc":""}})]),a("div",[e._v("Custom Format: "),a("span",{directives:[{name:"datetime",rawName:"v-datetime",value:e.interpretedDate,expression:"interpretedDate"}],attrs:{format:"DD-MM-YYYY hh:mm:ss a"}})]),a("div",[e._v("Local Source: "),a("span",{directives:[{name:"datetime",rawName:"v-datetime",value:e.interpretedDate,expression:"interpretedDate"}],attrs:{local:""}})]),a("div",[e._v("Placeholder: "),a("span",{directives:[{name:"datetime",rawName:"v-datetime",value:e.interpretedDate,expression:"interpretedDate"}],attrs:{placeholder:"Never happened"}})])])},Q=[],Z=a("c1df"),ee=a.n(Z),te={data(){return{renderTime:null,dateValue:null}},computed:{interpretedDate(){return this.dateValue?ee()(this.dateValue):this.dateValue}},created(){this.renderTime=(new Date).toISOString(),this.dateValue=this.renderTime}},ae=te,se=(a("702e"),Object(m["a"])(ae,K,Q,!1,null,"fdd10cb0",null)),re=se.exports,ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"},[a("div",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.isDisabled,expression:"isDisabled"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isDisabled)?e._i(e.isDisabled,null)>-1:e.isDisabled},on:{change:function(t){var a=e.isDisabled,s=t.target,r=!!s.checked;if(Array.isArray(a)){var n=null,l=e._i(a,n);s.checked?l<0&&(e.isDisabled=a.concat([n])):l>-1&&(e.isDisabled=a.slice(0,l).concat(a.slice(l+1)))}else e.isDisabled=r}}}),e._v(" Disable everything")])]),a("div",{staticClass:"controls"},[a("div",[a("input",{directives:[{name:"disabled",rawName:"v-disabled",value:e.isDisabled,expression:"isDisabled"}],attrs:{type:"text",placeholder:"text here"}})]),a("div",[a("input",{directives:[{name:"disabled",rawName:"v-disabled",value:e.isDisabled,expression:"isDisabled"}],attrs:{type:"checkbox"}}),e._v(" A checkbox")]),a("div",[a("label",{directives:[{name:"disabled",rawName:"v-disabled",value:e.isDisabled,expression:"isDisabled"}]},[a("input",{attrs:{type:"checkbox"}}),e._v(" A checkbox with a label")])]),a("div",[a("select",{directives:[{name:"disabled",rawName:"v-disabled",value:e.isDisabled,expression:"isDisabled"}]},[a("option",{attrs:{selected:""}},[e._v("Some options...")])])]),a("div",[a("button",{directives:[{name:"disabled",rawName:"v-disabled",value:e.isDisabled,expression:"isDisabled"}],on:{click:function(e){e.preventDefault()}}},[e._v("Click me!")])])])])},le=[],oe={data(){return{isDisabled:!0}}},ie=oe,ce=(a("61a0"),Object(m["a"])(ie,ne,le,!1,null,"160dc17c",null)),de=ce.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"},[a("div",[e._v("Time since page loaded: "),a("span",{directives:[{name:"duration",rawName:"v-duration",value:e.loadTime,expression:"loadTime"}]})]),a("div",[e._v("Without seconds: "),a("span",{directives:[{name:"duration",rawName:"v-duration",value:e.loadTime,expression:"loadTime"}],attrs:{"no-seconds":""}})]),a("div",[e._v("30 seconds after Y2K: "),a("span",{directives:[{name:"duration",rawName:"v-duration",value:30,expression:"30"}],attrs:{"base-time":e.y2k}})])])},me=[],he={data(){return{y2k:null,loadTime:null}},created(){this.y2k=new Date(2e3,0,1,0,0,0).toISOString(),this.loadTime=(new Date).toISOString()}},pe=he,ve=Object(m["a"])(pe,ue,me,!1,null,"de877fb2",null),fe=ve.exports,be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.isReadOnly,expression:"isReadOnly"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isReadOnly)?e._i(e.isReadOnly,null)>-1:e.isReadOnly},on:{change:function(t){var a=e.isReadOnly,s=t.target,r=!!s.checked;if(Array.isArray(a)){var n=null,l=e._i(a,n);s.checked?l<0&&(e.isReadOnly=a.concat([n])):l>-1&&(e.isReadOnly=a.slice(0,l).concat(a.slice(l+1)))}else e.isReadOnly=r}}}),e._v(" Make read-only")]),a("input",{directives:[{name:"readonly",rawName:"v-readonly",value:e.isReadOnly,expression:"isReadOnly"}],attrs:{type:"text",placeholder:"type here"}})])},_e=[],je={data(){return{isReadOnly:!0}}},we=je,ye=(a("e40c"),Object(m["a"])(we,be,_e,!1,null,"0cf2af78",null)),ke=ye.exports,ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"},[a("span",{directives:[{name:"tip",rawName:"v-tip",value:e.tipText,expression:"tipText"}]},[e._v("Sample 1")]),a("span",{directives:[{name:"tip",rawName:"v-tip",value:"Tip is an awkward JS string in an attribute",expression:"'Tip is an awkward JS string in an attribute'"}]},[e._v("Sample 2")]),a("span",{directives:[{name:"tip",rawName:"v-tip"}],attrs:{tip:"Tip is a normal HTML attribute, but the word 'tip' is duplicated."}},[e._v("Sample 3")]),a("span",{directives:[{name:"tip",rawName:"v-tip.html",value:"This tip has <u>HTML</u>!",expression:"'This tip has <u>HTML</u>!'",modifiers:{html:!0}}]},[e._v("Sample 4")]),a("span",{directives:[{name:"tip",rawName:"v-tip",value:"This tip has extra classes.",expression:"'This tip has extra classes.'"}],attrs:{"tip-class":"extra-tip-class"}},[e._v("Sample 5")])])},xe=[],Ce={data(){return{tipText:"Dynamic tip text from the instance."}}},Se=Ce,Oe=(a("bbb9"),Object(m["a"])(Se,ge,xe,!1,null,"cbd72188",null)),De=Oe.exports,Ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"},[a("div",{directives:[{name:"user-text",rawName:"v-user-text",value:e.crazyString,expression:"crazyString"}]})])},Re=[];const Ae="This is an example of user provided input.\n\nIt might contain line breaks, <html> tags - maybe someone even tried to throw in <script>!\n\nBut we've got it handled.";var Te={data(){return{crazyString:Ae}}},Ne=Te,$e=Object(m["a"])(Ne,Ee,Re,!1,null,"f33a3be2",null),Me=$e.exports,ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"},[a("div",[e._v(" File Size: "+e._s(e._f("bytes")(120))+" ")]),a("div",[e._v(" File Size: "+e._s(e._f("bytes")(4562865883))+" ")]),a("div",[e._v(" Dash Nulls: "+e._s(e._f("dash")(null))+" ")]),a("div",[e._v(" Dash Empty String: "+e._s(e._f("dash")(""))+" ")]),a("div",[e._v(" Dash 0s: "+e._s(e._f("dash-zeros")(0))+" ")]),e._v(" "),a("div",[e._v(" Lowercase: "+e._s(e._f("lowercase")("SOME USERS TYPE IN ALL CAPS"))+" ")]),a("div",[e._v(" Number: "+e._s(e._f("number")(123456789))+" ")]),a("div",[e._v(" Phone: "+e._s(e._f("phone")("4045551212"))+" ")]),a("div",[e._v(" Uppercase First: "+e._s(e._f("ucfirst")("here are the samples."))+" ")]),a("div",[e._v(" Uppercase Words: "+e._s(e._f("ucwords")("here are the samples."))+" ")]),a("div",[e._v(" Uppercase: "+e._s(e._f("uppercase")("here are the samples."))+" ")]),a("div",[e._v(" Unsnake: "+e._s(e._f("unsnake")("in_progress"))+" ")]),a("div",[e._v(" US Currency: $"+e._s(e._f("us-currency")(4.26))+" ")]),a("div",[e._v(" US Currency: $"+e._s(e._f("us-currency")(9))+" ")])])},He=[],Fe={},Pe=Fe,Le=Object(m["a"])(Pe,ze,He,!1,null,"2e6c058a",null),Be=Le.exports,Ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"},[a("div",[e._v("Numbers: "+e._s(e.numbers.join(", ")))]),a("div",[e._v("First Number: "+e._s(e.numbers.first()))]),a("div",[e._v("Last Number: "+e._s(e.numbers.last()))]),a("button",{on:{click:e.replace8}},[e._v("Replace 8")]),a("button",{on:{click:e.remove15}},[e._v("Remove 15")]),a("button",{on:{click:e.remove42}},[e._v("Remove 42")])])},Ue=[],Xe={data(){return{numbers:[4,8,15,16,23,42]}},methods:{replace8(){this.numbers.replace(8,9)},remove15(){this.numbers.remove(15)},remove42(){this.numbers.remove(42)}}},Ge=Xe,We=Object(m["a"])(Ge,Ie,Ue,!1,null,"31561673",null),Ve=We.exports,Ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"},[a("div",{on:{contextmenu:function(t){return t.preventDefault(),e.showContextMenu(t)}}},[e._v("Right-click me!")])])},Je=[],qe={methods:{showContextMenu(e){this.$contextMenu(e,{targetClass:"class-added-to-the-span",class:"class-added-to-the-menu-itself",items:[{title:"Option 1",class:"an-extra-class-for-this-option",handler:()=>{this.$alert("Option 1","You have selected option 1!")}},{title:"Option 2",handler:()=>{this.$alert("Option 2","You have selected option 2!")}},{title:"Option 3 w/ Confirmation",shouldConfirm:!0,handler:()=>{this.$alert("Option 3","You have selected & confirmed option 3!")}}],onCreate:e=>{}})}}},Ke=qe,Qe=(a("866b"),Object(m["a"])(Ke,Ye,Je,!1,null,null,null)),Ze=Qe.exports,et=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"},[a("div",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.shouldEnableGlobalHandler,expression:"shouldEnableGlobalHandler"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.shouldEnableGlobalHandler)?e._i(e.shouldEnableGlobalHandler,null)>-1:e.shouldEnableGlobalHandler},on:{change:function(t){var a=e.shouldEnableGlobalHandler,s=t.target,r=!!s.checked;if(Array.isArray(a)){var n=null,l=e._i(a,n);s.checked?l<0&&(e.shouldEnableGlobalHandler=a.concat([n])):l>-1&&(e.shouldEnableGlobalHandler=a.slice(0,l).concat(a.slice(l+1)))}else e.shouldEnableGlobalHandler=r}}}),e._v(" Enable global error handler")])]),a("div",[e._v("Message: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.customErrorMessage,expression:"customErrorMessage"}],attrs:{placeholder:"Type an error message..."},domProps:{value:e.customErrorMessage},on:{input:function(t){t.target.composing||(e.customErrorMessage=t.target.value)}}}),e._v(" "),a("button",{on:{click:function(t){return e.showCustomError()}}},[e._v("Show as app error")]),e._v(" "),a("button",{on:{click:function(t){return e.showCustomError("USERERR")}}},[e._v("Show as user-friendly error")])]),a("div",[a("button",{on:{click:e.reportError}},[e._v("Report an error")])]),a("div",[a("button",{on:{click:e.handleOnError}},[e._v("Tell error to handle itself")])])])},tt=[],at=a("b1fc"),st={data(){return{shouldEnableGlobalHandler:!1,customErrorMessage:""}},watch:{shouldEnableGlobalHandler(e){at["a"].configure({reportErrorHandler:e?this.handleGlobalError:null})}},methods:{showCustomError(e){let t=new Error(this.customErrorMessage||"(no message entered)");t.code=e||"UNKERR",this.$alert("Error",t)},reportError(){const e=new Error("Randomly generated error message.");this.$reportError(e)},handleOnError(){const e=new Error("Randomly generated error message.");e.handle()},handleGlobalError(e){this.$alert("Error","Global error handler got the following error:\n\n"+e.message+"\n\nNormally, you'd configure reportErrorHandler to be a function that reports to a service like Sentry.")}}},rt=st,nt=Object(m["a"])(rt,et,tt,!1,null,"dbc88196",null),lt=nt.exports,ot=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"},[e._m(0),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.shouldCatch401,expression:"shouldCatch401"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.shouldCatch401)?e._i(e.shouldCatch401,null)>-1:e.shouldCatch401},on:{change:function(t){var a=e.shouldCatch401,s=t.target,r=!!s.checked;if(Array.isArray(a)){var n=null,l=e._i(a,n);s.checked?l<0&&(e.shouldCatch401=a.concat([n])):l>-1&&(e.shouldCatch401=a.slice(0,l).concat(a.slice(l+1)))}else e.shouldCatch401=r}}}),e._v(" Catch HTTP 401 and send to login redirect function")]),a("button",{on:{click:function(t){return e.makeCall(200)}}},[e._v("Sample 200")]),a("button",{on:{click:function(t){return e.makeCall(401)}}},[e._v("Sample 401")]),a("button",{on:{click:function(t){return e.makeCall(403)}}},[e._v("Sample 403")]),a("button",{on:{click:function(t){return e.makeCall(500)}}},[e._v("Sample 500")])])},it=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The HTTP helper catches responses through Axios with a status code >= 400. If there's a JSON payload with an "),a("em",[e._v("error")]),e._v(" key, it replaces the message of the Error object with the value in the "),a("em",[e._v("error")]),e._v(" key. If the status code is 422, it will also set the error's "),a("em",[e._v("code")]),e._v(" property to "),a("em",[e._v("USERERR")]),e._v(", which is used by the error handlers to determine how to display the message to the user, and whether or not to report it.")])}],ct={data(){return{shouldCatch401:!0}},watch:{shouldCatch401(){this.reconfigureVueFoundation()}},created(){this.reconfigureVueFoundation()},methods:{reconfigureVueFoundation(){at["a"].configure({unauthorizedHttpResponseHandler:this.shouldCatch401?this.handle401:null})},handle401(){this.$alert("401 Caught","You would normally configure this to redirect to a login page.")},async makeCall(e){try{await this.$http.get("https://httpstat.us/"+e),this.$alert("Success","No errors encountered.")}catch(t){this.$alert("Uh oh!",t)}}}},dt=ct,ut=(a("5eb1"),Object(m["a"])(dt,ot,it,!1,null,"60772fab",null)),mt=ut.exports,ht=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"})},pt=[],vt={},ft=vt,bt=Object(m["a"])(ft,ht,pt,!1,null,"ed103756",null),_t=bt.exports,jt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"})},wt=[],yt={},kt=yt,gt=Object(m["a"])(kt,jt,wt,!1,null,"03304972",null),xt=gt.exports,Ct=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"})},St=[],Ot={},Dt=Ot,Et=Object(m["a"])(Dt,Ct,St,!1,null,"793bac3a",null),Rt=Et.exports,At=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"})},Tt=[],Nt={},$t=Nt,Mt=Object(m["a"])($t,At,Tt,!1,null,"fb1bcbd6",null),zt=Mt.exports,Ht=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"},[e.windowBottomLastReachedAt?a("div",[e._v("Window last reached bottom at: "),a("span",{directives:[{name:"datetime",rawName:"v-datetime",value:e.windowBottomLastReachedAt,expression:"windowBottomLastReachedAt"}],attrs:{format:"HH:mm:ss.SSSS"}})]):a("div",[e._v("Window has not reached bottom.")]),e.elBottomLastReachedAt?a("div",[e._v("This element last reached bottom at: "),a("span",{directives:[{name:"datetime",rawName:"v-datetime",value:e.elBottomLastReachedAt,expression:"elBottomLastReachedAt"}],attrs:{format:"HH:mm:ss.SSSS"}})]):a("div",[e._v("This element has not reached bottom.")]),e.randomText?[a("p",{directives:[{name:"user-text",rawName:"v-user-text",value:e.randomText,expression:"randomText"}]}),e.elBottomLastReachedAt?a("div",[e._v("This element last reached bottom at: "),a("span",{directives:[{name:"datetime",rawName:"v-datetime",value:e.elBottomLastReachedAt,expression:"elBottomLastReachedAt"}],attrs:{format:"HH:mm:ss.SSSS"}})]):a("div",[e._v("This element has not reached bottom.")])]:a("p",[e._v("Loading...")])],2)},Ft=[],Pt={data(){return{windowBottomLastReachedAt:null,elBottomLastReachedAt:null,randomText:null}},async mounted(){let e=await this.$http.get("https://baconipsum.com/api/?type=meat-and-filler");this.randomText=e.data.join("\n\n")},windowScrolledToBottom(){this.windowBottomLastReachedAt=new Date},elScrolledToBottom(){this.elBottomLastReachedAt=new Date}},Lt=Pt,Bt=(a("d37a"),Object(m["a"])(Lt,Ht,Ft,!1,null,"a45f1038",null)),It=Bt.exports,Ut=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample"},[e.lastResizedAt?[e._v("Window last resized at: "),a("span",{directives:[{name:"datetime",rawName:"v-datetime",value:e.lastResizedAt,expression:"lastResizedAt"}],attrs:{format:"HH:mm:ss.SSSS"}})]:[e._v("Window has not been resized.")]],2)},Xt=[],Gt={data(){return{lastResizedAt:null}},windowResized(){this.lastResizedAt=new Date}},Wt=Gt,Vt=Object(m["a"])(Wt,Ut,Xt,!1,null,"1a2d1247",null),Yt=Vt.exports,Jt={components:{SampleComponentAjaxSelect:p,SampleComponentAlert:w,SampleComponentModal:T,SampleDirectiveAutofocus:F,SampleDirectiveConfirmButton:X,SampleDirectiveDateInput:q,SampleDirectiveDatetime:re,SampleDirectiveDisabled:de,SampleDirectiveDuration:fe,SampleDirectiveReadonly:ke,SampleDirectiveTooltip:De,SampleDirectiveUserText:Me,SampleFilters:Be,SampleHelperArray:Ve,SampleHelperContextMenu:Ze,SampleHelperError:lt,SampleHelperHttp:mt,SampleHelperMask:_t,SampleHelperNumber:xt,SampleHelperString:Rt,SamplePluginStore:zt,SamplePluginInfiniteScroll:It,SamplePluginResizeWatcher:Yt}},qt=Jt,Kt=(a("7d5b"),Object(m["a"])(qt,l,o,!1,null,null,null)),Qt=Kt.exports,Zt={store:["session","globalError","rootInjections"],name:"App",components:{HelloWorld:Qt}},ea=Zt,ta=(a("5c0b"),Object(m["a"])(ea,r,n,!1,null,null,null)),aa=ta.exports;at["a"].configure({});const sa=at["a"].getStore(),ra=new s["a"]({render:function(e){return e(aa)},data:{store:sa}}).$mount("#app");at["a"].setRoot(ra)},"5c0b":function(e,t,a){"use strict";a("9c0c")},"5eb1":function(e,t,a){"use strict";a("02fd")},"61a0":function(e,t,a){"use strict";a("b0d4")},"678c":function(e,t,a){},"68e8":function(e,t,a){},"702e":function(e,t,a){"use strict";a("7c83")},"7c83":function(e,t,a){},"7d5b":function(e,t,a){"use strict";a("1355")},"866b":function(e,t,a){"use strict";a("68e8")},"8e8d":function(e,t,a){"use strict";a("678c")},"9c0c":function(e,t,a){},b0d4:function(e,t,a){},b91f:function(e,t,a){},bbb9:function(e,t,a){"use strict";a("c00a")},c00a:function(e,t,a){},d37a:function(e,t,a){"use strict";a("f26d")},e40c:function(e,t,a){"use strict";a("f3bf")},f26d:function(e,t,a){},f3bf:function(e,t,a){}});
//# sourceMappingURL=app.6a8e87bb.js.map