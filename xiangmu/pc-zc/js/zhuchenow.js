$(function(){

    $("input[type='checkbox']").click(function(){
        if($("input[type='checkbox']").is(':checked')){
            $(".zc-a").addClass("change")
        }
        else{
            $(".zc-a").removeClass("change");
        }
    })

    let iphoneInput =$("#iphoneID");
    let imageCodeInput = $("#check");
    let iphonecheck = $("#iphonecheck");
    let passwordAInput = $("#passwordA");
    let passwordBInput = $("#passwordB");


    let passwordVal = "";
    let imageCodeVal = "";
    let num;


    let phoneReg = /^1[3-9]\d{9}$/;
    let passwordReg = /^[a-zA-Z0-9]{6,16}$/;

    (new Captcha({ lineNum: 10, dotNum: 20, length: 6, fontSize: 30 })).draw(document.querySelector('#captcha'), r => {
        console.log(r, '验证++++');
        imageCodeVal = r;
    });


    imageCodeInput.blur(function(){
        let val = $(this).val().trim();
        if(val.length ==0 ){
            // console.log("---")
            $(".Span1").eq(0).addClass("wrong").removeClass("right")
        }else{
            if(imageCodeVal != val){
                // console.log("333")
            $(".Span1").eq(0).addClass("wrong").removeClass("right")
        }
            else{
            $(".Span1").eq(0).addClass("right").removeClass("wrong");
            passwordVal = val;
            }
        }
    })
    


    // num = 999;
    iphoneInput.blur(function(){
        let val = $(this).val().trim();
        if(val.length ==0 ){
            // console.log("---")
            $(".Span2").eq(0).addClass("wrong").removeClass("right")
            $(".Span3").eq(0).removeClass("wrong").addClass("right")
        }else{
            if(!phoneReg.test(val)){
                // console.log("333")
            $(".Span3").eq(0).addClass("wrong").removeClass("right")
            $(".Span2").eq(0).removeClass("wrong").addClass("right");
        }
            else{
            $(".Span2").eq(0).addClass("right").removeClass("wrong");
            $(".Span3").eq(0).addClass("right").removeClass("wrong");
            }
        }
    })


    passwordAInput.blur(function(){
        let val = $(this).val().trim();
        if(val.length ==0 ){
            // console.log("---")
            $(".Span5").eq(0).addClass("wrong").removeClass("right")
            $(".Span6").eq(0).removeClass("wrong").addClass("right")
        }else{
            if(!passwordReg.test(val)){
                // console.log("333")
            $(".Span6").eq(0).addClass("wrong").removeClass("right")
            $(".Span5").eq(0).removeClass("wrong").addClass("right");
        }
            else{
            $(".Span5").eq(0).addClass("right").removeClass("wrong");
            $(".Span6").eq(0).addClass("right").removeClass("wrong");
            passwordVal = val;
            }
        }
    })

    passwordBInput.blur(function(){
        let val = $(this).val().trim();
        if(val.length == 0 ){
            // console.log("---")
            $(".Span7").eq(0).addClass("wrong").removeClass("right")
        }else{
            if(passwordVal != val){
                // console.log("333")
            $(".Span7").eq(0).addClass("wrong").removeClass("right")
        }
            else{
            $(".Span7").eq(0).addClass("right").removeClass("wrong");
            }
        }
    })


    let btn = $("#registerBtn");
    btn.click(function(e){
        // console.log("+++")
        e.preventDefault()
        let isChecked = $("#protocol").is(":checked");


        let usernameX = iphoneInput.val().trim();
        let passwordX = passwordAInput.val().trim();
        let password1 =passwordAInput.val().trim()
        let password2 =passwordBInput.val().trim()

        let isSuccess = $(".wrong").length == 0 && usernameX && passwordX && password1 && password2;
        if(!isChecked){
            alert("请阅读并同意用户协议");
            return;
        }else{
            if(!isSuccess){
                alert("请完善信息");
                return;
            }else{
                $.ajax({
                    type: "post",
                    url: "./api/register.php",
                    data: `phonenumber=${usernameX}&password=${passwordX}`,
                    dataType: "json",
                    success: function (response) {
                        if(response.status == "success"){
                            alert(response.data.msg);
                            // console.log("ssssssssssss")
                        }else{
                            alert(response.data.msg);
                        }
                    }
                });
            }
        }

    })

    $(function(){
        $("#dl-now").click(function(){
         window.location.replace("http://127.0.0.1/code/xiangmu/pc-dl/dl.html")
     });
     $("#shouye").click(function(){
        window.location.replace("http://127.0.0.1/code/xiangmu/pc/1.html")
    })
     })
     
})