var WechatAPI = require('wechat-api');

var api = new WechatAPI('wxff2f138e726bc6e5', 'e90afddc8cc657dc6c9c53dbc4055c10', );
var menu = {
		 "button":[
		           {
		             "type":"click",
		             "name":"今日歌曲",
		             "key":"V1001_TODAY_MUSIC"
		           },
		           {
		             "name":"菜单",
		             "sub_button":[
		               {
		                 "type":"view",
		                 "name":"搜索",
		                 "url":"http://www.soso.com/"
		               },
		               {
		                 "type":"click",
		                 "name":"赞一下我们",
		                 "key":"V1001_GOOD"
		               }]
		             }]
		           }
		         ]
		        };

api.createMenu(menu, function(err,result){
	console.log(err);
	console.log(result);
});