function act_fn(a){if(console.log(a),"200"==a.errCode){var i="";$.each(a.list,function(a,s){if("0"==a){var l=new Object;l.rows=3,l.page=1,l.classifyId=s.classifyId,commonParm(l),askZx(l),i+='<li sortId="'+s.classifyId+'" class="active">'+s.classifyname+"</li>"}else i+='<li sortId="'+s.classifyId+'">'+s.classifyname+"</li>"}),$("#zcTab").html(i),tagFun()}}function askZx(a){jsonAjax(InterFace.getZxlist,a,zx_fn)}function zx_fn(a){if(console.log(a),"200"==a.errCode){var i="";$.each(a.list,function(a,s){if(s.text.length>185)l=s.text.substring(0,185)+"...";else var l=s.text;var e=new Date(s.createtime),t=e.getUTCFullYear(),c=e.getUTCMonth()+1,n=e.getUTCDate();""==s.policyImg||"undefined"==s.policyImg||void 0==s.policyImg||null==s.policyImg?i+='<ul class="clearfix zc2" id="'+s.policyId+'"><div class="xun_l fl"><p class="tit">'+s.title+'</p><p class="con">'+l+'</p></div><div class="xun_r fr"><p class="md">'+c+"-"+n+'</p><p class="year">'+t+"</p></div></ul>":i+='<ul class="clearfix zc1" id="'+s.policyId+'"><div class="fl xunF"><img src="'+s.policyImg+'"></div><div class="xun_l fl"><p class="tit">'+s.title+'</p><p class="con">'+l+'</p></div><div class="xun_r fr"><p class="md">'+c+"-"+n+'</p><p class="year">'+t+"</p></div></ul>"}),$("#xunList").html(i),$("#xunList ul").on("click",function(){var a=$(this).attr("id");$("#page_zx .active").attr("jp-data");window.open("zixunInfo.html?zId="+a,"_blank")});var s=a.rowsCount;if(s>0)if(null==getSearch("page"))$("#page_zx").jqPaginator({totalCounts:s,pageSize:3,visiblePages:5,first:'<li class="first"><a href="javascript:void(0);">首页</a></li>',prev:'<li class="prev"><a href="javascript:void(0);">上一页</a></li>',next:'<li class="next"><a href="javascript:void(0);">下一页</a></li>',last:'<li class="last"><a href="javascript:void(0);">尾页</a></li>',page:'<li class="page"><a href="javascript:void(0);">{{page}}</a></li>',onPageChange:function(a,i){if("init"!==i){var s=$("#zcTab .active").attr("sortid"),l=new Object;l.rows=3,l.page=a,l.classifyId=s,console.log(a),commonParm(l),askZxpage(l)}}});else{var l=Number(getSearch("page"));$("#page_zx").jqPaginator({totalCounts:s,currentPage:l,pageSize:3,visiblePages:5,first:'<li class="first"><a href="javascript:void(0);">首页</a></li>',prev:'<li class="prev"><a href="javascript:void(0);">上一页</a></li>',next:'<li class="next"><a href="javascript:void(0);">下一页</a></li>',last:'<li class="last"><a href="javascript:void(0);">尾页</a></li>',page:'<li class="page"><a href="javascript:void(0);">{{page}}</a></li>',onPageChange:function(a,i){if("init"!==i){var s=$("#zcTab .active").attr("sortid"),l=new Object;l.rows=3,l.page=a,l.classifyId=s,commonParm(l),askZxpage(l)}}})}else $(".xunList").html("暂无资讯")}else"306"==a.errCode&&($(".xunList").html("暂无资讯"),void 0==$("#page_zx").data("jqPaginator")||"undefined"==$("#page_zx").data("jqPaginator")||$("#page_zx").jqPaginator("destroy"))}function askZxpage(a){jsonAjax(InterFace.getZxlist,a,zxpage_fn)}function zxpage_fn(a){if(console.log(a),"200"==a.errCode){var i="";$.each(a.list,function(a,s){if(s.text.length>185)l=s.text.substring(0,185)+"...";else var l=s.text;var e=new Date(s.createtime),t=e.getUTCFullYear(),c=e.getUTCMonth()+1,n=e.getUTCDate();""==s.policyImg||"undefined"==s.policyImg||void 0==s.policyImg||null==s.policyImg?i+='<ul class="clearfix zc2" id="'+s.policyId+'"><div class="xun_l fl"><p class="tit">'+s.title+'</p><p class="con">'+l+'</p></div><div class="xun_r fr"><p class="md">'+c+"-"+n+'</p><p class="year">'+t+"</p></div></ul>":i+='<ul class="clearfix zc1" id="'+s.policyId+'"><div class="fl xunF"><img src="'+s.policyImg+'"></div><div class="xun_l fl"><p class="tit">'+s.title+'</p><p class="con">'+l+'</p></div><div class="xun_r fr"><p class="md">'+c+"-"+n+'</p><p class="year">'+t+"</p></div></ul>"}),$("#xunList").html(i),$("#xunList ul").on("click",function(){var a=$(this).attr("id");$("#page_zx .active").attr("jp-data");window.open("zixunInfo.html?zId="+a,"_blank")})}}function tagFun(){$(".zcTab li").on("click",function(){$(this).index(".zcTab li");$(this).addClass("active").siblings(".zcTab li").removeClass("active");var a=$(this).attr("sortId"),i=new Object;i.rows=3,i.page=1,i.classifyId=a,commonParm(i),askZx(i)})}function askZxtype(a){jsonAjax(InterFace.getZxlist,a,cur_fn)}function cur_fn(a){if(console.log(a),"200"==a.errCode){var i="";$.each(a.list,function(a,s){if(s.text.length>185)l=s.text.substring(0,185)+"...";else var l=s.text;var e=new Date(s.createtime),t=e.getUTCFullYear(),c=e.getUTCMonth()+1,n=e.getUTCDate();""==s.policyImg||"undefined"==s.policyImg||void 0==s.policyImg||null==s.policyImg?i+='<ul class="clearfix zc2" id="'+s.policyId+'"><div class="xun_l fl"><p class="tit">'+s.title+'</p><p class="con">'+l+'</p></div><div class="xun_r fr"><p class="md">'+c+"-"+n+'</p><p class="year">'+t+"</p></div></ul>":i+='<ul class="clearfix zc1" id="'+s.policyId+'"><div class="fl xunF"><img src="'+s.policyImg+'"></div><div class="xun_l fl"><p class="tit">'+s.title+'</p><p class="con">'+l+'</p></div><div class="xun_r fr"><p class="md">'+c+"-"+n+'</p><p class="year">'+t+"</p></div></ul>"}),$("#xunList").html(i),$("#xunList ul").on("click",function(){var a=$(this).attr("id");$("#page_zx .active").attr("jp-data");window.open("zixunInfo.html?zId="+a,"_blank")});var s=a.rowsCount;if(s>0)if(null==getSearch("page"))$("#page_zx").jqPaginator({totalCounts:s,pageSize:3,visiblePages:5,first:'<li class="first"><a href="javascript:void(0);">首页</a></li>',prev:'<li class="prev"><a href="javascript:void(0);">上一页</a></li>',next:'<li class="next"><a href="javascript:void(0);">下一页</a></li>',last:'<li class="last"><a href="javascript:void(0);">尾页</a></li>',page:'<li class="page"><a href="javascript:void(0);">{{page}}</a></li>',onPageChange:function(a,i){if("init"!==i){var s=new Object;s.rows=7,s.page=a,console.log(a),commonParm(s),askZxpage(s)}}});else{var l=Number(getSearch("page"));$("#page_zx").jqPaginator({totalCounts:s,currentPage:l,pageSize:3,visiblePages:5,first:'<li class="first"><a href="javascript:void(0);">首页</a></li>',prev:'<li class="prev"><a href="javascript:void(0);">上一页</a></li>',next:'<li class="next"><a href="javascript:void(0);">下一页</a></li>',last:'<li class="last"><a href="javascript:void(0);">尾页</a></li>',page:'<li class="page"><a href="javascript:void(0);">{{page}}</a></li>',onPageChange:function(a,i){if("init"!==i){var s=new Object;s.rows=3,s.page=a,commonParm(s),askZxpage(s)}}})}else $(".xunList").html("暂无资讯")}}$("#tabB li").eq(2).addClass("active").siblings("li").removeClass("active"),$(document).attr("title","政策解读_人人创培训监管服务平台");var commObj=new Object;commonParm(commObj),jsonAjax(InterFace.atclassify,commObj,act_fn);var initId="";