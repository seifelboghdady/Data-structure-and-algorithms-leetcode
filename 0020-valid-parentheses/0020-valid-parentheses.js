
var isValid = function(s) {
    let stack = [];
    let pairs = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    
    for(let i of s){
        if(i === '('  || i === '{' || i === '[' ){
            stack.push(i);
        }
        else if(stack.length > 0 ){
            if(i === pairs[stack[stack.length -1]]){
                stack.pop();
            }
            else{
                return false;
            }
        }else{
            return false;
        }

    }
    return stack.length === 0;
};