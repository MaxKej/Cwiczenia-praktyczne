async function saveProduct(product) {
    try {
        const response = await fetch("/api/product/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });

        if (!response.ok) {
            throw new Error('Failed to save product');
        }
    } catch (error) {
        throw new Error('An error occurred:', error);
    }
}

async function updateProduct(updatedProduct) {
    try {
        const response = await fetch("/api/product/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        });

        if (response.ok) {
            console.log("Product updated successfully!");
        } else {
            throw new Error('Failed to update product');
        }
    } catch (error) {
        console.error("An error occurred while updating product:", error);
    }
}


async function deleteProduct(productId) {
    try {
        const response = await fetch(`/api/product/delete/${productId}`, {
            method: "DELETE",
        });
        if (response.ok) {
            console.log("Product deleted successfully!");
        } else if (response.status === 404) {
            console.error("Product not found");
        } else {
            console.error("Failed to delete product");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}


async function getProductByID(productId) {
    try {
        const response = await fetch(`/api/product/get/${productId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const product = await response.json();
        return product;
    } catch (error) {
        console.error("Błąd podczas pobierania produktu:", error);
        return null; // Zwracamy null w przypadku błędu
    }
}



async function fetchAllProducts() {
    try {
        const response = await fetch("/api/product/getAll");
        if (response.ok) {
            const products = await response.json();
            return products;
        } else {
            console.error("Error loading products:", response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Error fetching products:", error);
        return null;
    }
}

function displayProducts(products) {
    const productList = document.querySelector(".products");
    productList.innerHTML = "";
    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.id = `product-${product.id}`;
        console.log(productItem.id);

        productItem.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Cena: ${product.price} PLN</p>
                `;
        productItem.style.backgroundColor = "lightblue";
        productItem.classList.add("kafelka");

        productList.appendChild(productItem);
    });
}


function displayProductsToModify(products) {
    const productList = document.querySelector(".products");
    productList.innerHTML = "";
    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.id = `product-${product.id}`;

        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Cena: ${product.price} PLN</p>
            <button class="delete-button" data-id="${product.id}">Usuń</button>
            <button class="edit-button" data-id="${product.id}">Modyfikuj</button>
        `;
        productItem.style.backgroundColor = "lightblue";
        productItem.classList.add("kafelka");

        productList.appendChild(productItem);

    });


    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(button => {
        button.addEventListener("click", async () => {
            const productId = button.getAttribute("data-id");

            const confirmation = confirm("Czy na pewno chcesz usunąć ten produkt?");

            if (confirmation) {
                try {
                    await deleteProduct(productId);
                    location.reload();
                } catch (error) {
                    console.error("An error occurred while deleting product: ", error);
                }
            }
        });
    });


    const editButtons = document.querySelectorAll(".edit-button");
    editButtons.forEach(button => {
        button.addEventListener("click", async () => {
            const productId = button.getAttribute("data-id");
            try {
                const product = await getProductByID(productId);
                fillFormWithProductData(product);
            } catch (error) {
                console.error("An error occurred while fetching product details:", error);
            }
        });
    });
}

function fillFormWithProductData(product) {
    document.getElementById("id").value = product.id;
    document.getElementById("name").value = product.name;
    document.getElementById("description").value = product.description;
    document.getElementById("price").value = product.price;
}