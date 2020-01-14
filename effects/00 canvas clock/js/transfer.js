
/**
 * 自用转换 字符串为数组
 * @param {String} str 
 */
function trans (str) {
	return str.split(' ').map(s => s.split('').map(v => parseInt(v)))
}