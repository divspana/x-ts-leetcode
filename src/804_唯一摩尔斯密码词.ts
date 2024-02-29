// https://leetcode.cn/problems/unique-morse-code-words/description/

/**
 *
 * 代码
 * 测试用例
 * 测试结果
 * 测试结果
 * 804. 唯一摩尔斯密码词
 * 已解答
 * 简单
 * 相关标签
 * 相关企业
 * 国际摩尔斯密码定义一种标准编码方式，将每个字母对应于一个由一系列点和短线组成的字符串， 比如:
 *
 * 'a' 对应 ".-" ，
 * 'b' 对应 "-..." ，
 * 'c' 对应 "-.-." ，以此类推。
 * 为了方便，所有 26 个英文字母的摩尔斯密码表如下：
 *
 * [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
 * 给你一个字符串数组 words ，每个单词可以写成每个字母对应摩尔斯密码的组合。
 *
 * 例如，"cab" 可以写成 "-.-..--..." ，(即 "-.-." + ".-" + "-..." 字符串的结合)。我们将这样一个连接过程称作 单词翻译 。
 * 对 words 中所有单词进行单词翻译，返回不同 单词翻译 的数量。
 */


/**
 * 考点就是集合吧
 * @param words
 */
function uniqueMorseRepresentations(words: string[]){
    const codes=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    const set =new Set()
    for (const word of words) {
        const arr=[]
        for (let i = 0; i < word.length; i++) {
            const char=word[i]
            const index=char.charCodeAt(0)-97
            arr.push(codes[index])
        }
        set.add(arr.join(''))
    }
    return set.size
}


export function test(){
    const words=['agc','min','wc']
    console.log(uniqueMorseRepresentations(words));
}
