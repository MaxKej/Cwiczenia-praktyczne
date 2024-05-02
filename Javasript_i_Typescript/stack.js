var Stack = /** @class */ (function () {
    function Stack() {
        this.elements = [];
    }
    // Metoda dodająca element na wierzch stosu
    Stack.prototype.push = function (element) {
        this.elements.push(element);
    };
    // Metoda usuwająca i zwracająca element z wierzchu stosu
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new Error("Stos jest pusty");
        }
        return this.elements.pop();
    };
    // Metoda zwracająca element z wierzchu stosu bez usuwania go
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            throw new Error("Stos jest pusty");
        }
        return this.elements[this.elements.length - 1];
    };
    // Metoda sprawdzająca czy stos jest pusty
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    // Metoda zwracająca ilość elementów na stosie
    Stack.prototype.size = function () {
        return this.elements.length;
    };
    // Metoda czyszcząca stos
    Stack.prototype.clear = function () {
        this.elements = [];
    };
    return Stack;
}());
var stos = new Stack();
stos.push(1);
stos.push("dwa");
stos.push(3);
console.log("Wierzch stosu:", stos.peek());
console.log("Rozmiar stosu:", stos.size());
console.log("Usunięto element:", stos.pop());
console.log("Rozmiar stosu po usunięciu:", stos.size());
console.log("Wierzch stosu:", stos.peek());
stos.clear();
console.log("Stos jest pusty:", stos.isEmpty());
