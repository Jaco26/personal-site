(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{183:function(t,e,o){var content=o(194);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("d75fb1ec",content,!0,{sourceMap:!1})},193:function(t,e,o){"use strict";var n=o(183);o.n(n).a},194:function(t,e,o){(t.exports=o(28)(!1)).push([t.i,"",""])},202:function(t,e,o){"use strict";o.r(e);o(76),o(111);var n={middleware:function(t){var e=t.params.article.replace(/-/g," ").split(" ").map((function(t){return t[0].toUpperCase()+t.slice(1).toLowerCase()})).join(" ");t.store.commit("SET_BREADCRUMBS",[{to:"/",text:"Home"},{to:"/thoughts",text:"Thoughts"},{to:"/thoughts/".concat(t.params.article),text:e}])},data:function(){return{posts:{}}}},c=(o(193),o(2)),component=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section",staticStyle:{"min-height":"calc(100vh - 52px) !important"}},[e("div",{staticClass:"container is-fluid"},[e("j-row",[e("j-col",[e(this.posts[this.$route.params.article],{tag:"component"})],1)],1)],1)])}),[],!1,null,"730680be",null);e.default=component.exports}}]);