export let pricingConfig = {
    cards: [
        {
          "title": "Title1",
          "price": "10$",
          "description": ["lorem ipsum dolor sit amet1", "lorem1", "Hello World!"],
          "buttonText": "Button"
        },
        {
          "title": "Title2",
          "price": "15$",
          "description": ["lorem ipsum dolor sit amet2", "lorem2", "Hello World!"],
          "buttonText": "Button"
        },
        {
          "title": "Title3",
          "price": "20$",
          "description": ["lorem ipsum dolor sit amet3", "lorem3", "Hello World!"],
          "buttonText": "Button"
        }
    ]
}

export type PricingConfig = typeof pricingConfig