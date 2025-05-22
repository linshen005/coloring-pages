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
      { id: 1, title: 'Pikachu', imageUrl: 'https://via.placeholder.com/400x250?text=Pokemon', pdf: '/pdfs/pokemon/pikachu.pdf' },
      { id: 2, title: 'Charizard', imageUrl: 'https://via.placeholder.com/400x250?text=Pokemon', pdf: '/pdfs/pokemon/charizard.pdf' },
      { id: 3, title: 'Eevee', imageUrl: 'https://via.placeholder.com/400x250?text=Pokemon', pdf: '/pdfs/pokemon/eevee.pdf' }
    ]
  },
  cat: {
    title: 'Cat Coloring Pages',
    description: 'Adorable cat coloring pages perfect for kids who love feline friends. Features cute kittens and playful cats.',
    images: [
      { id: 1, title: 'Playful Kitten', imageUrl: 'https://via.placeholder.com/400x250?text=Cat', pdf: '/pdfs/cats/kitten.pdf' },
      { id: 2, title: 'Sleeping Cat', imageUrl: 'https://via.placeholder.com/400x250?text=Cat', pdf: '/pdfs/cats/sleeping.pdf' }
    ]
  },
  flower: {
    title: 'Flower Coloring Pages',
    description: 'Beautiful flower coloring pages featuring roses, tulips, and garden scenes for nature lovers of all ages.',
    images: [
      { id: 1, title: 'Rose Garden', imageUrl: 'https://via.placeholder.com/400x250?text=Flower', pdf: '/pdfs/flowers/rose.pdf' },
      { id: 2, title: 'Spring Tulips', imageUrl: 'https://via.placeholder.com/400x250?text=Flower', pdf: '/pdfs/flowers/tulips.pdf' }
    ]
  },
  dinosaur: {
    title: 'Dinosaur Coloring Pages',
    description: 'Exciting dinosaur coloring pages featuring T-Rex, Triceratops, and other prehistoric creatures for young adventurers.',
    images: [
      { id: 1, title: 'T-Rex', imageUrl: 'https://via.placeholder.com/400x250?text=Dinosaur', pdf: '/pdfs/dinosaurs/trex.pdf' },
      { id: 2, title: 'Triceratops', imageUrl: 'https://via.placeholder.com/400x250?text=Dinosaur', pdf: '/pdfs/dinosaurs/triceratops.pdf' }
    ]
  },
  princess: {
    title: 'Princess Coloring Pages',
    description: 'Magical princess coloring pages featuring beautiful princesses, castles, and fairy tale scenes for little dreamers.',
    images: [
      { id: 1, title: 'Castle Princess', imageUrl: 'https://via.placeholder.com/400x250?text=Princess', pdf: '/pdfs/princess/castle.pdf' },
      { id: 2, title: 'Fairy Princess', imageUrl: 'https://via.placeholder.com/400x250?text=Princess', pdf: '/pdfs/princess/fairy.pdf' }
    ]
  }
}; 