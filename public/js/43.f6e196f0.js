(self["webpackChunkquasarfront"]=self["webpackChunkquasarfront"]||[]).push([[43],{4043:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>E});var n=a(3673),l=a(4632),o=a.n(l),r=a(2170),i=a.n(r);const u=(0,n.Uk)(" Datos de estaciones meteorologicas sin procesar "),s=(0,n.Uk)(" Menu "),c=(0,n.Uk)(" Datos obtenidos de estaciones meteorologicas de IPA "),d=(0,n.Wm)("img",{src:o(),"spinner-color":"white",style:{height:"50px","max-width":"50px"}},null,-1),p=(0,n.Uk)(" y de la Secretaria de Infraestructura y Politica Hidricas de la Nacion "),m=(0,n.Wm)("img",{src:i(),"spinner-color":"white",style:{height:"50px","max-width":"300px"}},null,-1);function w(e,t,a,l,o,r){const i=(0,n.up)("q-btn"),w=(0,n.up)("q-toolbar-title"),f=(0,n.up)("q-toolbar"),g=(0,n.up)("q-header"),k=(0,n.up)("q-item-label"),h=(0,n.up)("EssentialLink"),q=(0,n.up)("q-list"),b=(0,n.up)("q-drawer"),v=(0,n.up)("router-view"),y=(0,n.up)("q-page-container"),W=(0,n.up)("q-footer"),Z=(0,n.up)("q-layout");return(0,n.wg)(),(0,n.j4)(Z,{view:"lHh Lpr lFf"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{elevated:""},{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[u])),_:1}),(0,n.Wm)("div",null,[(0,n.Wm)(i,{flat:"",dense:"",round:"",icon:"logout","aria-label":"Cerrar sesión",onClick:e.cerrarSesion},null,8,["onClick"])])])),_:1})])),_:1}),(0,n.Wm)(b,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[1]||(t[1]=t=>e.leftDrawerOpen=t),"show-if-above":"",bordered:"",class:"bg-grey-1"},{default:(0,n.w5)((()=>[(0,n.Wm)(q,null,{default:(0,n.w5)((()=>[(0,n.Wm)(k,{header:"",class:"text-grey-8"},{default:(0,n.w5)((()=>[s])),_:1}),((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.essentialLinks,(e=>((0,n.wg)(),(0,n.j4)(h,(0,n.dG)({key:e.title},e),null,16)))),128))])),_:1})])),_:1},8,["modelValue"]),(0,n.Wm)(y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(v)])),_:1}),(0,n.Wm)(W,{class:"q-pa-lg vertical-middle"},{default:(0,n.w5)((()=>[c,d,p,m])),_:1})])),_:1})}a(7280),a(5363);var f=a(2323);function g(e,t,a,l,o,r){const i=(0,n.up)("q-icon"),u=(0,n.up)("q-item-section"),s=(0,n.up)("q-item-label"),c=(0,n.up)("q-item");return e.rol.includes(e.user.rol)?((0,n.wg)(),(0,n.j4)(c,{key:0,clickable:"",onClick:t[1]||(t[1]=t=>this.$router.push(e.to))},{default:(0,n.w5)((()=>[e.icon?((0,n.wg)(),(0,n.j4)(u,{key:0,avatar:""},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{name:e.icon},null,8,["name"])])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,f.zw)(e.title),1)])),_:1}),(0,n.Wm)(s,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,f.zw)(e.caption),1)])),_:1})])),_:1})])),_:1})):(0,n.kq)("",!0)}var k=a(1959),h=a(589);const q=(0,n.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""},to:{type:String,default:""},rol:{type:Array,default:function(){return[]}}},setup(){const e=(0,k.iH)({});return e.value=JSON.parse(h.Z.getItem("user")),console.log(e),{user:e}}});var b=a(3414),v=a(2035),y=a(4554),W=a(2350),Z=a(7518),_=a.n(Z);q.render=g;const Q=q;_()(q,"components",{QItem:b.Z,QItemSection:v.Z,QIcon:y.Z,QItemLabel:W.Z});const L=[{title:"Home",caption:"Pagina home",icon:"home",link:"https://quasar.dev",to:"/admin",rol:["administrador","usuario"]},{title:"Contacto",caption:"Pagina contacto",icon:"contact",link:"https://quasar.dev",to:"/admin/contacto",rol:["usuario"]},{title:"Usuarios",caption:"Sección usuarios",icon:"people",link:"https://quasar.dev",to:"/admin/usuarios",rol:["administrador"]}],S=(0,n.aZ)({name:"MainLayout",components:{EssentialLink:Q},setup(){const e=(0,k.iH)(!1),t=()=>{h.Z.remove("user"),window.location.replace("/")};return{essentialLinks:L,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},cerrarSesion:t}}});var C=a(9214),x=a(3812),D=a(9570),I=a(8240),U=a(3747),H=a(2901),j=a(7011),P=a(2652),O=a(1762);S.render=w;const E=S;_()(S,"components",{QLayout:C.Z,QHeader:x.Z,QToolbar:D.Z,QBtn:I.Z,QToolbarTitle:U.Z,QDrawer:H.Z,QList:j.Z,QItemLabel:W.Z,QPageContainer:P.Z,QFooter:O.Z})},2170:(e,t,a)=>{e.exports=a.p+"img/logo_politicas_hidricas.00b56c4d.png"}}]);