module.exports = function check(str, bracketsConfig) {
	if (str.length % 2 !== 0) {
		return false
	}
  
	let result
	let str1 = str
	let str2 = str
	let bracketsConfig1 = bracketsConfig.map(el => el.join(''))

	function changeStr1() {
		for (let i = 0; i < bracketsConfig1.length; i++) {
			str1 = str1.replace(`${bracketsConfig1[i]}`, '')
		}
		
		if (str1.length === str2.length) {
			
				if (str1.length === 0) {
					result = true
					return
				} else {
					result = false
					return
				}

		} else {
				str2 = str1
				changeStr1()
			}
  }

	changeStr1()

  return result
}
