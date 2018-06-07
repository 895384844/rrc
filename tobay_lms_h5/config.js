//var domian = 'http://192.168.2.107:9888';
 var domian='https://www.rrcedu.net/api';

var device = mydevice();
var browser = myBrowser();
var curYear = getCurYear();
var token = '';
var userId = '';
var userType = '';
var enterpriseId = '';
var enterpriseName = '';
var errCode = '';
var staffName = '';
var staffid = '';

function addCookie(objName, objValue, objHours) { //添加cookie   
    var str = objName + "=" + escape(objValue);
    if (objHours > 0) { //为0时不设定过期时间，浏览器关闭时cookie自动消失   
        var date = new Date();
        var ms = objHours * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
    }
    document.cookie = str;

}

function getCookie(objName) {
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName)
            return unescape(temp[1]);
    }
}

function delCookie(name) {
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = name + "=a; expires=" + date.toGMTString();
}

function allCookie() { //读取所有保存的cookie字符串   
    var str = document.cookie;
    if (str == "") {
        str = "没有保存任何cookie";
    }
    alert(str);
}
function clearAllCookie() {  
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);  
    if(keys) {  
        for(var i = keys.length; i--;)  
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()  
    }  
}  


function getToken() {
    var token;
    if (getCookie('token') !== undefined && getCookie('token') !== 'undefined' && getCookie('token') !== '' && getCookie('token') !== null) {
        token = getCookie('token');
    } else {
        token = '';
    }
    return token;
}

function commonParm(obj) {


    obj.errCode = errCode;
    obj.device = device;
    obj.browser = browser;
    obj.year = curYear;

    if (getCookie('token') !== undefined && getCookie('token') !== 'undefined' && getCookie('token') !== '' && getCookie('token') !== null) {
        obj.token = getCookie('token');
    } else {
        obj.token = '';
    }
    if (getCookie('userId') !== undefined && getCookie('userId') !== 'undefined' && getCookie('userId') !== '' && getCookie('userId') !== null) {
        obj.userId = getCookie('userId');
    } else {
        obj.userId = '';
    }

    if (getCookie('userType') !== undefined && getCookie('userType') !== 'undefined' && getCookie('userType') !== '' && getCookie('userType') !== null) {
        obj.userType = getCookie('userType');
    } else {
        obj.userType = '';
    }
    if (getCookie('staffid') !== undefined && getCookie('staffid') !== 'undefined' && getCookie('staffid') !== '' && getCookie('staffid') !== null) {
        obj.staffid = getCookie('staffid');
    } else {
        obj.staffid = '';
    }
    if (getCookie('enterpriseId') !== undefined && getCookie('enterpriseId') !== 'undefined' && getCookie('enterpriseId') !== '' && getCookie('enterpriseId') !== null) {
        obj.enterpriseId = getCookie('enterpriseId');
    } else {
        obj.enterpriseId = '';
    }
    if (getCookie('enterpriseName') !== undefined && getCookie('enterpriseName') !== 'undefined' && getCookie('enterpriseName') !== '' && getCookie('enterpriseName') !== null) {
        obj.enterpriseName = getCookie('enterpriseName');
    } else {
        obj.enterpriseName = '';
    }
    if (getCookie('staffName') !== undefined && getCookie('staffName') !== 'undefined' && getCookie('staffName') !== '' && getCookie('staffName') !== null) {
        obj.staffName = getCookie('staffName');
    } else {
        obj.staffName = '';
    }


    return obj;
}
window.InterFace = {
    getVerCode: domian + '/user/verifyCode',
    login: domian + '/user/login?',
    getMcode: domian + '/mobile/getCode?',
    ptRegister: domian + '/register/ptRegister?',
    qyRegister: domian + '/register/qyRegister?',
    editUserInfo: domian + '/editUserInfo?',
    banner: domian + '/advert/list?',
    flinks: domian + '/linkList?',
    courseList: domian + '/courseWareIndexList?',
    search: domian + '/search?',
    listInfo: domian + '/courseWare/details?',
    lessonItem: domian + '/courseWare/chapterList?',
    commetList: domian + '/courseWare/commetList?',
    commetAdd: domian + '/comment/add?',
    learnRate: domian + '/updateLearnRate?',
    capture: domian + '/captureMonitor?',
    getPaper: domian + '/paper/getPaper?',
    submitPaper: domian + '/paper/submitPaper?',
    videoUrl: domian + '/aliAuth/getplayURL?',
    refreshViId: domian + '/aliAuth/refresh?',
    getAuth: domian + '/aliAuth/get?',
    getSort: domian + '/crclassify/list?',
    getSortList: domian + '/crclassify/coursewarelist?',
    getcount: domian + '/notice/count?',
    getNlist: domian + '/notice/list?',
    getQylist: domian + '/getEnterprises?',
    ahthFace: domian + '/user/authFace?',
    contionList: domian + '/institutionid/list?',
    contionInfo: domian + '/institutionid/details?',
    hasUser: domian + '/user/checkPhoneCode?',
    collection: domian + '/collection/add?',
    qxcol: domian + '/collection/del?',
    colleList: domian + '/collection/list',
    corPlan: domian + '/getCoursePlan',
    editUserInfo: domian + '/user/editUserInfo',
    editImg: domian + '/user/editImg',
    getUinfo: domian + '/user/getUserInfo?',
    hisTest: domian + '/paper/getHistory?',
    hikeAdd: domian + '/history/add?',
    hikeList: domian + '/history/list?',
    getYears: domian + '/getYears?',
    getTestVal: domian + '/paper/getPaperValue?',
    updateLearnRate: domian + '/updateLearnRate?',
    captureM: domian + '/studyFaceComparison?',
    updateByOldPwd: domian + '/user/updateByOldPwd?',
    examCaputer: domian + '/examFaceComparison?',
    askTeacher: domian + '/courseWare/getTecher?',
    askCollect: domian + '/courseWare/getCollection?',
    updatePwd: domian + '/user/updatePwd?',
    getLearnType: domian + '/courseWare/getLearnType?',
    getEnterpriseByIdCard: domian + '/user/getEnterpriseByIdCard?',
    getTypeByCourse:domian + '/getTypeByCourse?',
    updateVideoRate: domian + '/updateVideoRate?',
    jgEnter: domian + '/institutionid/enter?',
    studyId:domian + '/courseWare/getStartCourse?',
    upload:domian + '/upload',
    uploads:domian + '/user/upload',
    getImgURL:domian + '/getUrl',
    getJgIe:domian + '/institutionid/enterByIE',
    getAvaIe:domian + '/user/editImgByIE',
    getZxlist:domian+'/policy/getPolicy',
    getZxInfo:domian+'/policy/policyDetail',
    getPnPolicy:domian+'/policy/nextPolicy',
    getWx:domian+'/wxBak',
    checkUserByPhone:domian+'/checkUserByPhone',
    boundWx:domian+'/boundWx',
    erClass:domian+'/getEnClassify',
    insertEnterprise:domian+'/insertEnterprise',
    atclassify:domian+'/atclassify/list',
    sysMenu:domian+'/sysClassifyList',
    sysText:domian+'/getSysText',
    delcitem:domian+'/chapter/delChapter',
    editCourse:domian+'/course/delCourse',
    addcItem:domian+'/chapter/saveChapter',
    addChapter:domian+'/courseWare/saveCourseware',
    addCoursse:domian+'/course/saveCourse',
    updateSort:domian+'/course/updateSort',
    queryGwclist:domian+'/getCartList',
    delGwclist:domian+'/delCart',
    pldelGwclist: domian+'/delCarts',
    saveGwc:domian+'/saveCart',
    plsaveGwc:domian+'/saveCarts',
    cartCount:domian+'/cartCount',
    existGwc:domian+'/existCart',
    submitOrder:domian+'/order/saveOrder',
    getOrderInfo:domian+'/order/getOrderInfo',
    wxPay:domian+'/order/wechatPay', 
    alipay:domian+'/order/aliPay', 
    myTranInfo:domian+'/order/myTranInfo', 
    myOrders:domian+'/order/myOrders', 
    delOrder:domian+'/order/cancleOrder', 
    getItems:domian+'/courseWare/coursewareList', 
    queryCart:domian+'/getCartByIds',
    getProfitList:domian+'/getProfitList',
    bankInfo: domian+'/getUserBank',
    bankList: domian+'/getBankList',
    saveBank: domian+'/saveBank',
    updateBank: domian+'/updateBank',
    profitList: domian+'/myUp/canProfit',
    saveProfit: domian+'/saveProfitType',
    myUpCourse: domian+'/myUp/myUpCourse',
    faqlist: domian+'/faq/faqGetList',
    faqInfo: domian+'/faq/faqFindById',
    myPurchase: domian+'/purchase/myPurchase'
    
    
    
    
    
     
    
    
    
     


    
    
    

    
    
    
     
    

     
}
//兼容IE8的空console对象  
window.console = window.console || {  
    log: $.noop,  
    debug: $.noop,  
    info: $.noop,  
    warn: $.noop,  
    exception: $.noop,  
    assert: $.noop,  
    dir: $.noop,  
    dirxml: $.noop,  
    trace: $.noop,  
    group: $.noop,  
    groupCollapsed: $.noop,  
    groupEnd: $.noop,  
    profile: $.noop,  
    profileEnd: $.noop,  
    count: $.noop,  
    clear: $.noop,  
    time: $.noop,  
    timeEnd: $.noop,  
    timeStamp: $.noop,  
    table: $.noop,  
    error: $.noop  
};  
// 判断当前访问者的客户端设备类型、操作系统及浏览器类型
function myBrowser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isChrome = userAgent.indexOf("Chrome") > -1; //判断是否Chrome浏览器
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器

    if (isIE) {
        var IE5 = IE55 = IE6 = IE7 = IE8= IE9 = false;

        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);

        var fIEVersion = parseFloat(RegExp["$1"]);
        IE55 = fIEVersion == 5.5;
        IE6 = fIEVersion == 6.0;
        IE7 = fIEVersion == 7.0;
        IE8 = fIEVersion == 8.0;
        IE9 = fIEVersion == 9.0;

        if (IE55) { return "IE55"; } else if (IE6) { return "IE6"; } else if (IE7) { return "IE7"; } else if (IE8) { return "IE8"; }else if (IE9) { return "IE9"; }
    } else if (isFF) { return "Firefox"; } else if (isChrome) { return "Chrome"; } else if (isOpera) { return "Opera"; } else if (isSafari) { return "Safari"; }


}

// -(void)registUSERAGENT{
//     UIWebView  * tempWebView=[[UIWebView alloc]init];
    
//     NSString *originUA = [tempWebView stringByEvaluatingJavaScriptFromString:@"userAgent"];
    
//     NSString *newUA = [NSString stringWithFormat:@"%@:Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/124 (KHTML, like Gecko) Safari/125.1",originUA];
    
//    NSDictionary *dictionary = @{@"UserAgent":newUA};
    
//     [[NSUserDefaults standardUserDefaults] registerDefaults:dictionary];
    
//     NSString* webTitle = [_webView stringByEvaluatingJavaScriptFromString:@"document.title"];
// //    self.webTitle
//     self.title = webTitle;
    
   
// }




function mydevice() {
    var u = navigator.userAgent; //取得浏览器的userAgent字符串
    var isMobile = !!u.match(/AppleWebKit.*Mobile.*/); // 是否为移动终端
    var isiPhone = u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1; // 是否为iPhone或者QQHD浏览器
    var isandroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // android终端或者uc浏览器

    if (!isMobile) {
        return 1;
    }
    if (isMobile == true && isandroid == true) {
        return 3;
    }
    if (isMobile == true && isiPhone == true) {
        return 2;
    }

}
//获取当前年份(2位) 
function getCurYear() {
    var myDate = new Date();
    return myDate.getFullYear();
}
// ajax再封装
/**  
* ajax post提交  
* @param url  
* @param param  
* @param datat 为html,json,text  
* @param succBack 成功时回调函数  
* @param failBack 失败时回调函数  
* @return  
*/
jQuery.support.cors = true;
function jsonAjax(url, param,succBack) {  
if(getCookie('ajaxF')!=='no'){


    $.ajax({  
        type: "post",  
        url: url,  
        data: JSON.stringify(param),  
        cache: false,
        datType: "JSON",
        contentType: "application/json",
        crossDomain: true == !(document.all),
        success: succBack,  
        async: true,
        error:function(res){
            console.log(res.status);
            if (res.status == '401') {
                addCookie('ajaxF', 'no', 0);

                M.dialog1 = jqueryAlert({ 'content': '登录失效，请重新登录', 'closeTime': 1000, 'modal': true});

                var timer=setTimeout(function(){
                    window.location.href = "login.html";
                     clearTimeout(timer);
                },1000)
                
                

            }
        }
    }); 
    
}

}  


// 判断登录是否失效
var M = {};
pdLogin();pdCount();
function pdUserLogin() {
    if (getCookie('token') == '' || getCookie('token') == null || getCookie('token') == 'undefined') {
        M.dialog1 = jqueryAlert({
            'content': '登录失效，请重新登录',
            'closeTime': 1000,
            'modal': true
        });
        window.location.href = "login.html";

    }
}
function pdLogin() {
  
    if (getCookie('token') == null || getCookie('token') == 'undefined' || getCookie('token') == undefined|| getCookie('token') == '') {

        $('.noLogin').css('display','inline-block');
        $('.hasLogin').css('display','none');
        $('.header_r').addClass('minw37');
         $('.uerAvater').attr('src', 'images/ava1.png');
         $('.orderCenter').attr("href",'login.html');
       
    } else {
        $('.header_r').removeClass('minw37');
        $('.orderCenter').attr("href",'myOrder.html#/order/order');
        var com_obj = new Object();commonParm(com_obj);
        jsonAjax(InterFace.cartCount,com_obj,cartCotFn);
        
        if (getCookie('userType') == '3') {
            $('.hasLogin .toMy').attr('href', 'my.html#/mysort/plan');

        } else {
            $('.hasLogin .toMy').attr('href', 'my.html#/mysort/course')
        }

        if (getCookie('userImg') == null || getCookie('userImg') == 'undefined' || getCookie('userImg') == '') {
            $('.uerAvater').attr('src', 'images/ava1.png');
            $('#avatarImg').attr('src','images/ava1.png');
            $('.card-top img').attr('src','images/ava1.png');
        } else {
            $('.uerAvater').attr('src', getCookie('userImg'));
            $('#avatarImg').attr('src',getCookie('userImg'));
            $('.card-top img').attr('src', getCookie('userImg'));
        }

        $('.card-top-right-box .name').text(getCookie('nickName'));
        $('.noLogin').css('display','none');
        $('.hasLogin').css('display','inline-block');
    }
}
// 购物车count
function cartCotFn(res){
    if(res.errCode=='200'){
        if(res.count>0){
             $('.js-cart-num').text(res.count).show();
        }else{
            $('.js-cart-num').text('0').hide();
        }
       
    }

}
function pdCount() {
    if (getCookie('userCot') == '' || getCookie('userCot') == null || getCookie('userCot') == 'undefined'|| getCookie('userCot') == undefined) {
        $('#count').hide();
    }else{
        if (getCookie('userCot') == '0') {
            $('#count').hide();
        } else {
            $('#count').text(getCookie('userCot'));
            $('#count').show();
        }



    }
    
}

var com_obj = new Object();commonParm(com_obj);
// 获取友情链接
 var pathName = window.location.pathname;
if(pathName.indexOf('gap.html')=='-1'&&pathName.indexOf('bind.html')=='-1'){
    jsonAjax(InterFace.flinks,com_obj,getFlinks);
}

// 获取用户信息 获取通知数量
function getUminfo(){
    var com_obj = new Object();commonParm(com_obj);
    jsonAjax(InterFace.getUinfo,com_obj,getUinfo);
    jsonAjax(InterFace.getcount,com_obj,getNotNum);
}
//添加足迹
function hikeLearn() {
    var coursewareId = getSearch('pid');
    var addHike = new Object();
    addHike.coursewareId = coursewareId;
    commonParm(addHike);
    jsonAjax(InterFace.hikeAdd,addHike);

}
function getFlinks(res){
    if (res.errCode == '200') {
            if(res.list.length>0){
                var alink = '';
                $.each(res.list, function(idx, ele) {
                    alink += '<a href="' + ele.linkurl + '" target="blank">' + ele.linkname + '</a>';
                })
                $('#alinkBox').html(alink);
            }
            
            
        } else if (res.errCode == '306') {
        }
}
function getNotNum(res){
   console.log(res);
    if (res.errCode == '200') {
        if (res.count == '0') {
            $('#count').hide();
            addCookie('userCot', '0');
        } else {
            $('#count').text(res.count);
            addCookie('userCot', res.count);
        }

    }
}
function getUinfo(res){
    if (res.errCode == '305') {
                M.dialog1 = jqueryAlert({ 'content': '用户详情查询失败', 'closeTime': 1000, 'modal': true});
            } else if (res.errCode == '200') {
                console.log(res);
                addCookie('userstaff', res.staffname);

                if (res.nickName == '' || res.nickName == 'null' || res.nickName == null) {
                    $('#xingM').text('未设置');
                } else {
                    $('#xingM').text(res.nickName);
                }
                if (res.imgurl == '' || res.imgurl == null) {
                    $('.uerAvater').attr('src', 'images/ava1.png');
                    $('#avatarImg').attr('src','images/ava1.png');
                    addCookie('userImg', 'images/ava1.png');
                    $('.card-top img').attr('src','images/ava1.png');
                } else {
                    addCookie('userImg', res.imgurl);
                    $('.uerAvater').attr('src', res.imgurl);
                    $('#avatarImg').attr('src', res.imgurl);
                     $('.card-top img').attr('src',res.imgurl);
                }
                

}

}

function wxPage(type){
    var domainName=window.location.host;
    var pathArr=window.location.pathname.split('/')
    if(type=='1'){
            var bty='?bty=1';
    }else{
        var bty='';
    }
    if(pathArr.length==2){
        var url="https://open.weixin.qq.com/connect/qrconnect?appid=wxe3c29cea2d344396&redirect_uri=http%3A%2F%2F"+domainName+"%2Fgap.html"+bty+"&response_type=code&scope=snsapi_login#wechat_redirect";
    }else if(pathArr.length>2){
        var pathUrl=pathArr[1];
        var url="https://open.weixin.qq.com/connect/qrconnect?appid=wxe3c29cea2d344396&redirect_uri=http%3A%2F%2F"+domainName+"%2F"+pathUrl+"%2Fgap.html"+bty+"&response_type=code&scope=snsapi_login#wechat_redirect";
    }
    openwindow(url);
}
// 银行卡号码变*
function formatBankNumber(bankNumber){
    var starStr="";
    for(var i=1;i<=bankNumber.length;i++){
        starStr+="*"
        if(i>0&&i<bankNumber.length&&i%4==0){
            starStr+=" ";
        }
        
    }
    var starL=starStr.length;
    var xinArray=starStr.split(' ');
    var xinArray_l=xinArray[xinArray.length-1].length;
    var xinStr=bankNumber.substr(-xinArray_l);;
    return starStr.substr(0,starL-xinArray_l)+xinStr;

}
//去除空格
    function Trim(str,is_global){
        var result;
        result = str.replace(/(^\s+)|(\s+$)/g,"");
        if(is_global.toLowerCase()=="g"){
            result = result.replace(/\s/g,"");
        }
        return result;

    }
function pdOrderurl(){
    if(window.location.hash.indexOf('order/order')!==-1){
        if(window.location.hash.indexOf('?')!==-1){
            var protocal=window.location.protocol;
            var host=window.location.host;
            var path=window.location.pathname;
            window.location.href=protocal+"//"+host+path+"#/order/order";
        }
    }
}