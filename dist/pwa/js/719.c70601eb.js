(globalThis["webpackChunktester"]=globalThis["webpackChunktester"]||[]).push([[719],{7977:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var l=n(9835),s=n(3597),o=n.n(s);const i={class:"q-gutter-md"},r=(0,l._)("br",null,null,-1);function a(e,t,n,s,a,u){const c=(0,l.up)("q-btn"),d=(0,l.up)("q-img");return(0,l.wg)(),(0,l.iD)("div",i,[(0,l.Wm)(c,{color:"grey-10",label:"Show Example",onClick:t[0]||(t[0]=t=>e.img=!e.img)}),r,!1!==e.img?((0,l.wg)(),(0,l.j4)(d,{key:0,style:{"max-width":"800px",width:"80%"},src:o()})):(0,l.kq)("",!0)])}var u=n(499),c=n(9302);const d=(0,l.aZ)({name:"UploadInfo",setup(){(0,c.Z)();const e=(0,u.iH)(!1);return{img:e}}});var p=n(1639),f=n(4455),m=n(335),g=n(9984),h=n.n(g);const v=(0,p.Z)(d,[["render",a]]),b=v;h()(d,"components",{QBtn:f.Z,QImg:m.Z})},2719:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var l=n(9835);const s={style:{"border-style":"solid 1px"}},o={class:"q-pa-md text-center"},i=(0,l._)("h5",null,"Upload test data and start solving quiz!",-1),r=(0,l._)("div",null,[(0,l._)("p",null,[(0,l.Uk)(" The file should look like: "),(0,l._)("br"),(0,l.Uk)(" 1. Questions "),(0,l._)("br"),(0,l.Uk)(" 2. Numer of answers "),(0,l._)("br"),(0,l.Uk)(" 3. Answers "),(0,l._)("br"),(0,l.Uk)(" 4. Correct answers without spacing "),(0,l._)("br"),(0,l.Uk)(" 5. Newline ")])],-1),a={class:"q-gutter-md q-mt-md row items-start flex flex-center"},u={class:"q-mt-lg"};function c(e,t,n,c,d,p){const f=(0,l.up)("upload-info-vue"),m=(0,l.up)("q-icon"),g=(0,l.up)("q-file"),h=(0,l.up)("q-btn"),v=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(v,{class:"flex flex-center",style:{"font-size":"large"}},{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l._)("div",o,[i,r,(0,l.Wm)(f),(0,l._)("div",a,[(0,l.Wm)(g,{"input-class":"text-center",class:"MyInput",outlined:"",modelValue:e.file,"onUpdate:modelValue":t[0]||(t[0]=t=>e.file=t),filled:"",label:"Input data",filter:e.checkFileType,onRejected:e.onRejected},{prepend:(0,l.w5)((()=>[(0,l.Wm)(m,{name:"attach_file"})])),_:1},8,["modelValue","filter","onRejected"])]),(0,l._)("div",u,[(0,l.Wm)(h,{size:"25px",round:"",color:"grey-10",icon:"cloud_upload",onClick:t[1]||(t[1]=t=>e.readFile())})])])])])),_:1})}n(702);var d=n(9302),p=n(499),f=n(8339),m=n(7977);const g=(0,l.aZ)({name:"UploadPage",components:{UploadInfoVue:m.Z},setup(){const e=(0,d.Z)(),t=(0,f.tv)();let n=(0,p.iH)(null),l=(0,p.iH)([]),s=(0,p.iH)([]),o=(0,p.iH)([]),i=(0,p.iH)("");function r(e){return e.filter((e=>"text/plain"===e.type))}function a(t){e.notify({type:"negative",message:`${t.length} file(s) did not pass validation constraints`})}function u(){const e={questions:l,answers:s,correctAnswers:o,score:{counter:0,goodAnswersCounter:0,left:-1}};localStorage.setItem("data",JSON.stringify(e)),t.push({name:"home"}),console.log("pushToLocalStroage")}async function c(){i="";const e=await n.value.text(),t=e.split(/\r?\n/);var r=0,a=0,c=!0;for(let n=0;n<t.length;n++){var d=0;if(0==r)Number(t[n]==isNaN)?c=!1:(l.value.push({id:a,counter:0,question:t[n]}),r+=1);else if(1==r)if(Number(t[n])){d=parseInt(t[n]);for(var p=[],f=0;f<d;f++)Number(t[n]==isNaN)?c=!1:p.push({id:f,ans:t[n+f+1]});s.value.push({id:a,answer:p}),n+=f,r+=1}else c=!1;else if(2==r)if(Number(t[n]==isNaN))c=!1;else{let e=t[n].split(""),l=[];for(p of e)l.push(p.charCodeAt(0)-97);o.value.push({id:a,correct:l}),r+=1}else r=0,a++;if(!c){i="Wrong file format.";break}}c&&u()}return{file:n,checkFileType:r,onRejected:a,readFile:c,UploadInfoVue:m.Z}}});var h=n(1639),v=n(9885),b=n(3171),w=n(2857),k=n(4455),_=n(8149),Z=n(9984),q=n.n(Z);const x=(0,h.Z)(g,[["render",c]]),y=x;q()(g,"components",{QPage:v.Z,QFile:b.Z,QIcon:w.Z,QBtn:k.Z,QField:_.Z})},3597:(e,t,n)=>{e.exports=n.p+"img/example.00cc547b.png"}}]);