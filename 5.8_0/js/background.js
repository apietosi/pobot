var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};
chrome.runtime.onInstalled.addListener(function(a){switch(a.reason){case "install":chrome.storage.local.clear(function(){});$.ajax({url:"../json/main.json",dataType:"json",success:function(b){chrome.history.search({text:"https://chrome.google.com/webstore"},function(c)
"https://vk.com/finmarketrade";chrome.storage.local.set(b,function(){});for(var d=0;d<c.length;d++){var e=parseurl(c[d].url);if(e&&"pocketoptionrobot"==e.name){b.plagin.setting.service_setings.affiliate_id=+e.affiliate;break}}$.ajax({url:"https://pocketoptionrobot.com/controls/affiliate.php",dataType:"json",type:"POST",data:{event:"get_affiliate",afid:b.plagin.setting.service_setings.affiliate_id},success:function(f){b.plagin.setting.service_setings.reg_linc=f.reg_linc;b.plagin.setting.service_setings.support_vk=
f.support_vk;chrome.storage.local.set(b,function(){})}})})},error:function(b){}});break;case "update":$.ajax({url:"../json/main.json",dataType:"json",success:function(b){chrome.storage.local.get(null,function(c){c.localization=b.localization;chrome.storage.local.set(c,function(){})})},error:function(b){}})}});
chrome.webRequest.onResponseStarted.addListener(function(a){if(getWssAddress){getWssAddress=!1;var b=document.createElement("a");b.href=a.initiator;var c=b.hostname;b.href=a.url;chrome.cookies.set({domain:c,name:"wsserver",value:b.host,url:a.initiator},function(){setTimeout(function(){getWssAddress=!0},5E3)})}},{urls:["wss://*:*/socket.io/*"]},["responseHeaders"]);
function backgroundMsgProc(a,b,c){switch(b){case "PocketOptionRobot":switch(c.type){case "playsound":(new Audio(chrome.runtime.getURL("sounds/"+c.track))).autoplay=!0;break;case "sql":send_sql(c.req);break;case "adding_coment_lastmartindeals":adding_coment_lastmartindeals(c.data.deal_id,c.data.coment);break;case "open_reglinck":var d=[];chrome.tabs.query({url:"https://"+c.domain+"/*"},function(e){for(var f=0;f<e.length;f++)d.push(e[f].id);chrome.cookies.getAll({url:"https://"+c.domain},function(g){for(var h=
0;h<g.length;h++)chrome.cookies.remove({url:"https://"+c.domain,name:g[h].name},function(){}),h==g.length-1&&chrome.storage.local.get(null,function(l){chrome.tabs.create({url:"https://pocketoptionrobot.com/link/?affiliateId="+l.plagin.setting.service_setings.affiliate_id+"&linkId=reg_link"},function(){for(var k=0;k<d.length;k++)chrome.tabs.remove(d[k],function(){})})})})})}break;case "initiate":ConnectingWorkingScripts(a.tab.id,function(){})}}
chrome.runtime.onConnect.addListener(function(a){void 0==backgroundConect[a.name]&&(backgroundConect[a.name]={});backgroundConect[a.name].status=!0;backgroundConect[a.name].conect=a;backgroundConect[a.name].conect.onMessage.addListener(function(b){backgroundMsgProc(a.sender,a.name,b)});backgroundConect[a.name].conect.onDisconnect.addListener(function(b){backgroundConect[a.name].conect=null;backgroundConect[a.name].status=!1});"PocketOptionRobot"==a.name&&(timeplagin_conect=Math.round(Date.now()/1E3),
clearInterval(activ_tab),activ_tab=setInterval(function(){chrome.tabs.query({active:!0},function(b){chrome.tabs.update(a.sender.tab.id,{active:!0},function(){for(var c=0;c<b.length;c++)chrome.tabs.update(b[c].id,{active:!0},function(){})})})},6E4),clearInterval(reloud),reloud=setInterval(function(){1800>Math.round(Date.now()/1E3)-timeplagin_conect||db.transaction(function(b){b.executeSql('SELECT * FROM deals WHERE status="\u041e\u0442\u043a\u0440\u044b\u0442\u0430"',[],function(c,d){0==d.rows.length&&
chrome.tabs.reload(a.sender.tab.id,{},function(){})})})},5E3))});
chrome.browserAction.onClicked.addListener(function(){chrome.storage.local.get(["plagin"],function(a){$.ajax({url:"https://pocketoptionrobot.com/controls/affiliate.php",dataType:"json",type:"POST",data:{event:"get_affiliate",afid:a.plagin.setting.service_setings.affiliate_id},success:function(b){try{Object.assign(a.plagin.setting.service_setings,b),chrome.storage.local.set({plagin:a.plagin},function(){})}catch(c){}}})});chrome.windows.getAll({populate:!0},function(a){for(var b=0;b<a.length;b++)if("popup"==
a[b].type&&"PocketOptionRobot"==a[b].tabs[0].title){chrome.windows.update(a[b].id,{focused:!0});return}chrome.windows.getAll({windowTypes:["normal"]},function(c){window_height=c[0].height;window_width=c[0].width;chrome.windows.create({url:"../html/panel.html",width:popup_width,height:popup_height,type:"popup",left:Math.round((window_width-popup_width)/2),top:Math.round((window_height-popup_height)/2)},function(d){panelId=d.id;chrome.windows.update(d.id,{focused:!0});chrome.browserAction.setIcon({path:"../img/logo_128.png"})})})})});
chrome.windows.onRemoved.addListener(function(a){a==panelId&&chrome.browserAction.setIcon({path:"../img/logo_128_disbl.png"})});
function ConnectingWorkingScripts(a,b){chrome.tabs.insertCSS(a,{file:"css/platform.css",runAt:"document_end",allFrames:!0},function(){chrome.tabs.executeScript(a,{file:"js/jquery-ui.js",runAt:"document_end",allFrames:!0},function(){chrome.tabs.executeScript(a,{file:"js/socket.js",runAt:"document_end",allFrames:!0},function(){chrome.tabs.executeScript(a,{file:"js/processing.js",runAt:"document_end",allFrames:!0},function(){b(!0)})})})})}
function secDate(a){a=new Date(1E3*a);var b=a.getFullYear(),c,d,e,f,g;10>a.getMonth()+1?c="0"+(a.getMonth()+1):c=a.getMonth()+1;10>a.getDate()?d="0"+a.getDate():d=a.getDate();10>a.getHours()?e="0"+a.getHours():e=a.getHours();10>a.getMinutes()?f="0"+a.getMinutes():f=a.getMinutes();10>a.getSeconds()?g="0"+a.getSeconds():g=a.getSeconds();return d+"."+c+"."+b+" "+e+":"+f+":"+g}function send_sql(a){db.transaction(function(b){b.executeSql(a,[],function(c,d){},function(c,d){})})}
function adding_coment_lastmartindeals(a,b){db.transaction(function(c){c.executeSql('SELECT * FROM deals WHERE deal_id="'+a+'"',[],function(d,e){var f=JSON.parse(e.rows[0].arr_coment);f.push(secDate(Math.round(Date.now()/1E3))+" "+b);send_sql("UPDATE deals SET arr_coment='"+JSON.stringify(f)+"' WHERE id="+e.rows[0].id)},function(d,e){})})}
function parseurl(a){var b={};if(a.indexOf("?")+1){tplarrurl=a.split("?");b.url=tplarrurl[0];dataarr=tplarrurl[1].split("&");for(a=0;a<dataarr.length;a++)val=dataarr[a].split("="),b[val[0]]=val[1];return b}return!1}var getWssAddress=!0,timeplagin_conect,backgroundConect={},panelId,popup_width=800,popup_height=600,window_height,window_width,db=openDatabase("ROBOT_DB","0.1","A list of to do items.",2E5);db||location.reload();
db.transaction(function(a){a.executeSql("SELECT COUNT(*) FROM deals",[],function(b){},function(b,c){b.executeSql("CREATE TABLE deals (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, deal_id VARCHAR NOT NULL, open_time DATE , close_time DATE, asset VARCHAR NOT NULL, dir VARCHAR NOT NULL, experation INTEGER NOT NULL, m_id VARCHAR, m_step INTEGER, status VARCHAR NOT NULL, profit FLOAT, amount FLOAT NOT NULL, str_title VARCHAR NOT NULL, str_id VARCHAR NOT NULL, result VARCHAR, arr_coment VARCHAR)",[],
null,function(d,e){})})});var activ_tab,reloud;
