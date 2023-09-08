const inputList = document.getElementById("inputShopping");
let wares = ['🥬', '🧅', '🥕', '🍅', '🥔', '🥩', '🍗', '🍖', '🧀', '🥚', '🧂', '🍉']


function enterPress() {
    let inputVariable = inputList.value;
    inputList.value = "";
    document.getElementById("list").innerHTML += `<li>${inputVariable}</li>`;
    document.getElementById(inputVariable).classList.remove("images");;
}

function removeListings() {
    // i'll get back to this later. this is temporary but i'll have to do other tasks aswell
    location.reload();
}
let number = null;
function moveToCart(waresID, array, value) {
    document.getElementById(waresID).classList.add("images");
    
    if(document.getElementById(`${waresID}2`) === null) {
        document.getElementById("cartTop").innerHTML +=`
    <div class="margin" id="${waresID}2" onclick="removeCartItem('${waresID}', wares, '${value}')">${value}</div>
    `;
    }
    else {
        document.getElementById(`${waresID}2`).classList.remove("images");
    }
}

function removeCartItem(waresID, array, value, number) {
    document.getElementById(waresID).classList.remove("images");
    document.getElementById(`${waresID}2`).classList.add("images");
    
}