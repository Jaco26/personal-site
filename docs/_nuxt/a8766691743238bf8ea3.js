(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{181:function(t,e,n){var content=n(190);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("694a73e0",content,!0,{sourceMap:!1})},182:function(t,e,n){var content=n(192);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("71c23771",content,!0,{sourceMap:!1})},184:function(t,e,n){"use strict";var o=n(4),r=n(17),l=n(22),c=n(112),h=n(57),d=n(11),f=n(39).f,m=n(58).f,v=n(10).f,w=n(186).trim,y=o.Number,S=y,k=y.prototype,x="Number"==l(n(73)(k)),C="trim"in String.prototype,O=function(t){var e=h(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,l=(e=C?e.trim():w(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var code,c=e.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>r)return NaN;return parseInt(c,o)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(x?d((function(){k.valueOf.call(n)})):"Number"!=l(n))?c(new S(O(e)),n,y):O(e)};for(var _,M=n(9)?f(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;M.length>P;P++)r(S,_=M[P])&&!r(y,_)&&v(y,_,m(S,_));y.prototype=k,k.constructor=y,n(12)(o,"Number",y)}},185:function(t,e,n){var o=n(8);o(o.P,"Array",{fill:n(188)}),n(74)("fill")},186:function(t,e,n){var o=n(8),r=n(21),l=n(11),c=n(187),h="["+c+"]",d=RegExp("^"+h+h+"*"),f=RegExp(h+h+"*$"),m=function(t,e,n){var r={},h=l((function(){return!!c[t]()||"​"!="​"[t]()})),d=r[t]=h?e(v):c[t];n&&(r[n]=d),o(o.P+o.F*h,"String",r)},v=m.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(f,"")),t};t.exports=m},187:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},188:function(t,e,n){"use strict";var o=n(30),r=n(110),l=n(23);t.exports=function(t){for(var e=o(this),n=l(e.length),c=arguments.length,h=r(c>1?arguments[1]:void 0,n),d=c>2?arguments[2]:void 0,f=void 0===d?n:r(d,n);f>h;)e[h++]=t;return e}},189:function(t,e,n){"use strict";var o=n(181);n.n(o).a},190:function(t,e,n){(t.exports=n(28)(!1)).push([t.i,".ctrl-col[data-v-95b291e8]{padding:0 2rem .2rem 0}.ctrl-col-end[data-v-95b291e8]{padding:0}.b-slider[data-v-95b291e8]{margin-bottom:1.2rem;margin-top:.3rem}",""])},191:function(t,e,n){"use strict";var o=n(182);n.n(o).a},192:function(t,e,n){(t.exports=n(28)(!1)).push([t.i,".modal[data-v-e2f1b6e8]{position:absolute;top:0;left:0;height:100%;width:100%;background:rgba(0,0,0,.66667);z-index:3}.modal-content[data-v-e2f1b6e8]{position:relative;top:-20%;z-index:4;background:#fff}",""])},195:function(t,e,n){"use strict";n.r(e);n(59);var o={data:function(){return{ctxProvider:{ctx:null}}},inject:["windowSize","breakpoint"],provide:function(){return{ctxProvider:this.ctxProvider}},mounted:function(){this.ctxProvider.ctx=this.$refs.gameCanvas.getContext("2d")},computed:{hasCtx:function(){return!!this.ctxProvider.ctx},dimensions:function(){var t={width:0,height:0,nCols:0,nRows:0};return this.breakpoint.isMobile?(t.width=288,t.height=360,t.nCols=32,t.nRows=40):this.breakpoint.isTablet?(t.width=720,t.height=480,t.nCols=60,t.nRows=40):(t.width=900,t.height=600,t.nCols=60,t.nRows=40),t},snakeOptions:function(){var t={col:0,row:0};return this.breakpoint.isMobile?(t.col=14,t.row=9):this.breakpoint.isTablet?(t.col=20,t.row=13):(t.col=29,t.row=19),t}}},r=n(2),l=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{ref:"gameCanvas",attrs:{height:this.dimensions.height,width:this.dimensions.width}}),this._v(" "),this._t("default",null,null,{hasCtx:this.hasCtx,dimensions:this.dimensions,snakeOptions:this.snakeOptions})],2)}),[],!1,null,null,null).exports,c=(n(184),n(75),n(31),n(18),n(14),n(40),n(51));function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),t}var m=n(26);function v(t,e){return!e||"object"!==Object(m.a)(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,p){return(y=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t})(t,p)}function S(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}var k=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;h(this,t),this.listeners={},this.animationFrameHandle=null,this.cachedRunCallback=null,this._running=!1,this.animationRate=e}return f(t,[{key:"stop",value:function(){this._running=!1,cancelAnimationFrame(this.animationFrameHandle)}},{key:"resume",value:function(){return!(this._running||!this.cachedRunCallback)&&(this.run(this.cachedRunCallback),!0)}},{key:"run",value:function(t){var e,n=this;if(this._running=!0,this.cachedRunCallback||(this.cachedRunCallback=t.bind(this)),this.animationRate){var o=this.animationRate;e=function(){0===(o-=1)&&(t(),o=n.animationRate),n.animationFrameHandle=requestAnimationFrame(e)}}else e=function(){t(),n.animationFrameHandle=requestAnimationFrame(e)};e()}}]),t}(),x=function(){function t(e){var n=e.x,o=e.y,r=e.width,l=e.height;h(this,t),this.kind=1,this.x=n,this.y=o,this.width=r,this.height=l}return f(t,[{key:"color",get:function(){switch(this.kind){case 1:return"#abcd";case 2:return{strokeStyle:"lime",fillStyle:"#a29"};case 3:return{fillStyle:"#17b",strokeStyle:"#333"}}}}]),t}();var C=function t(e){var n=e.nRows,o=e.nCols,r=e.width,l=e.height;h(this,t),this.cells=function(t,e,n,o){for(var r=[],l=Math.floor(n/e),c=Math.floor(o/t),h=0;h<t;h++){for(var d=c*h,f=[],col=0;col<e;col++)f.push(new x({x:l*col,y:d,width:l,height:c}));r.push(f)}return r}(n,o,r,l)},O=(n(185),function(){function t(e){h(this,t),this.ctx=e}return f(t,[{key:"paintCell",value:function(t){this.ctx.beginPath(),this.ctx.rect(t.x,t.y,t.width,t.height),"string"==typeof t.color?(this.ctx.fillStyle=t.color,this.ctx.fill()):(this.ctx.fillStyle=t.color.fillStyle,this.ctx.strokeStyle=t.color.strokeStyle,this.ctx.stroke(),this.ctx.fill()),this.ctx.closePath()}},{key:"paintText",value:function(t){var text=t.text,e=t.font,n=t.fillStyle,o=t.x,r=t.y;this.ctx.fillStyle=n,this.ctx.font=e,this.ctx.fillText(text,o,r)}}]),t}()),_=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.row,col=e.col,o=e.gameMode;h(this,t),this.changeDirectionLock=!1,this.nSegmentsToPush=0,this.dx=1,this.dy=0,this.didCollideWithSelf=!1,this.gameMode=o,this.headCol=col,this.headRow=n,this.body=[{row:n,col:col}],this.bodyMap={},this.bodyMap["".concat(n,",").concat(col)]=!0}return f(t,[{key:"isSnake",value:function(t,e){return this.bodyMap["".concat(t,",").concat(e)]}},{key:"setDirection",value:function(t){var e=this,n=function(t,n){e.dx!==-t&&(e.dx=t),e.dy!==-n&&(e.dy=n),e.changeDirectionLock=!0},o={arrowLeft:function(){return n(-1,0)},arrowUp:function(){return n(0,-1)},arrowRight:function(){return n(1,0)},arrowDown:function(){return n(0,1)}};!this.changeDirectionLock&&o[t]&&o[t]()}},{key:"updateBody",value:function(){var t=this;if(this.bodyMap={},this.nSegmentsToPush>0){var e=this.body[this.body.length-1],n=e.row,col=e.col;this.body.push({row:n,col:col}),this.nSegmentsToPush-=1}else if("classic"===this.gameMode)for(var i=0;i<this.body.length-1;i++){var o=this.body[i+1],r=o.row,l=o.col;this.body[i]={row:r,col:l}}this.headCol+=this.dx,this.headRow+=this.dy,this.body[this.body.length-1]={col:this.headCol,row:this.headRow},this.body.forEach((function(e){var n=e.row,col=e.col;t.bodyMap["".concat(n,",").concat(col)]&&(t.didCollideWithSelf=!0),t.bodyMap["".concat(n,",").concat(col)]=!0})),this.changeDirectionLock=!1}}]),t}();function M(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function P(t,e){return Math.floor(Math.random()*(e-t)+t)}var R,j,E=function(t){function e(){var t,n;h(this,e);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(n=v(this,(t=w(e)).call.apply(t,[this].concat(r)))).score=0,n.food={row:null,col:null},n.width=0,n.height=0,n.nRows=null,n.nCols=null,n.snake=null,n.cellMap=null,n.painter=null,n}return S(e,t),f(e,[{key:"setup",value:function(t){var e=t.ctx,n=t.animationRate,o=t.dimensions,r=t.snakeOptions,l=t.gameMode;this.score=0,this.width=o.width,this.height=o.height,this.nRows=o.nRows,this.nCols=o.nCols,this.cellMap=new C(o),this.painter=new O(e),this.snake=new _(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(source,!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):M(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},r,{gameMode:l})),this.animationRate=n,this.generateFood(),this.paintCells()}},{key:"resize",value:function(t,e,n,o){this.width=t,this.height=e,this.nRows=n,this.nCols=o,this.cellMap=new C({nRows:n,nCols:o,width:t,height:e}),this.paintCells()}},{key:"getCellKind",value:function(t,col){return this.snake.bodyMap["".concat(t,",").concat(col)]?2:this.food.row===t&&this.food.col===col?3:1}},{key:"paintCells",value:function(){var t=this;this.painter.ctx.clearRect(0,0,this.painter.ctx.canvas.width,this.painter.ctx.canvas.height),this.cellMap.cells.forEach((function(e,n){e.forEach((function(e,o){e.kind=t.getCellKind(n,o),t.painter.paintCell(e)}))}))}},{key:"generateFood",value:function(){var col=P(0,this.nCols),t=P(0,this.nRows);if(this.snake.bodyMap["".concat(t,",").concat(col)])return this.generateFood();this.food.col=col,this.food.row=t}},{key:"snakeDidEatFood",value:function(){return this.snake.headRow===this.food.row&&this.snake.headCol===this.food.col}},{key:"gameIsOver",value:function(){var t=this.snake,e=t.headCol,n=t.headRow;return e<0||e>=this.nCols||n<0||n>=this.nRows||this.snake.didCollideWithSelf}},{key:"paintScore",value:function(){this.painter.paintText({text:this.score,fillStyle:"black",font:"20px Arial",x:this.width-25,y:30})}},{key:"paintGameOver",value:function(){this.painter.paintText({text:"GAME OVER ! ! !",fillStyle:"red",font:"25px Arial",x:this.width/2-80,y:60})}}]),e}(k),D={inject:["ctxProvider","windowSize"],props:{dimensions:Object,controls:Object,snakeOptions:Object,gameMode:String,showScore:Boolean,animationRate:Number,gameOn:Boolean,gameOver:Boolean,score:Number},watch:{gameOn:function(t){var e=this;t?R.cachedRunCallback?R.resume():R.run((function(){if(R.snake.updateBody(),R.gameIsOver())return R.stop(),R.paintGameOver(),e.update("gameOn",!1),void e.update("gameOver",!0);R.snakeDidEatFood()&&(e.update("score",e.score+1),R.score+=1,R.generateFood(),R.snake.nSegmentsToPush+=6),R.paintCells(),e.showScore&&R.paintScore()})):R.stop()},controls:{deep:!0,handler:function(t){var e=t.arrowLeft,n=t.arrowUp,o=t.arrowRight,r=t.arrowDown,p=t.p,l=t.r;p&&(R.stop(),this.update("gameOn",!1)),l&&(this.gameOver?this.$emit("reset"):(R.resume(),this.update("gameOn",!0))),e&&R.snake.setDirection("arrowLeft"),n&&R.snake.setDirection("arrowUp"),o&&R.snake.setDirection("arrowRight"),r&&R.snake.setDirection("arrowDown")}},animationRate:function(t){R.animationRate=t},gameMode:function(t){R.snake.gameMode=t},dimensions:{deep:!0,handler:function(t,e){t.width===e.width&&t.height===e.height||R.resize(t.width,t.height,t.nRows,t.nCols)}}},mounted:function(){R=new E,this.setup()},methods:{update:function(t,e){this.$emit("update:".concat(t),e)},setup:function(){R.setup({ctx:this.ctxProvider.ctx,dimensions:this.dimensions,snakeOptions:this.snakeOptions,animationRate:this.animationRate,gameMode:this.gameMode})}},render:function(t){console.log("hey we reneder")}},T=Object(r.a)(D,void 0,void 0,!1,null,null,null).exports,$={props:{showSettings:Boolean,gameMode:String,snakeSpeed:Object,showScore:Boolean}},N=Object(r.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{active:t.showSettings,"has-modal-card":"","full-screen":"","can-cancel":!1},on:{"update:active":function(e){t.showSettings=e}}},[n("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("Settings")])]),t._v(" "),n("section",{staticClass:"modal-card-body"},[n("div",{staticClass:"column"},[n("b-field",{staticClass:"is-marginless",attrs:{label:"Game Mode"}}),t._v(" "),n("b-select",{ref:"gameModeSelect",attrs:{expanded:"",size:"is-small",placeholder:"Select a game mode",value:t.gameMode},on:{input:function(e){return t.$emit("update:gameMode",e)}}},[n("option",{attrs:{value:"classic"}},[t._v("Classic")]),t._v(" "),n("option",{attrs:{value:"polluter"}},[t._v("Polluter")])])],1),t._v(" "),n("div",{staticClass:"column"},[n("b-field",{staticClass:"is-marginless",attrs:{label:"Snake Speed"}}),t._v(" "),n("b-slider",{attrs:{min:t.snakeSpeed.min,max:t.snakeSpeed.max,value:t.snakeSpeed.value},on:{input:function(e){return t.$emit("update:snakeSpeed",e)}}},t._l([1,2,3,4,5,6,7],(function(e){return n("b-slider-tick",{key:e,attrs:{value:e}},[t._v(t._s(e))])})),1)],1),t._v(" "),n("div",{staticClass:"column"},[n("b-field",{staticClass:"is-marginless",attrs:{label:"Show Score"}}),t._v(" "),n("b-switch",{staticStyle:{"margin-top":".2rem"},attrs:{rounded:!1,value:t.showScore},on:{input:function(e){return t.$emit("update:showScore",e)}}})],1)]),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[n("b-button",{attrs:{type:"is-primary"},on:{click:function(e){return t.$emit("update:showSettings",!1)}}},[t._v("Done")])],1)])])}),[],!1,null,null,null).exports,L={inject:["breakpoint"],props:{controls:Object},components:{GameCanvas:l,Snake:T,TheMobileSettingsModal:N},data:function(){return{showSettings:!1,snakeSpeed:{value:4,min:1,max:7},gameState:{gameOn:!1,gameOver:!1,score:0},gameMode:"classic",showScore:!1}},mounted:function(){this.breakpoint.isMobile&&(this.snakeSpeed.value=2),this.loadSettings(),window.addEventListener("beforeunload",this.saveSettings)},beforeDestroy:function(){window.removeEventListener("beforeunload",this.saveSettings)},computed:{animationRate:function(){switch(this.snakeSpeed.value){case 1:return 8;case 2:return 7;case 3:return 6;case 4:return 5;case 5:return 4;case 6:return 3;case 7:return 2}},gameStateControlText:function(){return this.gameState.gameOn?"Pause":this.gameState.gameOver?"Reset":"Start"}},methods:{loadSettings:function(){var t=localStorage.getItem("snake");t&&(t=JSON.parse(t),this.showScore=t.showScore,this.gameMode=t.gameMode,this.snakeSpeed.value=t.snakeSpeed.value)},saveSettings:function(){localStorage.setItem("snake",JSON.stringify({showScore:this.showScore,gameMode:this.gameMode,snakeSpeed:this.snakeSpeed}))},reset:function(){this.$refs.snake.setup(),this.gameState.gameOn=!1,this.gameState.gameOver=!1,this.gameState.score=0},onGameStateControlClick:function(){this.gameState.gameOver?this.reset():this.gameState.gameOn=!this.gameState.gameOn},onShowTouchSettings:function(){this.showSettings=!0,this.gameState.gameOn=!1}}},I=(n(189),Object(r.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"columns is-centered is-flex-mobile"},[n("div",{staticClass:"column is-narrow is-narrow is-narrow-mobile"},[n("div",{staticClass:"columns level is-hidden-mobile",staticStyle:{margin:"0"}},[n("div",{staticClass:"column ctrl-col"},[n("b-button",{on:{click:t.onGameStateControlClick}},[t._v("\n            "+t._s(t.gameStateControlText)+"\n          ")])],1),t._v(" "),n("div",{staticClass:"column ctrl-col"}),t._v(" "),n("div",{staticClass:"column ctrl-col"},[n("b-field",{staticClass:"is-marginless",attrs:{label:"Game Mode"}}),t._v(" "),n("b-select",{ref:"gameModeSelect",attrs:{expanded:"",size:"is-small",placeholder:"Select a game mode"},nativeOn:{change:function(t){return function(t){return t.target.blur()}(t)}},model:{value:t.gameMode,callback:function(e){t.gameMode=e},expression:"gameMode"}},[n("option",{attrs:{value:"classic"}},[t._v("Classic")]),t._v(" "),n("option",{attrs:{value:"polluter"}},[t._v("Polluter")])])],1),t._v(" "),n("div",{staticClass:"column ctrl-col"},[n("b-field",{staticClass:"is-marginless",attrs:{label:"Snake Speed"}}),t._v(" "),n("b-slider",{attrs:{min:t.snakeSpeed.min,max:t.snakeSpeed.max},model:{value:t.snakeSpeed.value,callback:function(e){t.$set(t.snakeSpeed,"value",e)},expression:"snakeSpeed.value"}},t._l([1,2,3,4,5,6,7],(function(e){return n("b-slider-tick",{key:e,attrs:{value:e}},[t._v(t._s(e))])})),1)],1),t._v(" "),n("div",{staticClass:"column is-narrow ctrl-col-end"},[n("b-field",{staticClass:"is-marginless",attrs:{label:"Show Score"}}),t._v(" "),n("b-switch",{staticStyle:{"margin-top":".2rem"},attrs:{rounded:!1},model:{value:t.showScore,callback:function(e){t.showScore=e},expression:"showScore"}})],1)]),t._v(" "),n("game-canvas",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hasCtx,r=e.dimensions,l=e.snakeOptions;return[o?n("Snake",t._b({ref:"snake",attrs:{dimensions:r,controls:t.controls,gameMode:t.gameMode,showScore:t.showScore,snakeOptions:l,animationRate:t.animationRate},on:{reset:t.reset}},"Snake",t.gameState,!1,!0)):t._e()]}}])}),t._v(" "),n("div",{staticClass:"is-hidden-tablet"},[n("div",{staticClass:"columns is-flex-mobile is-marginless"},[n("div",{staticClass:"column ctrl-col"},[n("b-button",{staticClass:"is-block-mobile",nativeOn:{touchstart:function(e){return t.onGameStateControlClick(e)}}},[t._v("\n              "+t._s(t.gameStateControlText)+"\n            ")]),t._v(" "),n("b-button",{nativeOn:{touchstart:function(e){return t.onShowTouchSettings(e)}}},[t._v("Settings")])],1),t._v(" "),n("div",{staticClass:"column is-narrow-mobile ctrl-col-end"},[n("div",{staticClass:"columns is-marginless is-centered is-flex-mobile"},[n("div",{staticClass:"column is-narrow-mobile is-marginless is-paddingless"},[n("b-button",{attrs:{size:"is-large"},nativeOn:{touchstart:function(e){return t.$emit("mobileControlDown","up")},touchend:function(e){return t.$emit("mobileControlUp","up")}}},[n("b-icon",{attrs:{icon:"menu-up"}})],1)],1)]),t._v(" "),n("div",{staticClass:"columns is-marginless is-centered is-flex-mobile"},[n("div",{staticClass:"column is-marginless is-paddingless is-narrow-mobile"},[n("b-button",{attrs:{size:"is-large"},nativeOn:{touchstart:function(e){return t.$emit("mobileControlDown","left")},touchend:function(e){return t.$emit("mobileControlUp","left")}}},[n("b-icon",{attrs:{icon:"menu-left"}})],1),t._v(" "),n("b-button",{attrs:{size:"is-large"},nativeOn:{touchstart:function(e){return t.$emit("mobileControlDown","down")},touchend:function(e){return t.$emit("mobileControlUp","down")}}},[n("b-icon",{attrs:{icon:"menu-down"}})],1),t._v(" "),n("b-button",{attrs:{size:"is-large"},nativeOn:{touchstart:function(e){return t.$emit("mobileControlDown","right")},touchend:function(e){return t.$emit("mobileControlUp","right")}}},[n("b-icon",{attrs:{icon:"menu-right"}})],1)],1)])])]),t._v(" "),n("TheMobileSettingsModal",{attrs:{showSettings:t.showSettings,gameMode:t.gameMode,showScore:t.showScore,snakeSpeed:t.snakeSpeed},on:{"update:showSettings":function(e){t.showSettings=e},"update:show-settings":function(e){t.showSettings=e},"update:gameMode":function(e){t.gameMode=e},"update:game-mode":function(e){t.gameMode=e},"update:showScore":function(e){t.showScore=e},"update:show-score":function(e){t.showScore=e},"update:snakeSpeed":function(e){t.snakeSpeed.value=e}}})],1)],1)])])}),[],!1,null,"95b291e8",null).exports),F=function(){function t(){h(this,t),this.fillStyle="#17b",this.strokeStyle="#333",this.x=0,this.y=0,this.r=0,this.dx=0,this.dy=0}return f(t,[{key:"updatePosition",value:function(){this.x+=this.dx,this.y+=this.dy}}]),t}(),A=function(){function t(){h(this,t),this.fillStyle="#a29",this.strokeStyle="lime",this.x=0,this.y=0,this.width=0,this.height=0,this.dx=0,this.dy=0,this.isLeft=!1}return f(t,[{key:"updatePosition",value:function(){this.y+=this.dy}}]),t}(),U=function(){function t(e){var n=e.ctx,o=e.width,r=e.height;h(this,t),this.bgColor="#abcd",this.ctx=n,this.width=o,this.height=r}return f(t,[{key:"_draw",value:function(t,e){this.ctx.beginPath(),this.ctx.fillStyle=t.fillStyle,this.ctx.strokeStyle=t.strokeStyle,e(),this.ctx.fill(),this.ctx.stroke(),this.ctx.closePath()}},{key:"arc",value:function(t){var e=this;this._draw(t,(function(){e.ctx.arc(t.x,t.y,t.r,0,2*Math.PI)}))}},{key:"rect",value:function(t){var e=this;this._draw(t,(function(){e.ctx.rect(t.x,t.y,t.width,t.height)}))}},{key:"text",value:function(t){this.ctx.beginPath(),this.ctx.fillStyle=t.fillStyle||"red",this.ctx.font=t.font||"30px Arial",this.ctx.fillText(t.text||"",t.x||this.ctx.canvas.width/2-30,t.y||60)}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.width,this.height),this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.width,this.height)}}]),t}(),G=function(){function t(e){h(this,t),this.env=e}return f(t,[{key:"checkPaddlesFloorCiel",value:function(t){var e=this;t.forEach((function(t){t.y+t.height>e.env.height?(t.dy=0,t.y=e.env.height-t.height):t.y<0&&(t.dy=0,t.y=0)}))}},{key:"checkBallFloorCiel",value:function(t){t.y+t.r>this.env.height?(t.y=this.env.height-(t.r+1),t.dy=-t.dy):t.y-t.r<0&&(t.y=0+(t.r+1),t.dy=-t.dy)}},{key:"_ballPaddleCheckX",value:function(t,e){return e.isLeft?t.x-t.r<e.x+e.width:t.x+t.r>e.x}},{key:"_ballPaddleDyMod",value:function(t,e){var n=e.y+e.height/2;return(t.y-n)/10}},{key:"checkBallPaddle",value:function(t,e){return!!(t.y<e.y+e.height&&t.y>e.y&&this._ballPaddleCheckX(t,e))&&(t.dy=this._ballPaddleDyMod(t,e),t.dx=-t.dx,t.x=t.dx+(e.isLeft?e.width:e.x),!0)}},{key:"checkBallHitWall",value:function(t){return t.x+t.r>this.env.width||t.x-t.r<0}}]),t}(),B=function(t){function e(){var t,n;h(this,e);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(n=v(this,(t=w(e)).call.apply(t,[this].concat(r)))).ball=null,n.leftPaddle=null,n.rightPaddle=null,n.physics=null,n.painter=null,n}return S(e,t),f(e,[{key:"setup",value:function(t){var e=t.ctx,n=t.width,o=t.height;this.physics=new G({width:n,height:o}),this.painter=new U({ctx:e,width:n,height:o});var r=n/2,l=o/2,c=new F;c.x=r,c.y=l,c.r=10,c.dx=Math.random()>.5?5:-5,c.dy=0,this.ball=c;var h=new A;h.x=0,h.y=l-80/3,h.width=15,h.height=80,h.isLeft=!0,this.leftPaddle=h;var d=new A;d.x=n-15,d.y=l-80/3,d.width=15,d.height=80,this.rightPaddle=d,this.paint()}},{key:"paint",value:function(){this.painter.clear(),this.painter.arc(this.ball),this.painter.rect(this.leftPaddle),this.painter.rect(this.rightPaddle)}}]),e}(k),z={inject:["ctxProvider"],props:{dimensions:Object,controls:Object,gameOn:Boolean,gameOver:Boolean,score:Number},watch:{gameOn:function(t){var e=this;t?j.cachedRunCallback?j.resume():j.run((function(){var t=j.physics.checkBallPaddle(j.ball,j.leftPaddle),n=j.physics.checkBallPaddle(j.ball,j.rightPaddle);j.physics.checkBallFloorCiel(j.ball),j.physics.checkPaddlesFloorCiel([j.leftPaddle,j.rightPaddle]),j.leftPaddle.updatePosition(),j.rightPaddle.updatePosition(),j.ball.updatePosition(),j.physics.checkBallHitWall(j.ball)?(e.update("gameOver",!0),e.update("gameOn",!1),j.stop(),j.painter.text({text:"GAME OVER ! ! !"})):(t||n)&&(e.update("score",e.score+1),e.score>0&&e.score%5==0&&(j.ball.dx>0?j.ball.dx+=1:j.ball.dx-=1)),j.paint()})):j.stop()},controls:{deep:!0,handler:function(t){var e=t.arrowUp,n=t.arrowDown,o=t.w,s=t.s,p=t.p,r=t.r;p&&(j.stop(),this.update("gameOn",!1)),r&&(this.gameOver?this.$emit("reset"):(j.resume(),this.update("gameOn",!0))),j.rightPaddle.dy=e&&!n?-4:n&&!e?4:0,j.leftPaddle.dy=o&&!s?-4:!o&&s?4:0}}},mounted:function(){j=new B,this.setup()},methods:{update:function(t,e){this.$emit("update:".concat(t),e)},setup:function(){j.setup({ctx:this.ctxProvider.ctx,width:this.dimensions.width,height:this.dimensions.height})}},render:function(){}},H={inject:["breakpoint"],components:{GameCanvas:l,Pong:Object(r.a)(z,void 0,void 0,!1,null,null,null).exports},props:{controls:Object},mounted:function(){console.log("just mounted pong")},beforeDestroy:function(){console.log("about to destroy pong")},data:function(){return{gameState:{gameOn:!1,gameOver:!1,score:0}}},computed:{gameStateControlText:function(){return this.gameState.gameOn?"Pause":this.gameState.gameOver?"Reset":"Start"}},methods:{reset:function(){this.$refs.pong.setup(),this.gameState.gameOn=!1,this.gameState.gameOver=!1,this.gameState.score=0},onGameStateControlClick:function(){this.gameState.gameOver?this.$refs.pong.reset():this.gameState.gameOn=!this.gameState.gameOn}}},K=Object(r.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"columns is-centered is-vcentered"},[n("div",{staticClass:"is-hidden-desktop column is-narrow"},[t._v("\n      Sorry, my version of Pong doesn't work on your phone/tablet yet. You can play it on a laptop or desktop though!\n    ")]),t._v(" "),n("div",{staticClass:"is-hidden-touch column is-narrow"},[n("div",{staticClass:"columns level"},[n("div",{staticClass:"column"},[n("b-button",{on:{click:t.onGameStateControlClick}},[t._v(t._s(t.gameStateControlText))])],1),t._v(" "),n("div",{staticClass:"column is-narrow"},[n("span",[t._v("Score: "+t._s(t.gameState.score))])])]),t._v(" "),n("game-canvas",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hasCtx,r=e.dimensions;return[o?n("Pong",t._b({ref:"pong",attrs:{dimensions:r,controls:t.controls},on:{reset:t.reset}},"Pong",t.gameState,!1,!0)):t._e()]}}])})],1)])])}),[],!1,null,null,null).exports,V={37:"arrowLeft",38:"arrowUp",39:"arrowRight",40:"arrowDown",65:"a",87:"w",68:"d",83:"s",80:"p",82:"r"},W={middleware:function(t){t.store.commit("SET_BREADCRUMBS",[{to:"/",text:"Home"},{to:"/games",text:"Games"},{to:"/games/".concat(t.params.game),text:t.params.game[0].toUpperCase()+t.params.game.slice(1).toLowerCase()}])},data:function(){return{showModal:!0,games:{snake:I,pong:K},controls:{arrowLeft:!1,arrowUp:!1,arrowRight:!1,arrowDown:!1,a:!1,w:!1,d:!1,s:!1,p:!1,r:!1}}},computed:{selectedGame:function(){return{component:this.games[this.$route.params.game],name:this.$route.params.game}}},methods:{handleKeyDown:function(t){this.controls[V[t.keyCode]]=!0},handleKeyUp:function(t){this.controls[V[t.keyCode]]=!1},onMobileControlDown:function(t){"left"===t?this.controls.arrowLeft=!0:"up"===t?this.controls.arrowUp=!0:"right"===t?this.controls.arrowRight=!0:"down"===t&&(this.controls.arrowDown=!0)},onMobileControlUp:function(t){"left"===t?this.controls.arrowLeft=!1:"up"===t?this.controls.arrowUp=!1:"right"===t?this.controls.arrowRight=!1:"down"===t&&(this.controls.arrowDown=!1)}},mounted:function(){window.scrollTo(0,0),document.querySelector("html").style.overflow="hidden",document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)},beforeRouteLeave:function(t,e,n){document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp),document.querySelector("html").style.overflow="auto",this.$refs[this.selectedGame.name].reset(),n()}},J=(n(191),Object(r.a)(W,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("j-row",{staticClass:"justify-center align-center"},[t.showModal?n("article",{staticClass:"modal"},[n("j-container",{staticClass:"fullheight flex"},[n("j-row",[n("j-col",{staticClass:"d-flex justify-center align-center"},[n("section",{staticClass:"modal-content"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-title"},[t._v("\n                I'm working on site renovations so the game controls look pretty ugly right now.\n              ")]),t._v(" "),n("div",{staticClass:"card-title"},[t._v('\n                Hit the "r" to start/resume a game and "p" to pause\n              ')]),t._v(" "),n("div",{staticClass:"card-actions text-right"},[n("button",{staticClass:"btn primary",on:{click:function(e){t.showModal=!1}}},[t._v("Ok")])])])])])],1)],1)],1):t._e(),t._v(" "),n("j-col",{staticClass:"mobile-12 tablet-10"},[n(t.selectedGame.component,{ref:t.selectedGame.name,tag:"component",attrs:{controls:t.controls},on:{mobileControlDown:t.onMobileControlDown,mobileControlUp:t.onMobileControlUp}})],1)],1)}),[],!1,null,"e2f1b6e8",null));e.default=J.exports}}]);