(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{226:function(t,e,n){var content=n(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("700a9420",content,!0,{sourceMap:!1})},233:function(t,e,n){"use strict";n.r(e);var r=[{href:"https://www.aaaimx.org/",label:"www.aaaimx.org",external:!0,icon:"web"},{href:"https://www.facebook.com/aaaimx",label:"AAAI Student Chapter",external:!0,icon:"facebook"},{href:"https://www.instagram.com/aaaimx/",label:"@aaaimx",external:!0,icon:"instagram"},{href:"https://www.linkedin.com/company/aaaimx/",label:"in/aaaimx",external:!0,icon:"linkedin"},{href:"https://github.com/aaaimx",label:"AAAIMX",external:!0,icon:"github"}],l={data:function(){return{socialLinks:r}}},o=(n(241),n(29)),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-8 is-offset-2"},[e("nav",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[this._l(this.socialLinks,(function(link){return e("a",{key:link.icon,staticClass:"social-link",attrs:{href:link.href,target:"_blank"}},[e("b-icon",{attrs:{icon:link.icon}})],1)})),this._v(" "),e("a",{staticClass:"social-link",attrs:{href:"mailto:contact@aaaimx.org",target:"_blank"}},[e("b-icon",{attrs:{icon:"email"}})],1)],2)]),this._v(" "),this._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"level-right"},[e("small",{staticClass:"level-item"},[this._v("\n        © AAAIMX Student Chapter. All Rights Reserved.\n      ")])])}],!1,null,null,null);e.default=component.exports},241:function(t,e,n){"use strict";n(226)},242:function(t,e,n){(e=n(50)(!1)).push([t.i,".social-link{color:var(--textLight);margin-right:.3rem}",""]),t.exports=e},262:function(t,e,n){var content=n(361);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("1b7833da",content,!0,{sourceMap:!1})},360:function(t,e,n){"use strict";n(262)},361:function(t,e,n){(e=n(50)(!1)).push([t.i,':root{--background:#f9f3de}body,html{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;background:#f9f3de;background:var(--background)}footer{background-color:#f2f6fa!important}.topNav{border-top:5px solid maroon}.topNav .container{border-bottom:1px solid #e6eaee}.container .columns{margin:3rem 0}.navbar-menu .navbar-item{padding:0 2rem}aside.menu{padding-top:3rem}aside.menu .menu-list{line-height:1.5}aside.menu .menu-label{padding-left:10px;font-weight:700}.button.is-primary.is-alt{background:#d9ad26;font-weight:700;font-size:14px;height:3rem;line-height:2.8}.media-left img{border-radius:50%}.media-content p{font-size:14px;line-height:2.3;font-weight:700;color:#8f99a3}.media-content .content h4{margin-bottom:.1em}article.post{margin:1rem;padding-bottom:1rem;border-bottom:1px solid #e6eaee}article.post:last-child{padding-bottom:0;border-bottom:none}.menu-list li{padding:5px}',""]),t.exports=e},364:function(t,e,n){"use strict";n.r(e);n(72),n(157),n(53),n(35);var r=n(7),l={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("https://aaaimx-discord.herokuapp.com/api/members/");case 3:return data=e.sent,e.abrupt("return",{members:data.members,list:data.members,roles:data.roles,total:0,isLoading:!1,listQuery:{page:1,limit:10,offset:0,role:null}});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"AAAIMX Community | Members",meta:[{hid:"description",name:"description",content:"We are a group of students and researchers from the ITM along with researchers from the Center for Mathematical Research (CIMAT) and CentroGeo."}]}},watch:{listQuery:{handler:function(t){this.filterMembers()},deep:!0}},methods:{filterMembers:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.listQuery.limit,t.listQuery.page,t.listQuery.limit;t.list=t.members,t.total=t.members.length,t.listQuery.role&&(t.list=t.list.filter((function(e){return-1!==e.roles.indexOf(t.listQuery.role)}))),t.isLoading=!1}),1e3),window.scrollTo(0,0)}}},o=(n(360),n(29)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar is-transparent is-fixed-top topNav"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"navbar-menu",attrs:{id:"topNav"}},[n("div",{staticClass:"navbar-start"}),t._v(" "),n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"navbar-item"},[n("div",{staticClass:"field is-grouped"},[n("p",{staticClass:"control"},[n("a",{staticClass:"button is-small is-primary"},[n("b-icon",{attrs:{icon:"discord"}}),t._v(" \n                  "),n("span",[t._v(" Become a member ")])],1)])])])])])])]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("section",{staticClass:"hero is-primary is-bold"},[n("div",{staticClass:"hero-body"},[t._m(1),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-9"},[n("div",{staticClass:"box content"},[t._l(3,(function(e){return[t.isLoading?n("article",{key:e,staticClass:"post"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-left"},[n("p",{staticClass:"image is-48x48"},[n("b-skeleton",{attrs:{circle:"",width:"48px",height:"48px"}})],1)]),t._v(" "),n("div",{staticClass:"media-content"},[n("div",{staticClass:"content"},[n("p",[n("b-skeleton",{attrs:{active:""}}),t._v(" "),n("b-skeleton",{attrs:{height:"80px"}})],1)]),t._v(" "),n("nav",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-left"},t._l(3,(function(i){return n("a",{key:i,staticClass:"level-item"},[n("span",{staticClass:"icon is-small"},[n("b-skeleton")],1)])})),0)])])])]):t._e()]})),t._v(" "),t._l(t.list,(function(e){return n("article",{key:e.id,staticClass:"post"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-left"},[n("p",{staticClass:"image is-48x48"},[n("img",{attrs:{src:e.avatar}})])]),t._v(" "),n("div",{staticClass:"media-content"},[n("div",{staticClass:"content"},[n("h4",[t._v(t._s(e.name))]),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("@"+t._s(e.username))]),t._v(" joined at\n                    "+t._s(e.dateJoined)+" "),n("br"),t._v(" "),t._l(e.roles,(function(e){return n("b-tag",{key:e,attrs:{rounded:"",type:"is-link is-light"}},[n("a",{on:{click:function(n){t.listQuery.role=e}}},[t._v(t._s(e))])])}))],2)]),t._v(" "),n("div",{staticClass:"media-right is-hidden-mobile"},[n("span",{staticClass:"has-text-grey-light"},[n("i",{staticClass:"fa fa-id-card"}),t._v(" "+t._s(e.id))])])])])}))],2)]),t._v(" "),n("div",{staticClass:"column is-3"},[n("a",{staticClass:"button is-primary is-rounded is-block is-alt is-small",attrs:{href:"#"}},[t._v("\n            "+t._s(t.list.length)+" of "+t._s(t.total)+" members")]),t._v(" "),n("aside",{staticClass:"menu"},[n("p",{staticClass:"menu-label"},[t._v("Tags")]),t._v(" "),n("ul",{staticClass:"menu-list"},t._l(t.roles,(function(e){return n("b-tag",{key:e.name,style:{border:"solid 1px "+e.color,margin:"2px"},attrs:{rounded:"",type:t.listQuery.role===e.name?"is-link":"is-info is-light",size:"is-small"}},[n("a",{on:{click:function(n){t.listQuery.role=e.name}}},[n("b",[t._v(t._s(e.name))])])])})),1)])])])])]),t._v(" "),n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content has-text-centered"},[n("Footer")],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-item"},[e("img",{attrs:{src:"https://www.aaaimx.org/img/sprites/aaai-transpeps.png",height:"28"}})]),this._v(" "),e("div",{staticClass:"navbar-burger burger",attrs:{"data-target":"topNav"}},[e("span"),this._v(" "),e("span"),this._v(" "),e("span")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("figure",{staticClass:"image is-128x128"},[e("img",{attrs:{src:"https://www.aaaimx.org/img/sprites/aaaimx-transparent.png"}})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(233).default,Footer:n(233).default})}}]);