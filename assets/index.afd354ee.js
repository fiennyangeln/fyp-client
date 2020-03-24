(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{386:function(e,t,a){e.exports=a(612)},391:function(e,t,a){},612:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(14),l=(a(391),a(287)),i=a(689),c=a(282),s=a(323),u=a(140),d=a(269),m=a(88),E=a(156),g=a(326),p=a(200),T=a(331),b=a.n(T),h=a(332),R=a.n(h),C=a(333),f=a.n(C),_=a(27),A=a(72),I=a(124);const k=e=>{switch(e){case"xs":return 400;case"sm":return 600;case"md":return 900;case"lg":return 1200;case"xl":return 1860;default:return 1300}},N=e=>{switch(e){case"xs":return 75;case"sm":case"md":return 100;case"lg":return 180;case"xl":default:return 250}};var D=Object(I.a)()((function(e){const{data:t,width:a}=e,r=k(a),n=N(a);return t&&o.a.createElement(d.a,{item:!0},o.a.createElement(A.a,null,o.a.createElement(u.a,{align:"center",variant:"h5",gutterBottom:!0},"Error Graph"),o.a.createElement(_.d,{width:r,height:n,data:t,margin:{right:16,left:0},syncId:"epoch"},o.a.createElement(_.a,{strokeDasharray:"3 3"}),o.a.createElement(_.f,{dataKey:"x",minTickGap:50}),o.a.createElement(_.g,null),o.a.createElement(_.e,{wrapperStyle:{color:"#123123"}}),o.a.createElement(_.b,{verticalAlign:"top"}),o.a.createElement(_.c,{type:"monotone",name:"Training Error",dataKey:"training_error",stroke:"#8884d8",dot:!1,strokeWidth:2}),o.a.createElement(_.c,{type:"monotone",name:"Testing Error",dataKey:"testing_error",stroke:"#82ca9d",dot:!1,strokeWidth:2}))))})),y=a(343),M=a.n(y),v=a(330),S=a(5),O=a(279),P=a(344),Y=a.n(P),w=a(345),x=a.n(w);const H=Object(S.a)({root:{color:"#4177a5",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus,&:hover,&$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(v.a),B={shape:"rect",shapeProps:{width:20,height:20,x:-10,y:-10}},K=Object(O.a)(e=>({root:{padding:2*e.spacing.unit},appIcon:{fill:e.palette.text.primary},slider:{flexGrow:1,marginLeft:2*e.spacing.unit}}));function L(e,t){const a=Object.keys(t).filter(t=>t<=e);return a.length?a[a.length-1]:0}function X(e){const t=K(),[a,n]=Object(r.useState)(0),[l,i]=Object(r.useState)(20),[c,s]=Object(r.useState)(!1),{networks:u,numberOfEpoch:m}=e,E=Object(r.useCallback)((e,t)=>{i(t),u&&n(L(t,u))},[u]),g=function(e,t){const a=o.a.useRef(),r=o.a.useRef(e);return o.a.useEffect(()=>{r.current=e},[e]),o.a.useEffect(()=>{if("number"==typeof t)return a.current=window.setInterval(()=>r.current(),t),()=>window.clearInterval(a.current)},[t]),a}(()=>{l<m?(i(l+1),n(L(l+1,u))):window.clearInterval(g.current)},c?500:null);return u&&a in u?o.a.createElement(A.a,{variant:"outlined",classes:{root:t.root}},o.a.createElement("div",{id:"treeWrapper",style:{width:"100%",height:"80vh"}},o.a.createElement(M.a,{separation:{siblings:.5,nonSiblings:1.5},data:u[a],collapsible:!1,nodeSvgShape:B})),o.a.createElement(d.a,{container:!0,alignItems:"center"},o.a.createElement(d.a,{item:!0},o.a.createElement(p.a,{onClick:()=>{s(!c)}},c?o.a.createElement(x.a,{className:t.appIcon,size:30}):o.a.createElement(Y.a,{className:t.appIcon,size:30}))),o.a.createElement(d.a,{item:!0,className:t.slider},o.a.createElement(H,{onChangeCommitted:E,valueLabelDisplay:"auto","aria-label":"pretto slider",value:l,max:m})))):null}var j=Object(I.a)()((function(e){const{dataKey:t,title:a,data:r,width:n}=e,l=k(n),i=N(n);return r&&o.a.createElement(d.a,{container:!0,direction:"column",alignContent:"center"},o.a.createElement(A.a,null,o.a.createElement(u.a,{align:"center",variant:"h5",gutterBottom:!0},a),o.a.createElement("div",null,o.a.createElement(_.d,{width:l,height:i,data:r,margin:{right:16,left:0},syncId:"epoch"},o.a.createElement(_.a,{strokeDasharray:"3 3"}),o.a.createElement(_.f,{dataKey:"x",minTickGap:50}),o.a.createElement(_.g,null),o.a.createElement(_.e,{wrapperStyle:{color:"#123123"}}),o.a.createElement(_.c,{type:"monotone",dataKey:t,stroke:"#8884d8",dot:!1,strokeWidth:2,name:a})))))})),W=a(346),G=a.n(W),F=a(283);const z=Object(m.makeStyles)(e=>({input:{marginRight:e.spacing.unit},appIcon:{fill:e.palette.common.white},button:{color:e.palette.common.white}}));function U(e){const t=z();return o.a.createElement("div",null,o.a.createElement("input",{accept:".json",className:t.input,style:{display:"none"},id:"raised-button-file",type:"file",onChange:t=>{const a=t.target.files[0],r=new FileReader;r.readAsText(a),r.onload=t=>{e.onFileChange(JSON.parse(t.target.result))},r.onerror=()=>{e.onFileChange(null)}}}),o.a.createElement("label",{htmlFor:"raised-button-file"},o.a.createElement(F.a,{variant:"raised",component:"span",className:t.button,startIcon:o.a.createElement(G.a,{className:t.appIcon})},"Upload")))}var J=Object(r.createContext)(Function.prototype),$=a(131),V=a(63),q=a(349),Q=a.n(q),Z=a(111),ee=a.n(Z),te=a(110),ae=a.n(te),re=a(348),oe=a.n(re),ne=a(155),le=a.n(ne);const ie={WHITE:"#fff",BLACK:"#000",TEN_PERCENT_WHITE:Object(V.fade)("#fff",.1),TEN_PERCENT_BLACK:Object(V.fade)("#000",.1),DARK_THEME_BACKGROUND:"#12202c",PRIMARY_DARK:"#1b2a39",PRIMARY_LIGHT:"#fafafa",PRIMARY_TEXT_DARK:"rgba(255, 255, 255, 0.9)",PRIMARY_TEXT_LIGHT:"rgba(0, 0, 0, 0.9)",SECONDARY_TEXT_DARK:"rgba(255, 255, 255, 0.7)",SECONDARY_TEXT_LIGHT:"rgba(0, 0, 0, 0.7)",SECONDARY:"#4177a5",DRAWER_WIDTH:240,DIVIDER:"rgba(0, 0, 0, 0.12)",TONAL_OFFSET:.2},ce={fontFamily:"Roboto300, sans-serif"},se={fontFamily:"Roboto400, sans-serif"},ue={fontFamily:"Roboto500, sans-serif"},de={main:le.a[500],dark:le.a[700],contrastText:ie.PRIMARY_TEXT_DARK},me={main:ae.a[500],dark:ae.a[700],light:ae.a[200],contrastText:ie.PRIMARY_TEXT_LIGHT},Ee={main:ee.a[500],dark:ee.a[700],light:ee.a[300],contrastText:ie.PRIMARY_TEXT_DARK},ge=e=>{const t=e?ie.PRIMARY_DARK:ie.PRIMARY_LIGHT,a=e?ie.PRIMARY_TEXT_DARK:ie.PRIMARY_TEXT_LIGHT,r=e?ie.SECONDARY_TEXT_DARK:ie.SECONDARY_TEXT_LIGHT,o=e?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.5)",n={H1:ce,H2:se,H3:se,H4:se,H5:se,H6:ue,SUBTITLE1:se,SUBTITLE2:ue,BODY1:se,BODY2:se,CAPTION:se,BUTTON:ue},l=300,i=400,c=500,s=600;return{palette:{type:e?"dark":"light",background:{default:e?ie.DARK_THEME_BACKGROUND:"#fff",paper:t},primary:{main:t},secondary:{main:ie.SECONDARY},error:{...ee.a,...Ee},success:{...le.a,...de},warning:{...ae.a,...me},info:{...oe.a},text:{primary:a,secondary:r,disabled:e?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.5)",hint:o,icon:e?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.5)",active:e?"rgba(255, 255, 255, 0.9)":"rgba(0, 0, 0, 0.9)",inactive:e?"rgba(255, 255, 255, 0.4)":"rgba(0, 0, 0, 0.4)"}},typography:{...se,h1:n.H1,h2:n.H2,h3:n.H3,h4:n.H4,h5:n.H5,h6:n.H6,subtitle1:n.SUBTITLE1,subtitle2:n.SUBTITLE2,body1:n.BODY1,body2:n.BODY2,caption:n.CAPTION,button:n.BUTTON,fontWeightLight:l,fontWeightRegular:i,fontWeightMedium:c,fontWeightDark:s},spacing:8,drawerWidth:ie.DRAWER_WIDTH,docsDrawerWidth:ie.DRAWER_WIDTH+125,mixins:{link:{color:a,textDecoration:"none",borderBottom:"2px solid ".concat(Object(V.lighten)(ie.SECONDARY,ie.TONAL_OFFSET)),"&:hover":{borderBottom:"2px solid ".concat(ie.SECONDARY)}},highlight:{backgroundColor:e?ie.TEN_PERCENT_WHITE:ie.TEN_PERCENT_BLACK,fontFamily:'Consolas, "Liberation Mono", Menlo, Courier, monospace',lineHeight:1.4,display:"inline-block",fontSize:"0.875rem"},listItemButton:{"& svg":{transition:Q.a.create("fill"),fill:Object(V.lighten)(ie.PRIMARY_TEXT_LIGHT,.4)},"&:hover svg, &:focus svg":{fill:a}},hover:{"&:hover, &:focus":{textDecoration:"none",backgroundColor:Object(V.fade)(a,.08),"@media (hover: none)":{backgroundColor:"transparent"},"&:disabled":{backgroundColor:"transparent"},outline:"none"}},fab:{position:"fixed",bottom:16,right:24,"& .mdi-icon":{fill:"white"}},fabIcon:{"& .mdi-icon":{fill:"white"}},secondaryIcon:{backgroundColor:ie.SECONDARY,"&:hover":{backgroundColor:Object(V.fade)(ie.SECONDARY,.9)},"& svg":{backgroundColor:"transparent"}},successIcon:{backgroundColor:de.main,"&:hover":{backgroundColor:de.dark},"& svg":{backgroundColor:"transparent"}},warningIcon:{backgroundColor:me.main,"&:hover":{backgroundColor:me.dark},"& svg":{backgroundColor:"transparent"}},errorIcon:{backgroundColor:Ee.main,"&:hover":{backgroundColor:Ee.dark},"& svg":{backgroundColor:"transparent"}},unorderedList:{wordWrap:"break-word",listStyleType:"square",paddingLeft:32},actionButton:{zIndex:1050}},overrides:{MuiTypography:{root:{color:a}},MuiTableSortLabel:{icon:{fontSize:"1rem"}},MuiFormLabel:{filled:{...ue,color:e?ie.PRIMARY_TEXT_DARK:ie.PRIMARY_TEXT_LIGHT}},MuiListSubheader:{root:{...ue,color:e?ie.PRIMARY_TEXT_DARK:ie.PRIMARY_TEXT_LIGHT}},MuiButton:{sizeSmall:{minWidth:36}},MuiFab:{sizeSmall:{minWidth:36},extended:{height:36}},MuiCircularProgress:{colorPrimary:{color:e?ie.PRIMARY_LIGHT:ie.PRIMARY_DARK}},MuiMobileStepper:{dotActive:{backgroundColor:e?"white":"#000"}},MuiTableCell:{root:{borderBottom:"1px solid ".concat(e?ie.TEN_PERCENT_WHITE:ie.TEN_PERCENT_BLACK),whiteSpace:"nowrap"}},MuiPickersToolbar:{toolbar:{backgroundColor:ie.SECONDARY}},MuiPickersToolbarText:{toolbarTxt:{color:"rgba(255, 255, 255, 0.54)"},toolbarBtnSelected:{color:ie.PRIMARY_TEXT_DARK}},MuiPickersToolbarButton:{toolbarBtn:{"&:hover, &:focus":{textDecoration:"none",backgroundColor:Object(V.fade)(a,.08),"@media (hover: none)":{backgroundColor:"transparent"},"&:disabled":{backgroundColor:"transparent"},outline:"none"}}},MuiPickersYear:{root:{"&:focus":{color:e?ie.PRIMARY_TEXT_DARK:ie.PRIMARY_TEXT_LIGHT},"&$yearSelected":{color:e?ie.PRIMARY_TEXT_DARK:ie.PRIMARY_TEXT_LIGHT}}},MuiPickersClock:{pin:{backgroundColor:ie.SECONDARY}},MuiPickersClockPointer:{pointer:{backgroundColor:ie.SECONDARY},thumb:{borderColor:ie.SECONDARY,backgroundColor:ie.PRIMARY_TEXT_DARK},noPoint:{backgroundColor:ie.SECONDARY}},MuiPickersClockNumber:{clockNumberSelected:{color:"#fff"}},MuiPickerDTTabs:{tabs:{color:"#fff",backgroundColor:ie.SECONDARY,"& .MuiTabs-indicator":{backgroundColor:e?"#fff":"#000"}}},MuiListItem:{root:{userSelect:"text"}},MuiChip:{label:{userSelect:"text"},root:{userSelect:"text"}},MuiPickersCalendarHeader:{iconButton:{backgroundColor:"transparent","& span":{backgroundColor:"transparent"}}},MuiPickersDay:{daySelected:{backgroundColor:ie.SECONDARY,color:ie.PRIMARY_TEXT_DARK,"&:hover":{backgroundColor:ie.SECONDARY}},current:{color:e?ie.PRIMARY_TEXT_DARK:ie.PRIMARY_TEXT_LIGHT}},MuiPickersModal:{dialogAction:{color:e?ie.PRIMARY_TEXT_DARK:ie.PRIMARY_TEXT_LIGHT,"&:hover":{backgroundColor:e?ie.TEN_PERCENT_WHITE:ie.TEN_PERCENT_BLACK}},withAdditionalAction:{"& button":{color:e?ie.PRIMARY_TEXT_DARK:ie.PRIMARY_TEXT_LIGHT,"&:hover":{backgroundColor:e?ie.TEN_PERCENT_WHITE:ie.TEN_PERCENT_BLACK}}}},MuiDrawer:{paper:{maxWidth:500}},MuiExpansionPanelSummary:{root:{"&$focused":{backgroundColor:ie.TEN_PERCENT_WHITE}}},MuiMenuItem:{root:{color:e?ie.PRIMARY_TEXT_DARK:ie.PRIMARY_TEXT_LIGHT}}}}},pe=Object($.a)(ge(!0));var Te={lightTheme:Object($.a)(ge(!1)),darkTheme:pe,styleguide:{StyleGuide:{root:{overflowY:"scroll",minHeight:"100vh",backgroundColor:ie.DARK_THEME_BACKGROUND,color:pe.palette.text.primary}},fontFamily:{base:pe.typography.fontFamily},fontSize:{base:pe.typography.fontSize-1,text:pe.typography.fontSize,small:pe.typography.fontSize-2},color:{base:pe.palette.text.primary,link:pe.palette.text.primary,linkHover:pe.palette.text.primary,border:ie.DIVIDER,baseBackground:ie.DARK_THEME_BACKGROUND,sidebarBackground:pe.palette.primary.main,codeBackground:pe.palette.primary.main},sidebarWidth:ie.DRAWER_WIDTH,maxWidth:"100vw"}},be=a(289),he=a(291),Re=a(293),Ce=a(350),fe=a.n(Ce);const _e=Object(m.makeStyles)(e=>({closeIcon:{position:"absolute",right:e.spacing(1),top:e.spacing(1)}}));function Ae(e){const{open:t,onClose:a}=e,r=_e();return o.a.createElement(be.a,{open:t,onClose:a,scroll:"paper"},o.a.createElement(Re.a,null,"Autonomous CNN",o.a.createElement(p.a,{"aria-label":"close",onClick:a,className:r.closeIcon},o.a.createElement(fe.a,null))),o.a.createElement(he.a,{dividers:!0},o.a.createElement(u.a,{gutterBottom:!0},"Autonomous CNN is a data-driven method to learn CNN architecture. It has been implemented to solve image classification problem on several widely used datasets, such as MNIST, MNIST Fashion, MNIST rot-back-image, CIFAR, and ADHD-200. Out of all these datasets, it achieved a state-of-the-art accuracy on MNIST rot-back-image and ADHD-200."),o.a.createElement(u.a,{gutterBottom:!0},"The initialization consists of 1 CNN layer, followed by 1 max-pooling layer and a fully connected layer. After that, it goes through a CNN growing process, kernel pruning process, and parameter optimization process before achieving the final architecture."),o.a.createElement(u.a,{gutterBottom:!0},"This website aims to visualize the learning process of the AutoCNN.")))}const Ie=Object(m.makeStyles)(e=>({container:{marginTop:60,padding:2*e.spacing.unit},title:{flexGrow:1,color:ie.PRIMARY_TEXT_DARK},appBar:{position:"fixed",backgroundColor:e.palette.secondary.dark,zIndex:e.zIndex.drawer+1},appIcon:{fill:e.palette.common.white},graph:{marginTop:2*e.spacing.unit}}));var ke=function(){const e=Ie(),[t,a]=Object(r.useState)(null),[n,l]=Object(r.useState)(!1),i=Object(E.a)(),m=Object(r.useContext)(J);return o.a.createElement("div",null,o.a.createElement(c.a,{className:e.appBar},o.a.createElement(s.a,null,o.a.createElement(u.a,{variant:"h6",className:e.title},"Autonomous CNN"),o.a.createElement(U,{onFileChange:a}),o.a.createElement(g.a,{placement:"bottom",title:"Toggle light/dark theme"},o.a.createElement(p.a,{className:e.leftAppBarButton,onClick:()=>{m("dark"===i.palette.type?"light":"dark")}},"dark"===i.palette.type?o.a.createElement(b.a,{className:e.appIcon}):o.a.createElement(R.a,{className:e.appIcon}))),o.a.createElement(g.a,{placement:"bottom",title:"Documentation"},o.a.createElement(p.a,{onClick:()=>{l(!0)}},o.a.createElement(f.a,{className:e.appIcon}))))),o.a.createElement("main",{className:e.container},o.a.createElement(Ae,{open:n,onClose:()=>{l(!1)}}),o.a.createElement(X,{networks:t&&t.networkData?t.networkData:null,numberOfEpoch:t?t.lineChartData.length:0}),o.a.createElement(d.a,{container:!0,justify:"center"},o.a.createElement(d.a,{container:!0,item:!0,xs:12,sm:12,md:12,lg:12,justify:"center",className:e.graph},o.a.createElement(D,{data:t&&t.lineChartData?t.lineChartData:null})),o.a.createElement(d.a,{item:!0,xs:12,sm:12,md:12,lg:12,className:e.graph},o.a.createElement(j,{title:"FSS Score",data:t&&t.lineChartData?t.lineChartData:null,dataKey:"mean_correlation_score_acc"})),o.a.createElement(d.a,{item:!0,xs:12,sm:12,md:12,lg:12,className:e.graph},o.a.createElement(j,{title:"Convolutional Layer Evolution",data:t&&t.lineChartData?t.lineChartData:null,dataKey:"conv_layer_evo"})))))};var Ne=()=>{const[e,t]=Object(r.useState)("light");return o.a.createElement("div",{className:"App"},o.a.createElement(i.a,{theme:"dark"===e?Te.darkTheme:Te.lightTheme},o.a.createElement(l.a,null),o.a.createElement(J.Provider,{value:t},o.a.createElement(ke,null))))};Object(n.render)(o.a.createElement(Ne,null),document.getElementById("root"))}},[[386,1,2]]]);