/**
 * 为什么要用这么古老的方式，因为重构版本用的这种方式，这里如果不用随机数加载js会有缓存问题
 * */
(function() {
  var fullPath = location.href;
  var idxOfWWW = fullPath.indexOf('/www/');
  var path;

  if (idxOfWWW > 0) {
    var lastIdxOfWWW = idxOfWWW + 4;
    path = fullPath.substr(0, lastIdxOfWWW);
  } else {
    var host = location.host;
    var idxOfHost = fullPath.indexOf(host);
    var lastIdxOfHost = idxOfHost + host.length;
    path = fullPath.substr(0, lastIdxOfHost) + '/static';
  }
  // 同步确保配置优先加载
  var request = new XMLHttpRequest();
  request.open('GET', path + '/variable.js?t=' + new Date().getTime(), false);
  request.send(null);
  try {
    var res = request.responseText;
    eval(res);
    window.apiDomain = JSON.parse(apiDomain);
  } catch (err) {
    console.error(err);
  }
})();
