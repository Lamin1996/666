$(function () {
    var targetData;
    var allX;
        $.ajax({
            type: "get",
            url: "http://127.0.0.1/code/xiangmu/shop/php/getCatData.php",
            dataType: "json",
            success: function (response) {
                console.log(response[0])
                targetData = response;
                let html = targetData.map((ele) => {
                    return `
    <li>
        <div>
            <input type="checkbox" style="margin-left: 60px; type="checkbox" ${ele.isActive==1 ? "checked" : "" }">
            <span style="margin-left: 130px;"><img src="${ele.src}" alt=""></span>
            <span style="margin-left: 0px;width: 280px;">${ele.title}</span>
            <span style="margin-left: 0px;width: 50px;text-align: center"></span>
            <span style="margin-left: 30px;">￥<em>${ele.price}</em></span>
            <span style="margin-left: 50px;">
                <button class="jian">-</button>
                <input class="num" type="text" value=${ele.num}>
                <button class="jia">+</button>
            </span>
            <span style="margin-left: 60px;">--</span>
            <span class="payX" style="margin-left: 60px;">￥<em>${ele.total}</em></span>
            <button style="margin-left: 60px;" class="dele">删除</button>
        </div>
    </li>
    `
                }).join("");
                $(".car-ul").html(html);
                $(".dele").click(function(){
                    $(this).parent().parent().remove()
                })
                $(".deleall").click(function(){
                    $(".car-ul").remove()
                })
            }
        });

        function computedTotalPrice() {
            var res = 0;
            targetData.forEach(element => {
                if (element.isActive == 1) {
                    res += element.total * 1;
                }
            });
            $(".last").html("总计：￥" + res);
        }
        function computedTotalPriceX() {
            var res1 = 0;
            targetData.forEach(element => {
                if (element.num == 1) {
                    res1 += element.num * 1;
                }
            });
            $(".last1").html(res1+1);
        }
        $(".allchose").click(function(){
            if($(".allchose").is(':checked')){
                $(".car-ul li input").attr('checked', true);
                $(".allchose2").attr('checked', true);
                computedTotalPriceX()
                computedTotalPrice()
                $(".last").css("display","block")
            }
            $.ajax({
                type: "get",
                url: "../server/addCart.php",
                data: `goodid=${goodid}&price=${price}`,
                dataType: "json",
                success: function(response) {
                    var text = response["totalRow"];
                    $("#catShow").html(text)
                }
            });
        });
        $(".allchose").click(function(){
            if(!$(".allchose").is(':checked')){
                $(".car-ul li input").attr('checked', false);
                $(".allchose2").attr('checked', false);
                $(".last").css("display","none")
            }
        })
        $(".allchose2").click(function(){
            if($(".allchose2").is(':checked')){
                $(".car-ul li input").attr('checked', true)
                $(".allchose").attr('checked', true);
                computedTotalPriceX()
                computedTotalPrice()
                $(".last").css("display","block")
            }
        })
        $(".allchose2").click(function(){
            if(!$(".allchose2").is(':checked')){
                $(".car-ul li input").attr('checked', false)
                $(".allchose").attr('checked', false);
                $(".last").css("display","none")
            }
        });
        $(".car button").click(function(){
            window.location.replace("http://127.0.0.1/code/xiangmu/shop/shop.html");
        })
        $("#shouye").click(function(e){
            e.stopPropagation()
            window.location.replace("http://127.0.0.1/code/xiangmu/pc/1.html");
        })
});