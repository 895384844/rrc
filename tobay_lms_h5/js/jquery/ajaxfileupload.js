jQuery.extend({handleError:function(e,t,r,o){e.error?e.error(t,r,o):t.responseText&&console.log(t.responseText)},createUploadIframe:function(e,t){var r="jUploadFrame"+e,o='<iframe id="'+r+'" name="'+r+'" style="position:absolute; top:-9999px; left:-9999px"';return window.ActiveXObject&&("boolean"==typeof t?o+=' src="javascript:false"':"string"==typeof t&&(o+=' src="'+t+'"')),o+=" />",jQuery(o).appendTo(document.body),jQuery("#"+r).get(0)},createUploadForm:function(e,t,r){var o="jUploadForm"+e,n="jUploadFile"+e,a=jQuery('<form  action="" method="POST" name="'+o+'" id="'+o+'" enctype="multipart/form-data"></form>');if(r)for(var u in r)jQuery('<input type="hidden" name="'+u+'" value="'+r[u]+'" />').appendTo(a);var c=jQuery("#"+t),d=jQuery(c).clone();return jQuery(c).attr("id",n),jQuery(c).before(d),jQuery(c).appendTo(a),jQuery(a).css("position","absolute"),jQuery(a).css("top","-1200px"),jQuery(a).css("left","-1200px"),jQuery(a).appendTo("body"),a},ajaxFileUpload:function(e){e=jQuery.extend({},jQuery.ajaxSettings,e);var t=(new Date).getTime(),r=jQuery.createUploadForm(t,e.fileElementId,void 0!==e.data&&e.data),o=(jQuery.createUploadIframe(t,e.secureuri),"jUploadFrame"+t),n="jUploadForm"+t;e.global&&!jQuery.active++&&jQuery.event.trigger("ajaxStart");var a=!1,u={};e.global&&jQuery.event.trigger("ajaxSend",[u,e]);var c=function(t){var n=document.getElementById(o);try{n.contentWindow?(u.responseText=n.contentWindow.document.body?n.contentWindow.document.body.innerHTML:null,u.responseXML=n.contentWindow.document.XMLDocument?n.contentWindow.document.XMLDocument:n.contentWindow.document):n.contentDocument&&(u.responseText=n.contentDocument.document.body?n.contentDocument.document.body.innerHTML:null,u.responseXML=n.contentDocument.document.XMLDocument?n.contentDocument.document.XMLDocument:n.contentDocument.document),u.responseText&&(u.responseText=u.responseText.replace(/<pre[^>]*>|<\/pre>/g,""))}catch(t){jQuery.handleError(e,u,null,t)}if(u||"timeout"==t){a=!0;var c;try{if("error"!=(c="timeout"!=t?"success":"error")){var d=jQuery.uploadHttpData(u,e.dataType);e.success&&e.success(d,c),e.global&&jQuery.event.trigger("ajaxSuccess",[u,e])}else jQuery.handleError(e,u,c)}catch(t){c="error",jQuery.handleError(e,u,c,t)}e.global&&jQuery.event.trigger("ajaxComplete",[u,e]),e.global&&!--jQuery.active&&jQuery.event.trigger("ajaxStop"),e.complete&&e.complete(u,c),jQuery(n).unbind(),setTimeout(function(){try{jQuery(n).remove(),jQuery(r).remove()}catch(t){jQuery.handleError(e,u,null,t)}},100),u=null}};e.timeout>0&&setTimeout(function(){a||c("timeout")},e.timeout);try{r=jQuery("#"+n);jQuery(r).attr("action",e.url),jQuery(r).attr("method","POST"),jQuery(r).attr("target",o),r.encoding?jQuery(r).attr("encoding","multipart/form-data"):jQuery(r).attr("enctype","multipart/form-data"),jQuery(r).submit()}catch(t){jQuery.handleError(e,u,null,t)}return jQuery("#"+o).load(c),{abort:function(){}}},uploadHttpData:function(e,t){var r=!t;return r=(r="xml"==t||r?e.responseXML:e.responseText).replace(/<script[^>]*>.*(?=<\/script>)<\/script>/gi,"")}});