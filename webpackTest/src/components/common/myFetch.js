'use strict';
// hack 华为荣耀6 fetch Promise is not defined
require('es6-promise');
// require('fetch');
require('whatwg-fetch');

function _objToParamUrl(obj) {
    // obj 转成 参数url
    var bodyStr = '';
    for (var key in obj) {
        if (bodyStr != '') {
            bodyStr += '&';
        }
        bodyStr += key + '=' + encodeURIComponent(obj[key]);
    }

    return bodyStr;
};

function _fetch(config, loading) {

    if (!config.url) {
        return console.warn('缺少请求地址url');
    }

    var bodyStr = _objToParamUrl(config.data);
    var headers = config.header || {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    var _fetch = fetch(
            config.url, {
                method: config.type || 'POST',
                headers: headers,
                body: bodyStr
            })
        .then(function(_response) {

            return _response.json();

        }).then(function(_rps) {

            if (config.noDeal) {
                return _rps;
            }
            if (_rps && _rps.resultCode == 1) {
                return _rps.data || true
            }
            if (_rps && _rps.resultMsg) {
                alert(_rps.resultMsg);

                return null;
            }

        }).catch(function(ex) {
        
            console.log('接口出错', ex)
        });

    return _fetch;

};

module.exports = _fetch;
