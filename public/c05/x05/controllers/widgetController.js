(() => {
  angular
    .module('fj.app')
    .controller('WidgetController', widgetController);

  widgetController.$inject = ['$scope', '$interval'];
  function widgetController($scope, $interval) {
    $scope.loaded = false;
    $scope.setAppTitle = _setAppTitle;

    const interval = $interval(_init, 1e3);

    function _init() {
      if (document.readyState === 'complete') {
        console.info('complete...');
        $interval.cancel(interval);
        $scope.loaded = !$scope.loaded;
      }
    }
    function _setAppTitle(title, subtitle) {
      $scope.title = title;
      $scope.subtitle = subtitle;
    }
  }
})();
