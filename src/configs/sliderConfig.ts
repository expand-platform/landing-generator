

export let sliderConfig = {
  controls: true,
  indicators: true,
  images: [
    // Первый слайд всегда активен
    // Картинки должны быть одинаковых пропорций
    // Пример: картинки 1920х1080 и 1280х720, размер разный но пропорции одинаоковые (16:9)
    {
      "src": "https://dummyimage.com/1000x300.png?text=slide1"
    },
    {
      "src": "https://dummyimage.com/1000x300.png?text=slide2"
    },
    {
      "src": "https://dummyimage.com/1000x300.png?text=slide3"
    }
  ]
}

export type SliderConfig = typeof sliderConfig;
