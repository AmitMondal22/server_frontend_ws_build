"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[9683],{9683:(W,x,a)=>{a.r(x),a.d(x,{ChartsDemo2Module:()=>j});var h=a(6814),m=a(3557),p=a(9862),u=a(5219),M=a(8483),t=a(4769),_=a(3859),v=a(5905),g=a(95),O=a(981),P=a(8814),C=a(7327);const w=["chart"],y=["chart2"];function k(r,l){1&r&&(t.TgZ(0,"div",11),t._UZ(1,"div")(2,"div")(3,"div")(4,"div")(5,"div"),t.qZA())}function D(r,l){1&r&&t._UZ(0,"div",12)}const U=function(){return{standalone:!0}};let T=(()=>{var r;class l{constructor(e,n,o,i,s,c,f,b,G,R){this.router=e,this.datePipe=n,this.layoutService=o,this.authservice=i,this.fb=s,this.http=c,this.productService=f,this.messageService=b,this.confirmationService=G,this.api=R,this.activeOptionButton="all",this.updateOptionsData={"1m":{xaxis:{min:new Date("28 Jan 2013").getTime(),max:new Date("27 Feb 2013").getTime()}},"6m":{xaxis:{min:new Date("27 Sep 2012").getTime(),max:new Date("27 Feb 2013").getTime()}},"1y":{xaxis:{min:new Date("27 Feb 2012").getTime(),max:new Date("27 Feb 2013").getTime()}},"1yd":{xaxis:{min:new Date("01 Jan 2013").getTime(),max:new Date("01 Jan 2013").getTime()}},all:{xaxis:{min:void 0,max:void 0}}},this.filteredCountries=[],this.filteredDealer=[],this.countries=[],this.selectedState=null,this.data1=[],this.cities=[],this.liveData=[],this.flowData=[],this.flowDate=[],this.rpmData=[],this.rpmDate=[],this.user_type="",this.lastUpdateTime="",this.checked=!0,this.alert_type="",this.client_id=+localStorage.getItem("c_id"),this.cities2=[],this.l_val=0,this.cl_val=0,this.h_val=0,this.ch_val=0,this.locations=[],this.loc={},this.spinner=!1,this.loginType=localStorage.getItem("loginType"),this.subscription=this.layoutService.configUpdate$.subscribe($=>{})}ngAfterViewInit(){}ngOnInit(){this.items=[{label:"Live",icon:"pi pi-fw pi-home",routerLink:["/app/outlet/alert"]},{label:"device Info",icon:"pi pi-fw pi-calendar",routerLink:["/app/outlet/alert"]},{label:"Graphical View",icon:"pi pi-fw pi-pencil",routerLink:["/app/outlet/alert"]},{label:"Create Alert",icon:"pi pi-fw pi-file",routerLink:["/app/outlet/alert"]},{label:"Historic Data",icon:"pi pi-fw pi-cog",routerLink:["/app/outlet/alert"]}],this.activeItem=this.items[0],this.getDevice(),this.getUnit()}initMap(){var e=new google.maps.Map(document.getElementById("map")),n=new google.maps.LatLngBounds;this.locations.forEach(function(o){var i=new google.maps.Marker({position:{lat:o.lat,lng:o.lng},map:e,title:o.name,icon:{url:"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF5733" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="8"/></svg>'),scaledSize:new google.maps.Size(24,24)}});n.extend(i.getPosition())}),e.fitBounds(n)}convertToISTDateTime(e){const n=new Date(e);return this.datePipe.transform(n,"dd-MM-yyyy HH:mm:ss","+0530")||""}ggg(){}getUnit(){const e=this.api.baseUrl,n=localStorage.getItem("token"),o=(new p.WM).set("Authorization",`Bearer ${n}`);this.spinner=!0,this.http.post(e+"/client/unit/list",{headers:o}).subscribe(i=>{this.spinner=!1,console.log(i),this.cities2=i.data},i=>{"401"==i.status&&this.router.navigate(["/"]),console.log(i.status),this.spinner=!1,console.error(i)})}abc(){this.data2&&(this.l_val=0,this.cl_val=0,this.h_val=0,this.ch_val=0,this.data2.forEach(e=>{"4CH"==e.alert_type&&e.unit_id==this.selectedAlert?.unit_id&&(this.ch_val=e.alert),"3H"==e.alert_type&&e.unit_id==this.selectedAlert?.unit_id&&(this.h_val=e.alert),"2L"==e.alert_type&&e.unit_id==this.selectedAlert?.unit_id&&(this.l_val=e.alert),"1CL"==e.alert_type&&e.unit_id==this.selectedAlert?.unit_id&&(this.cl_val=e.alert)}))}getDevice(){const e={client_id:this.client_id},n=this.api.baseUrl,o=localStorage.getItem("token"),i=(new p.WM).set("Authorization",`Bearer ${o}`);this.spinner=!0,this.http.post(n+"/client/devices/list",e,{headers:i}).subscribe(s=>{this.spinner=!1,console.log(s),this.data1=s,this.cities=this.data1.data,this.selectedDealer=this.cities[0],this.getDeviceLiveData(this.selectedDealer.device,this.selectedDealer.device_id)},s=>{"401"==s.status&&this.router.navigate(["/"]),console.log(s.status),this.spinner=!1,console.error(s)})}dateConvt(e){const n=new Date(e),s=`${String(n.getMonth()+1).padStart(2,"0")}/${String(n.getDate()).padStart(2,"0")}`;return console.log(s),s}getDeviceLiveData(e,n){if(e){const o=localStorage.getItem("token"),i=(new p.WM).set("Authorization",`Bearer ${o}`);this.liveData=[],this.liveData2=null;const s={client_id:this.client_id,device_id:n,device:e};this.data1=[],this.spinner=!0,this.http.post(this.api.baseUrl+"/client/devices/device_info",s,{headers:i}).subscribe(c=>{this.spinner=!1,console.log(c);const b=c.data;this.data1=b.data,this.data2=b.data2,this.data1&&(this.loc={lat:0,lng:0,name:""},this.loc.lat=+this.data1.lat,this.loc.lng=+this.data1.lon,this.loc.name="Kolkata",console.log(this.loc),this.locations.push(this.loc),this.locations.length>0&&(this.initMap(),console.log(this.locations)))},c=>{"401"==c.status&&this.router.navigate(["/"]),console.log(c.status),console.error(c)})}}dateChange(e){const c=new Date(this.liveData2.created_at).toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1,timeZone:"Asia/Kolkata"});return console.log(c),c}setDevice(){this.l_val=0,this.cl_val=0,this.h_val=0,this.ch_val=0,this.cities2=[],this.data2=[],this.data1=[],this.locations=[],console.log(this.selectedDealer),this.getDeviceLiveData(this.selectedDealer.device,this.selectedDealer.device_id),this.getUnit()}filterDealer(e){const n=[],o=e.query;for(let i=0;i<this.cities.length;i++){const s=this.cities[i];0==s.device.toLowerCase().indexOf(o.toLowerCase())&&n.push(s)}this.filteredDealer=n}updateOptions(e){this.activeOptionButton=e,this.chart2.updateOptions(this.updateOptionsData[e],!1,!0,!0)}generateDayWiseTimeSeries(e,n,o){for(var i=0,s=[];i<n;){var c=e,f=Math.floor(Math.random()*(o.max-o.min+1))+o.min;s.push([c,f]),e+=864e5,i++}return s}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}return(r=l).\u0275fac=function(e){return new(e||r)(t.Y36(m.F0),t.Y36(h.uU),t.Y36(_.P),t.Y36(v.$),t.Y36(g.qu),t.Y36(p.eN),t.Y36(O.M),t.Y36(u.ez),t.Y36(u.YP),t.Y36(P.s))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-chartsdemo2"]],viewQuery:function(e,n){if(1&e&&(t.Gf(M.j,5),t.Gf(w,5),t.Gf(y,5)),2&e){let o;t.iGM(o=t.CRH())&&(n.msg=o.first),t.iGM(o=t.CRH())&&(n.chart=o.first),t.iGM(o=t.CRH())&&(n.chart2=o.first)}},features:[t._Bn([u.ez,u.YP,h.uU])],decls:41,vars:12,consts:[[1,"col-12","md:col-12"],[2,"float","right"],["placeholder","Select Device","field","device",3,"ngModel","ngModelOptions","suggestions","dropdown","ngModelChange","onSelect","completeMethod"],[1,"col-12","lg:col-6","xl:col-12"],[1,"card"],["id","map"],[1,"grid"],[1,"col-12","md:col-6","xl:col-12"],[1,"card",2,"height","360px!important","background-color","white"],["class","loader",4,"ngIf"],["class","overlay",4,"ngIf"],[1,"loader"],[1,"overlay"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"p-autoComplete",2),t.NdJ("ngModelChange",function(i){return n.selectedDealer=i})("onSelect",function(){return n.setDevice()})("completeMethod",function(i){return n.filterDealer(i)}),t.qZA()()(),t.TgZ(3,"div",3)(4,"h6"),t._uU(5,"Map View"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"div",5),t.qZA()(),t.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"h4"),t._uU(12,"Description"),t.qZA(),t._UZ(13,"br")(14,"br"),t.TgZ(15,"b"),t._uU(16,"Device Name"),t.qZA(),t.TgZ(17,"p",1),t._uU(18),t.qZA(),t._UZ(19,"hr"),t.TgZ(20,"b"),t._uU(21,"Model Name"),t.qZA(),t.TgZ(22,"p",1),t._uU(23),t.qZA(),t._UZ(24,"hr"),t.TgZ(25,"b"),t._uU(26,"IMEI NO"),t.qZA(),t.TgZ(27,"p",1),t._uU(28),t.qZA(),t._UZ(29,"hr"),t.TgZ(30,"b"),t._uU(31,"Specifications "),t.qZA(),t.TgZ(32,"p",1),t._uU(33),t.qZA(),t._UZ(34,"hr"),t.TgZ(35,"b"),t._uU(36,"Last Maintenance "),t.qZA(),t.TgZ(37,"p",1),t._uU(38),t.qZA()()()(),t.YNc(39,k,6,0,"div",9),t.YNc(40,D,1,0,"div",10)),2&e&&(t.xp6(2),t.Q6J("ngModel",n.selectedDealer)("ngModelOptions",t.DdM(11,U))("suggestions",n.filteredDealer)("dropdown",!0),t.xp6(16),t.Oqu(null==n.data1?null:n.data1.device),t.xp6(5),t.Oqu(null==n.data1?null:n.data1.model),t.xp6(5),t.hij(" ",null==n.data1?null:n.data1.imei_no," "),t.xp6(5),t.hij("",null!=n.data1&&n.data1.device?"Weather":""," "),t.xp6(5),t.Oqu(null==n.data1?null:n.data1.last_maintenance),t.xp6(1),t.Q6J("ngIf",n.spinner),t.xp6(1),t.Q6J("ngIf",n.spinner))},dependencies:[h.O5,C.Qc,g.JJ,g.On],styles:['body[_ngcontent-%COMP%]{background-color:#333}h5[_ngcontent-%COMP%]{font-family:sans-serif;color:#666;text-transform:uppercase;text-align:center;display:block;padding-top:20px}.holder[_ngcontent-%COMP%]{max-width:455px;margin:0 auto}.holder[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%]{display:block;text-decoration:none;font-family:sans-serif;font-size:12px;color:#666;text-align:center}.livenow[_ngcontent-%COMP%]{margin-top:23px;width:30px;margin-left:15px;display:inline-block}.livenow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{vertical-align:middle;width:22px;height:22px;border-radius:100%;position:absolute;margin:0 auto;border:3px solid rgb(255,0,0);animation:_ngcontent-%COMP%_live 1.4s infinite ease-in-out;animation-fill-mode:both}.livenow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){background-color:#ffffff4d;background-color:#f81010;animation-delay:-.1s}.livenow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){animation-delay:.16s}.livenow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){animation-delay:.42s;border:3px solid rgba(255,255,255,.5)}.livenow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){border:3px solid rgba(255,255,255,1);animation-delay:-.42s}@keyframes _ngcontent-%COMP%_live{0%,80%,to{transform:scale(.6);-webkit-transform:scale(.6)}40%{transform:scale(1);-webkit-transform:scale(1)}}.xcard[_ngcontent-%COMP%]{height:100%!important}.xxx[_ngcontent-%COMP%]{height:40px}.weather[_ngcontent-%COMP%]{width:100%;height:auto}p-tabview[_ngcontent-%COMP%]   .p-tabview-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:33.3%!important}.cylinder[_ngcontent-%COMP%]{position:relative;overflow:hidden;margin:24px auto;width:137px;height:200px;border-radius:50px/25px;background-color:#a0a0a080}.cylinder[_ngcontent-%COMP%]:before{position:absolute;left:0;top:0;width:100px;height:50px;border-radius:50px/25px;background-color:#a0a0a033;content:""}.cylinder[_ngcontent-%COMP%]:after{position:absolute;left:0;bottom:0;width:100px;height:50px;border-radius:50px/25px;background-color:#a0a0a066;content:""}.water[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;width:108px;height:0;padding-top:50px;border-radius:50px/25px;background-color:#00a0a080;transition:.3s linear}.water[_ngcontent-%COMP%]:before{position:absolute;left:0;top:0;width:108px;height:50px;border-radius:50px/25px;background-color:#00a0a033;content:""}.water[_ngcontent-%COMP%]:after{position:absolute;left:0;bottom:0;width:108px;height:50px;border-radius:50px/25px;background-color:#00a0a066;content:""}.water--0[_ngcontent-%COMP%]:checked ~ .cylinder[_ngcontent-%COMP%]   .water[_ngcontent-%COMP%]{bottom:-50px}.water--30[_ngcontent-%COMP%]:checked ~ .cylinder[_ngcontent-%COMP%]   .water[_ngcontent-%COMP%]{height:75px}.cylinder[_ngcontent-%COMP%]   .water[_ngcontent-%COMP%]{height:150px}.water--90[_ngcontent-%COMP%]:checked ~ .cylinder[_ngcontent-%COMP%]   .water[_ngcontent-%COMP%]{height:225px}.UPSCylindre[_ngcontent-%COMP%], .BCylindre[_ngcontent-%COMP%]{overflow:hidden;position:relative;width:120px;height:215px;margin:20px auto;box-shadow:0 0 0 1px #80808026 inset;background:linear-gradient(90deg,rgba(128,128,128,.2) 0%,rgba(128,128,128,.2) 20%,rgba(128,128,128,.2) 20%,transparent 50%,transparent 75%,rgba(128,128,128,.2) 90%);border-radius:60px/30px}.PPole[_ngcontent-%COMP%]{position:absolute;left:0;right:0;top:-1px;width:99%;height:57px;border:1px solid rgba(128,128,128,.15);border-radius:60px/30px;background:linear-gradient(rgba(128,128,128,.25) 0%,rgba(128,128,128,.15) 20%,rgba(128,128,128,.15) 20%,transparent 50%,transparent 75%,rgba(128,128,128,.15) 90%)}.PPole[_ngcontent-%COMP%]:after{content:"";position:absolute;width:36%;left:31.5%;top:1px;height:30px;border-radius:60px/27.5px;box-shadow:0 0 0 1px #ffffff59;background:linear-gradient(90deg,rgba(128,128,128,1) 0%,rgba(128,128,128,.3) 30%,transparent 50%,transparent 75%,rgba(128,128,128,1) 90%)}.PPole[_ngcontent-%COMP%]:before{content:"";position:absolute;left:8%;right:0;top:8%;width:84%;height:73%;border-radius:55px/24px;background-color:#80808080;box-shadow:0 1px 0 1px #ffffff59}.UPSCylindre[_ngcontent-%COMP%]:after{content:"";position:absolute;width:32%;left:33%;top:1px;height:6%;border:1px solid rgba(255,255,255,.25);border-radius:60px/25px;background-color:#80808099;box-shadow:0 0 0 1px #80808099}.UPSCylindre[_ngcontent-%COMP%]:before{content:"";position:absolute;width:92%;height:20%;inset:78% 5px 0;border-radius:60px/25px;background-color:#80808080;box-shadow:0 0 0 1px #ffffff59}.BCylindre[_ngcontent-%COMP%]:after{content:"";position:absolute;width:32%;left:33%;top:1px;height:6%;border:1px solid rgba(255,255,255,.25);border-radius:60px/25px;background-color:#80808099;box-shadow:0 0 0 1px #80808099}.BCylindre[_ngcontent-%COMP%]:before{content:"";position:absolute;width:92%;height:20%;inset:78% 5px 0;border-radius:60px/25px;background-color:#80808080;box-shadow:0 0 0 1px #ffffff59}.NiMH[_ngcontent-%COMP%]{position:absolute;left:5px;right:5px;bottom:5px;height:0;padding-top:30px;border-radius:54px/24px;background:linear-gradient(90deg,rgba(0,204,0,.6) 0%,rgba(0,170,0,.6) 50%,rgba(0,204,0,.6) 100%);box-shadow:0 0 10px #0c0;transition:.5s linear}.NiMH[_ngcontent-%COMP%]:after{content:"";position:absolute;left:.5%;right:0;top:0;width:99%;height:50px;border-radius:54px/25px;background-color:#00aa0059;box-shadow:0 0 10px #0c0 inset}.cath_NA[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{height:12px;background:linear-gradient(90deg,rgba(255,0,0,.6) 0%,rgba(195,0,0,.6) 50%,rgba(255,0,0,.6) 100%);box-shadow:0 0 10px red;transform:scale(0);-webkit-transform:scale(0);-o-transform:scale(0);-moz-transform:scale(0)}.cath_NA[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]:after{background-color:#c3000059;box-shadow:0 0 10px red inset}.cath_0[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(255,0,0,.8) 0%,rgba(195,0,0,.6) 50%,rgba(255,0,0,.8) 100%);box-shadow:0 0 10px red;height:18.55px}.cath_0[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]:after{background-color:#c3000059;box-shadow:0 0 10px red inset}.cath_2[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(255,0,0,.8) 0%,rgba(195,0,0,.6) 50%,rgba(255,0,0,.8) 100%);box-shadow:0 0 10px red;height:38px}.cath_2[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]:after{background-color:#c3000059;box-shadow:0 0 10px red inset}.cath_4[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(255,204,0,.7) 0%,rgba(204,163,0,.6) 50%,rgba(255,204,0,.7) 100%);box-shadow:0 0 10px #fc0;height:76px}.cath_4[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]:after{background-color:#cca30059;box-shadow:0 0 10px #fc0 inset}.cath_6[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(255,204,0,.7) 0%,rgba(204,163,0,.6) 50%,rgba(255,204,0,.7) 100%);box-shadow:0 0 10px #fc0;height:114px}.cath_6[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]:after{background-color:#cca30059;box-shadow:0 0 10px #fc0 inset}.UPSCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(255,204,0,.7) 0%,rgba(204,163,0,.6) 50%,rgba(255,204,0,.7) 100%);box-shadow:0 0 10px #fc0;height:114px}.UPSCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]:after{background-color:#cca30059;box-shadow:0 0 10px #fc0 inset}.BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{height:152px}.cath_10[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{height:190px}.customeX[_ngcontent-%COMP%]{font-size:large;color:#4f46e5}table[_ngcontent-%COMP%]{overflow-x:auto;border-collapse:collapse;border-spacing:0;width:100%;border:1px solid #b8b7b7}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #b8b7b7;padding:10px}.circle[_ngcontent-%COMP%]{color:red;transform:translate(-50%) translateY(-50%);width:20px;height:20px;margin-left:30px;margin-top:30px}.circle[_ngcontent-%COMP%]:before{content:"";position:relative;display:block;width:250%;height:250%;box-sizing:border-box;margin-left:-75%;margin-top:-75%;border-radius:45px;background-color:red;animation:_ngcontent-%COMP%_pulse 1.25s cubic-bezier(.215,.61,.355,1) infinite}.circle[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;display:block;width:100%;height:100%;background-color:red;border-radius:50px;animation:_ngcontent-%COMP%_circle 1.25s cubic-bezier(.455,.03,.515,.955) -.4s infinite}@keyframes _ngcontent-%COMP%_pulse{0%{transform:scale(.33)}80%,to{opacity:0}}@keyframes _ngcontent-%COMP%_circle{0%{transform:scale(.8)}50%{transform:scale(1)}to{transform:scale(.8)}}@use postcss-preset-env{stage: 0;}.on-off-toggle[_ngcontent-%COMP%]{width:76px;height:24px;position:relative;display:inline-block}.on-off-toggle__slider[_ngcontent-%COMP%]{width:76px;height:24px;display:block;border-radius:34px;background-color:#d8d8d8;transition:background-color .4s}.on-off-toggle__slider[_ngcontent-%COMP%]:before{content:"";display:block;background-color:#fff;box-shadow:0 0 0 1px #949494;bottom:3px;height:18px;left:24px;position:absolute;transition:.4s;width:18px;z-index:5;border-radius:100%}.on-off-toggle__slider[_ngcontent-%COMP%]:after{display:block;line-height:24px;text-transform:uppercase;font-size:12px;font-weight:700;content:"day";color:#484848;padding-left:46px;transition:all .4s}.on-off-toggle__input[_ngcontent-%COMP%]{position:absolute;opacity:0}.on-off-toggle__input[_ngcontent-%COMP%]:checked + .on-off-toggle__slider[_ngcontent-%COMP%]{background-color:#000}.on-off-toggle__input[_ngcontent-%COMP%]:checked + .on-off-toggle__slider[_ngcontent-%COMP%]:before{transform:translate(32px)}.on-off-toggle__input[_ngcontent-%COMP%]:checked + .on-off-toggle__slider[_ngcontent-%COMP%]:after{content:"month";color:#fff;padding-left:8px}*[_ngcontent-%COMP%]{box-sizing:border-box}#chart[_ngcontent-%COMP%]{max-width:480px;margin:35px auto;padding:0}.subCard[_ngcontent-%COMP%]{width:100%;display:flex;gap:1.7rem;padding:1rem;margin:1rem;background-color:#f0f0f0;justify-content:space-between}.subcard-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:.5rem}.icon[_ngcontent-%COMP%]{height:1.2rem;width:1.2rem}.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.unit[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:600}.qbutton[_ngcontent-%COMP%]{background:#fff;color:#222;border:1px solid #e7e7e7;border-bottom:2px solid #ddd;border-radius:2px;padding:4px 17px}.qbutton.active[_ngcontent-%COMP%]{color:#fff;background:#008ffb;border:1px solid blue;border-bottom:2px solid blue}.qbutton[_ngcontent-%COMP%]:focus{outline:0}#map[_ngcontent-%COMP%]{height:400px;width:100%}.custom-marker[_ngcontent-%COMP%]{background-color:#ff5733;border-radius:50%;width:20px;height:20px;border:2px solid #fff;cursor:pointer;margin-left:-10px;margin-top:-10px}#map[_ngcontent-%COMP%]{height:100%;width:100%}']}),l})(),Z=(()=>{var r;class l{}return(r=l).\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[m.Bz.forChild([{path:"",component:T}]),m.Bz]}),l})();var S=a(9252),A=a(6760),B=a(3714),N=a(707),H=a(3904),z=a(4104),I=a(4844),L=a(5609),Y=a(3965),J=a(6903),F=a(5779);let j=(()=>{var r;class l{}return(r=l).\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[I.LU,Y.kW,h.ez,Z,S.S,A._8,B.j,N.hJ,C.WN,g.u5,g.UX,H.D,z.EV,L.Iu,J.X,F.i]}),l})()}}]);