(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{242:function(t,r,e){var content=e(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("4db9d57e",content,!0,{sourceMap:!1})},270:function(t,r,e){"use strict";var n=e(416),o=e(422),c=e(417),l=e(271),d=e(423),f=e(420),_=e(189),v=e(187),h=e(127),m=e(188),w=e(79),x=e(419),k=e(421),y=e(418),D=e(267),P=(e(112),{name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}}),N=e(92),component=Object(N.a)(P,(function(){var t=this,r=t._self._c;return r(n.a,{attrs:{dark:""}},[r(k.a,{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(r){t.drawer=r},expression:"drawer"}},[r(v.a,t._l(t.items,(function(e,i){return r(h.a,{key:i,attrs:{to:e.to,router:"",exact:""}},[r(m.a,[r(_.a,[t._v(t._s(e.icon))])],1),t._v(" "),r(w.a,[r(w.b,{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),r(o.a,{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r(c.a,{on:{click:function(r){r.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r(l.a,{attrs:{icon:""},on:{click:function(r){r.stopPropagation(),t.miniVariant=!t.miniVariant}}},[r(_.a,[t._v("mdi-"+t._s("chevron-".concat(t.miniVariant?"right":"left")))])],1),t._v(" "),r(l.a,{attrs:{icon:""},on:{click:function(r){r.stopPropagation(),t.clipped=!t.clipped}}},[r(_.a,[t._v("mdi-application")])],1),t._v(" "),r(l.a,{attrs:{icon:""},on:{click:function(r){r.stopPropagation(),t.fixed=!t.fixed}}},[r(_.a,[t._v("mdi-minus")])],1),t._v(" "),r(D.a,{domProps:{textContent:t._s(t.title)}}),t._v(" "),r(y.a),t._v(" "),r(l.a,{attrs:{icon:""},on:{click:function(r){r.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[r(_.a,[t._v("mdi-menu")])],1)],1),t._v(" "),r(x.a,[r(d.a,[r("Nuxt")],1)],1),t._v(" "),r(k.a,{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(r){t.rightDrawer=r},expression:"rightDrawer"}},[r(v.a,[r(h.a,{nativeOn:{click:function(r){t.right=!t.right}}},[r(m.a,[r(_.a,{attrs:{light:""}},[t._v(" mdi-repeat ")])],1),t._v(" "),r(w.b,[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),r(f.a,{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);r.a=component.exports},278:function(t,r,e){e(279),t.exports=e(280)},329:function(t,r,e){"use strict";e(242)},330:function(t,r,e){var n=e(21)(!1);n.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),t.exports=n},81:function(t,r,e){"use strict";var n=e(416),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(e(329),e(92)),component=Object(c.a)(o,(function(){var t=this,r=t._self._c;return r(n.a,{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);r.a=component.exports}},[[278,8,2,9]]]);