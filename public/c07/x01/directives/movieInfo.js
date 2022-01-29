(() => {
  angular
    .module('fj.app')
    .directive('movieInfo', movieInfo);

  movieInfo.$inject = [];
  function movieInfo() {
    return {
      template: `
        <div class="movie-info">
          <h1 class="movie-title">{{name}}</h1>
          <img class="movie-poster" ng-src="/assets/img/posters/{{name}}.jpg" />
          <div ng-transclude></div>
        </div>`,
      transclude: true,
      scope: {
        name: '=movieInfo',
      },
    };
  }
})();
