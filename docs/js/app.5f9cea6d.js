(function(t){function e(e){for(var i,n,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&f.push(s[n][0]),s[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(i=!1)}i&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},r=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/portfolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),s=a.n(i);s.a},"108d":function(t,e,a){},2692:function(t,e,a){"use strict";var i=a("b51d"),s=a.n(i);s.a},"26eb":function(t,e,a){},"35c3":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("TitleCard",{attrs:{name:t.name}}),a("AboutMe",{attrs:{name:t.name}}),a("SocialLinks"),a("br"),a("Skills"),a("br"),a("br"),a("h2",{staticStyle:{"font-size":"40px"}},[t._v("Portfolio")]),a("div",{attrs:{id:"projectDivs"}},[a("ProjectCard",{attrs:{backgroundUrl:t.petrisIcon,hoverHeader:"Petris",hoverText:"A web version of Tetris with a lot of changes. It's a research project for the P vs NP problem.",clickUrl:"http://petris.herokuapp.com"}}),a("ProjectCard",{attrs:{backgroundUrl:t.waterdropIcon,hoverHeader:"This site!",hoverText:"This site is actually a finished front end project, and it's the project that I'm the most proud of my design for.",clickUrl:"/"}}),a("ProjectCard",{attrs:{backgroundUrl:"https://www.jing.fm/clipimg/detail/221-2218831_clip-art-stock-vector-trading-chart-stock-market.png",hoverHeader:"Skymarket",hoverText:"An auction house analyzer for the game Hypixel Skyblock. Granted, I didn't make the backend, but I did a lot of the front-end and data analysis.",clickUrl:"http://xwafl.github.io/skymarket"}})],1),a("br"),a("br")],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"titlecard"},[a("div",{staticClass:"title",attrs:{id:"title"}},[a("div",{staticClass:"fadeIn"},[a("h2",{staticClass:"name"},[t._v(t._s(t.name))]),a("h4",{staticClass:"subtitle"},[t._v("Web Developer")])])]),a("div",{staticClass:"parallax"})])},o=[],c=i["a"].extend({name:"TitleCard",props:{name:String},methods:{handleScroll(){const t=document.getElementById("title");t.style.opacity=(1-window.scrollY/+t.clientHeight/2).toString()}},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)}}),l=c,d=(a("e1a8"),a("2877")),u=Object(d["a"])(l,n,o,!1,null,"46862dc6",null),f=u.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"aboutme"},[i("div",{staticClass:"lefthalf"},[i("h2",{staticClass:"aboutmetitle"},[t._v(t._s(t.name))]),i("img",{attrs:{id:"profileimg",src:a("5efc")}})]),i("Divider",{attrs:{dividerType:"regular"}}),t._m(0)],1)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"righthalf"},[a("h2",{staticClass:"whoami"},[t._v("Who am I?")]),a("p",{staticClass:"mydesc"},[t._v("I'm a developer with a focus on front-end. My specialty is in JavaScript although I do know some other languages such as TypeScript and C. I'm always looking to learn something new!")])])}],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divider",class:{regularDivider:"regular"===t.dividerType,horizontalDivider:"horizontal"===t.dividerType}})},m=[],b={name:"Divider",props:{dividerType:String}},g=b,w=(a("2692"),Object(d["a"])(g,v,m,!1,null,null,null)),k=w.exports,C=i["a"].extend({name:"AboutMe",props:{name:String},components:{Divider:k}}),y=C,_=(a("f27b"),Object(d["a"])(y,p,h,!1,null,"258d02f0",null)),S=_.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"skills"},[a("h2",{staticClass:"skillsHeader"},[t._v("My skills")]),a("h3",{staticClass:"skillsSubheader"},[t._v("I try to learn something new every day.")]),a("div",{staticClass:"skillChart"},[a("div",{staticClass:"skillColumns frontendSkills"},[a("h3",{staticClass:"skillMinorHeading"},[t._v("Advanced")]),a("font-awesome-icon",{staticClass:"skillIcon",staticStyle:{color:"#41B883"},attrs:{icon:["fab","vuejs"]}}),a("br"),a("font-awesome-icon",{staticClass:"skillIcon",staticStyle:{color:"#E44D26"},attrs:{icon:["fab","html5"]}}),a("br"),a("font-awesome-icon",{staticClass:"skillIcon",staticStyle:{color:"#264de4"},attrs:{icon:["fab","css3-alt"]}}),a("br"),a("font-awesome-icon",{staticClass:"skillIcon",staticStyle:{color:"#F0DB4F"},attrs:{icon:["fab","js"]}}),a("br")],1),a("div",{staticClass:"skillColumns backendSkills"},[a("h3",{staticClass:"skillMinorHeading"},[t._v("Proficient")]),a("font-awesome-icon",{staticClass:"skillIcon",staticStyle:{color:"#68A063"},attrs:{icon:["fab","node-js"]}}),a("br"),a("font-awesome-icon",{staticClass:"skillIcon",staticStyle:{color:"#61dbfb"},attrs:{icon:["fas","glass-whiskey"]}}),a("br"),a("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:"https://www.vectorlogo.zone/logos/electronjs/electronjs-icon.svg"}})],1),a("div",{staticClass:"skillColumns otherSkills"},[a("h3",{staticClass:"skillMinorHeading"},[t._v("Beginner")]),a("font-awesome-icon",{staticClass:"skillIcon",staticStyle:{color:"#B52E31"},attrs:{icon:["fab","angular"]}}),a("br"),a("font-awesome-icon",{staticClass:"skillIcon",staticStyle:{color:"#3949AB"},attrs:{icon:["fab","cuttlefish"]}}),a("br"),a("font-awesome-icon",{staticClass:"skillIcon",staticStyle:{color:"#F1502F"},attrs:{icon:["fab","git-alt"]}}),a("br"),a("img",{attrs:{src:"https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"}})],1)])])},x=[],I=a("ecee"),M=a("c074"),T=a("f2d1"),O=a("ad3d");I["c"].add(M["a"]),I["c"].add(T["a"]),i["a"].component("font-awesome-icon",O["a"]);var P=i["a"].extend({name:"Skills"}),U=P,E=(a("766a"),Object(d["a"])(U,j,x,!1,null,null,null)),H=E.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projectCard",style:{backgroundImage:"url("+t.backgroundUrl+")"}},[a("div",{staticClass:"projectDetails",on:{click:function(e){return t.redirectUrl(t.clickUrl,"main")}}},[a("h2",{staticClass:"projectHeader"},[t._v(t._s(t.hoverHeader))]),a("p",{staticClass:"projectDesc"},[t._v(t._s(t.hoverText))]),t.usingMobile?a("div",{staticClass:"projectClick",on:{click:function(e){return t.redirectUrl(t.clickUrl,"smol")}}},[t._v(" Link ")]):t._e()])])},A=[],$=a("9029"),L=i["a"].extend({name:"ProjectCard",props:{backgroundUrl:String,hoverHeader:String,hoverText:String,clickUrl:String},data:()=>({screenWidth:Number,usingMobile:$["isMobile"]}),methods:{redirectUrl(t,e){"main"===e&&!1===this.usingMobile&&(window.location.href=t),"smol"===e&&(window.location.href=t)},getWidth(){return this.screenWidth=screen.width,this.screenWidth}}}),W=L,z=(a("789d"),Object(d["a"])(W,D,A,!1,null,"01152ccb",null)),B=z.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"socialLinks"},[a("h3",{staticClass:"socialLinksHeader"},[t._v("Contact me!")]),a("a",{attrs:{href:"https://github.com/xWafl"}},[a("font-awesome-icon",{staticClass:"socialMediaIcon github",attrs:{icon:["fab","github"]}})],1),a("a",{attrs:{href:"https://twitter.com/imperial_water"}},[a("font-awesome-icon",{staticClass:"socialMediaIcon twitter",attrs:{icon:["fab","twitter"]}})],1),a("a",{attrs:{href:"https://www.twitch.tv/imperialwaffle521/"}},[a("font-awesome-icon",{staticClass:"socialMediaIcon twitch",attrs:{icon:["fab","twitch"]}})],1),a("a",{attrs:{href:"https://www.reddit.com/user/thedankiestmanalive"}},[a("font-awesome-icon",{staticClass:"socialMediaIcon reddit",attrs:{icon:["fab","reddit"]}})],1),a("a",{attrs:{href:"https://discordapp.com/users/371244109383335937"}},[a("font-awesome-icon",{staticClass:"socialMediaIcon discord",attrs:{icon:["fab","discord"]}})],1)])},J=[];I["c"].add(T["a"]),i["a"].component("font-awesome-icon",O["a"]);var N=i["a"].extend({name:"SocialLinks"}),G=N,Y=(a("d580"),Object(d["a"])(G,F,J,!1,null,null,null)),q=Y.exports,K={name:"App",components:{TitleCard:f,AboutMe:S,SocialLinks:q,Skills:H,ProjectCard:B},data:function(){return{name:"ImperialWater"}},computed:{waterdropIcon:function(){return a("5efc")},petrisIcon:function(){return a("ef4e")}}},Q=K,R=(a("034f"),Object(d["a"])(Q,s,r,!1,null,null,null)),V=R.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(V)}}).$mount("#app")},"5efc":function(t,e,a){t.exports=a.p+"img/waterdrop.b793bf40.png"},7225:function(t,e,a){},"766a":function(t,e,a){"use strict";var i=a("7225"),s=a.n(i);s.a},"789d":function(t,e,a){"use strict";var i=a("26eb"),s=a.n(i);s.a},"85ec":function(t,e,a){},"8feb":function(t,e,a){},b51d:function(t,e,a){},d580:function(t,e,a){"use strict";var i=a("35c3"),s=a.n(i);s.a},e1a8:function(t,e,a){"use strict";var i=a("108d"),s=a.n(i);s.a},ef4e:function(t,e,a){t.exports=a.p+"img/512x512.b23927d3.png"},f27b:function(t,e,a){"use strict";var i=a("8feb"),s=a.n(i);s.a}});
//# sourceMappingURL=app.5f9cea6d.js.map