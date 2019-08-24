(function(){
    var app = angular.module("rallyapp",[]);
      app.controller("MyCtrl",['$scope',function($scope){
        $scope.rallyInfo={};
        $scope.saveData=function(){
          console.log($scope.rallyInfo);
        };
      }])    
})();


