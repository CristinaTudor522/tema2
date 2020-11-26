function addTokens(input, tokens){
    //daca input  nu este de tip string 
    if (typeof input !== 'string')
{
    //afisez un mesaj sugestiv
    throw Error('Invalid input')
    
}
// daca input nu are lungimea corespunzatoare
else if(input.length<6)
{
    //afisez un mesaj sugestiv
    throw Error('Input should have at least 6 characters')
}
//pt vector 
for(var i =0;i<tokens.length;i++)
{
    // daca  nu se verifica formatul 
    if(typeof((tokens[i].tokenName))!=='string')
    //afisez un mesaj sugestiv
    throw Error('Invalid array format')
}

//in cazul in care input nu contine ...
 if(input.includes('...')!=true){
return input;}

    //daca input contine ...
    for(let i=0;i<tokens.length;i++){
        let a=tokens[i]["tokenName"]
        let b="${"+a+"}"
        let c="..."
        let position=input.indexOf('...')
        if(position!==-1){
            input=input.replace(c,b)
        }
    }
    return input
}

const app = {
    addTokens: addTokens
}

module.exports = app;