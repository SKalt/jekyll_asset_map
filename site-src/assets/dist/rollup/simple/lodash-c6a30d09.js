var u="object"==typeof global&&global&&global.Object===Object&&global,f="object"==typeof self&&self&&self.Object===Object&&self,e=(u||f||Function("return this")()).Symbol,r=Object.prototype,t=r.hasOwnProperty,n=r.toString,o=e?e.toStringTag:void 0;var a=Object.prototype.toString;var d="[object Null]",c="[object Undefined]",i=e?e.toStringTag:void 0;function l(u){return null==u?void 0===u?c:d:i&&i in Object(u)?function(u){var f=t.call(u,o),e=u[o];try{u[o]=void 0;var r=!0}catch(u){}var a=n.call(u);return r&&(f?u[o]=e:delete u[o]),a}(u):function(u){return a.call(u)}(u)}var x="[object Symbol]";var v=Array.isArray,b=1/0,g=e?e.prototype:void 0,s=g?g.toString:void 0;function p(u){if("string"==typeof u)return u;if(v(u))return function(u,f){for(var e=-1,r=null==u?0:u.length,t=Array(r);++e<r;)t[e]=f(u[e],e,u);return t}(u,p)+"";if(function(u){return"symbol"==typeof u||function(u){return null!=u&&"object"==typeof u}(u)&&l(u)==x}(u))return s?s.call(u):"";var f=u+"";return"0"==f&&1/u==-b?"-0":f}function j(u){return null==u?"":p(u)}function A(u,f,e){var r=u.length;return e=void 0===e?r:e,!f&&e>=r?u:function(u,f,e){var r=-1,t=u.length;f<0&&(f=-f>t?0:t+f),(e=e>t?t:e)<0&&(e+=t),t=f>e?0:e-f>>>0,f>>>=0;for(var n=Array(t);++r<t;)n[r]=u[r+f];return n}(u,f,e)}var y=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");function E(u){return y.test(u)}var O="[\\ud800-\\udfff]",h="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",S="\\ud83c[\\udffb-\\udfff]",L="[^\\ud800-\\udfff]",U="(?:\\ud83c[\\udde6-\\uddff]){2}",z="[\\ud800-\\udbff][\\udc00-\\udfff]",R="(?:"+h+"|"+S+")"+"?",Z="[\\ufe0e\\ufe0f]?"+R+("(?:\\u200d(?:"+[L,U,z].join("|")+")[\\ufe0e\\ufe0f]?"+R+")*"),I="(?:"+[L+h+"?",h,U,z,O].join("|")+")",T=RegExp(S+"(?="+S+")|"+I+Z,"g");function m(u){return E(u)?function(u){return u.match(T)||[]}(u):function(u){return u.split("")}(u)}var C,D=(C="toUpperCase",function(u){var f=E(u=j(u))?m(u):void 0,e=f?f[0]:u.charAt(0),r=f?A(f,1).join(""):u.slice(1);return e[C]()+r});var N,w=(N={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},function(u){return null==N?void 0:N[u]}),G=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,H=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var Y=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var _=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var k="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",J="["+k+"]",M="\\d+",V="[\\u2700-\\u27bf]",$="[a-z\\xdf-\\xf6\\xf8-\\xff]",F="[^\\ud800-\\udfff"+k+M+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",K="(?:\\ud83c[\\udde6-\\uddff]){2}",P="[\\ud800-\\udbff][\\udc00-\\udfff]",W="[A-Z\\xc0-\\xd6\\xd8-\\xde]",q="(?:"+$+"|"+F+")",B="(?:"+W+"|"+F+")",Q="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",X="[\\ufe0e\\ufe0f]?"+Q+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",K,P].join("|")+")[\\ufe0e\\ufe0f]?"+Q+")*"),uu="(?:"+[V,K,P].join("|")+")"+X,fu=RegExp([W+"?"+$+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[J,W,"$"].join("|")+")",B+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[J,W+q,"$"].join("|")+")",W+"?"+q+"+(?:['’](?:d|ll|m|re|s|t|ve))?",W+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",M,uu].join("|"),"g");function eu(u,f,e){return u=j(u),void 0===(f=e?void 0:f)?function(u){return _.test(u)}(u)?function(u){return u.match(fu)||[]}(u):function(u){return u.match(Y)||[]}(u):u.match(f)||[]}var ru=RegExp("['’]","g");function tu(u){return function(f){return function(u,f,e,r){var t=-1,n=null==u?0:u.length;for(r&&n&&(e=u[++t]);++t<n;)e=f(e,u[t],t,u);return e}(eu(function(u){return(u=j(u))&&u.replace(G,w).replace(H,"")}(f).replace(ru,"")),u,"")}}var nu=tu((function(u,f,e){return f=f.toLowerCase(),u+(e?D(j(f).toLowerCase()):f)})),ou=Array.prototype.join;function au(u,f){return null==u?"":ou.call(u,f)}var du=tu((function(u,f,e){return u+(e?"_":"")+f.toLowerCase()}));export{nu as c,au as j,du as s};
