(() => {
  angular
    .module('fj.app')
    .factory('api', api);

  api.$inject = [];
  function api() {
    return {
      retweet(tweet) {
        console.warn('retweet: ', tweet.text);
      },
      replyTo(tweet) {
        console.warn('replyTo: ', tweet.text);
      },
    };
  }
})();
