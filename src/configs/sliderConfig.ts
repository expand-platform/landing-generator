export let sliderConfig = {
  // Стрелочки влево-вправо
  controls: true,

  // Индикаторы порядка и количества картинок
  indicators: true,

  // Альтернативная анимация смены картинок
  fade: false,

  // Автопрокрутка
  ride: false, 
  // false: выключено
  // true: начинает крутится после первого взаимодействия с каруселью
  // "carousel": крутиться с самого начала
  
  interval: 5000, // В милисекундах

  padding_top: "200px",
  padding_bottom: "100px",
  padding_left: "100px",
  padding_right: "100px",

  images: [
    // Первый слайд всегда активен

    // Картинки должны быть одинаковых пропорций
    // Пример: картинки 1920х1080 и 1280х720, размер разный но пропорции одинаоковые (16:9)

    // Можно добавить caption, но если его не будет - ничего не сломается
    {
      "src": "https://dummyimage.com/1000x300.png?text=FirstSlide",
      "caption": "Hello World First"
    },
    {
      "src": "https://dummyimage.com/1000x300.png?text=SecondSlide",
      "caption": "Hello World Second"
    },
    {
      "src": "https://dummyimage.com/1000x300.png?text=ThirdSlide",
      "caption": "Hello World Third"
    }
  ]
}

export type SliderConfig = typeof sliderConfig;
