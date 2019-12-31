
/**
 * 根据key返回数组中的对象
 * @param {array} array 
 * @param {string} key 
 * @param {string} keyAlias 
 */
export function getTimestamp(){
    let date=new Date();
    let timestamp=date.getTime();
    return timestamp;
}