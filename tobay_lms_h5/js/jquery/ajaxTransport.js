!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){if(!e.support.cors&&e.ajaxTransport&&window.XDomainRequest){var t=/^https?:\/\//i,o=/^get|post$/i,n=new RegExp("^"+location.protocol,"i");e.ajaxTransport("* text html xml json",function(r,s,a){if(r.crossDomain&&r.async&&o.test(r.type)&&t.test(r.url)&&n.test(r.url)){var i=null;return{send:function(t,o){var n="",a=(s.dataType||"").toLowerCase();i=new XDomainRequest,/^\d+$/.test(s.timeout)&&(i.timeout=s.timeout),i.ontimeout=function(){o(500,"timeout")},i.onload=function(){var t="Content-Length: "+i.responseText.length+"\r\nContent-Type: "+i.contentType,n={code:200,message:"success"},r={text:i.responseText};try{if("html"===a||/text\/html/i.test(i.contentType))r.html=i.responseText;else if("json"===a||"text"!==a&&/\/json/i.test(i.contentType))try{r.json=e.parseJSON(i.responseText)}catch(e){n.code=500,n.message="parseerror"}else if("xml"===a||"text"!==a&&/\/xml/i.test(i.contentType)){var s=new ActiveXObject("Microsoft.XMLDOM");s.async=!1;try{s.loadXML(i.responseText)}catch(e){s=void 0}if(!s||!s.documentElement||s.getElementsByTagName("parsererror").length)throw n.code=500,n.message="parseerror","Invalid XML: "+i.responseText;r.xml=s}}catch(e){throw e}finally{o(n.code,n.message,r,t)}},i.onprogress=function(){},i.onerror=function(){o(500,"error",{text:i.responseText})},s.data&&(n="string"===e.type(s.data)?s.data:e.param(s.data)),i.open(r.type,r.url),i.send(n)},abort:function(){i&&i.abort()}}}})}});