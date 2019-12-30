
/**
 * 根据key返回数组中的对象
 * @param {array} array 
 * @param {string} key 
 * @param {string} keyAlias 
 */
export function query(array,key,keyAlias = 'key'){
    if(!(array instanceof Array)){
        return null;
    }
    const item=array.filter(_=>_[keyAlias]===key);
    if(item.length){
        return item[0];
    }
    return null;
}