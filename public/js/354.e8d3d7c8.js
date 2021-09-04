"use strict";(self["webpackChunkquasarfront"]=self["webpackChunkquasarfront"]||[]).push([[354],{2584:(a,e,t)=>{t.d(e,{E:()=>c});var i=t(515),l=t.n(i),o=t(5474),n=t(1959),s=t(6249),r=t(6394),d=t(8825);const c=()=>{const a=(0,d.Z)(),e=(0,n.iH)([]),t=async()=>{s.Z.show({spinner:r.Z}),await o.api.get("/api/v1/admin/estaciones").then((a=>{e.value=a.data,e.value.forEach((a=>{a.position={lat:Number(a.Latitud),lng:Number(a.Longitud)}}))})).catch((e=>{console.log(e),a.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"})})),a.loading.hide()},i=async t=>{s.Z.show({spinner:r.Z}),await o.api.get("/api/v1/admin/estacion/"+t).then((a=>{e.value=a.data})).catch((e=>{console.log(e),a.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"})})),s.Z.hide()},c=async e=>{s.Z.show({spinner:r.Z});const t=await o.api.post("/api/v1/admin/estacion/"+e.value.id,l()({},e.value)).then((t=>(e.value=t.data,a.notify({message:t.data.msg,type:"positive"}),!0))).catch((e=>(console.log(e),a.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"}),!1)));return s.Z.hide(),t};return{data:e,getEstaciones:t,getEstacion:i,updateEstacion:c}}},3298:(a,e,t)=>{t.d(e,{Z:()=>T});var i=t(3673),l=t(8880),o=t(2323);const n=(0,i.HX)("data-v-da064bbc");(0,i.dD)("data-v-da064bbc");const s={class:"row q-pa-lg justify-center"},r=(0,i.Wm)("div",{class:"text-subtitle2 text-capitalize"}," Temperatura Media ",-1),d={class:"text-h6 text-left"},c=(0,i.Wm)("div",{class:"text-subtitle2"}," Velocidad Viento Media ",-1),u={class:"text-h6 text-left"},m=(0,i.Wm)("div",{class:"text-subtitle2 text-left"}," Humedad Media ",-1),p={class:"text-h6 text-left"},g=(0,i.Wm)("div",{class:"text-subtitle2 text-left"}," Presion Barometrica Media ",-1),f={class:"text-h6 text-left"},v=(0,i.Wm)("div",{class:"text-subtitle2 text-left"}," Precipitacion Media ",-1),y={class:"text-h6 text-left"},b={class:"col-12 q-mt-lg",ref:"chart"},x={class:"col-12 col-md-6  q-mt-lg",ref:"limnimetroRef"},h={class:"col-12 col-md-6  q-mt-lg",ref:"bateriaRef"},w={class:"col-12 col-md-6  q-mt-lg",ref:"temperaturaRef"},W={class:"col-12 col-md-6  q-mt-lg",ref:"humedadRef"},q={class:"col-12 col-md-6  q-mt-lg",ref:"probLluviaRef"},Z={class:"col-12 col-md-6  q-mt-lg",ref:"velocidadVientoRef"},_={class:"col-12 col-md-6  q-mt-lg",ref:"presionBarometricaRef"},H={class:"col-12 col-md-6  q-mt-lg",ref:"radiacionSolarRef"};(0,i.Cn)();const k=n(((a,e,t,k,P,z)=>{const Q=(0,i.up)("q-card-section"),R=(0,i.up)("q-card"),V=(0,i.up)("q-spinner-audio");return a.mediciones.columns?((0,i.wg)(),(0,i.j4)(l.uT,{key:0,appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:n((()=>[(0,i.Wm)("div",s,[(0,i.Wm)(R,{bordered:"",flat:"",class:"my-card col-2",style:{"max-height":"150px"}},{default:n((()=>[(0,i.Wm)(Q,{horizontal:""},{default:n((()=>[(0,i.Wm)(Q,{class:"text-left"},{default:n((()=>[r,(0,i.Wm)("p",d,(0,o.zw)(a.mediciones.mediaTemperatura),1)])),_:1})])),_:1})])),_:1}),(0,i.Wm)(R,{bordered:"",flat:"",class:"my-card col-2 q-ml-lg",style:{"max-height":"150px"}},{default:n((()=>[(0,i.Wm)(Q,{horizontal:""},{default:n((()=>[(0,i.Wm)(Q,{class:"text-left"},{default:n((()=>[c,(0,i.Wm)("p",u,(0,o.zw)(a.mediciones.mediaViento),1)])),_:1})])),_:1})])),_:1}),(0,i.Wm)(R,{bordered:"",flat:"",class:"my-card col-2 q-px-lg-xl q-ml-lg",style:{"max-height":"150px"}},{default:n((()=>[(0,i.Wm)(Q,{horizontal:""},{default:n((()=>[(0,i.Wm)(Q,{class:"text-left"},{default:n((()=>[m,(0,i.Wm)("p",p,(0,o.zw)(a.mediciones.mediaHumedad),1)])),_:1})])),_:1})])),_:1}),(0,i.Wm)(R,{bordered:"",flat:"",class:"my-card col-2 q-px-lg-xl q-ml-lg",style:{"max-height":"150px"}},{default:n((()=>[(0,i.Wm)(Q,{horizontal:""},{default:n((()=>[(0,i.Wm)(Q,{class:"text-left"},{default:n((()=>[g,(0,i.Wm)("p",f,(0,o.zw)(a.mediciones.mediaPresionBarometrica),1)])),_:1})])),_:1})])),_:1}),(0,i.Wm)(R,{bordered:"",flat:"",class:"my-card col-2 q-px-lg-xl q-ml-lg",style:{"max-height":"150px"}},{default:n((()=>[(0,i.Wm)(Q,{horizontal:""},{default:n((()=>[(0,i.Wm)(Q,{class:"text-left"},{default:n((()=>[v])),_:1}),(0,i.Wm)("p",y,(0,o.zw)(a.mediciones.mediaPrecipitacion),1)])),_:1})])),_:1}),(0,i.Wm)("div",b,null,512),(0,i.Wm)("div",x,null,512),(0,i.Wm)("div",h,null,512),(0,i.Wm)("div",w,null,512),(0,i.Wm)("div",W,null,512),(0,i.Wm)("div",q,null,512),(0,i.Wm)("div",Z,null,512),(0,i.Wm)("div",_,null,512),(0,i.Wm)("div",H,null,512)])])),_:1})):((0,i.wg)(),(0,i.j4)(V,{key:1,size:"xl",color:"primary"}))}));var P=t(1959),z=t(4130),Q=t(5474),R=t(8825);const V=()=>{const a=(0,R.Z)(),e=(0,P.iH)({columns:null,mediaTemperatura:"-",mediaViento:"-",mediaHumedad:"-",mediaPresionBarometrica:"-",mediaPrecipitacion:"-",precipitacion:[]}),t=async(t,i=null)=>{await Q.api.get(`/api/v1/admin/estacion/${t}/estadistica`).then((a=>{e.value.columns=a.data.data.columns,e.value.mediaTemperatura=a.data.mediaTemperatura,e.value.mediaViento=a.data.mediaViento,e.value.mediaHumedad=a.data.mediaHumedad,e.value.mediaPresionBarometrica=a.data.mediaPresionBarometrica,e.value.mediaPrecipitacion=a.data.mediaPrecipitacion})).catch((e=>{console.log(e),a.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"})}))};return{data:e,getHistoricoMediciones:t}},E=(0,i.aZ)({name:"StaticsDashboard",props:{estacion:{type:Number,required:!1}},setup(a){const{data:e,getHistoricoMediciones:t}=V(),l=(0,P.iH)(null),o=(0,P.iH)(null),n=(0,P.iH)(null),s=(0,P.iH)(null),r=(0,P.iH)(null),d=(0,P.iH)(null),c=(0,P.iH)(null),u=(0,P.iH)(null),m=(0,P.iH)(null),p=(0,P.iH)(!1);return(0,i.bv)((async()=>{p.value=!0,await t(a.estacion,10),z.ZP.generate({bindto:l.value,data:{x:"x",columns:e.value.columns,type:(0,z.Nb)(),types:{"Presión barometrica":(0,z.SO)()}},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),e.value.columns.forEach((a=>{"Limnimetro"===a[0]&&z.ZP.generate({bindto:o.value,data:{x:"x",columns:[e.value.columns[0],a],type:(0,z.$y)()},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),"Bateria"===a[0]&&z.ZP.generate({bindto:n.value,data:{x:"x",columns:[e.value.columns[0],a],type:(0,z.Nb)()},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),"Temperatura"===a[0]&&z.ZP.generate({bindto:s.value,data:{x:"x",columns:[e.value.columns[0],a],type:(0,z.Kb)()},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),"Humedad"===a[0]&&z.ZP.generate({bindto:r.value,data:{x:"x",columns:[e.value.columns[0],a],type:(0,z.$y)()},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),"Probabilidad de lluvia"===a[0]&&z.ZP.generate({bindto:d.value,data:{x:"x",columns:[e.value.columns[0],a],type:(0,z.$y)()},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),"Velocidad del viento"===a[0]&&z.ZP.generate({bindto:c.value,data:{x:"x",columns:[e.value.columns[0],a],type:(0,z.$y)()},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),"Presión barometrica"===a[0]&&z.ZP.generate({bindto:u.value,data:{x:"x",columns:[e.value.columns[0],a],type:(0,z.$y)()},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}}),"Radiacion solar"===a[0]&&z.ZP.generate({bindto:m.value,data:{x:"x",columns:[e.value.columns[0],a],type:(0,z.$y)()},axis:{x:{type:"timeseries",tick:{fit:!0,multiline:!1,autorotate:!0,rotate:25,format:"%e %b %y"}}}})})),p.value=!1})),{props:a,chart:l,mediciones:e,loading:p,limnimetroRef:o,bateriaRef:n,temperaturaRef:s,humedadRef:r,probLluviaRef:d,velocidadVientoRef:c,presionBarometricaRef:u,radiacionSolarRef:m}}});var C=t(151),j=t(5589),M=t(2509),B=t(7518),S=t.n(B);E.render=k,E.__scopeId="data-v-da064bbc";const T=E;S()(E,"components",{QCard:C.Z,QCardSection:j.Z,QSpinnerAudio:M.Z})},4354:(a,e,t)=>{t.r(e),t.d(e,{default:()=>A});var i=t(3673),l=t(2323);const o=(0,i.HX)("data-v-34ffebf0");(0,i.dD)("data-v-34ffebf0");const n={class:"row justify-start q-mx-lg"},s={class:"col-12 text-h4 text-center"},r={class:"col-12 col-md-6",style:{height:"180px"}},d={class:"col-12 col-md-6"},c={class:"row justify-center"},u={class:"row col-6 justify-start q-px-lg"},m={key:0,class:"col-12"},p={key:0},g={key:1},f={key:0},v={key:1,class:"col-12"},y=(0,i.Wm)("div",{class:"text-h6"},"Editar coordenada",-1);(0,i.Cn)();const b=o(((a,e,t,b,x,h)=>{const w=(0,i.up)("q-img"),W=(0,i.up)("q-item-label"),q=(0,i.up)("q-item-section"),Z=(0,i.up)("q-item"),_=(0,i.up)("q-list"),H=(0,i.up)("q-btn"),k=(0,i.up)("q-btn-toggle"),P=(0,i.up)("q-icon"),z=(0,i.up)("q-input"),Q=(0,i.up)("q-td"),R=(0,i.up)("q-tr"),V=(0,i.up)("q-table"),E=(0,i.up)("statics-dashboard"),C=(0,i.up)("q-scroll-area"),j=(0,i.up)("q-card-section"),M=(0,i.up)("GMapMarker"),B=(0,i.up)("GMapMap"),S=(0,i.up)("q-card-actions"),T=(0,i.up)("q-card"),N=(0,i.up)("q-dialog"),D=(0,i.Q2)("ripple"),I=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)(i.HY,null,[(0,i.Wm)("div",n,[(0,i.Wm)("div",s,(0,l.zw)(a.data.denominacion),1),(0,i.Wm)("div",r,[(0,i.Wm)(w,{src:`/storage/estaciones/${a.data.id}.png`,ratio:16/9,style:{height:"180px"}},null,8,["src"])]),(0,i.Wm)("div",d,[(0,i.Wm)(_,{dense:"",bordered:"",padding:"",class:"rounded-borders scroll",style:{height:"180px"}},{default:o((()=>[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(a.data.ultimaMedicion,((a,e)=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(Z,{clickable:"",key:e},{default:o((()=>[(0,i.Wm)(q,null,{default:o((()=>[(0,i.Wm)(W,null,{default:o((()=>[(0,i.Uk)((0,l.zw)(a.descripcion),1)])),_:2},1024),(0,i.Wm)(W,{caption:""},{default:o((()=>[(0,i.Uk)((0,l.zw)(a.valorMedicion)+" "+(0,l.zw)(a.unidad),1)])),_:2},1024)])),_:2},1024)])),_:2},1536)),[[D]]))),128))])),_:1}),(0,i.Wm)("div",c,[(0,i.Wm)(H,{color:"secondary",label:"Editar",onClick:a.openDialog},null,8,["onClick"])])])]),(0,i.Wm)("div",u,[(0,i.Wm)(k,{modelValue:a.optionVisualizacion,"onUpdate:modelValue":e[1]||(e[1]=e=>a.optionVisualizacion=e),spread:"",class:"my-custom-toggle","no-caps":"",rounded:"",unelevated:"","toggle-color":"primary",color:"white","text-color":"primary",options:[{label:"Tabla",value:"tabla"},{label:"Graficos",value:"graficos"}]},null,8,["modelValue"])]),(0,i.Wm)(C,{visible:!0,style:{height:"500px","max-height":"80vh","max-width":"100%"},class:"q-px-lg"},{default:o((()=>["tabla"==a.optionVisualizacion?((0,i.wg)(),(0,i.j4)("div",m,[(0,i.Wm)(V,{title:"Historico",rows:a.dataHistorico.data,columns:a.columns,"row-key":"id",pagination:a.pagination,"onUpdate:pagination":e[3]||(e[3]=e=>a.pagination=e),loading:a.loading,filter:a.filter,onRequest:a.onRequest,"binary-state-sort":""},{"top-right":o((()=>[(0,i.Wm)(z,{borderless:"",dense:"",debounce:"300",modelValue:a.filter,"onUpdate:modelValue":e[2]||(e[2]=e=>a.filter=e),placeholder:"Search"},{append:o((()=>[(0,i.Wm)(P,{name:"search"})])),_:1},8,["modelValue"])])),body:o((a=>[(0,i.Wm)(R,{props:a,class:"cursor-pointer"},{default:o((()=>[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(a.cols,(e=>((0,i.wg)(),(0,i.j4)(Q,{key:e.name,props:a},{default:o((()=>["updated_at"==e.name?((0,i.wg)(),(0,i.j4)("p",p,(0,l.zw)(a.row[e.name]),1)):((0,i.wg)(),(0,i.j4)("div",g,[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(a.row.mediciones,((a,t)=>((0,i.wg)(),(0,i.j4)("p",{key:t},[e.name==a.descripcion?((0,i.wg)(),(0,i.j4)("span",f,(0,l.zw)(a.valorMedicion)+(0,l.zw)(a.unidad),1)):(0,i.kq)("",!0)])))),128))]))])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),_:1},8,["rows","columns","pagination","loading","filter","onRequest"])])):((0,i.wg)(),(0,i.j4)("div",v,[(0,i.Wm)(E,{estacion:a.data.id},null,8,["estacion"])]))])),_:1}),(0,i.Wm)(N,{modelValue:a.dialogEditar,"onUpdate:modelValue":e[4]||(e[4]=e=>a.dialogEditar=e)},{default:o((()=>[(0,i.Wm)(T,{style:{width:"700px","max-width":"80vw"}},{default:o((()=>[(0,i.Wm)(j,null,{default:o((()=>[y])),_:1}),(0,i.Wm)(j,{class:"q-pt-none"},{default:o((()=>[(0,i.Wm)(B,{class:"bg-secondary p-2 border-2 rounded-2 col-12",center:{lat:a.marcador.lat,lng:a.marcador.lng},zoom:6,"map-type-id":"terrain",style:{height:"400px"}},{default:o((()=>[(0,i.Wm)(M,{key:a.marcador.id,position:a.marcador,draggable:!0,onDragend:a.cambiarPos},null,8,["position","onDragend"])])),_:1},8,["center"])])),_:1}),(0,i.Wm)(S,{align:"right",class:"bg-white text-teal"},{default:o((()=>[(0,i.wy)((0,i.Wm)(H,{flat:"",label:"Cerrar"},null,512),[[I]]),(0,i.Wm)(H,{flat:"",color:"primary",label:"Guardar",onClick:a.guardar},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}));var x=t(1959),h=t(2584),w=t(5474),W=t(6249),q=t(6394),Z=t(8825);const _=()=>{const a=(0,x.iH)([]),e=(0,x.iH)(null),t=(0,Z.Z)(),i=(0,x.iH)([]),l=(0,x.iH)({sortBy:"updated_at",descending:!1,page:1,rowsPerPage:10,rowsNumber:10}),o=async(o,n)=>{W.Z.show({spinner:q.Z});const s="/api/v1/admin/estacion/"+o+"/historico/?props="+JSON.stringify(n)+"&page="+n.pagination.page;await w.api.get(s).then((e=>{i.value=[],i.value.push({name:"updated_at",label:"Fecha medicion",align:"left",sortable:!0}),e.data.data[0].mediciones.forEach((a=>{i.value.push({name:a.descripcion,label:a.descripcion,align:"left",sortable:!0})})),a.value=e.data,l.value.rowsNumber=e.data.total,l.value.rowsPerPage=e.data.per_page,l.value.page=e.data.current_page})).catch((a=>{console.log(a),e.value=!0})),t.loading.hide()};return{data:a,error:e,columns:i,getHistoricoEstacion:o,pagination:l}};var H=t(3298);const k=(0,i.aZ)({name:"verEstacion",components:{StaticsDashboard:H.Z},props:{id:{type:String,required:!0}},setup(a){const{data:e,getEstacion:t,updateEstacion:l}=(0,h.E)(),{data:o,columns:n,getHistoricoEstacion:s,pagination:r}=_(),d=(0,x.iH)(a.id),c=a=>{const{page:e,rowsPerPage:t,sortBy:i,descending:l}=a.pagination;r.value.page=e,r.value.rowsPerPage=t,r.value.sortBy=i,r.value.descending=l,s(d.value,a)};(0,i.bv)((async()=>{await t(a.id),await s(a.id,{pagination:r.value,filter:void 0})}));const u=(0,x.iH)(""),m=(0,x.iH)(!1),p=(0,x.iH)("tabla"),g=(0,x.iH)(!1),f=()=>{y.value.id=e.value.id,y.value.lat=Number(e.value.latitud),y.value.lng=Number(e.value.longitud),g.value=!0},v=async()=>{g.value=!1,t(e.value.id)},y=(0,x.iH)({id:null,lat:null,lng:null}),b=async a=>{y.value.lat=a.latLng.lat(),y.value.lng=a.latLng.lng()},w=async()=>{const a=await l(y);a&&v()};return{props:a,data:e,getEstacion:t,dataHistorico:o,getHistoricoEstacion:s,onRequest:c,filter:u,loading:m,pagination:r,columns:n,dialogEditar:g,openDialog:f,marcador:y,cambiarPos:b,guardar:w,optionVisualizacion:p}}});var P=t(4027),z=t(7011),Q=t(3414),R=t(2035),V=t(2350),E=t(8240),C=t(8761),j=t(7704),M=t(6429),B=t(4842),S=t(4554),T=t(8186),N=t(3884),D=t(6778),I=t(151),L=t(5589),$=t(9367),U=t(6489),G=t(677),K=t(7518),Y=t.n(K);k.render=b,k.__scopeId="data-v-34ffebf0";const A=k;Y()(k,"components",{QImg:P.Z,QList:z.Z,QItem:Q.Z,QItemSection:R.Z,QItemLabel:V.Z,QBtn:E.Z,QBtnToggle:C.Z,QScrollArea:j.Z,QTable:M.Z,QInput:B.Z,QIcon:S.Z,QTr:T.Z,QTd:N.Z,QDialog:D.Z,QCard:I.Z,QCardSection:L.Z,QCardActions:$.Z}),Y()(k,"directives",{Ripple:U.Z,ClosePopup:G.Z})}}]);