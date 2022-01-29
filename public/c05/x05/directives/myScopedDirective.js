(() => {
  angular
    .module('fj.app.directives')
    .directive('myScopedDirective', myScopedDirective);

  myScopedDirective.$inject = [];
  function myScopedDirective() {
    return {
      scope: {
        updateTitle: '&msdUpdateTitle',
      },
      link($scope) {
        $scope.title = 'Lonely Directive';
      },
    };
  }
})();
