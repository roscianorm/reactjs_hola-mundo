const chanchosFelices = ['chancho 1', 'chancho 2', 'chancho 3']
const chanchosTristes = ['tristes 1', 'tristes 2']
const otrosChanchos = ['otrosChanchos 1']
// export const chanchosTristes = ['tristes 1', 'tristes 2']
// export const otrosChanchos = ['otrosChanchos 1']

function fn1() {
	return 'fat function fn1'
}

const fn2 = () => 'fat arrow function fn2'

// module.exports = chanchosFelices
// module.exports = {
// 	chanchosFelices,
// 	chanchosTristes,
// }
export default chanchosFelices
export { chanchosTristes, otrosChanchos, fn1, fn2 }
