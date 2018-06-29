export default function (date, fmt) {
    if (/^[0-9]+$/.test(date) && date.toString().length != 13) {
        let s0 = '0000000000000'
        date = date.toString() + s0.substr(0, 13 - date.toString().length)
    }
    let t = new Date(parseInt(date, 10))
    var o = {
        "M+": t.getMonth() + 1, // 月份 
        "D+": t.getDate(), // 日 
        "h+": t.getHours(), // 小时 
        "m+": t.getMinutes(), // 分 
        "s+": t.getSeconds(), // 秒 
        "q+": Math.floor((t.getMonth() + 3) / 3), // 季度 
        "S": t.getMilliseconds() // 毫秒 
    };
    if (/(Y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}