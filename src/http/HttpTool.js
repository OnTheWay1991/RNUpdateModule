import Config from '../Config.js';

let HttpTool = {
    post: (url, successCallback, failCallback, param, other) => {
        console.log("开始请求===》post");
        if (!other) {
            other = {
                host: Config.host,
                contentType: "application/x-www-form-urlencoded;charset=utf-8"
            };
        }
        let host = other.host + url;
        let body = HttpTool.formatParamsTools(param);
        console.log("开始请求===》host：" + host);
        console.log("开始请求===》contentType：" + other.contentType);
        console.log("开始请求===》得到的参数：" );
        console.log(param);
        console.log("开始请求===》提交的参数：" + body);
        fetch(host, {
            method: "POST",
            headers: {
                // "Content-Type": other.contentType,
                "Content-Type": other.contentType,
            },
            body: body
        }).then((response) => response.json())
            .then((json) => {
                console.log("-----------------------success---------------------------");
                console.log(json);
                let option = {
                    code: json.code,
                    message: json.message,
                    body: json.body,
                };
                successCallback(option.code, option.message, json.body, option);
            })
            .catch((err) => {
                console.log("-----------------------error---------------------------");
                console.log(err);
                let option = {
                    code: -999,
                    message: "系统繁忙,请稍候再试",
                    host: host,
                    option: {err: err}
                };
                failCallback(option.code, option.message);
            }).done();
    },
    get: (url, successCallBack, failCallBack, params) => {
        fetch(url).then((res) => res.json())
            .then((response) => {
                console.log("--get---success---------");
                console.log(response);
            }).catch((err) => {
            console.log("--get---error---------");
            console.log(err);
        })

    },
    formatParamsTools(params) {
        let paramsBody = '';
        let i = 0;
        for (let key in params) {
            let v = params[key];
            if (v === undefined) {
                continue;
            }
            paramsBody += ( (i === 0 ? '' : '&') + ( key + '=' + (encodeURIComponent(v))));
            ++i;
        }
        return paramsBody;
    },
    formatParamsToolsFormData(params) {
        let formData = new FormData();
        for (let key in params) {
            let v = params[key];
            if (v === undefined) {
                continue;
            }
            formData.append(key,v);
        }
        return formData;
    }

};
module.exports = HttpTool;