/*
- Добавить крестик закрытия увеличенного изображения справа сверху 
- При наведении на маленькое изображение на нем должна всплывать лупа 
- В раскрытом изображении снизу справа добавить кнопку "открыть в полном размере"
- Поправить адаптивность
 */
function imageSizeControl() {
    //Изображение для увеличения 
    var target = document.querySelectorAll('.galleryImage');
    //Создание фона-контейнера для увеличенного изображения   
    var gallImgIncWrapper = document.createElement('div');
    //Место куда будет вставляться увеличенное изображение
    var forInsert = document.querySelector('div#wrapper');
    //Присваеваем класс со стилями для фона-контейнера
    gallImgIncWrapper.className = 'galleryImageIncreasedWrapper';    
    //Переменная контроля увеличенного изображения. Если control = 0 то при нажатии на изображение происходит увеличение, если 1 уменьшение.
    var control = 0;
    if(control === 0){
        //Добавляем каждому изображению обработчик события - функцию увеличения изображения.
        for (var i = 0; i < target.length; i++){
        target[i].addEventListener('click',increaseImage);
        }
        control = 1;
    } else{
        control = 0;
    }
    function increaseImage() {
        //Выделяем изображение на которое произошло нажатие
        var clonedImage = this.cloneNode(true);
        //Для выбранного изображения присваеваем класс со стилями увеличенного изображения 
        clonedImage.className = 'galleryImageIncreased';
        //Место куда будет вставляться картинка = фон-контейнер
        forInsert.insertBefore(gallImgIncWrapper,forInsert.firstChild);
        //Добавляем выделенное изображение в фон-контейнер 
        gallImgIncWrapper.appendChild(clonedImage);
        //Увеличенному изображению добавляем обработчик события - функцию его уменьшения  
        clonedImage.addEventListener('click',decreaseImage);
    }
    function decreaseImage() {
        //Выделяем увеличенное изображение
        var clonedImage = document.querySelector('img.galleryImageIncreased')
        //Удаляем фон-контейнер и его дочерние элементы
        var forDelete = forInsert.firstChild;
        forDelete.removeChild(clonedImage);
        forInsert.removeChild(forDelete);
    }
}

imageSizeControl();
