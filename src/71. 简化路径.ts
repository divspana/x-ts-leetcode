// https://leetcode.cn/problems/simplify-path/description/

function simplifyPath(path: string): string {
    const stack:string[]=[]
  const arr=path.split('/')
    for(const char of arr){
        if(char&&char==='..'){
            stack.pop()
        }else if(char&&char!=='.') {
            stack.push(char)
        }

    }
    return stack.length?'/'+stack.join('/'):'/'

};


export function test(){
    console.log(simplifyPath("/a/./b/../../c/"));
}


