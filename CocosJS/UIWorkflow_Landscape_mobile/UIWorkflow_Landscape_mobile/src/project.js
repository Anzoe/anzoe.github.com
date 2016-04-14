require=function e(t,a,o){function n(r,s){if(!a[r]){if(!t[r]){var i="function"==typeof require&&require;if(!s&&i)return i(r,!0);if(c)return c(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var l=a[r]={exports:{}};t[r][0].call(l.exports,function(e){var a=t[r][1][e];return n(a?a:e)},l,l.exports,e,t,a,o)}return a[r].exports}for(var c="function"==typeof require&&require,r=0;r<o.length;r++)n(o[r]);return n}({ButtonManager:[function(e,t,a){"use strict";cc._RFpush(t,"f1d7c/e4u5Mhbxh1HN1Sx/l","ButtonManager"),cc.Class({"extends":cc.Component,properties:{uiManager:{"default":null,type:cc.Node}},onLoad:function(){cc.log("================ ButtonManager onLoad ================"),this.uiManager=e("GameUIManager"),this.dataManager=e("DataManager")},onStartBtnTouched:function(){},onShopBtnTouched:function(){cc.log("================ onShopBtnTouched ================"),this.uiManager.group_shop.active=!0},onShopCloseTouched:function(){cc.log("================ onShopCloseTouched ================"),this.uiManager.group_shop.active=!1},onHomeBtnTouched:function(){cc.director.loadScene("game_ui_workflow")},onReviveBtnTouched:function(){this.dataManager.getCoinNum()>=100?(this.dataManager.addCoinNum(-100),this.dataManager.setIsReplayGame(1),this.dataManager.setIsReviveGame(1),cc.director.loadScene("game_ui_workflow")):this.onShopBtnTouched()},onRepalyBtnTouched:function(){this.dataManager.setIsReplayGame(1),cc.director.loadScene("game_ui_workflow")}}),cc._RFpop()},{DataManager:"DataManager",GameUIManager:"GameUIManager"}],DataManager:[function(e,t,a){"use strict";cc._RFpush(t,"6c7cdPJ/OZMS6dVqXAfwngb","DataManager");var o;cc.Class({"extends":cc.Component,properties:{},onLoad:function(){cc.log("================ DataManager onLoad ================"),o=e("base64"),this.uiManager=e("GameUIManager")}}),t.exports.getCoinNum=function(){var e,t;e=cc.sys.localStorage.getItem("LocalData_Coin"),t=decodeURI(atob(e));var a=Number(t);return a},t.exports.addCoinNum=function(e){var t=this.getCoinNum(),a=t+e,o=btoa(encodeURI(a));cc.sys.localStorage.setItem("LocalData_Coin",o)},t.exports.setCoinNum=function(e){var t=btoa(encodeURI(e));cc.sys.localStorage.setItem("LocalData_Coin",t)},t.exports.setScore=function(e){var t=btoa(encodeURI(e));cc.sys.localStorage.setItem("LocalData_Score",t)},t.exports.getScore=function(){var e,t;e=cc.sys.localStorage.getItem("LocalData_Score"),t=decodeURI(atob(e));var a=Number(t);return a},t.exports.getBestScore=function(){var e,t;e=cc.sys.localStorage.getItem("LocalData_BestScore_001"),t=decodeURI(atob(e));var a=Number(t);return a},t.exports.setBestScore=function(e){var t=btoa(encodeURI(e));cc.sys.localStorage.setItem("LocalData_BestScore_001",t)},t.exports.setIsReplayGame=function(e){cc.sys.localStorage.setItem("LocalData_IsReplayGame",e)},t.exports.getIsReplayGame=function(){var e;e=cc.sys.localStorage.getItem("LocalData_IsReplayGame"),null===e&&(e="0");var t=Number(e);return t},t.exports.setIsReviveGame=function(e){cc.sys.localStorage.setItem("LocalData_IsReviveGame",e)},t.exports.getIsReviveGame=function(){var e;e=cc.sys.localStorage.getItem("LocalData_IsReviveGame"),null===e&&(e="0");var t=Number(e);return t},t.exports.setIsFirstGame=function(e){cc.sys.localStorage.setItem("LocalData_IsFirstGame_001",e)},t.exports.getIsFirstGame=function(){var e;e=cc.sys.localStorage.getItem("LocalData_IsFirstGame_001"),null===e&&(e="0");var t=Number(e);return t},cc._RFpop()},{GameUIManager:"GameUIManager",base64:"base64"}],GameUIManager:[function(e,t,a){"use strict";cc._RFpush(t,"fa812lsJQtMCK0NtziYa+Hs","GameUIManager"),cc.Class({"extends":cc.Component,properties:{group_startUI:{"default":null,type:cc.Node},group_shop:{"default":null,type:cc.Node},group_gameOver:{"default":null,type:cc.Node},btn_startGame:{"default":null,type:cc.Node},bg_score:{"default":null,type:cc.Node},label_score:{"default":null,type:cc.Label},label_coinNum_shop:{"default":null,type:cc.Label},label_newUserScore:{"default":null,type:cc.Label},label_bestUserScore:{"default":null,type:cc.Label}},onLoad:function(){cc.log("================ UIManager onLoad ================"),this.winSize=cc.view.getVisibleSize(),this.dataManager=e("DataManager"),this.userScoreNum=0,this.onLoadExtra()},onLoadExtra:function(){this.moduleExports(),cc.log("================ UIManager onLoadExtra ================"),0===this.dataManager.getIsFirstGame()&&(this.dataManager.setIsFirstGame(1),this.dataManager.setCoinNum(3e3),this.dataManager.setBestScore(0)),1===this.dataManager.getIsReplayGame()?this.onStartBtnTouched():this.group_startUI.active=!0,1===this.dataManager.getIsReviveGame()&&(this.userScoreNum=this.dataManager.getScore(),this.dataManager.setScore(0)),this.dataManager.setIsReplayGame(0),this.dataManager.setIsReviveGame(0),this.dataManager.setScore(this.userScoreNum),this.refreshNumLabel(),this.refresh_NewUser_ScoreLabel(),this.refresh_BestUser_ScoreLabel()},moduleExports:function(){t.exports={group_shop:this.group_shop,group_gameOver:this.group_gameOver}},showGameOver:function(){this.group_gameOver.active=!0,this.dataManager.setScore(this.userScoreNum),this.userScoreNum>=this.dataManager.getBestScore()&&(this.dataManager.setBestScore(this.userScoreNum),this.label_newUserScore.node.color=cc.color(255,0,0)),this.refresh_BestUser_ScoreLabel(),this.refresh_NewUser_ScoreLabel()},addCoin:function(e){this.dataManager.addCoinNum(e),this.initCoinLabel()},addOneScore:function(){this.userScoreNum++,this.refreshScoreLabel()},addScore:function(e){this.userScoreNum+=e,this.refreshScoreLabel()},refreshNumLabel:function(){this.refreshCoinLabel(),this.refreshScoreLabel()},refreshCoinLabel:function(){this.label_coinNum_shop.string=String(this.dataManager.getCoinNum())},refreshScoreLabel:function(){this.label_score.string=""+this.userScoreNum},refresh_NewUser_ScoreLabel:function(){cc.log("================ refresh_NewUser_ScoreLabel ================"),this.label_newUserScore.string=""+this.dataManager.getScore()},refresh_BestUser_ScoreLabel:function(){cc.log("================ refresh_BestUser_ScoreLabel ================"),this.label_bestUserScore.string=""+this.dataManager.getBestScore()},onStartBtnTouched:function(){this.group_startUI.active=!1,cc.log("================ this.winSize.width: "+this.winSize.width+" ================"),this.winSize.width<1e3?(cc.log("================ this.winSize.width < 1000 ================"),this.bg_score.runAction(cc.moveBy(1,0,-200-this.winSize.height/5).easing(cc.easeBackOut()))):(cc.log("================ this.winSize.width > 1000 ================"),this.bg_score.runAction(cc.moveBy(1,0,-200-this.winSize.height/5).easing(cc.easeBackOut())))},onItem1Touched:function(){cc.log("================ onItem1Touched ================"),this.dataManager.addCoinNum(30),this.refreshCoinLabel()},onItem2Touched:function(){cc.log("================ onItem2Touched ================")},onItem3Touched:function(){cc.log("================ onItem3Touched ================")},onItem4Touched:function(){cc.log("================ onItem4Touched ================")},onItem5Touched:function(){cc.log("================ onItem5Touched ================")},onItem6Touched:function(){cc.log("================ onItem6Touched ================")},onItem7Touched:function(){cc.log("================ onItem7Touched ================")},onItem8Touched:function(){cc.log("================ onItem8Touched ================")},onItem9Touched:function(){cc.log("================ onItem9Touched ================")},onItem10Touched:function(){cc.log("================ onItem10Touched ================")},onItem11Touched:function(){cc.log("================ onItem11Touched ================")},onItem12Touched:function(){cc.log("================ onItem12Touched ================")}}),cc._RFpop()},{DataManager:"DataManager"}],StartBtnAnimation:[function(e,t,a){"use strict";cc._RFpush(t,"bbc91UvXOVEsLlXkMSwS58a","StartBtnAnimation"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){},onEnable:function(){var e=cc.scaleBy(.6,1.05);this.node.runAction(cc.repeatForever(cc.sequence(e,e.reverse())))}}),cc._RFpop()},{}],base64:[function(e,t,a){"use strict";cc._RFpush(t,"ed433xAYKNI4Khf6H4+RZlc","base64"),function(){var e="base64",a={},o=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/","="],n={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25,a:26,b:27,c:28,d:29,e:30,f:31,g:32,h:33,i:34,j:35,k:36,l:37,m:38,n:39,o:40,p:41,q:42,r:43,s:44,t:45,u:46,v:47,w:48,x:49,y:50,z:51,0:52,1:53,2:54,3:55,4:56,5:57,6:58,7:59,8:60,9:61,"+":62,"/":63};a.encode=function(){return window.btoa?function(e){return window.btoa(unescape(encodeURIComponent(e)))}:function(e){var t,a,n,c,r,s,i,u,l=0,d=0,h=[];for(e=unescape(encodeURIComponent(e)),t=e.length;t>l;)a=e.charCodeAt(l++)||0,n=e.charCodeAt(l++)||0,c=e.charCodeAt(l++)||0,r=a>>2&63,s=(3&a)<<4|n>>4&15,i=(15&n)<<2|c>>6&3,u=63&c,c||(u=64,n||(i=64)),h[d++]=o[r],h[d++]=o[s],h[d++]=o[i],h[d++]=o[u];return h.join("")}}(),a.decode=function(){return window.atob?function(e){return decodeURIComponent(escape(window.atob(e)))}:function(e){var t,a,o,c,r,s,i,u,l=0,d=0,h=[];for(e=e.replace(/\=+$/,"").split(""),t=e.length;t>l;)a=n[e[l++]]||"",o=n[e[l++]]||"",c=n[e[l++]]||"",r=n[e[l++]]||"",s=(63&a)<<2|o>>4&3,i=(15&o)<<4|c>>2&15,u=(3&c)<<6|63&r,h[d++]=String.fromCharCode(s),i&&(h[d++]=String.fromCharCode(i),u&&(h[d++]=String.fromCharCode(u)));return decodeURIComponent(escape(h.join("")))}}(),a.encodeSafe=function(e){return a.encode(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,".")},a.decodeSafe=function(e){return a.decode(e.replace(/-/g,"+").replace(/_/g,"/").replace(/\./g,"="))},"object"==typeof lego&&lego.define?lego.define(e,[],function(e,t,o){o.exports=a}):"object"==typeof t&&t.exports?t.exports=a:window[e]=a}(),cc._RFpop()},{}],main:[function(e,t,a){"use strict";cc._RFpush(t,"b58dfN0qslORY/J8LJJFamV","main");var o,n={name:"小逗逼",level:1,vip:!1};cc.Class({"extends":cc.Component,properties:{btn_storage:{"default":null,type:cc.Button},btn_read:{"default":null,type:cc.Button},btn_remove:{"default":null,type:cc.Button},btn_clear:{"default":null,type:cc.Button},label_control:{"default":null,type:cc.Label},label_cipherData:{"default":null,type:cc.Label},label_decryptionData:{"default":null,type:cc.Label},userdata_name:{"default":null,type:cc.EditBox},userdata_level:{"default":null,type:cc.EditBox},userdata_vip:{"default":null,type:cc.EditBox}},onLoad:function(){this.userdata_name.string=n.name,this.userdata_level.string=n.level,this.userdata_vip.string=n.vip,o=e("base64")},_readData:function(){var e,t,a="",o="";for(var c in n){var e=cc.sys.localStorage.getItem(c);if(null===e)break;t=decodeURI(atob(e)),a+=c+":"+e+"\n",o+=c+":"+t+"\n"}this.label_cipherData.string=a,this.label_decryptionData.string=o},saveUserDataEvent:function(){n.name=this.userdata_name.string,n.level=this.userdata_level.string,n.vip=this.userdata_vip.string;var e;JSON.stringify(n);for(var t in n)e=btoa(encodeURI(n[t])),cc.sys.localStorage.setItem(t,e);this.label_control.string="存储用户数据",this.label_cipherData.string="存储完毕",this.label_decryptionData.string="存储完毕"},readUserDataEvent:function(){this.label_control.string="读取用户数据",this._readData()},removeUserDataEvent:function(){cc.sys.localStorage.removeItem("vip"),this.label_control.string="移除用户数据",this._readData()},clearUserDataEvent:function(){cc.sys.localStorage.clear(),this.label_control.string="清空用户数据",this._readData()}}),cc._RFpop()},{base64:"base64"}]},{},["DataManager","main","StartBtnAnimation","base64","ButtonManager","GameUIManager"]);