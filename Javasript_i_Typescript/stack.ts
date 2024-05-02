class Stack
{
    private elements: any[]; // elementy stosu

    constructor() {
        this.elements = [];
    }

    // Metoda dodająca element na wierzch stosu
    push(element: any): void {
        this.elements.push(element);
    }

    // Metoda usuwająca i zwracająca element z wierzchu stosu
    pop(): any {
        if (this.isEmpty()) {
            throw new Error("Stos jest pusty");
        }
        return this.elements.pop();
    }

    // Metoda zwracająca element z wierzchu stosu bez usuwania go
    peek(): any {
        if (this.isEmpty()) {
            throw new Error("Stos jest pusty");
        }
        return this.elements[this.elements.length - 1];
    }

    // Metoda sprawdzająca czy stos jest pusty
    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    // Metoda zwracająca ilość elementów na stosie
    size(): number {
        return this.elements.length;
    }

    // Metoda czyszcząca stos
    clear(): void {
        this.elements = [];
    }
}


const stos = new Stack();
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