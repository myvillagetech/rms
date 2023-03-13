"use strict";(self.webpackChunkrequest_management_app=self.webpackChunkrequest_management_app||[]).push([[20],{7020:(ie,S,i)=>{i.r(S),i.d(S,{MasterDataModule:()=>re});var u=i(6895),P=i(4466),f=i(3060),d=i(9484),r=i(3626),p=(()=>{return(a=p||(p={})).COMPANY="company",a.SALES_PERSON="salesPerson",p;var a})(),e=i(4650),c=i(4006),g=i(5938),h=i(996),D=i(3238),C=i(4859),_=i(9549),A=i(4144),T=i(4385);function Z(a,o){1&a&&(e.TgZ(0,"mat-error"),e._uU(1," Name is required"),e.qZA())}function x(a,o){if(1&a&&(e.TgZ(0,"mat-error"),e.YNc(1,Z,2,0,"mat-error",0),e.qZA()),2&a){const t=e.oxw(2);let n;e.xp6(1),e.Q6J("ngIf",null==(n=t.createEntityPopupForm.get("name"))||null==n.errors?null:n.errors.required)}}function b(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"div")(1,"form",1)(2,"div")(3,"mat-form-field",2)(4,"mat-label"),e._uU(5,"Name"),e.qZA(),e._UZ(6,"input",3),e.qZA(),e.YNc(7,x,2,1,"mat-error",0),e.qZA(),e.TgZ(8,"div",4)(9,"button",5),e._uU(10,"Close"),e.qZA(),e.TgZ(11,"button",6),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onSave())}),e._uU(12,"Save"),e.qZA()()()()}if(2&a){const t=e.oxw();let n;e.xp6(1),e.Q6J("formGroup",t.createEntityPopupForm),e.xp6(6),e.Q6J("ngIf",(null==(n=t.createEntityPopupForm.get("name"))?null:n.invalid)&&((null==(n=t.createEntityPopupForm.get("name"))?null:n.dirty)||(null==(n=t.createEntityPopupForm.get("name"))?null:n.touched))),e.xp6(2),e.Q6J("mat-dialog-close",!0),e.xp6(2),e.Q6J("disabled",t.createEntityPopupForm.invalid)("mat-dialog-close",!0)}}function N(a,o){if(1&a&&(e.TgZ(0,"mat-option",14),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.Q6J("value",t._id),e.xp6(1),e.hij(" ",t.name," ")}}function E(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"div")(1,"form",7)(2,"mat-form-field",8)(3,"mat-label"),e._uU(4,"Campnay"),e.qZA(),e.TgZ(5,"mat-select",9),e.YNc(6,N,2,2,"mat-option",10),e.qZA()(),e.TgZ(7,"div")(8,"mat-form-field",2)(9,"mat-label"),e._uU(10,"Sales Person"),e.qZA(),e._UZ(11,"input",11),e.qZA(),e.TgZ(12,"div",4)(13,"button",12),e._uU(14,"Close"),e.qZA(),e.TgZ(15,"button",13),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.SalesPersonChangeHandler())}),e._uU(16,"Save"),e.qZA()()()()()}if(2&a){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.createEntitySalesPersonPopup),e.xp6(5),e.Q6J("ngForOf",t.companies),e.xp6(7),e.Q6J("mat-dialog-close",!1),e.xp6(2),e.Q6J("disabled",t.createEntitySalesPersonPopup.invalid)}}let Y=(()=>{class a{constructor(t,n,s,l,m){this.formBuilder=t,this.dialogRef=n,this.masterDataService=s,this.receivingData=l,this.alertPopupService=m,this.names=[],this.companies=[],this.masterDataTypes=p}ngOnInit(){this.genrateCreateEntityForm(),this.createEntitySalesPersonPopupForm(),this.receivingData.data&&this.pathFormValues(),this.receivingData?.type===p.SALES_PERSON&&this.getAllCompanys()}pathFormValues(){this.receivingData.data&&(this.receivingData.type===p.SALES_PERSON?(console.log(this.receivingData),this.createEntitySalesPersonPopup.setValue({salesperson:this.receivingData?.data?.salesperson,companyId:this.receivingData?.data?.companyId})):this.createEntityPopupForm.setValue({name:this.receivingData?.data?.name}))}genrateCreateEntityForm(){this.createEntityPopupForm=this.formBuilder.group({name:["",[c.kI.required]]})}createEntitySalesPersonPopupForm(){this.createEntitySalesPersonPopup=this.formBuilder.group({salesperson:["",c.kI.required],companyId:["",c.kI.required]})}onSave(){this.receivingData.type===this.masterDataTypes.COMPANY?this.companyChangeHandler():this.SalesPersonChangeHandler()}companyChangeHandler(){this.receivingData.data?this.masterDataService.updateCompany(this.receivingData?.data?._id,this.createEntityPopupForm?.value).subscribe(t=>{this.alertPopupService.open({message:t.message?t.message:"company Updated Successfully",action:"ok"})},t=>{this.alertPopupService.open({message:t.message?t.message:"something went wrong!",action:"ok"})}):this.masterDataService.createCompany(this.createEntityPopupForm.value).subscribe(t=>{this.alertPopupService.open({message:t.message?t.message:"Compnay Created Successfully",action:"ok"})},t=>{this.alertPopupService.open({message:t.message?t.message:"something went wrong!",action:"ok"})})}getAllCompanys(){this.masterDataService.getAllCompanys().subscribe(t=>{t.success&&(this.companies=t.companies)})}SalesPersonChangeHandler(){this.receivingData.data?this.masterDataService.updateSalesPerson(this.receivingData?.data?._id,this.createEntitySalesPersonPopup.value).subscribe(t=>{this.alertPopupService.open({message:t.message?t.message:"Sales Person Updated Successfully",action:"ok"}),this.dialogRef.close()},t=>{this.alertPopupService.open({message:t.message?t.message:"Something went wrong!",action:"ok"})}):(console.log(this.createEntitySalesPersonPopup.value),this.masterDataService.createSalesPerson(this.createEntitySalesPersonPopup.value).subscribe(t=>{this.alertPopupService.open({message:t.message?t.message:"Sales Person Created Successfully",action:"ok"}),this.dialogRef.close()},t=>{this.alertPopupService.open({message:t.message?t.message:"Something went wrong!",action:"ok"})}))}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(c.qu),e.Y36(g.so),e.Y36(y),e.Y36(g.WI),e.Y36(h.x))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-create-entity-popup"]],decls:4,vars:3,consts:[[4,"ngIf"],[1,"example-form",3,"formGroup"],["appearance","outline",1,"example-full-width"],["matInput","","placeholder","Select Your Name","formControlName","name"],[1,"d-flex","justify-content-end","gap-2"],["mat-raised-button","",1,"my-button",3,"mat-dialog-close"],["mat-raised-button","","color","primary",1,"my-button",3,"disabled","mat-dialog-close","click"],[3,"formGroup"],["appearance","outline"],["formControlName","companyId"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","Enter Your Name","formControlName","salesperson"],["mat-raised-button","","mat-dialog-close","true",1,"my-button",3,"mat-dialog-close"],["mat-raised-button","","mat-dialog-close","true","color","primary",1,"my-button",3,"disabled","click"],[3,"value"]],template:function(t,n){1&t&&(e.TgZ(0,"h3"),e._uU(1),e.qZA(),e.YNc(2,b,13,5,"div",0),e.YNc(3,E,17,4,"div",0)),2&t&&(e.xp6(1),e.Oqu(n.receivingData.header),e.xp6(1),e.Q6J("ngIf",n.receivingData.type===n.masterDataTypes.COMPANY),e.xp6(1),e.Q6J("ngIf",n.receivingData.type!==n.masterDataTypes.COMPANY))},dependencies:[u.sg,u.O5,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,D.ey,C.lW,g.ZT,_.TO,_.KE,_.hX,A.Nt,T.gD],styles:[".my-button[_ngcontent-%COMP%]{width:100px}"]}),a})();var U=i(9307);let y=(()=>{class a{constructor(t,n){this.matDialog=t,this.httpDataService=n}openEntityPopup(t){return this.matDialog.open(Y,{disableClose:!0,minWidth:"500px",data:t})}getAllCompanys(){return this.httpDataService.get("master-data/company")}deleteCompany(t){return this.httpDataService.delete(`master-data/company/${t}`)}updateCompany(t,n){return this.httpDataService.put(`master-data/company/${t}`,n)}createCompany(t){return this.httpDataService.post("master-data/company",t)}getAllSalesPersons(){return this.httpDataService.get("master-data/salesperson")}deleteSalesPerson(t){return this.httpDataService.delete(`master-data/salesperson/${t}`)}updateSalesPerson(t,n){return this.httpDataService.put(`master-data/salesperson/${t}`,n)}createSalesPerson(t){return this.httpDataService.post("master-data/salesperson",t)}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(g.uw),e.LFG(U.L))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var v=i(9642);function w(a,o){1&a&&(e.TgZ(0,"th",13),e._uU(1," Name "),e.qZA())}function M(a,o){if(1&a&&(e.TgZ(0,"td",14),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.hij(" ",null==t?null:t.name," ")}}function k(a,o){1&a&&(e.TgZ(0,"th",13),e._uU(1,"CreatedAt "),e.qZA())}function q(a,o){if(1&a&&(e.TgZ(0,"td",14),e._uU(1),e.ALo(2,"date"),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.hij(" ",e.lcZ(2,1,null==t?null:t.createdAt)," ")}}function O(a,o){1&a&&(e.TgZ(0,"th",13),e._uU(1,"UpdatedAt "),e.qZA())}function F(a,o){if(1&a&&(e.TgZ(0,"td",14),e._uU(1),e.ALo(2,"date"),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.hij(" ",e.lcZ(2,1,null==t?null:t.updatedAt)," ")}}function J(a,o){1&a&&(e.TgZ(0,"th",13),e._uU(1,"Actions "),e.qZA())}function Q(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"td",15)(1,"button",1),e.NdJ("click",function(){const l=e.CHM(t).$implicit,m=e.oxw();return e.KtG(m.updateCompany(l))}),e._uU(2,"Update"),e.qZA(),e.TgZ(3,"button",16),e.NdJ("click",function(){const l=e.CHM(t).$implicit,m=e.oxw();return e.KtG(m.deleteCompany(l._id))}),e._uU(4,"Delete"),e.qZA()()}}function R(a,o){1&a&&e._UZ(0,"tr",17)}function I(a,o){1&a&&e._UZ(0,"tr",18)}function B(a,o){1&a&&(e.ynx(0),e.TgZ(1,"div",19),e._uU(2," request list is empty please create request "),e.qZA(),e.BQk())}let $=(()=>{class a{constructor(t,n,s){this.masterDataService=t,this.alertPopupService=n,this.confirmationDialogService=s,this.companies=[],this.displayedColumns=["name","createdAt","updatedAt","actions"],this.dataSource=new r.by(this.companies)}ngOnInit(){this.getAllCompanys()}createCompany(){this.masterDataService.openEntityPopup({type:p.COMPANY,header:"Create Company"}).afterClosed().subscribe(s=>{console.log(`Dialog result: ${s}`),this.getAllCompanys()})}updateCompany(t){this.masterDataService.openEntityPopup({type:p.COMPANY,header:"Update Company",data:t})}getAllCompanys(){this.masterDataService.getAllCompanys().subscribe(t=>{t.success&&(this.companies=t.companies,console.log(this.companies),this.dataSource=new r.by(this.companies))})}deleteCompany(t){this.confirmationDialogService.open({message:"Are you sure you want to delete"}).afterClosed().subscribe(n=>{n&&t&&this.masterDataService.deleteCompany(t).subscribe(s=>{this.alertPopupService.open({message:s.message?s.message:"Companay Deleted Successfully",action:"ok"}),this.companyId=s,this.getAllCompanys()})})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(y),e.Y36(h.x),e.Y36(v.O))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-company"]],decls:20,vars:4,consts:[[1,"text-end","mb-3"],["mat-raised-button","","color","primary",3,"click"],["mat-table","",1,"mat-elevation-z8","requestTable",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","createdAt"],["matColumnDef","updatedAt"],["matColumnDef","actions"],["mat-cell","","class","d-flex gap-3 p-1",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[4,"ngIf"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",1,"d-flex","gap-3","p-1"],["mat-raised-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""],[1,"error","d-flex"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return n.createCompany()}),e._uU(2,"Add Company"),e.qZA()(),e.TgZ(3,"div")(4,"table",2),e.ynx(5,3),e.YNc(6,w,2,0,"th",4),e.YNc(7,M,2,1,"td",5),e.BQk(),e.ynx(8,6),e.YNc(9,k,2,0,"th",4),e.YNc(10,q,3,3,"td",5),e.BQk(),e.ynx(11,7),e.YNc(12,O,2,0,"th",4),e.YNc(13,F,3,3,"td",5),e.BQk(),e.ynx(14,8),e.YNc(15,J,2,0,"th",4),e.YNc(16,Q,5,0,"td",9),e.BQk(),e.YNc(17,R,1,0,"tr",10),e.YNc(18,I,1,0,"tr",11),e.YNc(19,B,3,0,"ng-container",12),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("dataSource",n.dataSource),e.xp6(13),e.Q6J("matHeaderRowDef",n.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",n.displayedColumns),e.xp6(1),e.Q6J("ngIf",0===n.companies.length))},dependencies:[u.O5,C.lW,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,u.uU],styles:[".requestTable[_ngcontent-%COMP%]{width:100%}th.mat-header-cell[_ngcontent-%COMP%]{text-align:left;font-size:1rem;background:#f0f0f0}.error[_ngcontent-%COMP%]{color:red;text-align:center}"]}),a})();function G(a,o){1&a&&(e.TgZ(0,"th",13),e._uU(1," Name "),e.qZA())}function L(a,o){if(1&a&&(e.TgZ(0,"td",14),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.hij(" ",null==t?null:t.salesperson," ")}}function j(a,o){1&a&&(e.TgZ(0,"th",13),e._uU(1,"CreatedAt "),e.qZA())}function z(a,o){if(1&a&&(e.TgZ(0,"td",14),e._uU(1),e.ALo(2,"date"),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.hij(" ",e.lcZ(2,1,null==t?null:t.createdAt)," ")}}function K(a,o){1&a&&(e.TgZ(0,"th",13),e._uU(1,"UpdatedAt "),e.qZA())}function X(a,o){if(1&a&&(e.TgZ(0,"td",14),e._uU(1),e.ALo(2,"date"),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.hij(" ",e.lcZ(2,1,null==t?null:t.updatedAt)," ")}}function W(a,o){1&a&&(e.TgZ(0,"th",13),e._uU(1,"Actions "),e.qZA())}function V(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"td",15)(1,"button",1),e.NdJ("click",function(){const l=e.CHM(t).$implicit,m=e.oxw();return e.KtG(m.updateSalesPerson(l))}),e._uU(2,"Update "),e.qZA(),e.TgZ(3,"button",16),e.NdJ("click",function(){const l=e.CHM(t).$implicit,m=e.oxw();return e.KtG(m.deleteSalesPerson(l._id))}),e._uU(4,"Delete"),e.qZA()()}}function ee(a,o){1&a&&e._UZ(0,"tr",17)}function te(a,o){1&a&&e._UZ(0,"tr",18)}function ae(a,o){1&a&&(e.ynx(0),e.TgZ(1,"div",19),e._uU(2," request list is empty please create request "),e.qZA(),e.BQk())}const oe=[{path:"",component:(()=>{class a{constructor(t){this.router=t}ngOnInit(){}navigateToCompany(){this.router.navigate([`${d.p.MASTER_DATA}/${d.p.COMPANY}`])}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(f.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-master-data"]],decls:4,vars:0,consts:[["type","button",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Mater Data"),e.qZA(),e.TgZ(2,"button",0),e.NdJ("click",function(){return n.navigateToCompany()}),e._uU(3,"Companies"),e.qZA())}}),a})()},{path:d.p.COMPANY,component:$},{path:d.p.SALES_PERSON,component:(()=>{class a{constructor(t,n,s){this.masterDataService=t,this.alertPopupService=n,this.confirmationDialogService=s,this.salesPersons=[],this.displayedColumns=["salesperson","createdAt","updatedAt","actions"],this.dataSource=new r.by(this.salesPersons)}ngOnInit(){this.getAllSalespersons()}getAllSalespersons(){this.masterDataService.getAllSalesPersons().subscribe(t=>{t.success&&(this.salesPersons=t.salespersons,console.log(this.salesPersons),this.dataSource=new r.by(this.salesPersons))})}deleteSalesPerson(t){this.confirmationDialogService.open({message:"Are you sure you want to delete!"}).afterClosed().subscribe(n=>{n&&t&&this.masterDataService.deleteSalesPerson(t).subscribe(s=>{this.alertPopupService.open({message:s.message?s.message:"Sompanay Deleted Successfully",action:"ok"}),this.salesPersonId=s,this.getAllSalespersons()})})}updateSalesPerson(t){this.masterDataService.openEntityPopup({type:p.SALES_PERSON,header:"Update SalesPerson",data:t})}openSalesPerons(){this.masterDataService.openEntityPopup({type:p.SALES_PERSON,header:"Create Company"}).afterClosed().subscribe(s=>{console.log(`Dialog result: ${s}`),this.getAllSalespersons()})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(y),e.Y36(h.x),e.Y36(v.O))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-sales-person"]],decls:20,vars:4,consts:[[1,"text-end","mb-3"],["mat-raised-button","","color","primary",3,"click"],["mat-table","",1,"mat-elevation-z8","requestTable",3,"dataSource"],["matColumnDef","salesperson"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","createdAt"],["matColumnDef","updatedAt"],["matColumnDef","actions"],["class","d-flex gap-3 p-1","mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[4,"ngIf"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",1,"d-flex","gap-3","p-1"],["mat-raised-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""],[1,"error","d-flex"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return n.openSalesPerons()}),e._uU(2,"Add SalesPerson"),e.qZA()(),e.TgZ(3,"div")(4,"table",2),e.ynx(5,3),e.YNc(6,G,2,0,"th",4),e.YNc(7,L,2,1,"td",5),e.BQk(),e.ynx(8,6),e.YNc(9,j,2,0,"th",4),e.YNc(10,z,3,3,"td",5),e.BQk(),e.ynx(11,7),e.YNc(12,K,2,0,"th",4),e.YNc(13,X,3,3,"td",5),e.BQk(),e.ynx(14,8),e.YNc(15,W,2,0,"th",4),e.YNc(16,V,5,0,"td",9),e.BQk(),e.YNc(17,ee,1,0,"tr",10),e.YNc(18,te,1,0,"tr",11),e.YNc(19,ae,3,0,"ng-container",12),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("dataSource",n.dataSource),e.xp6(13),e.Q6J("matHeaderRowDef",n.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",n.displayedColumns),e.xp6(1),e.Q6J("ngIf",0===n.salesPersons.length))},dependencies:[u.O5,C.lW,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,u.uU],styles:[".requestTable[_ngcontent-%COMP%]{width:100%}th.mat-header-cell[_ngcontent-%COMP%]{text-align:left;font-size:1rem;background:#f0f0f0}.error[_ngcontent-%COMP%]{color:red;text-align:center}"]}),a})()}];let se=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[f.Bz.forChild(oe),f.Bz]}),a})(),re=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[u.ez,se,P.m]}),a})()}}]);