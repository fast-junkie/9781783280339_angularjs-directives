(() => {
  angular
    .module('fj.app')
    .controller('WidgetController', widgetController);

  widgetController.$inject = ['$scope', '$interval'];
  function widgetController($scope, $interval) {
    $scope.loaded = false;
    $scope.title = 'Hello... jars of clay...';
    $scope.subtitle = 'Subtitle...';
    $scope.setAppTitle = _setAppTitle;

    const interval = $interval(_init, 1e3);

    function _init() {
      if (document.readyState === 'complete') {
        console.info('complete...');
        $interval.cancel(interval);
        $scope.loaded = !$scope.loaded;
      }
    }
    function _setAppTitle(title) {
      $scope.title = title;
    }
  }
})();
