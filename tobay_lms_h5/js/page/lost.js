function mobile_fn(e){if(200==e.errCode){$(".show .getPhoneVer").attr("disabled","disabled").addClass("on");var a=60;timer=setInterval(function(){if(a>1){a-=1;var e=Math.floor(a%60),o="";e>0&&(e<10&&(e="0"+e),o+=e+"秒"),$(".show .getPhoneVer").val(o)}else clearInterval(timer),$(".show .getPhoneVer").attr("disabled",!1).val("获取手机验证码").removeClass("on")},1e3)}}function yan_fn(e){console.log(e),clearInterval(timer),"200"==e.errCode?(addCookie("userId",e.userId),$("#resetPass").addClass("show").prev(".infoBox").removeClass("show"),$("#submis").removeClass("disabled").removeAttr("disabled").val("提交")):"303"==e.errCode?(M.dialog1=jqueryAlert({content:"验证码超时",closeTime:1e3,modal:!0}),$("#submis").removeClass("disabled").removeAttr("disabled").val("提交")):"309"==e.errCode&&(M.dialog1=jqueryAlert({content:"用户不存在",closeTime:1e3,modal:!0}),$("#submis").removeClass("disabled").removeAttr("disabled").val("提交"))}function updatePwd_fn(e){"200"==e.errCode&&($("#reset").removeClass("disabled").removeAttr("disabled").val("提交"),window.location.href="login.html")}userGapH(),$("input").placeholder(),$(".formBox .form_v").on("blur",function(){validate(this)});var mobile,M={},timer;$("#phoneVer").unbind("click").bind("click",function(){mobile=$.trim($(".show #phone").val());var e=new Object;e.mobile=mobile,commonParm(e),1==validate(".show #phone")&&jsonAjax(InterFace.getMcode,e,mobile_fn)}),$(document).attr("title","找回密码_人人创培训监管服务平台"),$("#submis").unbind("click").bind("click",function(){var e=!1;if($(".show .form_v").each(function(){if(0==(e=validate(this)))return!1}),1==e){var a=$("#phone").val(),o=$("#phone_verfy").val(),r=new Object;r.phone=a,r.phoneCode=o,commonParm(r),$("#submis").addClass("disabled").attr("disabled","disabled").val("正在提交.."),jsonAjax(InterFace.hasUser,r,yan_fn),console.log(r)}}),$("#reset").unbind("click").bind("click",function(){$("#reset").addClass("disabled").attr("disabled","disabled").val("正在提交..");var e=!1;if($(".show .form_v").each(function(){if(0==(e=validate(this)))return!1}),1==e){var a=$("#password").val(),o=$("#confirm_password").val(),r=$("#userId").val(r),s=new Object;s.password=a,s.repassword=o,s.userId=r,commonParm(s),jsonAjax(InterFace.updatePwd,s,updatePwd_fn)}});