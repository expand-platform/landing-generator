export let sliderConfig = {
  // Стрелочки влево-вправо
  controls: true,

  // Индикаторы порядка и количества картинок
  indicators: true,

  // Альтернативная анимация смены картинок
  fade: false,

  // Автопрокрутка
  ride: "carousel", 
  // false: выключено
  // true: начинает крутится после первого взаимодействия с каруселью
  // "carousel": крутиться с самого начала
  
  interval: 3000, // В милисекундах

  style: {
    padding: "0px 0px 0px 0px"
  },

  images: [
    // Первый слайд всегда активен

    // Картинки должны быть одинаковых пропорций
    // Пример: картинки 1920х1080 и 1280х720, размер разный но пропорции одинаоковые (16:9)

    // Можно добавить caption, но если его не будет - ничего не сломается
    {
      "src": "https://dummyimage.com/1000x500.png?text=FirstSlide",
      "caption": "Hello World"
    },
    {
      "src": "https://dummyimage.com/1000x500.png?text=SecondSlide",
      "caption": "Hello World"
    },
    {
      "src": "https://dummyimage.com/1000x500.png?text=ThirdSlide",
      "caption": "Hello World"
    }
  ]
}

export type SliderConfig = typeof sliderConfig;