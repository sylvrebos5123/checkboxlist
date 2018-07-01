'use strict';

var controllers = angular.module('app.controllers',[]);

controllers.controller('MainCtrl', function( $scope, Host, $location, $filter)  {
  
    //Just some global app vars
    $scope.title = "Hosts";

    //Initial sort order
    $scope.orderProp = 'title';

    //Get Host 
    Host.list().then(function (data) {
      $scope.hosts = data;
    });
    
    //Little function to create the sort order click handler
    $scope.setOrder = function (orderProp) {
        $scope.orderProp = orderProp;
    };

    //Little function to create the host detail click handler
    $scope.getHost = function( host_id ) {
        var newRoute = "/" + host_id;
        $location.path( newRoute );
    };
    
  
  $scope.items = [
    {id:1,name:'Dev'}, 
    {id:2,name:'Staging'}, 
    {id:3,name:'Production'}
  ];
  $scope.filterItems = {};
  //Initialize all filters at true
  for(var i in $scope.items){
    $scope.filterItems[$scope.items[i].name]=true;
  }

  $scope.minSelected = function(){
    var count = 0;
    console.log($scope.filterItems);
    for(var x in $scope.filterItems){
        if($scope.filterItems[x]) 
        {
            count++;
            $scope.item=x;
        }
        
    }

    if(count === 0){
      console.log("unchecked");
      $scope.filterItems[$scope.item]=true;
    } 
    //return (count===3) ? true : false;
    
};
  //filter
  $scope.testFilter = function (host) {
    return $scope.filterItems[host.environment.title];
  };
});