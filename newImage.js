function newImage(url){
    //declaring a variable
    let image = document.createElement('img')
    //is this declaring another variable?
    image.src = url
    //adding the image to the index
    document.body.append(image)
    return image
}