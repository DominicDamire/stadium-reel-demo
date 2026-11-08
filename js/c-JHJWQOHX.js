var l=await import("three"),{CONFIG:q}=await import("./c-EC4YXM2G.js"),pe=window.__stadium,{scene:P,camera:x,renderer:W}=pe,re=129,se=86,j=(()=>{let r;return P.traverse(o=>{let s=o.geometry&&o.geometry.parameters;!r&&o.isMesh&&o.geometry.type==="PlaneGeometry"&&s.width===re&&s.height===se&&(r=o)}),r})();if(!j)throw new Error("grass-lab: pitch mesh (PlaneGeometry 129 x 86) not found");var V=j.material,he=V.onBeforeCompile,U=W.capabilities.getMaxAnisotropy(),T=(r,o)=>{let s=Math.sin(r*127.1+o*311.7)*43758.5453;return s-Math.floor(s)},H=(r,o)=>{let s=document.createElement("canvas");return s.width=r,s.height=o,s},ne=(r,o)=>{let s=new l.CanvasTexture(r);return s.anisotropy=U,o&&(s.wrapS=s.wrapT=l.RepeatWrapping),s.needsUpdate=!0,s},F=new URLSearchParams(location.search),Z=q.grassFx||{},X=F.get("turf")||Z.pattern||"stripe",O=X==="checker",ie=F.has("wet")?+F.get("wet"):Z.wet??.5,me=(F.has("wear")?+F.get("wear"):Z.wear??1).toFixed(3),xe=105/18,ve=68/12,w=256,ge=(()=>{let r=new Uint8Array(w*w*4),o=(n,t,a,i)=>{let c=n*a,m=t*a,p=Math.floor(c),h=Math.floor(m),v=c-p,d=m-h,M=v*v*(3-2*v),g=d*d*(3-2*d),b=(D,z)=>T((D%a+a)%a+i*13.7,(z%a+a)%a+i*5.1),C=b(p,h),k=b(p+1,h),$=b(p,h+1),L=b(p+1,h+1);return C+(k-C)*M+($-C)*g+(C-k-$+L)*M*g},s=[[[3,.6],[6,.4]],[[4,.6],[8,.4]],[[10,.5],[20,.3],[40,.2]],[[8,.5],[16,.3],[32,.2]]];for(let n=0;n<w;n++)for(let t=0;t<w;t++)for(let a=0;a<4;a++){let i=0;for(let[c,m]of s[a])i+=m*o(t/w,n/w,c,a*7+c);r[(n*w+t)*4+a]=Math.max(0,Math.min(255,(.5+(i-.5)*1.8)*255))}let e=new l.DataTexture(r,w,w,l.RGBAFormat);return e.wrapS=e.wrapT=l.RepeatWrapping,e.magFilter=l.LinearFilter,e.minFilter=l.LinearMipmapLinearFilter,e.generateMipmaps=!0,e.anisotropy=U,e.needsUpdate=!0,e})(),f=256,we=(()=>{let r=(a,i,c,m,p,h)=>{let v=H(f,f),d=v.getContext("2d");d.fillStyle="#808080",d.fillRect(0,0,f,f),d.lineCap="round";for(let M=0;M<a;M++){let g=D=>T(M*1.37+D,h+D*3.1),b=g(1)*f,C=g(2)*f,k=(g(3)-.5)*2.4+Math.PI/2,$=i*(.5+g(4)),L=Math.round(m+(p-m)*g(5));d.strokeStyle=`rgba(${L},${L},${L},0.7)`,d.lineWidth=c;for(let D of[-f,0,f])for(let z of[-f,0,f])d.beginPath(),d.moveTo(b+D,C+z),d.lineTo(b+D+Math.cos(k)*$,C+z+Math.sin(k)*$),d.stroke()}return d.getImageData(0,0,f,f).data},o=r(14e3,10,1,20,255,1),s=r(700,22,6,70,190,7),e=H(f,f),n=e.getContext("2d"),t=n.createImageData(f,f);for(let a=0;a<f*f*4;a+=4)t.data[a]=o[a],t.data[a+1]=s[a],t.data[a+2]=128,t.data[a+3]=255;return n.putImageData(t,0,0),ne(e,!0)})(),ce=F.get("grass")==="cc0",R=ce||F.get("grass")==="tex",u=512,Q=2;function le(r,o){let s=r.getImageData(0,0,u,u),e=s.data,n=[0,0,0];for(let t=0;t<e.length;t+=4)for(let a=0;a<3;a++)n[a]+=e[t+a];for(let t=0;t<3;t++)n[t]=127.5/(n[t]/(u*u));for(let t=0;t<e.length;t+=4)for(let a=0;a<3;a++)e[t+a]=Math.max(0,Math.min(255,127.5+(e[t+a]*n[a]-127.5)*o));r.putImageData(s,0,0)}var N=R?(()=>{let r=H(u,u),o=r.getContext("2d");o.fillStyle="#808080",o.fillRect(0,0,u,u),o.lineCap="round";let s=2654435769,e=()=>{s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},n=(t,a)=>t<a?[0,u]:t>u-a?[0,-u]:[0];for(let t=0;t<130;t++){let a=e()*u,i=e()*u,c=15+e()*45,m=e()<.5,p=m?"205,210,150":"70,95,85";for(let h of n(a,c))for(let v of n(i,c)){let d=o.createRadialGradient(a+h,i+v,0,a+h,i+v,c);d.addColorStop(0,`rgba(${p},0.32)`),d.addColorStop(1,`rgba(${p},0)`),o.fillStyle=d,o.fillRect(a+h-c,i+v-c,2*c,2*c)}}for(let t=0;t<15e3;t++){let a=e()*u,i=e()*u,c=14+e()*24,m=e()*6.2832,p=e(),h=1.4+e()*1.4,v=Math.round(70+150*p+40*(e()-.5)),d=Math.round(100+110*p+30*(e()-.5)),M=Math.round(70+60*p+40*(e()-.5)+40*(1-p));o.strokeStyle=`rgba(${v},${d},${M},0.55)`,o.lineWidth=h;for(let g of n(a,c))for(let b of n(i,c))o.beginPath(),o.moveTo(a+g,i+b),o.lineTo(a+g+Math.cos(m)*c,i+b+Math.sin(m)*c),o.stroke()}return le(o,1.8),ne(r,!0)})():null;if(ce&&N){let r=N.image,o=()=>{let e=new Image;e.onerror=()=>console.warn("grass: cc0 texture failed, kept the procedural one"),e.onload=()=>{let n=r.getContext("2d");n.drawImage(e,0,0,u,u),le(n,1.5),N.needsUpdate=!0,window.__cc0=performance.now()},e.src="./assets/tex/grass/grass.jpg"},s=new Promise(e=>{try{new PerformanceObserver((n,t)=>{n.getEntries().some(a=>a.initiatorType==="img")&&(t.disconnect(),e())}).observe({type:"resource",buffered:!0})}catch{e()}});requestAnimationFrame(()=>requestAnimationFrame(()=>Promise.race([s,new Promise(e=>setTimeout(e,3e3))]).then(()=>(window.requestIdleCallback||setTimeout)(o))))}var be=(w*w+f*f+(R?u*u:0))*4*4/3/1048576,B={uCtr:{value:new l.Vector2},uBr:{value:new l.Vector4(1e4,2e4,0,1)},uBd:{value:0},uTime:{value:0},uWet:{value:ie},uN:{value:ge},uGD:{value:we},uBl:{value:N}},de=`
  const float PW = ${xe.toFixed(4)}, PZ = ${ve.toFixed(4)};
  float passSgn(vec2 p) { float i = floor(p.x / PW);${O?" i += floor(p.y / PZ);":""} return mod(i, 2.0) * 2.0 - 1.0; }   // +-1: which way this mower pass lays the grass (along z)
`,ye=de+`uniform sampler2D uN, uGD${R?", uBl":""}; uniform vec2 uCtr; uniform vec4 uBr; uniform float uBd, uWet;
  float gWear, gWet;
  float glh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float gs(vec2 d, vec2 r) { d /= r; return exp(-dot(d, d)); }
  // worn turf 0..1: both goalmouths + penalty spots, the centre spot, a faint centre circle, the linesman's strip along the -z touchline (the dugout side); broken up by noise
  float wearAt(vec2 p) {
    vec2 q = vec2(abs(p.x), p.y);
    float w = 0.9 * gs(q - vec2(50.6, 0.0), vec2(3.6, 4.6)) + 0.5 * gs(q - vec2(46.5, 0.0), vec2(6.0, 8.5)) + 0.7 * gs(q - vec2(41.5, 0.0), vec2(1.2, 1.2))
      + 0.6 * gs(p, vec2(2.6)) + 0.2 * (1.0 - smoothstep(0.0, 1.4, abs(length(p) - 9.15))) * 0.7 + 0.2 * gs(q - vec2(36.0, 0.0), vec2(12.0, 6.0))
      + 0.55 * gs(vec2(p.y + 32.2, 0.0), vec2(1.1, 1.0)) * (1.0 - smoothstep(44.0, 53.0, abs(p.x)));
    float n = 0.6 * texture2D(uN, p / 2.9).b + 0.4 * texture2D(uN, p / 0.9 + 0.3).a;
    return ${me} * smoothstep(0.1, 0.85, w * (0.35 + 1.3 * n)); }
  float cover(vec2 p) { return uBd * (1.0 - smoothstep(uBr.x, uBr.y, length(p - uCtr))) * (1.0 - smoothstep(uBr.z, uBr.w, length(cameraPosition - vec3(p.x, 0.0, p.y)))); }
  vec3 grassA(vec2 p, vec3 Vd) {
    // mowing: alternating passes (or a checker), soft seam at the pass edge, each pass a hair different, mower wobble
    float xs = p.x + 0.05 * sin(p.y * 0.37) + 0.03 * sin(p.y * 1.3 + 2.0);
    vec2 cs = vec2(xs / PW, p.y / PZ);
    // r22b: the pass pattern is a square wave of period 2 x PW along x. Its box-filtered amplitude fades out with the pixel footprint along x (fx), gone before Nyquist (fx = PW): no moire at the far end / at grazing angles
    float fx = abs(dFdx(xs)) + abs(dFdy(xs)), mowA = 1.0 - smoothstep(0.15 * PW, 0.9 * PW, fx);
    float st = passSgn(vec2(xs, p.y)), sw = max(0.12, 0.5 * fx);
    float seam = smoothstep(0.0, sw, min(fract(cs.x), 1.0 - fract(cs.x)) * PW);
    ${O?"seam *= smoothstep(0.0, sw, min(fract(cs.y), 1.0 - fract(cs.y)) * PZ);":""}
    ${O?"float fz = abs(dFdx(p.y)) + abs(dFdy(p.y)); mowA *= 1.0 - smoothstep(0.15 * PZ, 0.9 * PZ, fz);":""}
    st *= seam * mowA;
    float jit = (glh(vec2(floor(cs.x), ${O?"floor(cs.y)":"0.0"})) - 0.5) * mowA;
    // view-dependent sheen: grass laid toward / away from the eye along z; strongest at grazing, gone straight down
    float sheen = st * Vd.z * (0.5 + 0.5 * (1.0 - Vd.y));
    vec3 col = vec3(0.017, 0.128, 0.020);
    col *= 1.0 + 0.7 * sheen + 0.06 * st + 0.10 * jit;
    col *= mix(vec3(1.0), vec3(1.07, 1.04, 0.84), max(sheen, 0.0)) * mix(vec3(1.0), vec3(0.88, 0.99, 1.07), max(-sheen, 0.0));   // laid away = lighter + yellower, toward = darker + bluer
    // micro-variation: broad patches (lush / dry), mid tufts, fine mower streaks
    vec2 rt = vec2(p.x * 0.8 + p.y * 0.6, p.y * 0.8 - p.x * 0.6);
    float n1 = texture2D(uN, p / 53.0).r, n2 = texture2D(uN, rt / 19.0 + 0.3).g, n3 = texture2D(uN, p / 4.7).b, n4 = texture2D(uN, vec2(p.x * 1.9, p.y * 0.12)).a, n5 = texture2D(uN, rt / 1.3).b;
    float pat = (n1 - 0.5) * 0.55 + (n2 - 0.5) * 0.45;
    col *= 1.0 + 0.45 * pat + 0.3 * (n3 - 0.5) + 0.12 * (n4 - 0.5) + 0.14 * (n5 - 0.5);
    col *= mix(vec3(1.06, 1.0, 0.84), vec3(0.90, 1.0, 1.08), clamp(pat * 1.6 + 0.5, 0.0, 1.0));
    // worn: thin dry turf, then bare soil in the cores
    float w = wearAt(p); gWear = w;
    col = mix(col, vec3(0.078, 0.078, 0.027), w * 0.6);
    col = mix(col, vec3(0.050, 0.042, 0.021), smoothstep(0.65, 1.0, w) * (0.4 + 0.6 * n3) * 0.6);
    gWet = clamp(uWet * (0.55 + 1.2 * (n2 - 0.35)), 0.0, 1.0) * (1.0 - 0.6 * w);   // damp patches, less on bare soil
    col *= 1.0 - 0.14 * gWet;
    col *= 1.0 - cover(p);   // hq blades / site shells stand here: the turf under them is the dark root gaps, so the blades do not pop on a bright base
    float dist = length(cameraPosition - vec3(p.x, 0.0, p.y)), fd = 1.0 - smoothstep(6.0, 40.0, dist);   // blade detail fades in near the camera
    mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
    float b = 0.6 * texture2D(uGD, p).r + 0.4 * texture2D(uGD, rot * p / 2.73 + 0.31).r;   // two scales, rotated: no visible 1 m repeat
    float cl = texture2D(uGD, rot * p / 7.1 + 0.6).g;
    col *= mix(1.0, 0.4 + 1.2 * b, fd) * mix(1.0, 0.8 + 0.4 * cl, 0.4 + 0.6 * fd);
    col = mix(col, col * vec3(1.18, 1.08, 0.75), clamp((b - 0.55) * 1.6, 0.0, 1.0) * fd * 0.5);   // lighter, yellower blade tips
    ${R?`col *= mix(vec3(1.0), 4.0 * texture2D(uBl, p / ${Q.toFixed(2)}).rgb * mix(vec3(0.5), texture2D(uBl, rot * p / ${(Q*2.83).toFixed(2)} + 0.37).rgb, 0.7), 1.0 - smoothstep(4.0, 40.0, dist));   // r22c ?grass=tex: close-up blade texture, 0 beyond 40 m (far look untouched)`:""}
    return col; }
`,Y="col *= (0.78 + 0.4 * fine) * (0.9 + 0.2 * mid);",J="diffuseColor.rgb = mix(col, vec3(0.72), cov);",ee="#include <roughnessmap_fragment>",te="float px = max(fwidth(d), 1e-4), hw = 0.06, hwE = max(hw, 0.5 * px), cov = (1.0 - smoothstep(hwE - px * 0.5, hwE + px * 0.5, d)) * min(1.0, 0.09 / hw) * clamp(2.0 * hw / px, 0.6, 1.0);",Be=`float hw = 0.06, px = max(fwidth(d), 1e-4), cov = 0.0;
      { vec2 dpx = dFdx(p), dpy = dFdy(p);
        if (d < hw + length(dpx) + length(dpy)) {
          float e = 0.3, a = gD(p + vec2(e, 0.0), Lh) - d, b = gD(p - vec2(e, 0.0), Lh) - d, c = gD(p + vec2(0.0, e), Lh) - d, f = gD(p - vec2(0.0, e), Lh) - d;
          vec2 n = vec2(a >= b ? a : -b, c >= f ? c : -f); n /= max(length(n), 1e-4);
          px = max(length(vec2(dot(dpx, n), dot(dpy, n))), 1e-4);
          float we = max(2.0 * hw, 0.75 * px), k = clamp(2.0 * hw / (0.75 * px), 0.0, 1.0);
          cov = max(min(d + 0.5 * px, 0.5 * we) - max(d - 0.5 * px, -0.5 * we), 0.0) / min(we, px) * (1.0 - pow(1.0 - k, 3.0)); } } `,Me=`{ float g_k = cov * (1.0 - 0.4 * gWear * texture2D(uN, p / 0.8).a);
        g_k *= mix(1.0, 0.7 + 0.6 * texture2D(uGD, p).r, 1.0 - smoothstep(6.0, 40.0, length(cameraPosition - vec3(p.x, 0.0, p.y))));
        diffuseColor.rgb = mix(col, vec3(0.74, 0.74, 0.69) * (0.92 + 0.12 * texture2D(uN, p / 3.1).g), g_k); }`;function K(r,o={}){let s=V.clone();return s.onBeforeCompile=e=>{he(e);let n=e.fragmentShader,t=n.indexOf("float d = sdB("),a=n.indexOf(te);if(!n.includes(Y)||!n.includes(J)||t<0||a<t||!n.includes("void main() {"))throw new Error("grass: pitch shader changed in main.js");let i="float gD(vec2 p, vec2 Lh) { vec2 q = vec2(abs(p.x), p.y); "+n.slice(t,a)+` return d; }
`;n=n.replace("void main() {",i+"void main() {").replace(te,Be),Object.assign(e.uniforms,B,o.uniforms||{}),e.fragmentShader=ye+(o.fHead||"")+n.replace(Y,"col = grassA(p, Vd);").replace(J,Me+(o.fTail||"")).replace(ee,ee+`
  roughnessFactor = mix(roughnessFactor, 0.64, gWet * (1.0 - cov));`),e.vertexShader=de+(o.vHead||"")+e.vertexShader,o.vBegin&&(e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+o.vBegin)),o.vMain&&(e.vertexShader=e.vertexShader.replace("#include <project_vertex>",o.vMain))},s.customProgramCacheKey=()=>"grassfx-"+r+X+(R?"T":""),s}var fe=()=>{let r=x.position,o=Math.max(0,Math.abs(r.x)-re/2),s=Math.max(0,Math.abs(r.z)-se/2);return Math.hypot(o,r.y,s)},oe=8,ae=.05,A=25;function Pe(){let r=[];for(let n=0;n<oe;n++){let t=new l.PlaneGeometry(2*A,2*A).rotateX(-Math.PI/2).translate(0,.003+(n+1)/oe*ae,0);r.push(t)}let o=De(r),s=K("B",{vHead:`varying float vL;
`,vBegin:`vL = transformed.y / ${ae.toFixed(3)};`,fHead:`varying float vL;
`,fTail:`
      { float dist = length(cameraPosition - vec3(p.x, 0.0, p.y));
        float fadeK = max(smoothstep(${(A-7).toFixed(1)}, ${A.toFixed(1)}, dist), smoothstep(0.015, 0.03, px));   // far or sub-pixel blades: drop the shell
        vec2 cs = p / 0.02, ci = floor(cs), f = fract(cs) - 0.5;
        float hb = (0.35 + 0.65 * glh(ci)) * (1.0 - fadeK) * (1.0 - 0.6 * gWear);
        vec2 lean = (vec2(glh(ci + 7.1), glh(ci + 3.3)) - 0.5) * (0.6 + 0.5 * vL);   // jittered roots + lean: no carpet grid
        if (vL > hb || length(f - lean) > (0.25 + 0.2 * glh(ci + 1.7)) * (1.0 - vL / max(hb, 1e-3))) discard;
        diffuseColor.rgb *= mix(0.6, 1.2, vL); }`}),e=new l.Mesh(o,s);return e.frustumCulled=!1,e.name="grasslab-shells",e.renderOrder=1,e.receiveShadow=!0,e.onBeforeRender=()=>{e.position.set(Math.round(x.position.x),0,Math.round(x.position.z)),e.updateMatrixWorld()},{mesh:e,vis:()=>fe()<A,upd:()=>{B.uCtr.value.set(x.position.x,x.position.z),B.uBr.value.set(1e4,2e4,A-7,A),B.uBd.value=.16}}}var ue=!!window.__stadium.hq,E=ue?q.hq.blades:4e4,y=ue?q.hq.bladeTile:14,I=y/2,_=.08;function Ce(){let r=new l.InstancedBufferGeometry;r.setAttribute("position",new l.Float32BufferAttribute([-1,0,0,1,0,0,0,1,0],3)),r.setAttribute("normal",new l.Float32BufferAttribute(Array(3).fill([0,1,0]).flat(),3)),r.setIndex([0,1,2]);let o=new Float32Array(E*4);for(let t=0;t<E;t++)o.set([T(t,1)*y,T(t,2)*y,T(t,3)*Math.PI*2,.55+.75*T(t,4)],t*4);r.setAttribute("aOff",new l.InstancedBufferAttribute(o,4)),r.instanceCount=E;let s=K("C",{vHead:`attribute vec4 aOff; uniform vec2 uCtr; uniform vec4 uBr; uniform float uTime; varying float vL, vR;
`,fHead:`varying float vL, vR;
`,vMain:`
      vec2 base = uCtr + mod(aOff.xy - uCtr + ${(y/2).toFixed(1)}, ${y.toFixed(1)}) - ${(y/2).toFixed(1)};
      float s = aOff.w * (1.0 - smoothstep(uBr.x, uBr.y, length(base - uCtr))) * (1.0 - smoothstep(uBr.z, uBr.w, length(cameraPosition - vec3(base.x, 0.0, base.y))));   // shrink with the distance: no pop at the tile edge or when the camera climbs away
      float hh = position.y, c = cos(aOff.z), sn = sin(aOff.z);
      vec2 sway = (vec2(sin(uTime * 1.7 + base.x * 0.35 + base.y * 0.21), cos(uTime * 1.3 + base.y * 0.33)) * 0.35 + vec2(c, sn) * 0.4) * hh * hh;
      sway.y += passSgn(base) * 0.55 * hh * hh;   // grass lies along the mower pass: the same direction the sheen assumes
      vec3 wp = vec3(base.x + c * position.x * 0.015 + sway.x * ${_} * s, hh * ${_} * s, base.y + sn * position.x * 0.015 + sway.y * ${_} * s);
      vL = hh; vR = fract(sin(dot(aOff.xy, vec2(12.9898, 78.233))) * 43758.5453); vPW = wp.xz; transformed = wp;   // r19: worldpos / shadow coords follow the blade (mesh matrix = identity)   // per-vertex xz: fwidth(p) must not be 0 (the line AA smoothstep goes NaN = black notches)
      vec4 mvPosition = viewMatrix * vec4(wp, 1.0);
      gl_Position = projectionMatrix * mvPosition;`,fTail:`
      if (cov > 0.02 || vR < gWear * 0.85) discard;   // no blades on the paint (white blades read as spikes); worn ground has fewer
      diffuseColor.rgb *= mix(0.75, 1.55, vL) * (0.86 + 0.28 * fract(vR * 13.7));`}),e=new l.Mesh(r,s);e.frustumCulled=!1,e.name="grasslab-blades",e.receiveShadow=!0;let n=new l.Vector3;return{mesh:e,vis:()=>fe()<y*.95,upd:()=>{B.uTime.value=performance.now()/1e3,x.getWorldDirection(n);let t=n.y<-.05?x.position.y/-n.y:1e9,a=x.position.x+n.x*t,i=x.position.z+n.z*t,c=a-x.position.x,m=i-x.position.z,p=Math.hypot(c,m),h=p>I*.6?I*.6/p:1;B.uCtr.value.set(x.position.x+c*h,x.position.z+m*h),B.uBr.value.set(I*.6,I,y*.5,y*.95),B.uBd.value=.22}}}function De(r){let o=[],s=[],e=[],n=[],t=0;for(let i of r)o.push(...i.attributes.position.array),s.push(...i.attributes.normal.array),e.push(...i.attributes.uv.array),n.push(...i.index.array.map(c=>c+t)),t+=i.attributes.position.count;let a=new l.BufferGeometry;return a.setAttribute("position",new l.Float32BufferAttribute(o,3)),a.setAttribute("normal",new l.Float32BufferAttribute(s,3)),a.setAttribute("uv",new l.Float32BufferAttribute(e,2)),a.setIndex(n),a}var Ae=K("A"),S=[],G=null;function Fe(r){for(let o of S)P.remove(o.mesh);S=[],j.material=r==="current"?V:Ae,B.uBd.value=0,r==="B"&&S.push(Pe()),r==="C"&&S.push(Ce());for(let o of S)P.add(o.mesh);return G===null&&(G=P.onBeforeRender),P.onBeforeRender=(...o)=>{for(let s of S)s.upd(),s.mesh.visible=s.vis();G.apply(P,o)},{opt:r,texMB:r==="current"?0:+be.toFixed(2),aniso:U,pattern:X,wet:ie}}function Se(r=20){let o=W.getContext();W.render(P,x),o.finish();let s=performance.now();for(let e=0;e<r;e++)W.render(P,x);return o.finish(),+((performance.now()-s)/r).toFixed(2)}var Te=()=>({calls:W.info.render.calls,tris:W.info.render.triangles});export{Fe as apply,Se as frameMs,Te as info};
