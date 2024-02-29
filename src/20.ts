// https://leetcode.cn/problems/valid-parentheses/description/
/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 每个右括号都有一个对应的相同类型的左括号。
 *
 *
 * 示例 1：
 *
 * 输入：s = "()"
 * 输出：true
 * 示例 2：
 *
 * 输入：s = "()[]{}"
 * 输出：true
 * 示例 3：
 *
 * 输入：s = "(]"
 * 输出：false
 */



 function solution(str:string,){
    const stack:string[]=[]
    for (let i = 0; i < str.length; i++) {
        const char=str[i]
        if(['[','{',"("].includes(char)){
            stack.push(char)
        }else{
            const top=stack.pop()
            if(top==='('&&char!==')'){
                return false
            }
            if(top==='{'&&char!=='}'){
                return false
            }
            if(top==='['&&char!==']'){
                return false
            }
        }

    }
    return stack.length===0
}




export  function test(){
    const str='{[()]}'
    const ret=solution(str)
    console.log(ret)
}
