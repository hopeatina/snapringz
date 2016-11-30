/**
 * Created by theon on 11/28/2016.
 */

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: process.env.CONSUMERKEY,
    consumer_secret: process.env.CONSUMERSECRET,
    access_token_key: process.env.ACCESSTOKEN,
    access_token_secret: process.env.ACCESSTOKENSECRET
});

var params = {"q": 'spectacles snapchat',
"result_type": 'recent', "count": 100};
// console.log(client);
client.get('/search/tweets', params, function(error, tweets, response) {
    var options = ["retweet","favorite"];

    if (!error) {
        console.log("No error")
    } else {
        console.log(error)
    }
    var temptweets = tweets;
    console.log(temptweets);
    for(var i =0; i < 10; i++) {
        var index = Math.floor(Math.random() * temptweets.statuses.length);
        var selectedtweet = temptweets.statuses[index];
        var option = options[Math.floor(Math.random() * options.length)];
        console.log("tweet length", temptweets.statuses.length, index);
        if (option == "favorite") {
        client.post('favorites/create',{id: selectedtweet.id_str}, function (error,tweets,response){console.log(error + " Favorited");});
        // client.post('favorites/create',{id: selectedtweet.id}, function (error,tweets,response){console.log(error+ ", Favorited "+ selectedtweet.id);});
        } else {
        // client.post('statuses/retweet',{id: selectedtweet.id}, function (error,tweets,response){console.log(error+ ", Retweeted "+ selectedtweet.id);});
        client.post('statuses/retweet',{id: selectedtweet.id_str}, function (error,tweets,response){console.log(error + " Retweeted");});
        }
        temptweets.statuses.splice(index, 1);

    }

    client.post('friendships/create',{screen_name: selectedtweet.user.screen_name, user_id: selectedtweet.user.id_str},function (error,tweets,response){console.log(error + "Friended "+ selectedtweet.user.screen_name);});

});

// console.log("NEW TASK WAS RUN!");
// setTimeout(function(){
//     console.log("DONE");
// }, 20000);
// var client = new Twitter({
//     consumer_key: process.env.TWITTER_PURRCH_KEY, // should be url encoded. skipping for now
//     consumer_secret: process.env.TWITTER_SECRET,
//     access_token_key: usermodel.token,
//     access_token_secret: usermodel.tokenSecret
// });
