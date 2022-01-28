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

  widgetController.$inject = ['$timeout'];
  function widgetController($timeout) {
    const vm = this;
    vm.loaded = false;
    vm.tweets = [];

    $timeout(init, 3e3);

    function init() {
      vm.loaded = !vm.loaded;
      vm.tweets = data;
    }
  }
})();
