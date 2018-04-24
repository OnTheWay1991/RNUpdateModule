import Config from '../Config.js';

let HttpTool = {
    post:(url,successCallback,failCallback,param,other)=>{
        console.log("开始请求===》post");
        if (!other) {
            other = {
                host: Config.host,
                contentType: "application/x-www-form-urlencoded;charset=utf-8"
            };
        }
        let host = other.host + url;
        let body = HttpTool.formatParamsTools(param);
        console.log("开始请求===》host"+host);
        console.log("开始请求===》body"+body);
        fetch(host,{
            method: "POST",
            headers: {
                "Content-Type": other.contentType,
            },
            body: body
        }).then((response)=>response.json())
            .then((json)=>{
                console.log("请求成功===》json"+json);
                let option={
                    code:json.code,
                    message:json.message,
                    body:json.body,
                };
                console.log("-----success---------");
                console.log(JSON.stringify(json));
                successCallback(option.code, option.message, json, option);
            })
            .catch((err)=>{
                console.log("求始失败===》err"+err);
                let option = {
                    code: -999,
                    message: "系统繁忙,请稍候再试",
                    host: host,
                    option: {err:err}
                };
                console.log("-----error---------");
                console.log(err);
                failCallback(option.code, option.message, option)
        })
    },
    get:(url,successCallBack,failCallBack,params)=>{
      fetch(url).then((res)=>res.json())
          .then((response)=>{
              console.log("--get---success---------");
              console.log(response);
          }).catch((err)=>{
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
};
module.exports = HttpTool;