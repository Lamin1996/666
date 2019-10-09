function a(){
    console.log('a')
}

function b(callback){
    setTimeout(()=>{
        console.log('b')
        // 1秒后打印出b
        callback()
        // 打出a
        setTimeout(()=>{
            // 第二秒打出c
            console.log('c')
            setTimeout(()=>{
            // 第三秒打出d
                console.log('d')
            },1000)
        },1000)
    },1000)
}

// 函数a被回调
b(a)
