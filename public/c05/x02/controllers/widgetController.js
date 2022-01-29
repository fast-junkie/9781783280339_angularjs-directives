(() => {
  angular
    .module('fj.app')
    .controller('WidgetController', widgetController);

  widgetController.$inject = ['$interval'];
  function widgetController($interval) {
    const vm = this;
    vm.loaded = false;
    vm.title = 'Hello... jars of clay...';
    vm.setAppTitle = _setAppTitle;

    const interval = $interval(_init, 1e3);

    function _init() {
      if (document.readyState === 'complete') {
        console.info('complete...');
        $interval.cancel(interval);
        vm.loaded = !vm.loaded;
      }
    }
    function _setAppTitle(title) {
      vm.title = title;
    }
  }
})();
