/**
 * 通用工具方法类
 */

/**
 * 获取随机整数 [min, max]
 * @param min
 * @param max
 * @returns {Number}
 */
export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * 字符串去空格
 * @param str
 * @returns {*}
 */
export function trim(str) {
  if (typeof (str) === 'string') {
    str = str.replace(/\s+/g, '')
  }
  return str
}

/**
 * 判断对象、数组、字符串是否为空
 * @param {undefined|Object|Array|String|null} value
 * @returns {Boolean}
 */
export function isEmpty(value) {
  return (typeof (value) === 'undefined' ||
    value === null ||
    trim(value) === '' ||
    value.length === 0 ||
    Object.keys(value).length === 0)
}

/**
 * 判断手机号是否正确，以1开头，第二位3-9，最后以0-9结尾
 * @param {String} str
 * @returns {Boolean}
 */
export function isPhone(str) {
  let reg = /^1[23456789][0-9]{9}$/
  if (!reg.test(str)) {
    return false
  } else {
    return true
  }
}

/**
 * 判断邮箱是否正确，第一部分+@+第二部分
 * 第一部分 ： 由字母、数字、下划线、短线 - 、点号 . 组成
 * 第二部分： 域名，域名由字母、数字、短线 - 域名后缀组成
 * @param {String} str
 * @returns {Boolean}
 */
export function isEmail(str) {
  let reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
  if (!reg.test(str)) {
    return false
  } else {
    return true
  }
}
