var result = function(){
    $.ajax({
      url: 'https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
      success: function(data){
        quote = data.quoteText;
        author = data.quoteAuthor;
        document.querySelector("#quote").innerHTML = ('"' + quote + '"');
        if(author){
          document.querySelector("#author").innerHTML = ("~ " + author);
        } else{
          document.querySelector("#author").innerHTML = ("~ " + 'Unknown');
        }
      },
      error: function(err) { return (err); }
    });
 }

 result();

$(document).ready(function(){
  $('#click').on('click', function(e){
    e.preventDefault();
     result();
    });
});

function tweetOut(){

  var tweet = document.getElementById('tweet');

  tweet.addEventListener('click', function(){

    var quote = document.querySelector("#quote").innerHTML;
    var author = document.querySelector("#author").innerHTML;

    if(quote.length > 140){
    quote = quote.substr(0,120);
    }

    var twitterLink = 'https://twitter.com/share?text=' + encodeURIComponent(quote + '-' + author)

     window.open(twitterLink);

  });
}
tweetOut();
