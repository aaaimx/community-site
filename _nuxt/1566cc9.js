(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{226:function(e,t,r){var content=r(242);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(51).default)("700a9420",content,!0,{sourceMap:!1})},233:function(e,t,r){"use strict";r.r(t);var n=[{href:"https://www.aaaimx.org/",label:"www.aaaimx.org",external:!0,icon:"web"},{href:"https://www.facebook.com/aaaimx",label:"AAAI Student Chapter",external:!0,icon:"facebook"},{href:"https://www.instagram.com/aaaimx/",label:"@aaaimx",external:!0,icon:"instagram"},{href:"https://www.linkedin.com/company/aaaimx/",label:"in/aaaimx",external:!0,icon:"linkedin"},{href:"https://github.com/aaaimx",label:"AAAIMX",external:!0,icon:"github"}],o={data:function(){return{socialLinks:n}}},l=(r(241),r(29)),component=Object(l.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"column is-8 is-offset-2"},[t("nav",{staticClass:"level"},[t("div",{staticClass:"level-left"},[t("div",{staticClass:"level-item"},[this._l(this.socialLinks,(function(link){return t("a",{key:link.icon,staticClass:"social-link",attrs:{href:link.href,target:"_blank"}},[t("b-icon",{attrs:{icon:link.icon}})],1)})),this._v(" "),t("a",{staticClass:"social-link",attrs:{href:"mailto:contact@aaaimx.org",target:"_blank"}},[t("b-icon",{attrs:{icon:"email"}})],1)],2)]),this._v(" "),this._m(0)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"level-right"},[t("small",{staticClass:"level-item"},[this._v("\n        © AAAIMX Student Chapter. All Rights Reserved.\n      ")])])}],!1,null,null,null);t.default=component.exports},241:function(e,t,r){"use strict";r(226)},242:function(e,t,r){(t=r(50)(!1)).push([e.i,".social-link{color:var(--textLight);margin-right:.3rem}",""]),e.exports=t},261:function(e,t,r){var content=r(359);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(51).default)("9528bac8",content,!0,{sourceMap:!1})},269:function(e,t,r){e.exports=r.p+"img/logos.4b35cc2.png"},270:function(e,t,r){e.exports=r.p+"img/logo.98aa617.png"},358:function(e,t,r){"use strict";r(261)},359:function(e,t,r){(t=r(50)(!1)).push([e.i,":root{--background:#f9f3de;--textDark:rgba(0,0,0,0.66);--textLight:rgba(0,0,0,0.33)}body{background:#f9f3de!important;background:var(--background)!important;color:rgba(0,0,0,.66)!important;color:var(--textDark)!important}.field:not(:last-child){margin-bottom:1rem}.register{background:#fff}.left,.right{padding:2rem}.left .title{font-weight:800;letter-spacing:-2px}.left .colored{font-weight:700;margin-top:1rem!important;letter-spacing:-1px}.left p{color:rgba(0,0,0,.33);color:var(--textLight);font-size:1.15rem}.right .title{font-weight:800;letter-spacing:-1px}.right .description{margin-top:1rem;margin-bottom:1rem!important;font-size:1rem}.right .description,.right small{color:rgba(0,0,0,.33);color:var(--textLight)}input:focus{border-color:var(--brandColor)!important;box-shadow:0 0 0 1px var(--brandColor)!important}",""]),e.exports=t},365:function(e,t,r){"use strict";r.r(t);var n=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"column is-8 is-offset-2 register box"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-image"},[t("figure",{staticClass:"image "},[t("img",{attrs:{src:r(269),alt:"Placeholder image"}})])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column left is-hidden-mobile has-text-centered"},[n("img",{attrs:{src:"https://www.aaaimx.org/img/sections-background/community.jpg"}}),e._v(" "),n("h2",{staticClass:"title colored is-4"},[e._v("AAAIMX Student Chapter")]),e._v(" "),n("p",[e._v("\n              We are a group of students and researchers from the ITM along\n              with researchers from the Center for Mathematical Research\n              (CIMAT) and CentroGeo. "),n("br")]),e._v(" "),n("br"),e._v(" "),n("img",{attrs:{src:"https://www.aaaimx.org/img/sprites/aaai-transpeps.png",width:"90px",alt:""}}),e._v(" "),n("img",{attrs:{src:r(270),width:"90px",alt:""}}),e._v(" "),n("br"),e._v(" "),n("small",[e._v("\n              Contributing to more students having knowledge of Artificial\n              Intelligence and other increasingly popular related fields.\n            ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"has-text-centered"},[t("h1",{staticClass:"title is-4"},[this._v("\n                Inscripción a curso, taller o plática\n              ")]),this._v(" "),t("p",{staticClass:"description"},[this._v("\n                Ingrese sus datos para validar su inscripción y recibirá un\n                correo de confirmación.\n              ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("small",[t("em",[this._v("We appreciate your interest in helping this community that\n                  strives every day to be better especially for you.")])])}],o=r(23),l=(r(35),r(7)),c=r(271),m=r.n(c),d={fullname:null,email:null,enrollment:null,department:null,career:null,adscription:null},f={name:"EventRegisterForm",asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,t.next=3,r.$get("https://aaaimx-admin.herokuapp.com/api/events/future/");case 3:return data=t.sent,t.abrupt("return",{events:data.results,isLoading:!1,form:d,others:{department:"",career:"",adscription:""},careers:["Ingeniería en Gestión Empresarial","Ingeniería Ambiental","Ingeniería Bioquímica","Ingeniería Biomédica","Ingeniería Química","Ingeniería Eléctrica","Ingeniería Electrónica","Ingeniería Mecánica","Ingeniería Civil","Ingeniería Industrial","Ingeniería en Sistemas Computacionales","Licenciatura en Administración","Otro"],universities:["ITM","UADY","UPY","Anahuac Mayab","Otro"],departments:["Departamento de Sistemas y Computación (DSC)","Departamento de Ing. Eléctrica y Electrónica (DIEE)","Otro"]});case 5:case"end":return t.stop()}}),t)})))()},head:function(){return{title:"AAAIMX Community | Event Registration",meta:[{hid:"description",name:"description",content:"Contributing to more students having knowledge of Artificial Intelligence and other increasingly popular related fields."}]}},methods:{submit:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,e.form.fullname=e.form.fullname.toUpperCase(),e.form.enrollment=e.form.enrollment.toUpperCase(),"Otro"===e.form.adscription&&(e.form.adscription=e.others.adscription),"Otro"===e.form.career&&(e.form.career=e.others.career),"Otro"===e.form.department&&(e.form.department=e.others.department),console.log(e.form),t.next=10,e.$axios.$post("https://aaaimx-admin.herokuapp.com/api/participants/register/",e.form);case 10:e.$buefy.dialog.alert({title:"Respuesta enviada",message:"<b>¡Enhoranbuena!</b> Se ha enviado tu respuesta.<br/> Se te enviará un correo con el <b>link de acceso</b>, a más tardar 12 hrs antes del evento.<br/><b>¡Nos vemos pronto!</b>...",type:"is-success",hasIcon:!0,icon:"check-circle",ariaRole:"alertdialog",confirmText:"Entendido",ariaModal:!0}),e.reset(),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0),e.$buefy.dialog.alert({title:"Registro fallido",message:"No se ha podido completar tu <b>registro</b>.<br/>No se permiten <b>registros duplicados</b> o algo ha salido mal durante el proceso. <br/>Te recomendamos intentar más tarde.",type:"is-danger",hasIcon:!0,icon:"times-circle",iconPack:"fa",ariaRole:"alertdialog",ariaModal:!0});case 18:return t.prev=18,e.isLoading=!1,t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[0,14,18,21]])})))()},reset:function(){this.form=m()(this.form,(function(e){return e&&"object"===Object(o.a)(e)?[]:null}))}}},h=(r(358),r(29)),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("section",{staticClass:"section"},[r("div",{staticClass:"columns is-multiline"},[e._m(0),e._v(" "),r("div",{staticClass:"column is-8 is-offset-2 register box"},[r("div",{staticClass:"columns"},[e._m(1),e._v(" "),r("div",{staticClass:"column right"},[e._m(2),e._v(" "),r("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("b-field",{attrs:{label:"Nombre completo",message:"Nombre(s) y apellidos"}},[r("b-input",{attrs:{icon:"account",placeholder:"Tu nombre completo",name:"name",required:""},model:{value:e.form.fullname,callback:function(t){e.$set(e.form,"fullname",t)},expression:"form.fullname"}})],1),e._v(" "),r("b-field",{attrs:{label:"Correo electrónico",message:"Dirección de correo electrónico"}},[r("b-input",{attrs:{icon:"email",type:"email",placeholder:"Tu direcciòn de correo electrónico",name:"email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("b-field",{attrs:{label:"Evento",message:"Curso, taller o plática al que desea inscribirse"}},[r("b-select",{attrs:{expanded:"",placeholder:"Selecciona un evento",required:""},model:{value:e.form.event,callback:function(t){e.$set(e.form,"event",t)},expression:"form.event"}},e._l(e.events,(function(option,t){return r("option",{key:t,domProps:{value:option.id}},[e._v("\n                    "+e._s(option.title)+"\n                  ")])})),0)],1),e._v(" "),r("b-field",{attrs:{label:"Adscripción",message:"Escuela o universidad de procedencia"}},[r("b-select",{attrs:{expanded:"",placeholder:"Selecciona una opción",required:""},model:{value:e.form.adscription,callback:function(t){e.$set(e.form,"adscription",t)},expression:"form.adscription"}},e._l(e.universities,(function(option,t){return r("option",{key:t,domProps:{value:option}},[e._v("\n                    "+e._s(option)+"\n                  ")])})),0),e._v(" "),r("br"),e._v(" "),"Otro"===e.form.adscription?r("b-input",{attrs:{placeholder:"Especifique",name:"adscription"},model:{value:e.others.adscription,callback:function(t){e.$set(e.others,"adscription",t)},expression:"others.adscription"}}):e._e()],1),e._v(" "),r("b-field",{attrs:{label:"Departamento",message:"Departamento (solo estudiantes del ITM)"}},[r("b-select",{attrs:{expanded:"",placeholder:"Selecciona una opción"},model:{value:e.form.department,callback:function(t){e.$set(e.form,"department",t)},expression:"form.department"}},e._l(e.departments,(function(option,t){return r("option",{key:t,domProps:{value:option}},[e._v("\n                    "+e._s(option)+"\n                  ")])})),0),e._v(" "),r("br"),e._v(" "),"Otro"===e.form.department?r("b-input",{attrs:{placeholder:"Especifique",name:"department"},model:{value:e.others.department,callback:function(t){e.$set(e.others,"department",t)},expression:"others.department"}}):e._e()],1),e._v(" "),r("b-field",{attrs:{label:"Carrera",message:"Área o campo de estudio"}},[r("b-select",{attrs:{expanded:"",placeholder:"Selecciona una opción"},model:{value:e.form.career,callback:function(t){e.$set(e.form,"career",t)},expression:"form.career"}},e._l(e.careers,(function(option,t){return r("option",{key:t,domProps:{value:option}},[e._v("\n                    "+e._s(option)+"\n                  ")])})),0),e._v(" "),r("br"),e._v(" "),"Otro"===e.form.career?r("b-input",{attrs:{placeholder:"Especifique",name:"career"},model:{value:e.others.career,callback:function(t){e.$set(e.others,"career",t)},expression:"others.career"}}):e._e()],1),e._v(" "),r("b-field",{attrs:{label:"Matricula",message:"Matricula (o equivalente)"}},[r("b-input",{attrs:{type:"text",placeholder:"",name:"matricula",required:""},model:{value:e.form.enrollment,callback:function(t){e.$set(e.form,"enrollment",t)},expression:"form.enrollment"}})],1),e._v(" "),r("hr"),e._v(" "),r("b-field",[r("div",{staticClass:"control"},[r("b-button",{attrs:{"native-type":"submit",loading:e.isLoading,expanded:"",type:"is-primary"}},[e._v("Enviar")])],1)]),e._v(" "),e._m(3)],1)],1)])]),e._v(" "),r("Footer")],1)])])}),n,!1,null,null,null);t.default=component.exports;installComponents(component,{Footer:r(233).default})}}]);