"use strict";(self["webpackChunkquasarfront"]=self["webpackChunkquasarfront"]||[]).push([[574],{5574:(e,o,a)=>{a.r(o),a.d(o,{default:()=>y});var r=a(3673);const i=(0,r.HX)("data-v-7f1e2393");(0,r.dD)("data-v-7f1e2393");const n={class:"row q-pa-lg"},l={class:"col-6 q-pa-sm"},t={class:"col-6 q-pa-sm"},s={class:"col-12 q-pa-sm"},d={class:"row q-pa-sm justify-content-end"};(0,r.Cn)();const c=i(((e,o,a,i,c,p)=>{var m,u,f,h,v,g,b,w,k,q,I,y;const F=(0,r.up)("q-input"),A=(0,r.up)("q-select"),V=(0,r.up)("q-btn");return(0,r.wg)(),(0,r.j4)("div",n,[(0,r.Wm)("div",l,[(0,r.Wm)(F,{filled:"",modelValue:e.data.fechaInicio,"onUpdate:modelValue":o[1]||(o[1]=o=>e.data.fechaInicio=o),label:"Fecha inicio",mask:"##/##/####","fill-mask":"#",hint:"Ingrese la fecha en formato DD/MM/AAAA",error:(null===(m=e.errores)||void 0===m||null===(u=m.fechaInicio)||void 0===u?void 0:u.length)>0,"error-message":(null===(f=e.errores)||void 0===f||null===(h=f.fechaInicio)||void 0===h?void 0:h.length)>0?e.errores.fechaInicio[0]:""},null,8,["modelValue","error","error-message"])]),(0,r.Wm)("div",t,[(0,r.Wm)(F,{filled:"",modelValue:e.data.fechaFin,"onUpdate:modelValue":o[2]||(o[2]=o=>e.data.fechaFin=o),label:"Fecha fin",mask:"##/##/####","fill-mask":"#",hint:"Ingrese la fecha en formato DD/MM/AAAA",error:(null===(v=e.errores)||void 0===v||null===(g=v.fechaFin)||void 0===g?void 0:g.length)>0,"error-message":(null===(b=e.errores)||void 0===b||null===(w=b.fechaFin)||void 0===w?void 0:w.length)>0?e.errores.fechaFin[0]:""},null,8,["modelValue","error","error-message"])]),(0,r.Wm)("div",s,[(0,r.Wm)(A,{filled:"",multiple:"",modelValue:e.data.mediciones,"onUpdate:modelValue":o[3]||(o[3]=o=>e.data.mediciones=o),options:e.dataReportes,label:"Seleccionar mediciones para reporte",error:(null===(k=e.errores)||void 0===k||null===(q=k.mediciones)||void 0===q?void 0:q.length)>0,"error-message":(null===(I=e.errores)||void 0===I||null===(y=I.mediciones)||void 0===y?void 0:y.length)>0?e.errores.mediciones[0]:""},null,8,["modelValue","options","error","error-message"])]),(0,r.Wm)("div",d,[(0,r.Wm)(V,{color:"primary",label:"Exportar datos",onClick:o[4]||(o[4]=o=>e.exportarPdf(e.id,e.data.fechaInicio,e.data.fechaFin,e.data.mediciones))})])])}));var p=a(1959),m=(a(71),a(7965),a(5474)),u=a(6249),f=a(6394),h=a(8825);const v=()=>{const e=(0,h.Z)(),o=(0,p.iH)([]),a=(0,p.iH)([]),r=async a=>{u.Z.show({spinner:f.Z}),await m.api.get(`/api/v1/admin/estacion/${a}/medicionesPosibles`).then((e=>{o.value=e.data})).catch((o=>{console.log(o),e.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"})})),e.loading.hide()},i=async(o,r,i,n)=>{u.Z.show({spinner:f.Z}),await m.api.post("/api/v1/admin/estacion/exportar/pdf",{id:o,fechaInicio:r,fechaFin:i,mediciones:n},{responseType:"blob"}).then((e=>{console.log(e.data);const o=new Blob([e.data],{type:"application/pdf"}),a=window.URL.createObjectURL(o),r=document.createElement("a");r.href=a,r.setAttribute("target","_blank"),r.click(),r.remove(),URL.revokeObjectURL(a)})).catch((o=>{a.value=o.response.data.errors,e.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"})})),e.loading.hide()};return{data:o,getMedicionesPosibles:r,exportarPdf:i,errores:a}},g=(0,r.aZ)({name:"Exportar",props:{id:{type:String,required:!0}},setup(e){const{errores:o,data:a,getMedicionesPosibles:i,exportarPdf:n}=v(),l=(0,p.qj)({fechaInicio:null,fechaFin:null,mediciones:null});return(0,r.bv)((async()=>{await i(e.id)})),{data:l,dataReportes:a,exportarPdf:n,errores:o}}});var b=a(4842),w=a(7637),k=a(8240),q=a(7518),I=a.n(q);g.render=c,g.__scopeId="data-v-7f1e2393";const y=g;I()(g,"components",{QInput:b.Z,QSelect:w.Z,QBtn:k.Z})}}]);