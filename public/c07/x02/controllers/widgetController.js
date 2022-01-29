(() => {
  angular
    .module('fj.app')
    .controller('WidgetController', widgetController);

  widgetController.$inject = ['$scope', '$interval'];
  function widgetController($scope, $interval) {
    $scope.loaded = false;
    $scope.postTitle = 'Consider All Others Above Yourself';
    $scope.author = 'Fast Junkie';
    $scope.formattedDate = '1993-02-06 11:52:57';

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
