(function(){var a=null;if(!window.SPMobile.PCEng.InlineSpot)window.SPMobile.PCEng.InlineSpot={WriteAdSpot:function(i,g,d,b,e){var a=window.SPMobile.NewAsn(),f="width: "+d+"px;height: "+b+"px;overflow: hidden; margin: 0px;",c="pid="+i+"&asid="+g+"&asn="+a+"&width="+d+"&height="+b;if(e)c+="&enc="+e;var j=SPMobile.PCEng.getUrl(window.SPMobile.PCEng.getSpotServer(),"ad_spot.aspx?"+c),h='<div id="imobile_adspotdiv'+a+'"><iframe id="imobile_adspotframe'+a+'" frameborder="no" scrolling="no" style="'+f+'" src="'+j+'"></iframe></div>';document.write(h)}};var e=a;try{e=imobile_pid;imobile_pid=a}catch(g){}var b=a;try{b=imobile_asid;imobile_asid=a}catch(g){}var d=a;try{d=imobile_width;imobile_width=a}catch(g){}var c=a;try{c=imobile_height;imobile_height=a}catch(g){}var f=a;try{f=imobile_encoding;imobile_encoding=a}catch(g){}if(e&&b&&d&&c){window.SPMobile.PCEng.InlineSpot.WriteAdSpot(e,b,d,c,f);if(window.SPDemographic)try{SPDemographic.createGateway().executeVisit(b)}catch(g){}}})()