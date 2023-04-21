/**
 * 过滤对象中的某个属性
 * 
 * @param {Object} value 目标对象
 * @param {Array} args 过滤的属性
 * @return {Object} 
 */
export const omit = (value, args) => {
  const shallowCopy = Object.assign({}, value)
  for (let key of args) {
    if (key in shallowCopy) {
      delete shallowCopy[key]
    }
  }
  return shallowCopy
}