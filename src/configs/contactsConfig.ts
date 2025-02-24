import { phoneNumbers } from './header/phones'
import { socialIcons } from './common/socialIcons'

export let contactsConfig = {
  title: 'Свяжитесь с нами',
  image: 'https://dummyimage.com/150.png?text=Image',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, aut?',
  phoneNumbers: phoneNumbers,
  socialIcons: socialIcons,

  style: {
    title: {
      fontSize: '2rem',
      margin: '50px 0 50px 0',
    },
    image: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
    },
    description: {
      fontSize: '1.5rem', 
      margin: '0 0 20px 0', 
    },
    icons: {
      fontSize: '2.5rem', 
      color: '#008cff', // можно без цвета, просто так добавил
    },
  },
}

export type contactsConfigT = typeof contactsConfig
