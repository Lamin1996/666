


// let to  = function(a,b){
//     a.addClass("changeColor").siblings().removeClass("changeColor")
//     var abc;
//     $.ajax({
//         type: "get",
//         url: b,
//         dataType: "json",
//         success: function(response) {
//             let data = response.data;
//             let html = data.map((ele) => {
//                 abc = `<div><img src="${data[0].src}" alt=""></div>`
//                 return `
//                     <li class="item">      
//                         <img src=${ele.src}>
//                     </li>
//                     `
//             }).join("");
//             $(".c-l-ul").html(html);
//             $(".c-r-div1").html(abc);
//             $(".fangda").html(abc);
//             $(".c-l-ul").css("top","0"+"px");
//             $(".c-l-ul li:nth-of-type(1)").addClass("changeColor");
//         },
//         error: function() {
//             console.log("++");
//         }
//     }).then(function(){
//         $("#up").click(function(){
//         $(".c-l-ul").css("top","0"+"px")
//         $(this).css("color","black")
//         $("#down").css("color","red")
//     })
//     $("#down").click(function(){
//         $(".c-l-ul").css("top",-"400"+"px")
//         $(this).css("color","black")
//         $("#up").css("color","red")
//     })
//     $(".c-l-ul>li").mouseenter(function(){
//         $(this).addClass("changeColor").siblings().removeClass("changeColor")
//         var index;
//         index = $(this).index();
//         $.ajax({
//             type: "get",
//             url: b,
//             dataType: "json",
//             success: function(response) {
//                 let data = response.data;
//                 let html = `<div><img src="${data[index].src}" alt=""><div></div></div>` 
//                 $(".c-r-div1").html(html);
//                 $(".fangda").html(html);
//             },
//             error: function() {
//                 console.log("++");
//             }
//         });
//     })
//     });
// }
// $(function(){
//   let white_a = "./php/getProductData.php";
//   let blue_a = "./php/getProductData(2).php";
//   to($("#white"),white_a)
//     $("#white").click(function(){
//         to($("#white"),white_a)
//     })
//     $("#blue").click(function(){
//         to($("#blue"),blue_a)
//     })
// })


// 放大镜

$(function(){
    $(".c-r").mouseenter(function(){
        $(".move").css("display","block")
        $(".fangda").css("display","block")
    })
    $(".c-r").mousemove(function(e){
        let x1 = document.getElementsByClassName("c-r")[0];
        let x2 = document.getElementsByClassName("move")[0];
        let x = e.pageX - x1.offsetLeft - x2.offsetWidth/2 ;
        let y = e.pageY - x1.offsetTop - x2.offsetHeight/2 ;
        let maxX = x1.offsetWidth - x2.offsetWidth;
        let maxY = x1.offsetHeight - x2.offsetHeight;
        if(x<=0){
            x=0;
        }
        if(y<=0){
            y=0;
        }
        if(x>=maxX){
            x=maxX;
        }
        if(y>=maxY){
            y=maxY;
        }
        $(".move").css("left",x+"px");
        $(".move").css("top",y+"px");


        let maxBox = document.querySelector(".fangda")
        let maxImg = document.querySelector(".fangda img")
        let maxImgX = maxImg.offsetWidth - maxBox.offsetWidth;
        let maxImgY = maxImg.offsetHeight - maxBox.offsetHeight;

        let biliX = maxImgX / maxX;
        let biliY = maxImgY / maxY;

        $(".fangda img").css("left", -(x*biliX)+"px");
        $(".fangda img").css("top", -(y*biliY)+"px");
    })
    $(".c-r").mouseleave(function(){
        $(".move").css("display","none")
        $(".fangda").css("display","none")
    })

})

$(function(){
    $(".size>ul>li").mouseenter(function(){
        $(this).addClass("changeColor2").siblings().removeClass("changeColor2");
    });
    $(".size>ul>li").click(function(){
        $(this).addClass("changeColor3").siblings().removeClass("changeColor3");
    })
})


$(function(){
    $("#dl").click(function(){
    window.location.replace("http://127.0.0.1/code/xiangmu/pc-dl/dl.html")
});
$("#zc").click(function(){
    window.location.replace("http://127.0.0.1/code/xiangmu/pc-zc/zc.html")
});
$("#liebiao").click(function(e){
    e.preventDefault();
    window.location.replace("http://127.0.0.1/code/xiangmu/shangpinliebiao/liebiao.html")
});
let http = window.location.href;
console.log(http);
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
let httpX= getQueryVariable("id")
console.log(httpX)
$.ajax({
    type: "get",
    url: "http://127.0.0.1/code/xiangmu/xiangqing/php/getProductData(3).php",
    dataType: "json",
    success: function(response) {
        let data = response.data;
        console.log(data)
        let html = `<img src="${data[httpX-1].src}" alt="">`;
        let priceA = `<em>￥${data[httpX-1].price}</em>`
        let name = `<span>${data[httpX-1].title}</span>`
        $(".c-r-div1").html(html);
        $(".fangda").html(html);
        $(".priceX-span").html(priceA);
        $(".goodname").html(name);
    },
    error: function() {
        console.log("++");
    }
});
$(".car button").click(function(){
    window.location.replace("http://127.0.0.1/code/xiangmu/shop/shop.html");
})
})