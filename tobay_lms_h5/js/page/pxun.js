function getPx_fn(t){"306"==t.errCode||"200"==t.errCode&&($("#institutionicon").attr("src",t.institutionicon),""==t.inaddr||null==t.inaddr||"null"==t.inaddr?$("#inaddr").html("暂无"):$("#inaddr").html(t.inaddr),""==t.inabstract||null==t.inabstract||"null"==t.inabstract?$("#inabstract").html("暂无"):$("#inabstract").html(t.inabstract),""==t.institutionname||null==t.institutionname||"null"==t.institutionname?$("#institutionname").text("暂无"):$("#institutionname").text(t.institutionname),""==t.institutionpeo||null==t.institutionpeo||"null"==t.institutionpeo?$("#institutionpeo").text("暂无"):$("#institutionpeo").text(t.institutionpeo),""==t.servicenumber||null==t.servicenumber||"null"==t.servicenumber?$("#servicenumber").text("暂无"):$("#servicenumber").text(t.servicenumber),""==t.telephone||null==t.telephone||"null"==t.telephone?$("#telephone").text("暂无"):$("#telephone").text(t.telephone),""==t.trinstitutionemail||null==t.trinstitutionemail||"null"==t.trinstitutionemail?$("#trinstitutionemail").text("暂无"):$("#trinstitutionemail").text(t.trinstitutionemail),""==t.trinstitutioncodeurl||null==t.trinstitutioncodeurl?$(".erCode").hide():$("#trinstitutioncodeurl").attr("src",t.trinstitutioncodeurl))}var px_obj=new Object;px_obj.institutionId=getSearch("id"),commonParm(px_obj),jsonAjax(InterFace.contionInfo,px_obj,getPx_fn),$(document).attr("title","培训机构_人人创培训监管服务平台");