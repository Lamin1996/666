
$(function() {
    let data;
    console.log("111");
    let currentType = 0;
    new Promise(function(resolve, reject) {
        console.log("222")
        $.ajax({
            type: "get",
            url: "./php/getPageCount.php",
            dataType: "json",
            success: function(response) {
                console.log(response);
                let pageCount = response.data;
                for (let i = 0; i < pageCount; i++) {
                    let oPage = $(`<a href="javascript:;">${i+1}</a>`);
                    $("#page").append(oPage);
                }
                $("#page").children("a").first().addClass("active");
                resolve();
            }
        });
    }).then(function() {
        console.log("ttt")
        getDatWithPage(currentType,0);
    })
    $("#page").on("click", "a", function(e) {
        e.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");
        let index = $(this).index();
        getDatWithPage(currentType,index);
    })

    let getDatWithPage = (type,page) => {
        console.log(type,page)
        $.ajax({
            type: "get",
            url: "./php/getProductData.php",
            data: `type=${type}&page=${page}`,
            dataType: "json",
            success: function(response) {
                itemData = response;
                console.log(itemData[0])
                data = response.data;
                console.log(data[0].price)
                console.log(data[0].goodid)
                let html = data.map((ele) => {
                    // console.log(ele)
                    return `
                    <li class="item" titlenum="${ele.id}"><button>
                    <div class="b-color"><img src=${ele.src}></div>
                    <p class="price">${ele.title}</p>
                    <div class="title"><span>售价￥${ele.price}</span></div></button>
                    <span class="add">加入购物车</span>
                    </li>
          `
                }).join("");
                $(".center-ul").html(html);
                $(".center-ul button").click(function(){
                    let titlenum = $(this).parent().attr("titlenum")
                        console.log(titlenum);
                        window.location.href = "http://127.0.0.1/code/xiangmu/xiangqing/xiangqing(2).html?id="+titlenum;
                        
                })
            },
            error: function() {
                console.log("++");
            }
        });
    }
    $(".typeBtn").click(function() {
        console.log("rrrrrr")
        let index = $(this).index();
        currentType = index;
        getDatWithPage(currentType, 0);
        $("#page").children("a").first().addClass("active").siblings().removeClass("active");
    });
    $(".center-ul").on("click",".add",function(){
        // console.log($(".add"))
        var index = $(this).parent().index();
        console.log(index)
        var goodid = data[index].goodid;
        var price = data[index].price;
        $.ajax({
            type: "get",
            url: "./php/addCart.php",
            data: `goodid=${goodid}&price=${price}`,
            dataType: "json",
            success: function(response) {
                console.log(response);
                var text = response["totalRow"];
                $("#catShow").html(text)
            }
        });
    })
});
$(function(){
    $("#dl").click(function(){
    window.location.replace("http://127.0.0.1/code/xiangmu/pc-dl/dl.html")
});
$("#zc").click(function(){
    window.location.replace("http://127.0.0.1/code/xiangmu/pc-zc/zc.html")
});
$(".head-bottom img").click(function(e){
    e.preventDefault();
    window.location.replace("http://127.0.0.1/code/xiangmu/pc/1.html")
})
$(".car button").click(function(){
    window.location.replace("http://127.0.0.1/code/xiangmu/shop/shop.html");
})
})