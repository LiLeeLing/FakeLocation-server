const chalk = require('chalk');
// const fs = require('fs'); // 注释掉
// const path = require("path"); // 注释掉

Date.prototype.format = function(fmt) { 
    let o = { 
       "M+" : this.getMonth()+1,                 
       "d+" : this.getDate(),                    
       "h+" : this.getHours(),                   
       "m+" : this.getMinutes(),                 
       "s+" : this.getSeconds(),                 
       "q+" : Math.floor((this.getMonth()+3)/3), 
       "S"  : this.getMilliseconds()             
   }; 
   if(/(y+)/.test(fmt)) {
           fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
   }
    for(let k in o) {
       if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
   return fmt; 
}

// const LogFileName = new Date().format("yyyy-MM-dd") + ".txt"; // 注释掉

/*  // 整块注释掉
if(!fs.existsSync("Logs")){
    fs.mkdirSync("Logs");
}
*/

function LogError(str){
    console.log(chalk.redBright("[" + new Date().format("yyyy-MM-dd hh:mm:ss") + "][Error] ") + str);
    // fs.appendFileSync(path.join(__dirname,"./Logs/" + LogFileName), "[" + new Date().format("yyyy-MM-dd hh:mm:ss") + "][Error] " + str + "\n"); // 注释掉
}

function LogInfo(str){
    console.log(chalk.green("[" + new Date().format("yyyy-MM-dd hh:mm:ss") + "][Info] ") + str);
    // fs.appendFileSync(path.join(__dirname,"./Logs/" + LogFileName), "[" + new Date().format("yyyy-MM-dd hh:mm:ss") + "][Info] " + str + "\n"); // 注释掉
}

function LogWarn(str){
    console.log(chalk.yellow("[" + new Date().format("yyyy-MM-dd hh:mm:ss") + "][Warn] ") + str);
    // fs.appendFileSync(path.join(__dirname,"./Logs/" + LogFileName), "[" + new Date().format("yyyy-MM-dd hh:mm:ss") + "][Warn] " + str + "\n"); // 注释掉
}

module.exports = { LogInfo,LogWarn,LogError };
