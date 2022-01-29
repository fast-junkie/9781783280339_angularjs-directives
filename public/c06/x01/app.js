(() => {
  angular.module('fj.app', []);

  angular
    .module('fj.app')
    .controller('WidgetController', widgetController);

  widgetController.$inject = ['$scope', '$interval'];
  function widgetController($scope, $interval) {
    $scope.loaded = false;

    const interval = $interval(init, 6e2);

    function init() {
      if (document.readyState === 'complete') {
        console.info('complete...');
        $interval.cancel(interval);
        $scope.loaded = true;
      }
    }
  }

  angular
    .module('fj.app')
    .directive('timePicker', timePicker);

  timePicker.$inject = [];
  function timePicker() {
    const today = new Date();
    return {
      require: '?ngModel',
      link(scope, elem, attrs, ngModel) {
        let initialized = false;
        ngModel = ngModel || { $setViewValue: angular.noop };
        setTimeout(() => {
          initialized = elem.timepicker()
            .on('changeTime', () => {
              const sec = elem.timepicker('getSecondsFromMidnight');
              ngModel.$setViewValue(sec * 1e3);
            });
        });
        ngModel.$render = (val) => {
          if (!initialized) return;
          elem.timepicker('setTime', new Date(today.getTime() + val));
        };
      },
    };
  }
})();
