const fs = require('fs')
//引入模块
function readFile(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./index.js',(err,data)=>{
            //读取文件
            if(err)throw err;
            let code = data.toString();
            //转化为字符串
            let output = code
                .replace(/console.log\([a-z0-9'""]+\)/g,'')
                //删除index.js里面所有console.log()
                .replace(/const/g,'var')
                //把所有const转化为var
                console.log(output)
                //把output的值传给下个Promise
                resolve(output)
        })
    })
}


function writeFile(output){
    
    return new Promise((resolve,reject)=>{
        //把output的值写入output.js
        fs.writeFile('./output.js',output,(err)=>{
            if(err) throw err;
            console.log('写入成功')
        })
    })
}

;(async ()=>{
    //先执行readFile()
    let output = await readFile()
    //再执行writeFile()
    await writeFile(output)
})();