"use strict";(self.webpackChunkrequest_management_app=self.webpackChunkrequest_management_app||[]).push([[564],{1564:(j,m,i)=>{i.r(m),i.d(m,{SignupModule:()=>D});var g=i(6895),s=i(4006),u=i(3060),c=i(5805),Z=i(9484),n=i(4650),x=i(9307);let F=(()=>{class e{constructor(t){this.httpDataService=t}sinupUser(t){return this.httpDataService.post("auth/signup",t)}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(x.L))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var h=i(996);function S(e,l){1&e&&(n.TgZ(0,"span"),n._uU(1," please kindly fill field "),n.qZA())}function T(e,l){1&e&&(n.TgZ(0,"span"),n._uU(1," minimum of 3 characters required "),n.qZA())}function v(e,l){if(1&e&&(n.TgZ(0,"span"),n.YNc(1,S,2,0,"span",7),n.YNc(2,T,2,0,"span",7),n.qZA()),2&e){const t=n.oxw(2);let r,o;n.xp6(1),n.Q6J("ngIf",null==(r=t.registerForm.get("name"))||null==r.errors?null:r.errors.required),n.xp6(1),n.Q6J("ngIf",null==(o=t.registerForm.get("name"))||null==o.errors?null:o.errors.minlength)}}function w(e,l){if(1&e&&(n.TgZ(0,"span"),n.YNc(1,v,3,2,"span",7),n.qZA()),2&e){const t=n.oxw();let r;n.xp6(1),n.Q6J("ngIf",(null==(r=t.registerForm.get("name"))?null:r.invalid)&&(null==(r=t.registerForm.get("name"))?null:r.touched)||(null==(r=t.registerForm.get("firstName"))?null:r.dirty))}}function A(e,l){1&e&&(n.TgZ(0,"span"),n._uU(1," please provide valid mail Id "),n.qZA())}function q(e,l){if(1&e&&(n.TgZ(0,"span"),n.YNc(1,A,2,0,"span",7),n.qZA()),2&e){const t=n.oxw(2);let r;n.xp6(1),n.Q6J("ngIf",null==t.registerForm||null==(r=t.registerForm.get("email"))?null:r.errors)}}function C(e,l){if(1&e&&(n.TgZ(0,"span"),n.YNc(1,q,2,1,"span",7),n.qZA()),2&e){const t=n.oxw();let r;n.xp6(1),n.Q6J("ngIf",(null==t.registerForm||null==(r=t.registerForm.get("email"))?null:r.invalid)&&(null==t.registerForm||null==(r=t.registerForm.get("email"))?null:r.touched)||(null==t.registerForm||null==(r=t.registerForm.get("email"))?null:r.dirty))}}function N(e,l){1&e&&(n.TgZ(0,"span"),n._uU(1," please kindly fill field "),n.qZA())}function I(e,l){1&e&&(n.TgZ(0,"span"),n._uU(1," should not exceed 10 characters "),n.qZA())}function J(e,l){if(1&e&&(n.TgZ(0,"span"),n.YNc(1,N,2,0,"span",7),n.YNc(2,I,2,0,"span",7),n.qZA()),2&e){const t=n.oxw(2);let r,o;n.xp6(1),n.Q6J("ngIf",null==(r=t.registerForm.get("phone"))||null==r.errors?null:r.errors.required),n.xp6(1),n.Q6J("ngIf",null==(o=t.registerForm.get("phone"))||null==o.errors?null:o.errors.maxlength)}}function y(e,l){if(1&e&&(n.TgZ(0,"span"),n.YNc(1,J,3,2,"span",7),n.qZA()),2&e){const t=n.oxw();let r;n.xp6(1),n.Q6J("ngIf",(null==(r=t.registerForm.get("phone"))?null:r.invalid)&&(null==(r=t.registerForm.get("phone"))?null:r.touched)||(null==(r=t.registerForm.get("phone"))?null:r.dirty))}}function b(e,l){1&e&&(n.TgZ(0,"span"),n._uU(1," please kindly fill field "),n.qZA())}function Y(e,l){1&e&&(n.TgZ(0,"span"),n._uU(1," Minimum eight characters are required "),n.qZA())}function U(e,l){1&e&&(n.TgZ(0,"span"),n._uU(1," should containAt least one uppercase letter,At least one lowercase letter,At least one number,At least one special character "),n.qZA())}function P(e,l){if(1&e&&(n.TgZ(0,"span"),n.YNc(1,b,2,0,"span",7),n.YNc(2,Y,2,0,"span",7),n.YNc(3,U,2,0,"span",7),n.qZA()),2&e){const t=n.oxw(2);let r,o,p;n.xp6(1),n.Q6J("ngIf",null==t.registerForm||null==(r=t.registerForm.get("password"))||null==r.errors?null:r.errors.required),n.xp6(1),n.Q6J("ngIf",null==t.registerForm||null==(o=t.registerForm.get("password"))||null==o.errors?null:o.errors.minlength),n.xp6(1),n.Q6J("ngIf",null==t.registerForm||null==(p=t.registerForm.get("password"))||null==p.errors?null:p.errors.pattern)}}function Q(e,l){if(1&e&&(n.TgZ(0,"span"),n.YNc(1,P,4,3,"span",7),n.qZA()),2&e){const t=n.oxw();let r;n.xp6(1),n.Q6J("ngIf",(null==t.registerForm||null==(r=t.registerForm.get("password"))?null:r.invalid)&&(null==t.registerForm||null==(r=t.registerForm.get("password"))?null:r.touched)||(null==t.registerForm||null==(r=t.registerForm.get("password"))?null:r.dirty))}}function k(e,l){1&e&&(n.TgZ(0,"span"),n._uU(1," please kindly fill field "),n.qZA())}function M(e,l){if(1&e&&(n.TgZ(0,"span"),n.YNc(1,k,2,0,"span",7),n.qZA()),2&e){const t=n.oxw(2);let r;n.xp6(1),n.Q6J("ngIf",null==(r=t.registerForm.get("confirmPassword"))||null==r.errors?null:r.errors.invalid)}}function E(e,l){if(1&e&&(n.TgZ(0,"span"),n.YNc(1,M,2,1,"span",7),n.qZA()),2&e){const t=n.oxw();let r;n.xp6(1),n.Q6J("ngIf",(null==(r=t.registerForm.get("confirmPassword"))?null:r.invalid)&&(null==(r=t.registerForm.get("confirmPassword"))?null:r.touched)||(null==(r=t.registerForm.get("confirmPassword"))?null:r.dirty))}}function R(e,l){1&e&&(n.TgZ(0,"div"),n._uU(1,"Passsword and Confirm Password didn't match. "),n.qZA())}function B(e,l){if(1&e&&(n.TgZ(0,"span"),n.YNc(1,R,2,0,"div",7),n.qZA()),2&e){const t=n.oxw();let r;n.xp6(1),n.Q6J("ngIf",(null==(r=t.registerForm.get("password"))?null:r.value)!=(null==(r=t.registerForm.get("confirmPassword"))?null:r.value))}}const L=[{path:"",component:(()=>{class e{constructor(t,r,o,p){this.formBulder=t,this.sinupService=r,this.router=o,this.alertPopupService=p}ngOnInit(){this.getRigisterFormDetails()}getRigisterFormDetails(){this.registerForm=this.formBulder.group({name:["",[s.kI.required,s.kI.minLength(3)]],email:["",[s.kI.required,s.kI.pattern(c.u.EmailPattern)]],phone:["",[s.kI.required,s.kI.maxLength(10)]],password:["",[s.kI.required,s.kI.pattern(c.u.PasswordPattern)]],confirmPassword:["",[s.kI.required]]})}onSubmit(){const{confirmPassword:t,...r}=this.registerForm.value;this.sinupService.sinupUser({...r,roles:["USER"]}).subscribe(o=>{this.alertPopupService.open({message:o.message?o.message:"New user created successfully",action:"ok"}),this.router.navigate([Z.p.HOME])},o=>{this.alertPopupService.open({message:o.message?o.message:"something went wrong!",action:"ok"})})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(s.qu),n.Y36(F),n.Y36(u.F0),n.Y36(h.x))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-signup"]],decls:34,vars:8,consts:[[1,"page"],[1,"container","my-4"],[1,"text-center"],[3,"formGroup","ngSubmit"],[1,"col-12","mb-3"],["for","name",1,"form-label"],["type","name","formControlName","name","id","name","placeholder","Enter  Name",1,"form-control"],[4,"ngIf"],["for","email",1,"form-label"],["type","email","formControlName","email","id","email","placeholder","name@example.com",1,"form-control"],["for","mobileNumber",1,"form-label"],["type","email","formControlName","phone","id","mobileNumber","placeholder","Enter Mobile Number",1,"form-control"],["for","password",1,"form-label"],["type","password","formControlName","password","id","password","placeholder","Enter password",1,"form-control"],["for","confirmPassword",1,"form-label"],["type","password","formControlName","confirmPassword","id","confirmPassword","placeholder","Enter password",1,"form-control"],["type","submit",1,"col-12","mb-3","btn","btn-primary","center",3,"disabled"]],template:function(t,r){if(1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),n._uU(3,"Register"),n.qZA(),n.TgZ(4,"form",3),n.NdJ("ngSubmit",function(){return r.onSubmit()}),n.TgZ(5,"div",4)(6,"label",5),n._uU(7,"Name"),n.qZA(),n._UZ(8,"input",6),n.YNc(9,w,2,1,"span",7),n.qZA(),n.TgZ(10,"div",4)(11,"label",8),n._uU(12,"Email address"),n.qZA(),n._UZ(13,"input",9),n.YNc(14,C,2,1,"span",7),n.qZA(),n.TgZ(15,"div")(16,"label",10),n._uU(17,"Mobile Number"),n.qZA(),n._UZ(18,"input",11),n.YNc(19,y,2,1,"span",7),n.qZA(),n.TgZ(20,"div",4)(21,"label",12),n._uU(22,"Password"),n.qZA(),n._UZ(23,"input",13),n.YNc(24,Q,2,1,"span",7),n.qZA(),n.TgZ(25,"div",4)(26,"label",14),n._uU(27,"Confirm Password"),n.qZA(),n._UZ(28,"input",15),n.YNc(29,E,2,1,"span",7),n.YNc(30,B,2,1,"span",7),n.qZA(),n.TgZ(31,"div",4)(32,"button",16),n._uU(33," Register "),n.qZA()()()()()),2&t){let o,p,_,f,d,a;n.xp6(4),n.Q6J("formGroup",r.registerForm),n.xp6(5),n.Q6J("ngIf",null==(o=r.registerForm.get("name"))?null:o.errors),n.xp6(5),n.Q6J("ngIf",null==r.registerForm||null==(p=r.registerForm.get("email"))?null:p.errors),n.xp6(5),n.Q6J("ngIf",null==(_=r.registerForm.get("phone"))?null:_.errors),n.xp6(5),n.Q6J("ngIf",null==r.registerForm||null==(f=r.registerForm.get("password"))?null:f.errors),n.xp6(5),n.Q6J("ngIf",null==(d=r.registerForm.get("confirmPassword"))?null:d.errors),n.xp6(1),n.Q6J("ngIf",(null==(a=r.registerForm.get("confirmPassword"))?null:a.invalid)&&(null==(a=r.registerForm.get("confirmPassword"))?null:a.touched)||(null==(a=r.registerForm.get("confirmPassword"))?null:a.dirty)),n.xp6(2),n.Q6J("disabled",!r.registerForm.valid)}},dependencies:[g.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u]}),e})()}];let z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[u.Bz.forChild(L),u.Bz]}),e})(),D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[g.ez,s.u5,s.UX,z]}),e})()}}]);