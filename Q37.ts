let defaultSize: string = "large";
let defaultMessage:string = "I Love Typescript";

const make_shirt = (size:string, message:string) =>
{
    if(size!== null)
    {
    if(size === "large" || size === "medium")
    {
        console.log(`The ${size} size shirt, with message: "${defaultMessage}"`);
    } 
    else{
        console.log(`The ${size} size shirt, with message: "${defaultMessage}"`);
    }
}

else{
    console.log(`The ${defaultSize} size shirt, with message: "${defaultMessage}"`);
}  
}

make_shirt("large","Believe There Is Good Something.");