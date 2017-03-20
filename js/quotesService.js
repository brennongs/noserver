angular.module('quoteBook').service('quotesService',function($http){
  this.getQuote=()=>{
    return $http({
      method: 'GET',
      url:"http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"
    }).then((r)=>{
      console.log(r);
      let quotes=[]
      let quote={
        text: r.data.quoteText,
        author: r.data.quoteAuthor
      };
      console.log(quote);
      quotes.push(quote);
    })
    return quote;
  }
});
