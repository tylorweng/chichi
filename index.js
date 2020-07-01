//GIB報你知

var request = require("request");
var cheerio = require("cheerio");

const linebot = require('linebot');
const express = require('express');

const bot = linebot({
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});


const app = express();

const linebotParser = bot.parser();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/linewebhook', linebotParser);

//每當server啟動，或是重build時，發送給自己的訊息
setTimeout(function () {
    var userId = 'U087e7ce49ad11b0bdbc68a240e6d8108';
    var sendMsg = 'server啟動惹';
    bot.push(userId, sendMsg);
    console.log('send: ' + sendMsg);
}, 5000);


//製作回覆
bot.on('message', function (event) {

    switch (event.message.type) {

        case 'text':

            switch (event.message.text) {

                //純文字區	
        case '安安':

            event.reply('安安你好 幾歲 住哪？');

             break;

  // ----------------------------------------------------------------                  
			    
                //午餐吃什麼
	      
        case '午餐吃什麼' :   
        case '中午吃什麼' :
        case '吃什麼':
        case '吃甚麼':
        case '午餐吃甚麼':
        case '中午吃甚麼':
        case '吃什麼？':
        case '吃甚麼？':
			    
		
            return event.reply(	 
                
                {
                    "type": "template",
                    "altText": "this is a buttons template",
                    "template": {
                      "type": "buttons",
                      "actions": [
                        {
                          "type": "message",
                          "label": "低價位",
                          "text": "低價位"
                        },
                        {
                          "type": "message",
                          "label": "中價位",
                          "text": "中價位"
                        },
                        {
                          "type": "message",
                          "label": "高價位",
                          "text": "高價位"
                        }
                      ],
                      "thumbnailImageUrl": "https://fastly.4sqi.net/img/general/width960/25871419_FD801fqui1PoxW2IaoNC2PZUsB_MuHNjSHvEKIs1MHE.jpg",
                      "title": "今天想吃點什麼呢？",
                      "text": "點選下面的價位來瞧瞧吧！"
                    }
                  }
            );
                    
            break;	
			    
			    
			    	    
		//random 中餐選擇區	
		case '低價位':
			var items = Array("蛋餅","水煎包","馬祖炒麵","八方雲集","早餐店");			
			var item = items[Math.floor(Math.random()*items.length)];
			
			return event.reply(
			{"type": "text",
			"text":"幫你想好了，你今天就吃 : 「" + item + "」吧!"
			});
			
			break;	
			
		case '中價位':
			var items = Array("麥當勞","漢堡王","Johonson's義大利麵");			
			var item = items[Math.floor(Math.random()*items.length)];
			
			return event.reply(
			{"type": "text",
			"text":"幫你想好了，你今天就吃 : 「" + item + "」吧!"
			});
			
			break;	
			
		case '高價位':
			var items = Array("還沒有資料ＱＱ");			
			var item = items[Math.floor(Math.random()*items.length)];
			
			return event.reply(
			{"type": "text",
			"text":"幫你想好了，你今天就吃 : 「" + item + "」吧!"
			});
			
            break;	 
            

// ----------------------------------------------------------------                    
			    
	    //喝茶專區	 
        case '喝茶':
        case '喝茶？':	    
		
            return event.reply(	 
                
                {
                    "type": "template",
                    "altText": "this is a buttons template",
                    "template": {
                      "type": "buttons",
                      "actions": [
                        {
                          "type": "message",
                          "label": "跟美女喝茶",
                          "text": "跟美女喝茶"
                        },
                        {
                          "type": "message",
                          "label": "喝「山焙」的茶",
                          "text": "喝「山焙」的茶"
                        }
                      ],
                      "thumbnailImageUrl": "https://www.mingpaocanada.com/healthnet/gallery_image/20200331001.jpg",
                      "title": "請問要喝茶還是喝茶？",
                      "text": "請選擇！！"
                    }
                  }
            );
                    
            break;	



        case '跟美女喝茶':


                return event.reply(	 
                
                    {
                        "type": "image",
                        "originalContentUrl": "https://live.staticflickr.com/8217/29023807952_99739a100d_b.jpg",
                        "previewImageUrl": "https://live.staticflickr.com/8217/29023807952_99739a100d_b.jpg",
                        "animated": false
                      }
                );
                        
                break;	

           
                case '喝「山焙」的茶':


                    return event.reply(	 
                    
                        {
                            "type": "image",
                            "originalContentUrl": "https://scontent.ftpe12-2.fna.fbcdn.net/v/t1.0-9/95955824_517701845563400_264429222175440896_o.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_ohc=yFFjWGiATzwAX_SMNSu&_nc_ht=scontent.ftpe12-2.fna&oh=0d6942a68f5be5efb39b77578241bd62&oe=5EF9A38B",
                            "previewImageUrl": "https://scontent.ftpe12-2.fna.fbcdn.net/v/t1.0-9/95955824_517701845563400_264429222175440896_o.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_ohc=yFFjWGiATzwAX_SMNSu&_nc_ht=scontent.ftpe12-2.fna&oh=0d6942a68f5be5efb39b77578241bd62&oe=5EF9A38B",
                            "animated": false
                          }
                    );
                            
                break;		    
		
			    
// ----------------------------------------------------------------
			    
			    
			    
              //random 笑話區	
		case '笑話':
			var items = Array(
			"有一天，女友發一則簡訊給我:「我們還是分手吧!」 \n 我還沒來得及傷心，女友又發來一則:「對不起，發錯人了。」\n 這下我可以徹底傷心了...",
			"有一天下午,客人到幼稚園參觀。他問一個小弟弟:「小弟弟,你午睡了沒??\n」小弟弟搖搖頭回答他:「我四歲,還沒五歲!」",
			"動物園管理員對慧慧說：「不必害怕，這頭獅子非常溫馴，牠是用奶瓶餵大的。」\n 慧慧：「我也是用奶瓶餵大的，但是我現在只喜歡吃肉。」",
			"小美問媽媽：為什麼稱蔣先生為『先人』？\n 媽媽說：因為先人，是對死去的人的稱呼。\n 小美說：那去世的奶奶是不是要叫『鮮奶』？ ",
			"軟糖跟餅乾分手\n軟糖很難過\n就變成QQ軟糖了",
			"有一個神經病去搭飛機，把飛機上的馬桶拆下來丟了，為什麼？\n\n因為他是神經病。",
			"人比人，氣死人\n那蛋糕比蛋糕呢?\n\n\n起士蛋糕",
			"聽說睡覺的時候手機放在枕頭旁邊會致癌\n嚇得我從此不敢用枕頭了",
			"有天芥末走在路上被人打\n芥末就問:幹嘛打我?\n結果打他的人說:阿你不是很嗆?",
			"「上次那件事真的很謝謝你，賴先生」\n「ㄜ...我姓翁ㄟ」\n「不，你是個值得姓賴的人",
			"川普跟金正恩同時掉到水裡\n誰會得救？\n\n\n世界會得救",
			"小明跟火車賽跑\n最後小明贏了 你知道為甚麼嗎?\n\n\n因為小明真的跑得很快",
			"一個中年人問一個年輕人：「你有看過金庸的小說嗎？」\n年輕人：「沒有，只有看過電視劇。」\n中年人：「那你知道金庸寫的十四部小說的書名的第一個字，串起來會成為\n一首詩：『飛雪連天射白鹿，笑書神俠倚碧鴛」嗎？」 \n年輕人：「不知道…..但是我有看羅琳（J.K. Rowling）的哈利波特的小說，\n她寫的七本小說的書名的第一個字串起來是—— \n『哈哈哈哈哈哈哈』！」"
			);			
			var item = items[Math.floor(Math.random()*items.length)];
			
			console.log('send: '+item);
			
			return event.reply(
			{"type": "text",
			"text":item 
			});
		
			break;		
		            

                    
        case '我難過':

			event.reply('來，導播~音樂請下: ' + 'https://www.youtube.com/watch?v=T0LfHEwEXXw');

			break;	
			 

		//圖片區		
		case '傻眼':

			return event.reply(
			{"type": "image",
			"originalContentUrl": "https://i.imgur.com/Cx0v20I.png",
			"previewImageUrl": "https://i.imgur.com/Cx0v20I.png"
			});
			
			break;            
                    
                    
        case '日圓':
		case '日幣':	
		case 'JPY':	

			request({
			url: " https://www.esunbank.com.tw/bank/personal/deposit/rate/forex/foreign-exchange-rates",
			method: "GET"
			}, function(error, response, body) {
				if (error || !body) {
				return;
			}else{

			// 爬完網頁後要做的事情
			var $ = cheerio.load(body);
	
			//即期買入匯率
			var target_odd = $(".odd");
	
			//即期賣出匯率
			var target_even = $(".even");


			//日圓即期買入、賣出
			var result_buy = target_odd[9].children[0].data;
			var result_sell = target_even[9].children[0].data;
			
			var result_buy_app = target_odd[10].children[0].data;
			var result_sell_app = target_even[10].children[0].data;
			
			return event.reply('日圓(JPY)\n' +
			'\n(銀行)'+
			'\n即期買入匯率為:' + result_buy + 
			'\n即期賣出匯率為:' + result_sell +
			'\n'+
			'\n✩優惠✩(網銀、APP)'+
			'\n即期買入匯率為:' + result_buy_app + 
			'\n即期賣出匯率為:' + result_sell_app +
			'\n\n更多資訊請至玉山銀行:\nhttps://www.esunbank.com.tw/bank/personal/deposit/rate/forex/foreign-exchange-rates');
	
			}
		  });

		  

			break;
			
	
		case '美金':
		case '美元':	
		case 'USD':	

			request({
			url: " https://www.esunbank.com.tw/bank/personal/deposit/rate/forex/foreign-exchange-rates",
			method: "GET"
			}, function(error, response, body) {
				if (error || !body) {
				return;
			}else{

			// 爬完網頁後要做的事情	
			var $ = cheerio.load(body);
	
			//即期買入匯率
			var target_odd = $(".odd");
	
			//即期賣出匯率
			var target_even = $(".even");

	
			//美金即期買入、賣出
			var result_buy = target_odd[0].children[0].data;
			var result_sell = target_even[0].children[0].data;
			
			var result_buy_app = target_odd[1].children[0].data;
			var result_sell_app = target_even[1].children[0].data;
			
			return event.reply('美金(USD)\n' + 
			'\n(銀行)'+
			'\n即期買入匯率為:' + result_buy + 
			'\n即期賣出匯率為:' + result_sell +
			'\n'+
			'\n✩優惠✩(網銀、APP)'+
			'\n即期買入匯率為:' + result_buy_app + 
			'\n即期賣出匯率為:' + result_sell_app +
			'\n\n更多資訊請至玉山銀行:\nhttps://www.esunbank.com.tw/bank/personal/deposit/rate/forex/foreign-exchange-rates');
	
			}
		  });


			break;
        
                    
                    
            }// text輸出，請寫在這上方 
            break;


    }

});




app.listen(process.env.PORT || 80, function () {
    console.log('LineBot is running.');
});
