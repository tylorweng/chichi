//齊齊報你知

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


//製作回覆
bot.on('message', function (event) {

    switch (event.message.type) {

        case 'text':

            switch (event.message.text) {
			    
//---------------------純文字區----------------------	

	 case '阿齊':
            event.reply('好帥');
             break;
			    
//---------------------圖片區----------------------				    
	
	case '傻眼':
	return event.reply(
		{"type": "image",
		"originalContentUrl": "https://imgur.com/pIYJKNZ.jpg",
		"previewImageUrl": "https://imgur.com/pIYJKNZ.jpg"});
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
			 

//----------匯率專區-------------
	
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

	        case '人民幣':
		case 'CNY':	

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


			//人民幣即期買入、賣出
			var result_buy = target_odd[3].children[0].data;
			var result_sell = target_even[3].children[0].data;
			
			var result_buy_app = target_odd[4].children[0].data;
			var result_sell_app = target_even[4].children[0].data;
			
			return event.reply('人民幣(CNY)\n' +
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
			    
	        case '歐元':
		case 'EUR':	

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


			//歐元即期買入、賣出
			var result_buy = target_odd[12].children[0].data;
			var result_sell = target_even[12].children[0].data;
			
			var result_buy_app = target_odd[13].children[0].data;
			var result_sell_app = target_even[13].children[0].data;
			
			return event.reply('歐元(EUR)\n' +
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
			    		    
	        case '英鎊':
		case 'GBP':	

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


			//英鎊即期買入、賣出
			var result_buy = target_odd[21].children[0].data;
			var result_sell = target_even[21].children[0].data;
			
			var result_buy_app = target_odd[22].children[0].data;
			var result_sell_app = target_even[22].children[0].data;
			
			return event.reply('英鎊(GBP)\n' +
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
