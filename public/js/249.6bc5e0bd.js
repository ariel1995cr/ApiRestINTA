"use strict";(self["webpackChunkquasarfront"]=self["webpackChunkquasarfront"]||[]).push([[249],{2584:(e,a,t)=>{t.d(a,{E:()=>d});var i=t(515),o=t.n(i),n=t(5474),l=t(1959),s=t(6249),c=t(6394),r=t(8825);const d=()=>{const e=(0,r.Z)(),a=(0,l.iH)([]),t=async()=>{s.Z.show({spinner:c.Z}),await n.api.get("/api/v1/admin/estaciones").then((e=>{a.value=e.data,a.value.forEach((e=>{e.position={lat:Number(e.Latitud),lng:Number(e.Longitud)}}))})).catch((a=>{console.log(a),e.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"})})),e.loading.hide()},i=async t=>{s.Z.show({spinner:c.Z}),await n.api.get("/api/v1/admin/estacion/"+t).then((e=>{a.value=e.data})).catch((a=>{console.log(a),e.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"})})),s.Z.hide()},d=async a=>{s.Z.show({spinner:c.Z});const t=await n.api.post("/api/v1/admin/estacion/"+a.value.id,o()({},a.value)).then((t=>(a.value=t.data,e.notify({message:t.data.msg,type:"positive"}),!0))).catch((a=>(console.log(a),e.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"}),!1)));return s.Z.hide(),t};return{data:a,getEstaciones:t,getEstacion:i,updateEstacion:d}}},2473:(e,a,t)=>{t.d(a,{D:()=>l});var i=t(5474),o=t(1959),n=t(8825);const l=()=>{const e=(0,n.Z)(),a=(0,o.iH)({columns:null,mediaTemperatura:"-",mediaViento:"-",mediaHumedad:"-",mediaPresionBarometrica:"-",mediaPrecipitacion:"-",precipitacion:[]}),t=async(t,o)=>{const n=await i.api.get(`/api/v1/admin/estacion/${t}/medicion/${o}`).then((e=>{a.value.columns=e.data.medicion.columns,a.value.mediaTemperatura=e.data.mediaTemperatura,a.value.mediaViento=e.data.mediaViento,a.value.mediaHumedad=e.data.mediaHumedad,a.value.mediaPresionBarometrica=e.data.mediaPresionBarometrica,a.value.mediaPrecipitacion=e.data.mediaPrecipitacion,a.value.precipitacion=e.data.precipitacion.columns})).catch((a=>{console.log(a),e.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"})}));return n};return{data:a,getHistoricoMediciones:t}}},5662:(e,a,t)=>{t.d(a,{Z:()=>H});var i=t(3673),o=t(8880),n=t(2323);const l=(0,i.HX)("data-v-4829e6b7");(0,i.dD)("data-v-4829e6b7");const s={class:"row q-pa-lg justify-center"},c=(0,i.Wm)("p",{class:"text-dark",style:{"max-lines":"1"}}," Temperatura Media ",-1),r={class:"text-h6 text-center"},d=(0,i.Wm)("p",{class:"text-dark",style:{"max-lines":"1"}}," Velocidad Viento Media ",-1),m={class:"text-h6 text-center"},u=(0,i.Wm)("p",{class:"text-dark",style:{"max-lines":"1"}}," Humedad Media ",-1),p={class:"text-h6 text-center"},g=(0,i.Wm)("p",{class:"text-dark",style:{"max-lines":"1"}}," Presion Barometrica Media ",-1),v={class:"text-h6 text-center"},x=(0,i.Wm)("p",{class:"text-dark",style:{"max-lines":"1"}}," Precipitacion Media ",-1),y={class:"text-h6 text-center"},h={class:"col-12 q-mt-lg",ref:"chart"},f={key:0,class:"col-12 q-mt-lg",ref:"chart2"};(0,i.Cn)();const w=l(((e,a,t,w,b,W)=>{const k=(0,i.up)("q-card-section"),q=(0,i.up)("q-card"),Z=(0,i.up)("q-spinner-audio");return e.mediciones.columns?((0,i.wg)(),(0,i.j4)(o.uT,{key:0,appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:l((()=>[(0,i.Wm)("div",s,[(0,i.Wm)(q,{bordered:"",class:"my-card col-2",style:{"max-height":"150px"}},{default:l((()=>[(0,i.Wm)(k,null,{default:l((()=>[c,(0,i.Wm)("p",r,(0,n.zw)(e.mediciones.mediaTemperatura),1)])),_:1})])),_:1}),(0,i.Wm)(q,{bordered:"",class:"my-card col-2 q-px-lg-xl q-ml-lg",style:{"max-height":"150px"}},{default:l((()=>[(0,i.Wm)(k,null,{default:l((()=>[d,(0,i.Wm)("p",m,(0,n.zw)(e.mediciones.mediaViento),1)])),_:1})])),_:1}),(0,i.Wm)(q,{bordered:"",class:"my-card col-2 q-px-lg-xl q-ml-lg",style:{"max-height":"150px"}},{default:l((()=>[(0,i.Wm)(k,null,{default:l((()=>[u,(0,i.Wm)("p",p,(0,n.zw)(e.mediciones.mediaHumedad),1)])),_:1})])),_:1}),(0,i.Wm)(q,{bordered:"",class:"my-card col-2 q-px-lg-xl q-ml-lg",style:{"max-height":"150px"}},{default:l((()=>[(0,i.Wm)(k,null,{default:l((()=>[g,(0,i.Wm)("p",v,(0,n.zw)(e.mediciones.mediaPresionBarometrica),1)])),_:1})])),_:1}),(0,i.Wm)(q,{bordered:"",class:"my-card col-2 q-px-lg-xl q-ml-lg",style:{"max-height":"150px"}},{default:l((()=>[(0,i.Wm)(k,null,{default:l((()=>[x,(0,i.Wm)("p",y,(0,n.zw)(e.mediciones.mediaPrecipitacion),1)])),_:1})])),_:1}),(0,i.Wm)("div",h,null,512),0!=e.mediciones.precipitacion.length?((0,i.wg)(),(0,i.j4)("div",f,null,512)):(0,i.kq)("",!0)])])),_:1})):((0,i.wg)(),(0,i.j4)(Z,{key:1,size:"xl",color:"primary"}))}));var b=t(1959),W=t(4130),k=t(2473);const q=(0,i.aZ)({name:"StaticsDashboard",props:{estacion:{type:Number,required:!1}},setup(e){const{data:a,getHistoricoMediciones:t}=(0,k.D)(),o=(0,b.iH)(null),n=(0,b.iH)(null),l=(0,b.iH)(!1);return(0,i.bv)((async()=>{l.value=!0,await t(e.estacion,10),W.ZP.generate({bindto:o.value,data:{x:"x",columns:a.value.columns,type:(0,W.jv)(),types:{"Presión barometrica":(0,W.SO)()}},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),W.ZP.generate({bindto:n.value,data:{x:"x",columns:a.value.precipitacion,type:(0,W.Kb)(),groups:[["Precipitaciones"]]},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),l.value=!1})),{props:e,chart:o,chart2:n,mediciones:a,loading:l}}});var Z=t(151),_=t(5589),M=t(2509),C=t(7518),P=t.n(C);q.render=w,q.__scopeId="data-v-4829e6b7";const H=q;P()(q,"components",{QCard:Z.Z,QCardSection:_.Z,QSpinnerAudio:M.Z})},249:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Z});var i=t(3673),o=t(2323);const n={class:"row justify-center"},l={class:"col-4"},s={class:"text-h4"},c={class:"row justify-end q-mx-lg"},r={class:"col-12 col-md-6"},d={class:"text-subtitle1"},m=(0,i.Wm)("br",null,null,-1),u=(0,i.Wm)("br",null,null,-1),p={class:"col-12 col-md-6"};function g(e,a,t,g,v,x){const y=(0,i.up)("GMapInfoWindow"),h=(0,i.up)("GMapMarker"),f=(0,i.up)("GMapMap"),w=(0,i.up)("q-table"),b=(0,i.up)("statics-dashboard"),W=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(W,null,{default:(0,i.w5)((()=>[(0,i.Wm)("div",n,[(0,i.Wm)("div",l,[(0,i.Wm)("div",s," Bienvenido "+(0,o.zw)(e.usuario.nombre)+" "+(0,o.zw)(e.usuario.apellido),1)])]),(0,i.Wm)("div",c,[(0,i.Wm)("div",r,[(0,i.Wm)(f,{center:{lat:-44,lng:-69},zoom:6,"map-type-id":"terrain",style:{width:"90%",height:"100%"}},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(e.data,((t,n)=>((0,i.wg)(),(0,i.j4)(h,{key:n,position:t.position,clickable:!0,onClick:a=>e.openMarker(t.Código)},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{opened:e.openedMarkerID===t.Código,onCloseclick:a[1]||(a[1]=a=>e.openedMarkerID=null)},{default:(0,i.w5)((()=>[(0,i.Wm)("div",null,[(0,i.Wm)("p",d,(0,o.zw)(t.Denominación),1),(0,i.Wm)("span",null,[(0,i.Uk)(" Latitud: "+(0,o.zw)(t.Latitud)+" ",1),m,(0,i.Uk)(" Longitud: "+(0,o.zw)(t.Longitud)+" ",1),u])])])),_:2},1032,["opened"])])),_:2},1032,["position","onClick"])))),128))])),_:1})]),(0,i.Wm)("div",p,[(0,i.Wm)(w,{title:"Listado de estaciones",dense:"",rows:e.data,columns:e.columns,"row-key":"Código",pagination:{rowsPerPage:10},onRowClick:e.verEstacion},null,8,["rows","columns","onRowClick"])])]),null!=e.openedMarkerID?((0,i.wg)(),(0,i.j4)(b,{key:0,estacion:e.openedMarkerID},null,8,["estacion"])):(0,i.kq)("",!0)])),_:1})}var v=t(1959),x=t(589),y=t(2584),h=t(9582),f=t(5662);const w=(0,i.aZ)({name:"PageIndex",components:{StaticsDashboard:f.Z},setup(){const e=(0,h.tv)(),a=JSON.parse(x.Z.getItem("user")),{data:t,getEstaciones:o}=(0,y.E)(),n=(a,t)=>{e.push({name:"verEstacion",params:{id:t.Código}})},l=(0,v.iH)(null),s=e=>{l.value=e},c=[{name:"Denominación",align:"left",label:"Denominación",field:"Denominación",sortable:!0},{name:"Latitud",align:"left",label:"Latitud",field:"Latitud",sortable:!0},{name:"Longitud",align:"left",label:"Longitud",field:"Longitud"}];(0,i.bv)((async()=>{await o()}));const r=e=>{console.log("cerrado gola"),console.log(e)};return{usuario:a,data:t,columns:c,verEstacion:n,openMarker:s,openedMarkerID:l,cerrar:r}}});var b=t(4379),W=t(6429),k=t(7518),q=t.n(k);w.render=g;const Z=w;q()(w,"components",{QPage:b.Z,QTable:W.Z})}}]);