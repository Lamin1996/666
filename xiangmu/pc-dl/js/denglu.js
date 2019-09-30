
$(".login li").click(function(){
    $(this).addClass("li-change").siblings().removeClass("li-change")
    let index= $(this).index();
    // console.log(index)
    $(".show-all>div").eq(index).addClass("get").siblings().removeClass("get");
})
$(function(){
    (new Captcha({ lineNum: 10, dotNum: 20, length: 6, fontSize: 30 })).draw(document.querySelector('#captcha'), r => {
    console.log(r, '验证++++');
    imageCodeVal     = r;
});
    $("#zc-now").click(function(){
     window.location.replace("http://127.0.0.1/code/xiangmu/pc-zc/zc.html");
 });
 $("#shouye").click(function(){
    window.location.replace("http://127.0.0.1/code/xiangmu/pc/1.html");
})
    $("#loginBtn").click(function() {
        $.ajax({
            type: "post",
            url: "./api/login.php",
            data: `phonenumber=${$("#username").val()}&password=${$("#password").val()}`,
            dataType: "json",
            success: function(response) {
                if (response.status == "success") {
                    alert(response.data.msg);
                    window.location.replace("http://127.0.0.1/code/xiangmu/pc/1.html")
                } else {
                    alert(response.data.msg);
                }
            }
        });
    })
})
