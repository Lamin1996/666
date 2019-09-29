$(function(){
    console.log("---")
    let obtna = $("#btn-msg");
    obtna.click(function(){
        function formatterDateTime() {
            var date = new Date()
            var month = date.getMonth() + 1
            var datetime = date.getFullYear() +
                "" // "年"
                +
                (month >= 10 ? month : "0" + month) +
                "" // "月"
                +
                (date.getDate() < 10 ? "0" + date.getDate() : date
                    .getDate()) +
                "" +
                (date.getHours() < 10 ? "0" + date.getHours() : date
                    .getHours()) +
                "" +
                (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                    .getMinutes()) +
                "" +
                (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                    .getSeconds());
            return datetime;
        }
        $.ajax({
            type: 'post',
            url: 'http://route.showapi.com/28-1',
            dataType: 'json',
            data: {
                "showapi_timestamp": formatterDateTime(),
                "showapi_appid": '105009', //这里需要改成自己的appid
                "showapi_sign": '51084e3ee1f34d5c86af6e0e3506a8fa', //这里需要改成自己的应用的密钥secret
                "mobile": "13822379354",
                "content": "{\"name\":\"牛二\",\"code\":\"123456\",\"minute\":\"3\",\"comName\":\"登录火星YI民公司\"}",
                "tNum": "T150606060601",
                "big_msg": ""
            },
            error: function(XmlHttpRequest, textStatus, errorThrown) {
                alert("操作失败!");
            },
            success: function(result) {
                console.log(result) //console变量在ie低版本下不能用
                alert(result.showapi_res_code)
            }
        });
    })
})
