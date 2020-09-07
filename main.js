/*
Довести до идеала адаптивность
Добавить крестик справа всерху в всплывающем блоке закрывающий его
при наведении на маленькое изображение на нем должна всплывать лупа 

Затем можно выложить проект.
 */
function imageSizeControl() {
    var target = document.querySelectorAll('.galleryImage');    
    var gallImgIncWrapper = document.createElement('div');
    var forInsert = document.querySelector('div#wrapper');
    gallImgIncWrapper.className = 'galleryImageIncreasedWrapper';    
    var control = 0;
    if(control === 0){
        for (var i = 0; i < target.length; i++){
        target[i].addEventListener('click',increaseImage);
        }
        control = 1;
    } else{
        control = 0;
    }
    function increaseImage() {
        var clonedImage = this.cloneNode(true);
        clonedImage.className = 'galleryImageIncreased';
        forInsert.insertBefore(gallImgIncWrapper,forInsert.firstChild);
        gallImgIncWrapper.appendChild(clonedImage);
        clonedImage.addEventListener('click',decreaseImage);
    }
    function decreaseImage() {
        var clonedImage = document.querySelector('img.galleryImageIncreased')
        var forDelete = forInsert.firstChild;
        forDelete.removeChild(clonedImage);
        forInsert.removeChild(forDelete);
    }
}
//При экране меньше и равно 520 пикселей - отключить функцию.
imageSizeControl();
