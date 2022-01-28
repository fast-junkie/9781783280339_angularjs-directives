(() => {
  angular
    .module('fj.app')
    .directive('tweet', tweet);

  tweet.$inject = ['api'];
  function tweet(api) {
    return ($scope) => {
      $scope.retweet = () => {
        api.retweet($scope.tweet);
      };
      $scope.reply = () => {
        api.replyTo($scope.tweet);
      };
      console.info('api', api);
    };
  }
})();
