"use strict";(self["webpackChunkquasarfront"]=self["webpackChunkquasarfront"]||[]).push([[731],{2584:(e,a,n)=>{n.d(a,{E:()=>r});var o=n(5474),t=n(1959),i=n(6249),l=n(6394),s=n(8825);const r=()=>{const e=(0,s.Z)(),a=(0,t.iH)([]),n=async()=>{i.Z.show({spinner:l.Z}),await o.api.get("/api/v1/admin/estaciones").then((e=>{a.value=e.data,a.value.forEach((e=>{e.position={lat:Number(e.Latitud),lng:Number(e.Longitud)}}))})).catch((a=>{console.log(a),e.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"})})),e.loading.hide()},r=async n=>{i.Z.show({spinner:l.Z}),await o.api.get("/api/v1/admin/estacion/"+n).then((e=>{a.value=e.data})).catch((a=>{console.log(a),e.notify({color:"negative",position:"top",message:"Contactese con el administrador.",icon:"report_problem"})})),i.Z.hide()};return{data:a,getEstaciones:n,getEstacion:r}}},7731:(e,a,n)=>{n.r(a),n.d(a,{default:()=>C});var o=n(3673),t=n(2323);const i={class:"row justify-center"},l={class:"col-4"},s={class:"text-h4"},r={class:"row justify-end q-mx-lg"},c={class:"col-12 col-md-6"},d=(0,o.Wm)("br",null,null,-1),u=(0,o.Wm)("br",null,null,-1),p={class:"col-12 col-md-6"};function m(e,a,n,m,g,w){const v=(0,o.up)("GMapInfoWindow"),f=(0,o.up)("GMapMarker"),b=(0,o.up)("GMapMap"),h=(0,o.up)("q-table"),k=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(k,null,{default:(0,o.w5)((()=>[(0,o.Wm)("div",i,[(0,o.Wm)("div",l,[(0,o.Wm)("div",s," Bienvenido "+(0,t.zw)(e.usuario.nombre)+" "+(0,t.zw)(e.usuario.apellido),1)])]),(0,o.Wm)("div",r,[(0,o.Wm)("div",c,[(0,o.Wm)(b,{center:{lat:-44,lng:-69},zoom:6,"map-type-id":"terrain",style:{width:"90%",height:"100%"}},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.data,((a,n)=>((0,o.wg)(),(0,o.j4)(f,{key:n,position:a.position,clickable:!0,onClick:n=>e.openMarker(a.Código)},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{opened:e.openedMarkerID===a.Código},{default:(0,o.w5)((()=>[(0,o.Wm)("div",null,[(0,o.Wm)("h4",null,(0,t.zw)(a.Denominación),1),(0,o.Wm)("span",null,[(0,o.Uk)(" Latitud: "+(0,t.zw)(a.Latitud)+" ",1),d,(0,o.Uk)(" Longitud: "+(0,t.zw)(a.Longitud)+" ",1),u])])])),_:2},1032,["opened"])])),_:2},1032,["position","onClick"])))),128))])),_:1})]),(0,o.Wm)("div",p,[(0,o.Wm)(h,{title:"Listado de estaciones",dense:"",rows:e.data,columns:e.columns,"row-key":"Código",pagination:{rowsPerPage:10},onRowClick:e.verEstacion},null,8,["rows","columns","onRowClick"])])])])),_:1})}var g=n(1959),w=n(589),v=n(2584),f=n(9582);const b=(0,o.aZ)({name:"PageIndex",setup(){const e=(0,f.tv)(),a=JSON.parse(w.Z.getItem("user")),{data:n,getEstaciones:t}=(0,v.E)(),i=(a,n)=>{e.push({name:"verEstacion",params:{id:n.Código}})},l=(0,g.iH)(null),s=e=>{l.value=e},r=[{name:"Denominación",align:"left",label:"Denominación",field:"Denominación",sortable:!0},{name:"Latitud",align:"left",label:"Latitud",field:"Latitud",sortable:!0},{name:"Longitud",align:"left",label:"Longitud",field:"Longitud"}];return(0,o.bv)((async()=>{await t(),console.log(n)})),{usuario:a,data:n,columns:r,verEstacion:i,openMarker:s,openedMarkerID:l}}});var h=n(4379),k=n(6429),W=n(7518),L=n.n(W);b.render=m;const C=b;L()(b,"components",{QPage:h.Z,QTable:k.Z})}}]);