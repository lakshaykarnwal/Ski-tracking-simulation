(function(){"use strict";var e={7331:function(e,t,i){var r=i(2856),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("ArcGISMap")],1)},o=[],s=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{height:"100vh"},attrs:{id:"viewDiv"}}),t("button",{attrs:{id:"recenterBtn"},on:{click:e.recenterMap}},[e._v("Re-center")]),e.selectedTrail?t("div",{staticClass:"trail-info-box"},[t("button",{staticClass:"close-btn",on:{click:e.closeInfoBox}},[e._v("×")]),t("h3",[e._v(e._s(e.selectedTrail.Ski_Name))]),t("ul",[t("li",[t("strong",[e._v("Trail Type:")]),e._v(" "+e._s(e.selectedTrail.TRL_TYPE||"N/A"))]),t("li",[t("strong",[e._v("Ski Type:")]),e._v(" "+e._s(e.selectedTrail.Ski_Type||"N/A"))]),t("li",[t("strong",[e._v("Trail Length:")]),e._v(" "+e._s(e.selectedTrail.Miles?`${e.selectedTrail.Miles.toFixed(2)} miles`:"N/A"))]),t("li",[t("strong",[e._v("Trail Width:")]),e._v(" "+e._s(e.selectedTrail.Width||"N/A"))]),t("li",[t("strong",[e._v("Surface:")]),e._v(" "+e._s(e.selectedTrail.Surface||"N/A"))]),t("li",[t("strong",[e._v("Comments:")]),e._v(" "+e._s(e.selectedTrail.Comments||"N/A"))])])]):e._e()])},l=[],a=i(4408),c={data(){return{view:null,currentPoint:null,trailsUrl:"https://services3.arcgis.com/Jdnp1TjADvSDxMAX/ArcGIS/rest/services/open_Trails/FeatureServer/4/query?outFields=*&where=1%3D1&f=geojson",selectedTrail:null}},mounted(){this.initializeMap()},methods:{initializeMap(){(0,a.loadModules)(["esri/widgets/Track","esri/views/MapView","esri/Map","esri/layers/GeoJSONLayer","esri/Graphic","esri/geometry/Point","esri/widgets/Zoom"]).then((([e,t,i,r,n,o,s])=>{this.Graphic=n,this.Point=o;const l=new i({basemap:"topo-vector"}),a=new r({url:this.trailsUrl,renderer:{type:"simple",symbol:{type:"simple-line",color:"red",width:2}},outFields:["*"]});l.add(a),this.view=new t({map:l,container:"viewDiv",zoom:7,center:[-86.34,43.25]});const c=new s({view:this.view});this.view.ui.add(c,"top-left");const u=new e({view:this.view,goToLocationEnabled:!1});this.view.ui.add(u,"top-left"),this.view.when((()=>{this.fetchGeoJSONData()})),this.view.on("click",(e=>{this.view.hitTest(e).then((e=>{const t=e.results.find((e=>e.graphic.layer===a));t&&(this.selectedTrail=t.graphic.attributes)}))}))})).catch((e=>{console.log("ArcGIS modules failed to load: ",e)}))},fetchGeoJSONData(){fetch(this.trailsUrl).then((e=>e.json())).then((e=>{const t=this.findLongestTrail(e),i=t.coordinates[0];this.view.center=[i[0],i[1]],this.animateAlongTrail(t.coordinates)})).catch((e=>{console.error("Error fetching GeoJSON data: ",e)}))},findLongestTrail(e){let t=null,i=0;return e.features.forEach((e=>{if("LineString"===e.geometry.type){const r=e.geometry.coordinates.length;r>i&&(i=r,t=e.geometry)}})),t},animateAlongTrail(e){let t=0;const i={type:"simple-marker",style:"circle",color:"blue",size:"12px"},r=new this.Graphic({symbol:i});this.view.graphics.add(r);const n=()=>{t>=e.length&&(t=0);const i=e[t];this.currentPoint=new this.Point({longitude:i[0],latitude:i[1]}),r.geometry=this.currentPoint,t++,setTimeout(n,1e3)};n()},recenterMap(){this.currentPoint&&this.view.goTo({target:this.currentPoint,zoom:18})},closeInfoBox(){this.selectedTrail=null}}},u=c,h=i(1656),d=(0,h.A)(u,s,l,!1,null,"d42b5e9c",null),v=d.exports,f={name:"App",components:{ArcGISMap:v}},p=f,g=(0,h.A)(p,n,o,!1,null,null,null),w=g.exports;r.Ay.config.productionTip=!1,new r.Ay({render:e=>e(w)}).$mount("#app")}},t={};function i(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,i),o.exports}i.m=e,function(){var e=[];i.O=function(t,r,n,o){if(!r){var s=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],o=e[u][2];for(var l=!0,a=0;a<r.length;a++)(!1&o||s>=o)&&Object.keys(i.O).every((function(e){return i.O[e](r[a])}))?r.splice(a--,1):(l=!1,o<s&&(s=o));if(l){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,s=r[0],l=r[1],a=r[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(a)var u=a(i)}for(t&&t(r);c<s.length;c++)o=s[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(u)},r=self["webpackChunkweb_app"]=self["webpackChunkweb_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=i.O(void 0,[504],(function(){return i(7331)}));r=i.O(r)})();
//# sourceMappingURL=app.3741b9be.js.map