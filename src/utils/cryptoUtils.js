var CryptoJs = require('crypto-js');

/*
* message : string  加密内容
* public_key: string 随机盐值
* primary_key: string 私钥
* vectory: string 矢量
* */
function encryption(message, public_key, primary_key, vectory) {
  var strs = [];
  for (var i in message) {
    strs.push(i+'='+message[i]);
  }
  //数组排序
  strs.sort();
  //数组变字符串
  strs = strs.join("&");
  //MD5加密
  var endDate = strs + '&sign=' + CryptoJs.MD5(strs + public_key).toString();
  //加密私钥
  var key = CryptoJs.enc.Utf8.parse(primary_key);
  //加密矢量
  var iv = CryptoJs.enc.Utf8.parse(vectory);
  //AES加密
  var encryptResult = CryptoJs.AES.encrypt(endDate, key, {
    iv: iv,
    mode: CryptoJs.mode.CBC,
    padding: CryptoJs.pad.Pkcs7
  })
  //base64加密再encode
  return encodeURIComponent(CryptoJs.enc.Base64.stringify(encryptResult.ciphertext))
}
export default {
  encryption: encryption
}
