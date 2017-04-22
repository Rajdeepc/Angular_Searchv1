
app.controller('MainController', function ($scope,$http) {
  $http.get('http://starlord.hackerearth.com/edfora/hackernews').
    success(function(data, status, headers, config) {
      $scope.posts = data;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      // log error
    });

  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term
});