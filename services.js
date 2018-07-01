/* Services */
var services = angular.module('app.services', [])

services.factory( 'Host', function($http) {
  // Host is a class which we can use for retrieving and 
  // updating data on the server
  var Host = function(data) { return data; //angular.extend(this, data); 
  }

  Host.list = function() {
    return $http.get('hosts.json').then(function(response, status) { return new Host(response.data); console.log(response.data); });
  };

  return Host;
});
