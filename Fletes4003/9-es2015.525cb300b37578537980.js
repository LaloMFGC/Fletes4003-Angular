(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{xvZZ:function(t,e,o){"use strict";o.r(e),o.d(e,"ProtectedModule",function(){return H});var b=o("ofXK"),r=o("tyNb"),c=o("PSD3"),i=o.n(c),n=o("fXoL"),a=o("V+nE");const s=function(){return["/users/home"]},d=function(){return["/users/Ordenes"]},u=function(){return["/users/Pedidos"]},l=function(){return["/users/Profile"]};let I=(()=>{class t{constructor(t,e){this.authservice=t,this.router=e,this._user={}}ngOnInit(){this.authservice.validarinfo().subscribe(t=>{this._user.username=t.username})}hidebutton(){$("#close-sidebar").click(function(){$(".page-wrapper").removeClass("toggled")}),$("#show-sidebar").click(function(){$(".page-wrapper").addClass("toggled")})}logout(){this.authservice.logout(),i.a.fire({title:"Se ha cerrado sesi\xf3n con \xe9xito",text:"Gracias por su visita",icon:"success",confirmButtonText:"Aceptar"}),this.router.navigateByUrl("/auth")}}return t.\u0275fac=function(e){return new(e||t)(n.Gb(a.a),n.Gb(r.a))},t.\u0275cmp=n.Ab({type:t,selectors:[["app-user-dashboard"]],decls:51,vars:9,consts:[[1,"page-wrapper","chiller-theme","toggled"],["id","show-sidebar",1,"btn","btn-sm","btn-dark"],[1,"fas","fa-bars"],["id","sidebar",1,"sidebar-wrapper"],[1,"sidebar-content"],[1,"sidebar-brand"],["id","close-sidebar"],[1,"fas","fa-times",3,"click"],[1,"sidebar-header"],[1,"user-pic"],["src","/assets/Images/logo.jpg","alt","User picture",1,"img-responsive","img-rounded","userimg"],[1,"user-info"],[1,"user-name"],[1,"user-role"],[1,"sidebar-menu"],[1,"header-menu"],[3,"routerLink"],[1,"fa","fa-tachometer-alt"],[1,"fa","fa-shopping-cart"],[1,"far","fa-gem"],[1,"fa","fa-calendar"],[3,"click"],[1,"fa","fa-folder"],[1,"page-content"],[1,"container-fluid"]],template:function(t,e){1&t&&(n.Jb(0,"div",0),n.Jb(1,"a",1),n.Hb(2,"i",2),n.Ib(),n.Jb(3,"nav",3),n.Jb(4,"div",4),n.Jb(5,"div",5),n.Jb(6,"a"),n.cc(7," Fletes 4003"),n.Ib(),n.Jb(8,"div",6),n.Jb(9,"i",7),n.Qb("click",function(){return e.hidebutton()}),n.Ib(),n.Ib(),n.Ib(),n.Jb(10,"div",8),n.Jb(11,"div",9),n.Hb(12,"img",10),n.Ib(),n.Jb(13,"div",11),n.Jb(14,"span",12),n.cc(15),n.Ib(),n.Jb(16,"span",13),n.cc(17," User "),n.Ib(),n.Ib(),n.Ib(),n.Jb(18,"div",14),n.Jb(19,"ul"),n.Jb(20,"li",15),n.Jb(21,"span"),n.cc(22,"General"),n.Ib(),n.Ib(),n.Jb(23,"li"),n.Jb(24,"a",16),n.Hb(25,"i",17),n.Jb(26,"span"),n.cc(27," Inicio "),n.Ib(),n.Ib(),n.Ib(),n.Jb(28,"li"),n.Jb(29,"a",16),n.Hb(30,"i",18),n.Jb(31,"span"),n.cc(32," Pedidos Realizados "),n.Ib(),n.Ib(),n.Ib(),n.Jb(33,"li"),n.Jb(34,"a",16),n.Hb(35,"i",19),n.Jb(36,"span"),n.cc(37," Realiza tu Pedido "),n.Ib(),n.Ib(),n.Ib(),n.Jb(38,"li"),n.Jb(39,"a",16),n.Hb(40,"i",20),n.Jb(41,"span"),n.cc(42," Mi Perfil "),n.Ib(),n.Ib(),n.Ib(),n.Jb(43,"li"),n.Jb(44,"a",21),n.Qb("click",function(){return e.logout()}),n.Hb(45,"i",22),n.Jb(46,"span"),n.cc(47," Cerrar Sesi\xf3n "),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Jb(48,"main",23),n.Jb(49,"div",24),n.Hb(50,"router-outlet"),n.Ib(),n.Ib(),n.Ib()),2&t&&(n.wb(15),n.dc(" ",e._user.username," "),n.wb(9),n.Vb("routerLink",n.Wb(5,s)),n.wb(5),n.Vb("routerLink",n.Wb(6,d)),n.wb(5),n.Vb("routerLink",n.Wb(7,u)),n.wb(5),n.Vb("routerLink",n.Wb(8,l)))},directives:[r.d,r.f],encapsulation:2}),t})();var p=o("3Pt+"),f=o("+fBP");function m(t,e){1&t&&(n.Jb(0,"div"),n.Jb(1,"h1",2),n.cc(2," Antes de realizar alg\xfan movimiento "),n.Ib(),n.Hb(3,"img",3),n.Jb(4,"h2",2),n.cc(5," Registra tu informaci\xf3n en el apartado "),n.Hb(6,"br"),n.cc(7," Mi Perfil "),n.Ib(),n.Ib())}function J(t,e){if(1&t){const t=n.Kb();n.Jb(0,"form",10),n.Qb("ngSubmit",function(){return n.Yb(t),n.Sb(2).refinpedido()}),n.Jb(1,"div",11),n.Jb(2,"div",12),n.Jb(3,"label",13),n.cc(4," Direcci\xf3n de Carga"),n.Ib(),n.Hb(5,"input",14),n.Ib(),n.Jb(6,"div",12),n.Jb(7,"label",15),n.cc(8," Direcci\xf3n de Entrega"),n.Ib(),n.Hb(9,"input",16),n.Ib(),n.Ib(),n.Jb(10,"div",11),n.Jb(11,"div",17),n.Jb(12,"label",18),n.cc(13,"Hora de Carga "),n.Ib(),n.Jb(14,"select",19),n.Jb(15,"option"),n.cc(16," Turno 1 "),n.Ib(),n.Jb(17,"option"),n.cc(18," Turno 2 "),n.Ib(),n.Ib(),n.Ib(),n.Jb(19,"div",17),n.Jb(20,"label",20),n.cc(21," Fecha de Carga "),n.Ib(),n.Hb(22,"input",21),n.Ib(),n.Jb(23,"div",17),n.Jb(24,"label",22),n.cc(25," Fecha de Entrega "),n.Ib(),n.Hb(26,"input",23),n.Ib(),n.Ib(),n.Jb(27,"div",11),n.Jb(28,"div",12),n.Jb(29,"label",24),n.cc(30,"Producto "),n.Ib(),n.Jb(31,"select",25),n.Jb(32,"option"),n.cc(33," Gasolina 87 Octanos "),n.Ib(),n.Jb(34,"option"),n.cc(35," Gasolina 91 Octanos "),n.Ib(),n.Jb(36,"option"),n.cc(37," Diesel "),n.Ib(),n.Ib(),n.Ib(),n.Jb(38,"div",12),n.Jb(39,"label",26),n.cc(40," Cantidad (Litros) "),n.Ib(),n.Jb(41,"select",27),n.Jb(42,"option"),n.cc(43," 10000 "),n.Ib(),n.Jb(44,"option"),n.cc(45," 15000 "),n.Ib(),n.Jb(46,"option"),n.cc(47," 20000 "),n.Ib(),n.Jb(48,"option"),n.cc(49," Full "),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Jb(50,"button",28),n.cc(51," Realizar Pedido"),n.Ib(),n.Ib()}if(2&t){const t=n.Sb(2);n.Vb("formGroup",t.refinform),n.wb(50),n.Vb("disabled",t.refinform.invalid)}}function g(t,e){if(1&t){const t=n.Kb();n.Jb(0,"form",10),n.Qb("ngSubmit",function(){return n.Yb(t),n.Sb(2).asfaltpedido()}),n.Jb(1,"div",11),n.Jb(2,"div",12),n.Jb(3,"label",13),n.cc(4," Direcci\xf3n de Carga"),n.Ib(),n.Hb(5,"input",14),n.Ib(),n.Jb(6,"div",12),n.Jb(7,"label",15),n.cc(8," Direcci\xf3n de Entrega"),n.Ib(),n.Hb(9,"input",16),n.Ib(),n.Ib(),n.Jb(10,"div",11),n.Jb(11,"div",29),n.Jb(12,"label",18),n.cc(13,"Hora de Carga "),n.Ib(),n.Jb(14,"select",19),n.Jb(15,"option"),n.cc(16," Turno 1 "),n.Ib(),n.Jb(17,"option"),n.cc(18," Turno 2 "),n.Ib(),n.Ib(),n.Ib(),n.Jb(19,"div",29),n.Jb(20,"label",20),n.cc(21," Fecha de Carga "),n.Ib(),n.Hb(22,"input",21),n.Ib(),n.Ib(),n.Jb(23,"div",11),n.Jb(24,"div",12),n.Jb(25,"label",26),n.cc(26,"Producto "),n.Ib(),n.Jb(27,"select",30),n.Jb(28,"option"),n.cc(29," ASFALTO AC-5 "),n.Ib(),n.Jb(30,"option"),n.cc(31," EKBE SUPERPAVE PG 64-22 "),n.Ib(),n.Jb(32,"option"),n.cc(33," ASFALTO EM RAPIDA VISCOSIDAD INTER (AC-20) ECR-65 "),n.Ib(),n.Jb(34,"option"),n.cc(35," EM SUPERESTABLE (AC-20) RL-3K "),n.Ib(),n.Jb(36,"option"),n.cc(37," ASFALTO AC-20-I "),n.Ib(),n.Jb(38,"option"),n.cc(39," ASFALTO STY 76-22 RMO "),n.Ib(),n.Jb(40,"option"),n.cc(41," ASFALTO N-FLEX. CLASIF. PG 70-22 "),n.Ib(),n.Jb(42,"option"),n.cc(43," ASFALTO PG 76-22 MODIFICADO "),n.Ib(),n.Jb(44,"option"),n.cc(45," ASFALTO MODIFICADO STY 82-22 "),n.Ib(),n.Jb(46,"option"),n.cc(47," ASFALTO STY B1-RM "),n.Ib(),n.Jb(48,"option"),n.cc(49," ASFALTO STY B2-RM "),n.Ib(),n.Ib(),n.Ib(),n.Jb(50,"div",12),n.Jb(51,"label",26),n.cc(52," Cantidad (Toneladas) "),n.Ib(),n.Jb(53,"select",31),n.Jb(54,"option"),n.cc(55," 33 "),n.Ib(),n.Jb(56,"option"),n.cc(57," 37 "),n.Ib(),n.Jb(58,"option"),n.cc(59," 45 "),n.Ib(),n.Jb(60,"option"),n.cc(61," 54 "),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Jb(62,"button",28),n.cc(63," Realizar Pedido"),n.Ib(),n.Ib()}if(2&t){const t=n.Sb(2);n.Vb("formGroup",t.asfaltform),n.wb(62),n.Vb("disabled",t.asfaltform.invalid)}}function h(t,e){if(1&t){const t=n.Kb();n.Jb(0,"div",4),n.Jb(1,"section"),n.Jb(2,"div"),n.Jb(3,"h1",5),n.cc(4," Realiza tu pedido con nosotros"),n.Ib(),n.Ib(),n.Ib(),n.Jb(5,"div",6),n.Jb(6,"label",7),n.cc(7," Tipo de Producto"),n.Ib(),n.Jb(8,"select",8),n.Qb("ngModelChange",function(e){return n.Yb(t),n.Sb().producttype=e}),n.Jb(9,"option"),n.cc(10," Refinado "),n.Ib(),n.Jb(11,"option"),n.cc(12," Asfalto "),n.Ib(),n.Ib(),n.Ib(),n.bc(13,J,52,2,"form",9),n.bc(14,g,64,2,"form",9),n.Ib()}if(2&t){const t=n.Sb();n.wb(8),n.Vb("ngModel",t.producttype),n.wb(5),n.Vb("ngIf","Refinado"===t.producttype),n.wb(1),n.Vb("ngIf","Asfalto"===t.producttype)}}function v(t,e){1&t&&(n.Jb(0,"div"),n.Jb(1,"h1",1),n.cc(2," Antes de realizar alg\xfan movimiento "),n.Ib(),n.Hb(3,"img",2),n.Jb(4,"h2",1),n.cc(5," Registra tu informaci\xf3n en el apartado "),n.Hb(6,"br"),n.cc(7," Mi Perfil "),n.Ib(),n.Ib())}function S(t,e){if(1&t&&(n.Jb(0,"td",24),n.cc(1),n.Ib()),2&t){const t=n.Sb().$implicit;n.wb(1),n.dc(" ",t.PROVSTATUS,"")}}function T(t,e){if(1&t&&(n.Jb(0,"td",25),n.cc(1),n.Ib()),2&t){const t=n.Sb().$implicit;n.wb(1),n.dc(" ",t.PROVSTATUS,"")}}function C(t,e){if(1&t&&(n.Jb(0,"td",26),n.cc(1),n.Ib()),2&t){const t=n.Sb().$implicit;n.wb(1),n.dc(" ",t.PROVSTATUS,"")}}function P(t,e){if(1&t&&(n.Jb(0,"td",27),n.cc(1),n.Ib()),2&t){const t=n.Sb().$implicit;n.wb(1),n.dc(" ",t.PROVSTATUS,"")}}function A(t,e){if(1&t&&(n.Jb(0,"td",28),n.cc(1),n.Ib()),2&t){const t=n.Sb().$implicit;n.wb(1),n.dc(" ",t.PROVSTATUS,"")}}function w(t,e){if(1&t&&(n.Jb(0,"tr"),n.Jb(1,"td",16),n.cc(2),n.Ib(),n.Jb(3,"td",17),n.cc(4),n.Ib(),n.Jb(5,"td",17),n.cc(6),n.Ib(),n.Jb(7,"td",17),n.cc(8),n.Ib(),n.Jb(9,"td",17),n.cc(10),n.Ib(),n.Jb(11,"td",17),n.cc(12),n.Ib(),n.Jb(13,"td",17),n.cc(14),n.Ib(),n.bc(15,S,2,1,"td",19),n.bc(16,T,2,1,"td",20),n.bc(17,C,2,1,"td",21),n.bc(18,P,2,1,"td",22),n.bc(19,A,2,1,"td",23),n.Ib()),2&t){const t=e.$implicit;n.wb(2),n.dc(" ",t.TICKETID," "),n.wb(2),n.dc(" ",t.RFC_ID,""),n.wb(2),n.dc(" ",t.PROVPRODUCT,""),n.wb(2),n.dc(" ",t.PROVCANTIDAD,""),n.wb(2),n.dc(" ",t.PROVENTREGADATE," "),n.wb(2),n.dc(" ",t.PROVENTREGATIME," "),n.wb(2),n.dc(" ",t.PROVUNIDAD," "),n.wb(1),n.Vb("ngIf","En Proceso"===t.PROVSTATUS),n.wb(1),n.Vb("ngIf","Asignado"===t.PROVSTATUS),n.wb(1),n.Vb("ngIf","Pendiente por Facturar"===t.PROVSTATUS),n.wb(1),n.Vb("ngIf","Facturado"===t.PROVSTATUS),n.wb(1),n.Vb("ngIf","Asignado"!=t.PROVSTATUS&&"En Proceso"!=t.PROVSTATUS&&"Pendiente por Facturar"!=t.PROVSTATUS&&"Facturado"!=t.PROVSTATUS)}}function O(t,e){if(1&t){const t=n.Kb();n.Jb(0,"div"),n.Jb(1,"form",3),n.Jb(2,"label",4),n.cc(3," Estado del Pedido "),n.Ib(),n.Jb(4,"select",5),n.Qb("ngModelChange",function(e){return n.Yb(t),n.Sb().opcion=e}),n.Jb(5,"option",6),n.cc(6," En Proceso "),n.Ib(),n.Jb(7,"option",7),n.cc(8," Asignado "),n.Ib(),n.Jb(9,"option",8),n.cc(10," Pendiente por Facturar "),n.Ib(),n.Jb(11,"option",9),n.cc(12," Facturado "),n.Ib(),n.Ib(),n.Jb(13,"button",10),n.Qb("click",function(){n.Yb(t);const e=n.Sb();return e.mostrar(e.opcion)}),n.cc(14," Buscar "),n.Ib(),n.Ib(),n.Jb(15,"div",11),n.Jb(16,"div",12),n.Jb(17,"div",13),n.Jb(18,"div",14),n.Jb(19,"table",15),n.Jb(20,"thead"),n.Jb(21,"tr"),n.Jb(22,"th",16),n.cc(23," Folio "),n.Ib(),n.Jb(24,"th",17),n.cc(25," RFC"),n.Ib(),n.Jb(26,"th",17),n.cc(27," Producto "),n.Ib(),n.Jb(28,"th",17),n.cc(29," Cantidad "),n.Ib(),n.Jb(30,"th",17),n.cc(31," Fecha de Entrega "),n.Ib(),n.Jb(32,"th",17),n.cc(33," Hora de Entrega "),n.Ib(),n.Jb(34,"th",17),n.cc(35," # de Unidad "),n.Ib(),n.Jb(36,"th",17),n.cc(37," Estado del Envio"),n.Ib(),n.Ib(),n.Ib(),n.Jb(38,"tbody"),n.bc(39,w,20,12,"tr",18),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Ib()}if(2&t){const t=n.Sb();n.wb(4),n.Vb("ngModel",t.opcion),n.wb(35),n.Vb("ngForOf",t.ordenes)}}function V(t,e){if(1&t&&(n.Jb(0,"td",19),n.cc(1),n.Ib()),2&t){const t=n.Sb().$implicit;n.wb(1),n.dc(" ",t.PROVSTATUS,"")}}function x(t,e){if(1&t&&(n.Jb(0,"td",20),n.cc(1),n.Ib()),2&t){const t=n.Sb().$implicit;n.wb(1),n.dc(" ",t.PROVSTATUS,"")}}function y(t,e){if(1&t&&(n.Jb(0,"td",21),n.cc(1),n.Ib()),2&t){const t=n.Sb().$implicit;n.wb(1),n.dc(" ",t.PROVSTATUS,"")}}function R(t,e){if(1&t&&(n.Jb(0,"td",22),n.cc(1),n.Ib()),2&t){const t=n.Sb().$implicit;n.wb(1),n.dc(" ",t.PROVSTATUS,"")}}function F(t,e){if(1&t&&(n.Jb(0,"td",23),n.cc(1),n.Ib()),2&t){const t=n.Sb().$implicit;n.wb(1),n.dc(" ",t.PROVSTATUS,"")}}function E(t,e){if(1&t&&(n.Jb(0,"tr"),n.Jb(1,"td",11),n.cc(2),n.Ib(),n.Jb(3,"td",12),n.cc(4),n.Ib(),n.Jb(5,"td",12),n.cc(6),n.Ib(),n.Jb(7,"td",12),n.cc(8),n.Ib(),n.Jb(9,"td",12),n.cc(10),n.Ib(),n.Jb(11,"td",12),n.cc(12),n.Ib(),n.Jb(13,"td",12),n.cc(14),n.Ib(),n.Jb(15,"td",12),n.cc(16),n.Ib(),n.Jb(17,"td",12),n.cc(18),n.Ib(),n.bc(19,V,2,1,"td",14),n.bc(20,x,2,1,"td",15),n.bc(21,y,2,1,"td",16),n.bc(22,R,2,1,"td",17),n.bc(23,F,2,1,"td",18),n.Ib()),2&t){const t=e.$implicit;n.wb(2),n.dc(" ",t.TICKETID," "),n.wb(2),n.dc(" ",t.RFC_ID,""),n.wb(2),n.dc(" ",t.PROVPRODUCT,""),n.wb(2),n.dc(" ",t.PROVCANTIDAD,""),n.wb(2),n.dc(" ",t.PROVENTREGADATE," "),n.wb(2),n.dc(" ",t.PROVENTREGATIME," "),n.wb(2),n.dc(" ",t.PROVUNIDAD," "),n.wb(2),n.dc(" ",t.cartaporte," "),n.wb(2),n.dc(" ",t.Chofer," "),n.wb(1),n.Vb("ngIf","En Proceso"===t.PROVSTATUS),n.wb(1),n.Vb("ngIf","Asignado"===t.PROVSTATUS),n.wb(1),n.Vb("ngIf","Pendiente por Facturar"===t.PROVSTATUS),n.wb(1),n.Vb("ngIf","Facturado"===t.PROVSTATUS),n.wb(1),n.Vb("ngIf","Asignado"!=t.PROVSTATUS&&"En Proceso"!=t.PROVSTATUS&&"Pendiente por Facturar"!=t.PROVSTATUS&&"Facturado"!=t.PROVSTATUS)}}const U=[{path:"",component:I,children:[{path:"Pedidos",component:(()=>{class t{constructor(t,e,o,b){this.fb=t,this.router=e,this.authservice=o,this.users=b,this._user={},this.refinform=this.fb.group({cargaaddress:["",[p.n.required,p.n.minLength(6)]],entregaaddress:["",[p.n.required,p.n.minLength(6)]],cargatime:["",[p.n.required]],cargadate:["",[p.n.required]],entregatime:[null],entregadate:[null],product:["",[p.n.required]],cantidad:["",[p.n.required]]}),this.asfaltform=this.fb.group({cargaaddress:["",[p.n.required,p.n.minLength(6)]],entregaaddress:["",[p.n.required,p.n.minLength(6)]],cargatime:["",[p.n.required]],cargadate:["",[p.n.required]],entregatime:[null],entregadate:[null],product:["",[p.n.required]],cantidad:["",[p.n.required]]})}ngOnInit(){this.users.validate().subscribe(t=>{this.userstatus=t.validuser}),this.authservice.validarinfo().subscribe(t=>{this._user.rfc=t.rfc})}refinpedido(){const{cargaaddress:t,entregaaddress:e,cargatime:o,cargadate:b,entregatime:r,entregadate:c,product:n,cantidad:a}=this.refinform.value;this.users.createticket(t,e,o,b,r,c,n,a,this.producttype,this._user.rfc,this._user.username).subscribe(t=>{1==t?(i.a.fire({title:"Bienvenido a Fletes4003",text:"Gracias por su preferencia",icon:"success",confirmButtonText:"ok"}),this.router.navigateByUrl("/users/dashboard")):i.a.fire({title:"Inicio de Sesi\xf3n Fallido",text:"Favor de verificar los datos",icon:"error",confirmButtonText:"ok"})})}asfaltpedido(){const{cargaaddress:t,entregaaddress:e,cargatime:o,cargadate:b,entregatime:r,entregadate:c,product:n,cantidad:a}=this.asfaltform.value;this.users.createticket(t,e,o,b,r,c,n,a,this.producttype,this._user.rfc,this._user.username).subscribe(t=>{1==t?(i.a.fire({title:"Bienvenido a Fletes4003",text:"Gracias por su preferencia",icon:"success",confirmButtonText:"ok"}),this.router.navigateByUrl("/users/dashboard")):i.a.fire({title:"Inicio de Sesi\xf3n Fallido",text:"Favor de verificar los datos",icon:"error",confirmButtonText:"ok"})})}}return t.\u0275fac=function(e){return new(e||t)(n.Gb(p.b),n.Gb(r.a),n.Gb(a.a),n.Gb(f.a))},t.\u0275cmp=n.Ab({type:t,selectors:[["app-user-pedidos"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","container-fluid",4,"ngIf"],[2,"text-align","center"],["src","./../../../../../../assets/Images/userdata.jpg","alt","userdata",1,"userdata"],[1,"container-fluid"],[2,"text-align","center","margin-bottom","5%"],[1,"form-group","col-md-3"],["for","tipo-producto"],["value","",1,"form-control","inputs",3,"ngModel","ngModelChange"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col-md-6"],["for","input-carga-direccion"],["type","text","formControlName","cargaaddress",1,"form-control","inputs"],["for","entrega-direccion"],["type","text","formControlName","entregaaddress",1,"form-control","inputs"],[1,"form-group","col-md-4"],["for","input-hora-carga"],["value","","formControlName","cargatime",1,"form-control","inputs"],["for","date-carga-input"],["type","date","value","","formControlName","cargadate",1,"form-control","inputs"],["for","entrega-fecha"],["type","date","value","","formControlName","entregadate",1,"form-control","inputs"],["for","producto"],["value","","formControlName","product",1,"form-control","inputs"],["for","inputCity"],["value","","formControlName","cantidad",1,"form-control","inputs"],["type","submit",1,"btn","btn-danger","col-md-6","offset-md-3",3,"disabled"],[1,"form-group","col-6"],["formControlName","product",1,"form-control","inputs"],["formControlName","cantidad",1,"form-control","inputs"]],template:function(t,e){1&t&&(n.bc(0,m,8,0,"div",0),n.bc(1,h,15,3,"div",1)),2&t&&(n.Vb("ngIf",!1===e.userstatus),n.wb(1),n.Vb("ngIf",!1!==e.userstatus))},directives:[b.i,p.m,p.f,p.i,p.j,p.o,p.p,p.g,p.d,p.a,p.c],styles:[".pedidobox[_ngcontent-%COMP%]{width:90%;height:70%;margin-left:5%;margin-right:5%}.botonenviar[_ngcontent-%COMP%]{margin-bottom:10%}.botonenviar[_ngcontent-%COMP%], .inputs[_ngcontent-%COMP%]{border-radius:40px 40px 40px 40px}"]}),t})()},{path:"Ordenes",component:(()=>{class t{constructor(t,e){this.users=t,this.router=e,this.ordenes=[]}ngOnInit(){this.users.validate().subscribe(t=>{this.userstatus=t.validuser})}mostrar(t){this.users.obtaindata().subscribe(e=>{this.ordenes=[],e.forEach(e=>{e.PROVSTATUS==t&&this.ordenes.push(e)})})}}return t.\u0275fac=function(e){return new(e||t)(n.Gb(f.a),n.Gb(r.a))},t.\u0275cmp=n.Ab({type:t,selectors:[["app-user-ordenes"]],decls:2,vars:2,consts:[[4,"ngIf"],[2,"text-align","center"],["src","./../../../../../../assets/Images/userdata.jpg","alt","userdata",1,"userdata"],[1,"form-inline"],["for","inlineFormCustomSelectPref",1,"my-1","mr-2"],["id","inlineFormCustomSelectPref","name","Status",1,"custom-select","my-1","mr-sm-2",3,"ngModel","ngModelChange"],["value","En Proceso"],["value","Asignado"],["value","Pendiente por Facturar"],["value","Facturado"],["type","submit",1,"btn","btn-danger","my-1",3,"click"],[1,"container-fluid"],[1,"row"],[1,"col-lg-12","col-md-10","ml-auto","mr-auto"],[1,"table-responsive"],[1,"table"],[1,"text-center"],[1,"text-right"],[4,"ngFor","ngForOf"],["class","text-right myColor1",4,"ngIf"],["class","text-right myColor2",4,"ngIf"],["class","text-right myColor3",4,"ngIf"],["class","text-right myColor4",4,"ngIf"],["class","text-right cancelado",4,"ngIf"],[1,"text-right","myColor1"],[1,"text-right","myColor2"],[1,"text-right","myColor3"],[1,"text-right","myColor4"],[1,"text-right","cancelado"]],template:function(t,e){1&t&&(n.bc(0,v,8,0,"div",0),n.bc(1,O,40,2,"div",0)),2&t&&(n.Vb("ngIf",!1===e.userstatus),n.wb(1),n.Vb("ngIf",!1!==e.userstatus))},directives:[b.i,p.p,p.g,p.h,p.m,p.f,p.i,p.j,p.o,b.h],styles:[""]}),t})()},{path:"Home",component:(()=>{class t{constructor(t,e){this.authservice=t,this.users=e,this._user={},this.ordenes=[]}ngOnInit(){this.authservice.validarinfo().subscribe(t=>{this._user.username=t.username}),this.data()}data(){this.users.obtaindata().subscribe(t=>{this.ordenes=[],t.forEach(t=>{this.ordenes.push(t)})})}}return t.\u0275fac=function(e){return new(e||t)(n.Gb(a.a),n.Gb(f.a))},t.\u0275cmp=n.Ab({type:t,selectors:[["app-user-home"]],decls:39,vars:6,consts:[[1,"mt-4",2,"text-align","center"],[1,"breadcrumb","mb-4"],[1,"breadcrumb-item","active"],[1,"row"],["src","./../../../../../../assets/Images/Logo.png",1,"logouser"],[1,"card","mb-4"],[1,"card-header"],[1,"fas","fa-table","mr-1"],[1,"card-body"],[1,"table-responsive"],["id","dataTable","width","100%","cellspacing","0",1,"table","table-bordered"],[1,"text-center"],[1,"text-right"],[4,"ngFor","ngForOf"],["class","text-right myColor1",4,"ngIf"],["class","text-right myColor2",4,"ngIf"],["class","text-right myColor3",4,"ngIf"],["class","text-right myColor4",4,"ngIf"],["class","text-right cancelado",4,"ngIf"],[1,"text-right","myColor1"],[1,"text-right","myColor2"],[1,"text-right","myColor3"],[1,"text-right","myColor4"],[1,"text-right","cancelado"]],template:function(t,e){1&t&&(n.Jb(0,"h1",0),n.cc(1),n.Ib(),n.Jb(2,"ol",1),n.Jb(3,"li",2),n.cc(4," * Para envios en ese mismo dia, favor de comunicarse al tel\xe9fono en el apartado de ayuda "),n.Ib(),n.Ib(),n.Jb(5,"div",3),n.Hb(6,"img",4),n.Ib(),n.Jb(7,"div",5),n.Jb(8,"div",6),n.Hb(9,"i",7),n.cc(10," \xdaltimos Pedidos "),n.Ib(),n.Jb(11,"div",8),n.Jb(12,"div",9),n.Jb(13,"table",10),n.Jb(14,"thead"),n.Jb(15,"tr"),n.Jb(16,"th",11),n.cc(17," Folio "),n.Ib(),n.Jb(18,"th",12),n.cc(19," RFC"),n.Ib(),n.Jb(20,"th",12),n.cc(21," Producto "),n.Ib(),n.Jb(22,"th",12),n.cc(23," Cantidad "),n.Ib(),n.Jb(24,"th",12),n.cc(25," Fecha de Entrega "),n.Ib(),n.Jb(26,"th",12),n.cc(27," Hora de Entrega "),n.Ib(),n.Jb(28,"th",12),n.cc(29," # de Unidad "),n.Ib(),n.Jb(30,"th",12),n.cc(31," # Carta Porte"),n.Ib(),n.Jb(32,"th",12),n.cc(33," Chofer "),n.Ib(),n.Jb(34,"th",12),n.cc(35," Estado del Envio"),n.Ib(),n.Ib(),n.Ib(),n.Jb(36,"tbody"),n.bc(37,E,24,14,"tr",13),n.Tb(38,"slice"),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Ib()),2&t&&(n.wb(1),n.dc(" Bienvenido a Fletes4003 ",e._user.username," "),n.wb(36),n.Vb("ngForOf",n.Ub(38,2,e.ordenes,0,10)))},directives:[b.h,b.i],pipes:[b.l],styles:[".logouser[_ngcontent-%COMP%]{width:40%;height:50%;margin-right:30%;margin-left:30%}"]}),t})()},{path:"Profile",component:(()=>{class t{constructor(t,e,o,b){this.fb=t,this.router=e,this.authservice=o,this.update=b,this.profile=this.fb.group({nombre:["",[p.n.required]],razonsocial:["",[p.n.required]],address:["",[p.n.required]],numaddress:["",[p.n.required]],colonia:["",[p.n.required]],city:["",[p.n.required]],state:["",[p.n.required]],phone:["",[p.n.required]],zip:["",[p.n.required]],userdata:["true"]}),this._user={}}ngOnInit(){this.authservice.validarinfo().subscribe(t=>{this._user.username=t.username,this._user.rfc=t.rfc})}saveprofile(){const{nombre:t,razonsocial:e,address:o,numaddress:b,colonia:r,city:c,state:n,phone:a,zip:s,userdata:d}=this.profile.value;this.update.updateprofile(t,e,o,b,r,c,n,a,this._user.rfc,this._user.username,s,d).subscribe(t=>{1==t?(i.a.fire({title:"Bienvenido a Fletes4003",text:"Gracias por su preferencia",icon:"success",confirmButtonText:"ok"}),this.router.navigateByUrl("/users/dashboard")):i.a.fire({title:"Inicio de Sesi\xf3n Fallido",text:"Favor de verificar los datos",icon:"error",confirmButtonText:"ok"})})}}return t.\u0275fac=function(e){return new(e||t)(n.Gb(p.b),n.Gb(r.a),n.Gb(a.a),n.Gb(f.a))},t.\u0275cmp=n.Ab({type:t,selectors:[["app-user-profile"]],decls:108,vars:2,consts:[[1,"container-fluid"],[2,"text-align","center","margin-bottom","5%"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col-md-6"],["for","inputname"],["type","text","formControlName","nombre",1,"form-control","inputs"],["for","inputrazon"],["type","text","formControlName","razonsocial",1,"form-control","inputs"],[1,"form-group","col-md-3"],["type","text","formControlName","address",1,"form-control","inputs"],["for","inputlastname"],["type","tel","formControlName","numaddress",1,"form-control","inputs"],["type","text","formControlName","colonia",1,"form-control","inputs"],["for","entrega-direccion"],["type","text","formControlName","city",1,"form-control","inputs"],[1,"form-group","col-md-4"],["formControlName","state",1,"form-control","inputs"],["type","text","formControlName","zip",1,"form-control","inputs"],["type","text","formControlName","phone",1,"form-control","inputs"],["type","submit",1,"btn","btn-danger","col-md-6","offset-md-3","inputs",3,"disabled"]],template:function(t,e){1&t&&(n.Jb(0,"div",0),n.Jb(1,"div"),n.Jb(2,"h1",1),n.cc(3," Campos Obligatorios "),n.Ib(),n.Ib(),n.Jb(4,"form",2),n.Qb("ngSubmit",function(){return e.saveprofile()}),n.Jb(5,"div",3),n.Jb(6,"div",4),n.Jb(7,"label",5),n.cc(8,"Nombre "),n.Ib(),n.Hb(9,"input",6),n.Ib(),n.Jb(10,"div",4),n.Jb(11,"label",7),n.cc(12," Raz\xf3n Social"),n.Ib(),n.Hb(13,"input",8),n.Ib(),n.Ib(),n.Jb(14,"div",3),n.Jb(15,"div",9),n.Jb(16,"label",5),n.cc(17," Direcci\xf3n "),n.Ib(),n.Hb(18,"input",10),n.Ib(),n.Jb(19,"div",9),n.Jb(20,"label",11),n.cc(21," # Int / Ext "),n.Ib(),n.Hb(22,"input",12),n.Ib(),n.Jb(23,"div",9),n.Jb(24,"label",5),n.cc(25," Colonia "),n.Ib(),n.Hb(26,"input",13),n.Ib(),n.Jb(27,"div",9),n.Jb(28,"label",14),n.cc(29," Ciudad "),n.Ib(),n.Hb(30,"input",15),n.Ib(),n.Ib(),n.Jb(31,"div",3),n.Jb(32,"div",16),n.Jb(33,"label"),n.cc(34," Estado "),n.Ib(),n.Jb(35,"select",17),n.Jb(36,"option"),n.cc(37," Aguascalientes "),n.Ib(),n.Jb(38,"option"),n.cc(39," Baja California "),n.Ib(),n.Jb(40,"option"),n.cc(41," Baja California Sur "),n.Ib(),n.Jb(42,"option"),n.cc(43," Campeche "),n.Ib(),n.Jb(44,"option"),n.cc(45," Chiapas "),n.Ib(),n.Jb(46,"option"),n.cc(47," Chihuahua "),n.Ib(),n.Jb(48,"option"),n.cc(49," Coahuila "),n.Ib(),n.Jb(50,"option"),n.cc(51," Colima "),n.Ib(),n.Jb(52,"option"),n.cc(53," Distrito Federal "),n.Ib(),n.Jb(54,"option"),n.cc(55," Durango "),n.Ib(),n.Jb(56,"option"),n.cc(57," Estado de M\xe9xico "),n.Ib(),n.Jb(58,"option"),n.cc(59," Guanajuato "),n.Ib(),n.Jb(60,"option"),n.cc(61," Guerrero "),n.Ib(),n.Jb(62,"option"),n.cc(63," Hidalgo "),n.Ib(),n.Jb(64,"option"),n.cc(65," Jalisco "),n.Ib(),n.Jb(66,"option"),n.cc(67," Michoac\xe1n "),n.Ib(),n.Jb(68,"option"),n.cc(69," Morelos "),n.Ib(),n.Jb(70,"option"),n.cc(71," Nayarit "),n.Ib(),n.Jb(72,"option"),n.cc(73," Nuevo Le\xf3n "),n.Ib(),n.Jb(74,"option"),n.cc(75," Oaxaca "),n.Ib(),n.Jb(76,"option"),n.cc(77," Puebla "),n.Ib(),n.Jb(78,"option"),n.cc(79," Quer\xe9taro "),n.Ib(),n.Jb(80,"option"),n.cc(81," Quintana Roo "),n.Ib(),n.Jb(82,"option"),n.cc(83," San Luis Potos\xed "),n.Ib(),n.Jb(84,"option"),n.cc(85," Sinaloa "),n.Ib(),n.Jb(86,"option"),n.cc(87," Tabasco "),n.Ib(),n.Jb(88,"option"),n.cc(89," Tamaulipas "),n.Ib(),n.Jb(90,"option"),n.cc(91," Tlaxcala "),n.Ib(),n.Jb(92,"option"),n.cc(93," Veracruz "),n.Ib(),n.Jb(94,"option"),n.cc(95," Yucat\xe1n "),n.Ib(),n.Jb(96,"option"),n.cc(97," Zacatecas "),n.Ib(),n.Ib(),n.Ib(),n.Jb(98,"div",16),n.Jb(99,"label",11),n.cc(100," Codigo Postal "),n.Ib(),n.Hb(101,"input",18),n.Ib(),n.Jb(102,"div",16),n.Jb(103,"label",11),n.cc(104," Tel\xe9fono "),n.Ib(),n.Hb(105,"input",19),n.Ib(),n.Ib(),n.Jb(106,"button",20),n.cc(107," Guardar Datos "),n.Ib(),n.Ib(),n.Ib()),2&t&&(n.wb(4),n.Vb("formGroup",e.profile),n.wb(102),n.Vb("disabled",e.profile.invalid))},directives:[p.p,p.g,p.d,p.a,p.f,p.c,p.m,p.j,p.o],styles:[".inputs[_ngcontent-%COMP%]{border-radius:40px 40px 40px 40px}"]}),t})()},{path:"**",redirectTo:"Home"}]}];let G=(()=>{class t{}return t.\u0275mod=n.Eb({type:t}),t.\u0275inj=n.Db({factory:function(e){return new(e||t)},imports:[[r.e.forChild(U)],r.e]}),t})(),H=(()=>{class t{}return t.\u0275mod=n.Eb({type:t}),t.\u0275inj=n.Db({factory:function(e){return new(e||t)},providers:[],imports:[[b.b,G,p.k,p.e]]}),t})()}}]);