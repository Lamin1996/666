function a(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('a')
            resolve()
        },1000)
    })
}
function b(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('b')
            resolve()
        },2000)
    })
}
function c(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('c')
            resolve()
        },500)
    })
}
// 1秒后打印出a,再过两秒打印出b,再过0.5s打印出c
a().then(b).then(c)