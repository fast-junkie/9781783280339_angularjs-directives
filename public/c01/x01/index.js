(() => {
  angular.module('fj.app', []);

  const data = [
    {
      author: 'mrvdot',
      text: 'Check out my new Angular widget!',
    },
    {
      author: 'mrvdot',
      text: 'I love directives!',
    },
  ];

  angular
    .module('fj.app')
    .controller('WidgetController', widgetController);

  widgetController.$inject = ['$interval'];
  function widgetController($interval) {
    const vm = this;
    vm.loaded = false;
    vm.tweets = [];

    const interval = $interval(init, 1e3);

    function init() {
      if (document.readyState === 'complete') {
        console.info('complete...');
        $interval.cancel(interval);
        vm.loaded = !vm.loaded;
        vm.tweets = data;
      }
    }
  }
})();
