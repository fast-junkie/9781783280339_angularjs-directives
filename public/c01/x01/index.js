(() => {
  angular.module('fj.app', []);

  const data = [
    {
      author: 'fast_junkie',
      text: 'Read @IntelTechniques "Extreme Privacy" book... loads of #cool for the #privacy advocate...',
    },
    {
      author: 'fast_junkie',
      text: 'Never make eye contact while eating a banana. 🤣',
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
