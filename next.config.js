const withLess = require('@zeit/next-less');

// next.config.js
module.exports = withLess({
  exportPathMap: function() {
    return {
      '/': {
        page: '/'
      },
      '/about': {
        page: '/about'
      }
    }
  }
});
