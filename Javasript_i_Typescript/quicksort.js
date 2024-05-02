function search(arr, start, end)
{
    // wybieramy ostatni element jako nasz pivot
    let pivot = arr[end];
    let i = start - 1;
    for (j = start; j < end; j++)
    {
        if (arr[j] <= pivot)
        {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];

    return (i + 1); // zwracamy wartosc o jedna w prawo
}

function quickSort(arr, start, end)
{
    if (start < end)
    {
        // Wybieramy miejsce w tablicy, mniejsze wartosci od niego ida na lewo a wieksze na prawo
        pivot = search(arr, start, end);
        // lewa strona
        quickSort(arr, start, pivot - 1);
        // prawa strona
        quickSort(arr, pivot + 1, end);
    }
}

// Driver code
let arr = [10, 7, 8, 9, 1, 5];
let N = arr.length;

// Function call
quickSort(arr, 0, N - 1);
console.log("Posortowana tablica:");
console.log(arr.join(" "));