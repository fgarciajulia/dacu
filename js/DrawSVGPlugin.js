var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";function i(a,b,c,d){return c=parseFloat(c)-parseFloat(a),d=parseFloat(d)-parseFloat(b),Math.sqrt(c*c+d*d)}function j(a){return"string"!=typeof a&&a.nodeType||(a=_gsScope.TweenLite.selector(a),a.length&&(a=a[0])),a}function k(a,b,c){var e,f,d=a.indexOf(" ");return-1===d?(e=void 0!==c?c+"":a,f=a):(e=a.substr(0,d),f=a.substr(d+1)),e=-1!==e.indexOf("%")?parseFloat(e)/100*b:parseFloat(e),f=-1!==f.indexOf("%")?parseFloat(f)/100*b:parseFloat(f),e>f?[f,e]:[e,f]}function l(a){if(!a)return 0;a=j(a);var d,e,f,g,h,k,l,c=a.tagName.toLowerCase();if("path"===c){g=a.style.strokeDasharray,a.style.strokeDasharray="none",d=a.getTotalLength()||0;try{e=a.getBBox()}catch(m){}a.style.strokeDasharray=g}else if("rect"===c)d=2*a.getAttribute("width")+2*a.getAttribute("height");else if("circle"===c)d=2*Math.PI*parseFloat(a.getAttribute("r"));else if("line"===c)d=i(a.getAttribute("x1"),a.getAttribute("y1"),a.getAttribute("x2"),a.getAttribute("y2"));else if("polyline"===c||"polygon"===c)for(f=a.getAttribute("points").match(b)||[],"polygon"===c&&f.push(f[0],f[1]),d=0,h=2;h<f.length;h+=2)d+=i(f[h-2],f[h-1],f[h],f[h+1])||0;else"ellipse"===c&&(k=parseFloat(a.getAttribute("rx")),l=parseFloat(a.getAttribute("ry")),d=Math.PI*(3*(k+l)-Math.sqrt((3*k+l)*(k+3*l))));return d||0}function m(b,c){if(!b)return[0,0];b=j(b),c=c||l(b)+1;var d=a(b),e=d.strokeDasharray||"",f=parseFloat(d.strokeDashoffset),g=e.indexOf(",");return 0>g&&(g=e.indexOf(" ")),e=0>g?c:parseFloat(e.substr(0,g))||1e-5,e>c&&(e=c),[Math.max(0,-f),Math.max(0,e-f)]}var c,a=document.defaultView?document.defaultView.getComputedStyle:function(){},b=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,d="codepen",e="DrawSVGPlugin",f=String.fromCharCode(103,114,101,101,110,115,111,99,107,46,99,111,109),g=String.fromCharCode(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47),h=function(a){for(var b=-1!==(window?window.location.href:"").indexOf(String.fromCharCode(103,114,101,101,110,115,111,99,107))&&-1!==a.indexOf(String.fromCharCode(108,111,99,97,108,104,111,115,116)),c=[f,String.fromCharCode(99,111,100,101,112,101,110,46,105,111),String.fromCharCode(99,111,100,101,112,101,110,46,100,101,118),String.fromCharCode(99,115,115,45,116,114,105,99,107,115,46,99,111,109),String.fromCharCode(99,100,112,110,46,105,111),String.fromCharCode(103,97,110,110,111,110,46,116,118),String.fromCharCode(99,111,100,101,99,97,110,121,111,110,46,110,101,116),String.fromCharCode(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),String.fromCharCode(99,101,114,101,98,114,97,120,46,99,111,46,117,107),String.fromCharCode(116,121,109,112,97,110,117,115,46,110,101,116),String.fromCharCode(116,119,101,101,110,109,97,120,46,99,111,109),String.fromCharCode(116,119,101,101,110,108,105,116,101,46,99,111,109),String.fromCharCode(112,108,110,107,114,46,99,111),String.fromCharCode(104,111,116,106,97,114,46,99,111,109),String.fromCharCode(106,115,102,105,100,100,108,101,46,110,101,116)],d=c.length;--d>-1;)if(-1!==a.indexOf(c[d]))return!0;return b&&window&&window.console&&console.log(String.fromCharCode(87,65,82,78,73,78,71,58,32,97,32,115,112,101,99,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+e+String.fromCharCode(32,105,115,32,114,117,110,110,105,110,103,32,108,111,99,97,108,108,121,44,32,98,117,116,32,105,116,32,119,105,108,108,32,110,111,116,32,119,111,114,107,32,111,110,32,97,32,108,105,118,101,32,100,111,109,97,105,110,32,98,101,99,97,117,115,101,32,105,116,32,105,115,32,97,32,109,101,109,98,101,114,115,104,105,112,32,98,101,110,101,102,105,116,32,111,102,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,46,32,80,108,101,97,115,101,32,115,105,103,110,32,117,112,32,97,116,32,104,116,116,112,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98,47,32,97,110,100,32,116,104,101,110,32,100,111,119,110,108,111,97,100,32,116,104,101,32,39,114,101,97,108,39,32,118,101,114,115,105,111,110,32,102,114,111,109,32,121,111,117,114,32,71,114,101,101,110,83,111,99,107,32,97,99,99,111,117,110,116,32,119,104,105,99,104,32,104,97,115,32,110,111,32,115,117,99,104,32,108,105,109,105,116,97,116,105,111,110,115,46,32,84,104,101,32,102,105,108,101,32,121,111,117,39,114,101,32,117,115,105,110,103,32,119,97,115,32,108,105,107,101,108,121,32,100,111,119,110,108,111,97,100,101,100,32,102,114,111,109,32,101,108,115,101,119,104,101,114,101,32,111,110,32,116,104,101,32,119,101,98,32,97,110,100,32,105,115,32,114,101,115,116,114,105,99,116,101,100,32,116,111,32,108,111,99,97,108,32,117,115,101,32,111,114,32,111,110,32,115,105,116,101,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,46)),b}(window?window.location.host:"");c=_gsScope._gsDefine.plugin({propName:"drawSVG",API:2,version:"0.0.10",global:!0,overwriteProps:["drawSVG"],init:function(a,b,c){if(!a.getBBox)return!1;if(!h)return window.location.href="http://"+f+g+"?plugin="+e+"&source="+d,!1;var j,n,o,i=l(a)+1;return this._style=a.style,b===!0||"true"===b?b="0 100%":b?-1===(b+"").indexOf(" ")&&(b="0 "+b):b="0 0",j=m(a,i),n=k(b,i,j[0]),this._length=i+10,0===j[0]&&0===n[0]?(o=Math.max(1e-5,n[1]-i),this._dash=i+o,this._offset=i-j[1]+o,this._addTween(this,"_offset",this._offset,i-n[1]+o,"drawSVG")):(this._dash=j[1]-j[0]||1e-6,this._offset=-j[0],this._addTween(this,"_dash",this._dash,n[1]-n[0]||1e-5,"drawSVG"),this._addTween(this,"_offset",this._offset,-n[0],"drawSVG")),h},set:function(a){this._firstPT&&(this._super.setRatio.call(this,a),this._style.strokeDashoffset=this._offset,1===a||0===a?this._style.strokeDasharray=this._offset<.001&&this._length-this._dash<=10?"none":this._offset===this._dash?"0px, 999999px":this._dash+"px,"+this._length+"px":this._style.strokeDasharray=this._dash+"px,"+this._length+"px")}}),c.getLength=l,c.getPosition=m}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();