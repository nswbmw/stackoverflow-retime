
(function stackoverflowRetime() {
  'use strict';

  [].slice.call(document.querySelectorAll('span.relativetime,span.relativetime-clean')).forEach(function (item) {
    item.innerText = item.getAttribute('title')
  });
})();
