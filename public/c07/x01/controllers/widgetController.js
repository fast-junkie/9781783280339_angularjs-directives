(() => {
  angular
    .module('fj.app')
    .controller('WidgetController', widgetController);

  widgetController.$inject = ['$scope', '$interval'];
  function widgetController($scope, $interval) {
    $scope.loaded = false;
    $scope.name = 'Junkie';
    $scope.friendCount = 13;
    $scope.movie = 'Alien vs. Predator';

    const interval = $interval(init, 6e2);

    function init() {
      if (document.readyState === 'complete') {
        console.info('complete...');
        $interval.cancel(interval);
        $scope.loaded = true;
      }
    }
  }
})();
