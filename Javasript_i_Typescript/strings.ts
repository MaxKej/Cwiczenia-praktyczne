function getStrings(...parameters: string[]): void {

    let output : string = "";
    
    parameters.forEach(parameter => {
        output += parameter + ","
    });

    console.log(output);

}

getStrings("hello", "world", "!");