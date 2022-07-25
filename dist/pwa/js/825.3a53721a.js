"use strict";(globalThis["webpackChunktester"]=globalThis["webpackChunktester"]||[]).push([[825],{6825:(e,t,l)=>{l.r(t),l.d(t,{default:()=>L});var o=l(9835);const a=(0,o._)("h4",null,"Welcome to test generator app!",-1),n={key:0},s={key:1},r=(0,o._)("h5",null,"Upload file first!",-1),u=[r];function c(e,t,l,r,c,d){const i=(0,o.up)("QuizComponentVue"),m=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(m,{class:"column text-center"},{default:(0,o.w5)((()=>[a,null!=e.data?((0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(i,{file:e.data},null,8,["file"])])):((0,o.wg)(),(0,o.iD)("div",s,u))])),_:1})}var d=l(499),i=l(6970);const m={class:"q-pa-md row items-start q-gutter-md vertical-middle row full-height justify-center"},w=(0,o._)("b",null,"Congratulation! Your Score:",-1),g=(0,o.Uk)("Your chance to pass has increased"),y={key:0,style:{width:"100%"}},f=(0,o._)("b",null,"One more time?",-1),p={key:1,style:{width:"100%"}},v={key:2,style:{width:"100%"}},k=(0,o._)("b",null,"Start taking the quiz. Press the button!",-1),h={key:3,style:{width:"100%"}};function b(e,t,l,a,n,s){const r=(0,o.up)("q-item-label"),u=(0,o.up)("q-item-section"),c=(0,o.up)("q-separator"),d=(0,o.up)("q-item"),b=(0,o.up)("q-btn"),_=(0,o.up)("quiz-show-good-answer"),q=(0,o.up)("q-list"),W=(0,o.up)("q-card");return(0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)(W,{class:"my-card",flat:"",bordered:"",style:{"max-width":"1200px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{bordered:""},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[e.started<2?((0,o.wg)(),(0,o.j4)(u,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Answers: "+(0,i.zw)(e.counter)+" | Good Answers: "+(0,i.zw)(e.goodAnswersCounter)+" | Score: "+(0,i.zw)(0==e.counter?100:Math.floor(100*e.goodAnswersCounter/e.counter))+"% ",1)])),_:1}),(0,o.Wm)(r,{class:"text-caption"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Left: "+(0,i.zw)(e.left),1)])),_:1})])),_:1})):2==e.started?((0,o.wg)(),(0,o.j4)(u,{key:1},{default:(0,o.w5)((()=>["Bad Answer!"==e.answerInfo?((0,o.wg)(),(0,o.j4)(r,{key:0,style:{color:"red"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.answerInfo),1)])),_:1})):((0,o.wg)(),(0,o.j4)(r,{key:1,style:{color:"#52cc7a"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.answerInfo),1)])),_:1}))])),_:1})):((0,o.wg)(),(0,o.j4)(u,{key:2},{default:(0,o.w5)((()=>[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[w,(0,o.Uk)(" "+(0,i.zw)(0==e.counter?100:Math.floor(100*e.goodAnswersCounter/e.counter))+"% ",1)])),_:1}),(0,o.Wm)(r,{class:"text-caption"},{default:(0,o.w5)((()=>[g])),_:1})])),_:1})),(0,o.Wm)(c)])),_:1}),(0,o.Wm)(c),3==e.started?((0,o.wg)(),(0,o.iD)("div",y,[(0,o.Wm)(u,{class:"q-mxy-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{class:"q-py-sm"},{default:(0,o.w5)((()=>[f])),_:1})])),_:1}),(0,o.Wm)(c),(0,o.Wm)(c),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b,{ripple:{color:"grey"},color:"grey-10",label:"Restart",padding:"sm md",class:"q-my-md btnStyle",onClick:e.restart,"no-caps":""},null,8,["onClick"])])),_:1})])),_:1}),(0,o.Wm)(c)])):(0,o.kq)("",!0),1==e.started?((0,o.wg)(),(0,o.iD)("div",p,[(0,o.Wm)(u,{class:"q-mxy-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{class:"q-py-sm"},{default:(0,o.w5)((()=>[(0,o._)("b",null,(0,i.zw)(e.actualQuestion.question),1)])),_:1})])),_:1}),(0,o.Wm)(c),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.shuffleArray,(t=>((0,o.wg)(),(0,o.j4)(u,{class:"items-center",id:t.id,key:t.id},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{class:"text-body2 q-mt-sm",clickable:"",onClick:l=>e.filters(t.id)},{default:(0,o.w5)((()=>[(0,o._)("p",null,(0,i.zw)(t.ans),1)])),_:2},1032,["onClick"])])),_:2},1032,["id"])))),128)),(0,o.Wm)(c),(0,o.Wm)(b,{ripple:{color:"grey"},color:"grey-10",disabled:!e.selected.length,label:"Answer",class:"q-my-md q-mx-md btnStyle",onClick:e.checkAnswer,"no-caps":""},null,8,["disabled","onClick"])])):(0,o.kq)("",!0),0==e.started?((0,o.wg)(),(0,o.iD)("div",v,[(0,o.Wm)(u,{class:"q-mxy-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{class:"q-py-sm"},{default:(0,o.w5)((()=>[k])),_:1})])),_:1}),(0,o.Wm)(c),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b,{ripple:{color:"grey"},color:"grey-10",label:"Start",padding:" md xl",class:"q-my-md btnStyle",onClick:e.startFun,"no-caps":""},null,8,["onClick"])])),_:1})])),_:1}),(0,o.Wm)(c)])):(0,o.kq)("",!0),2==e.started?((0,o.wg)(),(0,o.iD)("div",h,[(0,o.Wm)(_,{question:e.actualQuestion,correct:e.onlyGoodAnswer},null,8,["question","correct"]),(0,o.Wm)(c),(0,o.Wm)(b,{ripple:{color:"grey"},color:"grey-10",label:"Next Question",padding:" sm md",class:"q-my-md q-mx-md btnStyle",onClick:e.nextQuestion,"no-caps":""},null,8,["onClick"]),(0,o.Wm)(b,{ripple:{color:"grey"},color:"grey-10",padding:" sm md",label:"Save Game",class:"q-my-md q-mx-md btnStyle",onClick:t[0]||(t[0]=t=>e.save()),"no-caps":""})])):(0,o.kq)("",!0)])),_:1})])),_:1})])}l(702),l(6727);function _(e,t,l,a,n,s){const r=(0,o.up)("q-item-label"),u=(0,o.up)("q-item-section"),c=(0,o.up)("q-separator");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(u,{class:"q-mxy-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{class:"q-py-sm"},{default:(0,o.w5)((()=>[(0,o._)("b",null,(0,i.zw)(e.actualQuestion.question),1)])),_:1})])),_:1}),(0,o.Wm)(c),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.actualCorrectAnswers,(e=>((0,o.wg)(),(0,o.j4)(u,{id:e.id,key:e.id},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{class:"text-body2 q-mt-sm"},{default:(0,o.w5)((()=>[(0,o._)("p",null,(0,i.zw)(e.ans),1)])),_:2},1024)])),_:2},1032,["id"])))),128)),(0,o.Wm)(c)],64)}const q=(0,o.aZ)({name:"QuizShowGoodAnswer",props:{question:Object,correct:Object},setup(e){let t=(0,d.iH)(""),l=(0,d.iH)([]);return(0,o.bv)((()=>{t.value=e.question,l.value=e.correct})),{actualQuestion:t,actualCorrectAnswers:l}}});var W=l(1639),C=l(1233),I=l(3115),A=l(926),Q=l(490),S=l(9984),x=l.n(S);const z=(0,W.Z)(q,[["render",_]]),H=z;x()(q,"components",{QItemSection:C.Z,QItemLabel:I.Z,QSeparator:A.Z,QItem:Q.Z});var Z=l(8339),B=l(9302);const E=(0,o.aZ)({components:{QuizShowGoodAnswerVue:H,QuizShowGoodAnswer:H},name:"QuizComponent",props:{file:Object},setup(e){(0,Z.tv)();let t=(0,d.iH)(""),l=(0,d.iH)([]),a=(0,d.iH)([]),n=0,s=(0,d.iH)(!1),r=(0,d.iH)(0),u=2,c=e.file,i=(0,d.iH)(c.score.counter),m=(0,d.iH)(c.score.goodAnswersCounter),w=(0,d.iH)(c.score.left),g=(0,d.iH)([]),y=(0,d.iH)([]),f=(0,d.iH)(""),p=(0,d.iH)(!1);const v=(0,B.Z)();function k(){let e=Math.floor(Math.random()*c.questions._value.length);for(var o of(l.value.push(c.answers._value[e]),t.value=c.questions._value[e],a.value.push(c.correctAnswers._value[e]),c.questions._value[e].counter=c.questions._value[e].counter+1,l.value[0].answer))a.value[0].correct.includes(o.id)&&y.value.push(o);return c.questions._value[e].counter==u&&(c.questions._value.splice(e,1),c.answers._value.splice(e,1),c.correctAnswers._value.splice(e,1)),e}function h(){if(y.value=[],l.value=[],a.value=[],g.value=[],r.value=1,c.questions._value.length>0){k()}else r.value=3}function b(){window.location.reload()}function _(){c.score.counter=i.value,c.score.goodAnswersCounter=m.value,c.score.left=w.value,localStorage.setItem("data",JSON.stringify(c)),p.value=!1,v.notify({progress:!0,message:"The test has been saved",icon:"save_alt",color:"white",textColor:"grey-10"})}function q(e){if("true"==localStorage.getItem("dark"))if("black"==document.getElementById(e).style.backgroundColor){document.getElementById(e).style.backgroundColor="#1d1d1d",document.getElementById(e).style.opacity="100%",document.getElementById(e).style.color="white";var t=g.value.indexOf(e);g.value.splice(t,1)}else document.getElementById(e).style.backgroundColor="black",document.getElementById(e).style.opacity="30%",document.getElementById(e).style.color="white",g.value.push(e);else if("black"==document.getElementById(e).style.backgroundColor){document.getElementById(e).style.backgroundColor="white",document.getElementById(e).style.opacity="100%",document.getElementById(e).style.color="black";t=g.value.indexOf(e);g.value.splice(t,1)}else document.getElementById(e).style.backgroundColor="black",document.getElementById(e).style.opacity="30%",document.getElementById(e).style.color="white",g.value.push(e);console.log("2",g.value)}(0,o.YP)(g.value.length?g.value.forEach((e=>q(e))):"",localStorage.getItem("dark"));const W=(0,o.Fl)((()=>{let e=l.value[0];if(e){for(var t=e.answer.length-1;t>0;t--){var o=Math.floor(Math.random()*(t+1)),a=e.answer[t];e.answer[t]=e.answer[o],e.answer[o]=a}return e.answer}}));function C(){k(),r.value=1}function I(){let e=!0;for(var t of(f.value="Correct Answer!",g.value))a.value[0].correct.includes(t)||(e=!1);e&&a.value[0].correct.length===g.value.length?m.value+=1:f.value="Bad Answer!",r.value=2,i.value+=1,w.value-=1}return(0,o.bv)((()=>{n=c.answers._value.length,-1==w.value&&(w.value=n*u)})),{randQuestion:k,startFun:C,goodAnswersCounter:m,counter:i,actualQuestion:t,actualCorrectAnswers:a,actualAnswers:l,running:s,numberOfQuestions:n,maxNumberofAnswers:u,left:w,started:r,shuffleArray:W,filters:q,selected:g,checkAnswer:I,answerInfo:f,onlyGoodAnswer:y,nextQuestion:h,restart:b,saveFlag:p,save:_}}});var j=l(4458),D=l(3246),O=l(4455);const G=(0,W.Z)(E,[["render",b]]),U=G;x()(E,"components",{QCard:j.Z,QList:D.Z,QItem:Q.Z,QItemSection:C.Z,QItemLabel:I.Z,QSeparator:A.Z,QBtn:O.Z});const M=(0,o.aZ)({components:{QuizComponentVue:U},name:"HomePage",setup(){let e=null!=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):(0,d.iH)(null);return{data:e}}});var Y=l(9885);const F=(0,W.Z)(M,[["render",c]]),L=F;x()(M,"components",{QPage:Y.Z})}}]);