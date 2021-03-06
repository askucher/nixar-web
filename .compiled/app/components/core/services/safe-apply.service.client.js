// Generated by LiveScript 1.3.1
angular.module('app').service('safeApply', ['$rootScope', function($rootScope){
  return function(fn){
    var phase;
    phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      return fn();
    } else {
      return $rootScope.$apply(fn);
    }
  };
}]);