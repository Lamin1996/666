$(function(){
    $(".center-ul li").click(function(){
        console.log()
    let index = $(this).index()
    let srcx = document.getElementsByClassName("item")[index].querySelectorAll("img")[0].src;
        console.log(srcx);
        window.open('http://127.0.0.1/code/xiangmu/xiangqing/xiangqing.html')
})
})
