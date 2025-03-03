const sliderImgPath = "/img/slider"

export let sliderConfig = {
  // Стрелочки и индикаторы
  controls: true,
  indicators: true,
  interval: 3000,

  // Анимация слайдов
  fade: false,

  // Автопрокрутка
  // true: крутится после первого взаимодействия с каруселью
  // "carousel": крутиться с самого начала
  ride: "carousel", // true, false, "carousel"

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
      "src": `${sliderImgPath}/1.jpg`,
      "caption": "Расклад на судьбу"
    },
    {
      "src": `${sliderImgPath}/2.jpeg`,
      "caption": "Расклад на год"
    },
    {
      "src": `${sliderImgPath}/3.jpeg`,
      "caption": "Расклад на любовь"
    }
  ]
}

export type SliderConfig = typeof sliderConfig;
