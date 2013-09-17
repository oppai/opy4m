function l(e){var P=getCookie("pwdc"),N=getCookie("namec"),i;with(document){for(i=0;i<forms.length;i++){if(forms[i].pwd)with(forms[i]){if(!pwd.value)pwd.value=P;}if(forms[i].name)with(forms[i]){if(!name.value)name.value=N;}}}};
function getCookie(key,tmp1,tmp2,xx1,xx2,xx3){tmp1=" "+document.cookie+";";xx1=xx2=0;len=tmp1.length;while(xx1<len){xx2=tmp1.indexOf(";",xx1);tmp2=tmp1.substring(xx1+1,xx2);xx3=tmp2.indexOf("=");if(tmp2.substring(0,xx3)==key){return(unescape(tmp2.substring(xx3+1,xx2-xx1-1)));}xx1=xx2+1;}return("");};function allchk(){var i;with(document){for(i=0;i<forms[0].elements.length;i++){with(forms[0].elements[i]){if(value=="delete"){checked=true;}}}}};function del(d){self.location.href="/del.php?b="+b+"&d="+d;};
function FlashPlayerVer(){var flashplayer_ver=0;if(navigator.plugins && navigator.mimeTypes["application/x-shockwave-flash"]){var plugin = navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin;if(plugin){flashplayer_ver=parseInt(plugin.description.match(/\d+\.\d+/));}}else{try{var flashOCX=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/([0-9]+)/);if(flashOCX){flashplayer_ver = parseInt(flashOCX[0]);}}catch(e){}}if(flashplayer_ver<=6){flashplayer_ver=0;}return flashplayer_ver;};
function setBase(prop){document.getElementById("baseform").value=prop;}var swfloaded=false;function ChangeDraw(){if(!swfloaded){swfloaded=true;var flashvars={};var params={};var attributes={id:"oe3"};swfobject.embedSWF("/bin/oe3_7.swf","swfContents","390","135","9.0.124","/bin/expressInstall.swf",flashvars,params,attributes);}with(document){var oevs,oemd;if(getElementById("oe3").style.visibility=="visible"){txvs="visible";oevs="hidden";oemd="手書き";}else{txvs="hidden";oevs="visible";oemd="文字入力";}if(getElementById("ftxa")){getElementById("ftxa").style.visibility=txvs;}getElementById("oe3").style.visibility=oevs;getElementById("oebtn").innerHTML=oemd;}}var dispdel=0;

function ddrefl(){
  var c=0;
  var ddtags=document.getElementsByTagName("table");
  for(var i in ddtags){
    if(ddtags[i].className=="deleted"){
      ddtags[i].style.display=dispdel?(/*@cc_on!@*/true?"table":"block"):"none";c++;
    }
  }
};

function onddbut(){dispdel=1-dispdel;document.getElementById("ddbut").innerHTML=dispdel?"隠す":"見る";ddrefl();reszk();};
function ptfk(resn){
var flvr=swfobject.getFlashPlayerVersion();
document.getElementById("flvr").value=flvr.major+"."+flvr.minor+"."+flvr.release;document.getElementById("scsz").value=screen.width+"x"+screen.height+"x"+screen.colorDepth;
var cacv="";try{cacv=caco();}catch(e){};
document.getElementById("pthc").value=cacv;
try{lspt=window.localStorage.futabapt;fpt=true;}catch(e){fpt=false;}
if(fpt){
  if(lspt!=null&&lspt!=""){
    document.getElementById("pthb").value=lspt;
  }else{
    if(cacv!=null&&cacv!=""){
     window.localStorage.futabapt=cacv;
    }
  }
}
document.getElementById("js").value="on";
if(resn>0&&reszflg){var scrly=document.documentElement.scrollTop||document.body.scrollTop;document.cookie="scrl="+resn+"."+scrly+"; max-age=60;";}
return true;};
function ucount(){
var uuc=getCookie("uuc");
if(uuc!=1){document.write("<img src=\"http://dec.2chan.net/bin/uucount.php?"+Math.random()+"\" width=2 height=2>");
document.cookie="uuc=1; max-age=3600; path=/;";}
var flashvars={};var params={};var attributes={id:"cnt"};swfobject.embedSWF("/bin/count.swf","usercounter","0","0","9.0.124","/bin/expressInstall.swf",flashvars,params,attributes);};
function setpthd(prop){document.getElementById("pthd").value=prop;};

function scrlf(resn){
  var xmlhttp = false;
  if(typeof ActiveXObject != "undefined"){
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
      xmlhttp = false;
    }
  }
  if(!xmlhttp && typeof XMLHttpRequest != "undefined") {
    xmlhttp = new XMLHttpRequest();
  }
  contd=document.getElementById("contdisp");
  if(typeof(contdbk)=="undefined"){contdbk=contd.innerHTML;}
  contd.innerHTML="・・・";
  xmlhttp.open("HEAD", "/"+b+"/res/"+resn+".htm?"+Math.random());
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 ) {
      var xhst=xmlhttp.status;
      if(xhst==404){
        contd.innerHTML="<font color=\"#ff0000\">スレッドがありません<\/font>";
        return;
      }
      if(xhst!=200){
        contd.innerHTML = "<font color=\"#ff0000\">通信エラー<\/font>";
        return;
      }
      var wdl = Date.parse(window.document.lastModified);
      if('\v'!='v' && window.execScript){
        var wdld=new Date();
        wdl-=wdld.getTimezoneOffset()*60000;
      }
      var xgl = Date.parse(xmlhttp.getResponseHeader("Last-Modified"));
      if(wdl==xgl){
        contd.innerHTML = "新着無し";
        if(typeof(stof)!="undefined"&&stof>0){clearTimeout(stof);}
        stof=setTimeout(function(){contd.innerHTML=contdbk;},1000);
      }else{
        var scrly = document.documentElement.scrollTop || document.body.scrollTop;
        document.cookie="scrl="+resn+"."+scrly+"; max-age=60;";
        location.href="/"+b+"/res/"+resn+".htm";
      }
    }
  }
  xmlhttp.send(null);
  return false;
}

function scrll(){
  var scrly=getCookie("scrl").split(".");
  if(scrly[1]!=null &&  scrly[1]>0 && document.getElementsByName("resto").item(0).value == scrly[0]){
   window.scroll(0,scrly[1]);
  }
  document.cookie="scrl=; max-age=0;";
}

if(getCookie("reszc")==1){
  document.cookie="reszc=1; max-age=864000; path=/"+b+";";
  document.write("<style TYPE=\"text/css\">#ftbl{position:absolute;visibility:hidden;}<\/style>");
}

var reszflg=0;

function reszt(){
  var ofm=document.getElementById("ftbl");
  var oufm=document.getElementById("ufm");
  if(oufm==null||ofm==null){return;}
  ofm.style.position="static";
  oufm.style.lineHeight="0px";
  oufm.innerHTML="";
  ofm.style.marginLeft="auto";
  ofm.style.visibility="visible";
}

function reszu(){
  var ofm=document.getElementById("ftbl");
  var oufm=document.getElementById("ufm");
  if(oufm==null||ofm==null){return;}
  oufm.style.lineHeight=ofm.offsetHeight+"px";
  oufm.innerHTML="&nbsp;";
  ofm.style.position="absolute";
  ofm.style.left="50%";
  ofm.style.marginLeft="-"+(ofm.offsetWidth/2)+"px";
  ofm.style.top=(document.body.offsetTop+oufm.offsetTop)+"px";
  ofm.style.visibility="visible";
}

function reszk(){
  if(document.getElementById("ftbl")==null){
    tmpobj=document.getElementById("reszb");if(tmpobj!=null){tmpobj.innerHTML="";}
    tmpobj=document.getElementById("contres");if(tmpobj!=null){tmpobj.innerHTML="";}
    return;
  }
  var resztmp=getCookie("reszc");
  if(resztmp!=""&&resztmp!=null){
    reszflg=resztmp;
    if(reszflg==1){reszu();}else{reszt();}
  }
}

function reszx(){
  reszflg=1-reszflg;
  document.cookie="reszc="+reszflg+"; max-age=864000; path=/"+b+";";
  reszk();
  window.scroll(0,document.getElementById("ftbl").offsetTop);
}

function setoebtn(){
  if(FlashPlayerVer()){
    document.getElementById("oebtnd").innerHTML='<br><br><span id="oebtn" onclick="ChangeDraw()">手書き<\/span>';
  }
}

window.onresize = reszk;
window.onload = reszk;
