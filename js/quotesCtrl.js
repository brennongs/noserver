angular.module('quoteBook').controller('quotesCtrl',function($scope, quotesService){
  $scope.getQuote=()=>{
    console.log(quotesService.getQuote());
    quotesService.getQuote().then((r)=>{
      console.log(r);
      $scope.quote=r;
    })
  };
  $scope.getQuote();
  console.log($scope.quote);
})
