(() => {
  angular
    .module('fj.app.directives')
    .directive('myScopedDirective', myScopedDirective);

  myScopedDirective.$inject = [];
  function myScopedDirective() {
    return {
      scope: {
        title: '@msdTitle',
        subtitle: '=msdSubtitle',
      },
      link($scope) {
        console.info('Inherited scope...?', $scope);
        $scope.setDirectiveTitle = (title) => {
          $scope.title = title;
        };
        $scope.setDirectiveSubtitle = (subtitle) => {
          $scope.subtitle = subtitle;
        };
      },
    };
  }
})();
