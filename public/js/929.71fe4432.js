"use strict";(self["webpackChunkquasarfront"]=self["webpackChunkquasarfront"]||[]).push([[929],{2584:(a,e,t)=>{t.d(e,{E:()=>d});var i=t(515),o=t.n(i),l=t(5474),n=t(1959),s=t(6249),r=t(6394),c=t(8825);const d=()=>{const a=(0,c.Z)(),e=(0,n.iH)([]),t=async()=>{s.Z.show({spinner:r.Z}),await l.api.get("/api/v1/admin/estaciones").then((a=>{e.value=a.data,e.value.forEach((a=>{a.position={lat:Number(a.Latitud),lng:Number(a.Longitud)}}))})).catch((e=>{console.log(e),a.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"})})),a.loading.hide()},i=async t=>{s.Z.show({spinner:r.Z}),await l.api.get("/api/v1/admin/estacion/"+t).then((a=>{e.value=a.data})).catch((e=>{console.log(e),a.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"})})),s.Z.hide()},d=async e=>{s.Z.show({spinner:r.Z});const t=await l.api.post("/api/v1/admin/estacion/"+e.value.id,o()({},e.value)).then((t=>(e.value=t.data,a.notify({message:t.data.msg,type:"positive"}),!0))).catch((e=>(console.log(e),a.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"}),!1)));return s.Z.hide(),t};return{data:e,getEstaciones:t,getEstacion:i,updateEstacion:d}}},2473:(a,e,t)=>{t.d(e,{D:()=>n});var i=t(5474),o=t(1959),l=t(8825);const n=()=>{const a=(0,l.Z)(),e=(0,o.iH)({columns:null,mediaTemperatura:"-",mediaViento:"-",mediaHumedad:"-",mediaPresionBarometrica:"-",mediaPrecipitacion:"-",precipitacion:[]}),t=async(t,o)=>{const l=await i.api.get(`/api/v1/admin/estacion/${t}/medicion/${o}`).then((a=>{e.value.columns=a.data.medicion.columns,e.value.mediaTemperatura=a.data.mediaTemperatura,e.value.mediaViento=a.data.mediaViento,e.value.mediaHumedad=a.data.mediaHumedad,e.value.mediaPresionBarometrica=a.data.mediaPresionBarometrica,e.value.mediaPrecipitacion=a.data.mediaPrecipitacion,e.value.precipitacion=a.data.precipitacion.columns})).catch((e=>{console.log(e),a.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"})}));return l};return{data:e,getHistoricoMediciones:t}}},5662:(a,e,t)=>{t.d(e,{Z:()=>C});var i=t(3673),o=t(8880),l=t(2323);const n=(0,i.HX)("data-v-4829e6b7");(0,i.dD)("data-v-4829e6b7");const s={class:"row q-pa-lg justify-center"},r=(0,i.Wm)("p",{class:"text-dark",style:{"max-lines":"1"}}," Temperatura Media ",-1),c={class:"text-h6 text-center"},d=(0,i.Wm)("p",{class:"text-dark",style:{"max-lines":"1"}}," Velocidad Viento Media ",-1),u={class:"text-h6 text-center"},m=(0,i.Wm)("p",{class:"text-dark",style:{"max-lines":"1"}}," Humedad Media ",-1),p={class:"text-h6 text-center"},g=(0,i.Wm)("p",{class:"text-dark",style:{"max-lines":"1"}}," Presion Barometrica Media ",-1),v={class:"text-h6 text-center"},y=(0,i.Wm)("p",{class:"text-dark",style:{"max-lines":"1"}}," Precipitacion Media ",-1),h={class:"text-h6 text-center"},b={class:"col-12 q-mt-lg",ref:"chart"},f={key:0,class:"col-12 q-mt-lg",ref:"chart2"};(0,i.Cn)();const w=n(((a,e,t,w,x,W)=>{const q=(0,i.up)("q-card-section"),Z=(0,i.up)("q-card"),_=(0,i.up)("q-spinner-audio");return a.mediciones.columns?((0,i.wg)(),(0,i.j4)(o.uT,{key:0,appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:n((()=>[(0,i.Wm)("div",s,[(0,i.Wm)(Z,{bordered:"",class:"my-card col-2",style:{"max-height":"150px"}},{default:n((()=>[(0,i.Wm)(q,null,{default:n((()=>[r,(0,i.Wm)("p",c,(0,l.zw)(a.mediciones.mediaTemperatura),1)])),_:1})])),_:1}),(0,i.Wm)(Z,{bordered:"",class:"my-card col-2 q-px-lg-xl q-ml-lg",style:{"max-height":"150px"}},{default:n((()=>[(0,i.Wm)(q,null,{default:n((()=>[d,(0,i.Wm)("p",u,(0,l.zw)(a.mediciones.mediaViento),1)])),_:1})])),_:1}),(0,i.Wm)(Z,{bordered:"",class:"my-card col-2 q-px-lg-xl q-ml-lg",style:{"max-height":"150px"}},{default:n((()=>[(0,i.Wm)(q,null,{default:n((()=>[m,(0,i.Wm)("p",p,(0,l.zw)(a.mediciones.mediaHumedad),1)])),_:1})])),_:1}),(0,i.Wm)(Z,{bordered:"",class:"my-card col-2 q-px-lg-xl q-ml-lg",style:{"max-height":"150px"}},{default:n((()=>[(0,i.Wm)(q,null,{default:n((()=>[g,(0,i.Wm)("p",v,(0,l.zw)(a.mediciones.mediaPresionBarometrica),1)])),_:1})])),_:1}),(0,i.Wm)(Z,{bordered:"",class:"my-card col-2 q-px-lg-xl q-ml-lg",style:{"max-height":"150px"}},{default:n((()=>[(0,i.Wm)(q,null,{default:n((()=>[y,(0,i.Wm)("p",h,(0,l.zw)(a.mediciones.mediaPrecipitacion),1)])),_:1})])),_:1}),(0,i.Wm)("div",b,null,512),0!=a.mediciones.precipitacion.length?((0,i.wg)(),(0,i.j4)("div",f,null,512)):(0,i.kq)("",!0)])])),_:1})):((0,i.wg)(),(0,i.j4)(_,{key:1,size:"xl",color:"primary"}))}));var x=t(1959),W=t(4130),q=t(2473);const Z=(0,i.aZ)({name:"StaticsDashboard",props:{estacion:{type:Number,required:!1}},setup(a){const{data:e,getHistoricoMediciones:t}=(0,q.D)(),o=(0,x.iH)(null),l=(0,x.iH)(null),n=(0,x.iH)(!1);return(0,i.bv)((async()=>{n.value=!0,await t(a.estacion,10),W.ZP.generate({bindto:o.value,data:{x:"x",columns:e.value.columns,type:(0,W.jv)(),types:{"Presión barometrica":(0,W.SO)()}},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),W.ZP.generate({bindto:l.value,data:{x:"x",columns:e.value.precipitacion,type:(0,W.Kb)(),groups:[["Precipitaciones"]]},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),n.value=!1})),{props:a,chart:o,chart2:l,mediciones:e,loading:n}}});var _=t(151),H=t(5589),k=t(2509),Q=t(7518),P=t.n(Q);Z.render=w,Z.__scopeId="data-v-4829e6b7";const C=Z;P()(Z,"components",{QCard:_.Z,QCardSection:H.Z,QSpinnerAudio:k.Z})},5929:(a,e,t)=>{t.r(e),t.d(e,{default:()=>Y});var i=t(3673),o=t(2323);const l=(0,i.HX)("data-v-8e08bec6");(0,i.dD)("data-v-8e08bec6");const n={class:"row justify-start q-mx-lg"},s={class:"col-12 text-h4 text-center"},r={class:"col-12 col-md-6",style:{height:"180px"}},c={class:"col-12 col-md-6"},d={class:"row justify-center"},u={class:"row col-6 justify-start q-px-lg"},m={key:0,class:"col-12"},p={key:0},g={key:1},v={key:1,class:"col-12"},y=(0,i.Wm)("div",{class:"text-h6"},"Editar coordenada",-1);(0,i.Cn)();const h=l(((a,e,t,h,b,f)=>{const w=(0,i.up)("q-img"),x=(0,i.up)("q-item-label"),W=(0,i.up)("q-item-section"),q=(0,i.up)("q-item"),Z=(0,i.up)("q-list"),_=(0,i.up)("q-btn"),H=(0,i.up)("q-btn-toggle"),k=(0,i.up)("q-icon"),Q=(0,i.up)("q-input"),P=(0,i.up)("q-td"),C=(0,i.up)("q-tr"),E=(0,i.up)("q-table"),V=(0,i.up)("statics-dashboard"),z=(0,i.up)("q-scroll-area"),j=(0,i.up)("q-card-section"),M=(0,i.up)("GMapMarker"),D=(0,i.up)("GMapMap"),S=(0,i.up)("q-card-actions"),T=(0,i.up)("q-card"),I=(0,i.up)("q-dialog"),B=(0,i.Q2)("ripple"),N=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)(i.HY,null,[(0,i.Wm)("div",n,[(0,i.Wm)("div",s,(0,o.zw)(a.data.denominacion),1),(0,i.Wm)("div",r,[(0,i.Wm)(w,{src:`/storage/estaciones/${a.data.id}.png`,ratio:16/9},null,8,["src"])]),(0,i.Wm)("div",c,[(0,i.Wm)(Z,{dense:"",bordered:"",padding:"",class:"rounded-borders scroll",style:{height:"180px"}},{default:l((()=>[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(a.data.ultimaMedicion,((a,e)=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(q,{clickable:"",key:e},{default:l((()=>[(0,i.Wm)(W,null,{default:l((()=>[(0,i.Wm)(x,null,{default:l((()=>[(0,i.Uk)((0,o.zw)(a.descripcion),1)])),_:2},1024),(0,i.Wm)(x,{caption:""},{default:l((()=>[(0,i.Uk)((0,o.zw)(a.valorMedicion)+" "+(0,o.zw)(a.unidad),1)])),_:2},1024)])),_:2},1024)])),_:2},1536)),[[B]]))),128))])),_:1}),(0,i.Wm)("div",d,[(0,i.Wm)(_,{color:"secondary",label:"Editar",onClick:a.openDialog},null,8,["onClick"])])])]),(0,i.Wm)("div",u,[(0,i.Wm)(H,{modelValue:a.optionVisualizacion,"onUpdate:modelValue":e[1]||(e[1]=e=>a.optionVisualizacion=e),spread:"",class:"my-custom-toggle","no-caps":"",rounded:"",unelevated:"","toggle-color":"primary",color:"white","text-color":"primary",options:[{label:"Tabla",value:"tabla"},{label:"Graficos",value:"graficos"}]},null,8,["modelValue"])]),(0,i.Wm)(z,{visible:!0,style:{height:"400px","max-width":"100%"},class:"q-px-lg"},{default:l((()=>["tabla"==a.optionVisualizacion?((0,i.wg)(),(0,i.j4)("div",m,[(0,i.Wm)(E,{title:"Historico",rows:a.dataHistorico.data,columns:a.columns,"row-key":"id",pagination:a.pagination,"onUpdate:pagination":e[3]||(e[3]=e=>a.pagination=e),loading:a.loading,filter:a.filter,onRequest:a.onRequest,"binary-state-sort":""},{"top-right":l((()=>[(0,i.Wm)(Q,{borderless:"",dense:"",debounce:"300",modelValue:a.filter,"onUpdate:modelValue":e[2]||(e[2]=e=>a.filter=e),placeholder:"Search"},{append:l((()=>[(0,i.Wm)(k,{name:"search"})])),_:1},8,["modelValue"])])),body:l((a=>[(0,i.Wm)(C,{props:a,class:"cursor-pointer"},{default:l((()=>[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(a.cols,((e,t)=>((0,i.wg)(),(0,i.j4)(P,{key:e.name,props:a},{default:l((()=>{var l,n,s,r;return["updated_at"==e.name?((0,i.wg)(),(0,i.j4)("p",p,(0,o.zw)(a.row[e.name]),1)):((0,i.wg)(),(0,i.j4)("p",g,(0,o.zw)(null===(l=a.row)||void 0===l||null===(n=l.mediciones[t-1])||void 0===n?void 0:n.valorMedicion)+" "+(0,o.zw)(null===(s=a.row)||void 0===s||null===(r=s.mediciones[t-1])||void 0===r?void 0:r.unidad),1))]})),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),_:1},8,["rows","columns","pagination","loading","filter","onRequest"])])):((0,i.wg)(),(0,i.j4)("div",v,[(0,i.Wm)(V,{estacion:a.data.id},null,8,["estacion"])]))])),_:1}),(0,i.Wm)(I,{modelValue:a.dialogEditar,"onUpdate:modelValue":e[4]||(e[4]=e=>a.dialogEditar=e)},{default:l((()=>[(0,i.Wm)(T,{style:{width:"700px","max-width":"80vw"}},{default:l((()=>[(0,i.Wm)(j,null,{default:l((()=>[y])),_:1}),(0,i.Wm)(j,{class:"q-pt-none"},{default:l((()=>[(0,i.Wm)(D,{class:"bg-secondary p-2 border-2 rounded-2 col-12",center:{lat:a.marcador.lat,lng:a.marcador.lng},zoom:6,"map-type-id":"terrain",style:{height:"400px"}},{default:l((()=>[(0,i.Wm)(M,{key:a.marcador.id,position:a.marcador,draggable:!0,onDragend:a.cambiarPos},null,8,["position","onDragend"])])),_:1},8,["center"])])),_:1}),(0,i.Wm)(S,{align:"right",class:"bg-white text-teal"},{default:l((()=>[(0,i.wy)((0,i.Wm)(_,{flat:"",label:"Cerrar"},null,512),[[N]]),(0,i.Wm)(_,{flat:"",color:"primary",label:"Guardar",onClick:a.guardar},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}));var b=t(1959),f=t(2584),w=t(5474),x=t(6249),W=t(6394),q=t(8825);const Z=()=>{const a=(0,b.iH)([]),e=(0,b.iH)(null),t=(0,q.Z)(),i=(0,b.iH)([]),o=(0,b.iH)({sortBy:"desc",descending:!1,page:1,rowsPerPage:10,rowsNumber:10}),l=async(l,n)=>{x.Z.show({spinner:W.Z});const s="/api/v1/admin/estacion/"+l+"/historico/?props="+JSON.stringify(n)+"&page="+n.pagination.page;await w.api.get(s).then((e=>{i.value=[],i.value.push({name:"updated_at",label:"Fecha medicion",align:"left",sortable:!0}),e.data.data[0].mediciones.forEach((a=>{i.value.push({name:a.descripcion,label:a.descripcion,align:"left",sortable:!0})})),a.value=e.data,o.value.rowsNumber=e.data.total,o.value.rowsPerPage=e.data.per_page,o.value.page=e.data.current_page})).catch((a=>{console.log(a),e.value=!0})),t.loading.hide()};return{data:a,error:e,columns:i,getHistoricoEstacion:l,pagination:o}};var _=t(2473),H=t(5662);const k=(0,i.aZ)({name:"verEstacion",components:{StaticsDashboard:H.Z},props:{id:{type:String,required:!0}},setup(a){const{data:e,getEstacion:t,updateEstacion:o}=(0,f.E)(),{data:l,columns:n,getHistoricoEstacion:s,pagination:r}=Z(),{getHistoricoMediciones:c}=(0,_.D)();(0,i.bv)((async()=>{await t(a.id),await s(a.id,{pagination:r.value,filter:void 0})}));const d=async e=>s(a.id,e),u=(0,b.iH)(""),m=(0,b.iH)(!1),p=(0,b.iH)("tabla"),g=(0,b.iH)(!1),v=()=>{h.value.id=e.value.id,h.value.lat=Number(e.value.latitud),h.value.lng=Number(e.value.longitud),g.value=!0},y=async()=>{g.value=!1,t(e.value.id)},h=(0,b.iH)({id:null,lat:null,lng:null}),w=async a=>{h.value.lat=a.latLng.lat(),h.value.lng=a.latLng.lng()},x=async()=>{const a=await o(h);a&&y()},W=(0,b.iH)(null);return(0,i.bv)((async()=>{await c(1,10)})),{props:a,data:e,getEstacion:t,dataHistorico:l,getHistoricoEstacion:s,onRequest:d,filter:u,loading:m,pagination:r,columns:n,dialogEditar:g,openDialog:v,marcador:h,cambiarPos:w,guardar:x,chart:W,optionVisualizacion:p}}});var Q=t(4027),P=t(7011),C=t(3414),E=t(2035),V=t(2350),z=t(8240),j=t(8761),M=t(7704),D=t(6429),S=t(4842),T=t(4554),I=t(8186),B=t(3884),N=t(6778),L=t(151),U=t(5589),R=t(9367),G=t(6489),A=t(677),K=t(7518),O=t.n(K);k.render=h,k.__scopeId="data-v-8e08bec6";const Y=k;O()(k,"components",{QImg:Q.Z,QList:P.Z,QItem:C.Z,QItemSection:E.Z,QItemLabel:V.Z,QBtn:z.Z,QBtnToggle:j.Z,QScrollArea:M.Z,QTable:D.Z,QInput:S.Z,QIcon:T.Z,QTr:I.Z,QTd:B.Z,QDialog:N.Z,QCard:L.Z,QCardSection:U.Z,QCardActions:R.Z}),O()(k,"directives",{Ripple:G.Z,ClosePopup:A.Z})}}]);