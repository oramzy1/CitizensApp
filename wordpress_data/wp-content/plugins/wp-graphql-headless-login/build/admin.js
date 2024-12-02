(()=>{"use strict";const e=window.React,t=window.wp.element,n=window.wp.hooks,s=window.wp.components,a=window.wp.coreData,i=window.wp.data,l={hasAccessControlAllowCredentials:!1,hasSiteAddressInOrigin:!1,additionalAuthorizedDomains:[],shouldBlockUnauthorizedDomains:!1,customHeaders:[]},o=(0,t.createContext)({showAdvancedSettings:!1,setShowAdvancedSettings:()=>{},accessControlSettings:{},updateAccessControlSettings:()=>{}}),r=({children:n})=>{const{saveEditedEntityRecord:s}=(0,i.useDispatch)(a.store),[r,c]=(0,a.useEntityProp)("root","site","wpgraphql_login_settings_show_advanced_settings"),[p,d]=(0,a.useEntityProp)("root","site","wpgraphql_login_access_control"),g=(0,t.useCallback)((e=>{d({...p,...e})}),[d,p]);return(0,t.useEffect)((()=>{void 0!==p&&0===Object.keys(p||{})?.length&&d(l)}),[p,d]),(0,e.createElement)(o.Provider,{value:{showAdvancedSettings:!!r,setShowAdvancedSettings:e=>{c(!!e),s("root","site",void 0,{wpgraphql_login_settings_show_advanced_settings:!!e})},accessControlSettings:p,updateAccessControlSettings:g}},n)},c=()=>(0,t.useContext)(o),p=window.wp.compose,d=window.ReactJSXRuntime,g={string:s.TextControl,select:s.SelectControl,boolean:s.ToggleControl,array:function({help:e,...t}){const n=(0,p.useInstanceId)(s.FormTokenField);return(0,d.jsxs)("fieldset",{className:"components-form-token-field-control",children:[(0,d.jsx)(s.FormTokenField,{...t}),e&&(0,d.jsx)("p",{id:`components-form-token-additional-help-${n}`,className:"help components-form-token-field__help",style:{marginBlockStart:"0.5em",fontSize:"12px",fontStyle:"italic"},children:e})]})}};function h({type:e,description:t,value:n,required:s,label:a,onChange:i,help:l,...o}){const r={label:a||t,required:s||!1,help:l||void 0};let c;switch(e){case"string":c=o?.enum?.length?g.select:g.string,r.value=n||"",r.onChange=e=>i(e),o?.enum?.length&&(r.options=o.enum.map((e=>({label:e.charAt(0).toUpperCase()+e.slice(1),value:e}))));break;case"integer":c=g.string,r.value=n?parseInt(n):"",r.onChange=e=>i(parseInt(e)),r.type="number";break;case"boolean":c=g.boolean,r.checked=n||!1,r.onChange=e=>i(e);break;case"array":c=g.array,r.onChange=e=>i(e),r.tokenizeOnSpace=!0,r.value=n||[]}const p=c;return(0,d.jsx)(p,{...r})}function m({schema:e,currentValue:t,setValue:n}){const{showAdvancedSettings:a}=c();return e?.hidden||!a&&e?.advanced?null:(0,d.jsx)(s.PanelRow,{children:(0,d.jsx)(h,{...e,value:t,onChange:n})})}function u({excludedProperties:t,options:n,optionsSchema:s,setOption:a}){const i=t||["id","order"],l=Object.keys(s)?.sort(((e,t)=>(s[e]?.order||0)>(s[t]?.order||0)?1:-1));return(0,e.createElement)(e.Fragment,null,l?.map((t=>i.includes(t)?null:(0,e.createElement)(m,{key:t,schema:s[t],currentValue:n?.[t],setValue:e=>{a({[t]:e})}}))))}const _=window.wp.i18n;var E,v,w;function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},y.apply(null,arguments)}var f=function(t){return e.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256"},t),E||(E=e.createElement("defs",null,e.createElement("filter",{id:"logo_svg__luminosity-invert-noclip",width:132.09,height:32766,x:64.02,y:-8591,colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse"},e.createElement("feColorMatrix",{result:"invert",values:"-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"}),e.createElement("feFlood",{floodColor:"#fff",result:"bg"}),e.createElement("feBlend",{in:"invert",in2:"bg"})),e.createElement("style",null,".logo_svg__cls-6{fill:#f9921e}"),e.createElement("mask",{id:"logo_svg__mask",width:132.09,height:32766,x:64.02,y:-8591,maskUnits:"userSpaceOnUse"},e.createElement("g",{filter:"url(#logo_svg__luminosity-invert-noclip)"})))),v||(v=e.createElement("g",{id:"logo_svg__Banner"},e.createElement("path",{id:"logo_svg__Background",fill:"#dedede",d:"M186.03 164.84h1179.35v543.5H186.03z",opacity:.2,transform:"rotate(-30 775.697 436.587)"}))),w||(w=e.createElement("g",{id:"logo_svg__Logo"},e.createElement("path",{fill:"#43646b",d:"M189.12 106.23V71.3a61.45 61.45 0 0 0-122.89 0v1.22A4.74 4.74 0 0 0 71 77.26h16.46a4.74 4.74 0 0 0 4.74-4.74V71.3a35.48 35.48 0 1 1 71 0v34.94"}),e.createElement("path",{fill:"#0e2339",d:"M163.16 106.24H58.32a4.75 4.75 0 0 0-4.74 4.76l.1 114a4.74 4.74 0 0 0 4.74 4.74l137.22-.1a4.74 4.74 0 0 0 4.73-4.74v-114a4.76 4.76 0 0 0-1.4-3.36 4.7 4.7 0 0 0-3.34-1.37h-6.48"}),e.createElement("g",{mask:"url(#logo_svg__mask)"},e.createElement("path",{d:"M191.9 191.75a8.26 8.26 0 0 0-9.73 1.18c-1.55 1.54-2.08 2.7-2.75 5.95-.85 4-2.72 5.81-6.11 5.81a6 6 0 0 1-5.17-2.74c-.74-1.27-.78-2.22-1-26.33-.18-22.26-.27-25.33-.9-27.68-4.15-16-16.52-26.88-33-28.93-8.21-1-19 2.28-26.37 8.14a35.76 35.76 0 0 0-12.23 17.72l-1.15 3.32-4 1.45a33.7 33.7 0 0 0-14.35 8.84A35.9 35.9 0 0 0 66 172.9c-1.84 5.28-2 7.1-2 25.36v17.18l.88 1.71a9.36 9.36 0 0 0 5.35 4.22c.74.16 4.82.33 9.11.35 5.86 0 8.26-.12 9.74-.53A8.76 8.76 0 0 0 95 213c0-2.59 3.18-5.59 5.91-5.59 3.46 0 5.81 2.33 6.27 6.16a8.56 8.56 0 0 0 4.71 7.16c1.47.8 2 .85 10.84.85s9.39-.05 10.91-.85c1.85-1 3.9-3.19 4.29-4.71.21-.58.33-8.37.33-17.33v-16.28l-1-1.71c-1.64-2.86-3.51-3.88-8.19-4.5-6.37-.81-10-2.52-13.73-6.28a22 22 0 0 1-5.63-11c-1.24-7.33 2.4-15.55 8.82-19.82a18.26 18.26 0 0 1 11.35-3.5 16.4 16.4 0 0 1 6.43 1 20.54 20.54 0 0 1 11.22 9c2.74 4.66 2.67 3.42 2.9 31.61.21 23.05.33 25.58.95 27.52 2.05 6.37 6.32 11.56 11.51 14.1 7.13 3.48 14.12 3.71 20.33.69s11.28-10.24 12.59-18.18c.87-4.93-.33-7.81-3.91-9.59m-73.13-.85 2.84 1 .11 5.63a30 30 0 0 1-.18 5.63 9.3 9.3 0 0 1-1.82-2.33c-4-6.25-12-10.06-20-9.57a22.38 22.38 0 0 0-17.63 10.04l-1.39 2v-10.7c0-11.77.19-13.2 2.36-17.49 1.89-3.74 6.94-8.37 10.29-9.39.71-.23 1 .12 2.23 3.3a37.36 37.36 0 0 0 23.19 21.88",className:"logo_svg__cls-6"})),e.createElement("path",{d:"M132.84 170.69c1.69-1 2.34-1.87 3.22-4.45a12.86 12.86 0 0 0-.94-10.78 5.3 5.3 0 0 0-5.21-2.81 4.33 4.33 0 0 0-3.55 1.3c-4.23 3.65-4 13.36.39 16.43a6.2 6.2 0 0 0 6.09.31",className:"logo_svg__cls-6"}),e.createElement("path",{d:"M137.16 159.52a6.21 6.21 0 0 1-3.83 3.87 9.88 9.88 0 0 1-7.27-.25c-5.24-2.68-5.49-11.14-.46-14.33a6.37 6.37 0 0 1 4.22-1.1c3 0 4.61.6 6.21 2.42a8.63 8.63 0 0 1 1.13 9.39",className:"logo_svg__cls-6"}))))};const b=function(){const{showAdvancedSettings:t,setShowAdvancedSettings:n}=c();return(0,e.createElement)("div",{className:"wp-graphql-headless-login__header"},(0,e.createElement)("h1",{className:"wp-graphql-headless-login__title"},(0,e.createElement)(s.Icon,{icon:(0,e.createElement)(f,null)}),(0,_.__)("Headless Login Settings","wp-graphql-headless-login")," "),void 0!==t&&(0,e.createElement)(s.ToggleControl,{className:"wp-graphql-headless-login__advanced-settings-toggle",label:(0,_.__)("Show advanced settings","wp-graphql-headless-login"),checked:t,onChange:e=>n(e)}),(0,e.createElement)("div",{className:"wp-graphql-headless-login__documentation-link"},(0,e.createElement)("a",{href:"https://github.com/AxeWP/wp-graphql-headless-login-beta/blob/main/docs/settings.md",target:"_blank",rel:"noreferrer"},(0,_.__)("Documentation (WIP)","wp-graphql-headless-login"),(0,e.createElement)(s.Icon,{icon:"external",className:"wp-graphql-headless-login__documentation-link-icon"}))))},S=window.wp.notices,C=function(){const e=(0,i.useSelect)((e=>e(S.store)?.getNotices().filter((e=>"snackbar"===e.type))),[]),{removeNotice:t}=(0,i.useDispatch)(S.store);return e?.length?(0,d.jsx)(s.SnackbarList,{className:"edit-site-notices",notices:e,onRemove:t}):(0,d.jsx)(d.Fragment,{})};function k(){const{accessControlSettings:e,updateAccessControlSettings:n}=c(),{saveEditedEntityRecord:l}=(0,i.useDispatch)(a.store),{lastError:o,isSaving:r,hasEdits:p}=(0,i.useSelect)((e=>({lastError:e(a.store)?.getLastEntitySaveError("root","site"),isSaving:e(a.store)?.isSavingEntityRecord("root","site"),hasEdits:e(a.store)?.hasEditsForEntityRecord("root","site")})),[]),g=wpGraphQLLogin?.settings?.accessControl||{};return(0,t.useEffect)((()=>{o&&(0,i.dispatch)("core/notices").createErrorNotice((0,_.sprintf)(
// translators: %s: Error message.
// translators: %s: Error message.
(0,_.__)("Error saving settings: %s","wp-graphql-headless-login"),o?.message),{type:"snackbar",isDismissible:!0})}),[o]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.PanelBody,{children:[(0,d.jsx)(s.PanelRow,{children:(0,d.jsx)("h2",{className:"components-panel__body-title",children:(0,_.__)("Access Control Settings","wp-graphql-headless-login")})}),(0,d.jsx)(u,{optionsSchema:g,options:e,setOption:n,excludedProperties:[]})]}),(0,d.jsxs)(s.Button,{variant:"primary",isPrimary:!0,disabled:!p,isBusy:r,onClick:()=>{(async()=>{await l("root","site",void 0,{wpgraphql_login_access_control:e})&&(0,i.dispatch)("core/notices").createNotice("success","Settings saved",{type:"snackbar",isDismissible:!0})})()},children:[(0,_.__)("Save Access Control Settings","wp-graphql-headless-login"),r&&(0,d.jsx)(s.Spinner,{})]})]})}function q({clientSlug:t,optionsKey:n,options:s,setOption:a}){const i=wpGraphQLLogin?.settings?.providers?.[t]?.[n]?.properties||{};return(0,e.createElement)(u,{optionsSchema:i,options:s,setOption:a,excludedProperties:["id","order"]})}const x={name:"",order:0,isEnabled:!1,clientOptions:{},loginOptions:{useAuthenticationCookie:!1}},L=(0,t.createContext)({activeClient:"",setActiveClient:()=>{},clientConfig:void 0,setClientConfig:()=>{},updateClient:()=>{},setClientOption:()=>{},setLoginOption:()=>{}}),N=({children:n})=>{const[s,i]=(0,t.useState)(Object.keys(wpGraphQLLogin?.settings.providers)?.[0]||""),[l,o]=(0,a.useEntityProp)("root","site",s),r=(0,t.useCallback)(((e,t)=>{const n={...l,[e]:t};o(n)}),[l,o]),c=(0,t.useCallback)((e=>{r("clientOptions",{...l?.clientOptions,...e})}),[l,r]),p=(0,t.useCallback)((e=>{r("loginOptions",{...l?.loginOptions,...e})}),[l,r]);return(0,t.useEffect)((()=>{void 0!==s&&void 0!==l&&0===Object.keys(l||{})?.length&&o({...x,slug:s.replace("wpgraphql_login_provider_","")})}),[l,o,s]),(0,e.createElement)(L.Provider,{value:{activeClient:s,setActiveClient:i,clientConfig:l,setClientConfig:o,updateClient:r,setClientOption:c,setLoginOption:p}},n)},O=()=>(0,t.useContext)(L);function P(){const{accessControlSettings:n}=c(),{activeClient:l,clientConfig:o,setClientConfig:r,updateClient:p,setClientOption:d,setLoginOption:g}=O(),{saveEditedEntityRecord:h}=(0,i.useDispatch)(a.store),{lastError:m,isSaving:E,hasEdits:v}=(0,i.useSelect)((e=>({lastError:e(a.store)?.getLastEntitySaveError("root","site"),isSaving:e(a.store)?.isSavingEntityRecord("root","site"),hasEdits:e(a.store)?.hasEditsForEntityRecord("root","site")})),[]);return(0,t.useEffect)((()=>{m&&(0,i.dispatch)("core/notices").createErrorNotice((0,_.sprintf)(
// translators: %s: Error message.
// translators: %s: Error message.
(0,_.__)("Error saving settings: %s","wp-graphql-headless-login"),m?.data?.params?.[l]||m?.message),{type:"snackbar",isDismissible:!0,explicitDismiss:!0})}),[m,l]),(0,t.useEffect)((()=>{!n?.shouldBlockUnauthorizedDomains&&"wpgraphql_login_provider_siteToken"===l&&o?.isEnabled&&(p("isEnabled",!1),(0,i.dispatch)("core/notices").createErrorNotice((0,_.__)("The Site Token provider can only be enabled if `Access Control Settings: Block unauthorized domains` is enabled.","wp-graphql-headless-login"),{type:"snackbar",isDismissible:!0,explicitDismiss:!0}))}),[n,l,o,p]),l&&o?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(s.PanelBody,null,(0,e.createElement)(s.PanelRow,null,(0,e.createElement)("h2",{className:"components-panel__body-title"},(0,_.sprintf)(
// translators: %s: Client slug.
// translators: %s: Client slug.
(0,_.__)("%s Settings","wp-graphql-headless-login"),wpGraphQLLogin?.settings?.providers?.[l]?.name?.default||"Provider"))),(0,e.createElement)(u,{excludedProperties:["loginOptions","clientOptions","order"],options:o,optionsSchema:wpGraphQLLogin?.settings?.providers?.[l],setOption:e=>{r({...o,...e})}}),(0,e.createElement)(q,{clientSlug:l,optionsKey:"clientOptions",options:o?.clientOptions,setOption:d})),(0,e.createElement)(s.PanelBody,null,(0,e.createElement)(s.PanelRow,null,(0,e.createElement)("h2",{className:"components-panel__body-title"},(0,_.__)("Login Settings","wp-graphql-headless-login"),(0,e.createElement)(s.Icon,{icon:"admin-users",className:"components-panel__icon",size:20}))),(0,e.createElement)(q,{clientSlug:l,optionsKey:"loginOptions",options:o?.loginOptions,setOption:g})),(0,e.createElement)((()=>wpGraphQLLogin.hooks.applyFilters("graphql_login_custom_client_settings",(0,e.createElement)(e.Fragment,null),l,o)),null),(0,e.createElement)(s.Button,{isPrimary:!0,variant:"primary",onClick:()=>{(async()=>{await h("root","site",void 0,{[l]:o})&&(0,i.dispatch)("core/notices").createNotice("success","Settings saved",{type:"snackbar",isDismissible:!0})})()},disabled:!v,isBusy:E},(0,_.__)("Save Providers","wp-graphql-headless-login"),E&&(0,e.createElement)(s.Spinner,null))):(0,e.createElement)(s.Placeholder,{icon:(0,e.createElement)(s.Icon,{icon:(0,e.createElement)(f,null)}),title:(0,_.__)("Loading…","wp-graphql-headless-login"),instructions:(0,_.__)("Please wait while the settings are loaded.","wp-graphql-headless-login")})}function j(){const[e,n]=(0,a.useEntityProp)("root","site","wpgraphql_login_settings_jwt_secret_key"),{saveEditedEntityRecord:l}=(0,i.useDispatch)(a.store),{lastError:o,isSaving:r}=(0,i.useSelect)((e=>({lastError:e(a.store)?.getLastEntitySaveError("root","site",""),isSaving:e(a.store)?.isSavingEntityRecord("root","site",""),hasEdits:e(a.store)?.hasEditsForEntityRecord("root","site","")})),[]);(0,t.useEffect)((()=>{o&&(0,i.dispatch)("core/notices").createErrorNotice((0,_.__)("The JWT secret could not be regenerated. Please try again later.","wp-graphql-headless-login"),{type:"snackbar",isDismissible:!0})}),[o,e]);const c=wpGraphQLLogin?.secret||{};return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(s.BaseControl,{className:"wp-graphql-headless-login__secret",id:"wp-graphql-headless-login__secret--control",help:(0,_.__)("The JWT Secret is used to sign the JWT tokens that are used to authenticate requests to the GraphQL API. Changing this secret will invalidate all previously-authenticated requests.","wp-graphql-headless-login"),children:[(0,d.jsx)(s.Button,{isTertiary:!0,text:(0,_.__)("Regenerate JWT secret","wp-graphql-headless-login"),icon:"admin-network",disabled:!!c?.isConstant,isDestructive:!0,isBusy:r,iconSize:16,variant:"tertiary",onClick:()=>{n(""),(async()=>{await l("root","site",void 0,{wpgraphql_login_settings_jwt_secret_key:e})&&(0,i.dispatch)("core/notices").createNotice("success",(0,_.__)("The old JWT secret has been invalidated.","wp-graphql-headless-login"),{type:"snackbar",isDismissible:!0})})()}}),!!c?.isConstant&&(0,d.jsx)("p",{children:(0,d.jsx)("strong",{children:(0,_.__)("The JWT secret is set in wp-config.php and cannot be changed on the backend.","wp-graphql-headless-login")})})]})})}function A({optionKey:t}){const[n,s]=(0,a.useEntityProp)("root","site",t),i=wpGraphQLLogin?.settings?.plugin?.[t]||{};return(0,e.createElement)(m,{key:t,schema:i,currentValue:n,setValue:e=>s(e)})}const B=()=>wpGraphQLLogin.hooks.applyFilters("graphql_login_custom_plugin_options",(0,e.createElement)(e.Fragment,null));function D(){const{showAdvancedSettings:t}=c(),n=wpGraphQLLogin?.settings?.plugin||{},a=Object.keys(n)?.sort(((e,t)=>(n[e]?.order||0)>(n[t]?.order||0)?1:-1)).filter((e=>!n[e]?.hidden));return(0,e.createElement)(s.PanelBody,null,(0,e.createElement)(s.PanelRow,null,(0,e.createElement)("h2",{className:"components-panel__body-title"},(0,_.__)("Plugin Settings","wp-graphql-headless-login"),(0,e.createElement)(s.Icon,{icon:"admin-tools",className:"components-panel__icon",size:20}))),t&&(0,e.createElement)(j,null),a.map((t=>(0,e.createElement)(A,{optionKey:t,key:t}))),(0,e.createElement)(B,null))}function F({provider:t}){var n;const[s]=(0,a.useEntityProp)("root","site",t),i=null!==(n=s?.isEnabled)&&void 0!==n&&n,l=i?(0,_.__)("Enabled","wp-graphql-headless-login"):(0,_.__)("Disabled","wp-graphql-headless-login");return(0,e.createElement)("div",{className:"wp-graphql-headless-login__menu__status-badge"},(0,e.createElement)("span",{className:"wp-graphql-headless-login__menu__status-badge--"+(i?"enabled":"disabled"),"aria-label":l,title:l}))}function R(){const t=Object.keys(wpGraphQLLogin?.settings?.providers||{}),{activeClient:n,setActiveClient:a}=O();return(0,e.createElement)(s.__experimentalNavigation,{activeItem:n},(0,e.createElement)(s.__experimentalNavigationMenu,{title:(0,_.__)("Providers","wp-graphql-headless-login")},t.length>0&&t.map((t=>(0,e.createElement)(s.__experimentalNavigationItem,{className:"wp-graphql-headless-login__menu__item",key:t,item:t,title:wpGraphQLLogin?.settings?.providers?.[t]?.name?.default,icon:(0,e.createElement)(F,{provider:t}),onClick:()=>a(t)})))))}function T(){return(0,e.createElement)(s.Flex,{className:"wp-graphql-headless-login__main",align:"flex-start"},(0,e.createElement)(N,null,(0,e.createElement)(s.FlexItem,{className:"wp-graphql-headless-login__sidebar"},(0,e.createElement)(R,null)),(0,e.createElement)(s.FlexBlock,null,(0,e.createElement)(s.Panel,{className:"wp-graphql-headless-login__client"},(0,e.createElement)(P,null)))))}const I=function(){return(0,e.createElement)(r,null,(0,e.createElement)(b,null),(0,e.createElement)(T,null),(0,e.createElement)(s.Panel,{className:"wp-graphql-headless-login__plugin-settings"},(0,e.createElement)(D,null)),(0,e.createElement)(s.Panel,{className:"wp-graphql-headless-login__ac-settings"},(0,e.createElement)(k,null)),(0,e.createElement)("div",{className:"wp-graphql-headless-login__notices"},(0,e.createElement)(C,null)))},G=(0,n.createHooks)();document.addEventListener("DOMContentLoaded",(()=>{const n=document.getElementById("wpgraphql_login_settings");n&&(0,t.render)((0,e.createElement)(I,null),n)})),wpGraphQLLogin.hooks=G})();