(() => {
  angular
    .module('fj.app.directives')
    .directive('myScopedDirective', myScopedDirective);

  myScopedDirective.$inject = [];
  function myScopedDirective() {
    return {
      scope: true,
      link($scope) {
        console.info('Inherited scope...?', $scope);
        $scope.title = 'Directive title...';
        $scope.setDirectiveTitle = (title) => {
          $scope.title = title;
        };
      },
    };
  }
})();
