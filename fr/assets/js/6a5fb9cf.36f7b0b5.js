(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9950],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),c=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return o.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(f,i(i({ref:e},u),{},{components:n})):o.createElement(f,i({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68747:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var o=n(22122),a=n(19756),r=(n(67294),n(3905)),i=["components"],l={id:"one-to-many-relations",title:"One to Many relations"},s=void 0,c={unversionedId:"tutorials/relations/one-to-many-relations",id:"tutorials/relations/one-to-many-relations",isDocsHomePage:!1,title:"One to Many relations",description:"This tutorial will show you how easy it can be to include One to Many relations in 4D for iOS.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/relations/one-to-many-relations.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-relations",permalink:"/go-mobile/fr/docs/tutorials/relations/one-to-many-relations",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/relations/one-to-many-relations.md",version:"current",frontMatter:{id:"one-to-many-relations",title:"One to Many relations"},sidebar:"tutorials",previous:{title:"Many to One relations",permalink:"/go-mobile/fr/docs/tutorials/relations/many-to-one-relations"},next:{title:"One to Many - Title definition",permalink:"/go-mobile/fr/docs/tutorials/relations/one-to-many-title-definition"}},u=[{value:"Structure section",id:"structure-section",children:[]},{value:"Labels &amp; Icons section",id:"labels--icons-section",children:[]},{value:"Forms section",id:"forms-section",children:[]},{value:"Build and Run",id:"build-and-run",children:[]}],p={toc:u};function m(t){var e=t.components,l=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial will show you how easy it can be to include One to Many relations in 4D for iOS."),(0,r.kt)("p",null,"Let's get started by downloading the Starter project:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-OneToManyRelations/archive/c006015afeb0e134d872152f53b8cd5e4dcb59bb.zip"},"Starter project")),(0,r.kt)("p",null,"In this tutorial, we are going to build a colorful ",(0,r.kt)("strong",{parentName:"p"},"Task app")," using 4D for iOS."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Task App Final result",src:n(94182).Z})),(0,r.kt)("p",null,"But first, let's have a look at the structure of our database:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select link from structure section",src:n(20641).Z})),(0,r.kt)("p",null,"As you can see, there is a One to Many link named ",(0,r.kt)("strong",{parentName:"p"},"tasks")," that we will use in our iOS app to display the employees'(",(0,r.kt)("strong",{parentName:"p"},"One"),") tasks(",(0,r.kt)("strong",{parentName:"p"},"to Many"),")."),(0,r.kt)("p",null,"Now, go straight to Open menu > Mobile project... to select ",(0,r.kt)("em",{parentName:"p"},"Time Keeper")," and go to the ",(0,r.kt)("strong",{parentName:"p"},"Structure section"),"."),(0,r.kt)("h2",{id:"structure-section"},"Structure section"),(0,r.kt)("p",null,"You can see the ",(0,r.kt)("strong",{parentName:"p"},"tasks relation")," we have seen earlier... Publish it !"),(0,r.kt)("p",null,"This will now operate as any other field for the rest of the app creation process."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Structure section Relations properties",src:n(42115).Z})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"On mouse over, a tip displays the table name originating the relation."))),(0,r.kt)("h2",{id:"labels--icons-section"},"Labels & Icons section"),(0,r.kt)("p",null,"The One to Many relation is now available in the ",(0,r.kt)("strong",{parentName:"p"},"Labels and Icons")," section."),(0,r.kt)("p",null,"It is important to know that including a One to Many relation will create a button into the genrated iOS app."),(0,r.kt)("p",null,"So, in the Labels & Icons section you will define:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a button Label"),(0,r.kt)("li",{parentName:"ul"},"a button icon"),(0,r.kt)("li",{parentName:"ul"},"a title that will be displayed in the destination view (to indicate where you come from for example).")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Labels &amp; Icons section Relations properties",src:n(79795).Z})),(0,r.kt)("h2",{id:"forms-section"},"Forms section"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to the Forms section and drop the ",(0,r.kt)("em",{parentName:"li"},"tasks")," relation on the Employee Task Detail form.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Related field in Forms section",src:n(94764).Z})),(0,r.kt)("h2",{id:"build-and-run"},"Build and Run"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the Employee List form, click on one employee"),(0,r.kt)("li",{parentName:"ol"},"This will open the employee's detail form, where you should see a new ",(0,r.kt)("strong",{parentName:"li"},"Relation button")," !"),(0,r.kt)("li",{parentName:"ol"},"Click on this Relation button to display the employee's tasks.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Related field in Forms section",src:n(47254).Z})),(0,r.kt)("p",null,"And voil\xe0 ! This is how One to Many relations work in 4D for iOS !"),(0,r.kt)("p",null,"Download the completed project:"),(0,r.kt)("div",null,(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-OneToManyRelations/releases/latest/download/tutorial-OneToManyRelations.zip"},"Completed project")))}m.isMDXComponent=!0},94764:function(t,e,n){"use strict";e.Z=n.p+"assets/images/1-to-n-relations-forms-section-eaaf6fc4d1b5e4abc4bdc7b233c9e46b.png"},94182:function(t,e,n){"use strict";e.Z=n.p+"assets/images/4D-for-iOS-dark-mode-card-relation-ios-13-ae79febdfa2739db76aeec303329d6d2.gif"},20641:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Database-1-to-N-relations-4D-for-iOS-e367b692bf24073c368caea6ea463222.png"},47254:function(t,e,n){"use strict";e.Z=n.p+"assets/images/One-to-n-relations-task-ios-app-e63bb9be3b7cefc054e93c719581324d.png"},79795:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Relations-properties-Labels-icons-section-4D-for-iOS-af246bee86dd0780f38c6c51f7c1cc71.png"},42115:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Structure-section-relations-4D-for-iOS-5d5469663dad4dff95bedeb54f577eb5.png"}}]);