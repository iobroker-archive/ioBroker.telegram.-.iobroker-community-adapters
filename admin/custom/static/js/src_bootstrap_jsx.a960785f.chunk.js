"use strict";(self.webpackChunkiobroker_admin_component_telegram=self.webpackChunkiobroker_admin_component_telegram||[]).push([["src_bootstrap_jsx"],{19634:(a,g,e)=>{e.r(g);var l=e(28437),s=e.n(l),E=e(94140),p=e(88700),P=e(40805),r=e(67085),m=e(37449),u=e(95973),d=e.n(u),x=e(21839),I=e(60556),C=Object.defineProperty,f=(i,t,n)=>t in i?C(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n,A=(i,t,n)=>(f(i,typeof t!="symbol"?t+"":t,n),n),O=(i,t,n)=>new Promise((o,v)=>{var S=L=>{try{U(n.next(L))}catch(J){v(J)}},j=L=>{try{U(n.throw(L))}catch(J){v(J)}},U=L=>L.done?o(L.value):Promise.resolve(L.value).then(S,j);U((n=n.apply(i,t)).next())});class R extends I.ConfigGeneric{constructor(t){super(t),A(this,"onAliveChanged",(n,o)=>{const v=o?o.val:!1;v!==this.state.alive&&this.setState({alive:v},()=>{v&&!this.state.initialized&&this.readData()})}),this.state={alive:!1,initialized:!1,users:[],confirm:null}}componentDidMount(){super.componentDidMount(),this.props.socket.getState(`system.adapter.telegram.${this.props.instance}.alive`).then(t=>O(this,null,function*(){t&&t.val?this.setState({alive:!0},()=>this.readData()):this.setState({alive:!1}),yield this.props.socket.subscribeState(`system.adapter.telegram.${this.props.instance}.alive`,this.onAliveChanged)}))}readData(){this.props.socket.sendTo(`telegram.${this.props.instance}`,"adminuser",null).then(t=>{const n=[];for(const o in t){const v=[];t[o].userName&&v.push(t[o].userName),t[o].firstName&&v.push(t[o].firstName),n.push({id:o,names:v.join(" / "),sysMessages:t[o].sysMessages})}this.setState({users:n,initialized:!0})})}componentWillUnmount(){return O(this,null,function*(){yield this.props.socket.unsubscribeState(`system.adapter.telegram.${this.props.instance}.alive`,this.onAliveChanged)})}onSysMessageChange(t){const n=this.state.users.findIndex(o=>o.id===t);if(n!==-1){const o=!this.state.users[n].sysMessages;this.props.socket.sendTo(`telegram.${this.props.instance}`,"systemMessages",{itemId:t,checked:o}).then(v=>{if(v===t){const S=JSON.parse(JSON.stringify(this.state.users)),j=S.findIndex(U=>U.id===t);j!==-1&&(S[j].sysMessages=o,this.setState({users:S}))}})}}onDelete(t){this.props.socket.sendTo(`telegram.${this.props.instance}`,"delUser",t).then(n=>{if(n===t){const o=JSON.parse(JSON.stringify(this.state.users)),v=o.findIndex(S=>S.id===t);v!==-1&&(o.splice(v,1),this.setState({users:o}))}})}renderConfirmDialog(){return this.state.confirm?s().createElement(m.Confirm,{onClose:t=>{const n=this.state.confirm;this.setState({confirm:null},()=>t&&this.onDelete(n))}}):null}renderItem(){return!this.state.alive&&!this.state.initialized?s().createElement("div",null,m.I18n.t("custom_telegram_not_alive")):this.state.initialized?s().createElement("div",{style:{width:"100%"}},s().createElement("h4",null,m.I18n.t("custom_telegram_title")),s().createElement(r.TableContainer,{component:r.Paper,style:{width:"100%"}},s().createElement(r.Table,{style:{width:"100%"},size:"small"},s().createElement(r.TableHead,null,s().createElement(r.TableRow,null,s().createElement(r.TableCell,null,m.I18n.t("custom_telegram_id")),s().createElement(r.TableCell,null,m.I18n.t("custom_telegram_name")),s().createElement(r.TableCell,null,m.I18n.t("custom_telegram_sys_messages")),s().createElement(r.TableCell,null))),s().createElement(r.TableBody,null,this.state.users.map(t=>s().createElement(r.TableRow,{key:t.id,sx:{"&:last-child td, &:last-child th":{border:0}}},s().createElement(r.TableCell,{component:"th",scope:"row"},t.id),s().createElement(r.TableCell,null,t.names),s().createElement(r.TableCell,null,s().createElement(r.Checkbox,{disabled:!this.state.alive,checked:!!t.sysMessages,onClick:()=>this.onSysMessageChange(t.id)})),s().createElement(r.TableCell,null,s().createElement(r.IconButton,{disabled:!this.state.alive,onClick:()=>this.setState({confirm:t.id})},s().createElement(x.Delete,null)))))))),this.renderConfirmDialog()):s().createElement(r.LinearProgress,null)}}R.propTypes={socket:d().object.isRequired,themeType:d().string,themeName:d().string,style:d().object,data:d().object.isRequired,attr:d().string,schema:d().object,onError:d().func,onChange:d().func};const N=R;var W=Object.defineProperty,B=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(i,t,n)=>t in i?W(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n,T=(i,t)=>{for(var n in t||(t={}))_.call(t,n)&&h(i,n,t[n]);if(B)for(var n of B(t))c.call(t,n)&&h(i,n,t[n]);return i};const M={app:i=>({backgroundColor:i.palette.background.default,color:i.palette.text.primary,height:"100%"}),item:{padding:50,width:400}};class y extends m.GenericApp{constructor(t){const n=T({},t);super(t,n),this.state={data:{myCustomAttribute:"red"},theme:this.createTheme()};const o={en:e(75553),de:e(46477),ru:e(63715),pt:e(74606),nl:e(86164),fr:e(74554),it:e(66851),es:e(72706),pl:e(23638),uk:e(93882),"zh-cn":e(80222)};m.I18n.setTranslations(o),m.I18n.setLanguage((navigator.language||navigator.userLanguage||"en").substring(0,2).toLowerCase())}render(){return this.state.loaded?s().createElement(p.A,{injectFirst:!0},s().createElement(P.A,{theme:this.state.theme},s().createElement(r.Box,{sx:M.app},s().createElement("div",{style:M.item},s().createElement(N,{socket:this.socket,themeType:this.state.themeType,themeName:this.state.themeName,attr:"myCustomAttribute",data:this.state.data,onError:()=>{},instance:0,schema:{name:"ConfigCustomTelegramSet/Components/TelegramComponent",type:"custom"},onChange:t=>this.setState({data:t})}))))):s().createElement(p.A,{injectFirst:!0},s().createElement(P.A,{theme:this.state.theme},s().createElement(m.Loader,{theme:this.state.themeType})))}}const D=y;window.adapterName="adapter-component-template";const K=document.getElementById("root");(0,E.H)(K).render(s().createElement(s().StrictMode,null,s().createElement(D,{socket:{port:8081}})))},40805:(a,g,e)=>{e.d(g,{A:()=>I});var l=e(58168),s=e(98587),E=e(28437),p=e.n(E),P=e(95973),r=e.n(P),m=e(64359),u=e(92066),d=e(64922);const x=["theme"];function I(C){let{theme:f}=C,A=(0,s.A)(C,x);const O=f[u.A];return(0,d.jsx)(m.A,(0,l.A)({},A,{themeId:O?u.A:void 0,theme:O||f}))}},53768:(a,g,e)=>{e.d(g,{A:()=>p});var l=e(28437),s=e.n(l);const p=l.createContext(null)},87012:(a,g,e)=>{e.d(g,{A:()=>p});var l=e(28437),s=e.n(l),E=e(53768);function p(){return l.useContext(E.A)}},49262:(a,g,e)=>{e.d(g,{A:()=>C,I:()=>I});var l=e(58168),s=e(98587),E=e(28437),p=e.n(E),P=e(95973),r=e.n(P),m=e(64922);const u=["value"],d=E.createContext();function x(f){let{value:A}=f,O=(0,s.A)(f,u);return(0,m.jsx)(d.Provider,(0,l.A)({value:A!=null?A:!0},O))}const I=()=>{const f=E.useContext(d);return f!=null?f:!1},C=x},64359:(a,g,e)=>{e.d(g,{A:()=>B});var l=e(58168),s=e(28437),E=e(95973),p=e(87012),P=e(53768);const m=typeof Symbol=="function"&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__";var u=e(64922);function d(_,c){return typeof c=="function"?c(_):(0,l.A)({},_,c)}function x(_){const{children:c,theme:h}=_,T=(0,p.A)(),M=s.useMemo(()=>{const y=T===null?h:d(T,h);return y!=null&&(y[m]=T!==null),y},[h,T]);return(0,u.jsx)(P.A.Provider,{value:M,children:c})}const I=x;var C=e(66252),f=e(67193),A=e(49262),O=e(1639);const R={};function N(_,c,h,T=!1){return s.useMemo(()=>{const M=_&&c[_]||c;if(typeof h=="function"){const y=h(M),D=_?(0,l.A)({},c,{[_]:y}):y;return T?()=>D:D}return _?(0,l.A)({},c,{[_]:h}):(0,l.A)({},c,h)},[_,c,h,T])}function W(_){const{children:c,theme:h,themeId:T}=_,M=(0,f.A)(R),y=(0,p.A)()||R,D=N(T,M,h),K=N(T,y,h,!0),b=D.direction==="rtl";return(0,u.jsx)(I,{theme:K,children:(0,u.jsx)(C.T.Provider,{value:D,children:(0,u.jsx)(A.A,{value:b,children:(0,u.jsx)(O.A,{value:D==null?void 0:D.components,children:c})})})})}const B=W},67193:(a,g,e)=>{e.d(g,{A:()=>r});var l=e(28437),s=e.n(l),E=e(66252);function p(m){return Object.keys(m).length===0}function P(m=null){const u=l.useContext(E.T);return!u||p(u)?m:u}const r=P},94140:(a,g,e)=>{var l,s=e(23479);if(1)g.H=s.createRoot,l=s.hydrateRoot;else var E},46477:a=>{a.exports=JSON.parse('{"custom_telegram_not_alive":"Telegram-Instanz ist nicht am Leben","custom_telegram_id":"ID","custom_telegram_name":"Name","custom_telegram_sys_messages":"Systemmeldungen","custom_telegram_title":"Authentifizierte Benutzer"}')},75553:a=>{a.exports=JSON.parse('{"custom_telegram_not_alive":"Telegram instance is not alive","custom_telegram_id":"ID","custom_telegram_name":"Name","custom_telegram_sys_messages":"System messages","custom_telegram_title":"Authenticated Users"}')},72706:a=>{a.exports=JSON.parse('{"custom_telegram_not_alive":"La instancia de Telegram no est\xE1 viva","custom_telegram_id":"ID","custom_telegram_name":"Nombre","custom_telegram_sys_messages":"Mensajes del sistema","custom_telegram_title":"Usuarios autenticados"}')},74554:a=>{a.exports=JSON.parse(`{"custom_telegram_not_alive":"L'instance de t\xE9l\xE9gramme n'est pas active","custom_telegram_id":"ID","custom_telegram_name":"Nom","custom_telegram_sys_messages":"Messages syst\xE8me","custom_telegram_title":"Utilisateurs authentifi\xE9s"}`)},66851:a=>{a.exports=JSON.parse(`{"custom_telegram_not_alive":"L'istanza di Telegram non \xE8 viva","custom_telegram_id":"ID","custom_telegram_name":"Nome","custom_telegram_sys_messages":"Messaggi di sistema","custom_telegram_title":"Utenti autenticati"}`)},86164:a=>{a.exports=JSON.parse('{"custom_telegram_not_alive":"Telegram-instantie leeft niet","custom_telegram_id":"ID","custom_telegram_name":"Naam","custom_telegram_sys_messages":"Systeemberichten","custom_telegram_title":"Geverifieerde gebruikers"}')},23638:a=>{a.exports=JSON.parse('{"custom_telegram_not_alive":"Instancja telegramu nie \u017Cyje","custom_telegram_id":"ID","custom_telegram_name":"Nazwa","custom_telegram_sys_messages":"Komunikaty systemowe","custom_telegram_title":"Uwierzytelnieni u\u017Cytkownicy"}')},74606:a=>{a.exports=JSON.parse('{"custom_telegram_not_alive":"A inst\xE2ncia do Telegram n\xE3o est\xE1 ativa","custom_telegram_id":"ID","custom_telegram_name":"Nome","custom_telegram_sys_messages":"Mensagens do sistema","custom_telegram_title":"Usu\xE1rios autenticados"}')},63715:a=>{a.exports=JSON.parse('{"custom_telegram_not_alive":"\u042D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440 Telegram \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442","custom_telegram_id":"ID","custom_telegram_name":"\u0418\u043C\u044F","custom_telegram_sys_messages":"\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F","custom_telegram_title":"\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"}')},93882:a=>{a.exports=JSON.parse(`{"custom_telegram_not_alive":"\u0415\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440 Telegram \u043D\u0435 \u043F\u0440\u0430\u0446\u044E\u0454","custom_telegram_id":"ID","custom_telegram_name":"\u0406\u043C'\u044F","custom_telegram_sys_messages":"\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u0456 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F","custom_telegram_title":"\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u0456 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456"}`)},80222:a=>{a.exports=JSON.parse('{"custom_telegram_not_alive":"\u7535\u62A5\u5B9E\u4F8B\u4E0D\u5B58\u5728","custom_telegram_id":"ID","custom_telegram_name":"\u59D3\u540D","custom_telegram_sys_messages":"\u7CFB\u7EDF\u6D88\u606F","custom_telegram_title":"\u8BA4\u8BC1\u7528\u6237"}')}}]);

//# sourceMappingURL=src_bootstrap_jsx.a960785f.chunk.js.map