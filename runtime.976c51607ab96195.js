(()=>{"use strict";var e,v={},m={};function a(e){var c=m[e];if(void 0!==c)return c.exports;var f=m[e]={exports:{}};return v[e](f,f.exports,a),f.exports}a.m=v,e=[],a.O=(c,f,t,n)=>{if(!f){var d=1/0;for(r=0;r<e.length;r++){for(var[f,t,n]=e[r],u=!0,b=0;b<f.length;b++)(!1&n||d>=n)&&Object.keys(a.O).every(p=>a.O[p](f[b]))?f.splice(b--,1):(u=!1,n<d&&(d=n));if(u){e.splice(r--,1);var o=t();void 0!==o&&(c=o)}}return c}n=n||0;for(var r=e.length;r>0&&e[r-1][2]>n;r--)e[r]=e[r-1];e[r]=[f,t,n]},a.d=(e,c)=>{for(var f in c)a.o(c,f)&&!a.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:c[f]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((c,f)=>(a.f[f](e,c),c),[])),a.u=e=>(8592===e?"common":e)+"."+{74:"bcac889decd06228",132:"ccaa0b3e5eff579b",348:"6ed6378945534bdd",744:"8b461ad812c146c9",831:"1aeec5889a6a9c8f",1109:"d22b781e2df171c5",1358:"6dd39e3ffda0ff26",2043:"f4467b51d406055b",2231:"408ca9644e2f5f7b",2339:"cafb5750af5d9995",2372:"d36d9d37176f7274",2470:"710a414eb1b44db9",2773:"6a2e8deaafed327f",2803:"397e2a5cd8aea6d8",3026:"ee14953eb2ee023d",3284:"f635625be7d93ec7",3514:"d4690f1d6b6ee620",3611:"c99c6938698b6057",3722:"4771929369a498fa",3794:"3c85d1a86e60f166",3870:"71641830bf7e6fe4",4055:"2917a91f0f55bf65",4229:"2a47f480d48af0d6",4572:"8298297862dfe2b5",4844:"e9105e29736fc7f6",5118:"10734af22b2882df",5186:"f056782c099d373b",5373:"87733b0239badf34",5602:"10434b90499c1245",5938:"f091a11357b71607",6022:"691c0484080a6718",6091:"acc94f91aaa22d36",6324:"fed649f6ea17aec7",6426:"254bdc52d948d94f",6903:"fc2e821effd3f3a0",6942:"60582e8cd9fa017f",7327:"d2df5edd35b8fe3b",7493:"0cad042ecc1844be",7878:"8bae40028c51a18c",8052:"4e6f5fd2012fd58a",8062:"c90a9a7045ee0ab1",8096:"4d297de31d8c000a",8336:"547872ceaf77c2df",8409:"da0e33689f56af8a",8483:"05562e39e8a16da9",8494:"f0f167ba701fcd4f",8520:"92fdf5b31e307341",8592:"fc1ad23e0c692fe9",8681:"6e5a7b228de94e0e",8761:"528287d64db2ce18",9059:"36390a87b01ae48f",9135:"190a57f0ad50416e",9192:"7d5b5549526b4a7b",9252:"3a19fabf58cf650c",9552:"fbfc45e93032dcfe",9626:"bd884e341b09254c",9683:"134985881b07909d",9768:"8b7f44118bec4167"}[e]+".js",a.miniCssF=e=>{},a.o=(e,c)=>Object.prototype.hasOwnProperty.call(e,c),(()=>{var e={},c="sakai-ng:";a.l=(f,t,n,r)=>{if(e[f])e[f].push(t);else{var d,u;if(void 0!==n)for(var b=document.getElementsByTagName("script"),o=0;o<b.length;o++){var i=b[o];if(i.getAttribute("src")==f||i.getAttribute("data-webpack")==c+n){d=i;break}}d||(u=!0,(d=document.createElement("script")).type="module",d.charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.setAttribute("data-webpack",c+n),d.src=a.tu(f)),e[f]=[t];var l=(g,p)=>{d.onerror=d.onload=null,clearTimeout(s);var _=e[f];if(delete e[f],d.parentNode&&d.parentNode.removeChild(d),_&&_.forEach(h=>h(p)),g)return g(p)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),u&&document.head.appendChild(d)}}})(),a.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.tt=()=>(void 0===e&&(e={createScriptURL:c=>c},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),a.tu=e=>a.tt().createScriptURL(e),a.p="",(()=>{var e={3666:0};a.f.j=(t,n)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(3666!=t){var d=new Promise((i,l)=>r=e[t]=[i,l]);n.push(r[2]=d);var u=a.p+a.u(t),b=new Error;a.l(u,i=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var l=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;b.message="Loading chunk "+t+" failed.\n("+l+": "+s+")",b.name="ChunkLoadError",b.type=l,b.request=s,r[1](b)}},"chunk-"+t,t)}else e[t]=0},a.O.j=t=>0===e[t];var c=(t,n)=>{var b,o,[r,d,u]=n,i=0;if(r.some(s=>0!==e[s])){for(b in d)a.o(d,b)&&(a.m[b]=d[b]);if(u)var l=u(a)}for(t&&t(n);i<r.length;i++)a.o(e,o=r[i])&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},f=self.webpackChunksakai_ng=self.webpackChunksakai_ng||[];f.forEach(c.bind(null,0)),f.push=c.bind(null,f.push.bind(f))})()})();