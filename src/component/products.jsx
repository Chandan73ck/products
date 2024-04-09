const products = [
  {
    name: 'Apple Juice',
    description: 'Apple juice is a fruit juice made by the maceration and pressing of an apple. ',
    price: 40,
    pictures: [
      '/images/Apple.png'
    ],
  },

  {
    name: 'Mango Juice',
    description: 'A very healthy juice . Drink daily',
    price: 30,
    pictures: [
      '/images/Mango.png'
    ],
  },

  {
    name: 'Pineapple Juice',
    description: 'A very healthy juice . Drink daily',
    price: 40,
    pictures: [
      '/images/Pineapple.png'
    ],
  },

  {
    name: 'Watermelon Juice',
    description: 'Watermelon high water content, antioxidants, and amino acids may make for a better workout.',
    price: 40,
    pictures: [
      '/images/WaterMelon.png'
    ],
  },

  {
    name: 'Orange Juice',
    description: 'Orange juice is a liquid extract of the orange tree fruit, produced by squeezing or reaming oranges. ',
    price: 40,
    pictures: [
      'https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/10986584/pexels-photo-10986584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/96620/pexels-photo-96620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5947078/pexels-photo-5947078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
  },

  {
    name: 'Strawberry Juice',
    description: 'Strawberry Juice is a refreshing fresh fruit juice that is full of vitamin C and antioxidants and lot of invigorating flavor.',
    price: 60,
    pictures: [
      'https://images.pexels.com/photos/5984486/pexels-photo-5984486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/10597614/pexels-photo-10597614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/14930535/pexels-photo-14930535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5817603/pexels-photo-5817603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7656391/pexels-photo-7656391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
  },

  {
    name: ' Pomegranate Juice',
    description: 'Pomegranate juice is made from the fruit of the pomegranate.',
    price: 60,
    pictures: [
      'https://images.pexels.com/photos/7656393/pexels-photo-7656393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8983396/pexels-photo-8983396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4113130/pexels-photo-4113130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
  },
  {
    name: ' Pomegranate Juice',
    description: 'Pomegranate juice is made from the fruit of the pomegranate.',
    price: 60,
    pictures: [
      'https://images.pexels.com/photos/8679385/pexels-photo-8679385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8679387/pexels-photo-8679387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/11948360/pexels-photo-11948360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
  },
  {
    name: ' AAmm  Juice',
    description: 'Pomegranate juice is made from the fruit of the pomegranate.',
    price: 60,
    pictures: [
      'https://images.pexels.com/photos/8679385/pexels-photo-8679385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8679387/pexels-photo-8679387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/11948360/pexels-photo-11948360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
  }, 
  {
    name: '  Juice',
    description: 'Pomegranate juice is made from the fruit of the pomegranate.',
    price: 60,
    pictures: [
      'https://images.pexels.com/photos/8679385/pexels-photo-8679385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8679387/pexels-photo-8679387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/11948360/pexels-photo-11948360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
  },
   {
    name: '  Juice',
    description: 'Pomegranate juice is made from the fruit of the pomegranate.',
    price: 60,
    pictures: [
      'https://images.pexels.com/photos/8679385/pexels-photo-8679385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8679387/pexels-photo-8679387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/11948360/pexels-photo-11948360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
  },
  {
    name: '  Juice',
    description: 'Pomegranate juice is made from the fruit of the pomegranate.',
    price: 60,
    pictures: [
      'https://images.pexels.com/photos/8679385/pexels-photo-8679385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8679387/pexels-photo-8679387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/11948360/pexels-photo-11948360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
  }, 
  {
    name: '  Juice',
    description: 'Pomegranate juice is made from the fruit of the pomegranate.',
    price: 60,
    pictures: [
      'https://images.pexels.com/photos/8679385/pexels-photo-8679385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8679387/pexels-photo-8679387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/11948360/pexels-photo-11948360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
  }
]

export default products;
