(function(t){function e(e){for(var n,i,c=e[0],s=e[1],l=e[2],u=0,f=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/portfolio/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"108d":function(t,e,a){},2692:function(t,e,a){"use strict";var n=a("b51d"),r=a.n(n);r.a},"26eb":function(t,e,a){},"34f3":function(t,e,a){},"35c3":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("TitleCard",{attrs:{name:t.name}}),a("AboutMe",{attrs:{name:t.name}}),a("SocialLinks"),a("br"),a("h2",{staticClass:"skillsHeader"},[t._v("My skills")]),a("h3",{staticClass:"skillsSubheader"},[t._v("I try to learn something new every day.")]),a("Accordion",{attrs:{accordionData:[{name:"Advanced",data:"My focus is on web development. I've picked Vue as my main framework, and I'd say that I'm decent at it. I also know HTML, CSS, and JS. I've got a good knowledge of JS, but it's such a huge language that there's always more to learn. I can work with the OOP principles of JS, as well as HTTP requests and APIs."},{name:"Proficient",data:"I'm proficient in other languages besides my main. I can work well with NodeJS, and I understand many of the concepts in it such as callbacks, promises, and async/await. I can also work with SQL databases, but my main focus is on Postgres. I also really enjoy drinking water, and I can drink a whole glass in 6 seconds."},{name:"Beginner",data:"There are a few languages that I'm not so good at, but can still use. Before I used Vue, I used Angular, and my knowledge of that is rusty at best. I also have worked with C, but I haven't really used it for any projects. I'm decent at Git, and I can do things like pull requests, rebases, etc. I also use TypeScript a lot, I'm not great at it by any means, and the types system is still magical to me, but I use it in almost all my projects."}],pictures:[[],[{name:"Vue",color:"#41B883",icon:'["fab", "vuejs"]'},{name:"HTML",color:"#E44D26",icon:'["fab", "html5"]'},{name:"CSS",color:"#264de4",icon:'["fab", "css3-alt"]'},{name:"JS",color:"#F0DB4F",icon:'["fab", "js"]'}],[{name:"NodeJS",color:"#68A063",icon:'["fab", "node-js"]'},{name:"Water",color:"#61dbfb",icon:'["fas", "glass-whiskey"]'}],[{name:"Angular",color:"#B52E31",icon:'["fab", "angular"]'},{name:"C",color:"#3949AB",icon:'["fab", "cuttlefish"]'},{name:"Git",color:"#F1502F",icon:'["fab", "git-alt"]'}]]}}),a("br"),a("br"),a("h2",{staticStyle:{"font-size":"40px"}},[t._v("Portfolio")]),a("div",{attrs:{id:"projectDivs"}},[a("ProjectCard",{attrs:{backgroundUrl:t.petrisIcon,hoverHeader:"Petris",hoverText:"A web version of Tetris with a lot of changes. It's a research project for the P vs NP problem.",clickUrl:"http://petris.herokuapp.com"}}),a("ProjectCard",{attrs:{backgroundUrl:t.waterdropIcon,hoverHeader:"This site!",hoverText:"This site is actually a finished front end project, and it's the project that I'm the most proud of my design for.",clickUrl:"/"}}),a("ProjectCard",{attrs:{backgroundUrl:"https://www.jing.fm/clipimg/detail/221-2218831_clip-art-stock-vector-trading-chart-stock-market.png",hoverHeader:"Skymarket",hoverText:"An auction house analyzer for the game Hypixel Skyblock. Granted, I didn't make the backend, but I did a lot of the front-end and data analysis.",clickUrl:"http://xwafl.github.io/skymarket"}})],1),a("br"),a("br"),a("br")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"titlecard"},[a("div",{staticClass:"title",attrs:{id:"title"}},[a("div",{staticClass:"fadeIn"},[a("h2",{staticClass:"name"},[t._v(t._s(t.name))]),a("h4",{staticClass:"subtitle"},[t._v("Web Developer")])])]),a("div",{staticClass:"parallax"})])},c=[],s=n["a"].extend({name:"TitleCard",props:{name:String},methods:{handleScroll(){const t=document.getElementById("title");t.style.opacity=(1-window.scrollY/+t.clientHeight/2).toString()}},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)}}),l=s,d=(a("e1a8"),a("2877")),u=Object(d["a"])(l,i,c,!1,null,"46862dc6",null),f=u.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aboutme"},[n("div",{staticClass:"lefthalf"},[n("h2",{staticClass:"aboutmetitle"},[t._v(t._s(t.name))]),n("img",{attrs:{id:"profileimg",src:a("5efc")}})]),n("Divider",{attrs:{dividerType:"regular"}}),t._m(0)],1)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"righthalf"},[a("h2",{staticClass:"whoami"},[t._v("Who am I?")]),a("p",{staticClass:"mydesc"},[t._v("I'm a developer with a focus on front-end. My specialty is in JavaScript although I do know some other languages such as TypeScript and C. I'm always looking to learn something new!")])])}],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divider",class:{regularDivider:"regular"===t.dividerType,horizontalDivider:"horizontal"===t.dividerType}})},v=[],g={name:"Divider",props:{dividerType:String}},b=g,w=(a("2692"),Object(d["a"])(b,m,v,!1,null,null,null)),y=w.exports,k=n["a"].extend({name:"AboutMe",props:{name:String},components:{Divider:y}}),_=k,C=(a("f27b"),Object(d["a"])(_,p,h,!1,null,"258d02f0",null)),I=C.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projectCard",style:{backgroundImage:"url("+t.backgroundUrl+")"}},[a("div",{staticClass:"projectDetails",on:{click:function(e){return t.redirectUrl(t.clickUrl,"main")}}},[a("h2",{staticClass:"projectHeader"},[t._v(t._s(t.hoverHeader))]),a("p",{staticClass:"projectDesc"},[t._v(t._s(t.hoverText))]),t.usingMobile?a("div",{staticClass:"projectClick",on:{click:function(e){return t.redirectUrl(t.clickUrl,"smol")}}},[t._v(" Link ")]):t._e()])])},j=[],x=a("9029"),A=n["a"].extend({name:"ProjectCard",props:{backgroundUrl:String,hoverHeader:String,hoverText:String,clickUrl:String},data:()=>({screenWidth:Number,usingMobile:x["isMobile"]}),methods:{redirectUrl(t,e){"main"===e&&!1===this.usingMobile&&(window.location.href=t),"smol"===e&&(window.location.href=t)},getWidth(){return this.screenWidth=screen.width,this.screenWidth}}}),O=A,T=(a("789d"),Object(d["a"])(O,S,j,!1,null,"01152ccb",null)),D=T.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"socialLinks"},[a("h3",{staticClass:"socialLinksHeader"},[t._v("Contact me!")]),a("a",{attrs:{href:"https://github.com/xWafl"}},[a("font-awesome-icon",{staticClass:"socialMediaIcon github",attrs:{icon:["fab","github"]}})],1),a("a",{attrs:{href:"https://twitter.com/imperial_water"}},[a("font-awesome-icon",{staticClass:"socialMediaIcon twitter",attrs:{icon:["fab","twitter"]}})],1),a("a",{attrs:{href:"https://www.twitch.tv/imperialwaffle521/"}},[a("font-awesome-icon",{staticClass:"socialMediaIcon twitch",attrs:{icon:["fab","twitch"]}})],1),a("a",{attrs:{href:"https://www.reddit.com/user/thedankiestmanalive"}},[a("font-awesome-icon",{staticClass:"socialMediaIcon reddit",attrs:{icon:["fab","reddit"]}})],1),a("a",{attrs:{href:"https://discordapp.com/users/371244109383335937"}},[a("font-awesome-icon",{staticClass:"socialMediaIcon discord",attrs:{icon:["fab","discord"]}})],1)])},E=[],P=a("ecee"),U=a("f2d1"),H=a("ad3d");P["c"].add(U["a"]),n["a"].component("font-awesome-icon",H["a"]);var L=n["a"].extend({name:"SocialLinks"}),J=L,$=(a("d580"),Object(d["a"])(J,M,E,!1,null,null,null)),W=$.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"accordion"},[a("div",{staticClass:"accordionSelectors"},t._l(t.accordionData,(function(e){return a("AccordionElement",{key:e.name,style:[t.accordionData.indexOf(e)+1===t.currentAccordion?{backgroundColor:"#ccc"}:"background-color: #fff"],attrs:{id:"accordion-"+e.name,title:e.name},nativeOn:{click:function(a){t.updateCurrent(t.accordionData.indexOf(e)+1)}}},[t._v(" "+t._s(e)+" ")])})),1),a("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[a("div",{key:t.accordionDataEntry.data,staticClass:"accordionData",style:[0===t.currentAccordion?{"background-color":"#eee"}:{"background-color":"#ccc"}]},[a("div",{staticClass:"accordionDataIcons"},[t._l(t.pictures[t.currentAccordion],(function(t){return a("font-awesome-icon",{key:t.name,staticClass:"skillIcon",style:{color:t.color},attrs:{icon:JSON.parse(t.icon)}})})),2===t.currentAccordion?a("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:"https://www.vectorlogo.zone/logos/electronjs/electronjs-icon.svg"}}):t._e(),2===t.currentAccordion?a("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:"https://www.svgrepo.com/show/7344/sql-file-format-symbol.svg"}}):t._e(),3===t.currentAccordion?a("img",{attrs:{src:"https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"}}):t._e()],2),a("div",{staticClass:"accordionDataMessages"},[t._v(" "+t._s(t.accordionDataEntry.data)+" ")])])])],1)},z=[],N=a("c074"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"accordionElement"},[a("h3",[t._v(t._s(t.title))])])},q=[],G={name:"AccordionElement",props:{title:String}},V=G,Q=(a("dca1"),Object(d["a"])(V,F,q,!1,null,"6650b789",null)),Y=Q.exports;P["c"].add(N["a"]),P["c"].add(U["a"]),n["a"].component("font-awesome-icon",H["a"]);var K={name:"Accordion",components:{AccordionElement:Y},props:{accordionData:Array,pictures:Array},computed:{accordionDataEntry:function(){return this.currentAccordion>0?this.accordionData[this.currentAccordion-1]:{data:"I've got a wide skill set with varying degrees of proficiency. I'm always looking to add more skills, and I try to learn something new every day."}}},data:function(){return{currentAccordion:0}},methods:{updateCurrent:function(t){this.currentAccordion!==t?this.currentAccordion=t:this.currentAccordion=0}}},R=K,X=(a("bf85"),Object(d["a"])(R,B,z,!1,null,"5ce266fb",null)),Z=X.exports,tt={name:"App",components:{TitleCard:f,AboutMe:I,SocialLinks:W,ProjectCard:D,Accordion:Z},data:function(){return{name:"ImperialWater"}},computed:{waterdropIcon:function(){return a("5efc")},petrisIcon:function(){return a("ef4e")}}},et=tt,at=(a("034f"),Object(d["a"])(et,r,o,!1,null,null,null)),nt=at.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(nt)}}).$mount("#app")},"5efc":function(t,e,a){t.exports=a.p+"img/waterdrop.b793bf40.png"},"789d":function(t,e,a){"use strict";var n=a("26eb"),r=a.n(n);r.a},"85ec":function(t,e,a){},"8feb":function(t,e,a){},b51d:function(t,e,a){},bf85:function(t,e,a){"use strict";var n=a("e356"),r=a.n(n);r.a},d580:function(t,e,a){"use strict";var n=a("35c3"),r=a.n(n);r.a},dca1:function(t,e,a){"use strict";var n=a("34f3"),r=a.n(n);r.a},e1a8:function(t,e,a){"use strict";var n=a("108d"),r=a.n(n);r.a},e356:function(t,e,a){},ef4e:function(t,e,a){t.exports=a.p+"img/512x512.b23927d3.png"},f27b:function(t,e,a){"use strict";var n=a("8feb"),r=a.n(n);r.a}});
//# sourceMappingURL=app.ae82779d.js.map