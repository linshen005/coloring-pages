interface Image {
  id: number;
  title: string;
  imageUrl: string;
  pdf: string;
}

interface Category {
  title: string;
  description: string;
  images: Image[];
}

export const categoryData: Record<string, Category> = {
  pokemon: {
    title: 'Pokemon Coloring Pages',
    description: 'Bring your favorite Pokemon characters to life with these free coloring pages featuring Pikachu, Charizard, and more.',
    images: [
      { id: 1, title: 'Pokemon', imageUrl: '/images/pokemon/pokemon.jpg', pdf: '/pdfs/pokemon/pokemon.pdf' }
    ]
  },
  cat: {
    title: 'Cat Coloring Pages',
    description: 'Adorable cat coloring pages perfect for kids who love feline friends. Features cute kittens and playful cats.',
    images: [
      { id: 1, title: 'Playful Kitten', imageUrl: '/images/cat/playful-kitten.jpg', pdf: '/pdfs/cat/playful-kitten.pdf' }
    ]
  },
  flower: {
    title: 'Flower Coloring Pages',
    description: 'Beautiful flower coloring pages featuring roses, tulips, and garden scenes for nature lovers of all ages.',
    images: [
      { id: 1, title: 'Rose Garden', imageUrl: '/images/flower/flower-rose-garden.jpg', pdf: '/pdfs/flower/flower-rose-garden.pdf' },
      { id: 2, title: 'Spring Tulips', imageUrl: '/images/flower/flower-spring-tulips.jpg', pdf: '/pdfs/flower/flower-spring-tulips.pdf' }
    ]
  },
  dinosaur: {
    title: 'Dinosaur Coloring Pages',
    description: 'Exciting dinosaur coloring pages featuring T-Rex, Triceratops, and other prehistoric creatures for young adventurers.',
    images: [
      { id: 1, title: 'T-Rex', imageUrl: '/images/dinosaur/t-rex.jpg', pdf: '/pdfs/dinosaur/t-rex.pdf' },
      { id: 2, title: 'Cute Dinosaur', imageUrl: '/images/dinosaur/dinosaur-cute.jpg', pdf: '/pdfs/dinosaur/dinosaur-cute.pdf' }
    ]
  },
  princess: {
    title: 'Princess Coloring Pages',
    description: 'Magical princess coloring pages featuring beautiful princesses, castles, and fairy tale scenes for little dreamers.',
    images: [
      { id: 1, title: 'Castle Princess', imageUrl: '/images/princess/princess-castle-gown.jpg', pdf: '/pdfs/princess/princess-castle-gown.pdf' },
      { id: 2, title: 'Fairy Princess', imageUrl: '/images/princess/princess-fairy-wings.jpg', pdf: '/pdfs/princess/princess-fairy-wings.pdf' }
    ]
  }
}; 