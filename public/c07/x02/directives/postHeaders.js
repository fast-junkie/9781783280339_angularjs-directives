(() => {
  angular
    .module('fj.app')
    .directive('postHeaders', postHeaders);

  postHeaders.$inject = [];
  function postHeaders() {
    return {
      template: '<div class="post-header"></div>',
      replace: true,
      restrict: 'C',
      transclude: 'element',
      controller($scope, $elem, $attrs, $trans) {
        $trans((clone) => {
          clone.removeClass('post-header');
          const title = clone.find('.title').text();
          const dateEl = clone.find('.date').hide();
          const authorEl = clone.find('.author').hide();
          $elem
            .append(dateEl)
            .append(`<h2 class="title">${title}</h2>`)
            .append(authorEl);
        });
        $elem.waypoint(() => {
          $elem.find('.date, .author').fadeIn();
        });
      },
    };
  }
})();
