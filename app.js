angular
    .module('App',[])
    .controller('MainCtrl',function($scope,$http){

        

        $http.get("hosts.json")
        .then(function(response) {
            $scope.hosts = response.data;
        });


        $scope.records = [
        {"id":1,"name":"Dev"},
        {"id":2,"name":"Staging"},
        {"id":3,"name":"Production"},
        ];

        $scope.selected ={};

        for(x in $scope.records){

            console.log($scope.records[x].id);
            $scope.selected[$scope.records[x].id]=true;

        }

        $scope.minSelected = function(){
            var count = 0;
            for(x in $scope.selected){
                if($scope.selected[x]) 
                {
                    count++;
                    $scope.item=x;
                }
                
            }

            if(count === 0){
            	
              $scope.selected[$scope.item]=true;
            } 
            //return (count===3) ? true : false;
            
        };
    });
