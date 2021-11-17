export function calculate(num1,num2,index) {
    let percent_CALC = num1 / 100
    const combination = `{
        "symbols" : [
            {
                "name" : [${num1 - num2}]
            },
            {
                "name" : [${num1 + num2}]
            },
            {
                "name" : [${num1 * num2}]
            },
            {
                "name" : [${num1 / num2}]
            },
            {
                "name" : [${percent_CALC * num2}]
            }
        ]
    }`
    let comb = JSON.parse(combination)
    return comb.symbols[index].name[0]
}