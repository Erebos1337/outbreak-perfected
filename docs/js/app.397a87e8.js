(function(e){function t(t){for(var o,a,c=t[0],l=t[1],i=t[2],d=0,p=[];d<c.length;d++)a=c[d],s[a]&&p.push(s[a][0]),s[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==s[l]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},s={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/outbreak-perfected/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"199b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),s=(n("d1e7"),n("bb71"));n("da64");o["a"].use(s["a"],{options:{customProperties:!0},iconfont:"md"});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("v-icon",[e._v("home")]),n("span",[e._v("Outbreak Perfected")])],1),n("v-spacer")],1),n("v-content",[n("App2")],1)],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"grid-list-xl":""}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("h1",[n("v-icon",{attrs:{medium:""}},[e._v("sync")]),e._v("Connection\n          ")],1)])],1)],1),n("v-card-text",[n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm4:"",md3:""}},[n("v-text-field",{attrs:{"prepend-icon":"home",label:"Channel",disabled:e.connected,"hide-details":"",required:""},model:{value:e.channel,callback:function(t){e.channel=t},expression:"channel"}})],1),n("v-flex",{attrs:{xs12:"",sm4:"",md3:""}},[n("v-text-field",{attrs:{"prepend-icon":"room",label:"Room",disabled:e.connected,"hide-details":"",required:""},model:{value:e.room,callback:function(t){e.room=t},expression:"room"}})],1),n("v-flex",{attrs:{xs12:"",sm4:"",md3:""}},[n("v-text-field",{attrs:{"prepend-icon":"face",disabled:e.connected,"hide-details":"",label:"Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-btn",{attrs:{color:e.connected?"error":"success",disabled:!e.connected&&!e.canConnect},on:{click:e.connect}},[n("v-icon",{attrs:{medium:"",left:""}},[e._v(e._s(e.connected?"link_off":"link"))]),e._v("\n            "+e._s(e.connected?"Disconnect":"Connect")+"\n          ")],1)],1)],1)],1)],1),n("v-card",{staticClass:"mt-3"},[n("v-card-title",{attrs:{"primary-title":""}},[n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("h1",[n("v-icon",{attrs:{medium:""}},[e._v("list_alt")]),e._v("Protocol\n          ")],1)])],1)],1),n("v-card-text",{staticClass:"grey lighten-3",attrs:{id:"protocolcontainer"}},[n("v-text-field",{staticClass:"px-0 py-0 mx-0",attrs:{disabled:!e.connected,"prepend-inner-icon":"send","hide-details":""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage(t)}},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),n("v-container",{ref:"protocol",staticClass:"grey lighten-3 px-0 pt-0 text-xs-left scroll-y",attrs:{id:"protocol"}},e._l(e.protocol,function(t,o){return n("p",{key:o},[e._v(e._s(t))])}),0)],1)],1),n("v-card",{staticClass:"mt-3"},[n("v-card-title",[n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("h1",[n("v-icon",{attrs:{medium:""}},[e._v("extension")]),e._v("Puzzle\n          ")],1)])],1)],1),n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs6:""}},[n("v-checkbox",{attrs:{label:"Smart"},model:{value:e.smartMode,callback:function(t){e.smartMode=t},expression:"smartMode"}})],1),n("v-flex",{attrs:{xs6:""}},[n("v-select",{attrs:{items:["void","arc","solar"],rules:[function(e){return!!e||"Item is required"}]},model:{value:e.element,callback:function(t){e.element=t},expression:"element"}})],1)],1),n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[n("v-flex",{attrs:{xs6:""}},[n("v-btn",{attrs:{block:""},on:{click:e.triggerResetSolutions}},[e._v("Clear All")])],1),n("v-flex",{attrs:{xs6:""}},[n("v-btn",{attrs:{block:""},on:{click:e.triggerResetInputs}},[e._v("Clear Input")])],1),n("v-flex",{attrs:{x12:""}},[n("p",{staticClass:"progress"},[e._v(e._s(e.countLocked+"/49"))])]),n("v-flex",{attrs:{xs12:""}},[n("div",{class:e.solutionDisplay.class,attrs:{id:"solutionbox"},on:{click:e.triggerLockSolution}},[n("p",{attrs:{id:"solutiontext"}},[n("span",[e._v(e._s(e.solutionDisplay.text))])])])])],1),n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},e._l(6,function(t,o){return n("input-circle",{key:o,attrs:{id:o},on:{input:function(t){return e.sendInput(o,t)}},model:{value:e.inputData[o],callback:function(t){e.$set(e.inputData,o,t)},expression:"inputData[i]"}})}),1)],1)],1)],1)},l=[],i=(n("ac4d"),n("8a81"),n("ac6a"),n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-flex",{staticClass:"circle-wrapper",class:e.calcOffset,attrs:{xs6:"",md4:""}},[n("svg",{attrs:{viewBox:"-52 -52 104 104",width:"100%",preserveAspectRatio:e.preserveAspectRatio}},[e._l(12,function(t){return n("path",{key:t,staticClass:"segment",class:{selected:e.selected==t},style:e.setSegCss(t),attrs:{d:e.arcPath(),"stroke-opacity":e.strokeOpacity(t),"stroke-width":"1",fill:e.fillColor(t)},on:{click:function(n){return e.selectSegment(t)}}})}),n("text",{directives:[{name:"show",rawName:"v-show",value:e.selected>0,expression:"selected > 0"}],staticClass:"circle-value",attrs:{x:"0",y:"0"}},[e._v(e._s(e.selected))])],2)])}),u=[],d={props:["id","value"],data:function(){return{selected:0}},computed:{preserveAspectRatio:function(e){var t=e.id;return(t%2===0?"xMaxYMid":"xMinYMid")+" meet"},calcOffset:function(e){var t=e.id;return t%2===0?"":"offset-md1"}},methods:{angleX:function(e){return Math.sin(Math.PI*e/6)},angleY:function(e){return-Math.cos(Math.PI*e/6)},arcPath:function(){var e=this.angleX,t=this.angleY,n=50,o=.47,s=.45;return"M ".concat(n*e(-o)," ").concat(n*t(-o)," A ").concat(n," ").concat(n," 0 0 1 ").concat(n*e(o)," ").concat(n*t(o)," L ").concat(n/2*e(s)," ").concat(n/2*t(s)," A ").concat(n/2," ").concat(n/2," 0 0 0 ").concat(n/2*e(-s)," ").concat(n/2*t(-s)," Z")},fillColor:function(e){return e===this.selected?"rgba(255/2,255/2,0,1)":"cyan"},strokeOpacity:function(e){return this.selected,1},selectSegment:function(e){e!==this.selected&&(this.selected=e,this.$emit("input",e))},setSegCss:function(e){return"--n:".concat(e)}},watch:{value:function(e){this.selected=e}}},p=d,f=(n("d538"),n("2877")),h=n("6544"),v=n.n(h),m=n("0e8f"),y=Object(f["a"])(p,i,u,!1,null,null,null),x=y.exports;v()(y,{VFlex:m["a"]});var k={void:[[1,1,2,12,8,10,"White",1],[1,1,4,5,6,5,"Red",2],[1,2,1,4,11,4,"Red",1],[1,7,12,3,8,4,"Yellow",3],[1,10,7,11,3,12,"Red",6],[1,12,1,1,5,4,"Cyan",3],[2,4,1,6,3,10,"Green",2],[2,5,11,2,3,5,"Yellow",2],[2,6,5,4,10,3,"Cyan",1],[2,7,2,11,9,10,"Yellow",6],[2,9,12,3,10,2,"Purple",5],[3,3,1,3,6,8,"Green",7],[4,3,2,4,2,9,"Green",1],[4,3,2,11,4,7,"Purple",6],[4,6,5,6,5,12,"Blue",4],[4,8,12,8,9,3,"White",5],[4,9,9,4,5,5,"Yellow",1],[5,6,7,3,7,10,"Red",5],[5,9,11,7,12,10,"Purple",7],[6,5,6,10,1,1,"Purple",1],[6,9,12,10,8,5,"White",7],[6,11,11,4,12,4,"Cyan",4],[7,2,8,3,3,12,"White",6],[7,4,2,7,7,9,"Green",5],[7,9,6,5,5,12,"Yellow",4],[7,12,1,2,5,4,"Blue",5],[8,4,5,8,9,4,"Cyan",2],[8,5,11,8,11,11,"Cyan",7],[8,6,2,9,2,10,"White",3],[8,6,9,2,12,12,"Yellow",5],[8,10,5,6,11,11,"Red",3],[8,12,5,9,9,4,"Cyan",6],[9,3,12,7,12,12,"Green",3],[9,7,7,8,12,7,"Purple",4],[9,9,8,10,8,6,"Purple",2],[10,2,3,8,9,3,"White",2],[10,3,2,3,7,11,"Green",4],[10,5,6,2,3,9,"Blue",2],[10,12,11,5,8,12,"Green",6],[11,1,5,7,10,2,"Blue",6],[11,4,2,8,4,8,"Blue",7],[11,4,4,11,12,3,"Yellow",7],[11,4,5,4,7,6,"Red",4],[11,6,12,8,11,11,"Red",7],[11,7,6,3,12,5,"Purple",3],[11,11,7,3,8,11,"Blue",3],[12,2,11,4,2,11,"Cyan",5],[12,5,7,1,5,7,"White",4],[12,5,12,11,4,4,"Blue",1]],arc:[[1,4,5,7,6,7,"Red",6],[1,6,11,3,5,1,"Yellow",7],[2,4,12,10,8,6,"Green",3],[2,9,4,3,2,11,"Green",2],[2,9,5,9,1,8,"Purple",6],[3,5,7,6,4,12,"Cyan",2],[3,8,1,8,3,7,"Yellow",4],[4,4,10,3,4,1,"Cyan",1],[4,5,9,7,1,6,"White",4],[4,6,6,12,9,8,"Purple",2],[4,7,3,5,5,1,"Blue",5],[4,8,8,7,4,8,"White",5],[4,9,1,1,11,5,"Cyan",5],[4,12,2,7,2,10,"Green",6],[4,12,5,6,4,4,"Yellow",1],[5,4,5,2,8,5,"Red",5],[5,4,11,8,9,8,"Cyan",7],[5,8,3,2,2,11,"Red",7],[5,9,1,1,5,11,"Red",1],[5,9,6,8,2,2,"Red",4],[6,2,12,5,9,3,"Blue",3],[6,2,1,7,7,5,"Purple",5],[6,3,10,3,7,3,"White",1],[6,5,2,12,7,3,"Blue",1],[7,3,2,9,9,5,"Cyan",3],[7,9,5,12,10,4,"Yellow",5],[8,1,11,2,7,4,"Red",2],[8,3,4,9,5,9,"Purple",7],[8,9,9,12,11,1,"Green",7],[8,11,7,9,9,5,"Cyan",4],[8,12,6,4,12,6,"White",7],[9,1,12,4,11,4,"Yellow",3],[9,6,5,3,8,7,"Purple",4],[9,10,11,4,7,11,"Yellow",2],[9,11,12,6,3,7,"Blue",4],[9,11,1,3,7,11,"Blue",7],[9,12,7,6,4,9,"Purple",1],[10,8,11,6,4,2,"Red",3],[10,9,3,7,7,12,"Blue",6],[10,11,3,2,8,7,"Green",1],[10,11,9,3,4,9,"Yellow",6],[10,12,8,4,12,4,"Green",5],[10,12,9,6,5,7,"White",3],[11,1,2,10,7,1,"White",2],[11,11,9,11,3,6,"White",6],[12,7,1,8,5,7,"Purple",3],[12,8,1,8,8,3,"Blue",2],[12,5,11,4,5,1,"Cyan",6],[12,12,1,6,4,1,"Green",4]],solar:[[1,2,6,10,12,11,"Green",4],[1,3,7,7,4,12,"Cyan",4],[1,7,2,8,5,6,"White",6],[1,7,9,5,10,6,"Green",6],[1,10,5,2,2,4,"Yellow",2],[1,11,6,4,6,10,"Yellow",6],[2,6,8,9,6,8,"Purple",2],[2,10,7,1,1,7,"Purple",5],[2,11,1,6,6,10,"Blue",4],[2,11,12,8,9,1,"Blue",6],[3,5,2,4,9,12,"White",7],[4,6,9,2,10,8,"White",5],[4,8,2,6,5,5,"Red",2],[5,6,1,7,8,9,"Purple",6],[5,10,10,1,4,8,"Purple",4],[5,11,3,12,1,8,"Cyan",6],[5,11,7,2,7,6,"Yellow",5],[6,7,4,1,1,11,"Green",7],[6,8,10,7,11,9,"Purple",7],[6,11,12,8,5,11,"Purple",1],[7,4,3,7,3,8,"Red",7],[7,8,1,9,6,5,"White",3],[7,8,3,4,9,12,"Green",3],[7,11,1,9,7,9,"Red",1],[7,12,6,5,2,2,"Red",4],[8,5,4,10,4,5,"Green",1],[8,7,4,8,8,10,"Blue",3],[8,10,7,9,4,8,"White",1],[8,11,4,12,10,10,"Red",5],[8,12,11,7,3,1,"Blue",5],[9,4,10,9,7,2,"Cyan",7],[9,6,1,6,9,8,"Cyan",3],[9,7,3,5,2,8,"Yellow",1],[9,10,3,3,11,6,"Purple",3],[9,10,10,3,8,3,"Green",2],[9,10,11,11,8,7,"Blue",1],[9,11,7,2,8,9,"White",2],[9,11,3,10,9,5,"Blue",2],[10,3,8,4,9,12,"Yellow",3],[10,5,6,12,3,12,"Cyan",1],[10,6,5,2,5,7,"Cyan",2],[10,10,2,6,12,8,"Cyan",5],[11,2,8,2,9,2,"White",4],[11,4,4,6,12,5,"Blue",7],[11,9,11,4,9,3,"Yellow",7],[11,11,8,7,1,12,"Red",3],[12,1,3,10,12,10,"Red",6],[12,7,11,7,1,12,"Yellow",4],[12,10,6,5,1,1,"Green",5]]},g={name:"app",components:{InputCircle:x},data:function(){return{connected:!1,channel:"yasg",name:"",room:"1337",socket:null,message:"",protocol:[],inputData:[0,0,0,0,0,0],configurations:k,element:"solar",smartMode:!0,lockedSolutions:{}}},methods:{connect:function(){if(this.connected)this.sendStatus("disconnected"),this.socket.close(),this.connected=!1;else{var e="wss://connect.websocket.in/".concat(this.channel,"?room_id=").concat(this.room);this.socket=new WebSocket(e),this.name||(this.name="Guest".concat(Math.floor(1e4*Math.random()))),this.socket&&(this.connected=!0,Object.assign(this.socket,this.socketListeners))}},sendMessage:function(){if(this.connected&&this.socket&&this.message){var e={type:"message",content:this.message,name:this.name};this.showMessage(e),this.socket.send(JSON.stringify(e)),this.message=""}},sendStatus:function(e){if(this.connected&&this.socket&&e){var t={type:"status",content:e,name:this.name};this.showStatus(t),this.socket.send(JSON.stringify(t))}},sendInput:function(e,t){if(this.connected&&this.socket){var n={type:"input",content:{id:e,value:t},name:this.name};this.socket.send(JSON.stringify(n))}},sendControl:function(e){if(this.connected&&this.socket){var t={type:"control",content:{event:e},name:this.name};this.socket.send(JSON.stringify(t))}},showStatus:function(e){var t=e.content,n=e.name;this.protocol.push("> ".concat(n," ").concat(t))},showMessage:function(e){var t=e.content,n=e.name;t&&n&&(n&&n===this.name?this.protocol.push("me: ".concat(t)):this.protocol.push("".concat(n,": ").concat(t)),this.$refs.protocol.scrollTop=Math.floor(this.$refs.protocol.scrollHeight))},processWsEvent:function(e){switch(e.type){case"message":this.showMessage(e);break;case"status":this.showStatus(e);break;case"input":this.processInput(e);break;case"control":this.processControl(e);break}},processInput:function(e){var t=e.content,n=t.id,o=t.value;void 0!==n&&n>=0&&n<6&&o&&o>0&&o<=12&&this.inputData.splice(n,1,o)},processControl:function(e){var t=e.content,n=t.event;switch(n){case"resetInputs":this.resetInputs();break;case"resetAll":this.resetSolutions();break;case"lockSolution":this.lockSolution();break}},triggerResetInputs:function(){this.resetInputs(),this.sendControl("resetInputs")},resetInputs:function(){this.inputData.splice(0,6,[0,0,0,0,0,0])},triggerResetSolutions:function(){this.resetSolutions(),this.sendControl("resetAll")},resetSolutions:function(){this.lockedSolutions={},this.resetInputs()},triggerLockSolution:function(){this.lockSolution(),this.sendControl("lockSolution")},lockSolution:function(){if(this.solutions&&1===this.solutions.length){var e=this.solutions[0],t=e[6]+e[7];this.$set(this.lockedSolutions,t,!0),this.resetInputs()}},fullScreen:function(){}},computed:{canConnect:function(e){var t=e.connected,n=e.channel,o=e.room;return!t&&n&&o},socketListeners:function(e){var t=e.processWsEvent,n=e.sendStatus;return{onopen:function(){n("connected")},onclose:function(){n("disconnected")},onmessage:function(e){if("message"===e.type){var n=JSON.parse(e.data);t(n)}}}},currConfig:function(e){var t=e.configurations,n=e.element;return t[n]},unlockedSolutions:function(e){var t=e.currConfig,n=e.smartMode,o=e.lockedSolutions;return n?t.filter(function(e){var t=e[6]+e[7];return!o.hasOwnProperty(t)}):t},solutions:function(e){var t=e.unlockedSolutions,n=e.inputData,o=n.map(function(e,t){return{k:t,v:e}}).filter(function(e){return e.v>0});if(0===o.length)return null;var s=t.filter(function(e){var t=!0,n=!1,s=void 0;try{for(var r,a=o[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){var c=r.value;if(e[c.k]!==c.v)return!1}}catch(l){n=!0,s=l}finally{try{t||null==a.return||a.return()}finally{if(n)throw s}}return!0});return s},solutionDisplay:function(e){var t=e.solutions;return t?0===t.length?{text:"no solution",class:"nosolution"}:1===t.length?{text:t[0][6]+" "+t[0][7],class:t[0][6].toLowerCase()}:t.length>1?{text:"multiple solutions: ".concat(t.length),class:"multisolutions"}:"":{text:"no inputs",class:"noinput"}},countLocked:function(e){var t=e.lockedSolutions;return Object.getOwnPropertyNames(t).length-1}},watch:{},mounted:function(){}},b=g,w=(n("6435"),n("8336")),C=n("b0af"),S=n("99d9"),_=n("12b2"),P=n("ac7c"),R=n("a523"),O=n("132d"),M=n("a722"),Y=n("b56d"),W=n("2677"),B=Object(f["a"])(b,c,l,!1,null,null,null),G=B.exports;v()(B,{VBtn:w["a"],VCard:C["a"],VCardText:S["a"],VCardTitle:_["a"],VCheckbox:P["a"],VContainer:R["a"],VFlex:m["a"],VIcon:O["a"],VLayout:M["a"],VSelect:Y["a"],VTextField:W["a"]});var I={name:"App",components:{App2:G},data:function(){return{}}},j=I,V=n("7496"),A=n("549c"),D=n("9910"),T=n("71d9"),L=n("2a7f"),$=Object(f["a"])(j,r,a,!1,null,null,null),N=$.exports;v()($,{VApp:V["a"],VContent:A["a"],VIcon:O["a"],VSpacer:D["a"],VToolbar:T["a"],VToolbarTitle:L["a"]});n("d5e8");o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(N)}}).$mount("#app")},6435:function(e,t,n){"use strict";var o=n("b60d"),s=n.n(o);s.a},b60d:function(e,t,n){},d538:function(e,t,n){"use strict";var o=n("199b"),s=n.n(o);s.a}});
//# sourceMappingURL=app.397a87e8.js.map