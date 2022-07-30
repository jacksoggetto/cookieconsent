/*!
* CookieConsent 3.0.0-rc.1
* https://github.com/orestbida/cookieconsent.git
* Author Orest Bida
* Released under the MIT License
*/
const e={mode:'opt-in',revision:0,autoShow:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},t={t:null,o:'',i:{},l:null,_:null,v:null,p:null,u:null,m:'',g:!0,h:!1,C:!1,k:!1,S:!1,M:!1,T:[],A:!1,N:!0,D:[],O:!1,B:'',J:!1,V:[],F:[],H:[],j:[],I:!1,P:!1,G:!1,U:[],L:[],R:[],q:{},K:{},W:{},X:{},Y:{},Z:[],$:[]},a={ee:0,te:0,ae:0,ne:0,re:0,oe:0,ie:0,ce:0,se:0,le:0,de:0,_e:0,ve:0,fe:0,pe:0,ue:0,me:0,ge:0,be:0,ye:0,he:0,we:0,Ce:0,ke:0,Se:0,xe:0,Me:0,Te:0,Ae:0,Ne:{},De:{}},n={Oe:0,Be:0,Je:0},r={Oe:'cc:onFirstConsent',Be:'cc:onConsent',Je:'cc:onChange'},o=e=>{const t={cookie:c.Ee._};function a(e){return'function'==typeof e}function n(e){return JSON.parse(JSON.stringify(e))}e===c.Ve.Oe&&a(c.Fe.Oe)&&c.Fe.Oe(n(t)),e===c.Ve.Be&&a(c.Fe.Be)&&c.Fe.Be(n(t)),e===c.Ve.Je&&(t.changedCategories=c.Ee.D,t.changedServices=c.Ee.X,a(c.Fe.Je)&&c.Fe.Je(n(t))),window.dispatchEvent(new CustomEvent(e,{detail:n(t)}))};function i(){function o(e){return JSON.parse(JSON.stringify(e))}return{He:!1,je:o(e),Ee:o(t),Ie:o(a),Fe:o(n),Ve:o(r)}}const c=i(),s=(e,t)=>-1!==e.indexOf(t),l=e=>{var t=document.createElement(e);return'button'===e&&d(t,'type',e),t},d=(e,t,a)=>{e.setAttribute(t,a)},_=(e,t)=>{e.appendChild(t)},v=(e,t,a,n)=>{e.addEventListener(t,a,!0===n&&{passive:!0})},f=e=>{if('object'==typeof e)return Object.keys(e)},p=(e,t)=>{e.classList.add(t)},u=(e,t)=>{e.classList.remove(t)},m=()=>{var e=c.je.cookie.expiresAfterDays;return'function'==typeof e?e(c.Ee.B):e},g=(e,t)=>e.filter((e=>!s(t,e))).concat(t.filter((t=>!s(e,t)))),b=e=>{var t='custom';return e.accepted.length===c.Ee.V.length?t='all':e.accepted.length===c.Ee.H.length&&(t='necessary'),t},y=()=>{c.Ee.B=b(w())},h=(e,t)=>{for(var a='accept-',n=l('show-preferencesModal'),r=l('show-consentModal'),o=l(a+'all'),i=l(a+'necessary'),c=l(a+'custom'),s=0;s<n.length;s++)d(n[s],'aria-haspopup','dialog'),v(n[s],'click',(e=>{e.preventDefault(),t.showPreferences()}));for(s=0;s<r.length;s++)d(r[s],'aria-haspopup','dialog'),v(r[s],'click',(e=>{e.preventDefault(),t.show(!0)}));for(s=0;s<o.length;s++)v(o[s],'click',(e=>{_(e,'all')}));for(s=0;s<c.length;s++)v(c[s],'click',(e=>{_(e)}));for(s=0;s<i.length;s++)v(i[s],'click',(e=>{_(e,[])}));function l(t){return(e||document).querySelectorAll('[data-cc="'+t+'"]')}function _(e,a){e.preventDefault(),t.acceptCategory(a),t.hidePreferences(),t.hide()}},w=()=>{var e=c.Ee.V.filter((e=>!s(c.Ee.F,e)));return{accepted:c.Ee.F,rejected:e}},C=()=>{var e=['[href]','button','input','details','[tabindex="0"]'];function t(t,a){var n=!1,r=!1;try{for(var o,i=t&&t.querySelectorAll(e.join(':not([tabindex="-1"]), ')),c=i.length,s=0;s<c;)o=i[s].getAttribute('data-focus'),r||'1'!==o?'0'===o&&(n=i[s],r||'0'===i[s+1].getAttribute('data-focus')||(r=i[s+1])):r=i[s],s++}catch(e){return[]}a[0]=i[0],a[1]=i[i.length-1],a[2]=n,a[3]=r}t(c.Ie.be,c.Ee.L),c.Ee.h&&t(c.Ie.oe,c.Ee.U)},k=e=>{var t=c.Ee.K;if(c.Ee.V.forEach((e=>{(c.Ee.X[e]||c.Ee.K[e]||[]).forEach((t=>{const a=c.Ee.q[e][t];!a.enabled&&s(c.Ee.K[e],t)&&'function'==typeof a.onAccept?(a.enabled=!0,a.onAccept()):a.enabled&&!s(c.Ee.K[e],t)&&'function'==typeof a.onAccept&&(a.enabled=!1,a.onReject())}))})),c.je.manageScriptTags){var a=c.Ee.Z,n=e||c.Ee._.categories||[],r=(e,a)=>{if(a<e.length){var o=e[a],i=c.Ee.$[a],_=i.Pe,v=i.Ge,f=s(n,_),p=!!v&&s(t[_],v);if(!i.Ue){var u=!i.Le&&f,m=!i.Le&&p,g=i.Le&&!f&&s(c.Ee.D,_),b=i.Le&&!p&&s(c.Ee.X[_]||[],v);if(u||g||m||b){i.Ue=!0,o.removeAttribute('type'),o.removeAttribute('data-category');var y=o.getAttribute('data-src');y&&o.removeAttribute('data-src');var h=l('script');if(h.textContent=o.innerHTML,((e,t)=>{for(var a=t.attributes,n=a.length,r=0;r<n;r++){var o=a[r].nodeName;d(e,o,t[o]||t.getAttribute(o))}})(h,o),y?h.src=y:y=o.src,y&&(h.onload=h.onerror=()=>{h.onload=h.onerror=null,r(e,++a)}),o.parentNode.replaceChild(h,o),y)return}}r(e,++a)}};r(a,0)}},S=e=>{var t=c.Ee.t.guiOptions,a=t&&t.consentModal,n=t&&t.preferencesModal;function r(e,t,a,n,r,o){var i=a&&a.layout,l=a&&a.position,d=a&&!0===a.flipButtons,_=a&&!1===a.equalWeightButtons,v=i&&i.split(' ')||[],f=l&&l.split(' ')||[],m=v[0],g=v[1],b=f[0],y='pm--'===n?f[0]:f[1],h=m,w=t[m];w||(w=t[r],h=r);var C=s(w.Re,g)&&g,k=s(w.qe,b)?b:w.ze,S=s(w.Ke,y)?y:w.Qe;e.className=o,p(e,n+h),C&&p(e,n+C),k&&p(e,n+k),S&&p(e,n+S),d&&p(e,n+'flip');var x='btn--secondary',M=o+'__';'cm'===o?(c.Ie.pe&&u(c.Ie.pe,M+x),c.Ie.ge&&u(c.Ie.ge,M+x),_&&(c.Ie.pe&&p(c.Ie.pe,M+x),c.Ie.ge&&p(c.Ie.ge,M+x))):(c.Ie.Te&&u(c.Ie.Te,M+x),_&&c.Ie.Te&&p(c.Ie.Te,M+x))}if(0===e&&c.Ee.h){var o=['middle','top','bottom'],i=['left','center','right'],l={box:{Re:['wide','inline'],qe:o,Ke:i,ze:'bottom',Qe:'right'},cloud:{Re:['inline'],qe:o,Ke:i,ze:'bottom',Qe:'center'},bar:{Re:['inline'],qe:o.slice(1),Ke:[],ze:'bottom',Qe:''}};r(c.Ie.oe,l,a,'cm--','box','cm')}1===e&&r(c.Ie.be,{box:{Re:[],qe:[],Ke:[],ze:'',Qe:''},bar:{Re:['wide'],qe:[],Ke:['left','right'],ze:'',Qe:'left'}},n,'pm--','box','pm')},x=e=>{var t=c.Ee.l&&c.Ee.l.consentModal;if(t){!0===c.Ee.t.disablePageInteraction&&p(c.Ie.te,'disable--interaction');var a=t.acceptAllBtn,n=t.acceptNecessaryBtn,r=t.showPreferencesBtn,o=t.closeIconLabel,i=t.footer;c.Ie.ne||(c.Ie.ne=l('div'),c.Ie.oe=l('div'),c.Ie.ie=l('div'),c.Ie.ce=l('div'),c.Ie.de=l('div'),p(c.Ie.ne,'cm-wrapper'),p(c.Ie.oe,'cm'),p(c.Ie.ie,'cm__body'),p(c.Ie.ce,'cm__texts'),p(c.Ie.de,'cm__btns'),d(c.Ie.oe,'role','dialog'),d(c.Ie.oe,'aria-modal','true'),d(c.Ie.oe,'aria-hidden','false'),d(c.Ie.oe,'aria-labelledby','cm__title'),d(c.Ie.oe,'aria-describedby','cm__desc'),c.Ie.oe.style.visibility='hidden',o&&(c.Ie.ge||(c.Ie.ge=l('button'),c.Ie.ge.className='cm__btn cm__btn--close',v(c.Ie.ge,'click',(()=>{e.hide(),e.acceptCategory([])})),_(c.Ie.ie,c.Ie.ge)),d(c.Ie.ge,'aria-label',o)),_(c.Ie.ie,c.Ie.ce),(a||n||r)&&_(c.Ie.ie,c.Ie.de),_(c.Ie.oe,c.Ie.ie),_(c.Ie.ne,c.Ie.oe),_(c.Ie.ae,c.Ie.ne));var s=t.title;s&&(c.Ie.se||(c.Ie.se=l('div'),c.Ie.se.className=c.Ie.se.id='cm__title',d(c.Ie.se,'role','heading'),d(c.Ie.se,'aria-level','2'),_(c.Ie.ce,c.Ie.se)),c.Ie.se.innerHTML=s);var f=t.description;if(f&&(c.Ee.A&&(f=f.replace('{{revisionMessage}}',c.Ee.N?'':t.revisionMessage||'')),c.Ie.le||(c.Ie.le=l('div'),c.Ie.le.className=c.Ie.le.id='cm__desc',_(c.Ie.ce,c.Ie.le)),c.Ie.le.innerHTML=f),a&&(c.Ie.fe||(c.Ie.fe=l('button'),p(c.Ie.fe,'cm__btn'),v(c.Ie.fe,'click',(()=>{e.hide(),e.acceptCategory('all')}))),c.Ie.fe.innerHTML=a),n&&(c.Ie.pe||(c.Ie.pe=l('button'),p(c.Ie.pe,'cm__btn'),v(c.Ie.pe,'click',(()=>{e.hide(),e.acceptCategory([])}))),c.Ie.pe.innerHTML=n),r&&(c.Ie.ue||(c.Ie.ue=l('button'),c.Ie.ue.className='cm__btn cm__btn--secondary',v(c.Ie.ue,'click',(()=>{e.showPreferences()}))),c.Ie.ue.innerHTML=r),!c.Ie.ve&&r&&(c.Ie.ve=l('div'),p(c.Ie.ve,'cm__btn-group'),_(c.Ie.ve,c.Ie.ue),_(c.Ie.de,c.Ie.ve)),c.Ie._e||(c.Ie._e=l('div'),p(c.Ie._e,'cm__btn-group'),n&&_(c.Ie._e,c.Ie.pe),a&&_(c.Ie._e,c.Ie.fe),(a||n)&&_(c.Ie.ie,c.Ie._e),_(c.Ie.de,c.Ie._e)),i){if(!c.Ie.me){var u=l('div'),m=l('div');c.Ie.me=l('div'),p(u,'cm__footer'),p(m,'cm__links'),p(c.Ie.me,'cm__link-group'),_(m,c.Ie.me),_(u,m),_(c.Ie.oe,u)}c.Ie.me.innerHTML=i}c.Ee.h=!0,S(0)}},M=e=>{var t=c.Ee.l&&c.Ee.l.preferencesModal;if(t){var a=t.title,n=t.closeIconLabel,r=t.acceptAllBtn,o=t.acceptNecessaryBtn,i=t.savePreferencesBtn,s=t.sections;if(c.Ie.re)c.Ie.ke=l('div'),p(c.Ie.ke,'pm__body');else{c.Ie.re=l('div'),p(c.Ie.re,'pm-wrapper'),c.Ie.be=l('div'),c.Ie.be.style.visibility='hidden',p(c.Ie.be,'pm'),d(c.Ie.be,'role','dialog'),d(c.Ie.be,'aria-hidden',!0),d(c.Ie.be,'aria-modal',!0),v(c.Ie.te,'keydown',(t=>{27===t.keyCode&&e.hidePreferences()}),!0),c.Ie.ye=l('div'),p(c.Ie.ye,'pm__header'),c.Ie.he=l('div'),p(c.Ie.he,'pm__title'),d(c.Ie.he,'role','heading'),c.Ie.we=l('button'),p(c.Ie.we,'pm__close-btn'),d(c.Ie.we,'aria-label',t.closeIconLabel||''),v(c.Ie.we,'click',(()=>{e.hidePreferences()})),c.Ie.Ce=l('div'),p(c.Ie.Ce,'pm__body'),c.Ie.xe=l('div'),p(c.Ie.xe,'pm__footer');var m=l('div');p(m,'pm__btns');var g=l('div'),b=l('div');p(g,'pm__btn-group'),p(b,'pm__btn-group'),_(c.Ie.xe,b),_(c.Ie.xe,g),_(c.Ie.ye,c.Ie.he),_(c.Ie.ye,c.Ie.we),_(c.Ie.be,c.Ie.ye),_(c.Ie.be,c.Ie.Ce),_(c.Ie.be,c.Ie.xe),_(c.Ie.re,c.Ie.be),_(c.Ie.ae,c.Ie.re)}a&&(c.Ie.he.innerHTML=a,n&&d(c.Ie.we,'aria-label',n)),s&&s.forEach((e=>{var a=e.title,n=e.description,r=e.linkedCategory,o=r&&c.Ee.J[r],i=e.cookieTable,s=i&&i.body,m=s&&s.length>0,g=!!o,b=g&&c.Ee.q[r]||!1,y=b&&f(b)||[],h=g&&(!!n||!!m||f(b).length>0),w=l('div');if(p(w,'pm__section'),h||n){var C=l('div');p(C,'pm__section-desc-wrapper')}if(h&&y.length>0){var k=l('div');p(k,'pm__section-services'),y.forEach((e=>{var t=b[e].label||e,a=l('div'),n=l('div'),i=l('div'),c=l('span'),s=l('div');p(a,'pm__service'),p(s,'pm__service-title'),p(c,'gg-code-slash'),p(n,'pm__service-header'),p(i,'pm__service-icon');var d=T(t,e,o,0,!0,r);s.innerHTML=t,_(i,c),_(n,i),_(n,s),_(a,n),_(a,d),_(k,a)})),_(C,k)}if(a){var S=l('div'),x=l(g?'button':'div');if(p(S,'pm__section-title-wrapper'),p(x,'pm__section-title'),x.innerHTML=a,_(S,x),g){w.className+='--toggle';var M=T(a,r,o);if(y.length>0){var A=l('span');p(A,'pm__service-counter'),d(A,'aria-hidden',!0),d(A,'data-servicecounter',y.length);var N=t.serviceCounterLabel;N&&'string'==typeof N&&d(A,'data-counterlabel',N),_(x,A)}if(h){p(w,'pm__section--expandable');var D=r+'-desc';d(x,'aria-expanded',!1),d(x,'aria-controls',D)}_(S,M)}else d(x,'role','heading'),d(x,'aria-level','3');_(w,S)}if(n){var O=l('div');p(O,'pm__section-desc'),O.innerHTML=n,_(C,O)}if(h&&(d(C,'aria-hidden','true'),C.id=D,((e,t,a)=>{v(x,'click',(()=>{t.classList.contains('is-expanded')?(u(t,'is-expanded'),d(a,'aria-expanded','false'),d(e,'aria-hidden','true')):(p(t,'is-expanded'),d(a,'aria-expanded','true'),d(e,'aria-hidden','false'))}),!1)})(C,w,x),m)){var B=l('table'),J=l('thead'),E=l('tbody');p(B,'pm__section-table'),p(J,'pm__table-head'),p(E,'pm__table-body');var V=i.headers,F=f(V),H=c.Ie.ee.createDocumentFragment(),j=l('tr');d(j,'role','row');for(var I=0;I<F.length;I++){var P=V[F[I]],G=l('th');G.id='cc__row-'+P,d(G,'role','columnheader'),d(G,'scope','col'),p(G,'pm__table-th'),G.innerHTML=P,_(H,G)}_(j,H),_(J,j);var U=c.Ie.ee.createDocumentFragment();for(I=0;I<s.length;I++){var L=s[I],R=l('tr');d(R,'role','row'),p(R,'pm__table-tr');for(var q=0;q<F.length;q++){var z=F[q],K=V[z],Q=L[z],W=l('td'),X=l('div');p(W,'pm__table-td'),d(W,'data-column',K),d(W,'headers','cc__row-'+K),X.insertAdjacentHTML('beforeend',Q),_(W,X),_(R,W)}_(U,R)}_(E,U),_(B,J),_(B,E),_(C,B)}(h||n)&&_(w,C),_(c.Ie.Ce,w),c.Ie.ke?_(c.Ie.ke,w):_(c.Ie.Ce,w)})),(r||o)&&(o&&(c.Ie.Te||(c.Ie.Te=l('button'),p(c.Ie.Te,'pm__btn'),_(g,c.Ie.Te),v(c.Ie.Te,'click',(()=>{y([])}))),c.Ie.Te.innerHTML=o),r&&(c.Ie.Me||(c.Ie.Me=l('button'),p(c.Ie.Me,'pm__btn'),_(g,c.Ie.Me),v(c.Ie.Me,'click',(()=>{y('all')}))),c.Ie.Me.innerHTML=r)),i&&(c.Ie.Ae||(c.Ie.Ae=l('button'),c.Ie.Ae.className='pm__btn pm__btn--secondary',_(b,c.Ie.Ae),v(c.Ie.Ae,'click',(()=>{y()}))),c.Ie.Ae.innerHTML=i),c.Ie.ke&&(c.Ie.be.replaceChild(c.Ie.ke,c.Ie.Ce),c.Ie.Ce=c.Ie.ke),S(1)}function y(t){e.acceptCategory(t),e.hidePreferences(),e.hide()}};function T(e,t,a,n,r,o){var i=l('label'),f=l('input'),u=l('span'),m=l('span'),g=l('span'),b=l('span');if(f.type='checkbox',p(i,'section__toggle-wrapper'),p(f,'section__toggle'),p(g,'toggle__icon-on'),p(b,'toggle__icon-off'),p(u,'toggle__icon'),p(m,'toggle__label'),d(u,'aria-hidden','true'),r?(p(i,'toggle-service'),p(f,'toggle-service'),d(f,'data-category',o),c.Ie.De[o][t]=f):c.Ie.Ne[t]=f,r?(e=>{v(f,'change',(()=>{var t=c.Ie.De[e],a=c.Ie.Ne[e];for(var n in c.Ee.W[e]=[],t){const a=t[n];a.checked&&c.Ee.W[e].push(a.value)}c.Ee.W[e].length>0?a.checked=!0:a.checked=!1}))})(o):(e=>{v(f,'click',(()=>{var t=c.Ie.De[e];if(c.Ee.W[e]=[],f.checked)for(var a in t)t[a].checked=!0;else for(a in t)t[a].checked=!1}))})(t),f.value=t,m.textContent=e,_(u,b),_(u,g),c.Ee.g)(a.enabled||a.readOnly)&&(f.checked=!0);else if(r){var y=c.Ee.K[o];y&&s(y,t)&&(f.checked=!0)}else s(c.Ee._.categories,t)&&(f.checked=!0);return a.readOnly&&(f.disabled=!0),_(i,f),_(i,u),_(i,m),i}const A=e=>{var t=f(c.Ee.i);return s(t,e)?e:s(t,c.Ee.o)?c.Ee.o:t[0]},N=async e=>{let t=c.Ee.o;if(e&&(t=A(e)),c.Ee.l=c.Ee.i[t],!c.Ee.l)return!1;if('string'==typeof c.Ee.l){const e=await(async e=>{try{const t=await fetch(e,{method:'GET'});return!!t.ok&&await t.json()}catch(e){return!1}})(c.Ee.l);if(!e)return!1;c.Ee.l=e,c.Ee.i[t]=e}else c.Ee.l=c.Ee.i[t];return c.Ee.o=t,!0},D=e=>{var t=c.je.cookie.domain;c.Ee.O=!1;var a=V(),n=[t,'.'+t];if('www.'===t.slice(0,4)){var r=t.substring(4);n.push(r,'.'+r)}var o,i=e?c.Ee.V:c.Ee.D;i=i.filter((e=>{var t=c.Ee.J[e];return!!t&&!t.readOnly&&!!t.autoClear}));for(var l=0;l<i.length;l++){var d=i[l],_=c.Ee.J[d].autoClear,v=_&&_.cookies||[],f=s(c.Ee.D,d),p=!s(c.Ee.F,d),u=f&&p;if(e&&p||!e&&u){var m=v.length;!0===_.reloadPage&&u&&(c.Ee.O=!0);for(var g=0;g<m;g++){var b=[],y=v[g].name,h=!!y&&'string'!=typeof y,w=v[g].domain||null,C=v[g].path||!1;if(w&&(n=[w,'.'+w]),h)for(var k=0;k<a.length;k++)y.test(a[k])&&b.push(a[k]);else{var S=(o=y,a.indexOf(o));S>-1&&b.push(a[S])}b.length>0&&J(b,C,n)}}}},O=(e,t,a)=>{var n,r=encodeURIComponent(t),o=a?(n=c.Ee.u?new Date-c.Ee.u:0,864e5*m()-n):864e5*m(),i=new Date;i.setTime(i.getTime()+o);var l=e+'='+(r||'')+(0!==o?'; expires='+i.toUTCString():'')+'; Path='+c.je.cookie.path+';';l+=' SameSite='+c.je.cookie.sameSite+';',s(window.location.hostname,'.')&&(l+=' Domain='+c.je.cookie.domain+';'),'https:'===window.location.protocol&&(l+=' Secure;'),document.cookie=l,JSON.parse(decodeURIComponent(r))},B=e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t},J=(e,t,a)=>{for(var n=t||c.je.cookie.path,r=0;r<e.length;r++){for(var o=0;o<a.length;o++)document.cookie=e[r]+'=; path='+n+(s(a[o],'.')?'; domain='+a[o]:'')+'; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';e[r]}},E=(e,t)=>{let a=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return a=a?t?a.pop():e:'',a},V=e=>{const t=document.cookie.split(/;\s*/);let a=[];for(var n=0;n<t.length;n++){let r=t[n].split('=')[0];if(e)try{e.test(r)&&a.push(r)}catch(e){}else a.push(r)}return a},F=()=>{c.je.cookie.domain=window.location.hostname,c.Ie.ee=document,c.Ie.te=c.Ie.ee.documentElement},H={acceptCategory:(e,t)=>{var a=e||void 0,n=t||[],r=!1,i=[];if(a)if('object'==typeof a&&'number'==typeof a.length)for(var l=0;l<a.length;l++)s(c.Ee.V,a[l])&&i.push(a[l]);else'string'==typeof a&&('all'===a?i=c.Ee.V.slice():s(c.Ee.V,a)&&i.push(a));else i=(()=>{var e=c.Ie.Ne,t=[];for(var a in e)e[a].checked&&t.push(e[a].value);return t})(),r=!0;if(n.length>=1)for(l=0;l<n.length;l++)i=i.filter((e=>e!==n[l]));for(l=0;l<c.Ee.H.length;l++)s(i,c.Ee.H[l])||i.push(c.Ee.H[l]);c.Ee.F=i,y(),r||(c.Ee.W={}),c.Ee.Y=JSON.parse(JSON.stringify(c.Ee.K)),c.Ee.V.forEach((e=>{var t=c.Ie.De[e];if(0===f(t).length)return;const a=c.Ee.q[e],n=f(a);if(c.Ee.K[e]=[],s(c.Ee.H,e))n.forEach((t=>{c.Ee.K[e].push(t)}));else if('all'===c.Ee.B)r&&c.Ee.W[e]&&c.Ee.W[e].length>0?c.Ee.W[e].forEach((t=>{c.Ee.K[e].push(t)})):n.forEach((t=>{c.Ee.K[e].push(t)}));else if('necessary'===c.Ee.B)c.Ee.K[e]=[];else if(r&&c.Ee.W[e]&&c.Ee.W[e].length>0)c.Ee.W[e].forEach((t=>{c.Ee.K[e].push(t)}));else for(let a in t){const n=t[a];n.checked&&c.Ee.K[e].push(n.value)}})),(()=>{'opt-out'===c.je.mode&&c.Ee.g?c.Ee.D=g(c.Ee.j,c.Ee.F):c.Ee.D=g(c.Ee.F,c.Ee._.categories||[]);var e=c.Ee.D.length>0,t=!1;c.Ee.V.forEach((e=>{c.Ee.X[e]=g(c.Ee.K[e]||[],c.Ee.Y[e]||[]),c.Ee.X[e].length>0&&(t=!0)}));var a=c.Ie.Ne;for(var n in a)s(c.Ee.F,n)?a[n].checked=!0:a[n].checked=!1;c.Ee.V.forEach((e=>{var t=c.Ie.De[e],a=c.Ee.K[e];for(var n in t){const e=t[n];s(a,n)?e.checked=!0:e.checked=!1}})),!c.Ee.g&&c.je.autoClearCookies&&e&&D(),c.Ee.p||(c.Ee.p=new Date),c.Ee.m||(c.Ee.m=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^(window.crypto||window.msCrypto).getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),c.Ee._={categories:JSON.parse(JSON.stringify(c.Ee.F)),revision:c.je.revision,data:c.Ee.v,consentTimestamp:c.Ee.p.toISOString(),consentId:c.Ee.m,services:JSON.parse(JSON.stringify(c.Ee.K))};var r=!1;(c.Ee.g||e||t)&&(c.Ee.g&&(c.Ee.g=!1,r=!0),y(),c.Ee.u?c.Ee.u=new Date:c.Ee.u=c.Ee.p,c.Ee._.lastConsentTimestamp=c.Ee.u.toISOString(),O(c.je.cookie.name,JSON.stringify(c.Ee._)),k()),r&&(c.je.autoClearCookies&&D(!0),o(c.Ve.Oe),o(c.Ve.Be),'opt-in'===c.je.mode)||((e||t)&&o(c.Ve.Je),c.Ee.O&&window.location.reload())})()},acceptService:(e,t)=>{if(!e||!t||'string'!=typeof t||!s(c.Ee.V,t))return!1;const a=c.Ie.De[t]||{};if(c.Ee.W[t]=[],'string'==typeof e)if('all'===e)for(var n in a)a[n].checked=!0,r(a[n]);else for(n in a)a[n].checked=e===n,r(a[n]);else if('object'==typeof e&&Array.isArray(e))for(n in a)s(e,n)?a[n].checked=!0:a[n].checked=!1,r(a[n]);function r(e){e.dispatchEvent(new Event('change'))}H.acceptCategory()},validCookie:e=>''!==E(e,!0),eraseCookies:(e,t,a)=>{var n=[],r=c.je.cookie.domain,o=a?[a,'.'+a]:[r,'.'+r];if(Array.isArray(e))for(var i=0;i<e.length;i++)s(e[i]);else s(e);function s(e){if('string'==typeof e){let t=E(e);''!==t&&n.push(t)}else n=n.concat(V(e))}J(n,t,o)},setLanguage:async(e,t)=>{var a=A(e);return!(e!==a||a===c.Ee.o&&!0!==t||!await N(a)||(c.Ee.o=a,c.Ee.h&&(x(H),h(c.Ie.We,H)),M(H),0))},getUserPreferences:()=>{var e,t=!c.Ee.g&&w();return{acceptType:c.Ee.B,acceptedCategories:c.Ee.g?[]:t.accepted,rejectedCategories:c.Ee.g?[]:t.rejected,acceptedServices:c.Ee.g?{}:c.Ee.K,rejectedServices:c.Ee.g?{}:(e={},c.Ee.V.forEach((t=>{e[t]=g(c.Ee.K[t]||[],f(c.Ee.q[t])||[])})),e)}},loadScript:(e,t)=>{let a=document.querySelector('script[src="'+e+'"]');return new Promise(((n,r)=>{if(a)return n(!0);a=l('script'),Array.isArray(t)&&t.forEach((e=>{d(a,e.name,e.value)})),a.onload=()=>n(!0),a.onerror=()=>{a.remove(),r(!1)},a.src=e,_(document.head,a)}))},setCookieData:e=>{var t=e.value,a=!1;if('update'===e.mode){c.Ee.v=H.getCookie('data');var n=typeof c.Ee.v==typeof t;if(n&&'object'==typeof c.Ee.v)for(var r in!c.Ee.v&&(c.Ee.v={}),t)c.Ee.v[r]!==t[r]&&(c.Ee.v[r]=t[r],a=!0);else!n&&c.Ee.v||c.Ee.v===t||(c.Ee.v=t,a=!0)}else c.Ee.v=t,a=!0;return a&&(c.Ee._.data=c.Ee.v,O(c.je.cookie.name,JSON.stringify(c.Ee._),!0)),a},getCookie:(e,t)=>{var a=B(E(t||c.je.cookie.name,!0));return e?a[e]:a},getConfig:e=>e?c.je[e]||c.Ee.t[e]:{...c.je,...c.Ee.t,cookie:{...c.je.cookie}},show:e=>{c.He&&(e&&!c.Ee.h&&(x(H),C(),h(c.Ie.oe,H)),c.Ee.h&&(p(c.Ie.te,'show--consent'),d(c.Ie.oe,'aria-hidden','false'),c.Ee.C=!0,setTimeout((()=>{c.Ee.P=c.Ie.ee.activeElement,c.Ee.T=c.Ee.U}),200)))},hide:()=>{c.Ee.h&&(u(c.Ie.te,'show--consent'),d(c.Ie.oe,'aria-hidden','true'),c.Ee.C=!1,setTimeout((()=>{c.Ee.P.focus(),c.Ee.T=null}),200))},hidePreferences:()=>{c.He&&(u(c.Ie.te,'show--preferences'),c.Ee.k=!1,d(c.Ie.be,'aria-hidden','true'),setTimeout((()=>{c.Ee.M=!1}),1),c.Ee.C?(c.Ee.G&&c.Ee.G.focus(),c.Ee.T=c.Ee.U):(c.Ee.P&&c.Ee.P.focus(),c.Ee.T=null),c.Ee.S=!1)},acceptedCategory:e=>{var t;return t=c.Ee.g&&'opt-in'!==c.je.mode?c.Ee.j:w().accepted||[],s(t,e)},acceptedService:(e,t)=>s(c.Ee.K[t]||[],e),showPreferences:()=>{c.He&&(p(c.Ie.te,'show--preferences'),d(c.Ie.be,'aria-hidden','false'),c.Ee.k=!0,setTimeout((()=>{c.Ee.M=!0}),1),setTimeout((()=>{c.Ee.C?c.Ee.G=c.Ie.ee.activeElement:c.Ee.P=c.Ie.ee.activeElement,0!==c.Ee.L.length&&(c.Ee.L[3]?c.Ee.L[3].focus():c.Ee.L[0].focus(),c.Ee.T=c.Ee.L)}),200))},validConsent:()=>!c.Ee.g,run:async e=>{if(!c.Ie.ae){if((e=>{F(),c.He=!0,c.Ee.t=e,c.Ee.i=e.language.translations,c.Ee.J=c.Ee.t.categories,'boolean'==typeof e.autoShow&&(c.je.autoShow=e.autoShow);var t=e.cookie;if(t&&'object'==typeof t){var a=t.name,n=t.domain,r=t.path,o=t.sameSite,i=t.expiresAfterDays;a&&(c.je.cookie.name=a),n&&(c.je.cookie.domain=n),r&&(c.je.cookie.path=r),o&&(c.je.cookie.sameSite=o),i&&(c.je.cookie.expiresAfterDays=i)}c.Fe.Oe=e.onFirstConsent,c.Fe.Be=e.onConsent,c.Fe.Je=e.onChange;var l=e.mode,d=e.revision,_=e.autoClearCookies,v=e.manageScriptTags,p=e.hideFromBots;'opt-out'===l&&(c.je.mode=l),'number'==typeof d&&(d>-1&&(c.je.revision=d),c.Ee.A=!0),'boolean'==typeof _&&(c.je.autoClearCookies=_),'boolean'==typeof v&&(c.je.manageScriptTags=v),!1===p&&(c.je.hideFromBots=!1),!0===c.je.hideFromBots&&(c.Ee.I=navigator&&(navigator.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent)||navigator.webdriver)),c.je.autoClearCookies,c.Ee.A,c.je.manageScriptTags;var u=c.Ee.t.language.default;u&&(c.Ee.o=u),c.Ee.o=function(){var e,t=c.Ee.t.language.autoDetect;if(t){if('browser'===t)return A(((e=navigator.language||navigator.browserLanguage).length>2&&(e=e[0]+e[1]),e.toLowerCase()));if('document'===t)return A(c.Ie.ee.documentElement.lang)}return A(c.Ee.t.language.default)}(),c.Ee.l=c.Ee.i[c.Ee.o],c.Ee.o,c.Ee.V=f(c.Ee.J),c.Ee.V.forEach((e=>{const t=c.Ee.J[e].services||{},a=t&&!!(n=t)&&'object'==typeof n&&!Array.isArray(n)&&f(t)||[];var n;c.Ee.q[e]={},c.Ee.K[e]=[],c.Ie.De[e]={},0!==a.length&&a.forEach((a=>{const n=t[a];n.enabled=!1,c.Ee.q[e][a]=n}))}));for(var m=0;m<c.Ee.V.length;m++)!0===c.Ee.J[c.Ee.V[m]].readOnly&&c.Ee.H.push(c.Ee.V[m]);c.je.manageScriptTags&&(c.Ee.Z=c.Ie.ee.querySelectorAll('script[data-category]'),c.Ee.$=[],c.Ee.Z.forEach((e=>{let t=e.getAttribute('data-category')||'',a=e.dataset.service||'',n=!1;if('!'===t.charAt(0)&&(t=t.slice(1),n=!0),'!'===a.charAt(0)&&(a=a.slice(1),n=!0),s(c.Ee.V,t)&&(c.Ee.$.push({Ue:!1,Le:n,Pe:t,Ge:a}),a)){const e=c.Ee.q[t];e[a]||(e[a]={enabled:!1})}})))})(e),c.Ee.I)return;c.Ee._=B(E(c.je.cookie.name,!0)),c.Ee.m=c.Ee._.consentId;var t=void 0!==c.Ee.m;c.Ee.p=c.Ee._.consentTimestamp,c.Ee.p&&(c.Ee.p=new Date(c.Ee.p)),c.Ee.u=c.Ee._.lastConsentTimestamp,c.Ee.u&&(c.Ee.u=new Date(c.Ee.u));var a=c.Ee._.data;if(c.Ee.v=void 0!==a?a:null,c.Ee.A&&t&&c.Ee._.revision!==c.je.revision&&(c.Ee.N=!1),c.Ee.h=c.Ee.g=!(t&&c.Ee.N&&c.Ee.p&&c.Ee.u&&c.Ee.m),c.Ee.g,c.Ee.g?'opt-out'===c.je.mode&&c.Ee.V.forEach((e=>{if(c.Ee.J[e].enabled){c.Ee.j.push(e);const a=c.Ee.q[e]||{};for(var t in a)c.Ee.K[e].push(t)}})):(c.Ee.F=c.Ee._.categories,c.Ee.B=b(w()),c.Ee.K=c.Ee._.services||{}),!await N(null))return;(e=>{c.Ie.ae||(c.Ie.ae=l('div'),c.Ie.ae.id='cc-main',c.Ie.ae.style.position='fixed',c.Ie.ae.style.zIndex='1000000',c.Ee.h&&x(e),M(e),_(c.Ee.t.root||c.Ie.ee.body,c.Ie.ae))})(H),C(),h(null,H),c.je.autoShow&&c.Ee.h&&H.show(),setTimeout((()=>{p(c.Ie.ae,'c--anim')}),100),(e=>{var t=!1,a=!1;v(c.Ie.te,'keydown',(e=>{'Tab'===e.key&&(c.Ee.T&&(e.shiftKey?c.Ie.ee.activeElement===c.Ee.T[0]&&(c.Ee.T[1].focus(),e.preventDefault()):c.Ie.ee.activeElement===c.Ee.T[1]&&(c.Ee.T[0].focus(),e.preventDefault()),a||c.Ee.S||(a=!0,!t&&e.preventDefault(),e.shiftKey?c.Ee.T[3]?c.Ee.T[2]?c.Ee.T[2].focus():c.Ee.T[0].focus():c.Ee.T[1].focus():c.Ee.T[3]?c.Ee.T[3].focus():c.Ee.T[0].focus())),!a&&(t=!0))})),v(c.Ie.ae,'click',(t=>{c.Ee.M?c.Ie.be.contains(t.target)?c.Ee.S=!0:(e.hidePreferences(0),c.Ee.S=!1):c.Ee.C&&c.Ie.oe.contains(t.target)&&(c.Ee.S=!0)}),!0)})(H),c.Ee.g?'opt-out'===c.je.mode&&(c.je.mode,c.Ee.j,k(c.Ee.j)):(k(),o(c.Ve.Be))}},reset:e=>{if(!c.He)return;c.He=!1,!0===e&&H.eraseCookies(c.je.cookie.name,c.je.cookie.path,c.je.cookie.domain),c.Ie.ae&&c.Ie.ae.remove(),u(c.Ie.te,'disable--interaction'),u(c.Ie.te,'show--preferences'),u(c.Ie.te,'show--consent');const t=i();c.Ee=t.Ee,c.Ie=t.Ie,c.je=t.je,c.Fe=t.Fe,c.Ve=t.Ve}};var j={init:()=>(F(),H)};export{j as default};
