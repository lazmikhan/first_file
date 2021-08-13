const prod =[
    {name : "elli bran" , age:13 },
    {name:"kelly stw" , age:22},
    {name:" eva bran" , age:56}
]
function prduct(pro , search)
{
    var mar=[];
    for(const proo of pro)
    {
        if(proo.name.indexOf(search)!=-1)
        {
           
            mar.push(proo.name);
        }
      
           }
           return mar;
}

var namee ;
var tct ="bran";
namee = prduct(prod, tct)
console.log(namee);
var tc ="stw";
namee = prduct(prod, tc)

