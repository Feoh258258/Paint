document.addEventListener("DOMContentLoaded", function(e){

    let canvas = document.getElementById('c1');
    let ctx = canvas.getContext('2d'); //получаем контекст канваса. Название переменной CTX используется для канваса
    let myColor = 'black';//цвет по умолчанию
    document.getElementById('color').oninput = function() {
      myColor = this.value;// value свойство, а не метод, () не ставим!
    }
    //Логика: захват нажатой кнопки мышки, после захват движения мышки внутри канваса
    canvas.onmousedown = function(event) {
      canvas.onmousemove = function(event) {
      let x = event.offsetX; //получаю координаты по оси X
      let y = event.offsetY; //получаю координаты по оси Y
      ctx.fillRect(x-10, y-10, 7, 7) //fillRect() - этим методом, согласно координатам мышки (x, y отрисовывается прямоугольник в заданых размерах 10х10)
      ctx.fillStyle = myColor;
      }
      canvas.onmouseup = function() {
        canvas.onmousemove = null;//прекращаем рисовать после выключения кнопки мыши
      }
    }

});



