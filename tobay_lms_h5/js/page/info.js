function getUser(){jsonAjax(InterFace.getUinfo,com_obj,getInfo_fn)}function bankList(){jsonAjax(InterFace.bankList,com_obj,getBankFn)}function getBankFn(e){if(console.log(e),"200"==e.errCode){var a="";$.each(e.list,function(e,o){"0"==e?(a+='<li class="selected" id="'+o.banksId+'" name="'+o.banksname+'"><img src="'+o.bankslogo+'"></li>',$("#selectBankId").val(o.banksId)):a+='<li id="'+o.banksId+'" name="'+o.banksname+'"><img src="'+o.bankslogo+'"></li>'}),$(".bankBox_ul").html(a),$(".bankBox_ul li").on("click",function(){$(this).addClass("selected").siblings(".bankBox_ul li").removeClass("selected");var e=$(this).attr("id");$("#selectBankId").val(e)})}}function mybankInfo(){console.log("into"),hideAllTooltips(),jsonAjax(InterFace.bankInfo,com_obj,getmyBankFn)}function getmyBankFn(e){if(console.log(e),"200"==e.errCode){flagEdit="yes",$(".tabSwitch li").eq(2).hasClass("active")&&$("#editBank").show(),$("#bankLoad").hide(),$("#myBankLogo").attr("src",e.bankslogo),$(".reBind .hadBank #banks").val(e.openbank),$(".reBind .hadBank #bankName").val(e.cardname);var a=formatBankNumber(e.cardnum);$(".reBind .hadBank #postBank").val(a),$("#postBankhiden").val(e.cardnum),$("#selectBankId").val(e.bankid),$(".reBind .hadBank").show()}else"306"==e.errCode&&($("#bankLoad").hide(),$(".reBind h4").show(),$("#editBank").hide())}function updatebankFn(e){console.log(e),"200"==e.errCode?(mybankInfo(),$(".oBind").hide(),$(".reBind").show(),$(".reBind .hadBank").hide(),$(".reBind h4").hide()):M.dialog1=jqueryAlert({content:"修改银行卡失败",closeTime:1e3,modal:!0})}function savebankFn(e){console.log(e),"200"==e.errCode?(mybankInfo(),$(".oBind").hide(),$(".reBind h4").hide()):"600"==e.errCode?(M.dialog1=jqueryAlert({content:"该用户已经绑定银行卡,请更换账户",closeTime:1e3,modal:!0}),$(".reBind h4").show()):"400"==e.errCode&&(M.dialog1=jqueryAlert({content:"绑定银行卡系统错误",closeTime:1e3,modal:!0}))}function saveInfo_fn(e){console.log(e),"200"==e.errCode&&(getUser(),e.photoimgurl?($("#renlianBas").val(e.photoimgurl),$("#renlianImg").attr("src",e.photoimgurl),addCookie("photoimgurl",e.photoimgurl,0)):($("#renlianBas").val(""),$("#renlianImg").attr("src","images/xzx.jpg")),$(".show.modifyUser input").attr("readonly",!0).removeClass("editInput"),1==$(".show.modifyUser #man").prop("checked")?($(".show.modifyUser  #sex_input p").hide(),$(".show.modifyUser  #sex_input b").text("男").show()):1==$(".show.modifyUser #femal").prop("checked")&&($(".show.modifyUser #sex_input p").hide(),$(".show.modifyUser  #sex_input b").text("女").show()),$(".show.modifyUser .passBtn").hide(),$("#renlianBtn").hide())}function getInfo_fn(e){if(console.log("getUser"),console.log(e),"200"==e.errCode){"3"==e.stafftype?$(".perWlist").eq(1).addClass("show").siblings(".perWlist").removeClass("show"):"4"==e.stafftype&&$(".perWlist").eq(0).addClass("show").siblings(".perWlist").removeClass("show"),""==e.nickName||"null"==e.nickName||null==e.nickName?($(".show input[name='nickName']").val("未设置"),$("#xingM").text("未设置")):($(".show input[name='nickName']").val(e.nickName),$("#xingM").text(e.nickName)),$(".show input[name='staffMobile']").val(e.staffmoile),""==e.email||"null"==e.email||null==e.email?$(".show input[name='staffEmail']").val("未设置"):$(".show input[name='staffEmail']").val(e.email),""==e.staffname||"null"==e.staffname||null==e.staffname?$(".show #userName").val("未设置"):$(".show #userName").val(e.staffname),"1"==e.staffsex?($(".show  #sex_input b").text("男"),$(".show  #sex_input p").hide(),$(".show #man").prop("checked","checked"),addCookie("staffsex",e.staffsex,0)):"2"==e.staffsex?($(".show  #sex_input b").text("女"),$(".show  #sex_input p").hide(),$(".show #femal").prop("checked","checked"),addCookie("staffsex",e.staffsex,0)):($(".show  #sex_input b").text("未设置"),$(".show  #sex_input p").hide(),addCookie("staffsex","0",0)),e.staffidcard?$(".show #staffIdCard").val(e.staffidcard):$(".show #staffIdCard").val("未设置"),e.staffpost?$(".show #staffPost").val(e.staffpost):$(".show #staffPost").val("未设置");var a=getCookie("enterpriseName");$(".show #enterpriseName").val(a),$(".show #sex_input input").on("change",function(){$(this).prop("checked","checked").siblings("input").removeAttr("checked")}),"1"==e.wxBoundType?($(".bindStatus").text("未绑定"),$("#roBindWx").css("display","block"),$("#roBindWxs").hide(),$(".inner-i-box .iconfont").removeClass("active")):"2"==e.wxBoundType&&($(".bindStatus").removeClass("red").text("已绑定"),$("#roBindWxs").css("display","block"),$("#roBindWx").hide(),$(".inner-i-box .iconfont").addClass("active")),$(".toBindwx").on("click",function(){wxPage("1")}),$(".disBindwx").on("click",function(){$(".msg-laybox").show()}),$("#userLoad").hide()}else"305"==e.errCode?($("#userLoad").hide(),M.dialog1=jqueryAlert({content:"用户详情查询失败",closeTime:1e3,modal:!0})):"309"==e.errCode&&($("#userLoad").hide(),M.dialog1=jqueryAlert({content:"用户不存在",closeTime:1e3,modal:!0}))}function bindWx_fn(e){"200"==e.errCode?($(".msg-laybox").hide(),$(".inner-i-box .icon-weixin").removeClass("active"),$(".inner-i-box .bindStatus").removeClass("red").text("未绑定"),$("#roBindWx").css("display","block"),$("#roBindWxs").hide()):"400"==e.errCode&&($(".msg-laybox").hide(),M.dialog1=jqueryAlert({content:"系统错误，请联系管理员",closeTime:1e3,modal:!0}))}function ptAhthFace_fn(e){"331"==e.errCode?(M.dialog1=jqueryAlert({content:"图像没有人脸,请摆正摄像头",closeTime:1e3,modal:!0}),$("#pickCamer").removeClass("disabled").removeAttr("disabled").val("拍照")):"332"==e.errCode?(M.dialog1=jqueryAlert({content:"人脸识别失败,请重新拍摄",closeTime:1e3,modal:!0}),$("#pickCamer").removeClass("disabled").removeAttr("disabled").val("拍照")):"200"==e.errCode&&(M.dialog1=jqueryAlert({content:"人脸识别成功",closeTime:1e3,modal:!0}),$("#renlianImg").attr("src","data:image/png;base64,"+$.scriptcam.getFrameAsBase64()),$("#renlianBas").val($.scriptcam.getFrameAsBase64()),$("#pickCamer").removeClass("pickCamer"),$("#camerBox").hide(),$("#pickCamer").removeClass("disabled").removeAttr("disabled").val("拍照"))}loadig.hide("planLoad"),$(document).attr("title","信息_人人创培训监管服务平台");var com_obj=new Object;commonParm(com_obj);var M={};getUser(),alertHide(),pdUserLogin(),$("#bank_post").bankInput({min:4,max:24}),"yes"==getCookie("bankSrc")?($(".tabSwitch li").eq(2).addClass("active").siblings(".tabSwitch li").removeClass("active"),$(".swCon").eq(2).addClass("show").siblings(".swCon").removeClass("show"),$("#edit").hide(),delCookie("bankSrc")):$("#edit").show(),"null"!==getCookie("photoimgurl")&&""!==getCookie("photoimgurl")&&"undefined"!==getCookie("photoimgurl")&&void 0!==getCookie("photoimgurl")?($("#renlianBas").val(getCookie("photoimgurl")),$("#renlianImg").attr("src",getCookie("photoimgurl"))):($("#renlianBas").val(""),$("#renlianImg").attr("src","images/xzx.jpg"));var flagEdit="no";mybankInfo(),bankList(),$("#tobindBank").unbind("click").bind("click",function(){$(this).parent().hide(),$(".oBind").show()}),$("#savemyBank").unbind("click").bind("click",function(){var e=$("#selectBankId").val(),a=$("#bank_name").val(),o=$("#bank_post_hiden").val(),n=$("#bank_bank").val(),i=new Object;i.bankid=e,i.cardname=a,i.cardnum=o,i.openbank=n,commonParm(i),console.log(i);var s=!1;$(".oBind .form_v").each(function(){if("bank_post"==$(this).attr("id"))if("-1"==$(this).val().indexOf("*")){if(0==(s=validate(this)))return!1}else s=!0;else if(0==(s=validate(this)))return!1}),1==s&&($("#savemyBank").addClass("disabled").attr("disabled","disabled").text("正在绑定.."),$("#savemyBank").hasClass("modify")?jsonAjax(InterFace.updateBank,i,updatebankFn):jsonAjax(InterFace.saveBank,i,savebankFn))}),$(".tabSwitch li").on("click",function(){var e=$(this).index(".tabSwitch li");$(this).addClass("active").siblings(".tabSwitch li").removeClass("active"),$(".swCon").eq(e).addClass("show").siblings(".swCon").removeClass("show"),"0"==e?$("#edit").show():$("#edit").hide(),"2"==e?"yes"==flagEdit&&$("#editBank").show():$("#editBank").hide()}),$("#edit").on("click",function(){$(".show .canEdit").removeAttr("readonly").addClass("editInput"),$(".show .canEdit").removeAttr("disabled"),$(".show  #sex_input b").hide(),$(".show  #sex_input p").show(),$(".show  #sex_input p input").removeAttr("disabled"),$(".show .passBtn").show(),"null"!==getCookie("photoimgurl")&&""!==getCookie("photoimgurl")&&"undefined"!==getCookie("photoimgurl")&&void 0!==getCookie("photoimgurl")?$("#renlianBtn").hide():$("#renlianBtn").show()}),$("#editBank").on("click",function(){$(".reBind").hide(),$.each($(".bankBox_ul li"),function(e,a){$(a).attr("id")==$("#selectBankId").val()&&$(a).addClass("selected").siblings(".bankBox_ul li").removeClass("selected")});var e=$("#bankName").val(),a=($("#postBankhiden").val(),$("#banks").val());$("#bank_bank").val(a),$("#bank_name").val(e),$("#bank_post").val(""),$("#savemyBank").hasClass("modify")||$("#savemyBank").addClass("modify"),$("#savemyBank").removeClass("disabled").removeAttr("disabled").text("保存"),$("#bacnkCancel").hasClass("modify")||$("#bacnkCancel").addClass("modify"),$(".oBind").show()}),$(".formBox .form_v").on("blur",function(){validate(this)}),$(".oBind .form_v").on("blur",function(){if(validate(this),"bank_post"==$(this).attr("id")&&1==validate(this)){var e=Trim($("#bank_post").val(),"g"),a=formatBankNumber(e);$("#bank_post_hiden").val(e),$("#bank_post").val(a)}}),$(".sava").on("click",function(){if($(".show.modifyUser .form_v").each(function(){return judgeGap=validate(this),0!=judgeGap&&(!($(".show.modifyUser #userName").val().length>20)&&(!($(".show.modifyUser #staffEmail").val().length>50)&&void 0))}),1==judgeGap){var e=$(".show.modifyUser input[name='nickName']").val(),a=$(".show.modifyUser input[name='staffEmail']").val(),o=$(".show.modifyUser input[name='userName']").val(),n=$("#renlianBas").val();if(addCookie("staffName",o),1==$(".show.modifyUser #sex_input #man").prop("checked")){i=1;addCookie("staffsex","1",0)}else if(1==$(".show.modifyUser #sex_input #femal").prop("checked")){var i=2;addCookie("staffsex","2",0)}"未设置"==e&&(e=""),"未设置"==a&&(a=""),"未设置"==o&&(o="");var s=new Object;s.staffEmail=a,s.staffName=o,s.staffSex=i,s.nickName=e,s.photoimgurl=n,s.imgStr="png",commonParm(s),console.log(s),jsonAjax(InterFace.editUserInfo,s,saveInfo_fn)}}),$("#bacnkCancel").on("click",function(){$(".reBind").show(),$("#bacnkCancel").hasClass("modify")?($(".oBind").hide(),$(".reBind .hadBank").show()):($(".oBind").hide(),$(".reBind h4").show())}),$(".cancel").on("click",function(){hideAllTooltips(),"未设置"==$(".modifyUser input.canEdit").val()&&$(".modifyUser input.canEdit").val("未设置"),$(".show.modifyUser  #sex_input p").hide(),"1"==getCookie("staffsex")?($(".show.modifyUser  #sex_input b").text("男").show(),$(".show.modifyUser #man").prop("checked","checked")):"2"==getCookie("staffsex")?($(".show.modifyUser  #sex_input b").text("女").show(),$(".show.modifyUser #femal").prop("checked","checked")):$(".show.modifyUser  #sex_input b").text("未设置").show(),$(".modifyUser input.canEdit").attr("readonly"),$(".modifyUser input.canEdit").removeClass("editInput"),$(".passBtn").hide()}),$(".js-sf-submit").on("click",function(){var e=new Object;e.code="",e.wxBoundType=2,commonParm(e),console.log(e),jsonAjax(InterFace.boundWx,e,bindWx_fn)}),$(".btn-close").on("click",function(){$(this).parents(".msg-laybox").hide()}),$("#renlianBtn").unbind("click").bind("click",function(){hideAllTooltips(),$("#camerBox").show(),$("#webcam").scriptcam({width:372,height:290,showMicrophoneErrors:!0,onError:function(e,a){console.log(e),console.log(a),3==e&&(M.dialog1=jqueryAlert({content:"无法检测到摄像头，请检查",closeTime:1e3,modal:!0})),4==e&&$("#camerBox").hide()},cornerRadius:0,cornerColor:"e3e5e2",connected:function(e){},onWebcamReady:function(e,a,o,n,i){$("#pickCamer").addClass("pickCamer")},onMotion:function(e){},onPictureAsBase64:function(e){$("#formfield").val(e),$("#image").attr("src","data:image/png;base64,"+e)}})}),$("#pickCamer").on("click",function(){if($(this).hasClass("pickCamer")){$("#pickCamer").addClass("disabled").attr("disabled","disabled").val("正在识别..");var e=new Object;e.faceImg=$.scriptcam.getFrameAsBase64(),commonParm(e),jsonAjax(InterFace.ahthFace,e,ptAhthFace_fn)}else M.dialog1=jqueryAlert({content:"请您允许访问您的摄像头",closeTime:1e3,modal:!0})});