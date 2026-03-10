(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Am(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var hc={exports:{}},wo={},pc={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function G_(){if(gp)return ht;gp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,R={};function y(I,ie,Ie){this.props=I,this.context=ie,this.refs=R,this.updater=Ie||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,ie){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ie,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=y.prototype;function N(I,ie,Ie){this.props=I,this.context=ie,this.refs=R,this.updater=Ie||S}var D=N.prototype=new g;D.constructor=N,A(D,y.prototype),D.isPureReactComponent=!0;var C=Array.isArray,G=Object.prototype.hasOwnProperty,B={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function Y(I,ie,Ie){var ee,pe={},Me=null,xe=null;if(ie!=null)for(ee in ie.ref!==void 0&&(xe=ie.ref),ie.key!==void 0&&(Me=""+ie.key),ie)G.call(ie,ee)&&!O.hasOwnProperty(ee)&&(pe[ee]=ie[ee]);var we=arguments.length-2;if(we===1)pe.children=Ie;else if(1<we){for(var Ye=Array(we),Ge=0;Ge<we;Ge++)Ye[Ge]=arguments[Ge+2];pe.children=Ye}if(I&&I.defaultProps)for(ee in we=I.defaultProps,we)pe[ee]===void 0&&(pe[ee]=we[ee]);return{$$typeof:s,type:I,key:Me,ref:xe,props:pe,_owner:B.current}}function P(I,ie){return{$$typeof:s,type:I.type,key:ie,ref:I.ref,props:I.props,_owner:I._owner}}function w(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function k(I){var ie={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ie){return ie[Ie]})}var se=/\/+/g;function Q(I,ie){return typeof I=="object"&&I!==null&&I.key!=null?k(""+I.key):ie.toString(36)}function ae(I,ie,Ie,ee,pe){var Me=typeof I;(Me==="undefined"||Me==="boolean")&&(I=null);var xe=!1;if(I===null)xe=!0;else switch(Me){case"string":case"number":xe=!0;break;case"object":switch(I.$$typeof){case s:case e:xe=!0}}if(xe)return xe=I,pe=pe(xe),I=ee===""?"."+Q(xe,0):ee,C(pe)?(Ie="",I!=null&&(Ie=I.replace(se,"$&/")+"/"),ae(pe,ie,Ie,"",function(Ge){return Ge})):pe!=null&&(w(pe)&&(pe=P(pe,Ie+(!pe.key||xe&&xe.key===pe.key?"":(""+pe.key).replace(se,"$&/")+"/")+I)),ie.push(pe)),1;if(xe=0,ee=ee===""?".":ee+":",C(I))for(var we=0;we<I.length;we++){Me=I[we];var Ye=ee+Q(Me,we);xe+=ae(Me,ie,Ie,Ye,pe)}else if(Ye=x(I),typeof Ye=="function")for(I=Ye.call(I),we=0;!(Me=I.next()).done;)Me=Me.value,Ye=ee+Q(Me,we++),xe+=ae(Me,ie,Ie,Ye,pe);else if(Me==="object")throw ie=String(I),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return xe}function fe(I,ie,Ie){if(I==null)return I;var ee=[],pe=0;return ae(I,ee,"","",function(Me){return ie.call(Ie,Me,pe++)}),ee}function le(I){if(I._status===-1){var ie=I._result;ie=ie(),ie.then(function(Ie){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ie)},function(Ie){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ie)}),I._status===-1&&(I._status=0,I._result=ie)}if(I._status===1)return I._result.default;throw I._result}var ce={current:null},z={transition:null},ue={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:z,ReactCurrentOwner:B};function oe(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:fe,forEach:function(I,ie,Ie){fe(I,function(){ie.apply(this,arguments)},Ie)},count:function(I){var ie=0;return fe(I,function(){ie++}),ie},toArray:function(I){return fe(I,function(ie){return ie})||[]},only:function(I){if(!w(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ht.Component=y,ht.Fragment=n,ht.Profiler=a,ht.PureComponent=N,ht.StrictMode=r,ht.Suspense=h,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,ht.act=oe,ht.cloneElement=function(I,ie,Ie){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var ee=A({},I.props),pe=I.key,Me=I.ref,xe=I._owner;if(ie!=null){if(ie.ref!==void 0&&(Me=ie.ref,xe=B.current),ie.key!==void 0&&(pe=""+ie.key),I.type&&I.type.defaultProps)var we=I.type.defaultProps;for(Ye in ie)G.call(ie,Ye)&&!O.hasOwnProperty(Ye)&&(ee[Ye]=ie[Ye]===void 0&&we!==void 0?we[Ye]:ie[Ye])}var Ye=arguments.length-2;if(Ye===1)ee.children=Ie;else if(1<Ye){we=Array(Ye);for(var Ge=0;Ge<Ye;Ge++)we[Ge]=arguments[Ge+2];ee.children=we}return{$$typeof:s,type:I.type,key:pe,ref:Me,props:ee,_owner:xe}},ht.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ht.createElement=Y,ht.createFactory=function(I){var ie=Y.bind(null,I);return ie.type=I,ie},ht.createRef=function(){return{current:null}},ht.forwardRef=function(I){return{$$typeof:d,render:I}},ht.isValidElement=w,ht.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:le}},ht.memo=function(I,ie){return{$$typeof:m,type:I,compare:ie===void 0?null:ie}},ht.startTransition=function(I){var ie=z.transition;z.transition={};try{I()}finally{z.transition=ie}},ht.unstable_act=oe,ht.useCallback=function(I,ie){return ce.current.useCallback(I,ie)},ht.useContext=function(I){return ce.current.useContext(I)},ht.useDebugValue=function(){},ht.useDeferredValue=function(I){return ce.current.useDeferredValue(I)},ht.useEffect=function(I,ie){return ce.current.useEffect(I,ie)},ht.useId=function(){return ce.current.useId()},ht.useImperativeHandle=function(I,ie,Ie){return ce.current.useImperativeHandle(I,ie,Ie)},ht.useInsertionEffect=function(I,ie){return ce.current.useInsertionEffect(I,ie)},ht.useLayoutEffect=function(I,ie){return ce.current.useLayoutEffect(I,ie)},ht.useMemo=function(I,ie){return ce.current.useMemo(I,ie)},ht.useReducer=function(I,ie,Ie){return ce.current.useReducer(I,ie,Ie)},ht.useRef=function(I){return ce.current.useRef(I)},ht.useState=function(I){return ce.current.useState(I)},ht.useSyncExternalStore=function(I,ie,Ie){return ce.current.useSyncExternalStore(I,ie,Ie)},ht.useTransition=function(){return ce.current.useTransition()},ht.version="18.3.1",ht}var _p;function Ff(){return _p||(_p=1,pc.exports=G_()),pc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function W_(){if(vp)return wo;vp=1;var s=Ff(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,h,m){var _,v={},x=null,S=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)r.call(h,_)&&!u.hasOwnProperty(_)&&(v[_]=h[_]);if(d&&d.defaultProps)for(_ in h=d.defaultProps,h)v[_]===void 0&&(v[_]=h[_]);return{$$typeof:e,type:d,key:x,ref:S,props:v,_owner:a.current}}return wo.Fragment=n,wo.jsx=f,wo.jsxs=f,wo}var xp;function X_(){return xp||(xp=1,hc.exports=W_()),hc.exports}var W=X_(),ri=Ff();const gr=Am(ri);var Qa={},mc={exports:{}},Pn={},gc={exports:{}},_c={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function j_(){return yp||(yp=1,function(s){function e(z,ue){var oe=z.length;z.push(ue);e:for(;0<oe;){var I=oe-1>>>1,ie=z[I];if(0<a(ie,ue))z[I]=ue,z[oe]=ie,oe=I;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var ue=z[0],oe=z.pop();if(oe!==ue){z[0]=oe;e:for(var I=0,ie=z.length,Ie=ie>>>1;I<Ie;){var ee=2*(I+1)-1,pe=z[ee],Me=ee+1,xe=z[Me];if(0>a(pe,oe))Me<ie&&0>a(xe,pe)?(z[I]=xe,z[Me]=oe,I=Me):(z[I]=pe,z[ee]=oe,I=ee);else if(Me<ie&&0>a(xe,oe))z[I]=xe,z[Me]=oe,I=Me;else break e}}return ue}function a(z,ue){var oe=z.sortIndex-ue.sortIndex;return oe!==0?oe:z.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var h=[],m=[],_=1,v=null,x=3,S=!1,A=!1,R=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(z){for(var ue=n(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=z)r(m),ue.sortIndex=ue.expirationTime,e(h,ue);else break;ue=n(m)}}function C(z){if(R=!1,D(z),!A)if(n(h)!==null)A=!0,le(G);else{var ue=n(m);ue!==null&&ce(C,ue.startTime-z)}}function G(z,ue){A=!1,R&&(R=!1,g(Y),Y=-1),S=!0;var oe=x;try{for(D(ue),v=n(h);v!==null&&(!(v.expirationTime>ue)||z&&!k());){var I=v.callback;if(typeof I=="function"){v.callback=null,x=v.priorityLevel;var ie=I(v.expirationTime<=ue);ue=s.unstable_now(),typeof ie=="function"?v.callback=ie:v===n(h)&&r(h),D(ue)}else r(h);v=n(h)}if(v!==null)var Ie=!0;else{var ee=n(m);ee!==null&&ce(C,ee.startTime-ue),Ie=!1}return Ie}finally{v=null,x=oe,S=!1}}var B=!1,O=null,Y=-1,P=5,w=-1;function k(){return!(s.unstable_now()-w<P)}function se(){if(O!==null){var z=s.unstable_now();w=z;var ue=!0;try{ue=O(!0,z)}finally{ue?Q():(B=!1,O=null)}}else B=!1}var Q;if(typeof N=="function")Q=function(){N(se)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,fe=ae.port2;ae.port1.onmessage=se,Q=function(){fe.postMessage(null)}}else Q=function(){y(se,0)};function le(z){O=z,B||(B=!0,Q())}function ce(z,ue){Y=y(function(){z(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){A||S||(A=!0,le(G))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(z){switch(x){case 1:case 2:case 3:var ue=3;break;default:ue=x}var oe=x;x=ue;try{return z()}finally{x=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,ue){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var oe=x;x=z;try{return ue()}finally{x=oe}},s.unstable_scheduleCallback=function(z,ue,oe){var I=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?I+oe:I):oe=I,z){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=oe+ie,z={id:_++,callback:ue,priorityLevel:z,startTime:oe,expirationTime:ie,sortIndex:-1},oe>I?(z.sortIndex=oe,e(m,z),n(h)===null&&z===n(m)&&(R?(g(Y),Y=-1):R=!0,ce(C,oe-I))):(z.sortIndex=ie,e(h,z),A||S||(A=!0,le(G))),z},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(z){var ue=x;return function(){var oe=x;x=ue;try{return z.apply(this,arguments)}finally{x=oe}}}}(_c)),_c}var Sp;function Y_(){return Sp||(Sp=1,gc.exports=j_()),gc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function q_(){if(Mp)return Pn;Mp=1;var s=Ff(),e=Y_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return h.call(v,t)?!0:h.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,o,l,c,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,N);y[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,N);y[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,N);y[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,o,l){var c=y.hasOwnProperty(i)?y[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,o,c,l)&&(o=null),l||c===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),B=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),k=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),z=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,I;function ie(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ie=!1;function ee(t,i){if(!t||Ie)return"";Ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var l=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){l=te}t.call(i.prototype)}else{try{throw Error()}catch(te){l=te}t()}}catch(te){if(te&&l&&typeof te.stack=="string"){for(var c=te.stack.split(`
`),p=l.stack.split(`
`),M=c.length-1,L=p.length-1;1<=M&&0<=L&&c[M]!==p[L];)L--;for(;1<=M&&0<=L;M--,L--)if(c[M]!==p[L]){if(M!==1||L!==1)do if(M--,L--,0>L||c[M]!==p[L]){var U=`
`+c[M].replace(" at new "," at ");return t.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",t.displayName)),U}while(1<=M&&0<=L);break}}}finally{Ie=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ie(t):""}function pe(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=ee(t.type,!1),t;case 11:return t=ee(t.type.render,!1),t;case 1:return t=ee(t.type,!0),t;default:return""}}function Me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case B:return"Portal";case P:return"Profiler";case Y:return"StrictMode";case Q:return"Suspense";case ae:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Consumer";case w:return(t._context.displayName||"Context")+".Provider";case se:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fe:return i=t.displayName||null,i!==null?i:Me(t.type)||"Memo";case le:i=t._payload,t=t._init;try{return Me(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ye(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ge(t){var i=Ye(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function bt(t){t._valueTracker||(t._valueTracker=Ge(t))}function Lt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ye(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function F(t,i){var o=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function gn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function ft(t,i){pt(t,i);var o=we(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?At(t,i.type,o):i.hasOwnProperty("defaultValue")&&At(t,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function qe(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function At(t,i,o){(i!=="number"||lt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var We=Array.isArray;function b(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function J(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(We(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:we(o)}}function me(t,i){var o=we(i.value),l=we(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function _e(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function de(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?de(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ae,Ue=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ut(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ee[i]=Ee[t]})});function Je(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ee.hasOwnProperty(t)&&Ee[t]?(""+i).trim():i+"px"}function et(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Je(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var ke=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wt=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,re=null,he=null;function Le(t){if(t=uo(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ha(i),Re(t.stateNode,t.type,i))}}function be(t){re?he?he.push(t):he=[t]:re=t}function rt(){if(re){var t=re,i=he;if(he=re=null,Le(t),i)for(t=0;t<i.length;t++)Le(i[t])}}function Nt(t,i){return t(i)}function Yt(){}var xt=!1;function En(t,i,o){if(xt)return t(i,o);xt=!0;try{return Nt(t,i,o)}finally{xt=!1,(re!==null||he!==null)&&(Yt(),rt())}}function _n(t,i){var o=t.stateNode;if(o===null)return null;var l=ha(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Zr=!1;if(d)try{var Hi={};Object.defineProperty(Hi,"passive",{get:function(){Zr=!0}}),window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{Zr=!1}function xi(t,i,o,l,c,p,M,L,U){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(ve){this.onError(ve)}}var yi=!1,Mr=null,Er=!1,Vi=null,Xo={onError:function(t){yi=!0,Mr=t}};function Qr(t,i,o,l,c,p,M,L,U){yi=!1,Mr=null,xi.apply(Xo,arguments)}function jo(t,i,o,l,c,p,M,L,U){if(Qr.apply(this,arguments),yi){if(yi){var te=Mr;yi=!1,Mr=null}else throw Error(n(198));Er||(Er=!0,Vi=te)}}function li(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Yo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function qo(t){if(li(t)!==t)throw Error(n(188))}function Fl(t){var i=t.alternate;if(!i){if(i=li(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var p=c.alternate;if(p===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===p.child){for(p=c.child;p;){if(p===o)return qo(c),t;if(p===l)return qo(c),i;p=p.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=p;else{for(var M=!1,L=c.child;L;){if(L===o){M=!0,o=c,l=p;break}if(L===l){M=!0,l=c,o=p;break}L=L.sibling}if(!M){for(L=p.child;L;){if(L===o){M=!0,o=p,l=c;break}if(L===l){M=!0,l=p,o=c;break}L=L.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function $o(t){return t=Fl(t),t!==null?Ko(t):null}function Ko(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Ko(t);if(i!==null)return i;t=t.sibling}return null}var Zo=e.unstable_scheduleCallback,T=e.unstable_cancelCallback,X=e.unstable_shouldYield,ne=e.unstable_requestPaint,$=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,Ce=e.unstable_UserBlockingPriority,De=e.unstable_NormalPriority,Be=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Qe=null,He=null;function _t(t){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Qe,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:vt,Ht=Math.log,Ft=Math.LN2;function vt(t){return t>>>=0,t===0?32:31-(Ht(t)/Ft|0)|0}var $e=64,Vt=4194304;function mt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ln(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,p=t.pingedLanes,M=o&268435455;if(M!==0){var L=M&~c;L!==0?l=mt(L):(p&=M,p!==0&&(l=mt(p)))}else M=o&~c,M!==0?l=mt(M):p!==0&&(l=mt(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,p=i&-i,c>=p||c===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-st(i),c=1<<o,l|=t[o],i&=~c;return l}function Gi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-st(p),L=1<<M,U=c[M];U===-1?((L&o)===0||(L&l)!==0)&&(c[M]=Gi(L,i)):U<=i&&(t.expiredLanes|=L),p&=~L}}function Si(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pt(){var t=$e;return $e<<=1,($e&4194240)===0&&($e=64),t}function un(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Qt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-st(i),t[i]=o}function sn(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-st(o),p=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~p}}function Jt(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-st(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var yt=0;function ui(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var $f,Ol,Kf,Zf,Qf,kl=!1,Qo=[],Wi=null,Xi=null,ji=null,Ys=new Map,qs=new Map,Yi=[],fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jf(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Ys.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(i.pointerId)}}function $s(t,i,o,l,c,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[c]},i!==null&&(i=uo(i),i!==null&&Ol(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function dg(t,i,o,l,c){switch(i){case"focusin":return Wi=$s(Wi,t,i,o,l,c),!0;case"dragenter":return Xi=$s(Xi,t,i,o,l,c),!0;case"mouseover":return ji=$s(ji,t,i,o,l,c),!0;case"pointerover":var p=c.pointerId;return Ys.set(p,$s(Ys.get(p)||null,t,i,o,l,c)),!0;case"gotpointercapture":return p=c.pointerId,qs.set(p,$s(qs.get(p)||null,t,i,o,l,c)),!0}return!1}function ed(t){var i=Tr(t.target);if(i!==null){var o=li(i);if(o!==null){if(i=o.tag,i===13){if(i=Yo(o),i!==null){t.blockedOn=i,Qf(t.priority,function(){Kf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=zl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);wt=l,o.target.dispatchEvent(l),wt=null}else return i=uo(o),i!==null&&Ol(i),t.blockedOn=o,!1;i.shift()}return!0}function td(t,i,o){Jo(t)&&o.delete(i)}function hg(){kl=!1,Wi!==null&&Jo(Wi)&&(Wi=null),Xi!==null&&Jo(Xi)&&(Xi=null),ji!==null&&Jo(ji)&&(ji=null),Ys.forEach(td),qs.forEach(td)}function Ks(t,i){t.blockedOn===i&&(t.blockedOn=null,kl||(kl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,hg)))}function Zs(t){function i(c){return Ks(c,t)}if(0<Qo.length){Ks(Qo[0],t);for(var o=1;o<Qo.length;o++){var l=Qo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Wi!==null&&Ks(Wi,t),Xi!==null&&Ks(Xi,t),ji!==null&&Ks(ji,t),Ys.forEach(i),qs.forEach(i),o=0;o<Yi.length;o++)l=Yi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Yi.length&&(o=Yi[0],o.blockedOn===null);)ed(o),o.blockedOn===null&&Yi.shift()}var Jr=C.ReactCurrentBatchConfig,ea=!0;function pg(t,i,o,l){var c=yt,p=Jr.transition;Jr.transition=null;try{yt=1,Bl(t,i,o,l)}finally{yt=c,Jr.transition=p}}function mg(t,i,o,l){var c=yt,p=Jr.transition;Jr.transition=null;try{yt=4,Bl(t,i,o,l)}finally{yt=c,Jr.transition=p}}function Bl(t,i,o,l){if(ea){var c=zl(t,i,o,l);if(c===null)iu(t,i,l,ta,o),Jf(t,l);else if(dg(c,t,i,o,l))l.stopPropagation();else if(Jf(t,l),i&4&&-1<fg.indexOf(t)){for(;c!==null;){var p=uo(c);if(p!==null&&$f(p),p=zl(t,i,o,l),p===null&&iu(t,i,l,ta,o),p===c)break;c=p}c!==null&&l.stopPropagation()}else iu(t,i,l,null,o)}}var ta=null;function zl(t,i,o,l){if(ta=null,t=V(l),t=Tr(t),t!==null)if(i=li(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Yo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ta=t,null}function nd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case Se:return 1;case Ce:return 4;case De:case Be:return 16;case tt:return 536870912;default:return 16}default:return 16}}var qi=null,Hl=null,na=null;function id(){if(na)return na;var t,i=Hl,o=i.length,l,c="value"in qi?qi.value:qi.textContent,p=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[p-l];l++);return na=c.slice(t,1<l?1-l:void 0)}function ia(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ra(){return!0}function rd(){return!1}function Nn(t){function i(o,l,c,p,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(p):p[L]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ra:rd,this.isPropagationStopped=rd,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ra)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ra)},persist:function(){},isPersistent:ra}),i}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Nn(es),Qs=oe({},es,{view:0,detail:0}),gg=Nn(Qs),Gl,Wl,Js,sa=oe({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Gl=t.screenX-Js.screenX,Wl=t.screenY-Js.screenY):Wl=Gl=0,Js=t),Gl)},movementY:function(t){return"movementY"in t?t.movementY:Wl}}),sd=Nn(sa),_g=oe({},sa,{dataTransfer:0}),vg=Nn(_g),xg=oe({},Qs,{relatedTarget:0}),Xl=Nn(xg),yg=oe({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),Sg=Nn(yg),Mg=oe({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Eg=Nn(Mg),Tg=oe({},es,{data:0}),od=Nn(Tg),wg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ag={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Rg[t])?!!i[t]:!1}function jl(){return Cg}var Pg=oe({},Qs,{key:function(t){if(t.key){var i=wg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ag[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(t){return t.type==="keypress"?ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bg=Nn(Pg),Lg=oe({},sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ad=Nn(Lg),Dg=oe({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),Ng=Nn(Dg),Ig=oe({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ug=Nn(Ig),Fg=oe({},sa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Og=Nn(Fg),kg=[9,13,27,32],Yl=d&&"CompositionEvent"in window,eo=null;d&&"documentMode"in document&&(eo=document.documentMode);var Bg=d&&"TextEvent"in window&&!eo,ld=d&&(!Yl||eo&&8<eo&&11>=eo),ud=" ",cd=!1;function fd(t,i){switch(t){case"keyup":return kg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function zg(t,i){switch(t){case"compositionend":return dd(i);case"keypress":return i.which!==32?null:(cd=!0,ud);case"textInput":return t=i.data,t===ud&&cd?null:t;default:return null}}function Hg(t,i){if(ts)return t==="compositionend"||!Yl&&fd(t,i)?(t=id(),na=Hl=qi=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ld&&i.locale!=="ko"?null:i.data;default:return null}}var Vg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Vg[t.type]:i==="textarea"}function pd(t,i,o,l){be(l),i=ca(i,"onChange"),0<i.length&&(o=new Vl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var to=null,no=null;function Gg(t){Dd(t,0)}function oa(t){var i=os(t);if(Lt(i))return t}function Wg(t,i){if(t==="change")return i}var md=!1;if(d){var ql;if(d){var $l="oninput"in document;if(!$l){var gd=document.createElement("div");gd.setAttribute("oninput","return;"),$l=typeof gd.oninput=="function"}ql=$l}else ql=!1;md=ql&&(!document.documentMode||9<document.documentMode)}function _d(){to&&(to.detachEvent("onpropertychange",vd),no=to=null)}function vd(t){if(t.propertyName==="value"&&oa(no)){var i=[];pd(i,no,t,V(t)),En(Gg,i)}}function Xg(t,i,o){t==="focusin"?(_d(),to=i,no=o,to.attachEvent("onpropertychange",vd)):t==="focusout"&&_d()}function jg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oa(no)}function Yg(t,i){if(t==="click")return oa(i)}function qg(t,i){if(t==="input"||t==="change")return oa(i)}function $g(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var $n=typeof Object.is=="function"?Object.is:$g;function io(t,i){if($n(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!h.call(i,c)||!$n(t[c],i[c]))return!1}return!0}function xd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yd(t,i){var o=xd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=xd(o)}}function Sd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Sd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Md(){for(var t=window,i=lt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=lt(t.document)}return i}function Kl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Kg(t){var i=Md(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Sd(o.ownerDocument.documentElement,o)){if(l!==null&&Kl(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,p=Math.min(l.start,c);l=l.end===void 0?p:Math.min(l.end,c),!t.extend&&p>l&&(c=l,l=p,p=c),c=yd(o,p);var M=yd(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zg=d&&"documentMode"in document&&11>=document.documentMode,ns=null,Zl=null,ro=null,Ql=!1;function Ed(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ql||ns==null||ns!==lt(l)||(l=ns,"selectionStart"in l&&Kl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ro&&io(ro,l)||(ro=l,l=ca(Zl,"onSelect"),0<l.length&&(i=new Vl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=ns)))}function aa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var is={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},Jl={},Td={};d&&(Td=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function la(t){if(Jl[t])return Jl[t];if(!is[t])return t;var i=is[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Td)return Jl[t]=i[o];return t}var wd=la("animationend"),Ad=la("animationiteration"),Rd=la("animationstart"),Cd=la("transitionend"),Pd=new Map,bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){Pd.set(t,i),u(i,[t])}for(var eu=0;eu<bd.length;eu++){var tu=bd[eu],Qg=tu.toLowerCase(),Jg=tu[0].toUpperCase()+tu.slice(1);$i(Qg,"on"+Jg)}$i(wd,"onAnimationEnd"),$i(Ad,"onAnimationIteration"),$i(Rd,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(Cd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e_=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Ld(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,jo(l,i,void 0,t),t.currentTarget=null}function Dd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var L=l[M],U=L.instance,te=L.currentTarget;if(L=L.listener,U!==p&&c.isPropagationStopped())break e;Ld(c,L,te),p=U}else for(M=0;M<l.length;M++){if(L=l[M],U=L.instance,te=L.currentTarget,L=L.listener,U!==p&&c.isPropagationStopped())break e;Ld(c,L,te),p=U}}}if(Er)throw t=Vi,Er=!1,Vi=null,t}function It(t,i){var o=i[uu];o===void 0&&(o=i[uu]=new Set);var l=t+"__bubble";o.has(l)||(Nd(i,t,2,!1),o.add(l))}function nu(t,i,o){var l=0;i&&(l|=4),Nd(o,t,l,i)}var ua="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[ua]){t[ua]=!0,r.forEach(function(o){o!=="selectionchange"&&(e_.has(o)||nu(o,!1,t),nu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ua]||(i[ua]=!0,nu("selectionchange",!1,i))}}function Nd(t,i,o,l){switch(nd(i)){case 1:var c=pg;break;case 4:c=mg;break;default:c=Bl}o=c.bind(null,i,o,t),c=void 0,!Zr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function iu(t,i,o,l,c){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var L=l.stateNode.containerInfo;if(L===c||L.nodeType===8&&L.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var U=M.tag;if((U===3||U===4)&&(U=M.stateNode.containerInfo,U===c||U.nodeType===8&&U.parentNode===c))return;M=M.return}for(;L!==null;){if(M=Tr(L),M===null)return;if(U=M.tag,U===5||U===6){l=p=M;continue e}L=L.parentNode}}l=l.return}En(function(){var te=p,ve=V(o),ye=[];e:{var ge=Pd.get(t);if(ge!==void 0){var Ne=Vl,ze=t;switch(t){case"keypress":if(ia(o)===0)break e;case"keydown":case"keyup":Ne=bg;break;case"focusin":ze="focus",Ne=Xl;break;case"focusout":ze="blur",Ne=Xl;break;case"beforeblur":case"afterblur":Ne=Xl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=vg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=Ng;break;case wd:case Ad:case Rd:Ne=Sg;break;case Cd:Ne=Ug;break;case"scroll":Ne=gg;break;case"wheel":Ne=Og;break;case"copy":case"cut":case"paste":Ne=Eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=ad}var Ve=(i&4)!==0,Wt=!Ve&&t==="scroll",q=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var H=te,K;H!==null;){K=H;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,q!==null&&(Te=_n(H,q),Te!=null&&Ve.push(ao(H,Te,K)))),Wt)break;H=H.return}0<Ve.length&&(ge=new Ne(ge,ze,null,o,ve),ye.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ne=t==="mouseout"||t==="pointerout",ge&&o!==wt&&(ze=o.relatedTarget||o.fromElement)&&(Tr(ze)||ze[Mi]))break e;if((Ne||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ne?(ze=o.relatedTarget||o.toElement,Ne=te,ze=ze?Tr(ze):null,ze!==null&&(Wt=li(ze),ze!==Wt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ne=null,ze=te),Ne!==ze)){if(Ve=sd,Te="onMouseLeave",q="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=ad,Te="onPointerLeave",q="onPointerEnter",H="pointer"),Wt=Ne==null?ge:os(Ne),K=ze==null?ge:os(ze),ge=new Ve(Te,H+"leave",Ne,o,ve),ge.target=Wt,ge.relatedTarget=K,Te=null,Tr(ve)===te&&(Ve=new Ve(q,H+"enter",ze,o,ve),Ve.target=K,Ve.relatedTarget=Wt,Te=Ve),Wt=Te,Ne&&ze)t:{for(Ve=Ne,q=ze,H=0,K=Ve;K;K=rs(K))H++;for(K=0,Te=q;Te;Te=rs(Te))K++;for(;0<H-K;)Ve=rs(Ve),H--;for(;0<K-H;)q=rs(q),K--;for(;H--;){if(Ve===q||q!==null&&Ve===q.alternate)break t;Ve=rs(Ve),q=rs(q)}Ve=null}else Ve=null;Ne!==null&&Id(ye,ge,Ne,Ve,!1),ze!==null&&Wt!==null&&Id(ye,Wt,ze,Ve,!0)}}e:{if(ge=te?os(te):window,Ne=ge.nodeName&&ge.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&ge.type==="file")var je=Wg;else if(hd(ge))if(md)je=qg;else{je=jg;var Ke=Xg}else(Ne=ge.nodeName)&&Ne.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=Yg);if(je&&(je=je(t,te))){pd(ye,je,o,ve);break e}Ke&&Ke(t,ge,te),t==="focusout"&&(Ke=ge._wrapperState)&&Ke.controlled&&ge.type==="number"&&At(ge,"number",ge.value)}switch(Ke=te?os(te):window,t){case"focusin":(hd(Ke)||Ke.contentEditable==="true")&&(ns=Ke,Zl=te,ro=null);break;case"focusout":ro=Zl=ns=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,Ed(ye,o,ve);break;case"selectionchange":if(Zg)break;case"keydown":case"keyup":Ed(ye,o,ve)}var Ze;if(Yl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ts?fd(t,o)&&(nt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(ld&&o.locale!=="ko"&&(ts||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ts&&(Ze=id()):(qi=ve,Hl="value"in qi?qi.value:qi.textContent,ts=!0)),Ke=ca(te,nt),0<Ke.length&&(nt=new od(nt,t,null,o,ve),ye.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=dd(o),Ze!==null&&(nt.data=Ze)))),(Ze=Bg?zg(t,o):Hg(t,o))&&(te=ca(te,"onBeforeInput"),0<te.length&&(ve=new od("onBeforeInput","beforeinput",null,o,ve),ye.push({event:ve,listeners:te}),ve.data=Ze))}Dd(ye,i)})}function ao(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ca(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,p=c.stateNode;c.tag===5&&p!==null&&(c=p,p=_n(t,o),p!=null&&l.unshift(ao(t,p,c)),p=_n(t,i),p!=null&&l.push(ao(t,p,c))),t=t.return}return l}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Id(t,i,o,l,c){for(var p=i._reactName,M=[];o!==null&&o!==l;){var L=o,U=L.alternate,te=L.stateNode;if(U!==null&&U===l)break;L.tag===5&&te!==null&&(L=te,c?(U=_n(o,p),U!=null&&M.unshift(ao(o,U,L))):c||(U=_n(o,p),U!=null&&M.push(ao(o,U,L)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var t_=/\r\n?/g,n_=/\u0000|\uFFFD/g;function Ud(t){return(typeof t=="string"?t:""+t).replace(t_,`
`).replace(n_,"")}function fa(t,i,o){if(i=Ud(i),Ud(t)!==i&&o)throw Error(n(425))}function da(){}var ru=null,su=null;function ou(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var au=typeof setTimeout=="function"?setTimeout:void 0,i_=typeof clearTimeout=="function"?clearTimeout:void 0,Fd=typeof Promise=="function"?Promise:void 0,r_=typeof queueMicrotask=="function"?queueMicrotask:typeof Fd<"u"?function(t){return Fd.resolve(null).then(t).catch(s_)}:au;function s_(t){setTimeout(function(){throw t})}function lu(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),Zs(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);Zs(i)}function Ki(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Od(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),ci="__reactFiber$"+ss,lo="__reactProps$"+ss,Mi="__reactContainer$"+ss,uu="__reactEvents$"+ss,o_="__reactListeners$"+ss,a_="__reactHandles$"+ss;function Tr(t){var i=t[ci];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Mi]||o[ci]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Od(t);t!==null;){if(o=t[ci])return o;t=Od(t)}return i}t=o,o=t.parentNode}return null}function uo(t){return t=t[ci]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ha(t){return t[lo]||null}var cu=[],as=-1;function Zi(t){return{current:t}}function Ut(t){0>as||(t.current=cu[as],cu[as]=null,as--)}function Dt(t,i){as++,cu[as]=t.current,t.current=i}var Qi={},cn=Zi(Qi),Tn=Zi(!1),wr=Qi;function ls(t,i){var o=t.type.contextTypes;if(!o)return Qi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},p;for(p in o)c[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function wn(t){return t=t.childContextTypes,t!=null}function pa(){Ut(Tn),Ut(cn)}function kd(t,i,o){if(cn.current!==Qi)throw Error(n(168));Dt(cn,i),Dt(Tn,o)}function Bd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,xe(t)||"Unknown",c));return oe({},o,l)}function ma(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,wr=cn.current,Dt(cn,t),Dt(Tn,Tn.current),!0}function zd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Bd(t,i,wr),l.__reactInternalMemoizedMergedChildContext=t,Ut(Tn),Ut(cn),Dt(cn,t)):Ut(Tn),Dt(Tn,o)}var Ei=null,ga=!1,fu=!1;function Hd(t){Ei===null?Ei=[t]:Ei.push(t)}function l_(t){ga=!0,Hd(t)}function Ji(){if(!fu&&Ei!==null){fu=!0;var t=0,i=yt;try{var o=Ei;for(yt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ei=null,ga=!1}catch(c){throw Ei!==null&&(Ei=Ei.slice(t+1)),Zo(Se,Ji),c}finally{yt=i,fu=!1}}return null}var us=[],cs=0,_a=null,va=0,zn=[],Hn=0,Ar=null,Ti=1,wi="";function Rr(t,i){us[cs++]=va,us[cs++]=_a,_a=t,va=i}function Vd(t,i,o){zn[Hn++]=Ti,zn[Hn++]=wi,zn[Hn++]=Ar,Ar=t;var l=Ti;t=wi;var c=32-st(l)-1;l&=~(1<<c),o+=1;var p=32-st(i)+c;if(30<p){var M=c-c%5;p=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Ti=1<<32-st(i)+c|o<<c|l,wi=p+t}else Ti=1<<p|o<<c|l,wi=t}function du(t){t.return!==null&&(Rr(t,1),Vd(t,1,0))}function hu(t){for(;t===_a;)_a=us[--cs],us[cs]=null,va=us[--cs],us[cs]=null;for(;t===Ar;)Ar=zn[--Hn],zn[Hn]=null,wi=zn[--Hn],zn[Hn]=null,Ti=zn[--Hn],zn[Hn]=null}var In=null,Un=null,Ot=!1,Kn=null;function Gd(t,i){var o=Xn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Wd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,In=t,Un=Ki(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,In=t,Un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ar!==null?{id:Ti,overflow:wi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Xn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,In=t,Un=null,!0):!1;default:return!1}}function pu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mu(t){if(Ot){var i=Un;if(i){var o=i;if(!Wd(t,i)){if(pu(t))throw Error(n(418));i=Ki(o.nextSibling);var l=In;i&&Wd(t,i)?Gd(l,o):(t.flags=t.flags&-4097|2,Ot=!1,In=t)}}else{if(pu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,In=t}}}function Xd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function xa(t){if(t!==In)return!1;if(!Ot)return Xd(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ou(t.type,t.memoizedProps)),i&&(i=Un)){if(pu(t))throw jd(),Error(n(418));for(;i;)Gd(t,i),i=Ki(i.nextSibling)}if(Xd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Un=Ki(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Un=null}}else Un=In?Ki(t.stateNode.nextSibling):null;return!0}function jd(){for(var t=Un;t;)t=Ki(t.nextSibling)}function fs(){Un=In=null,Ot=!1}function gu(t){Kn===null?Kn=[t]:Kn.push(t)}var u_=C.ReactCurrentBatchConfig;function co(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var L=c.refs;M===null?delete L[p]:L[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ya(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Yd(t){var i=t._init;return i(t._payload)}function qd(t){function i(q,H){if(t){var K=q.deletions;K===null?(q.deletions=[H],q.flags|=16):K.push(H)}}function o(q,H){if(!t)return null;for(;H!==null;)i(q,H),H=H.sibling;return null}function l(q,H){for(q=new Map;H!==null;)H.key!==null?q.set(H.key,H):q.set(H.index,H),H=H.sibling;return q}function c(q,H){return q=ar(q,H),q.index=0,q.sibling=null,q}function p(q,H,K){return q.index=K,t?(K=q.alternate,K!==null?(K=K.index,K<H?(q.flags|=2,H):K):(q.flags|=2,H)):(q.flags|=1048576,H)}function M(q){return t&&q.alternate===null&&(q.flags|=2),q}function L(q,H,K,Te){return H===null||H.tag!==6?(H=ac(K,q.mode,Te),H.return=q,H):(H=c(H,K),H.return=q,H)}function U(q,H,K,Te){var je=K.type;return je===O?ve(q,H,K.props.children,Te,K.key):H!==null&&(H.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===le&&Yd(je)===H.type)?(Te=c(H,K.props),Te.ref=co(q,H,K),Te.return=q,Te):(Te=Wa(K.type,K.key,K.props,null,q.mode,Te),Te.ref=co(q,H,K),Te.return=q,Te)}function te(q,H,K,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=lc(K,q.mode,Te),H.return=q,H):(H=c(H,K.children||[]),H.return=q,H)}function ve(q,H,K,Te,je){return H===null||H.tag!==7?(H=Ur(K,q.mode,Te,je),H.return=q,H):(H=c(H,K),H.return=q,H)}function ye(q,H,K){if(typeof H=="string"&&H!==""||typeof H=="number")return H=ac(""+H,q.mode,K),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case G:return K=Wa(H.type,H.key,H.props,null,q.mode,K),K.ref=co(q,null,H),K.return=q,K;case B:return H=lc(H,q.mode,K),H.return=q,H;case le:var Te=H._init;return ye(q,Te(H._payload),K)}if(We(H)||ue(H))return H=Ur(H,q.mode,K,null),H.return=q,H;ya(q,H)}return null}function ge(q,H,K,Te){var je=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return je!==null?null:L(q,H,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case G:return K.key===je?U(q,H,K,Te):null;case B:return K.key===je?te(q,H,K,Te):null;case le:return je=K._init,ge(q,H,je(K._payload),Te)}if(We(K)||ue(K))return je!==null?null:ve(q,H,K,Te,null);ya(q,K)}return null}function Ne(q,H,K,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return q=q.get(K)||null,L(H,q,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case G:return q=q.get(Te.key===null?K:Te.key)||null,U(H,q,Te,je);case B:return q=q.get(Te.key===null?K:Te.key)||null,te(H,q,Te,je);case le:var Ke=Te._init;return Ne(q,H,K,Ke(Te._payload),je)}if(We(Te)||ue(Te))return q=q.get(K)||null,ve(H,q,Te,je,null);ya(H,Te)}return null}function ze(q,H,K,Te){for(var je=null,Ke=null,Ze=H,nt=H=0,nn=null;Ze!==null&&nt<K.length;nt++){Ze.index>nt?(nn=Ze,Ze=null):nn=Ze.sibling;var Mt=ge(q,Ze,K[nt],Te);if(Mt===null){Ze===null&&(Ze=nn);break}t&&Ze&&Mt.alternate===null&&i(q,Ze),H=p(Mt,H,nt),Ke===null?je=Mt:Ke.sibling=Mt,Ke=Mt,Ze=nn}if(nt===K.length)return o(q,Ze),Ot&&Rr(q,nt),je;if(Ze===null){for(;nt<K.length;nt++)Ze=ye(q,K[nt],Te),Ze!==null&&(H=p(Ze,H,nt),Ke===null?je=Ze:Ke.sibling=Ze,Ke=Ze);return Ot&&Rr(q,nt),je}for(Ze=l(q,Ze);nt<K.length;nt++)nn=Ne(Ze,q,nt,K[nt],Te),nn!==null&&(t&&nn.alternate!==null&&Ze.delete(nn.key===null?nt:nn.key),H=p(nn,H,nt),Ke===null?je=nn:Ke.sibling=nn,Ke=nn);return t&&Ze.forEach(function(lr){return i(q,lr)}),Ot&&Rr(q,nt),je}function Ve(q,H,K,Te){var je=ue(K);if(typeof je!="function")throw Error(n(150));if(K=je.call(K),K==null)throw Error(n(151));for(var Ke=je=null,Ze=H,nt=H=0,nn=null,Mt=K.next();Ze!==null&&!Mt.done;nt++,Mt=K.next()){Ze.index>nt?(nn=Ze,Ze=null):nn=Ze.sibling;var lr=ge(q,Ze,Mt.value,Te);if(lr===null){Ze===null&&(Ze=nn);break}t&&Ze&&lr.alternate===null&&i(q,Ze),H=p(lr,H,nt),Ke===null?je=lr:Ke.sibling=lr,Ke=lr,Ze=nn}if(Mt.done)return o(q,Ze),Ot&&Rr(q,nt),je;if(Ze===null){for(;!Mt.done;nt++,Mt=K.next())Mt=ye(q,Mt.value,Te),Mt!==null&&(H=p(Mt,H,nt),Ke===null?je=Mt:Ke.sibling=Mt,Ke=Mt);return Ot&&Rr(q,nt),je}for(Ze=l(q,Ze);!Mt.done;nt++,Mt=K.next())Mt=Ne(Ze,q,nt,Mt.value,Te),Mt!==null&&(t&&Mt.alternate!==null&&Ze.delete(Mt.key===null?nt:Mt.key),H=p(Mt,H,nt),Ke===null?je=Mt:Ke.sibling=Mt,Ke=Mt);return t&&Ze.forEach(function(V_){return i(q,V_)}),Ot&&Rr(q,nt),je}function Wt(q,H,K,Te){if(typeof K=="object"&&K!==null&&K.type===O&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case G:e:{for(var je=K.key,Ke=H;Ke!==null;){if(Ke.key===je){if(je=K.type,je===O){if(Ke.tag===7){o(q,Ke.sibling),H=c(Ke,K.props.children),H.return=q,q=H;break e}}else if(Ke.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===le&&Yd(je)===Ke.type){o(q,Ke.sibling),H=c(Ke,K.props),H.ref=co(q,Ke,K),H.return=q,q=H;break e}o(q,Ke);break}else i(q,Ke);Ke=Ke.sibling}K.type===O?(H=Ur(K.props.children,q.mode,Te,K.key),H.return=q,q=H):(Te=Wa(K.type,K.key,K.props,null,q.mode,Te),Te.ref=co(q,H,K),Te.return=q,q=Te)}return M(q);case B:e:{for(Ke=K.key;H!==null;){if(H.key===Ke)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){o(q,H.sibling),H=c(H,K.children||[]),H.return=q,q=H;break e}else{o(q,H);break}else i(q,H);H=H.sibling}H=lc(K,q.mode,Te),H.return=q,q=H}return M(q);case le:return Ke=K._init,Wt(q,H,Ke(K._payload),Te)}if(We(K))return ze(q,H,K,Te);if(ue(K))return Ve(q,H,K,Te);ya(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,H!==null&&H.tag===6?(o(q,H.sibling),H=c(H,K),H.return=q,q=H):(o(q,H),H=ac(K,q.mode,Te),H.return=q,q=H),M(q)):o(q,H)}return Wt}var ds=qd(!0),$d=qd(!1),Sa=Zi(null),Ma=null,hs=null,_u=null;function vu(){_u=hs=Ma=null}function xu(t){var i=Sa.current;Ut(Sa),t._currentValue=i}function yu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ps(t,i){Ma=t,_u=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(An=!0),t.firstContext=null)}function Vn(t){var i=t._currentValue;if(_u!==t)if(t={context:t,memoizedValue:i,next:null},hs===null){if(Ma===null)throw Error(n(308));hs=t,Ma.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return i}var Cr=null;function Su(t){Cr===null?Cr=[t]:Cr.push(t)}function Kd(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,Su(i)):(o.next=c.next,c.next=o),i.interleaved=o,Ai(t,l)}function Ai(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var er=!1;function Mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function tr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(St&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ai(t,o)}return c=l.interleaved,c===null?(i.next=i,Su(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ai(t,o)}function Ea(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Jt(t,o)}}function Qd(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?c=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?c=p=i:p=p.next=i}else c=p=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ta(t,i,o,l){var c=t.updateQueue;er=!1;var p=c.firstBaseUpdate,M=c.lastBaseUpdate,L=c.shared.pending;if(L!==null){c.shared.pending=null;var U=L,te=U.next;U.next=null,M===null?p=te:M.next=te,M=U;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,L=ve.lastBaseUpdate,L!==M&&(L===null?ve.firstBaseUpdate=te:L.next=te,ve.lastBaseUpdate=U))}if(p!==null){var ye=c.baseState;M=0,ve=te=U=null,L=p;do{var ge=L.lane,Ne=L.eventTime;if((l&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ne,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var ze=t,Ve=L;switch(ge=i,Ne=o,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){ye=ze.call(Ne,ye,ge);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,ge=typeof ze=="function"?ze.call(Ne,ye,ge):ze,ge==null)break e;ye=oe({},ye,ge);break e;case 2:er=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,ge=c.effects,ge===null?c.effects=[L]:ge.push(L))}else Ne={eventTime:Ne,lane:ge,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ve===null?(te=ve=Ne,U=ye):ve=ve.next=Ne,M|=ge;if(L=L.next,L===null){if(L=c.shared.pending,L===null)break;ge=L,L=ge.next,ge.next=null,c.lastBaseUpdate=ge,c.shared.pending=null}}while(!0);if(ve===null&&(U=ye),c.baseState=U,c.firstBaseUpdate=te,c.lastBaseUpdate=ve,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else p===null&&(c.shared.lanes=0);Lr|=M,t.lanes=M,t.memoizedState=ye}}function Jd(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var fo={},fi=Zi(fo),ho=Zi(fo),po=Zi(fo);function Pr(t){if(t===fo)throw Error(n(174));return t}function Eu(t,i){switch(Dt(po,i),Dt(ho,t),Dt(fi,fo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Xe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Xe(i,t)}Ut(fi),Dt(fi,i)}function ms(){Ut(fi),Ut(ho),Ut(po)}function eh(t){Pr(po.current);var i=Pr(fi.current),o=Xe(i,t.type);i!==o&&(Dt(ho,t),Dt(fi,o))}function Tu(t){ho.current===t&&(Ut(fi),Ut(ho))}var kt=Zi(0);function wa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var wu=[];function Au(){for(var t=0;t<wu.length;t++)wu[t]._workInProgressVersionPrimary=null;wu.length=0}var Aa=C.ReactCurrentDispatcher,Ru=C.ReactCurrentBatchConfig,br=0,Bt=null,qt=null,en=null,Ra=!1,mo=!1,go=0,c_=0;function fn(){throw Error(n(321))}function Cu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!$n(t[o],i[o]))return!1;return!0}function Pu(t,i,o,l,c,p){if(br=p,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Aa.current=t===null||t.memoizedState===null?p_:m_,t=o(l,c),mo){p=0;do{if(mo=!1,go=0,25<=p)throw Error(n(301));p+=1,en=qt=null,i.updateQueue=null,Aa.current=g_,t=o(l,c)}while(mo)}if(Aa.current=ba,i=qt!==null&&qt.next!==null,br=0,en=qt=Bt=null,Ra=!1,i)throw Error(n(300));return t}function bu(){var t=go!==0;return go=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?Bt.memoizedState=en=t:en=en.next=t,en}function Gn(){if(qt===null){var t=Bt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=en===null?Bt.memoizedState:en.next;if(i!==null)en=i,qt=t;else{if(t===null)throw Error(n(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},en===null?Bt.memoizedState=en=t:en=en.next=t}return en}function _o(t,i){return typeof i=="function"?i(t):i}function Lu(t){var i=Gn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=qt,c=l.baseQueue,p=o.pending;if(p!==null){if(c!==null){var M=c.next;c.next=p.next,p.next=M}l.baseQueue=c=p,o.pending=null}if(c!==null){p=c.next,l=l.baseState;var L=M=null,U=null,te=p;do{var ve=te.lane;if((br&ve)===ve)U!==null&&(U=U.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),l=te.hasEagerState?te.eagerState:t(l,te.action);else{var ye={lane:ve,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};U===null?(L=U=ye,M=l):U=U.next=ye,Bt.lanes|=ve,Lr|=ve}te=te.next}while(te!==null&&te!==p);U===null?M=l:U.next=L,$n(l,i.memoizedState)||(An=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=U,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do p=c.lane,Bt.lanes|=p,Lr|=p,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Du(t){var i=Gn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,p=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do p=t(p,M.action),M=M.next;while(M!==c);$n(p,i.memoizedState)||(An=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,l]}function th(){}function nh(t,i){var o=Bt,l=Gn(),c=i(),p=!$n(l.memoizedState,c);if(p&&(l.memoizedState=c,An=!0),l=l.queue,Nu(sh.bind(null,o,l,t),[t]),l.getSnapshot!==i||p||en!==null&&en.memoizedState.tag&1){if(o.flags|=2048,vo(9,rh.bind(null,o,l,c,i),void 0,null),tn===null)throw Error(n(349));(br&30)!==0||ih(o,i,c)}return c}function ih(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function rh(t,i,o,l){i.value=o,i.getSnapshot=l,oh(i)&&ah(t)}function sh(t,i,o){return o(function(){oh(i)&&ah(t)})}function oh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!$n(t,o)}catch{return!0}}function ah(t){var i=Ai(t,1);i!==null&&ei(i,t,1,-1)}function lh(t){var i=di();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:t},i.queue=t,t=t.dispatch=h_.bind(null,Bt,t),[i.memoizedState,t]}function vo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function uh(){return Gn().memoizedState}function Ca(t,i,o,l){var c=di();Bt.flags|=t,c.memoizedState=vo(1|i,o,void 0,l===void 0?null:l)}function Pa(t,i,o,l){var c=Gn();l=l===void 0?null:l;var p=void 0;if(qt!==null){var M=qt.memoizedState;if(p=M.destroy,l!==null&&Cu(l,M.deps)){c.memoizedState=vo(i,o,p,l);return}}Bt.flags|=t,c.memoizedState=vo(1|i,o,p,l)}function ch(t,i){return Ca(8390656,8,t,i)}function Nu(t,i){return Pa(2048,8,t,i)}function fh(t,i){return Pa(4,2,t,i)}function dh(t,i){return Pa(4,4,t,i)}function hh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ph(t,i,o){return o=o!=null?o.concat([t]):null,Pa(4,4,hh.bind(null,i,t),o)}function Iu(){}function mh(t,i){var o=Gn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Cu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function gh(t,i){var o=Gn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Cu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function _h(t,i,o){return(br&21)===0?(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=o):($n(o,i)||(o=Pt(),Bt.lanes|=o,Lr|=o,t.baseState=!0),i)}function f_(t,i){var o=yt;yt=o!==0&&4>o?o:4,t(!0);var l=Ru.transition;Ru.transition={};try{t(!1),i()}finally{yt=o,Ru.transition=l}}function vh(){return Gn().memoizedState}function d_(t,i,o){var l=sr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},xh(t))yh(i,o);else if(o=Kd(t,i,o,l),o!==null){var c=yn();ei(o,t,l,c),Sh(o,i,l)}}function h_(t,i,o){var l=sr(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(xh(t))yh(i,c);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,L=p(M,o);if(c.hasEagerState=!0,c.eagerState=L,$n(L,M)){var U=i.interleaved;U===null?(c.next=c,Su(i)):(c.next=U.next,U.next=c),i.interleaved=c;return}}catch{}finally{}o=Kd(t,i,c,l),o!==null&&(c=yn(),ei(o,t,l,c),Sh(o,i,l))}}function xh(t){var i=t.alternate;return t===Bt||i!==null&&i===Bt}function yh(t,i){mo=Ra=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Sh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Jt(t,o)}}var ba={readContext:Vn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},p_={readContext:Vn,useCallback:function(t,i){return di().memoizedState=[t,i===void 0?null:i],t},useContext:Vn,useEffect:ch,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ca(4194308,4,hh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ca(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ca(4,2,t,i)},useMemo:function(t,i){var o=di();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=di();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=d_.bind(null,Bt,t),[l.memoizedState,t]},useRef:function(t){var i=di();return t={current:t},i.memoizedState=t},useState:lh,useDebugValue:Iu,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=lh(!1),i=t[0];return t=f_.bind(null,t[1]),di().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Bt,c=di();if(Ot){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),tn===null)throw Error(n(349));(br&30)!==0||ih(l,i,o)}c.memoizedState=o;var p={value:o,getSnapshot:i};return c.queue=p,ch(sh.bind(null,l,p,t),[t]),l.flags|=2048,vo(9,rh.bind(null,l,p,o,i),void 0,null),o},useId:function(){var t=di(),i=tn.identifierPrefix;if(Ot){var o=wi,l=Ti;o=(l&~(1<<32-st(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=go++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=c_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},m_={readContext:Vn,useCallback:mh,useContext:Vn,useEffect:Nu,useImperativeHandle:ph,useInsertionEffect:fh,useLayoutEffect:dh,useMemo:gh,useReducer:Lu,useRef:uh,useState:function(){return Lu(_o)},useDebugValue:Iu,useDeferredValue:function(t){var i=Gn();return _h(i,qt.memoizedState,t)},useTransition:function(){var t=Lu(_o)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:th,useSyncExternalStore:nh,useId:vh,unstable_isNewReconciler:!1},g_={readContext:Vn,useCallback:mh,useContext:Vn,useEffect:Nu,useImperativeHandle:ph,useInsertionEffect:fh,useLayoutEffect:dh,useMemo:gh,useReducer:Du,useRef:uh,useState:function(){return Du(_o)},useDebugValue:Iu,useDeferredValue:function(t){var i=Gn();return qt===null?i.memoizedState=t:_h(i,qt.memoizedState,t)},useTransition:function(){var t=Du(_o)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:th,useSyncExternalStore:nh,useId:vh,unstable_isNewReconciler:!1};function Zn(t,i){if(t&&t.defaultProps){i=oe({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Uu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:oe({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var La={isMounted:function(t){return(t=t._reactInternals)?li(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=yn(),c=sr(t),p=Ri(l,c);p.payload=i,o!=null&&(p.callback=o),i=tr(t,p,c),i!==null&&(ei(i,t,c,l),Ea(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=yn(),c=sr(t),p=Ri(l,c);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=tr(t,p,c),i!==null&&(ei(i,t,c,l),Ea(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=yn(),l=sr(t),c=Ri(o,l);c.tag=2,i!=null&&(c.callback=i),i=tr(t,c,l),i!==null&&(ei(i,t,l,o),Ea(i,t,l))}};function Mh(t,i,o,l,c,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!io(o,l)||!io(c,p):!0}function Eh(t,i,o){var l=!1,c=Qi,p=i.contextType;return typeof p=="object"&&p!==null?p=Vn(p):(c=wn(i)?wr:cn.current,l=i.contextTypes,p=(l=l!=null)?ls(t,c):Qi),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=La,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=p),i}function Th(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&La.enqueueReplaceState(i,i.state,null)}function Fu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Mu(t);var p=i.contextType;typeof p=="object"&&p!==null?c.context=Vn(p):(p=wn(i)?wr:cn.current,c.context=ls(t,p)),c.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Uu(t,i,p,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&La.enqueueReplaceState(c,c.state,null),Ta(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,i){try{var o="",l=i;do o+=pe(l),l=l.return;while(l);var c=o}catch(p){c=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:c,digest:null}}function Ou(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function ku(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var __=typeof WeakMap=="function"?WeakMap:Map;function wh(t,i,o){o=Ri(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){ka||(ka=!0,Ju=l),ku(t,i)},o}function Ah(t,i,o){o=Ri(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){ku(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){ku(t,i),typeof l!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Rh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new __;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=L_.bind(null,t,i,o),i.then(t,t))}function Ch(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Ph(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ri(-1,1),i.tag=2,tr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var v_=C.ReactCurrentOwner,An=!1;function xn(t,i,o,l){i.child=t===null?$d(i,null,o,l):ds(i,t.child,o,l)}function bh(t,i,o,l,c){o=o.render;var p=i.ref;return ps(i,c),l=Pu(t,i,o,l,p,c),o=bu(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ci(t,i,c)):(Ot&&o&&du(i),i.flags|=1,xn(t,i,l,c),i.child)}function Lh(t,i,o,l,c){if(t===null){var p=o.type;return typeof p=="function"&&!oc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Dh(t,i,p,l,c)):(t=Wa(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&c)===0){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:io,o(M,l)&&t.ref===i.ref)return Ci(t,i,c)}return i.flags|=1,t=ar(p,l),t.ref=i.ref,t.return=i,i.child=t}function Dh(t,i,o,l,c){if(t!==null){var p=t.memoizedProps;if(io(p,l)&&t.ref===i.ref)if(An=!1,i.pendingProps=l=p,(t.lanes&c)!==0)(t.flags&131072)!==0&&(An=!0);else return i.lanes=t.lanes,Ci(t,i,c)}return Bu(t,i,o,l,c)}function Nh(t,i,o){var l=i.pendingProps,c=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(vs,Fn),Fn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(vs,Fn),Fn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,Dt(vs,Fn),Fn|=l}else p!==null?(l=p.baseLanes|o,i.memoizedState=null):l=o,Dt(vs,Fn),Fn|=l;return xn(t,i,c,o),i.child}function Ih(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Bu(t,i,o,l,c){var p=wn(o)?wr:cn.current;return p=ls(i,p),ps(i,c),o=Pu(t,i,o,l,p,c),l=bu(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ci(t,i,c)):(Ot&&l&&du(i),i.flags|=1,xn(t,i,o,c),i.child)}function Uh(t,i,o,l,c){if(wn(o)){var p=!0;ma(i)}else p=!1;if(ps(i,c),i.stateNode===null)Na(t,i),Eh(i,o,l),Fu(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var U=M.context,te=o.contextType;typeof te=="object"&&te!==null?te=Vn(te):(te=wn(o)?wr:cn.current,te=ls(i,te));var ve=o.getDerivedStateFromProps,ye=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==l||U!==te)&&Th(i,M,l,te),er=!1;var ge=i.memoizedState;M.state=ge,Ta(i,l,M,c),U=i.memoizedState,L!==l||ge!==U||Tn.current||er?(typeof ve=="function"&&(Uu(i,o,ve,l),U=i.memoizedState),(L=er||Mh(i,o,L,l,ge,U,te))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=U),M.props=l,M.state=U,M.context=te,l=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Zd(t,i),L=i.memoizedProps,te=i.type===i.elementType?L:Zn(i.type,L),M.props=te,ye=i.pendingProps,ge=M.context,U=o.contextType,typeof U=="object"&&U!==null?U=Vn(U):(U=wn(o)?wr:cn.current,U=ls(i,U));var Ne=o.getDerivedStateFromProps;(ve=typeof Ne=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==ye||ge!==U)&&Th(i,M,l,U),er=!1,ge=i.memoizedState,M.state=ge,Ta(i,l,M,c);var ze=i.memoizedState;L!==ye||ge!==ze||Tn.current||er?(typeof Ne=="function"&&(Uu(i,o,Ne,l),ze=i.memoizedState),(te=er||Mh(i,o,te,l,ge,ze,U)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ze,U),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ze,U)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),M.props=l,M.state=ze,M.context=U,l=te):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return zu(t,i,o,l,p,c)}function zu(t,i,o,l,c,p){Ih(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&zd(i,o,!1),Ci(t,i,p);l=i.stateNode,v_.current=i;var L=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=ds(i,t.child,null,p),i.child=ds(i,null,L,p)):xn(t,i,L,p),i.memoizedState=l.state,c&&zd(i,o,!0),i.child}function Fh(t){var i=t.stateNode;i.pendingContext?kd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&kd(t,i.context,!1),Eu(t,i.containerInfo)}function Oh(t,i,o,l,c){return fs(),gu(c),i.flags|=256,xn(t,i,o,l),i.child}var Hu={dehydrated:null,treeContext:null,retryLane:0};function Vu(t){return{baseLanes:t,cachePool:null,transitions:null}}function kh(t,i,o){var l=i.pendingProps,c=kt.current,p=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(c&2)!==0),L?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Dt(kt,c&1),t===null)return mu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,p?(l=i.mode,p=i.child,M={mode:"hidden",children:M},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Xa(M,l,0,null),t=Ur(t,l,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Vu(o),i.memoizedState=Hu,t):Gu(i,M));if(c=t.memoizedState,c!==null&&(L=c.dehydrated,L!==null))return x_(t,i,M,l,L,c,o);if(p){p=l.fallback,M=i.mode,c=t.child,L=c.sibling;var U={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=U,i.deletions=null):(l=ar(c,U),l.subtreeFlags=c.subtreeFlags&14680064),L!==null?p=ar(L,p):(p=Ur(p,M,o,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,M=t.child.memoizedState,M=M===null?Vu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~o,i.memoizedState=Hu,l}return p=t.child,t=p.sibling,l=ar(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Gu(t,i){return i=Xa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Da(t,i,o,l){return l!==null&&gu(l),ds(i,t.child,null,o),t=Gu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function x_(t,i,o,l,c,p,M){if(o)return i.flags&256?(i.flags&=-257,l=Ou(Error(n(422))),Da(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,c=i.mode,l=Xa({mode:"visible",children:l.children},c,0,null),p=Ur(p,c,M,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&ds(i,t.child,null,M),i.child.memoizedState=Vu(M),i.memoizedState=Hu,p);if((i.mode&1)===0)return Da(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var L=l.dgst;return l=L,p=Error(n(419)),l=Ou(p,l,void 0),Da(t,i,M,l)}if(L=(M&t.childLanes)!==0,An||L){if(l=tn,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==p.retryLane&&(p.retryLane=c,Ai(t,c),ei(l,t,c,-1))}return sc(),l=Ou(Error(n(421))),Da(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=D_.bind(null,t),c._reactRetry=i,null):(t=p.treeContext,Un=Ki(c.nextSibling),In=i,Ot=!0,Kn=null,t!==null&&(zn[Hn++]=Ti,zn[Hn++]=wi,zn[Hn++]=Ar,Ti=t.id,wi=t.overflow,Ar=i),i=Gu(i,l.children),i.flags|=4096,i)}function Bh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),yu(t.return,i,o)}function Wu(t,i,o,l,c){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=c)}function zh(t,i,o){var l=i.pendingProps,c=l.revealOrder,p=l.tail;if(xn(t,i,l.children,o),l=kt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bh(t,o,i);else if(t.tag===19)Bh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(kt,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&wa(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Wu(i,!1,c,o,p);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&wa(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Wu(i,!0,o,null,p);break;case"together":Wu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Na(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ci(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=ar(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=ar(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function y_(t,i,o){switch(i.tag){case 3:Fh(i),fs();break;case 5:eh(i);break;case 1:wn(i.type)&&ma(i);break;case 4:Eu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Dt(Sa,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(kt,kt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?kh(t,i,o):(Dt(kt,kt.current&1),t=Ci(t,i,o),t!==null?t.sibling:null);Dt(kt,kt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return zh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Dt(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,Nh(t,i,o)}return Ci(t,i,o)}var Hh,Xu,Vh,Gh;Hh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Xu=function(){},Vh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Pr(fi.current);var p=null;switch(o){case"input":c=F(t,c),l=F(t,l),p=[];break;case"select":c=oe({},c,{value:void 0}),l=oe({},l,{value:void 0}),p=[];break;case"textarea":c=E(t,c),l=E(t,l),p=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=da)}dt(o,l);var M;o=null;for(te in c)if(!l.hasOwnProperty(te)&&c.hasOwnProperty(te)&&c[te]!=null)if(te==="style"){var L=c[te];for(M in L)L.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?p||(p=[]):(p=p||[]).push(te,null));for(te in l){var U=l[te];if(L=c!=null?c[te]:void 0,l.hasOwnProperty(te)&&U!==L&&(U!=null||L!=null))if(te==="style")if(L){for(M in L)!L.hasOwnProperty(M)||U&&U.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in U)U.hasOwnProperty(M)&&L[M]!==U[M]&&(o||(o={}),o[M]=U[M])}else o||(p||(p=[]),p.push(te,o)),o=U;else te==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,L=L?L.__html:void 0,U!=null&&L!==U&&(p=p||[]).push(te,U)):te==="children"?typeof U!="string"&&typeof U!="number"||(p=p||[]).push(te,""+U):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(U!=null&&te==="onScroll"&&It("scroll",t),p||L===U||(p=[])):(p=p||[]).push(te,U))}o&&(p=p||[]).push("style",o);var te=p;(i.updateQueue=te)&&(i.flags|=4)}},Gh=function(t,i,o,l){o!==l&&(i.flags|=4)};function xo(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function S_(t,i,o){var l=i.pendingProps;switch(hu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return wn(i.type)&&pa(),dn(i),null;case 3:return l=i.stateNode,ms(),Ut(Tn),Ut(cn),Au(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(xa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Kn!==null&&(nc(Kn),Kn=null))),Xu(t,i),dn(i),null;case 5:Tu(i);var c=Pr(po.current);if(o=i.type,t!==null&&i.stateNode!=null)Vh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=Pr(fi.current),xa(i)){l=i.stateNode,o=i.type;var p=i.memoizedProps;switch(l[ci]=i,l[lo]=p,t=(i.mode&1)!==0,o){case"dialog":It("cancel",l),It("close",l);break;case"iframe":case"object":case"embed":It("load",l);break;case"video":case"audio":for(c=0;c<so.length;c++)It(so[c],l);break;case"source":It("error",l);break;case"img":case"image":case"link":It("error",l),It("load",l);break;case"details":It("toggle",l);break;case"input":gn(l,p),It("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},It("invalid",l);break;case"textarea":J(l,p),It("invalid",l)}dt(o,p),c=null;for(var M in p)if(p.hasOwnProperty(M)){var L=p[M];M==="children"?typeof L=="string"?l.textContent!==L&&(p.suppressHydrationWarning!==!0&&fa(l.textContent,L,t),c=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(p.suppressHydrationWarning!==!0&&fa(l.textContent,L,t),c=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&It("scroll",l)}switch(o){case"input":bt(l),qe(l,p,!0);break;case"textarea":bt(l),_e(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=da)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=de(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[ci]=i,t[lo]=l,Hh(t,i,!1,!1),i.stateNode=t;e:{switch(M=it(o,l),o){case"dialog":It("cancel",t),It("close",t),c=l;break;case"iframe":case"object":case"embed":It("load",t),c=l;break;case"video":case"audio":for(c=0;c<so.length;c++)It(so[c],t);c=l;break;case"source":It("error",t),c=l;break;case"img":case"image":case"link":It("error",t),It("load",t),c=l;break;case"details":It("toggle",t),c=l;break;case"input":gn(t,l),c=F(t,l),It("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=oe({},l,{value:void 0}),It("invalid",t);break;case"textarea":J(t,l),c=E(t,l),It("invalid",t);break;default:c=l}dt(o,c),L=c;for(p in L)if(L.hasOwnProperty(p)){var U=L[p];p==="style"?et(t,U):p==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,U!=null&&Ue(t,U)):p==="children"?typeof U=="string"?(o!=="textarea"||U!=="")&&ut(t,U):typeof U=="number"&&ut(t,""+U):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?U!=null&&p==="onScroll"&&It("scroll",t):U!=null&&D(t,p,U,M))}switch(o){case"input":bt(t),qe(t,l,!1);break;case"textarea":bt(t),_e(t);break;case"option":l.value!=null&&t.setAttribute("value",""+we(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?b(t,!!l.multiple,p,!1):l.defaultValue!=null&&b(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=da)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)Gh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Pr(po.current),Pr(fi.current),xa(i)){if(l=i.stateNode,o=i.memoizedProps,l[ci]=i,(p=l.nodeValue!==o)&&(t=In,t!==null))switch(t.tag){case 3:fa(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fa(l.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[ci]=i,i.stateNode=l}return dn(i),null;case 13:if(Ut(kt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&Un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)jd(),fs(),i.flags|=98560,p=!1;else if(p=xa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[ci]=i}else fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),p=!1}else Kn!==null&&(nc(Kn),Kn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(kt.current&1)!==0?$t===0&&($t=3):sc())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return ms(),Xu(t,i),t===null&&oo(i.stateNode.containerInfo),dn(i),null;case 10:return xu(i.type._context),dn(i),null;case 17:return wn(i.type)&&pa(),dn(i),null;case 19:if(Ut(kt),p=i.memoizedState,p===null)return dn(i),null;if(l=(i.flags&128)!==0,M=p.rendering,M===null)if(l)xo(p,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=wa(t),M!==null){for(i.flags|=128,xo(p,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)p=o,t=l,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Dt(kt,kt.current&1|2),i.child}t=t.sibling}p.tail!==null&&$()>xs&&(i.flags|=128,l=!0,xo(p,!1),i.lanes=4194304)}else{if(!l)if(t=wa(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),xo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Ot)return dn(i),null}else 2*$()-p.renderingStartTime>xs&&o!==1073741824&&(i.flags|=128,l=!0,xo(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=$(),i.sibling=null,o=kt.current,Dt(kt,l?o&1|2:o&1),i):(dn(i),null);case 22:case 23:return rc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Fn&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function M_(t,i){switch(hu(i),i.tag){case 1:return wn(i.type)&&pa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ms(),Ut(Tn),Ut(cn),Au(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Tu(i),null;case 13:if(Ut(kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));fs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ut(kt),null;case 4:return ms(),null;case 10:return xu(i.type._context),null;case 22:case 23:return rc(),null;case 24:return null;default:return null}}var Ia=!1,hn=!1,E_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function _s(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Gt(t,i,l)}else o.current=null}function ju(t,i,o){try{o()}catch(l){Gt(t,i,l)}}var Wh=!1;function T_(t,i){if(ru=ea,t=Md(),Kl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,L=-1,U=-1,te=0,ve=0,ye=t,ge=null;t:for(;;){for(var Ne;ye!==o||c!==0&&ye.nodeType!==3||(L=M+c),ye!==p||l!==0&&ye.nodeType!==3||(U=M+l),ye.nodeType===3&&(M+=ye.nodeValue.length),(Ne=ye.firstChild)!==null;)ge=ye,ye=Ne;for(;;){if(ye===t)break t;if(ge===o&&++te===c&&(L=M),ge===p&&++ve===l&&(U=M),(Ne=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ne}o=L===-1||U===-1?null:{start:L,end:U}}else o=null}o=o||{start:0,end:0}}else o=null;for(su={focusedElem:t,selectionRange:o},ea=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,Wt=ze.memoizedState,q=i.stateNode,H=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:Zn(i.type,Ve),Wt);q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Gt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return ze=Wh,Wh=!1,ze}function yo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var p=c.destroy;c.destroy=void 0,p!==void 0&&ju(i,o,p)}c=c.next}while(c!==l)}}function Ua(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Yu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Xh(t){var i=t.alternate;i!==null&&(t.alternate=null,Xh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ci],delete i[lo],delete i[uu],delete i[o_],delete i[a_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jh(t){return t.tag===5||t.tag===3||t.tag===4}function Yh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=da));else if(l!==4&&(t=t.child,t!==null))for(qu(t,i,o),t=t.sibling;t!==null;)qu(t,i,o),t=t.sibling}function $u(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for($u(t,i,o),t=t.sibling;t!==null;)$u(t,i,o),t=t.sibling}var on=null,Qn=!1;function nr(t,i,o){for(o=o.child;o!==null;)qh(t,i,o),o=o.sibling}function qh(t,i,o){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Qe,o)}catch{}switch(o.tag){case 5:hn||_s(o,i);case 6:var l=on,c=Qn;on=null,nr(t,i,o),on=l,Qn=c,on!==null&&(Qn?(t=on,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):on.removeChild(o.stateNode));break;case 18:on!==null&&(Qn?(t=on,o=o.stateNode,t.nodeType===8?lu(t.parentNode,o):t.nodeType===1&&lu(t,o),Zs(t)):lu(on,o.stateNode));break;case 4:l=on,c=Qn,on=o.stateNode.containerInfo,Qn=!0,nr(t,i,o),on=l,Qn=c;break;case 0:case 11:case 14:case 15:if(!hn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var p=c,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&ju(o,i,M),c=c.next}while(c!==l)}nr(t,i,o);break;case 1:if(!hn&&(_s(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(L){Gt(o,i,L)}nr(t,i,o);break;case 21:nr(t,i,o);break;case 22:o.mode&1?(hn=(l=hn)||o.memoizedState!==null,nr(t,i,o),hn=l):nr(t,i,o);break;default:nr(t,i,o)}}function $h(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new E_),i.forEach(function(l){var c=N_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function Jn(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var p=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:on=L.stateNode,Qn=!1;break e;case 3:on=L.stateNode.containerInfo,Qn=!0;break e;case 4:on=L.stateNode.containerInfo,Qn=!0;break e}L=L.return}if(on===null)throw Error(n(160));qh(p,M,c),on=null,Qn=!1;var U=c.alternate;U!==null&&(U.return=null),c.return=null}catch(te){Gt(c,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Kh(i,t),i=i.sibling}function Kh(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(i,t),hi(t),l&4){try{yo(3,t,t.return),Ua(3,t)}catch(Ve){Gt(t,t.return,Ve)}try{yo(5,t,t.return)}catch(Ve){Gt(t,t.return,Ve)}}break;case 1:Jn(i,t),hi(t),l&512&&o!==null&&_s(o,o.return);break;case 5:if(Jn(i,t),hi(t),l&512&&o!==null&&_s(o,o.return),t.flags&32){var c=t.stateNode;try{ut(c,"")}catch(Ve){Gt(t,t.return,Ve)}}if(l&4&&(c=t.stateNode,c!=null)){var p=t.memoizedProps,M=o!==null?o.memoizedProps:p,L=t.type,U=t.updateQueue;if(t.updateQueue=null,U!==null)try{L==="input"&&p.type==="radio"&&p.name!=null&&pt(c,p),it(L,M);var te=it(L,p);for(M=0;M<U.length;M+=2){var ve=U[M],ye=U[M+1];ve==="style"?et(c,ye):ve==="dangerouslySetInnerHTML"?Ue(c,ye):ve==="children"?ut(c,ye):D(c,ve,ye,te)}switch(L){case"input":ft(c,p);break;case"textarea":me(c,p);break;case"select":var ge=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!p.multiple;var Ne=p.value;Ne!=null?b(c,!!p.multiple,Ne,!1):ge!==!!p.multiple&&(p.defaultValue!=null?b(c,!!p.multiple,p.defaultValue,!0):b(c,!!p.multiple,p.multiple?[]:"",!1))}c[lo]=p}catch(Ve){Gt(t,t.return,Ve)}}break;case 6:if(Jn(i,t),hi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,p=t.memoizedProps;try{c.nodeValue=p}catch(Ve){Gt(t,t.return,Ve)}}break;case 3:if(Jn(i,t),hi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Zs(i.containerInfo)}catch(Ve){Gt(t,t.return,Ve)}break;case 4:Jn(i,t),hi(t);break;case 13:Jn(i,t),hi(t),c=t.child,c.flags&8192&&(p=c.memoizedState!==null,c.stateNode.isHidden=p,!p||c.alternate!==null&&c.alternate.memoizedState!==null||(Qu=$())),l&4&&$h(t);break;case 22:if(ve=o!==null&&o.memoizedState!==null,t.mode&1?(hn=(te=hn)||ve,Jn(i,t),hn=te):Jn(i,t),hi(t),l&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!ve&&(t.mode&1)!==0)for(Fe=t,ve=t.child;ve!==null;){for(ye=Fe=ve;Fe!==null;){switch(ge=Fe,Ne=ge.child,ge.tag){case 0:case 11:case 14:case 15:yo(4,ge,ge.return);break;case 1:_s(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){l=ge,o=ge.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Ve){Gt(l,o,Ve)}}break;case 5:_s(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Jh(ye);continue}}Ne!==null?(Ne.return=ge,Fe=Ne):Jh(ye)}ve=ve.sibling}e:for(ve=null,ye=t;;){if(ye.tag===5){if(ve===null){ve=ye;try{c=ye.stateNode,te?(p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(L=ye.stateNode,U=ye.memoizedProps.style,M=U!=null&&U.hasOwnProperty("display")?U.display:null,L.style.display=Je("display",M))}catch(Ve){Gt(t,t.return,Ve)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=te?"":ye.memoizedProps}catch(Ve){Gt(t,t.return,Ve)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:Jn(i,t),hi(t),l&4&&$h(t);break;case 21:break;default:Jn(i,t),hi(t)}}function hi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(jh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(ut(c,""),l.flags&=-33);var p=Yh(t);$u(t,p,c);break;case 3:case 4:var M=l.stateNode.containerInfo,L=Yh(t);qu(t,L,M);break;default:throw Error(n(161))}}catch(U){Gt(t,t.return,U)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function w_(t,i,o){Fe=t,Zh(t)}function Zh(t,i,o){for(var l=(t.mode&1)!==0;Fe!==null;){var c=Fe,p=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Ia;if(!M){var L=c.alternate,U=L!==null&&L.memoizedState!==null||hn;L=Ia;var te=hn;if(Ia=M,(hn=U)&&!te)for(Fe=c;Fe!==null;)M=Fe,U=M.child,M.tag===22&&M.memoizedState!==null?ep(c):U!==null?(U.return=M,Fe=U):ep(c);for(;p!==null;)Fe=p,Zh(p),p=p.sibling;Fe=c,Ia=L,hn=te}Qh(t)}else(c.subtreeFlags&8772)!==0&&p!==null?(p.return=c,Fe=p):Qh(t)}}function Qh(t){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||Ua(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!hn)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Zn(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Jd(i,p,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Jd(i,M,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var U=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":U.autoFocus&&o.focus();break;case"img":U.src&&(o.src=U.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var ve=te.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&Zs(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}hn||i.flags&512&&Yu(i)}catch(ge){Gt(i,i.return,ge)}}if(i===t){Fe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function Jh(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function ep(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ua(4,i)}catch(U){Gt(i,o,U)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(U){Gt(i,c,U)}}var p=i.return;try{Yu(i)}catch(U){Gt(i,p,U)}break;case 5:var M=i.return;try{Yu(i)}catch(U){Gt(i,M,U)}}}catch(U){Gt(i,i.return,U)}if(i===t){Fe=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Fe=L;break}Fe=i.return}}var A_=Math.ceil,Fa=C.ReactCurrentDispatcher,Ku=C.ReactCurrentOwner,Wn=C.ReactCurrentBatchConfig,St=0,tn=null,Xt=null,an=0,Fn=0,vs=Zi(0),$t=0,So=null,Lr=0,Oa=0,Zu=0,Mo=null,Rn=null,Qu=0,xs=1/0,Pi=null,ka=!1,Ju=null,ir=null,Ba=!1,rr=null,za=0,Eo=0,ec=null,Ha=-1,Va=0;function yn(){return(St&6)!==0?$():Ha!==-1?Ha:Ha=$()}function sr(t){return(t.mode&1)===0?1:(St&2)!==0&&an!==0?an&-an:u_.transition!==null?(Va===0&&(Va=Pt()),Va):(t=yt,t!==0||(t=window.event,t=t===void 0?16:nd(t.type)),t)}function ei(t,i,o,l){if(50<Eo)throw Eo=0,ec=null,Error(n(185));Qt(t,o,l),((St&2)===0||t!==tn)&&(t===tn&&((St&2)===0&&(Oa|=o),$t===4&&or(t,an)),Cn(t,l),o===1&&St===0&&(i.mode&1)===0&&(xs=$()+500,ga&&Ji()))}function Cn(t,i){var o=t.callbackNode;vn(t,i);var l=ln(t,t===tn?an:0);if(l===0)o!==null&&T(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&T(o),i===1)t.tag===0?l_(np.bind(null,t)):Hd(np.bind(null,t)),r_(function(){(St&6)===0&&Ji()}),o=null;else{switch(ui(l)){case 1:o=Se;break;case 4:o=Ce;break;case 16:o=De;break;case 536870912:o=tt;break;default:o=De}o=cp(o,tp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function tp(t,i){if(Ha=-1,Va=0,(St&6)!==0)throw Error(n(327));var o=t.callbackNode;if(ys()&&t.callbackNode!==o)return null;var l=ln(t,t===tn?an:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ga(t,l);else{i=l;var c=St;St|=2;var p=rp();(tn!==t||an!==i)&&(Pi=null,xs=$()+500,Nr(t,i));do try{P_();break}catch(L){ip(t,L)}while(!0);vu(),Fa.current=p,St=c,Xt!==null?i=0:(tn=null,an=0,i=$t)}if(i!==0){if(i===2&&(c=Si(t),c!==0&&(l=c,i=tc(t,c))),i===1)throw o=So,Nr(t,0),or(t,l),Cn(t,$()),o;if(i===6)or(t,l);else{if(c=t.current.alternate,(l&30)===0&&!R_(c)&&(i=Ga(t,l),i===2&&(p=Si(t),p!==0&&(l=p,i=tc(t,p))),i===1))throw o=So,Nr(t,0),or(t,l),Cn(t,$()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ir(t,Rn,Pi);break;case 3:if(or(t,l),(l&130023424)===l&&(i=Qu+500-$(),10<i)){if(ln(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){yn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=au(Ir.bind(null,t,Rn,Pi),i);break}Ir(t,Rn,Pi);break;case 4:if(or(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-st(l);p=1<<M,M=i[M],M>c&&(c=M),l&=~p}if(l=c,l=$()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*A_(l/1960))-l,10<l){t.timeoutHandle=au(Ir.bind(null,t,Rn,Pi),l);break}Ir(t,Rn,Pi);break;case 5:Ir(t,Rn,Pi);break;default:throw Error(n(329))}}}return Cn(t,$()),t.callbackNode===o?tp.bind(null,t):null}function tc(t,i){var o=Mo;return t.current.memoizedState.isDehydrated&&(Nr(t,i).flags|=256),t=Ga(t,i),t!==2&&(i=Rn,Rn=o,i!==null&&nc(i)),t}function nc(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function R_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],p=c.getSnapshot;c=c.value;try{if(!$n(p(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(t,i){for(i&=~Zu,i&=~Oa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-st(i),l=1<<o;t[o]=-1,i&=~l}}function np(t){if((St&6)!==0)throw Error(n(327));ys();var i=ln(t,0);if((i&1)===0)return Cn(t,$()),null;var o=Ga(t,i);if(t.tag!==0&&o===2){var l=Si(t);l!==0&&(i=l,o=tc(t,l))}if(o===1)throw o=So,Nr(t,0),or(t,i),Cn(t,$()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ir(t,Rn,Pi),Cn(t,$()),null}function ic(t,i){var o=St;St|=1;try{return t(i)}finally{St=o,St===0&&(xs=$()+500,ga&&Ji())}}function Dr(t){rr!==null&&rr.tag===0&&(St&6)===0&&ys();var i=St;St|=1;var o=Wn.transition,l=yt;try{if(Wn.transition=null,yt=1,t)return t()}finally{yt=l,Wn.transition=o,St=i,(St&6)===0&&Ji()}}function rc(){Fn=vs.current,Ut(vs)}function Nr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,i_(o)),Xt!==null)for(o=Xt.return;o!==null;){var l=o;switch(hu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&pa();break;case 3:ms(),Ut(Tn),Ut(cn),Au();break;case 5:Tu(l);break;case 4:ms();break;case 13:Ut(kt);break;case 19:Ut(kt);break;case 10:xu(l.type._context);break;case 22:case 23:rc()}o=o.return}if(tn=t,Xt=t=ar(t.current,null),an=Fn=i,$t=0,So=null,Zu=Oa=Lr=0,Rn=Mo=null,Cr!==null){for(i=0;i<Cr.length;i++)if(o=Cr[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,p=o.pending;if(p!==null){var M=p.next;p.next=c,l.next=M}o.pending=l}Cr=null}return t}function ip(t,i){do{var o=Xt;try{if(vu(),Aa.current=ba,Ra){for(var l=Bt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ra=!1}if(br=0,en=qt=Bt=null,mo=!1,go=0,Ku.current=null,o===null||o.return===null){$t=1,So=i,Xt=null;break}e:{var p=t,M=o.return,L=o,U=i;if(i=an,L.flags|=32768,U!==null&&typeof U=="object"&&typeof U.then=="function"){var te=U,ve=L,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ne=Ch(M);if(Ne!==null){Ne.flags&=-257,Ph(Ne,M,L,p,i),Ne.mode&1&&Rh(p,te,i),i=Ne,U=te;var ze=i.updateQueue;if(ze===null){var Ve=new Set;Ve.add(U),i.updateQueue=Ve}else ze.add(U);break e}else{if((i&1)===0){Rh(p,te,i),sc();break e}U=Error(n(426))}}else if(Ot&&L.mode&1){var Wt=Ch(M);if(Wt!==null){(Wt.flags&65536)===0&&(Wt.flags|=256),Ph(Wt,M,L,p,i),gu(gs(U,L));break e}}p=U=gs(U,L),$t!==4&&($t=2),Mo===null?Mo=[p]:Mo.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var q=wh(p,U,i);Qd(p,q);break e;case 1:L=U;var H=p.type,K=p.stateNode;if((p.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(ir===null||!ir.has(K)))){p.flags|=65536,i&=-i,p.lanes|=i;var Te=Ah(p,L,i);Qd(p,Te);break e}}p=p.return}while(p!==null)}op(o)}catch(je){i=je,Xt===o&&o!==null&&(Xt=o=o.return);continue}break}while(!0)}function rp(){var t=Fa.current;return Fa.current=ba,t===null?ba:t}function sc(){($t===0||$t===3||$t===2)&&($t=4),tn===null||(Lr&268435455)===0&&(Oa&268435455)===0||or(tn,an)}function Ga(t,i){var o=St;St|=2;var l=rp();(tn!==t||an!==i)&&(Pi=null,Nr(t,i));do try{C_();break}catch(c){ip(t,c)}while(!0);if(vu(),St=o,Fa.current=l,Xt!==null)throw Error(n(261));return tn=null,an=0,$t}function C_(){for(;Xt!==null;)sp(Xt)}function P_(){for(;Xt!==null&&!X();)sp(Xt)}function sp(t){var i=up(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,i===null?op(t):Xt=i,Ku.current=null}function op(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=S_(o,i,Fn),o!==null){Xt=o;return}}else{if(o=M_(o,i),o!==null){o.flags&=32767,Xt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,Xt=null;return}}if(i=i.sibling,i!==null){Xt=i;return}Xt=i=t}while(i!==null);$t===0&&($t=5)}function Ir(t,i,o){var l=yt,c=Wn.transition;try{Wn.transition=null,yt=1,b_(t,i,o,l)}finally{Wn.transition=c,yt=l}return null}function b_(t,i,o,l){do ys();while(rr!==null);if((St&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(sn(t,p),t===tn&&(Xt=tn=null,an=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ba||(Ba=!0,cp(De,function(){return ys(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Wn.transition,Wn.transition=null;var M=yt;yt=1;var L=St;St|=4,Ku.current=null,T_(t,o),Kh(o,t),Kg(su),ea=!!ru,su=ru=null,t.current=o,w_(o),ne(),St=L,yt=M,Wn.transition=p}else t.current=o;if(Ba&&(Ba=!1,rr=t,za=c),p=t.pendingLanes,p===0&&(ir=null),_t(o.stateNode),Cn(t,$()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(ka)throw ka=!1,t=Ju,Ju=null,t;return(za&1)!==0&&t.tag!==0&&ys(),p=t.pendingLanes,(p&1)!==0?t===ec?Eo++:(Eo=0,ec=t):Eo=0,Ji(),null}function ys(){if(rr!==null){var t=ui(za),i=Wn.transition,o=yt;try{if(Wn.transition=null,yt=16>t?16:t,rr===null)var l=!1;else{if(t=rr,rr=null,za=0,(St&6)!==0)throw Error(n(331));var c=St;for(St|=4,Fe=t.current;Fe!==null;){var p=Fe,M=p.child;if((Fe.flags&16)!==0){var L=p.deletions;if(L!==null){for(var U=0;U<L.length;U++){var te=L[U];for(Fe=te;Fe!==null;){var ve=Fe;switch(ve.tag){case 0:case 11:case 15:yo(8,ve,p)}var ye=ve.child;if(ye!==null)ye.return=ve,Fe=ye;else for(;Fe!==null;){ve=Fe;var ge=ve.sibling,Ne=ve.return;if(Xh(ve),ve===te){Fe=null;break}if(ge!==null){ge.return=Ne,Fe=ge;break}Fe=Ne}}}var ze=p.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var Wt=Ve.sibling;Ve.sibling=null,Ve=Wt}while(Ve!==null)}}Fe=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,Fe=M;else e:for(;Fe!==null;){if(p=Fe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:yo(9,p,p.return)}var q=p.sibling;if(q!==null){q.return=p.return,Fe=q;break e}Fe=p.return}}var H=t.current;for(Fe=H;Fe!==null;){M=Fe;var K=M.child;if((M.subtreeFlags&2064)!==0&&K!==null)K.return=M,Fe=K;else e:for(M=H;Fe!==null;){if(L=Fe,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Ua(9,L)}}catch(je){Gt(L,L.return,je)}if(L===M){Fe=null;break e}var Te=L.sibling;if(Te!==null){Te.return=L.return,Fe=Te;break e}Fe=L.return}}if(St=c,Ji(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Qe,t)}catch{}l=!0}return l}finally{yt=o,Wn.transition=i}}return!1}function ap(t,i,o){i=gs(o,i),i=wh(t,i,1),t=tr(t,i,1),i=yn(),t!==null&&(Qt(t,1,i),Cn(t,i))}function Gt(t,i,o){if(t.tag===3)ap(t,t,o);else for(;i!==null;){if(i.tag===3){ap(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ir===null||!ir.has(l))){t=gs(o,t),t=Ah(i,t,1),i=tr(i,t,1),t=yn(),i!==null&&(Qt(i,1,t),Cn(i,t));break}}i=i.return}}function L_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=yn(),t.pingedLanes|=t.suspendedLanes&o,tn===t&&(an&o)===o&&($t===4||$t===3&&(an&130023424)===an&&500>$()-Qu?Nr(t,0):Zu|=o),Cn(t,i)}function lp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Vt,Vt<<=1,(Vt&130023424)===0&&(Vt=4194304)));var o=yn();t=Ai(t,i),t!==null&&(Qt(t,i,o),Cn(t,o))}function D_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),lp(t,o)}function N_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),lp(t,o)}var up;up=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Tn.current)An=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return An=!1,y_(t,i,o);An=(t.flags&131072)!==0}else An=!1,Ot&&(i.flags&1048576)!==0&&Vd(i,va,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Na(t,i),t=i.pendingProps;var c=ls(i,cn.current);ps(i,o),c=Pu(null,i,l,t,c,o);var p=bu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(l)?(p=!0,ma(i)):p=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Mu(i),c.updater=La,i.stateNode=c,c._reactInternals=i,Fu(i,l,t,o),i=zu(null,i,l,!0,p,o)):(i.tag=0,Ot&&p&&du(i),xn(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Na(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=U_(l),t=Zn(l,t),c){case 0:i=Bu(null,i,l,t,o);break e;case 1:i=Uh(null,i,l,t,o);break e;case 11:i=bh(null,i,l,t,o);break e;case 14:i=Lh(null,i,l,Zn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),Bu(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),Uh(t,i,l,c,o);case 3:e:{if(Fh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,c=p.element,Zd(t,i),Ta(i,l,null,o);var M=i.memoizedState;if(l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){c=gs(Error(n(423)),i),i=Oh(t,i,l,o,c);break e}else if(l!==c){c=gs(Error(n(424)),i),i=Oh(t,i,l,o,c);break e}else for(Un=Ki(i.stateNode.containerInfo.firstChild),In=i,Ot=!0,Kn=null,o=$d(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(fs(),l===c){i=Ci(t,i,o);break e}xn(t,i,l,o)}i=i.child}return i;case 5:return eh(i),t===null&&mu(i),l=i.type,c=i.pendingProps,p=t!==null?t.memoizedProps:null,M=c.children,ou(l,c)?M=null:p!==null&&ou(l,p)&&(i.flags|=32),Ih(t,i),xn(t,i,M,o),i.child;case 6:return t===null&&mu(i),null;case 13:return kh(t,i,o);case 4:return Eu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ds(i,null,l,o):xn(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),bh(t,i,l,c,o);case 7:return xn(t,i,i.pendingProps,o),i.child;case 8:return xn(t,i,i.pendingProps.children,o),i.child;case 12:return xn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,p=i.memoizedProps,M=c.value,Dt(Sa,l._currentValue),l._currentValue=M,p!==null)if($n(p.value,M)){if(p.children===c.children&&!Tn.current){i=Ci(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var L=p.dependencies;if(L!==null){M=p.child;for(var U=L.firstContext;U!==null;){if(U.context===l){if(p.tag===1){U=Ri(-1,o&-o),U.tag=2;var te=p.updateQueue;if(te!==null){te=te.shared;var ve=te.pending;ve===null?U.next=U:(U.next=ve.next,ve.next=U),te.pending=U}}p.lanes|=o,U=p.alternate,U!==null&&(U.lanes|=o),yu(p.return,o,i),L.lanes|=o;break}U=U.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=o,L=M.alternate,L!==null&&(L.lanes|=o),yu(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}xn(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ps(i,o),c=Vn(c),l=l(c),i.flags|=1,xn(t,i,l,o),i.child;case 14:return l=i.type,c=Zn(l,i.pendingProps),c=Zn(l.type,c),Lh(t,i,l,c,o);case 15:return Dh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),Na(t,i),i.tag=1,wn(l)?(t=!0,ma(i)):t=!1,ps(i,o),Eh(i,l,c),Fu(i,l,c,o),zu(null,i,l,!0,t,o);case 19:return zh(t,i,o);case 22:return Nh(t,i,o)}throw Error(n(156,i.tag))};function cp(t,i){return Zo(t,i)}function I_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,i,o,l){return new I_(t,i,o,l)}function oc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function U_(t){if(typeof t=="function")return oc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===se)return 11;if(t===fe)return 14}return 2}function ar(t,i){var o=t.alternate;return o===null?(o=Xn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Wa(t,i,o,l,c,p){var M=2;if(l=t,typeof t=="function")oc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case O:return Ur(o.children,c,p,i);case Y:M=8,c|=8;break;case P:return t=Xn(12,o,i,c|2),t.elementType=P,t.lanes=p,t;case Q:return t=Xn(13,o,i,c),t.elementType=Q,t.lanes=p,t;case ae:return t=Xn(19,o,i,c),t.elementType=ae,t.lanes=p,t;case ce:return Xa(o,c,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:M=10;break e;case k:M=9;break e;case se:M=11;break e;case fe:M=14;break e;case le:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Xn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=p,i}function Ur(t,i,o,l){return t=Xn(7,t,l,i),t.lanes=o,t}function Xa(t,i,o,l){return t=Xn(22,t,l,i),t.elementType=ce,t.lanes=o,t.stateNode={isHidden:!1},t}function ac(t,i,o){return t=Xn(6,t,null,i),t.lanes=o,t}function lc(t,i,o){return i=Xn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function F_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=un(0),this.expirationTimes=un(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=un(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function uc(t,i,o,l,c,p,M,L,U){return t=new F_(t,i,o,L,U),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Xn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mu(p),t}function O_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function fp(t){if(!t)return Qi;t=t._reactInternals;e:{if(li(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(wn(o))return Bd(t,o,i)}return i}function dp(t,i,o,l,c,p,M,L,U){return t=uc(o,l,!0,t,c,p,M,L,U),t.context=fp(null),o=t.current,l=yn(),c=sr(o),p=Ri(l,c),p.callback=i??null,tr(o,p,c),t.current.lanes=c,Qt(t,c,l),Cn(t,l),t}function ja(t,i,o,l){var c=i.current,p=yn(),M=sr(c);return o=fp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ri(p,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=tr(c,i,M),t!==null&&(ei(t,c,M,p),Ea(t,c,M)),M}function Ya(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function cc(t,i){hp(t,i),(t=t.alternate)&&hp(t,i)}function k_(){return null}var pp=typeof reportError=="function"?reportError:function(t){console.error(t)};function fc(t){this._internalRoot=t}qa.prototype.render=fc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ja(t,i,null,null)},qa.prototype.unmount=fc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){ja(null,t,null,null)}),i[Mi]=null}};function qa(t){this._internalRoot=t}qa.prototype.unstable_scheduleHydration=function(t){if(t){var i=Zf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Yi.length&&i!==0&&i<Yi[o].priority;o++);Yi.splice(o,0,t),o===0&&ed(t)}};function dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $a(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mp(){}function B_(t,i,o,l,c){if(c){if(typeof l=="function"){var p=l;l=function(){var te=Ya(M);p.call(te)}}var M=dp(i,l,t,0,null,!1,!1,"",mp);return t._reactRootContainer=M,t[Mi]=M.current,oo(t.nodeType===8?t.parentNode:t),Dr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var L=l;l=function(){var te=Ya(U);L.call(te)}}var U=uc(t,0,!1,null,null,!1,!1,"",mp);return t._reactRootContainer=U,t[Mi]=U.current,oo(t.nodeType===8?t.parentNode:t),Dr(function(){ja(i,U,o,l)}),U}function Ka(t,i,o,l,c){var p=o._reactRootContainer;if(p){var M=p;if(typeof c=="function"){var L=c;c=function(){var U=Ya(M);L.call(U)}}ja(i,M,t,c)}else M=B_(o,i,t,c,l);return Ya(M)}$f=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=mt(i.pendingLanes);o!==0&&(Jt(i,o|1),Cn(i,$()),(St&6)===0&&(xs=$()+500,Ji()))}break;case 13:Dr(function(){var l=Ai(t,1);if(l!==null){var c=yn();ei(l,t,1,c)}}),cc(t,1)}},Ol=function(t){if(t.tag===13){var i=Ai(t,134217728);if(i!==null){var o=yn();ei(i,t,134217728,o)}cc(t,134217728)}},Kf=function(t){if(t.tag===13){var i=sr(t),o=Ai(t,i);if(o!==null){var l=yn();ei(o,t,i,l)}cc(t,i)}},Zf=function(){return yt},Qf=function(t,i){var o=yt;try{return yt=t,i()}finally{yt=o}},Re=function(t,i,o){switch(i){case"input":if(ft(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=ha(l);if(!c)throw Error(n(90));Lt(l),ft(l,c)}}}break;case"textarea":me(t,o);break;case"select":i=o.value,i!=null&&b(t,!!o.multiple,i,!1)}},Nt=ic,Yt=Dr;var z_={usingClientEntryPoint:!1,Events:[uo,os,ha,be,rt,ic]},To={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},H_={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$o(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||k_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{Qe=Za.inject(H_),He=Za}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z_,Pn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dc(i))throw Error(n(200));return O_(t,i,null,o)},Pn.createRoot=function(t,i){if(!dc(t))throw Error(n(299));var o=!1,l="",c=pp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=uc(t,1,!1,null,null,o,!1,l,c),t[Mi]=i.current,oo(t.nodeType===8?t.parentNode:t),new fc(i)},Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=$o(i),t=t===null?null:t.stateNode,t},Pn.flushSync=function(t){return Dr(t)},Pn.hydrate=function(t,i,o){if(!$a(i))throw Error(n(200));return Ka(null,t,i,!0,o)},Pn.hydrateRoot=function(t,i,o){if(!dc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,p="",M=pp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=dp(i,null,t,1,o??null,c,!1,p,M),t[Mi]=i.current,oo(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new qa(i)},Pn.render=function(t,i,o){if(!$a(i))throw Error(n(200));return Ka(null,t,i,!1,o)},Pn.unmountComponentAtNode=function(t){if(!$a(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){Ka(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1},Pn.unstable_batchedUpdates=ic,Pn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!$a(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ka(t,i,o,!1,l)},Pn.version="18.3.1-next-f1338f8080-20240426",Pn}var Ep;function $_(){if(Ep)return mc.exports;Ep=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),mc.exports=q_(),mc.exports}var Tp;function K_(){if(Tp)return Qa;Tp=1;var s=$_();return Qa.createRoot=s.createRoot,Qa.hydrateRoot=s.hydrateRoot,Qa}var Z_=K_();const Q_=Am(Z_);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Of="175",J_=0,wp=1,ev=2,Rm=1,tv=2,Ui=3,xr=0,bn=1,Fi=2,_r=0,Os=1,Ap=2,Rp=3,Cp=4,nv=5,Wr=100,iv=101,rv=102,sv=103,ov=104,av=200,lv=201,uv=202,cv=203,$c=204,Kc=205,fv=206,dv=207,hv=208,pv=209,mv=210,gv=211,_v=212,vv=213,xv=214,Zc=0,Qc=1,Jc=2,Bs=3,ef=4,tf=5,nf=6,rf=7,Cm=0,yv=1,Sv=2,vr=0,Mv=1,Ev=2,Tv=3,wv=4,Av=5,Rv=6,Cv=7,Pm=300,zs=301,Hs=302,sf=303,of=304,Nl=306,af=1e3,jr=1001,lf=1002,ai=1003,Pv=1004,Ja=1005,mi=1006,vc=1007,Yr=1008,zi=1009,bm=1010,Lm=1011,Io=1012,kf=1013,$r=1014,Oi=1015,Bo=1016,Bf=1017,zf=1018,Uo=1020,Dm=35902,Nm=1021,Im=1022,oi=1023,Um=1024,Fm=1025,Fo=1026,Oo=1027,Om=1028,Hf=1029,km=1030,Vf=1031,Gf=1033,yl=33776,Sl=33777,Ml=33778,El=33779,uf=35840,cf=35841,ff=35842,df=35843,hf=36196,pf=37492,mf=37496,gf=37808,_f=37809,vf=37810,xf=37811,yf=37812,Sf=37813,Mf=37814,Ef=37815,Tf=37816,wf=37817,Af=37818,Rf=37819,Cf=37820,Pf=37821,Tl=36492,bf=36494,Lf=36495,Bm=36283,Df=36284,Nf=36285,If=36286,bv=3200,Lv=3201,zm=0,Dv=1,mr="",Yn="srgb",Vs="srgb-linear",Rl="linear",Rt="srgb",Ss=7680,Pp=519,Nv=512,Iv=513,Uv=514,Hm=515,Fv=516,Ov=517,kv=518,Bv=519,bp=35044,Lp="300 es",ki=2e3,Cl=2001;class Ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dp=1234567;const Do=Math.PI/180,ko=180/Math.PI;function Xs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function gt(s,e,n){return Math.max(e,Math.min(n,s))}function Wf(s,e){return(s%e+e)%e}function zv(s,e,n,r,a){return r+(s-e)*(a-r)/(n-e)}function Hv(s,e,n){return s!==e?(n-s)/(e-s):0}function No(s,e,n){return(1-n)*s+n*e}function Vv(s,e,n,r){return No(s,e,1-Math.exp(-n*r))}function Gv(s,e=1){return e-Math.abs(Wf(s,e*2)-e)}function Wv(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function Xv(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function jv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Yv(s,e){return s+Math.random()*(e-s)}function qv(s){return s*(.5-Math.random())}function $v(s){s!==void 0&&(Dp=s);let e=Dp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kv(s){return s*Do}function Zv(s){return s*ko}function Qv(s){return(s&s-1)===0&&s!==0}function Jv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function e0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function t0(s,e,n,r,a){const u=Math.cos,f=Math.sin,d=u(n/2),h=f(n/2),m=u((e+r)/2),_=f((e+r)/2),v=u((e-r)/2),x=f((e-r)/2),S=u((r-e)/2),A=f((r-e)/2);switch(a){case"XYX":s.set(d*_,h*v,h*x,d*m);break;case"YZY":s.set(h*x,d*_,h*v,d*m);break;case"ZXZ":s.set(h*v,h*x,d*_,d*m);break;case"XZX":s.set(d*_,h*A,h*S,d*m);break;case"YXY":s.set(h*S,d*_,h*A,d*m);break;case"ZYZ":s.set(h*A,h*S,d*_,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Us(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Sn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const n0={DEG2RAD:Do,RAD2DEG:ko,generateUUID:Xs,clamp:gt,euclideanModulo:Wf,mapLinear:zv,inverseLerp:Hv,lerp:No,damp:Vv,pingpong:Gv,smoothstep:Wv,smootherstep:Xv,randInt:jv,randFloat:Yv,randFloatSpread:qv,seededRandom:$v,degToRad:Kv,radToDeg:Zv,isPowerOfTwo:Qv,ceilPowerOfTwo:Jv,floorPowerOfTwo:e0,setQuaternionFromProperEuler:t0,normalize:Sn,denormalize:Us};class Tt{constructor(e=0,n=0){Tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,u,f,d,h,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,h,m)}set(e,n,r,a,u,f,d,h,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=h,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],h=r[6],m=r[1],_=r[4],v=r[7],x=r[2],S=r[5],A=r[8],R=a[0],y=a[3],g=a[6],N=a[1],D=a[4],C=a[7],G=a[2],B=a[5],O=a[8];return u[0]=f*R+d*N+h*G,u[3]=f*y+d*D+h*B,u[6]=f*g+d*C+h*O,u[1]=m*R+_*N+v*G,u[4]=m*y+_*D+v*B,u[7]=m*g+_*C+v*O,u[2]=x*R+S*N+A*G,u[5]=x*y+S*D+A*B,u[8]=x*g+S*C+A*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],h=e[6],m=e[7],_=e[8];return n*f*_-n*d*m-r*u*_+r*d*h+a*u*m-a*f*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],h=e[6],m=e[7],_=e[8],v=_*f-d*m,x=d*h-_*u,S=m*u-f*h,A=n*v+r*x+a*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=v*R,e[1]=(a*m-_*r)*R,e[2]=(d*r-a*f)*R,e[3]=x*R,e[4]=(_*n-a*h)*R,e[5]=(a*u-d*n)*R,e[6]=S*R,e[7]=(r*h-m*n)*R,e[8]=(f*n-r*u)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const h=Math.cos(u),m=Math.sin(u);return this.set(r*h,r*m,-r*(h*f+m*d)+f+e,-a*m,a*h,-a*(-m*f+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(xc.makeScale(e,n)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,n){return this.premultiply(xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xc=new ot;function Vm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Pl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function i0(){const s=Pl("canvas");return s.style.display="block",s}const Np={};function wl(s){s in Np||(Np[s]=!0,console.warn(s))}function r0(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function s0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function o0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ip=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Up=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a0(){const s={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Rt&&(a.r=Bi(a.r),a.g=Bi(a.g),a.b=Bi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Rt&&(a.r=ks(a.r),a.g=ks(a.g),a.b=ks(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===mr?Rl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Vs]:{primaries:e,whitePoint:r,transfer:Rl,toXYZ:Ip,fromXYZ:Up,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:e,whitePoint:r,transfer:Rt,toXYZ:Ip,fromXYZ:Up,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),s}const Et=a0();function Bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ms;class l0{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ms===void 0&&(Ms=Pl("canvas")),Ms.width=e.width,Ms.height=e.height;const a=Ms.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Ms}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Pl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Bi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Bi(n[r]/255)*255):n[r]=Bi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u0=0;class Xf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Xs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(yc(a[f].image)):u.push(yc(a[f]))}else u=yc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function yc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?l0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c0=0;class Ln extends Ws{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,r=jr,a=jr,u=mi,f=Yr,d=oi,h=zi,m=Ln.DEFAULT_ANISOTROPY,_=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Xs(),this.name="",this.source=new Xf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case af:e.x=e.x-Math.floor(e.x);break;case jr:e.x=e.x<0?0:1;break;case lf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case af:e.y=e.y-Math.floor(e.y);break;case jr:e.y=e.y<0?0:1;break;case lf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Pm;Ln.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,r=0,a=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const h=e.elements,m=h[0],_=h[4],v=h[8],x=h[1],S=h[5],A=h[9],R=h[2],y=h[6],g=h[10];if(Math.abs(_-x)<.01&&Math.abs(v-R)<.01&&Math.abs(A-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+R)<.1&&Math.abs(A+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,C=(S+1)/2,G=(g+1)/2,B=(_+x)/4,O=(v+R)/4,Y=(A+y)/4;return D>C&&D>G?D<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(D),a=B/r,u=O/r):C>G?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=B/a,u=Y/a):G<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(G),r=O/u,a=Y/u),this.set(r,a,u,n),this}let N=Math.sqrt((y-A)*(y-A)+(v-R)*(v-R)+(x-_)*(x-_));return Math.abs(N)<.001&&(N=1),this.x=(y-A)/N,this.y=(v-R)/N,this.z=(x-_)/N,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class f0 extends Ws{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Ln(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Xf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends f0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Gm extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ai,this.minFilter=ai,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class d0 extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ai,this.minFilter=ai,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let h=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=u[f+0],S=u[f+1],A=u[f+2],R=u[f+3];if(d===0){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=A,e[n+3]=R;return}if(v!==R||h!==x||m!==S||_!==A){let y=1-d;const g=h*x+m*S+_*A+v*R,N=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const G=Math.sqrt(D),B=Math.atan2(G,g*N);y=Math.sin(y*B)/G,d=Math.sin(d*B)/G}const C=d*N;if(h=h*y+x*C,m=m*y+S*C,_=_*y+A*C,v=v*y+R*C,y===1-d){const G=1/Math.sqrt(h*h+m*m+_*_+v*v);h*=G,m*=G,_*=G,v*=G}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],h=r[a+1],m=r[a+2],_=r[a+3],v=u[f],x=u[f+1],S=u[f+2],A=u[f+3];return e[n]=d*A+_*v+h*S-m*x,e[n+1]=h*A+_*x+m*v-d*S,e[n+2]=m*A+_*S+d*x-h*v,e[n+3]=_*A-d*v-h*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,h=Math.sin,m=d(r/2),_=d(a/2),v=d(u/2),x=h(r/2),S=h(a/2),A=h(u/2);switch(f){case"XYZ":this._x=x*_*v+m*S*A,this._y=m*S*v-x*_*A,this._z=m*_*A+x*S*v,this._w=m*_*v-x*S*A;break;case"YXZ":this._x=x*_*v+m*S*A,this._y=m*S*v-x*_*A,this._z=m*_*A-x*S*v,this._w=m*_*v+x*S*A;break;case"ZXY":this._x=x*_*v-m*S*A,this._y=m*S*v+x*_*A,this._z=m*_*A+x*S*v,this._w=m*_*v-x*S*A;break;case"ZYX":this._x=x*_*v-m*S*A,this._y=m*S*v+x*_*A,this._z=m*_*A-x*S*v,this._w=m*_*v+x*S*A;break;case"YZX":this._x=x*_*v+m*S*A,this._y=m*S*v+x*_*A,this._z=m*_*A-x*S*v,this._w=m*_*v-x*S*A;break;case"XZY":this._x=x*_*v-m*S*A,this._y=m*S*v-x*_*A,this._z=m*_*A+x*S*v,this._w=m*_*v+x*S*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],h=n[9],m=n[2],_=n[6],v=n[10],x=r+d+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-h)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(_-h)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+f*d+a*m-u*h,this._y=a*_+f*h+u*d-r*m,this._z=u*_+f*m+r*h-a*d,this._w=f*_-r*d-a*h-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const h=1-d*d;if(h<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(h),_=Math.atan2(m,d),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,h=e.w,m=2*(f*a-d*r),_=2*(d*n-u*a),v=2*(u*r-f*n);return this.x=n+h*m+f*v-d*_,this.y=r+h*_+d*m-u*v,this.z=a+h*v+u*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,h=n.z;return this.x=a*h-u*d,this.y=u*f-r*h,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sc=new Z,Fp=new zo;class Ho{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ti):ti.fromBufferAttribute(u,f),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),el.copy(r.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),tl.subVectors(this.max,Ao),Es.subVectors(e.a,Ao),Ts.subVectors(e.b,Ao),ws.subVectors(e.c,Ao),ur.subVectors(Ts,Es),cr.subVectors(ws,Ts),Fr.subVectors(Es,ws);let n=[0,-ur.z,ur.y,0,-cr.z,cr.y,0,-Fr.z,Fr.y,ur.z,0,-ur.x,cr.z,0,-cr.x,Fr.z,0,-Fr.x,-ur.y,ur.x,0,-cr.y,cr.x,0,-Fr.y,Fr.x,0];return!Mc(n,Es,Ts,ws,tl)||(n=[1,0,0,0,1,0,0,0,1],!Mc(n,Es,Ts,ws,tl))?!1:(nl.crossVectors(ur,cr),n=[nl.x,nl.y,nl.z],Mc(n,Es,Ts,ws,tl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ti=new Z,el=new Ho,Es=new Z,Ts=new Z,ws=new Z,ur=new Z,cr=new Z,Fr=new Z,Ao=new Z,tl=new Z,nl=new Z,Or=new Z;function Mc(s,e,n,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){Or.fromArray(s,u);const d=a.x*Math.abs(Or.x)+a.y*Math.abs(Or.y)+a.z*Math.abs(Or.z),h=e.dot(Or),m=n.dot(Or),_=r.dot(Or);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>d)return!1}return!0}const h0=new Ho,Ro=new Z,Ec=new Z;class jf{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):h0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const n=Ro.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Ro,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Ec)),this.expandByPoint(Ro.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new Z,Tc=new Z,il=new Z,fr=new Z,wc=new Z,rl=new Z,Ac=new Z;class p0{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Tc.copy(e).add(n).multiplyScalar(.5),il.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(Tc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(il),d=fr.dot(this.direction),h=-fr.dot(il),m=fr.lengthSq(),_=Math.abs(1-f*f);let v,x,S,A;if(_>0)if(v=f*h-d,x=f*d-h,A=u*_,v>=0)if(x>=-A)if(x<=A){const R=1/_;v*=R,x*=R,S=v*(v+f*x+2*d)+x*(f*v+x+2*h)+m}else x=u,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*h)+m;else x=-u,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*h)+m;else x<=-A?(v=Math.max(0,-(-f*u+d)),x=v>0?-u:Math.min(Math.max(-u,-h),u),S=-v*v+x*(x+2*h)+m):x<=A?(v=0,x=Math.min(Math.max(-u,-h),u),S=x*(x+2*h)+m):(v=Math.max(0,-(f*u+d)),x=v>0?u:Math.min(Math.max(-u,-h),u),S=-v*v+x*(x+2*h)+m);else x=f>0?-u:u,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Tc).addScaledVector(il,x),S}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const r=Li.dot(this.direction),a=Li.dot(Li)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,h=r+f;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,h;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,f=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,f=(e.min.y-x.y)*_),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),v>=0?(d=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,r,a,u){wc.subVectors(n,e),rl.subVectors(r,e),Ac.crossVectors(wc,rl);let f=this.direction.dot(Ac),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;fr.subVectors(this.origin,e);const h=d*this.direction.dot(rl.crossVectors(fr,rl));if(h<0)return null;const m=d*this.direction.dot(wc.cross(fr));if(m<0||h+m>f)return null;const _=-d*fr.dot(Ac);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,n,r,a,u,f,d,h,m,_,v,x,S,A,R,y){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,h,m,_,v,x,S,A,R,y)}set(e,n,r,a,u,f,d,h,m,_,v,x,S,A,R,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=h,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=S,g[7]=A,g[11]=R,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/As.setFromMatrixColumn(e,0).length(),u=1/As.setFromMatrixColumn(e,1).length(),f=1/As.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),h=Math.cos(a),m=Math.sin(a),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=f*_,S=f*v,A=d*_,R=d*v;n[0]=h*_,n[4]=-h*v,n[8]=m,n[1]=S+A*m,n[5]=x-R*m,n[9]=-d*h,n[2]=R-x*m,n[6]=A+S*m,n[10]=f*h}else if(e.order==="YXZ"){const x=h*_,S=h*v,A=m*_,R=m*v;n[0]=x+R*d,n[4]=A*d-S,n[8]=f*m,n[1]=f*v,n[5]=f*_,n[9]=-d,n[2]=S*d-A,n[6]=R+x*d,n[10]=f*h}else if(e.order==="ZXY"){const x=h*_,S=h*v,A=m*_,R=m*v;n[0]=x-R*d,n[4]=-f*v,n[8]=A+S*d,n[1]=S+A*d,n[5]=f*_,n[9]=R-x*d,n[2]=-f*m,n[6]=d,n[10]=f*h}else if(e.order==="ZYX"){const x=f*_,S=f*v,A=d*_,R=d*v;n[0]=h*_,n[4]=A*m-S,n[8]=x*m+R,n[1]=h*v,n[5]=R*m+x,n[9]=S*m-A,n[2]=-m,n[6]=d*h,n[10]=f*h}else if(e.order==="YZX"){const x=f*h,S=f*m,A=d*h,R=d*m;n[0]=h*_,n[4]=R-x*v,n[8]=A*v+S,n[1]=v,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=S*v+A,n[10]=x-R*v}else if(e.order==="XZY"){const x=f*h,S=f*m,A=d*h,R=d*m;n[0]=h*_,n[4]=-v,n[8]=m*_,n[1]=x*v+R,n[5]=f*_,n[9]=S*v-A,n[2]=A*v-S,n[6]=d*_,n[10]=R*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m0,e,g0)}lookAt(e,n,r){const a=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),dr.crossVectors(r,On),dr.lengthSq()===0&&(Math.abs(r.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),dr.crossVectors(r,On)),dr.normalize(),sl.crossVectors(On,dr),a[0]=dr.x,a[4]=sl.x,a[8]=On.x,a[1]=dr.y,a[5]=sl.y,a[9]=On.y,a[2]=dr.z,a[6]=sl.z,a[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],h=r[8],m=r[12],_=r[1],v=r[5],x=r[9],S=r[13],A=r[2],R=r[6],y=r[10],g=r[14],N=r[3],D=r[7],C=r[11],G=r[15],B=a[0],O=a[4],Y=a[8],P=a[12],w=a[1],k=a[5],se=a[9],Q=a[13],ae=a[2],fe=a[6],le=a[10],ce=a[14],z=a[3],ue=a[7],oe=a[11],I=a[15];return u[0]=f*B+d*w+h*ae+m*z,u[4]=f*O+d*k+h*fe+m*ue,u[8]=f*Y+d*se+h*le+m*oe,u[12]=f*P+d*Q+h*ce+m*I,u[1]=_*B+v*w+x*ae+S*z,u[5]=_*O+v*k+x*fe+S*ue,u[9]=_*Y+v*se+x*le+S*oe,u[13]=_*P+v*Q+x*ce+S*I,u[2]=A*B+R*w+y*ae+g*z,u[6]=A*O+R*k+y*fe+g*ue,u[10]=A*Y+R*se+y*le+g*oe,u[14]=A*P+R*Q+y*ce+g*I,u[3]=N*B+D*w+C*ae+G*z,u[7]=N*O+D*k+C*fe+G*ue,u[11]=N*Y+D*se+C*le+G*oe,u[15]=N*P+D*Q+C*ce+G*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],h=e[9],m=e[13],_=e[2],v=e[6],x=e[10],S=e[14],A=e[3],R=e[7],y=e[11],g=e[15];return A*(+u*h*v-a*m*v-u*d*x+r*m*x+a*d*S-r*h*S)+R*(+n*h*S-n*m*x+u*f*x-a*f*S+a*m*_-u*h*_)+y*(+n*m*v-n*d*S-u*f*v+r*f*S+u*d*_-r*m*_)+g*(-a*d*_-n*h*v+n*d*x+a*f*v-r*f*x+r*h*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],h=e[6],m=e[7],_=e[8],v=e[9],x=e[10],S=e[11],A=e[12],R=e[13],y=e[14],g=e[15],N=v*y*m-R*x*m+R*h*S-d*y*S-v*h*g+d*x*g,D=A*x*m-_*y*m-A*h*S+f*y*S+_*h*g-f*x*g,C=_*R*m-A*v*m+A*d*S-f*R*S-_*d*g+f*v*g,G=A*v*h-_*R*h-A*d*x+f*R*x+_*d*y-f*v*y,B=n*N+r*D+a*C+u*G;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return e[0]=N*O,e[1]=(R*x*u-v*y*u-R*a*S+r*y*S+v*a*g-r*x*g)*O,e[2]=(d*y*u-R*h*u+R*a*m-r*y*m-d*a*g+r*h*g)*O,e[3]=(v*h*u-d*x*u-v*a*m+r*x*m+d*a*S-r*h*S)*O,e[4]=D*O,e[5]=(_*y*u-A*x*u+A*a*S-n*y*S-_*a*g+n*x*g)*O,e[6]=(A*h*u-f*y*u-A*a*m+n*y*m+f*a*g-n*h*g)*O,e[7]=(f*x*u-_*h*u+_*a*m-n*x*m-f*a*S+n*h*S)*O,e[8]=C*O,e[9]=(A*v*u-_*R*u-A*r*S+n*R*S+_*r*g-n*v*g)*O,e[10]=(f*R*u-A*d*u+A*r*m-n*R*m-f*r*g+n*d*g)*O,e[11]=(_*d*u-f*v*u-_*r*m+n*v*m+f*r*S-n*d*S)*O,e[12]=G*O,e[13]=(_*R*a-A*v*a+A*r*x-n*R*x-_*r*y+n*v*y)*O,e[14]=(A*d*a-f*R*a-A*r*h+n*R*h+f*r*y-n*d*y)*O,e[15]=(f*v*a-_*d*a+_*r*h-n*v*h-f*r*x+n*d*x)*O,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,h=e.z,m=u*f,_=u*d;return this.set(m*f+r,m*d-a*h,m*h+a*d,0,m*d+a*h,_*d+r,_*h-a*f,0,m*h-a*d,_*h+a*f,u*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,h=n._w,m=u+u,_=f+f,v=d+d,x=u*m,S=u*_,A=u*v,R=f*_,y=f*v,g=d*v,N=h*m,D=h*_,C=h*v,G=r.x,B=r.y,O=r.z;return a[0]=(1-(R+g))*G,a[1]=(S+C)*G,a[2]=(A-D)*G,a[3]=0,a[4]=(S-C)*B,a[5]=(1-(x+g))*B,a[6]=(y+N)*B,a[7]=0,a[8]=(A+D)*O,a[9]=(y-N)*O,a[10]=(1-(x+R))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=As.set(a[0],a[1],a[2]).length();const f=As.set(a[4],a[5],a[6]).length(),d=As.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ni.copy(this);const m=1/u,_=1/f,v=1/d;return ni.elements[0]*=m,ni.elements[1]*=m,ni.elements[2]*=m,ni.elements[4]*=_,ni.elements[5]*=_,ni.elements[6]*=_,ni.elements[8]*=v,ni.elements[9]*=v,ni.elements[10]*=v,n.setFromRotationMatrix(ni),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=ki){const h=this.elements,m=2*u/(n-e),_=2*u/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let S,A;if(d===ki)S=-(f+u)/(f-u),A=-2*f*u/(f-u);else if(d===Cl)S=-f/(f-u),A=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=ki){const h=this.elements,m=1/(n-e),_=1/(r-a),v=1/(f-u),x=(n+e)*m,S=(r+a)*_;let A,R;if(d===ki)A=(f+u)*v,R=-2*v;else if(d===Cl)A=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=R,h[14]=-A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const As=new Z,ni=new zt,m0=new Z(0,0,0),g0=new Z(1,1,1),dr=new Z,sl=new Z,On=new Z,Op=new zt,kp=new zo;class vi{constructor(e=0,n=0,r=0,a=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],h=a[1],m=a[5],_=a[9],v=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(h,u));break;case"ZYX":this._y=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Op,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return kp.setFromEuler(this),this.setFromQuaternion(kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class Wm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _0=0;const Bp=new Z,Rs=new zo,Di=new zt,ol=new Z,Co=new Z,v0=new Z,x0=new zo,zp=new Z(1,0,0),Hp=new Z(0,1,0),Vp=new Z(0,0,1),Gp={type:"added"},y0={type:"removed"},Cs={type:"childadded",child:null},Rc={type:"childremoved",child:null};class Dn extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new Z,n=new vi,r=new zo,a=new Z(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new zt},normalMatrix:{value:new ot}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(zp,e)}rotateY(e){return this.rotateOnAxis(Hp,e)}rotateZ(e){return this.rotateOnAxis(Vp,e)}translateOnAxis(e,n){return Bp.copy(e).applyQuaternion(this.quaternion),this.position.add(Bp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zp,e)}translateY(e){return this.translateOnAxis(Hp,e)}translateZ(e){return this.translateOnAxis(Vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ol.copy(e):ol.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Co,ol,this.up):Di.lookAt(ol,Co,this.up),this.quaternion.setFromRotationMatrix(Di),a&&(Di.extractRotation(a.matrixWorld),Rs.setFromRotationMatrix(Di),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gp),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(y0),Rc.child=e,this.dispatchEvent(Rc),Rc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gp),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,v0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,x0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const v=h[m];u(e.shapes,v)}else u(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(u(e.materials,this.material[h]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(u(e.animations,h))}}if(n){const d=f(e.geometries),h=f(e.materials),m=f(e.textures),_=f(e.images),v=f(e.shapes),x=f(e.skeletons),S=f(e.animations),A=f(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),A.length>0&&(r.nodes=A)}return r.object=a,r;function f(d){const h=[];for(const m in d){const _=d[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Dn.DEFAULT_UP=new Z(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new Z,Ni=new Z,Cc=new Z,Ii=new Z,Ps=new Z,bs=new Z,Wp=new Z,Pc=new Z,bc=new Z,Lc=new Z,Dc=new Ct,Nc=new Ct,Ic=new Ct;class si{constructor(e=new Z,n=new Z,r=new Z){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ii.subVectors(e,n),a.cross(ii);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ii.subVectors(a,n),Ni.subVectors(r,n),Cc.subVectors(e,n);const f=ii.dot(ii),d=ii.dot(Ni),h=ii.dot(Cc),m=Ni.dot(Ni),_=Ni.dot(Cc),v=f*m-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,S=(m*h-d*_)*x,A=(f*_-d*h)*x;return u.set(1-S-A,A,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,n,r,a,u,f,d,h){return this.getBarycoord(e,n,r,a,Ii)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(u,Ii.x),h.addScaledVector(f,Ii.y),h.addScaledVector(d,Ii.z),h)}static getInterpolatedAttribute(e,n,r,a,u,f){return Dc.setScalar(0),Nc.setScalar(0),Ic.setScalar(0),Dc.fromBufferAttribute(e,n),Nc.fromBufferAttribute(e,r),Ic.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Dc,u.x),f.addScaledVector(Nc,u.y),f.addScaledVector(Ic,u.z),f}static isFrontFacing(e,n,r,a){return ii.subVectors(r,n),Ni.subVectors(e,n),ii.cross(Ni).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ii.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return si.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Ps.subVectors(a,r),bs.subVectors(u,r),Pc.subVectors(e,r);const h=Ps.dot(Pc),m=bs.dot(Pc);if(h<=0&&m<=0)return n.copy(r);bc.subVectors(e,a);const _=Ps.dot(bc),v=bs.dot(bc);if(_>=0&&v<=_)return n.copy(a);const x=h*v-_*m;if(x<=0&&h>=0&&_<=0)return f=h/(h-_),n.copy(r).addScaledVector(Ps,f);Lc.subVectors(e,u);const S=Ps.dot(Lc),A=bs.dot(Lc);if(A>=0&&S<=A)return n.copy(u);const R=S*m-h*A;if(R<=0&&m>=0&&A<=0)return d=m/(m-A),n.copy(r).addScaledVector(bs,d);const y=_*A-S*v;if(y<=0&&v-_>=0&&S-A>=0)return Wp.subVectors(u,a),d=(v-_)/(v-_+(S-A)),n.copy(a).addScaledVector(Wp,d);const g=1/(y+R+x);return f=R*g,d=x*g,n.copy(r).addScaledVector(Ps,f).addScaledVector(bs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},al={h:0,s:0,l:0};function Uc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class ct{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Et.workingColorSpace){if(e=Wf(e,1),n=gt(n,0,1),r=gt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Uc(f,u,e+1/3),this.g=Uc(f,u,e),this.b=Uc(f,u,e-1/3)}return Et.toWorkingColorSpace(this,a),this}setStyle(e,n=Yn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Yn){const r=Xm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return Et.fromWorkingColorSpace(mn.copy(this),e),Math.round(gt(mn.r*255,0,255))*65536+Math.round(gt(mn.g*255,0,255))*256+Math.round(gt(mn.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.fromWorkingColorSpace(mn.copy(this),n);const r=mn.r,a=mn.g,u=mn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let h,m;const _=(d+f)/2;if(d===f)h=0,m=0;else{const v=f-d;switch(m=_<=.5?v/(f+d):v/(2-f-d),f){case r:h=(a-u)/v+(a<u?6:0);break;case a:h=(u-r)/v+2;break;case u:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=Et.workingColorSpace){return Et.fromWorkingColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Yn){Et.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,a=mn.b;return e!==Yn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(al);const r=No(hr.h,al.h,n),a=No(hr.s,al.s,n),u=No(hr.l,al.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new ct;ct.NAMES=Xm;let S0=0;class Vo extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=Os,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=Kc,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==$c&&(r.blendSrc=this.blendSrc),this.blendDst!==Kc&&(r.blendDst=this.blendDst),this.blendEquation!==Wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const h=u[d];delete h.metadata,f.push(h)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jm extends Vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Cm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new Z,ll=new Tt;let M0=0;class gi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M0++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=bp,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ll.fromBufferAttribute(this,n),ll.applyMatrix3(e),this.setXY(n,ll.x,ll.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix3(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Us(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Sn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Us(n,this.array)),n}setX(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Us(n,this.array)),n}setY(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Us(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Us(n,this.array)),n}setW(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),r=Sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),r=Sn(r,this.array),a=Sn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),r=Sn(r,this.array),a=Sn(a,this.array),u=Sn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bp&&(e.usage=this.usage),e}}class Ym extends gi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class qm extends gi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class _i extends gi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let E0=0;const jn=new zt,Fc=new Dn,Ls=new Z,kn=new Ho,Po=new Ho,rn=new Z;class Sr extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vm(e)?qm:Ym)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,r){return jn.makeTranslation(e,n,r),this.applyMatrix4(jn),this}scale(e,n,r){return jn.makeScale(e,n,r),this.applyMatrix4(jn),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new _i(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];kn.setFromBufferAttribute(u),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Po.setFromBufferAttribute(d),this.morphTargetsRelative?(rn.addVectors(kn.min,Po.min),kn.expandByPoint(rn),rn.addVectors(kn.max,Po.max),kn.expandByPoint(rn)):(kn.expandByPoint(Po.min),kn.expandByPoint(Po.max))}kn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)rn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(rn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],h=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)rn.fromBufferAttribute(d,m),h&&(Ls.fromBufferAttribute(e,m),rn.add(Ls)),a=Math.max(a,r.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],h=[];for(let Y=0;Y<r.count;Y++)d[Y]=new Z,h[Y]=new Z;const m=new Z,_=new Z,v=new Z,x=new Tt,S=new Tt,A=new Tt,R=new Z,y=new Z;function g(Y,P,w){m.fromBufferAttribute(r,Y),_.fromBufferAttribute(r,P),v.fromBufferAttribute(r,w),x.fromBufferAttribute(u,Y),S.fromBufferAttribute(u,P),A.fromBufferAttribute(u,w),_.sub(m),v.sub(m),S.sub(x),A.sub(x);const k=1/(S.x*A.y-A.x*S.y);isFinite(k)&&(R.copy(_).multiplyScalar(A.y).addScaledVector(v,-S.y).multiplyScalar(k),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-A.x).multiplyScalar(k),d[Y].add(R),d[P].add(R),d[w].add(R),h[Y].add(y),h[P].add(y),h[w].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let Y=0,P=N.length;Y<P;++Y){const w=N[Y],k=w.start,se=w.count;for(let Q=k,ae=k+se;Q<ae;Q+=3)g(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const D=new Z,C=new Z,G=new Z,B=new Z;function O(Y){G.fromBufferAttribute(a,Y),B.copy(G);const P=d[Y];D.copy(P),D.sub(G.multiplyScalar(G.dot(P))).normalize(),C.crossVectors(B,P);const k=C.dot(h[Y])<0?-1:1;f.setXYZW(Y,D.x,D.y,D.z,k)}for(let Y=0,P=N.length;Y<P;++Y){const w=N[Y],k=w.start,se=w.count;for(let Q=k,ae=k+se;Q<ae;Q+=3)O(e.getX(Q+0)),O(e.getX(Q+1)),O(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new Z,u=new Z,f=new Z,d=new Z,h=new Z,m=new Z,_=new Z,v=new Z;if(e)for(let x=0,S=e.count;x<S;x+=3){const A=e.getX(x+0),R=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,A),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,y),_.subVectors(f,u),v.subVectors(a,u),_.cross(v),d.fromBufferAttribute(r,A),h.fromBufferAttribute(r,R),m.fromBufferAttribute(r,y),d.add(_),h.add(_),m.add(_),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),_.subVectors(f,u),v.subVectors(a,u),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(d,h){const m=d.array,_=d.itemSize,v=d.normalized,x=new m.constructor(h.length*_);let S=0,A=0;for(let R=0,y=h.length;R<y;R++){d.isInterleavedBufferAttribute?S=h[R]*d.data.stride+d.offset:S=h[R]*_;for(let g=0;g<_;g++)x[A++]=m[S++]}return new gi(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Sr,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],m=e(h,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const h=[],m=u[d];for(let _=0,v=m.length;_<v;_++){const x=m[_],S=e(x,r);h.push(S)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,h=f.length;d<h;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let u=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],v=u[m];for(let x=0,S=v.length;x<S;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xp=new zt,kr=new p0,ul=new jf,jp=new Z,cl=new Z,fl=new Z,dl=new Z,Oc=new Z,hl=new Z,Yp=new Z,pl=new Z;class qn extends Dn{constructor(e=new Sr,n=new jm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){hl.set(0,0,0);for(let h=0,m=u.length;h<m;h++){const _=d[h],v=u[h];_!==0&&(Oc.fromBufferAttribute(v,e),f?hl.addScaledVector(Oc,_):hl.addScaledVector(Oc.sub(n),_))}n.add(hl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ul.copy(r.boundingSphere),ul.applyMatrix4(u),kr.copy(e.ray).recast(e.near),!(ul.containsPoint(kr.origin)===!1&&(kr.intersectSphere(ul,jp)===null||kr.origin.distanceToSquared(jp)>(e.far-e.near)**2))&&(Xp.copy(u).invert(),kr.copy(e.ray).applyMatrix4(Xp),!(r.boundingBox!==null&&kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,h=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let A=0,R=x.length;A<R;A++){const y=x[A],g=f[y.materialIndex],N=Math.max(y.start,S.start),D=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=N,G=D;C<G;C+=3){const B=d.getX(C),O=d.getX(C+1),Y=d.getX(C+2);a=ml(this,g,e,r,m,_,v,B,O,Y),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const A=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let y=A,g=R;y<g;y+=3){const N=d.getX(y),D=d.getX(y+1),C=d.getX(y+2);a=ml(this,f,e,r,m,_,v,N,D,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(f))for(let A=0,R=x.length;A<R;A++){const y=x[A],g=f[y.materialIndex],N=Math.max(y.start,S.start),D=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=N,G=D;C<G;C+=3){const B=C,O=C+1,Y=C+2;a=ml(this,g,e,r,m,_,v,B,O,Y),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const A=Math.max(0,S.start),R=Math.min(h.count,S.start+S.count);for(let y=A,g=R;y<g;y+=3){const N=y,D=y+1,C=y+2;a=ml(this,f,e,r,m,_,v,N,D,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function T0(s,e,n,r,a,u,f,d){let h;if(e.side===bn?h=r.intersectTriangle(f,u,a,!0,d):h=r.intersectTriangle(a,u,f,e.side===xr,d),h===null)return null;pl.copy(d),pl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(pl);return m<n.near||m>n.far?null:{distance:m,point:pl.clone(),object:s}}function ml(s,e,n,r,a,u,f,d,h,m){s.getVertexPosition(d,cl),s.getVertexPosition(h,fl),s.getVertexPosition(m,dl);const _=T0(s,e,n,r,cl,fl,dl,Yp);if(_){const v=new Z;si.getBarycoord(Yp,cl,fl,dl,v),a&&(_.uv=si.getInterpolatedAttribute(a,d,h,m,v,new Tt)),u&&(_.uv1=si.getInterpolatedAttribute(u,d,h,m,v,new Tt)),f&&(_.normal=si.getInterpolatedAttribute(f,d,h,m,v,new Z),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:h,c:m,normal:new Z,materialIndex:0};si.getNormal(cl,fl,dl,x.normal),_.face=x,_.barycoord=v}return _}class Go extends Sr{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const h=[],m=[],_=[],v=[];let x=0,S=0;A("z","y","x",-1,-1,r,n,e,f,u,0),A("z","y","x",1,-1,r,n,-e,f,u,1),A("x","z","y",1,1,e,r,n,a,f,2),A("x","z","y",1,-1,e,r,-n,a,f,3),A("x","y","z",1,-1,e,n,r,a,u,4),A("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(h),this.setAttribute("position",new _i(m,3)),this.setAttribute("normal",new _i(_,3)),this.setAttribute("uv",new _i(v,2));function A(R,y,g,N,D,C,G,B,O,Y,P){const w=C/O,k=G/Y,se=C/2,Q=G/2,ae=B/2,fe=O+1,le=Y+1;let ce=0,z=0;const ue=new Z;for(let oe=0;oe<le;oe++){const I=oe*k-Q;for(let ie=0;ie<fe;ie++){const Ie=ie*w-se;ue[R]=Ie*N,ue[y]=I*D,ue[g]=ae,m.push(ue.x,ue.y,ue.z),ue[R]=0,ue[y]=0,ue[g]=B>0?1:-1,_.push(ue.x,ue.y,ue.z),v.push(ie/O),v.push(1-oe/Y),ce+=1}}for(let oe=0;oe<Y;oe++)for(let I=0;I<O;I++){const ie=x+I+fe*oe,Ie=x+I+fe*(oe+1),ee=x+(I+1)+fe*(oe+1),pe=x+(I+1)+fe*oe;h.push(ie,Ie,pe),h.push(Ie,ee,pe),z+=6}d.addGroup(S,z,P),S+=z,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Mn(s){const e={};for(let n=0;n<s.length;n++){const r=Gs(s[n]);for(const a in r)e[a]=r[a]}return e}function w0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function $m(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const A0={clone:Gs,merge:Mn};var R0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R0,this.fragmentShader=C0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=w0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Km extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new Z,qp=new Tt,$p=new Tt;class Bn extends Km{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ko*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,qp,$p),n.subVectors($p,qp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Do*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/h,n-=f.offsetY*r/m,a*=f.width/h,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ds=-90,Ns=1;class P0 extends Dn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Bn(Ds,Ns,e,n);a.layers=this.layers,this.add(a);const u=new Bn(Ds,Ns,e,n);u.layers=this.layers,this.add(u);const f=new Bn(Ds,Ns,e,n);f.layers=this.layers,this.add(f);const d=new Bn(Ds,Ns,e,n);d.layers=this.layers,this.add(d);const h=new Bn(Ds,Ns,e,n);h.layers=this.layers,this.add(h);const m=new Bn(Ds,Ns,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,h]=n;for(const m of n)this.remove(m);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Cl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,h,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,S),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Zm extends Ln{constructor(e=[],n=zs,r,a,u,f,d,h,m,_){super(e,n,r,a,u,f,d,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b0 extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Zm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Go(5,5,5),u=new yr({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:bn,blending:_r});u.uniforms.tEquirect.value=n;const f=new qn(a,u),d=n.minFilter;return n.minFilter===Yr&&(n.minFilter=mi),new P0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class qr extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L0={type:"move"};class kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const R of e.hand.values()){const y=n.getJointPose(R,r),g=this._getHandJoint(m,R);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),S=.02,A=.005;m.inputState.pinching&&x>S+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(L0)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new qr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class D0 extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Bc=new Z,N0=new Z,I0=new ot;class Vr{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Bc.subVectors(r,n).cross(N0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Bc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||I0.getNormalMatrix(e),a=this.coplanarPoint(Bc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new jf,gl=new Z;class Yf{constructor(e=new Vr,n=new Vr,r=new Vr,a=new Vr,u=new Vr,f=new Vr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ki){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],h=a[3],m=a[4],_=a[5],v=a[6],x=a[7],S=a[8],A=a[9],R=a[10],y=a[11],g=a[12],N=a[13],D=a[14],C=a[15];if(r[0].setComponents(h-u,x-m,y-S,C-g).normalize(),r[1].setComponents(h+u,x+m,y+S,C+g).normalize(),r[2].setComponents(h+f,x+_,y+A,C+N).normalize(),r[3].setComponents(h-f,x-_,y-A,C-N).normalize(),r[4].setComponents(h-d,x-v,y-R,C-D).normalize(),n===ki)r[5].setComponents(h+d,x+v,y+R,C+D).normalize();else if(n===Cl)r[5].setComponents(d,v,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(gl.x=a.normal.x>0?e.max.x:e.min.x,gl.y=a.normal.y>0?e.max.y:e.min.y,gl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qm extends Ln{constructor(e,n,r=$r,a,u,f,d=ai,h=ai,m,_=Fo){if(_!==Fo&&_!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,a,u,f,d,h,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Wo extends Sr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),h=Math.floor(a),m=d+1,_=h+1,v=e/d,x=n/h,S=[],A=[],R=[],y=[];for(let g=0;g<_;g++){const N=g*x-f;for(let D=0;D<m;D++){const C=D*v-u;A.push(C,-N,0),R.push(0,0,1),y.push(D/d),y.push(1-g/h)}}for(let g=0;g<h;g++)for(let N=0;N<d;N++){const D=N+m*g,C=N+m*(g+1),G=N+1+m*(g+1),B=N+1+m*g;S.push(D,C,B),S.push(C,G,B)}this.setIndex(S),this.setAttribute("position",new _i(A,3)),this.setAttribute("normal",new _i(R,3)),this.setAttribute("uv",new _i(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.widthSegments,e.heightSegments)}}class bl extends Sr{constructor(e=1,n=32,r=16,a=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:u,thetaStart:f,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(f+d,Math.PI);let m=0;const _=[],v=new Z,x=new Z,S=[],A=[],R=[],y=[];for(let g=0;g<=r;g++){const N=[],D=g/r;let C=0;g===0&&f===0?C=.5/n:g===r&&h===Math.PI&&(C=-.5/n);for(let G=0;G<=n;G++){const B=G/n;v.x=-e*Math.cos(a+B*u)*Math.sin(f+D*d),v.y=e*Math.cos(f+D*d),v.z=e*Math.sin(a+B*u)*Math.sin(f+D*d),A.push(v.x,v.y,v.z),x.copy(v).normalize(),R.push(x.x,x.y,x.z),y.push(B+C,1-D),N.push(m++)}_.push(N)}for(let g=0;g<r;g++)for(let N=0;N<n;N++){const D=_[g][N+1],C=_[g][N],G=_[g+1][N],B=_[g+1][N+1];(g!==0||f>0)&&S.push(D,C,B),(g!==r-1||h<Math.PI)&&S.push(C,G,B)}this.setIndex(S),this.setAttribute("position",new _i(A,3)),this.setAttribute("normal",new _i(R,3)),this.setAttribute("uv",new _i(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zc extends Vo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zm,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class U0 extends Vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class F0 extends Vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Jm extends Dn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Hc=new zt,Kp=new Z,Zp=new Z;class O0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yf,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Kp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Kp),Zp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Zp),n.updateMatrixWorld(),Hc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qp=new zt,bo=new Z,Vc=new Z;class k0 extends O0{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),bo.setFromMatrixPosition(e.matrixWorld),r.position.copy(bo),Vc.copy(r.position),Vc.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(Vc),r.updateMatrixWorld(),a.makeTranslation(-bo.x,-bo.y,-bo.z),Qp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qp)}}class B0 extends Jm{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new k0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class z0 extends Km{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=_*this.view.offsetY,h=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class H0 extends Jm{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class V0 extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function Jp(s,e,n,r){const a=G0(r);switch(n){case Nm:return s*e;case Um:return s*e;case Fm:return s*e*2;case Om:return s*e/a.components*a.byteLength;case Hf:return s*e/a.components*a.byteLength;case km:return s*e*2/a.components*a.byteLength;case Vf:return s*e*2/a.components*a.byteLength;case Im:return s*e*3/a.components*a.byteLength;case oi:return s*e*4/a.components*a.byteLength;case Gf:return s*e*4/a.components*a.byteLength;case yl:case Sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ml:case El:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cf:case df:return Math.max(s,16)*Math.max(e,8)/4;case uf:case ff:return Math.max(s,8)*Math.max(e,8)/2;case hf:case pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _f:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case vf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case yf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Tf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Af:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Rf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Pf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Tl:case bf:case Lf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Bm:case Df:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Nf:case If:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function G0(s){switch(s){case zi:case bm:return{byteLength:1,components:1};case Io:case Lm:case Bo:return{byteLength:2,components:1};case Bf:case zf:return{byteLength:2,components:4};case $r:case kf:case Oi:return{byteLength:4,components:1};case Dm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Of);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function eg(){let s=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function W0(s){const e=new WeakMap;function n(d,h){const m=d.array,_=d.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,h,m){const _=h.array,v=h.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,_);else{v.sort((S,A)=>S.start-A.start);let x=0;for(let S=1;S<v.length;S++){const A=v[x],R=v[S];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++x,v[x]=R)}v.length=x+1;for(let S=0,A=v.length;S<A;S++){const R=v[S];s.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function f(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:a,remove:u,update:f}}var X0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ix=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,px=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Px=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ox=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ey=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ty=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ny=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ry=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ay=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ly=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,py=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,my=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_y=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,My=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ay=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Py=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,by=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ly=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ny=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Iy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Oy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ky=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,By=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$y=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ES=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:X0,alphahash_pars_fragment:j0,alphamap_fragment:Y0,alphamap_pars_fragment:q0,alphatest_fragment:$0,alphatest_pars_fragment:K0,aomap_fragment:Z0,aomap_pars_fragment:Q0,batching_pars_vertex:J0,batching_vertex:ex,begin_vertex:tx,beginnormal_vertex:nx,bsdfs:ix,iridescence_fragment:rx,bumpmap_pars_fragment:sx,clipping_planes_fragment:ox,clipping_planes_pars_fragment:ax,clipping_planes_pars_vertex:lx,clipping_planes_vertex:ux,color_fragment:cx,color_pars_fragment:fx,color_pars_vertex:dx,color_vertex:hx,common:px,cube_uv_reflection_fragment:mx,defaultnormal_vertex:gx,displacementmap_pars_vertex:_x,displacementmap_vertex:vx,emissivemap_fragment:xx,emissivemap_pars_fragment:yx,colorspace_fragment:Sx,colorspace_pars_fragment:Mx,envmap_fragment:Ex,envmap_common_pars_fragment:Tx,envmap_pars_fragment:wx,envmap_pars_vertex:Ax,envmap_physical_pars_fragment:Ox,envmap_vertex:Rx,fog_vertex:Cx,fog_pars_vertex:Px,fog_fragment:bx,fog_pars_fragment:Lx,gradientmap_pars_fragment:Dx,lightmap_pars_fragment:Nx,lights_lambert_fragment:Ix,lights_lambert_pars_fragment:Ux,lights_pars_begin:Fx,lights_toon_fragment:kx,lights_toon_pars_fragment:Bx,lights_phong_fragment:zx,lights_phong_pars_fragment:Hx,lights_physical_fragment:Vx,lights_physical_pars_fragment:Gx,lights_fragment_begin:Wx,lights_fragment_maps:Xx,lights_fragment_end:jx,logdepthbuf_fragment:Yx,logdepthbuf_pars_fragment:qx,logdepthbuf_pars_vertex:$x,logdepthbuf_vertex:Kx,map_fragment:Zx,map_pars_fragment:Qx,map_particle_fragment:Jx,map_particle_pars_fragment:ey,metalnessmap_fragment:ty,metalnessmap_pars_fragment:ny,morphinstance_vertex:iy,morphcolor_vertex:ry,morphnormal_vertex:sy,morphtarget_pars_vertex:oy,morphtarget_vertex:ay,normal_fragment_begin:ly,normal_fragment_maps:uy,normal_pars_fragment:cy,normal_pars_vertex:fy,normal_vertex:dy,normalmap_pars_fragment:hy,clearcoat_normal_fragment_begin:py,clearcoat_normal_fragment_maps:my,clearcoat_pars_fragment:gy,iridescence_pars_fragment:_y,opaque_fragment:vy,packing:xy,premultiplied_alpha_fragment:yy,project_vertex:Sy,dithering_fragment:My,dithering_pars_fragment:Ey,roughnessmap_fragment:Ty,roughnessmap_pars_fragment:wy,shadowmap_pars_fragment:Ay,shadowmap_pars_vertex:Ry,shadowmap_vertex:Cy,shadowmask_pars_fragment:Py,skinbase_vertex:by,skinning_pars_vertex:Ly,skinning_vertex:Dy,skinnormal_vertex:Ny,specularmap_fragment:Iy,specularmap_pars_fragment:Uy,tonemapping_fragment:Fy,tonemapping_pars_fragment:Oy,transmission_fragment:ky,transmission_pars_fragment:By,uv_pars_fragment:zy,uv_pars_vertex:Hy,uv_vertex:Vy,worldpos_vertex:Gy,background_vert:Wy,background_frag:Xy,backgroundCube_vert:jy,backgroundCube_frag:Yy,cube_vert:qy,cube_frag:$y,depth_vert:Ky,depth_frag:Zy,distanceRGBA_vert:Qy,distanceRGBA_frag:Jy,equirect_vert:eS,equirect_frag:tS,linedashed_vert:nS,linedashed_frag:iS,meshbasic_vert:rS,meshbasic_frag:sS,meshlambert_vert:oS,meshlambert_frag:aS,meshmatcap_vert:lS,meshmatcap_frag:uS,meshnormal_vert:cS,meshnormal_frag:fS,meshphong_vert:dS,meshphong_frag:hS,meshphysical_vert:pS,meshphysical_frag:mS,meshtoon_vert:gS,meshtoon_frag:_S,points_vert:vS,points_frag:xS,shadow_vert:yS,shadow_frag:SS,sprite_vert:MS,sprite_frag:ES},Pe={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},pi={basic:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ct(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Mn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Mn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ct(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Mn([Pe.points,Pe.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Mn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Mn([Pe.common,Pe.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Mn([Pe.sprite,Pe.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Mn([Pe.common,Pe.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Mn([Pe.lights,Pe.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};pi.physical={uniforms:Mn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const _l={r:0,b:0,g:0},zr=new vi,TS=new zt;function wS(s,e,n,r,a,u,f){const d=new ct(0);let h=u===!0?0:1,m,_,v=null,x=0,S=null;function A(D){let C=D.isScene===!0?D.background:null;return C&&C.isTexture&&(C=(D.backgroundBlurriness>0?n:e).get(C)),C}function R(D){let C=!1;const G=A(D);G===null?g(d,h):G&&G.isColor&&(g(G,1),C=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,C){const G=A(C);G&&(G.isCubeTexture||G.mapping===Nl)?(_===void 0&&(_=new qn(new Go(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:Gs(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(B,O,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),zr.copy(C.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),_.material.uniforms.envMap.value=G,_.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(TS.makeRotationFromEuler(zr)),_.material.toneMapped=Et.getTransfer(G.colorSpace)!==Rt,(v!==G||x!==G.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,v=G,x=G.version,S=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new qn(new Wo(2,2),new yr({name:"BackgroundMaterial",uniforms:Gs(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Et.getTransfer(G.colorSpace)!==Rt,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||x!==G.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=G,x=G.version,S=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,C){D.getRGB(_l,$m(s)),r.buffers.color.setClear(_l.r,_l.g,_l.b,C,f)}function N(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,C=1){d.set(D),h=C,g(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,g(d,h)},render:R,addToRenderList:y,dispose:N}}function AS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(w,k,se,Q,ae){let fe=!1;const le=v(Q,se,k);u!==le&&(u=le,m(u.object)),fe=S(w,Q,se,ae),fe&&A(w,Q,se,ae),ae!==null&&e.update(ae,s.ELEMENT_ARRAY_BUFFER),(fe||f)&&(f=!1,C(w,k,se,Q),ae!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function h(){return s.createVertexArray()}function m(w){return s.bindVertexArray(w)}function _(w){return s.deleteVertexArray(w)}function v(w,k,se){const Q=se.wireframe===!0;let ae=r[w.id];ae===void 0&&(ae={},r[w.id]=ae);let fe=ae[k.id];fe===void 0&&(fe={},ae[k.id]=fe);let le=fe[Q];return le===void 0&&(le=x(h()),fe[Q]=le),le}function x(w){const k=[],se=[],Q=[];for(let ae=0;ae<n;ae++)k[ae]=0,se[ae]=0,Q[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:se,attributeDivisors:Q,object:w,attributes:{},index:null}}function S(w,k,se,Q){const ae=u.attributes,fe=k.attributes;let le=0;const ce=se.getAttributes();for(const z in ce)if(ce[z].location>=0){const oe=ae[z];let I=fe[z];if(I===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(I=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(I=w.instanceColor)),oe===void 0||oe.attribute!==I||I&&oe.data!==I.data)return!0;le++}return u.attributesNum!==le||u.index!==Q}function A(w,k,se,Q){const ae={},fe=k.attributes;let le=0;const ce=se.getAttributes();for(const z in ce)if(ce[z].location>=0){let oe=fe[z];oe===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(oe=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(oe=w.instanceColor));const I={};I.attribute=oe,oe&&oe.data&&(I.data=oe.data),ae[z]=I,le++}u.attributes=ae,u.attributesNum=le,u.index=Q}function R(){const w=u.newAttributes;for(let k=0,se=w.length;k<se;k++)w[k]=0}function y(w){g(w,0)}function g(w,k){const se=u.newAttributes,Q=u.enabledAttributes,ae=u.attributeDivisors;se[w]=1,Q[w]===0&&(s.enableVertexAttribArray(w),Q[w]=1),ae[w]!==k&&(s.vertexAttribDivisor(w,k),ae[w]=k)}function N(){const w=u.newAttributes,k=u.enabledAttributes;for(let se=0,Q=k.length;se<Q;se++)k[se]!==w[se]&&(s.disableVertexAttribArray(se),k[se]=0)}function D(w,k,se,Q,ae,fe,le){le===!0?s.vertexAttribIPointer(w,k,se,ae,fe):s.vertexAttribPointer(w,k,se,Q,ae,fe)}function C(w,k,se,Q){R();const ae=Q.attributes,fe=se.getAttributes(),le=k.defaultAttributeValues;for(const ce in fe){const z=fe[ce];if(z.location>=0){let ue=ae[ce];if(ue===void 0&&(ce==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),ce==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor)),ue!==void 0){const oe=ue.normalized,I=ue.itemSize,ie=e.get(ue);if(ie===void 0)continue;const Ie=ie.buffer,ee=ie.type,pe=ie.bytesPerElement,Me=ee===s.INT||ee===s.UNSIGNED_INT||ue.gpuType===kf;if(ue.isInterleavedBufferAttribute){const xe=ue.data,we=xe.stride,Ye=ue.offset;if(xe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<z.locationSize;Ge++)g(z.location+Ge,xe.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ge=0;Ge<z.locationSize;Ge++)y(z.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let Ge=0;Ge<z.locationSize;Ge++)D(z.location+Ge,I/z.locationSize,ee,oe,we*pe,(Ye+I/z.locationSize*Ge)*pe,Me)}else{if(ue.isInstancedBufferAttribute){for(let xe=0;xe<z.locationSize;xe++)g(z.location+xe,ue.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<z.locationSize;xe++)y(z.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let xe=0;xe<z.locationSize;xe++)D(z.location+xe,I/z.locationSize,ee,oe,I*pe,I/z.locationSize*xe*pe,Me)}}else if(le!==void 0){const oe=le[ce];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(z.location,oe);break;case 3:s.vertexAttrib3fv(z.location,oe);break;case 4:s.vertexAttrib4fv(z.location,oe);break;default:s.vertexAttrib1fv(z.location,oe)}}}}N()}function G(){Y();for(const w in r){const k=r[w];for(const se in k){const Q=k[se];for(const ae in Q)_(Q[ae].object),delete Q[ae];delete k[se]}delete r[w]}}function B(w){if(r[w.id]===void 0)return;const k=r[w.id];for(const se in k){const Q=k[se];for(const ae in Q)_(Q[ae].object),delete Q[ae];delete k[se]}delete r[w.id]}function O(w){for(const k in r){const se=r[k];if(se[w.id]===void 0)continue;const Q=se[w.id];for(const ae in Q)_(Q[ae].object),delete Q[ae];delete se[w.id]}}function Y(){P(),f=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:P,dispose:G,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:y,disableUnusedAttributes:N}}function RS(s,e,n){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let S=0;for(let A=0;A<v;A++)S+=_[A];n.update(S,r,1)}function h(m,_,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let A=0;A<m.length;A++)f(m[A],_[A],x[A]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let A=0;for(let R=0;R<v;R++)A+=_[R]*x[R];n.update(A,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function CS(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(O){return!(O!==oi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const Y=O===Bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==zi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Oi&&!Y)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=h(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=A>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:h,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:G,maxSamples:B}}function PS(s){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Vr,d=new ot,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||a;return a=x,r=v.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,S){const A=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!a||A===null||A.length===0||u&&!y)u?_(null):m();else{const N=u?0:r,D=N*4;let C=g.clippingState||null;h.value=C,C=_(A,x,D,S);for(let G=0;G!==D;++G)C[G]=n[G];g.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,S,A){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=h.value,A!==!0||y===null){const g=S+R*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(y===null||y.length<g)&&(y=new Float32Array(g));for(let D=0,C=S;D!==R;++D,C+=4)f.copy(v[D]).applyMatrix4(N,d),f.normal.toArray(y,C),y[C+3]=f.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function bS(s){let e=new WeakMap;function n(f,d){return d===sf?f.mapping=zs:d===of&&(f.mapping=Hs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===sf||d===of)if(e.has(f)){const h=e.get(f).texture;return n(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const m=new b0(h.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Fs=4,em=[.125,.215,.35,.446,.526,.582],Xr=20,Gc=new z0,tm=new ct;let Wc=null,Xc=0,jc=0,Yc=!1;const Gr=(1+Math.sqrt(5))/2,Is=1/Gr,nm=[new Z(-Gr,Is,0),new Z(Gr,Is,0),new Z(-Is,0,Gr),new Z(Is,0,Gr),new Z(0,Gr,-Is),new Z(0,Gr,Is),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],LS=new Z;class im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,u={}){const{size:f=256,position:d=LS}=u;Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,d),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc,Xc,jc),this._renderer.xr.enabled=Yc,e.scissorTest=!1,vl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Bo,format:oi,colorSpace:Vs,depthBuffer:!1},a=rm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DS(u)),this._blurMaterial=NS(u,e,n)}return a}_compileMaterial(e){const n=new qn(this._lodPlanes[0],e);this._renderer.compile(n,Gc)}_sceneToCubeUV(e,n,r,a,u){const h=new Bn(90,1,n,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(tm),v.toneMapping=vr,v.autoClear=!1;const A=new jm({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),R=new qn(new Go,A);let y=!1;const g=e.background;g?g.isColor&&(A.color.copy(g),e.background=null,y=!0):(A.color.copy(tm),y=!0);for(let N=0;N<6;N++){const D=N%3;D===0?(h.up.set(0,m[N],0),h.position.set(u.x,u.y,u.z),h.lookAt(u.x+_[N],u.y,u.z)):D===1?(h.up.set(0,0,m[N]),h.position.set(u.x,u.y,u.z),h.lookAt(u.x,u.y+_[N],u.z)):(h.up.set(0,m[N],0),h.position.set(u.x,u.y,u.z),h.lookAt(u.x,u.y,u.z+_[N]));const C=this._cubeSize;vl(a,D*C,N>2?C:0,C,C),v.setRenderTarget(a),y&&v.render(R,h),v.render(e,h)}R.geometry.dispose(),R.material.dispose(),v.toneMapping=S,v.autoClear=x,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===zs||e.mapping===Hs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sm());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new qn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const h=this._cubeSize;vl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(f,Gc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=nm[(a-u-1)%nm.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const h=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new qn(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Xr-1),R=u/A,y=isFinite(u)?1+Math.floor(_*R):Xr;y>Xr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Xr}`);const g=[];let N=0;for(let O=0;O<Xr;++O){const Y=O/R,P=Math.exp(-Y*Y/2);g.push(P),O===0?N+=P:O<y&&(N+=2*P)}for(let O=0;O<g.length;O++)g[O]=g[O]/N;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=A,x.mipInt.value=D-r;const C=this._sizeLods[a],G=3*C*(a>D-Fs?a-D+Fs:0),B=4*(this._cubeSize-C);vl(n,G,B,3*C,2*C),h.setRenderTarget(n),h.render(v,Gc)}}function DS(s){const e=[],n=[],r=[];let a=s;const u=s-Fs+1+em.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let h=1/d;f>s-Fs?h=em[f-s+Fs-1]:f===0&&(h=0),r.push(h);const m=1/(d-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,A=6,R=3,y=2,g=1,N=new Float32Array(R*A*S),D=new Float32Array(y*A*S),C=new Float32Array(g*A*S);for(let B=0;B<S;B++){const O=B%3*2/3-1,Y=B>2?0:-1,P=[O,Y,0,O+2/3,Y,0,O+2/3,Y+1,0,O,Y,0,O+2/3,Y+1,0,O,Y+1,0];N.set(P,R*A*B),D.set(x,y*A*B);const w=[B,B,B,B,B,B];C.set(w,g*A*B)}const G=new Sr;G.setAttribute("position",new gi(N,R)),G.setAttribute("uv",new gi(D,y)),G.setAttribute("faceIndex",new gi(C,g)),e.push(G),a>Fs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function rm(s,e,n){const r=new Kr(s,e,n);return r.texture.mapping=Nl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function NS(s,e,n){const r=new Float32Array(Xr),a=new Z(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function sm(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function om(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function qf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function IS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,m=h===sf||h===of,_=h===zs||h===Hs;if(m||_){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new im(s)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new im(s)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function a(d){let h=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&h++;return h===m}function u(d){const h=d.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function US(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&wl("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function FS(s,e,n,r){const a={},u=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",f),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(v,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function h(v){const x=v.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function m(v){const x=[],S=v.index,A=v.attributes.position;let R=0;if(S!==null){const N=S.array;R=S.version;for(let D=0,C=N.length;D<C;D+=3){const G=N[D+0],B=N[D+1],O=N[D+2];x.push(G,B,B,O,O,G)}}else if(A!==void 0){const N=A.array;R=A.version;for(let D=0,C=N.length/3-1;D<C;D+=3){const G=D+0,B=D+1,O=D+2;x.push(G,B,B,O,O,G)}}else return;const y=new(Vm(x)?qm:Ym)(x,1);y.version=R;const g=u.get(v);g&&e.remove(g),u.set(v,y)}function _(v){const x=u.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:h,getWireframeAttribute:_}}function OS(s,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function h(x,S){s.drawElements(r,S,u,x*f),n.update(S,r,1)}function m(x,S,A){A!==0&&(s.drawElementsInstanced(r,S,u,x*f,A),n.update(S,r,A))}function _(x,S,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,A);let y=0;for(let g=0;g<A;g++)y+=S[g];n.update(y,r,1)}function v(x,S,A,R){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/f,S[g],R[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,R,0,A);let g=0;for(let N=0;N<A;N++)g+=S[N]*R[N];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function kS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function BS(s,e,n){const r=new WeakMap,a=new Ct;function u(f,d,h){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let w=function(){Y.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var S=w;x!==void 0&&x.texture.dispose();const A=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let C=0;A===!0&&(C=1),R===!0&&(C=2),y===!0&&(C=3);let G=d.attributes.position.count*C,B=1;G>e.maxTextureSize&&(B=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const O=new Float32Array(G*B*4*v),Y=new Gm(O,G,B,v);Y.type=Oi,Y.needsUpdate=!0;const P=C*4;for(let k=0;k<v;k++){const se=g[k],Q=N[k],ae=D[k],fe=G*B*4*k;for(let le=0;le<se.count;le++){const ce=le*P;A===!0&&(a.fromBufferAttribute(se,le),O[fe+ce+0]=a.x,O[fe+ce+1]=a.y,O[fe+ce+2]=a.z,O[fe+ce+3]=0),R===!0&&(a.fromBufferAttribute(Q,le),O[fe+ce+4]=a.x,O[fe+ce+5]=a.y,O[fe+ce+6]=a.z,O[fe+ce+7]=0),y===!0&&(a.fromBufferAttribute(ae,le),O[fe+ce+8]=a.x,O[fe+ce+9]=a.y,O[fe+ce+10]=a.z,O[fe+ce+11]=ae.itemSize===4?a.w:1)}}x={count:v,texture:Y,size:new Tt(G,B)},r.set(d,x),d.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let A=0;for(let y=0;y<m.length;y++)A+=m[y];const R=d.morphTargetsRelative?1:1-A;h.getUniforms().setValue(s,"morphTargetBaseInfluence",R),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function zS(s,e,n,r){let a=new WeakMap;function u(h){const m=r.render.frame,_=h.geometry,v=e.get(h,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function f(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const tg=new Ln,am=new Qm(1,1),ng=new Gm,ig=new d0,rg=new Zm,lm=[],um=[],cm=new Float32Array(16),fm=new Float32Array(9),dm=new Float32Array(4);function js(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=lm[a];if(u===void 0&&(u=new Float32Array(a),lm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(u,d)}return u}function Kt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Zt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Il(s,e){let n=um[e];n===void 0&&(n=new Int32Array(e),um[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function HS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function VS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2fv(this.addr,e),Zt(n,e)}}function GS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;s.uniform3fv(this.addr,e),Zt(n,e)}}function WS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4fv(this.addr,e),Zt(n,e)}}function XS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;dm.set(r),s.uniformMatrix2fv(this.addr,!1,dm),Zt(n,r)}}function jS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;fm.set(r),s.uniformMatrix3fv(this.addr,!1,fm),Zt(n,r)}}function YS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;cm.set(r),s.uniformMatrix4fv(this.addr,!1,cm),Zt(n,r)}}function qS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function $S(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2iv(this.addr,e),Zt(n,e)}}function KS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3iv(this.addr,e),Zt(n,e)}}function ZS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4iv(this.addr,e),Zt(n,e)}}function QS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function JS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2uiv(this.addr,e),Zt(n,e)}}function eM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3uiv(this.addr,e),Zt(n,e)}}function tM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4uiv(this.addr,e),Zt(n,e)}}function nM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(am.compareFunction=Hm,u=am):u=tg,n.setTexture2D(e||u,a)}function iM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||ig,a)}function rM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||rg,a)}function sM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||ng,a)}function oM(s){switch(s){case 5126:return HS;case 35664:return VS;case 35665:return GS;case 35666:return WS;case 35674:return XS;case 35675:return jS;case 35676:return YS;case 5124:case 35670:return qS;case 35667:case 35671:return $S;case 35668:case 35672:return KS;case 35669:case 35673:return ZS;case 5125:return QS;case 36294:return JS;case 36295:return eM;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return sM}}function aM(s,e){s.uniform1fv(this.addr,e)}function lM(s,e){const n=js(e,this.size,2);s.uniform2fv(this.addr,n)}function uM(s,e){const n=js(e,this.size,3);s.uniform3fv(this.addr,n)}function cM(s,e){const n=js(e,this.size,4);s.uniform4fv(this.addr,n)}function fM(s,e){const n=js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function dM(s,e){const n=js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function hM(s,e){const n=js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function pM(s,e){s.uniform1iv(this.addr,e)}function mM(s,e){s.uniform2iv(this.addr,e)}function gM(s,e){s.uniform3iv(this.addr,e)}function _M(s,e){s.uniform4iv(this.addr,e)}function vM(s,e){s.uniform1uiv(this.addr,e)}function xM(s,e){s.uniform2uiv(this.addr,e)}function yM(s,e){s.uniform3uiv(this.addr,e)}function SM(s,e){s.uniform4uiv(this.addr,e)}function MM(s,e,n){const r=this.cache,a=e.length,u=Il(n,a);Kt(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||tg,u[f])}function EM(s,e,n){const r=this.cache,a=e.length,u=Il(n,a);Kt(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||ig,u[f])}function TM(s,e,n){const r=this.cache,a=e.length,u=Il(n,a);Kt(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||rg,u[f])}function wM(s,e,n){const r=this.cache,a=e.length,u=Il(n,a);Kt(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||ng,u[f])}function AM(s){switch(s){case 5126:return aM;case 35664:return lM;case 35665:return uM;case 35666:return cM;case 35674:return fM;case 35675:return dM;case 35676:return hM;case 5124:case 35670:return pM;case 35667:case 35671:return mM;case 35668:case 35672:return gM;case 35669:case 35673:return _M;case 5125:return vM;case 36294:return xM;case 36295:return yM;case 36296:return SM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return wM}}class RM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=oM(n.type)}}class CM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AM(n.type)}}class PM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const qc=/(\w+)(\])?(\[|\.)?/g;function hm(s,e){s.seq.push(e),s.map[e.id]=e}function bM(s,e,n){const r=s.name,a=r.length;for(qc.lastIndex=0;;){const u=qc.exec(r),f=qc.lastIndex;let d=u[1];const h=u[2]==="]",m=u[3];if(h&&(d=d|0),m===void 0||m==="["&&f+2===a){hm(n,m===void 0?new RM(d,s,e):new CM(d,s,e));break}else{let v=n.map[d];v===void 0&&(v=new PM(d),hm(n,v)),n=v}}}class Al{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);bM(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function pm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const LM=37297;let DM=0;function NM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const mm=new ot;function IM(s){Et._getMatrix(mm,Et.workingColorSpace,s);const e=`mat3( ${mm.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(s)){case Rl:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function gm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+NM(s.getShaderSource(e),f)}else return a}function UM(s,e){const n=IM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function FM(s,e){let n;switch(e){case Mv:n="Linear";break;case Ev:n="Reinhard";break;case Tv:n="Cineon";break;case wv:n="ACESFilmic";break;case Rv:n="AgX";break;case Cv:n="Neutral";break;case Av:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const xl=new Z;function OM(){Et.getLuminanceCoefficients(xl);const s=xl.x.toFixed(4),e=xl.y.toFixed(4),n=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function BM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function zM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function Lo(s){return s!==""}function _m(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uf(s){return s.replace(HM,GM)}const VM=new Map;function GM(s,e){let n=at[e];if(n===void 0){const r=VM.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Uf(n)}const WM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xm(s){return s.replace(WM,XM)}function XM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function ym(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Rm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===tv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function YM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function $M(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Cm:e="ENVMAP_BLENDING_MULTIPLY";break;case yv:e="ENVMAP_BLENDING_MIX";break;case Sv:e="ENVMAP_BLENDING_ADD";break}return e}function KM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function ZM(s,e,n,r){const a=s.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const h=jM(n),m=YM(n),_=qM(n),v=$M(n),x=KM(n),S=kM(n),A=BM(u),R=a.createProgram();let y,g,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Lo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Lo).join(`
`),g.length>0&&(g+=`
`)):(y=[ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),g=[ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vr?"#define TONE_MAPPING":"",n.toneMapping!==vr?at.tonemapping_pars_fragment:"",n.toneMapping!==vr?FM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,UM("linearToOutputTexel",n.outputColorSpace),OM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Lo).join(`
`)),f=Uf(f),f=_m(f,n),f=vm(f,n),d=Uf(d),d=_m(d,n),d=vm(d,n),f=xm(f),d=xm(d),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=N+y+f,C=N+g+d,G=pm(a,a.VERTEX_SHADER,D),B=pm(a,a.FRAGMENT_SHADER,C);a.attachShader(R,G),a.attachShader(R,B),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function O(k){if(s.debug.checkShaderErrors){const se=a.getProgramInfoLog(R).trim(),Q=a.getShaderInfoLog(G).trim(),ae=a.getShaderInfoLog(B).trim();let fe=!0,le=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(fe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,G,B);else{const ce=gm(a,G,"vertex"),z=gm(a,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+se+`
`+ce+`
`+z)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(Q===""||ae==="")&&(le=!1);le&&(k.diagnostics={runnable:fe,programLog:se,vertexShader:{log:Q,prefix:y},fragmentShader:{log:ae,prefix:g}})}a.deleteShader(G),a.deleteShader(B),Y=new Al(a,R),P=zM(a,R)}let Y;this.getUniforms=function(){return Y===void 0&&O(this),Y};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(R,LM)),w},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=DM++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=G,this.fragmentShader=B,this}let QM=0;class JM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new eE(e),n.set(e,r)),r}}class eE{constructor(e){this.id=QM++,this.code=e,this.usedTimes=0}}function tE(s,e,n,r,a,u,f){const d=new Wm,h=new JM,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,w,k,se,Q){const ae=se.fog,fe=Q.geometry,le=P.isMeshStandardMaterial?se.environment:null,ce=(P.isMeshStandardMaterial?n:e).get(P.envMap||le),z=ce&&ce.mapping===Nl?ce.image.height:null,ue=A[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const oe=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,I=oe!==void 0?oe.length:0;let ie=0;fe.morphAttributes.position!==void 0&&(ie=1),fe.morphAttributes.normal!==void 0&&(ie=2),fe.morphAttributes.color!==void 0&&(ie=3);let Ie,ee,pe,Me;if(ue){const xt=pi[ue];Ie=xt.vertexShader,ee=xt.fragmentShader}else Ie=P.vertexShader,ee=P.fragmentShader,h.update(P),pe=h.getVertexShaderID(P),Me=h.getFragmentShaderID(P);const xe=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ye=Q.isInstancedMesh===!0,Ge=Q.isBatchedMesh===!0,bt=!!P.map,Lt=!!P.matcap,lt=!!ce,F=!!P.aoMap,gn=!!P.lightMap,pt=!!P.bumpMap,ft=!!P.normalMap,qe=!!P.displacementMap,At=!!P.emissiveMap,We=!!P.metalnessMap,b=!!P.roughnessMap,E=P.anisotropy>0,J=P.clearcoat>0,me=P.dispersion>0,_e=P.iridescence>0,de=P.sheen>0,Xe=P.transmission>0,Ae=E&&!!P.anisotropyMap,Ue=J&&!!P.clearcoatMap,ut=J&&!!P.clearcoatNormalMap,Ee=J&&!!P.clearcoatRoughnessMap,Oe=_e&&!!P.iridescenceMap,Je=_e&&!!P.iridescenceThicknessMap,et=de&&!!P.sheenColorMap,ke=de&&!!P.sheenRoughnessMap,dt=!!P.specularMap,it=!!P.specularColorMap,wt=!!P.specularIntensityMap,V=Xe&&!!P.transmissionMap,Re=Xe&&!!P.thicknessMap,re=!!P.gradientMap,he=!!P.alphaMap,Le=P.alphaTest>0,be=!!P.alphaHash,rt=!!P.extensions;let Nt=vr;P.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Nt=s.toneMapping);const Yt={shaderID:ue,shaderType:P.type,shaderName:P.name,vertexShader:Ie,fragmentShader:ee,defines:P.defines,customVertexShaderID:pe,customFragmentShaderID:Me,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ge,batchingColor:Ge&&Q._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&Q.instanceColor!==null,instancingMorph:Ye&&Q.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Vs,alphaToCoverage:!!P.alphaToCoverage,map:bt,matcap:Lt,envMap:lt,envMapMode:lt&&ce.mapping,envMapCubeUVHeight:z,aoMap:F,lightMap:gn,bumpMap:pt,normalMap:ft,displacementMap:x&&qe,emissiveMap:At,normalMapObjectSpace:ft&&P.normalMapType===Dv,normalMapTangentSpace:ft&&P.normalMapType===zm,metalnessMap:We,roughnessMap:b,anisotropy:E,anisotropyMap:Ae,clearcoat:J,clearcoatMap:Ue,clearcoatNormalMap:ut,clearcoatRoughnessMap:Ee,dispersion:me,iridescence:_e,iridescenceMap:Oe,iridescenceThicknessMap:Je,sheen:de,sheenColorMap:et,sheenRoughnessMap:ke,specularMap:dt,specularColorMap:it,specularIntensityMap:wt,transmission:Xe,transmissionMap:V,thicknessMap:Re,gradientMap:re,opaque:P.transparent===!1&&P.blending===Os&&P.alphaToCoverage===!1,alphaMap:he,alphaTest:Le,alphaHash:be,combine:P.combine,mapUv:bt&&R(P.map.channel),aoMapUv:F&&R(P.aoMap.channel),lightMapUv:gn&&R(P.lightMap.channel),bumpMapUv:pt&&R(P.bumpMap.channel),normalMapUv:ft&&R(P.normalMap.channel),displacementMapUv:qe&&R(P.displacementMap.channel),emissiveMapUv:At&&R(P.emissiveMap.channel),metalnessMapUv:We&&R(P.metalnessMap.channel),roughnessMapUv:b&&R(P.roughnessMap.channel),anisotropyMapUv:Ae&&R(P.anisotropyMap.channel),clearcoatMapUv:Ue&&R(P.clearcoatMap.channel),clearcoatNormalMapUv:ut&&R(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&R(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&R(P.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&R(P.iridescenceThicknessMap.channel),sheenColorMapUv:et&&R(P.sheenColorMap.channel),sheenRoughnessMapUv:ke&&R(P.sheenRoughnessMap.channel),specularMapUv:dt&&R(P.specularMap.channel),specularColorMapUv:it&&R(P.specularColorMap.channel),specularIntensityMapUv:wt&&R(P.specularIntensityMap.channel),transmissionMapUv:V&&R(P.transmissionMap.channel),thicknessMapUv:Re&&R(P.thicknessMap.channel),alphaMapUv:he&&R(P.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(ft||E),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!fe.attributes.uv&&(bt||he),fog:!!ae,useFog:P.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:we,skinning:Q.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,decodeVideoTexture:bt&&P.map.isVideoTexture===!0&&Et.getTransfer(P.map.colorSpace)===Rt,decodeVideoTextureEmissive:At&&P.emissiveMap.isVideoTexture===!0&&Et.getTransfer(P.emissiveMap.colorSpace)===Rt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Fi,flipSided:P.side===bn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:rt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&P.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Yt.vertexUv1s=m.has(1),Yt.vertexUv2s=m.has(2),Yt.vertexUv3s=m.has(3),m.clear(),Yt}function g(P){const w=[];if(P.shaderID?w.push(P.shaderID):(w.push(P.customVertexShaderID),w.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)w.push(k),w.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(N(w,P),D(w,P),w.push(s.outputColorSpace)),w.push(P.customProgramCacheKey),w.join()}function N(P,w){P.push(w.precision),P.push(w.outputColorSpace),P.push(w.envMapMode),P.push(w.envMapCubeUVHeight),P.push(w.mapUv),P.push(w.alphaMapUv),P.push(w.lightMapUv),P.push(w.aoMapUv),P.push(w.bumpMapUv),P.push(w.normalMapUv),P.push(w.displacementMapUv),P.push(w.emissiveMapUv),P.push(w.metalnessMapUv),P.push(w.roughnessMapUv),P.push(w.anisotropyMapUv),P.push(w.clearcoatMapUv),P.push(w.clearcoatNormalMapUv),P.push(w.clearcoatRoughnessMapUv),P.push(w.iridescenceMapUv),P.push(w.iridescenceThicknessMapUv),P.push(w.sheenColorMapUv),P.push(w.sheenRoughnessMapUv),P.push(w.specularMapUv),P.push(w.specularColorMapUv),P.push(w.specularIntensityMapUv),P.push(w.transmissionMapUv),P.push(w.thicknessMapUv),P.push(w.combine),P.push(w.fogExp2),P.push(w.sizeAttenuation),P.push(w.morphTargetsCount),P.push(w.morphAttributeCount),P.push(w.numDirLights),P.push(w.numPointLights),P.push(w.numSpotLights),P.push(w.numSpotLightMaps),P.push(w.numHemiLights),P.push(w.numRectAreaLights),P.push(w.numDirLightShadows),P.push(w.numPointLightShadows),P.push(w.numSpotLightShadows),P.push(w.numSpotLightShadowsWithMaps),P.push(w.numLightProbes),P.push(w.shadowMapType),P.push(w.toneMapping),P.push(w.numClippingPlanes),P.push(w.numClipIntersection),P.push(w.depthPacking)}function D(P,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),P.push(d.mask)}function C(P){const w=A[P.type];let k;if(w){const se=pi[w];k=A0.clone(se.uniforms)}else k=P.uniforms;return k}function G(P,w){let k;for(let se=0,Q=_.length;se<Q;se++){const ae=_[se];if(ae.cacheKey===w){k=ae,++k.usedTimes;break}}return k===void 0&&(k=new ZM(s,w,P,u),_.push(k)),k}function B(P){if(--P.usedTimes===0){const w=_.indexOf(P);_[w]=_[_.length-1],_.pop(),P.destroy()}}function O(P){h.remove(P)}function Y(){h.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:G,releaseProgram:B,releaseShaderCache:O,programs:_,dispose:Y}}function nE(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,h){s.get(f)[d]=h}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function iE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Sm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Mm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(v,x,S,A,R,y){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:S,groupOrder:A,renderOrder:v.renderOrder,z:R,group:y},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=S,g.groupOrder=A,g.renderOrder=v.renderOrder,g.z=R,g.group=y),e++,g}function d(v,x,S,A,R,y){const g=f(v,x,S,A,R,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function h(v,x,S,A,R,y){const g=f(v,x,S,A,R,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||iE),r.length>1&&r.sort(x||Sm),a.length>1&&a.sort(x||Sm)}function _(){for(let v=e,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:h,finish:_,sort:m}}function rE(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new Mm,s.set(r,[f])):a>=u.length?(f=new Mm,u.push(f)):f=u[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function sE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new ct};break;case"SpotLight":n={position:new Z,direction:new Z,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":n={color:new ct,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=n,n}}}function oE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let aE=0;function lE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function uE(s){const e=new sE,n=oE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Z);const a=new Z,u=new zt,f=new zt;function d(m){let _=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,A=0,R=0,y=0,g=0,N=0,D=0,C=0,G=0,B=0,O=0;m.sort(lE);for(let P=0,w=m.length;P<w;P++){const k=m[P],se=k.color,Q=k.intensity,ae=k.distance,fe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=se.r*Q,v+=se.g*Q,x+=se.b*Q;else if(k.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(k.sh.coefficients[le],Q);O++}else if(k.isDirectionalLight){const le=e.get(k);if(le.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ce=k.shadow,z=n.get(k);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,r.directionalShadow[S]=z,r.directionalShadowMap[S]=fe,r.directionalShadowMatrix[S]=k.shadow.matrix,N++}r.directional[S]=le,S++}else if(k.isSpotLight){const le=e.get(k);le.position.setFromMatrixPosition(k.matrixWorld),le.color.copy(se).multiplyScalar(Q),le.distance=ae,le.coneCos=Math.cos(k.angle),le.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),le.decay=k.decay,r.spot[R]=le;const ce=k.shadow;if(k.map&&(r.spotLightMap[G]=k.map,G++,ce.updateMatrices(k),k.castShadow&&B++),r.spotLightMatrix[R]=ce.matrix,k.castShadow){const z=n.get(k);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,r.spotShadow[R]=z,r.spotShadowMap[R]=fe,C++}R++}else if(k.isRectAreaLight){const le=e.get(k);le.color.copy(se).multiplyScalar(Q),le.halfWidth.set(k.width*.5,0,0),le.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=le,y++}else if(k.isPointLight){const le=e.get(k);if(le.color.copy(k.color).multiplyScalar(k.intensity),le.distance=k.distance,le.decay=k.decay,k.castShadow){const ce=k.shadow,z=n.get(k);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,z.shadowCameraNear=ce.camera.near,z.shadowCameraFar=ce.camera.far,r.pointShadow[A]=z,r.pointShadowMap[A]=fe,r.pointShadowMatrix[A]=k.shadow.matrix,D++}r.point[A]=le,A++}else if(k.isHemisphereLight){const le=e.get(k);le.skyColor.copy(k.color).multiplyScalar(Q),le.groundColor.copy(k.groundColor).multiplyScalar(Q),r.hemi[g]=le,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const Y=r.hash;(Y.directionalLength!==S||Y.pointLength!==A||Y.spotLength!==R||Y.rectAreaLength!==y||Y.hemiLength!==g||Y.numDirectionalShadows!==N||Y.numPointShadows!==D||Y.numSpotShadows!==C||Y.numSpotMaps!==G||Y.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=y,r.point.length=A,r.hemi.length=g,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=C+G-B,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=O,Y.directionalLength=S,Y.pointLength=A,Y.spotLength=R,Y.rectAreaLength=y,Y.hemiLength=g,Y.numDirectionalShadows=N,Y.numPointShadows=D,Y.numSpotShadows=C,Y.numSpotMaps=G,Y.numLightProbes=O,r.version=aE++)}function h(m,_){let v=0,x=0,S=0,A=0,R=0;const y=_.matrixWorldInverse;for(let g=0,N=m.length;g<N;g++){const D=m[g];if(D.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),v++}else if(D.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(D.isRectAreaLight){const C=r.rectArea[A];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),f.identity(),u.copy(D.matrixWorld),u.premultiply(y),f.extractRotation(u),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),A++}else if(D.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),x++}else if(D.isHemisphereLight){const C=r.hemi[R];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(y),R++}}}return{setup:d,setupView:h,state:r}}function Em(s){const e=new uE(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function h(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:h,pushLight:u,pushShadow:f}}function cE(s){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new Em(s),e.set(a,[d])):u>=f.length?(d=new Em(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const fE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hE(s,e,n){let r=new Yf;const a=new Tt,u=new Tt,f=new Ct,d=new U0({depthPacking:Lv}),h=new F0,m={},_=n.maxTextureSize,v={[xr]:bn,[bn]:xr,[Fi]:Fi},x=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:fE,fragmentShader:dE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const A=new Sr;A.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new qn(A,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rm;let g=this.type;this.render=function(B,O,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;const P=s.getRenderTarget(),w=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),se=s.state;se.setBlending(_r),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const Q=g!==Ui&&this.type===Ui,ae=g===Ui&&this.type!==Ui;for(let fe=0,le=B.length;fe<le;fe++){const ce=B[fe],z=ce.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const ue=z.getFrameExtents();if(a.multiply(ue),u.copy(z.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/ue.x),a.x=u.x*ue.x,z.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/ue.y),a.y=u.y*ue.y,z.mapSize.y=u.y)),z.map===null||Q===!0||ae===!0){const I=this.type!==Ui?{minFilter:ai,magFilter:ai}:{};z.map!==null&&z.map.dispose(),z.map=new Kr(a.x,a.y,I),z.map.texture.name=ce.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const oe=z.getViewportCount();for(let I=0;I<oe;I++){const ie=z.getViewport(I);f.set(u.x*ie.x,u.y*ie.y,u.x*ie.z,u.y*ie.w),se.viewport(f),z.updateMatrices(ce,I),r=z.getFrustum(),C(O,Y,z.camera,ce,this.type)}z.isPointLightShadow!==!0&&this.type===Ui&&N(z,Y),z.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(P,w,k)};function N(B,O){const Y=e.update(R);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Kr(a.x,a.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(O,null,Y,x,R,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(O,null,Y,S,R,null)}function D(B,O,Y,P){let w=null;const k=Y.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(k!==void 0)w=k;else if(w=Y.isPointLight===!0?h:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const se=w.uuid,Q=O.uuid;let ae=m[se];ae===void 0&&(ae={},m[se]=ae);let fe=ae[Q];fe===void 0&&(fe=w.clone(),ae[Q]=fe,O.addEventListener("dispose",G)),w=fe}if(w.visible=O.visible,w.wireframe=O.wireframe,P===Ui?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:v[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,Y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const se=s.properties.get(w);se.light=Y}return w}function C(B,O,Y,P,w){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===Ui)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,B.matrixWorld);const Q=e.update(B),ae=B.material;if(Array.isArray(ae)){const fe=Q.groups;for(let le=0,ce=fe.length;le<ce;le++){const z=fe[le],ue=ae[z.materialIndex];if(ue&&ue.visible){const oe=D(B,ue,P,w);B.onBeforeShadow(s,B,O,Y,Q,oe,z),s.renderBufferDirect(Y,null,Q,oe,B,z),B.onAfterShadow(s,B,O,Y,Q,oe,z)}}}else if(ae.visible){const fe=D(B,ae,P,w);B.onBeforeShadow(s,B,O,Y,Q,fe,null),s.renderBufferDirect(Y,null,Q,fe,B,null),B.onAfterShadow(s,B,O,Y,Q,fe,null)}}const se=B.children;for(let Q=0,ae=se.length;Q<ae;Q++)C(se[Q],O,Y,P,w)}function G(B){B.target.removeEventListener("dispose",G);for(const Y in m){const P=m[Y],w=B.target.uuid;w in P&&(P[w].dispose(),delete P[w])}}}const pE={[Zc]:Qc,[Jc]:nf,[ef]:rf,[Bs]:tf,[Qc]:Zc,[nf]:Jc,[rf]:ef,[tf]:Bs};function mE(s,e){function n(){let V=!1;const Re=new Ct;let re=null;const he=new Ct(0,0,0,0);return{setMask:function(Le){re!==Le&&!V&&(s.colorMask(Le,Le,Le,Le),re=Le)},setLocked:function(Le){V=Le},setClear:function(Le,be,rt,Nt,Yt){Yt===!0&&(Le*=Nt,be*=Nt,rt*=Nt),Re.set(Le,be,rt,Nt),he.equals(Re)===!1&&(s.clearColor(Le,be,rt,Nt),he.copy(Re))},reset:function(){V=!1,re=null,he.set(-1,0,0,0)}}}function r(){let V=!1,Re=!1,re=null,he=null,Le=null;return{setReversed:function(be){if(Re!==be){const rt=e.get("EXT_clip_control");be?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),Re=be;const Nt=Le;Le=null,this.setClear(Nt)}},getReversed:function(){return Re},setTest:function(be){be?xe(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(be){re!==be&&!V&&(s.depthMask(be),re=be)},setFunc:function(be){if(Re&&(be=pE[be]),he!==be){switch(be){case Zc:s.depthFunc(s.NEVER);break;case Qc:s.depthFunc(s.ALWAYS);break;case Jc:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case ef:s.depthFunc(s.EQUAL);break;case tf:s.depthFunc(s.GEQUAL);break;case nf:s.depthFunc(s.GREATER);break;case rf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=be}},setLocked:function(be){V=be},setClear:function(be){Le!==be&&(Re&&(be=1-be),s.clearDepth(be),Le=be)},reset:function(){V=!1,re=null,he=null,Le=null,Re=!1}}}function a(){let V=!1,Re=null,re=null,he=null,Le=null,be=null,rt=null,Nt=null,Yt=null;return{setTest:function(xt){V||(xt?xe(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(xt){Re!==xt&&!V&&(s.stencilMask(xt),Re=xt)},setFunc:function(xt,En,_n){(re!==xt||he!==En||Le!==_n)&&(s.stencilFunc(xt,En,_n),re=xt,he=En,Le=_n)},setOp:function(xt,En,_n){(be!==xt||rt!==En||Nt!==_n)&&(s.stencilOp(xt,En,_n),be=xt,rt=En,Nt=_n)},setLocked:function(xt){V=xt},setClear:function(xt){Yt!==xt&&(s.clearStencil(xt),Yt=xt)},reset:function(){V=!1,Re=null,re=null,he=null,Le=null,be=null,rt=null,Nt=null,Yt=null}}}const u=new n,f=new r,d=new a,h=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,S=[],A=null,R=!1,y=null,g=null,N=null,D=null,C=null,G=null,B=null,O=new ct(0,0,0),Y=0,P=!1,w=null,k=null,se=null,Q=null,ae=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,ce=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(z)[1]),le=ce>=1):z.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),le=ce>=2);let ue=null,oe={};const I=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Ie=new Ct().fromArray(I),ee=new Ct().fromArray(ie);function pe(V,Re,re,he){const Le=new Uint8Array(4),be=s.createTexture();s.bindTexture(V,be),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<re;rt++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Re+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return be}const Me={};Me[s.TEXTURE_2D]=pe(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),xe(s.DEPTH_TEST),f.setFunc(Bs),pt(!1),ft(wp),xe(s.CULL_FACE),F(_r);function xe(V){_[V]!==!0&&(s.enable(V),_[V]=!0)}function we(V){_[V]!==!1&&(s.disable(V),_[V]=!1)}function Ye(V,Re){return v[V]!==Re?(s.bindFramebuffer(V,Re),v[V]=Re,V===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Re),V===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ge(V,Re){let re=S,he=!1;if(V){re=x.get(Re),re===void 0&&(re=[],x.set(Re,re));const Le=V.textures;if(re.length!==Le.length||re[0]!==s.COLOR_ATTACHMENT0){for(let be=0,rt=Le.length;be<rt;be++)re[be]=s.COLOR_ATTACHMENT0+be;re.length=Le.length,he=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,he=!0);he&&s.drawBuffers(re)}function bt(V){return A!==V?(s.useProgram(V),A=V,!0):!1}const Lt={[Wr]:s.FUNC_ADD,[iv]:s.FUNC_SUBTRACT,[rv]:s.FUNC_REVERSE_SUBTRACT};Lt[sv]=s.MIN,Lt[ov]=s.MAX;const lt={[av]:s.ZERO,[lv]:s.ONE,[uv]:s.SRC_COLOR,[$c]:s.SRC_ALPHA,[mv]:s.SRC_ALPHA_SATURATE,[hv]:s.DST_COLOR,[fv]:s.DST_ALPHA,[cv]:s.ONE_MINUS_SRC_COLOR,[Kc]:s.ONE_MINUS_SRC_ALPHA,[pv]:s.ONE_MINUS_DST_COLOR,[dv]:s.ONE_MINUS_DST_ALPHA,[gv]:s.CONSTANT_COLOR,[_v]:s.ONE_MINUS_CONSTANT_COLOR,[vv]:s.CONSTANT_ALPHA,[xv]:s.ONE_MINUS_CONSTANT_ALPHA};function F(V,Re,re,he,Le,be,rt,Nt,Yt,xt){if(V===_r){R===!0&&(we(s.BLEND),R=!1);return}if(R===!1&&(xe(s.BLEND),R=!0),V!==nv){if(V!==y||xt!==P){if((g!==Wr||C!==Wr)&&(s.blendEquation(s.FUNC_ADD),g=Wr,C=Wr),xt)switch(V){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ap:s.blendFunc(s.ONE,s.ONE);break;case Rp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ap:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Rp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}N=null,D=null,G=null,B=null,O.set(0,0,0),Y=0,y=V,P=xt}return}Le=Le||Re,be=be||re,rt=rt||he,(Re!==g||Le!==C)&&(s.blendEquationSeparate(Lt[Re],Lt[Le]),g=Re,C=Le),(re!==N||he!==D||be!==G||rt!==B)&&(s.blendFuncSeparate(lt[re],lt[he],lt[be],lt[rt]),N=re,D=he,G=be,B=rt),(Nt.equals(O)===!1||Yt!==Y)&&(s.blendColor(Nt.r,Nt.g,Nt.b,Yt),O.copy(Nt),Y=Yt),y=V,P=!1}function gn(V,Re){V.side===Fi?we(s.CULL_FACE):xe(s.CULL_FACE);let re=V.side===bn;Re&&(re=!re),pt(re),V.blending===Os&&V.transparent===!1?F(_r):F(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),u.setMask(V.colorWrite);const he=V.stencilWrite;d.setTest(he),he&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),At(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(V){w!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),w=V)}function ft(V){V!==J_?(xe(s.CULL_FACE),V!==k&&(V===wp?s.cullFace(s.BACK):V===ev?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),k=V}function qe(V){V!==se&&(le&&s.lineWidth(V),se=V)}function At(V,Re,re){V?(xe(s.POLYGON_OFFSET_FILL),(Q!==Re||ae!==re)&&(s.polygonOffset(Re,re),Q=Re,ae=re)):we(s.POLYGON_OFFSET_FILL)}function We(V){V?xe(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function b(V){V===void 0&&(V=s.TEXTURE0+fe-1),ue!==V&&(s.activeTexture(V),ue=V)}function E(V,Re,re){re===void 0&&(ue===null?re=s.TEXTURE0+fe-1:re=ue);let he=oe[re];he===void 0&&(he={type:void 0,texture:void 0},oe[re]=he),(he.type!==V||he.texture!==Re)&&(ue!==re&&(s.activeTexture(re),ue=re),s.bindTexture(V,Re||Me[V]),he.type=V,he.texture=Re)}function J(){const V=oe[ue];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function me(){try{s.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{s.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{s.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{s.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{s.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(){try{s.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{s.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{s.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{s.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(){try{s.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(V){Ie.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ie.copy(V))}function ke(V){ee.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),ee.copy(V))}function dt(V,Re){let re=m.get(Re);re===void 0&&(re=new WeakMap,m.set(Re,re));let he=re.get(V);he===void 0&&(he=s.getUniformBlockIndex(Re,V.name),re.set(V,he))}function it(V,Re){const he=m.get(Re).get(V);h.get(Re)!==he&&(s.uniformBlockBinding(Re,he,V.__bindingPointIndex),h.set(Re,he))}function wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ue=null,oe={},v={},x=new WeakMap,S=[],A=null,R=!1,y=null,g=null,N=null,D=null,C=null,G=null,B=null,O=new ct(0,0,0),Y=0,P=!1,w=null,k=null,se=null,Q=null,ae=null,Ie.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:xe,disable:we,bindFramebuffer:Ye,drawBuffers:Ge,useProgram:bt,setBlending:F,setMaterial:gn,setFlipSided:pt,setCullFace:ft,setLineWidth:qe,setPolygonOffset:At,setScissorTest:We,activeTexture:b,bindTexture:E,unbindTexture:J,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:Oe,texImage3D:Je,updateUBOMapping:dt,uniformBlockBinding:it,texStorage2D:ut,texStorage3D:Ee,texSubImage2D:de,texSubImage3D:Xe,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ue,scissor:et,viewport:ke,reset:wt}}function gE(s,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Tt,_=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(b,E){return S?new OffscreenCanvas(b,E):Pl("canvas")}function R(b,E,J){let me=1;const _e=We(b);if((_e.width>J||_e.height>J)&&(me=J/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const de=Math.floor(me*_e.width),Xe=Math.floor(me*_e.height);v===void 0&&(v=A(de,Xe));const Ae=E?A(de,Xe):v;return Ae.width=de,Ae.height=Xe,Ae.getContext("2d").drawImage(b,0,0,de,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+de+"x"+Xe+")."),Ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),b;return b}function y(b){return b.generateMipmaps}function g(b){s.generateMipmap(b)}function N(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(b,E,J,me,_e=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let de=E;if(E===s.RED&&(J===s.FLOAT&&(de=s.R32F),J===s.HALF_FLOAT&&(de=s.R16F),J===s.UNSIGNED_BYTE&&(de=s.R8)),E===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.R8UI),J===s.UNSIGNED_SHORT&&(de=s.R16UI),J===s.UNSIGNED_INT&&(de=s.R32UI),J===s.BYTE&&(de=s.R8I),J===s.SHORT&&(de=s.R16I),J===s.INT&&(de=s.R32I)),E===s.RG&&(J===s.FLOAT&&(de=s.RG32F),J===s.HALF_FLOAT&&(de=s.RG16F),J===s.UNSIGNED_BYTE&&(de=s.RG8)),E===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RG8UI),J===s.UNSIGNED_SHORT&&(de=s.RG16UI),J===s.UNSIGNED_INT&&(de=s.RG32UI),J===s.BYTE&&(de=s.RG8I),J===s.SHORT&&(de=s.RG16I),J===s.INT&&(de=s.RG32I)),E===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RGB8UI),J===s.UNSIGNED_SHORT&&(de=s.RGB16UI),J===s.UNSIGNED_INT&&(de=s.RGB32UI),J===s.BYTE&&(de=s.RGB8I),J===s.SHORT&&(de=s.RGB16I),J===s.INT&&(de=s.RGB32I)),E===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),J===s.UNSIGNED_INT&&(de=s.RGBA32UI),J===s.BYTE&&(de=s.RGBA8I),J===s.SHORT&&(de=s.RGBA16I),J===s.INT&&(de=s.RGBA32I)),E===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),E===s.RGBA){const Xe=_e?Rl:Et.getTransfer(me);J===s.FLOAT&&(de=s.RGBA32F),J===s.HALF_FLOAT&&(de=s.RGBA16F),J===s.UNSIGNED_BYTE&&(de=Xe===Rt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function C(b,E){let J;return b?E===null||E===$r||E===Uo?J=s.DEPTH24_STENCIL8:E===Oi?J=s.DEPTH32F_STENCIL8:E===Io&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===$r||E===Uo?J=s.DEPTH_COMPONENT24:E===Oi?J=s.DEPTH_COMPONENT32F:E===Io&&(J=s.DEPTH_COMPONENT16),J}function G(b,E){return y(b)===!0||b.isFramebufferTexture&&b.minFilter!==ai&&b.minFilter!==mi?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function B(b){const E=b.target;E.removeEventListener("dispose",B),Y(E),E.isVideoTexture&&_.delete(E)}function O(b){const E=b.target;E.removeEventListener("dispose",O),w(E)}function Y(b){const E=r.get(b);if(E.__webglInit===void 0)return;const J=b.source,me=x.get(J);if(me){const _e=me[E.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&P(b),Object.keys(me).length===0&&x.delete(J)}r.remove(b)}function P(b){const E=r.get(b);s.deleteTexture(E.__webglTexture);const J=b.source,me=x.get(J);delete me[E.__cacheKey],f.memory.textures--}function w(b){const E=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(E.__webglFramebuffer[me]))for(let _e=0;_e<E.__webglFramebuffer[me].length;_e++)s.deleteFramebuffer(E.__webglFramebuffer[me][_e]);else s.deleteFramebuffer(E.__webglFramebuffer[me]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[me])}else{if(Array.isArray(E.__webglFramebuffer))for(let me=0;me<E.__webglFramebuffer.length;me++)s.deleteFramebuffer(E.__webglFramebuffer[me]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let me=0;me<E.__webglColorRenderbuffer.length;me++)E.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[me]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=b.textures;for(let me=0,_e=J.length;me<_e;me++){const de=r.get(J[me]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),f.memory.textures--),r.remove(J[me])}r.remove(b)}let k=0;function se(){k=0}function Q(){const b=k;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),k+=1,b}function ae(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function fe(b,E){const J=r.get(b);if(b.isVideoTexture&&qe(b),b.isRenderTargetTexture===!1&&b.version>0&&J.__version!==b.version){const me=b.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(J,b,E);return}}n.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+E)}function le(b,E){const J=r.get(b);if(b.version>0&&J.__version!==b.version){ee(J,b,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+E)}function ce(b,E){const J=r.get(b);if(b.version>0&&J.__version!==b.version){ee(J,b,E);return}n.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+E)}function z(b,E){const J=r.get(b);if(b.version>0&&J.__version!==b.version){pe(J,b,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+E)}const ue={[af]:s.REPEAT,[jr]:s.CLAMP_TO_EDGE,[lf]:s.MIRRORED_REPEAT},oe={[ai]:s.NEAREST,[Pv]:s.NEAREST_MIPMAP_NEAREST,[Ja]:s.NEAREST_MIPMAP_LINEAR,[mi]:s.LINEAR,[vc]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},I={[Nv]:s.NEVER,[Bv]:s.ALWAYS,[Iv]:s.LESS,[Hm]:s.LEQUAL,[Uv]:s.EQUAL,[kv]:s.GEQUAL,[Fv]:s.GREATER,[Ov]:s.NOTEQUAL};function ie(b,E){if(E.type===Oi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===mi||E.magFilter===vc||E.magFilter===Ja||E.magFilter===Yr||E.minFilter===mi||E.minFilter===vc||E.minFilter===Ja||E.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ue[E.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ue[E.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ue[E.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,oe[E.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,oe[E.minFilter]),E.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ai||E.minFilter!==Ja&&E.minFilter!==Yr||E.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ie(b,E){let J=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",B));const me=E.source;let _e=x.get(me);_e===void 0&&(_e={},x.set(me,_e));const de=ae(E);if(de!==b.__cacheKey){_e[de]===void 0&&(_e[de]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,J=!0),_e[de].usedTimes++;const Xe=_e[b.__cacheKey];Xe!==void 0&&(_e[b.__cacheKey].usedTimes--,Xe.usedTimes===0&&P(E)),b.__cacheKey=de,b.__webglTexture=_e[de].texture}return J}function ee(b,E,J){let me=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(me=s.TEXTURE_3D);const _e=Ie(b,E),de=E.source;n.bindTexture(me,b.__webglTexture,s.TEXTURE0+J);const Xe=r.get(de);if(de.version!==Xe.__version||_e===!0){n.activeTexture(s.TEXTURE0+J);const Ae=Et.getPrimaries(Et.workingColorSpace),Ue=E.colorSpace===mr?null:Et.getPrimaries(E.colorSpace),ut=E.colorSpace===mr||Ae===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Ee=R(E.image,!1,a.maxTextureSize);Ee=At(E,Ee);const Oe=u.convert(E.format,E.colorSpace),Je=u.convert(E.type);let et=D(E.internalFormat,Oe,Je,E.colorSpace,E.isVideoTexture);ie(me,E);let ke;const dt=E.mipmaps,it=E.isVideoTexture!==!0,wt=Xe.__version===void 0||_e===!0,V=de.dataReady,Re=G(E,Ee);if(E.isDepthTexture)et=C(E.format===Oo,E.type),wt&&(it?n.texStorage2D(s.TEXTURE_2D,1,et,Ee.width,Ee.height):n.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,Oe,Je,null));else if(E.isDataTexture)if(dt.length>0){it&&wt&&n.texStorage2D(s.TEXTURE_2D,Re,et,dt[0].width,dt[0].height);for(let re=0,he=dt.length;re<he;re++)ke=dt[re],it?V&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,ke.width,ke.height,Oe,Je,ke.data):n.texImage2D(s.TEXTURE_2D,re,et,ke.width,ke.height,0,Oe,Je,ke.data);E.generateMipmaps=!1}else it?(wt&&n.texStorage2D(s.TEXTURE_2D,Re,et,Ee.width,Ee.height),V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Oe,Je,Ee.data)):n.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,Oe,Je,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&wt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,et,dt[0].width,dt[0].height,Ee.depth);for(let re=0,he=dt.length;re<he;re++)if(ke=dt[re],E.format!==oi)if(Oe!==null)if(it){if(V)if(E.layerUpdates.size>0){const Le=Jp(ke.width,ke.height,E.format,E.type);for(const be of E.layerUpdates){const rt=ke.data.subarray(be*Le/ke.data.BYTES_PER_ELEMENT,(be+1)*Le/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,be,ke.width,ke.height,1,Oe,rt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,ke.width,ke.height,Ee.depth,Oe,ke.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,et,ke.width,ke.height,Ee.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?V&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,ke.width,ke.height,Ee.depth,Oe,Je,ke.data):n.texImage3D(s.TEXTURE_2D_ARRAY,re,et,ke.width,ke.height,Ee.depth,0,Oe,Je,ke.data)}else{it&&wt&&n.texStorage2D(s.TEXTURE_2D,Re,et,dt[0].width,dt[0].height);for(let re=0,he=dt.length;re<he;re++)ke=dt[re],E.format!==oi?Oe!==null?it?V&&n.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(s.TEXTURE_2D,re,et,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?V&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,ke.width,ke.height,Oe,Je,ke.data):n.texImage2D(s.TEXTURE_2D,re,et,ke.width,ke.height,0,Oe,Je,ke.data)}else if(E.isDataArrayTexture)if(it){if(wt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,et,Ee.width,Ee.height,Ee.depth),V)if(E.layerUpdates.size>0){const re=Jp(Ee.width,Ee.height,E.format,E.type);for(const he of E.layerUpdates){const Le=Ee.data.subarray(he*re/Ee.data.BYTES_PER_ELEMENT,(he+1)*re/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Ee.width,Ee.height,1,Oe,Je,Le)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Oe,Je,Ee.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Ee.width,Ee.height,Ee.depth,0,Oe,Je,Ee.data);else if(E.isData3DTexture)it?(wt&&n.texStorage3D(s.TEXTURE_3D,Re,et,Ee.width,Ee.height,Ee.depth),V&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Oe,Je,Ee.data)):n.texImage3D(s.TEXTURE_3D,0,et,Ee.width,Ee.height,Ee.depth,0,Oe,Je,Ee.data);else if(E.isFramebufferTexture){if(wt)if(it)n.texStorage2D(s.TEXTURE_2D,Re,et,Ee.width,Ee.height);else{let re=Ee.width,he=Ee.height;for(let Le=0;Le<Re;Le++)n.texImage2D(s.TEXTURE_2D,Le,et,re,he,0,Oe,Je,null),re>>=1,he>>=1}}else if(dt.length>0){if(it&&wt){const re=We(dt[0]);n.texStorage2D(s.TEXTURE_2D,Re,et,re.width,re.height)}for(let re=0,he=dt.length;re<he;re++)ke=dt[re],it?V&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,Oe,Je,ke):n.texImage2D(s.TEXTURE_2D,re,et,Oe,Je,ke);E.generateMipmaps=!1}else if(it){if(wt){const re=We(Ee);n.texStorage2D(s.TEXTURE_2D,Re,et,re.width,re.height)}V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Je,Ee)}else n.texImage2D(s.TEXTURE_2D,0,et,Oe,Je,Ee);y(E)&&g(me),Xe.__version=de.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function pe(b,E,J){if(E.image.length!==6)return;const me=Ie(b,E),_e=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+J);const de=r.get(_e);if(_e.version!==de.__version||me===!0){n.activeTexture(s.TEXTURE0+J);const Xe=Et.getPrimaries(Et.workingColorSpace),Ae=E.colorSpace===mr?null:Et.getPrimaries(E.colorSpace),Ue=E.colorSpace===mr||Xe===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ut=E.isCompressedTexture||E.image[0].isCompressedTexture,Ee=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let he=0;he<6;he++)!ut&&!Ee?Oe[he]=R(E.image[he],!0,a.maxCubemapSize):Oe[he]=Ee?E.image[he].image:E.image[he],Oe[he]=At(E,Oe[he]);const Je=Oe[0],et=u.convert(E.format,E.colorSpace),ke=u.convert(E.type),dt=D(E.internalFormat,et,ke,E.colorSpace),it=E.isVideoTexture!==!0,wt=de.__version===void 0||me===!0,V=_e.dataReady;let Re=G(E,Je);ie(s.TEXTURE_CUBE_MAP,E);let re;if(ut){it&&wt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,dt,Je.width,Je.height);for(let he=0;he<6;he++){re=Oe[he].mipmaps;for(let Le=0;Le<re.length;Le++){const be=re[Le];E.format!==oi?et!==null?it?V&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,be.width,be.height,et,be.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,dt,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,be.width,be.height,et,ke,be.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,dt,be.width,be.height,0,et,ke,be.data)}}}else{if(re=E.mipmaps,it&&wt){re.length>0&&Re++;const he=We(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,dt,he.width,he.height)}for(let he=0;he<6;he++)if(Ee){it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Oe[he].width,Oe[he].height,et,ke,Oe[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,Oe[he].width,Oe[he].height,0,et,ke,Oe[he].data);for(let Le=0;Le<re.length;Le++){const rt=re[Le].image[he].image;it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,rt.width,rt.height,et,ke,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,dt,rt.width,rt.height,0,et,ke,rt.data)}}else{it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,et,ke,Oe[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,et,ke,Oe[he]);for(let Le=0;Le<re.length;Le++){const be=re[Le];it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,et,ke,be.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,dt,et,ke,be.image[he])}}}y(E)&&g(s.TEXTURE_CUBE_MAP),de.__version=_e.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Me(b,E,J,me,_e,de){const Xe=u.convert(J.format,J.colorSpace),Ae=u.convert(J.type),Ue=D(J.internalFormat,Xe,Ae,J.colorSpace),ut=r.get(E),Ee=r.get(J);if(Ee.__renderTarget=E,!ut.__hasExternalTextures){const Oe=Math.max(1,E.width>>de),Je=Math.max(1,E.height>>de);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,de,Ue,Oe,Je,E.depth,0,Xe,Ae,null):n.texImage2D(_e,de,Ue,Oe,Je,0,Xe,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),ft(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,_e,Ee.__webglTexture,0,pt(E)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,_e,Ee.__webglTexture,de),n.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(b,E,J){if(s.bindRenderbuffer(s.RENDERBUFFER,b),E.depthBuffer){const me=E.depthTexture,_e=me&&me.isDepthTexture?me.type:null,de=C(E.stencilBuffer,_e),Xe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=pt(E);ft(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,de,E.width,E.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,de,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,de,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,b)}else{const me=E.textures;for(let _e=0;_e<me.length;_e++){const de=me[_e],Xe=u.convert(de.format,de.colorSpace),Ae=u.convert(de.type),Ue=D(de.internalFormat,Xe,Ae,de.colorSpace),ut=pt(E);J&&ft(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Ue,E.width,E.height):ft(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,Ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(E.depthTexture);me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),fe(E.depthTexture,0);const _e=me.__webglTexture,de=pt(E);if(E.depthTexture.format===Fo)ft(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(E.depthTexture.format===Oo)ft(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ye(b){const E=r.get(b),J=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const me=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),me){const _e=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),E.__depthDisposeCallback=_e}E.__boundDepthTexture=me}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");we(E.__webglFramebuffer,b)}else if(J){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]===void 0)E.__webglDepthbuffer[me]=s.createRenderbuffer(),xe(E.__webglDepthbuffer[me],b,!1);else{const _e=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,de)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),xe(E.__webglDepthbuffer,b,!1);else{const me=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,_e)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(b,E,J){const me=r.get(b);E!==void 0&&Me(me.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Ye(b)}function bt(b){const E=b.texture,J=r.get(b),me=r.get(E);b.addEventListener("dispose",O);const _e=b.textures,de=b.isWebGLCubeRenderTarget===!0,Xe=_e.length>1;if(Xe||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=E.version,f.memory.textures++),de){J.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[Ae]=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)J.__webglFramebuffer[Ae][Ue]=s.createFramebuffer()}else J.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)J.__webglFramebuffer[Ae]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let Ae=0,Ue=_e.length;Ae<Ue;Ae++){const ut=r.get(_e[Ae]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),f.memory.textures++)}if(b.samples>0&&ft(b)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Ue=_e[Ae];J.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Ae]);const ut=u.convert(Ue.format,Ue.colorSpace),Ee=u.convert(Ue.type),Oe=D(Ue.internalFormat,ut,Ee,Ue.colorSpace,b.isXRRenderTarget===!0),Je=pt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,Oe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,J.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(J.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ie(s.TEXTURE_CUBE_MAP,E);for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)Me(J.__webglFramebuffer[Ae][Ue],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ue);else Me(J.__webglFramebuffer[Ae],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(E)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xe){for(let Ae=0,Ue=_e.length;Ae<Ue;Ae++){const ut=_e[Ae],Ee=r.get(ut);n.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),ie(s.TEXTURE_2D,ut),Me(J.__webglFramebuffer,b,ut,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),y(ut)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ae=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,me.__webglTexture),ie(Ae,E),E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)Me(J.__webglFramebuffer[Ue],b,E,s.COLOR_ATTACHMENT0,Ae,Ue);else Me(J.__webglFramebuffer,b,E,s.COLOR_ATTACHMENT0,Ae,0);y(E)&&g(Ae),n.unbindTexture()}b.depthBuffer&&Ye(b)}function Lt(b){const E=b.textures;for(let J=0,me=E.length;J<me;J++){const _e=E[J];if(y(_e)){const de=N(b),Xe=r.get(_e).__webglTexture;n.bindTexture(de,Xe),g(de),n.unbindTexture()}}}const lt=[],F=[];function gn(b){if(b.samples>0){if(ft(b)===!1){const E=b.textures,J=b.width,me=b.height;let _e=s.COLOR_BUFFER_BIT;const de=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=r.get(b),Ae=E.length>1;if(Ae)for(let Ue=0;Ue<E.length;Ue++)n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ue=0;Ue<E.length;Ue++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const ut=r.get(E[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,J,me,0,0,J,me,_e,s.NEAREST),h===!0&&(lt.length=0,F.length=0,lt.push(s.COLOR_ATTACHMENT0+Ue),b.depthBuffer&&b.resolveDepthBuffer===!1&&(lt.push(de),F.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Ue=0;Ue<E.length;Ue++){n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const ut=r.get(E[Ue]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ut,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const E=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function pt(b){return Math.min(a.maxSamples,b.samples)}function ft(b){const E=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function qe(b){const E=f.render.frame;_.get(b)!==E&&(_.set(b,E),b.update())}function At(b,E){const J=b.colorSpace,me=b.format,_e=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||J!==Vs&&J!==mr&&(Et.getTransfer(J)===Rt?(me!==oi||_e!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),E}function We(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=Q,this.resetTextureUnits=se,this.setTexture2D=fe,this.setTexture2DArray=le,this.setTexture3D=ce,this.setTextureCube=z,this.rebindTextures=Ge,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ft}function _E(s,e){function n(r,a=mr){let u;const f=Et.getTransfer(a);if(r===zi)return s.UNSIGNED_BYTE;if(r===Bf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===zf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Dm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===bm)return s.BYTE;if(r===Lm)return s.SHORT;if(r===Io)return s.UNSIGNED_SHORT;if(r===kf)return s.INT;if(r===$r)return s.UNSIGNED_INT;if(r===Oi)return s.FLOAT;if(r===Bo)return s.HALF_FLOAT;if(r===Nm)return s.ALPHA;if(r===Im)return s.RGB;if(r===oi)return s.RGBA;if(r===Um)return s.LUMINANCE;if(r===Fm)return s.LUMINANCE_ALPHA;if(r===Fo)return s.DEPTH_COMPONENT;if(r===Oo)return s.DEPTH_STENCIL;if(r===Om)return s.RED;if(r===Hf)return s.RED_INTEGER;if(r===km)return s.RG;if(r===Vf)return s.RG_INTEGER;if(r===Gf)return s.RGBA_INTEGER;if(r===yl||r===Sl||r===Ml||r===El)if(f===Rt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===yl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ml)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===El)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===yl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ml)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===El)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===uf||r===cf||r===ff||r===df)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===uf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ff)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===df)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hf||r===pf||r===mf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===hf||r===pf)return f===Rt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===mf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gf||r===_f||r===vf||r===xf||r===yf||r===Sf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Rf||r===Cf||r===Pf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===gf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_f)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ef)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Tf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Af)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Pf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tl||r===bf||r===Lf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Tl)return f===Rt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Bm||r===Df||r===Nf||r===If)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Tl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Df)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===If)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Uo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const vE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Ln,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new yr({vertexShader:vE,fragmentShader:xE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qn(new Wo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SE extends Ws{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",h=1,m=null,_=null,v=null,x=null,S=null,A=null;const R=new yE,y=n.getContextAttributes();let g=null,N=null;const D=[],C=[],G=new Tt;let B=null;const O=new Bn;O.viewport=new Ct;const Y=new Bn;Y.viewport=new Ct;const P=[O,Y],w=new V0;let k=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let pe=D[ee];return pe===void 0&&(pe=new kc,D[ee]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ee){let pe=D[ee];return pe===void 0&&(pe=new kc,D[ee]=pe),pe.getGripSpace()},this.getHand=function(ee){let pe=D[ee];return pe===void 0&&(pe=new kc,D[ee]=pe),pe.getHandSpace()};function Q(ee){const pe=C.indexOf(ee.inputSource);if(pe===-1)return;const Me=D[pe];Me!==void 0&&(Me.update(ee.inputSource,ee.frame,m||f),Me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ae(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",ae),a.removeEventListener("inputsourceschange",fe);for(let ee=0;ee<D.length;ee++){const pe=C[ee];pe!==null&&(C[ee]=null,D[ee].disconnect(pe))}k=null,se=null,R.reset(),e.setRenderTarget(g),S=null,x=null,v=null,a=null,N=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){u=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){d=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(ee){m=ee},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return A},this.getSession=function(){return a},this.setSession=async function(ee){if(a=ee,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",ae),a.addEventListener("inputsourceschange",fe),y.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,xe=null,we=null;y.depth&&(we=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=y.stencil?Oo:Fo,xe=y.stencil?Uo:$r);const Ye={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:u};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Ye),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new Kr(x.textureWidth,x.textureHeight,{format:oi,type:zi,depthTexture:new Qm(x.textureWidth,x.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,Me),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Kr(S.framebufferWidth,S.framebufferHeight,{format:oi,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),m=null,f=await a.requestReferenceSpace(d),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function fe(ee){for(let pe=0;pe<ee.removed.length;pe++){const Me=ee.removed[pe],xe=C.indexOf(Me);xe>=0&&(C[xe]=null,D[xe].disconnect(Me))}for(let pe=0;pe<ee.added.length;pe++){const Me=ee.added[pe];let xe=C.indexOf(Me);if(xe===-1){for(let Ye=0;Ye<D.length;Ye++)if(Ye>=C.length){C.push(Me),xe=Ye;break}else if(C[Ye]===null){C[Ye]=Me,xe=Ye;break}if(xe===-1)break}const we=D[xe];we&&we.connect(Me)}}const le=new Z,ce=new Z;function z(ee,pe,Me){le.setFromMatrixPosition(pe.matrixWorld),ce.setFromMatrixPosition(Me.matrixWorld);const xe=le.distanceTo(ce),we=pe.projectionMatrix.elements,Ye=Me.projectionMatrix.elements,Ge=we[14]/(we[10]-1),bt=we[14]/(we[10]+1),Lt=(we[9]+1)/we[5],lt=(we[9]-1)/we[5],F=(we[8]-1)/we[0],gn=(Ye[8]+1)/Ye[0],pt=Ge*F,ft=Ge*gn,qe=xe/(-F+gn),At=qe*-F;if(pe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(At),ee.translateZ(qe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),we[10]===-1)ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const We=Ge+qe,b=bt+qe,E=pt-At,J=ft+(xe-At),me=Lt*bt/b*We,_e=lt*bt/b*We;ee.projectionMatrix.makePerspective(E,J,me,_e,We,b),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ue(ee,pe){pe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(pe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(a===null)return;let pe=ee.near,Me=ee.far;R.texture!==null&&(R.depthNear>0&&(pe=R.depthNear),R.depthFar>0&&(Me=R.depthFar)),w.near=Y.near=O.near=pe,w.far=Y.far=O.far=Me,(k!==w.near||se!==w.far)&&(a.updateRenderState({depthNear:w.near,depthFar:w.far}),k=w.near,se=w.far),O.layers.mask=ee.layers.mask|2,Y.layers.mask=ee.layers.mask|4,w.layers.mask=O.layers.mask|Y.layers.mask;const xe=ee.parent,we=w.cameras;ue(w,xe);for(let Ye=0;Ye<we.length;Ye++)ue(we[Ye],xe);we.length===2?z(w,O,Y):w.projectionMatrix.copy(O.projectionMatrix),oe(ee,w,xe)};function oe(ee,pe,Me){Me===null?ee.matrix.copy(pe.matrixWorld):(ee.matrix.copy(Me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(pe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ko*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(ee){h=ee,x!==null&&(x.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(w)};let I=null;function ie(ee,pe){if(_=pe.getViewerPose(m||f),A=pe,_!==null){const Me=_.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let xe=!1;Me.length!==w.cameras.length&&(w.cameras.length=0,xe=!0);for(let Ge=0;Ge<Me.length;Ge++){const bt=Me[Ge];let Lt=null;if(S!==null)Lt=S.getViewport(bt);else{const F=v.getViewSubImage(x,bt);Lt=F.viewport,Ge===0&&(e.setRenderTargetTextures(N,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(N))}let lt=P[Ge];lt===void 0&&(lt=new Bn,lt.layers.enable(Ge),lt.viewport=new Ct,P[Ge]=lt),lt.matrix.fromArray(bt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(bt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Ge===0&&(w.matrix.copy(lt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),xe===!0&&w.cameras.push(lt)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){const Ge=v.getDepthInformation(Me[0]);Ge&&Ge.isValid&&Ge.texture&&R.init(e,Ge,a.renderState)}}for(let Me=0;Me<D.length;Me++){const xe=C[Me],we=D[Me];xe!==null&&we!==void 0&&we.update(xe,pe,m||f)}I&&I(ee,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),A=null}const Ie=new eg;Ie.setAnimationLoop(ie),this.setAnimationLoop=function(ee){I=ee},this.dispose=function(){}}}const Hr=new vi,ME=new zt;function EE(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,$m(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,N,D,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),v(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),x(y,g),g.isMeshPhysicalMaterial&&S(y,g,C)):g.isMeshMatcapMaterial?(u(y,g),A(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),R(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(f(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?h(y,g,N,D):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===bn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===bn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const N=e.get(g),D=N.envMap,C=N.envMapRotation;D&&(y.envMap.value=D,Hr.copy(C),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),y.envMapRotation.value.setFromMatrix4(ME.makeRotationFromEuler(Hr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function f(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function h(y,g,N,D){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*N,y.scale.value=D*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,N){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===bn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,g){g.matcap&&(y.matcap.value=g.matcap)}function R(y,g){const N=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function TE(s,e,n,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,D){const C=D.program;r.uniformBlockBinding(N,C)}function m(N,D){let C=a[N.id];C===void 0&&(A(N),C=_(N),a[N.id]=C,N.addEventListener("dispose",y));const G=D.program;r.updateUBOMapping(N,G);const B=e.render.frame;u[N.id]!==B&&(x(N),u[N.id]=B)}function _(N){const D=v();N.__bindingPointIndex=D;const C=s.createBuffer(),G=N.__size,B=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,G,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,C),C}function v(){for(let N=0;N<d;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const D=a[N.id],C=N.uniforms,G=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let B=0,O=C.length;B<O;B++){const Y=Array.isArray(C[B])?C[B]:[C[B]];for(let P=0,w=Y.length;P<w;P++){const k=Y[P];if(S(k,B,P,G)===!0){const se=k.__offset,Q=Array.isArray(k.value)?k.value:[k.value];let ae=0;for(let fe=0;fe<Q.length;fe++){const le=Q[fe],ce=R(le);typeof le=="number"||typeof le=="boolean"?(k.__data[0]=le,s.bufferSubData(s.UNIFORM_BUFFER,se+ae,k.__data)):le.isMatrix3?(k.__data[0]=le.elements[0],k.__data[1]=le.elements[1],k.__data[2]=le.elements[2],k.__data[3]=0,k.__data[4]=le.elements[3],k.__data[5]=le.elements[4],k.__data[6]=le.elements[5],k.__data[7]=0,k.__data[8]=le.elements[6],k.__data[9]=le.elements[7],k.__data[10]=le.elements[8],k.__data[11]=0):(le.toArray(k.__data,ae),ae+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,se,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,D,C,G){const B=N.value,O=D+"_"+C;if(G[O]===void 0)return typeof B=="number"||typeof B=="boolean"?G[O]=B:G[O]=B.clone(),!0;{const Y=G[O];if(typeof B=="number"||typeof B=="boolean"){if(Y!==B)return G[O]=B,!0}else if(Y.equals(B)===!1)return Y.copy(B),!0}return!1}function A(N){const D=N.uniforms;let C=0;const G=16;for(let O=0,Y=D.length;O<Y;O++){const P=Array.isArray(D[O])?D[O]:[D[O]];for(let w=0,k=P.length;w<k;w++){const se=P[w],Q=Array.isArray(se.value)?se.value:[se.value];for(let ae=0,fe=Q.length;ae<fe;ae++){const le=Q[ae],ce=R(le),z=C%G,ue=z%ce.boundary,oe=z+ue;C+=ue,oe!==0&&G-oe<ce.storage&&(C+=G-oe),se.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=C,C+=ce.storage}}}const B=C%G;return B>0&&(C+=G-B),N.__size=C,N.__cache={},this}function R(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),D}function y(N){const D=N.target;D.removeEventListener("dispose",y);const C=f.indexOf(D.__bindingPointIndex);f.splice(C,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete u[D.id]}function g(){for(const N in a)s.deleteBuffer(a[N]);f=[],a={},u={}}return{bind:h,update:m,dispose:g}}class wE{constructor(e={}){const{canvas:n=i0(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const A=new Uint32Array(4),R=new Int32Array(4);let y=null,g=null;const N=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let G=!1;this._outputColorSpace=Yn;let B=0,O=0,Y=null,P=-1,w=null;const k=new Ct,se=new Ct;let Q=null;const ae=new ct(0);let fe=0,le=n.width,ce=n.height,z=1,ue=null,oe=null;const I=new Ct(0,0,le,ce),ie=new Ct(0,0,le,ce);let Ie=!1;const ee=new Yf;let pe=!1,Me=!1;const xe=new zt,we=new zt,Ye=new Z,Ge=new Ct,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function lt(){return Y===null?z:1}let F=r;function gn(T,X){return n.getContext(T,X)}try{const T={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Of}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",be,!1),F===null){const X="webgl2";if(F=gn(X,T),F===null)throw gn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let pt,ft,qe,At,We,b,E,J,me,_e,de,Xe,Ae,Ue,ut,Ee,Oe,Je,et,ke,dt,it,wt,V;function Re(){pt=new US(F),pt.init(),it=new _E(F,pt),ft=new CS(F,pt,e,it),qe=new mE(F,pt),ft.reverseDepthBuffer&&x&&qe.buffers.depth.setReversed(!0),At=new kS(F),We=new nE,b=new gE(F,pt,qe,We,ft,it,At),E=new bS(C),J=new IS(C),me=new W0(F),wt=new AS(F,me),_e=new FS(F,me,At,wt),de=new zS(F,_e,me,At),et=new BS(F,ft,b),Ee=new PS(We),Xe=new tE(C,E,J,pt,ft,wt,Ee),Ae=new EE(C,We),Ue=new rE,ut=new cE(pt),Je=new wS(C,E,J,qe,de,S,h),Oe=new hE(C,de,ft),V=new TE(F,At,ft,qe),ke=new RS(F,pt,At),dt=new OS(F,pt,At),At.programs=Xe.programs,C.capabilities=ft,C.extensions=pt,C.properties=We,C.renderLists=Ue,C.shadowMap=Oe,C.state=qe,C.info=At}Re();const re=new SE(C,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=pt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(le,ce,!1))},this.getSize=function(T){return T.set(le,ce)},this.setSize=function(T,X,ne=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=T,ce=X,n.width=Math.floor(T*z),n.height=Math.floor(X*z),ne===!0&&(n.style.width=T+"px",n.style.height=X+"px"),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(le*z,ce*z).floor()},this.setDrawingBufferSize=function(T,X,ne){le=T,ce=X,z=ne,n.width=Math.floor(T*ne),n.height=Math.floor(X*ne),this.setViewport(0,0,T,X)},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(I)},this.setViewport=function(T,X,ne,$){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,X,ne,$),qe.viewport(k.copy(I).multiplyScalar(z).round())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,X,ne,$){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,X,ne,$),qe.scissor(se.copy(ie).multiplyScalar(z).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(T){qe.setScissorTest(Ie=T)},this.setOpaqueSort=function(T){ue=T},this.setTransparentSort=function(T){oe=T},this.getClearColor=function(T){return T.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,ne=!0){let $=0;if(T){let j=!1;if(Y!==null){const Se=Y.texture.format;j=Se===Gf||Se===Vf||Se===Hf}if(j){const Se=Y.texture.type,Ce=Se===zi||Se===$r||Se===Io||Se===Uo||Se===Bf||Se===zf,De=Je.getClearColor(),Be=Je.getClearAlpha(),tt=De.r,Qe=De.g,He=De.b;Ce?(A[0]=tt,A[1]=Qe,A[2]=He,A[3]=Be,F.clearBufferuiv(F.COLOR,0,A)):(R[0]=tt,R[1]=Qe,R[2]=He,R[3]=Be,F.clearBufferiv(F.COLOR,0,R))}else $|=F.COLOR_BUFFER_BIT}X&&($|=F.DEPTH_BUFFER_BIT),ne&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",be,!1),Je.dispose(),Ue.dispose(),ut.dispose(),We.dispose(),E.dispose(),J.dispose(),de.dispose(),wt.dispose(),V.dispose(),Xe.dispose(),re.dispose(),re.removeEventListener("sessionstart",Zr),re.removeEventListener("sessionend",Hi),xi.stop()};function he(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const T=At.autoReset,X=Oe.enabled,ne=Oe.autoUpdate,$=Oe.needsUpdate,j=Oe.type;Re(),At.autoReset=T,Oe.enabled=X,Oe.autoUpdate=ne,Oe.needsUpdate=$,Oe.type=j}function be(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function rt(T){const X=T.target;X.removeEventListener("dispose",rt),Nt(X)}function Nt(T){Yt(T),We.remove(T)}function Yt(T){const X=We.get(T).programs;X!==void 0&&(X.forEach(function(ne){Xe.releaseProgram(ne)}),T.isShaderMaterial&&Xe.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,ne,$,j,Se){X===null&&(X=bt);const Ce=j.isMesh&&j.matrixWorld.determinant()<0,De=Yo(T,X,ne,$,j);qe.setMaterial($,Ce);let Be=ne.index,tt=1;if($.wireframe===!0){if(Be=_e.getWireframeAttribute(ne),Be===void 0)return;tt=2}const Qe=ne.drawRange,He=ne.attributes.position;let _t=Qe.start*tt,st=(Qe.start+Qe.count)*tt;Se!==null&&(_t=Math.max(_t,Se.start*tt),st=Math.min(st,(Se.start+Se.count)*tt)),Be!==null?(_t=Math.max(_t,0),st=Math.min(st,Be.count)):He!=null&&(_t=Math.max(_t,0),st=Math.min(st,He.count));const Ht=st-_t;if(Ht<0||Ht===1/0)return;wt.setup(j,$,De,ne,Be);let Ft,vt=ke;if(Be!==null&&(Ft=me.get(Be),vt=dt,vt.setIndex(Ft)),j.isMesh)$.wireframe===!0?(qe.setLineWidth($.wireframeLinewidth*lt()),vt.setMode(F.LINES)):vt.setMode(F.TRIANGLES);else if(j.isLine){let $e=$.linewidth;$e===void 0&&($e=1),qe.setLineWidth($e*lt()),j.isLineSegments?vt.setMode(F.LINES):j.isLineLoop?vt.setMode(F.LINE_LOOP):vt.setMode(F.LINE_STRIP)}else j.isPoints?vt.setMode(F.POINTS):j.isSprite&&vt.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)wl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))vt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const $e=j._multiDrawStarts,Vt=j._multiDrawCounts,mt=j._multiDrawCount,ln=Be?me.get(Be).bytesPerElement:1,Gi=We.get($).currentProgram.getUniforms();for(let vn=0;vn<mt;vn++)Gi.setValue(F,"_gl_DrawID",vn),vt.render($e[vn]/ln,Vt[vn])}else if(j.isInstancedMesh)vt.renderInstances(_t,Ht,j.count);else if(ne.isInstancedBufferGeometry){const $e=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Vt=Math.min(ne.instanceCount,$e);vt.renderInstances(_t,Ht,Vt)}else vt.render(_t,Ht)};function xt(T,X,ne){T.transparent===!0&&T.side===Fi&&T.forceSinglePass===!1?(T.side=bn,T.needsUpdate=!0,Qr(T,X,ne),T.side=xr,T.needsUpdate=!0,Qr(T,X,ne),T.side=Fi):Qr(T,X,ne)}this.compile=function(T,X,ne=null){ne===null&&(ne=T),g=ut.get(ne),g.init(X),D.push(g),ne.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),T!==ne&&T.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const $=new Set;return T.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Se=j.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){const De=Se[Ce];xt(De,ne,j),$.add(De)}else xt(Se,ne,j),$.add(Se)}),g=D.pop(),$},this.compileAsync=function(T,X,ne=null){const $=this.compile(T,X,ne);return new Promise(j=>{function Se(){if($.forEach(function(Ce){We.get(Ce).currentProgram.isReady()&&$.delete(Ce)}),$.size===0){j(T);return}setTimeout(Se,10)}pt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let En=null;function _n(T){En&&En(T)}function Zr(){xi.stop()}function Hi(){xi.start()}const xi=new eg;xi.setAnimationLoop(_n),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(T){En=T,re.setAnimationLoop(T),T===null?xi.stop():xi.start()},re.addEventListener("sessionstart",Zr),re.addEventListener("sessionend",Hi),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(X),X=re.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,X,Y),g=ut.get(T,D.length),g.init(X),D.push(g),we.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ee.setFromProjectionMatrix(we),Me=this.localClippingEnabled,pe=Ee.init(this.clippingPlanes,Me),y=Ue.get(T,N.length),y.init(),N.push(y),re.enabled===!0&&re.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&yi(Se,X,-1/0,C.sortObjects)}yi(T,X,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ue,oe),Lt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Lt&&Je.addToRenderList(y,T),this.info.render.frame++,pe===!0&&Ee.beginShadows();const ne=g.state.shadowsArray;Oe.render(ne,T,X),pe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=y.opaque,j=y.transmissive;if(g.setupLights(),X.isArrayCamera){const Se=X.cameras;if(j.length>0)for(let Ce=0,De=Se.length;Ce<De;Ce++){const Be=Se[Ce];Er($,j,T,Be)}Lt&&Je.render(T);for(let Ce=0,De=Se.length;Ce<De;Ce++){const Be=Se[Ce];Mr(y,T,Be,Be.viewport)}}else j.length>0&&Er($,j,T,X),Lt&&Je.render(T),Mr(y,T,X);Y!==null&&O===0&&(b.updateMultisampleRenderTarget(Y),b.updateRenderTargetMipmap(Y)),T.isScene===!0&&T.onAfterRender(C,T,X),wt.resetDefaultState(),P=-1,w=null,D.pop(),D.length>0?(g=D[D.length-1],pe===!0&&Ee.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function yi(T,X,ne,$){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)ne=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ee.intersectsSprite(T)){$&&Ge.setFromMatrixPosition(T.matrixWorld).applyMatrix4(we);const Ce=de.update(T),De=T.material;De.visible&&y.push(T,Ce,De,ne,Ge.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ee.intersectsObject(T))){const Ce=de.update(T),De=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ge.copy(T.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ge.copy(Ce.boundingSphere.center)),Ge.applyMatrix4(T.matrixWorld).applyMatrix4(we)),Array.isArray(De)){const Be=Ce.groups;for(let tt=0,Qe=Be.length;tt<Qe;tt++){const He=Be[tt],_t=De[He.materialIndex];_t&&_t.visible&&y.push(T,Ce,_t,ne,Ge.z,He)}}else De.visible&&y.push(T,Ce,De,ne,Ge.z,null)}}const Se=T.children;for(let Ce=0,De=Se.length;Ce<De;Ce++)yi(Se[Ce],X,ne,$)}function Mr(T,X,ne,$){const j=T.opaque,Se=T.transmissive,Ce=T.transparent;g.setupLightsView(ne),pe===!0&&Ee.setGlobalState(C.clippingPlanes,ne),$&&qe.viewport(k.copy($)),j.length>0&&Vi(j,X,ne),Se.length>0&&Vi(Se,X,ne),Ce.length>0&&Vi(Ce,X,ne),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Er(T,X,ne,$){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new Kr(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Bo:zi,minFilter:Yr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Se=g.state.transmissionRenderTarget[$.id],Ce=$.viewport||k;Se.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);const De=C.getRenderTarget();C.setRenderTarget(Se),C.getClearColor(ae),fe=C.getClearAlpha(),fe<1&&C.setClearColor(16777215,.5),C.clear(),Lt&&Je.render(ne);const Be=C.toneMapping;C.toneMapping=vr;const tt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),pe===!0&&Ee.setGlobalState(C.clippingPlanes,$),Vi(T,ne,$),b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let He=0,_t=X.length;He<_t;He++){const st=X[He],Ht=st.object,Ft=st.geometry,vt=st.material,$e=st.group;if(vt.side===Fi&&Ht.layers.test($.layers)){const Vt=vt.side;vt.side=bn,vt.needsUpdate=!0,Xo(Ht,ne,$,Ft,vt,$e),vt.side=Vt,vt.needsUpdate=!0,Qe=!0}}Qe===!0&&(b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se))}C.setRenderTarget(De),C.setClearColor(ae,fe),tt!==void 0&&($.viewport=tt),C.toneMapping=Be}function Vi(T,X,ne){const $=X.isScene===!0?X.overrideMaterial:null;for(let j=0,Se=T.length;j<Se;j++){const Ce=T[j],De=Ce.object,Be=Ce.geometry,tt=Ce.group;let Qe=Ce.material;Qe.allowOverride===!0&&$!==null&&(Qe=$),De.layers.test(ne.layers)&&Xo(De,X,ne,Be,Qe,tt)}}function Xo(T,X,ne,$,j,Se){T.onBeforeRender(C,X,ne,$,j,Se),T.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(C,X,ne,$,T,Se),j.transparent===!0&&j.side===Fi&&j.forceSinglePass===!1?(j.side=bn,j.needsUpdate=!0,C.renderBufferDirect(ne,X,$,j,T,Se),j.side=xr,j.needsUpdate=!0,C.renderBufferDirect(ne,X,$,j,T,Se),j.side=Fi):C.renderBufferDirect(ne,X,$,j,T,Se),T.onAfterRender(C,X,ne,$,j,Se)}function Qr(T,X,ne){X.isScene!==!0&&(X=bt);const $=We.get(T),j=g.state.lights,Se=g.state.shadowsArray,Ce=j.state.version,De=Xe.getParameters(T,j.state,Se,X,ne),Be=Xe.getProgramCacheKey(De);let tt=$.programs;$.environment=T.isMeshStandardMaterial?X.environment:null,$.fog=X.fog,$.envMap=(T.isMeshStandardMaterial?J:E).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,tt===void 0&&(T.addEventListener("dispose",rt),tt=new Map,$.programs=tt);let Qe=tt.get(Be);if(Qe!==void 0){if($.currentProgram===Qe&&$.lightsStateVersion===Ce)return li(T,De),Qe}else De.uniforms=Xe.getUniforms(T),T.onBeforeCompile(De,C),Qe=Xe.acquireProgram(De,Be),tt.set(Be,Qe),$.uniforms=De.uniforms;const He=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=Ee.uniform),li(T,De),$.needsLights=Fl(T),$.lightsStateVersion=Ce,$.needsLights&&(He.ambientLightColor.value=j.state.ambient,He.lightProbe.value=j.state.probe,He.directionalLights.value=j.state.directional,He.directionalLightShadows.value=j.state.directionalShadow,He.spotLights.value=j.state.spot,He.spotLightShadows.value=j.state.spotShadow,He.rectAreaLights.value=j.state.rectArea,He.ltc_1.value=j.state.rectAreaLTC1,He.ltc_2.value=j.state.rectAreaLTC2,He.pointLights.value=j.state.point,He.pointLightShadows.value=j.state.pointShadow,He.hemisphereLights.value=j.state.hemi,He.directionalShadowMap.value=j.state.directionalShadowMap,He.directionalShadowMatrix.value=j.state.directionalShadowMatrix,He.spotShadowMap.value=j.state.spotShadowMap,He.spotLightMatrix.value=j.state.spotLightMatrix,He.spotLightMap.value=j.state.spotLightMap,He.pointShadowMap.value=j.state.pointShadowMap,He.pointShadowMatrix.value=j.state.pointShadowMatrix),$.currentProgram=Qe,$.uniformsList=null,Qe}function jo(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=Al.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function li(T,X){const ne=We.get(T);ne.outputColorSpace=X.outputColorSpace,ne.batching=X.batching,ne.batchingColor=X.batchingColor,ne.instancing=X.instancing,ne.instancingColor=X.instancingColor,ne.instancingMorph=X.instancingMorph,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function Yo(T,X,ne,$,j){X.isScene!==!0&&(X=bt),b.resetTextureUnits();const Se=X.fog,Ce=$.isMeshStandardMaterial?X.environment:null,De=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Vs,Be=($.isMeshStandardMaterial?J:E).get($.envMap||Ce),tt=$.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Qe=!!ne.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),He=!!ne.morphAttributes.position,_t=!!ne.morphAttributes.normal,st=!!ne.morphAttributes.color;let Ht=vr;$.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ht=C.toneMapping);const Ft=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,vt=Ft!==void 0?Ft.length:0,$e=We.get($),Vt=g.state.lights;if(pe===!0&&(Me===!0||T!==w)){const sn=T===w&&$.id===P;Ee.setState($,T,sn)}let mt=!1;$.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Vt.state.version||$e.outputColorSpace!==De||j.isBatchedMesh&&$e.batching===!1||!j.isBatchedMesh&&$e.batching===!0||j.isBatchedMesh&&$e.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&$e.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&$e.instancing===!1||!j.isInstancedMesh&&$e.instancing===!0||j.isSkinnedMesh&&$e.skinning===!1||!j.isSkinnedMesh&&$e.skinning===!0||j.isInstancedMesh&&$e.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&$e.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&$e.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&$e.instancingMorph===!1&&j.morphTexture!==null||$e.envMap!==Be||$.fog===!0&&$e.fog!==Se||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ee.numPlanes||$e.numIntersection!==Ee.numIntersection)||$e.vertexAlphas!==tt||$e.vertexTangents!==Qe||$e.morphTargets!==He||$e.morphNormals!==_t||$e.morphColors!==st||$e.toneMapping!==Ht||$e.morphTargetsCount!==vt)&&(mt=!0):(mt=!0,$e.__version=$.version);let ln=$e.currentProgram;mt===!0&&(ln=Qr($,X,j));let Gi=!1,vn=!1,Si=!1;const Pt=ln.getUniforms(),un=$e.uniforms;if(qe.useProgram(ln.program)&&(Gi=!0,vn=!0,Si=!0),$.id!==P&&(P=$.id,vn=!0),Gi||w!==T){qe.buffers.depth.getReversed()?(xe.copy(T.projectionMatrix),s0(xe),o0(xe),Pt.setValue(F,"projectionMatrix",xe)):Pt.setValue(F,"projectionMatrix",T.projectionMatrix),Pt.setValue(F,"viewMatrix",T.matrixWorldInverse);const Jt=Pt.map.cameraPosition;Jt!==void 0&&Jt.setValue(F,Ye.setFromMatrixPosition(T.matrixWorld)),ft.logarithmicDepthBuffer&&Pt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Pt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,vn=!0,Si=!0)}if(j.isSkinnedMesh){Pt.setOptional(F,j,"bindMatrix"),Pt.setOptional(F,j,"bindMatrixInverse");const sn=j.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Pt.setValue(F,"boneTexture",sn.boneTexture,b))}j.isBatchedMesh&&(Pt.setOptional(F,j,"batchingTexture"),Pt.setValue(F,"batchingTexture",j._matricesTexture,b),Pt.setOptional(F,j,"batchingIdTexture"),Pt.setValue(F,"batchingIdTexture",j._indirectTexture,b),Pt.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Pt.setValue(F,"batchingColorTexture",j._colorsTexture,b));const Qt=ne.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&et.update(j,ne,ln),(vn||$e.receiveShadow!==j.receiveShadow)&&($e.receiveShadow=j.receiveShadow,Pt.setValue(F,"receiveShadow",j.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(un.envMap.value=Be,un.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&X.environment!==null&&(un.envMapIntensity.value=X.environmentIntensity),vn&&(Pt.setValue(F,"toneMappingExposure",C.toneMappingExposure),$e.needsLights&&qo(un,Si),Se&&$.fog===!0&&Ae.refreshFogUniforms(un,Se),Ae.refreshMaterialUniforms(un,$,z,ce,g.state.transmissionRenderTarget[T.id]),Al.upload(F,jo($e),un,b)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Al.upload(F,jo($e),un,b),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Pt.setValue(F,"center",j.center),Pt.setValue(F,"modelViewMatrix",j.modelViewMatrix),Pt.setValue(F,"normalMatrix",j.normalMatrix),Pt.setValue(F,"modelMatrix",j.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const sn=$.uniformsGroups;for(let Jt=0,yt=sn.length;Jt<yt;Jt++){const ui=sn[Jt];V.update(ui,ln),V.bind(ui,ln)}}return ln}function qo(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function Fl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(T,X,ne){const $=We.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),We.get(T.texture).__webglTexture=X,We.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:ne,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){const ne=We.get(T);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0};const $o=F.createFramebuffer();this.setRenderTarget=function(T,X=0,ne=0){Y=T,B=X,O=ne;let $=!0,j=null,Se=!1,Ce=!1;if(T){const Be=We.get(T);if(Be.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(F.FRAMEBUFFER,null),$=!1;else if(Be.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(Be.__hasExternalTextures)b.rebindTextures(T,We.get(T.texture).__webglTexture,We.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const He=T.depthTexture;if(Be.__boundDepthTexture!==He){if(He!==null&&We.has(He)&&(T.width!==He.image.width||T.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const tt=T.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ce=!0);const Qe=We.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qe[X])?j=Qe[X][ne]:j=Qe[X],Se=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?j=We.get(T).__webglMultisampledFramebuffer:Array.isArray(Qe)?j=Qe[ne]:j=Qe,k.copy(T.viewport),se.copy(T.scissor),Q=T.scissorTest}else k.copy(I).multiplyScalar(z).floor(),se.copy(ie).multiplyScalar(z).floor(),Q=Ie;if(ne!==0&&(j=$o),qe.bindFramebuffer(F.FRAMEBUFFER,j)&&$&&qe.drawBuffers(T,j),qe.viewport(k),qe.scissor(se),qe.setScissorTest(Q),Se){const Be=We.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,ne)}else if(Ce){const Be=We.get(T.texture),tt=X;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.__webglTexture,ne,tt)}else if(T!==null&&ne!==0){const Be=We.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Be.__webglTexture,ne)}P=-1},this.readRenderTargetPixels=function(T,X,ne,$,j,Se,Ce){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=We.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){qe.bindFramebuffer(F.FRAMEBUFFER,De);try{const Be=T.texture,tt=Be.format,Qe=Be.type;if(!ft.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-$&&ne>=0&&ne<=T.height-j&&F.readPixels(X,ne,$,j,it.convert(tt),it.convert(Qe),Se)}finally{const Be=Y!==null?We.get(Y).__webglFramebuffer:null;qe.bindFramebuffer(F.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(T,X,ne,$,j,Se,Ce){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=We.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(X>=0&&X<=T.width-$&&ne>=0&&ne<=T.height-j){qe.bindFramebuffer(F.FRAMEBUFFER,De);const Be=T.texture,tt=Be.format,Qe=Be.type;if(!ft.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,He),F.bufferData(F.PIXEL_PACK_BUFFER,Se.byteLength,F.STREAM_READ),F.readPixels(X,ne,$,j,it.convert(tt),it.convert(Qe),0);const _t=Y!==null?We.get(Y).__webglFramebuffer:null;qe.bindFramebuffer(F.FRAMEBUFFER,_t);const st=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await r0(F,st,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,He),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Se),F.deleteBuffer(He),F.deleteSync(st),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,ne=0){const $=Math.pow(2,-ne),j=Math.floor(T.image.width*$),Se=Math.floor(T.image.height*$),Ce=X!==null?X.x:0,De=X!==null?X.y:0;b.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,ne,0,0,Ce,De,j,Se),qe.unbindTexture()};const Ko=F.createFramebuffer(),Zo=F.createFramebuffer();this.copyTextureToTexture=function(T,X,ne=null,$=null,j=0,Se=null){Se===null&&(j!==0?(wl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=j,j=0):Se=0);let Ce,De,Be,tt,Qe,He,_t,st,Ht;const Ft=T.isCompressedTexture?T.mipmaps[Se]:T.image;if(ne!==null)Ce=ne.max.x-ne.min.x,De=ne.max.y-ne.min.y,Be=ne.isBox3?ne.max.z-ne.min.z:1,tt=ne.min.x,Qe=ne.min.y,He=ne.isBox3?ne.min.z:0;else{const Qt=Math.pow(2,-j);Ce=Math.floor(Ft.width*Qt),De=Math.floor(Ft.height*Qt),T.isDataArrayTexture?Be=Ft.depth:T.isData3DTexture?Be=Math.floor(Ft.depth*Qt):Be=1,tt=0,Qe=0,He=0}$!==null?(_t=$.x,st=$.y,Ht=$.z):(_t=0,st=0,Ht=0);const vt=it.convert(X.format),$e=it.convert(X.type);let Vt;X.isData3DTexture?(b.setTexture3D(X,0),Vt=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(b.setTexture2DArray(X,0),Vt=F.TEXTURE_2D_ARRAY):(b.setTexture2D(X,0),Vt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const mt=F.getParameter(F.UNPACK_ROW_LENGTH),ln=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Gi=F.getParameter(F.UNPACK_SKIP_PIXELS),vn=F.getParameter(F.UNPACK_SKIP_ROWS),Si=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ft.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ft.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,tt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,He);const Pt=T.isDataArrayTexture||T.isData3DTexture,un=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const Qt=We.get(T),sn=We.get(X),Jt=We.get(Qt.__renderTarget),yt=We.get(sn.__renderTarget);qe.bindFramebuffer(F.READ_FRAMEBUFFER,Jt.__webglFramebuffer),qe.bindFramebuffer(F.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let ui=0;ui<Be;ui++)Pt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,We.get(T).__webglTexture,j,He+ui),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,We.get(X).__webglTexture,Se,Ht+ui)),F.blitFramebuffer(tt,Qe,Ce,De,_t,st,Ce,De,F.DEPTH_BUFFER_BIT,F.NEAREST);qe.bindFramebuffer(F.READ_FRAMEBUFFER,null),qe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||T.isRenderTargetTexture||We.has(T)){const Qt=We.get(T),sn=We.get(X);qe.bindFramebuffer(F.READ_FRAMEBUFFER,Ko),qe.bindFramebuffer(F.DRAW_FRAMEBUFFER,Zo);for(let Jt=0;Jt<Be;Jt++)Pt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Qt.__webglTexture,j,He+Jt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qt.__webglTexture,j),un?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,sn.__webglTexture,Se,Ht+Jt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,sn.__webglTexture,Se),j!==0?F.blitFramebuffer(tt,Qe,Ce,De,_t,st,Ce,De,F.COLOR_BUFFER_BIT,F.NEAREST):un?F.copyTexSubImage3D(Vt,Se,_t,st,Ht+Jt,tt,Qe,Ce,De):F.copyTexSubImage2D(Vt,Se,_t,st,tt,Qe,Ce,De);qe.bindFramebuffer(F.READ_FRAMEBUFFER,null),qe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else un?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Vt,Se,_t,st,Ht,Ce,De,Be,vt,$e,Ft.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(Vt,Se,_t,st,Ht,Ce,De,Be,vt,Ft.data):F.texSubImage3D(Vt,Se,_t,st,Ht,Ce,De,Be,vt,$e,Ft):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Se,_t,st,Ce,De,vt,$e,Ft.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Se,_t,st,Ft.width,Ft.height,vt,Ft.data):F.texSubImage2D(F.TEXTURE_2D,Se,_t,st,Ce,De,vt,$e,Ft);F.pixelStorei(F.UNPACK_ROW_LENGTH,mt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ln),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Gi),F.pixelStorei(F.UNPACK_SKIP_ROWS,vn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Si),Se===0&&X.generateMipmaps&&F.generateMipmap(Vt),qe.unbindTexture()},this.copyTextureToTexture3D=function(T,X,ne=null,$=null,j=0){return wl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,X,ne,$,j)},this.initRenderTarget=function(T){We.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),qe.unbindTexture()},this.resetState=function(){B=0,O=0,Y=null,qe.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}function AE({theme:s="dark"}){const e=ri.useRef(null),n=ri.useRef(s);return ri.useEffect(()=>{n.current=s},[s]),ri.useEffect(()=>{const r=new D0,a=new Bn(75,window.innerWidth/window.innerHeight,.1,1e3),u=new wE({canvas:e.current,alpha:!0,antialias:!0});u.setPixelRatio(window.devicePixelRatio),u.setSize(window.innerWidth,window.innerHeight),a.position.set(-20,20,150);const f=new Wo(300,600,30,60),d=f.attributes.position;for(let w=0;w<d.count;w++){const k=d.getX(w),se=d.getY(w),Q=Math.sin(k*.01)*Math.cos(se*.01),ae=(Math.random()-.5)*.3,fe=Math.pow(Math.abs(Q+ae),1.5)*25;d.setZ(w,fe)}f.computeVertexNormals();const h=new zc({color:new ct(s==="light"?15257510:328740),flatShading:!0}),m=new qn(f,h);m.rotation.x=-Math.PI/2,m.position.set(0,0,0),r.add(m);const _=new qr,v=new bl(.5,12,12),x=new zc({color:new ct(s==="light"?16773590:16777215),emissive:new ct(s==="light"?16773590:1118481),emissiveIntensity:s==="light"?.6:1});for(let w=0;w<180;w++){const k=new qn(v,x),[se,Q,ae]=Array(3).fill().map(()=>n0.randFloatSpread(800));k.position.set(se+100,Q,ae+100),se>25&&_.add(k)}r.add(_);const S=new qr,A=new bl(1,12,12),R=new zc({color:16777215,flatShading:!0,transparent:!0,opacity:s==="light"?.9:0});for(let w=0;w<22;w++){const k=new qr,se=Math.floor(Math.random()*6)+5;for(let Q=0;Q<se;Q++){const ae=new qn(A,R);ae.position.set((Math.random()-.5)*15,Math.random()*4,(Math.random()-.5)*10);const fe=Math.random()*4+4;ae.scale.set(fe,fe*.8,fe),k.add(ae)}k.position.set((Math.random()-.5)*400,Math.random()*20+60,(Math.random()-.5)*400+50),S.add(k)}r.add(S);const y=new B0(s==="light"?16765562:9818869,s==="light"?2.5:6e3,1e3);y.position.set(70,20,150);const g=new H0(16777215,s==="light"?1.2:1.7);r.add(y,g),a.lookAt(50,20,150);const N={pointLight:y};function D(){a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",D,!1);let C=0,G=0;function B(w){C=w.clientX/window.innerWidth*2-1,G=-(w.clientY/window.innerHeight)*2+1}window.addEventListener("mousemove",B,!1);const O={mountain:new ct(328740),lightColor:new ct(9818869)},Y={mountain:new ct(15257510),lightColor:new ct(16765562)};function P(){requestAnimationFrame(P);const w=n.current==="light",k=w?Y:O;h.color.lerp(k.mountain,.15);const se=new ct(N.pointLight.color.getHex());se.lerp(k.lightColor,.12),N.pointLight.color.copy(se);const Q=w?.9:0;R.opacity+=(Q-R.opacity)*.2,S.children.forEach(ae=>{ae.position.x-=.01,ae.position.x<-250&&(ae.position.x=250)}),a.position.x=-20,a.position.z=150+C*1.2,a.position.y=20+G*1.2,a.lookAt(50,25,150),u.render(r,a)}return P(),()=>{window.removeEventListener("resize",D),window.removeEventListener("mousemove",B),u.dispose(),f.dispose(),h.dispose(),v.dispose(),x.dispose(),A.dispose(),R.dispose()}},[]),W.jsx("canvas",{ref:e,id:"bg",style:{position:"fixed",top:0,left:0,zIndex:-1}})}const RE=({theme:s,toggleTheme:e})=>{const[n,r]=ri.useState(!1);function a(){r(!n)}return W.jsxs("header",{className:"header",children:[W.jsx("a",{href:"#",className:"logo",children:"Ben Moss"}),W.jsx("i",{className:`bx ${n?"bx-x":"bx-menu"}`,id:"menu-icon",onClick:a}),W.jsxs("nav",{className:`navbar ${n?"active":""}`,children:[W.jsx("a",{href:"#garage",children:"The Garage"}),W.jsx("a",{href:"#about",children:"About Me"}),W.jsx("a",{href:"#projects",children:"Projects"}),W.jsx("button",{className:"theme-toggle",onClick:e,"aria-label":"Toggle theme",children:W.jsx("i",{className:`bx ${s==="light"?"bx-sun":"bx-moon"}`})})]})]})};var sg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Tm=gr.createContext&&gr.createContext(sg),CE=["attr","size","title"];function PE(s,e){if(s==null)return{};var n=bE(s,e),r,a;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);for(a=0;a<u.length;a++)r=u[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(n[r]=s[r])}return n}function bE(s,e){if(s==null)return{};var n={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(e.indexOf(r)>=0)continue;n[r]=s[r]}return n}function Ll(){return Ll=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=n[r])}return s},Ll.apply(this,arguments)}function wm(s,e){var n=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),n.push.apply(n,r)}return n}function Dl(s){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?wm(Object(n),!0).forEach(function(r){LE(s,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(n)):wm(Object(n)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(n,r))})}return s}function LE(s,e,n){return e=DE(e),e in s?Object.defineProperty(s,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):s[e]=n,s}function DE(s){var e=NE(s,"string");return typeof e=="symbol"?e:e+""}function NE(s,e){if(typeof s!="object"||!s)return s;var n=s[Symbol.toPrimitive];if(n!==void 0){var r=n.call(s,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function og(s){return s&&s.map((e,n)=>gr.createElement(e.tag,Dl({key:n},e.attr),og(e.child)))}function Ul(s){return e=>gr.createElement(IE,Ll({attr:Dl({},s.attr)},e),og(s.child))}function IE(s){var e=n=>{var{attr:r,size:a,title:u}=s,f=PE(s,CE),d=a||n.size||"1em",h;return n.className&&(h=n.className),s.className&&(h=(h?h+" ":"")+s.className),gr.createElement("svg",Ll({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,f,{className:h,style:Dl(Dl({color:s.color||n.color},n.style),s.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),u&&gr.createElement("title",null,u),s.children)};return Tm!==void 0?gr.createElement(Tm.Consumer,null,n=>e(n)):e(sg)}function ag(s){return Ul({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function lg(s){return Ul({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(s)}function ug(s){return Ul({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(s)}function cg(s){return Ul({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(s)}const UE="/portfolio-save/assets/BenCV-DIHWpSCJ.pdf",FE=()=>W.jsx("section",{className:"home",id:"home",children:W.jsxs("div",{className:"home-content",children:[W.jsx("h1",{children:"Hi, I'm Ben"}),W.jsx("h3",{children:"I'm a Web Developer"}),W.jsx("div",{className:"container",children:W.jsx("div",{className:"scroll",children:W.jsxs("div",{className:"RightToLeft",children:[W.jsx("p",{children:"HTML, CSS, JavaScript, TypeScript, Python, React, Three JS, Bootstrap, Tailwind, MYSQL, MongoDB"}),W.jsx("p",{children:"HTML, CSS, JavaScript, TypeScript, Python, React, Three JS, Bootstrap, Tailwind, MYSQL, MongoDB"})]})})}),W.jsxs("div",{className:"btn-group",children:[W.jsxs("div",{className:"hero-socials",children:[W.jsx("a",{href:"https://github.com/Ben-Moss-Business",target:"_blank",rel:"noreferrer",className:"social-circle",children:W.jsx(ag,{})}),W.jsx("a",{href:"https://linkedin.com/in/ben-m0ss",target:"_blank",rel:"noreferrer",className:"social-circle",children:W.jsx(ug,{})}),W.jsx("a",{href:"https://instagram.com/__mossy___",target:"_blank",rel:"noreferrer",className:"social-circle",children:W.jsx(lg,{})}),W.jsx("a",{href:"mailto:ben.f.moss@gmail.com",className:"social-circle",children:W.jsx(cg,{})})]}),W.jsx("a",{href:UE,download:"Ben_Moss_CV.pdf",className:"btn",children:"Hire"})]})]})}),OE="/portfolio-save/assets/ben-CEDrkPII.jpg",kE=()=>W.jsxs("section",{className:"about",id:"about",children:[W.jsx("div",{className:"about-img reveal",children:W.jsx("img",{src:OE,alt:"Ben"})}),W.jsxs("div",{className:"about-content",children:[W.jsx("h2",{className:"reveal",children:"About Me"}),W.jsxs("p",{className:"reveal",children:["Hi, I'm Ben, a web developer who builds clean, responsive, and engaging digital experiences. I work with Python, JavaScript, TypeScript, and frameworks like React, Tailwind, Bootstrap, and Three.js to bring ideas to life.",W.jsx("br",{}),W.jsx("br",{}),"I approach every project with a learning mindset, openness to feedback, and a drive for continuous improvement. For me, great work starts with a solid attitude: showing up ready, taking ownership, and staying positive no matter the challenge.",W.jsx("br",{}),W.jsx("br",{}),"Outside of coding, I have a strong interest in engineering, especially when it comes to motorcycles. I enjoy rebuilding, maintaining, and riding them, which has taught me patience, precision, and problem-solving in a hands-on environment. Working on machines has strengthened my attention to detail and reinforced the importance of understanding how systems work both individually and together, something I bring into my development work every day."]}),W.jsx("a",{href:"https://github.com/Ben-Moss-Business",className:"btn reveal",children:"Read More"})]})]}),BE="/portfolio-save/assets/hth-CXwVXk9Y.png",zE="/portfolio-save/assets/physics-CZ7Mrlua.png",HE="/portfolio-save/assets/resturant-C47o2Ip5.png",VE="/portfolio-save/assets/port-DW7215Bm.png",GE=()=>W.jsxs("section",{className:"projects",id:"projects",children:[W.jsxs("div",{className:"projects-header",children:[W.jsx("h1",{className:"reveal",children:"My Work"}),W.jsx("p",{className:"reveal",children:"A collection of full-stack applications and technical experiments. From high-performance 3D environments to secure, data-driven systems."})]}),W.jsxs("div",{className:"projects-grid",children:[W.jsxs("div",{className:"project-card hth-card reveal",children:[W.jsxs("div",{className:"project-image",children:[W.jsx("img",{src:BE,alt:"Low Waste Looper"}),W.jsx("div",{className:"project-tag",children:"Full-Stack"})]}),W.jsxs("div",{className:"project-content",children:[W.jsx("h3",{children:"Low Waste Looper"}),W.jsx("p",{children:"Developed for the BPC Christmas Hackathon 2025. A rapid MVP focused on sustainability and secure database infrastructure."}),W.jsxs("div",{className:"project-tech",children:[W.jsx("span",{children:"React"})," ",W.jsx("span",{children:"MySQL"})," ",W.jsx("span",{children:"Node.js"})]}),W.jsx("a",{href:"https://github.com/Hack-The-Halls-Bells/Low-Waste-Looper-Full",target:"_blank",rel:"noreferrer",className:"project-link",children:"View Source →"})]})]}),W.jsxs("div",{className:"project-card physics-card reveal",children:[W.jsx("div",{className:"project-image small-img",children:W.jsx("img",{src:zE,alt:"Physics Engine"})}),W.jsxs("div",{className:"project-content",children:[W.jsx("h3",{children:"2D Physics Engine"}),W.jsx("p",{children:"Custom engine using vector math for real-world kinematics."}),W.jsxs("div",{className:"project-tech",children:[W.jsx("span",{children:"JavaScript"}),W.jsx("span",{children:"Vector Math"})]}),W.jsx("a",{href:"https://github.com/Ben-Moss-Business/Physics-Engine",target:"_blank",rel:"noreferrer",className:"project-link",children:"View Source →"})]})]}),W.jsxs("div",{className:"project-card portfolio-card reveal",children:[W.jsx("div",{className:"project-image small-img",children:W.jsx("img",{src:VE,alt:"Portfolio"})}),W.jsxs("div",{className:"project-content",children:[W.jsx("h3",{children:"Portfolio 3D"}),W.jsx("p",{children:"Interactive 3D environment using Three.js and React."}),W.jsxs("div",{className:"project-tech",children:[W.jsx("span",{children:"React"})," ",W.jsx("span",{children:"ThreeJS"})]}),W.jsx("a",{href:"https://github.com/Ben-Moss-Business/portfolio-save",target:"_blank",rel:"noreferrer",className:"project-link",children:"View Source →"})]})]}),W.jsxs("div",{className:"project-card restaurant-card reveal",children:[W.jsxs("div",{className:"project-image",children:[W.jsx("img",{src:HE,alt:"Online Restaurant"}),W.jsx("div",{className:"project-tag",children:"Full-Stack"})]}),W.jsxs("div",{className:"project-content",children:[W.jsx("h3",{children:"Online Restaurant"}),W.jsx("p",{children:"Full-stack ordering system featuring a custom admin dashboard for menu management."}),W.jsxs("div",{className:"project-tech",children:[W.jsx("span",{children:"MongoDB"})," ",W.jsx("span",{children:"React"})]}),W.jsx("a",{href:"https://github.com/Ben-Moss-Business/Online-resturant",target:"_blank",rel:"noreferrer",className:"project-link",children:"View Source →"})]})]})]})]}),WE="/portfolio-save/assets/cbf-Dexjm8PD.jpg",XE="/portfolio-save/assets/easyshift-DBNS0kcR.png",jE="/portfolio-save/assets/album-CORuCncg.jpg",YE=()=>W.jsxs("section",{className:"garage",id:"garage",children:[W.jsxs("div",{className:"garage-header",children:[W.jsx("h1",{className:"reveal",children:"The Garage"}),W.jsx("p",{className:"reveal",children:"Welcome to the garage! Where code meets craftsmanship. Exploring the mechanics of software and machines. Here is what im currently up to."})]}),W.jsxs("div",{className:"garage-grid",children:[W.jsxs("div",{className:"garage-card cbf-card reveal",children:[W.jsxs("div",{className:"card-image",children:[W.jsx("img",{src:WE,alt:"Honda CBF Rebuild"}),W.jsx("div",{className:"card-tag tag-mech",children:"Mechanical"})]}),W.jsxs("div",{className:"card-content",children:[W.jsx("h3",{children:"Honda CBF Rebuild"}),W.jsx("p",{children:"Stripped to the frame for a full restoration. Currently doing the assembly and paint job."}),W.jsx("div",{className:"progress-container",children:W.jsx("div",{className:"progress-bar",children:W.jsx("div",{className:"progress-fill",style:{width:"65%"}})})})]})]}),W.jsx("div",{className:"garage-card music-card reveal",children:W.jsxs("div",{className:"card-content",children:[W.jsx("div",{className:"music-header",children:W.jsx("div",{className:"album-art",children:W.jsx("img",{src:jE,alt:"Album Art"})})}),W.jsx("h3",{children:"Currently Playing"}),W.jsxs("div",{className:"now-playing",children:[W.jsx("span",{className:"pulse-dot"}),W.jsxs("div",{className:"track-info",children:[W.jsx("strong",{children:"Everlong"}),W.jsx("span",{children:"Foo Fighters"})]})]})]})}),W.jsx("div",{className:"garage-card tools-card reveal",children:W.jsxs("div",{className:"card-content",children:[W.jsx("h3",{children:"The Workbench"}),W.jsxs("div",{className:"workbench-shelf",children:[W.jsx("h4",{children:"Digital Stack"}),W.jsxs("div",{className:"tools-list",children:[W.jsx("span",{children:"React"})," ",W.jsx("span",{children:"JavaScript"})," ",W.jsx("span",{children:"Node.js"}),W.jsx("span",{children:"Python"})," ",W.jsx("span",{children:"MySQL"})," ",W.jsx("span",{children:"Three.js"}),W.jsx("span",{children:"GitHub"})]})]}),W.jsxs("div",{className:"workbench-shelf",children:[W.jsx("h4",{children:"Physical Tools"}),W.jsxs("div",{className:"tools-list",children:[W.jsx("span",{children:"Socket Set"})," ",W.jsx("span",{children:"Multimeter"})," ",W.jsx("span",{children:"Torque Wrench"}),W.jsx("span",{children:"Soldering Iron"})," ",W.jsx("span",{children:"Angle Grinder"})]})]})]})}),W.jsxs("div",{className:"garage-card easyshift-card reveal",children:[W.jsxs("div",{className:"card-image",children:[W.jsx("img",{src:XE,alt:"EasyShift App"}),W.jsx("div",{className:"card-tag tag-soft",children:"Software"})]}),W.jsxs("div",{className:"card-content",children:[W.jsx("h3",{children:"EasyShift"}),W.jsx("p",{children:"A full-stack mobile and web application for compainies to help track employee hours, budgeting and performance on projects."}),W.jsxs("div",{className:"project-tech",children:[W.jsx("span",{children:"React Native"})," ",W.jsx("span",{children:"MySQL"})," ",W.jsx("span",{children:"Node.js"})," ",W.jsx("span",{children:"JavaScript"})]})]})]})]})]}),qE=()=>{const s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return W.jsx("footer",{className:"footer",id:"footer",children:W.jsxs("div",{className:"footer-container",children:[W.jsxs("div",{className:"footer-main reveal",children:[W.jsxs("div",{className:"footer-brand",children:[W.jsx("h2",{children:"BEN MOSS"}),W.jsx("p",{children:"Web Developer & Mechanical Engineer"})]}),W.jsxs("div",{className:"footer-socials reveal",children:[W.jsx("a",{href:"https://github.com/Ben-Moss-Business",target:"_blank",rel:"noreferrer",title:"GitHub",children:W.jsx(ag,{})}),W.jsx("a",{href:"https://linkedin.com/in/ben-m0ss",target:"_blank",rel:"noreferrer",title:"LinkedIn",children:W.jsx(ug,{})}),W.jsx("a",{href:"https://instagram.com/__mossy___",target:"_blank",rel:"noreferrer",title:"Instagram",children:W.jsx(lg,{})}),W.jsx("a",{href:"mailto:ben.f.moss@gmail.com",title:"Email",children:W.jsx(cg,{})})]}),W.jsx("button",{className:"back-to-top btn reveal",onClick:s,children:"↑ Back to Top"})]}),W.jsx("div",{className:"footer-bottom",children:W.jsx("div",{className:"footer-info",children:W.jsxs("span",{children:["© ",new Date().getFullYear()," Ben Moss. Built with React & Three.js."]})})})]})})};function $E(){const[s,e]=ri.useState(!1),[n,r]=ri.useState("dark"),[a,u]=ri.useState([]);ri.useEffect(()=>{const h={threshold:.1},m=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&x.target.classList.add("active")})},h);return document.querySelectorAll(".reveal").forEach(v=>m.observe(v)),()=>m.disconnect()},[]),ri.useEffect(()=>{const h=localStorage.getItem("theme");h&&(r(h),document.documentElement.classList.toggle("light-theme",h==="light"))},[]);function f(){const h=n==="light"?"dark":"light";r(h),localStorage.setItem("theme",h),document.documentElement.classList.toggle("light-theme",h==="light")}const d=h=>{if(n!=="dark")return;const m=Math.random()*window.innerWidth,_={id:Date.now(),startX:m,endX:h.clientX,endY:h.clientY,angle:Math.atan2(h.clientY- -50,h.clientX-m)*(180/Math.PI)};u(v=>[...v,_]),setTimeout(()=>u(v=>v.filter(x=>x.id!==_.id)),600)};return W.jsxs("div",{className:"app",onClick:d,children:[W.jsx(AE,{theme:n}),W.jsx(RE,{theme:n,toggleTheme:f}),a.map(h=>W.jsx("div",{className:"shooting-star",style:{"--start-x":`${h.startX}px`,"--end-x":`${h.endX}px`,"--end-y":`${h.endY}px`,"--angle":`${h.angle}deg`}},h.id)),W.jsx(FE,{}),W.jsx(YE,{}),W.jsx(kE,{}),W.jsx(GE,{}),W.jsx(qE,{})]})}Q_.createRoot(document.getElementById("root")).render(W.jsx(gr.StrictMode,{children:W.jsx($E,{})}));
