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

  interval: 3000, // В миллисекундах

  style: {
    section: {
      padding: "0",
      margin: "0 0 100px 0",
    },
    images: {
      maxHeight: "auto"
    }
  },

  images: [
    // Первый слайд всегда активен

    // Картинки должны быть одинаковых пропорций
    // Пример: картинки 1920х1080 и 1280х720, размер разный но пропорции одинаковые (16:9)

    // Можно добавить caption, но если его не будет - ничего не сломается
    {
      "src": "/img/taro/1.jpg",
      "caption": "Расклад на судьбу"
    },
    {
      "src": "/img/taro/2.jpeg",
      "caption": "Расклад на год"
    },
    {
      "src": "/img/taro/3.jpeg",
      "caption": "Расклад на любовь"
    }
  ]
}

export type SliderConfig = typeof sliderConfig;
