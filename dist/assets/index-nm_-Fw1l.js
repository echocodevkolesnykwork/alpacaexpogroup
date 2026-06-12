(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function t(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var n={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},r={duration:.5,overwrite:!1,delay:0},i,a,o,s=1e8,c=1/s,l=Math.PI*2,u=l/4,d=0,f=Math.sqrt,p=Math.cos,m=Math.sin,h=function(e){return typeof e==`string`},g=function(e){return typeof e==`function`},_=function(e){return typeof e==`number`},v=function(e){return e===void 0},y=function(e){return typeof e==`object`},b=function(e){return e!==!1},x=function(){return typeof window<`u`},S=function(e){return g(e)||h(e)},C=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},w=Array.isArray,T=/random\([^)]+\)/g,E=/,\s*/g,D=/(?:-?\.?\d|\.)+/gi,O=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,k=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,A=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,j=/[+-]=-?[.\d]+/,M=/[^,'"\[\]\s]+/gi,ee=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,N,P,te,ne,F={},re={},I,L=function(e){return(re=G(e,F))&&Kn},ie=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},R=function(e,t){return!t&&console.warn(e)},ae=function(e,t){return e&&(F[e]=t)&&re&&(re[e]=t)||F},oe=function(){return 0},se={suppressEvents:!0,isStart:!0,kill:!1},z={suppressEvents:!0,kill:!1},ce={suppressEvents:!0},le={},B=[],ue={},de,fe={},pe={},me=30,he=[],ge=``,_e=function(e){var t=e[0],n,r;if(y(t)||g(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=he.length;r--&&!he[r].targetTest(t););n=he[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new tn(e[r],n)))||e.splice(r,1);return e},ve=function(e){return e._gsap||_e(ut(e))[0]._gsap},V=function(e,t,n){return(n=e[t])&&g(n)?e[t]():v(n)&&e.getAttribute&&e.getAttribute(t)||n},ye=function(e,t){return(e=e.split(`,`)).forEach(t)||e},H=function(e){return Math.round(e*1e5)/1e5||0},U=function(e){return Math.round(e*1e7)/1e7||0},be=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},xe=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Se=function(){var e=B.length,t=B.slice(0),n,r;for(ue={},B.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ce=function(e){return!!(e._initted||e._startAt||e.add)},we=function(e,t,n,r){B.length&&!a&&Se(),e.render(t,n,r||!!(a&&t<0&&Ce(e))),B.length&&!a&&Se()},Te=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(M).length<2?t:h(e)?e.trim():e},Ee=function(e){return e},W=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},De=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},G=function(e,t){for(var n in t)e[n]=t[n];return e},Oe=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=y(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},ke=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ae=function(e){var t=e.parent||N,n=e.keyframes?De(w(e.keyframes)):W;if(b(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},je=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Me=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Ne=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Pe=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Fe=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ie=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Le=function(e,t,n,r){return e._startAt&&(a?e._startAt.revert(z):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Re=function e(t){return!t||t._ts&&e(t.parent)},ze=function(e){return e._repeat?Be(e._tTime,e=e.duration()+e._rDelay)*e:0},Be=function(e,t){var n=Math.floor(e=U(e/t));return e&&n===e?n-1:n},Ve=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},He=function(e){return e._end=U(e._start+(e._tDur/Math.abs(e._ts||e._rts||c)||0))},Ue=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=U(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),He(e),n._dirty||Fe(n,e)),e},We=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ve(e.rawTime(),t),(!t._dur||it(0,t.totalDuration(),n)-t._tTime>c)&&t.render(n,!0)),Fe(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-c}},Ge=function(e,t,n,r){return t.parent&&Pe(t),t._start=U((_(n)?n:n||e!==N?tt(e,n,t):e._time)+t._delay),t._end=U(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Me(e,t,`_first`,`_last`,e._sort?`_start`:0),Ye(t)||(e._recent=t),r||We(e,t),e._ts<0&&Ue(e,e._tTime),e},Ke=function(e,t){return(F.ScrollTrigger||ie(`scrollTrigger`,t))&&F.ScrollTrigger.create(t,e)},qe=function(e,t,n,r,i){if(dn(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!a&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&de!==Ht.frame)return B.push(e),e._lazy=[i,r],1},Je=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},Ye=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},Xe=function(e,t,n,r){var i=e.ratio,o=t<0||!t&&(!e._start&&Je(e)&&!(!e._initted&&Ye(e))||(e._ts<0||e._dp._ts<0)&&!Ye(e))?0:1,s=e._rDelay,l=0,u,d,f;if(s&&e._repeat&&(l=it(0,e._tDur,t),d=Be(l,s),e._yoyo&&d&1&&(o=1-o),d!==Be(e._tTime,s)&&(i=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==i||a||r||e._zTime===c||!t&&e._zTime){if(!e._initted&&qe(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?c:0),n||=t&&!f,e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Le(e,t,n,!0),e._onUpdate&&!n&&Dt(e,`onUpdate`),l&&e._repeat&&!n&&e.parent&&Dt(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Pe(e,1),!n&&!a&&(Dt(e,o?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},Ze=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},Qe=function(e,t,n,r){var i=e._repeat,a=U(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:U(a*(i+1)+e._rDelay*i):a,o>0&&!r&&Ue(e,e._tTime=e._tDur*o),e.parent&&He(e),n||Fe(e.parent,e),e},$e=function(e){return e instanceof rn?Fe(e):Qe(e,e._dur)},et={_start:0,endTime:oe,totalDuration:oe},tt=function e(t,n,r){var i=t.labels,a=t._recent||et,o=t.duration()>=s?a.endTime(!1):t._dur,c,l,u;return h(n)&&(isNaN(n)||n in i)?(l=n.charAt(0),u=n.substr(-1)===`%`,c=n.indexOf(`=`),l===`<`||l===`>`?(c>=0&&(n=n.replace(/=/,``)),(l===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(c<0?a:r).totalDuration()/100:1)):c<0?(n in i||(i[n]=o),i[n]):(l=parseFloat(n.charAt(c-1)+n.substr(c+1)),u&&r&&(l=l/100*(w(r)?r[0]:r).totalDuration()),c>1?e(t,n.substr(0,c-1),r)+l:o+l)):n==null?o:+n},nt=function(e,t,n){var r=_(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=b(s.vars.inherit)&&s.parent;a.immediateRender=b(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new vn(t[0],a,t[i+1])},rt=function(e,t){return e||e===0?t(e):t},it=function(e,t,n){return n<e?e:n>t?t:n},at=function(e,t){return!h(e)||!(t=ee.exec(e))?``:t[1]},ot=function(e,t,n){return rt(n,function(n){return it(e,t,n)})},st=[].slice,ct=function(e,t){return e&&y(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&y(e[0]))&&!e.nodeType&&e!==P},lt=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return h(e)&&!t||ct(e,1)?(r=n).push.apply(r,ut(e)):n.push(e)})||n},ut=function(e,t,n){return o&&!t&&o.selector?o.selector(e):h(e)&&!n&&(te||!Ut())?st.call((t||ne).querySelectorAll(e),0):w(e)?lt(e,n):ct(e)?st.call(e,0):e?[e]:[]},dt=function(e){return e=ut(e)[0]||R(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return ut(t,n.querySelectorAll?n:n===e?R(`Invalid scope`)||ne.createElement(`div`):e)}},ft=function(e){return e.sort(function(){return .5-Math.random()})},pt=function(e){if(g(e))return e;var t=y(e)?e:{each:e},n=Xt(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,c=isNaN(r)||o,l=t.axis,u=r,d=r;return h(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!o&&c&&(u=r[0],d=r[1]),function(e,o,p){var m=(p||t).length,h=a[m],g,_,v,y,b,x,S,C,w;if(!h){if(w=t.grid===`auto`?0:(t.grid||[1,s])[1],!w){for(S=-s;S<(S=p[w++].getBoundingClientRect().left)&&w<m;);w<m&&w--}for(h=a[m]=[],g=c?Math.min(w,m)*u-.5:r%w,_=w===s?0:c?m*d/w-.5:r/w|0,S=0,C=s,x=0;x<m;x++)v=x%w-g,y=_-(x/w|0),h[x]=b=l?Math.abs(l===`y`?y:v):f(v*v+y*y),b>S&&(S=b),b<C&&(C=b);r===`random`&&ft(h),h.max=S-C,h.min=C,h.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(w>m?m-1:l?l===`y`?m/w:w:Math.max(w,m/w))||0)*(r===`edges`?-1:1),h.b=m<0?i-m:i,h.u=at(t.amount||t.each)||0,n=n&&m<0?Yt(n):n}return m=(h[e]-h.min)/h.max||0,U(h.b+(n?n(m):m)*h.v)+h.u}},mt=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=U(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(_(n)?0:at(n))}},ht=function(e,t){var n=w(e),r,i;return!n&&y(e)&&(r=n=e.radius||s,e.values?(e=ut(e.values),(i=!_(e[0]))&&(r*=r)):e=mt(e.increment)),rt(t,n?g(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=s,c=0,l=e.length,u,d;l--;)i?(u=e[l].x-n,d=e[l].y-a,u=u*u+d*d):u=Math.abs(e[l]-n),u<o&&(o=u,c=l);return c=!r||o<=r?e[c]:t,i||c===t||_(t)?c:c+at(t)}:mt(e))},gt=function(e,t,n,r){return rt(w(e)?!t:n===!0?!!(n=0):!r,function(){return w(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},_t=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},vt=function(e,t){return function(n){return e(parseFloat(n))+(t||at(n))}},yt=function(e,t,n){return wt(e,t,0,1,n)},bt=function(e,t,n){return rt(n,function(n){return e[~~t(n)]})},xt=function e(t,n,r){var i=n-t;return w(t)?bt(t,e(0,t.length),n):rt(r,function(e){return(i+(e-t)%i)%i+t})},St=function e(t,n,r){var i=n-t,a=i*2;return w(t)?bt(t,e(0,t.length-1),n):rt(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},Ct=function(e){return e.replace(T,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(E);return gt(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},wt=function(e,t,n,r,i){var a=t-e,o=r-n;return rt(i,function(t){return n+((t-e)/a*o||0)})},Tt=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=h(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(w(t)&&!w(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=G(w(t)?[]:{},t));if(!u){for(c in n)on.call(s,t,c,`get`,n[c]);a=function(e){return Dn(e,s)||(o?t.p:t)}}}return rt(r,a)},Et=function(e,t,n){var r=e.labels,i=s,a,o,c;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(c=a,i=o);return c},Dt=function(e,t,n){var r=e.vars,i=r[t],a=o,s=e._ctx,c,l,u;if(i)return c=r[t+`Params`],l=r.callbackScope||e,n&&B.length&&Se(),s&&(o=s),u=c?i.apply(l,c):i.call(l),o=a,u},Ot=function(e){return Pe(e),e.scrollTrigger&&e.scrollTrigger.kill(!!a),e.progress()<1&&Dt(e,`onInterrupt`),e},kt,At=[],jt=function(e){if(e)if(e=!e.name&&e.default||e,x()||e.headless){var t=e.name,n=g(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:oe,render:Dn,add:on,kill:kn,modifier:On,rawVars:0},a={targetTest:0,get:0,getSetter:Cn,aliases:{},register:0};if(Ut(),e!==r){if(fe[t])return;W(r,W(ke(e,i),a)),G(r.prototype,G(i,ke(e,a))),fe[r.prop=t]=r,e.targetTest&&(he.push(r),le[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}ae(t,r),e.register&&e.register(Kn,r,Mn)}else At.push(e)},Mt=255,Nt={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},Pt=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Mt+.5|0},Ft=function(e,t,n){var r=e?_(e)?[e>>16,e>>8&Mt,e&Mt]:0:Nt.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),Nt[e])r=Nt[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Mt,r&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(D),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=Pt(s+1/3,i,a),r[1]=Pt(s,i,a),r[2]=Pt(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(O),n&&r.length<4&&(r[3]=1),r}else r=e.match(D)||Nt.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/Mt,a=r[1]/Mt,o=r[2]/Mt,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},It=function(e){var t=[],n=[],r=-1;return e.split(Rt).forEach(function(e){var i=e.match(k)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},Lt=function(e,t,n){var r=``,i=(e+r).match(Rt),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=Ft(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=It(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Rt,`1`).split(k),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Rt),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Rt=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Nt)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),zt=/hsl[a]?\(/,Bt=function(e){var t=e.join(` `),n;if(Rt.lastIndex=0,Rt.test(t))return n=zt.test(t),e[1]=Lt(e[1],n),e[0]=Lt(e[0],n,It(e[1])),!0},Vt,Ht=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){I&&(!te&&x()&&(P=te=window,ne=P.document||{},F.gsap=Kn,(P.gsapVersions||=[]).push(Kn.version),L(re||P.GreenSockGlobals||!P.gsap&&P||{}),At.forEach(jt)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},Vt=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Vt=0,l=oe},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),Ut(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),Ut=function(){return!Vt&&Ht.wake()},K={},Wt=/^[\d.\-M][\d.\-,\s]/,Gt=/["']/g,Kt=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(Gt,``).trim():+c,r=s.substr(o+1).trim();return t},qt=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},Jt=function(e){var t=(e+``).split(`(`),n=K[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[Kt(t[1])]:qt(e).split(`,`).map(Te)):K._CE&&Wt.test(e)?K._CE(``,e):n},Yt=function(e){return function(t){return 1-e(1-t)}},Xt=function(e,t){return e&&(g(e)?e:K[e]||Jt(e))||t},Zt=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return ye(e,function(e){for(var t in K[e]=F[e]=i,K[a=e.toLowerCase()]=n,i)K[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=K[e+`.`+t]=i[t]}),i},Qt=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},$t=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/l*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*m((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:Qt(s);return a=l/a,c.config=function(n,r){return e(t,n,r)},c},en=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:Qt(r);return i.config=function(n){return e(t,n)},i};ye(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;Zt(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),K.Linear.easeNone=K.none=K.Linear.easeIn,Zt(`Elastic`,$t(`in`),$t(`out`),$t()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};Zt(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),Zt(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),Zt(`Circ`,function(e){return-(f(1-e*e)-1)}),Zt(`Sine`,function(e){return e===1?1:-p(e*u)+1}),Zt(`Back`,en(`in`),en(`out`),en()),K.SteppedEase=K.steps=F.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-c;return function(e){return((r*it(0,a,e)|0)+i)*n}}},r.ease=K[`quad.out`],ye(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return ge+=e+`,`+e+`Params,`});var tn=function(e,t){this.id=d++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:V,this.set=t?t.getSetter:Cn},nn=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Qe(this,+e.duration,1,1),this.data=e.data,o&&(this._ctx=o,o.data.push(this)),Vt||Ht.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,Qe(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(Ut(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Ue(this,e),!n._dp||n.parent||We(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&Ge(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===c||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),we(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+ze(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+ze(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?Be(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-c?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?Ve(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-c?0:this._rts,this.totalTime(it(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),He(this),Ie(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ut(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==c&&(this._tTime-=c)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=U(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&Ge(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(b(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ve(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=ce);var t=a;return a=e,Ce(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),a=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,$e(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,$e(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(tt(this,e),b(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,b(t)),this._dur||(this._zTime=-c),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-c:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-c,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-c)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=g(e)?e:Ee,a=function(){var e=t.then;t.then=null,n&&n(),g(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){Ot(this)},e}();W(nn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-c,_prom:0,_ps:!1,_rts:1});var rn=function(r){t(i,r);function i(t,n){var i;return t===void 0&&(t={}),i=r.call(this,t)||this,i.labels={},i.smoothChildTiming=!!t.smoothChildTiming,i.autoRemoveChildren=!!t.autoRemoveChildren,i._sort=b(t.sortChildren),N&&Ge(t.parent||N,e(i),n),t.reversed&&i.reverse(),t.paused&&i.paused(!0),t.scrollTrigger&&Ke(e(i),t.scrollTrigger),i}var o=i.prototype;return o.to=function(e,t,n){return nt(0,arguments,this),this},o.from=function(e,t,n){return nt(1,arguments,this),this},o.fromTo=function(e,t,n,r){return nt(2,arguments,this),this},o.set=function(e,t,n){return t.duration=0,t.parent=this,Ae(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new vn(e,t,tt(this,n),1),this},o.call=function(e,t,n){return Ge(this,vn.delayedCall(0,e,t),n)},o.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new vn(e,n,tt(this,i)),this},o.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Ae(n).immediateRender=b(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},o.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Ae(r).immediateRender=b(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},o.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,o=this._dur,s=e<=0?0:U(e),l=this._zTime<0!=e<0&&(this._initted||!o),u,d,f,p,m,h,g,_,v,y,b,x;if(this!==N&&s>i&&e>=0&&(s=i),s!==this._tTime||n||l){if(r!==this._time&&o&&(s+=this._time-r,e+=this._time-r),u=s,v=this._start,_=this._ts,h=!_,l&&(o||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(b=this._yoyo,m=o+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(m*100+e,t,n);if(u=U(s%m),s===i?(p=this._repeat,u=o):(y=U(s/m),p=~~y,p&&p===y&&(u=o,p--),u>o&&(u=o)),y=Be(this._tTime,m),!r&&this._tTime&&y!==p&&this._tTime-y*m-this._dur<=0&&(y=p),b&&p&1&&(u=o-u,x=1),p!==y&&!this._lock){var S=b&&y&1,C=S===(b&&p&1);if(p<y&&(S=!S),r=S?0:s%o?o:s,this._lock=1,this.render(r||(x?0:U(p*m)),t,!o)._lock=0,this._tTime=s,!t&&this.parent&&Dt(this,`onRepeat`),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,y=p),r&&r!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(o=this._dur,i=this._tDur,C&&(this._lock=2,r=S?o:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!h))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=Ze(this,U(r),U(u)),g&&(s-=u-(u=g._start))),this._tTime=s,this._time=u,this._act=!!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&s&&o&&!t&&!y&&(Dt(this,`onStart`),this._tTime!==s))return this;if(u>=r&&e>=0)for(d=this._first;d;){if(f=d._next,(d._act||u>=d._start)&&d._ts&&g!==d){if(d.parent!==this)return this.render(e,t,n);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,t,n),u!==this._time||!this._ts&&!h){g=0,f&&(s+=this._zTime=-c);break}}d=f}else{d=this._last;for(var w=e<0?e:u;d;){if(f=d._prev,(d._act||w<=d._end)&&d._ts&&g!==d){if(d.parent!==this)return this.render(e,t,n);if(d.render(d._ts>0?(w-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(w-d._start)*d._ts,t,n||a&&Ce(d)),u!==this._time||!this._ts&&!h){g=0,f&&(s+=this._zTime=w?-c:c);break}}d=f}}if(g&&!t&&(this.pause(),g.render(u>=r?0:-c)._zTime=u>=r?1:-1,this._ts))return this._start=v,He(this),this.render(e,t,n);this._onUpdate&&!t&&Dt(this,`onUpdate`,!0),(s===i&&this._tTime>=this.totalDuration()||!s&&r)&&(v===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((e||!o)&&(s===i&&this._ts>0||!s&&this._ts<0)&&Pe(this,1),!t&&!(e<0&&!r)&&(s||r||!i)&&(Dt(this,s===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom())))}return this},o.add=function(e,t){var n=this;if(_(t)||(t=tt(this,t,e)),!(e instanceof nn)){if(w(e))return e.forEach(function(e){return n.add(e,t)}),this;if(h(e))return this.addLabel(e,t);if(g(e))e=vn.delayedCall(0,e);else return this}return this===e?this:Ge(this,e,t)},o.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-s);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof vn?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},o.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},o.remove=function(e){return h(e)?this.removeLabel(e):g(e)?this.killTweensOf(e):(e.parent===this&&Ne(this,e),e===this._recent&&(this._recent=this._last),Fe(this))},o.totalTime=function(e,t){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=U(Ht.time-(this._ts>0?e/this._ts:(this.totalDuration()-e)/-this._ts))),r.prototype.totalTime.call(this,e,t),this._forcing=0,this):this._tTime},o.addLabel=function(e,t){return this.labels[e]=tt(this,t),this},o.removeLabel=function(e){return delete this.labels[e],this},o.addPause=function(e,t,n){var r=vn.delayedCall(0,t||oe,n);return r.data=`isPause`,this._hasPause=1,Ge(this,r,tt(this,e))},o.removePause=function(e){var t=this._first;for(e=tt(this,e);t;)t._start===e&&t.data===`isPause`&&Pe(t),t=t._next},o.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)ln!==r[i]&&r[i].kill(e,t);return this},o.getTweensOf=function(e,t){for(var n=[],r=ut(e),i=this._first,a=_(t),o;i;)i instanceof vn?xe(i._targets,r)&&(a?(!ln||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},o.tweenTo=function(e,t){t||={};var n=this,r=tt(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,l=i.immediateRender,u,d=vn.to(n,W({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||c,onStart:function(){if(n.pause(),!u){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());d._dur!==e&&Qe(d,e,0,1).render(d._time,!0,!0),u=1}o&&o.apply(d,s||[])}},t));return l?d.render(0):d},o.tweenFromTo=function(e,t,n){return this.tweenTo(t,W({startAt:{time:tt(this,e)}},n))},o.recent=function(){return this._recent},o.nextLabel=function(e){return e===void 0&&(e=this._time),Et(this,tt(this,e))},o.previousLabel=function(e){return e===void 0&&(e=this._time),Et(this,tt(this,e),1)},o.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+c)},o.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=U(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return Fe(this)},o.invalidate=function(e){var t=this._first;for(this._lock=0;t;)t.invalidate(e),t=t._next;return r.prototype.invalidate.call(this,e)},o.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Fe(this)},o.totalDuration=function(e){var t=0,n=this,r=n._last,i=s,a,o,c;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(c=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,Ge(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!c&&!n._dp||c&&c.smoothChildTiming)&&(n._start+=U(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;Qe(n,n===N&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},i.updateRoot=function(e){if(N._ts&&(we(N,Ve(e,N)),de=Ht.frame),Ht.frame>=me){me+=n.autoSleep||120;var t=N._first;if((!t||!t._ts)&&n.autoSleep&&Ht._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||Ht.sleep()}}},i}(nn);W(rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var an=function(e,t,n,r,i,a,o){var s=new Mn(this._pt,e,t,0,1,En,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=Ct(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(A)||[];u=A.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?be(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=A.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(j.test(r)||g)&&(s.e=0),this._pt=s,s},on=function(e,t,r,i,a,o,s,c,l,u){g(i)&&(i=i(a||0,e,o));var d=e[t],f=r===`get`?g(d)?l?e[t.indexOf(`set`)||!g(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](l):e[t]():d:r,p=g(d)?l?xn:bn:yn,m;if(h(i)&&(~i.indexOf(`random(`)&&(i=Ct(i)),i.charAt(1)===`=`&&(m=be(f,i)+(at(f)||0),(m||m===0)&&(i=m))),!u||f!==i||un)return!isNaN(f*i)&&i!==``?(m=new Mn(this._pt,e,t,+f||0,i-(f||0),typeof d==`boolean`?Tn:wn,0,p),l&&(m.fp=l),s&&m.modifier(s,this,e),this._pt=m):(!d&&!(t in e)&&ie(t,i),an.call(this,e,t,f,i,p,c||n.stringFilter,l))},sn=function(e,t,n,r,i){if(g(e)&&(e=hn(e,i,t,n,r)),!y(e)||e.style&&e.nodeType||w(e)||C(e))return h(e)?hn(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=hn(e[o],i,t,n,r);return a},cn=function(e,t,n,r,i,a){var o,s,c,l;if(fe[e]&&(o=new fe[e]).init(i,o.rawVars?t[e]:sn(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new Mn(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==kt))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},ln,un,dn=function e(t,n,o){var l=t.vars,u=l.ease,d=l.startAt,f=l.immediateRender,p=l.lazy,m=l.onUpdate,h=l.runBackwards,g=l.yoyoEase,_=l.keyframes,v=l.autoRevert,y=t._dur,x=t._startAt,S=t._targets,C=t.parent,w=C&&C.data===`nested`?C.vars.targets:S,T=t._overwrite===`auto`&&!i,E=t.timeline,D=l.easeReverse||g,O,k,A,j,M,ee,P,te,ne,F,re,I,L;if(E&&(!_||!u)&&(u=`none`),t._ease=Xt(u,r.ease),t._rEase=D&&(Xt(D)||t._ease),t._from=!E&&!!l.runBackwards,t._from&&(t.ratio=1),!E||_&&!l.stagger){if(te=S[0]?ve(S[0]).harness:0,I=te&&l[te.prop],O=ke(l,le),x&&(x._zTime<0&&x.progress(1),n<0&&h&&f&&!v?x.render(-1,!0):x.revert(h&&y?z:se),x._lazy=0),d){if(Pe(t._startAt=vn.set(S,W({data:`isStart`,overwrite:!1,parent:C,immediateRender:!0,lazy:!x&&b(p),startAt:null,delay:0,onUpdate:m&&function(){return Dt(t,`onUpdate`)},stagger:0},d))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(a||!f&&!v)&&t._startAt.revert(z),f&&y&&n<=0&&o<=0){n&&(t._zTime=n);return}}else if(h&&y&&!x){if(n&&(f=!1),A=W({overwrite:!1,data:`isFromStart`,lazy:f&&!x&&b(p),immediateRender:f,stagger:0,parent:C},O),I&&(A[te.prop]=I),Pe(t._startAt=vn.set(S,A)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(a?t._startAt.revert(z):t._startAt.render(-1,!0)),t._zTime=n,!f)e(t._startAt,c,c);else if(!n)return}for(t._pt=t._ptCache=0,p=y&&b(p)||p&&!y,k=0;k<S.length;k++){if(M=S[k],P=M._gsap||_e(S)[k]._gsap,t._ptLookup[k]=F={},ue[P.id]&&B.length&&Se(),re=w===S?k:w.indexOf(M),te&&(ne=new te).init(M,I||O,t,re,w)!==!1&&(t._pt=j=new Mn(t._pt,M,ne.name,0,1,ne.render,ne,0,ne.priority),ne._props.forEach(function(e){F[e]=j}),ne.priority&&(ee=1)),!te||I)for(A in O)fe[A]&&(ne=cn(A,O,t,re,M,w))?ne.priority&&(ee=1):F[A]=j=on.call(t,M,A,`get`,O[A],re,w,0,l.stringFilter);t._op&&t._op[k]&&t.kill(M,t._op[k]),T&&t._pt&&(ln=t,N.killTweensOf(M,F,t.globalTime(n)),L=!t.parent,ln=0),t._pt&&p&&(ue[P.id]=1)}ee&&jn(t),t._onInit&&t._onInit(t)}t._onUpdate=m,t._initted=(!t._op||t._pt)&&!L,_&&n<=0&&E.render(s,!0,!0)},fn=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return un=1,e.vars[t]=`+=0`,dn(e,o),un=0,s?R(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&=H(n)+at(u.e),u.b&&=l.s+at(u.b)},pn=function(e,t){var n=e[0]?ve(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=G({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},mn=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(w(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},hn=function(e,t,n,r,i){return g(e)?e.call(t,n,r,i):h(e)&&~e.indexOf(`random(`)?Ct(e):e},gn=ge+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,_n={};ye(gn+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return _n[e]=1});var vn=function(r){t(o,r);function o(t,a,o,s){var l;typeof a==`number`&&(o.duration=a,a=o,o=null),l=r.call(this,s?a:Ae(a))||this;var u=l.vars,d=u.duration,f=u.delay,p=u.immediateRender,m=u.stagger,h=u.overwrite,g=u.keyframes,v=u.defaults,x=u.scrollTrigger,T=a.parent||N,E=(w(t)||C(t)?_(t[0]):`length`in a)?[t]:ut(t),D,O,k,A,j,M,ee,P;if(l._targets=E.length?_e(E):R(`GSAP target `+t+` not found. https://gsap.com`,!n.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=h,g||m||S(d)||S(f)){a=l.vars;var te=a.easeReverse||a.yoyoEase;if(D=l.timeline=new rn({data:`nested`,defaults:v||{},targets:T&&T.data===`nested`?T.vars.targets:E}),D.kill(),D.parent=D._dp=e(l),D._start=0,m||S(d)||S(f)){if(A=E.length,ee=m&&pt(m),y(m))for(j in m)~gn.indexOf(j)&&(P||={},P[j]=m[j]);for(O=0;O<A;O++)k=ke(a,_n),k.stagger=0,te&&(k.easeReverse=te),P&&G(k,P),M=E[O],k.duration=+hn(d,e(l),O,M,E),k.delay=(+hn(f,e(l),O,M,E)||0)-l._delay,!m&&A===1&&k.delay&&(l._delay=f=k.delay,l._start+=f,k.delay=0),D.to(M,k,ee?ee(O,M,E):0),D._ease=K.none;D.duration()?d=f=0:l.timeline=0}else if(g){Ae(W(D.vars.defaults,{ease:`none`})),D._ease=Xt(g.ease||a.ease||`none`);var ne=0,F,re,I;if(w(g))g.forEach(function(e){return D.to(E,e,`>`)}),D.duration();else{for(j in k={},g)j===`ease`||j===`easeEach`||mn(j,g[j],k,g.easeEach);for(j in k)for(F=k[j].sort(function(e,t){return e.t-t.t}),ne=0,O=0;O<F.length;O++)re=F[O],I={ease:re.e,duration:(re.t-(O?F[O-1].t:0))/100*d},I[j]=re.v,D.to(E,I,ne),ne+=I.duration;D.duration()<d&&D.to({},{duration:d-D.duration()})}}d||l.duration(d=D.duration())}else l.timeline=0;return h===!0&&!i&&(ln=e(l),N.killTweensOf(E),ln=0),Ge(T,e(l),o),a.reversed&&l.reverse(),a.paused&&l.paused(!0),(p||!d&&!g&&l._start===U(T._time)&&b(p)&&Re(e(l))&&T.data!==`nested`)&&(l._tTime=-c,l.render(Math.max(0,-f)||0)),x&&Ke(e(l),x),l}var s=o.prototype;return s.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-c&&!o?i:e<c?0:e,l,u,d,f,p,m,h,g;if(!a)Xe(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(l=s,g=this.timeline,this._repeat){if(f=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(f*100+e,t,n);if(l=U(s%f),s===i?(d=this._repeat,l=a):(p=U(s/f),d=~~p,d&&d===p?(l=a,d--):l>a&&(l=a)),m=this._yoyo&&d&1,m&&(l=a-l),p=Be(this._tTime,f),l===r&&!n&&this._initted&&d===p)return this._tTime=s,this;d!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&l!==f&&this._initted&&(this._lock=n=1,this.render(U(f*d),!0).invalidate()._lock=0)}if(!this._initted){if(qe(this,o?e:l,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&d!==p))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var _=l<r;if(_!==this._inv){var v=_?r:a-r;this._inv=_,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=v?(_?-1:1)/v:0,this._invScale=_?-this.ratio:1-this.ratio,this._invEase=_?this._rEase:this._ease}this.ratio=h=this._invRatio+this._invScale*this._invEase((l-this._invTime)*this._invRecip)}else this.ratio=h=this._ease(l/a);if(this._from&&(this.ratio=h=1-h),this._tTime=s,this._time=l,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!p&&(Dt(this,`onStart`),this._tTime!==s))return this;for(u=this._pt;u;)u.r(h,u.d),u=u._next;g&&g.render(e<0?e:g._dur*g._ease(l/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&Le(this,e,t,n),Dt(this,`onUpdate`)),this._repeat&&d!==p&&this.vars.onRepeat&&!t&&this.parent&&Dt(this,`onRepeat`),(s===this._tDur||!s)&&this._tTime===s&&(o&&!this._onUpdate&&Le(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&Pe(this,1),!t&&!(o&&!r)&&(s||r||m)&&(Dt(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},s.targets=function(){return this._targets},s.invalidate=function(e){return(!e||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(e),r.prototype.invalidate.call(this,e)},s.resetTo=function(e,t,n,r,i){Vt||Ht.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||dn(this,a),o=this._ease(a/this._dur),fn(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(Ue(this,0),this.parent||Me(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},s.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?Ot(this):this.scrollTrigger&&this.scrollTrigger.kill(!!a),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,ln&&ln.vars.overwrite!==!0)._first||Ot(this),this.parent&&n!==this.timeline.totalDuration()&&Qe(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?ut(e):r,o=this._ptLookup,s=this._pt,c,l,u,d,f,p,m;if((!t||t===`all`)&&je(r,i))return t===`all`&&(this._pt=0),Ot(this);for(c=this._op=this._op||[],t!==`all`&&(h(t)&&(f={},ye(t,function(e){return f[e]=1}),t=f),t=pn(r,t)),m=r.length;m--;)if(~i.indexOf(r[m]))for(f in l=o[m],t===`all`?(c[m]=t,d=l,u={}):(u=c[m]=c[m]||{},d=t),d)p=l&&l[f],p&&((!(`kill`in p.d)||p.d.kill(f)===!0)&&Ne(this,p,`_pt`),delete l[f]),u!==`all`&&(u[f]=1);return this._initted&&!this._pt&&s&&Ot(this),this},o.to=function(e,t){return new o(e,t,arguments[2])},o.from=function(e,t){return nt(1,arguments)},o.delayedCall=function(e,t,n,r){return new o(t,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:t,onReverseComplete:t,onCompleteParams:n,onReverseCompleteParams:n,callbackScope:r})},o.fromTo=function(e,t,n){return nt(2,arguments)},o.set=function(e,t){return t.duration=0,t.repeatDelay||(t.repeat=0),new o(e,t)},o.killTweensOf=function(e,t,n){return N.killTweensOf(e,t,n)},o}(nn);W(vn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ye(`staggerTo,staggerFrom,staggerFromTo`,function(e){vn[e]=function(){var t=new rn,n=st.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var yn=function(e,t,n){return e[t]=n},bn=function(e,t,n){return e[t](n)},xn=function(e,t,n,r){return e[t](r.fp,n)},Sn=function(e,t,n){return e.setAttribute(t,n)},Cn=function(e,t){return g(e[t])?bn:v(e[t])&&e.setAttribute?Sn:yn},wn=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Tn=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},En=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Dn=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},On=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},kn=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ne(this,t,`_pt`):t.dep||(n=1),t=r;return!n},An=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},jn=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},Mn=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||wn,this.d=o||this,this.set=s||yn,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=An,this.m=e,this.mt=n,this.tween=t},e}();ye(ge+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return le[e]=1}),F.TweenMax=F.TweenLite=vn,F.TimelineLite=F.TimelineMax=rn,N=new rn({sortChildren:!1,defaults:r,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),n.stringFilter=Bt;var Nn=[],Pn={},Fn=[],In=0,Ln=0,Rn=function(e){return(Pn[e]||Fn).map(function(e){return e()})},zn=function(){var e=Date.now(),t=[];e-In>2&&(Rn(`matchMediaInit`),Nn.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=P.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Rn(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),In=e,Rn(`matchMedia`))},Bn=function(){function e(e,t){this.selector=t&&dt(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Ln++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){g(e)&&(n=t,t=e,e=g);var r=this,i=function(){var e=o,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=dt(n)),o=r,a=t.apply(r,arguments),g(a)&&r._r.push(a),o=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===g?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=o;o=null,e(this),o=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof vn&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof rn?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof vn)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=Nn.length;r--;)Nn[r].id===this.id&&Nn.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),Vn=function(){function e(e){this.contexts=[],this.scope=e,o&&o.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){y(e)||(e={matches:e});var r=new Bn(0,n||this.scope),i=r.conditions={},a,s,c;for(s in o&&!r.selector&&(r.selector=o.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)s===`all`?c=1:(a=P.matchMedia(e[s]),a&&(Nn.indexOf(r)<0&&Nn.push(r),(i[s]=a.matches)&&(c=1),a.addListener?a.addListener(zn):a.addEventListener(`change`,zn)));return c&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Hn={registerPlugin:function(){[...arguments].forEach(function(e){return jt(e)})},timeline:function(e){return new rn(e)},getTweensOf:function(e,t){return N.getTweensOf(e,t)},getProperty:function(e,t,n,r){h(e)&&(e=ut(e)[0]);var i=ve(e||{}).get,a=n?Ee:Te;return n===`native`&&(n=``),e&&(t?a((fe[t]&&fe[t].get||i)(e,t,n,r)):function(t,n,r){return a((fe[t]&&fe[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=ut(e),e.length>1){var r=e.map(function(e){return Kn.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=fe[t],o=ve(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;kt._pt=0,r.init(e,n?t+n:t,kt,0,[e]),r.render(1,r),kt._pt&&Dn(1,kt)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=Kn.to(e,W((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return N.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Xt(e.ease,r.ease)),Oe(r,e||{})},config:function(e){return Oe(n,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!fe[e]&&!F[e]&&R(t+` effect requires `+e+` plugin.`)}),pe[t]=function(e,t,r){return n(ut(e),W(t||{},i),r)},a&&(rn.prototype[t]=function(e,n,r){return this.add(pe[t](e,y(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){K[e]=Xt(t)},parseEase:function(e,t){return arguments.length?Xt(e,t):K},getById:function(e){return N.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new rn(e),r,i;for(n.smoothChildTiming=b(e.smoothChildTiming),N.remove(n),n._dp=0,n._time=n._tTime=N._time,r=N._first;r;)i=r._next,(t||!(!r._dur&&r instanceof vn&&r.vars.onComplete===r._targets[0]))&&Ge(n,r,r._start-r._delay),r=i;return Ge(N,n,0),n},context:function(e,t){return e?new Bn(e,t):o},matchMedia:function(e){return new Vn(e)},matchMediaRefresh:function(){return Nn.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||zn()},addEventListener:function(e,t){var n=Pn[e]||(Pn[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Pn[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:xt,wrapYoyo:St,distribute:pt,random:gt,snap:ht,normalize:yt,getUnit:at,clamp:ot,splitColor:Ft,toArray:ut,selector:dt,mapRange:wt,pipe:_t,unitize:vt,interpolate:Tt,shuffle:ft},install:L,effects:pe,ticker:Ht,updateRoot:rn.updateRoot,plugins:fe,globalTimeline:N,core:{PropTween:Mn,globals:ae,Tween:vn,Timeline:rn,Animation:nn,getCache:ve,_removeLinkedListItem:Ne,reverting:function(){return a},context:function(e){return e&&o&&(o.data.push(e),e._ctx=o),o},suppressOverwrites:function(e){return i=e}}};ye(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Hn[e]=vn[e]}),Ht.add(rn.updateRoot),kt=Hn.to({},{duration:0});var Un=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Wn=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=Un(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},Gn=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(h(n)&&(r={},ye(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}Wn(e,n)}}}},Kn=Hn.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)a?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Gn(`roundProps`,mt),Gn(`modifiers`),Gn(`snap`,ht))||Hn;vn.version=rn.version=Kn.version=`3.15.0`,I=1,x()&&Ut(),K.Power0,K.Power1,K.Power2,K.Power3,K.Power4,K.Linear,K.Quad,K.Cubic,K.Quart,K.Quint,K.Strong,K.Elastic,K.Back,K.SteppedEase,K.Bounce,K.Sine,K.Expo,K.Circ;var qn,Jn,Yn,Xn,Zn,Qn,$n,er=function(){return typeof window<`u`},tr={},nr=180/Math.PI,rr=Math.PI/180,ir=Math.atan2,ar=1e8,or=/([A-Z])/g,sr=/(left|right|width|margin|padding|x)/i,cr=/[\s,\(]\S/,lr={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},ur=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},dr=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fr=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},pr=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},mr=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},hr=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},gr=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},_r=function(e,t,n){return e.style[t]=n},vr=function(e,t,n){return e.style.setProperty(t,n)},yr=function(e,t,n){return e._gsap[t]=n},br=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},xr=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},Sr=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},Cr=`transform`,wr=Cr+`Origin`,Tr=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in tr&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=lr[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=Wr(i,e)}):this.tfm[t]=o.x?o[t]:Wr(i,t),t===wr&&(this.tfm.zOrigin=o.zOrigin);else return lr.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(Cr)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(wr,n,``)),t=Cr}(a||n)&&this.props.push(t,n,a[t])},Er=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},Dr=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,i,a;for(i=0;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(or,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=$n(),(!i||!i.isStart)&&!n[Cr]&&(Er(n),r.zOrigin&&n[wr]&&(n[wr]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Or=function(e,t){var n={target:e,props:[],revert:Dr,save:Tr};return e._gsap||Kn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},kr,Ar=function(e,t){var n=Jn.createElementNS?Jn.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):Jn.createElement(e);return n&&n.style?n:Jn.createElement(e)},jr=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(or,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,Nr(n)||n,1)||``},Mr=`O,Moz,ms,Ms,Webkit`.split(`,`),Nr=function(e,t,n){var r=(t||Zn).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(Mr[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?Mr[i]:``)+e},Pr=function(){er()&&window.document&&(qn=window,Jn=qn.document,Yn=Jn.documentElement,Zn=Ar(`div`)||{style:{}},Ar(`div`),Cr=Nr(Cr),wr=Cr+`Origin`,Zn.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,kr=!!Nr(`perspective`),$n=Kn.core.reverting,Xn=1)},Fr=function(e){var t=e.ownerSVGElement,n=Ar(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),Yn.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),Yn.removeChild(n),i},Ir=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Lr=function(e){var t,n;try{t=e.getBBox()}catch{t=Fr(e),n=1}return t&&(t.width||t.height)||n||(t=Fr(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ir(e,[`x`,`cx`,`x1`])||0,y:+Ir(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},Rr=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Lr(e))},zr=function(e,t){if(t){var n=e.style,r;t in tr&&t!==wr&&(t=Cr),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(or,`-$1`).toLowerCase())):n.removeAttribute(t)}},Br=function(e,t,n,r,i,a){var o=new Mn(e._pt,t,n,0,1,a?gr:hr);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},Vr={deg:1,rad:1,turn:1},Hr={grid:1,flex:1},Ur=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=Zn.style,c=sr.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||Vr[i]||Vr[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&Rr(t),(p||o===`%`)&&(tr[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],H(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===Jn||!h.appendChild)&&(h=Jn.body),g=h._gsap,g&&p&&g.width&&c&&g.time===Ht.time&&!g.uncache)return H(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:zr(t,n)}else (p||o===`%`)&&!Hr[jr(h,`display`)]&&(s.position=jr(t,`position`)),h===t&&(s.position=`static`),h.appendChild(Zn),m=Zn[u],h.removeChild(Zn),s.position=`absolute`;return c&&p&&(g=ve(h),g.time=Ht.time,g.width=h[u]),H(f?m*a/d:m&&a?d/m*a:0)},Wr=function(e,t,n,r){var i;return Xn||Pr(),t in lr&&t!==`transform`&&(t=lr[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),tr[t]&&t!==`transform`?(i=ni(e,r),i=t===`transformOrigin`?i.svg?i.origin:ri(jr(e,wr))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=Yr[t]&&Yr[t](e,t,n)||jr(e,t)||V(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?Ur(e,t,i,n)+n:i},Gr=function(e,t,r,i){if(!r||r===`none`){var a=Nr(t,e,1),o=a&&jr(e,a,1);o&&o!==r?(t=a,r=o):t===`borderColor`&&(r=jr(e,`borderTopColor`))}var s=new Mn(this._pt,e.style,t,0,1,En),c=0,l=0,u,d,f,p,m,h,g,_,v,y,b,x;if(s.b=r,s.e=i,r+=``,i+=``,i.substring(0,6)===`var(--`&&(i=jr(e,i.substring(4,i.indexOf(`)`)))),i===`auto`&&(h=e.style[t],e.style[t]=i,i=jr(e,t)||i,h?e.style[t]=h:zr(e,t)),u=[r,i],Bt(u),r=u[0],i=u[1],f=r.match(k)||[],x=i.match(k)||[],x.length){for(;d=k.exec(i);)g=d[0],v=i.substring(c,d.index),m?m=(m+1)%5:(v.substr(-5)===`rgba(`||v.substr(-5)===`hsla(`)&&(m=1),g!==(h=f[l++]||``)&&(p=parseFloat(h)||0,b=h.substr((p+``).length),g.charAt(1)===`=`&&(g=be(p,g)+b),_=parseFloat(g),y=g.substr((_+``).length),c=k.lastIndex-y.length,y||(y=y||n.units[t]||b,c===i.length&&(i+=y,s.e+=y)),b!==y&&(p=Ur(e,t,h,y)||0),s._pt={_next:s._pt,p:v||l===1?v:`,`,s:p,c:_-p,m:m&&m<4||t===`zIndex`?Math.round:0});s.c=c<i.length?i.substring(c,i.length):``}else s.r=t===`display`&&i===`none`?gr:hr;return j.test(i)&&(s.e=0),this._pt=s,s},Kr={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},qr=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=Kr[n]||n,t[1]=Kr[r]||r,t.join(` `)},Jr=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],tr[o]&&(s=1,o=o===`transformOrigin`?wr:Cr),zr(n,o);s&&(zr(n,Cr),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,ni(n,1),a.uncache=1,Er(r)))}},Yr={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new Mn(e._pt,t,n,0,0,Jr);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},Xr=[1,0,0,1,0,0],Zr={},Qr=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},$r=function(e){var t=jr(e,Cr);return Qr(t)?Xr:t.substr(7).match(O).map(H)},ei=function(e,t){var n=e._gsap||ve(e),r=e.style,i=$r(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?Xr:i):(i===Xr&&!e.offsetParent&&e!==Yn&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Yn.appendChild(e)),i=$r(e),s?r.display=s:zr(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Yn.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},ti=function(e,t,n,r,i,a){var o=e._gsap,s=i||ei(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==Xr&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=Lr(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[wr]=`0px 0px`,a&&(Br(a,o,`xOrigin`,c,y),Br(a,o,`yOrigin`,l,b),Br(a,o,`xOffset`,u,o.xOffset),Br(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},ni=function(e,t){var r=e._gsap||new tn(e);if(`x`in r&&!t&&!r.uncache)return r;var i=e.style,a=r.scaleX<0,o=`px`,s=`deg`,c=getComputedStyle(e),l=jr(e,wr)||`0`,u=d=f=h=g=_=v=y=b=0,d,f,p=m=1,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,ee,N,P,te,ne,F,re,I,L;return r.svg=!!(e.getCTM&&Rr(e)),c.translate&&((c.translate!==`none`||c.scale!==`none`||c.rotate!==`none`)&&(i[Cr]=(c.translate===`none`?``:`translate3d(`+(c.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(c.rotate===`none`?``:`rotate(`+c.rotate+`) `)+(c.scale===`none`?``:`scale(`+c.scale.split(` `).join(`,`)+`) `)+(c[Cr]===`none`?``:c[Cr])),i.scale=i.rotate=i.translate=`none`),C=ei(e,r.svg),r.svg&&(r.uncache?(N=e.getBBox(),l=r.xOrigin-N.x+`px `+(r.yOrigin-N.y)+`px`,ee=``):ee=!t&&e.getAttribute(`data-svg-origin`),ti(e,ee||l,!!ee||r.originIsAbsolute,r.smooth!==!1,C)),x=r.xOrigin||0,S=r.yOrigin||0,C!==Xr&&(D=C[0],O=C[1],k=C[2],A=C[3],u=j=C[4],d=M=C[5],C.length===6?(p=Math.sqrt(D*D+O*O),m=Math.sqrt(A*A+k*k),h=D||O?ir(O,D)*nr:0,v=k||A?ir(k,A)*nr+h:0,v&&(m*=Math.abs(Math.cos(v*rr))),r.svg&&(u-=x-(x*D+S*k),d-=S-(x*O+S*A))):(L=C[6],re=C[7],te=C[8],ne=C[9],F=C[10],I=C[11],u=C[12],d=C[13],f=C[14],w=ir(L,F),g=w*nr,w&&(T=Math.cos(-w),E=Math.sin(-w),ee=j*T+te*E,N=M*T+ne*E,P=L*T+F*E,te=j*-E+te*T,ne=M*-E+ne*T,F=L*-E+F*T,I=re*-E+I*T,j=ee,M=N,L=P),w=ir(-k,F),_=w*nr,w&&(T=Math.cos(-w),E=Math.sin(-w),ee=D*T-te*E,N=O*T-ne*E,P=k*T-F*E,I=A*E+I*T,D=ee,O=N,k=P),w=ir(O,D),h=w*nr,w&&(T=Math.cos(w),E=Math.sin(w),ee=D*T+O*E,N=j*T+M*E,O=O*T-D*E,M=M*T-j*E,D=ee,j=N),g&&Math.abs(g)+Math.abs(h)>359.9&&(g=h=0,_=180-_),p=H(Math.sqrt(D*D+O*O+k*k)),m=H(Math.sqrt(M*M+L*L)),w=ir(j,M),v=Math.abs(w)>2e-4?w*nr:0,b=I?1/(I<0?-I:I):0),r.svg&&(ee=e.getAttribute(`transform`),r.forceCSS=e.setAttribute(`transform`,``)||!Qr(jr(e,Cr)),ee&&e.setAttribute(`transform`,ee))),Math.abs(v)>90&&Math.abs(v)<270&&(a?(p*=-1,v+=h<=0?180:-180,h+=h<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t||=r.uncache,r.x=u-((r.xPercent=u&&(!t&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+o,r.y=d-((r.yPercent=d&&(!t&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+o,r.z=f+o,r.scaleX=H(p),r.scaleY=H(m),r.rotation=H(h)+s,r.rotationX=H(g)+s,r.rotationY=H(_)+s,r.skewX=v+s,r.skewY=y+s,r.transformPerspective=b+o,(r.zOrigin=parseFloat(l.split(` `)[2])||!t&&r.zOrigin||0)&&(i[wr]=ri(l)),r.xOffset=r.yOffset=0,r.force3D=n.force3D,r.renderTransform=r.svg?ui:kr?li:ai,r.uncache=0,r},ri=function(e){return(e=e.split(` `))[0]+` `+e[1]},ii=function(e,t,n){var r=at(t);return H(parseFloat(t)+parseFloat(Ur(e,`x`,n+`px`,r)))+r},ai=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,li(e,t)},oi=`0deg`,si=`0px`,ci=`) `,li=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==oi||l!==oi)){var x=parseFloat(l)*rr,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*rr,w=Math.cos(x),a=ii(_,a,S*w*-v),o=ii(_,o,-Math.sin(x)*-v),s=ii(_,s,C*w*-v+v)}h!==si&&(y+=`perspective(`+h+ci),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==si||o!==si||s!==si)&&(y+=s!==si||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+ci),c!==oi&&(y+=`rotate(`+c+ci),l!==oi&&(y+=`rotateY(`+l+ci),u!==oi&&(y+=`rotateX(`+u+ci),(d!==oi||f!==oi)&&(y+=`skew(`+d+`, `+f+ci),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+ci),_.style[Cr]=y||`translate(0, 0)`},ui=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=rr,c*=rr,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=rr,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=H(b),x=H(x),S=H(S),C=H(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=Ur(f,`x`,a,`px`),y=Ur(f,`y`,o,`px`)),(p||m||h||g)&&(v=H(v+p-(p*b+m*S)+h),y=H(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=H(v+r/100*w.width),y=H(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[Cr]=w)},di=function(e,t,n,r,i){var a=360,o=h(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?nr:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*ar)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*ar)%a-~~(s/a)*a)),e._pt=u=new Mn(e._pt,t,n,r,s,dr),u.e=c,u.u=`deg`,e._props.push(n),u},fi=function(e,t){for(var n in t)e[n]=t[n];return e},pi=function(e,t,n){var r=fi({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[Cr]=t,o=ni(n,1),zr(n,Cr),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[Cr],a[Cr]=t,o=ni(n,1),a[Cr]=c),tr)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=at(c),p=at(l),u=f===p?parseFloat(c):Ur(n,s,c,p),d=parseFloat(l),e._pt=new Mn(e._pt,o,s,u,d-u,ur),e._pt.u=p||0,e._props.push(s));fi(o,r)};ye(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});Yr[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return Wr(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var mi={name:`css`,register:Pr,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,r,i,a){var o=this._props,s=e.style,c=r.vars.startAt,l,u,d,f,p,m,g,_,v,y,b,x,S,C,w,T,E;for(g in Xn||Pr(),this.styles=this.styles||Or(e),T=this.styles.props,this.tween=r,t)if(g!==`autoRound`&&(u=t[g],!(fe[g]&&cn(g,t,r,i,e,a)))){if(p=typeof u,m=Yr[g],p===`function`&&(u=u.call(r,i,e,a),p=typeof u),p===`string`&&~u.indexOf(`random(`)&&(u=Ct(u)),m)m(this,e,g,u,r)&&(w=1);else if(g.substr(0,2)===`--`)l=(getComputedStyle(e).getPropertyValue(g)+``).trim(),u+=``,Rt.lastIndex=0,Rt.test(l)||(_=at(l),v=at(u),v?_!==v&&(l=Ur(e,g,l,v)+v):_&&(u+=_)),this.add(s,`setProperty`,l,u,i,a,0,0,g),o.push(g),T.push(g,0,s[g]);else if(p!==`undefined`){if(c&&g in c?(l=typeof c[g]==`function`?c[g].call(r,i,e,a):c[g],h(l)&&~l.indexOf(`random(`)&&(l=Ct(l)),at(l+``)||l===`auto`||(l+=n.units[g]||at(Wr(e,g))||``),(l+``).charAt(1)===`=`&&(l=Wr(e,g))):l=Wr(e,g),f=parseFloat(l),y=p===`string`&&u.charAt(1)===`=`&&u.substr(0,2),y&&(u=u.substr(2)),d=parseFloat(u),g in lr&&(g===`autoAlpha`&&(f===1&&Wr(e,`visibility`)===`hidden`&&d&&(f=0),T.push(`visibility`,0,s.visibility),Br(this,s,`visibility`,f?`inherit`:`hidden`,d?`inherit`:`hidden`,!d)),g!==`scale`&&g!==`transform`&&(g=lr[g],~g.indexOf(`,`)&&(g=g.split(`,`)[0]))),b=g in tr,b){if(this.styles.save(g),E=u,p===`string`&&u.substring(0,6)===`var(--`){if(u=jr(e,u.substring(4,u.indexOf(`)`))),u.substring(0,5)===`calc(`){var D=e.style.perspective;e.style.perspective=u,u=jr(e,`perspective`),D?e.style.perspective=D:zr(e,`perspective`)}d=parseFloat(u)}if(x||(S=e._gsap,S.renderTransform&&!t.parseTransform||ni(e,t.parseTransform),C=t.smoothOrigin!==!1&&S.smooth,x=this._pt=new Mn(this._pt,s,Cr,0,1,S.renderTransform,S,0,-1),x.dep=1),g===`scale`)this._pt=new Mn(this._pt,S,`scaleY`,S.scaleY,(y?be(S.scaleY,y+d):d)-S.scaleY||0,ur),this._pt.u=0,o.push(`scaleY`,g),g+=`X`;else if(g===`transformOrigin`){T.push(wr,0,s[wr]),u=qr(u),S.svg?ti(e,u,0,C,0,this):(v=parseFloat(u.split(` `)[2])||0,v!==S.zOrigin&&Br(this,S,`zOrigin`,S.zOrigin,v),Br(this,s,g,ri(l),ri(u)));continue}else if(g===`svgOrigin`){ti(e,u,1,C,0,this);continue}else if(g in Zr){di(this,S,g,f,y?be(f,y+u):u);continue}else if(g===`smoothOrigin`){Br(this,S,`smooth`,S.smooth,u);continue}else if(g===`force3D`){S[g]=u;continue}else if(g===`transform`){pi(this,u,e);continue}}else g in s||(g=Nr(g)||g);if(b||(d||d===0)&&(f||f===0)&&!cr.test(u)&&g in s)_=(l+``).substr((f+``).length),d||=0,v=at(u)||(g in n.units?n.units[g]:_),_!==v&&(f=Ur(e,g,l,v)),this._pt=new Mn(this._pt,b?S:s,g,f,(y?be(f,y+d):d)-f,!b&&(v===`px`||g===`zIndex`)&&t.autoRound!==!1?mr:ur),this._pt.u=v||0,b&&E!==u?(this._pt.b=l,this._pt.e=E,this._pt.r=pr):_!==v&&v!==`%`&&(this._pt.b=l,this._pt.r=fr);else if(g in s)Gr.call(this,e,g,l,y?y+u:u);else if(g in e)this.add(e,g,l||e[g],y?y+u:u,i,a);else if(g!==`parseTransform`){ie(g,u);continue}b||(g in s?T.push(g,0,s[g]):typeof e[g]==`function`?T.push(g,2,e[g]()):T.push(g,1,l||e[g])),o.push(g)}}w&&jn(this)},render:function(e,t){if(t.tween._time||!$n())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Wr,aliases:lr,getSetter:function(e,t,n){var r=lr[t];return r&&r.indexOf(`,`)<0&&(t=r),t in tr&&t!==wr&&(e._gsap.x||Wr(e,`x`))?n&&Qn===n?t===`scale`?br:yr:(Qn=n||{})&&(t===`scale`?xr:Sr):e.style&&!v(e.style[t])?_r:~t.indexOf(`-`)?vr:Cn(e,t)},core:{_removeProperty:zr,_getMatrix:ei}};Kn.utils.checkPrefix=Nr,Kn.core.getStyleSaver=Or,(function(e,t,r,i){var a=ye(e+`,`+t+`,`+r,function(e){tr[e]=1});ye(t,function(e){n.units[e]=`deg`,Zr[e]=1}),lr[a[13]]=e+`,`+t,ye(i,function(e){var t=e.split(`:`);lr[t[1]]=a[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),ye(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){n.units[e]=`px`}),Kn.registerPlugin(mi);var hi=Kn.registerPlugin(mi)||Kn;hi.core.Tween;function gi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _i(e,t,n){return t&&gi(e.prototype,t),n&&gi(e,n),e}var vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji=function(){return vi||typeof window<`u`&&(vi=window.gsap)&&vi.registerPlugin&&vi},Mi=1,Ni=[],q=[],Pi=[],Fi=Date.now,Ii=function(e,t){return t},Li=function(){var e=Ei.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,q),r.push.apply(r,Pi),q=n,Pi=r,Ii=function(e,n){return t[e](n)}},Ri=function(e,t){return~Pi.indexOf(e)&&Pi[Pi.indexOf(e)+1][t]},zi=function(e){return!!~Di.indexOf(e)},Bi=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:r!==!1,capture:!!i})},Vi=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Hi=`scrollLeft`,Ui=`scrollTop`,Wi=function(){return Oi&&Oi.isPressed||q.cache++},Gi=function(e,t){var n=function n(r){if(r||r===0){Mi&&(bi.history.scrollRestoration=`manual`);var i=Oi&&Oi.isPressed;r=n.v=Math.round(r)||(Oi&&Oi.iOS?1:0),e(r),n.cacheID=q.cache,i&&Ii(`ss`,r)}else (t||q.cache!==n.cacheID||Ii(`ref`))&&(n.cacheID=q.cache,n.v=e());return n.v+n.offset};return n.offset=0,e&&n},Ki={s:Hi,p:`left`,p2:`Left`,os:`right`,os2:`Right`,d:`width`,d2:`Width`,a:`x`,sc:Gi(function(e){return arguments.length?bi.scrollTo(e,qi.sc()):bi.pageXOffset||xi[Hi]||Si[Hi]||Ci[Hi]||0})},qi={s:Ui,p:`top`,p2:`Top`,os:`bottom`,os2:`Bottom`,d:`height`,d2:`Height`,a:`y`,op:Ki,sc:Gi(function(e){return arguments.length?bi.scrollTo(Ki.sc(),e):bi.pageYOffset||xi[Ui]||Si[Ui]||Ci[Ui]||0})},Ji=function(e,t){return(t&&t._ctx&&t._ctx.selector||vi.utils.toArray)(e)[0]||(typeof e==`string`&&vi.config().nullTargetWarn!==!1?console.warn(`Element not found:`,e):null)},Yi=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Xi=function(e,t){var n=t.s,r=t.sc;zi(e)&&(e=xi.scrollingElement||Si);var i=q.indexOf(e),a=r===qi.sc?1:2;!~i&&(i=q.push(e)-1),q[i+a]||Bi(e,`scroll`,Wi);var o=q[i+a],s=o||(q[i+a]=Gi(Ri(e,n),!0)||(zi(e)?r:Gi(function(t){return arguments.length?e[n]=t:e[n]})));return s.target=e,o||(s.smooth=vi.getProperty(e,`scrollBehavior`)===`smooth`),s},Zi=function(e,t,n){var r=e,i=e,a=Fi(),o=a,s=t||50,c=Math.max(500,s*3),l=function(e,t){var c=Fi();t||c-a>s?(i=r,r=e,o=a,a=c):n?r+=e:r=i+(e-i)/(c-o)*(a-o)};return{update:l,reset:function(){i=r=n?0:r,o=a=0},getVelocity:function(e){var t=o,s=i,u=Fi();return(e||e===0)&&e!==r&&l(e),a===o||u-o>c?0:(r+(n?s:-s))/((n?u:a)-t)*1e3}}},Qi=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},$i=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},ea=function(){Ei=vi.core.globals().ScrollTrigger,Ei&&Ei.core&&Li()},ta=function(e){return vi=e||ji(),!yi&&vi&&typeof document<`u`&&document.body&&(bi=window,xi=document,Si=xi.documentElement,Ci=xi.body,Di=[bi,xi,Si,Ci],vi.utils.clamp,Ai=vi.core.context||function(){},Ti=`onpointerenter`in Ci?`pointer`:`mouse`,wi=na.isTouch=bi.matchMedia&&bi.matchMedia(`(hover: none), (pointer: coarse)`).matches?1:`ontouchstart`in bi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ki=na.eventTypes=(`ontouchstart`in Si?`touchstart,touchmove,touchcancel,touchend`:`onpointerdown`in Si?`pointerdown,pointermove,pointercancel,pointerup`:`mousedown,mousemove,mouseup,mouseup`).split(`,`),setTimeout(function(){return Mi=0},500),yi=1),Ei||ea(),yi};Ki.op=qi,q.cache=0;var na=function(){function e(e){this.init(e)}var t=e.prototype;return t.init=function(e){yi||ta(vi)||console.warn(`Please gsap.registerPlugin(Observer)`),Ei||ea();var t=e.tolerance,n=e.dragMinimum,r=e.type,i=e.target,a=e.lineHeight,o=e.debounce,s=e.preventDefault,c=e.onStop,l=e.onStopDelay,u=e.ignore,d=e.wheelSpeed,f=e.event,p=e.onDragStart,m=e.onDragEnd,h=e.onDrag,g=e.onPress,_=e.onRelease,v=e.onRight,y=e.onLeft,b=e.onUp,x=e.onDown,S=e.onChangeX,C=e.onChangeY,w=e.onChange,T=e.onToggleX,E=e.onToggleY,D=e.onHover,O=e.onHoverEnd,k=e.onMove,A=e.ignoreCheck,j=e.isNormalizer,M=e.onGestureStart,ee=e.onGestureEnd,N=e.onWheel,P=e.onEnable,te=e.onDisable,ne=e.onClick,F=e.scrollSpeed,re=e.capture,I=e.allowClicks,L=e.lockAxis,ie=e.onLockAxis;this.target=i=Ji(i)||Si,this.vars=e,u&&=vi.utils.toArray(u),t||=1e-9,n||=0,d||=1,F||=1,r||=`wheel,touch,pointer`,o=o!==!1,a||=parseFloat(bi.getComputedStyle(Ci).lineHeight)||22;var R,ae,oe,se,z,ce,le,B=this,ue=0,de=0,fe=e.passive||!s&&e.passive!==!1,pe=Xi(i,Ki),me=Xi(i,qi),he=pe(),ge=me(),_e=~r.indexOf(`touch`)&&!~r.indexOf(`pointer`)&&ki[0]===`pointerdown`,ve=zi(i),V=i.ownerDocument||xi,ye=[0,0,0],H=[0,0,0],U=0,be=function(){return U=Fi()},xe=function(e,t){return(B.event=e)&&u&&Yi(e.target,u)||t&&_e&&e.pointerType!==`touch`||A&&A(e,t)},Se=function(){B._vx.reset(),B._vy.reset(),ae.pause(),c&&c(B)},Ce=function(){var e=B.deltaX=$i(ye),n=B.deltaY=$i(H),r=Math.abs(e)>=t,i=Math.abs(n)>=t;w&&(r||i)&&w(B,e,n,ye,H),r&&(v&&B.deltaX>0&&v(B),y&&B.deltaX<0&&y(B),S&&S(B),T&&B.deltaX<0!=ue<0&&T(B),ue=B.deltaX,ye[0]=ye[1]=ye[2]=0),i&&(x&&B.deltaY>0&&x(B),b&&B.deltaY<0&&b(B),C&&C(B),E&&B.deltaY<0!=de<0&&E(B),de=B.deltaY,H[0]=H[1]=H[2]=0),(se||oe)&&(k&&k(B),oe&&=(p&&oe===1&&p(B),h&&h(B),0),se=!1),ce&&!(ce=!1)&&ie&&ie(B),z&&=(N(B),!1),R=0},we=function(e,t,n){ye[n]+=e,H[n]+=t,B._vx.update(e),B._vy.update(t),o?R||=requestAnimationFrame(Ce):Ce()},Te=function(e,t){L&&!le&&(B.axis=le=Math.abs(e)>Math.abs(t)?`x`:`y`,ce=!0),le!==`y`&&(ye[2]+=e,B._vx.update(e,!0)),le!==`x`&&(H[2]+=t,B._vy.update(t,!0)),o?R||=requestAnimationFrame(Ce):Ce()},Ee=function(e){if(!xe(e,1)){e=Qi(e,s);var t=e.clientX,r=e.clientY,i=t-B.x,a=r-B.y,o=B.isDragging;B.x=t,B.y=r,(o||(i||a)&&(Math.abs(B.startX-t)>=n||Math.abs(B.startY-r)>=n))&&(oe||=o?2:1,o||(B.isDragging=!0),Te(i,a))}},W=B.onPress=function(e){xe(e,1)||e&&e.button||(B.axis=le=null,ae.pause(),B.isPressed=!0,e=Qi(e),ue=de=0,B.startX=B.x=e.clientX,B.startY=B.y=e.clientY,B._vx.reset(),B._vy.reset(),Bi(j?i:V,ki[1],Ee,fe,!0),B.deltaX=B.deltaY=0,g&&g(B))},De=B.onRelease=function(e){if(!xe(e,1)){Vi(j?i:V,ki[1],Ee,!0);var t=!isNaN(B.y-B.startY),n=B.isDragging,r=n&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),a=Qi(e);!r&&t&&(B._vx.reset(),B._vy.reset(),s&&I&&vi.delayedCall(.08,function(){if(Fi()-U>300&&!e.defaultPrevented){if(e.target.click)e.target.click();else if(V.createEvent){var t=V.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,bi,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(t)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,c&&n&&!j&&ae.restart(!0),oe&&Ce(),m&&n&&m(B),_&&_(B,r)}},G=function(e){return e.touches&&e.touches.length>1&&(B.isGesturing=!0)&&M(e,B.isDragging)},Oe=function(){return(B.isGesturing=!1)||ee(B)},ke=function(e){if(!xe(e)){var t=pe(),n=me();we((t-he)*F,(n-ge)*F,1),he=t,ge=n,c&&ae.restart(!0)}},Ae=function(e){if(!xe(e)){e=Qi(e,s),N&&(z=!0);var t=(e.deltaMode===1?a:e.deltaMode===2?bi.innerHeight:1)*d;we(e.deltaX*t,e.deltaY*t,0),c&&!j&&ae.restart(!0)}},je=function(e){if(!xe(e)){var t=e.clientX,n=e.clientY,r=t-B.x,i=n-B.y;B.x=t,B.y=n,se=!0,c&&ae.restart(!0),(r||i)&&Te(r,i)}},Me=function(e){B.event=e,D(B)},Ne=function(e){B.event=e,O(B)},Pe=function(e){return xe(e)||Qi(e,s)&&ne(B)};ae=B._dc=vi.delayedCall(l||.25,Se).pause(),B.deltaX=B.deltaY=0,B._vx=Zi(0,50,!0),B._vy=Zi(0,50,!0),B.scrollX=pe,B.scrollY=me,B.isDragging=B.isGesturing=B.isPressed=!1,Ai(this),B.enable=function(e){return B.isEnabled||(Bi(ve?V:i,`scroll`,Wi),r.indexOf(`scroll`)>=0&&Bi(ve?V:i,`scroll`,ke,fe,re),r.indexOf(`wheel`)>=0&&Bi(i,`wheel`,Ae,fe,re),(r.indexOf(`touch`)>=0&&wi||r.indexOf(`pointer`)>=0)&&(Bi(i,ki[0],W,fe,re),Bi(V,ki[2],De),Bi(V,ki[3],De),I&&Bi(i,`click`,be,!0,!0),ne&&Bi(i,`click`,Pe),M&&Bi(V,`gesturestart`,G),ee&&Bi(V,`gestureend`,Oe),D&&Bi(i,Ti+`enter`,Me),O&&Bi(i,Ti+`leave`,Ne),k&&Bi(i,Ti+`move`,je)),B.isEnabled=!0,B.isDragging=B.isGesturing=B.isPressed=se=oe=!1,B._vx.reset(),B._vy.reset(),he=pe(),ge=me(),e&&e.type&&W(e),P&&P(B)),B},B.disable=function(){B.isEnabled&&(Ni.filter(function(e){return e!==B&&zi(e.target)}).length||Vi(ve?V:i,`scroll`,Wi),B.isPressed&&(B._vx.reset(),B._vy.reset(),Vi(j?i:V,ki[1],Ee,!0)),Vi(ve?V:i,`scroll`,ke,re),Vi(i,`wheel`,Ae,re),Vi(i,ki[0],W,re),Vi(V,ki[2],De),Vi(V,ki[3],De),Vi(i,`click`,be,!0),Vi(i,`click`,Pe),Vi(V,`gesturestart`,G),Vi(V,`gestureend`,Oe),Vi(i,Ti+`enter`,Me),Vi(i,Ti+`leave`,Ne),Vi(i,Ti+`move`,je),B.isEnabled=B.isPressed=B.isDragging=!1,te&&te(B))},B.kill=B.revert=function(){B.disable();var e=Ni.indexOf(B);e>=0&&Ni.splice(e,1),Oi===B&&(Oi=0)},Ni.push(B),j&&zi(i)&&(Oi=B),B.enable(f)},_i(e,[{key:`velocityX`,get:function(){return this._vx.getVelocity()}},{key:`velocityY`,get:function(){return this._vy.getVelocity()}}]),e}();na.version=`3.15.0`,na.create=function(e){return new na(e)},na.register=ta,na.getAll=function(){return Ni.slice()},na.getById=function(e){return Ni.filter(function(t){return t.vars.id===e})[0]},ji()&&vi.registerPlugin(na);var J,ra,Y,X,ia,Z,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na=1,Pa=Date.now,Fa=Pa(),Ia=0,La=0,Ra=function(e,t,n){var r=eo(e)&&(e.substr(0,6)===`clamp(`||e.indexOf(`max`)>-1);return n[`_`+t+`Clamp`]=r,r?e.substr(6,e.length-7):e},za=function(e,t){return t&&(!eo(e)||e.substr(0,6)!==`clamp(`)?`clamp(`+e+`)`:e},Ba=function e(){return La&&requestAnimationFrame(e)},Va=function(){return fa=1},Ha=function(){return fa=0},Ua=function(e){return e},Wa=function(e){return Math.round(e*1e5)/1e5||0},Ga=function(){return typeof window<`u`},Ka=function(){return J||Ga()&&(J=window.gsap)&&J.registerPlugin&&J},qa=function(e){return!!~aa.indexOf(e)},Ja=function(e){return(e===`Height`?ka:Y[`inner`+e])||ia[`client`+e]||Z[`client`+e]},Ya=function(e){return Ri(e,`getBoundingClientRect`)||(qa(e)?function(){return Ss.width=Y.innerWidth,Ss.height=ka,Ss}:function(){return Eo(e)})},Xa=function(e,t,n){var r=n.d,i=n.d2,a=n.a;return(a=Ri(e,`getBoundingClientRect`))?function(){return a()[r]}:function(){return(t?Ja(i):e[`client`+i])||0}},Za=function(e,t){return!t||~Pi.indexOf(e)?Ya(e):function(){return Ss}},Qa=function(e,t){var n=t.s,r=t.d2,i=t.d,a=t.a;return Math.max(0,(n=`scroll`+r)&&(a=Ri(e,n))?a()-Ya(e)()[i]:qa(e)?(ia[n]||Z[n])-Ja(r):e[n]-e[`offset`+r])},$a=function(e,t){for(var n=0;n<_a.length;n+=3)(!t||~t.indexOf(_a[n+1]))&&e(_a[n],_a[n+1],_a[n+2])},eo=function(e){return typeof e==`string`},to=function(e){return typeof e==`function`},no=function(e){return typeof e==`number`},ro=function(e){return typeof e==`object`},io=function(e,t,n){return e&&e.progress(+!t)&&n&&e.pause()},ao=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},oo=Math.abs,so=`left`,co=`top`,lo=`right`,uo=`bottom`,fo=`width`,po=`height`,mo=`Right`,ho=`Left`,go=`Top`,_o=`Bottom`,vo=`padding`,yo=`margin`,bo=`Width`,xo=`Height`,So=`px`,Co=function(e){return Y.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},wo=function(e){var t=Co(e).position;e.style.position=t===`absolute`||t===`fixed`?t:`relative`},To=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Eo=function(e,t){var n=t&&Co(e)[pa]!==`matrix(1, 0, 0, 1, 0, 0)`&&J.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},Do=function(e,t){var n=t.d2;return e[`offset`+n]||e[`client`+n]||0},Oo=function(e){var t=[],n=e.labels,r=e.duration(),i;for(i in n)t.push(n[i]/r);return t},ko=function(e){return function(t){return J.utils.snap(Oo(e),t)}},Ao=function(e){var t=J.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(e,t){return e-t});return n?function(e,r,i){i===void 0&&(i=.001);var a;if(!r)return t(e);if(r>0){for(e-=i,a=0;a<n.length;a++)if(n[a]>=e)return n[a];return n[a-1]}else for(a=n.length,e+=i;a--;)if(n[a]<=e)return n[a];return n[0]}:function(n,r,i){i===void 0&&(i=.001);var a=t(n);return!r||Math.abs(a-n)<i||a-n<0==r<0?a:t(r<0?n-e:n+e)}},jo=function(e){return function(t,n){return Ao(Oo(e))(t,n.direction)}},Mo=function(e,t,n,r){return n.split(`,`).forEach(function(n){return e(t,n,r)})},No=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})},Po=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Fo=function(e,t,n){n&&=n.wheelHandler,n&&(e(t,`wheel`,n),e(t,`touchmove`,n))},Io={startColor:`green`,endColor:`red`,indent:0,fontSize:`16px`,fontWeight:`normal`},Lo={toggleActions:`play`,anticipatePin:0},Ro={top:0,left:0,center:.5,bottom:1,right:1},zo=function(e,t){if(eo(e)){var n=e.indexOf(`=`),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf(`%`)>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Ro?Ro[e]*t:~e.indexOf(`%`)?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Bo=function(e,t,n,r,i,a,o,s){var c=i.startColor,l=i.endColor,u=i.fontSize,d=i.indent,f=i.fontWeight,p=X.createElement(`div`),m=qa(n)||Ri(n,`pinType`)===`fixed`,h=e.indexOf(`scroller`)!==-1,g=m?Z:n.tagName===`IFRAME`?n.contentDocument.body:n,_=e.indexOf(`start`)!==-1,v=_?c:l,y=`border-color:`+v+`;font-size:`+u+`;color:`+v+`;font-weight:`+f+`;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;return y+=`position:`+((h||s)&&m?`fixed;`:`absolute;`),(h||s||!m)&&(y+=(r===qi?lo:uo)+`:`+(a+parseFloat(d))+`px;`),o&&(y+=`box-sizing:border-box;text-align:left;width:`+o.offsetWidth+`px;`),p._isStart=_,p.setAttribute(`class`,`gsap-marker-`+e+(t?` marker-`+t:``)),p.style.cssText=y,p.innerText=t||t===0?e+`-`+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p[`offset`+r.op.d2],Vo(p,0,r,_),p},Vo=function(e,t,n,r){var i={display:`block`},a=n[r?`os2`:`p2`],o=n[r?`p2`:`os2`];e._isFlipped=r,i[n.a+`Percent`]=r?-100:0,i[n.a]=r?`1px`:0,i[`border`+a+bo]=1,i[`border`+o+bo]=0,i[n.p]=t+`px`,J.set(e,i)},Q=[],Ho={},Uo,Wo=function(){return Pa()-Ia>34&&(Uo||=requestAnimationFrame(ps))},Go=function(){(!xa||!xa.isPressed||xa.startX>Z.clientWidth)&&(q.cache++,xa?Uo||=requestAnimationFrame(ps):ps(),Ia||Zo(`scrollStart`),Ia=Pa())},Ko=function(){wa=Y.innerWidth,Ca=Y.innerHeight},qo=function(e){q.cache++,(e===!0||!da&&!ba&&!X.fullscreenElement&&!X.webkitFullscreenElement&&(!Sa||wa!==Y.innerWidth||Math.abs(Y.innerHeight-Ca)>Y.innerHeight*.25))&&oa.restart(!0)},Jo={},Yo=[],Xo=function e(){return Po($,`scrollEnd`,e)||ls(!0)},Zo=function(e){return Jo[e]&&Jo[e].map(function(e){return e()})||Yo},Qo=[],$o=function(e){for(var t=0;t<Qo.length;t+=5)(!e||Qo[t+4]&&Qo[t+4].query===e)&&(Qo[t].style.cssText=Qo[t+1],Qo[t].getBBox&&Qo[t].setAttribute(`transform`,Qo[t+2]||``),Qo[t+3].uncache=1)},es=function(){return q.forEach(function(e){return to(e)&&++e.cacheID&&(e.rec=e())})},ts=function(e,t){var n;for(ma=0;ma<Q.length;ma++)n=Q[ma],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Aa=!0,t&&$o(t),t||Zo(`revert`)},ns=function(e,t){q.cache++,(t||!rs)&&q.forEach(function(e){return to(e)&&e.cacheID++&&(e.rec=0)}),eo(e)&&(Y.history.scrollRestoration=Da=e)},rs,is=0,as,os=function(){if(as!==is){var e=as=is;requestAnimationFrame(function(){return e===is&&ls(!0)})}},ss=function(){Z.appendChild(Oa),ka=!xa&&Oa.offsetHeight||Y.innerHeight,Z.removeChild(Oa)},cs=function(e){return sa(`.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`).forEach(function(t){return t.style.display=e?`none`:`block`})},ls=function(e,t){if(ia=X.documentElement,Z=X.body,aa=[Y,X,ia,Z],Ia&&!e&&!Aa){No($,`scrollEnd`,Xo);return}ss(),rs=$.isRefreshing=!0,Aa||es();var n=Zo(`refreshInit`);va&&$.sort(),t||ts(),q.forEach(function(e){to(e)&&(e.smooth&&(e.target.style.scrollBehavior=`auto`),e(0))}),Q.slice(0).forEach(function(e){return e.refresh()}),Aa=!1,Q.forEach(function(e){if(e._subPinOffset&&e.pin){var t=e.vars.horizontal?`offsetWidth`:`offsetHeight`,n=e.pin[t];e.revert(!0,1),e.adjustPinSpacing(e.pin[t]-n),e.refresh()}}),ja=1,cs(!0),Q.forEach(function(e){var t=Qa(e.scroller,e._dir),n=e.vars.end===`max`||e._endClamp&&e.end>t,r=e._startClamp&&e.start>=t;(n||r)&&e.setPositions(r?t-1:e.start,n?Math.max(r?t:e.start+1,t):e.end,!0)}),cs(!1),ja=0,n.forEach(function(e){return e&&e.render&&e.render(-1)}),q.forEach(function(e){to(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior=`smooth`}),e.rec&&e(e.rec))}),ns(Da,1),oa.pause(),is++,rs=2,ps(2),Q.forEach(function(e){return to(e.vars.onRefresh)&&e.vars.onRefresh(e)}),rs=$.isRefreshing=!1,Zo(`refresh`)},us=0,ds=1,fs,ps=function(e){if(e===2||!rs&&!Aa){$.isUpdating=!0,fs&&fs.update(0);var t=Q.length,n=Pa(),r=n-Fa>=50,i=t&&Q[0].scroll();if(ds=us>i?-1:1,rs||(us=i),r&&(Ia&&!fa&&n-Ia>200&&(Ia=0,Zo(`scrollEnd`)),la=Fa,Fa=n),ds<0){for(ma=t;ma-- >0;)Q[ma]&&Q[ma].update(0,r);ds=1}else for(ma=0;ma<t;ma++)Q[ma]&&Q[ma].update(0,r);$.isUpdating=!1}Uo=0},ms=[so,co,uo,lo,yo+_o,yo+mo,yo+go,yo+ho,`display`,`flexShrink`,`float`,`zIndex`,`gridColumnStart`,`gridColumnEnd`,`gridRowStart`,`gridRowEnd`,`gridArea`,`justifySelf`,`alignSelf`,`placeSelf`,`order`],hs=ms.concat([fo,po,`boxSizing`,`max`+bo,`max`+xo,`position`,yo,vo,vo+go,vo+mo,vo+_o,vo+ho]),gs=function(e,t,n){ys(n);var r=e._gsap;if(r.spacerIsNative)ys(r.spacerState);else if(e._gsap.swappedIn){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}e._gsap.swappedIn=!1},_s=function(e,t,n,r){if(!e._gsap.swappedIn){for(var i=ms.length,a=t.style,o=e.style,s;i--;)s=ms[i],a[s]=n[s];a.position=n.position===`absolute`?`absolute`:`relative`,n.display===`inline`&&(a.display=`inline-block`),o[uo]=o[lo]=`auto`,a.flexBasis=n.flexBasis||`auto`,a.overflow=`visible`,a.boxSizing=`border-box`,a[fo]=Do(e,Ki)+So,a[po]=Do(e,qi)+So,a[vo]=o[yo]=o[co]=o[so]=`0`,ys(r),o[fo]=o[`max`+bo]=n[fo],o[po]=o[`max`+xo]=n[po],o[vo]=n[vo],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},vs=/([A-Z])/g,ys=function(e){if(e){var t=e.t.style,n=e.length,r=0,i,a;for((e.t._gsap||J.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],i=e[r],a?t[i]=a:t[i]&&t.removeProperty(i.replace(vs,`-$1`).toLowerCase())}},bs=function(e){for(var t=hs.length,n=e.style,r=[],i=0;i<t;i++)r.push(hs[i],n[hs[i]]);return r.t=e,r},xs=function(e,t,n){for(var r=[],i=e.length,a=n?8:0,o;a<i;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Ss={left:0,top:0},Cs=function(e,t,n,r,i,a,o,s,c,l,u,d,f,p){to(e)&&(e=e(s)),eo(e)&&e.substr(0,3)===`max`&&(e=d+(e.charAt(4)===`=`?zo(`0`+e.substr(3),n):0));var m=f?f.time():0,h,g,_;if(f&&f.seek(0),isNaN(e)||(e=+e),no(e))f&&(e=J.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&Vo(o,n,r,!0);else{to(t)&&(t=t(s));var v=(e||`0`).split(` `),y,b,x,S;_=Ji(t,s)||Z,y=Eo(_)||{},(!y||!y.left&&!y.top)&&Co(_).display===`none`&&(S=_.style.display,_.style.display=`block`,y=Eo(_),S?_.style.display=S:_.style.removeProperty(`display`)),b=zo(v[0],y[r.d]),x=zo(v[1]||`0`,n),e=y[r.p]-c[r.p]-l+b+i-x,o&&Vo(o,x,r,n-x<20||o._isStart&&x>20),n-=n-x}if(p&&(s[p]=e||-.001,e<0&&(e=0)),a){var C=e+n,w=a._isStart;h=`scroll`+r.d2,Vo(a,C,r,w&&C>20||!w&&(u?Math.max(Z[h],ia[h]):a.parentNode[h])<=C+1),u&&(c=Eo(o),u&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+So))}return f&&_&&(h=Eo(_),f.seek(d),g=Eo(_),f._caScrollDist=h[r.p]-g[r.p],e=e/f._caScrollDist*d),f&&f.seek(m),f?e:Math.round(e)},ws=/(webkit|moz|length|cssText|inset)/i,Ts=function(e,t,n,r){if(e.parentNode!==t){var i=e.style,a,o;if(t===Z){for(a in e._stOrig=i.cssText,o=Co(e),o)!+a&&!ws.test(a)&&o[a]&&typeof i[a]==`string`&&a!==`0`&&(i[a]=o[a]);i.top=n,i.left=r}else i.cssText=e._stOrig;J.core.getCache(e).uncache=1,t.appendChild(e)}},Es=function(e,t,n){var r=t,i=r;return function(t){var a=Math.round(e());return a!==r&&a!==i&&Math.abs(a-r)>3&&Math.abs(a-i)>3&&(t=a,n&&n()),i=r,r=Math.round(t),r}},Ds=function(e,t,n){var r={};r[t.p]=`+=`+n,J.set(e,r)},Os=function(e,t){var n=Xi(e,t),r=`_scroll`+t.p2,i=function t(i,a,o,s,c){var l=t.tween,u=a.onComplete,d={};o||=n();var f=Es(n,o,function(){l.kill(),t.tween=0});return c=s&&c||0,s||=i-o,l&&l.kill(),a[r]=i,a.inherit=!1,a.modifiers=d,d[r]=function(){return f(o+s*l.ratio+c*l.ratio*l.ratio)},a.onUpdate=function(){q.cache++,t.tween&&ps()},a.onComplete=function(){t.tween=0,u&&u.call(l)},l=t.tween=J.to(e,a),l};return e[r]=n,n.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},No(e,`wheel`,n.wheelHandler),$.isTouch&&No(e,`touchmove`,n.wheelHandler),i},$=function(){function e(t,n){ra||e.register(J)||console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),Ea(this),this.init(t,n)}var t=e.prototype;return t.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!La){this.update=this.refresh=this.kill=Ua;return}t=To(eo(t)||no(t)||t.nodeType?{trigger:t}:t,Lo);var r=t,i=r.onUpdate,a=r.toggleClass,o=r.id,s=r.onToggle,c=r.onRefresh,l=r.scrub,u=r.trigger,d=r.pin,f=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,h=r.onScrubComplete,g=r.onSnapComplete,_=r.once,v=r.snap,y=r.pinReparent,b=r.pinSpacer,x=r.containerAnimation,S=r.fastScrollEnd,C=r.preventOverlaps,w=t.horizontal||t.containerAnimation&&t.horizontal!==!1?Ki:qi,T=!l&&l!==0,E=Ji(t.scroller||Y),D=J.core.getCache(E),O=qa(E),k=(`pinType`in t?t.pinType:Ri(E,`pinType`)||O&&`fixed`)===`fixed`,A=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],j=T&&t.toggleActions.split(` `),M=`markers`in t?t.markers:Lo.markers,ee=O?0:parseFloat(Co(E)[`border`+w.p2+bo])||0,N=this,P=t.onRefreshInit&&function(){return t.onRefreshInit(N)},te=Xa(E,O,w),ne=Za(E,O),F=0,re=0,I=0,L=Xi(E,w),ie,R,ae,oe,se,z,ce,le,B,ue,de,fe,pe,me,he,ge,_e,ve,V,ye,H,U,be,xe,Se,Ce,we,Te,Ee,W,De,G,Oe,ke,Ae,je,Me,Ne,Pe;if(N._startClamp=N._endClamp=!1,N._dir=w,m*=45,N.scroller=E,N.scroll=x?x.time.bind(x):L,oe=L(),N.vars=t,n||=t.animation,`refreshPriority`in t&&(va=1,t.refreshPriority===-9999&&(fs=N)),D.tweenScroll=D.tweenScroll||{top:Os(E,qi),left:Os(E,Ki)},N.tweenTo=ie=D.tweenScroll[w.p],N.scrubDuration=function(e){Oe=no(e)&&e,Oe?G?G.duration(e):G=J.to(n,{ease:`expo`,totalProgress:`+=0`,inherit:!1,duration:Oe,paused:!0,onComplete:function(){return h&&h(N)}}):(G&&G.progress(1).kill(),G=0)},n&&(n.vars.lazy=!1,n._initted&&!N.isReverted||n.vars.immediateRender!==!1&&t.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),N.animation=n.pause(),n.scrollTrigger=N,N.scrubDuration(l),W=0,o||=n.vars.id),v&&((!ro(v)||v.push)&&(v={snapTo:v}),`scrollBehavior`in Z.style&&J.set(O?[Z,ia]:E,{scrollBehavior:`auto`}),q.forEach(function(e){return to(e)&&e.target===(O?X.scrollingElement||ia:E)&&(e.smooth=!1)}),ae=to(v.snapTo)?v.snapTo:v.snapTo===`labels`?ko(n):v.snapTo===`labelsDirectional`?jo(n):v.directional===!1?J.utils.snap(v.snapTo):function(e,t){return Ao(v.snapTo)(e,Pa()-re<500?0:t.direction)},ke=v.duration||{min:.1,max:2},ke=ro(ke)?ca(ke.min,ke.max):ca(ke,ke),Ae=J.delayedCall(v.delay||Oe/2||.1,function(){var e=L(),t=Pa()-re<500,r=ie.tween;if((t||Math.abs(N.getVelocity())<10)&&!r&&!fa&&F!==e){var i=(e-z)/me,a=n&&!T?n.totalProgress():i,o=t?0:(a-De)/(Pa()-la)*1e3||0,s=J.utils.clamp(-i,1-i,oo(o/2)*o/.185),c=i+(v.inertia===!1?0:s),l,u,d=v,f=d.onStart,p=d.onInterrupt,m=d.onComplete;if(l=ae(c,N),no(l)||(l=c),u=Math.max(0,Math.round(z+l*me)),e<=ce&&e>=z&&u!==e){if(r&&!r._initted&&r.data<=oo(u-e))return;v.inertia===!1&&(s=l-i),ie(u,{duration:ke(oo(Math.max(oo(c-a),oo(l-a))*.185/o/.05||0)),ease:v.ease||`power3`,data:oo(u-e),onInterrupt:function(){return Ae.restart(!0)&&p&&ao(N,p)},onComplete:function(){N.update(),F=L(),n&&!T&&(G?G.resetTo(`totalProgress`,l,n._tTime/n._tDur):n.progress(l)),W=De=n&&!T?n.totalProgress():N.progress,g&&g(N),m&&ao(N,m)}},e,s*me,u-e-s*me),f&&ao(N,f,ie.tween)}}else N.isActive&&F!==e&&Ae.restart(!0)}).pause()),o&&(Ho[o]=N),u=N.trigger=Ji(u||d!==!0&&d),Pe=u&&u._gsap&&u._gsap.stRevert,Pe&&=Pe(N),d=d===!0?u:Ji(d),eo(a)&&(a={targets:u,className:a}),d&&(f===!1||f===yo||(f=!f&&d.parentNode&&d.parentNode.style&&Co(d.parentNode).display===`flex`?!1:vo),N.pin=d,R=J.core.getCache(d),R.spacer?he=R.pinState:(b&&(b=Ji(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),R.spacerIsNative=!!b,b&&(R.spacerState=bs(b))),R.spacer=ve=b||X.createElement(`div`),ve.classList.add(`pin-spacer`),o&&ve.classList.add(`pin-spacer-`+o),R.pinState=he=bs(d)),t.force3D!==!1&&J.set(d,{force3D:!0}),N.spacer=ve=R.spacer,Ee=Co(d),xe=Ee[f+w.os2],ye=J.getProperty(d),H=J.quickSetter(d,w.a,So),_s(d,ve,Ee),_e=bs(d)),M){fe=ro(M)?To(M,Io):Io,ue=Bo(`scroller-start`,o,E,w,fe,0),de=Bo(`scroller-end`,o,E,w,fe,0,ue),V=ue[`offset`+w.op.d2];var Fe=Ji(Ri(E,`content`)||E);le=this.markerStart=Bo(`start`,o,Fe,w,fe,V,0,x),B=this.markerEnd=Bo(`end`,o,Fe,w,fe,V,0,x),x&&(Ne=J.quickSetter([le,B],w.a,So)),!k&&!(Pi.length&&Ri(E,`fixedMarkers`)===!0)&&(wo(O?Z:E),J.set([ue,de],{force3D:!0}),Ce=J.quickSetter(ue,w.a,So),Te=J.quickSetter(de,w.a,So))}if(x){var Ie=x.vars.onUpdate,Le=x.vars.onUpdateParams;x.eventCallback(`onUpdate`,function(){N.update(0,0,1),Ie&&Ie.apply(x,Le||[])})}if(N.previous=function(){return Q[Q.indexOf(N)-1]},N.next=function(){return Q[Q.indexOf(N)+1]},N.revert=function(e,t){if(!t)return N.kill(!0);var r=e!==!1||!N.enabled,i=da;r!==N.isReverted&&(r&&(je=Math.max(L(),N.scroll.rec||0),I=N.progress,Me=n&&n.progress()),le&&[le,B,ue,de].forEach(function(e){return e.style.display=r?`none`:`block`}),r&&(da=N,N.update(r)),d&&(!y||!N.isActive)&&(r?gs(d,ve,he):_s(d,ve,Co(d),Se)),r||N.update(r),da=i,N.isReverted=r)},N.refresh=function(r,i,a,o){if(!((da||!N.enabled)&&!i)){if(d&&r&&Ia){No(e,`scrollEnd`,Xo);return}!rs&&P&&P(N),da=N,ie.tween&&!a&&(ie.tween.kill(),ie.tween=0),G&&G.pause(),p&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(e){return e.vars.immediateRender&&e.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var s=te(),l=ne(),m=x?x.duration():Qa(E,w),h=me<=.01||!me,g=0,_=o||0,v=ro(a)?a.end:t.end,b=t.endTrigger||u,S=ro(a)?a.start:t.start||(t.start===0||!u?0:d?`0 0`:`0 100%`),C=N.pinnedContainer=t.pinnedContainer&&Ji(t.pinnedContainer,N),D=u&&Math.max(0,Q.indexOf(N))||0,A=D,j,R,ae,fe,V,H,xe,Ce,Te,Ee,W,De,Oe;for(M&&ro(a)&&(De=J.getProperty(ue,w.p),Oe=J.getProperty(de,w.p));A-- >0;)H=Q[A],H.end||H.refresh(0,1)||(da=N),xe=H.pin,xe&&(xe===u||xe===d||xe===C)&&!H.isReverted&&(Ee||=[],Ee.unshift(H),H.revert(!0,!0)),H!==Q[A]&&(D--,A--);for(to(S)&&(S=S(N)),S=Ra(S,`start`,N),z=Cs(S,u,s,w,L(),le,ue,N,l,ee,k,m,x,N._startClamp&&`_startClamp`)||(d?-.001:0),to(v)&&(v=v(N)),eo(v)&&!v.indexOf(`+=`)&&(~v.indexOf(` `)?v=(eo(S)?S.split(` `)[0]:``)+v:(g=zo(v.substr(2),s),v=eo(S)?S:(x?J.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,z):z)+g,b=u)),v=Ra(v,`end`,N),ce=Math.max(z,Cs(v||(b?`100% 0`:m),b,s,w,L()+g,B,de,N,l,ee,k,m,x,N._endClamp&&`_endClamp`))||-.001,g=0,A=D;A--;)H=Q[A]||{},xe=H.pin,xe&&H.start-H._pinPush<=z&&!x&&H.end>0&&(j=H.end-(N._startClamp?Math.max(0,H.start):H.start),(xe===u&&H.start-H._pinPush<z||xe===C)&&isNaN(S)&&(g+=j*(1-H.progress)),xe===d&&(_+=j));if(z+=g,ce+=g,N._startClamp&&(N._startClamp+=g),N._endClamp&&!rs&&(N._endClamp=ce||-.001,ce=Math.min(ce,Qa(E,w))),me=ce-z||(z-=.01)&&.001,h&&(I=J.utils.clamp(0,1,J.utils.normalize(z,ce,je))),N._pinPush=_,le&&g&&(j={},j[w.a]=`+=`+g,C&&(j[w.p]=`-=`+L()),J.set([le,B],j)),d&&!(ja&&N.end>=Qa(E,w)))j=Co(d),fe=w===qi,ae=L(),U=parseFloat(ye(w.a))+_,!m&&ce>1&&(W=(O?X.scrollingElement||ia:E).style,W={style:W,value:W[`overflow`+w.a.toUpperCase()]},O&&Co(Z)[`overflow`+w.a.toUpperCase()]!==`scroll`&&(W.style[`overflow`+w.a.toUpperCase()]=`scroll`)),_s(d,ve,j),_e=bs(d),R=Eo(d,!0),Ce=k&&Xi(E,fe?Ki:qi)(),f?(Se=[f+w.os2,me+_+So],Se.t=ve,A=f===vo?Do(d,w)+me+_:0,A&&(Se.push(w.d,A+So),ve.style.flexBasis!==`auto`&&(ve.style.flexBasis=A+So)),ys(Se),C&&Q.forEach(function(e){e.pin===C&&e.vars.pinSpacing!==!1&&(e._subPinOffset=!0)}),k&&L(je)):(A=Do(d,w),A&&ve.style.flexBasis!==`auto`&&(ve.style.flexBasis=A+So)),k&&(V={top:R.top+(fe?ae-z:Ce)+So,left:R.left+(fe?Ce:ae-z)+So,boxSizing:`border-box`,position:`fixed`},V[fo]=V[`max`+bo]=Math.ceil(R.width)+So,V[po]=V[`max`+xo]=Math.ceil(R.height)+So,V[yo]=V[yo+go]=V[yo+mo]=V[yo+_o]=V[yo+ho]=`0`,V[vo]=j[vo],V[vo+go]=j[vo+go],V[vo+mo]=j[vo+mo],V[vo+_o]=j[vo+_o],V[vo+ho]=j[vo+ho],ge=xs(he,V,y),rs&&L(0)),n?(Te=n._initted,ya(1),n.render(n.duration(),!0,!0),be=ye(w.a)-U+me+_,we=Math.abs(me-be)>1,k&&we&&ge.splice(ge.length-2,2),n.render(0,!0,!0),Te||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),ya(0)):be=me,W&&(W.value?W.style[`overflow`+w.a.toUpperCase()]=W.value:W.style.removeProperty(`overflow-`+w.a));else if(u&&L()&&!x)for(R=u.parentNode;R&&R!==Z;)R._pinOffset&&(z-=R._pinOffset,ce-=R._pinOffset),R=R.parentNode;Ee&&Ee.forEach(function(e){return e.revert(!1,!0)}),N.start=z,N.end=ce,oe=se=rs?je:L(),!x&&!rs&&(oe<je&&L(je),N.scroll.rec=0),N.revert(!1,!0),re=Pa(),Ae&&(F=-1,Ae.restart(!0)),da=0,n&&T&&(n._initted||Me)&&n.progress()!==Me&&n.progress(Me||0,!0).render(n.time(),!0,!0),(h||I!==N.progress||x||p||n&&!n._initted)&&(n&&!T&&(n._initted||I||n.vars.immediateRender!==!1)&&n.totalProgress(x&&z<-.001&&!I?J.utils.normalize(z,ce,0):I,!0),N.progress=h||(oe-z)/me===I?0:I),d&&f&&(ve._pinOffset=Math.round(N.progress*be)),G&&G.invalidate(),isNaN(De)||(De-=J.getProperty(ue,w.p),Oe-=J.getProperty(de,w.p),Ds(ue,w,De),Ds(le,w,De-(o||0)),Ds(de,w,Oe),Ds(B,w,Oe-(o||0))),h&&!rs&&N.update(),c&&!rs&&!pe&&(pe=!0,c(N),pe=!1)}},N.getVelocity=function(){return(L()-se)/(Pa()-la)*1e3||0},N.endAnimation=function(){io(N.callbackAnimation),n&&(G?G.progress(1):n.paused()?T||io(n,N.direction<0,1):io(n,n.reversed()))},N.labelToScroll=function(e){return n&&n.labels&&(z||N.refresh()||z)+n.labels[e]/n.duration()*me||0},N.getTrailing=function(e){var t=Q.indexOf(N),n=N.direction>0?Q.slice(0,t).reverse():Q.slice(t+1);return(eo(e)?n.filter(function(t){return t.vars.preventOverlaps===e}):n).filter(function(e){return N.direction>0?e.end<=z:e.start>=ce})},N.update=function(e,t,r){if(!(x&&!r&&!e)){var o=rs===!0?je:N.scroll(),c=e?0:(o-z)/me,u=c<0?0:c>1?1:c||0,p=N.progress,h,g,b,D,O,M,ee,P;if(t&&(se=oe,oe=x?L():o,v&&(De=W,W=n&&!T?n.totalProgress():u)),m&&d&&!da&&!Na&&Ia&&(!u&&z<o+(o-se)/(Pa()-la)*m?u=1e-4:u===1&&ce>o+(o-se)/(Pa()-la)*m&&(u=.9999)),u!==p&&N.enabled){if(h=N.isActive=!!u&&u<1,g=!!p&&p<1,M=h!==g,O=M||!!u!=!!p,N.direction=u>p?1:-1,N.progress=u,O&&!da&&(b=u&&!p?0:u===1?1:p===1?2:3,T&&(D=!M&&j[b+1]!==`none`&&j[b+1]||j[b],P=n&&(D===`complete`||D===`reset`||D in n))),C&&(M||P)&&(P||l||!n)&&(to(C)?C(N):N.getTrailing(C).forEach(function(e){return e.endAnimation()})),T||(G&&!da&&!Na?(G._dp._time-G._start!==G._time&&G.render(G._dp._time-G._start),G.resetTo?G.resetTo(`totalProgress`,u,n._tTime/n._tDur):(G.vars.totalProgress=u,G.invalidate().restart())):n&&n.totalProgress(u,!!(da&&(re||e)))),d){if(e&&f&&(ve.style[f+w.os2]=xe),!k)H(Wa(U+be*u));else if(O){if(ee=!e&&u>p&&ce+1>o&&o+1>=Qa(E,w),y)if(!e&&(h||ee)){var te=Eo(d,!0),ne=o-z;Ts(d,Z,te.top+(w===qi?ne:0)+So,te.left+(w===qi?0:ne)+So)}else Ts(d,ve);ys(h||ee?ge:_e),we&&u<1&&h||H(U+(u===1&&!ee?be:0))}}v&&!ie.tween&&!da&&!Na&&Ae.restart(!0),a&&(M||_&&u&&(u<1||!Ma))&&sa(a.targets).forEach(function(e){return e.classList[h||_?`add`:`remove`](a.className)}),i&&!T&&!e&&i(N),O&&!da?(T&&(P&&(D===`complete`?n.pause().totalProgress(1):D===`reset`?n.restart(!0).pause():D===`restart`?n.restart(!0):n[D]()),i&&i(N)),(M||!Ma)&&(s&&M&&ao(N,s),A[b]&&ao(N,A[b]),_&&(u===1?N.kill(!1,1):A[b]=0),M||(b=u===1?1:3,A[b]&&ao(N,A[b]))),S&&!h&&Math.abs(N.getVelocity())>(no(S)?S:2500)&&(io(N.callbackAnimation),G?G.progress(1):io(n,D===`reverse`?1:!u,1))):T&&i&&!da&&i(N)}if(Te){var F=x?o/x.duration()*(x._caScrollDist||0):o;Ce(F+ +!!ue._isFlipped),Te(F)}Ne&&Ne(-o/x.duration()*(x._caScrollDist||0))}},N.enable=function(t,n){N.enabled||(N.enabled=!0,No(E,`resize`,qo),O||No(E,`scroll`,Go),P&&No(e,`refreshInit`,P),t!==!1&&(N.progress=I=0,oe=se=F=L()),n!==!1&&N.refresh())},N.getTween=function(e){return e&&ie?ie.tween:G},N.setPositions=function(e,t,n,r){if(x){var i=x.scrollTrigger,a=x.duration(),o=i.end-i.start;e=i.start+o*e/a,t=i.start+o*t/a}N.refresh(!1,!1,{start:za(e,n&&!!N._startClamp),end:za(t,n&&!!N._endClamp)},r),N.update()},N.adjustPinSpacing=function(e){if(Se&&e){var t=Se.indexOf(w.d)+1;Se[t]=parseFloat(Se[t])+e+So,Se[1]=parseFloat(Se[1])+e+So,ys(Se)}},N.disable=function(t,n){if(t!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,n||G&&G.pause(),je=0,R&&(R.uncache=1),P&&Po(e,`refreshInit`,P),Ae&&(Ae.pause(),ie.tween&&ie.tween.kill()&&(ie.tween=0)),!O)){for(var r=Q.length;r--;)if(Q[r].scroller===E&&Q[r]!==N)return;Po(E,`resize`,qo),O||Po(E,`scroll`,Go)}},N.kill=function(e,r){N.disable(e,r),G&&!r&&G.kill(),o&&delete Ho[o];var i=Q.indexOf(N);i>=0&&Q.splice(i,1),i===ma&&ds>0&&ma--,i=0,Q.forEach(function(e){return e.scroller===N.scroller&&(i=1)}),i||rs||(N.scroll.rec=0),n&&(n.scrollTrigger=null,e&&n.revert({kill:!1}),r||n.kill()),le&&[le,B,ue,de].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),fs===N&&(fs=0),d&&(R&&(R.uncache=1),i=0,Q.forEach(function(e){return e.pin===d&&i++}),i||(R.spacer=0)),t.onKill&&t.onKill(N)},Q.push(N),N.enable(!1,!1),Pe&&Pe(N),n&&n.add&&!me){var Re=N.update;N.update=function(){N.update=Re,q.cache++,z||ce||N.refresh()},J.delayedCall(.01,N.update),me=.01,z=ce=0}else N.refresh();d&&os()},e.register=function(t){return ra||=(J=t||Ka(),Ga()&&window.document&&e.enable(),La),ra},e.defaults=function(e){if(e)for(var t in e)Lo[t]=e[t];return Lo},e.disable=function(e,t){La=0,Q.forEach(function(n){return n[t?`kill`:`disable`](e)}),Po(Y,`wheel`,Go),Po(X,`scroll`,Go),clearInterval(ua),Po(X,`touchcancel`,Ua),Po(Z,`touchstart`,Ua),Mo(Po,X,`pointerdown,touchstart,mousedown`,Va),Mo(Po,X,`pointerup,touchend,mouseup`,Ha),oa.kill(),$a(Po);for(var n=0;n<q.length;n+=3)Fo(Po,q[n],q[n+1]),Fo(Po,q[n],q[n+2])},e.enable=function(){if(Y=window,X=document,ia=X.documentElement,Z=X.body,J)if(sa=J.utils.toArray,ca=J.utils.clamp,Ea=J.core.context||Ua,ya=J.core.suppressOverwrites||Ua,Da=Y.history.scrollRestoration||`auto`,us=Y.pageYOffset||0,J.core.globals(`ScrollTrigger`,e),Z){La=1,Oa=document.createElement(`div`),Oa.style.height=`100vh`,Oa.style.position=`absolute`,ss(),Ba(),na.register(J),e.isTouch=na.isTouch,Ta=na.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Sa=na.isTouch===1,No(Y,`wheel`,Go),aa=[Y,X,ia,Z],J.matchMedia?(e.matchMedia=function(e){var t=J.matchMedia(),n;for(n in e)t.add(n,e[n]);return t},J.addEventListener(`matchMediaInit`,function(){es(),ts()}),J.addEventListener(`matchMediaRevert`,function(){return $o()}),J.addEventListener(`matchMedia`,function(){ls(0,1),Zo(`matchMedia`)}),J.matchMedia().add(`(orientation: portrait)`,function(){return Ko(),Ko})):console.warn(`Requires GSAP 3.11.0 or later`),Ko(),No(X,`scroll`,Go);var t=Z.hasAttribute(`style`),n=Z.style,r=n.borderTopStyle,i=J.core.Animation.prototype,a,o;for(i.revert||Object.defineProperty(i,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle=`solid`,a=Eo(Z),qi.m=Math.round(a.top+qi.sc())||0,Ki.m=Math.round(a.left+Ki.sc())||0,r?n.borderTopStyle=r:n.removeProperty(`border-top-style`),t||(Z.setAttribute(`style`,``),Z.removeAttribute(`style`)),ua=setInterval(Wo,250),J.delayedCall(.5,function(){return Na=0}),No(X,`touchcancel`,Ua),No(Z,`touchstart`,Ua),Mo(No,X,`pointerdown,touchstart,mousedown`,Va),Mo(No,X,`pointerup,touchend,mouseup`,Ha),pa=J.utils.checkPrefix(`transform`),hs.push(pa),ra=Pa(),oa=J.delayedCall(.2,ls).pause(),_a=[X,`visibilitychange`,function(){var e=Y.innerWidth,t=Y.innerHeight;X.hidden?(ha=e,ga=t):(ha!==e||ga!==t)&&qo()},X,`DOMContentLoaded`,ls,Y,`load`,ls,Y,`resize`,qo],$a(No),Q.forEach(function(e){return e.enable(0,1)}),o=0;o<q.length;o+=3)Fo(Po,q[o],q[o+1]),Fo(Po,q[o],q[o+2])}else X&&X.addEventListener(`DOMContentLoaded`,function t(){e.enable(),X.removeEventListener(`DOMContentLoaded`,t)})},e.config=function(t){`limitCallbacks`in t&&(Ma=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(ua)||(ua=n)&&setInterval(Wo,n),`ignoreMobileResize`in t&&(Sa=e.isTouch===1&&t.ignoreMobileResize),`autoRefreshEvents`in t&&($a(Po)||$a(No,t.autoRefreshEvents||`none`),ba=(t.autoRefreshEvents+``).indexOf(`resize`)===-1)},e.scrollerProxy=function(e,t){var n=Ji(e),r=q.indexOf(n),i=qa(n);~r&&q.splice(r,i?6:2),t&&(i?Pi.unshift(Y,t,Z,t,ia,t):Pi.unshift(n,t))},e.clearMatchMedia=function(e){Q.forEach(function(t){return t._ctx&&t._ctx.query===e&&t._ctx.kill(!0,!0)})},e.isInViewport=function(e,t,n){var r=(eo(e)?Ji(e):e).getBoundingClientRect(),i=r[n?fo:po]*t||0;return n?r.right-i>0&&r.left+i<Y.innerWidth:r.bottom-i>0&&r.top+i<Y.innerHeight},e.positionInViewport=function(e,t,n){eo(e)&&(e=Ji(e));var r=e.getBoundingClientRect(),i=r[n?fo:po],a=t==null?i/2:t in Ro?Ro[t]*i:~t.indexOf(`%`)?parseFloat(t)*i/100:parseFloat(t)||0;return n?(r.left+a)/Y.innerWidth:(r.top+a)/Y.innerHeight},e.killAll=function(e){if(Q.slice(0).forEach(function(e){return e.vars.id!==`ScrollSmoother`&&e.kill()}),e!==!0){var t=Jo.killAll||[];Jo={},t.forEach(function(e){return e()})}},e}();$.version=`3.15.0`,$.saveStyles=function(e){return e?sa(e).forEach(function(e){if(e&&e.style){var t=Qo.indexOf(e);t>=0&&Qo.splice(t,5),Qo.push(e,e.style.cssText,e.getBBox&&e.getAttribute(`transform`),J.core.getCache(e),Ea())}}):Qo},$.revert=function(e,t){return ts(!e,t)},$.create=function(e,t){return new $(e,t)},$.refresh=function(e){return e?qo(!0):(ra||$.register())&&ls(!0)},$.update=function(e){return++q.cache&&ps(e===!0?2:0)},$.clearScrollMemory=ns,$.maxScroll=function(e,t){return Qa(e,t?Ki:qi)},$.getScrollFunc=function(e,t){return Xi(Ji(e),t?Ki:qi)},$.getById=function(e){return Ho[e]},$.getAll=function(){return Q.filter(function(e){return e.vars.id!==`ScrollSmoother`})},$.isScrolling=function(){return!!Ia},$.snapDirectional=Ao,$.addEventListener=function(e,t){var n=Jo[e]||(Jo[e]=[]);~n.indexOf(t)||n.push(t)},$.removeEventListener=function(e,t){var n=Jo[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},$.batch=function(e,t){var n=[],r={},i=t.interval||.016,a=t.batchMax||1e9,o=function(e,t){var n=[],r=[],o=J.delayedCall(i,function(){t(n,r),n=[],r=[]}).pause();return function(e){n.length||o.restart(!0),n.push(e.trigger),r.push(e),a<=n.length&&o.progress(1)}},s;for(s in t)r[s]=s.substr(0,2)===`on`&&to(t[s])&&s!==`onRefreshInit`?o(s,t[s]):t[s];return to(a)&&(a=a(),No($,`refresh`,function(){return a=t.batchMax()})),sa(e).forEach(function(e){var t={};for(s in r)t[s]=r[s];t.trigger=e,n.push($.create(t))}),n};var ks=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},As=function e(t,n){n===!0?t.style.removeProperty(`touch-action`):t.style.touchAction=n===!0?`auto`:n?`pan-`+n+(na.isTouch?` pinch-zoom`:``):`none`,t===ia&&e(Z,n)},js={auto:1,scroll:1},Ms=function(e){var t=e.event,n=e.target,r=e.axis,i=(t.changedTouches?t.changedTouches[0]:t).target,a=i._gsap||J.core.getCache(i),o=Pa(),s;if(!a._isScrollT||o-a._isScrollT>2e3){for(;i&&i!==Z&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(js[(s=Co(i)).overflowY]||js[s.overflowX]));)i=i.parentNode;a._isScroll=i&&i!==n&&!qa(i)&&(js[(s=Co(i)).overflowY]||js[s.overflowX]),a._isScrollT=o}(a._isScroll||r===`x`)&&(t.stopPropagation(),t._gsapAllow=!0)},Ns=function(e,t,n,r){return na.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r&&=Ms,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&No(X,na.eventTypes[0],Is,!1,!0)},onDisable:function(){return Po(X,na.eventTypes[0],Is,!0)}})},Ps=/(input|label|select|textarea)/i,Fs,Is=function(e){var t=Ps.test(e.target.tagName);(t||Fs)&&(e._gsapAllow=!0,Fs=t)},Ls=function(e){ro(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||=`wheel,touch`,e.debounce=!!e.debounce,e.id=e.id||`normalizer`;var t=e,n=t.normalizeScrollX,r=t.momentum,i=t.allowNestedScroll,a=t.onRelease,o,s,c=Ji(e.target)||ia,l=J.core.globals().ScrollSmoother,u=l&&l.get(),d=Ta&&(e.content&&Ji(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=Xi(c,qi),p=Xi(c,Ki),m=1,h=(na.isTouch&&Y.visualViewport?Y.visualViewport.scale*Y.visualViewport.width:Y.outerWidth)/Y.innerWidth,g=0,_=to(r)?function(){return r(o)}:function(){return r||2.8},v,y,b=Ns(c,e.type,!0,i),x=function(){return y=!1},S=Ua,C=Ua,w=function(){s=Qa(c,qi),C=ca(+!!Ta,s),n&&(S=ca(0,Qa(c,Ki))),v=is},T=function(){d._gsap.y=Wa(parseFloat(d._gsap.y)+f.offset)+`px`,d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+parseFloat(d._gsap.y)+`, 0, 1)`,f.offset=f.cacheID=0},E=function(){if(y){requestAnimationFrame(x);var e=Wa(o.deltaY/2),t=C(f.v-e);if(d&&t!==f.v+f.offset){f.offset=t-f.v;var n=Wa((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+n+`, 0, 1)`,d._gsap.y=n+`px`,f.cacheID=q.cache,ps()}return!0}f.offset&&T(),y=!0},D,O,k,A,j=function(){w(),D.isActive()&&D.vars.scrollY>s&&(f()>s?D.progress(1)&&f(s):D.resetTo(`scrollY`,s))};return d&&J.set(d,{y:`+=0`}),e.ignoreCheck=function(e){return Ta&&e.type===`touchmove`&&E(e)||m>1.05&&e.type!==`touchstart`||o.isGesturing||e.touches&&e.touches.length>1},e.onPress=function(){y=!1;var e=m;m=Wa((Y.visualViewport&&Y.visualViewport.scale||1)/h),D.pause(),e!==m&&As(c,m>1.01?!0:n?!1:`x`),O=p(),k=f(),w(),v=is},e.onRelease=e.onGestureStart=function(e,t){if(f.offset&&T(),!t)A.restart(!0);else{q.cache++;var r=_(),i,o;n&&(i=p(),o=i+r*.05*-e.velocityX/.227,r*=ks(p,i,o,Qa(c,Ki)),D.vars.scrollX=S(o)),i=f(),o=i+r*.05*-e.velocityY/.227,r*=ks(f,i,o,Qa(c,qi)),D.vars.scrollY=C(o),D.invalidate().duration(r).play(.01),(Ta&&D.vars.scrollY>=s||i>=s-1)&&J.to({},{onUpdate:j,duration:r})}a&&a(e)},e.onWheel=function(){D._ts&&D.pause(),Pa()-g>1e3&&(v=0,g=Pa())},e.onChange=function(e,t,r,i,a){if(is!==v&&w(),t&&n&&p(S(i[2]===t?O+(e.startX-e.x):p()+t-i[1])),r){f.offset&&T();var o=a[2]===r,s=o?k+e.startY-e.y:f()+r-a[1],c=C(s);o&&s!==c&&(k+=c-s),f(c)}(r||t)&&ps()},e.onEnable=function(){As(c,n?!1:`x`),$.addEventListener(`refresh`,j),No(Y,`resize`,j),f.smooth&&=(f.target.style.scrollBehavior=`auto`,p.smooth=!1),b.enable()},e.onDisable=function(){As(c,!0),Po(Y,`resize`,j),$.removeEventListener(`refresh`,j),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new na(e),o.iOS=Ta,Ta&&!f()&&f(1),Ta&&J.ticker.add(Ua),A=o._dc,D=J.to(o,{ease:`power4`,paused:!0,inherit:!1,scrollX:n?`+=0.1`:`+=0`,scrollY:`+=0.1`,modifiers:{scrollY:Es(f,f(),function(){return D.pause()})},onUpdate:ps,onComplete:A.vars.onComplete}),o};$.sort=function(e){if(to(e))return Q.sort(e);var t=Y.pageYOffset||0;return $.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Y.innerHeight}),Q.sort(e||function(e,t){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})},$.observe=function(e){return new na(e)},$.normalizeScroll=function(e){if(e===void 0)return xa;if(e===!0&&xa)return xa.enable();if(e===!1){xa&&xa.kill(),xa=e;return}var t=e instanceof na?e:Ls(e);return xa&&xa.target===t.target&&xa.kill(),qa(t.target)&&(xa=t),t},$.core={_getVelocityProp:Zi,_inputObserver:Ns,_scrollers:q,_proxies:Pi,bridge:{ss:function(){Ia||Zo(`scrollStart`),Ia=Pa()},ref:function(){return da}}},Ka()&&J.registerPlugin($);function Rs(e){e.forEach((e,t)=>{let n=document.createElement(`script`);n.textContent=e,n.dataset.source=`home-reference-${String(t+1).padStart(2,`0`)}`,document.body.appendChild(n)})}var zs=`/* Critical reference styles extracted from public/ref/home.html. */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #020d1a;
  --accent: #00d4ff;
  --accent2: #ff4d00;
  --white: #ffffff;
  --muted: rgba(255, 255, 255, 0.38);
  --border: rgba(255, 255, 255, 0.08);
  --glass: rgba(255, 255, 255, 0.05);
  --glass-b: rgba(255, 255, 255, 0.1);
  --glass-a: rgba(0, 212, 255, 0.08);
  --glass-ab: rgba(0, 212, 255, 0.22);
  --font-d: 'Syne', sans-serif;
  --font-b: 'DM Sans', sans-serif;

  /* ── Z-INDEX LAYERS ─────────────────────────────────────────────────────
     Single source of truth. Never hardcode z-index values outside this map.
     New layers (GSAP planets, section transitions) must use these variables.
  ─────────────────────────────────────────────────────────────────────── */
  --z-bg: 0; /* fixed canvas, blobs */
  --z-content: 1; /* default section content */
  --z-orbit: 10; /* perfect-event orbit / planet layers */
  --z-nav: 100; /* sticky nav bar */
  --z-nav-top: 150; /* nav contact wrap (floats above nav) */
  --z-overlay: 200; /* fullscreen overlays (portfolio) */
  --z-modal: 1000; /* popups: request, project */
  --z-pe-title: 2000; /* perfect-event locked headline */
  --z-splash: 9000; /* splash screen */
  --z-flash: 9001; /* sp-flash — must always sit above --z-splash */
  --z-top: 9999; /* floating contact, nav dropdown */
}

html {
  scroll-behavior: smooth;
}
body {
  background: var(--bg);
  color: var(--white);
  font-family: var(--font-b);
  overflow-x: hidden;
}
a,
button {
  cursor: pointer;
}

/* NEON LINES BACKGROUND */
#neon-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.38;
}

/* GLASS */
.g {
  background: var(--glass);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 0.5px solid var(--glass-b);
  position: relative;
  overflow: hidden;
}
.g::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.18), transparent);
  pointer-events: none;
}
.ga {
  background: var(--glass-a);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 0.5px solid var(--glass-ab);
  position: relative;
  overflow: hidden;
}
.ga::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(0, 212, 255, 0.3), transparent);
  pointer-events: none;
}

/* ── LIQUID GLASS BUTTON UTILITY ─────────────────────────────────────────
   Reusable visual layer. Apply alongside a sizing class:
     <a class="nav-btn btn-glass">CONTACT NOW</a>
     <a class="btn-g  btn-glass">View cases</a>
   This class owns: background, border, backdrop-filter, shadow, transition.
   Consumer classes own: color, padding, border-radius, font. Never duplicate
   glass properties in consumer classes — extend or override only what differs.
   Hover: subtle internal brightening + 1px lift. Color changes are the
   consumer's responsibility (e.g. .btn-g:hover { color: #fff }).
   ─────────────────────────────────────────────────────────────────────── */
/* shadow layer order: top-inset | bottom-inset | outer-drop | glow-slot */
.btn-glass {
  position: relative;
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.06) 50%,
    rgba(255, 255, 255, 0.03) 100%
  );
  backdrop-filter: blur(24px) saturate(1.5);
  -webkit-backdrop-filter: blur(24px) saturate(1.5);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.24);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.14) inset,
    0 -1px 0 rgba(0, 0, 0, 0.1) inset,
    0 6px 24px rgba(0, 0, 0, 0.16),
    0 0 0 rgba(255, 255, 255, 0);
  transition:
    color 0.3s cubic-bezier(0.25, 1, 0.5, 1),
    background 0.3s cubic-bezier(0.25, 1, 0.5, 1),
    border-color 0.3s cubic-bezier(0.25, 1, 0.5, 1),
    box-shadow 0.3s cubic-bezier(0.25, 1, 0.5, 1),
    transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
.btn-glass:hover {
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.14) 0%,
    rgba(255, 255, 255, 0.07) 50%,
    rgba(255, 255, 255, 0.04) 100%
  );
  border-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.26);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.06) inset,
    0 -1px 0 rgba(0, 0, 0, 0.1) inset,
    0 8px 28px rgba(0, 0, 0, 0.2),
    0 0 0 rgba(255, 255, 255, 0);
  transform: translateY(-1px);
}

/* BLOBS */
.blobs {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}
.blob {
  position: absolute;
  border-radius: 50%;
}
.blob-1 {
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 65%);
  top: -200px;
  right: -200px;
}
.blob-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 65%);
  bottom: 10%;
  left: -150px;
}
`,Bs=`/* NAV */
nav {
  position: fixed;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  width: calc(100% - 64px);
  max-width: 960px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  border-radius: 16px;
  transition:
    background 0.4s,
    border-color 0.4s,
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(6, 14, 26, 0.82);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  border: 0.5px solid var(--glass-b);
}
.nav-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  justify-content: center;
  position: relative;
}
nav::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.14), transparent);
  pointer-events: none;
}
nav.on {
  background: rgba(6, 14, 26, 0.88);
  border-color: rgba(255, 255, 255, 0.13);
}
nav.nav-hidden {
  transform: translateX(-50%) translateY(calc(-100% - 20px));
}
.logo {
  font-family: var(--font-d);
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  letter-spacing: 0.02em;
}
.logo span {
  color: var(--accent);
}
.nav-links {
  display: flex;
  gap: 28px;
  list-style: none;
}
.nav-links a {
  font-size: 11px;
  color: var(--muted);
  text-decoration: none;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  transition: color 0.2s;
  /* Larger hit area without changing text layout */
  padding: 10px 0;
  position: relative;
}
.nav-links a:hover {
  color: #fff;
}
/* Hover underline — anchored to text, not to padding bottom */
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 9px;
  left: 0;
  right: 0;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.nav-links a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
.mobile-menu {
  display: none;
}
/* Identity only — glass appearance comes from .btn-glass */
.nav-btn {
  font-size: 11px;
  font-weight: 500;
  color: var(--accent2);
  padding: 7px 18px;
  border-radius: 22px;
  text-decoration: none;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}
/* .nav-btn:hover — .btn-glass:hover handles all visual changes */

/* CONTACT NOW DROPDOWN — FIXED */
.nav-contact-wrap {
  position: absolute !important;
  right: 0 !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  z-index: 150 !important;
  display: flex !important;
  align-items: center !important;
}
.nav-contact-wrap .nav-btn {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  white-space: nowrap !important;
}

.nav-contact-menu {
  position: absolute !important;
  top: calc(100% + 20px) !important;
  left: 50% !important;
  right: auto !important;
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  gap: 10px !important;
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
  transform: translateX(-50%) translateY(-8px) scale(0.96) !important;
  transition:
    opacity 0.22s ease,
    transform 0.22s ease,
    visibility 0.22s ease !important;
  z-index: 9999 !important;
  /* liquid glass container */
  background: linear-gradient(
    160deg,
    rgba(8, 20, 36, 0.9) 0%,
    rgba(4, 12, 24, 0.84) 100%
  ) !important;
  backdrop-filter: blur(28px) saturate(1.5) !important;
  -webkit-backdrop-filter: blur(28px) saturate(1.5) !important;
  border: 0.5px solid rgba(255, 255, 255, 0.1) !important;
  border-top-color: rgba(255, 255, 255, 0.2) !important;
  border-radius: 20px !important;
  padding: 8px !important;
  box-shadow:
    0 2px 0 rgba(255, 255, 255, 0.06) inset,
    0 20px 48px rgba(0, 0, 0, 0.5),
    0 8px 16px rgba(0, 0, 0, 0.3) !important;
}

/* JS controls open/close via .is-open — no CSS :hover trigger needed */
.nav-contact-wrap.is-open .nav-contact-menu {
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;
  transform: translateX(-50%) translateY(0) scale(1) !important;
}

.nav-contact-item {
  /* dimensions & shape — unchanged */
  width: 48px !important;
  height: 48px !important;
  border-radius: 14px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  text-decoration: none !important;
  position: relative !important;
  overflow: hidden !important;
  /* exact btn-g glass — unified visual language */
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.04) 100%
  ) !important;
  backdrop-filter: blur(20px) saturate(1.4) !important;
  -webkit-backdrop-filter: blur(20px) saturate(1.4) !important;
  border: 0.5px solid rgba(255, 255, 255, 0.1) !important;
  border-top-color: rgba(255, 255, 255, 0.24) !important;
  border-bottom-color: rgba(255, 255, 255, 0.06) !important;
  /* 4-shadow structure matches brand hover states → smooth CSS interpolation */
  box-shadow:
    0 2px 0 rgba(255, 255, 255, 0.12) inset,
    0 -1px 0 rgba(0, 0, 0, 0.06) inset,
    0 4px 16px rgba(0, 0, 0, 0.18),
    0 0 0 rgba(255, 255, 255, 0) !important;
  transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1) !important;
}

.nav-contact-item:hover {
  transform: translateY(-2px) !important;
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.05) 100%
  ) !important;
  border-color: rgba(255, 255, 255, 0.14) !important;
  border-top-color: rgba(255, 255, 255, 0.26) !important;
}
.nav-contact-item svg {
  display: block !important;
  fill: currentColor !important;
}
@media (max-width: 768px) {
  .nav-contact-wrap {
    display: none !important;
  }
}

/* BRAND COLORS FOR CONTACT ICONS */
.nav-contact-item.telegram {
  color: #27a7e7 !important;
}
.nav-contact-item.whatsapp {
  color: #25d366 !important;
}
.nav-contact-item.email {
  color: #ffffff !important;
}
.nav-contact-item.telegram:hover {
  background: rgba(39, 167, 231, 0.14) !important;
  border-color: rgba(39, 167, 231, 0.48) !important;
  border-top-color: rgba(39, 167, 231, 0.65) !important;
  /* 4 shadows matching base count — enables smooth CSS transition */
  box-shadow:
    0 2px 0 rgba(39, 167, 231, 0.22) inset,
    0 -1px 0 rgba(0, 0, 0, 0.1) inset,
    0 12px 28px rgba(0, 0, 0, 0.28),
    0 0 28px rgba(39, 167, 231, 0.5) !important;
}
.nav-contact-item.whatsapp:hover {
  background: rgba(37, 211, 102, 0.14) !important;
  border-color: rgba(37, 211, 102, 0.48) !important;
  border-top-color: rgba(37, 211, 102, 0.65) !important;
  box-shadow:
    0 2px 0 rgba(37, 211, 102, 0.22) inset,
    0 -1px 0 rgba(0, 0, 0, 0.1) inset,
    0 12px 28px rgba(0, 0, 0, 0.28),
    0 0 28px rgba(37, 211, 102, 0.5) !important;
}
.nav-contact-item.email:hover {
  background: rgba(255, 255, 255, 0.1) !important;
  border-color: rgba(255, 255, 255, 0.3) !important;
  border-top-color: rgba(255, 255, 255, 0.45) !important;
  box-shadow:
    0 2px 0 rgba(255, 255, 255, 0.22) inset,
    0 -1px 0 rgba(0, 0, 0, 0.1) inset,
    0 12px 28px rgba(0, 0, 0, 0.28),
    0 0 20px rgba(255, 255, 255, 0.28) !important;
}

.nav-contact-item::before {
  content: '' !important;
  position: absolute !important;
  top: 1px !important;
  left: 14% !important;
  right: 14% !important;
  height: 38% !important;
  border-radius: 14px 14px 60% 60% !important;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.22) 0%,
    rgba(255, 255, 255, 0) 100%
  ) !important;
  pointer-events: none !important;
}

/* FOCUS-VISIBLE — keyboard navigation outline */
.nav-btn:focus,
.nav-links a:focus,
.nav-contact-item:focus {
  outline: none;
}
.nav-btn:focus-visible,
.nav-links a:focus-visible,
.nav-contact-item:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.3);
  outline-offset: 4px;
}

/* FIX WHY US NUMBERS */
`,Vs=`/* SPLASH SCREEN */
/* Intro text motion */
@keyframes sp-fadeInUp {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Base line reveal */
@keyframes sp-lineGrow {
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    width: min(320px, 58vw);
    opacity: 1;
  }
}
/* Pre-exit fade for splash copy */
@keyframes sp-splashItemOut {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-8px);
  }
}
/* Camera flash for the line before splash exit */
@keyframes sp-lineFlash {
  0% {
    box-shadow:
      0 0 8px rgba(0, 212, 255, 0.8),
      0 0 20px rgba(0, 212, 255, 0.4);
    filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.8)) drop-shadow(0 0 20px rgba(0, 212, 255, 0.4));
    opacity: 0.92;
  }
  100% {
    /* Фіксуємо на максимальній яскравості */
    box-shadow:
      0 0 40px rgba(0, 212, 255, 1),
      0 0 100px rgba(0, 212, 255, 0.8),
      0 0 200px rgba(0, 212, 255, 0.3);
    filter: drop-shadow(0 0 40px rgba(0, 212, 255, 1)) drop-shadow(0 0 100px rgba(0, 212, 255, 0.8))
      drop-shadow(0 0 200px rgba(0, 212, 255, 0.3));
    opacity: 1;
  }
}

/* Halo for the line flash */
@keyframes sp-lineFlashHalo {
  0% {
    opacity: 0.2;
    transform: translateY(-50%) scaleX(0.95);
    filter: blur(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(-50%) scaleX(1);
    filter: blur(8px);
  }
}
/* Camera-flash style overlay used only during splash exit */
@keyframes sp-bigFlash {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
    background: rgba(0, 212, 255, 0.2);
  }
  40% {
    opacity: 1;
    background: rgba(255, 255, 255, 0.15);
  }
  100% {
    opacity: 0;
  }
}
/* Fade out wrapper for the splash screen */
@keyframes sp-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }
}

/* Splash stage container */
#splash-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #020d1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;
}
/* Hide splash during transition out */
#splash-screen.hide {
  animation: sp-out 0.4s forwards;
}
/* Remove splash from layout after it is gone */
body.splash-gone #splash-screen {
  display: none !important;
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
}
/* Splash headline */
.sp-text {
  font-family: 'Syne', sans-serif;
  font-size: clamp(28px, 5vw, 56px);
  font-weight: 700;
  color: #fff;
  text-align: center;
  line-height: 1.1;
  animation: sp-fadeInUp 0.8s 0.3s both;
}
/* Accent word glow */
.sp-text em {
  font-style: normal;
  color: #00d4ff;
  text-shadow: 0 0 28px rgba(0, 212, 255, 0.4);
}
/* Small subtitle */
.sp-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(12px, 1.5vw, 15px);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.38);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-align: center;
  animation: sp-fadeInUp 0.8s 0.55s both;
}
/* Main neon line */
.sp-line {
  position: relative;
  z-index: 4;
  height: 1.5px;
  width: 0;
  border-radius: 2px;
  background: linear-gradient(to right, transparent, #00d4ff, #ffffff, #00d4ff, transparent);
  box-shadow:
    0 0 8px rgba(0, 212, 255, 0.28),
    0 0 20px rgba(0, 212, 255, 0.12);
  opacity: 0;
  animation: sp-lineGrow 0.9s 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
/* Fade splash copy and line simultaneously before global flash */
#splash-screen.content-out .sp-text,
#splash-screen.content-out .sp-sub,
#splash-screen.content-out .sp-line {
  animation: sp-splashItemOut 0.2s ease-out forwards;
}
/* Keep the width fixed while the line is fading out to prevent snapping */
#splash-screen.content-out .sp-line {
  width: min(320px, 58vw);
}
/* Ensure the neon halos fade out simultaneously with the line */
#splash-screen.content-out .sp-line::before,
#splash-screen.content-out .sp-line::after {
  animation: sp-out 0.2s ease-out forwards;
}
/* Strong line flash that begins before splash hide */
#splash-screen.line-flash .sp-line {
  width: min(320px, 58vw);
  animation: sp-lineFlash 0.15s ease-out forwards;
}
#splash-screen.line-flash .sp-line::before,
#splash-screen.line-flash .sp-line::after {
  opacity: 1;
  transform: translateY(-50%) scaleX(1); /* Lock the halo size */
  animation: sp-lineFlashHalo 0.15s ease-out forwards;
}
/* Soft edge halos around the line */
.sp-line::before,
.sp-line::after {
  content: '';
  position: absolute;
  top: 50%;
  left: -12px;
  right: -12px;
  height: 20px;
  transform: translateY(-50%);
  border-radius: 999px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
  mix-blend-mode: screen;
}
/* Inner glow strip */
.sp-line::before {
  background: linear-gradient(
    to right,
    rgba(0, 212, 255, 0),
    rgba(0, 212, 255, 0.08) 18%,
    rgba(0, 212, 255, 0.28) 34%,
    rgba(255, 255, 255, 0.28) 50%,
    rgba(0, 212, 255, 0.28) 66%,
    rgba(0, 212, 255, 0.08) 82%,
    rgba(0, 212, 255, 0)
  );
  filter: blur(14px);
  animation: sp-lineHalo 0.9s 1.18s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
/* Outer glow bloom */
.sp-line::after {
  inset: -8px -18px;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 212, 255, 0.12) 0%,
    rgba(0, 212, 255, 0) 72%
  );
  filter: blur(24px);
  animation: sp-lineHalo 1s 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
/* Initial halo settling */
@keyframes sp-lineHalo {
  0% {
    opacity: 0;
    transform: translateY(-50%) scaleX(0.7);
  }
  28% {
    opacity: 0.18;
    transform: translateY(-50%) scaleX(0.88);
  }
  56% {
    opacity: 0.36;
    transform: translateY(-50%) scaleX(1);
  }
  100% {
    opacity: 0.22;
    transform: translateY(-50%) scaleX(1);
  }
}
/* Flash overlay injected only for the transition */
.sp-flash {
  position: fixed;
  inset: 0;
  z-index: 10000;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  background: rgba(0, 212, 255, 0);
  mix-blend-mode: screen;
}
/* Activate the flash for the splash exit moment */
.sp-flash.is-active {
  visibility: visible;
  animation: sp-bigFlash 0.6s ease-out forwards;
}
body.splash-gone .sp-flash {
  display: none !important;
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
}
`,Hs=`/* FORCE CONTACT NOW BACK TO RIGHT SIDE */
.nav-contact-wrap {
  position: absolute !important;
  right: 0 !important;
  left: auto !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  z-index: 150 !important;
  display: flex !important;
  align-items: center !important;
}

/* LEFT LOGO BUTTON — isolated, does not affect CONTACT NOW */
.nav-logo-left {
  position: absolute !important;
  left: -40px !important;
  right: auto !important;
  top: 50% !important;
  transform: translateY(-28%) !important;
  z-index: 120 !important;
  display: flex !important;
  align-items: center !important;
}
.nav-logo-left-btn {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: clamp(180px, 30vw, 220px) !important;
  padding: 0 !important;
  background: transparent !important;
  border: 0 !important;
  text-decoration: none !important;
  line-height: 0 !important;
  white-space: nowrap !important;
}
.nav-logo-left-btn:hover {
  background: transparent !important;
}
.nav-logo-left-img {
  display: block !important;
  width: 100% !important;
  height: auto !important;
  object-fit: contain !important;
  object-position: center left !important;
}
@media (max-width: 768px) {
  .nav-logo-left {
    display: flex !important;
    left: -60px !important;
    top: 50% !important;
    transform: translateY(-30%) !important;
  }
}

/* CONTACT NOW must stay fixed on the right */
.nav-contact-wrap {
  position: absolute !important;
  right: 0 !important;
  left: auto !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
}
`,Us=`/* Base section styles extracted from the first reference style block. */
/* SECTIONS */
section,
.sec {
  position: relative;
  z-index: 1;
}
.eyebrow {
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 14px;
}
.sh {
  font-family: var(--font-d);
  font-weight: 700;
  line-height: 1.1;
  color: #fff;
}
.sh em {
  font-style: normal;
  color: var(--accent);
}
`,Ws=`@media (max-width: 768px) {
  .pe-orb-subtitle {
    top: calc(50% + 46px);
    font-size: 8px;
    letter-spacing: 0.18em;
  }
}

/* spacing when VIEW MORE CASES раскрыт */
#moreCases {
  margin-top: 38px;
}

/* FIX: spacing for dynamically loaded cases */
#moreCases .pg {
  margin: 0 !important;
}

#moreCases .pg + .pg {
  margin-top: 38px !important;
}

#moreCases .pc {
  height: 100%;
}

/* HARD FIX: OUR PROJECTS grid template restored */
#portfolio {
  overflow: hidden;
}

#portfolio .pg {
  width: 100%;
  max-width: 100%;
  display: grid !important;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr) !important;
  grid-template-rows: minmax(0, 1fr) minmax(0, 1fr) !important;
  gap: 8px !important;
  align-items: stretch !important;
  margin: 0 !important;
}

#portfolio .pg.pg-alt {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 2fr) !important;
  grid-template-rows: minmax(0, 1fr) minmax(0, 1fr) !important;
}

#portfolio .pc {
  position: relative !important;
  overflow: hidden !important;
  min-width: 0 !important;
  max-width: 100% !important;
  height: auto !important;
  border-radius: 18px;
}

#portfolio .pg:not(.pg-alt) .pc:first-child {
  grid-column: 1 !important;
  grid-row: 1 / span 2 !important;
  min-height: 520px !important;
}

#portfolio .pg.pg-alt .pc:first-child {
  grid-column: 3 !important;
  grid-row: 1 / span 2 !important;
  min-height: 520px !important;
}

#portfolio .pg:not(.pg-alt) .pc:not(:first-child),
#portfolio .pg.pg-alt .pc:not(:first-child) {
  min-height: 256px !important;
  aspect-ratio: auto !important;
}

#portfolio .pc-bg,
#portfolio .pc-bg img {
  width: 100% !important;
  height: 100% !important;
}

#portfolio .pc-bg {
  position: absolute !important;
  inset: 0 !important;
}

#portfolio .pc-bg img {
  object-fit: cover !important;
  display: block !important;
}

#portfolio > .project-block-spacer {
  height: 38px !important;
  width: 100%;
}

#moreCases {
  margin-top: 38px !important;
}

#moreCases .pg + .pg {
  margin-top: 38px !important;
}

@media (max-width: 768px) {
  #portfolio .pg,
  #portfolio .pg.pg-alt {
    grid-template-columns: 1fr !important;
    grid-template-rows: auto !important;
  }

  #portfolio .pg .pc,
  #portfolio .pg.pg-alt .pc {
    grid-column: auto !important;
    grid-row: auto !important;
    min-height: 260px !important;
    aspect-ratio: 16 / 9 !important;
  }

  #portfolio > .project-block-spacer,
  #moreCases,
  #moreCases .pg + .pg {
    margin-top: 0 !important;
  }

  #portfolio > .project-block-spacer {
    height: 28px !important;
  }

  #moreCases {
    margin-top: 28px !important;
  }

  #moreCases .pg + .pg {
    margin-top: 28px !important;
  }
}

/* GLOBAL GRID ALIGNMENT FIX */
:root {
  --site-max: 1240px;
  --site-pad: 32px;
  --site-pad-mobile: 16px;
}

/* Keep all main content sections on the same horizontal grid */
.statement,
.why-us,
.portfolio,
.services-new,
.svc-orbit-wrap,
.show-block,
.process,
.globe-section,
.video-testimonial,
.cta-wrap {
  width: 100%;
  max-width: var(--site-max);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--site-pad) !important;
  padding-right: var(--site-pad) !important;
}

/* Sections that already have top/bottom padding keep their vertical rhythm */
.portfolio {
  overflow: visible;
}

/* Full-width visual bands should not force cards outside the shared grid */
#portfolio .pg {
  width: 100%;
  max-width: 100%;
}

/* Keep navbar visually aligned but still compact */
nav {
  max-width: min(1240px, calc(100% - 64px));
}

@media (max-width: 768px) {
  .statement,
  .why-us,
  .portfolio,
  .services-new,
  .svc-orbit-wrap,
  .show-block,
  .process,
  .globe-section,
  .video-testimonial,
  .cta-wrap {
    padding-left: var(--site-pad-mobile) !important;
    padding-right: var(--site-pad-mobile) !important;
  }

  nav {
    max-width: calc(100% - 24px);
  }
}

/* GLOBAL GRID: match WHAT OUR CLIENTS SAY block width */
:root {
  --site-max: 1120px;
  --site-pad: 32px;
  --site-pad-mobile: 16px;
}

/* Make main sections follow the testimonial block scale */
.statement,
.why-us,
.portfolio,
.services-new,
.svc-orbit-wrap,
.show-block,
.process,
.globe-section,
.video-testimonial,
.cta-wrap {
  max-width: var(--site-max) !important;
  margin-left: auto !important;
  margin-right: auto !important;
  padding-left: var(--site-pad) !important;
  padding-right: var(--site-pad) !important;
}

/* Inner containers should not exceed the same visual grid */
.vt-bento,
.wu-story,
.globe-layout,
.cta-box,
.services-top,
.svc-orbit-stage {
  max-width: 100% !important;
}

/* OUR PROJECTS should live inside the same width, not stretch wider */
#portfolio .pg,
#moreCases .pg {
  max-width: 100% !important;
}

/* Navbar aligned to the same site grid */
nav {
  max-width: min(1120px, calc(100% - 64px)) !important;
}

@media (max-width: 768px) {
  .statement,
  .why-us,
  .portfolio,
  .services-new,
  .svc-orbit-wrap,
  .show-block,
  .process,
  .globe-section,
  .video-testimonial,
  .cta-wrap {
    padding-left: var(--site-pad-mobile) !important;
    padding-right: var(--site-pad-mobile) !important;
  }

  nav {
    max-width: calc(100% - 24px) !important;
  }
}
`,Gs=`/* FOOTER */
.site-footer {
  position: relative;
  z-index: 1;
  border-top: 0.5px solid var(--border);
  background: linear-gradient(180deg, transparent 0%, rgba(0, 212, 255, 0.03) 100%);
}
.site-footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 24px 28px;
  border-bottom: 0.5px solid var(--border);
  text-align: center;
}

/* Brand */
.sf-brand {
}
.sf-logo {
  font-family: var(--font-d);
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.02em;
  margin-bottom: 6px;
}
.sf-logo span {
  color: var(--accent);
}
.sf-tagline {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

/* Contacts */
.sf-contacts {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px 24px;
}
.sf-contact-item {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  transition: color 0.2s;
}
.sf-contact-item svg {
  flex-shrink: 0;
  color: var(--accent);
}
.sf-contact-item:hover {
  color: #fff;
}

/* Corporate */
.sf-corporate {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
.sf-corporate-label {
  font-size: 10px;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.28);
}
.sf-corporate-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  font-weight: 500;
  color: var(--accent);
  text-decoration: none;
  letter-spacing: 0.06em;
  transition: opacity 0.2s;
}
.sf-corporate-link:hover {
  opacity: 0.75;
}
.sf-corporate-link svg {
  color: var(--accent);
}

/* Bottom bar */
.sf-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  gap: 20px;
}
.sf-bottom__links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
}
.sf-bottom__links a {
  font-size: 9px;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.22);
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s;
}
.sf-bottom__links a:hover {
  color: rgba(255, 255, 255, 0.6);
}
.sf-sep {
  color: rgba(255, 255, 255, 0.12);
  font-size: 9px;
}
.sf-bottom__copy {
  font-size: 9px;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.16);
  text-transform: uppercase;
}
.sf-bottom__dot {
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .sf-contacts {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .sf-corporate {
    flex-direction: column;
    gap: 4px;
  }
  .sf-bottom {
    padding: 12px 16px;
  }
  .sf-bottom__links {
    gap: 5px;
  }
}

/* legacy footer classes no-op */
.fl,
.fn,
.flnk,
.footer-site-link {
}
`,Ks=`/* SAFE FOOTER SITE LINK — FINAL */
footer {
  position: relative !important;
}
.footer-site-link {
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  font-family: var(--font-d) !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
  color: rgba(255, 255, 255, 0.56) !important;
  text-decoration: none !important;
  white-space: nowrap !important;
  margin-left: 24px !important;
}
.footer-site-link::after {
  content: '↗' !important;
  color: var(--accent) !important;
  font-size: 13px !important;
  line-height: 1 !important;
}
.footer-site-link:hover {
  color: #fff !important;
}
@media (max-width: 768px) {
  .footer-site-link {
    margin-left: 0 !important;
    margin-top: 6px !important;
  }
}
`,qs=`/* HERO */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  padding-top: 64px;
}
.hero-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 52px;
  position: relative;
  z-index: 2;
  background: var(--bg);
  border-right: 0.5px solid rgba(255, 255, 255, 0.1);
}
.hero-left::before {
  display: none;
}
.hero-right {
  position: relative;
  overflow: hidden;
  background: #021020;
}
.hero-vid {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}
.hero-vid-player {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
.hero-vid iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 177.78vh;
  height: 100vh;
  min-width: 100%;
  min-height: 56.25vw;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.hero-vid-overlay {
  display: none;
}
.hero-tag {
  position: absolute;
  bottom: 24px;
  left: 20px;
  z-index: 2;
  background: rgba(6, 14, 26, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 0.5px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 8px 12px;
}
.hero-tag::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
}
.hero-tag-show {
  font-size: 9px;
  color: var(--accent);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.hero-tag-name {
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  margin-top: 2px;
}
.hero-card {
  opacity: 0;
  transform: translateY(22px);
  animation: fup 0.9s 0.3s forwards;
}
.ey {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 16px;
}
.ey-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ff4d00;
  box-shadow: 0 0 8px #ff4d00;
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 8px var(--accent);
  }
  50% {
    box-shadow: 0 0 3px var(--accent);
  }
}
.ey-txt {
  font-size: 10px;
  letter-spacing: 0.17em;
  text-transform: uppercase;
  color: var(--accent);
}
h1 {
  font-family: var(--font-d);
  font-weight: 700;
  font-size: clamp(26px, 3.5vw, 46px);
  line-height: 1;
  color: #fff;
  margin-bottom: 14px;
}
h1 em {
  font-style: normal;
  color: var(--accent);
  text-shadow: 0 0 40px rgba(0, 212, 255, 0.35);
}
.hero-sub {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 22px;
  max-width: 460px;
}
.btns {
  display: flex;
  gap: 12px;
  align-items: center;
}
.btn-p {
  font-size: 11px;
  font-weight: 500;
  background: var(--accent);
  color: var(--bg);
  padding: 12px 28px;
  border-radius: 24px;
  border: none;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 0 24px rgba(0, 212, 255, 0.22);
  transition:
    transform 0.2s cubic-bezier(0.25, 1, 0.5, 1),
    box-shadow 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}
.btn-p:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 36px rgba(0, 212, 255, 0.38);
}
/* Identity only — glass appearance comes from .btn-glass */
.btn-g {
  font-size: 11px;
  color: var(--muted);
  padding: 16px 30px;
  border-radius: 24px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  text-decoration: none;
}
.btn-g:hover {
  color: #fff; /* text brightens on hover; glass effect from .btn-glass:hover */
}
.btn-g:focus,
.btn-p:focus {
  outline: none;
}
.btn-g:focus-visible,
.btn-p:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.3);
  outline-offset: 4px;
}

/* Hero stats */
.hero-stats {
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 20px;
  padding-top: 18px;
  border-top: 0.5px solid rgba(255, 255, 255, 0.07);
  opacity: 0;
  animation: fup 0.9s 0.6s forwards;
}
.sp {
  padding: 12px 16px;
  border-radius: 12px;
  flex: 1;
  min-width: 90px;
}
.sp-n {
  font-family: var(--font-d);
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  line-height: 1;
}
.sp-n.a {
  color: #ff4d00;
  text-shadow: 0 0 18px rgba(255, 77, 0, 0.35);
}
.sp-l {
  font-size: 9px;
  color: rgba(255, 255, 255, 0.28);
  letter-spacing: 0.07em;
  margin-top: 3px;
  text-transform: uppercase;
}

/* Show pills */
.hero-shows {
  position: absolute;
  bottom: 24px;
  right: 48px;
  z-index: 2;
  display: flex;
  gap: 6px;
  opacity: 0;
  animation: fup 0.9s 0.9s forwards;
}
.spill {
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.28);
  padding: 5px 12px;
  border-radius: 20px;
  background: var(--glass);
  backdrop-filter: blur(12px);
  border: 0.5px solid var(--glass-b);
  transition:
    color 0.2s,
    border-color 0.2s;
}
.spill:hover {
  color: var(--accent);
  border-color: var(--glass-ab);
}

/* Scroll line */
.scr {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  opacity: 0;
  animation: fup 0.9s 1.2s forwards;
}
.scr-l {
  width: 1px;
  height: 44px;
  background: linear-gradient(to bottom, var(--accent), transparent);
  animation: sl 2.5s ease-in-out infinite;
}
@keyframes sl {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(1);
    transform-origin: top;
  }
  51% {
    transform: scaleY(1);
    transform-origin: bottom;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}

/* CTA buttons wrap on small desktops / large tablets (50/50 hero is active
   but the left panel is too narrow to fit both buttons side by side) */
@media (min-width: 769px) and (max-width: 960px) {
  .btns {
    flex-wrap: wrap;
  }
  .btn-p,
  .btn-g {
    white-space: nowrap;
  }
}
`,Js=`/* STATEMENT */
.statement {
  padding: 100px 48px;
}
.st-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: center;
}
.st-card {
  padding: 44px 40px;
  border-radius: 24px;
}
.st-card .sh {
  font-size: clamp(20px, 2.2vw, 32px);
}
.st-card p {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.6;
  margin-top: 14px;
}
.stats-g {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.sc {
  padding: 26px 22px;
  border-radius: 18px;
  text-align: center;
}
.sc-n {
  font-family: var(--font-d);
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  line-height: 1;
}
.sc-n span {
  color: var(--accent);
  text-shadow: 0 0 18px rgba(0, 212, 255, 0.22);
}
.sc-l {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.28);
  margin-top: 5px;
  line-height: 1.4;
}
`,Ys=`/* ── WHY US — COMPACT VIDEO STRIPS ── */
.why-us {
  padding: 110px 48px 120px;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.why-us::before {
  content: '';
  position: absolute;
  top: 12%;
  left: 50%;
  width: 620px;
  height: 620px;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(0, 212, 255, 0.045) 0%, transparent 66%);
  pointer-events: none;
  z-index: -1;
}
.why-us-head {
  margin: 0 0 52px;
  display: block;
}
.why-us-head .eyebrow {
  margin-bottom: 10px;
}
.why-us-head .sh {
  font-size: clamp(28px, 3.5vw, 48px);
}
.why-us-head .sh em {
  font-style: normal;
  color: var(--accent);
  text-shadow: 0 0 40px rgba(0, 212, 255, 0.35);
}
.why-us-head p {
  max-width: 420px;
  font-size: 12px;
  color: var(--muted);
  line-height: 1.55;
  margin: 14px 0 0;
}
.wu-story {
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 26px;
}
.wu-item {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(260px, 0.95fr);
  gap: clamp(22px, 3vw, 38px);
  align-items: center;
  min-height: 250px;
  padding: 0 0 26px;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.075);
  opacity: 0;
  transform: translateY(28px);
  filter: blur(8px);
  transition:
    opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.75s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.75s cubic-bezier(0.22, 1, 0.36, 1);
}
.wu-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.wu-item.reverse {
  grid-template-columns: minmax(260px, 0.95fr) minmax(0, 1.05fr);
}
.wu-item.reverse .wu-video-card {
  order: 2;
}
.wu-item.reverse .wu-copy {
  order: 1;
}
.wu-item.wu-vis {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
.wu-video-card {
  position: relative;
  aspect-ratio: 16/9;
  border-radius: 18px;
  overflow: hidden;
  background: #010b16;
  box-shadow: 0 22px 56px rgba(0, 0, 0, 0.34);
  isolation: isolate;
}
.wu-video-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(2, 13, 26, 0.62) 0%,
    rgba(2, 13, 26, 0.12) 52%,
    rgba(2, 13, 26, 0.2) 100%
  );
  z-index: 2;
  pointer-events: none;
}
.wu-video-card::after {
  content: '';
  position: absolute;
  left: 22%;
  right: 22%;
  bottom: 0;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--accent), transparent);
  opacity: 0.65;
  z-index: 3;
}
.wu-video-card video,
.wu-video-card iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 0;
  transform: scale(1.015);
  z-index: 1;
}
.wu-video-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-d);
  font-size: clamp(15px, 1.6vw, 22px);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.07);
  letter-spacing: 0.12em;
  text-transform: none;
  z-index: 0;
}
.wu-video-meta {
  position: absolute;
  left: 18px;
  bottom: 15px;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 8px;
  letter-spacing: 0.16em;
  text-transform: none;
  color: rgba(255, 255, 255, 0.38);
}
.wu-video-meta::before {
  content: '';
  width: 24px;
  height: 1px;
  background: rgba(0, 212, 255, 0.72);
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.42);
}
.wu-copy {
  position: relative;
  max-width: 360px;
  padding-left: 20px;
}
.wu-copy::before {
  content: '';
  position: absolute;
  left: 0;
  top: 4px;
  bottom: 4px;
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(0, 212, 255, 0.34), transparent);
}
.wu-kicker {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.wu-tag {
  font-family: var(--font-d);
  font-size: clamp(18px, 1.9vw, 26px);
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  line-height: 1;
}

.wu-copy h3 {
  font-family: var(--font-b) !important;
  font-size: 12px !important;
  font-weight: 400 !important;
  line-height: 1.55 !important;
  color: rgba(255, 255, 255, 0.38) !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
  margin-top: 8px !important;
  margin-bottom: 0 !important;
}

.wu-copy p {
  display: none;
}
@media (max-width: 768px) {
  .why-us {
    padding: 76px 20px 86px;
  }
  .why-us-head {
    display: block;
    margin-bottom: 38px;
  }
  .why-us-head p {
    margin-top: 12px;
    max-width: none;
  }
  .wu-story {
    gap: 34px;
  }
  .wu-item,
  .wu-item.reverse {
    grid-template-columns: 1fr;
    gap: 18px;
    min-height: auto;
    padding-bottom: 30px;
  }
  .wu-item.reverse .wu-video-card,
  .wu-item.reverse .wu-copy {
    order: initial;
  }
  .wu-video-card {
    border-radius: 15px;
    aspect-ratio: 16/10;
  }
  .wu-copy {
    max-width: none;
  }
}
`,Xs=`/* WHY US custom glass play button */
.wu-video-card iframe.vimeo-cover {
  pointer-events: none !important;
}
.wu-video-card::before,
.wu-video-card::after,
.wu-video-meta {
  pointer-events: none !important;
}
.wu-custom-play {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 68px;
  height: 68px;
  transform: translate(-50%, -50%);
  z-index: 8;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.38);
  border-top-color: rgba(255, 255, 255, 0.7);
  border-bottom-color: rgba(255, 77, 0, 0.28);
  background: radial-gradient(
    circle at 30% 20%,
    rgba(255, 255, 255, 0.42),
    rgba(255, 255, 255, 0.05) 42%,
    rgba(255, 77, 0, 0.2) 100%
  );
  backdrop-filter: blur(18px) saturate(1.6);
  -webkit-backdrop-filter: blur(18px) saturate(1.6);
  box-shadow:
    inset 0 2px 0 rgba(255, 255, 255, 0.28),
    inset 0 -1px 0 rgba(255, 77, 0, 0.18),
    0 18px 38px rgba(0, 0, 0, 0.35),
    0 0 34px rgba(255, 77, 0, 0.28);
  cursor: pointer;
  transition:
    transform 0.25s ease,
    opacity 0.25s ease,
    box-shadow 0.25s ease;
}
.wu-custom-play::before {
  content: '';
  position: absolute;
  inset: -10px;
  border-radius: inherit;
  border: 1px solid rgba(255, 77, 0, 0.22);
  animation: wuPlayPulse 1.8s ease-in-out infinite;
}
.wu-custom-play span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-34%, -50%);
  width: 0;
  height: 0;
  border-left: 18px solid #fff;
  border-top: 11px solid transparent;
  border-bottom: 11px solid transparent;
  filter: drop-shadow(0 0 10px rgba(255, 77, 0, 0.65));
}
.wu-custom-play:hover {
  transform: translate(-50%, -50%) scale(1.06);
  box-shadow:
    inset 0 2px 0 rgba(255, 255, 255, 0.34),
    0 22px 44px rgba(0, 0, 0, 0.42),
    0 0 48px rgba(255, 77, 0, 0.45);
}
.wu-custom-play.is-hidden {
  opacity: 0;
  pointer-events: none;
}
@keyframes wuPlayPulse {
  0%,
  100% {
    transform: scale(0.96);
    opacity: 0.45;
  }
  50% {
    transform: scale(1.13);
    opacity: 0.12;
  }
}

.full-cycle-fix {
  font-size: 1.15em;
}
`,Zs=`/* FINAL FIX — WHY CHOOSE US NUMBERS: no glow, original size */
.why-us .wu-num,
.why-us .wu-item .wu-num,
.wu-kicker .wu-num {
  color: rgba(255, 255, 255, 0.38) !important;
  -webkit-text-fill-color: rgba(255, 255, 255, 0.38) !important;
  opacity: 1 !important;
  text-shadow: none !important;
  filter: none !important;
  box-shadow: none !important;
  background: transparent !important;
  background-image: none !important;
  -webkit-text-stroke: 0 !important;
  text-stroke: 0 !important;
  mix-blend-mode: normal !important;
  font-family: var(--font-d) !important;
  font-size: clamp(26px, 3vw, 42px) !important;
  font-weight: 700 !important;
  line-height: 0.9 !important;
  letter-spacing: -0.03em !important;
  display: inline-block !important;
  min-width: 42px !important;
}

.why-us .wu-tag {
  font-family: var(--font-d) !important;
  font-size: clamp(18px, 1.9vw, 26px) !important;
  font-weight: 700 !important;
  line-height: 1 !important;
}

/* Remove any possible decorative glow from the number holder */
.why-us .wu-kicker,
.why-us .wu-kicker::before,
.why-us .wu-kicker::after,
.why-us .wu-num::before,
.why-us .wu-num::after {
  text-shadow: none !important;
  filter: none !important;
  box-shadow: none !important;
}

/* RESTORE ORIGINAL WHY US SIZES */
.why-us .wu-num,
.why-us .wu-item .wu-num,
.wu-kicker .wu-num {
  font-size: clamp(44px, 5vw, 72px) !important;
  line-height: 0.86 !important;
  min-width: 72px !important;
}

.why-us .wu-tag {
  font-family: var(--font-d) !important;
  font-size: clamp(18px, 1.9vw, 26px) !important;
  font-weight: 700 !important;
  line-height: 1 !important;
}

.why-us .wu-copy h3 {
  font-size: 12px !important;
  line-height: 1.55 !important;
}

/* CLEAN FIX — ALL WHY US NUMBERS SAME AS 01 */
.why-us .wu-num {
  font-size: clamp(44px, 5vw, 72px) !important;
  line-height: 0.86 !important;
  letter-spacing: -0.03em !important;
  display: inline-block !important;
  width: auto !important;
  min-width: auto !important;
  max-width: none !important;
  overflow: visible !important;
  transform: none !important;
  position: relative !important;
  left: 0 !important;
}

/* FINAL ALIGNMENT FIX — WHY US NUMBERS 01-06 */
.why-us .wu-kicker {
  display: flex !important;
  align-items: flex-start !important;
  gap: 12px !important;
}

.why-us .wu-num {
  font-size: clamp(44px, 5vw, 72px) !important;
  line-height: 0.86 !important;
  height: 0.86em !important;
  display: inline-flex !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  vertical-align: top !important;
  transform: translateY(0) !important;
  position: relative !important;
  top: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  font-variant-numeric: tabular-nums lining-nums !important;
  font-feature-settings:
    'tnum' 1,
    'lnum' 1 !important;
}

.why-us .wu-tag {
  align-self: flex-start !important;
}

/* INCREASE WHY CHOOSE US SUBTEXTS BY 30% */
.why-us .wu-copy h3 {
  font-size: 15.6px !important;
  line-height: 1.55 !important;
}
`,Qs=`/* PORTFOLIO */
.portfolio {
  padding: 0 48px 100px;
}
.sec-hd {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 24px;
}
.sec-lnk {
  font-size: 11px;
  color: var(--accent);
  text-decoration: none;
  letter-spacing: 0.06em;
  border-bottom: 0.5px solid rgba(0, 212, 255, 0.3);
  padding-bottom: 2px;
  transition: border-color 0.2s;
}
.sec-lnk:hover {
  border-color: var(--accent);
}
.pg {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 8px;
}
.pc {
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  cursor: default;
  background: #020e1c;
}
.pc:first-child {
  grid-row: span 2;
  min-height: 520px;
}
.pc:not(:first-child) {
  aspect-ratio: 4/3;
}
.pc-bg {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.05);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: transform 0.6s;
}
.pc:hover .pc-bg {
  transform: scale(1.05);
}
.pc-ov {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(6, 14, 26, 0.92) 0%, transparent 55%);
}
.pc-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 14px 18px;
  background: rgba(6, 14, 26, 0.48);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 0.5px solid var(--glass-b);
  transform: translateY(4px);
  transition: transform 0.3s;
}
.pc-info::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
}
.pc:hover .pc-info {
  transform: translateY(0);
}
.pc-cl {
  font-size: 9px;
  color: var(--accent);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 3px;
}
.pc-t {
  font-family: var(--font-d);
  font-size: 14px;
  font-weight: 700;
  color: #fff;
}
.pc-m {
  font-size: 11px;
  color: var(--muted);
  margin-top: 2px;
}

/* SERVICES */
.services {
  padding: 0 48px 100px;
}
.svc-g {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 44px;
}
.svc {
  padding: 34px 28px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}
.svc::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--accent), transparent);
  transform: scaleX(0);
  transition: transform 0.4s;
}
.svc:hover::after {
  transform: scaleX(1);
}
.svc-n {
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 0.1em;
  margin-bottom: 18px;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.25);
}
.svc-t {
  font-family: var(--font-d);
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 9px;
}
.svc-d {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.6;
}
`,$s=`/* PROJECT CARD — MULTI-MEDIA SLIDER */

/* Background gets its color from CSS instead of inline style */
.pc-bg {
  background: #0a0a0a;
}

/* ── SCROLL-SNAP TRACK ── */
.pc-slides {
  position: absolute;
  inset: 0;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.pc-slides::-webkit-scrollbar {
  display: none;
}

.pc-slide {
  flex: 0 0 100%;
  height: 100%;
  scroll-snap-align: start;
}
.pc-slide img,
.pc-slide video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0.9;
}

/* ── GLASS NAV ARROWS ── */
.pc-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  cursor: pointer;
  padding: 0;
  opacity: 0;
  transition:
    opacity 0.22s,
    transform 0.2s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.2s,
    border-color 0.2s;
}
.pc-nav svg {
  width: 16px;
  height: 16px;
  display: block;
  flex-shrink: 0;
  pointer-events: none;
}
.pc-nav--prev {
  left: 10px;
}
.pc-nav--next {
  right: 10px;
}

/* Show arrows when card is hovered (non-touch) */
@media (hover: hover) {
  .pc:hover .pc-nav {
    opacity: 1;
  }
  .pc-nav:hover {
    transform: translateY(-50%) scale(1.12);
    background: rgba(255, 255, 255, 0.18);
    border-color: rgba(255, 255, 255, 0.38);
  }
  .pc-nav:active {
    transform: translateY(-50%) scale(0.94);
    transition-duration: 0.08s;
  }
}

/* ── SLIDE DOTS ── */
.pc-dots {
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 6px;
  pointer-events: none;
}
.pc-dot {
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  padding: 0;
  cursor: pointer;
  pointer-events: auto;
  transition:
    background 0.3s,
    width 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s;
}
.pc-dot.active {
  width: 18px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 212, 255, 0.65);
}

/* Hide all controls when card has only one slide */
.pc:not([data-slider]) .pc-nav,
.pc:not([data-slider]) .pc-dots {
  display: none;
}

/* On touch devices: always show dots (user swipes), hide arrows */
@media (hover: none) {
  .pc-nav {
    display: none;
  }
  .pc-dots {
    opacity: 1;
  }
}

/* Compact cards: nudge dots up a touch */
.pc:not(:first-child) .pc-dots {
  bottom: 62px;
}
`,ec=`/* PATCH v9: expand portfolio to 15 cards while preserving original working card structure */
.portfolio .pg + .pg {
  margin-top: 12px;
}
.portfolio .pg.pg-alt {
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 1fr 1fr;
}
.portfolio .pg.pg-alt .pc:first-child {
  grid-column: 3;
  grid-row: 1 / span 2;
  min-height: 520px;
}
.portfolio .pg.pg-alt .pc:nth-child(2) {
  grid-column: 1;
  grid-row: 1;
  aspect-ratio: auto;
}
.portfolio .pg.pg-alt .pc:nth-child(3) {
  grid-column: 2;
  grid-row: 1;
  aspect-ratio: auto;
}
.portfolio .pg.pg-alt .pc:nth-child(4) {
  grid-column: 1;
  grid-row: 2;
  aspect-ratio: auto;
}
.portfolio .pg.pg-alt .pc:nth-child(5) {
  grid-column: 2;
  grid-row: 2;
  aspect-ratio: auto;
}
@media (max-width: 768px) {
  .portfolio .pg + .pg {
    margin-top: 8px;
  }
  .portfolio .pg.pg-alt {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .portfolio .pg.pg-alt .pc:first-child {
    grid-column: auto;
    grid-row: auto;
    min-height: 260px;
  }
  .portfolio .pg.pg-alt .pc:nth-child(2),
  .portfolio .pg.pg-alt .pc:nth-child(3),
  .portfolio .pg.pg-alt .pc:nth-child(4),
  .portfolio .pg.pg-alt .pc:nth-child(5) {
    grid-column: auto;
    grid-row: auto;
    aspect-ratio: 4/3;
  }
}

/* VIEW MORE CASES */
.more-cases-wrap {
  display: flex;
  justify-content: center;
  margin: 28px 0 0;
}
.view-more-cases {
  font-size: 11px;
  font-weight: 500;
  background: var(--glass-a);
  border: 0.5px solid var(--glass-ab);
  color: var(--accent);
  padding: 13px 32px;
  border-radius: 28px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  cursor: default;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 0 24px rgba(0, 212, 255, 0.12);
  transition:
    transform 0.18s,
    box-shadow 0.22s,
    background 0.22s,
    color 0.22s;
}
.view-more-cases:hover {
  transform: translateY(-2px);
  background: rgba(0, 212, 255, 0.14);
  color: #fff;
  box-shadow: 0 0 34px rgba(0, 212, 255, 0.24);
}
.more-cases {
  display: none;
  margin-top: 12px;
}
.more-cases.open {
  display: block;
  animation: fup 0.55s cubic-bezier(0.4, 0, 0.2, 1) both;
}
.more-cases.open .pg {
  margin-top: 12px;
}

/* Anchor offset for fixed top menu */
#services,
#why-us,
#portfolio,
#contact {
  scroll-margin-top: 86px;
}
`,tc=`/* SHOWS */
.shows {
  padding: 0 48px 100px;
}
.shw-g {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 44px;
}
.shw {
  padding: 26px 22px;
  border-radius: 18px;
  cursor: default;
  transition: border-color 0.3s;
}
.shw:hover {
  border-color: var(--glass-ab) !important;
}
.shw-n {
  font-family: var(--font-d);
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
}
.shw-loc {
  font-size: 10px;
  color: var(--accent);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.shw-d {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.55;
}
`,nc=`/* ── VIDEO TESTIMONIAL — APPLE-STYLE AUTOPLAY PREVIEW ── */
/* ══════════════════════════════════════════
   TESTIMONIALS — PREMIUM LIQUID GLASS BENTO
   ══════════════════════════════════════════ */
.video-testimonial {
  position: relative;
  z-index: 1;
  padding: 0 48px 120px;
}

/* Section title */
.vt-head {
  max-width: 1120px;
  margin: 0 auto 40px;
}
.vt-head .sh {
  font-size: clamp(28px, 3.5vw, 48px);
}
.vt-head .sh em {
  font-style: normal;
  color: var(--accent);
  text-shadow: 0 0 40px rgba(0, 212, 255, 0.35);
}

/* ── BENTO GRID: video left spans 2 rows, 2×2 cards right ── */
.vt-bento {
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 14px;
}

/* Video cell spans col1, rows 1-2 */
.vt-cell-video {
  grid-column: 1;
  grid-row: 1 / 3;
}

/* ── GLASS GREYSCALE CARD — color on hover ── */
.vt-cell {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  padding: 28px 26px 24px;
  /* Light frosted grey glass */
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.14) 0%,
    rgba(255, 255, 255, 0.07) 40%,
    rgba(255, 255, 255, 0.1) 100%
  );
  backdrop-filter: blur(36px) saturate(1.1);
  -webkit-backdrop-filter: blur(36px) saturate(1.1);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-top-color: rgba(255, 255, 255, 0.3);
  border-bottom-color: rgba(255, 255, 255, 0.06);
  box-shadow:
    0 2px 0 0 rgba(255, 255, 255, 0.18) inset,
    0 -1px 0 0 rgba(255, 255, 255, 0.04) inset,
    0 24px 60px rgba(0, 0, 0, 0.22),
    0 4px 16px rgba(0, 0, 0, 0.1);
  cursor: default;
  transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Top specular highlight — glass "shine" */
.vt-cell::before {
  content: '';
  position: absolute;
  top: 1px;
  left: 10%;
  right: 10%;
  height: 36%;
  border-radius: 24px 24px 50% 50%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 100%);
  pointer-events: none;
  transition: background 0.45s;
}

/* Bottom accent glow — hidden by default, shows on hover */
.vt-cell::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 18%;
  right: 18%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
  pointer-events: none;
  transition: background 0.45s;
}

/* Greyscale logo + muted text by default */
.vt-cell .vt-logo svg,
.vt-cell .vt-logo img {
  filter: grayscale(1) brightness(0.55);
  opacity: 0.45;
  transition:
    filter 0.45s,
    opacity 0.45s;
}
.vt-cell .vt-quote {
  color: rgba(255, 255, 255, 0.35);
  transition: color 0.45s;
}
.vt-cell .vt-author {
  border-image: linear-gradient(to right, rgba(255, 255, 255, 0.14), transparent) 1;
  transition: border-image 0.45s;
}
.vt-cell .vt-author-name {
  color: rgba(255, 255, 255, 0.28);
  transition: color 0.45s;
}

/* ── HOVER: color comes alive ── */
.vt-cell:hover {
  transform: translateY(-3px) scale(1.007);
  border-color: rgba(0, 212, 255, 0.28);
  border-top-color: rgba(0, 212, 255, 0.42);
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0.08) 40%,
    rgba(0, 212, 255, 0.08) 100%
  );
  backdrop-filter: blur(36px) saturate(1.6);
  -webkit-backdrop-filter: blur(36px) saturate(1.6);
  box-shadow:
    0 2px 0 0 rgba(255, 255, 255, 0.24) inset,
    0 -1px 0 0 rgba(255, 255, 255, 0.06) inset,
    0 32px 72px rgba(0, 0, 0, 0.26),
    0 0 0 0.5px rgba(0, 212, 255, 0.18),
    0 8px 32px rgba(0, 212, 255, 0.08);
}
.vt-cell:hover::before {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 100%);
}
.vt-cell:hover::after {
  background: linear-gradient(to right, transparent, rgba(0, 212, 255, 0.35), transparent);
}
.vt-cell:hover .vt-logo svg,
.vt-cell:hover .vt-logo img {
  filter: grayscale(0) brightness(1);
  opacity: 1;
}
.vt-cell:hover .vt-quote {
  color: rgba(255, 255, 255, 0.8);
}
.vt-cell:hover .vt-author {
  border-image: linear-gradient(to right, var(--accent), transparent) 1;
}
.vt-cell:hover .vt-author-name {
  color: var(--accent);
}

/* ── LOGO container ── */
.vt-logo {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  min-height: 32px;
}
.vt-logo svg {
  display: block;
  overflow: visible;
}
.vt-logo img {
  display: block;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 4px 8px;
  transition:
    filter 0.45s,
    opacity 0.45s,
    background 0.45s;
}
.vt-cell:hover .vt-logo img {
  background: rgba(255, 255, 255, 0.92);
}

/* keep old class harmless */
.vt-logo-text {
  display: none;
}

/* ── QUOTE ── */
.vt-quote {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  margin-bottom: 20px;
  font-style: normal;
  letter-spacing: 0.01em;
}

/* Large opening quote mark — ціановий, великий, у лівому верхньому куті картки */
.vt-quote-wrap {
  position: relative;
}
.vt-quote-wrap::before {
  display: none;
}

/* ── AUTHOR ROW ── */
.vt-author {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 16px;
  border-top: 2px solid var(--accent);
  border-image: linear-gradient(to right, var(--accent), transparent) 1;
}
.vt-avatar {
  display: none;
}
.vt-author-name {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.3);
  line-height: 1.2;
  transition: color 0.45s;
}
.vt-author-role {
  font-weight: 400;
  color: rgba(255, 255, 255, 0.22);
  transition: color 0.45s;
}
.vt-cell:hover .vt-author-role {
  color: rgba(255, 255, 255, 0.5);
}
.vt-author-co {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.45);
  letter-spacing: 0.02em;
  margin-top: 1px;
}

/* ── VIDEO CELL ── */
.vt-video-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 460px;
  border-radius: 24px;
  overflow: hidden;
  background: #020e1c;
  box-shadow:
    0 32px 80px rgba(0, 0, 0, 0.52),
    0 0 0 0.5px rgba(255, 255, 255, 0.08);
}
.vt-video-wrap iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  object-fit: cover;
  transform: scale(1.02);
}
/* Bottom accent line */
.vt-video-wrap::after {
  content: '';
  position: absolute;
  left: 14%;
  right: 14%;
  bottom: 0;
  height: 1.5px;
  background: linear-gradient(to right, transparent, var(--accent), transparent);
  opacity: 0.6;
  z-index: 2;
  pointer-events: none;
}
/* Video badge */
.vt-video-badge {
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: none;
  color: rgba(255, 255, 255, 0.75);
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(2, 13, 26, 0.55);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 0.5px solid rgba(255, 255, 255, 0.13);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}
.vt-video-badge::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent2);
  animation: bottomBtnPulse 2s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(255, 77, 0, 0.9);
  flex-shrink: 0;
}

/* ── LIQUID GLASS BUTTON ── */
.vt-footer {
  max-width: 1120px;
  margin: 28px auto 0;
  display: flex;
  justify-content: center;
}
.btn-liquid {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 40px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 10px;
  font-family: var(--font-d);
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: none;
  color: rgba(255, 255, 255, 0.88);
  overflow: hidden;
  cursor: pointer;
  /* Liquid glass */
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.04) 40%,
    rgba(0, 212, 255, 0.07) 100%
  );
  backdrop-filter: blur(28px) saturate(1.4);
  -webkit-backdrop-filter: blur(28px) saturate(1.4);
  border: 0.5px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    inset 0 1.5px 0 rgba(255, 255, 255, 0.22),
    inset 0 -1px 0 rgba(0, 0, 0, 0.12),
    0 16px 40px rgba(0, 0, 0, 0.28),
    0 0 0 0.5px rgba(0, 212, 255, 0.08);
  transition:
    transform 0.26s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.26s,
    border-color 0.26s;
}
/* Arrow icon */
.btn-liquid svg {
  width: 14px;
  height: 14px;
  stroke: currentColor;
  fill: none;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.22s;
}
.btn-liquid:hover {
  transform: translateY(-2px);
  border-color: rgba(0, 212, 255, 0.32);
  box-shadow:
    inset 0 1.5px 0 rgba(255, 255, 255, 0.28),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1),
    0 20px 52px rgba(0, 0, 0, 0.32),
    0 0 0 0.5px rgba(0, 212, 255, 0.2),
    0 0 28px rgba(0, 212, 255, 0.1);
  color: #fff;
}
.btn-liquid:hover svg {
  transform: translateX(3px);
}
/* Shimmer line */
.btn-liquid::before {
  content: '';
  position: absolute;
  top: 0;
  left: 12%;
  right: 12%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.36), transparent);
  pointer-events: none;
}

@media (max-width: 900px) {
  .vt-bento {
    grid-template-columns: 1fr 1fr;
  }
  .vt-cell-video {
    grid-column: 1 / 3;
    grid-row: auto;
  }
  .vt-video-wrap {
    min-height: 300px;
    aspect-ratio: 16/9;
  }
}
@media (max-width: 600px) {
  .video-testimonial {
    padding: 0 16px 80px;
  }
  .vt-head {
    margin-bottom: 24px;
  }
  .vt-bento {
    grid-template-columns: 1fr;
  }
  .vt-cell-video {
    grid-column: 1;
  }
  .vt-video-wrap {
    min-height: 240px;
  }
  .vt-cell {
    padding: 22px 20px 20px;
  }
}
`,rc=`/* WHAT OUR CLIENTS SAY — vertical Vimeo video only */
.video-testimonial .vt-video-wrap.clients-video-vertical {
  aspect-ratio: 9 / 16 !important;
  min-height: 560px !important;
}

.video-testimonial .vt-video-wrap.clients-video-vertical iframe {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  border: 0 !important;
  object-fit: cover !important;
  transform: none !important;
}

@media (max-width: 768px) {
  .video-testimonial .vt-video-wrap.clients-video-vertical {
    aspect-ratio: 9 / 16 !important;
    min-height: 420px !important;
  }
}
`,ic=`/* PROCESS */
.process {
  padding: 0 48px 100px;
}
.proc-g {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  margin-top: 44px;
  position: relative;
}
.proc-g::before {
  content: '';
  position: absolute;
  top: 28px;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--glass-ab), transparent);
}
.proc-step {
  padding: 22px 16px;
  border-radius: 15px;
  text-align: center;
  position: relative;
  z-index: 1;
}
.proc-num {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--glass-a);
  border: 0.5px solid var(--glass-ab);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: var(--accent);
  margin: 0 auto 12px;
}
.proc-t {
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 4px;
}
.proc-d {
  font-size: 10px;
  color: var(--muted);
  line-height: 1.5;
}
`,ac=`/* CTA */
.cta-wrap {
  position: relative;
  z-index: 1;
  padding: 0 48px 80px;
}
.cta-box {
  padding: 60px 52px;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  position: relative;
  overflow: hidden;
}
.cta-box::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 220px;
  background: radial-gradient(ellipse, rgba(0, 212, 255, 0.07) 0%, transparent 70%);
  pointer-events: none;
}
.cta-h {
  font-family: var(--font-d);
  font-size: clamp(18px, 2.2vw, 30px);
  font-weight: 700;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 7px;
}
.cta-h em {
  font-style: normal;
  color: var(--accent);
  text-shadow: 0 0 28px rgba(0, 212, 255, 0.22);
}
.cta-s {
  font-size: 12px;
  color: var(--muted);
}
.btn-cta {
  font-size: 12px;
  font-weight: 500;
  background: var(--accent);
  color: var(--bg);
  padding: 14px 34px;
  border-radius: 28px;
  border: none;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: default;
  white-space: nowrap;
  flex-shrink: 0;
  text-decoration: none;
  box-shadow: 0 0 28px rgba(0, 212, 255, 0.25);
  transition:
    transform 0.15s,
    box-shadow 0.2s;
  display: inline-block;
}
.btn-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 42px rgba(0, 212, 255, 0.42);
}
`,oc=`/* STAND THAT RUNS A SHOW */
.show-block {
  position: relative;
  z-index: 1;
  padding: 0 48px 100px;
}
.show-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 44px;
}
.show-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--glass-a);
  border: 0.5px solid var(--glass-ab);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  font-size: 20px;
}
.show-item-t {
  font-family: var(--font-d);
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}
.show-item-d {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.6;
}

/* FLIP CARDS */
.show-item {
  perspective: 1000px;
  cursor: default;
}
.show-item-inner {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 220px;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
}
.show-item.flipped .show-item-inner {
  transform: rotateY(180deg);
}
.show-front,
.show-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 18px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
}
.show-front {
  background: transparent;
}
.show-back {
  background: #020d1a;
  border: 0.5px solid var(--glass-ab);
  transform: rotateY(180deg);
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.show-back::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(0, 212, 255, 0.3), transparent);
}
.show-back-video {
  width: 100%;
  aspect-ratio: 16/9;
  background: #020e1c;
  border-radius: 10px;
  border: 0.5px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
  position: relative;
}
.show-back-video iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.video-placeholder-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 0.5px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}
.vpi-play {
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 11px solid rgba(255, 255, 255, 0.25);
  margin-left: 2px;
}
.video-placeholder-txt {
  font-size: 9px;
  color: rgba(255, 255, 255, 0.2);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.show-back-title {
  font-size: 11px;
  font-weight: 500;
  color: var(--accent);
  letter-spacing: 0.06em;
}
.btn-flip-back {
  font-size: 10px;
  color: var(--muted);
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.12);
  padding: 5px 14px;
  border-radius: 20px;
  cursor: default;
  transition: color 0.2s;
  letter-spacing: 0.06em;
}
.btn-flip-back:hover {
  color: #fff;
}
.btn-watch {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  font-weight: 500;
  color: var(--accent);
  background: var(--glass-a);
  border: 0.5px solid var(--glass-ab);
  padding: 6px 14px;
  border-radius: 20px;
  cursor: default;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  transition: background 0.2s;
  align-self: flex-start;
  margin-top: 16px;
}
.btn-watch:hover {
  background: rgba(0, 212, 255, 0.14);
}
.btn-watch-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}

/* PROCESS REDESIGN */
.process {
  position: relative;
  z-index: 1;
  padding: 0 48px 100px;
}
.proc-row {
  display: flex;
  align-items: stretch;
  gap: 0;
  margin-top: 44px;
}
.proc-step {
  flex: 1;
  padding: 28px 22px;
  border-radius: 16px;
  text-align: center;
  position: relative;
  z-index: 1;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.proc-num {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--glass-a);
  border: 0.5px solid var(--glass-ab);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: var(--accent);
  margin: 0 auto 12px;
  flex-shrink: 0;
}
.proc-t {
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 4px;
}
.proc-d {
  font-size: 10px;
  color: var(--muted);
  line-height: 1.5;
}

/* Arrow between steps */
.proc-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 32px;
  margin-top: 0;
  position: relative;
}
.proc-arrow svg {
  animation: arrowPulse 1.5s ease-in-out infinite;
}
@keyframes arrowPulse {
  0%,
  100% {
    opacity: 0.3;
    transform: translateX(0);
  }
  50% {
    opacity: 1;
    transform: translateX(4px);
  }
}

/* Last step — Activation with flip */
.proc-step-flip {
  flex: 1;
  position: relative;
  perspective: 1000px;
  min-height: 160px;
}
.proc-flip-inner {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
  border-radius: 16px;
}
.proc-step-flip.flipped .proc-flip-inner {
  transform: rotateY(180deg);
}
.proc-flip-front,
.proc-flip-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 22px 18px;
  text-align: center;
}
.proc-flip-front {
  background: var(--glass-a);
  border: 0.5px solid var(--glass-ab);
}
.proc-flip-front::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(0, 212, 255, 0.5), transparent);
}
.proc-flip-back {
  background: #020d1a;
  border: 0.5px solid var(--glass-ab);
  transform: rotateY(180deg);
  gap: 10px;
}
.proc-flip-back::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(0, 212, 255, 0.3), transparent);
}
.proc-back-video {
  width: 100%;
  aspect-ratio: 16/9;
  background: #020e1c;
  border-radius: 8px;
  border: 0.5px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  position: relative;
  overflow: hidden;
}
.proc-back-video iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.btn-proc-watch {
  margin-top: 10px;
  font-size: 9px;
  font-weight: 500;
  color: var(--accent);
  background: var(--glass-a);
  border: 0.5px solid var(--glass-ab);
  padding: 5px 12px;
  border-radius: 16px;
  cursor: default;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: background 0.2s;
}
.btn-proc-watch:hover {
  background: rgba(0, 212, 255, 0.14);
}
.btn-proc-watch-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
}
.btn-proc-back {
  font-size: 9px;
  color: var(--muted);
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  padding: 4px 12px;
  border-radius: 16px;
  cursor: default;
  letter-spacing: 0.06em;
  transition: color 0.2s;
}
.btn-proc-back:hover {
  color: #fff;
}
`,sc=`/* GLOBE SECTION */
.globe-section {
  position: relative;
  z-index: 1;
  padding: 0 48px 100px;
}
.globe-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  margin-top: 44px;
}
.globe-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
.gshows {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.gshow-item {
  padding: 13px 18px;
  border-radius: 13px;
  background: rgba(255, 255, 255, 0.03);
  border: 0.5px solid rgba(255, 255, 255, 0.07);
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: default;
  transition: all 0.25s;
}
.gshow-item:hover,
.gshow-item.active {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.07);
}
.gshow-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
  transition: all 0.25s;
}
.gshow-item.active .gshow-dot,
.gshow-item:hover .gshow-dot {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: none;
}
.gshow-name {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
}
.gshow-loc {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.32);
  margin-top: 2px;
}
.gshow-date {
  font-size: 10px;
  color: var(--accent);
  margin-left: auto;
  letter-spacing: 0.05em;
}
@media (max-width: 768px) {
  .globe-layout {
    grid-template-columns: 1fr;
  }
}

@keyframes glowPulse2 {
  0%,
  100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
}
@keyframes flicker2 {
  0%,
  100% {
    opacity: 1;
  }
  92% {
    opacity: 1;
  }
  93% {
    opacity: 0.4;
  }
  94% {
    opacity: 1;
  }
  97% {
    opacity: 0.7;
  }
  98% {
    opacity: 1;
  }
}
@keyframes scanH2 {
  0% {
    left: -100%;
  }
  100% {
    left: 110%;
  }
}
.services-new {
  position: relative;
  z-index: 1;
  padding: 0 48px 100px;
}
.services-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 36px;
}
.svc-grid-new {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  overflow: hidden;
}
.svc-new {
  background: var(--bg);
  padding: 28px 22px;
  position: relative;
  overflow: hidden;
  transition: background 0.3s;
}
.svc-new:hover {
  background: #081520;
}
.svc-new::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--accent), transparent);
  transform: scaleX(0);
  transition: transform 0.4s;
}
.svc-new:hover::after {
  transform: scaleX(1);
}
.svc-new-scan {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50px;
  background: linear-gradient(to right, transparent, rgba(0, 212, 255, 0.08), transparent);
  left: -100%;
}
.svc-new:hover .svc-new-scan {
  animation: scanH2 0.8s ease forwards;
}
.svc-new-num {
  font-size: 10px;
  color: var(--accent);
  letter-spacing: 0.1em;
  margin-bottom: 14px;
}
.svc-new-t {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 7px;
}
.svc-new-d {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.32);
  line-height: 1.6;
}
@media (max-width: 768px) {
  .services-top {
    grid-template-columns: 1fr;
  }
  .svc-grid-new {
    grid-template-columns: 1fr;
  }
  .services-new {
    padding-left: 20px;
    padding-right: 182px;
  }
}

/* LIQUID GLASS TEXT */
.liquid-glass-wrap {
  display: inline-block;
  position: relative;
  padding: 22px 52px;
  border-radius: 100px;

  /* Glass base */
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.13) 0%,
    rgba(255, 255, 255, 0.04) 50%,
    rgba(255, 255, 255, 0.08) 100%
  );
  backdrop-filter: blur(28px) saturate(1.4);
  -webkit-backdrop-filter: blur(28px) saturate(1.4);

  /* Border — light refraction */
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-top-color: rgba(255, 255, 255, 0.38);
  border-bottom-color: rgba(255, 255, 255, 0.06);

  /* Shadow — depth */
  box-shadow:
    0 2px 0 0 rgba(255, 255, 255, 0.22) inset,
    0 -1px 0 0 rgba(255, 255, 255, 0.06) inset,
    0 24px 48px rgba(0, 0, 0, 0.28),
    0 8px 16px rgba(0, 0, 0, 0.18),
    0 0 0 0.5px rgba(255, 255, 255, 0.06);
}

/* Top specular highlight — the iOS glass "shine" */
.liquid-glass-wrap::before {
  content: '';
  position: absolute;
  top: 1px;
  left: 12%;
  right: 12%;
  height: 40%;
  border-radius: 100px 100px 60% 60%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 100%);
  pointer-events: none;
}

/* Bottom subtle glow */
.liquid-glass-wrap::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 20%;
  right: 20%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(0, 212, 255, 0.3), transparent);
  pointer-events: none;
}

.liquid-glass-text {
  font-size: clamp(28px, 3.5vw, 48px);
  position: relative;
  z-index: 1;
  /* Slight text shadow for depth */
  text-shadow: 0 1px 12px rgba(0, 0, 0, 0.3);
}
`,cc=`/* ── PERFECT EVENT SCROLL TRANSITION ── */
.pe-pin-wrap {
  position: relative;
  height: 260vh;
}
.pe-pin-wrap .hero {
  position: sticky;
  top: 0;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  z-index: 2;
}
.pe-bg-dark {
  position: absolute;
  inset: 0;
  background: var(--bg);
  opacity: 0;
  pointer-events: none;
  z-index: 3;
}
.hero-pre {
  font-family: var(--font-d);
  font-size: clamp(24px, 3.2vw, 46px);
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 0;
  white-space: nowrap;
}
.pe-headline {
  margin: 0 0 20px;
}
.pe-highlight {
  font-style: normal;
  font-family: var(--font-d);
  font-size: clamp(28px, 4vw, 58px);
  font-weight: 700;
  color: var(--accent) !important;
  display: block;
  line-height: 1.1;
  text-shadow: 0 0 40px rgba(0, 212, 255, 0.25);
  position: relative;
  z-index: 20;
  opacity: 1 !important;

  transition: none !important;
  animation: none !important;
  will-change: transform;
  /* color, font-size, font-weight, line-height — NEVER change */
}
.pe-second {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  padding: 0 clamp(32px, 6vw, 100px);
  gap: 40px;
  opacity: 0;
  pointer-events: none;
  z-index: 4;
}
.pe-second-left {
  flex: 0 0 40%;
  display: flex;
  align-items: center;
}
.pe-second-right {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.hero-pre {
  font-family: var(--font-d);
  font-size: clamp(24px, 3.2vw, 46px);
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 0;
  white-space: nowrap;
}
.pe-headline {
  margin: 0 0 20px;
  line-height: 1.05;
}
.pe-highlight {
  font-style: normal;
  font-family: var(--font-d);
  font-size: clamp(28px, 4vw, 58px);
  font-weight: 700;
  color: var(--accent);
  display: block;
  line-height: 1.1;
  letter-spacing: normal;
  text-shadow: 0 0 40px rgba(0, 212, 255, 0.25);
  position: relative;
  z-index: 20;
  opacity: 1 !important;

  transition: none !important;
  transform-origin: center center;
}
.pe-second {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  padding: 0 clamp(32px, 6vw, 100px);
  gap: 40px;
  opacity: 0;
  pointer-events: none;
  z-index: 3;
}
.pe-second-left {
  flex: 0 0 42%;
  min-height: 60px;
}
.pe-second-right {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.pe-gb {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 18px 12px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  opacity: 0;
}
.pe-gb::before {
  content: '';
  position: absolute;
  top: 1px;
  left: 10%;
  right: 10%;
  height: 32%;
  border-radius: 16px 16px 50% 50%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.11), transparent);
  pointer-events: none;
}
.pe-gb:hover {
  border-color: rgba(0, 212, 255, 0.32);
  box-shadow: 0 0 24px rgba(0, 212, 255, 0.1);
  transform: scale(1.03) !important;
}
.pe-gb svg {
  width: 28px;
  height: 28px;
  color: var(--accent);
  opacity: 0.85;
  flex-shrink: 0;
}
.pe-gb-name {
  font-family: var(--font-d);
  font-size: clamp(11px, 1.1vw, 14px);
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.06em;
  text-transform: none;
  text-align: center;
}
.pe-gb-watch {
  font-size: 8px;
  color: rgba(255, 255, 255, 0.22);
  letter-spacing: 0.14em;
  text-transform: none;
  display: flex;
  align-items: center;
  gap: 5px;
}
.pe-gb-watch::before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  transition:
    width 0.2s,
    background 0.2s;
}
.pe-gb:hover .pe-gb-watch {
  color: var(--accent);
}
.pe-gb:hover .pe-gb-watch::before {
  width: 18px;
  background: var(--accent);
}
.pe-gb-watch.neon {
  animation: watchNeon 1.4s ease forwards;
}

/* ── FIX: keep “perfect event” color/size unchanged during scroll ──
   The dark transition layer must never sit above the highlighted text.
   We also avoid opacity animation on the parent container that holds the second state. */
.pe-pin-wrap .hero {
  isolation: isolate;
  grid-template-columns: 1fr 1fr !important;
}
.pe-pin-wrap .hero-left {
  z-index: 6;
  background: var(--bg) !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.pe-pin-wrap .hero-right {
  z-index: 0;
}
.pe-bg-dark {
  z-index: 1 !important;
  opacity: 1 !important;
  background: rgba(2, 13, 26, 0);
}
.pe-highlight {
  color: #00d4ff !important;
  opacity: 1 !important;
  filter: none !important;
  mix-blend-mode: normal !important;
  isolation: isolate;
  font-size: clamp(28px, 4vw, 58px) !important;
  font-weight: 700 !important;
  line-height: 1.1 !important;
  letter-spacing: normal !important;
  text-shadow: 0 0 40px rgba(0, 212, 255, 0.25) !important;
}
.pe-second {
  z-index: 7 !important;
  opacity: 1 !important;
  visibility: hidden;
}

/* ── FIX: remove the strange vertical underlay during the final scroll state ──
   The highlighted text stays bright, while the original hero glass panels are
   removed from the final second-state composition. */
.pe-pin-wrap .hero-left {
  transition:
    background-color 0.25s linear,
    border-color 0.25s linear !important;
}
.pe-pin-wrap .hero-left.pe-flat {
  background: transparent !important;
  border-right-color: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  overflow: visible !important;
  z-index: 10 !important;
}
.pe-pin-wrap .hero.pe-flat-hero {
  overflow: visible !important;
}
.pe-pin-wrap .hero-left.pe-flat::before {
  opacity: 0 !important;
}
.pe-pin-wrap .hero-right.pe-flat {
  opacity: 0 !important;
}
.pe-bg-dark {
  width: 100% !important;
  height: 100% !important;
}

/* ── TWO-STEP BUTTON SCROLL: 4 cards first, then 4 cards ── */
.pe-second-right {
  position: relative !important;
  display: block !important;
  min-height: min(55vh, 504px);
  overflow: hidden;
}
.pe-group {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, minmax(150px, 1fr));
  gap: 18px;
  will-change: transform, opacity;
}
.pe-group-1 {
  opacity: 0;
  transform: translateY(28px);
}
.pe-group-2 {
  opacity: 0;
  transform: translateY(100%);
}
.pe-group .pe-gb {
  width: 100%;
  height: 100%;
}
@media (max-width: 768px) {
  .pe-second {
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }
  .pe-second-left {
    flex: 0 0 auto !important;
  }
  .pe-second-right {
    min-height: 58vh;
  }
  .pe-group {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, minmax(96px, 1fr));
    gap: 10px;
  }
}

/* ── UPDATE: rectangular buttons + one-by-one appearance ── */
.pe-group {
  grid-template-rows: repeat(2, minmax(78px, 1fr)) !important;
  gap: 10px !important;
}
.pe-gb {
  flex-direction: row !important;
  justify-content: flex-start !important;
  align-items: center !important;
  gap: 13px !important;
  padding: 14px 17px !important;
  border-radius: 10px !important;
  min-height: 78px !important;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.075),
    rgba(255, 255, 255, 0.018)
  ) !important;
}
.pe-gb::before {
  left: 8% !important;
  right: 8% !important;
  height: 28% !important;
  border-radius: 10px 10px 42% 42% !important;
}
.pe-gb svg {
  width: 24px !important;
  height: 24px !important;
}
.pe-gb-name {
  text-align: left !important;
  font-size: clamp(12px, 1.1vw, 15px) !important;
}
.pe-gb-watch {
  position: absolute !important;
  right: 15px !important;
  bottom: 11px !important;
}
.pe-gb:hover {
  transform: translateX(4px) !important;
}
@media (max-width: 768px) {
  .pe-group {
    grid-template-rows: repeat(4, minmax(60px, 1fr)) !important;
  }
  .pe-gb {
    min-height: 60px !important;
    padding: 11px 13px !important;
  }
  .pe-gb svg {
    width: 18px !important;
    height: 18px !important;
  }
}

/* ── UPDATE: flip video cards ── */
.pe-gb.pe-flip-card {
  display: block !important;
  padding: 0 !important;
  border: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
  overflow: visible !important;
  perspective: 1200px;
  min-height: 124px !important;
  border-radius: 16px !important;
}
.pe-gb.pe-flip-card::before,
.pe-gb.pe-flip-card::after {
  display: none !important;
}
.pe-flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: inherit;
  transform-style: preserve-3d;
  transition: transform 0.78s cubic-bezier(0.22, 1, 0.36, 1);
  border-radius: 16px;
}
.pe-gb.pe-flip-card:hover {
  transform: none !important;
}
.pe-gb.pe-flip-card:hover .pe-flip-inner,
.pe-gb.pe-flip-card:focus-within .pe-flip-inner {
  transform: rotateY(180deg);
}
.pe-flip-front,
.pe-flip-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  overflow: hidden;
  border-radius: 16px;
}
.pe-flip-front {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 22px 24px;
  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.09),
      rgba(255, 255, 255, 0.025) 58%,
      rgba(0, 212, 255, 0.045)
    ),
    rgba(2, 13, 26, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-top-color: rgba(255, 255, 255, 0.24);
  box-shadow:
    0 2px 0 rgba(255, 255, 255, 0.08) inset,
    0 18px 42px rgba(0, 0, 0, 0.26);
}
.pe-flip-front::before {
  content: '';
  position: absolute;
  top: 1px;
  left: 8%;
  right: 8%;
  height: 34%;
  border-radius: 16px 16px 60% 60%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.16), transparent);
  pointer-events: none;
}
.pe-flip-front svg {
  width: 34px !important;
  height: 34px !important;
  color: var(--accent);
  opacity: 0.95;
  flex: 0 0 auto;
  filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.28));
  position: relative;
  z-index: 2;
}
.pe-card-copy {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
  padding-right: 112px;
}
.pe-gb-name {
  display: block;
  text-align: left !important;
  font-size: clamp(14px, 1.3vw, 18px) !important;
}
.pe-gb-desc {
  font-size: 11px;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.34);
  max-width: 360px;
}
.pe-gb-watch {
  position: absolute !important;
  right: 22px !important;
  bottom: 16px !important;
  z-index: 3;
  white-space: nowrap;
}
.pe-flip-back {
  transform: rotateY(180deg);
  background: #020d1a;
  border: 1px solid rgba(0, 212, 255, 0.34);
  box-shadow:
    0 0 36px rgba(0, 212, 255, 0.12),
    0 18px 42px rgba(0, 0, 0, 0.35);
}
.pe-flip-back video,
.pe-video-fallback {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.pe-flip-back video {
  z-index: 1;
  opacity: 0;
  filter: brightness(0.72) contrast(1.08) saturate(1.12);
  transition: opacity 0.35s ease;
}
.pe-gb.pe-video-ready:hover .pe-flip-back video,
.pe-gb.pe-video-ready:focus-within .pe-flip-back video {
  opacity: 1;
}
.pe-video-fallback {
  z-index: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.26), transparent 32%),
    radial-gradient(circle at 76% 70%, rgba(255, 77, 0, 0.14), transparent 38%),
    linear-gradient(135deg, #041a2f, #020d1a 62%, #01060c);
}
.pe-video-fallback::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(255, 255, 255, 0.035) 3px,
    rgba(255, 255, 255, 0.035) 4px
  );
  opacity: 0.35;
}
.pe-video-shade {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    to top,
    rgba(2, 13, 26, 0.74),
    rgba(2, 13, 26, 0.1) 55%,
    rgba(2, 13, 26, 0.35)
  );
}
.pe-video-label {
  position: absolute;
  left: 18px;
  bottom: 16px;
  z-index: 3;
  font-family: var(--font-d);
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.08em;
  text-transform: none;
  text-shadow: 0 0 16px rgba(0, 0, 0, 0.65);
}
@media (max-width: 768px) {
  .pe-gb.pe-flip-card {
    min-height: 98px !important;
  }
  .pe-flip-front {
    padding: 16px 18px;
    gap: 12px;
  }
  .pe-flip-front svg {
    width: 24px !important;
    height: 24px !important;
  }
  .pe-card-copy {
    padding-right: 74px;
  }
  .pe-gb-desc {
    display: none;
  }
}
`,lc=`/* ── PE SECOND: sphere orbit layout ── */
.pe-second {
  position: absolute !important;
  inset: 0 !important;
  display: flex !important;
  align-items: center !important;
  padding: 0 clamp(32px, 6vw, 100px) !important;
  gap: 40px !important;
}

.pe-second-left {
  flex: 0 0 42% !important;
  min-height: 60px !important;
}

.pe-second-right {
  flex: 1 !important;
  position: relative !important;
  min-height: 100vh !important;
  display: block !important;
  overflow: visible !important;
}

/* SVG orbits fill the right panel */
.pe-orb-svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.9;
}

/* Sphere base style */
.pe-orb-sphere {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #1a2a4a 0%, #0a1020 40%, #050810 100%);
  border: 1px solid rgba(80, 160, 255, 0.18);
  box-shadow:
    inset 0 0 16px rgba(80, 160, 255, 0.08),
    inset -6px -6px 18px rgba(0, 0, 80, 0.8),
    0 0 10px rgba(60, 140, 255, 0.12),
    0 0 28px rgba(40, 100, 255, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transform: scale(0.2);
  filter: blur(12px);
  transition: box-shadow 0.3s ease;
}

.pe-orb-sphere::before {
  display: none;
}

.pe-orb-sphere::after {
  content: '';
  position: absolute;
  top: 8%;
  left: 15%;
  width: 35%;
  height: 24%;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(150, 210, 255, 0.14) 0%, transparent 70%);
  transform: rotate(-20deg);
  pointer-events: none;
}

.pe-orb-sphere:hover {
  box-shadow:
    inset 0 0 20px rgba(80, 160, 255, 0.16),
    inset -6px -6px 18px rgba(0, 0, 80, 0.8),
    0 0 24px rgba(60, 180, 255, 0.28),
    0 0 52px rgba(40, 120, 255, 0.14);
  transform: scale(1.06) !important;
  filter: blur(0) !important;
}

/* Play icon overlay on spheres.
   Strictly proportional: 35% of the sphere's own size, no px clamps.
   The triangle inside uses clip-path so it scales with the circle. */
.pe-orb-play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  pointer-events: none;
  z-index: 10;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.pe-orb-sphere:hover .pe-orb-play-icon {
  opacity: 0.88;
  transform: translate(-50%, -50%) scale(1.08);
}

/* Proportional triangle via clip-path — scales with its parent circle. */
.pe-orb-play-icon::after {
  content: '';
  display: block;
  width: 38%;
  height: 46%;
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  background: rgba(255, 255, 255, 0.85);
  margin-left: 8%;
}

/* Sphere sizes & absolute positions within right panel */
.pe-orb-ideas {
  width: clamp(90px, 11vw, 145px);
  height: clamp(90px, 11vw, 145px);
  top: 10%;
  left: 5%;
}
.pe-orb-vr {
  width: clamp(55px, 6.5vw, 80px);
  height: clamp(55px, 6.5vw, 80px);
  top: 8%;
  left: 36%;
}
.pe-orb-staff {
  width: clamp(85px, 10vw, 130px);
  height: clamp(85px, 10vw, 130px);
  top: 5%;
  right: 5%;
}
.pe-orb-led {
  width: clamp(65px, 8vw, 100px);
  height: clamp(65px, 8vw, 100px);
  top: 32%;
  right: 0%;
}
.pe-orb-bar {
  width: clamp(60px, 7.5vw, 92px);
  height: clamp(60px, 7.5vw, 92px);
  bottom: 10%;
  right: 2%;
}
.pe-orb-materials {
  width: clamp(90px, 11vw, 138px);
  height: clamp(90px, 11vw, 138px);
  bottom: 6%;
  right: 16%;
}
.pe-orb-motion {
  width: clamp(68px, 8.5vw, 106px);
  height: clamp(68px, 8.5vw, 106px);
  bottom: 4%;
  left: 38%;
}
.pe-orb-activation {
  width: clamp(88px, 10.5vw, 132px);
  height: clamp(88px, 10.5vw, 132px);
  bottom: 8%;
  left: 4%;
}

@media (max-width: 768px) {
  .pe-second {
    flex-direction: column !important;
  }
  .pe-second-left {
    flex: 0 0 auto !important;
  }
  .pe-second-right {
    min-height: 60vh !important;
    width: 100%;
  }
  .pe-orb-sphere::before {
    font-size: 8px !important;
  }
}
`,uc=`/* ── HOTFIX: align orbit spheres around "perfect event" center ── */
.pe-second {
  display: block !important;
  padding: 0 !important;
  gap: 0 !important;
}
/* pe-second-left is the TARGET for the JS translate — place it exactly at the visual center of the sphere orbit */
.pe-second-left {
  position: absolute !important;
  left: 50% !important;
  top: 50% !important;
  width: 1px !important;
  height: 1px !important;
  min-height: 1px !important;
  transform: translate(-50%, -50%) !important;
  pointer-events: none !important;
}
/* Prevent clipping of peHighlight while it animates to center */
#peHighlight {
  white-space: nowrap;
  display: block;
}
.pe-flat #peHeadline {
  overflow: visible !important;
}
.pe-flat .hero-left {
  overflow: visible !important;
}
.pe-second-right {
  position: absolute !important;
  left: 50% !important;
  top: 50% !important;
  width: min(92vw, 1180px) !important;
  height: min(72vh, 620px) !important;
  min-height: 0 !important;
  transform: translate(-50%, -50%) !important;
  overflow: visible !important;
  display: block !important;
  pointer-events: none !important;
}
.pe-second-right .pe-orb-sphere {
  pointer-events: auto !important;
}
.pe-orb-svg {
  width: 100% !important;
  height: 100% !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) scale(0.96) !important;
  opacity: 0.72 !important;
}
/* ── DESKTOP ELLIPSE ──────────────────────────────────────────────────────────
   All positions are CENTER-ANCHORED: top/left mark the sphere's visual center.
   JS applies translate(-50%, ...) so the anchor point is the sphere midpoint.
   Ellipse: center at (50%, 50%), semi-axes ≈ 44% H × 42% V.
   8 equally-spaced points at 45° increments starting from the top.
   ─────────────────────────────────────────────────────────────────────────── */
/* STAND — top-left (135°) */
.pe-orb-ideas {
  width: clamp(140px, 15vw, 212px) !important;
  height: clamp(140px, 15vw, 212px) !important;
  top: 24% !important;
  left: 26% !important;
  right: auto !important;
  bottom: auto !important;
}
.pe-orb-ideas .pe-sphere-label {
  top: calc(100% + 14px) !important;
}
/* ACTIVATION — top-center (180°) */
.pe-orb-vr {
  width: clamp(76px, 8.3vw, 108px) !important;
  height: clamp(76px, 8.3vw, 108px) !important;
  top: 14% !important;
  left: 50% !important;
  right: auto !important;
  bottom: auto !important;
}
/* STAFF — top-right (225°) */
.pe-orb-staff {
  width: clamp(111px, 12vw, 160px) !important;
  height: clamp(111px, 12vw, 160px) !important;
  top: 26% !important;
  left: 76% !important;
  right: auto !important;
  bottom: auto !important;
}
/* SCREENS — right-center (270°) */
.pe-orb-led {
  width: clamp(81px, 9.1vw, 117px) !important;
  height: clamp(81px, 9.1vw, 117px) !important;
  top: 50% !important;
  left: 86% !important;
  right: auto !important;
  bottom: auto !important;
}
/* MERCH — bottom-right (315°) */
.pe-orb-materials {
  width: clamp(122px, 13.2vw, 176px) !important;
  height: clamp(122px, 13.2vw, 176px) !important;
  top: 74% !important;
  left: 76% !important;
  right: auto !important;
  bottom: auto !important;
}
/* CATERING — bottom-center (0°) */
.pe-orb-bar {
  width: clamp(74px, 8.6vw, 109px) !important;
  height: clamp(74px, 8.6vw, 109px) !important;
  top: 86% !important;
  left: 54% !important;
  right: auto !important;
  bottom: auto !important;
}
/* CONTENT — bottom-left (45°) */
.pe-orb-motion {
  width: clamp(97px, 10.8vw, 144px) !important;
  height: clamp(97px, 10.8vw, 144px) !important;
  top: 80% !important;
  left: 32% !important;
  right: auto !important;
  bottom: auto !important;
}
/* SUPPORT — left-center (90°) */
.pe-orb-activation {
  width: clamp(111px, 12vw, 160px) !important;
  height: clamp(111px, 12vw, 160px) !important;
  top: 58% !important;
  left: 16% !important;
  right: auto !important;
  bottom: auto !important;
}

/* ── TABLET ELLIPSE (≤ 900px) ────────────────────────────────────────────────
   Container: 100vw × 64vh (~900×576px). Ellipse a=310px, b=175px,
   center 450×288. All 8 positions recalculated on the scaled ellipse.
   ─────────────────────────────────────────────────────────────────────────── */
@media (max-width: 900px) {
  .pe-second-left {
    left: 50% !important;
    width: 1px !important;
  }
  .pe-second-right {
    width: 100vw !important;
    height: 64vh !important;
    top: 56% !important;
  }
  /* Tablet: center-anchored top/left only (JS applies translate(-50%,-50%)) */
  .pe-orb-ideas {
    top: 15% !important;
    left: 17% !important;
    right: auto !important;
    bottom: auto !important;
  }
  .pe-orb-vr {
    top: 14% !important;
    left: 46% !important;
    right: auto !important;
    bottom: auto !important;
  }
  .pe-orb-staff {
    top: 19% !important;
    left: 81% !important;
    right: auto !important;
    bottom: auto !important;
  }
  .pe-orb-led {
    top: 43% !important;
    left: 89% !important;
    right: auto !important;
    bottom: auto !important;
  }
  .pe-orb-materials {
    top: 82% !important;
    left: 81% !important;
    right: auto !important;
    bottom: auto !important;
  }
  .pe-orb-bar {
    top: 87% !important;
    left: 46% !important;
    right: auto !important;
    bottom: auto !important;
  }
  .pe-orb-motion {
    top: 79% !important;
    left: 21% !important;
    right: auto !important;
    bottom: auto !important;
  }
  .pe-orb-activation {
    top: 41% !important;
    left: 9% !important;
    right: auto !important;
    bottom: auto !important;
  }
}

/* ── FINAL FIX: centered title inside sphere orbit block ── */
.pe-second-right {
  isolation: isolate !important;
}
.pe-orb-title {
  position: absolute !important;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%) !important;
  z-index: 8 !important;
  pointer-events: none !important;
  white-space: nowrap !important;
  font-family: var(--font-d) !important;
  font-size: clamp(28px, 4vw, 58px) !important;
  font-weight: 700 !important;
  line-height: 1.1 !important;
  letter-spacing: normal !important;
  color: var(--accent) !important;
  text-shadow: 0 0 40px rgba(0, 212, 255, 0.25) !important;
  opacity: 0;
  filter: none !important;
}
.hero-left.pe-flat,
.pe-flat-hero .hero-left {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border-right: 0 !important;
}
.hero-left.pe-flat::before,
.pe-flat-hero .hero-left::before {
  display: none !important;
}
.pe-flat-hero .hero-right {
  opacity: 0 !important;
}
.pe-second-right .pe-orb-svg {
  z-index: 1 !important;
}
.pe-second-right .pe-orb-sphere {
  z-index: 4 !important;
}
@media (max-width: 900px) {
  .pe-orb-title {
    font-size: clamp(34px, 9vw, 58px) !important;
  }
}

/* ── CINEMATIC SMOOTH TRANSITION PATCH ── */
#peHighlight,
#peOrbTitle,
#peBgDark,
#heroPre,
#heroSub,
#heroBtnsRow,
#heroRight,
.pe-second,
.pe-orb-sphere {
  will-change: transform, opacity, filter;
}

.pe-orb-title {
  transition:
    opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}

/* transform included so hover scale/lift and future GSAP tweens animate smoothly */
.pe-orb-sphere {
  transition:
    transform 0.4s cubic-bezier(0.25, 1, 0.5, 1),
    box-shadow 0.55s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}
`,dc=`/* ── NEON SPHERES / VIDEO ICON / GLOSS PATCH ── */
.pe-second {
  background:
    radial-gradient(ellipse at 50% 52%, rgba(0, 212, 255, 0.1) 0%, transparent 44%),
    radial-gradient(ellipse at 32% 42%, rgba(80, 80, 255, 0.08) 0%, transparent 38%),
    radial-gradient(ellipse at 70% 60%, rgba(0, 212, 255, 0.07) 0%, transparent 44%), #020d1a;
}

.pe-orbit-lines,
.pe-orbit-lines svg {
  filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.35))
    drop-shadow(0 0 26px rgba(0, 110, 255, 0.18));
}

.pe-orb-title {
  color: #00d4ff !important;
  text-shadow:
    0 0 10px rgba(0, 212, 255, 0.75),
    0 0 34px rgba(0, 212, 255, 0.45),
    0 0 76px rgba(0, 130, 255, 0.25) !important;
}

/* ── NUCLEAR RING KILL — two layers of specificity ──────────────────────────
   Layer 1 (.pe-orb-sphere): overrides 110-perfect-event-orbit-core.css
   Layer 2 (#peSecondRight + all 8 planet classes): beats any injected patches
   outline: none catches browser focus rings on role="button" elements.
   ─────────────────────────────────────────────────────────────────────────── */
.pe-orb-sphere,
.pe-orb-ideas,
.pe-orb-vr,
.pe-orb-staff,
.pe-orb-led,
.pe-orb-bar,
.pe-orb-materials,
.pe-orb-motion,
.pe-orb-activation,
#peSecondRight .pe-orb-sphere {
  border: none !important;
  outline: none !important;
  box-shadow: none;
  background: transparent !important;
}

.pe-orb-sphere::before,
.pe-orb-sphere::after,
#peSecondRight .pe-orb-sphere::before,
#peSecondRight .pe-orb-sphere::after {
  display: none !important;
  content: none !important;
}

/* ── THE ACTUAL PHANTOM RING ─────────────────────────────────────────────────
   .pe-orb-play-icon is an empty <div> in the HTML (separate from .pe-play-icon
   created by JS). It has border: 1px solid rgba(255,255,255,0.3) and a white
   background — a circular element centered in the sphere at 30% of its size.
   On small planets, this circle covers ~50% of the sphere and looks like a ring
   wrapping the planet content. Kill the border/bg; keep only the ::after triangle.
   ─────────────────────────────────────────────────────────────────────────── */
.pe-orb-play-icon {
  border: none !important;
  background: transparent !important;
  box-shadow: none !important;
}

/* Label OUTSIDE the sphere — below it */
.pe-orb-sphere .pe-sphere-label {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  /* hide play icon, show only text */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  pointer-events: none;
}

.pe-orb-sphere .pe-sphere-label .pe-label-text {
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  font-size: clamp(12px, 0.72vw, 22px);
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.52);
  text-transform: none;
  white-space: nowrap;
  text-shadow: none;
}

/* Hide play icon inside label */
.pe-orb-sphere .pe-sphere-label .pe-play-icon,
.pe-orb-sphere .pe-sphere-label::after,
.pe-orb-sphere .pe-sphere-label::before {
  display: none !important;
}

.pe-orb-sphere:hover {
  transform: translate(-50%, calc(-50% - 4px)) scale(1.04) !important;
}

/* drop-shadow follows the planet's actual pixel silhouette.
   scale(1.15) on the video element (not the wrapper) so it animates
   independently of any wrapper-level lift transform from the sphere hover. */
.pe-orb-sphere:hover .pe-orb-video {
  transform: scale(1.15) !important;
  filter: grayscale(0) contrast(0.05) brightness(0.1) drop-shadow(0 0 15px rgba(0, 212, 255, 0.8))
    drop-shadow(0 0 30px rgba(0, 100, 255, 0.5)) !important;
}

/* ── FIX VIDEO ICON ALIGNMENT INSIDE SPHERES ── */
.pe-orb-sphere {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
}

/* label is now OUTSIDE — absolute below sphere */
.pe-orb-sphere .pe-sphere-label {
  position: absolute !important;
  top: calc(100% + 8px) !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  z-index: 20 !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 0 !important;
  line-height: 1 !important;
}

.pe-orb-sphere .pe-sphere-label::before,
.pe-orb-sphere .pe-sphere-label::after {
  content: none !important;
}

/* stable centered video button */
.pe-orb-sphere .pe-play-icon {
  position: relative !important;
  z-index: 7 !important;
  width: 30px !important;
  height: 30px !important;
  min-width: 30px !important;
  min-height: 30px !important;
  border-radius: 50% !important;
  border: 2px solid rgba(255, 255, 255, 0.86) !important;
  box-shadow:
    0 0 8px rgba(255, 255, 255, 0.26),
    0 0 18px rgba(0, 212, 255, 0.32),
    inset 0 0 10px rgba(0, 212, 255, 0.08) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 0 !important;
  padding: 0 !important;
  transform: none !important;
}

.pe-orb-sphere .pe-play-icon::before {
  content: '' !important;
  display: block !important;
  width: 0 !important;
  height: 0 !important;
  margin-left: 3px !important;
  border-left: 9px solid rgba(255, 255, 255, 0.92) !important;
  border-top: 6px solid transparent !important;
  border-bottom: 6px solid transparent !important;
  filter: drop-shadow(0 0 7px rgba(0, 212, 255, 0.55)) !important;
}

/* make tiny spheres keep icon centered and proportional */
.pe-orb-sphere.small .pe-play-icon,
.pe-orb-sphere[data-size='small'] .pe-play-icon {
  width: 26px !important;
  height: 26px !important;
  min-width: 26px !important;
  min-height: 26px !important;
}

/* ── FINAL SMOOTH TITLE + LABEL VISIBILITY PATCH ── */
.pe-orb-title,
#peOrbTitle,
#peHighlight {
  will-change: transform, opacity, filter;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform-style: preserve-3d;
}

#peHighlight {
  transform-origin: center center !important;
}

.pe-orb-title,
#peOrbTitle {
  left: 50% !important;
  top: 50% !important;
  transform: translate3d(-50%, -50%, 0) scale(1) !important;
  text-align: center !important;
  white-space: nowrap !important;
  line-height: 0.95 !important;
}

.pe-orb-sphere {
  /* contain removed — needed for label outside sphere */
}

.pe-orb-sphere .pe-sphere-label {
  position: absolute !important;
  top: calc(100% + 8px) !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  opacity: 1 !important;
  visibility: visible !important;
  color: rgba(255, 255, 255, 0.5) !important;
  text-shadow: none !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  pointer-events: none !important;
  z-index: 20 !important;
  /* no glow, no cyan */
}

.pe-orb-sphere .pe-label-text {
  display: block !important;
  opacity: 1 !important;
  visibility: visible !important;
  white-space: nowrap !important;
  font-family: 'Syne', sans-serif !important;
  font-weight: 600 !important;
  font-size: clamp(12px, 2vw, 18px) !important;
  letter-spacing: 0.2em !important;
  text-transform: uppercase !important;
  color: rgba(255, 255, 255, 0.5) !important;
  text-shadow: none !important;
  line-height: 1 !important;
}

/* Hide play icon */
.pe-orb-sphere .pe-play-icon {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 28px !important;
  height: 28px !important;
  border-radius: 50% !important;
  background: rgba(255, 255, 255, 0.07) !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
  backdrop-filter: blur(8px) !important;
  position: relative !important;
  z-index: 5 !important;
  flex-shrink: 0 !important;
  margin: 0 auto !important;
  /* triangle via clip */
}
.pe-orb-sphere .pe-play-icon::before {
  content: '' !important;
  display: block !important;
  width: 0 !important;
  height: 0 !important;
  border-top: 5px solid transparent !important;
  border-bottom: 5px solid transparent !important;
  border-left: 8px solid rgba(255, 255, 255, 0.55) !important;
  margin-left: 2px !important;
  filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.2)) !important;
}

/* ── ORBIT SVG RINGS — permanently hidden ── */
.pe-orb-svg {
  display: none !important;
}

/* ── PLANET VIDEO ────────────────────────────────────────────────────────
   Fills the sphere, mix-blend-mode: screen removes the black background:
   black areas become transparent, bright planet content shows through.
   z-index: 1 keeps it below the ::before gloss (z:2) and play icon (z:5+).
   ─────────────────────────────────────────────────────────────────────── */
.pe-orb-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  mix-blend-mode: screen;
  /* grayscale(1): planets start desaturated and reveal color on hover.
     grayscale must be first so its position is stable for CSS transition. */
  filter: grayscale(1) contrast(1.15) brightness(0.9);
  pointer-events: none;
  z-index: 1;
  /* transform included so scale(1.15) on hover animates smoothly without
     fighting any wrapper-level transform owned by the parent sphere. */
  transition:
    transform 0.6s cubic-bezier(0.25, 1, 0.5, 1),
    filter 0.6s cubic-bezier(0.25, 1, 0.5, 1) !important;
}

/* ── MOBILE: replace orbit with vertical flex stack ──────────────────────
   Below 768px the scroll-based orbit animation is disabled by JS.
   We reset all absolute positioning and switch to a simple column layout.
   !important overrides both the orbit CSS and any JS inline transforms.
   ─────────────────────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .pe-second-right {
    position: relative !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    gap: 12px !important;
    width: 100% !important;
    height: auto !important;
    top: auto !important;
    left: auto !important;
    transform: none !important;
    padding: 32px 0 48px !important;
    overflow: visible !important;
  }

  /* reset all individual sphere positions to flow in the column */
  .pe-orb-sphere {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;
    transform: none !important;
    /* uniform base size on mobile — cumulative ×1.15 ×1.10 from original */
    width: clamp(127px, 38vw, 165px) !important;
    height: clamp(127px, 38vw, 165px) !important;
    /* bottom margin leaves room for the absolute label below each sphere */
    margin-bottom: 28px !important;
  }

  /* Stand stays visually largest — cumulative ×1.15 ×1.10 from original */
  .pe-orb-ideas {
    width: clamp(175px, 53.1vw, 222px) !important;
    height: clamp(175px, 53.1vw, 222px) !important;
  }
}

/* Directional lighting via ::after was removed — the overlay rendered as an
   offset square artefact due to the sphere's internal transform context.
   Hard reset ensures no ::after ever renders on orbit spheres. */
.pe-orb-sphere::after {
  display: none !important;
  content: none !important;
}
`,fc=`/* ── NO-JUMP PERFECT EVENT GHOST TRANSITION ── */
#peGhostTitle {
  position: fixed !important;
  z-index: 9998 !important;
  pointer-events: none !important;
  margin: 0 !important;
  transform-origin: center center !important;
  will-change: transform, opacity, filter !important;
  backface-visibility: hidden !important;
  -webkit-backface-visibility: hidden !important;
}

#peHighlight.pe-ghost-hidden {
  opacity: 0 !important;
}

#peOrbTitle {
  will-change: opacity, filter, transform !important;
}

/* ── FIX TITLE OVERLAP DURING TRANSITION ── */
#peHighlight.pe-ghost-hidden {
  opacity: 0 !important;
  visibility: hidden !important;
}

#peGhostTitle {
  white-space: nowrap !important;
  text-align: center !important;
}

#peOrbTitle {
  opacity: 0;
  white-space: nowrap !important;
  text-align: center !important;
}

/* ── FINAL: ONE SMOOTH TITLE, NO BLINKING / NO OVERLAP ── */
#peOrbTitle {
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
}

#peGhostTitle {
  position: fixed !important;
  z-index: 9998 !important;
  pointer-events: none !important;
  margin: 0 !important;
  white-space: nowrap !important;
  text-align: center !important;
  transform-origin: center center !important;
  will-change: transform, opacity, filter !important;
  backface-visibility: hidden !important;
  -webkit-backface-visibility: hidden !important;
}

#peHighlight.pe-ghost-hidden {
  opacity: 0 !important;
  visibility: hidden !important;
}

/* final transition fix: no duplicate, no blinking, fade after center */
#peOrbTitle {
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
}
#peHighlight.pe-ghost-hidden {
  opacity: 0 !important;
  visibility: hidden !important;
}
#peGhostTitle {
  white-space: nowrap !important;
  text-align: center !important;
}
`,pc=`/* ── CINEMATIC GLOWING ORBIT LINES AROUND SPHERES ── */
.pe-second,
#peSecond {
  overflow: hidden;
}

.pe-orbit-cinematic {
  position: absolute;
  left: 50%;
  top: 52%;
  width: min(1040px, 86vw);
  height: min(520px, 48vw);
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
  opacity: 0;
  filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.46)) drop-shadow(0 0 34px rgba(0, 90, 255, 0.22));
  transition:
    opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1),
    filter 1.1s cubic-bezier(0.16, 1, 0.3, 1);
}

.pe-second[style*='visible'] .pe-orbit-cinematic,
#peSecond[style*='visible'] .pe-orbit-cinematic {
  opacity: 0.95;
}

.pe-orbit-cinematic svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

.pe-orbit-cinematic .orbit-core {
  fill: none;
  stroke: rgba(0, 212, 255, 0.22);
  stroke-width: 1.1;
}

.pe-orbit-cinematic .orbit-soft {
  fill: none;
  stroke: rgba(110, 80, 255, 0.2);
  stroke-width: 1;
}

.pe-orbit-cinematic .orbit-dash {
  fill: none;
  stroke: rgba(96, 230, 255, 0.34);
  stroke-width: 0.9;
  stroke-dasharray: 9 14;
  animation: peDashMove 16s linear infinite;
}

.pe-orbit-cinematic .orbit-gold {
  fill: none;
  stroke: rgba(255, 158, 73, 0.44);
  stroke-width: 1.1;
  stroke-linecap: round;
  stroke-dasharray: 2 18;
  animation: peDashMoveReverse 11s linear infinite;
}

.pe-orbit-cinematic .orbit-comet {
  fill: none;
  stroke: url(#peOrbitGradient);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: 90 860;
  animation: peCometRun 7.8s cubic-bezier(0.55, 0, 0.45, 1) infinite;
}

.pe-orbit-cinematic .orbit-comet.two {
  stroke: url(#peOrbitGradient2);
  stroke-dasharray: 70 760;
  animation-duration: 9.4s;
  animation-delay: -3.1s;
}

.pe-orbit-cinematic .orbit-spark {
  fill: rgba(0, 212, 255, 0.95);
  filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.9));
  animation: peSparkPulse 3.2s ease-in-out infinite;
}

.pe-orbit-cinematic .orbit-spark.gold {
  fill: rgba(255, 170, 85, 0.95);
  filter: drop-shadow(0 0 8px rgba(255, 145, 64, 0.8));
  animation-delay: -1.2s;
}

@keyframes peDashMove {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -420;
  }
}

@keyframes peDashMoveReverse {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 360;
  }
}

@keyframes peCometRun {
  0% {
    stroke-dashoffset: 900;
    opacity: 0.08;
  }
  16% {
    opacity: 0.95;
  }
  70% {
    opacity: 0.82;
  }
  100% {
    stroke-dashoffset: -220;
    opacity: 0.08;
  }
}

@keyframes peSparkPulse {
  0%,
  100% {
    opacity: 0.35;
    transform: scale(0.82);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

/* keep spheres above the orbit lines */
.pe-orb-sphere {
  z-index: 4 !important;
}

#peGhostTitle {
  z-index: 7 !important;
}

/* ── EXTRA CINEMATIC LIGHTING / MORE GLOW LINES ── */
.pe-second::before,
#peSecond::before {
  content: '';
  position: absolute;
  inset: -10%;
  pointer-events: none;
  z-index: 0;
  background:
    radial-gradient(
      ellipse at 50% 48%,
      rgba(0, 212, 255, 0.18) 0%,
      rgba(0, 212, 255, 0.07) 28%,
      transparent 58%
    ),
    radial-gradient(ellipse at 23% 42%, rgba(0, 145, 255, 0.12) 0%, transparent 34%),
    radial-gradient(ellipse at 80% 55%, rgba(76, 62, 255, 0.14) 0%, transparent 38%);
  filter: blur(18px);
  opacity: 0.95;
}

.pe-second::after,
#peSecond::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 54%;
  width: min(980px, 82vw);
  height: min(260px, 28vw);
  transform: translate(-50%, -50%) rotate(-3deg);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 212, 255, 0.16) 0%,
    rgba(0, 212, 255, 0.05) 35%,
    transparent 72%
  );
  filter: blur(22px);
  opacity: 0.85;
}

.pe-orbit-cinematic {
  z-index: 2 !important;
  opacity: 1 !important;
  filter: drop-shadow(0 0 12px rgba(0, 212, 255, 0.78))
    drop-shadow(0 0 38px rgba(0, 115, 255, 0.42)) drop-shadow(0 0 74px rgba(0, 212, 255, 0.18)) !important;
}

.pe-orbit-cinematic .orbit-core {
  stroke: rgba(0, 212, 255, 0.34) !important;
  stroke-width: 1.35 !important;
}

.pe-orbit-cinematic .orbit-soft {
  stroke: rgba(120, 90, 255, 0.31) !important;
  stroke-width: 1.15 !important;
}

.pe-orbit-cinematic .orbit-dash {
  stroke: rgba(105, 235, 255, 0.5) !important;
  stroke-width: 1.05 !important;
}

.pe-orbit-cinematic .orbit-gold {
  stroke: rgba(255, 161, 76, 0.56) !important;
  stroke-width: 1.25 !important;
}

.pe-orbit-cinematic .orbit-comet {
  stroke-width: 2.8 !important;
  opacity: 0.95;
}

.pe-orbit-cinematic .orbit-comet.two {
  stroke-width: 2.3 !important;
}

.pe-orbit-cinematic .orbit-wide {
  fill: none;
  stroke: rgba(0, 212, 255, 0.14);
  stroke-width: 1;
  stroke-linecap: round;
  stroke-dasharray: 1 10;
  animation: peDashMove 22s linear infinite;
}

.pe-orbit-cinematic .orbit-wide.purple {
  stroke: rgba(122, 92, 255, 0.18);
  stroke-dasharray: 14 22;
  animation-duration: 28s;
  animation-direction: reverse;
}

.pe-orbit-cinematic .orbit-thread {
  fill: none;
  stroke: rgba(255, 255, 255, 0.16);
  stroke-width: 0.65;
  stroke-linecap: round;
  stroke-dasharray: 38 260;
  animation: peThreadRun 12s ease-in-out infinite;
}

.pe-orbit-cinematic .orbit-thread.cyan {
  stroke: rgba(0, 212, 255, 0.28);
  stroke-width: 0.8;
  animation-duration: 10s;
  animation-delay: -4s;
}

.pe-orbit-cinematic .orbit-flare {
  fill: rgba(255, 255, 255, 0.95);
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.9))
    drop-shadow(0 0 22px rgba(0, 212, 255, 0.8));
  animation: peFlarePulse 2.8s ease-in-out infinite;
}

@keyframes peThreadRun {
  0% {
    stroke-dashoffset: 380;
    opacity: 0.08;
  }
  20% {
    opacity: 0.72;
  }
  80% {
    opacity: 0.5;
  }
  100% {
    stroke-dashoffset: -520;
    opacity: 0.08;
  }
}

@keyframes peFlarePulse {
  0%,
  100% {
    opacity: 0.25;
    transform: scale(0.7);
  }
  45% {
    opacity: 1;
    transform: scale(1.35);
  }
  65% {
    opacity: 0.55;
    transform: scale(0.95);
  }
}

/* stronger glow around the spheres themselves */
.pe-orb-sphere {
  box-shadow:
    inset 0 0 34px rgba(0, 212, 255, 0.22),
    inset 20px 24px 38px rgba(255, 255, 255, 0.07),
    inset -26px -26px 50px rgba(0, 0, 0, 0.78),
    0 0 22px rgba(0, 212, 255, 0.62),
    0 0 70px rgba(0, 115, 255, 0.34),
    0 0 120px rgba(0, 212, 255, 0.11) !important;
}

/* .pe-orb-sphere::after {
  box-shadow:
    inset 0 0 24px rgba(255, 255, 255, 0.16),
    0 0 20px rgba(0, 212, 255, 0.72),
    0 0 58px rgba(0, 212, 255, 0.36) !important;
} */
`,mc=`/* ── FIXED PERFECT EVENT TRANSITION: center lock + early fade ── */
#peOrbTitle {
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
}

#peHighlight.pe-ghost-hidden {
  opacity: 0 !important;
  visibility: hidden !important;
}

#peGhostTitle {
  white-space: nowrap !important;
  text-align: center !important;
  transform-origin: center center !important;
  will-change: transform, opacity, filter !important;
  backface-visibility: hidden !important;
  -webkit-backface-visibility: hidden !important;
}

/* ── PERFECT EVENT CENTER LOCK: fixed layer stays independent from page scroll ── */
#peGhostTitle {
  position: fixed !important;
}

/* final hard lock for centered Perfect Event */
#peGhostTitle {
  position: fixed !important;
  z-index: 9998 !important;
}

/* ── HARD FIX: PERFECT EVENT MUST NOT JUMP AFTER CENTER LOCK ── */
#peGhostTitle {
  position: fixed !important;
  z-index: 9998 !important;
  pointer-events: none !important;
  margin: 0 !important;
  white-space: nowrap !important;
  text-align: center !important;
  transform-origin: center center !important;
  will-change: transform, opacity, filter !important;
}

/* final persistent center lock for Perfect Event */
#peGhostTitle {
  position: fixed !important;
  z-index: 9998 !important;
  pointer-events: none !important;
  white-space: nowrap !important;
  text-align: center !important;
  transform-origin: center center !important;
}
`,hc=`/* SPHERES SCREEN SUBTITLE UNDER PERFECT EVENT */
.pe-second-right {
  position: relative;
}

.pe-orb-subtitle {
  position: absolute;
  left: 50%;
  top: calc(50% + 58px);
  transform: translateX(-50%) translateY(10px);
  z-index: 6;
  font-family: var(--font-b);
  font-size: 10px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 0.24em;
  text-transform: none;
  color: rgba(0, 212, 255, 0.82);
  text-shadow: 0 0 14px rgba(0, 212, 255, 0.28);
  white-space: nowrap;
  pointer-events: none;
  /* hidden by default — JS reveals with nav */
  opacity: 0;
}

/* nav-btn always visible in nav */
`,gc=`/* SERVICES CHECKERBOARD */
.svc-chess-wrap {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.svc-chess-intro {
  padding: 56px 48px 36px;
  text-align: center;
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.svc-chess-intro.show {
  opacity: 1;
  transform: translateY(0);
}

.flash-text {
  font-family: var(--font-d);
  font-size: clamp(22px, 2.8vw, 40px);
  font-weight: 700;
  color: #fff;
  line-height: 1.05;
  margin-top: 10px;
}
.flash-text em {
  font-style: normal;
  color: var(--accent);
  text-shadow: 0 0 40px rgba(0, 212, 255, 0.4);
}

.svc-chess-grid {
  display: flex;
  flex-direction: column;
}

.svc-chess-row {
  display: grid;
  grid-template-columns: 62fr 38fr;
  min-height: 280px;
  border-top: 0.5px solid rgba(255, 255, 255, 0.05);
  opacity: 0;
  transform: translateY(48px);
  transition:
    opacity 0.85s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.85s cubic-bezier(0.4, 0, 0.2, 1);
}
.svc-chess-row.chess-row-reverse {
  grid-template-columns: 38fr 62fr;
}
.svc-chess-row.chess-vis {
  opacity: 1;
  transform: translateY(0);
}

/* VIDEO CARD */
.chess-video {
  position: relative;
  overflow: hidden;
  background: #010d1a;
}
.chess-video::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 30% 40%, rgba(0, 212, 255, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 70% 70%, rgba(0, 80, 200, 0.05) 0%, transparent 55%),
    linear-gradient(145deg, #010d1a 0%, #010810 100%);
  z-index: 0;
}
.chess-video-scan {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(0, 212, 255, 0.012) 3px,
    rgba(0, 212, 255, 0.012) 4px
  );
  z-index: 1;
  pointer-events: none;
}
.chess-video-inner {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 22px 28px;
  z-index: 2;
}
.chess-video-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--accent), transparent);
  transform: scaleX(0);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 3;
}
.chess-video:hover .chess-video-accent {
  transform: scaleX(1);
}

.chess-num {
  font-family: var(--font-d);
  font-size: clamp(40px, 5vw, 72px);
  font-weight: 700;
  line-height: 1;
  color: rgba(255, 255, 255, 0.04);
  position: absolute;
  top: 28px;
  left: 32px;
  letter-spacing: -0.02em;
  user-select: none;
  pointer-events: none;
}
.chess-placeholder {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  opacity: 0.07;
  z-index: 1;
}
.chess-placeholder svg {
  width: 100%;
  height: 100%;
}
.chess-vid-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 9px;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.22);
  text-transform: none;
  margin-bottom: 8px;
}
.chess-vid-tag::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 1px;
  background: rgba(255, 255, 255, 0.18);
}
.chess-label {
  font-family: var(--font-d);
  font-size: clamp(16px, 2vw, 26px);
  font-weight: 700;
  color: #fff;
  line-height: 1.05;
}

/* GLASS CARD */
.chess-glass {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px 28px;
  position: relative;
  background: rgba(255, 255, 255, 0.025);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-left: 0.5px solid rgba(255, 255, 255, 0.06);
}
.chess-row-reverse .chess-glass {
  border-left: none;
  border-right: 0.5px solid rgba(255, 255, 255, 0.06);
}
.chess-glass::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.08), transparent);
  pointer-events: none;
}
.chess-glass-inner {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.04) 50%,
    rgba(255, 255, 255, 0.08) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-top-color: rgba(255, 255, 255, 0.32);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-radius: 28px;
  padding: 28px 24px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 2px 0 rgba(255, 255, 255, 0.18) inset,
    0 -1px 0 rgba(255, 255, 255, 0.05) inset,
    0 32px 64px rgba(0, 0, 0, 0.32),
    0 8px 24px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(32px) saturate(1.5);
  -webkit-backdrop-filter: blur(32px) saturate(1.5);
  transition:
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s;
  width: 100%;
  max-width: 300px;
}
.chess-glass-inner::before {
  content: '';
  position: absolute;
  top: 1px;
  left: 12%;
  right: 12%;
  height: 38%;
  border-radius: 28px 28px 60% 60%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 100%);
  pointer-events: none;
}
.chess-glass-inner::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 20%;
  right: 20%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(0, 212, 255, 0.4), transparent);
  pointer-events: none;
}
.chess-glass:hover .chess-glass-inner {
  transform: translateY(-4px) scale(1.02);
  box-shadow:
    0 2px 0 rgba(255, 255, 255, 0.2) inset,
    0 48px 80px rgba(0, 0, 0, 0.38),
    0 0 48px rgba(0, 212, 255, 0.08);
}
.chess-glass-icon {
  width: 36px;
  height: 36px;
  margin: 0 auto 14px;
  color: var(--accent);
  opacity: 0.9;
}
.chess-glass-icon svg {
  width: 100%;
  height: 100%;
}
.chess-glass-title {
  font-family: var(--font-d);
  font-size: clamp(13px, 1.2vw, 17px);
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
  line-height: 1.1;
}
.chess-glass-desc {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.36);
  line-height: 1.65;
}

@media (max-width: 768px) {
  .svc-chess-row,
  .svc-chess-row.chess-row-reverse {
    grid-template-columns: 1fr;
    min-height: auto;
  }
  .chess-row-reverse .chess-glass {
    order: -1;
  }
  .chess-video {
    min-height: 280px;
  }
  .svc-chess-intro {
    padding: 60px 24px 40px;
  }
}

/* Portal draw animation */
@keyframes drawPath {
  from {
    stroke-dashoffset: 1200;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes drawLine {
  from {
    stroke-dashoffset: 500;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes drawEllipse {
  from {
    stroke-dashoffset: 800;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes fadeInSvg {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* SERVICES 3×3 GRID */
.svc-orbit-wrap {
  position: relative;
  z-index: 1;
  background: var(--bg);
  padding: 40px 40px 60px;
}

.svc-orbit-stage {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 140px);
  gap: 12px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

/* CENTER CELL */
.svc-orbit-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
}
.svc-orbit-center.vis {
  animation: orbitCenterIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
@keyframes orbitCenterIn {
  0% {
    opacity: 0;
    filter: blur(18px) brightness(2.5);
    transform: scale(1.1);
  }
  40% {
    opacity: 1;
    filter: blur(0) brightness(1.4);
  }
  100% {
    opacity: 1;
    filter: blur(0) brightness(1);
    transform: scale(1);
  }
}
.svc-orbit-center .eyebrow {
  margin-bottom: 6px;
}
.svc-orbit-title {
  font-family: var(--font-d);
  font-size: clamp(20px, 2.4vw, 32px);
  font-weight: 700;
  color: #fff;
  line-height: 1.05;
  white-space: nowrap;
}
.svc-orbit-title em {
  font-style: normal;
  color: var(--accent);
  text-shadow: 0 0 40px rgba(0, 212, 255, 0.5);
}

/* GLASS BUTTONS */
.svc-glass-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.09) 0%,
    rgba(255, 255, 255, 0.02) 60%,
    rgba(255, 255, 255, 0.06) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-top-color: rgba(255, 255, 255, 0.22);
  border-bottom-color: rgba(255, 255, 255, 0.04);
  border-radius: 18px;
  backdrop-filter: blur(20px) saturate(1.3);
  -webkit-backdrop-filter: blur(20px) saturate(1.3);
  box-shadow:
    0 2px 0 rgba(255, 255, 255, 0.1) inset,
    0 10px 24px rgba(0, 0, 0, 0.28);
  position: relative;
  overflow: hidden;

  opacity: 0;
  filter: blur(10px);
  transform: scale(0.9);
  transition:
    transform 0.28s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.28s,
    border-color 0.28s;
}

.svc-glass-btn::before {
  content: '';
  position: absolute;
  top: 1px;
  left: 12%;
  right: 12%;
  height: 34%;
  border-radius: 18px 18px 50% 50%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.14) 0%, transparent 100%);
  pointer-events: none;
}
.svc-glass-btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 20%;
  right: 20%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(0, 212, 255, 0.38), transparent);
  pointer-events: none;
}

/* appear animation — all together, slow, from darkness */
.svc-glass-btn.vis {
  animation: glsBtnAppear 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes glsBtnAppear {
  0% {
    opacity: 0;
    filter: brightness(0);
  }
  40% {
    opacity: 0.15;
    filter: brightness(0.3);
  }
  70% {
    opacity: 0.7;
    filter: brightness(0.8);
  }
  100% {
    opacity: 1;
    filter: brightness(1);
  }
}

/* WATCH neon flash — all at once after buttons appear */
.btn-watch.neon {
  animation: watchNeon 1.4s ease forwards;
}
@keyframes watchNeon {
  0% {
    color: rgba(255, 255, 255, 0.22);
    text-shadow: none;
  }
  15% {
    color: #00d4ff;
    text-shadow:
      0 0 6px #00d4ff,
      0 0 18px #00d4ff,
      0 0 40px rgba(0, 212, 255, 0.8);
  }
  35% {
    color: #fff;
    text-shadow:
      0 0 4px #fff,
      0 0 16px rgba(0, 212, 255, 0.9),
      0 0 48px rgba(0, 212, 255, 0.6);
  }
  55% {
    color: #00d4ff;
    text-shadow:
      0 0 8px #00d4ff,
      0 0 24px #00d4ff,
      0 0 60px rgba(0, 212, 255, 0.7);
  }
  100% {
    color: rgba(255, 255, 255, 0.22);
    text-shadow: none;
  }
}
.btn-watch.neon::before {
  animation: watchLine 1.4s ease forwards;
}
@keyframes watchLine {
  0% {
    background: rgba(255, 255, 255, 0.18);
    box-shadow: none;
  }
  35% {
    background: #00d4ff;
    box-shadow: 0 0 6px #00d4ff;
  }
  100% {
    background: rgba(255, 255, 255, 0.18);
    box-shadow: none;
  }
}

.svc-glass-btn:hover {
  border-color: rgba(0, 212, 255, 0.28);
  border-top-color: rgba(0, 212, 255, 0.44);
  box-shadow:
    0 2px 0 rgba(255, 255, 255, 0.14) inset,
    0 16px 36px rgba(0, 0, 0, 0.34),
    0 0 24px rgba(0, 212, 255, 0.08);
  transform: scale(1.03);
}

.svc-glass-btn svg {
  width: 32px;
  height: 32px;
  color: var(--accent);
  opacity: 0.88;
  flex-shrink: 0;
}
.svc-glass-btn span {
  font-family: var(--font-d);
  font-size: clamp(13px, 1.3vw, 16px);
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.07em;
  text-transform: none;
  line-height: 1.2;
  text-align: center;
  padding: 0 8px;
}

@media (max-width: 768px) {
  .svc-orbit-wrap {
    padding: 24px 12px 40px;
  }
  .svc-orbit-stage {
    grid-template-rows: repeat(3, 110px);
    gap: 8px;
  }
  .svc-glass-btn svg {
    width: 20px;
    height: 20px;
  }
  .svc-glass-btn span {
    font-size: 8px;
  }
  .svc-orbit-title {
    font-size: 16px;
    white-space: normal;
  }
}

/* TICKER RIBBON */
.hero-tag-ticker {
  position: absolute;
  bottom: 28px;
  left: 52px;
  overflow: hidden;
  width: 260px;
  background: rgba(6, 14, 26, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 0.5px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 8px 12px;
}
.ticker-track {
  display: flex;
  align-items: center;
  gap: 14px;
  white-space: nowrap;
  will-change: transform;
  animation: tickerScroll 12s linear infinite;
}
/* Pause scroll when user hovers the ribbon */
.hero-tag-ticker:hover .ticker-track {
  animation-play-state: paused;
}
.ticker-track span {
  font-family: var(--font-b);
  font-size: 11px;
  color: #5a6a7a;
  letter-spacing: 0.07em;
  text-transform: none;
  font-weight: 400;
  flex-shrink: 0;
  cursor: default;
  user-select: none;
}
/* Neon glow on individual words — excludes the dot separators */
.ticker-track span:not(.dot) {
  transition:
    color 0.3s cubic-bezier(0.25, 1, 0.5, 1),
    text-shadow 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}
.ticker-track span:not(.dot):hover {
  color: var(--accent);
  text-shadow:
    0 0 8px rgba(0, 212, 255, 0.7),
    0 0 20px rgba(0, 212, 255, 0.25);
}
.ticker-track .dot {
  color: rgba(255, 255, 255, 0.15);
  letter-spacing: 0;
  font-size: 11px;
}
/* translate3d explicitly triggers GPU compositing layer */
@keyframes tickerScroll {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

/* All SVG paths get draw animation when .drawn is added */
.portal-svg-wrap.drawn .draw-path {
  stroke-dasharray: 1200;
  stroke-dashoffset: 0;
  animation: drawPath 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.portal-svg-wrap.drawn .draw-line {
  stroke-dasharray: 500;
  stroke-dashoffset: 0;
  animation: drawLine 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.portal-svg-wrap.drawn .draw-ellipse {
  stroke-dasharray: 800;
  stroke-dashoffset: 0;
  animation: drawEllipse 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* removed */
.yt-badge-old {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 28px;
  height: 20px;
  background: #ff0000;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition:
    transform 0.2s,
    background 0.2s;
}
.svc-glass-btn:hover .yt-badge {
  transform: scale(1.15);
  background: #ff2a2a;
}
.yt-badge svg {
  width: 11px !important;
  height: 11px !important;
  color: #fff !important;
  opacity: 1 !important;
  margin: 0 !important;
}

/* WATCH label on buttons */
.btn-watch {
  position: absolute;
  bottom: 10px;
  right: 13px;
  font-size: 8px !important;
  font-weight: 700 !important;
  letter-spacing: 0.16em !important;
  color: rgba(255, 255, 255, 0.22) !important;
  text-transform: uppercase !important;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.2s;
}
.btn-watch::before {
  content: '';
  display: inline-block;
  width: 14px;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  transition:
    background 0.2s,
    width 0.2s;
}
.svc-glass-btn:hover .btn-watch {
  color: var(--accent) !important;
}
.svc-glass-btn:hover .btn-watch::before {
  background: var(--accent);
  width: 20px;
}

/* buttons section on right */
`,_c=`/* CTA messenger buttons */
.cta-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.cta-messengers {
  display: flex;
  align-items: center;
  gap: 10px;
}
.msg-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--glass-a);
  border: 0.5px solid var(--glass-ab);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  text-decoration: none;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
  animation: msgPulseTelegram 2.4s ease-in-out infinite;
}
.msg-btn svg {
  width: 20px;
  height: 20px;
  fill: #fff;
  opacity: 0.9;
}
.msg-btn.tg:hover {
  border-color: #00d4ff;
  background: rgba(0, 212, 255, 0.14);
  box-shadow: 0 0 18px rgba(0, 212, 255, 0.45);
}
.msg-btn.wa {
  animation-name: msgPulseWhatsApp;
  animation-delay: 0.35s;
}
.msg-btn.wa:hover {
  border-color: #25d366;
  background: rgba(37, 211, 102, 0.12);
  box-shadow: 0 0 18px rgba(37, 211, 102, 0.45);
}
@keyframes msgPulseTelegram {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(0, 212, 255, 0);
  }
  50% {
    transform: scale(1.08);
    box-shadow: 0 0 18px rgba(0, 212, 255, 0.28);
  }
}
@keyframes msgPulseWhatsApp {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(37, 211, 102, 0);
  }
  50% {
    transform: scale(1.08);
    box-shadow: 0 0 18px rgba(37, 211, 102, 0.32);
  }
}
@media (max-width: 768px) {
  .cta-actions {
    justify-content: center;
  }
}

/* UNIFIED SECTION HEADINGS */
.section-title-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.section-title-block.center {
  align-items: center;
  text-align: center;
}

.section-title-block .section-title,
.section-title-block .sh {
  font-family: var(--font-d);
  font-size: clamp(28px, 3.5vw, 48px) !important;
  line-height: 1.05;
  font-weight: 700;
  color: #fff;
  margin: 0;
  letter-spacing: -0.02em;
  text-transform: none;
}

.section-title-block .section-title em,
.section-title-block .sh em {
  font-style: normal;
  color: var(--accent);
  text-shadow: 0 0 40px rgba(0, 212, 255, 0.35);
}

.section-subtitle {
  display: block;
  max-width: 100%;
  white-space: nowrap;
  font-size: 10px;
  line-height: 1.35;
  color: var(--accent);
  letter-spacing: 0.18em;
  text-transform: none;
  margin: 0;
}

@media (max-width: 768px) {
  .section-subtitle {
    white-space: normal;
  }
}

/* ORIGINAL COLOR PULSING MESSENGER BUTTONS */
.cta-messengers {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cta-messengers .msg-btn,
.cta-messengers a.msg-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none !important;
  text-decoration: none;
  overflow: visible;
  position: relative;
  transform: translateZ(0);
}

.cta-messengers .msg-btn svg {
  width: 21px;
  height: 21px;
  fill: #fff !important;
  position: relative;
  z-index: 2;
}

.cta-messengers .msg-btn.tg {
  background: #229ed9 !important;
  box-shadow: 0 0 0 rgba(34, 158, 217, 0);
  animation: tgPulseOriginal 2.2s ease-in-out infinite;
}

.cta-messengers .msg-btn.wa {
  background: #25d366 !important;
  box-shadow: 0 0 0 rgba(37, 211, 102, 0);
  animation: waPulseOriginal 2.2s ease-in-out infinite;
  animation-delay: 0.35s;
}

.cta-messengers .msg-btn:hover {
  transform: translateY(-2px) scale(1.08);
}

@keyframes tgPulseOriginal {
  0%,
  100% {
    transform: scale(1);
    box-shadow:
      0 0 0 0 rgba(34, 158, 217, 0.45),
      0 0 18px rgba(34, 158, 217, 0.16);
  }
  50% {
    transform: scale(1.08);
    box-shadow:
      0 0 0 9px rgba(34, 158, 217, 0),
      0 0 26px rgba(34, 158, 217, 0.55);
  }
}

@keyframes waPulseOriginal {
  0%,
  100% {
    transform: scale(1);
    box-shadow:
      0 0 0 0 rgba(37, 211, 102, 0.45),
      0 0 18px rgba(37, 211, 102, 0.16);
  }
  50% {
    transform: scale(1.08);
    box-shadow:
      0 0 0 9px rgba(37, 211, 102, 0),
      0 0 26px rgba(37, 211, 102, 0.55);
  }
}

@media (max-width: 768px) {
  .cta-messengers .msg-btn,
  .cta-messengers a.msg-btn {
    width: 46px;
    height: 46px;
  }
}
`,vc=`/* FLOATING CONTACT BUTTON — liquid transparent glass */
.floating-contact {
  position: fixed;
  top: 14px;
  right: 162px;
  z-index: 99999;
  opacity: 0;
  pointer-events: none;
  transform: scale(0.88);
  transition:
    opacity 0.5s ease,
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.floating-contact.visible {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}
.fc-main {
  width: 50px;
  height: 50px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  position: relative;
  overflow: hidden;
  background: linear-gradient(145deg, #ff1500 0%, #c80a00 55%, #870300 100%);
  border: 1px solid rgba(255, 80, 40, 0.5);
  border-top-color: rgba(255, 140, 100, 0.65);
  border-bottom-color: rgba(140, 10, 0, 0.6);
  box-shadow:
    inset 0 1px 0 rgba(255, 160, 120, 0.4),
    inset 0 -1px 0 rgba(0, 0, 0, 0.3),
    0 4px 20px rgba(200, 20, 0, 0.55),
    0 8px 32px rgba(0, 0, 0, 0.35);
  transition:
    transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.28s ease;
}
/* ::before and ::after removed — they caused compositor layer expansion in
   Safari (::after had inset:-45% extending far beyond the button bounds).
   Visual gloss is achieved via border and box-shadow instead. */
.fc-main:hover {
  transform: translateY(-2px) scale(1.07);
  box-shadow:
    inset 0 1px 0 rgba(255, 180, 140, 0.45),
    0 6px 28px rgba(220, 20, 0, 0.7),
    0 12px 40px rgba(0, 0, 0, 0.4);
}
.fc-main svg {
  width: 28px;
  height: 28px;
  fill: none;
  stroke: #fff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  position: relative;
  z-index: 2;
  /* filter removed — drop-shadow on svg creates a square GPU compositor
     layer in Safari that shows as a square border around the rounded button */
}

/* Pulse removed — animation caused Safari GPU compositing artifacts */

.fc-options {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-8px) scale(0.96);
  transition:
    opacity 0.25s ease,
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.floating-contact.open .fc-options {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0) scale(1);
}
.fc-btn {
  width: 48px;
  height: 48px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.14),
    rgba(255, 255, 255, 0.04) 58%,
    rgba(0, 212, 255, 0.07)
  );
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-top-color: rgba(255, 255, 255, 0.34);
  background: rgba(6, 16, 32, 0.94);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.22),
    0 8px 24px rgba(0, 0, 0, 0.28);
  transform: translateY(-6px);
  transition:
    transform 0.22s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.22s ease,
    box-shadow 0.22s ease;
}
.floating-contact.open .fc-btn {
  transform: translateY(0);
}
.floating-contact.open .fc-btn:nth-child(1) {
  transition-delay: 0.03s;
}
.floating-contact.open .fc-btn:nth-child(2) {
  transition-delay: 0.08s;
}
.fc-btn:hover {
  transform: translateY(-2px) scale(1.07);
}
.fc-btn svg {
  width: 22px;
  height: 22px;
  fill: #fff;
  opacity: 0.94;
  position: relative;
  z-index: 2;
}
@media (max-width: 768px) {
  .floating-contact {
    top: auto;
    bottom: 20px;
    right: 16px;
  }
  .fc-options {
    top: auto;
    bottom: calc(100% + 10px);
  }
  .fc-main {
    width: 54px;
    height: 54px;
    border-radius: 18px;
  }
}

/* colored icons */
.fc-btn.tg svg {
  fill: #229ed9;
}
.fc-btn.wa svg {
  fill: #25d366;
}

/* FLOATING TELEGRAM / WHATSAPP — CLEAR HOVER STATE */
.floating-contact.open .fc-btn.tg:hover,
.floating-contact .fc-btn.tg:hover {
  transform: translateY(-5px) scale(1.12) !important;
  border-color: rgba(34, 158, 217, 0.85) !important;
  background: radial-gradient(
    circle at 50% 42%,
    rgba(34, 158, 217, 0.3),
    rgba(34, 158, 217, 0.1) 58%,
    rgba(255, 255, 255, 0.045)
  ) !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.32),
    0 18px 42px rgba(0, 0, 0, 0.32),
    0 0 20px rgba(34, 158, 217, 0.65),
    0 0 42px rgba(34, 158, 217, 0.32) !important;
}

.floating-contact.open .fc-btn.wa:hover,
.floating-contact .fc-btn.wa:hover {
  transform: translateY(-5px) scale(1.12) !important;
  border-color: rgba(37, 211, 102, 0.85) !important;
  background: radial-gradient(
    circle at 50% 42%,
    rgba(37, 211, 102, 0.3),
    rgba(37, 211, 102, 0.1) 58%,
    rgba(255, 255, 255, 0.045)
  ) !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.32),
    0 18px 42px rgba(0, 0, 0, 0.32),
    0 0 20px rgba(37, 211, 102, 0.65),
    0 0 42px rgba(37, 211, 102, 0.32) !important;
}

.floating-contact .fc-btn:hover svg {
  opacity: 1 !important;
  transform: scale(1.12) !important;
  filter: drop-shadow(0 0 10px currentColor) !important;
}

.floating-contact .fc-btn.tg:hover svg {
  fill: #229ed9 !important;
}

.floating-contact .fc-btn.wa:hover svg {
  fill: #25d366 !important;
}
`,yc=`@keyframes bottomBtnPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 26px rgba(255, 77, 0, 0.38);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
}

@keyframes floatingBtnReveal {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Floating contact appears with the same delay as FULL CYCLE. ZERO STRESS */
@keyframes floatingContactReveal {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.94);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

#floatingContact {
  opacity: 0;
  pointer-events: none;
  transform: translateY(10px) scale(0.94);
  transition:
    opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

#floatingContact.visible {
  pointer-events: auto;
  opacity: 1;
  transform: translateY(0) scale(1);
  /* bottomBtnPulse removed: scale(1.06) on wrapper creates a square GPU tile
     in Safari, rendering the compositor bounding box as a visible rectangle */
}

/* Floating contact options open upward */
#floatingContact .fc-options,
.floating-contact .fc-options {
  bottom: calc(100% + 12px) !important;
  top: auto !important;
  flex-direction: column-reverse !important;
}
`,bc=`/* CINEMATIC SCALE-UP — FULL CYCLE. ZERO STRESS */
.hero-tagline,
.full-cycle-tagline,
.pe-tagline,
#full-cycle-tagline {
  transform-origin: center center !important;
  will-change: transform, opacity, filter, letter-spacing !important;
}

.hero-tagline.animate-in,
.full-cycle-tagline.animate-in,
.pe-tagline.animate-in,
#full-cycle-tagline.animate-in {
  animation: cinematicFullCycleIn 1.35s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
}

@keyframes cinematicFullCycleIn {
  0% {
    opacity: 0;
    transform: scale(0.78) translateY(18px);
    filter: blur(14px);
    letter-spacing: 0.24em;
    text-shadow: 0 0 0 rgba(0, 212, 255, 0);
  }
  42% {
    opacity: 1;
    filter: blur(0);
    text-shadow: 0 0 24px rgba(0, 212, 255, 0.36);
  }
  72% {
    transform: scale(1.24) translateY(-3px);
    letter-spacing: 0.08em;
    text-shadow:
      0 0 18px rgba(255, 255, 255, 0.18),
      0 0 42px rgba(0, 212, 255, 0.42);
  }
  100% {
    opacity: 1;
    transform: scale(1.18) translateY(0);
    filter: blur(0);
    letter-spacing: 0.06em;
    text-shadow:
      0 0 14px rgba(255, 255, 255, 0.12),
      0 0 34px rgba(0, 212, 255, 0.32);
  }
}
`,xc=`/* FULL CYCLE CLEAN FIX */
.hero-tagline,
.full-cycle-text,
.fullcycle-tagline {
  animation: none !important;
  transition: opacity 0.4s ease !important;
  transform: none !important;
  filter: none !important;
  text-shadow: none !important;
}

.hero-tagline::before,
.hero-tagline::after,
.full-cycle-text::before,
.full-cycle-text::after,
.fullcycle-tagline::before,
.fullcycle-tagline::after {
  display: none !important;
  content: none !important;
}
`,Sc=`/* REVEAL */
@keyframes fup {
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.rv {
  opacity: 0;
  transform: translateY(32px);
  transition:
    opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.75s cubic-bezier(0.4, 0, 0.2, 1);
}
.rv.vis {
  opacity: 1;
  transform: translateY(0);
}
.d1 {
  transition-delay: 0.12s;
}
.d2 {
  transition-delay: 0.24s;
}
.d3 {
  transition-delay: 0.36s;
}
.d4 {
  transition-delay: 0.48s;
}

/* Statement cards — slide from sides */
.rv-left {
  opacity: 0;
  transform: translateX(-32px);
  transition:
    opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.rv-left.vis {
  opacity: 1;
  transform: translateX(0);
}
.rv-right {
  opacity: 0;
  transform: translateX(32px);
  transition:
    opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.rv-right.vis {
  opacity: 1;
  transform: translateX(0);
}

/* Scale reveal — for stat cards */
.rv-scale {
  opacity: 0;
  transform: scale(0.94);
  transition:
    opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.rv-scale.vis {
  opacity: 1;
  transform: scale(1);
}

@media (max-width: 768px) {
  /* ── NAV ── */
  nav {
    width: calc(100% - 24px);
    padding: 0 16px;
    height: 56px;
    top: 8px;
  }
  .nav-links {
    display: none !important;
  }
  .nav-contact-wrap {
    display: none !important;
  }
  .nav-btn {
    display: none !important;
  }
  .nav-inner {
    display: flex !important;
    width: 100% !important;
    align-items: center !important;
    justify-content: flex-start !important;
  }

  /* Mobile menu overlay */
  .mobile-menu {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    position: fixed;
    inset: 0;
    background: rgba(2, 10, 20, 0.97);
    backdrop-filter: blur(24px);
    z-index: 99;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
  }
  .mobile-menu.open {
    opacity: 1;
    pointer-events: all;
  }
  .mobile-menu a {
    font-family: var(--font-d);
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    transition: color 0.2s;
  }
  .mobile-menu a:hover {
    color: var(--accent);
  }
  /* Identity only — glass appearance comes from .btn-glass */
  .mobile-menu .mob-cta {
    font-size: 13px !important;
    color: var(--accent2) !important;
    padding: 14px 36px;
    border-radius: 28px;
    margin-top: 8px;
  }
  .mobile-menu .mob-cta:hover {
    color: #fff !important; /* text brightens; glass effect from .btn-glass:hover */
  }
  .mobile-menu .mob-cta:focus {
    outline: none;
  }
  .mobile-menu .mob-cta:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.3);
    outline-offset: 4px;
  }

  /* Hamburger button */
  .burger {
    display: flex !important;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 4px;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: none;
    appearance: none;
    -webkit-appearance: none;
  }
  .burger span {
    display: block;
    width: 22px;
    height: 1.5px;
    background: #fff;
    border-radius: 2px;
    transition:
      transform 0.3s,
      opacity 0.3s;
  }
  nav.menu-open .burger span:nth-child(1) {
    transform: translateY(6.5px) rotate(45deg);
  }
  nav.menu-open .burger span:nth-child(2) {
    opacity: 0;
  }
  nav.menu-open .burger span:nth-child(3) {
    transform: translateY(-6.5px) rotate(-45deg);
  }

  /* ── HERO ── */
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-top: 72px;
  }
  .hero-left {
    padding: 40px 24px 36px;
  }
  .hero-right {
    min-height: 52vw;
  }
  .hero-stats {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  }
  .sp {
    min-width: calc(50% - 4px);
    flex: none;
  }
  .hero-shows {
    display: none;
  }
  .scr {
    display: none;
  }
  .hero-tag-ticker {
    width: 180px;
    left: 24px;
    bottom: 20px;
  }

  /* Hero logo */
  .hero-right img[style*='height:180px'] {
    height: 100px !important;
  }

  /* ── STATEMENT ── */
  .statement {
    padding: 60px 20px;
  }
  .st-inner {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .stats-g {
    grid-template-columns: 1fr 1fr;
  }

  /* ── PORTFOLIO ── */
  .portfolio {
    padding: 0 16px 60px;
  }
  .pg {
    grid-template-columns: 1fr;
  }
  .pc:first-child {
    min-height: 260px;
    grid-row: auto;
  }
  .pc:not(:first-child) {
    aspect-ratio: 16/9;
  }
  .sec-hd {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  /* ── SERVICES GRID 3×3 → 2+1 mobile ── */
  .svc-orbit-wrap {
    padding: 32px 12px 48px;
  }
  .svc-orbit-stage {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 8px;
  }
  /* Center cell spans full width */
  .svc-orbit-center {
    grid-column: 1 / -1;
    padding: 24px 0 16px;
    order: -1;
  }
  .svc-orbit-title {
    font-size: 22px !important;
    white-space: normal;
  }
  .svc-glass-btn {
    height: 110px;
  }
  .svc-glass-btn svg {
    width: 22px;
    height: 22px;
  }
  .svc-glass-btn span {
    font-size: 9px;
  }
  .btn-watch {
    font-size: 6px !important;
    bottom: 6px;
    right: 8px;
  }

  /* ── SHOWS ── */
  .shows {
    padding: 0 16px 60px;
  }
  .shw-g {
    grid-template-columns: 1fr;
  }

  /* ── SERVICES NEW ── */
  .services-new {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
  .services-top {
    grid-template-columns: 1fr !important;
  }
  .svc-grid-new {
    grid-template-columns: 1fr !important;
  }

  /* ── PROCESS ── */
  .process {
    padding: 0 16px 60px;
  }
  .proc-g {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  .proc-g::before {
    display: none;
  }

  /* ── GLOBE ── */
  .globe-layout {
    grid-template-columns: 1fr !important;
  }
  #globe {
    width: 260px !important;
    height: 260px !important;
  }

  /* ── CTA ── */
  .cta-wrap {
    padding: 0 16px 50px;
  }
  .cta-box {
    flex-direction: column;
    padding: 36px 24px;
    text-align: center;
    gap: 24px;
  }

  /* ── FOOTER ── */
  footer {
    flex-direction: column;
    gap: 12px;
    text-align: center;
    padding: 22px 20px;
  }
  footer .fn {
    order: 3;
  }

  /* ── FLASH REVEAL ── */
  .flash-reveal-wrap {
    padding: 40px 16px 60px;
  }
}

/* ── EXTRA SMALL (≤ 400px) ── */
@media (max-width: 400px) {
  h1 {
    font-size: 26px !important;
  }
  .svc-orbit-stage {
    grid-template-columns: 1fr;
  }
  .svc-orbit-center {
    grid-column: 1;
  }
  .stats-g {
    grid-template-columns: 1fr;
  }
  .proc-g {
    grid-template-columns: 1fr;
  }
}
`,Cc=`/* REQUEST CONCEPT POPUP */
.request-popup {
  position: fixed;
  inset: 0;
  z-index: 10050;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  opacity: 0;
  pointer-events: none;
  /* visibility:hidden removed — it prevents backdrop-filter from computing,
     causing the blur to appear with a visible delay on open. With only
     opacity:0 the backdrop compositor layer stays warm in the background. */
  transition: opacity 0.28s ease;
}
.request-popup.is-open {
  opacity: 1;
  pointer-events: auto;
}
.request-popup__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(2, 13, 26, 0.72);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}
.request-popup__card {
  position: relative;
  width: min(560px, 100%);
  border-radius: 28px;
  padding: 34px 34px 30px;
  background:
    radial-gradient(circle at 15% 0%, rgba(0, 212, 255, 0.12), transparent 34%),
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.045) 52%,
      rgba(255, 255, 255, 0.085) 100%
    );
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-top-color: rgba(255, 255, 255, 0.3);
  border-bottom-color: rgba(255, 255, 255, 0.06);
  box-shadow:
    0 2px 0 rgba(255, 255, 255, 0.14) inset,
    0 -1px 0 rgba(255, 255, 255, 0.04) inset,
    0 38px 90px rgba(0, 0, 0, 0.48),
    0 0 80px rgba(0, 212, 255, 0.08);
  backdrop-filter: blur(34px) saturate(1.45);
  -webkit-backdrop-filter: blur(34px) saturate(1.45);
  transform: translateY(18px) scale(0.96);
  /* 60ms delay: backdrop blur (pre-warmed) appears for one beat before card
     slides in, creating a layered reveal without double-opacity compound */
  transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1) 0.06s;
  overflow: hidden;
}
.request-popup.is-open .request-popup__card {
  transform: translateY(0) scale(1);
}
.request-popup__card::before {
  content: '';
  position: absolute;
  top: 1px;
  left: 12%;
  right: 12%;
  height: 28%;
  border-radius: 28px 28px 60% 60%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0));
  pointer-events: none;
}
.request-popup__close {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 38px;
  height: 38px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  z-index: 2;
  transition:
    background 0.2s,
    transform 0.2s;
}
.request-popup__close:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: scale(1.05);
}
.request-popup__eyebrow {
  position: relative;
  z-index: 1;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 12px;
}
.request-popup__title {
  position: relative;
  z-index: 1;
  font-family: var(--font-d);
  font-size: clamp(18px, 1.9vw, 26px);
  line-height: 1.02;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
}
.request-popup__title em {
  font-style: normal;
  color: var(--accent);
  text-shadow: 0 0 38px rgba(0, 212, 255, 0.38);
}
.request-popup__text {
  position: relative;
  z-index: 1;
  font-size: 14.4px;
  line-height: 1.55;
  color: var(--muted);
  font-weight: 400;
  margin-bottom: 22px;
  max-width: 420px;
}
.request-form {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.request-form__field {
  width: 100%;
  min-height: 48px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(2, 13, 26, 0.34);
  color: #fff;
  padding: 14px 15px;
  font-family: var(--font-b);
  font-size: 12px;
  outline: none;
  transition:
    border-color 0.2s,
    background 0.2s,
    box-shadow 0.2s;
}
.request-form__field::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.request-form__field:focus {
  border-color: rgba(0, 212, 255, 0.46);
  background: rgba(2, 13, 26, 0.48);
  box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.08);
}
.request-form__wide {
  grid-column: 1 / -1;
}
textarea.request-form__field {
  min-height: 96px;
  resize: vertical;
}

.request-form__submit {
  grid-column: 1 / -1;
  justify-self: center;
  margin-top: 8px;
  min-height: auto;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--accent);
  font-family: var(--font-b);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0 0 3px;
  border-bottom: 0.5px solid rgba(0, 212, 255, 0.3);
  box-shadow: none;
  transition:
    color 0.2s,
    border-color 0.2s,
    transform 0.2s;
}

.request-form__submit:hover {
  color: #fff;
  border-color: var(--accent);
  transform: translateY(-1px);
}

body.request-popup-open {
  overflow: hidden;
}
@media (max-width: 640px) {
  .request-popup {
    padding: 14px;
  }
  .request-popup__card {
    padding: 28px 18px 22px;
    border-radius: 24px;
  }
  .request-form {
    grid-template-columns: 1fr;
  }
  .request-form__wide {
    grid-column: auto;
  }
}

/* FORM FIELD PROPORTIONS FIX */
.request-form {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr !important;
  gap: 12px !important;
}
.request-form textarea.request-form__wide {
  grid-column: 1 / -1 !important;
}
`,wc=`/* ══ PORTFOLIO OVERLAY ══ */
.port-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: var(--bg);
  overflow-y: auto;
  opacity: 0;
  pointer-events: none;
  transform: translateY(40px);
  transition:
    opacity 0.45s ease,
    transform 0.45s ease;
}
.port-overlay.open {
  opacity: 1;
  pointer-events: all;
  transform: translateY(0);
}
.port-overlay-close {
  position: fixed;
  top: 24px;
  right: 182px;
  z-index: 210;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(2, 10, 20, 0.8);
  backdrop-filter: blur(12px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
  transition:
    border-color 0.2s,
    color 0.2s;
  pointer-events: none;
  opacity: 0;
}
.port-overlay.open ~ .port-overlay-close,
.port-overlay-close.show {
  pointer-events: all;
  opacity: 1;
}
.port-overlay-close:hover {
  border-color: var(--accent);
  color: var(--accent);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #020a14;
  --accent: #00c8ff;
  --accent2: #ff5500;
  --muted: rgba(255, 255, 255, 0.4);
  --font-d: 'Syne', sans-serif;
  --font-b: 'Inter', sans-serif;
}

html {
  scroll-behavior: smooth;
}
body {
  background: var(--bg);
  color: #fff;
  font-family: var(--font-b);
  overflow-x: hidden;
}

/* NAV */
nav {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 48px);
  max-width: 1200px;
  height: 56px;
  background: rgba(2, 10, 20, 0.85);
  backdrop-filter: blur(20px);
  border: 0.5px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  z-index: 100;
}
.logo {
  font-family: var(--font-d);
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
}
.logo span {
  color: var(--accent);
}
.nav-back {
  font-size: 11px;
  color: var(--muted);
  text-decoration: none;
  letter-spacing: 0.07em;
  text-transform: none;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
}
.nav-back::before {
  content: '←';
  font-size: 14px;
}
.nav-back:hover {
  color: #fff;
}

/* HERO */
.port-hero {
  padding: 120px 48px 60px;
  max-width: 1200px;
  margin: 0 auto;
}
.port-eyebrow {
  font-size: 11px;
  letter-spacing: 0.2em;
  color: var(--accent);
  text-transform: none;
  margin-bottom: 16px;
  opacity: 0;
  transform: translateY(12px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}
.port-eyebrow.vis {
  opacity: 1;
  transform: translateY(0);
}
.port-title {
  font-family: var(--font-d);
  font-size: clamp(28px, 3.2vw, 46px);
  font-weight: 800;
  line-height: 1;
  margin-bottom: 24px;
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 0.7s 0.1s ease,
    transform 0.7s 0.1s ease;
}
.port-title.vis {
  opacity: 1;
  transform: translateY(0);
}
.port-title em {
  font-style: normal;
  color: var(--accent);
}
.port-sub {
  font-size: 15px;
  color: var(--muted);
  line-height: 1.6;
  max-width: 520px;
  opacity: 0;
  transform: translateY(12px);
  transition:
    opacity 0.7s 0.2s ease,
    transform 0.7s 0.2s ease;
}
.port-sub.vis {
  opacity: 1;
  transform: translateY(0);
}

/* FILTERS */
.port-filters {
  padding: 0 48px 48px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(10px);
  transition:
    opacity 0.6s 0.3s ease,
    transform 0.6s 0.3s ease;
}
.port-filters.vis {
  opacity: 1;
  transform: translateY(0);
}
.filter-btn {
  padding: 8px 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 100px;
  background: transparent;
  color: var(--muted);
  font-family: var(--font-b);
  font-size: 11px;
  letter-spacing: 0.07em;
  text-transform: none;
  cursor: pointer;
  transition: all 0.2s;
}
.filter-btn:hover,
.filter-btn.active {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(0, 200, 255, 0.06);
}

/* GRID */
.port-grid {
  padding: 0 48px 100px;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* CARD */
.port-card {
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  cursor: pointer;
  opacity: 0;
  transform: translateY(32px);
  transition:
    opacity 0.55s ease,
    transform 0.55s ease,
    border-color 0.25s,
    box-shadow 0.25s;
  position: relative;
}
.port-card.vis {
  opacity: 1;
  transform: translateY(0);
}
.port-card:hover {
  border-color: rgba(0, 200, 255, 0.2);
  box-shadow:
    0 16px 48px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(0, 200, 255, 0.1);
  transform: translateY(-4px) !important;
}

/* Card image area */
.card-img {
  width: 100%;
  aspect-ratio: 16/10;
  background: linear-gradient(135deg, #0a1828 0%, #031222 100%);
  position: relative;
  overflow: hidden;
}
.card-img::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 30% 40%, rgba(0, 200, 255, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 70% 70%, rgba(255, 85, 0, 0.05) 0%, transparent 50%);
}
.card-num {
  position: absolute;
  top: 16px;
  left: 20px;
  font-family: var(--font-d);
  font-size: 11px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.18);
  letter-spacing: 0.12em;
}
.card-show-badge {
  position: absolute;
  bottom: 14px;
  right: 14px;
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: none;
  color: var(--accent);
  background: rgba(0, 200, 255, 0.08);
  border: 1px solid rgba(0, 200, 255, 0.2);
  border-radius: 100px;
  padding: 4px 10px;
}
.card-stand-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  opacity: 0.06;
}
.card-stand-icon svg {
  width: 100%;
  height: 100%;
}

/* hover overlay */
.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 200, 255, 0.12), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}
.port-card:hover .card-overlay {
  opacity: 1;
}

/* Card content */
.card-body {
  padding: 20px;
}
.card-category {
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: none;
  color: var(--accent);
  margin-bottom: 6px;
  opacity: 0.7;
}
.card-name {
  font-family: var(--font-d);
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 6px;
  line-height: 1.2;
}
.card-show {
  font-size: 11px;
  color: var(--muted);
}

.card-arrow svg {
  width: 12px;
  height: 12px;
  color: var(--accent);
}
.port-card:hover 

/* FOOTER */
.port-footer {
  padding: 32px 48px;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 12px;
  color: rgba(255, 255, 255, 0.2);
}

/* Neon canvas bg */
#portBgCanvas {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.4;
}
.port-hero,
.port-filters,
.port-grid,
.port-footer {
  position: relative;
  z-index: 1;
}

@media (max-width: 900px) {
  .port-grid {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 24px 80px;
  }
  .port-hero,
  .port-filters {
    padding-left: 24px;
    padding-right: 24px;
  }
}
@media (max-width: 600px) {
  .port-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .port-hero {
    padding-top: 96px;
  }
}

/* LIGHTBOX */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
}
.lightbox.open {
  opacity: 1;
  pointer-events: all;
  animation: lbFadeIn 0.5s ease forwards;
}
.lightbox.closing {
  animation: lbFadeOut 0.3s ease forwards;
}
@keyframes lbFadeIn {
  from {
    opacity: 0;
  }
  40% {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
@keyframes lbFadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.lb-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(2, 10, 20, 0.95);
  backdrop-filter: blur(24px);
  cursor: pointer;
}
.lb-card {
  position: relative;
  z-index: 2;
  background: linear-gradient(145deg, #0d1e30, #040e1c);
  border: 1px solid rgba(0, 200, 255, 0.15);
  border-top-color: rgba(0, 200, 255, 0.3);
  border-radius: 24px;
  overflow: hidden;
  width: min(640px, 92vw);
  box-shadow:
    0 0 0 1px rgba(0, 200, 255, 0.06),
    0 40px 100px rgba(0, 0, 0, 0.7),
    0 0 60px rgba(0, 200, 255, 0.05);
  animation: lbCardIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
@keyframes lbCardIn {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.94);
    filter: blur(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}
.lightbox.closing .lb-card {
  animation: lbCardOut 0.35s cubic-bezier(0.4, 0, 1, 1) forwards;
}
@keyframes lbCardOut {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(24px) scale(0.96);
  }
}
.lb-img {
  width: 100%;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, #0a1828, #021020);
  position: relative;
  overflow: hidden;
}
.lb-img::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 40%, rgba(0, 200, 255, 0.1) 0%, transparent 60%);
}
.lb-stand-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  opacity: 0.08;
}
.lb-stand-icon svg {
  width: 100%;
  height: 100%;
}
.lb-body {
  padding: 28px 32px 32px;
}
.lb-cat {
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: none;
  color: var(--accent);
  margin-bottom: 8px;
}
.lb-name {
  font-family: var(--font-d);
  font-size: 28px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 8px;
}
.lb-meta {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 20px;
}

.lb-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  z-index: 3;
  transition:
    border-color 0.2s,
    color 0.2s;
}
.lb-close:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* ── PATCH: portfolio navigation + real modal popup ── */
.port-topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  width: 100%;
  padding: 18px clamp(20px, 4vw, 48px) 0;
  pointer-events: none;
}
.port-back-main {
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 42px;
  padding: 0 18px;
  border-radius: 999px;
  border: 1px solid rgba(0, 200, 255, 0.24);
  background: rgba(2, 10, 20, 0.72);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  color: var(--accent);
  font-family: var(--font-b);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: none;
  cursor: pointer;
  box-shadow:
    0 12px 36px rgba(0, 0, 0, 0.28),
    0 0 30px rgba(0, 200, 255, 0.05);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;
}
.port-back-main:hover {
  transform: translateY(-1px);
  border-color: rgba(0, 200, 255, 0.55);
  background: rgba(0, 200, 255, 0.08);
  color: #fff;
}
.port-back-arrow {
  font-size: 15px;
  line-height: 1;
  transform: translateY(-1px);
}
.port-overlay .port-hero {
  padding-top: 72px;
}

.lightbox {
  z-index: 5000 !important;
}
.lb-backdrop {
  background: rgba(2, 10, 20, 0.78) !important;
  backdrop-filter: blur(28px) saturate(1.25) !important;
  -webkit-backdrop-filter: blur(28px) saturate(1.25) !important;
}
.lb-card {
  width: min(920px, 92vw) !important;
  border-radius: 30px !important;
  background: linear-gradient(145deg, rgba(10, 24, 40, 0.96), rgba(2, 10, 20, 0.98)) !important;
  border: 1px solid rgba(0, 200, 255, 0.24) !important;
  border-top-color: rgba(255, 255, 255, 0.2) !important;
  box-shadow:
    0 40px 120px rgba(0, 0, 0, 0.75),
    0 0 90px rgba(0, 200, 255, 0.1) !important;
}
.lb-img {
  aspect-ratio: 16 / 8.5 !important;
  background:
    radial-gradient(ellipse at 35% 45%, var(--lb-accent, #00c8ff) 0%, transparent 55%),
    linear-gradient(135deg, #0a1828, #021020) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.lb-img::after {
  content: 'Project preview';
  position: absolute;
  left: 28px;
  bottom: 24px;
  color: rgba(255, 255, 255, 0.28);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: none;
}
.lb-body {
  padding: 26px 32px 34px !important;
}
.lb-name {
  font-size: clamp(24px, 3vw, 42px) !important;
}
.lb-meta {
  margin-bottom: 0 !important;
}
.port-card,
.pc {
  cursor: zoom-in;
}
.port-card:hover .card-img,
.pc:hover .pc-bg {
  filter: brightness(1.04);
}

@media (max-width: 600px) {
  .port-topbar {
    padding: 12px 14px 0;
  }
  .port-back-main {
    width: 100%;
    justify-content: center;
    font-size: 10px;
  }
  .port-overlay .port-hero {
    padding-top: 56px;
  }
  .lb-card {
    width: calc(100vw - 24px) !important;
    border-radius: 22px !important;
  }
  .lb-body {
    padding: 22px !important;
  }
}

/* ── FINAL PATCH: right aligned back button + compact portfolio/lightbox ── */
.port-topbar {
  position: fixed !important;
  top: 22px !important;
  right: 182px !important;
  left: auto !important;
  width: auto !important;
  padding: 0 !important;
  z-index: 5200 !important;
  display: flex !important;
  justify-content: flex-end !important;
  pointer-events: none !important;
}
.port-back-main {
  pointer-events: auto !important;
  height: 40px !important;
  padding: 0 18px !important;
  border-radius: 999px !important;
  background: rgba(2, 10, 20, 0.78) !important;
  border: 1px solid rgba(0, 200, 255, 0.3) !important;
  box-shadow:
    0 12px 34px rgba(0, 0, 0, 0.34),
    0 0 28px rgba(0, 200, 255, 0.06) !important;
}
.port-overlay .port-hero {
  padding-top: 92px !important;
  padding-bottom: 28px !important;
}
.port-filters {
  padding-bottom: 24px !important;
}
.port-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
  gap: 14px !important;
  padding-bottom: 64px !important;
}
.port-card {
  border-radius: 14px !important;
}
.card-img {
  aspect-ratio: 16 / 8 !important;
}
.card-body {
  padding: 14px 16px 16px !important;
}
.card-name {
  font-size: 14px !important;
  margin-bottom: 4px !important;
}
.card-show {
  font-size: 10px !important;
}
.card-num {
  top: 12px !important;
  left: 14px !important;
}
.card-show-badge {
  bottom: 10px !important;
  right: 10px !important;
  font-size: 8px !important;
}

.lightbox {
  padding: 24px !important;
}
.lb-card {
  width: min(760px, 88vw) !important;
  max-height: calc(100vh - 48px) !important;
  display: flex !important;
  flex-direction: column !important;
  border-radius: 24px !important;
}
.lb-img {
  aspect-ratio: 16 / 7 !important;
  max-height: 52vh !important;
  min-height: 220px !important;
  flex: 0 1 auto !important;
}
.lb-body {
  padding: 20px 28px 24px !important;
  flex: 0 0 auto !important;
}
.lb-name {
  font-size: clamp(22px, 2.3vw, 34px) !important;
  line-height: 1.05 !important;
  margin-bottom: 8px !important;
}
.lb-meta {
  font-size: 12px !important;
}
.lb-close {
  top: 14px !important;
  right: 14px !important;
}

@media (max-width: 1100px) {
  .port-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  }
}
@media (max-width: 760px) {
  .port-topbar {
    top: 12px !important;
    right: 12px !important;
    left: 12px !important;
    width: auto !important;
  }
  .port-back-main {
    width: auto !important;
    margin-left: auto !important;
    font-size: 9px !important;
    height: 38px !important;
  }
  .port-overlay .port-hero {
    padding-top: 76px !important;
    padding-bottom: 22px !important;
  }
  .port-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 10px !important;
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
  .card-img {
    aspect-ratio: 16 / 9 !important;
  }
  .card-body {
    padding: 12px !important;
  }
  .card-name {
    font-size: 13px !important;
  }
  .lightbox {
    padding: 14px !important;
  }
  .lb-card {
    width: calc(100vw - 28px) !important;
    max-height: calc(100vh - 28px) !important;
  }
  .lb-img {
    aspect-ratio: 16 / 9 !important;
    min-height: 180px !important;
    max-height: 46vh !important;
  }
  .lb-body {
    padding: 18px 20px 22px !important;
  }
}
@media (max-width: 460px) {
  .port-grid {
    grid-template-columns: 1fr !important;
  }
}

/* Portfolio cleanup: hide exhibition names on project images */
.portfolio .pc-cl {
  display: none !important;
}
.portfolio .pc-info {
  padding-top: 18px;
}
`,Tc=`/* PERFECT EVENT — clickable spheres video popup */
.pe-orb-sphere {
  cursor: pointer !important;
  user-select: none;
}
.pe-orb-sphere:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 6px;
}
.pe-video-popup {
  position: fixed;
  inset: 0;
  z-index: 10050;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(2, 13, 26, 0.76);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity 0.25s ease,
    visibility 0.25s ease;
}
.pe-video-popup.open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.pe-video-popup-box {
  width: min(82vw, 560px);
  aspect-ratio: 1 / 1;
  border-radius: 0;
  overflow: hidden;
  position: relative;
  background: #020d1a;
  border: 1px solid rgba(0, 212, 255, 0.32);
  box-shadow:
    0 36px 120px rgba(0, 0, 0, 0.62),
    0 0 64px rgba(0, 212, 255, 0.14);
  transform: scale(0.92) translateY(18px);
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}
.pe-video-popup.open .pe-video-popup-box {
  transform: scale(1) translateY(0);
}
.pe-video-popup-box::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 3;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 0 50px rgba(0, 212, 255, 0.08);
}
.pe-video-popup video,
.pe-video-popup iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  object-fit: cover;
  background: #020d1a;
}
.pe-video-popup-title {
  position: absolute;
  left: 18px;
  bottom: 18px;
  z-index: 4;
  font-family: var(--font-d);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #fff;
  text-transform: none;
  text-shadow: 0 0 22px rgba(0, 0, 0, 0.55);
}
.pe-video-popup-close {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 5;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(2, 13, 26, 0.56);
  color: #fff;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}
.pe-video-popup-fallback {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 34px;
  text-align: center;
  color: rgba(255, 255, 255, 0.36);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: none;
}
@media (max-width: 768px) {
  .pe-video-popup-box {
    width: min(92vw, 520px);
  }
  .pe-video-popup-title {
    font-size: 14px;
    left: 14px;
    bottom: 14px;
  }
}

/* ==== POPUP STYLE UPGRADE ==== */
.popup {
  position: fixed;
  inset: 0;
  background: rgba(2, 13, 26, 0.75);
  backdrop-filter: blur(14px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.popup.open {
  opacity: 1;
  pointer-events: all;
}

.popup-inner {
  width: 70%;
  max-width: 880px;
  transform: scale(0.9);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.popup.open .popup-inner {
  transform: scale(1);
}

.popup-video {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.6);
}

.popup-video iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.popup-close {
  position: absolute;
  top: -38px;
  right: 0;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: color 0.2s;
}

.popup-close:hover {
  color: #00d4ff;
}

/* ==== FIX POPUP SIZE + 16:9 ==== */
.popup-inner {
  width: 60vw;
  max-width: 800px;
  margin: auto;
}

.popup-video {
  width: 100%;
  aspect-ratio: 16/9;
  background: #000;
  border-radius: 14px;
  overflow: hidden;
}

.popup-video iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

/* ==== NETFLIX-STYLE POPUP OPENING ==== */
.popup {
  background:
    radial-gradient(circle at center, rgba(0, 212, 255, 0.08), transparent 42%),
    rgba(2, 13, 26, 0.88) !important;
  backdrop-filter: blur(18px) brightness(0.55) !important;
  -webkit-backdrop-filter: blur(18px) brightness(0.55) !important;
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 0.38s ease,
    backdrop-filter 0.38s ease,
    -webkit-backdrop-filter 0.38s ease;
}

.popup.open {
  opacity: 1;
  pointer-events: all;
}

.popup-inner {
  width: 60vw !important;
  max-width: 800px !important;
  margin: auto;
  position: relative;
  transform: scale(0.72) translateY(28px);
  opacity: 0;
  filter: blur(10px);
  transition:
    transform 0.52s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.38s ease,
    filter 0.52s cubic-bezier(0.16, 1, 0.3, 1);
}

.popup.open .popup-inner {
  transform: scale(1) translateY(0);
  opacity: 1;
  filter: blur(0);
}

.popup-video {
  width: 100% !important;
  aspect-ratio: 16 / 9 !important;
  height: auto !important;
  background: #000;
  border-radius: 18px !important;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow:
    0 48px 140px rgba(0, 0, 0, 0.78),
    0 0 70px rgba(0, 212, 255, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.16);
}

.popup-video::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 18px;
  pointer-events: none;
  background:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.12), transparent 18%),
    linear-gradient(to top, rgba(0, 0, 0, 0.28), transparent 30%);
  z-index: 2;
}

.popup-video iframe {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  border: 0 !important;
}

.popup-close {
  top: -44px !important;
  right: 0 !important;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: rgba(255, 255, 255, 0.72) !important;
}

.popup-close:hover {
  color: #00d4ff !important;
  background: rgba(0, 212, 255, 0.12);
  border-color: rgba(0, 212, 255, 0.3);
}

@media (max-width: 768px) {
  .popup-inner {
    width: 92vw !important;
    max-width: none !important;
  }

  .popup-close {
    top: -48px !important;
  }
}

/* ==== REAL FIX: PERFECT EVENT SPHERE POPUP — smaller 16:9 Netflix style ==== */
.pe-video-popup {
  position: fixed !important;
  inset: 0 !important;
  z-index: 10050 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: clamp(18px, 4vw, 48px) !important;
  background:
    radial-gradient(circle at center, rgba(0, 212, 255, 0.08), transparent 42%),
    rgba(2, 13, 26, 0.88) !important;
  backdrop-filter: blur(18px) brightness(0.55) !important;
  -webkit-backdrop-filter: blur(18px) brightness(0.55) !important;
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
  transition:
    opacity 0.38s ease,
    visibility 0.38s ease !important;
}

.pe-video-popup.open {
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;
}

.pe-video-popup-box {
  width: min(58vw, 760px) !important;
  max-width: 760px !important;
  height: auto !important;
  max-height: none !important;
  aspect-ratio: 16 / 9 !important;
  border-radius: 18px !important;
  overflow: hidden !important;
  position: relative !important;
  background: #000 !important;
  border: 1px solid rgba(255, 255, 255, 0.14) !important;
  box-shadow:
    0 48px 140px rgba(0, 0, 0, 0.78),
    0 0 70px rgba(0, 212, 255, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.16) !important;
  transform: scale(0.72) translateY(28px) !important;
  opacity: 0 !important;
  filter: blur(10px) !important;
  transition:
    transform 0.52s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.38s ease,
    filter 0.52s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.pe-video-popup.open .pe-video-popup-box {
  transform: scale(1) translateY(0) !important;
  opacity: 1 !important;
  filter: blur(0) !important;
}

.pe-video-popup-box::before {
  content: '' !important;
  position: absolute !important;
  inset: 0 !important;
  z-index: 3 !important;
  pointer-events: none !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  box-shadow: inset 0 0 50px rgba(0, 212, 255, 0.08) !important;
  background:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.12), transparent 18%),
    linear-gradient(to top, rgba(0, 0, 0, 0.28), transparent 30%) !important;
}

.pe-video-popup video,
.pe-video-popup iframe {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  max-width: none !important;
  max-height: none !important;
  border: 0 !important;
  object-fit: cover !important;
  background: #000 !important;
}

.pe-video-popup-fallback {
  position: absolute !important;
  inset: 0 !important;
  display: grid;
  place-items: center;
  z-index: 1 !important;
}

.pe-video-popup-title {
  left: 18px !important;
  bottom: 16px !important;
  font-size: 14px !important;
  z-index: 4 !important;
}

.pe-video-popup-close {
  top: 12px !important;
  right: 12px !important;
  z-index: 5 !important;
  width: 36px !important;
  height: 36px !important;
  border-radius: 50% !important;
  background: rgba(2, 13, 26, 0.62) !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
  color: #fff !important;
  backdrop-filter: blur(14px) !important;
  -webkit-backdrop-filter: blur(14px) !important;
}

.pe-video-popup-close:hover {
  color: #00d4ff !important;
  border-color: rgba(0, 212, 255, 0.36) !important;
  background: rgba(0, 212, 255, 0.12) !important;
}

@media (max-width: 768px) {
  .pe-video-popup {
    padding: 16px !important;
  }

  .pe-video-popup-box {
    width: min(92vw, 760px) !important;
    aspect-ratio: 16 / 9 !important;
  }
}

/* ==== PERFECT EVENT CLICK FIX: all 8 spheres/buttons clickable ==== */
.pe-orb-svg,
.pe-orbit-cinematic,
.pe-orb-title,
#peOrbTitle {
  pointer-events: none !important;
}

.pe-orb-sphere,
.pe-orb-sphere *,
.pe-orb-sphere::before,
.pe-orb-sphere::after {
  pointer-events: auto !important;
}

.pe-orb-sphere {
  position: absolute !important;
  z-index: 40 !important;
  cursor: pointer !important;
  touch-action: manipulation !important;
}

.pe-orb-sphere .pe-sphere-label,
.pe-orb-sphere .pe-play-icon {
  pointer-events: none !important;
}
`,Ec=`/* ════════════════════════════════════════════════════════════════
   PRO MOTION SYSTEM v2 — refined easings, durations & micro-interactions
   Industry-grade curves (Material 3 / Apple HIG inspired)
   ════════════════════════════════════════════════════════════════ */
:root {
  /* Easing tokens */
  --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out-quint: cubic-bezier(0.83, 0, 0.17, 1);
  --ease-in-out-cubic: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-emphasized: cubic-bezier(0.2, 0, 0, 1);
  /* Duration tokens */
  --dur-1: 120ms; /* micro */
  --dur-2: 200ms; /* fast */
  --dur-3: 320ms; /* base */
  --dur-4: 480ms; /* medium */
  --dur-5: 720ms; /* slow reveal */
  --dur-6: 1100ms; /* hero / cinematic */
}

/* Universal smoother — only properties that are GPU-cheap */
a,
button,
.btn-p,
.btn-g,
.btn-cta,
.nav-btn,
.nav-links a,
.sec-lnk,
.shw,
.flnk,
.gshow-item,
.gshow-dot,
.svc-new,
.btn-watch,
.btn-flip-back,
.btn-proc-watch,
.btn-proc-back,
.pe-gb-watch,
.lb-card {
  transition:
    transform var(--dur-3) var(--ease-out-quart),
    background-color var(--dur-3) var(--ease-out-quart),
    border-color var(--dur-3) var(--ease-out-quart),
    color var(--dur-2) var(--ease-out-quart),
    box-shadow var(--dur-4) var(--ease-out-quart),
    opacity var(--dur-3) var(--ease-out-quart),
    filter var(--dur-4) var(--ease-out-quart) !important;
  will-change: transform;
}

/* Nav links — refined underline reveal */
.nav-links a {
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform var(--dur-4) var(--ease-out-expo);
}
.nav-links a:hover::after {
  transform: scaleX(1);
  transform-origin: left center;
}
.nav-links a:hover {
  color: #fff;
}

/* Primary buttons — premium lift + soft glow halo */
.btn-p,
.btn-cta,
.nav-btn {
  transform: translateZ(0);
}
.btn-p:hover,
.btn-cta:hover {
  transform: translateY(-2px) scale(1.015) !important;
  box-shadow:
    0 12px 40px -8px rgba(0, 212, 255, 0.45),
    0 0 0 1px rgba(0, 212, 255, 0.25) inset !important;
}
.btn-p:active,
.btn-cta:active,
.nav-btn:active {
  transform: translateY(0) scale(0.985) !important;
  transition-duration: var(--dur-1) !important;
}
.nav-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 24px -8px rgba(0, 212, 255, 0.4);
}

/* Ghost / outline buttons */
.btn-g:hover,
.btn-flip-back:hover,
.btn-proc-back:hover {
  transform: translateY(-1px);
  color: #fff !important;
  border-color: rgba(255, 255, 255, 0.35) !important;
}

/* Watch buttons — subtle accent fill */
.btn-watch:hover,
.btn-proc-watch:hover,
.pe-gb-watch:hover {
  transform: translateY(-1px);
  background: rgba(0, 212, 255, 0.18) !important;
  box-shadow: 0 6px 20px -6px rgba(0, 212, 255, 0.35);
}

/* Show / event tiles — depth + accent rim on hover */
.shw:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 50px -20px rgba(0, 212, 255, 0.35);
}
.gshow-item:hover {
  transform: translateX(3px);
  background: rgba(0, 212, 255, 0.08) !important;
  border-color: rgba(0, 212, 255, 0.28) !important;
}
.gshow-item:hover .gshow-dot {
  background: var(--accent);
  box-shadow: 0 0 10px var(--accent);
}

/* Section accent links */
.sec-lnk:hover {
  border-color: var(--accent);
  color: #fff;
  transform: translateX(2px);
}
.flnk:hover {
  color: var(--accent);
}

/* Refine pulse — softer breathing rather than blinking */
@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.55);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 0 6px rgba(0, 212, 255, 0);
    transform: scale(1.08);
  }
}

/* Refine fade-up reveal — smoother distance + curve */
@keyframes fup {
  from {
    opacity: 0;
    transform: translate3d(0, 28px, 0);
    filter: blur(4px);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    filter: blur(0);
  }
}

/* Refine arrow pulse — gentler */
@keyframes arrowPulse {
  0%,
  100% {
    transform: translateX(0);
    opacity: 0.85;
  }
  50% {
    transform: translateX(4px);
    opacity: 1;
  }
}

/* Splash refinements */
@keyframes sp-fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
    filter: blur(6px);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    filter: blur(0);
  }
}
@keyframes sp-out {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(1.04);
    pointer-events: none;
    visibility: hidden;
  }
}

/* Lightbox — gentler pop */
@keyframes lbCardIn {
  0% {
    opacity: 0;
    transform: scale(0.94) translate3d(0, 12px, 0);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translate3d(0, 0, 0);
    filter: blur(0);
  }
}
@keyframes lbCardOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.97);
  }
}
@keyframes lbFadeIn {
  from {
    opacity: 0;
    backdrop-filter: blur(0);
  }
  to {
    opacity: 1;
    backdrop-filter: blur(8px);
  }
}
@keyframes lbFadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

/* Ticker — keep linear (correct for marquees) but smoother edge handling handled in JS where applicable */

/* Cards & service tiles get a quiet hover lift */
.svc-new {
  transition:
    background var(--dur-3) var(--ease-out-quart),
    transform var(--dur-4) var(--ease-out-quart) !important;
}
.svc-new:hover {
  transform: translateY(-3px);
}

/* Lift stand cards / glass blocks if present */
.g,
.ga {
  transition:
    transform var(--dur-4) var(--ease-out-quart),
    border-color var(--dur-3) var(--ease-out-quart),
    box-shadow var(--dur-4) var(--ease-out-quart);
}

/* Focus rings — accessibility polish */
a:focus-visible,
button:focus-visible,
.btn-p:focus-visible,
.btn-cta:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--bg),
    0 0 0 4px var(--accent) !important;
}

/* Reduced motion — respect user preference */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}

/* ── FINAL HOTFIX 2026-04-29: Perfect Event title becomes a static part of the orbit page ── */
#peOrbTitle.pe-title-static {
  opacity: 1 !important;
  visibility: visible !important;
  position: absolute !important;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%) !important;
  z-index: 3 !important;
  pointer-events: none !important;
  white-space: nowrap !important;
}
.pe-second-right .pe-orb-sphere {
  z-index: 5 !important;
}
#peGhostTitle.pe-ghost-off {
  display: none !important;
}

/* ── HOTFIX v4: remove perfect event blink during handoff ── */
#peOrbTitle {
  transition: none !important;
  backface-visibility: hidden !important;
  -webkit-backface-visibility: hidden !important;
}
#peGhostTitle.pe-ghost-off {
  display: block !important;
  opacity: 0 !important;
  visibility: hidden !important;
}

/* ── HOTFIX v6: stable crossfade for perfect event, no blink ── */
#peOrbTitle,
#peOrbTitle.pe-title-static {
  opacity: var(--pe-title-alpha, 0) !important;
  visibility: var(--pe-title-visibility, hidden) !important;
  transition: none !important;
  transform: translate(-50%, -50%) translateZ(0) !important;
  backface-visibility: hidden !important;
  -webkit-backface-visibility: hidden !important;
}
#peGhostTitle {
  opacity: var(--pe-ghost-alpha, 1) !important;
  visibility: var(--pe-ghost-visibility, visible) !important;
  display: block !important;
  transform-style: preserve-3d !important;
  backface-visibility: hidden !important;
  -webkit-backface-visibility: hidden !important;
}
#peGhostTitle.pe-ghost-off {
  opacity: 0 !important;
  visibility: hidden !important;
  display: block !important;
}

/* ── HOTFIX v7: restore Perfect Event block, prevent both titles from disappearing ── */
#peOrbTitle.pe-title-static {
  display: block !important;
  opacity: var(--pe-title-alpha, 1) !important;
  visibility: visible !important;
  position: absolute !important;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%) translateZ(0) !important;
}
`,Dc=`modulepreload`,Oc=function(e,t){return new URL(e,t).href},kc={},Ac=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Oc(t,n),t in kc)return;kc[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Dc,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},jc=[[`home-critical-foundation`,zs],[`home-navigation`,Bs],[`home-splash`,Vs],[`home-navigation-logo`,Hs],[`home-hero`,qs]],Mc=[[`home-section-layout`,Us],[`home-statement`,Js],[`home-perfect-event-scroll`,cc],[`home-perfect-event-orbit-core`,lc],[`home-perfect-event-orbit-positioning`,uc],[`home-perfect-event-sphere-styles`,dc],[`home-perfect-event-title-transition`,fc],[`home-perfect-event-orbit-lines`,pc],[`home-perfect-event-title-lock`,mc],[`home-perfect-event-subtitle`,hc],[`home-why-us`,Ys],[`home-why-us-video`,Xs],[`home-why-us-final-fixes`,Zs],[`home-projects`,Qs],[`home-project-card-slider`,$s],[`home-projects-more`,ec],[`home-shows`,tc],[`home-reviews`,nc],[`home-reviews-video`,rc],[`home-process`,ic],[`home-contact`,ac],[`home-stand-show`,oc],[`home-globe`,sc],[`home-service-cards`,gc],[`home-messenger-buttons`,_c],[`home-floating-contact`,vc],[`home-floating-contact-reveal`,yc],[`home-full-cycle`,bc],[`home-full-cycle-cleanup`,xc],[`home-reveal`,Sc],[`home-request-popup`,Cc],[`home-portfolio-overlay`,wc],[`home-perfect-event-video`,Tc],[`home-responsive-grid`,Ws],[`home-footer`,Gs],[`home-footer-link-fix`,Ks],[`home-motion-polish`,Ec]];async function Nc(){let{legacyPatchStyleBlocks:e}=await Ac(async()=>{let{legacyPatchStyleBlocks:e}=await import(`./patches-CI8z7rSm.js`);return{legacyPatchStyleBlocks:e}},[],import.meta.url);return e}var Pc=``+new URL(`draft-B3DloGqd.mp4`,import.meta.url).href,Fc=``+new URL(`draft-2-Cf-fkM6w.mp4`,import.meta.url).href,Ic=[Pc,Fc,Pc],Lc=[{client:`Spribe`,title:`ICE London 2024`,details:[`LED cube · full activation`],imageKey:`1924fcc18f`},{client:`USPEX`,title:`SiGMA Central Europe 2025`,details:[`340 m²`],imageKey:`4718629eb6`,revealClass:`d1`},{client:`TrueLabel`,title:`SBC Summit Lisbon 2025`,details:[`Full activation`],imageKey:`2e68a16e46`,revealClass:`d2`},{client:`Broadway Platform`,title:`ICE Barcelona 2026`,details:[`209 m² · immersive design`],imageKey:`7455542337`,revealClass:`d1`},{client:`Atlaslive`,title:`ICE Barcelona 2026`,details:[`LED wall · bar · activation`],imageKey:`f1b09894df`,revealClass:`d2`}];function Rc(e,t){let n=String(t+1).padStart(2,`0`),r=String((t+5)%15+1).padStart(2,`0`),i=t<3?[{type:`video`,src:Ic[t],alt:`${e.client} — відеоогляд`}]:[],a=t===3?[{type:`youtube`,youtubeId:`9NdiHe-aZUc`,alt:`YouTube Video`}]:[];return{id:`reference-project-${n}`,client:e.client,title:e.title,details:e.details,customerSlug:``,tags:[],revealClass:e.revealClass||``,media:[{type:`image`,src:`/assets/generated/ref/projects-${n}-${e.imageKey}.png`,alt:`${e.client} ${e.title}`},...i,...a,{type:`image`,src:`/assets/generated/ref/projects-${r}-${e.imageKey}.png`,alt:`${e.client} ${e.title} — деталі`}]}}var zc=Array.from({length:15},(e,t)=>Rc(Lc[t%Lc.length],t)),Bc={type:`html`,html:`<svg height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <polygon points="18,2 34,32 2,32" fill="none" stroke="#00D4FF" stroke-width="2.5"></polygon>
  <line x1="18" y1="2" x2="18" y2="32" stroke="#00D4FF" stroke-width="1.4" opacity=".5"></line>
  <circle cx="18" cy="22" r="3" fill="#00D4FF" opacity=".4"></circle>
</svg>`},Vc={projects:zc,reviews:[{id:`reference-review-spribe`,company:`Spribe`,logo:Bc,text:`Communication and problem solving are on a very good level. The stand exceeded all expectations — quality, timing, execution.`,authorName:`Ievgeniia Goldobina`,authorPosition:`Head of Marketing`},{id:`reference-review-atlaslive`,company:`AtlasLive`,logo:Bc,text:`Turn your visions into reality — that's exactly what Alpaca delivered. Flawless booth design and logistics from concept to teardown.`,authorName:`Michael Kovalenko`,authorPosition:`CEO`},{id:`reference-review-uspex`,company:`Uspex`,logo:Bc,text:`Working with Alpaca for the third year in a row. Every time the result surprises us. Real professionals who understand the gaming world.`,authorName:`Anna Voloshyn`,authorPosition:`Marketing Director`},{id:`reference-review-evoplay`,company:`Evoplay`,logo:Bc,text:`The stand became a real landmark at the expo. Visitors kept coming back. On time, on budget — no stress whatsoever.`,authorName:`Daria Savchenko`,authorPosition:`Brand Manager`},{id:`reference-review-spribe-2`,company:`Spribe`,logo:Bc,text:`Alpaca set the bar at ICE. The LED cube integration was technically flawless and the activation drew non-stop traffic to our stand.`,authorName:`Ievgeniia Goldobina`,authorPosition:`Head of Marketing`},{id:`reference-review-atlaslive-2`,company:`AtlasLive`,logo:Bc,text:`We have partnered with Alpaca across three continents. Each delivery is consistent, premium, and always on brief — rare in this industry.`,authorName:`Michael Kovalenko`,authorPosition:`CEO`},{id:`reference-review-uspex-2`,company:`Uspex`,logo:Bc,text:`The team handled a last-minute design change 48 hours before build. Not a single compromise on quality. That level of trust is irreplaceable.`,authorName:`Anna Voloshyn`,authorPosition:`Marketing Director`},{id:`reference-review-evoplay-2`,company:`Evoplay`,logo:Bc,text:`SBC Lisbon was our best stand yet. Every structural and visual element reflected our brand identity. Competitors were asking for our contractor.`,authorName:`Daria Savchenko`,authorPosition:`Brand Manager`}]},Hc=``+new URL(`logo-D9-WDIJ-.png`,import.meta.url).href,Uc=``+new URL(`draft-3-CsILymh4.MP4`,import.meta.url).href,Wc=``+new URL(`Stand-BzNmDtsA.webm`,import.meta.url).href,Gc=``+new URL(`Activation-B-jl6laj.webm`,import.meta.url).href,Kc=``+new URL(`Hosts-4Sp1zN76.webm`,import.meta.url).href,qc=``+new URL(`Screens-XdxASLx8.webm`,import.meta.url).href,Jc=``+new URL(`Catering-DZ0pZWJy.webm`,import.meta.url).href,Yc=``+new URL(`Merch-4QeUUbAA.webm`,import.meta.url).href,Xc=``+new URL(`Content-BihMH4sA.webm`,import.meta.url).href,Zc=``+new URL(`Support-Bo6lSghN.webm`,import.meta.url).href,Qc=``+new URL(`Comp 8_00000-Dj1XUncu.png`,import.meta.url).href,$c=``+new URL(`Comp 2_00000 1-B29y3_6V.png`,import.meta.url).href,el=``+new URL(`Comp 5_00000 1 1-CTjfHrsC.png`,import.meta.url).href,tl=``+new URL(`Comp 7_00000 1-C5b5sIjg.png`,import.meta.url).href,nl=``+new URL(`Comp 3_00000 1-CMcENc4c.png`,import.meta.url).href,rl=``+new URL(`Comp 6_00000 1-DPbGx5rz.png`,import.meta.url).href,il=``+new URL(`Comp 4_00000 1-CR8_j0Cm.png`,import.meta.url).href,al=``+new URL(`Comp 9_00000 1-i1P12JJD.png`,import.meta.url).href,ol=`<div id="splash-screen">
  <div class="sp-text">Gambling and Fintech <br /><em>Events</em></div>
  <div class="sp-sub">by Alpaca Expo Group</div>
  <div class="sp-line"></div>
</div>
<div class="sp-flash"></div>

<canvas id="neon-canvas"></canvas>
<div class="blobs">
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
</div>
<!-- NAV -->
`,sl=`<nav id="nav">
  <div class="nav-inner">
    <div class="nav-logo-left">
      <a href="#" class="nav-logo-left-btn" aria-label="Alpaca Expo Group home">
        <img
          class="nav-logo-left-img"
          src="__HOME_LOGO_URL__"
          alt="Alpaca Expo Group"
          width="260"
          height="150"
        />
      </a>
    </div>

    <ul class="nav-links">
      <li><a href="#pe-planets">Full cycle</a></li>
      <li><a href="#why-us">Why us</a></li>
      <li><a href="#portfolio">Projects</a></li>
      <li><a href="#reviews">Reviews</a></li>
    </ul>

    <div class="nav-contact-wrap" id="navContactWrap">
      <a
        class="nav-btn btn-glass"
        id="navContactBtn"
        href="#"
        aria-haspopup="true"
        aria-expanded="false"
        >CONTACT NOW</a
      >
      <div class="nav-contact-menu" id="navContactMenu">
        <a class="nav-contact-item whatsapp" href="#" aria-label="WhatsApp">
          <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path
              d="M16 3C8.8 3 3 8.6 3 15.6c0 2.4.7 4.7 2 6.7L3.7 29l6.9-1.8c1.7.9 3.6 1.4 5.5 1.4 7.2 0 13-5.6 13-12.6S23.2 3 16 3zm0 23.4c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.1 1.1 1.1-4-.3-.4c-1.2-1.7-1.8-3.7-1.8-5.8C5.5 9.9 10.2 5.3 16 5.3s10.5 4.6 10.5 10.3S21.8 26.4 16 26.4zm5.8-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1s0-.5.1-.7c.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5s-.7-1.7-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1.1 1.1-1.1 2.7 1.1 3.1 1.3 3.3c.2.2 2.2 3.4 5.4 4.8.8.3 1.4.5 1.9.6.8.2 1.5.2 2 .1.6-.1 1.9-.8 2.2-1.5s.3-1.4.2-1.5c-.1-.2-.3-.3-.6-.5z"
            />
          </svg>
        </a>
        <a class="nav-contact-item telegram" href="#" aria-label="Telegram">
          <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M21.5 4.5L2.9 11.6c-1.3.5-1.3 1.2-.2 1.5l4.8 1.5 1.8 5.5c.2.6.1.8.8.8.5 0 .7-.2 1-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.2-15c.3-1.2-.4-1.7-1.4-1.3zM8.2 14.2l10.5-6.6c.5-.3.9-.1.5.2l-8.5 7.7-.3 3.1-1.6-4.4z"
            />
          </svg>
        </a>
        <a class="nav-contact-item email" href="#" aria-label="Email">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.05l8 5.72 8-5.72V7H4zm16 10V9.5l-7.42 5.3a1 1 0 0 1-1.16 0L4 9.5V17h16z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
  <!-- Hamburger -->
  <button
    class="burger"
    id="burger"
    aria-controls="mobileMenu"
    aria-expanded="false"
    aria-label="Toggle navigation menu"
    type="button"
  >
    <span></span><span></span><span></span>
  </button>
</nav>
<!-- Mobile menu overlay -->
<div class="mobile-menu" id="mobileMenu">
  <a href="#pe-planets">Full cycle</a>
  <a href="#why-us">Why us</a>
  <a href="#portfolio">Projects</a>
  <a href="#reviews">Reviews</a>
  <a class="mob-cta btn-glass" href="#contact">Contact now</a>
</div>
<!-- HERO + SCROLL TRANSITION -->
`,cl=`<div id="pe-planets" aria-hidden="true"></div>
<div class="pe-pin-wrap" id="pePinWrap">
  <section class="hero" id="heroSection">
    <!-- dark overlay INSIDE sticky hero -->
    <div class="pe-bg-dark" id="peBgDark"></div>
    <!-- hero content -->
    <div class="hero-left hero-card" id="heroLeft">
      <div class="hero-pre" id="heroPre">We turn ideas into a</div>
      <h1 class="pe-headline" id="peHeadline">
        <em class="pe-highlight" id="peHighlight">perfect event</em>
      </h1>

      <div class="btns" id="heroBtnsRow">
        <a class="btn-p" href="#contact">REQUEST CONCEPT</a>
        <a class="btn-g btn-glass" href="#portfolio">View cases</a>
      </div>
      <div
        class="hero-tag hero-tag-ticker"
        id="heroTicker"
        aria-label="Exhibitions: ICE, SiGMA, iGB, GAT, SBC"
      >
        <div class="ticker-track">
          <div class="ticker-set">
            <span>ICE</span><span class="dot">·</span><span>SiGMA</span><span class="dot">·</span
            ><span>iGB</span><span class="dot">·</span><span>GAT</span><span class="dot">·</span
            ><span>SBC</span><span class="dot">·</span>
          </div>
          <div class="ticker-set" aria-hidden="true">
            <span>ICE</span><span class="dot">·</span><span>SiGMA</span><span class="dot">·</span
            ><span>iGB</span><span class="dot">·</span><span>GAT</span><span class="dot">·</span
            ><span>SBC</span><span class="dot">·</span>
          </div>
          <div class="ticker-set" aria-hidden="true">
            <span>ICE</span><span class="dot">·</span><span>SiGMA</span><span class="dot">·</span
            ><span>iGB</span><span class="dot">·</span><span>GAT</span><span class="dot">·</span
            ><span>SBC</span><span class="dot">·</span>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-right" id="heroRight">
      <div class="hero-vid">
        <video
          id="heroBgVideo"
          class="hero-vid-player"
          hidden
          autoplay
          muted
          loop
          playsinline
          preload="auto"
        >
          <source id="heroBgVideoSource" src="__HERO_VIDEO_URL__" type="video/mp4" />
        </video>
        <iframe
          class="hero-vid-fallback"
          hidden
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen=""
          frameborder="0"
          src="https://player.vimeo.com/video/1185112878?autoplay=1&amp;muted=1&amp;loop=1&amp;background=1&amp;autopause=0&amp;controls=0"
          title="Hero background video fallback"
        ></iframe>
      </div>
      <div class="hero-vid-overlay"></div>
    </div>
    <!-- second state INSIDE sticky hero — sphere orbit animation -->
    <div class="pe-second" id="peSecond">
      <div class="pe-second-left" id="peSecondLeft"></div>
      <div class="pe-second-right" id="peSecondRight">
        <div class="pe-orb-title" id="peOrbTitle">perfect event</div>
        <!-- Orbit SVG rings -->
        <svg class="pe-orb-svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 500">
          <defs>
            <linearGradient id="peOrbG1" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stop-color="#3090ff" stop-opacity="0"></stop>
              <stop offset="30%" stop-color="#50d0ff" stop-opacity="0.55"></stop>
              <stop offset="70%" stop-color="#8060ff" stop-opacity="0.45"></stop>
              <stop offset="100%" stop-color="#3090ff" stop-opacity="0"></stop>
            </linearGradient>
            <filter id="peOrbGlow">
              <feGaussianBlur result="blur" stdDeviation="4"></feGaussianBlur>
              <feMerge>
                <feMergeNode in="blur"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>

          <!-- ── LAYER 1 — inner solid orbit (around title/sun) ──────────────
               Solid continuous ring, thin stroke, subtle blur via CSS.
               SMIL: slow scale breathing (22s, 2% amp). -->
          <ellipse
            id="peOrbitRing3"
            cx="350"
            cy="250"
            fill="none"
            rx="118"
            ry="38"
            stroke="rgba(210,225,248,0.48)"
            stroke-width="0.6"
          >
            <animateTransform
              attributeName="transform"
              type="matrix"
              values="1 0 0 1 0 0; 1.025 0 0 1.025 -8.75 -6.25; 1 0 0 1 0 0"
              keyTimes="0; 0.5; 1"
              calcMode="spline"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              dur="22s"
              repeatCount="indefinite"
            ></animateTransform>
          </ellipse>

          <!-- ── LAYER 2 — mid dashed orbit — TEMPORARILY REMOVED ──────────── -->

          <!-- ── LAYER 3 — asteroid belt ───────────────────────────────────────
               Populated procedurally by 32-asteroid-belt.js.
               Contains irregular polygon asteroids + dust along the orbit path.
               SMIL rotation (CCW) injected by the same script. -->
          <g id="peOrbitAsteroidBelt" aria-hidden="true"></g>

          <!-- ── LAYER 4 — outer gradient ring (frames the composition) ───── -->
          <ellipse
            id="peOrbitRing1"
            cx="350"
            cy="250"
            fill="none"
            filter="url(#peOrbGlow)"
            opacity="0.8"
            rx="320"
            ry="105"
            stroke="url(#peOrbG1)"
            stroke-width="1.5"
          ></ellipse>
        </svg>

        <!-- Secondary solar flare — soft glow near STAND planet, scroll-synced -->
        <div class="pe-solar-flare" aria-hidden="true"></div>

        <!-- STAND — largest planet per spec -->
        <div
          aria-label="Watch STAND video"
          class="pe-orb-sphere pe-orb-ideas"
          data-label="STAND"
          data-video="videos/pe-ideas.mp4"
          data-popup-video="__POPUP_VIDEO_1__"
          role="button"
          tabindex="0"
        >
          <video
            class="pe-orb-video"
            autoplay
            loop
            muted
            playsinline
            poster="__PLANET_STAND_POSTER_URL__"
          >
            __PLANET_STAND_HEVC_SOURCE__
            <source src="__PLANET_STAND_URL__" type="video/webm" />
          </video>
          <div class="pe-orb-play-icon"></div>
        </div>

        <!-- ACTIVATION -->
        <div
          aria-label="Watch ACTIVATION video"
          class="pe-orb-sphere pe-orb-vr"
          data-label="ACTIVATION"
          data-video="videos/pe-vr.mp4"
          data-popup-video="__POPUP_VIDEO_2__"
          role="button"
          tabindex="0"
        >
          <video
            class="pe-orb-video"
            autoplay
            loop
            muted
            playsinline
            poster="__PLANET_ACTIVATION_POSTER_URL__"
          >
            __PLANET_ACTIVATION_HEVC_SOURCE__
            <source src="__PLANET_ACTIVATION_URL__" type="video/webm" />
          </video>
          <div class="pe-orb-play-icon"></div>
        </div>

        <!-- STAFF (Hosts) -->
        <div
          aria-label="Watch STAFF video"
          class="pe-orb-sphere pe-orb-staff"
          data-label="STAFF"
          data-video="videos/pe-staff.mp4"
          data-popup-video="__POPUP_VIDEO_3__"
          role="button"
          tabindex="0"
        >
          <video
            class="pe-orb-video"
            autoplay
            loop
            muted
            playsinline
            poster="__PLANET_HOSTS_POSTER_URL__"
          >
            __PLANET_HOSTS_HEVC_SOURCE__
            <source src="__PLANET_HOSTS_URL__" type="video/webm" />
          </video>
          <div class="pe-orb-play-icon"></div>
        </div>

        <!-- SCREENS -->
        <div
          aria-label="Watch SCREENS video"
          class="pe-orb-sphere pe-orb-led"
          data-label="SCREENS"
          data-video="videos/pe-led.mp4"
          data-popup-video="__POPUP_VIDEO_1__"
          role="button"
          tabindex="0"
        >
          <video
            class="pe-orb-video"
            autoplay
            loop
            muted
            playsinline
            poster="__PLANET_SCREENS_POSTER_URL__"
          >
            __PLANET_SCREENS_HEVC_SOURCE__
            <source src="__PLANET_SCREENS_URL__" type="video/webm" />
          </video>
          <div class="pe-orb-play-icon"></div>
        </div>

        <!-- MERCH -->
        <div
          aria-label="Watch MERCH video"
          class="pe-orb-sphere pe-orb-materials"
          data-label="MERCH"
          data-video="videos/pe-materials.mp4"
          data-popup-video="__POPUP_VIDEO_3__"
          role="button"
          tabindex="0"
        >
          <video
            class="pe-orb-video"
            autoplay
            loop
            muted
            playsinline
            poster="__PLANET_MERCH_POSTER_URL__"
          >
            __PLANET_MERCH_HEVC_SOURCE__
            <source src="__PLANET_MERCH_URL__" type="video/webm" />
          </video>
          <div class="pe-orb-play-icon"></div>
        </div>

        <!-- CATERING -->
        <div
          aria-label="Watch CATERING video"
          class="pe-orb-sphere pe-orb-bar"
          data-label="CATERING"
          data-video="videos/pe-bar.mp4"
          data-popup-video="__POPUP_VIDEO_2__"
          role="button"
          tabindex="0"
        >
          <video
            class="pe-orb-video"
            autoplay
            loop
            muted
            playsinline
            poster="__PLANET_CATERING_POSTER_URL__"
          >
            __PLANET_CATERING_HEVC_SOURCE__
            <source src="__PLANET_CATERING_URL__" type="video/webm" />
          </video>
          <div class="pe-orb-play-icon"></div>
        </div>

        <!-- CONTENT -->
        <div
          aria-label="Watch CONTENT video"
          class="pe-orb-sphere pe-orb-motion"
          data-label="CONTENT"
          data-video="videos/pe-motion.mp4"
          data-popup-video="__POPUP_VIDEO_1__"
          role="button"
          tabindex="0"
        >
          <video
            class="pe-orb-video"
            autoplay
            loop
            muted
            playsinline
            poster="__PLANET_CONTENT_POSTER_URL__"
          >
            __PLANET_CONTENT_HEVC_SOURCE__
            <source src="__PLANET_CONTENT_URL__" type="video/webm" />
          </video>
          <div class="pe-orb-play-icon"></div>
        </div>

        <!-- SUPPORT -->
        <div
          aria-label="Watch SUPPORT video"
          class="pe-orb-sphere pe-orb-activation"
          data-label="SUPPORT"
          data-video="videos/pe-activation.mp4"
          data-popup-video="__POPUP_VIDEO_2__"
          role="button"
          tabindex="0"
        >
          <video
            class="pe-orb-video"
            autoplay
            loop
            muted
            playsinline
            poster="__PLANET_SUPPORT_POSTER_URL__"
          >
            __PLANET_SUPPORT_HEVC_SOURCE__
            <source src="__PLANET_SUPPORT_URL__" type="video/webm" />
          </video>
          <div class="pe-orb-play-icon"></div>
        </div>
      </div>
      <div class="pe-orb-subtitle pe-orb-subtitle-bottom" id="peOrbSubtitle">
        <span class="full-cycle-fix">FULL CYCLE. ZERO STRESS</span>
      </div>
    </div>
  </section>
</div>
<!-- /pe-pin-wrap -->

<!-- Planet video popup — Stage 2.4. data-popup-video per sphere is the CMS override point. -->
<div class="pe-popup-backdrop" id="pePopupBackdrop" aria-hidden="true">
  <button
    class="pe-popup-close"
    id="pePopupClose"
    type="button"
    aria-label="Close video"
    data-tooltip="Close"
  >
    ×
  </button>
  <button
    class="pe-popup-nav prev"
    id="pePopupPrev"
    type="button"
    aria-label="Previous planet"
    data-tooltip="Previous"
  >
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  </button>
  <div class="pe-popup-video-wrap" role="dialog" aria-modal="true" aria-label="Planet video">
    <video id="pePopupVideo" playsinline preload="none" muted></video>
    <button
      id="pePopupFullscreen"
      class="pe-popup-fullscreen"
      type="button"
      aria-label="Fullscreen"
      data-tooltip="Fullscreen"
    >
      <!-- Enter fullscreen -->
      <svg
        class="fs-icon fs-icon-expand"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <polyline points="15 3 21 3 21 9" />
        <polyline points="9 21 3 21 3 15" />
        <line x1="21" y1="3" x2="14" y2="10" />
        <line x1="3" y1="21" x2="10" y2="14" />
      </svg>
      <!-- Exit fullscreen -->
      <svg
        class="fs-icon fs-icon-compress"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <polyline points="4 14 10 14 10 20" />
        <polyline points="20 10 14 10 14 4" />
        <line x1="10" y1="14" x2="3" y2="21" />
        <line x1="21" y1="3" x2="14" y2="10" />
      </svg>
    </button>
  </div>
  <button
    class="pe-popup-nav next"
    id="pePopupNext"
    type="button"
    aria-label="Next planet"
    data-tooltip="Next"
  >
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </button>
</div>
<!-- STATEMENT -->
`,ll=`<section class="why-us" id="why-us">
  <div class="container">
    <div class="why-us-head rv section-title-block">
      <h2 class="sh section-title">WHY CHOOSE <em>US?</em></h2>
      <div class="section-subtitle">6 ADVANTAGES. 1 DECISION.</div>
    </div>
    <div class="wu-story">
      <article class="wu-item">
        <div class="wu-video-card">
          <button class="wu-custom-play" type="button" aria-label="Play video">
            <span></span>
          </button>
          <iframe
            style="pointer-events: none"
            allow="fullscreen; picture-in-picture"
            allowfullscreen=""
            class="vimeo-cover"
            frameborder="0"
            src="https://player.vimeo.com/video/1188505938?autoplay=0&amp;muted=0&amp;loop=0&amp;background=0&amp;autopause=1&amp;controls=0&amp;title=0&amp;byline=0&amp;portrait=0"
          >
          </iframe>
          <div class="wu-video-meta">Built at scale</div>
        </div>
        <div class="wu-copy">
          <div class="wu-kicker">
            <span class="wu-num">01</span><span class="wu-tag">Expertise</span>
          </div>
          <h3>100+ Gambling projects delivered</h3>
        </div>
      </article>
      <article class="wu-item reverse">
        <div class="wu-video-card">
          <button class="wu-custom-play" type="button" aria-label="Play video">
            <span></span>
          </button>
          <iframe
            style="pointer-events: none"
            allow="fullscreen; picture-in-picture"
            allowfullscreen=""
            class="vimeo-cover"
            frameborder="0"
            src="https://player.vimeo.com/video/1188505288?autoplay=0&amp;muted=0&amp;loop=0&amp;background=0&amp;autopause=1&amp;controls=0&amp;title=0&amp;byline=0&amp;portrait=0"
          >
          </iframe>
          <div class="wu-video-meta">global shows</div>
        </div>
        <div class="wu-copy">
          <div class="wu-kicker">
            <span class="wu-num">02</span><span class="wu-tag">Concept</span>
          </div>
          <h3>Unique journey through your event</h3>
        </div>
      </article>
      <article class="wu-item">
        <div class="wu-video-card">
          <button class="wu-custom-play" type="button" aria-label="Play video">
            <span></span>
          </button>
          <iframe
            style="pointer-events: none"
            allow="fullscreen; picture-in-picture"
            allowfullscreen=""
            class="vimeo-cover"
            frameborder="0"
            src="https://player.vimeo.com/video/1188506081?autoplay=0&amp;muted=0&amp;loop=0&amp;background=0&amp;autopause=1&amp;controls=0&amp;title=0&amp;byline=0&amp;portrait=0"
          >
          </iframe>
          <div class="wu-video-meta">custom design</div>
        </div>
        <div class="wu-copy">
          <div class="wu-kicker">
            <span class="wu-num">03</span><span class="wu-tag">Worldwide</span>
          </div>
          <h3>Local execution. Global reach.</h3>
        </div>
      </article>
      <article class="wu-item reverse">
        <div class="wu-video-card">
          <button class="wu-custom-play" type="button" aria-label="Play video">
            <span></span>
          </button>
          <iframe
            style="pointer-events: none"
            allow="fullscreen; picture-in-picture"
            allowfullscreen=""
            class="vimeo-cover"
            frameborder="0"
            src="https://player.vimeo.com/video/1188505288?autoplay=0&amp;muted=0&amp;loop=0&amp;background=0&amp;autopause=1&amp;controls=0&amp;title=0&amp;byline=0&amp;portrait=0"
          >
          </iframe>
          <div class="wu-video-meta">live status</div>
        </div>
        <div class="wu-copy">
          <div class="wu-kicker">
            <span class="wu-num">04</span><span class="wu-tag">Delivery</span>
          </div>
          <h3>Each step is under control</h3>
        </div>
      </article>
      <article class="wu-item">
        <div class="wu-video-card">
          <button class="wu-custom-play" type="button" aria-label="Play video">
            <span></span>
          </button>
          <iframe
            style="pointer-events: none"
            allow="fullscreen; picture-in-picture"
            allowfullscreen=""
            class="vimeo-cover"
            frameborder="0"
            src="https://player.vimeo.com/video/1188506081?autoplay=0&amp;muted=0&amp;loop=0&amp;background=0&amp;autopause=1&amp;controls=0&amp;title=0&amp;byline=0&amp;portrait=0"
          >
          </iframe>
          <div class="wu-video-meta">on-site team</div>
        </div>
        <div class="wu-copy">
          <div class="wu-kicker">
            <span class="wu-num">05</span><span class="wu-tag">ExpoTracker</span>
          </div>
          <h3>Easy project tracking</h3>
        </div>
      </article>
      <article class="wu-item reverse">
        <div class="wu-video-card">
          <button class="wu-custom-play" type="button" aria-label="Play video">
            <span></span>
          </button>
          <iframe
            style="pointer-events: none"
            allow="fullscreen; picture-in-picture"
            allowfullscreen=""
            class="vimeo-cover"
            frameborder="0"
            src="https://player.vimeo.com/video/1188505938?autoplay=0&amp;muted=0&amp;loop=0&amp;background=0&amp;autopause=1&amp;controls=0&amp;title=0&amp;byline=0&amp;portrait=0"
          >
          </iframe>
          <div class="wu-video-meta">on-time delivery</div>
        </div>
        <div class="wu-copy">
          <div class="wu-kicker">
            <span class="wu-num">06</span><span class="wu-tag">Support</span>
          </div>
          <h3>On-site full support</h3>
        </div>
      </article>
    </div>
  </div>
</section>
<!-- PORTFOLIO -->
`,ul=`<section class="globe-section rv" id="shows">
  <div class="container">
    <div class="rv section-title-block">
      <h2 class="sh section-title">WHERE WE <em>BUILD?</em></h2>
      <div class="section-subtitle">UPCOMING EVENTS</div>
    </div>
    <div class="globe-layout">
      <div class="globe-wrap">
        <canvas height="360" id="globe" width="360"></canvas>
      </div>
      <div class="gshows">
        <div class="gshow-item active" data-i="0">
          <div class="gshow-dot"></div>
          <div>
            <div class="gshow-name">ICE</div>
            <div class="gshow-loc">Barcelona, Spain</div>
          </div>
          <div class="gshow-date">3–6 Feb 2027</div>
        </div>
        <div class="gshow-item" data-i="1">
          <div class="gshow-dot"></div>
          <div>
            <div class="gshow-name">SiGMA</div>
            <div class="gshow-loc">Malta</div>
          </div>
          <div class="gshow-date">10–14 Nov 2026</div>
        </div>
        <div class="gshow-item" data-i="2">
          <div class="gshow-dot"></div>
          <div>
            <div class="gshow-name">SBC</div>
            <div class="gshow-loc">Lisbon, Portugal</div>
          </div>
          <div class="gshow-date">16–18 Sep 2026</div>
        </div>
        <div class="gshow-item" data-i="3">
          <div class="gshow-dot"></div>
          <div>
            <div class="gshow-name">iGB</div>
            <div class="gshow-loc">Amsterdam</div>
          </div>
          <div class="gshow-date">7–10 Jul 2026</div>
        </div>
        <div class="gshow-item" data-i="4">
          <div class="gshow-dot"></div>
          <div>
            <div class="gshow-name">GAT</div>
            <div class="gshow-loc">Colombia</div>
          </div>
          <div class="gshow-date">8–10 Apr 2026</div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- CTA -->
`,dl=`<div class="cta-wrap reveal-block" id="contact">
  <div class="cta-box ga rv">
    <div>
      <h2 class="cta-h">Ready for the next event?<br /><em>Let's talk now.</em></h2>
    </div>
    <div class="cta-actions">
      <a class="btn-cta" href="mailto:info@alpacaexpogroup.com">REQUEST CONCEPT</a>
      <div aria-label="Quick messengers" class="cta-messengers">
        <a
          aria-label="Contact us on WhatsApp"
          class="msg-btn wa"
          href="https://wa.me/yournumber"
          rel="noopener"
          target="_blank"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path
              d="M20.52 3.48A11.8 11.8 0 0 0 12.05 0C5.53 0 .25 5.28.25 11.8c0 2.08.54 4.1 1.56 5.9L0 24l6.45-1.68a11.75 11.75 0 0 0 5.6 1.43h.01c6.52 0 11.8-5.28 11.8-11.8 0-3.15-1.23-6.1-3.34-8.47Zm-8.46 17.82a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.83 1 1.02-3.73-.22-.38a9.35 9.35 0 0 1-1.43-4.97c0-5.18 4.22-9.4 9.41-9.4 2.51 0 4.86.98 6.63 2.76a9.32 9.32 0 0 1 2.75 6.63c0 5.18-4.22 9.41-9.4 9.41Zm5.15-7.02c-.28-.14-1.64-.8-1.9-.89-.26-.1-.45-.14-.64.14-.18.28-.73.89-.9 1.07-.17.18-.33.21-.61.07-.28-.14-1.17-.43-2.22-1.36-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.17.18-.28.28-.47.1-.18.05-.35-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.18 0-.47.07-.72.35s-.94.92-.94 2.25.96 2.62 1.09 2.8c.14.18 1.88 2.87 4.56 4.02.64.28 1.14.45 1.53.58.64.2 1.23.17 1.69.1.52-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.11-.26-.18-.54-.32Z"
            ></path>
          </svg>
        </a>
        <a
          aria-label="Contact us on Telegram"
          class="msg-btn tg"
          href="https://t.me/yourusername"
          rel="noopener"
          target="_blank"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path
              d="M22.44 3.8 19.1 20.07c-.25 1.15-.92 1.43-1.86.9l-5.15-3.8-2.48 2.39c-.28.28-.51.51-1.05.51l.38-5.25 9.56-8.64c.42-.38-.09-.59-.64-.21L6.04 13.4.96 11.81c-1.11-.35-1.13-1.11.23-1.64L21.06 2.5c.92-.34 1.73.22 1.38 1.3Z"
            ></path>
          </svg>
        </a>
        <a
          aria-label="Contact us by Email"
          class="msg-btn em"
          href="mailto:info@alpacaexpogroup.com"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path
              d="M3.5 5h17A1.5 1.5 0 0 1 22 6.5v11A1.5 1.5 0 0 1 20.5 19h-17A1.5 1.5 0 0 1 2 17.5v-11A1.5 1.5 0 0 1 3.5 5Zm.9 2.2 7.15 5.35a.75.75 0 0 0 .9 0l7.15-5.35H4.4Zm15.6 2.05-6.65 4.98a2.25 2.25 0 0 1-2.7 0L4 9.25V17h16V9.25Z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
<!-- FOOTER -->
`,fl=`<footer
  class="reveal-block"
  style="
    margin-top: 16px;
    padding: 28px 48px 22px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 14px;
    position: relative;
    z-index: 1;
  "
>
  <!-- Contacts row -->
  <div
    style="
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 6px 28px;
      font-size: 13px;
      color: rgba(255, 255, 255, 0.45);
    "
  >
    <a
      href="tel:+4920269754130"
      style="
        color: rgba(255, 255, 255, 0.45);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        transition: color 0.2s;
      "
      onmouseover="this.style.color = '#fff'"
      onmouseout="this.style.color = 'rgba(255,255,255,0.45)'"
    >
      <span
        style="
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: rgba(0, 212, 255, 0.1);
          border: 0.5px solid rgba(0, 212, 255, 0.25);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        "
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00D4FF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"
          />
        </svg>
      </span>
      +49 202 69754130
    </a>
    <span style="color: rgba(255, 255, 255, 0.12)">·</span>
    <a
      href="mailto:info@alpacaexpogroup.com"
      style="
        color: rgba(255, 255, 255, 0.45);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        transition: color 0.2s;
      "
      onmouseover="this.style.color = '#fff'"
      onmouseout="this.style.color = 'rgba(255,255,255,0.45)'"
    >
      <span
        style="
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: rgba(0, 212, 255, 0.1);
          border: 0.5px solid rgba(0, 212, 255, 0.25);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        "
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00D4FF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </span>
      info@alpacaexpogroup.com
    </a>
    <span style="color: rgba(255, 255, 255, 0.12)">·</span>
    <a
      href="https://maps.app.goo.gl/29twbCwCuvp6cKt67"
      target="_blank"
      rel="noopener"
      style="
        color: rgba(255, 255, 255, 0.45);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        transition: color 0.2s;
      "
      onmouseover="this.style.color = '#fff'"
      onmouseout="this.style.color = 'rgba(255,255,255,0.45)'"
    >
      <span
        style="
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: rgba(0, 212, 255, 0.1);
          border: 0.5px solid rgba(0, 212, 255, 0.25);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        "
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00D4FF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </span>
      Bärenstraße 13, 42117 Wuppertal, Germany
    </a>
  </div>

  <!-- Divider -->
  <div style="width: 100%; height: 1px; background: rgba(255, 255, 255, 0.04)"></div>

  <!-- Legal + copyright -->
  <div
    style="font-size: 10px; line-height: 1.8; color: rgba(255, 255, 255, 0.28); text-align: center"
  >
    <a
      href="https://alpacaexpogroup.com/terms-and-conditions/"
      target="_blank"
      rel="noopener"
      style="color: rgba(255, 255, 255, 0.35); text-decoration: none"
      onmouseover="this.style.color = 'rgba(255,255,255,0.7)'"
      onmouseout="this.style.color = 'rgba(255,255,255,0.35)'"
      >Terms and conditions</a
    >
    &nbsp;·&nbsp;
    <a
      href="https://alpacaexpogroup.com/privacy-policy-2/"
      target="_blank"
      rel="noopener"
      style="color: rgba(255, 255, 255, 0.35); text-decoration: none"
      onmouseover="this.style.color = 'rgba(255,255,255,0.7)'"
      onmouseout="this.style.color = 'rgba(255,255,255,0.35)'"
      >Privacy policy</a
    >
    &nbsp;·&nbsp;
    <a
      href="https://alpacaexpogroup.com/impressum/"
      target="_blank"
      rel="noopener"
      style="color: rgba(255, 255, 255, 0.35); text-decoration: none"
      onmouseover="this.style.color = 'rgba(255,255,255,0.7)'"
      onmouseout="this.style.color = 'rgba(255,255,255,0.35)'"
      >Impressum</a
    >
    <br />
    © 2026 Alpaca Expo Group &nbsp;·&nbsp; Visit our corporate website:
    <a
      href="https://www.alpacaexpogroup.com"
      target="_blank"
      rel="noopener"
      style="color: rgba(0, 212, 255, 0.7); text-decoration: none"
      onmouseover="this.style.color = '#00D4FF'"
      onmouseout="this.style.color = 'rgba(0,212,255,0.7)'"
      >www.alpacaexpogroup.com</a
    >
  </div>
</footer>

<!-- PORTFOLIO OVERLAY -->
`,pl=`<div class="port-overlay" id="portOverlay">
  <canvas
    id="portBgCanvas"
    style="
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
      opacity: 0.4;
    "
  ></canvas>
  <div class="port-topbar" id="portTopbar">
    <button
      aria-label="Back to the main page"
      class="port-back-main"
      onclick="closePortfolio()"
      type="button"
    >
      <span class="port-back-arrow">←</span>
      <span>Back to the main page</span>
    </button>
  </div>
  <div class="port-hero">
    <div class="port-eyebrow" id="eyebrow">Completed projects</div>
    <h1 class="port-title" id="portTitle">Our <em>stands</em></h1>
    <p class="port-sub" id="portSub">
      Every project is a full-cycle stand — from concept and production to on-site activation at the
      world's top gambling shows.
    </p>
  </div>
  <div class="port-filters" id="portFilters">
    <button class="filter-btn active" data-filter="all">All projects</button>
    <button class="filter-btn" data-filter="ice">ICE</button>
    <button class="filter-btn" data-filter="sigma">SiGMA</button>
    <button class="filter-btn" data-filter="igb">iGB</button>
    <button class="filter-btn" data-filter="sbc">SBC</button>
    <button class="filter-btn" data-filter="gat">GAT</button>
  </div>
  <div class="port-grid" id="portGrid"></div>
  <div class="port-footer">© 2024 Alpaca Gambling · Expo Group · All rights reserved</div>

  <!-- LIGHTBOX -->
  <div class="lightbox" id="lightbox">
    <div class="lb-backdrop" onclick="closeLightbox()"></div>
    <div class="lb-card" id="lbCard">
      <div class="lb-close" onclick="closeLightbox()">×</div>
      <div class="lb-img">
        <div class="lb-stand-icon">
          <svg fill="none" stroke="white" stroke-width="0.6" viewbox="0 0 24 24">
            <rect height="14" rx="1" width="20" x="2" y="8"></rect>
            <path d="M6 8V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3"></path>
            <line x1="12" x2="12" y1="2" y2="8"></line>
          </svg>
        </div>
      </div>
      <div class="lb-body">
        <div class="lb-cat" id="lbCat"></div>
        <div class="lb-name" id="lbName"></div>
        <div class="lb-meta" id="lbMeta"></div>
      </div>
    </div>
  </div>
</div>
<div class="port-overlay-close" id="portOverlayClose" onclick="closePortfolio()">×</div>
`,ml=`<div aria-hidden="true" class="pe-video-popup" id="peVideoPopup">
  <div
    aria-label="Perfect event video popup"
    aria-modal="true"
    class="pe-video-popup-box"
    role="dialog"
  >
    <button aria-label="Close video popup" class="pe-video-popup-close" type="button">×</button>
    <video controls="" id="peVideoPopupVideo" playsinline="" preload="metadata"></video>
    <div class="pe-video-popup-fallback" id="peVideoPopupFallback">Video will appear here</div>
    <div class="pe-video-popup-title" id="peVideoPopupTitle"></div>
  </div>
</div>
`,hl=`<div aria-hidden="true" class="op-popup" id="opPopup">
  <!-- Close button is a direct child of the backdrop (.op-popup has no
       transform, so position:absolute anchors to the viewport corner cleanly) -->
  <button aria-label="Close" class="op-popup-close" data-tooltip="Закрити" type="button">×</button>

  <button
    aria-label="Попереднє фото"
    class="op-popup-nav op-popup-nav--prev"
    data-tooltip="Назад"
    type="button"
    hidden
  >
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M10 12L6 8l4-4"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
  <button
    aria-label="Наступне фото"
    class="op-popup-nav op-popup-nav--next"
    data-tooltip="Далі"
    type="button"
    hidden
  >
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M6 4l4 4-4 4"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>

  <div aria-modal="true" class="op-popup-card" role="dialog">
    <div class="op-popup-img" id="opPopupImg">
      <!-- .op-popup-slides injected here by JS; siblings below are preserved -->
      <button
        aria-label="Fullscreen"
        class="op-popup-fs"
        data-tooltip="Fullscreen"
        id="opPopupFs"
        type="button"
      >
        <!-- Standard 24 px fullscreen icons (Feather-style) -->
        <svg
          aria-hidden="true"
          class="fs-icon fs-icon-expand"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
          />
        </svg>
        <svg
          aria-hidden="true"
          class="fs-icon fs-icon-compress"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
          />
        </svg>
      </button>
      <!-- Info overlay above the progress bar -->
      <div class="op-popup-img-info" id="opPopupImgInfo" aria-hidden="true">
        <div class="op-popup-img-info-client" id="opPopupImgClient"></div>
        <div class="op-popup-img-info-title" id="opPopupImgTitle"></div>
        <div class="op-popup-img-info-meta" id="opPopupImgMeta"></div>
      </div>
      <!-- Progress bar at the bottom edge of the image area -->
      <div class="op-popup-progress" id="opPopupProgress">
        <span class="op-popup-progress-counter" id="opPopupCounter" aria-hidden="true"
          >01 / 01</span
        >
        <div class="op-popup-progress-track">
          <div class="op-popup-progress-fill" id="opPopupFill"></div>
        </div>
      </div>
    </div>
    <div class="op-popup-info">
      <div class="op-popup-client" id="opPopupClient"></div>
      <div class="op-popup-title" id="opPopupTitle"></div>
      <div class="op-popup-meta" id="opPopupMeta"></div>
    </div>
  </div>
</div>
`,gl=`<div aria-label="Contact options" class="floating-contact" id="floatingContact">
  <div aria-hidden="true" class="fc-options">
    <a aria-label="Email" class="fc-btn em" href="mailto:info@alpacaexpogroup.com">
      <svg viewbox="0 0 24 24">
        <path
          d="M3.5 5h17A1.5 1.5 0 0 1 22 6.5v11A1.5 1.5 0 0 1 20.5 19h-17A1.5 1.5 0 0 1 2 17.5v-11A1.5 1.5 0 0 1 3.5 5Zm.9 2.2 7.15 5.35a.75.75 0 0 0 .9 0l7.15-5.35H4.4Zm15.6 2.05-6.65 4.98a2.25 2.25 0 0 1-2.7 0L4 9.25V17h16V9.25Z"
        ></path>
      </svg>
    </a>
    <a
      aria-label="Telegram"
      class="fc-btn tg"
      href="https://t.me/yourusername"
      rel="noopener"
      target="_blank"
    >
      <svg viewbox="0 0 24 24">
        <path
          d="M9.04 15.47l-.38 5.34c.55 0 .79-.24 1.08-.52l2.6-2.49 5.39 3.95c.99.55 1.7.26 1.96-.92l3.55-16.64.01-.01c.31-1.45-.52-2.02-1.49-1.66L1.84 9.3c-1.42.55-1.4 1.34-.24 1.7l5.78 1.8 13.42-8.46c.63-.4 1.2-.18.73.22"
        ></path>
      </svg>
    </a>
    <a
      aria-label="WhatsApp"
      class="fc-btn wa"
      href="https://wa.me/yournumber"
      rel="noopener"
      target="_blank"
    >
      <svg viewbox="0 0 32 32">
        <path
          d="M16 .4C7.5.4.6 7.3.6 15.8c0 2.7.7 5.3 2 7.6L0 32l8.8-2.6c2.2 1.2 4.7 1.8 7.2 1.8h.1c8.5 0 15.4-6.9 15.4-15.4C31.5 7.3 24.6.4 16 .4zm0 28.2c-2.3 0-4.6-.6-6.6-1.7l-.5-.3-5.2 1.5 1.4-5.1-.3-.5c-1.2-2.1-1.8-4.4-1.8-6.8C3 9 8.5 3.5 15.9 3.5c7.4 0 12.9 5.5 12.9 12.9 0 7.3-5.5 12.2-12.8 12.2zm7.1-9.6c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2-.2.3-1 1.2-1.2 1.4-.2.2-.4.3-.7.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.3-.4.4-.7.1-.3 0-.5 0-.7 0-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .5-.4.4-1.5 1.4-1.5 3.5s1.5 4.1 1.7 4.4c.2.3 3 4.6 7.3 6.3 1 .4 1.8.7 2.4.9 1 .3 1.9.2 2.6.1.8-.1 2.3-.9 2.6-1.7.3-.8.3-1.5.2-1.7-.1-.2-.4-.3-.8-.5z"
          fill="#25D366"
        ></path>
      </svg>
    </a>
  </div>
  <button aria-expanded="false" aria-label="Open contact options" class="fc-main" type="button">
    <svg viewbox="0 0 24 24">
      <path
        d="M21 11.5a8.5 8.5 0 0 1-9.5 8.45 8.57 8.57 0 0 1-3.16-.98L3 20.5l1.53-4.62A8.5 8.5 0 1 1 21 11.5Z"
      ></path>
      <path d="M8.5 10.2h7"></path>
      <path d="M8.5 13.3h4.8"></path>
    </svg>
  </button>
</div>

<!-- FINAL FIX: align floating red contact button to CONTACT NOW right edge -->
`,_l=`<div class="request-popup" id="requestPopup" aria-hidden="true" inert>
  <div class="request-popup__backdrop" data-request-close></div>
  <div
    class="request-popup__card"
    role="dialog"
    aria-modal="true"
    aria-labelledby="requestPopupTitle"
  >
    <button class="request-popup__close" type="button" aria-label="Close popup" data-request-close>
      ×
    </button>

    <h2 class="request-popup__title" id="requestPopupTitle">Request <em>free concept</em></h2>
    <p class="request-popup__text">
      Tell us a few details about your event. Our team will contact you and prepare the next step.
    </p>
    <form
      class="request-form"
      action="mailto:info@alpacaexpogroup.com"
      method="post"
      enctype="text/plain"
    >
      <input
        class="request-form__field"
        name="Contact person"
        type="text"
        placeholder="Contact person"
        required
      />
      <input class="request-form__field" name="Phone" type="tel" placeholder="Phone" required />
      <input class="request-form__field" name="Email" type="email" placeholder="Email" required />
      <input class="request-form__field" name="Event" type="text" placeholder="Event" required />
      <textarea
        class="request-form__field request-form__wide"
        name="Comments"
        placeholder="Comments"
      ></textarea>
      <button class="request-form__submit" type="submit">SEND REQUEST</button>
    </form>
  </div>
</div>
`;function vl(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function yl(e){return vl(e)}var bl=[5,5,5];function xl(e){return e.type===`video`?`<video
            src="${yl(e.src)}"
            aria-label="${yl(e.alt||``)}"
            playsinline muted loop autoplay
          ></video>`:e.type===`youtube`?`<iframe
            class="pc-slide-yt"
            src="${`https://www.youtube.com/embed/${yl(e.youtubeId)}?autoplay=0&controls=0&rel=0&modestbranding=1`}"
            data-youtube-id="${yl(e.youtubeId)}"
            title="${yl(e.alt||`YouTube video`)}"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
          ></iframe>`:`<img
            src="${yl(e.src)}"
            alt="${yl(e.alt||``)}"
          />`}function Sl(e){let t=e.media?.length?e.media:[],n=e.details?.[0]||``,r=e.revealClass?` ${yl(e.revealClass)}`:``,i=t.length>1,a=i?` data-slider`:``,o=t.map(e=>`\n          <div class="pc-slide">${xl(e)}</div>`).join(``),s=i?`\n      <div class="pc-dots" aria-hidden="true">${t.map((e,t)=>`<button class="pc-dot${t===0?` active`:``}" data-idx="${t}" tabindex="-1"></button>`).join(``)}</div>`:``,c=i?`
      <button class="pc-nav pc-nav--prev" aria-label="Попереднє фото" tabindex="-1">
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <button class="pc-nav pc-nav--next" aria-label="Наступне фото" tabindex="-1">
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>`:``;return`
    <div class="pc rv${r}"${a}>
      <div class="pc-bg">
        <div class="pc-slides">${o}
        </div>
      </div>
      <div class="pc-ov"></div>
      <div class="pc-info">
        <div class="pc-cl">${vl(e.client)}</div>
        <div class="pc-t">${vl(e.title)}</div>
        <div class="pc-m">${vl(n)}</div>
      </div>${s}${c}
    </div>`}function Cl(e,t){return`
  <div class="${t===1?`pg pg-alt`:`pg`}"${t>0?` data-chunk="${t}" hidden`:``}>
    ${e.map(Sl).join(`
`)}
  </div>`}function wl(e){let t=0;return bl.map(n=>{let r=e.slice(t,t+n);return t+=n,r}).filter(e=>e.length)}function Tl(e){return`
<section class="portfolio" id="portfolio">
  <div class="sec-hd rv">
    <div class="section-title-block">
      <h2 class="sh section-title">OUR <em>PROJECTS</em></h2>
      <div class="section-subtitle">PROVEN RESULTS</div>
    </div>
  </div>
  ${wl(e).map((e,t)=>`${t===0?``:`\n  <div aria-hidden="true" class="project-block-spacer" data-chunk="${t}" hidden></div>`}${Cl(e,t)}`).join(`
`)}
  <div class="more-cases-wrap rv">
    <button aria-controls="moreCases" aria-expanded="false" class="view-more-cases" type="button">
      VIEW MORE CASES
    </button>
  </div>
  <div aria-hidden="true" class="more-cases" id="moreCases"></div>
</section>
<!-- VIDEO TESTIMONIAL -->`}var El=4,Dl=`https://player.vimeo.com/video/1189839327?autoplay=1&muted=1&loop=1&background=1&autopause=0&controls=0`,Ol=`30 years · Real reactions`;function kl(){return`
      <div class="vt-cell-video rv">
        <div class="vt-video-wrap clients-video-vertical">
          <iframe
            src="${Dl}"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            frameborder="0"
          ></iframe>
          <div class="vt-video-badge">${Ol}</div>
        </div>
      </div>`}function Al(e,t){return e?.type===`html`?e.html:`
          <img
            src="${yl(e?.src)}"
            alt="${yl(e?.alt||t)}"
            style="${yl(e?.style||`height: 36px; width: auto; object-fit: contain`)}"
          />`}function jl(e){return`
      <div class="vt-cell rv">
        <div class="vt-logo">
          ${Al(e.logo,e.company)}
        </div>
        <div class="vt-quote-wrap">
          <div class="vt-quote">
            ${vl(e.text)}
          </div>
        </div>
        <div class="vt-author">
          <div class="vt-author-name">
            ${vl(e.authorName)}, <span class="vt-author-role">${vl(e.authorPosition)}</span>
          </div>
        </div>
      </div>`}function Ml(e){let t=e.slice(0,El),n=e.slice(El),r=[];for(let e=0;e<n.length;e+=El)r.push(n.slice(e,e+El));let i=r.map((e,t)=>`
  <div class="vr-chunk${t%2==0?` vr-chunk-alt`:``}" data-chunk="${t+1}" hidden>
      ${kl()}
      ${e.map(jl).join(`
`)}
  </div>`).join(``);return`
<section class="video-testimonial" id="reviews">
  <div class="container">
    <!-- Section title -->
    <div class="vt-head rv">
      <h2 class="sh section-title">WHAT OUR CLIENTS <em>SAY?</em></h2>
      <div class="section-subtitle">REAL REACTION. REAL STAND.</div>
    </div>

    <!-- Bento 3-col grid: video left (col 1, rowspan 2) + first ${El} review cards -->
    <div class="vt-bento">
      ${kl()}
      ${t.map(jl).join(`
`)}
    </div>
    <!-- /vt-bento -->
${i}
    <!-- Button matching VIEW MORE CASES style -->
    <div class="more-cases-wrap rv">
      <button
        aria-controls="moreReviews"
        aria-expanded="false"
        class="view-more-cases"
        id="moreReviewsBtn"
        type="button"
      >
        VIEW MORE REVIEWS
      </button>
    </div>
    <div class="more-reviews" id="moreReviews" aria-hidden="true"></div>
  </div>
</section>
<!-- GLOBE / WHERE WE BUILD -->`}function Nl(e){return{projects:Array.isArray(e?.projects)?e.projects:Vc.projects,reviews:Array.isArray(e?.reviews)?e.reviews:Vc.reviews}}function Pl(e){return e?`<source src="${e}" type='video/mp4; codecs="hvc1"'>`:``}function Fl(e=Vc){let t=Nl(e);return[ol,sl.replaceAll(`__HOME_LOGO_URL__`,Hc),cl.replaceAll(`__HERO_VIDEO_URL__`,Pc).replaceAll(`__PLANET_STAND_URL__`,Wc).replaceAll(`__PLANET_ACTIVATION_URL__`,Gc).replaceAll(`__PLANET_HOSTS_URL__`,Kc).replaceAll(`__PLANET_SCREENS_URL__`,qc).replaceAll(`__PLANET_CATERING_URL__`,Jc).replaceAll(`__PLANET_MERCH_URL__`,Yc).replaceAll(`__PLANET_CONTENT_URL__`,Xc).replaceAll(`__PLANET_SUPPORT_URL__`,Zc).replaceAll(`__PLANET_STAND_HEVC_SOURCE__`,Pl(``)).replaceAll(`__PLANET_ACTIVATION_HEVC_SOURCE__`,Pl(``)).replaceAll(`__PLANET_HOSTS_HEVC_SOURCE__`,Pl(``)).replaceAll(`__PLANET_SCREENS_HEVC_SOURCE__`,Pl(``)).replaceAll(`__PLANET_CATERING_HEVC_SOURCE__`,Pl(``)).replaceAll(`__PLANET_MERCH_HEVC_SOURCE__`,Pl(``)).replaceAll(`__PLANET_CONTENT_HEVC_SOURCE__`,Pl(``)).replaceAll(`__PLANET_SUPPORT_HEVC_SOURCE__`,Pl(``)).replaceAll(`__POPUP_VIDEO_1__`,Pc).replaceAll(`__POPUP_VIDEO_2__`,Fc).replaceAll(`__POPUP_VIDEO_3__`,Uc).replaceAll(`__PLANET_STAND_POSTER_URL__`,Qc).replaceAll(`__PLANET_ACTIVATION_POSTER_URL__`,$c).replaceAll(`__PLANET_HOSTS_POSTER_URL__`,el).replaceAll(`__PLANET_SCREENS_POSTER_URL__`,tl).replaceAll(`__PLANET_CATERING_POSTER_URL__`,nl).replaceAll(`__PLANET_MERCH_POSTER_URL__`,rl).replaceAll(`__PLANET_CONTENT_POSTER_URL__`,il).replaceAll(`__PLANET_SUPPORT_POSTER_URL__`,al),ll,Tl(t.projects),Ml(t.reviews),ul,dl,fl,pl,ml,hl,gl,_l].join(`
`)}var Il=[`// Reference script block 1
function flipProc() {
  document.getElementById('proc-card-5').classList.toggle('flipped');
}

function flipCard(id) {
  const card = document.getElementById('card-' + id);
  card.classList.toggle('flipped');
}
const nav = document.getElementById('nav');

(function () {
  if (!nav) return;
  var lastY = 0;
  var ticking = false;

  function updateNavState() {
    var y = window.scrollY;
    nav.classList.toggle('on', y > 60);
    if (y > 80 && !nav.classList.contains('menu-open')) {
      nav.classList.toggle('nav-hidden', y > lastY);
    } else {
      nav.classList.remove('nav-hidden');
    }
    lastY = y;
    ticking = false;
  }

  window.addEventListener(
    'scroll',
    function () {
      if (!ticking) {
        requestAnimationFrame(updateNavState);
        ticking = true;
      }
    },
    { passive: true },
  );
})();
const obs = new IntersectionObserver(
  (e) =>
    e.forEach((x) => {
      if (x.isIntersecting) {
        x.target.classList.add('vis');
        obs.unobserve(x.target);
      }
    }),
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
);
document.querySelectorAll('.rv, .rv-left, .rv-right, .rv-scale').forEach((el) => obs.observe(el));

// ── WHY US — Apple-style chess / stagger reveal ──
(function () {
  const items = document.querySelectorAll('.why-us .wu-item');
  if (!items.length) return;

  items.forEach((item, index) => {
    item.style.transitionDelay = \`\${(index % 2) * 0.08}s\`;
  });

  const wuObs = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => [...items].indexOf(a.target) - [...items].indexOf(b.target))
        .forEach((entry, visibleIndex) => {
          entry.target.style.transitionDelay = \`\${visibleIndex * 0.11}s\`;
          entry.target.classList.add('wu-vis');
          wuObs.unobserve(entry.target);
        });
    },
    { threshold: 0.18, rootMargin: '0px 0px -90px 0px' },
  );

  items.forEach((item) => wuObs.observe(item));
})();

// ── WHAT OUR CLIENTS SAY — premium Apple-style stagger reveal ──
(function () {
  const section = document.querySelector('.video-testimonial');
  if (!section) return;

  const items = [
    section.querySelector('.vt-head'),
    section.querySelector('.vt-cell-video'),
    ...section.querySelectorAll('.vt-bento > .vt-cell'),
    section.querySelector('.more-cases-wrap'),
  ].filter(Boolean);

  if (!items.length) return;

  const reveal = () => {
    items.forEach((item, index) => {
      const chessDelay = index === 0 ? 0 : 0.12 + (index - 1) * 0.095;
      item.style.transitionDelay = \`\${chessDelay}s\`;
      window.setTimeout(() => item.classList.add('vt-in'), chessDelay * 1000);
    });
  };

  const vtObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal();
          vtObs.disconnect();
        }
      });
    },
    { threshold: 0.16, rootMargin: '0px 0px -90px 0px' },
  );

  vtObs.observe(section);
})();

// Globe
(function () {
  const canvas = document.getElementById('globe');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = 360,
    H = 360,
    CX = 180,
    CY = 180,
    R = 158;
  let rotY = 0.3,
    pulse = 0;

  const continents = {
    northAmerica: [
      [70, -140],
      [70, -60],
      [60, -55],
      [50, -55],
      [45, -60],
      [40, -65],
      [35, -75],
      [30, -80],
      [25, -80],
      [20, -87],
      [15, -85],
      [10, -83],
      [8, -77],
      [9, -75],
      [12, -70],
      [15, -65],
      [18, -66],
      [25, -80],
      [30, -81],
      [35, -76],
      [40, -74],
      [45, -64],
      [50, -55],
      [60, -55],
      [65, -64],
      [70, -75],
      [72, -80],
      [70, -90],
      [68, -100],
      [65, -110],
      [60, -120],
      [55, -130],
      [50, -125],
      [45, -124],
      [40, -124],
      [35, -120],
      [30, -117],
      [25, -110],
      [20, -105],
      [15, -92],
      [10, -84],
      [8, -77],
      [15, -90],
      [20, -105],
      [25, -110],
      [30, -117],
      [35, -120],
      [40, -122],
      [45, -124],
      [50, -125],
      [55, -130],
      [60, -138],
      [65, -168],
      [70, -163],
      [70, -140],
    ],
    southAmerica: [
      [12, -72],
      [10, -62],
      [8, -60],
      [5, -52],
      [2, -50],
      [0, -50],
      [-5, -35],
      [-10, -37],
      [-15, -39],
      [-20, -40],
      [-25, -48],
      [-30, -51],
      [-33, -53],
      [-35, -57],
      [-40, -62],
      [-45, -65],
      [-50, -68],
      [-55, -68],
      [-55, -65],
      [-53, -70],
      [-50, -75],
      [-45, -75],
      [-40, -73],
      [-35, -72],
      [-30, -71],
      [-25, -70],
      [-20, -70],
      [-15, -75],
      [-10, -78],
      [-5, -80],
      [0, -80],
      [5, -77],
      [10, -73],
      [12, -72],
    ],
    europe: [
      [70, 28],
      [68, 20],
      [65, 14],
      [60, 5],
      [55, 8],
      [50, 2],
      [45, 0],
      [43, 3],
      [41, 2],
      [38, 0],
      [36, 5],
      [37, 10],
      [38, 15],
      [40, 18],
      [41, 20],
      [40, 22],
      [37, 22],
      [36, 26],
      [37, 28],
      [40, 30],
      [42, 28],
      [44, 28],
      [46, 30],
      [48, 22],
      [50, 20],
      [52, 20],
      [54, 18],
      [55, 14],
      [58, 12],
      [60, 5],
      [62, 6],
      [65, 14],
      [68, 18],
      [70, 28],
    ],
    africa: [
      [37, 10],
      [30, 32],
      [25, 37],
      [20, 38],
      [15, 42],
      [10, 42],
      [5, 42],
      [0, 42],
      [-5, 40],
      [-10, 38],
      [-15, 35],
      [-20, 35],
      [-25, 33],
      [-30, 30],
      [-34, 26],
      [-34, 18],
      [-30, 17],
      [-25, 15],
      [-20, 12],
      [-15, 12],
      [-10, 15],
      [-5, 10],
      [0, 8],
      [5, 2],
      [10, -2],
      [15, -17],
      [20, -17],
      [25, -15],
      [30, -10],
      [35, 0],
      [37, 10],
    ],
    asia: [
      [70, 30],
      [65, 35],
      [60, 30],
      [55, 35],
      [50, 40],
      [45, 38],
      [40, 36],
      [35, 36],
      [30, 32],
      [25, 57],
      [20, 58],
      [15, 52],
      [10, 45],
      [5, 45],
      [0, 42],
      [5, 80],
      [10, 78],
      [15, 80],
      [20, 87],
      [25, 90],
      [20, 100],
      [15, 100],
      [10, 105],
      [5, 103],
      [0, 105],
      [5, 115],
      [10, 120],
      [15, 120],
      [20, 110],
      [25, 120],
      [30, 122],
      [35, 120],
      [40, 122],
      [35, 130],
      [40, 140],
      [45, 142],
      [50, 140],
      [55, 135],
      [60, 140],
      [65, 170],
      [70, 170],
      [72, 140],
      [70, 110],
      [65, 90],
      [60, 80],
      [55, 68],
      [50, 52],
      [45, 50],
      [40, 50],
      [35, 52],
      [30, 48],
      [25, 57],
      [20, 58],
      [15, 43],
      [10, 44],
      [15, 43],
      [20, 38],
      [25, 37],
      [30, 32],
      [35, 36],
      [40, 36],
      [45, 38],
      [50, 40],
      [55, 35],
      [60, 30],
      [65, 35],
      [70, 30],
    ],
    australia: [
      [-15, 130],
      [-13, 136],
      [-12, 136],
      [-10, 142],
      [-15, 145],
      [-20, 148],
      [-25, 153],
      [-30, 153],
      [-35, 150],
      [-38, 146],
      [-38, 140],
      [-35, 137],
      [-32, 134],
      [-30, 115],
      [-25, 114],
      [-22, 114],
      [-18, 122],
      [-15, 128],
      [-15, 130],
    ],
    greenland: [
      [76, -70],
      [72, -55],
      [68, -52],
      [65, -53],
      [64, -52],
      [63, -50],
      [65, -42],
      [68, -35],
      [72, -28],
      [76, -28],
      [80, -30],
      [83, -35],
      [83, -50],
      [80, -60],
      [76, -70],
    ],
  };

  const shows = [
    { lat: 41.4, lng: 2.2, active: true },
    { lat: 35.9, lng: 14.5, active: false },
    { lat: 38.7, lng: -9.1, active: false },
    { lat: 52.4, lng: 4.9, active: false },
    { lat: 4.7, lng: -74.1, active: false },
  ];
  const extraDots = [
    { lat: 40.7, lng: -74 },
    { lat: 35.7, lng: 139.7 },
    { lat: -23.5, lng: -46.6 },
    { lat: 55.7, lng: 37.6 },
    { lat: 1.3, lng: 103.8 },
    { lat: -33.9, lng: 18.4 },
    { lat: 48.8, lng: 2.3 },
    { lat: 25.2, lng: 55.3 },
    { lat: 19.4, lng: -99.1 },
    { lat: 31.2, lng: 121.5 },
    { lat: 28.6, lng: 77.2 },
    { lat: -37.8, lng: 144.9 },
    { lat: 59.9, lng: 30.3 },
    { lat: 37.6, lng: 126.9 },
    { lat: 6.5, lng: 3.4 },
  ];
  function r2d(d) {
    return (d * Math.PI) / 180;
  }
  function proj3d(lat, lng) {
    const phi = r2d(90 - lat),
      th = r2d(lng) + rotY;
    const x = R * Math.sin(phi) * Math.cos(th),
      y = -R * Math.cos(phi),
      z = R * Math.sin(phi) * Math.sin(th);
    return { sx: CX + x, sy: CY + y, vis: z > -5 };
  }
  function drawCont(pts) {
    ctx.beginPath();
    let st = false,
      pv = false;
    pts.forEach(([la, lg]) => {
      const p = proj3d(la, lg);
      if (p.vis) {
        if (!st || !pv) {
          ctx.moveTo(p.sx, p.sy);
          st = true;
        } else ctx.lineTo(p.sx, p.sy);
      }
      pv = p.vis;
    });
    ctx.strokeStyle = 'rgba(0,212,255,0.75)';
    ctx.lineWidth = 1.2;
    ctx.shadowBlur = 8;
    ctx.shadowColor = '#00D4FF';
    ctx.stroke();
    ctx.shadowBlur = 0;
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    pulse += 0.035;
    for (let i = 3; i >= 1; i--) {
      const a = ctx.createRadialGradient(CX, CY, R, CX, CY, R + i * 18);
      a.addColorStop(0, \`rgba(0,212,255,\${0.12 / i})\`);
      a.addColorStop(1, 'rgba(0,212,255,0)');
      ctx.beginPath();
      ctx.arc(CX, CY, R + i * 18, 0, Math.PI * 2);
      ctx.fillStyle = a;
      ctx.fill();
    }
    const body = ctx.createRadialGradient(CX - 50, CY - 50, 10, CX, CY, R);
    body.addColorStop(0, '#031525');
    body.addColorStop(0.5, '#020d1a');
    body.addColorStop(1, '#010810');
    ctx.beginPath();
    ctx.arc(CX, CY, R, 0, Math.PI * 2);
    ctx.fillStyle = body;
    ctx.fill();
    ctx.save();
    ctx.beginPath();
    ctx.arc(CX, CY, R, 0, Math.PI * 2);
    ctx.clip();
    for (let la = -75; la <= 75; la += 15) {
      const cL = Math.cos(r2d(la)),
        sL = Math.sin(r2d(la)),
        r2 = R * cL,
        cy2 = CY - R * sL;
      ctx.beginPath();
      let st = false;
      for (let lg = -180; lg <= 180; lg += 2) {
        const th = r2d(lg) + rotY,
          x = CX + r2 * Math.cos(th),
          z = r2 * Math.sin(th);
        if (z >= 0) {
          if (!st) {
            ctx.moveTo(x, cy2);
            st = true;
          } else ctx.lineTo(x, cy2);
        } else st = false;
      }
      ctx.strokeStyle = \`rgba(0,150,255,\${la === 0 ? 0.12 : 0.05})\`;
      ctx.lineWidth = la === 0 ? 0.8 : 0.4;
      ctx.stroke();
    }
    for (let lg = 0; lg < 360; lg += 15) {
      ctx.beginPath();
      let st = false;
      for (let la = -88; la <= 88; la += 3) {
        const p = proj3d(la, lg - 180);
        if (p.vis) {
          if (!st) {
            ctx.moveTo(p.sx, p.sy);
            st = true;
          } else ctx.lineTo(p.sx, p.sy);
        } else st = false;
      }
      ctx.strokeStyle = 'rgba(0,150,255,0.05)';
      ctx.lineWidth = 0.4;
      ctx.stroke();
    }
    Object.values(continents).forEach((pts) => drawCont(pts));
    ctx.restore();
    ctx.beginPath();
    ctx.arc(CX, CY, R, 0, Math.PI * 2);
    const bg = ctx.createLinearGradient(CX - R, CY, CX + R, CY);
    bg.addColorStop(0, 'rgba(0,212,255,0.9)');
    bg.addColorStop(0.35, 'rgba(0,212,255,0.3)');
    bg.addColorStop(0.65, 'rgba(0,212,255,0.3)');
    bg.addColorStop(1, 'rgba(0,212,255,0.9)');
    ctx.strokeStyle = bg;
    ctx.lineWidth = 2;
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#00D4FF';
    ctx.stroke();
    ctx.shadowBlur = 0;
    extraDots.forEach((d) => {
      const p = proj3d(d.lat, d.lng);
      if (!p.vis) return;
      ctx.beginPath();
      ctx.arc(p.sx, p.sy, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,212,255,0.4)';
      ctx.shadowBlur = 4;
      ctx.shadowColor = '#00D4FF';
      ctx.fill();
      ctx.shadowBlur = 0;
    });
    shows.forEach((s) => {
      const p = proj3d(s.lat, s.lng);
      if (!p.vis) return;
      const pf = s.active ? 0.55 + 0.45 * Math.sin(pulse) : 0.85;
      const ringR = (s.active ? 20 : 12) * pf;
      const rg = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, ringR);
      rg.addColorStop(0, \`rgba(0,212,255,\${s.active ? 0.4 * pf : 0.15})\`);
      rg.addColorStop(1, 'rgba(0,212,255,0)');
      ctx.beginPath();
      ctx.arc(p.sx, p.sy, ringR, 0, Math.PI * 2);
      ctx.fillStyle = rg;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p.sx, p.sy, s.active ? 5 : 3, 0, Math.PI * 2);
      ctx.fillStyle = '#00D4FF';
      ctx.shadowBlur = s.active ? 18 : 6;
      ctx.shadowColor = '#00D4FF';
      ctx.fill();
      ctx.shadowBlur = 0;
    });
    const sp = ctx.createRadialGradient(CX - 60, CY - 60, 5, CX - 40, CY - 40, R * 0.6);
    sp.addColorStop(0, 'rgba(100,200,255,0.06)');
    sp.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.beginPath();
    ctx.arc(CX, CY, R, 0, Math.PI * 2);
    ctx.fillStyle = sp;
    ctx.fill();
  }
  document.querySelectorAll('.gshow-item').forEach((el) => {
    el.addEventListener('click', () => {
      document.querySelectorAll('.gshow-item').forEach((e) => e.classList.remove('active'));
      el.classList.add('active');
      const i = +el.dataset.i;
      shows.forEach((s) => (s.active = false));
      shows[i].active = true;
      rotY = -r2d(shows[i].lng) - Math.PI / 2;
    });
  });
  (function loop() {
    rotY += 0.003;
    draw();
    requestAnimationFrame(loop);
  })();
})();

// 3×3 grid reveal — center text, then ALL buttons at once, then WATCH neon
const orbitWrap = document.getElementById('svcOrbit');
const orbitCenter = document.querySelector('.svc-orbit-center');
const glassBtns = [...document.querySelectorAll('.svc-glass-btn')];
const watchLabels = [...document.querySelectorAll('.btn-watch')];

if (orbitWrap) {
  const orbitObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;

        // 1. Center text
        if (orbitCenter) orbitCenter.classList.add('vis');

        // 2. ALL buttons simultaneously
        setTimeout(() => {
          glassBtns.forEach((btn) => btn.classList.add('vis'));
        }, 300);

        // 3. WATCH neon flash — all at once after buttons fully appear
        setTimeout(() => {
          watchLabels.forEach((w) => w.classList.add('neon'));
        }, 2200);

        orbitObs.unobserve(orbitWrap);
      });
    },
    { threshold: 0.2 },
  );
  orbitObs.observe(orbitWrap);
}

const portalWrap = document.querySelector('.portal-svg-wrap');
if (portalWrap) {
  const portalObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('drawn');
          portalObs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );
  portalObs.observe(portalWrap);
}

// ── Perfect event scroll transition — static center lock with reverse animation ──
(function () {
  const pinWrap = document.getElementById('pePinWrap');
  const bgDark = document.getElementById('peBgDark');
  const heroPre = document.getElementById('heroPre');
  const heroSub = document.getElementById('heroSub');
  const heroBtns = document.getElementById('heroBtnsRow');
  const heroTicker = document.getElementById('heroTicker');
  const heroLeft = document.getElementById('heroLeft');
  const heroRight = document.getElementById('heroRight');
  const heroSection = heroLeft ? heroLeft.closest('section') || heroLeft.parentElement : null;
  const peHl = document.getElementById('peHighlight');
  const peSecond = document.getElementById('peSecond');
  const spheres = [...document.querySelectorAll('.pe-orb-sphere')];
  const orbTitle = document.getElementById('peOrbTitle');

  if (!pinWrap || !peHl) return;

  // Mobile: no scroll animation on the first screen.
  // Hero stays static; the orbit/perfect-event scene is shown as a separate second screen.
  if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) {
    if (bgDark) bgDark.style.display = 'none';
    if (heroPre) {
      heroPre.style.opacity = '1';
      heroPre.style.transform = 'none';
    }
    if (heroSub) heroSub.style.opacity = '1';
    if (heroBtns) heroBtns.style.opacity = '1';
    if (heroTicker) heroTicker.style.opacity = '1';
    if (heroRight) heroRight.style.opacity = '1';
    peHl.style.opacity = '1';
    peHl.style.transform = 'none';
    peHl.style.filter = 'none';
    if (peSecond) {
      peSecond.style.opacity = '1';
      peSecond.style.visibility = 'visible';
      peSecond.style.pointerEvents = 'auto';
    }
    if (orbTitle) {
      orbTitle.classList.add('pe-title-static');
      orbTitle.style.setProperty('--pe-title-alpha', '1');
      orbTitle.style.setProperty('--pe-title-visibility', 'visible');
      orbTitle.style.opacity = '1';
      orbTitle.style.visibility = 'visible';
    }
    spheres.forEach((s) => {
      s.classList.add('pe-sphere-locked');
      s.style.opacity = '1';
      s.style.transform = 'translate3d(0, 0, 0) scale(1)';
      s.style.filter = 'blur(0px) brightness(1)';
      s.style.visibility = 'visible';
    });
    return;
  }

  let targetP = 0;
  let smoothP = 0;
  let rafOn = false;

  let ghost = null;
  let ghostBase = null;
  let centerTarget = null;
  let titleLocked = false;

  let lastSunActive = false;
  let labelSplashTimer = null;

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const range = (p, a, b) => clamp((p - a) / (b - a), 0, 1);

  // The title must stop reacting to scroll once it reaches the next section center.
  // Keeping these values together prevents accidental long scrub movement later.
  const TITLE_MOVE_START = 0.06;
  const TITLE_MOVE_END = 0.38;
  // Movement stops at TITLE_MOVE_END; the handoff finishes later so there is
  // no one-frame gap between the ghost and the static section title.
  const TITLE_LOCK_PROGRESS = 0.46;
  const TITLE_STATIC_FADE_START = 0.31;
  const TITLE_GHOST_FADE_START = 0.37;

  function smootherstep(t) {
    t = clamp(t, 0, 1);
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  function ensureLabels() {
    spheres.forEach((s) => {
      let label = s.querySelector('.pe-sphere-label');

      if (!label) {
        const txt = Array.from(s.childNodes)
          .filter((n) => n.nodeType === 3)
          .map((n) => n.textContent.trim())
          .join(' ')
          .trim();

        Array.from(s.childNodes).forEach((n) => {
          if (n.nodeType === 3) n.textContent = '';
        });

        label = document.createElement('span');
        label.className = 'pe-sphere-label';
        label.textContent =
          txt || s.getAttribute('data-label') || s.getAttribute('aria-label') || '';
        s.appendChild(label);
      }

      let textNode = label.querySelector('.pe-label-text');
      if (!textNode) {
        const existingText = Array.from(label.childNodes)
          .filter((n) => n.nodeType === 3)
          .map((n) => n.textContent.trim())
          .join(' ')
          .trim();

        Array.from(label.childNodes).forEach((n) => {
          if (n.nodeType === 3) n.textContent = '';
        });

        textNode = document.createElement('span');
        textNode.className = 'pe-label-text';
        textNode.textContent =
          existingText || label.textContent.trim() || s.getAttribute('data-label') || '';
        label.prepend(textNode);
      }

      s.querySelectorAll('.pe-play-icon').forEach((icon, idx) => {
        if (idx > 0) icon.remove();
      });

      if (!label.querySelector('.pe-play-icon')) {
        const icon = document.createElement('span');
        icon.className = 'pe-play-icon';
        icon.setAttribute('aria-hidden', 'true');
        label.appendChild(icon);
      }
    });
  }

  function measureCenterTarget() {
    centerTarget = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
  }

  function createGhost() {
    if (ghost) return;

    const r = peHl.getBoundingClientRect();

    // peHighlight is display:block — its bounding rect spans the full container
    // width even though the text "perfect event" is narrower and left-aligned.
    // Using r.left + r.width/2 as the ghost's centre would place the ghost's
    // block-centre at the original block-centre, but with text-align:center on
    // the ghost the text itself shifts right of the original → instant X jerk.
    // Fix: measure the tight bounding rect of the actual rendered glyphs via
    // createRange(), then base the ghost on TEXT centre and TEXT width so the
    // ghost overlays exactly what the user sees before the first scroll tick.
    const textRange = document.createRange();
    textRange.selectNodeContents(peHl);
    const textRect = textRange.getBoundingClientRect();

    ghostBase = {
      x: textRect.left + textRect.width / 2, // centre of TEXT, not of block
      y: r.top + r.height / 2,
      w: textRect.width, // ghost sized to text, not to block
      h: r.height,
    };

    if (!centerTarget) measureCenterTarget();

    ghost = peHl.cloneNode(true);
    ghost.id = 'peGhostTitle';
    ghost.classList.remove('pe-ghost-hidden');
    ghost.style.position = 'fixed';
    ghost.style.left = ghostBase.x + 'px';
    ghost.style.top = ghostBase.y + 'px';
    ghost.style.width = ghostBase.w + 'px';
    ghost.style.height = ghostBase.h + 'px';
    ghost.style.zIndex = '9998';
    ghost.style.pointerEvents = 'none';
    ghost.style.margin = '0';
    ghost.style.whiteSpace = 'nowrap';
    ghost.style.textAlign = 'center';
    ghost.style.transformOrigin = 'center center';
    ghost.style.willChange = 'transform, opacity, filter';
    ghost.style.transform = 'translate3d(-50%, -50%, 0) scale(1)';
    ghost.style.opacity = '1';
    ghost.style.visibility = 'visible';
    ghost.style.filter = 'blur(0)';
    document.body.appendChild(ghost);

    peHl.classList.add('pe-ghost-hidden');
  }

  function destroyGhost() {
    if (ghost) {
      ghost.remove();
      ghost = null;
      ghostBase = null;
    }
    peHl.classList.remove('pe-ghost-hidden');
  }

  function setSphereHidden() {
    spheres.forEach((s, i) => {
      sphereLocked[i] = false;
      s.classList.remove('pe-sphere-locked');
      s.style.opacity = '0';
      s.style.transform = 'translate(-50%, calc(-50% + 26px)) scale(.72)';
      s.style.filter = 'blur(18px) brightness(.55)';
    });
  }

  // Track which spheres have finished their intro animation
  const sphereLocked = new Array(spheres.length).fill(false);

  function animateSpheres(p) {
    spheres.forEach((s, i) => {
      const start = 0.39 + i * 0.012;
      const t = smootherstep(range(p, start, start + 0.16));
      const scale = 0.72 + 0.28 * t;
      const y = (1 - t) * 26;

      s.style.opacity = '1';
      s.style.filter = 'none';

      if (t >= 0.999) {
        if (!sphereLocked[i]) {
          sphereLocked[i] = true;
          s.classList.add('pe-sphere-locked');
        }

        s.style.transform = 'translate(-50%, -50%) scale(1)';
      } else {
        if (sphereLocked[i]) {
          sphereLocked[i] = false;
          s.classList.remove('pe-sphere-locked');
        }

        s.style.transform = \`translate(-50%, calc(-50% + \${y}px)) scale(\${scale})\`;
      }
    });
  }

  function readProgress() {
    const rect = pinWrap.getBoundingClientRect();
    const total = Math.max(1, pinWrap.offsetHeight - window.innerHeight);
    targetP = clamp(-rect.top / total, 0, 1);
  }

  function draw(p) {
    ensureLabels();

    // The real title inside the orbit section is hidden only while the ghost is travelling.
    // After lock it becomes a normal static part of this page, so it will not move on scroll.
    // When scrolling back up, unlock it BEFORE the ghost branch so the reverse animation works.
    if (p < TITLE_LOCK_PROGRESS) {
      titleLocked = false;
    }

    let staticAlpha = smootherstep(range(p, TITLE_STATIC_FADE_START, TITLE_LOCK_PROGRESS));
    let ghostAlpha = 1 - smootherstep(range(p, TITLE_GHOST_FADE_START, TITLE_LOCK_PROGRESS));
    if (p >= TITLE_LOCK_PROGRESS) {
      staticAlpha = 1;
      ghostAlpha = 0;
    }

    if (orbTitle) {
      // Crossfade through CSS variables with !important priority. Older hotfix
      // rules used opacity:0/1 !important, which caused the visible blink.
      const titleIsStatic = staticAlpha > 0.001;
      orbTitle.classList.toggle('pe-title-static', titleIsStatic);
      orbTitle.style.setProperty('--pe-title-alpha', String(staticAlpha));
      orbTitle.style.setProperty('--pe-title-visibility', titleIsStatic ? 'visible' : 'hidden');
      orbTitle.style.pointerEvents = 'none';
      // Activate solar glow + deep-space background when title is locked at center.
      const sunActive = p >= TITLE_LOCK_PROGRESS;

      if (sunActive !== lastSunActive) {
        clearTimeout(labelSplashTimer);

        if (peSecond) {
          peSecond.classList.remove('planet-label-splash');
          void peSecond.offsetWidth;
          peSecond.classList.add('planet-label-splash');
        }

        labelSplashTimer = setTimeout(function () {
          if (peSecond) {
            peSecond.classList.remove('planet-label-splash');
          }
        }, 220);

        lastSunActive = sunActive;
      }

      orbTitle.classList.toggle('is-centered-sun', sunActive);

      if (peSecond) {
        peSecond.classList.toggle('is-centered-sun', sunActive);
        // --solar-alpha drives scroll-synced fade-in of the background corona layers
        peSecond.style.setProperty('--solar-alpha', String(staticAlpha));
      }
    }

    if (p < 0.008) {
      destroyGhost();
      titleLocked = false;
      if (orbTitle) {
        orbTitle.classList.remove('pe-title-static', 'is-centered-sun');
        orbTitle.style.setProperty('--pe-title-alpha', '0');
        orbTitle.style.setProperty('--pe-title-visibility', 'hidden');
      }
      if (peSecond) {
        peSecond.classList.remove('is-centered-sun', 'planet-label-splash');
        peSecond.style.setProperty('--solar-alpha', '0');
      }
      lastSunActive = false;
      clearTimeout(labelSplashTimer);
      // Reset sphere locks so intro animation plays again on next scroll
      sphereLocked.fill(false);

      if (bgDark) {
        bgDark.style.opacity = '1';
        bgDark.style.backgroundColor = 'rgba(2,13,26,0)';
      }
      if (heroPre) {
        heroPre.style.opacity = '1';
        heroPre.style.transform = 'translateY(0)';
      }
      if (heroSub) heroSub.style.opacity = '1';
      if (heroBtns) heroBtns.style.opacity = '1';
      if (heroTicker) heroTicker.style.opacity = '1';
      if (heroRight) heroRight.style.opacity = '1';

      peHl.style.transform = '';
      peHl.style.filter = '';
      peHl.style.opacity = '';

      if (peSecond) {
        peSecond.style.opacity = '1';
        peSecond.style.visibility = 'hidden';
        peSecond.style.pointerEvents = 'none';
      }

      if (heroLeft) heroLeft.classList.remove('pe-flat');
      if (heroRight) heroRight.classList.remove('pe-flat');
      if (heroSection) heroSection.classList.remove('pe-flat-hero');

      setSphereHidden();
      return;
    }

    const dark = smootherstep(range(p, 0.0, 0.4));
    if (bgDark) {
      bgDark.style.opacity = '1';
      bgDark.style.backgroundColor = \`rgba(2,13,26,\${dark * 0.97})\`;
    }

    if (heroPre) {
      heroPre.style.opacity = String(1 - dark);
      heroPre.style.transform = \`translateY(\${-dark * 18}px)\`;
    }
    if (heroSub) heroSub.style.opacity = String(1 - dark);
    if (heroBtns) heroBtns.style.opacity = String(1 - dark);
    if (heroTicker) heroTicker.style.opacity = String(1 - dark);
    if (heroRight) heroRight.style.opacity = String(1 - dark);

    if (dark > 0.03) {
      if (heroLeft) heroLeft.classList.add('pe-flat');
      if (heroRight) heroRight.classList.add('pe-flat');
      if (heroSection) heroSection.classList.add('pe-flat-hero');
    } else {
      if (heroLeft) heroLeft.classList.remove('pe-flat');
      if (heroRight) heroRight.classList.remove('pe-flat');
      if (heroSection) heroSection.classList.remove('pe-flat-hero');
    }

    if (p > 0.02) createGhost();

    if (ghost && ghostBase && centerTarget) {
      const move = smootherstep(range(p, TITLE_MOVE_START, TITLE_MOVE_END));

      if (p >= TITLE_LOCK_PROGRESS || titleLocked) {
        titleLocked = true;
        ghost.classList.add('pe-ghost-off');
        ghost.style.setProperty('--pe-ghost-alpha', '0');
        ghost.style.setProperty('--pe-ghost-visibility', 'hidden');
        ghost.style.opacity = '0';
        ghost.style.visibility = 'hidden';
        ghost.style.willChange = 'auto';
      } else {
        ghost.classList.remove('pe-ghost-off');
        ghost.style.setProperty('--pe-ghost-alpha', String(ghostAlpha));
        ghost.style.setProperty('--pe-ghost-visibility', ghostAlpha > 0.001 ? 'visible' : 'hidden');
        const dx = (centerTarget.x - ghostBase.x) * move;
        const dy = (centerTarget.y - ghostBase.y) * move;
        const scale = 1 - move * 0.025;
        ghost.style.position = 'fixed';
        ghost.style.left = ghostBase.x + 'px';
        ghost.style.top = ghostBase.y + 'px';
        ghost.style.width = ghostBase.w + 'px';
        ghost.style.height = ghostBase.h + 'px';
        ghost.style.transform = \`translate3d(calc(-50% + \${dx}px), calc(-50% + \${dy}px), 0) scale(\${scale})\`;
        ghost.style.opacity = String(ghostAlpha);
        ghost.style.visibility = 'visible';
        ghost.style.filter = 'blur(0px)';
        ghost.style.willChange = 'transform, opacity, filter';
      }
    }

    if (peSecond) {
      peSecond.style.opacity = '1';
      peSecond.style.visibility = p > 0.2 ? 'visible' : 'hidden';
      peSecond.style.pointerEvents = p > 0.56 ? 'all' : 'none';
    }

    // Cover full range > 0.2: animateSpheres handles t=0 (hidden) through t=1 (locked),
    // so backward scroll past 0.36 plays the reverse animation instead of snapping.
    if (p > 0.2) animateSpheres(p);
    else setSphereHidden();
  }

  // ── LERP / SNAP CONFIG ────────────────────────────────────────────────────
  // LERP     — per-frame smoothing factor for normal scroll (≈ GSAP scrub 0.025).
  // LERP_EPS — stop threshold: once diff < this the RAF is cancelled.
  // SNAP_DIST — if |targetP - smoothP| exceeds this the animation snaps
  //             instantly instead of lerping.  Covers:
  //               • hash-nav / window.scrollTo({ behavior:'auto' })
  //               • bfcache restore (browser back / forward)
  //               • momentum fling past the section
  //             Normal scroll diffs are < 0.01 per frame → always lerps.
  const LERP = 0.025;
  const LERP_EPS = 0.0002;
  const SNAP_DIST = 0.2;

  function loop() {
    const diff = targetP - smoothP;
    const abs = Math.abs(diff);

    if (abs > SNAP_DIST) {
      // Large jump → skip lerp, settle immediately
      smoothP = targetP;
      draw(smoothP);
      rafOn = false;
    } else if (abs > LERP_EPS) {
      smoothP += diff * LERP;
      draw(smoothP);
      requestAnimationFrame(loop);
    } else {
      smoothP = targetP;
      draw(smoothP);
      rafOn = false;
    }
  }

  function queue() {
    readProgress();
    if (!rafOn) {
      rafOn = true;
      requestAnimationFrame(loop);
    }
  }

  // Snap (no lerp) to the current scroll position — used for instant
  // state corrections where visual lag would be wrong.
  function snapNow() {
    readProgress();
    smoothP = targetP;
    draw(smoothP);
    rafOn = false;
  }

  ensureLabels();
  setSphereHidden();
  measureCenterTarget();

  // ── EVENT LISTENERS ────────────────────────────────────────────────────────
  window.addEventListener('scroll', queue, { passive: true });

  window.addEventListener('resize', () => {
    centerTarget = null;
    measureCenterTarget();
    // Ghost positions are pixel-measured at creation time — stale after resize.
    // Destroy so createGhost() re-measures on the next draw frame if still needed.
    if (ghost) destroyGhost();
    queue();
  });

  // Hash-based navigation (nav link clicks that call history.pushState,
  // or any direct URL change with a fragment).
  window.addEventListener('hashchange', queue);

  // Tab switch / OS focus: when the page becomes visible the scroll position
  // is already correct but RAF was paused — re-sync state immediately.
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') snapNow();
  });

  // bfcache: browser back/forward restores the page at the previous scrollY.
  // The scroll event does NOT fire for bfcache restores, so we must handle
  // pageshow explicitly.  persisted=true means it's a cache restore.
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) snapNow();
  });

  queue();
})();

// Flip-card video previews: video starts only while the card is hovered/focused.
(function () {
  document.querySelectorAll('.pe-flip-card').forEach((card) => {
    const video = card.querySelector('video');
    if (!video) return;

    video.addEventListener('loadeddata', () => card.classList.add('pe-video-ready'), {
      once: true,
    });

    const playVideo = () => {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(() => {});
    };
    const stopVideo = () => {
      video.pause();
      video.currentTime = 0;
    };

    card.addEventListener('mouseenter', playVideo);
    card.addEventListener('mouseleave', stopVideo);
    card.addEventListener('focusin', playVideo);
    card.addEventListener('focusout', stopVideo);
  });
})();

(function () {
  const canvas = document.getElementById('neon-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const CYAN = 'rgba(0,212,255,';
  const ORANGE = 'rgba(255,77,0,';

  // Lines flying from left/bottom
  const lines = Array.from({ length: 18 }, (_, i) => ({
    x: Math.random() * W,
    y: Math.random() * H,
    len: 80 + Math.random() * 220,
    speed: 0.3 + Math.random() * 0.7,
    angle: -0.35 + (Math.random() - 0.5) * 0.18,
    color: i % 5 === 0 ? ORANGE : CYAN,
    alpha: 0.12 + Math.random() * 0.22,
    width: 0.4 + Math.random() * 0.8,
  }));

  // Particles
  const dots = Array.from({ length: 14 }, (_, i) => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: 1 + Math.random() * 2,
    color: i % 4 === 0 ? ORANGE : CYAN,
    alpha: 0.4 + Math.random() * 0.5,
    speed: 0.15 + Math.random() * 0.4,
    angle: -0.35 + (Math.random() - 0.5) * 0.1,
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);

    lines.forEach((l) => {
      const dx = Math.cos(l.angle) * l.len;
      const dy = Math.sin(l.angle) * l.len;
      const grad = ctx.createLinearGradient(l.x, l.y, l.x + dx, l.y + dy);
      grad.addColorStop(0, l.color + '0)');
      grad.addColorStop(0.4, l.color + l.alpha + ')');
      grad.addColorStop(1, l.color + '0)');
      ctx.beginPath();
      ctx.moveTo(l.x, l.y);
      ctx.lineTo(l.x + dx, l.y + dy);
      ctx.strokeStyle = grad;
      ctx.lineWidth = l.width;
      ctx.stroke();

      // move
      l.x += Math.cos(l.angle) * l.speed;
      l.y += Math.sin(l.angle) * l.speed;
      if (l.x > W + 300 || l.y < -300) {
        l.x = Math.random() * W * 0.4;
        l.y = H * 0.5 + Math.random() * H * 0.5;
      }
    });

    dots.forEach((d) => {
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = d.color + d.alpha + ')';
      ctx.shadowBlur = 8;
      ctx.shadowColor = d.color + '0.8)';
      ctx.fill();
      ctx.shadowBlur = 0;

      d.x += Math.cos(d.angle) * d.speed;
      d.y += Math.sin(d.angle) * d.speed;
      if (d.x > W + 50 || d.y < -50) {
        d.x = Math.random() * W * 0.5;
        d.y = H * 0.6 + Math.random() * H * 0.4;
      }
    });

    requestAnimationFrame(draw);
  }
  draw();
})();
`,`// Reference script block 2
// ── Cases data ──
const cases = [
  { name: 'Parimatch', show: 'ICE London 2024', cat: 'ice', area: '240m²' },
  { name: 'Betsson', show: 'SiGMA Malta 2024', cat: 'sigma', area: '180m²' },
  { name: '1xBet', show: 'ICE London 2023', cat: 'ice', area: '320m²' },
  { name: 'Melbet', show: 'iGB Live 2024', cat: 'igb', area: '120m²' },
  { name: 'GGBet', show: 'SBC Summit 2024', cat: 'sbc', area: '96m²' },
  { name: 'Winline', show: 'GAT Expo 2024', cat: 'gat', area: '144m²' },
  { name: 'Mostbet', show: 'ICE London 2024', cat: 'ice', area: '200m²' },
  { name: 'Pin-Up', show: 'SiGMA Malta 2023', cat: 'sigma', area: '160m²' },
  { name: 'Betway', show: 'ICE London 2023', cat: 'ice', area: '280m²' },
  { name: 'Unibet', show: 'iGB Live 2023', cat: 'igb', area: '210m²' },
  { name: 'Bwin', show: 'SBC Madrid 2024', cat: 'sbc', area: '130m²' },
  { name: 'Sportingbet', show: 'GAT Expo 2023', cat: 'gat', area: '88m²' },
  { name: 'Fonbet', show: 'ICE London 2022', cat: 'ice', area: '190m²' },
  { name: 'Pinnacle', show: 'SiGMA Malta 2022', cat: 'sigma', area: '110m²' },
  { name: 'LeoVegas', show: 'iGB Affiliate 2024', cat: 'igb', area: '150m²' },
  { name: 'Casumo', show: 'SBC Summit 2023', cat: 'sbc', area: '76m²' },
  { name: 'BetVictor', show: 'GAT Expo 2024', cat: 'gat', area: '100m²' },
  { name: 'Coolbet', show: 'ICE London 2024', cat: 'ice', area: '72m²' },
  { name: 'Tipbet', show: 'SiGMA Malta 2024', cat: 'sigma', area: '64m²' },
  { name: 'Bodog', show: 'iGB Live 2023', cat: 'igb', area: '88m²' },
  { name: 'Dafabet', show: 'SBC Madrid 2023', cat: 'sbc', area: '120m²' },
  { name: 'MyBookie', show: 'GAT Expo 2023', cat: 'gat', area: '56m²' },
  { name: 'BetRebels', show: 'ICE London 2023', cat: 'ice', area: '96m²' },
  { name: 'Vbet', show: 'SiGMA Malta 2023', cat: 'sigma', area: '140m²' },
  { name: 'Betiton', show: 'iGB Live 2024', cat: 'igb', area: '68m²' },
  { name: 'SpinSamurai', show: 'SBC Summit 2024', cat: 'sbc', area: '80m²' },
  { name: 'Betmaster', show: 'GAT Expo 2024', cat: 'gat', area: '72m²' },
  { name: 'Lilibet', show: 'ICE London 2024', cat: 'ice', area: '60m²' },
  { name: 'Betandyou', show: 'SiGMA Malta 2024', cat: 'sigma', area: '92m²' },
  { name: 'Ivibet', show: 'iGB Live 2024', cat: 'igb', area: '56m²' },
];

const catColors = {
  ice: '#00C8FF',
  sigma: '#00C8FF',
  igb: '#00C8FF',
  sbc: '#00C8FF',
  gat: '#00C8FF',
};
const catLabel = {
  ice: 'ICE London',
  sigma: 'SiGMA Malta',
  igb: 'iGB Live',
  sbc: 'SBC Summit',
  gat: 'GAT Expo',
};

// ── Build grid ──
function buildGrid(filter) {
  const grid = document.getElementById('portGrid');
  grid.innerHTML = '';
  const filtered = filter === 'all' ? cases : cases.filter((c) => c.cat === filter);

  filtered.forEach((c, i) => {
    const card = document.createElement('div');
    card.className = 'port-card';
    card.addEventListener('click', () => openLightbox(c));
    card.innerHTML = \`
      <div class="card-img" style="--cat-color:\${catColors[c.cat]}">
        <div class="card-img-bg" style="position:absolute;inset:0;background:radial-gradient(ellipse at 35% 45%, \${catColors[c.cat]}12 0%, transparent 65%)"></div>
        <div class="card-num">\${String(i + 1).padStart(2, '0')}</div>
        <div class="card-stand-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="0.8">
            <rect x="2" y="8" width="20" height="14" rx="1"/>
            <path d="M6 8V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3"/>
            <line x1="12" y1="2" x2="12" y2="8"/>
          </svg>
        </div>
        <div class="card-overlay"></div>
        <div class="card-show-badge" style="color:\${catColors[c.cat]};border-color:\${catColors[c.cat]}44;background:\${catColors[c.cat]}10">\${c.show.split(' ').slice(0, 2).join(' ')}</div>
      </div>
      <div class="card-body">
        <div class="card-category" style="color:\${catColors[c.cat]}">\${catLabel[c.cat]}</div>
        <div class="card-name">\${c.name}</div>
        <div class="card-show">\${c.show} · \${c.area}</div>
      </div>
    \`;
    grid.appendChild(card);
  });

  // Staggered reveal on scroll
  observeCards();
}

// ── IntersectionObserver for stagger ──
function observeCards() {
  const cards = document.querySelectorAll('.port-card');
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = [...cards].indexOf(e.target);
          const col = idx % 3;
          setTimeout(() => e.target.classList.add('vis'), col * 80);
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
  );
  cards.forEach((c) => obs.observe(c));
}

// ── Filters ──
document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    buildGrid(btn.dataset.filter);
  });
});

// ── Page intro animations ──
window.addEventListener('load', () => {
  ['eyebrow', 'portTitle', 'portSub', 'portFilters'].forEach((id, i) => {
    setTimeout(() => document.getElementById(id)?.classList.add('vis'), i * 100);
  });
  buildGrid('all');
});

// Lightbox
function openLightbox(c) {
  document.getElementById('lbCat').textContent = catLabel[c.cat];
  document.getElementById('lbName').textContent = c.name;
  document.getElementById('lbMeta').textContent = c.show + ' · ' + c.area;
  const lb = document.getElementById('lightbox');
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.add('closing');
  setTimeout(() => {
    lb.classList.remove('open', 'closing');
    document.body.style.overflow = '';
  }, 300);
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// ── Background canvas ──
(function () {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  const CYAN = [0, 200, 255],
    ORANGE = [255, 85, 0];
  const lines = Array.from({ length: 16 }, (_, i) => ({
    x: Math.random() * W,
    y: Math.random() * H,
    len: 100 + Math.random() * 220,
    speed: 0.4 + Math.random() * 0.8,
    angle: -0.28 + (Math.random() - 0.5) * 0.14,
    c: i % 4 === 0 ? ORANGE : CYAN,
    alpha: 0.06 + Math.random() * 0.14,
    width: 0.3 + Math.random() * 0.6,
  }));
  function rgb(c, a) {
    return \`rgba(\${c[0]},\${c[1]},\${c[2]},\${a})\`;
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    lines.forEach((l) => {
      const dx = Math.cos(l.angle) * l.len,
        dy = Math.sin(l.angle) * l.len;
      const g = ctx.createLinearGradient(l.x, l.y, l.x + dx, l.y + dy);
      g.addColorStop(0, rgb(l.c, 0));
      g.addColorStop(0.4, rgb(l.c, l.alpha));
      g.addColorStop(1, rgb(l.c, 0));
      ctx.beginPath();
      ctx.moveTo(l.x, l.y);
      ctx.lineTo(l.x + dx, l.y + dy);
      ctx.strokeStyle = g;
      ctx.lineWidth = l.width;
      ctx.stroke();
      l.x += Math.cos(l.angle) * l.speed;
      l.y += Math.sin(l.angle) * l.speed;
      if (l.x > W + 300 || l.y < -300) {
        l.x = Math.random() * W * 0.3 - 100;
        l.y = H * 0.4 + Math.random() * H * 0.6;
      }
    });
    requestAnimationFrame(draw);
  }
  draw();
})();
`,`// Reference script block 3
// ══ PORTFOLIO OVERLAY ══

// Cases data
const portCases = [
  { name: 'Parimatch', show: 'ICE London 2024', cat: 'ice', area: '240m²' },
  { name: 'Betsson', show: 'SiGMA Malta 2024', cat: 'sigma', area: '180m²' },
  { name: '1xBet', show: 'ICE London 2023', cat: 'ice', area: '320m²' },
  { name: 'Melbet', show: 'iGB Live 2024', cat: 'igb', area: '120m²' },
  { name: 'GGBet', show: 'SBC Summit 2024', cat: 'sbc', area: '96m²' },
  { name: 'Winline', show: 'GAT Expo 2024', cat: 'gat', area: '144m²' },
  { name: 'Mostbet', show: 'ICE London 2024', cat: 'ice', area: '200m²' },
  { name: 'Pin-Up', show: 'SiGMA Malta 2023', cat: 'sigma', area: '160m²' },
  { name: 'Betway', show: 'ICE London 2023', cat: 'ice', area: '280m²' },
  { name: 'Unibet', show: 'iGB Live 2023', cat: 'igb', area: '210m²' },
  { name: 'Bwin', show: 'SBC Madrid 2024', cat: 'sbc', area: '130m²' },
  { name: 'Sportingbet', show: 'GAT Expo 2023', cat: 'gat', area: '88m²' },
  { name: 'Fonbet', show: 'ICE London 2022', cat: 'ice', area: '190m²' },
  { name: 'Pinnacle', show: 'SiGMA Malta 2022', cat: 'sigma', area: '110m²' },
  { name: 'LeoVegas', show: 'iGB Affiliate 2024', cat: 'igb', area: '150m²' },
  { name: 'Casumo', show: 'SBC Summit 2023', cat: 'sbc', area: '76m²' },
  { name: 'BetVictor', show: 'GAT Expo 2024', cat: 'gat', area: '100m²' },
  { name: 'Coolbet', show: 'ICE London 2024', cat: 'ice', area: '72m²' },
  { name: 'Tipbet', show: 'SiGMA Malta 2024', cat: 'sigma', area: '64m²' },
  { name: 'Bodog', show: 'iGB Live 2023', cat: 'igb', area: '88m²' },
  { name: 'Dafabet', show: 'SBC Madrid 2023', cat: 'sbc', area: '120m²' },
  { name: 'MyBookie', show: 'GAT Expo 2023', cat: 'gat', area: '56m²' },
  { name: 'BetRebels', show: 'ICE London 2023', cat: 'ice', area: '96m²' },
  { name: 'Vbet', show: 'SiGMA Malta 2023', cat: 'sigma', area: '140m²' },
  { name: 'Betiton', show: 'iGB Live 2024', cat: 'igb', area: '68m²' },
  { name: 'SpinSamurai', show: 'SBC Summit 2024', cat: 'sbc', area: '80m²' },
  { name: 'Betmaster', show: 'GAT Expo 2024', cat: 'gat', area: '72m²' },
  { name: 'Lilibet', show: 'ICE London 2024', cat: 'ice', area: '60m²' },
  { name: 'Betandyou', show: 'SiGMA Malta 2024', cat: 'sigma', area: '92m²' },
  { name: 'Ivibet', show: 'iGB Live 2024', cat: 'igb', area: '56m²' },
];

const portCatLabel = {
  ice: 'ICE London',
  sigma: 'SiGMA Malta',
  igb: 'iGB Live',
  sbc: 'SBC Summit',
  gat: 'GAT Expo',
};

let portBuilt = false;

function openPortfolio() {
  const overlay = document.getElementById('portOverlay');
  const closeBtn = document.getElementById('portOverlayClose');
  if (!overlay) return;
  overlay.classList.add('open');
  closeBtn.classList.add('show');
  document.body.style.overflow = 'hidden';
  overlay.scrollTop = 0;
  if (!portBuilt) {
    portBuilt = true;
    buildPortGrid('all');
    portCanvasInit();
  }
}

function closePortfolio() {
  document.getElementById('portOverlay').classList.remove('open');
  document.getElementById('portOverlayClose').classList.remove('show');
  document.body.style.overflow = '';
}

function buildPortGrid(filter) {
  const grid = document.getElementById('portGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const list = filter === 'all' ? portCases : portCases.filter((c) => c.cat === filter);
  list.forEach((c, i) => {
    const card = document.createElement('div');
    card.className = 'port-card';
    card.innerHTML = \`
      <div class="card-img">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 35% 45%,rgba(0,200,255,0.09) 0%,transparent 65%)"></div>
        <div class="card-num">\${String(i + 1).padStart(2, '0')}</div>
        <div class="card-stand-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="0.8">
            <rect x="2" y="8" width="20" height="14" rx="1"/>
            <path d="M6 8V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3"/>
            <line x1="12" y1="2" x2="12" y2="8"/>
          </svg>
        </div>
        <div class="card-overlay"></div>
        <div class="card-show-badge">\${c.show.split(' ').slice(0, 2).join(' ')}</div>
      </div>
      <div class="card-body">
        <div class="card-category">\${portCatLabel[c.cat]}</div>
        <div class="card-name">\${c.name}</div>
        <div class="card-show">\${c.show} · \${c.area}</div>
      </div>
    \`;
    card.addEventListener('click', () => openLightbox(c));
    grid.appendChild(card);
  });
  observePortCards();
}

function observePortCards() {
  const cards = document.querySelectorAll('.port-card');
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = [...cards].indexOf(e.target);
          setTimeout(() => e.target.classList.add('vis'), (idx % 3) * 80);
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
  );
  cards.forEach((c) => obs.observe(c));
}

// Filters
document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    buildPortGrid(btn.dataset.filter);
  });
});

// Lightbox
function openLightbox(c) {
  const labelMap = typeof portCatLabel !== 'undefined' ? portCatLabel : {};
  const accentMap = {
    ice: '#00C8FF',
    sigma: '#00C8FF',
    igb: '#00C8FF',
    sbc: '#00C8FF',
    gat: '#00C8FF',
    main: '#00C8FF',
  };
  const category = labelMap[c.cat] || c.category || c.client || 'Portfolio case';
  const name = c.name || c.title || 'Project';
  const meta = [c.show, c.area, c.meta].filter(Boolean).join(' · ');

  document.getElementById('lbCat').textContent = category;
  document.getElementById('lbName').textContent = name;
  document.getElementById('lbMeta').textContent = meta;

  const lb = document.getElementById('lightbox');
  const img = lb.querySelector('.lb-img');
  img.style.setProperty('--lb-accent', (accentMap[c.cat] || '#00C8FF') + '22');

  lb.classList.add('open');
}
function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.add('closing');
  setTimeout(() => {
    lb.classList.remove('open', 'closing');
  }, 300);
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
    closePortfolio();
  }
});

// Portfolio canvas
function portCanvasInit() {
  const canvas = document.getElementById('portBgCanvas');
  if (!canvas || canvas._init) return;
  canvas._init = true;
  const ctx = canvas.getContext('2d');
  let W, H;
  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  const CYAN = [0, 200, 255],
    ORANGE = [255, 85, 0];
  const lines = Array.from({ length: 16 }, (_, i) => ({
    x: Math.random() * W,
    y: Math.random() * H,
    len: 100 + Math.random() * 220,
    speed: 0.4 + Math.random() * 0.8,
    angle: -0.28 + (Math.random() - 0.5) * 0.14,
    c: i % 4 === 0 ? ORANGE : CYAN,
    alpha: 0.06 + Math.random() * 0.14,
    width: 0.3 + Math.random() * 0.6,
  }));
  function rgb(c, a) {
    return \`rgba(\${c[0]},\${c[1]},\${c[2]},\${a})\`;
  }
  (function draw() {
    ctx.clearRect(0, 0, W, H);
    lines.forEach((l) => {
      const dx = Math.cos(l.angle) * l.len,
        dy = Math.sin(l.angle) * l.len;
      const g = ctx.createLinearGradient(l.x, l.y, l.x + dx, l.y + dy);
      g.addColorStop(0, rgb(l.c, 0));
      g.addColorStop(0.4, rgb(l.c, l.alpha));
      g.addColorStop(1, rgb(l.c, 0));
      ctx.beginPath();
      ctx.moveTo(l.x, l.y);
      ctx.lineTo(l.x + dx, l.y + dy);
      ctx.strokeStyle = g;
      ctx.lineWidth = l.width;
      ctx.stroke();
      l.x += Math.cos(l.angle) * l.speed;
      l.y += Math.sin(l.angle) * l.speed;
      if (l.x > W + 300 || l.y < -300) {
        l.x = Math.random() * W * 0.3 - 100;
        l.y = H * 0.4 + Math.random() * H * 0.6;
      }
    });
    requestAnimationFrame(draw);
  })();
}
`,`// Reference script block 4
// PATCH: main-page portfolio images also open as a modal popup, not as rectangular inline blocks.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.portfolio .pc').forEach((card) => {
    if (card.dataset.popupBound === '1') return;
    card.dataset.popupBound = '1';
    card.addEventListener('click', (event) => {
      event.preventDefault();
      const title = card.querySelector('.pc-t')?.textContent?.trim() || 'Portfolio case';
      const client = card.querySelector('.pc-cl')?.textContent?.trim() || 'Portfolio';
      const meta = card.querySelector('.pc-m')?.textContent?.trim() || '';
      if (typeof openLightbox === 'function') {
        openLightbox({ cat: 'main', category: client, name: title, meta });
      }
    });
  });
});
`,`// Reference script block 5
// testimonial video — handled by Vimeo autoplay params
`,`// Reference script block 6
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.pe-orb-sphere').forEach(function (s) {
      if (!s.querySelector('.pe-sphere-label')) {
        var txt = Array.from(s.childNodes)
          .filter((n) => n.nodeType === 3)
          .map((n) => n.textContent.trim())
          .join(' ')
          .trim();
        if (txt) {
          Array.from(s.childNodes).forEach((n) => {
            if (n.nodeType === 3) n.textContent = '';
          });
          var span = document.createElement('span');
          span.className = 'pe-sphere-label';
          span.textContent = txt;
          s.appendChild(span);
        } else {
          var label = s.getAttribute('data-label') || s.getAttribute('aria-label');
          if (label) {
            var span = document.createElement('span');
            span.className = 'pe-sphere-label';
            span.textContent = label;
            s.appendChild(span);
          }
        }
      }
    });
  });
})();
`,`// Reference script block 7
(function () {
  function fixPlayIcons() {
    document.querySelectorAll('.pe-orb-sphere').forEach(function (s) {
      let label = s.querySelector('.pe-sphere-label');

      if (!label) {
        const txt = Array.from(s.childNodes)
          .filter((n) => n.nodeType === 3)
          .map((n) => n.textContent.trim())
          .join(' ')
          .trim();

        Array.from(s.childNodes).forEach((n) => {
          if (n.nodeType === 3) n.textContent = '';
        });

        label = document.createElement('span');
        label.className = 'pe-sphere-label';
        label.textContent = txt || s.getAttribute('data-label') || '';
        s.appendChild(label);
      }

      // remove any old duplicate icons inside sphere, then add one stable icon inside label
      s.querySelectorAll('.pe-play-icon').forEach((i) => i.remove());

      const icon = document.createElement('span');
      icon.className = 'pe-play-icon';
      icon.setAttribute('aria-hidden', 'true');
      label.appendChild(icon);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixPlayIcons);
  } else {
    fixPlayIcons();
  }
})();
`,`// Reference script block 8
// Superseded by 27-video-popup.js (Stage 2.4) when #pePopupBackdrop is present.
// Kept as a fallback for WP environments where the Stage 2.4 markup is not yet deployed.
(function () {
  if (document.getElementById('pePopupBackdrop')) return;
  const sphereVideoMap = {
    IDEAS: 'videos/pe-ideas.mp4',
    VR: 'videos/pe-vr.mp4',
    STAFF: 'videos/pe-staff.mp4',
    LED: 'videos/pe-led.mp4',
    BAR: 'videos/pe-bar.mp4',
    MATERIALS: 'videos/pe-materials.mp4',
    MOTION: 'videos/pe-motion.mp4',
    ACTIVATION: 'videos/pe-activation.mp4',
  };

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  ready(function () {
    const popup = document.getElementById('peVideoPopup');
    const video = document.getElementById('peVideoPopupVideo');
    const fallback = document.getElementById('peVideoPopupFallback');
    const title = document.getElementById('peVideoPopupTitle');
    const closeBtn = popup ? popup.querySelector('.pe-video-popup-close') : null;

    if (!popup || !video || !fallback || !title || !closeBtn) return;

    document.querySelectorAll('.pe-orb-sphere').forEach(function (sphere) {
      const label = (sphere.getAttribute('data-label') || sphere.textContent || '')
        .trim()
        .toUpperCase();

      if (label && !sphere.getAttribute('data-label')) {
        sphere.setAttribute('data-label', label);
      }

      if (label && !sphere.getAttribute('data-video') && sphereVideoMap[label]) {
        sphere.setAttribute('data-video', sphereVideoMap[label]);
      }

      sphere.setAttribute('role', 'button');
      sphere.setAttribute('tabindex', '0');
      sphere.setAttribute(
        'aria-label',
        'Watch ' + (sphere.getAttribute('data-label') || 'video') + ' video',
      );
    });

    function getSphereFromEventTarget(target) {
      if (!target || !target.closest) return null;
      return target.closest('.pe-orb-sphere');
    }

    function openSphereVideo(sphere) {
      if (!sphere) return;

      const label = sphere.getAttribute('data-label') || 'Video';
      const src =
        sphere.getAttribute('data-video') ||
        sphereVideoMap[String(label).trim().toUpperCase()] ||
        '';

      title.textContent = label;
      fallback.textContent = src ? 'Loading video…' : 'Video will appear here';

      video.pause();
      video.removeAttribute('src');
      video.style.display = 'none';
      fallback.style.display = 'grid';
      video.load();

      if (src) {
        video.src = src;
        video.style.display = 'block';
        fallback.style.display = 'none';
        video.load();

        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(function () {});
        }
      }

      popup.classList.add('open');
      popup.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      setTimeout(function () {
        try {
          closeBtn.focus({ preventScroll: true });
        } catch (e) {}
      }, 80);
    }

    function closePopup() {
      popup.classList.remove('open');
      popup.setAttribute('aria-hidden', 'true');
      video.pause();
      video.removeAttribute('src');
      video.style.display = 'none';
      video.load();
      fallback.style.display = 'grid';
      document.body.style.overflow = '';
    }

    // Capture phase: works even if another script stops bubbling later.
    document.addEventListener(
      'click',
      function (e) {
        const sphere = getSphereFromEventTarget(e.target);
        if (!sphere) return;

        e.preventDefault();
        e.stopPropagation();
        openSphereVideo(sphere);
      },
      true,
    );

    document.addEventListener(
      'keydown',
      function (e) {
        const sphere = getSphereFromEventTarget(e.target);

        if (sphere && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          e.stopPropagation();
          openSphereVideo(sphere);
          return;
        }

        if (e.key === 'Escape' && popup.classList.contains('open')) {
          closePopup();
        }
      },
      true,
    );

    closeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      closePopup();
    });

    popup.addEventListener('click', function (e) {
      if (e.target === popup) closePopup();
    });
  });
})();
`,`// Reference script block 9 — paginated project grid with smooth reveal
//
// WP / Toolset note: each chunk is a pre-rendered .pg[data-chunk="N"][hidden].
// To switch to AJAX, replace revealNextChunk() with a fetch() call that
// appends server HTML to #portfolio, then dispatch 'aeg:portfolio-chunk-revealed'.
// collapseAll() and button-state logic stay unchanged.
(function () {
  'use strict';

  var REVEAL_DELAY = 600; // ms — simulates network latency, makes the transition feel intentional

  var SPINNER_HTML =
    '<span class="btn-spinner" aria-hidden="true"></span>' + '<span>LOADING…</span>';

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function () {
    var portfolio = document.getElementById('portfolio');
    if (!portfolio) return;

    var btn = portfolio.querySelector('.view-more-cases');
    if (!btn) return;

    // Group [data-chunk] elements by their chunk key
    var allChunkEls = Array.from(portfolio.querySelectorAll('[data-chunk]'));
    var chunks = {};
    allChunkEls.forEach(function (el) {
      var key = el.dataset.chunk;
      if (!chunks[key]) chunks[key] = [];
      chunks[key].push(el);
    });
    var chunkKeys = Object.keys(chunks).sort();
    var totalChunks = chunkKeys.length;
    var shown = 0;
    var busy = false;

    if (totalChunks === 0) {
      if (btn.parentElement) btn.parentElement.style.display = 'none';
      return;
    }

    function setBusy(state) {
      busy = state;
      btn.disabled = state;
      btn.style.pointerEvents = state ? 'none' : '';
    }

    function revealNextChunk() {
      if (busy) return;
      var key = chunkKeys[shown];
      if (!key) return;

      // ── Loading state ──────────────────────────────────────────────────
      setBusy(true);
      btn.innerHTML = SPINNER_HTML;

      setTimeout(function () {
        // Reveal elements
        chunks[key].forEach(function (el) {
          el.hidden = false;
        });

        // Staggered fade-up on individual cards in this chunk
        var cards = Array.from(
          chunks[key]
            .filter(function (el) {
              return el.classList.contains('pg');
            })
            .reduce(function (acc, grid) {
              Array.prototype.push.apply(acc, grid.querySelectorAll('.pc'));
              return acc;
            }, []),
        );

        cards.forEach(function (card, i) {
          card.style.animationDelay = i * 75 + 'ms';
          card.classList.add('fade-up-enter');
          card.addEventListener('animationend', function handler() {
            card.classList.remove('fade-up-enter');
            card.style.animationDelay = '';
            card.removeEventListener('animationend', handler);
          });
        });

        shown++;
        document.dispatchEvent(new CustomEvent('aeg:portfolio-chunk-revealed'));

        // ── Restore button ──────────────────────────────────────────────
        setBusy(false);
        if (shown >= totalChunks) {
          btn.textContent = 'SHOW LESS';
          btn.setAttribute('aria-expanded', 'true');
        } else {
          btn.textContent = 'VIEW MORE CASES';
          btn.setAttribute('aria-expanded', 'false');
        }
      }, REVEAL_DELAY);
    }

    function collapseAll() {
      if (busy) return;
      setBusy(true);
      btn.textContent = 'VIEW MORE CASES';
      btn.setAttribute('aria-expanded', 'false');

      // Target scroll position: portfolio top minus nav scroll-margin (86px from CSS)
      var targetY = Math.max(0, portfolio.getBoundingClientRect().top + window.scrollY - 86);

      function hideChunksAndFinish() {
        chunkKeys.forEach(function (key) {
          chunks[key].forEach(function (el) {
            el.hidden = true;
          });
        });
        shown = 0;
        setBusy(false);
      }

      // Scroll first, hide chunks only after the scroll completes so the layout
      // never jumps while the user can see it moving.
      if (window.gsap) {
        // Proxy tween — works without ScrollToPlugin being registered
        var proxy = { y: window.scrollY };
        window.gsap.to(proxy, {
          y: targetY,
          duration: 0.8,
          ease: 'power2.inOut',
          onUpdate: function () {
            window.scrollTo(0, proxy.y);
          },
          onComplete: hideChunksAndFinish,
        });
      } else {
        // Fallback: native smooth scroll + 800ms delay to match GSAP duration
        window.scrollTo({ top: targetY, behavior: 'smooth' });
        setTimeout(hideChunksAndFinish, 800);
      }
    }

    btn.addEventListener('click', function () {
      if (busy) return;
      if (shown >= totalChunks) {
        collapseAll();
      } else {
        revealNextChunk();
      }
    });
  });
})();
`,`// Reference script block 10 data-fix="our-projects-popup-slider-v2"
(function () {
  'use strict';

  var lastStart = { x: 0, y: 0, scale: 0.34 };
  var _currentSlide = 0;
  var _totalSlides = 1;

  // ── DOM helpers ────────────────────────────────────────────────────────────
  function getPopup() {
    return document.getElementById('opPopup');
  }
  function getImgWrap() {
    return document.getElementById('opPopupImg');
  }
  function getSlidesEl() {
    var w = getImgWrap();
    return w ? w.querySelector('.op-popup-slides') : null;
  }
  function getFsBtn() {
    return document.getElementById('opPopupFs');
  }
  function getCounter() {
    return document.getElementById('opPopupCounter');
  }
  function getFill() {
    return document.getElementById('opPopupFill');
  }

  // ── YouTube audio leak fix ────────────────────────────────────────────────
  // Sets src="about:blank" on any iframe in the given slide index.
  // Called whenever the user leaves a slide or closes the popup.
  function stopSlideIframes(slidesEl, idx) {
    var slideEls = slidesEl.querySelectorAll('.op-popup-slide');
    var slide = slideEls[idx];
    if (!slide) return;
    slide.querySelectorAll('iframe').forEach(function (frame) {
      frame.setAttribute('src', 'about:blank');
    });
  }

  // ── Progress bar ───────────────────────────────────────────────────────────
  function updateProgress(idx, total) {
    var counter = getCounter();
    var fill = getFill();
    if (counter) counter.textContent = pad(idx + 1) + ' / ' + pad(total);
    if (fill) fill.style.width = ((idx + 1) / total) * 100 + '%';
  }

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  // ── Fullscreen ────────────────────────────────────────────────────────────
  function fsRequest(el) {
    return (
      el.requestFullscreen ||
      el.webkitRequestFullscreen ||
      el.mozRequestFullScreen ||
      el.msRequestFullscreen
    );
  }
  function fsExitFn() {
    return (
      document.exitFullscreen ||
      document.webkitExitFullscreen ||
      document.mozCancelFullScreen ||
      document.msExitFullscreen
    );
  }
  function fsElement() {
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );
  }

  function applyFsStyles(slidesEl, on) {
    if (!slidesEl) return;
    if (on) {
      slidesEl.style.setProperty('height', '100vh', 'important');
      slidesEl.style.setProperty('max-height', 'none', 'important');
    } else {
      slidesEl.style.removeProperty('height');
      slidesEl.style.removeProperty('max-height');
    }
    var slides = slidesEl.querySelectorAll('.op-popup-slide');
    for (var i = 0; i < slides.length; i++) {
      var slide = slides[i];
      if (on) {
        slide.style.setProperty('height', '100vh', 'important');
        slide.style.setProperty('max-height', 'none', 'important');
      } else {
        slide.style.removeProperty('height');
        slide.style.removeProperty('max-height');
      }
      var img = slide.querySelector('img');
      if (img) {
        if (on) {
          img.style.setProperty('width', '100%', 'important');
          img.style.setProperty('height', '100vh', 'important');
          img.style.setProperty('max-height', 'none', 'important');
          img.style.setProperty('object-fit', 'cover', 'important');
          img.style.setProperty('object-position', 'center center', 'important');
          img.style.setProperty('display', 'block', 'important');
        } else {
          img.style.removeProperty('width');
          img.style.removeProperty('height');
          img.style.removeProperty('max-height');
          img.style.removeProperty('object-fit');
          img.style.removeProperty('object-position');
          img.style.removeProperty('display');
        }
      }
    }
  }

  function syncFsIcon() {
    var btn = getFsBtn();
    if (!btn) return;
    var active = !!fsElement();
    btn.classList.toggle('is-fullscreen', active);
    btn.setAttribute('aria-label', active ? 'Exit fullscreen' : 'Fullscreen');
    btn.setAttribute('data-tooltip', active ? 'Exit fullscreen' : 'Fullscreen');

    var wrap = getImgWrap();
    if (!wrap) return;
    wrap.classList.toggle('op-popup-fs-active', active);

    var card = wrap.parentElement;

    if (active) {
      if (card) {
        card.style.setProperty('max-height', '100vh', 'important');
        card.style.setProperty('overflow', 'visible', 'important');
        card.style.setProperty('transform', 'none', 'important');
      }
      wrap.style.setProperty('height', '100vh', 'important');
      wrap.style.setProperty('max-height', 'none', 'important');
      wrap.style.setProperty('overflow', 'hidden', 'important');
      applyFsStyles(getSlidesEl(), true);
    } else {
      if (card) {
        card.style.removeProperty('max-height');
        card.style.removeProperty('overflow');
        card.style.removeProperty('transform');
      }
      wrap.style.removeProperty('height');
      wrap.style.removeProperty('max-height');
      wrap.style.removeProperty('overflow');
      applyFsStyles(getSlidesEl(), false);
    }
  }

  [
    'fullscreenchange',
    'webkitfullscreenchange',
    'mozfullscreenchange',
    'MSFullscreenChange',
  ].forEach(function (ev) {
    document.addEventListener(ev, function () {
      syncFsIcon();
      // Safari sometimes sets fullscreenElement async — re-check after paint
      setTimeout(syncFsIcon, 50);
    });
  });

  // ── Slide navigation ──────────────────────────────────────────────────────
  function goToModalSlide(idx) {
    var slides = getSlidesEl();
    if (!slides) return;
    var prev = _currentSlide;
    _currentSlide = Math.max(0, Math.min(idx, _totalSlides - 1));
    if (prev !== _currentSlide) stopSlideIframes(slides, prev);
    slides.scrollTo({ left: _currentSlide * slides.offsetWidth, behavior: 'smooth' });
    updateProgress(_currentSlide, _totalSlides);
  }

  // ── Close ─────────────────────────────────────────────────────────────────
  function closeOpPopup() {
    var popup = getPopup();
    if (!popup) return;

    // Exit fullscreen if active
    if (fsElement()) {
      var ex = fsExitFn();
      if (ex) ex.call(document);
    }

    // Stop any playing YouTube iframes — prevents audio leaking after close
    var slidesOnClose = getSlidesEl();
    if (slidesOnClose) {
      slidesOnClose.querySelectorAll('iframe').forEach(function (frame) {
        frame.setAttribute('src', 'about:blank');
      });
    }

    popup.classList.add('closing');
    popup.classList.remove('open');
    popup.setAttribute('aria-hidden', 'true');
    popup.querySelectorAll('.op-popup-nav').forEach(function (b) {
      b.hidden = true;
    });

    setTimeout(function () {
      popup.classList.remove('closing');
      document.body.style.overflow = '';
    }, 290);
  }

  // ── Expand animation origin ───────────────────────────────────────────────
  function setStartGeometry(card, popup) {
    var popupCard = popup.querySelector('.op-popup-card');
    if (!popupCard || !card) return;
    var r = card.getBoundingClientRect();
    var vw = window.innerWidth;
    var targetWidth = Math.min(980, vw * 0.94);
    var scale = Math.max(0.18, Math.min(0.82, r.width / targetWidth));
    lastStart = {
      x: r.left + r.width / 2 - vw / 2,
      y: r.top + r.height / 2 - window.innerHeight / 2,
      scale: scale,
    };
    popupCard.style.setProperty('--op-start-x', lastStart.x + 'px');
    popupCard.style.setProperty('--op-start-y', lastStart.y + 'px');
    popupCard.style.setProperty('--op-start-scale', lastStart.scale);
  }

  // ── Open ──────────────────────────────────────────────────────────────────
  function openOpPopup(card) {
    var popup = getPopup();
    if (!popup || !card) return;

    var slideEls = Array.from(card.querySelectorAll('.pc-slide'));
    _currentSlide = 0;
    _totalSlides = slideEls.length || 1;

    // Build slides HTML
    var slidesHtml =
      slideEls.length > 0
        ? slideEls
            .map(function (slide) {
              var vid = slide.querySelector('video');
              var ytFrame = slide.querySelector('iframe.pc-slide-yt');
              var img = slide.querySelector('img');
              var inner;
              if (vid) {
                inner =
                  '<video src="' +
                  vid.getAttribute('src') +
                  '" playsinline muted loop autoplay></video>';
              } else if (ytFrame) {
                var ytId = ytFrame.getAttribute('data-youtube-id');
                var ytSrc =
                  'https://www.youtube.com/embed/' +
                  ytId +
                  '?autoplay=0&controls=1&rel=0&modestbranding=1';
                inner =
                  '<iframe class="op-popup-slide-yt" src="' +
                  ytSrc +
                  '" title="YouTube video"' +
                  ' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"' +
                  ' allowfullscreen></iframe>';
              } else if (img) {
                inner =
                  '<img src="' +
                  img.getAttribute('src') +
                  '" alt="' +
                  (img.getAttribute('alt') || '') +
                  '">';
              } else {
                inner = '';
              }
              return '<div class="op-popup-slide">' + inner + '</div>';
            })
            .join('')
        : (function () {
            var fb = card.querySelector('.pc-bg img');
            return fb
              ? '<div class="op-popup-slide"><img src="' +
                  fb.getAttribute('src') +
                  '" alt="' +
                  (fb.getAttribute('alt') || '') +
                  '"></div>'
              : '<div class="op-popup-slide"></div>';
          })();

    // Inject or replace only .op-popup-slides — preserves .op-popup-fs button
    var imgWrap = getImgWrap();
    var oldSlides = imgWrap ? imgWrap.querySelector('.op-popup-slides') : null;
    var newSlides = document.createElement('div');
    newSlides.className = 'op-popup-slides';
    newSlides.innerHTML = slidesHtml;
    if (oldSlides) {
      imgWrap.replaceChild(newSlides, oldSlides);
    } else if (imgWrap) {
      imgWrap.insertBefore(newSlides, imgWrap.firstChild);
    }

    // Sync _currentSlide on native swipe
    if (_totalSlides > 1) {
      var scrollTimer;
      newSlides.addEventListener('scroll', function () {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function () {
          if (newSlides.offsetWidth > 0) {
            var next = Math.round(newSlides.scrollLeft / newSlides.offsetWidth);
            if (next !== _currentSlide) stopSlideIframes(newSlides, _currentSlide);
            _currentSlide = next;
            updateProgress(_currentSlide, _totalSlides);
          }
        }, 80);
      });
    }

    // Backdrop nav arrows
    var prevBtn = popup.querySelector('.op-popup-nav--prev');
    var nextBtn = popup.querySelector('.op-popup-nav--next');
    if (prevBtn) prevBtn.hidden = _totalSlides < 2;
    if (nextBtn) nextBtn.hidden = _totalSlides < 2;

    // Reset fullscreen icon
    syncFsIcon();

    // Text fields
    var title = card.querySelector('.pc-t');
    var client = card.querySelector('.pc-cl');
    var meta = card.querySelector('.pc-m');
    var titleEl = document.getElementById('opPopupTitle');
    var clientEl = document.getElementById('opPopupClient');
    var metaEl = document.getElementById('opPopupMeta');
    if (titleEl) titleEl.textContent = title ? title.textContent.trim() : '';
    if (clientEl) clientEl.textContent = client ? client.textContent.trim() : '';
    if (metaEl) metaEl.textContent = meta ? meta.textContent.trim() : '';

    // Mirror same text into the overlay inside #opPopupImg
    var imgTitle = document.getElementById('opPopupImgTitle');
    var imgClient = document.getElementById('opPopupImgClient');
    var imgMeta = document.getElementById('opPopupImgMeta');
    if (imgTitle) imgTitle.textContent = title ? title.textContent.trim() : '';
    if (imgClient) imgClient.textContent = client ? client.textContent.trim() : '';
    if (imgMeta) imgMeta.textContent = meta ? meta.textContent.trim() : '';

    // Progress bar (always shown)
    updateProgress(0, _totalSlides);

    setStartGeometry(card, popup);
    popup.classList.remove('closing');
    popup.classList.add('open');
    popup.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // ── Unified capture-phase click handler ───────────────────────────────────
  document.addEventListener(
    'click',
    function (e) {
      // Card click → open popup
      var card = e.target && e.target.closest ? e.target.closest('#portfolio .pc') : null;
      if (card) {
        if (e.target.closest && e.target.closest('.pc-dot')) return;
        e.preventDefault();
        e.stopPropagation();
        if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
        openOpPopup(card);
        return;
      }

      var popup = getPopup();
      if (!popup || (!popup.classList.contains('open') && !popup.classList.contains('closing')))
        return;

      // Backdrop or close button
      if (
        e.target === popup ||
        (e.target.classList && e.target.classList.contains('op-popup-close'))
      ) {
        e.preventDefault();
        e.stopPropagation();
        closeOpPopup();
        return;
      }

      // Fullscreen button
      if (e.target.closest && e.target.closest('#opPopupFs')) {
        var imgWrap = getImgWrap();
        if (!imgWrap) return;
        if (!fsElement()) {
          var req = fsRequest(imgWrap);
          if (req) req.call(imgWrap);
        } else {
          var exit = fsExitFn();
          if (exit) exit.call(document);
        }
        return;
      }

      // Modal prev/next arrows
      if (e.target.closest && e.target.closest('.op-popup-nav--prev')) {
        goToModalSlide(_currentSlide - 1);
        return;
      }
      if (e.target.closest && e.target.closest('.op-popup-nav--next')) {
        goToModalSlide(_currentSlide + 1);
        return;
      }
    },
    true,
  );

  // Keyboard: Escape / arrows
  document.addEventListener('keydown', function (e) {
    var popup = getPopup();
    if (!popup || !popup.classList.contains('open')) return;
    if (e.key === 'Escape') {
      closeOpPopup();
      return;
    }
    if (e.key === 'ArrowLeft') {
      goToModalSlide(_currentSlide - 1);
      return;
    }
    if (e.key === 'ArrowRight') {
      goToModalSlide(_currentSlide + 1);
    }
  });
})();
`,`// Reference script block 11
(function () {
  const floatingContact = document.getElementById('floatingContact');
  const mainButton = floatingContact ? floatingContact.querySelector('.fc-main') : null;
  const options = floatingContact ? floatingContact.querySelector('.fc-options') : null;

  function updateFloatingContactVisibility() {
    if (!floatingContact) return;
    const visible = document.body.classList.contains('splash-gone') && window.scrollY > 60;
    floatingContact.classList.toggle('visible', visible);
    if (!visible) {
      floatingContact.classList.remove('open');
      if (mainButton) mainButton.setAttribute('aria-expanded', 'false');
      if (options) options.setAttribute('aria-hidden', 'true');
    }
  }

  // Hover opens options, mouseleave closes
  if (mainButton && floatingContact) {
    floatingContact.addEventListener('mouseenter', function () {
      floatingContact.classList.add('open');
      if (mainButton) mainButton.setAttribute('aria-expanded', 'true');
      if (options) options.setAttribute('aria-hidden', 'false');
    });
    floatingContact.addEventListener('mouseleave', function () {
      setTimeout(function () {
        floatingContact.classList.remove('open');
        if (mainButton) mainButton.setAttribute('aria-expanded', 'false');
        if (options) options.setAttribute('aria-hidden', 'true');
      }, 220);
    });
    // Keep click as fallback on mobile
    mainButton.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = floatingContact.classList.toggle('open');
      mainButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (options) options.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });
  }

  window.addEventListener('scroll', updateFloatingContactVisibility, { passive: true });
  window.addEventListener('resize', updateFloatingContactVisibility);
  updateFloatingContactVisibility();

  // right offset = same as distance from nav-btn right edge to screen edge
  function positionByNav() {
    const navBtn = document.querySelector('.nav-btn');
    const fc = document.getElementById('floatingContact');
    if (!navBtn || !fc || window.innerWidth <= 768) return;
    const navBtnRect = navBtn.getBoundingClientRect();
    fc.style.right = window.innerWidth - navBtnRect.right + 'px';
  }
  window.addEventListener('resize', positionByNav);
  window.addEventListener('load', positionByNav);
  document.addEventListener('DOMContentLoaded', positionByNav);
  setTimeout(positionByNav, 100);
  setTimeout(positionByNav, 500);
})();
`,`// Reference script block 12
document.querySelectorAll('.wu-video-card').forEach((card) => {
  const btn = card.querySelector('.wu-custom-play');
  const iframe = card.querySelector('iframe.vimeo-cover');

  if (!btn || !iframe) return;

  btn.addEventListener('click', () => {
    document.querySelectorAll('.wu-video-card').forEach((otherCard) => {
      if (otherCard === card) return;
      const otherIframe = otherCard.querySelector('iframe.vimeo-cover');
      const otherBtn = otherCard.querySelector('.wu-custom-play');
      if (otherIframe) {
        otherIframe.src = otherIframe.src
          .replace('autoplay=1', 'autoplay=0')
          .replace('controls=1', 'controls=0');
        otherIframe.style.pointerEvents = 'none';
      }
      if (otherBtn) otherBtn.classList.remove('is-hidden');
    });

    iframe.src = iframe.src.replace('autoplay=0', 'autoplay=1').replace('controls=0', 'controls=1');

    iframe.style.pointerEvents = 'auto';
    btn.classList.add('is-hidden');
  });
});
`,`// Reference script block 13
(function () {
  // Timing Configuration
  var SPLASH_MIN_MS = 3200; // minimum text-read time
  var VIDEO_TIMEOUT_MS = 5000; // how long to wait for video before iframe fallback
  var FAILSAFE_MS = 6500; // absolute max — never block the page longer
  var SPLASH_FADE_MS = 50;
  // Synchronized Sequence Timings
  var SPLASH_CONTENT_OUT_MS = 150; // Sync text and line fade out
  var SPLASH_FLASH_DELAY_MS = 250; // Final global screen flash
  var SPLASH_HIDE_DELAY_MS = 350; // Hide splash background under the flash
  var SPLASH_FINALIZE_MS = 1000; // Cleanup DOM

  var splashState = {
    minElapsed: false,
    videoReady: false,
    closed: false,
    fadeTimer: null,
    flashNode: null,
  };

  function removeTransitionFlash() {
    if (!splashState.flashNode) return;
    splashState.flashNode.classList.remove('is-active');
    splashState.flashNode = null;
  }

  function finalizeSplash(splash) {
    if (splash && splash.parentNode) {
      splash.parentNode.removeChild(splash);
    }
    document.body.classList.add('splash-gone');
    window.dispatchEvent(new Event('scroll'));
    removeTransitionFlash();
  }

  function triggerTransitionFlash() {
    if (splashState.flashNode) return;
    var flash = document.querySelector('.sp-flash');
    if (!flash) return;

    splashState.flashNode = flash;
    flash.classList.add('is-active');

    flash.addEventListener('animationend', removeTransitionFlash, { once: true });
    setTimeout(removeTransitionFlash, 650);
  }

  function closeSplash() {
    if (splashState.closed) return;
    splashState.closed = true;
    var splash = document.getElementById('splash-screen');

    // 1. Trigger the neon line charge
    if (splash) {
      splash.classList.add('line-flash');
    }

    // 2. Fade out text and line simultaneously
    setTimeout(function () {
      if (splash) {
        splash.classList.add('content-out');
      }
    }, SPLASH_CONTENT_OUT_MS);

    // 3. Trigger global transition flash
    setTimeout(triggerTransitionFlash, SPLASH_FLASH_DELAY_MS);

    // 4. Hide splash screen background
    setTimeout(function () {
      if (splash) {
        splash.classList.add('hide');
      }
    }, SPLASH_HIDE_DELAY_MS);

    // 5. Finalize and clean up DOM
    setTimeout(function () {
      finalizeSplash(splash);
    }, SPLASH_FINALIZE_MS);
  }

  function maybeFinishSplash() {
    var splash = document.getElementById('splash-screen');
    if (!splash) return;

    if (!splashState.minElapsed || !splashState.videoReady || splashState.closed) return;
    if (splashState.fadeTimer) return;

    splashState.fadeTimer = setTimeout(closeSplash, SPLASH_FADE_MS);
  }

  function initHeroVideoFallback() {
    var hero = document.getElementById('heroRight');
    var video = document.getElementById('heroBgVideo');
    var fallback = hero ? hero.querySelector('.hero-vid-fallback') : null;
    var source = document.getElementById('heroBgVideoSource');
    var localSrc = source && source.getAttribute('src') ? source.getAttribute('src').trim() : '';

    if (!hero || !video || !fallback) return;

    function markVideoReady() {
      if (splashState.closed) return;
      splashState.videoReady = true;
      maybeFinishSplash();
    }

    function showFallback() {
      if (splashState.closed) return;
      video.hidden = true;
      fallback.hidden = false;
      markVideoReady();
    }

    function showLocalVideo() {
      if (splashState.closed) return;
      fallback.hidden = true;
      video.hidden = false;

      var playPromise = video.play ? video.play() : null;
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(showFallback);
      }

      markVideoReady();
    }

    if (!localSrc) {
      showFallback();
      return;
    }

    video.hidden = true;
    fallback.hidden = true;
    if (typeof video.load === 'function') video.load();

    if (video.readyState >= 2) {
      showLocalVideo();
      return;
    }

    video.addEventListener('loadeddata', showLocalVideo, { once: true });
    video.addEventListener('canplaythrough', showLocalVideo, { once: true });
    video.addEventListener('error', showFallback, { once: true });

    setTimeout(function () {
      if (splashState.closed || splashState.videoReady) return;
      showFallback();
    }, VIDEO_TIMEOUT_MS);
  }

  function startSplashSequence() {
    var splash = document.getElementById('splash-screen');
    if (!splash) return;

    setTimeout(function () {
      splashState.minElapsed = true;
      maybeFinishSplash();
    }, SPLASH_MIN_MS);

    setTimeout(function () {
      if (!splashState.closed) closeSplash();
    }, FAILSAFE_MS);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initHeroVideoFallback();
      startSplashSequence();
    });
  } else {
    initHeroVideoFallback();
    startSplashSequence();
  }

  window.addEventListener('load', function () {
    maybeFinishSplash();
  });
})();
`,`// Reference script block 14 id="pe-layer-isolation-final-fix-js"
(function () {
  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function getPeProgress() {
    const wrap = document.getElementById('pePinWrap');
    if (!wrap) return 0;
    const rect = wrap.getBoundingClientRect();
    const total = Math.max(1, rect.height - window.innerHeight);
    return clamp(-rect.top / total, 0, 1);
  }

  function setReveal(el, opacity, yOffset, withTransition) {
    if (!el) return;
    el.style.transition = withTransition ? 'opacity 0.5s, transform 0.5s' : 'none';
    el.style.opacity = String(opacity);
    el.style.transform = el._baseTransform
      ? el._baseTransform + \` translateY(\${yOffset}px)\`
      : \`translateY(\${yOffset}px)\`;
    el.style.pointerEvents = opacity > 0.5 ? '' : 'none';
  }

  function updatePeLayer() {
    const peSecond = document.getElementById('peSecond');
    const nav = document.getElementById('nav');
    const subtitle = document.getElementById('peOrbSubtitle');
    const fc = document.getElementById('floatingContact');
    if (!peSecond) return;

    const p = getPeProgress();

    // ── PLANETS PHASE (0.16 → 0.85): full focus, everything hidden ──
    if (p > 0.16 && p < 0.85) {
      peSecond.classList.add('pe-active');

      if (nav) {
        nav.style.transition = 'opacity 0.4s, transform 0.4s';
        nav.style.opacity = '0';
        nav.style.transform = 'translate(-50%, -18px)';
        nav.style.pointerEvents = 'none';
      }
      // FULL CYCLE. ZERO STRESS appears together with spheres
      if (subtitle) {
        subtitle.style.transition =
          'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
        subtitle.style.opacity = '1';
        subtitle.style.visibility = 'visible';
        subtitle.style.transform = 'translateX(-50%) translateY(0) scale(1)';
        subtitle.classList.add('underline-on');
      }
      peSecond.classList.remove('pe-focus-mode');
      // floating contact hidden during planets
      if (fc) {
        fc.style.transition = 'opacity 0.3s';
        fc.style.opacity = '0';
        fc.style.pointerEvents = 'none';
      }

      // ── HERO PHASE (p ≤ 0.16): normal nav, no subtitle yet ──
    } else if (p <= 0.16) {
      peSecond.classList.remove('pe-active');
      peSecond.style.opacity = '1';
      peSecond.style.visibility = 'visible';
      peSecond.style.pointerEvents = 'auto';

      if (nav) {
        nav.style.transition = 'opacity 0.5s, transform 0.5s';
        nav.style.opacity = '1';
        nav.style.transform = 'translate(-50%, 0)';
        nav.style.pointerEvents = '';
      }
      if (subtitle) {
        subtitle.classList.remove('underline-on');
        subtitle.style.opacity = '0';
        subtitle.style.transform = 'translateX(-50%) translateY(10px)';
      }
      peSecond.classList.remove('pe-focus-mode');
      if (fc) {
        fc.style.transition = '';
        fc.style.opacity = '';
        fc.style.pointerEvents = '';
      }

      // ── EXIT PHASE (p ≥ 0.85): nav + subtitle + btn fade in together ──
    } else {
      peSecond.classList.add('pe-active');

      const fadeIn = clamp((p - 0.85) / 0.15, 0, 1);
      const yOff = (1 - fadeIn) * 14;

      if (nav) {
        nav.style.transition = 'none';
        nav.style.opacity = String(fadeIn);
        nav.style.transform = \`translate(-50%, \${-yOff}px)\`;
        nav.style.pointerEvents = fadeIn > 0.5 ? '' : 'none';
      }
      // FULL CYCLE. ZERO STRESS — появляється разом з nav
      if (subtitle) {
        subtitle.style.transition = 'none';
        subtitle.style.opacity = String(fadeIn);
        // Scroll-driven scale: grows as FULL CYCLE. ZERO STRESS enters focus
        const fcScale = 1 + fadeIn * 0.34;
        const fcGlow = fadeIn * 0.42;
        subtitle.style.transform = \`translateX(-50%) translateY(\${yOff}px) scale(\${fcScale})\`;
        subtitle.style.textShadow = \`0 0 \${14 + fadeIn * 28}px rgba(0,212,255,\${fcGlow}), 0 0 \${6 + fadeIn * 12}px rgba(255,255,255,\${fadeIn * 0.16})\`;
        if (fadeIn > 0.45) {
          subtitle.classList.add('underline-on');
          peSecond.classList.remove('pe-focus-mode');
        } else {
          subtitle.classList.remove('underline-on');
          peSecond.classList.remove('pe-focus-mode');
        }
      }
      // floating contact — з'являється разом з nav
      if (fc) {
        fc.style.transition = 'none';
        fc.style.opacity = String(fadeIn);
        fc.style.pointerEvents = fadeIn > 0.5 ? '' : 'none';
      }
    }
  }

  window.addEventListener('scroll', updatePeLayer, { passive: true });
  window.addEventListener('resize', updatePeLayer);
  document.addEventListener('DOMContentLoaded', updatePeLayer);
  window.addEventListener('load', updatePeLayer);
  requestAnimationFrame(updatePeLayer);
})();
`,`// Reference script block 15 id="floating-contact-unified-logic"
(function () {
  const fc = document.getElementById('floatingContact');
  const nav = document.getElementById('nav');
  if (!fc) return;

  function syncFloatingContact() {
    // Перевіряємо чи ми в PE секції
    const wrap = document.getElementById('pePinWrap');
    let inPeSection = false;
    let peProgress = 0;

    if (wrap) {
      const rect = wrap.getBoundingClientRect();
      const total = Math.max(1, rect.height - window.innerHeight);
      peProgress = Math.max(0, Math.min(1, -rect.top / total));
      // Hide CTA for the full planet-section dwell, including the tail
      // (p 0.85–0.97) where the section is still pinned and visible.
      inPeSection = peProgress > 0.1 && peProgress < 0.97;
    }

    // Never set inline opacity/pointerEvents — CSS classes own all visual state.
    // Inline style + CSS !important conflict causes Safari GPU compositor to
    // bounce between two opacity values → visible "pulsation" + square tile border.

    if (peProgress > 0 && peProgress <= 0.1) {
      fc.classList.remove('visible');
      return;
    }

    if (inPeSection) {
      fc.classList.remove('visible');
      return;
    }

    if (peProgress >= 0.97 && peProgress < 1) {
      return;
    }

    // Standard logic — classList only
    const afterSplash = document.body.classList.contains('splash-gone');
    const menuVisible = window.scrollY > 60;
    const visible = afterSplash && menuVisible;

    if (nav) nav.classList.toggle('on', menuVisible);
    fc.classList.toggle('visible', visible);

    if (!visible) {
      fc.classList.remove('open');
      const mainButton = fc.querySelector('.fc-main');
      const options = fc.querySelector('.fc-options');
      if (mainButton) mainButton.setAttribute('aria-expanded', 'false');
      if (options) options.setAttribute('aria-hidden', 'true');
    }
  }

  window.addEventListener('scroll', syncFloatingContact, { passive: true });
  window.addEventListener('resize', syncFloatingContact);
  window.addEventListener('load', syncFloatingContact);
  document.addEventListener('DOMContentLoaded', syncFloatingContact);
  syncFloatingContact();
})();
`,`// Reference script block 16 id="final-contact-edge-align-script"
// Positions the floating CTA anchored to the section container (max-width 1120px):
//   ≤768px  → mobile CSS takes over (right: 24px from patch-15)
//   769–1439px → 40px from container right edge
//   ≥1440px    → 60px from container right edge
(function () {
  function alignFloatingContact() {
    var floating = document.getElementById('floatingContact');
    if (!floating) return;

    if (window.innerWidth <= 768) {
      floating.style.removeProperty('right');
      floating.style.removeProperty('left');
      return;
    }

    var CONTAINER = 1120;
    var gutter = window.innerWidth >= 1440 ? 60 : 40;
    var rightOffset = Math.max(32, Math.round((window.innerWidth - CONTAINER) / 2 - gutter));

    floating.style.setProperty('right', rightOffset + 'px', 'important');
    floating.style.setProperty('left', 'auto', 'important');
  }

  window.addEventListener('load', alignFloatingContact);
  window.addEventListener('resize', alignFloatingContact);
  document.addEventListener('DOMContentLoaded', alignFloatingContact);
  setTimeout(alignFloatingContact, 50);
  setTimeout(alignFloatingContact, 300);
})();
`,`// Reference script block 17 data-fix="reviews-pagination-v2"
//
// WP / Toolset note: each chunk is a pre-rendered .vr-chunk[data-chunk="N"][hidden].
// To switch to AJAX, replace revealNextChunk() with a fetch() call that appends
// server HTML to #reviews, then dispatch 'aeg:reviews-chunk-revealed'.
// collapseAll() and button-state logic stay unchanged.
(function () {
  'use strict';

  var REVEAL_DELAY = 600; // ms — matches projects loader, feels intentional

  var SPINNER_HTML =
    '<span class="btn-spinner" aria-hidden="true"></span>' + '<span>LOADING…</span>';

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function () {
    var section = document.getElementById('reviews');
    if (!section) return;

    var btn = document.getElementById('moreReviewsBtn');
    if (!btn) return;

    // Collect all [data-chunk] elements inside #reviews
    var allChunkEls = Array.from(section.querySelectorAll('[data-chunk]'));
    var chunks = {};
    allChunkEls.forEach(function (el) {
      var key = el.dataset.chunk;
      if (!chunks[key]) chunks[key] = [];
      chunks[key].push(el);
    });
    var chunkKeys = Object.keys(chunks).sort();
    var totalChunks = chunkKeys.length;
    var shown = 0;
    var busy = false;

    // No extra chunks → hide the button entirely
    if (totalChunks === 0) {
      if (btn.parentElement) btn.parentElement.style.display = 'none';
      return;
    }

    function setBusy(state) {
      busy = state;
      btn.disabled = state;
      btn.style.pointerEvents = state ? 'none' : '';
    }

    function revealNextChunk() {
      if (busy) return;
      var key = chunkKeys[shown];
      if (!key) return;

      // ── Loading state ──────────────────────────────────────────────────
      setBusy(true);
      btn.innerHTML = SPINNER_HTML;

      setTimeout(function () {
        // Reveal chunk elements
        chunks[key].forEach(function (el) {
          el.hidden = false;
        });

        // Staggered reveal via vt-in + transition-delay.
        // 31-clients-reveal.css keeps all .vt-cell at opacity:0 !important until
        // .vt-in is added. fade-up-enter cannot win against that !important, so
        // we trigger the built-in Apple-style reveal transition instead.
        // Select video cell first, then review cards — video reveals at 0ms,
        // cards stagger after. Both need vt-in because 31-clients-reveal.css
        // keeps all .vt-cell and .vt-cell-video at opacity:0 !important.
        var cards = Array.from(
          chunks[key]
            .filter(function (el) {
              return el.classList.contains('vr-chunk');
            })
            .reduce(function (acc, chunk) {
              Array.prototype.push.apply(acc, chunk.querySelectorAll('.vt-cell-video, .vt-cell'));
              return acc;
            }, []),
        );

        cards.forEach(function (card, i) {
          card.style.transitionDelay = i * 100 + 'ms';
          card.classList.add('vt-in');
          card.addEventListener('transitionend', function handler(e) {
            if (e.propertyName === 'opacity') {
              card.style.transitionDelay = '';
              card.removeEventListener('transitionend', handler);
            }
          });
        });

        shown++;
        document.dispatchEvent(new CustomEvent('aeg:reviews-chunk-revealed'));

        // ── Restore button ──────────────────────────────────────────────
        setBusy(false);
        if (shown >= totalChunks) {
          btn.textContent = 'SHOW LESS';
          btn.setAttribute('aria-expanded', 'true');
        } else {
          btn.textContent = 'VIEW MORE REVIEWS';
          btn.setAttribute('aria-expanded', 'false');
        }
      }, REVEAL_DELAY);
    }

    function collapseAll() {
      if (busy) return;
      setBusy(true);
      btn.textContent = 'VIEW MORE REVIEWS';
      btn.setAttribute('aria-expanded', 'false');

      // Scroll to section top minus nav scroll-margin (86px from CSS)
      var targetY = Math.max(0, section.getBoundingClientRect().top + window.scrollY - 86);

      function hideChunksAndFinish() {
        chunkKeys.forEach(function (key) {
          chunks[key].forEach(function (el) {
            el.hidden = true;
          });
        });
        shown = 0;
        setBusy(false);
      }

      // Scroll first, hide chunks only after scroll completes so layout never jumps
      if (window.gsap) {
        var proxy = { y: window.scrollY };
        window.gsap.to(proxy, {
          y: targetY,
          duration: 0.8,
          ease: 'power2.inOut',
          onUpdate: function () {
            window.scrollTo(0, proxy.y);
          },
          onComplete: hideChunksAndFinish,
        });
      } else {
        window.scrollTo({ top: targetY, behavior: 'smooth' });
        setTimeout(hideChunksAndFinish, 800);
      }
    }

    btn.addEventListener('click', function () {
      if (busy) return;
      if (shown >= totalChunks) {
        collapseAll();
      } else {
        revealNextChunk();
      }
    });
  });
})();
`,`// Reference script block 18
(function () {
  var wrap = document.getElementById('navContactWrap');
  var btn = document.getElementById('navContactBtn');
  var burger = document.getElementById('burger');
  var mobileMenu = document.getElementById('mobileMenu');
  if (!wrap || !btn) return;

  var closeTimer = null;
  var CLOSE_DELAY = 350; // ms after mouseleave before closing

  // pointer:coarse = touch device (phone/tablet), pointer:fine = mouse
  var mqlCoarse = window.matchMedia('(pointer: coarse)');
  function isTouchPrimary() {
    return mqlCoarse.matches;
  }

  // ── DROPDOWN STATE ──────────────────────────────────────────────

  function openDropdown() {
    clearTimeout(closeTimer);
    wrap.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
  }

  function closeDropdown() {
    clearTimeout(closeTimer);
    wrap.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
  }

  function scheduleClose() {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(closeDropdown, CLOSE_DELAY);
  }

  // ── MOUSE (desktop) ─────────────────────────────────────────────
  // hover in → open immediately
  // hover out → 350ms grace before close (mouse can move diagonally to icons)
  wrap.addEventListener('mouseenter', function () {
    if (isTouchPrimary()) return;
    openDropdown();
  });

  wrap.addEventListener('mouseleave', function () {
    if (isTouchPrimary()) return;
    scheduleClose();
  });

  // ── TAP / CLICK (touch + keyboard click) ────────────────────────
  // Tap the CONTACT NOW button: toggle open/close.
  // On desktop this fires after mouseenter already opened it, so it toggles closed
  // only if the user explicitly clicks the trigger — that's intentional.
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (wrap.classList.contains('is-open')) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  // Close when tapping/clicking anywhere outside the wrap
  document.addEventListener('click', function (event) {
    if (!wrap.contains(event.target)) {
      closeDropdown();
    }
  });

  // ── KEYBOARD ────────────────────────────────────────────────────
  wrap.addEventListener('focusin', function () {
    if (isTouchPrimary()) return;
    openDropdown();
  });

  wrap.addEventListener('focusout', function (event) {
    if (!wrap.contains(event.relatedTarget)) {
      scheduleClose();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    if (wrap.classList.contains('is-open')) {
      closeDropdown();
      btn.focus();
      return;
    }
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
      if (burger) burger.focus();
    }
  });

  // ── MOBILE BURGER MENU ──────────────────────────────────────────

  function closeMobileMenu() {
    if (mobileMenu) mobileMenu.classList.remove('open');
    var nav = document.getElementById('nav');
    if (nav) nav.classList.remove('menu-open');
    document.body.style.overflow = '';
    if (burger) burger.setAttribute('aria-expanded', 'false');
    closeDropdown();
  }

  function toggleMobileMenu() {
    if (!burger || !mobileMenu) return;
    var isOpen = mobileMenu.classList.toggle('open');
    var nav = document.getElementById('nav');
    if (nav) nav.classList.toggle('menu-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (burger) burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (!isOpen) closeDropdown();
  }

  if (burger && mobileMenu) {
    burger.addEventListener('click', toggleMobileMenu);
    burger.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleMobileMenu();
      }
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // API used by other scripts
  window.toggleMenu = toggleMobileMenu;
  window.closeMenu = closeMobileMenu;
})();
`,`// Reference script block 19
(function () {
  function openRequestPopup(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    var popup = document.getElementById('requestPopup');
    if (!popup) return;
    popup.removeAttribute('inert');
    popup.classList.add('is-open');
    popup.setAttribute('aria-hidden', 'false');
    document.body.classList.add('request-popup-open');
    setTimeout(function () {
      var first = popup.querySelector('input, textarea, button');
      if (first) first.focus();
    }, 80);
  }

  function closeRequestPopup() {
    var popup = document.getElementById('requestPopup');
    if (!popup) return;
    popup.classList.remove('is-open');
    popup.setAttribute('aria-hidden', 'true');
    popup.setAttribute('inert', '');
    document.body.classList.remove('request-popup-open');
  }

  window.openRequestPopup = openRequestPopup;
  window.closeRequestPopup = closeRequestPopup;

  document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('requestPopup');

    document.querySelectorAll('a, button').forEach(function (el) {
      var text = (el.textContent || '').trim().toLowerCase();
      if (text === 'request concept' || text === 'request a concept') {
        el.addEventListener('click', openRequestPopup);
        if (el.tagName.toLowerCase() === 'a') {
          el.setAttribute('href', '#request-concept');
        }
      }
    });

    if (popup) {
      popup.querySelectorAll('[data-request-close]').forEach(function (el) {
        el.addEventListener('click', closeRequestPopup);
      });
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeRequestPopup();
    });
  });
})();
`,`// Reference script block 20 id="reviews-anchor-fix-final"
(function () {
  function scrollToReviews(event) {
    var target = document.getElementById('reviews');
    if (!target) return;
    if (event) event.preventDefault();

    if (typeof window.closeMenu === 'function') window.closeMenu();

    var nav = document.getElementById('nav');
    var navHeight = nav ? nav.getBoundingClientRect().height : 0;
    var extraGap = window.matchMedia('(max-width: 768px)').matches ? 28 : 34;
    var y = target.getBoundingClientRect().top + window.pageYOffset - navHeight - extraGap;

    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });

    if (history.pushState) history.pushState(null, '', '#reviews');
  }

  function init() {
    document.querySelectorAll('a[href="#reviews"]').forEach(function (link) {
      link.addEventListener('click', scrollToReviews);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
`,`// Reference script block 21 id="fullcycle-final-single-logic-js"
document.addEventListener('DOMContentLoaded', function () {
  const selectors = [
    '.hero-tagline',
    '.full-cycle-tagline',
    '.pe-tagline',
    '#full-cycle-tagline',
    '.full-cycle-text',
    '.fullcycle-tagline',
    '.full-cycle-fix',
  ];

  const nodes = Array.from(document.querySelectorAll(selectors.join(','))).filter(
    (el) =>
      (el.textContent || '').toUpperCase().includes('FULL CYCLE') ||
      (el.textContent || '').toUpperCase().includes('ZERO STRESS'),
  );

  if (!nodes.length) return;

  // Keep the first visible/real tagline only. Hide duplicates to stop double blink.
  const main = nodes[0];
  nodes.forEach((el, index) => {
    el.style.animation = 'none';
    el.style.transition = 'opacity .35s ease';
    el.style.transform = 'none';
    el.style.filter = 'none';
    el.style.textShadow = 'none';
    el.classList.remove('animate-in', 'active', 'pulse', 'blink', 'is-active', 'show');
    if (index > 0) {
      el.classList.add('fullcycle-hidden-final');
      el.style.display = 'none';
    }
  });

  main.classList.add('fullcycle-hidden-final');

  const contact = document.querySelector(
    '.bottom-contact, .floating-contact, .contact-float, .contact-button-red, .contact-trigger, .bottom-contact-btn',
  );

  function isContactVisible() {
    if (!contact) return window.scrollY > window.innerHeight * 0.45;
    // Use class state only — getComputedStyle + getBoundingClientRect every 250ms
    // forces Safari to re-evaluate compositor layers on the element, causing the
    // "pulsation" artifact. classList.contains has zero layout/compositing cost.
    return contact.classList.contains('visible');
  }

  function updateFullCycle() {
    if (isContactVisible()) {
      main.classList.remove('fullcycle-hidden-final');
      main.classList.add('fullcycle-visible-final');
    } else {
      main.classList.remove('fullcycle-visible-final');
      main.classList.add('fullcycle-hidden-final');
    }
  }

  // No setInterval — DOM classList mutations every 250ms cause Safari to
  // re-evaluate compositor layers for nearby elements → visual pulsation.
  // scroll + resize events are sufficient; track last state to avoid
  // unnecessary DOM mutations when state hasn't changed.
  var lastFullCycleVisible = null;
  function updateFullCycleIfChanged() {
    var nowVisible = isContactVisible();
    if (nowVisible === lastFullCycleVisible) return;
    lastFullCycleVisible = nowVisible;
    updateFullCycle();
  }
  window.addEventListener('scroll', updateFullCycleIfChanged, { passive: true });
  window.addEventListener('resize', updateFullCycleIfChanged);
  updateFullCycleIfChanged();
});
`,`// Reference script block 22 id="spheres-no-abrupt-off-final-js"
document.addEventListener('DOMContentLoaded', function () {
  const sphereSelectors = [
    '.pe-orb',
    '.pe-planet',
    '.pe-sphere',
    '.pe-orb-wrap',
    '#peOrbitStage',
    '#peOrbStage',
    '#peOrbs',
    '#peSpheres',
  ];

  function keepSpheresAlive() {
    const nodes = document.querySelectorAll(sphereSelectors.join(','));
    nodes.forEach(function (el) {
      const text = (el.textContent || '').toUpperCase();
      if (text.includes('FULL CYCLE') || text.includes('ZERO STRESS')) return;

      el.classList.remove('hidden', 'is-hidden', 'hide', 'is-off', 'fade-out', 'dimmed');
      el.style.visibility = 'visible';
      if (el.style.display === 'none') el.style.display = '';
      if (parseFloat(el.style.opacity || '1') < 0.08) el.style.opacity = '1';
      el.style.filter = 'none';
    });
  }

  window.addEventListener('scroll', keepSpheresAlive, { passive: true });
  window.addEventListener('resize', keepSpheresAlive);
  setInterval(keepSpheresAlive, 200);
  keepSpheresAlive();
});
`,`// Reference script block 23 id="hero-and-spheres-safe-final-js"
document.addEventListener('DOMContentLoaded', function () {
  const wrap = document.getElementById('peWrap') || document.querySelector('.pe-pin-wrap');
  const hero = document.getElementById('heroSection');
  const peSecond = document.getElementById('peSecond');
  const heroLeft = document.getElementById('heroLeft');
  const heroRight = document.getElementById('heroRight');

  function progressInWrap() {
    if (!wrap) return 0;
    const rect = wrap.getBoundingClientRect();
    const total = Math.max(1, rect.height - window.innerHeight);
    return Math.min(1, Math.max(0, -rect.top / total));
  }

  function stabilizeHeroAndSpheres() {
    const p = progressInWrap();

    // First hero area: keep normal hero visible and keep planet layer hidden.
    if (p < 0.2) {
      if (peSecond) {
        peSecond.classList.remove('pe-active', 'pe-focus-mode');
        peSecond.style.opacity = '0';
        peSecond.style.visibility = 'hidden';
        peSecond.style.pointerEvents = 'none';
      }
      if (heroLeft) {
        heroLeft.style.visibility = 'visible';
      }
      if (heroRight) {
        heroRight.style.visibility = 'visible';
        heroRight.style.opacity = '1';
      }
      return;
    }

    // Planet scene: allow original scroll animation, but stop sphere dimming.
    if (peSecond && p >= 0.2 && p <= 0.92) {
      peSecond.classList.add('pe-active');
      peSecond.classList.remove('pe-focus-mode');
      peSecond.style.visibility = 'visible';
      peSecond.style.opacity = '1';
      document.querySelectorAll('.pe-orb-sphere').forEach(function (s) {
        s.style.visibility = 'visible';
        s.style.filter = 'none';
        if (parseFloat(s.style.opacity || '1') < 0.35) {
          s.style.opacity = '1';
        }
      });
    }
  }

  window.addEventListener('scroll', stabilizeHeroAndSpheres, { passive: true });
  window.addEventListener('resize', stabilizeHeroAndSpheres);
  requestAnimationFrame(stabilizeHeroAndSpheres);
  setInterval(stabilizeHeroAndSpheres, 160);
});
`,`// Nav → planet orbit section scroll handler.
//
// Target progress p = 0.65:
//   p ≥ 0.46 → title locked, solar glow active
//   p ≥ 0.55 → all 8 spheres locked
//   p = 0.65 → fully settled, well before exit phase (≈ p 0.92)
//
// The main animation loop in 01-core-interactions.js snaps instantly when
// |targetP − smoothP| > 0.20 (SNAP_DIST), so jumping here via scrollTo
// ({behavior:'auto'}) always lands in the correct rendered state within
// one animation frame — no lerp lag, no partial-state flash.
//
// Handles:
//   • nav link click          → smooth scroll (good UX for intentional nav)
//   • initial page-load hash  → instant scroll after layout settles
//   • popstate (back/forward) → re-evaluate hash and scroll if needed
(function () {
  'use strict';

  var DESKTOP_PROGRESS = 0.65;
  var MOBILE_PROGRESS = 0.38;
  var HASH = '#pe-planets';

  function isMobile() {
    return window.matchMedia('(max-width: 768px)').matches;
  }

  function getPlanetsScrollY() {
    var wrap = document.getElementById('pePinWrap');
    if (!wrap) return 0;
    var wrapTop = wrap.getBoundingClientRect().top + window.pageYOffset;
    var scrollable = Math.max(1, wrap.offsetHeight - window.innerHeight);
    var progress = isMobile() ? MOBILE_PROGRESS : DESKTOP_PROGRESS;
    return Math.max(0, wrapTop + scrollable * progress);
  }

  function closeMobileMenu() {
    if (typeof window.closeMenu === 'function') window.closeMenu();
  }

  // Called on explicit nav click — use smooth scroll for intentional navigation.
  function handleNavClick(e) {
    e.preventDefault();
    closeMobileMenu();
    var y = getPlanetsScrollY();
    window.scrollTo({ top: y, behavior: 'smooth' });
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', HASH);
    }
  }

  // Called on page load / popstate when hash is already in the URL —
  // use instant scroll so the animation loop can snap to the correct state.
  function jumpToPlanets() {
    var y = getPlanetsScrollY();
    // rAF ensures layout is complete (pinWrap dimensions are final)
    requestAnimationFrame(function () {
      window.scrollTo({ top: y, behavior: 'auto' });
    });
  }

  function bindLinks() {
    document
      .querySelectorAll('a[href="' + HASH + '"], a[data-scroll-target="pe-planets"]')
      .forEach(function (link) {
        link.addEventListener('click', handleNavClick);
      });
  }

  // popstate fires when the user hits browser back/forward.
  // If the restored URL contains our hash, jump to the section.
  window.addEventListener('popstate', function () {
    if (window.location.hash === HASH) jumpToPlanets();
  });

  function init() {
    bindLinks();

    // Page loaded with the hash already in the URL (direct link / bookmark).
    if (window.location.hash === HASH) {
      // Small delay: let the browser's own fragment scroll settle first,
      // then override to the exact progress-based position.
      setTimeout(jumpToPlanets, 150);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
`,`// Reference script block 25
(function () {
  var blocks = document.querySelectorAll('.reveal-block');
  if (!blocks.length) return;
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  blocks.forEach(function (b) {
    io.observe(b);
  });
})();
`,`// Planet Orbit Entrance Choreography — GSAP cinematic timeline.
// Fires once when the LERP scroll (01-core-interactions.js) adds
// .is-centered-sun to #peOrbTitle (at scroll progress >= 0.46).
// Requires window.gsap exposed by mount.js before classic scripts run.
//
// SEQUENCE (total ~1.9s from trigger, after 0.5s delay):
//   0.5s  delay — planets finish their scroll-driven entrance
//   0→0.6s       — bloom explodes to peak (power3.out — punchy climax)
//   0.3s          — labels shoot out mid-bloom, 60ms stagger (rapid succession)
//   0.6→1.4s      — bloom recedes and dissipates (power2.in)
(function () {
  var gsap = window.gsap;
  if (!gsap) return;

  // Mobile: 01-core-interactions.js handles static state — skip entrance.
  if (window.matchMedia('(max-width: 768px)').matches) {
    document.querySelectorAll('.pe-orb-sphere').forEach(function (s) {
      s.classList.add('label-revealed');
    });
    return;
  }

  var orbTitle = document.getElementById('peOrbTitle');
  var secondRight = document.getElementById('peSecondRight');
  if (!orbTitle || !secondRight) return;

  // Solar bloom overlay — soft corona gradient, GSAP owns all transforms.
  var bloomEl = document.createElement('div');
  bloomEl.className = 'pe-flash-overlay';
  bloomEl.setAttribute('aria-hidden', 'true');
  secondRight.appendChild(bloomEl);
  gsap.set(bloomEl, { xPercent: -50, yPercent: -50, scale: 0.12, opacity: 0 });

  // Clockwise order: ACTIVATION → STAFF → SCREENS → CATERING → MERCH → CONTENT → SUPPORT → STAND
  var CW_ORDER = [
    'pe-orb-vr', // ACTIVATION  — top center
    'pe-orb-staff', // STAFF       — top right
    'pe-orb-led', // SCREENS     — right
    'pe-orb-bar', // CATERING    — bottom right
    'pe-orb-materials', // MERCH       — bottom center-right
    'pe-orb-motion', // CONTENT     — bottom center
    'pe-orb-activation', // SUPPORT     — bottom left
    'pe-orb-ideas', // STAND       — top left
  ];

  function sortClockwise(spheres) {
    return Array.from(spheres).sort(function (a, b) {
      var ai = CW_ORDER.findIndex(function (cls) {
        return a.classList.contains(cls);
      });
      var bi = CW_ORDER.findIndex(function (cls) {
        return b.classList.contains(cls);
      });
      if (ai === -1) ai = 99;
      if (bi === -1) bi = 99;
      return ai - bi;
    });
  }

  var played = false;

  function triggerEntrance() {
    if (played) return;
    played = true;

    var spheres = sortClockwise(document.querySelectorAll('.pe-orb-sphere'));
    var tl = gsap.timeline({
      // Wait for planets to finish their scroll-driven scale-in before bloom starts
      delay: 0.5,
    });

    // ── Phase 1: Bloom explodes to peak (0→0.6s) ─────────────────────────────
    // power3.out: fast initial expansion that decelerates at peak — punchy
    // without over-shooting. opacity 0.9 so the bloom is vivid but not white.
    tl.to(
      bloomEl,
      {
        duration: 0.6,
        scale: 1.5,
        opacity: 0.9,
        ease: 'power3.out',
      },
      0,
    );

    // ── Phase 2: Labels shoot out mid-bloom (0.3s) ───────────────────────────
    // 0.3s = halfway through Phase 1. Labels erupt from inside the expanding
    // corona in rapid clockwise succession (60ms stagger — almost simultaneous).
    tl.add(function () {
      spheres.forEach(function (sphere, i) {
        setTimeout(function () {
          sphere.classList.add('label-revealed');
        }, i * 60);
      });
    }, 0.3);

    // ── Phase 3: Bloom recedes and dissipates (0.6→1.4s) ─────────────────────
    // power2.in: slow start, accelerating fade — the corona exhales cleanly.
    tl.to(
      bloomEl,
      {
        duration: 0.8,
        scale: 2.8,
        opacity: 0,
        ease: 'power2.in',
      },
      0.6,
    );
  }

  // Watch #peOrbTitle for is-centered-sun (added by LERP scroll at p >= 0.46)
  var mo = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      if (
        mutations[i].attributeName === 'class' &&
        orbTitle.classList.contains('is-centered-sun')
      ) {
        triggerEntrance();
        mo.disconnect();
        return;
      }
    }
  });

  mo.observe(orbTitle, { attributes: true, attributeFilter: ['class'] });
})();
`,`// Stage 2.4 — planet video popup: manual prev/next slider + auto-advance on end.
(function () {
  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  ready(function () {
    var backdrop = document.getElementById('pePopupBackdrop');
    var video = document.getElementById('pePopupVideo');
    var closeBtn = document.getElementById('pePopupClose');
    var prevBtn = document.getElementById('pePopupPrev');
    var nextBtn = document.getElementById('pePopupNext');
    var fsBtn = document.getElementById('pePopupFullscreen');
    var orbitWrapper = document.getElementById('peSecondRight');

    if (!backdrop || !video || !closeBtn || !orbitWrapper) return;

    var spheres = Array.from(document.querySelectorAll('.pe-orb-sphere'));
    if (!spheres.length) return;

    var currentSphere = null;
    var isCycling = false;

    // ── Highlight helpers ────────────────────────────────────────────────────
    function setActiveSphere(sphere) {
      spheres.forEach(function (s) {
        s.classList.remove('is-playing-video');
      });
      if (sphere) sphere.classList.add('is-playing-video');
    }

    // ── Open / close ─────────────────────────────────────────────────────────
    function openPopup(sphere) {
      if (!sphere) return;
      var src = sphere.getAttribute('data-popup-video') || '';
      if (!src) return;

      video.pause();
      video.muted = true;
      video.src = src;
      video.load();

      orbitWrapper.classList.add('is-popup-open'); // patch-42 compat
      document.body.classList.add('is-popup-active'); // patch-53 per-sphere states
      backdrop.classList.add('is-open');
      backdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      currentSphere = sphere;
      setActiveSphere(sphere);

      var playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(function () {});
      }
    }

    function closePopup() {
      backdrop.classList.remove('is-open');
      backdrop.setAttribute('aria-hidden', 'true');
      video.pause();
      video.removeAttribute('src');
      video.load();
      video.style.opacity = '1';
      document.body.style.overflow = '';
      document.body.classList.remove('is-popup-active');
      orbitWrapper.classList.remove('is-popup-open');
      spheres.forEach(function (s) {
        s.classList.remove('is-playing-video');
      });
      currentSphere = null;
      isCycling = false;
    }

    // ── Navigation (shared by buttons, keyboard, and auto-advance) ───────────
    // direction: +1 = next, -1 = prev
    function navigate(direction) {
      if (!currentSphere || isCycling) return;
      isCycling = true;

      var idx = spheres.indexOf(currentSphere);
      var target = spheres[(idx + direction + spheres.length) % spheres.length];

      // Crossfade: fade out → swap source → fade back in
      video.style.opacity = '0';
      setTimeout(function () {
        openPopup(target);
        setTimeout(function () {
          video.style.opacity = '1';
          isCycling = false;
        }, 60);
      }, 300);
    }

    // ── Sphere click (capture phase — fires before any sphere-level stoppers) ─
    document.addEventListener(
      'click',
      function (e) {
        var sphere = e.target.closest && e.target.closest('.pe-orb-sphere');
        if (!sphere) return;
        e.stopPropagation();
        video.style.opacity = '1';
        isCycling = false;
        openPopup(sphere);
      },
      true,
    );

    // ── Keyboard: Enter/Space to open, Escape to close, arrows to navigate ───
    document.addEventListener(
      'keydown',
      function (e) {
        var sphere = e.target.closest && e.target.closest('.pe-orb-sphere');
        if (sphere && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          video.style.opacity = '1';
          isCycling = false;
          openPopup(sphere);
          return;
        }
        if (!backdrop.classList.contains('is-open')) return;
        if (e.key === 'Escape') {
          closePopup();
          return;
        }
        if (e.key === 'ArrowRight') {
          navigate(1);
          return;
        }
        if (e.key === 'ArrowLeft') {
          navigate(-1);
          return;
        }
      },
      true,
    );

    // ── Fullscreen ────────────────────────────────────────────────────────────
    // Target: the video element itself. Browser shows native fullscreen with
    // its own controls; Esc exits natively. fullscreenchange keeps our icon
    // in sync regardless of how fullscreen was exited (Esc, button, browser UI).
    function fsRequest(el) {
      return (
        el.requestFullscreen ||
        el.webkitRequestFullscreen ||
        el.mozRequestFullScreen ||
        el.msRequestFullscreen
      );
    }
    function fsExit() {
      return (
        document.exitFullscreen ||
        document.webkitExitFullscreen ||
        document.mozCancelFullScreen ||
        document.msExitFullscreen
      );
    }
    function fsElement() {
      return (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );
    }

    function syncFsIcon() {
      var active = !!fsElement();
      if (!fsBtn) return;
      fsBtn.classList.toggle('is-fullscreen', active);
      fsBtn.setAttribute('aria-label', active ? 'Exit fullscreen' : 'Fullscreen');
      fsBtn.setAttribute('data-tooltip', active ? 'Exit fullscreen' : 'Fullscreen');
    }

    if (fsBtn) {
      fsBtn.addEventListener('click', function () {
        if (!fsElement()) {
          var req = fsRequest(video);
          if (req) req.call(video);
        } else {
          var exit = fsExit();
          if (exit) exit.call(document);
        }
      });
    }

    // Sync icon whenever fullscreen state changes (covers Esc, button, browser UI)
    [
      'fullscreenchange',
      'webkitfullscreenchange',
      'mozfullscreenchange',
      'MSFullscreenChange',
    ].forEach(function (ev) {
      document.addEventListener(ev, syncFsIcon);
    });

    // Reset fullscreen when popup closes so next open starts clean
    var _closePopup = closePopup;
    closePopup = function () {
      _closePopup();
      if (fsElement()) {
        var exit = fsExit();
        if (exit) exit.call(document);
      }
    };

    // ── Button listeners ─────────────────────────────────────────────────────
    closeBtn.addEventListener('click', closePopup);
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) closePopup();
    });
    if (prevBtn)
      prevBtn.addEventListener('click', function () {
        navigate(-1);
      });
    if (nextBtn)
      nextBtn.addEventListener('click', function () {
        navigate(1);
      });

    // ── Auto-advance on video end ─────────────────────────────────────────────
    video.addEventListener('ended', function () {
      navigate(1);
    });
  });
})();
`,`// Floating CTA — Safari compositor fix.
//
// ROOT CAUSES (Safari pulsation + square border):
//  1. filter:drop-shadow on .fc-main svg → GPU compositor layer with square
//     bounding box. Fixed in 30-floating-contact.css but also killed here via
//     inline !important to survive WP cache of old CSS.
//  2. fc-main::after had inset:-45% → huge compositor region. Fixed in base CSS.
//  3. backdrop-filter on .fc-btn / .fc-options → hidden compositor layers always
//     in DOM. Fixed in 30-floating-contact.css and patch-43.
//  4. animation properties from older patches. Killed here.
//
// ROOT CAUSE (Chrome blink of button+dropdown on first show):
//  will-change on wrapper caused Chrome to pre-rasterize all children
//  (including .fc-options) before CSS opacity:0 was applied → flash.
//  Fix: no will-change. Natural GPU promotion via CSS transition is correct.
(function () {
  var ua = navigator.userAgent;
  var isSafari =
    ua.includes('Safari') &&
    !ua.includes('Chrome') &&
    !ua.includes('Chromium') &&
    !ua.includes('Android');

  if (!isSafari) return;

  var wrapper = document.getElementById('floatingContact');
  if (!wrapper) return;

  // Kill ALL filter + backdrop-filter + animation on every descendant.
  // Uses inline !important — beats any !important stylesheet rule including
  // WP-injected styles with the same ID (appendStyle skip guard).
  function killCompositorTriggers() {
    // Kill compositor triggers on the WRAPPER itself — bottomBtnPulse and
    // floatingContactReveal animate #floatingContact (wrapper), not .fc-main.
    // querySelectorAll('*') returns children only, not the wrapper element.
    wrapper.style.setProperty('animation', 'none', 'important');
    wrapper.style.setProperty('filter', 'none', 'important');
    wrapper.style.setProperty('-webkit-filter', 'none', 'important');

    var all = wrapper.querySelectorAll('*');
    all.forEach(function (el) {
      el.style.setProperty('filter', 'none', 'important');
      el.style.setProperty('-webkit-filter', 'none', 'important');
      el.style.setProperty('backdrop-filter', 'none', 'important');
      el.style.setProperty('-webkit-backdrop-filter', 'none', 'important');
      el.style.setProperty('animation', 'none', 'important');
    });
    // fc-main specific
    var fcMain = wrapper.querySelector('.fc-main');
    if (fcMain) {
      fcMain.style.setProperty('isolation', 'auto', 'important');
      fcMain.style.setProperty('will-change', 'auto', 'important');
      fcMain.style.setProperty('background', 'rgb(218, 60, 0)', 'important');
      // overflow:hidden lets Safari clip the compositing layer to border-radius
      // (overflow:visible exposes the square bounding box as the GPU tile edge)
      fcMain.style.setProperty('overflow', 'hidden', 'important');
    }
  }

  killCompositorTriggers();

  // Stylesheet for pseudo-elements (inline JS cannot target ::before/::after).
  // Fresh unique ID — appendStyle never created this → WP guard never skips it.
  if (!document.getElementById('fc-safari-pseudo-kill')) {
    var s = document.createElement('style');
    s.id = 'fc-safari-pseudo-kill';
    s.textContent =
      '#floatingContact .fc-main::before,' +
      '#floatingContact .fc-main::after{' +
      'display:none!important;content:none!important;}' +
      '#floatingContact *{' +
      'filter:none!important;' +
      '-webkit-filter:none!important;' +
      'backdrop-filter:none!important;' +
      '-webkit-backdrop-filter:none!important;}' +
      '#floatingContact .fc-main,' +
      '#floatingContact.visible .fc-main{animation:none!important;}';
    document.head.appendChild(s);
  }

  // Re-apply after deferred patches load (~1200ms).
  setTimeout(killCompositorTriggers, 1400);
})();
`,`// Comet system — multi-trajectory, multi-size, randomised scheduler.
//
// Comets live inside #peSecondRight at z-index:3 (below planets z:4, title z:8).
// 6 CSS keyframe trajectories: 3 LTR (left→right) + 3 RTL (right→left).
// All travel top→bottom. Sizes: sm (52px) 45%, md (85px) 35%, lg (115px) 20%.
// Color: 90% neon cyan, 10% random planet accent via CSS custom properties.
//
// Scheduler:
//   • base gap between launches: 2–6 s (random)
//   • hard floor between any two launches: 500 ms
//   • max 5 concurrent comets
//   • 25% chance of a second comet 200–800 ms after the first
//   • 12% chance of a third comet 400–1400 ms after the first
//   • scroll-guard: stops when outside planets section (p < 0.40 || p ≥ 0.86)
(function () {
  function ready(fn) {
    document.readyState === 'loading'
      ? document.addEventListener('DOMContentLoaded', fn, { once: true })
      : fn();
  }

  ready(function () {
    if (window.matchMedia('(max-width: 768px)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var pinWrap = document.getElementById('pePinWrap');
    var container = document.getElementById('peSecondRight');
    if (!pinWrap || !container) return;

    // ── SCROLL PROGRESS ──────────────────────────────────────────────────────
    function getP() {
      var rect = pinWrap.getBoundingClientRect();
      var total = pinWrap.offsetHeight - window.innerHeight;
      return total > 0 ? Math.max(0, Math.min(1, -rect.top / total)) : 0;
    }

    // ── CONFIG ────────────────────────────────────────────────────────────────
    var TRAJECTORIES = ['ltr1', 'ltr2', 'ltr3', 'rtl1', 'rtl2', 'rtl3'];

    // Base animation duration per trajectory class (JS may add ±0.2s jitter)
    var TRAJ_DUR = { ltr1: 2.0, ltr2: 2.2, ltr3: 2.4, rtl1: 2.0, rtl2: 2.2, rtl3: 2.4 };

    // Planet glow colours [r, g, b] — matches CSS --planet-glow per sphere class
    var PLANET_COLORS = [
      [82, 34, 160], // STAND     — purple
      [91, 167, 242], // ACTIVATION — sky blue
      [219, 111, 81], // STAFF     — orange
      [31, 74, 188], // SCREENS   — deep blue
      [210, 171, 65], // MERCH     — gold
      [51, 124, 219], // CATERING  — cobalt
      [159, 68, 47], // CONTENT   — rust
      [80, 144, 74], // SUPPORT   — green
    ];

    // ── STATE ─────────────────────────────────────────────────────────────────
    var sectionActive = false;
    var activeCount = 0;
    var scheduleTimer = null;
    var lastLaunchMs = 0;
    var MIN_BETWEEN = 500; // ms hard floor between any two launches
    var MAX_ACTIVE = 5; // max concurrent comets

    // ── HELPERS ───────────────────────────────────────────────────────────────
    function pickSize() {
      var r = Math.random();
      return r < 0.45 ? 'sm' : r < 0.8 ? 'md' : 'lg';
    }

    function pickTraj() {
      return TRAJECTORIES[Math.floor(Math.random() * TRAJECTORIES.length)];
    }

    function rgba(r, g, b, a) {
      return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    }

    // ── COMET FACTORY ─────────────────────────────────────────────────────────
    function launchComet() {
      if (!sectionActive || activeCount >= MAX_ACTIVE) return;
      var now = Date.now();
      if (now - lastLaunchMs < MIN_BETWEEN) return;
      lastLaunchMs = now;

      var size = pickSize();
      var traj = pickTraj();
      var dur = TRAJ_DUR[traj] + (Math.random() * 0.4 - 0.2);
      var usePlanet = Math.random() < 0.1; // 10% → planet color

      var el = document.createElement('div');
      el.className = 'pe-comet pe-comet-' + size + ' pe-comet-' + traj;

      if (usePlanet) {
        var c = PLANET_COLORS[Math.floor(Math.random() * PLANET_COLORS.length)];
        el.style.setProperty('--comet-head', rgba(c[0], c[1], c[2], 0.92));
        el.style.setProperty('--comet-glow1', rgba(c[0], c[1], c[2], 0.75));
        el.style.setProperty('--comet-glow2', rgba(c[0], c[1], c[2], 0.32));
        el.style.background =
          'linear-gradient(to right,transparent 0%,' +
          rgba(c[0], c[1], c[2], 0.45) +
          ' 32%,' +
          rgba(c[0], c[1], c[2], 0.92) +
          ' 100%)';
        el.style.boxShadow =
          '0 0 5px ' + rgba(c[0], c[1], c[2], 0.7) + ',0 0 14px ' + rgba(c[0], c[1], c[2], 0.3);
      }

      // JS duration override (CSS class provides base, this fine-tunes it)
      el.style.animationDuration = dur.toFixed(2) + 's';

      container.appendChild(el);
      activeCount++;

      el.addEventListener(
        'animationend',
        function () {
          if (el.parentNode) el.parentNode.removeChild(el);
          activeCount--;
        },
        { once: true },
      );
    }

    // ── SCHEDULER ─────────────────────────────────────────────────────────────
    function scheduleNext() {
      if (scheduleTimer) return;
      // 2 – 6 s gap between primary launches
      var gap = 2000 + Math.random() * 4000;
      scheduleTimer = setTimeout(function () {
        scheduleTimer = null;
        if (!sectionActive) return;

        launchComet();

        // 25% chance: a second comet 200–800 ms later (minimal gap → feels simultaneous)
        if (Math.random() < 0.25 && activeCount < MAX_ACTIVE) {
          setTimeout(
            function () {
              if (sectionActive && activeCount < MAX_ACTIVE) launchComet();
            },
            200 + Math.random() * 600,
          );
        }

        // 12% chance: a third comet 400–1400 ms after first
        if (Math.random() < 0.12 && activeCount < MAX_ACTIVE) {
          setTimeout(
            function () {
              if (sectionActive && activeCount < MAX_ACTIVE) launchComet();
            },
            400 + Math.random() * 1000,
          );
        }

        scheduleNext();
      }, gap);
    }

    function cancelSchedule() {
      if (scheduleTimer) {
        clearTimeout(scheduleTimer);
        scheduleTimer = null;
      }
    }

    function clearComets() {
      var live = container.querySelectorAll('.pe-comet');
      live.forEach(function (el) {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
      activeCount = 0;
    }

    // ── SCROLL SYNC ───────────────────────────────────────────────────────────
    var COMET_IN = 0.4;
    var COMET_OUT = 0.97; // fly until the section is almost fully scrolled out

    function syncSection() {
      var p = getP();
      var on = p >= COMET_IN && p < COMET_OUT;
      if (on === sectionActive) return;
      sectionActive = on;
      if (on) {
        scheduleNext();
      } else {
        cancelSchedule();
        clearComets();
      }
    }

    window.addEventListener('scroll', syncSection, { passive: true });
    syncSection();
  });
})();
`,`// Starfield — sub-pixel point stars covering the FULL hero viewport.
//
// Parent: #peSecond (position:absolute; inset:0 on #heroSection → full viewport).
// SVG is prepended as the first child of #peSecond so #peSecondRight (isolation:
// isolate) and all planets render on top of it naturally via DOM order.
//
// Star placement: viewport coordinates (0 0 W H where W/H = hero dimensions).
// Exclusion zones: each planet + central solar glow, positions recalculated in
// viewport px based on #peSecondRight's offset within #peSecond.
//
// Distribution: 55% edge-biased (four 18% bands at top/bottom/left/right),
// 45% uniform-random in outer viewport area.
//
// Colors: 70% white/gray, 20% subtle planet tint (blended with white 18–35%),
// 10% neon accent (rgba 0,212,255 — project colour).
//
// Animation: opacity only — fade/shimmer. No translate, no scale.
// ResizeObserver rebuilds on container resize.
// Desktop + tablet only (≥769px).
(function () {
  'use strict';

  function ready(fn) {
    document.readyState === 'loading'
      ? document.addEventListener('DOMContentLoaded', fn, { once: true })
      : fn();
  }

  ready(function () {
    if (window.matchMedia('(max-width: 768px)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var peSecond = document.getElementById('peSecond'); // full-viewport overlay
    var peSecondRight = document.getElementById('peSecondRight'); // orbit container
    if (!peSecond || !peSecondRight) return;

    var svgNS = 'http://www.w3.org/2000/svg';
    var currentSvg = null;
    var resizeTimer = null;

    // ── PLANET EXCLUSION ZONE DEFINITIONS (in container-% coords) ────────────
    // cx/cy: planet center as % of #peSecondRight (from patch-111).
    // excR:  exclusion radius in % of #peSecondRight width.
    // rgb:   planet glow colour for nearby star tinting.
    var PLANET_DEFS = [
      { cx: 26, cy: 24, excR: 15, rgb: [82, 34, 160] }, // STAND
      { cx: 50, cy: 14, excR: 9, rgb: [91, 167, 242] }, // ACTIVATION
      { cx: 76, cy: 26, excR: 13, rgb: [219, 111, 81] }, // STAFF
      { cx: 86, cy: 50, excR: 10, rgb: [31, 74, 188] }, // SCREENS
      { cx: 76, cy: 74, excR: 14, rgb: [210, 171, 65] }, // MERCH
      { cx: 54, cy: 86, excR: 9, rgb: [51, 124, 219] }, // CATERING
      { cx: 32, cy: 80, excR: 12, rgb: [159, 68, 47] }, // CONTENT
      { cx: 16, cy: 58, excR: 13, rgb: [80, 144, 74] }, // SUPPORT
    ];

    // Neon accent colour (project accent)
    var NEON = [0, 212, 255];

    var TC = ['pe-st1', 'pe-st2', 'pe-st3', 'pe-st4', 'pe-st5', 'pe-st6'];

    // ── STAR BUILDER ──────────────────────────────────────────────────────────
    function buildStars() {
      if (currentSvg && currentSvg.parentNode) currentSvg.parentNode.removeChild(currentSvg);

      // Dimensions of the full-viewport overlay
      var W = peSecond.offsetWidth;
      var H = peSecond.offsetHeight;
      if (!W || !H) return;

      // Position of #peSecondRight within #peSecond (in pixels)
      var cW = peSecondRight.offsetWidth;
      var cH = peSecondRight.offsetHeight;
      var cL = (W - cW) / 2; // left offset (centered)
      var cT = (H - cH) / 2; // top offset  (centered)

      // Convert planet defs to viewport-pixel exclusion zones
      var planets = PLANET_DEFS.map(function (p) {
        return {
          px: cL + (p.cx / 100) * cW, // center x in viewport px
          py: cT + (p.cy / 100) * cH, // center y in viewport px
          pr: (p.excR / 100) * cW, // exclusion radius in viewport px
          rgb: p.rgb,
        };
      });

      // Central solar-glow exclusion: circle at container center, r = 18% of cW
      var glowPx = cL + cW * 0.5;
      var glowPy = cT + cH * 0.5;
      var glowR = cW * 0.18;

      function isExcluded(x, y) {
        // Solar glow
        var gdx = x - glowPx,
          gdy = y - glowPy;
        if (gdx * gdx + gdy * gdy < glowR * glowR) return true;
        // Per-planet
        for (var i = 0; i < planets.length; i++) {
          var pl = planets[i];
          var dx = x - pl.px,
            dy = y - pl.py;
          if (dx * dx + dy * dy < pl.pr * pl.pr) return true;
        }
        return false;
      }

      function nearestPlanet(x, y) {
        var best = null,
          bestD2 = Infinity;
        for (var i = 0; i < planets.length; i++) {
          var pl = planets[i];
          var d2 = (x - pl.px) * (x - pl.px) + (y - pl.py) * (y - pl.py);
          if (d2 < bestD2) {
            bestD2 = d2;
            best = pl;
          }
        }
        // Influence: fades from 1 at planet edge to 0 at 30% of cW beyond it
        var influence = Math.max(0, 1 - Math.sqrt(bestD2) / (cW * 0.3));
        return { planet: best, influence: influence };
      }

      // ── SVG setup ────────────────────────────────────────────────────────────
      var svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      svg.setAttribute('preserveAspectRatio', 'none');
      svg.setAttribute('class', 'pe-starfield');
      svg.setAttribute('aria-hidden', 'true');
      // z-index not set: SVG is prepended → DOM order puts it behind peSecondRight
      svg.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;';
      currentSvg = svg;

      // ── Star generation ───────────────────────────────────────────────────────
      var TOTAL = 180;
      var EDGE = 18; // edge band width as % of viewport dimension
      var frag = document.createDocumentFragment();
      var placed = 0,
        tries = 0;

      while (placed < TOTAL && tries < TOTAL * 35) {
        tries++;

        var x, y; // viewport pixel coords

        if (Math.random() < 0.55) {
          // Edge-biased: pick one of the four viewport-edge bands
          var band = (Math.random() * 4) | 0;
          switch (band) {
            case 0:
              x = Math.random() * W;
              y = (Math.random() * H * EDGE) / 100;
              break; // top
            case 1:
              x = Math.random() * W;
              y = H * (1 - EDGE / 100) + (Math.random() * H * EDGE) / 100;
              break; // bottom
            case 2:
              x = (Math.random() * W * EDGE) / 100;
              y = Math.random() * H;
              break; // left
            default:
              x = W * (1 - EDGE / 100) + (Math.random() * W * EDGE) / 100;
              y = Math.random() * H;
              break; // right
          }
        } else {
          x = Math.random() * W;
          y = Math.random() * H;
        }

        // Margin: at least 2px from edge
        if (x < 2 || x > W - 2 || y < 2 || y > H - 2) continue;
        if (isExcluded(x, y)) continue;

        // ── Star properties ───────────────────────────────────────────────────
        var r = 0.35 + Math.random() * 0.65; // 0.35 – 1.0 CSS px
        var alpha = 0.08 + Math.random() * 0.72;

        // Color split: 70% white/gray, 20% planet tint, 10% neon accent
        var roll = Math.random();
        var fill;

        if (roll < 0.1) {
          // Neon accent
          fill =
            'rgba(' +
            NEON[0] +
            ',' +
            NEON[1] +
            ',' +
            NEON[2] +
            ',' +
            (alpha * 0.75).toFixed(2) +
            ')';
        } else if (roll < 0.3) {
          // Planet tint — blended with white for subtlety
          var np = nearestPlanet(x, y);
          if (np.influence > 0.02) {
            var c = np.planet.rgb;
            var sat = 0.18 + Math.random() * 0.17; // 18–35% planet, rest white
            var cr = Math.round(255 + (c[0] - 255) * sat);
            var cg = Math.round(255 + (c[1] - 255) * sat);
            var cb = Math.round(255 + (c[2] - 255) * sat);
            fill = 'rgba(' + cr + ',' + cg + ',' + cb + ',' + (alpha * 0.72).toFixed(2) + ')';
          } else {
            // No nearby planet zone — fall through to white
            fill = 'rgba(255,255,255,' + alpha.toFixed(2) + ')';
          }
        } else if (roll < 0.35) {
          // Gray
          var g = (150 + Math.random() * 90) | 0;
          fill = 'rgba(' + g + ',' + g + ',' + Math.min(255, g + 14) + ',' + alpha.toFixed(2) + ')';
        } else {
          // White (majority)
          fill = 'rgba(255,255,255,' + alpha.toFixed(2) + ')';
        }

        var circle = document.createElementNS(svgNS, 'circle');
        circle.setAttribute('cx', x.toFixed(1));
        circle.setAttribute('cy', y.toFixed(1));
        circle.setAttribute('r', r.toFixed(2));
        circle.setAttribute('fill', fill);

        // 58% get twinkling (opacity only)
        if (Math.random() < 0.58) {
          circle.setAttribute('class', TC[(Math.random() * TC.length) | 0]);
          circle.style.animationDelay = (Math.random() * 9).toFixed(2) + 's';
        }

        frag.appendChild(circle);
        placed++;
      }

      svg.appendChild(frag);
      // Prepend so peSecondRight (and its planets) render on top via DOM order
      peSecond.insertBefore(svg, peSecond.firstChild);
    }

    // ── INIT + RESIZE ─────────────────────────────────────────────────────────
    buildStars();

    if (typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(buildStars, 250);
      }).observe(peSecond);
    }
  });
})();
`,`// Orbit scroll-reveal — fades in orbit rings one by one after all planets appear.
//
// Sequence (scroll progress p, same scale as 01-core-interactions.js):
//   p ≥ 0.64  → Ring3  (inner, 1st) fades in via CSS transition
//   p ≥ 0.70  → AsteroidBelt (2nd) fades in
//   p ≥ 0.76  → Ring1  (outer, 3rd) fades in
// Reverse: each ring hides again when p drops below (threshold − 0.05).
//
// Depends on CSS: .orbit-ring-visible transitions in 74-orbit-animated-lines.css.
(function () {
  'use strict';

  if (!window.matchMedia || window.matchMedia('(max-width: 768px)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var SHOW = { ring3: 0.64, asteroid: 0.7, ring1: 0.76 };
  var HIDE = { ring3: 0.59, asteroid: 0.65, ring1: 0.71 };

  var els = {};
  var state = { ring3: false, asteroid: false, ring1: false };

  function clamp(v, a, b) {
    return v < a ? a : v > b ? b : v;
  }

  function getProgress() {
    var wrap = document.getElementById('pePinWrap');
    if (!wrap) return 0;
    var rect = wrap.getBoundingClientRect();
    var total = Math.max(1, wrap.offsetHeight - window.innerHeight);
    return clamp(-rect.top / total, 0, 1);
  }

  function init() {
    els.ring3 = document.getElementById('peOrbitRing3');
    els.asteroid = document.getElementById('peOrbitAsteroidBelt');
    els.ring1 = document.getElementById('peOrbitRing1');
  }

  function setOrbit(key, el, visible) {
    if (!el || state[key] === visible) return;
    state[key] = visible;
    el.classList.toggle('orbit-ring-visible', visible);
  }

  function updateOrbits() {
    var p = getProgress();
    // Hysteresis: show at SHOW threshold, hide only when p drops below HIDE threshold.
    setOrbit('ring3', els.ring3, p >= (state.ring3 ? HIDE.ring3 : SHOW.ring3));
    setOrbit('asteroid', els.asteroid, p >= (state.asteroid ? HIDE.asteroid : SHOW.asteroid));
    setOrbit('ring1', els.ring1, p >= (state.ring1 ? HIDE.ring1 : SHOW.ring1));
  }

  document.addEventListener('DOMContentLoaded', function () {
    init();
    updateOrbits();
    window.addEventListener('scroll', updateOrbits, { passive: true });
    window.addEventListener('resize', updateOrbits);
  });
})();
`,`// Asteroid belt — hybrid SVG rendering:
//
//   A. Diffuse haze   — stroke-dasharray ellipses, round linecap, blurred
//   B. Dust streams   — micro-dasharray, butt linecap
//   C. Rocky debris  }  individual <polygon> stones, each orbiting via
//   D. Boulders      }  <animateMotion> + <mpath> along an elliptical path.
//
// animateMotion + mpath keeps every stone on the correct ellipse (unlike
// animateTransform rotate, which traces a circle). Each stone has:
//   • a time-offset begin → distributed evenly around the orbit
//   • a fixed intrinsic rotation → unique facet orientation
//   • an irregular polygon shape (5–8 sides, LCG-deterministic per session)
//   • a colour sampled from a small per-layer palette for subtle variety
(function () {
  'use strict';

  if (!window.matchMedia || window.matchMedia('(max-width: 768px)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var NS = 'http://www.w3.org/2000/svg';
  var XLINK = 'http://www.w3.org/1999/xlink';
  var OX = 350,
    OY = 250;
  var C = 1172; // belt-centre circumference (SVG units)

  // ── STROKE LAYERS (A + B) ──────────────────────────────────────────────────
  // [rx, ry, strokeW, dashArrayString, R, G, B, opacity, blurPx, beginS, durS, linecap]
  var STROKE_LAYERS = [
    // A. Diffuse haze — blurred, round linecap (opacity +40% vs initial)
    [284, 95, 8.0, '16 4 10 5 14 3 8 6 12 4 18 3', 140, 168, 210, 0.07, 3.5, 0, 212, 'round'],
    [247, 79, 6.5, '12 5 8 4 15 3 10 5 9 4', 150, 172, 218, 0.06, 3.0, -18, 210, 'round'],
    [266, 87, 4.5, '10 4 14 3 8 5 12 4 16 3', 145, 168, 215, 0.06, 2.2, -8, 215, 'round'],
    // B. Dust streams — micro-dashes, butt linecap (opacity +20%)
    [
      276,
      91,
      0.8,
      '0.8 26 1.5 40 0.5 20 2 48 0.8 32 1.2 44 1 19 0.6 36',
      122,
      150,
      196,
      0.11,
      0,
      -35,
      203,
      'butt',
    ],
    [
      252,
      82,
      0.7,
      '1 23 0.5 34 1.8 46 0.7 29 1.2 40 0.4 26',
      135,
      165,
      210,
      0.1,
      0,
      -52,
      201,
      'butt',
    ],
    [
      264,
      86,
      0.8,
      '0.6 19 2 42 0.8 31 1.4 50 0.5 23 1.8 37',
      128,
      158,
      205,
      0.09,
      0,
      -72,
      205,
      'butt',
    ],
  ];

  // ── POLYGON LAYERS (C + D) ─────────────────────────────────────────────────
  // [rx, ry, count, wMin, wMax, hFactor, colors[], durS, beginS]
  // hFactor: stone height ≈ w × hFactor × rand(0.6–1.0)
  // Sizes and alpha both +15–20% vs previous for subtle visibility boost.
  var POLY_LAYERS = [
    // C1 — small rocky debris, blue-grey + warm grey
    [
      270,
      89,
      40,
      2.3,
      4.6,
      0.72,
      [
        'rgba(125,150,195,0.24)',
        'rgba(108,138,185,0.28)',
        'rgba(142,162,205,0.22)',
        'rgba(158,148,132,0.23)',
        'rgba(172,158,140,0.21)',
        'rgba(115,142,192,0.26)',
        'rgba(180,165,145,0.20)',
        'rgba(102,130,182,0.27)',
      ],
      202,
      -88,
    ],

    // C2 — small rocky debris, cooler hue cluster
    [
      258,
      84,
      35,
      2.1,
      4.0,
      0.7,
      [
        'rgba(138,162,208,0.23)',
        'rgba(118,148,195,0.27)',
        'rgba(148,168,210,0.21)',
        'rgba(162,152,138,0.24)',
        'rgba(175,160,142,0.20)',
        'rgba(112,140,190,0.28)',
        'rgba(168,158,144,0.22)',
        'rgba(105,136,188,0.26)',
      ],
      200,
      -112,
    ],

    // D1a — medium boulders, brown + blue mix
    [
      265,
      87,
      22,
      4.0,
      7.5,
      0.66,
      [
        'rgba(150,136,112,0.33)',
        'rgba(165,150,125,0.30)',
        'rgba(142,128,106,0.35)',
        'rgba(112,140,195,0.32)',
        'rgba(125,152,200,0.29)',
        'rgba(178,140,115,0.29)',
        'rgba(102,132,188,0.34)',
        'rgba(160,145,125,0.31)',
        'rgba(185,148,120,0.28)',
      ],
      198,
      -138,
    ],

    // D1b — medium boulders, blue-grey dominant
    [
      261,
      85,
      20,
      3.5,
      7.0,
      0.68,
      [
        'rgba(115,142,196,0.33)',
        'rgba(128,155,202,0.30)',
        'rgba(105,135,188,0.35)',
        'rgba(148,136,118,0.32)',
        'rgba(160,148,128,0.29)',
        'rgba(102,128,182,0.34)',
        'rgba(170,152,130,0.30)',
        'rgba(122,150,200,0.31)',
      ],
      206,
      -68,
    ],

    // D2a — large sparse boulders, warm brown
    [
      272,
      90,
      16,
      5.8,
      10.5,
      0.62,
      [
        'rgba(148,135,112,0.37)',
        'rgba(162,148,126,0.34)',
        'rgba(140,126,104,0.39)',
        'rgba(175,160,136,0.33)',
        'rgba(110,138,194,0.37)',
        'rgba(168,142,118,0.35)',
        'rgba(190,155,128,0.31)',
      ],
      195,
      -158,
    ],

    // D2b — large sparse boulders, cool blue
    [
      258,
      83,
      14,
      5.2,
      9.8,
      0.64,
      [
        'rgba(112,140,195,0.37)',
        'rgba(125,152,202,0.34)',
        'rgba(102,132,188,0.39)',
        'rgba(148,136,118,0.35)',
        'rgba(130,158,205,0.33)',
        'rgba(168,145,122,0.35)',
        'rgba(105,142,200,0.38)',
      ],
      200,
      -85,
    ],
  ];

  // ── HELPERS ────────────────────────────────────────────────────────────────

  function seamlessStr(dashStr) {
    var period = dashStr.split(' ').reduce(function (s, v) {
      return s + parseFloat(v);
    }, 0);
    return Math.ceil(C / period) * period;
  }

  function rgbaStr(r, g, b, a) {
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a.toFixed(3) + ')';
  }

  // Deterministic LCG — identical layout on every page load
  var _rng = 0;
  function pr() {
    _rng = (_rng * 1664525 + 1013904223) >>> 0;
    return _rng / 4294967295;
  }

  // Irregular polygon for a faceted pebble, centred at (0,0), size w × h
  function buildPebble(w, h, sides) {
    var pts = [];
    for (var i = 0; i < sides; i++) {
      var base = (i / sides) * Math.PI * 2;
      var a = base + (pr() - 0.5) * ((Math.PI * 2) / sides) * 0.55;
      var rr = 0.58 + pr() * 0.42;
      pts.push(
        ((w / 2) * rr * Math.cos(a)).toFixed(2) + ',' + ((h / 2) * rr * Math.sin(a)).toFixed(2),
      );
    }
    return pts.join(' ');
  }

  // ── BUILD ──────────────────────────────────────────────────────────────────

  function build() {
    var belt = document.getElementById('peOrbitAsteroidBelt');
    if (!belt) return;
    var svg = belt.ownerSVGElement;
    if (!svg) return;

    var defs = svg.querySelector('defs');
    if (!defs) {
      defs = document.createElementNS(NS, 'defs');
      svg.insertBefore(defs, svg.firstChild);
    }

    function ensureFilter(id, dev) {
      if (document.getElementById(id)) return;
      var f = document.createElementNS(NS, 'filter');
      f.setAttribute('id', id);
      f.setAttribute('x', '-60%');
      f.setAttribute('y', '-60%');
      f.setAttribute('width', '220%');
      f.setAttribute('height', '220%');
      var fe = document.createElementNS(NS, 'feGaussianBlur');
      fe.setAttribute('in', 'SourceGraphic');
      fe.setAttribute('stdDeviation', dev);
      f.appendChild(fe);
      defs.appendChild(f);
    }
    ensureFilter('peAstBlur22', '2.2');
    ensureFilter('peAstBlur30', '3');
    ensureFilter('peAstBlur35', '3.5');
    var BLUR = { 2.2: 'peAstBlur22', 3.0: 'peAstBlur30', 3.5: 'peAstBlur35' };

    // Ensure motion paths exist in defs — one per unique (rx,ry) pair.
    // Path is centered at (0,0): element is placed inside a translate(OX,OY) group.
    // Full CW ellipse: M rx,0  A rx,ry 0 0,1 -rx,0  A rx,ry 0 0,1 rx,0
    function ensurePath(prx, pry) {
      var id = 'peOrbitMotion' + prx + 'x' + pry;
      if (!document.getElementById(id)) {
        var p = document.createElementNS(NS, 'path');
        p.setAttribute('id', id);
        p.setAttribute(
          'd',
          'M ' +
            prx +
            ',0 ' +
            'A ' +
            prx +
            ',' +
            pry +
            ' 0 0,1 -' +
            prx +
            ',0 ' +
            'A ' +
            prx +
            ',' +
            pry +
            ' 0 0,1 ' +
            prx +
            ',0',
        );
        defs.appendChild(p);
      }
      return id;
    }

    while (belt.firstChild) belt.removeChild(belt.firstChild);

    var frag = document.createDocumentFragment();

    // ── Stroke layers (haze + dust) ───────────────────────────────────────────
    for (var i = 0; i < STROKE_LAYERS.length; i++) {
      var L = STROKE_LAYERS[i];
      var rx = L[0],
        ry = L[1],
        sw = L[2],
        dashStr = L[3];
      var r = L[4],
        g = L[5],
        b = L[6];
      var alpha = L[7],
        blurPx = L[8],
        begin = L[9],
        dur = L[10],
        linecap = L[11];

      var el = document.createElementNS(NS, 'ellipse');
      el.setAttribute('cx', OX);
      el.setAttribute('cy', OY);
      el.setAttribute('rx', rx);
      el.setAttribute('ry', ry);
      el.setAttribute('fill', 'none');
      el.setAttribute('stroke', rgbaStr(r, g, b, alpha));
      el.setAttribute('stroke-width', sw);
      el.setAttribute('stroke-dasharray', dashStr);
      el.setAttribute('stroke-linecap', linecap);
      if (blurPx > 0 && BLUR[blurPx]) el.setAttribute('filter', 'url(#' + BLUR[blurPx] + ')');

      var target = seamlessStr(dashStr);
      var anim = document.createElementNS(NS, 'animate');
      anim.setAttribute('attributeName', 'stroke-dashoffset');
      anim.setAttribute('from', '0');
      anim.setAttribute('to', target.toFixed(1));
      anim.setAttribute('dur', dur + 's');
      anim.setAttribute('begin', begin + 's');
      anim.setAttribute('repeatCount', 'indefinite');
      anim.setAttribute('calcMode', 'linear');
      el.appendChild(anim);
      frag.appendChild(el);
    }

    // ── Polygon layers (rocky debris + boulders) ──────────────────────────────
    _rng = 42; // reset seed — deterministic per session

    for (var li = 0; li < POLY_LAYERS.length; li++) {
      var PL = POLY_LAYERS[li];
      var prx = PL[0],
        pry = PL[1],
        count = PL[2];
      var wMin = PL[3],
        wMax = PL[4],
        hFactor = PL[5];
      var colors = PL[6],
        animDur = PL[7],
        animBegin = PL[8];

      var pathId = ensurePath(prx, pry);
      var interval = animDur / count;

      // Group shifted to orbit centre so the local path (0,0)-centred ellipse
      // maps correctly to the SVG coordinate space.
      var grp = document.createElementNS(NS, 'g');
      grp.setAttribute('transform', 'translate(' + OX + ',' + OY + ')');

      for (var j = 0; j < count; j++) {
        var stoneG = document.createElementNS(NS, 'g');

        // Time offset distributes stones evenly; ±20% jitter for organic feel
        var jitter = (pr() - 0.5) * interval * 0.4;
        var beginVal = (animBegin - j * interval + jitter).toFixed(2);

        var am = document.createElementNS(NS, 'animateMotion');
        am.setAttribute('dur', animDur + 's');
        am.setAttribute('begin', beginVal + 's');
        am.setAttribute('repeatCount', 'indefinite');
        am.setAttribute('calcMode', 'linear');
        am.setAttribute('rotate', 'none'); // keep stone's own rotation fixed

        var mp = document.createElementNS(NS, 'mpath');
        // Support both modern href and legacy xlink:href
        mp.setAttribute('href', '#' + pathId);
        mp.setAttributeNS(XLINK, 'xlink:href', '#' + pathId);
        am.appendChild(mp);
        stoneG.appendChild(am);

        // Polygon geometry
        var w = wMin + pr() * (wMax - wMin);
        var h = w * hFactor * (0.6 + pr() * 0.4);
        var rot = pr() * 360;
        var color = colors[Math.floor(pr() * colors.length)];
        var sides = 5 + Math.floor(pr() * 4); // 5–8 sides

        var poly = document.createElementNS(NS, 'polygon');
        poly.setAttribute('points', buildPebble(w, h, sides));
        poly.setAttribute('fill', color);
        poly.setAttribute('transform', 'rotate(' + rot.toFixed(1) + ')');
        stoneG.appendChild(poly);

        grp.appendChild(stoneG);
      }

      frag.appendChild(grp);
    }

    belt.appendChild(frag);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
`,`// Planet loop-transition — masks the hard cut at the video loop point.
//
// Problem: planet videos are not seamlessly encoded, so the last frame
// jumping to the first frame produces a visible visual stutter.
//
// Solution (elegant workaround):
//   · Detect when the video is ~NEAR_END_S seconds from its end.
//   · Slow playback to SLOW_RATE (half-speed) → extends the last frames.
//   · Apply .pe-loop-flash class:
//       – removes grayscale → shows the planet's real colour
//       – adds a cyan glow ring (like hover but no scale)
//   · On loop restart (currentTime jumps back near 0): restore playbackRate,
//     hold the flash for HOLD_MS then fade it out via CSS transition.
//
// This creates a "pulse-of-life" at the loop point that distracts the eye
// from the frame discontinuity and feels intentional.
//
// ── DISABLE TOGGLE ───────────────────────────────────────────────────────────
// Set ENABLED = false to turn off without removing the code.
// ─────────────────────────────────────────────────────────────────────────────
(function () {
  'use strict';

  var ENABLED = false; // ← flip to true to re-enable
  var NEAR_END_S = 0.5; // seconds before end to begin transition
  var SLOW_RATE = 0.5; // playback rate while winding down (0.5 = half-speed)
  var HOLD_MS = 700; // ms to hold colour flash after loop restart
  var CLASS = 'pe-loop-flash';

  if (!ENABLED) return;

  // Desktop + tablet only — mobile never runs the orbit animation scene
  if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) return;

  function init(sphere) {
    var video = sphere.querySelector('video.pe-orb-video');
    if (!video) return;

    var active = false;
    var lastTime = 0;
    var holdTimer = null;

    function activate() {
      if (active) return;
      active = true;
      video.playbackRate = SLOW_RATE;
      sphere.classList.add(CLASS);
    }

    function deactivate() {
      clearTimeout(holdTimer);
      video.playbackRate = 1.0;
      holdTimer = setTimeout(function () {
        sphere.classList.remove(CLASS);
        active = false;
      }, HOLD_MS);
    }

    function onTimeUpdate() {
      var ct = video.currentTime;
      var dur = video.duration;
      if (!dur || isNaN(dur) || dur < 0.5) return;

      // ── 1. Near end → activate colour transition ──────────────────────────
      if (!active && dur - ct <= NEAR_END_S) {
        activate();
      }

      // ── 2. Loop detected: time jumped backward past beginning ─────────────
      //    (currentTime < 0.3 while previously > 0.8 handles all loop cases)
      if (active && ct < 0.3 && lastTime > 0.8) {
        deactivate();
      }

      lastTime = ct;
    }

    // Attach as soon as duration is available
    if (video.readyState >= 1 && !isNaN(video.duration)) {
      video.addEventListener('timeupdate', onTimeUpdate, { passive: true });
    } else {
      video.addEventListener('loadedmetadata', function onMeta() {
        video.removeEventListener('loadedmetadata', onMeta);
        video.addEventListener('timeupdate', onTimeUpdate, { passive: true });
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.pe-orb-sphere').forEach(init);
  });
})();
`,`// Wide outer solar corona — position:fixed overlay in <body>.
//
// Drop-shadows on #peOrbTitle are capped at 200 px to avoid container-edge
// clipping (overflow-clip-margin is not supported in Safari). This element
// provides the wide diffuse glow (previously 380–560 px shadows) that cannot
// be achieved with drop-shadow without clipping on smaller viewports.
//
// Placed in <body> at z-index:11 (above #heroSection z:10, below nav z:100).
// position:fixed escapes every overflow:clip/hidden ancestor — never clips.
// Opacity synced with --solar-alpha thresholds (p: 0.31 → 0.46).
(function () {
  'use strict';

  if (!window.matchMedia || window.matchMedia('(max-width: 768px)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var FADE_IN_START = 0.31;
  var FADE_IN_END = 0.46;

  function clamp(v, a, b) {
    return v < a ? a : v > b ? b : v;
  }
  function smootherstep(t) {
    t = clamp(t, 0, 1);
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  function getP() {
    var wrap = document.getElementById('pePinWrap');
    if (!wrap) return 0;
    var rect = wrap.getBoundingClientRect();
    var total = Math.max(1, wrap.offsetHeight - window.innerHeight);
    return clamp(-rect.top / total, 0, 1);
  }

  var el = null;

  function ensureEl() {
    if (el) return;
    el = document.createElement('div');
    el.style.cssText = [
      'position:fixed',
      'inset:0',
      'pointer-events:none',
      'z-index:11',
      'background:radial-gradient(' +
        'ellipse 82% 76% at 50% 50%,' +
        'rgba(0,218,255,0.13) 0%,' +
        'rgba(0,172,242,0.07) 22%,' +
        'rgba(0,100,210,0.03) 46%,' +
        'rgba(0,55,180,0.01) 66%,' +
        'transparent 82%)',
      'opacity:0',
    ].join(';');
    document.body.appendChild(el);
  }

  function sync() {
    if (!el) return;
    var p = getP();
    var t = (p - FADE_IN_START) / (FADE_IN_END - FADE_IN_START);
    var alpha = smootherstep(clamp(t, 0, 1));
    el.style.opacity = String(alpha);
  }

  document.addEventListener('DOMContentLoaded', function () {
    ensureEl();
    sync();
    window.addEventListener('scroll', sync, { passive: true });
  });
})();
`,`// Reference script block 35 — project card media slider + staggered auto-advance
//
// Auto-advance logic: rolling wave — one card advances every 2s in DOM order.
// New cards revealed by pagination are pushed to the end of allSliders and
// picked up naturally as wavePos continues incrementing.
(function () {
  'use strict';

  var initialized = new WeakSet();
  var allSliders = []; // grows in DOM order as cards are registered
  var wavePos = 0; // actual index into allSliders (not a counter)
  var autoStarted = false;
  var STAGGER = 2000; // ms between consecutive card advances

  // ── Per-card init ──────────────────────────────────────────────────────────
  function initCard(card) {
    if (initialized.has(card)) return;
    initialized.add(card);

    var slides = card.querySelector('.pc-slides');
    if (!slides) return;

    var slideEls = Array.from(card.querySelectorAll('.pc-slide'));
    var count = slideEls.length;
    if (count < 2) return;

    var dots = Array.from(card.querySelectorAll('.pc-dot'));
    var current = 0;

    function setActive(idx) {
      current = ((idx % count) + count) % count;
      slides.scrollTo({ left: current * slides.offsetWidth, behavior: 'smooth' });
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === current);
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function (e) {
        setActive(Number(e.currentTarget.dataset.idx));
      });
    });

    // Sync active dot on native scroll / swipe
    if (typeof IntersectionObserver !== 'undefined') {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var idx = slideEls.indexOf(entry.target);
            if (idx === -1) return;
            current = idx;
            dots.forEach(function (d, i) {
              d.classList.toggle('active', i === idx);
            });
          });
        },
        { root: slides, threshold: 0.6 },
      );
      slideEls.forEach(function (slide) {
        io.observe(slide);
      });
    }

    allSliders.push({ el: slides, count: count });
  }

  // ── Advance one item ───────────────────────────────────────────────────────
  function advanceItem(item) {
    var w = item.el.offsetWidth;
    if (!w) return;
    var curr = Math.round(item.el.scrollLeft / w);
    var next = (curr + 1) % item.count;

    // Snap to first slide instantly so the user never sees a long backward scroll
    if (next === 0) {
      item.el.scrollTo({ left: 0, behavior: 'instant' });
    } else {
      item.el.scrollTo({ left: next * w, behavior: 'smooth' });
    }

    var card = item.el.closest('.pc');
    if (!card) return;
    card.querySelectorAll('.pc-dot').forEach(function (d, i) {
      d.classList.toggle('active', i === next);
    });
  }

  // ── Rolling wave ───────────────────────────────────────────────────────────
  // Every STAGGER ms: advance the card at wavePos, move to the next.
  // wavePos is a real array index — adding new cards to the END of allSliders
  // does not disturb the current position, so new cards extend the wave
  // seamlessly without any jumps or resets.
  function waveTick() {
    // Prune cards removed from DOM (e.g. after grid re-render)
    var removed = false;
    allSliders = allSliders.filter(function (s) {
      var ok = document.body.contains(s.el);
      if (!ok) removed = true;
      return ok;
    });
    // Re-clamp index if the array shrank due to pruning
    if (removed && wavePos >= allSliders.length) wavePos = 0;

    if (allSliders.length > 0) {
      advanceItem(allSliders[wavePos]);
      wavePos = (wavePos + 1) % allSliders.length;
    }

    setTimeout(waveTick, STAGGER);
  }

  function startAutoAdvance() {
    if (autoStarted) return;
    autoStarted = true;
    setTimeout(waveTick, STAGGER); // first tick after one stagger interval
  }

  function initAll() {
    document.querySelectorAll('.pc[data-slider]').forEach(initCard);
  }

  // New cards revealed by VIEW MORE — push to end, wave continues
  document.addEventListener('aeg:portfolio-chunk-revealed', function () {
    document.querySelectorAll('#portfolio .pc[data-slider]').forEach(initCard);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initAll();
      startAutoAdvance();
    });
  } else {
    initAll();
    startAutoAdvance();
  }
})();
`,`// Mobile planet auto-cycle — rotates the is-mobile-focus highlight through
// all orbit spheres on mobile (≤768px), one planet per second, looping.
// CSS transitions (0.5s) on filter/transform handle the smooth crossfade.
// Runs immediately so a planet is already highlighted when the user scrolls
// to the planet section. Stops/resumes if the section leaves / enters view.
(function () {
  if (!window.matchMedia('(max-width: 768px)').matches) return;

  var spheres = [];
  var current = 0;
  var timerId = null;

  function gather() {
    spheres = Array.from(document.querySelectorAll('#peSecondRight .pe-orb-sphere'));
  }

  function clearFocus() {
    spheres.forEach(function (s) {
      s.classList.remove('is-mobile-focus');
    });
  }

  function next() {
    if (!spheres.length) return;
    clearFocus();
    spheres[current].classList.add('is-mobile-focus');
    current = (current + 1) % spheres.length;
  }

  function start() {
    if (timerId || !spheres.length) return;
    next();
    timerId = window.setInterval(next, 1000);
  }

  function stop() {
    if (timerId) {
      window.clearInterval(timerId);
      timerId = null;
    }
    clearFocus();
    current = 0;
  }

  gather();
  if (!spheres.length) return;

  var container = document.getElementById('peSecond');

  if (!container || typeof IntersectionObserver === 'undefined') {
    start();
    return;
  }

  var obs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          start();
        } else {
          stop();
        }
      });
    },
    { threshold: 0.05 },
  );

  obs.observe(container);
})();
`];hi.registerPlugin($),window.gsap=hi,window.ScrollTrigger=$;function Ll(e,t){if(document.getElementById(e))return;let n=document.createElement(`style`);n.id=e,n.textContent=t,document.head.appendChild(n)}async function Rl(){(await Nc()).forEach(([e,t])=>Ll(e,t))}function zl(){let e=()=>{Rl().catch(e=>{console.error(`[home] Failed to load deferred styles.`,e)})};`requestIdleCallback`in window?window.requestIdleCallback(e,{timeout:1200}):window.setTimeout(e,0)}function Bl(){jc.forEach(([e,t])=>Ll(e,t)),Mc.forEach(([e,t])=>Ll(e,t))}function Vl(e){if(!e)return;let t=window.AEG_DATA||Vc;Bl(),e.innerHTML=Fl(t),Rs(Il),zl()}Vl(document.querySelector(`#app`));