function resizeIntro(){var e=$("#introH").height(),o=$("#introH").text(),r=o.substring(0,100),t=o.substring(0,60);e>159&&$("#introH").text(r+"..."),e>186&&$("#introH").text(t+"...")}function scChange(){$(".shactive").on("click",function(){jsonAjax(InterFace.qxcol,course_obj,cancelColecType)}),$(".shnactive").on("click",function(){void 0==getCookie("token")||""==getCookie("token")||null==getCookie("token")?M.dialog1=jqueryAlert({content:"您还没登录不能收藏课程，请到登录界面登录",closeTime:1e3,modal:!0}):jsonAjax(InterFace.collection,course_obj,addColecType)})}function commetList(){var e=new Object;e.coursewareId=getSearch("id"),e.page=1,e.rows=7,commonParm(e),jsonAjax(InterFace.commetList,e,function(e){if(console.log(e),"200"==e.errCode){$(".other_pub .prepend").remove(),$("#commtab i").text(e.comments.length).show();var o="";$.each(e.comments,function(e,r){o+="<div class='publist clearfix'><div class='innerBox clearfix'><a class='user-head fl'>",null!==r.userImg&&"null"!==r.userImg&&""!==r.userImg?o+="<img src="+r.userImg+"></a>":o+='<img src="images/ava1.png"></a>';var t=$.myTime.UnixToDate(r.commentDate,!0);o+="<div class='user-r fl'><h4><i>"+r.userName+"</i><span>评分<em>"+r.courseScore+"</em></span><span class='fr time'>"+t+"</span></h4><p>"+r.commentContent+"</p></div></div></div>"}),$("#otrPub").append(o)}else"306"==e.errCode&&($(".nodata").css("display","block"),$("#commtab i").hide())})}function getItem_fn(e){if(console.log(e),"200"==e.errCode){if(e.crCourseware){if(""!==e.crCourseware.chapterList&&e.crCourseware.chapterList.length>0){var o="";$.each(e.crCourseware.chapterList,function(e,r){o+=' <li><h5 class="name">'+r.chaptername+"</h5>",$.each(r.courseList,function(e,r){o+='<p class="desc">'+r.coursename+"</p>"}),o+="</li>"}),$("#lessItem").append(o)}}else $("#lessItem").html("");loadig.hide("fees")}}function tui_fn(e){if("200"==e.errCode){var o="";$.each(e.courseList,function(e,r){if(null!==r.coursewareMinUrl&&"null"!==r.coursewareMinUrl&&void 0!==r.coursewareMinUrl&&"undefined"!==r.coursewareMinUrl)t=r.coursewareMinUrl;else var t=r.coursewareurl;if(r.introduce.length>30)a=r.introduce.substring(0,30)+"...";else var a=r.introduce;r.money>0?o+=e>0&&(e+1)%4==0?'<ul id="'+r.coursewareId+'" style="margin-right:0px;" sftype="1">':'<ul id="'+r.coursewareId+'" sftype="1">':o+=e>0&&(e+1)%4==0?'<ul id="'+r.coursewareId+'" style="margin-right:0px;" sftype="2">':'<ul id="'+r.coursewareId+'" sftype="2">',o+='<li><img src="'+t+version+'" alt=""><div class="con"><h3 class="study-hd"><a href="javascript:;" target="_blank">'+r.coursewarename+'</a></h3><p class="study_sort">'+r.enClassifyName+'<span class="fr"><i class="iconfont icon-yanjing"></i><i>'+r.coursewarepv+'</i></span></p><div class="study_lesson">课程简介：'+a+"</div></div></li></ul>"}),$("#sortList").html(o),$("#sortList ul").on("click",function(){var e=$(this).prop("id"),o=$(this).attr("sftype");"1"==o?window.open("lessonInfo_fee.html?id="+e,"_blank"):"2"==o&&window.open("lessoninfo.html?id="+e,"_blank")})}}function commetAdd_fn(e){if("200"==e.errCode){var o,r,t=$.myTime.UnixToDate(e.commentdate,!0);o=""==e.imgurl||null==e.imgurl||"null"==e.imgurl?"images/ava1.png":e.imgurl,r=""==e.nickName||null==e.nickName||"null"==e.nickName?"未设置":e.nickName;var a='<div class="publist clearfix prepend"><div class="innerBox clearfix"><a class="user-head fl"><img src="'+o+version+'" ></a><div class="user-r fl"><h4><i>'+r+" </i><span>评分<em>"+e.coursescore+'</em></span><span class="fr time">'+t+"</span></h4><p>"+e.commentcontent+"</p></div></div></div>";$(".nodata").hide(),$(".other_pub").prepend(a),$("#comment").val("")}else"513"==e.errCode?M.dialog1=jqueryAlert({content:"评价中含敏感字，请注意",closeTime:1e3,modal:!0}):"304"==e.errCode&&(M.dialog1=jqueryAlert({content:"登录之后才能评价",closeTime:1e3,modal:!0}))}function getLeson_info(e){if(console.log(e),"200"==e.errCode){$("#p_scor").text(e.coursewarescore),$("#p_col").text(e.coursewarecollect),$("#p_pv").text(e.coursewarepv);var o=Number(e.money).toFixed(2);if($("#curprice").text(o),$(".corname").text(e.coursewarename),$("#curl").css("background-image","url("+e.coursewareurl+")"),$("#corHour").text(millsTrans(e.coursewaredate)),e.introduce)var r=e.introduce.substring(0,30),t=e.introduce.substring(0,120);else var r="",t="";$(".infoIntroduce").text(r),$("#introH").text(t),$(document).attr("title",e.coursewarename+"_人人创培训监管服务平台"),loadig.hide("fees")}else if("306"==e.errCode){loadig.hide("fees"),M.dialog1=jqueryAlert({content:"该课件不存在或被删除",closeTime:1e3,modal:!0});var a=setTimeout(function(){window.location.href="lesson.html",clearTimeout(a)},1e3)}}function getTeachInfo(e){if("200"==e.errCode){if(""==e.tricon||null==e.tricon||"null"==e.tricon||"undefined"==e.tricon)o="images/xzx.jpg";else var o=e.tricon;$("#teacher_intro img").attr("src",o),$("#teacher_intro h5").text(e.trname),$("#teacher_intro p").text(e.trabstract)}}function getColecType(e){"200"==e.errCode&&("2"==e.collectionType?$(".shoucang").removeClass("shactive").addClass("shnactive"):"1"==e.collectionType&&$(".shoucang").removeClass("shnactive").addClass("shactive"),scChange())}function cancelColecType(e){"304"==e.errCode||"200"==e.errCode&&($(".shoucang").removeClass("shactive").addClass("shnactive"),scChange())}function addColecType(e){"304"==e.errCode||"200"==e.errCode&&($(".shoucang").removeClass("shnactive").addClass("shactive"),scChange())}function flyGwc(e){$('<i class="iconfont icon-gouwuche" style="font-size:30px;color:#333;">').fly({start:{left:e.pageX,top:e.pageY},end:{left:offset.left+10,top:offset.top+10,width:0,height:0},onEnd:function(){}})}function saveGwc(e){if(console.log(e),"200"==e.errCode){var o=new Object;commonParm(o),jsonAjax(InterFace.queryGwclist,o,queryFn)}}jQuery.support.cors=!0,loadig.load("fees",1,"正在加载中，请稍后...");var version=getVersion(),M={},courseId=getSearch("id"),com_obj=new Object;commonParm(com_obj),commetList(),void 0!==getCookie("userId")||""!==getCookie("userId")||null!==getCookie("userId")?void 0===getCookie("userImg")&&""===getCookie("userImg")&&null===getCookie("userImg")||$(".uerAvater").attr("src",getCookie("userImg")):$(".uerAvater").attr("src","images/ava1.png"+version);var course_obj=new Object;course_obj.coursewareId=getSearch("id"),commonParm(course_obj),console.log(course_obj),jsonAjax(InterFace.listInfo,course_obj,getLeson_info),$(window).on("resize",function(){resizeIntro()}),jsonAjax(InterFace.askTeacher,course_obj,getTeachInfo),jsonAjax(InterFace.askCollect,course_obj,getColecType);var itemParm=new Object;itemParm.coursewareId=getSearch("id"),itemParm.page=1,itemParm.rows=7,commonParm(itemParm),jsonAjax(InterFace.lessonItem,itemParm,getItem_fn),$(".publishBtn").on("click",function(){if(void 0!==getCookie("userId")&&"undefined"!==getCookie("userId")&&""!==getCookie("userId")&&null!==getCookie("userId"))if($.trim($("#comment").val()).length<1)M.dialog1=jqueryAlert({content:"请输入评论内容",closeTime:1e3,modal:!0});else{var e=Number($(".function-hint").text()),o=getSearch("id"),r=$("#comment").val(),t=new Object;t.coursewareid=o,t.coursescore=e,t.commentcontent=r,commonParm(t),console.log(t),jsonAjax(InterFace.commetAdd,t,commetAdd_fn)}else M.dialog1=jqueryAlert({content:"您还没登录，不能发表评论",closeTime:1e3,modal:!0})});var courType2=new Object;courType2.count=4,courType2.type=2,commonParm(courType2),jsonAjax(InterFace.courseList,courType2,tui_fn),$(".lessTab").find("li").on("click",function(){var e=$(this).index(".lessTab li");$(".lessTab li").eq(1);$(this).addClass("active").siblings(".lessTab li").removeClass("active"),$(".lesConlist").eq(e).addClass("show").siblings(".lesConlist").removeClass("show")}),$(".star").raty({number:5,targetType:"number",path:"images",size:24,starHalf:"star_half.png",starOff:"star_off.png",starOn:"star_on.png",half:!0,halfShow:!0,hints:[2,4,6,8,10],score:2.5,click:function(e,o){var e=e;$(".function-hint").text(2*e)}});var offset=$("#shop-cart").offset();$(".addcart").click(function(e){if(null==getCookie("token")||"undefined"==getCookie("token")||void 0==getCookie("token")||""==getCookie("token")){var o=new Object,r=getSearch("id"),t=$(".corname").text(),a=$("#curl").css("background-image").split('url("')[1].split('")')[0],r=getSearch("id"),s=$("#curprice").text();o.corId=r,o.corname=t,o.corImg=a,o.curprice=s;var n=new Array;if(void 0!==getCookie("addCart")&&"undefined"!==getCookie("addCart")&&""!==getCookie("addCart")&&null!==getCookie("addCart")){n=JSON.parse(getCookie("addCart"));var i=!1;if($.each(n,function(e,o){if(o.corId==r)return i=!0,!1;i=!1}),0==i){flyGwc(e);c=Number($(".js-cart-num").text());c+=1,$(".js-cart-num").text(c).show(),$(".js-incart-num").text(c),$(".cart-wrap .clear-cart").hide(),$(".cart-wrap .cart-wrap-box").show(),n.push(o);l=JSON.stringify(n);addCookie("addCart",l,0);d="";d+=' <li class="clearfix js-item" id='+r+'><a href="lessoninfo_fee.html?id='+r+'"><img class="fl" src="'+a+'"></a><div class="content-box fl"><a href="" target="_blank"><h3>'+t+'</h3></a><p class="clearfix"><span class="price fl">￥'+s+'</span><span class="del fr js-close" onclick="delChapter(this)">删除</span></p></div></li>',$("#js-card-ul ul").append(d)}else M.dialog1=jqueryAlert({content:"已存在购物车",closeTime:1e3,modal:!0})}else{flyGwc(e);var c=Number($(".js-cart-num").text());c+=1,$(".js-cart-num").text(c).show(),$(".js-incart-num").text(c),$(".cart-wrap .clear-cart").hide(),$(".cart-wrap .cart-wrap-box").show(),n.push(o);var l=JSON.stringify(n);addCookie("addCart",l,0);var d="";d+=' <li class="clearfix js-item" id='+r+'><a href="lessoninfo_fee.html?id='+r+'"><img class="fl" src="'+a+'"></a><div class="content-box fl"><a href="" target="_blank"><h3>'+t+'</h3></a><p class="clearfix"><span class="price fl">￥'+s+'</span><span class="del fr js-close" onclick="delChapter(this)">删除</span></p></div></li>',$("#js-card-ul ul").append(d)}}else{var u=new Object;u.coursewareid=getSearch("id"),commonParm(u),jsonAjax(InterFace.existGwc,u,function(o){if("200"==o.errCode)if(0==o.exist){flyGwc(e);var r=new Object;r.coursewareid=getSearch("id"),commonParm(r),console.log(r),jsonAjax(InterFace.saveGwc,r,saveGwc)}else M.dialog1=jqueryAlert({content:"已存在购物车",closeTime:1e3,modal:!0})})}}),$("#buy-trigger").on("click",function(){if(void 0==getCookie("token")||""==getCookie("token")||null==getCookie("token"))window.location.href="login.html";else{var e=getSearch("id");addCookie("limitGoods",e,0),window.location.href="confirmorder.html?type=2"}});