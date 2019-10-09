function a (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('a')
            //1秒后导出resolve()
            resolve()
        },1000)
    })
}
function b (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('b')
            //两秒后导出resolve()
            resolve()
        },2000)
    })
}

function c(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('c')
            //0.5秒后导出resolve()
            resolve()
        },500)
    })
}
console.log(0);
;;;(async ()=>{
    //按顺序完成各个函数
    await a();
    await b();
    await c();
})();
console.log(1)