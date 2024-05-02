function getStrings() {
    var parameters = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parameters[_i] = arguments[_i];
    }
    var output = "";
    parameters.forEach(function (parameter) {
        output += parameter + ",";
    });
    console.log(output);
}
getStrings("hello", "world", "!");
