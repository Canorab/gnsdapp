import{h as z,y as K}from"./proxy-compare-DDw08AJZ.js";import"./react-eX7k_oyb.js";var V={VITE_SIGNUP_BASE_URL:"https://www.app.gtxstream.com/signup",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const D=r=>typeof r=="object"&&r!==null,P=new WeakMap,L=new WeakSet,N=(r=Object.is,d=(t,y)=>new Proxy(t,y),l=t=>D(t)&&!L.has(t)&&(Array.isArray(t)||!(Symbol.iterator in t))&&!(t instanceof WeakMap)&&!(t instanceof WeakSet)&&!(t instanceof Error)&&!(t instanceof Number)&&!(t instanceof Date)&&!(t instanceof String)&&!(t instanceof RegExp)&&!(t instanceof ArrayBuffer),w=t=>{switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:throw t}},c=new WeakMap,i=(t,y,p=w)=>{const a=c.get(t);if((a==null?void 0:a[0])===y)return a[1];const u=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t));return z(u,!0),c.set(t,[y,u]),Reflect.ownKeys(t).forEach(R=>{if(Object.getOwnPropertyDescriptor(u,R))return;const b=Reflect.get(t,R),m={value:b,enumerable:!0,configurable:!0};if(L.has(b))z(b,!1);else if(b instanceof Promise)delete m.value,m.get=()=>p(b);else if(P.has(b)){const[f,v]=P.get(b);m.value=i(f,v(),p)}Object.defineProperty(u,R,m)}),Object.preventExtensions(u)},g=new WeakMap,h=[1,1],_=t=>{if(!D(t))throw new Error("object required");const y=g.get(t);if(y)return y;let p=h[0];const a=new Set,u=(n,s=++h[0])=>{p!==s&&(p=s,a.forEach(e=>e(n,s)))};let R=h[1];const b=(n=++h[1])=>(R!==n&&!a.size&&(R=n,f.forEach(([s])=>{const e=s[1](n);e>p&&(p=e)})),p),m=n=>(s,e)=>{const o=[...s];o[1]=[n,...o[1]],u(o,e)},f=new Map,v=(n,s)=>{if((V?"production":void 0)!=="production"&&f.has(n))throw new Error("prop listener already exists");if(a.size){const e=s[3](m(n));f.set(n,[s,e])}else f.set(n,[s])},W=n=>{var s;const e=f.get(n);e&&(f.delete(n),(s=e[1])==null||s.call(e))},U=n=>(a.add(n),a.size===1&&f.forEach(([e,o],S)=>{if((V?"production":void 0)!=="production"&&o)throw new Error("remove already exists");const O=e[3](m(S));f.set(S,[e,O])}),()=>{a.delete(n),a.size===0&&f.forEach(([e,o],S)=>{o&&(o(),f.set(S,[e]))})}),M=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t)),A=d(M,{deleteProperty(n,s){const e=Reflect.get(n,s);W(s);const o=Reflect.deleteProperty(n,s);return o&&u(["delete",[s],e]),o},set(n,s,e,o){const S=Reflect.has(n,s),O=Reflect.get(n,s,o);if(S&&(r(O,e)||g.has(e)&&r(O,g.get(e))))return!0;W(s),D(e)&&(e=K(e)||e);let j=e;if(e instanceof Promise)e.then(E=>{e.status="fulfilled",e.value=E,u(["resolve",[s],E])}).catch(E=>{e.status="rejected",e.reason=E,u(["reject",[s],E])});else{!P.has(e)&&l(e)&&(j=_(e));const E=!L.has(j)&&P.get(j);E&&v(s,E)}return Reflect.set(n,s,j,o),u(["set",[s],e,O]),!0}});g.set(t,A);const B=[M,b,i,U];return P.set(A,B),Reflect.ownKeys(t).forEach(n=>{const s=Object.getOwnPropertyDescriptor(t,n);"value"in s&&(A[n]=t[n],delete s.value,delete s.writable),Object.defineProperty(M,n,s)}),A})=>[_,P,L,r,d,l,w,c,i,g,h],[q]=N();function J(r={}){return q(r)}function F(r,d,l){const w=P.get(r);(V?"production":void 0)!=="production"&&!w&&console.warn("Please use proxy object");let c;const i=[],g=w[3];let h=!1;const t=g(y=>{if(i.push(y),l){d(i.splice(0));return}c||(c=Promise.resolve().then(()=>{c=void 0,h&&d(i.splice(0))}))});return h=!0,()=>{h=!1,t()}}function Q(r,d){const l=P.get(r);(V?"production":void 0)!=="production"&&!l&&console.warn("Please use proxy object");const[w,c,i]=l;return i(w,c(),d)}function X(r){return L.add(r),r}function Y(r,d,l,w){let c=r[d];return F(r,()=>{const i=r[d];Object.is(c,i)||l(c=i)},w)}export{Q as a,Y as b,J as p,X as r,F as s};