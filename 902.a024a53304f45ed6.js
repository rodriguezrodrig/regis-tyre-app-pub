"use strict";(self.webpackChunkregis_tyre_app=self.webpackChunkregis_tyre_app||[]).push([[902],{2902:(C,c,t)=>{t.r(c),t.d(c,{ProtectedModule:()=>P});var e=t(6895),i=t(2956),o=t(8256),d=t(5593),p=t(9764),a=t(8783),g=t(3346);const u=[{path:"",children:[{path:"",component:(()=>{class n{constructor(h){this.router=h}irAInspecciones(){this.router.navigate(["/dashboard/inspeccion/buscar"])}irAVehiculos(){this.router.navigate(["/dashboard/vehiculo/buscar"])}static#t=this.\u0275fac=function(r){return new(r||n)(o.Y36(i.F0))};static#n=this.\u0275cmp=o.Xpm({type:n,selectors:[["app-dashboard"]],decls:12,vars:0,consts:[[1,"ui-fluid"],[1,"grid","forms-grid"],["header","Home",1,"p-fluid"],["header","Home"],[1,"col-12"],["label","Ir a Inspecciones","icon","pi pi-search",3,"onClick"],["label","Ir a Vehiculos","icon","pi pi-truck",3,"onClick"]],template:function(r,M){1&r&&(o._UZ(0,"shared-menu")(1,"router-outlet"),o.TgZ(2,"div",0)(3,"div",1)(4,"p-panel",2)(5,"p-tabView")(6,"p-tabPanel",3)(7,"div",4)(8,"div",4)(9,"p-button",5),o.NdJ("onClick",function(){return M.irAInspecciones()}),o.qZA()(),o.TgZ(10,"div",4)(11,"p-button",6),o.NdJ("onClick",function(){return M.irAVehiculos()}),o.qZA()()()()()()()())},dependencies:[i.lC,d.zx,p.s,a.xf,a.x4,g.M],styles:["*[_ngcontent-%COMP%]{margin-right:0;margin-bottom:15px;font-family:var( --font-family )}body[_ngcontent-%COMP%]{overscroll-behavior:contain}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}@media screen and (min-width: 600px){[_nghost-%COMP%]     .ui-centered-width{width:600px}}@media screen and (max-width: 600px){[_nghost-%COMP%]     .ui-centered-width{width:600px}}.input-text-number[_ngcontent-%COMP%]{text-align:right}.box[_ngcontent-%COMP%]{border:5px solid darkblue;width:50%}@media (max-width: 767px){.ui-table-hide-on-sm[_ngcontent-%COMP%]{display:none!important}}@media (min-width: 767px){.ui-table-display-on-sm[_ngcontent-%COMP%]{text-align:left;font-size:12px;height:15px;margin-top:30px}}"]})}return n})()},{path:"inspeccion",loadChildren:()=>Promise.all([t.e(592),t.e(958)]).then(t.bind(t,5958)).then(n=>n.InspeccionModule)},{path:"vehiculo",loadChildren:()=>Promise.all([t.e(592),t.e(40)]).then(t.bind(t,9040)).then(n=>n.VehiculoModule)},{path:"neumatico",loadChildren:()=>Promise.all([t.e(592),t.e(278)]).then(t.bind(t,2278)).then(n=>n.NeumaticoModule)},{path:"**",redirectTo:""}]}];let m=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#n=this.\u0275mod=o.oAB({type:n});static#o=this.\u0275inj=o.cJS({imports:[i.Bz.forChild(u),i.Bz]})}return n})();var l=t(433),f=t(4458),v=t(7828);let P=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#n=this.\u0275mod=o.oAB({type:n});static#o=this.\u0275inj=o.cJS({imports:[e.ez,m,l.u5,l.UX,f.W,v.m]})}return n})()},3346:(C,c,t)=>{t.d(c,{M:()=>g});var e=t(8256),i=t(2956),o=t(805),d=t(2939);function p(s,u){1&s&&e._UZ(0,"img",3)}function a(s,u){}let g=(()=>{class s{logout(){this.router.navigateByUrl("/auth"),localStorage.clear()}constructor(m){this.router=m,this.menuItems=[]}ngOnInit(){this.menuItems=[{label:"Buscar",icon:"pi pi-fw pi-pencil",items:[{label:"Inspeccion",icon:"pi pi-fw pi-search",routerLink:"/dashboard/inspeccion/buscar"},{label:"Vehiculo",icon:"pi pi-fw pi-truck",routerLink:"/dashboard/vehiculo/buscar"},{label:"Neumatico",icon:"pi pi-fw pi-cog",routerLink:"/dashboard/neumatico/buscar"}]},{label:"Salir",icon:"pi pi-fw pi-power-off",command:m=>{this.logout()}}]}static#t=this.\u0275fac=function(l){return new(l||s)(e.Y36(i.F0))};static#n=this.\u0275cmp=e.Xpm({type:s,selectors:[["shared-menu"]],decls:3,vars:1,consts:[[3,"model"],["pTemplate","start"],["pTemplate","end"],["src","../../../../../assets/images/provider40.png","height","20",1,"mr-2"]],template:function(l,f){1&l&&(e.TgZ(0,"p-menubar",0),e.YNc(1,p,1,0,"ng-template",1),e.YNc(2,a,0,0,"ng-template",2),e.qZA()),2&l&&e.Q6J("model",f.menuItems)},dependencies:[o.jx,d.nm],encapsulation:2})}return s})()},7828:(C,c,t)=>{t.d(c,{m:()=>p});var e=t(6895),i=t(4458),o=t(433),d=t(8256);let p=(()=>{class a{static#t=this.\u0275fac=function(u){return new(u||a)};static#n=this.\u0275mod=d.oAB({type:a});static#o=this.\u0275inj=d.cJS({imports:[e.ez,i.W,o.u5,i.W]})}return a})()}}]);