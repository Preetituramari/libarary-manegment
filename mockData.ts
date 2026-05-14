import { Book, UserRole, UserProfile } from './types';

// Mock data while waiting for Firebase
export const MOCK_BOOKS: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: '9780743273565',
    category: 'Classic',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    isbn: '9780451524935',
    category: 'Dystopian',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    isbn: '9780547928227',
    category: 'Fantasy',
    status: 'borrowed',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '4',
    title: 'Aerodynamics of Road Vehicles',
    author: 'Wolf-Heinrich Hucho',
    isbn: '9780750612678',
    category: 'Technical',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '5',
    title: 'Life in the Fast Lane',
    author: 'Eddie Jordan',
    isbn: '9781844540518',
    category: 'Biography',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '6',
    title: 'Grand Prix Strategy',
    author: 'Neil Oatley',
    isbn: '9781859604106',
    category: 'Strategy',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '7',
    title: 'Brief Answers to the Big Questions',
    author: 'Stephen Hawking',
    isbn: '9781473695986',
    category: 'Science',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '8',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '9780061120084',
    category: 'Classic',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '9',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    isbn: '9780060850524',
    category: 'Dystopian',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '10',
    title: 'The Art of War',
    author: 'Sun Tzu',
    isbn: '9781590300541',
    category: 'Strategy',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '11',
    title: 'Extreme Engineering',
    author: 'Paul Virilio',
    isbn: '9781844670081',
    category: 'Technical',
    status: 'borrowed',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '12',
    title: 'Atomic Habits',
    author: 'James Clear',
    isbn: '9780735211292',
    category: 'Self-Help',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '13',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    isbn: '9780062315007',
    category: 'Fiction',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '14',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    isbn: '9780062316097',
    category: 'Science',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '15',
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '9780465050659',
    category: 'Technical',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '16',
    title: 'The Manual of Engineering Drawing',
    author: 'Colin Simmons',
    isbn: '9780080966526',
    category: 'Technical',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '17',
    title: 'Race Car Design',
    author: 'Derek Seward',
    isbn: '9781137030146',
    category: 'Technical',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '18',
    title: 'Introduction to Flight',
    author: 'John D. Anderson',
    isbn: '9780078027673',
    category: 'Science',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '19',
    title: 'Deep Work',
    author: 'Cal Newport',
    isbn: '9781455586691',
    category: 'Self-Help',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '20',
    title: 'The Lean Startup',
    author: 'Eric Ries',
    isbn: '9780307887894',
    category: 'Business',
    status: 'borrowed',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '21',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    isbn: '9780132350884',
    category: 'Technical',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '22',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    isbn: '9780135957059',
    category: 'Technical',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '23',
    title: 'Start with Why',
    author: 'Simon Sinek',
    isbn: '9781591846444',
    category: 'Business',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '24',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    isbn: '9780374275631',
    category: 'Science',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '25',
    title: 'The Unfair Advantage',
    author: 'Ash Ali',
    isbn: '9781781254341',
    category: 'Business',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '26',
    title: 'Heli Hogu Kaarana',
    author: 'Ravi Belagere',
    isbn: '9788190743213',
    category: 'Literature',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '27',
    title: 'The Library Book',
    author: 'Susan Orlean',
    isbn: '9781476740188',
    category: 'Non-Fiction',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '28',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    isbn: '9780525559474',
    category: 'Fiction',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '29',
    title: 'Library: An Unquiet History',
    author: 'Matthew Battles',
    isbn: '9780393325645',
    category: 'History',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export const MOCK_NEWS = [
  {
    id: 'n1',
    title: 'New High-Performance Computing Section Opened',
    category: 'FACILITY',
    date: '12 MAY 2026',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    excerpt: 'The library has expanded its technical wing with the latest volumes in quantum computing and edge processing.'
  },
  {
    id: 'n2',
    title: 'Summer Pit Stop: Extended Borrowing Limits',
    category: 'ANNOUNCEMENT',
    date: '10 MAY 2026',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Prepare for the off-season. Students can now borrow up to 8 volumes for the summer break session.'
  },
  {
    id: 'n3',
    title: 'Archive Restoration: The 1950s Technical Collection',
    category: 'HISTORY',
    date: '08 MAY 2026',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800',
    excerpt: 'A rare set of engineering manuals from the early era of automation has been digitized for research.'
  }
];
