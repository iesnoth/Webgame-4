function newItem(url){
    let item = newImage(url)
    //arrow function is the second parameter here.
    //it's also an inline function
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
        //^^ this removes item from screen and puts it into the inventory
    })
    return item
}