(self["webpackChunkquasarfront"]=self["webpackChunkquasarfront"]||[]).push([[45],{4045:(e,o,a)=>{"use strict";a.r(o),a.d(o,{default:()=>V});var t=a(3673),s=a(4632),n=a.n(s);const r=(0,t.HX)("data-v-483f3526");(0,t.dD)("data-v-483f3526");const l={class:"row justify-center fixed-center"},i=(0,t.Wm)("div",{class:"text-h6 text-dark text-center"}," Iniciar Sesión ",-1);(0,t.Cn)();const d=r(((e,o,a,s,d,c)=>{const u=(0,t.up)("q-img"),p=(0,t.up)("q-card-section"),m=(0,t.up)("q-separator"),g=(0,t.up)("q-input"),f=(0,t.up)("q-icon"),b=(0,t.up)("q-btn"),q=(0,t.up)("q-checkbox"),w=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)("div",l,[(0,t.Wm)(w,{dark:"",bordered:"",class:"bg-grey-1 my-card col-12 q-mt-lg"},{default:r((()=>[(0,t.Wm)(u,{src:n(),ratio:1}),(0,t.Wm)(p,null,{default:r((()=>[i])),_:1}),(0,t.Wm)(m,{dark:"",inset:""}),(0,t.Wm)(p,null,{default:r((()=>[(0,t.Wm)(g,{modelValue:e.user.email,"onUpdate:modelValue":o[1]||(o[1]=o=>e.user.email=o),class:"q-mb-md",outlined:"",label:"Email"},null,8,["modelValue"]),(0,t.Wm)(g,{modelValue:e.user.password,"onUpdate:modelValue":o[3]||(o[3]=o=>e.user.password=o),outlined:"",label:"Contraseña",type:e.isPwd?"password":"text"},{append:r((()=>[(0,t.Wm)(f,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:o[2]||(o[2]=o=>e.isPwd=!e.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type"]),(0,t.Wm)(b,{class:"full-width q-mt-md",color:"green",label:"Ingresar",onClick:o[4]||(o[4]=o=>e.login(e.user))}),(0,t.Wm)(q,{modelValue:e.user.aceptoTerminos,"onUpdate:modelValue":o[5]||(o[5]=o=>e.user.aceptoTerminos=o),class:"text-dark",label:"Acepto Terminos y condiciones",color:"green"},null,8,["modelValue"])])),_:1})])),_:1})])}));var c=a(1959),u=a(515),p=a.n(u),m=a(5474),g=a(8825),f=a(589);const b=()=>{const e=(0,g.Z)(),o=(0,c.iH)(null);function a(o){o.aceptoTerminos?m.api.post("/api/v1/admin/login",p()({},o)).then((e=>{m.api.defaults.headers.common.Authorization="Bearer "+e.data.access_token,f.Z.set("user",JSON.stringify(e.data.usuario)),this.$router.push("/admin")})).catch((o=>{console.log(o),e.notify({color:"negative",position:"top",message:o.response.data.message,icon:"report_problem"})})):e.notify({color:"negative",position:"top",message:"Debe aceptar los terminos y condiciones.",icon:"report_problem"})}return{data:o,login:a}},q=(0,t.aZ)({name:"Login",setup(){const e=(0,c.qj)({email:"",password:"",aceptoTerminos:!1}),{data:o,login:a}=b();return{user:e,data:o,login:a,isPwd:(0,c.iH)(!0)}}});var w=a(151),h=a(4027),k=a(5589),v=a(5869),y=a(4842),W=a(4554),Z=a(8240),_=a(5735),x=a(7518),C=a.n(x);q.render=d,q.__scopeId="data-v-483f3526";const V=q;C()(q,"components",{QCard:w.Z,QImg:h.Z,QCardSection:k.Z,QSeparator:v.Z,QInput:y.Z,QIcon:W.Z,QBtn:Z.Z,QCheckbox:_.Z})},4632:(e,o,a)=>{e.exports=a.p+"img/logoIPA.f38b8dd9.png"}}]);