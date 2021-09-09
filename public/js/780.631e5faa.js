"use strict";(self["webpackChunkquasarfront"]=self["webpackChunkquasarfront"]||[]).push([[780],{2584:(e,a,t)=>{t.d(a,{E:()=>d});var i=t(515),l=t.n(i),o=t(5474),n=t(1959),s=t(6249),r=t(6394),c=t(8825);const d=()=>{const e=(0,c.Z)(),a=(0,n.iH)([]),t=async()=>{s.Z.show({spinner:r.Z}),await o.api.get("/api/v1/admin/estaciones").then((e=>{a.value=e.data,a.value.forEach((e=>{e.position={lat:Number(e.Latitud),lng:Number(e.Longitud)}}))})).catch((a=>{console.log(a),e.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"})})),e.loading.hide()},i=async t=>{s.Z.show({spinner:r.Z}),await o.api.get("/api/v1/admin/estacion/"+t).then((e=>{a.value=e.data})).catch((a=>{console.log(a),e.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"})})),s.Z.hide()},d=async a=>{s.Z.show({spinner:r.Z});const t=await o.api.post("/api/v1/admin/estacion/"+a.value.id,l()({},a.value)).then((t=>(a.value=t.data,e.notify({message:t.data.msg,type:"positive"}),!0))).catch((a=>(console.log(a),e.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"}),!1)));return s.Z.hide(),t};return{data:a,getEstaciones:t,getEstacion:i,updateEstacion:d}}},2139:(e,a,t)=>{t.d(a,{Z:()=>V});var i=t(3673),l=t(8880),o=t(2323);const n=(0,i.HX)("data-v-1240353e");(0,i.dD)("data-v-1240353e");const s={class:"row q-pa-lg justify-center"},r=(0,i.Wm)("div",{class:"text-subtitle2 text-capitalize"}," Temperatura Media ",-1),c={class:"text-h6 text-left"},d=(0,i.Wm)("div",{class:"text-subtitle2"}," Velocidad Viento Media ",-1),m={class:"text-h6 text-left"},u=(0,i.Wm)("div",{class:"text-subtitle2 text-left"}," Humedad Media ",-1),p={class:"text-h6 text-left"},f=(0,i.Wm)("div",{class:"text-subtitle2 text-left"}," Presion Barometrica Media ",-1),v={class:"text-h6 text-left"},g=(0,i.Wm)("div",{class:"text-subtitle2 text-left"}," Precipitacion Media ",-1),x={class:"text-h6 text-left"},y={class:"col-12 q-mt-lg",ref:"chart"},b={class:"col-12 col-md-6 q-mt-lg",ref:"limnimetroRef"},h={class:"col-12 col-md-6  q-mt-lg",ref:"bateriaRef"},W={class:"col-12 col-md-6  q-mt-lg",ref:"temperaturaRef"},w={class:"col-12 col-md-6  q-mt-lg",ref:"humedadRef"},k={class:"col-12 col-md-6  q-mt-lg",ref:"probLluviaRef"},Z={class:"col-12 col-md-6  q-mt-lg",ref:"velocidadVientoRef"},q={class:"col-12 col-md-6  q-mt-lg",ref:"presionBarometricaRef"},P={class:"col-12 col-md-6  q-mt-lg",ref:"radiacionSolarRef"};(0,i.Cn)();const _=n(((e,a,t,_,H,C)=>{const z=(0,i.up)("q-card-section"),R=(0,i.up)("q-card"),M=(0,i.up)("q-spinner-audio");return e.mediciones.columns?((0,i.wg)(),(0,i.j4)(l.uT,{key:0,appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:n((()=>[(0,i.Wm)("div",s,[(0,i.Wm)(R,{bordered:"",flat:"",class:"my-card col-4 col-md-2",style:{"max-height":"150px"}},{default:n((()=>[(0,i.Wm)(z,{horizontal:""},{default:n((()=>[(0,i.Wm)(z,{class:"text-left"},{default:n((()=>[r,(0,i.Wm)("p",c,(0,o.zw)(e.mediciones.mediaTemperatura),1)])),_:1})])),_:1})])),_:1}),(0,i.Wm)(R,{bordered:"",flat:"",class:"my-card col-4 col-md-2 q-ml-lg",style:{"max-height":"150px"}},{default:n((()=>[(0,i.Wm)(z,{horizontal:""},{default:n((()=>[(0,i.Wm)(z,{class:"text-left"},{default:n((()=>[d,(0,i.Wm)("p",m,(0,o.zw)(e.mediciones.mediaViento),1)])),_:1})])),_:1})])),_:1}),(0,i.Wm)(R,{bordered:"",flat:"",class:"my-card col-4 col-md-2 q-px-lg-xl q-ml-lg",style:{"max-height":"150px"}},{default:n((()=>[(0,i.Wm)(z,{horizontal:""},{default:n((()=>[(0,i.Wm)(z,{class:"text-left"},{default:n((()=>[u,(0,i.Wm)("p",p,(0,o.zw)(e.mediciones.mediaHumedad),1)])),_:1})])),_:1})])),_:1}),(0,i.Wm)(R,{bordered:"",flat:"",class:"my-card col-4 col-md-2 q-px-lg-xl q-ml-lg",style:{"max-height":"150px"}},{default:n((()=>[(0,i.Wm)(z,{horizontal:""},{default:n((()=>[(0,i.Wm)(z,{class:"text-left"},{default:n((()=>[f,(0,i.Wm)("p",v,(0,o.zw)(e.mediciones.mediaPresionBarometrica),1)])),_:1})])),_:1})])),_:1}),(0,i.Wm)(R,{bordered:"",flat:"",class:"my-card col-4 col-md-2 q-px-lg-xl q-ml-lg",style:{"max-height":"150px"}},{default:n((()=>[(0,i.Wm)(z,{horizontal:""},{default:n((()=>[(0,i.Wm)(z,{class:"text-left"},{default:n((()=>[g,(0,i.Wm)("p",x,(0,o.zw)(e.mediciones.mediaPrecipitacion),1)])),_:1})])),_:1})])),_:1}),(0,i.Wm)("div",y,null,512),(0,i.Wm)("div",b,null,512),(0,i.Wm)("div",h,null,512),(0,i.Wm)("div",W,null,512),(0,i.Wm)("div",w,null,512),(0,i.Wm)("div",k,null,512),(0,i.Wm)("div",Z,null,512),(0,i.Wm)("div",q,null,512),(0,i.Wm)("div",P,null,512)])])),_:1})):((0,i.wg)(),(0,i.j4)(M,{key:1,size:"xl",color:"primary"}))}));var H=t(1959),C=t(4130),z=t(5474),R=t(8825);const M=()=>{const e=(0,R.Z)(),a=(0,H.iH)({columns:null,mediaTemperatura:"-",mediaViento:"-",mediaHumedad:"-",mediaPresionBarometrica:"-",mediaPrecipitacion:"-",precipitacion:[]}),t=async(t,i=null)=>{await z.api.get(`/api/v1/admin/estacion/${t}/estadistica`).then((e=>{a.value.columns=e.data.data.columns,a.value.mediaTemperatura=e.data.mediaTemperatura,a.value.mediaViento=e.data.mediaViento,a.value.mediaHumedad=e.data.mediaHumedad,a.value.mediaPresionBarometrica=e.data.mediaPresionBarometrica,a.value.mediaPrecipitacion=e.data.mediaPrecipitacion})).catch((a=>{console.log(a),e.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"})}))};return{data:a,getHistoricoMediciones:t}},L=(0,i.aZ)({name:"StaticsDashboard",props:{estacion:{type:Number,required:!1}},setup(e){const{data:a,getHistoricoMediciones:t}=M(),l=(0,H.iH)(null),o=(0,H.iH)(null),n=(0,H.iH)(null),s=(0,H.iH)(null),r=(0,H.iH)(null),c=(0,H.iH)(null),d=(0,H.iH)(null),m=(0,H.iH)(null),u=(0,H.iH)(null),p=(0,H.iH)(!1);return(0,i.bv)((async()=>{p.value=!0,await t(e.estacion,10),C.ZP.generate({bindto:l.value,data:{x:"x",columns:a.value.columns,type:(0,C.Nb)(),types:{"Presión barometrica":(0,C.SO)()}},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),a.value.columns.forEach((e=>{"Limnimetro"===e[0]&&C.ZP.generate({bindto:o.value,data:{x:"x",columns:[a.value.columns[0],e],type:(0,C.$y)()},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),"Bateria"===e[0]&&C.ZP.generate({bindto:n.value,data:{x:"x",columns:[a.value.columns[0],e],type:(0,C.Nb)()},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),"Temperatura"===e[0]&&C.ZP.generate({bindto:s.value,data:{x:"x",columns:[a.value.columns[0],e],type:(0,C.Kb)()},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),"Humedad"===e[0]&&C.ZP.generate({bindto:r.value,data:{x:"x",columns:[a.value.columns[0],e],type:(0,C.$y)()},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),"Probabilidad de lluvia"===e[0]&&C.ZP.generate({bindto:c.value,data:{x:"x",columns:[a.value.columns[0],e],type:(0,C.$y)()},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),"Velocidad del viento"===e[0]&&C.ZP.generate({bindto:d.value,data:{x:"x",columns:[a.value.columns[0],e],type:(0,C.$y)()},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),"Presión barometrica"===e[0]&&C.ZP.generate({bindto:m.value,data:{x:"x",columns:[a.value.columns[0],e],type:(0,C.$y)()},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),"Radiacion solar"===e[0]&&C.ZP.generate({bindto:u.value,data:{x:"x",columns:[a.value.columns[0],e],type:(0,C.$y)()},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}})})),p.value=!1})),{props:e,chart:l,mediciones:a,loading:p,limnimetroRef:o,bateriaRef:n,temperaturaRef:s,humedadRef:r,probLluviaRef:c,velocidadVientoRef:d,presionBarometricaRef:m,radiacionSolarRef:u}}});var D=t(151),E=t(5589),B=t(2509),j=t(7518),I=t.n(j);L.render=_,L.__scopeId="data-v-1240353e";const V=L;I()(L,"components",{QCard:D.Z,QCardSection:E.Z,QSpinnerAudio:B.Z})},1780:(e,a,t)=>{t.r(a),t.d(a,{default:()=>P});var i=t(3673),l=t(2323);const o={class:"row justify-center"},n={class:"col-12 text-center"},s={class:"text-h4"},r={class:"row justify-end q-mx-lg"},c={class:"col-12 col-md-6"},d={class:"text-subtitle1"},m=(0,i.Wm)("br",null,null,-1),u=(0,i.Wm)("br",null,null,-1),p={class:"col-12 col-md-6"};function f(e,a,t,f,v,g){const x=(0,i.up)("q-btn"),y=(0,i.up)("GMapInfoWindow"),b=(0,i.up)("GMapMarker"),h=(0,i.up)("GMapMap"),W=(0,i.up)("q-table"),w=(0,i.up)("statics-dashboard"),k=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(k,null,{default:(0,i.w5)((()=>[(0,i.Wm)("div",o,[(0,i.Wm)("div",n,[(0,i.Wm)("div",s," Bienvenido "+(0,l.zw)(e.usuario.nombre)+" "+(0,l.zw)(e.usuario.apellido),1)])]),(0,i.Wm)("div",r,[(0,i.Wm)("div",c,[(0,i.Wm)(h,{center:{lat:-44,lng:-69},zoom:6,"map-type-id":"terrain",style:{width:"90%",height:"100%"}},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(e.data,((a,t)=>((0,i.wg)(),(0,i.j4)(b,{key:t,position:a.position,clickable:!0,onClick:t=>e.openMarker(a.Código)},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{opened:e.openedMarkerID===a.Código},{default:(0,i.w5)((()=>[(0,i.Wm)("div",null,[(0,i.Wm)("p",d,(0,l.zw)(a.Denominación),1),(0,i.Wm)("span",null,[(0,i.Uk)(" Latitud: "+(0,l.zw)(a.Latitud)+" ",1),m,(0,i.Uk)(" Longitud: "+(0,l.zw)(a.Longitud)+" ",1),u]),(0,i.Wm)(x,{onClick:e.cerrar,class:"q-mt-sm",size:"xs",color:"primary",label:"Cerrar"},null,8,["onClick"])])])),_:2},1032,["opened"])])),_:2},1032,["position","onClick"])))),128))])),_:1})]),(0,i.Wm)("div",p,[(0,i.Wm)(W,{title:"Listado de estaciones",dense:"",rows:e.data,columns:e.columns,"row-key":"Código",pagination:{rowsPerPage:10},onRowClick:e.verEstacion},null,8,["rows","columns","onRowClick"])])]),null!=e.openedMarkerID?((0,i.wg)(),(0,i.j4)(w,{key:0,estacion:e.openedMarkerID},null,8,["estacion"])):(0,i.kq)("",!0)])),_:1})}var v=t(1959),g=t(589),x=t(2584),y=t(9582),b=t(2139);const h=(0,i.aZ)({name:"PageIndex",components:{StaticsDashboard:b.Z},setup(){const e=(0,y.tv)(),a=JSON.parse(g.Z.getItem("user")),{data:t,getEstaciones:l}=(0,x.E)(),o=(a,t)=>{e.push({name:"verEstacion",params:{id:t.Código}})},n=(0,v.iH)(null),s=e=>{n.value=e},r=[{name:"Denominación",align:"left",label:"Denominación",field:"Denominación",sortable:!0},{name:"Latitud",align:"left",label:"Latitud",field:"Latitud",sortable:!0},{name:"Longitud",align:"left",label:"Longitud",field:"Longitud"}];(0,i.bv)((async()=>{await l()}));const c=()=>{n.value=null};return{usuario:a,data:t,columns:r,verEstacion:o,openMarker:s,openedMarkerID:n,cerrar:c}}});var W=t(4379),w=t(8240),k=t(6429),Z=t(7518),q=t.n(Z);h.render=f;const P=h;q()(h,"components",{QPage:W.Z,QBtn:w.Z,QTable:k.Z})}}]);