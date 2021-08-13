"use strict";(self["webpackChunkquasarfront"]=self["webpackChunkquasarfront"]||[]).push([[104],{2584:(a,e,t)=>{t.d(e,{E:()=>c});var o=t(515),i=t.n(o),n=t(5474),l=t(1959),r=t(6249),s=t(6394),d=t(8825);const c=()=>{const a=(0,d.Z)(),e=(0,l.iH)([]),t=async()=>{r.Z.show({spinner:s.Z}),await n.api.get("/api/v1/admin/estaciones").then((a=>{e.value=a.data,e.value.forEach((a=>{a.position={lat:Number(a.Latitud),lng:Number(a.Longitud)}}))})).catch((e=>{console.log(e),a.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"})})),a.loading.hide()},o=async t=>{r.Z.show({spinner:s.Z}),await n.api.get("/api/v1/admin/estacion/"+t).then((a=>{e.value=a.data})).catch((e=>{console.log(e),a.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"})})),r.Z.hide()},c=async e=>{r.Z.show({spinner:s.Z});const t=await n.api.post("/api/v1/admin/estacion/"+e.value.id,i()({},e.value)).then((t=>(e.value=t.data,a.notify({message:t.data.msg,type:"positive"}),!0))).catch((e=>(console.log(e),a.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"}),!1)));return r.Z.hide(),t};return{data:e,getEstaciones:t,getEstacion:o,updateEstacion:c}}},104:(a,e,t)=>{t.r(e),t.d(e,{default:()=>T});var o=t(3673),i=t(2323);const n=(0,o.HX)("data-v-2af2f31e");(0,o.dD)("data-v-2af2f31e");const l={class:"row justify-start q-mx-lg"},r={class:"col-12 text-h4 text-center"},s={class:"col-12 col-md-6"},d={class:"col-12 col-md-6"},c={class:"row justify-center"},u={class:"col-12"},p={key:0},m={key:1},g=(0,o.Wm)("div",{class:"text-h6"},"Editar coordenada",-1);(0,o.Cn)();const v=n(((a,e,t,v,w,f)=>{const h=(0,o.up)("q-img"),b=(0,o.up)("q-item-label"),y=(0,o.up)("q-item-section"),Z=(0,o.up)("q-item"),W=(0,o.up)("q-btn"),q=(0,o.up)("q-list"),_=(0,o.up)("q-icon"),E=(0,o.up)("q-input"),H=(0,o.up)("q-td"),k=(0,o.up)("q-tr"),Q=(0,o.up)("q-table"),C=(0,o.up)("q-scroll-area"),x=(0,o.up)("q-card-section"),j=(0,o.up)("GMapMarker"),z=(0,o.up)("GMapMap"),I=(0,o.up)("q-card-actions"),M=(0,o.up)("q-card"),N=(0,o.up)("q-dialog"),P=(0,o.Q2)("ripple"),D=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(o.HY,null,[(0,o.Wm)("div",l,[(0,o.Wm)("div",r,(0,i.zw)(a.data.denominacion),1),(0,o.Wm)("div",s,[(0,o.Wm)(h,{src:`/storage/estaciones/${a.data.id}.png`,ratio:16/9},null,8,["src"])]),(0,o.Wm)("div",d,[(0,o.Wm)(q,{dense:"",bordered:"",padding:"",class:"rounded-borders"},{default:n((()=>[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(a.data.ultimaMedicion,((a,e)=>(0,o.wy)(((0,o.wg)(),(0,o.j4)(Z,{clickable:"",key:e},{default:n((()=>[(0,o.Wm)(y,null,{default:n((()=>[(0,o.Wm)(b,null,{default:n((()=>[(0,o.Uk)((0,i.zw)(a.descripcion),1)])),_:2},1024),(0,o.Wm)(b,{caption:""},{default:n((()=>[(0,o.Uk)((0,i.zw)(a.valorMedicion)+" "+(0,i.zw)(a.unidad),1)])),_:2},1024)])),_:2},1024)])),_:2},1536)),[[P]]))),128)),(0,o.Wm)("div",c,[(0,o.Wm)(W,{color:"secondary",label:"Editar",onClick:a.openDialog},null,8,["onClick"])])])),_:1})])]),(0,o.Wm)(C,{visible:!0,style:{height:"300px","max-width":"100%"}},{default:n((()=>[(0,o.Wm)("div",u,[(0,o.Wm)(Q,{title:"Historico",rows:a.dataHistorico.data,columns:a.columns,"row-key":"id",pagination:a.pagination,"onUpdate:pagination":e[2]||(e[2]=e=>a.pagination=e),loading:a.loading,filter:a.filter,onRequest:a.onRequest,"binary-state-sort":""},{"top-right":n((()=>[(0,o.Wm)(E,{borderless:"",dense:"",debounce:"300",modelValue:a.filter,"onUpdate:modelValue":e[1]||(e[1]=e=>a.filter=e),placeholder:"Search"},{append:n((()=>[(0,o.Wm)(_,{name:"search"})])),_:1},8,["modelValue"])])),body:n((a=>[(0,o.Wm)(k,{props:a,class:"cursor-pointer"},{default:n((()=>[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(a.cols,((e,t)=>((0,o.wg)(),(0,o.j4)(H,{key:e.name,props:a},{default:n((()=>{var n,l,r,s;return["updated_at"==e.name?((0,o.wg)(),(0,o.j4)("p",p,(0,i.zw)(a.row[e.name]),1)):((0,o.wg)(),(0,o.j4)("p",m,(0,i.zw)(null===(n=a.row)||void 0===n||null===(l=n.mediciones[t-1])||void 0===l?void 0:l.valorMedicion)+" "+(0,i.zw)(null===(r=a.row)||void 0===r||null===(s=r.mediciones[t-1])||void 0===s?void 0:s.unidad),1))]})),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),_:1},8,["rows","columns","pagination","loading","filter","onRequest"])])])),_:1}),(0,o.Wm)(N,{modelValue:a.dialogEditar,"onUpdate:modelValue":e[3]||(e[3]=e=>a.dialogEditar=e)},{default:n((()=>[(0,o.Wm)(M,{style:{width:"700px","max-width":"80vw"}},{default:n((()=>[(0,o.Wm)(x,null,{default:n((()=>[g])),_:1}),(0,o.Wm)(x,{class:"q-pt-none"},{default:n((()=>[(0,o.Wm)(z,{class:"bg-secondary p-2 border-2 rounded-2 col-12",center:{lat:a.marcador.lat,lng:a.marcador.lng},zoom:6,"map-type-id":"terrain",style:{height:"400px"}},{default:n((()=>[(0,o.Wm)(j,{key:a.marcador.id,position:a.marcador,draggable:!0,onDragend:a.cambiarPos},null,8,["position","onDragend"])])),_:1},8,["center"])])),_:1}),(0,o.Wm)(I,{align:"right",class:"bg-white text-teal"},{default:n((()=>[(0,o.wy)((0,o.Wm)(W,{flat:"",label:"Cerrar"},null,512),[[D]]),(0,o.Wm)(W,{flat:"",color:"primary",label:"Guardar",onClick:a.guardar},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}));var w=t(1959),f=t(2584),h=t(5474),b=t(6249),y=t(6394),Z=t(8825);const W=()=>{const a=(0,w.iH)([]),e=(0,w.iH)(null),t=(0,Z.Z)(),o=(0,w.iH)([]),i=(0,w.iH)({sortBy:"desc",descending:!1,page:1,rowsPerPage:10,rowsNumber:10}),n=async(n,l)=>{b.Z.show({spinner:y.Z});const r="/api/v1/admin/estacion/"+n+"/historico/?props="+JSON.stringify(l)+"&page="+l.pagination.page;await h.api.get(r).then((e=>{o.value=[],o.value.push({name:"updated_at",label:"Fecha medicion",align:"left",sortable:!0}),e.data.data[0].mediciones.forEach((a=>{o.value.push({name:a.descripcion,label:a.descripcion,align:"left",sortable:!0})})),a.value=e.data,i.value.rowsNumber=e.data.total,i.value.rowsPerPage=e.data.per_page,i.value.page=e.data.current_page})).catch((a=>{console.log(a),e.value=!0})),t.loading.hide()};return{data:a,error:e,columns:o,getHistoricoEstacion:n,pagination:i}},q=(0,o.aZ)({name:"verEstacion",props:{id:{type:String,required:!0}},setup(a){const{data:e,getEstacion:t,updateEstacion:i}=(0,f.E)(),{data:n,columns:l,getHistoricoEstacion:r,pagination:s}=W();(0,o.bv)((async()=>{await t(a.id),await r(a.id,{pagination:s.value,filter:void 0})}));const d=async e=>r(a.id,e),c=(0,w.iH)(""),u=(0,w.iH)(!1),p=(0,w.iH)(!1),m=()=>{v.value.id=e.value.id,v.value.lat=Number(e.value.latitud),v.value.lng=Number(e.value.longitud),p.value=!0},g=async()=>{p.value=!1,t(e.value.id)},v=(0,w.iH)({id:null,lat:null,lng:null}),h=async a=>{v.value.lat=a.latLng.lat(),v.value.lng=a.latLng.lng()},b=async()=>{const a=await i(v);a&&g()};return{props:a,data:e,getEstacion:t,dataHistorico:n,getHistoricoEstacion:r,onRequest:d,filter:c,loading:u,pagination:s,columns:l,dialogEditar:p,openDialog:m,marcador:v,cambiarPos:h,guardar:b}}});var _=t(4027),E=t(7011),H=t(3414),k=t(2035),Q=t(2350),C=t(8240),x=t(7704),j=t(6429),z=t(4842),I=t(4554),M=t(8186),N=t(3884),P=t(6778),D=t(151),L=t(5589),S=t(9367),V=t(6489),R=t(677),U=t(7518),G=t.n(U);q.render=v,q.__scopeId="data-v-2af2f31e";const T=q;G()(q,"components",{QImg:_.Z,QList:E.Z,QItem:H.Z,QItemSection:k.Z,QItemLabel:Q.Z,QBtn:C.Z,QScrollArea:x.Z,QTable:j.Z,QInput:z.Z,QIcon:I.Z,QTr:M.Z,QTd:N.Z,QDialog:P.Z,QCard:D.Z,QCardSection:L.Z,QCardActions:S.Z}),G()(q,"directives",{Ripple:V.Z,ClosePopup:R.Z})}}]);