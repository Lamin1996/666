class BannerManager {
    constructor(data, root = document.body) {
        this.data = data;
        this.sliderBox = null;
        this.sliderNav = null;
        this.slider = null;
        this.root = root;
    }
    init() {
        this.index = 0;
        this.sliderBoxStyleLeft = 0;
        this.sliderBoxItemWidth = 1200;

        this.createHTML()
        this.root.appendChild(this.slider);

        this.sliderBoxItemCount = this.data.length;
        this.addEventHandle();
        this.switchSlider(0);
        this.autoPlayer();
        this.addMouseHandle();
        this.addMouseHandleWithItem();
        let lbt = document.getElementsByClassName("lbt-div")[0];
        lbt.appendChild(this.slider);

    }
    createHTML() {
        let sliderBox = document.createElement("ul");
        sliderBox.className = "slider-box";
        let html = this.data.map((ele) => {
            return `<li class="slider-box-item"><img src=${ele}></li>`
        }).join("");
        sliderBox.innerHTML = html;

        let sliderControl = document.createElement("div");
        sliderControl.className = "slider-control";
        sliderControl.innerHTML = `
     <span class="prev"><img src="../img/lr.png" alt="" class="s_prev"></span>
     <span class="next"><img src="../img/lr.png" alt="" class="s_next"></span>
`
        let sliderNav = document.createElement("ol");
        sliderNav.className = "slider-nav";
        let html2 = this.data.map((ele, index) => {
            return `<li class="slider-nav-item"></li>`
        }).join("");
        sliderNav.innerHTML = html2;


        let slider = document.createElement("div");
        slider.className = "slider"
        slider.appendChild(sliderBox)
        slider.appendChild(sliderControl)
        slider.appendChild(sliderNav)


        this.slider = slider;
        this.sliderBox = sliderBox;
        this.sliderNav = sliderNav;
        this.sliderControl = sliderControl;
    }
    autoPlayer() {
        this.timer = setInterval(() => {
            this.next();
        }, 2000)
    }
    next() {
        this.index++;
        if (this.index > (this.sliderBoxItemCount - 1)) {
            this.index = 0;
        }
        this.sliderBox.style.left = -this.index * this.sliderBoxItemWidth + "px";
        this.switchSlider(this.index);
    }
    prev() {
        this.index--;
        if (this.index < 0) {
            this.index = this.sliderBoxItemCount - 1;
        }
        this.sliderBox.style.left = -this.index * this.sliderBoxItemWidth + "px";
        this.switchSlider(this.index);
    }
    addEventHandle() {
        this.sliderControl.onclick = (e) => {
            if (e.target.className == "s_prev") {
                this.prev();
            } else if (e.target.className == "s_next") {
                this.next();
            }
        }
    }
    switchSlider(index) {
        Array.from(this.sliderNav.children).forEach((ele) => {
            ele.className = "slider-nav-item"
        })
        this.sliderNav.children[index].className = "slider-nav-item active";
    }
    addMouseHandle() {
        this.slider.onmouseenter = () => {
            clearInterval(this.timer)
        }
        this.slider.onmouseleave = () => {
            this.autoPlayer();
        }
    }
    addMouseHandleWithItem() {
        Array.from(this.sliderNav.children).forEach((ele, index) => {
            ele.onclick = () => {
                this.index = index;
                this.sliderBox.style.left = -this.index * this.sliderBoxItemWidth +
                    "px";
                this.switchSlider(this.index);
            }
        })
    }
}

let data_l = [
    "http://127.0.0.1/code/xiangmu/img/1.jpg",
    "http://127.0.0.1/code/xiangmu/img/2.jpg",
    "http://127.0.0.1/code/xiangmu/img/3.jpg",
    "http://127.0.0.1/code/xiangmu/img/4.jpg",
    "http://127.0.0.1/code/xiangmu/img/5.jpg",
    "http://127.0.0.1/code/xiangmu/img/6.jpg",
    "http://127.0.0.1/code/xiangmu/img/7.jpg"
]

var banner = new BannerManager(data_l);
banner.init();


let T = Date.parse("2019-10-10 20:00:20");
function C(){
    let N = Date.now();
    let CH = T - N;
    let CH1 = new Date(CH)
    let M1 =CH1.getHours();
    let M2 =CH1.getMinutes();
    let M3 =CH1.getSeconds()
    if(M1 == 0 && M2==0 && M3==0){
        setTimeout(C);
    }
    let Mall = `<em>${M1}</em><span>:</span><em>${M2}</em><span style="left:1107px;">:</span><em>${M3}</em>`
    return Mall;
}
let oSpan = document.getElementsByClassName("m-d-span")[0];
setInterval(function(){
    oSpan.innerHTML = C();
},1000);






let be= function(a,b) {
    $.ajax({
        type: "get",
        url: a,
        dataType: "json",
        success: function(response) {
            let data = response.data;
            console.log(data)
            let html = data.map((ele) => {
                console.log(ele.src);
                if(ele.src&&ele.name&&ele.priceA&&ele.priceB&&ele.priceC){
                    return `
                    <li><a href=""><img src="${ele.src}" alt="">
                    <div>
                        <span>${ele.name}</span>
                    </div>
                    <div>
                        <span><em>￥${ele.priceA}</em></span>
                        <span><em>￥${ele.priceB}</em></span>
                        <span>充值后<em>${ele.priceC}</em>元</span>
                    </div>
                    </a>
                    </li>
                        `
                }else if(ele.src&&ele.text1&&ele.text2){
                    return `<li>
                        <div><img src="${ele.src}" alt=""></div>
                        <h3>${ele.text1}<span>${ele.text2}</span></h3>
                    </li>`
                }else if(ele.src){
                    return `<li><img src="${ele.src}" alt=""></li>`                    
                }
            }).join("");
            $(b).html(html);
        },
        error: function() {
            console.log("++");
        }
    });
}
var a1 = "http://127.0.0.1/code/xiangmu/pc/php/getProductData.php"
var a1_1 = document.getElementsByClassName("buy1-ul")[0];
var a2 = "http://127.0.0.1/code/xiangmu/pc/php/getProductData(2)%20.php"
var a2_1 = document.getElementsByClassName("buy2-ul")[0];
var a3 = "http://127.0.0.1/code/xiangmu/pc/php/getProductData(3).php"
var a3_1 = document.getElementsByClassName("buy3-ul")[0];
var a4 = "http://127.0.0.1/code/xiangmu/pc/php/getProductData(4).php"
var a4_1 = document.getElementsByClassName("buy4-ul")[0];
var a5 = "http://127.0.0.1/code/xiangmu/pc/php/getProductData(5).php"
var a5_1 = document.getElementsByClassName("buy5-ul")[0];
var a6 = "http://127.0.0.1/code/xiangmu/pc/php/getProductData(6).php"
var a6_1 = document.getElementsByClassName("buy6-ul")[0];





be(a1,a1_1)
be(a2,a2_1)
be(a3,a3_1)
be(a4,a4_1)
be(a5,a5_1)
be(a6,a6_1)



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
$(".car button").click(function(){
    window.location.replace("http://127.0.0.1/code/xiangmu/shop/shop.html");
})
})
