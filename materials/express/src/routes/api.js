
const books = [
    {
      id: 67,
      title: "Tom's Midnight Garden",
      author: 'Philippa Pearce',
      cover: 'http://ecx.images-amazon.com/images/I/6169-SiRAUL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 66,
      title: 'The Borribles Go For Broke',
      author: 'Michael de Larrabeiti',
      cover: '',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 65,
      title: 'The Borribles',
      author: 'Michael de Larrabeiti',
      cover: 'http://ecx.images-amazon.com/images/I/51rreYSVemL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 64,
      title: "Childhood's End",
      author: 'Arthur C. Clarke',
      cover: 'http://ecx.images-amazon.com/images/I/51ktGOkgYdL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 63,
      title: 'The Forever War',
      author: 'Joe Haldeman',
      cover: 'http://ecx.images-amazon.com/images/I/51Ki76Qf64L._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 62,
      title: 'Northern Lights (US The Golden Compass)',
      author: 'Philip Pullman',
      cover: 'http://ecx.images-amazon.com/images/I/513wgpJY44L._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 61,
      title: "All The King's Men",
      author: 'William Mayne',
      cover: 'http://ecx.images-amazon.com/images/I/41E7166B09L._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 60,
      title: 'The Blue World ',
      author: 'Jack Vance',
      cover: 'http://ecx.images-amazon.com/images/I/617b3IoqPzL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 59,
      title: 'The Quare Fellow',
      author: 'Brendan Behan',
      cover: 'http://ecx.images-amazon.com/images/I/51jiTpaySiL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 58,
      title: 'Camp Concentration',
      author: 'Thomas M. Disch',
      cover: 'http://ecx.images-amazon.com/images/I/51B7H5PD10L._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 57,
      title: 'Old Mali And The Boy',
      author: 'D R Sherman',
      cover: '',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 56,
      title: 'The Owl Service',
      author: 'Alan Garner',
      cover: 'http://ecx.images-amazon.com/images/I/51ijxfQHoyL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 55,
      title: 'The Farthest Shore',
      author: 'Ursula Le Guin',
      cover: 'http://ecx.images-amazon.com/images/I/51Yu9ovXg1L._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 54,
      title: 'The Tombs of Atuan',
      author: 'Ursula Le Guin',
      cover: 'http://ecx.images-amazon.com/images/I/51CIf5MFrJL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 53,
      title: 'A Wizard of Earthsea',
      author: 'Ursula Le Guin',
      cover: 'http://ecx.images-amazon.com/images/I/31b58qc0zAL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 52,
      title: 'The Alteration',
      author: 'Kingsley Amis',
      cover: 'http://ecx.images-amazon.com/images/I/416oY8mlRhL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 51,
      title: 'A Fire Upon The Deep',
      author: 'Vernor Vinge',
      cover: 'http://ecx.images-amazon.com/images/I/51OrT3Zz+fL._AA160_.jpg',
      owner: 'slatimerc@fakelulu.com'
    },
    {
      id: 50,
      title: 'Tiger Tiger (Stars My Destination)',
      author: 'Alfred Bester',
      cover: 'http://ecx.images-amazon.com/images/I/51sGNkKQtKL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 49,
      title: 'Bug Jack Barron',
      author: 'Norman Spinrad',
      cover: 'http://ecx.images-amazon.com/images/I/51QpXsvBTbL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 48,
      title: 'The Door Into Summer',
      author: 'Robert Heinlein',
      cover: 'http://ecx.images-amazon.com/images/I/41yBWAFvB7L._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 47,
      title: 'Orphans of the Sky',
      author: 'Robert Heinlein',
      cover: 'http://ecx.images-amazon.com/images/I/51oqYQxRelL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 46,
      title: 'Between Planets',
      author: 'Robert Heinlein',
      cover: 'http://ecx.images-amazon.com/images/I/41ChVv+YKbL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 45,
      title: 'The Unpleasant Profession of Jonathan Hoag',
      author: 'Robert Heinlein',
      cover: 'http://ecx.images-amazon.com/images/I/51OfxRCZrvL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 44,
      title: 'The Moon is a Harsh Mistress',
      author: 'Robert Heinlein',
      cover: 'http://ecx.images-amazon.com/images/I/410BnoLMnoL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 43,
      title: 'Revolt in 2100',
      author: 'Robert Heinlein',
      cover: 'http://ecx.images-amazon.com/images/I/51cUMkHZoyL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 42,
      title: 'Stranger in a Strange Land',
      author: 'Robert Heinlein',
      cover: 'http://ecx.images-amazon.com/images/I/51CQT4vsHJL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 41,
      title: 'Starship Troopers',
      author: 'Robert Heinlein',
      cover: 'http://ecx.images-amazon.com/images/I/51T3Iwe0YZL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 40,
      title: "The Dragon's Quest",
      author: 'Rosemary Manning',
      cover: 'http://ecx.images-amazon.com/images/I/51tSZ1GExfL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 39,
      title: 'The Forest of Boland Light Railway',
      author: 'BB',
      cover: 'http://ecx.images-amazon.com/images/I/51PRP64-+mL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 38,
      title: 'The Blue Hawk',
      author: 'Peter Dickinson',
      cover: 'http://ecx.images-amazon.com/images/I/51KHloOK1NL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 37,
      title: 'Dying Inside',
      author: 'Robert Silverberg',
      cover: 'http://ecx.images-amazon.com/images/I/41nQ0AW-dLL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 36,
      title: 'The Hollow Hills',
      author: 'Mary Stewart',
      cover: 'http://ecx.images-amazon.com/images/I/51VN3z8WTnL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 35,
      title: 'The Crystal Cave',
      author: 'Mary Stewart',
      cover: 'http://ecx.images-amazon.com/images/I/51IjQJ2CfJL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 34,
      title: 'The Knights of the Limits',
      author: 'Barrington J. Bayley',
      cover: 'http://ecx.images-amazon.com/images/I/616Aablnr9L._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 33,
      title: 'The Zen Gun',
      author: 'Barrington J. Bayley',
      cover: 'http://ecx.images-amazon.com/images/I/51ljdGUGNPL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 32,
      title: 'The Grand Wheel',
      author: 'Barrington J. Bayley',
      cover: 'http://ecx.images-amazon.com/images/I/61P8EEGqlWL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 31,
      title: 'The Soul of the Robot',
      author: 'Barrington J. Bayley',
      cover: 'http://ecx.images-amazon.com/images/I/51U4SXS28mL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 30,
      title: 'The Fall of Chronopolis',
      author: 'Barrington J. Bayley',
      cover: 'http://ecx.images-amazon.com/images/I/4111R5tQkeL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 29,
      title: 'The Pillars of Eternity',
      author: 'Barrington J. Bayley',
      cover: 'http://ecx.images-amazon.com/images/I/41PEVg6bf7L._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 28,
      title: 'Collision With Chronos (Collision Course)',
      author: 'Barrington J. Bayley',
      cover: 'http://ecx.images-amazon.com/images/I/41Lut2VxAwL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 27,
      title: 'Star Winds',
      author: 'Barrington J. Bayley',
      cover: '',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 26,
      title: 'The Garments of Caean',
      author: 'Barrington J. Bayley',
      cover: 'http://ecx.images-amazon.com/images/I/41eg4y-IQxL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 25,
      title: 'To Kill A Mockingbird',
      author: 'Harper Lee',
      cover: 'http://ecx.images-amazon.com/images/I/51grMGCKivL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 24,
      title: "One Flew Over the Cuckoo's Nest",
      author: 'Ken Kesey',
      cover: 'http://ecx.images-amazon.com/images/I/416Et8Tk+4L._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 23,
      title: 'Flashman And The Great Game',
      author: 'George MacDonald Fraser',
      cover: 'http://ecx.images-amazon.com/images/I/51xU9BPvSkL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 22,
      title: 'Flashman And The Dragon',
      author: 'George MacDonald Fraser',
      cover: 'http://ecx.images-amazon.com/images/I/51+1vThhDIL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 21,
      title: 'Flashman At The Charge',
      author: 'George MacDonald Fraser',
      cover: 'http://ecx.images-amazon.com/images/I/51AUPtw8iyL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 20,
      title: 'Flashman And The Redskins',
      author: 'George MacDonald Fraser',
      cover: 'http://ecx.images-amazon.com/images/I/51qoMI+43zL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 19,
      title: 'Shogun',
      author: 'James Clavell',
      cover: 'http://ecx.images-amazon.com/images/I/51a0jeqEqAL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 18,
      title: 'Neutron Star',
      author: 'Larry Niven',
      cover: 'http://ecx.images-amazon.com/images/I/51PfwCb7+xL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 17,
      title: 'Protector',
      author: 'Larry Niven',
      cover: 'http://ecx.images-amazon.com/images/I/51pLogY62jL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 16,
      title: 'World of Ptavvs ',
      author: 'Larry Niven',
      cover: 'http://ecx.images-amazon.com/images/I/51NvGcIKtZL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 15,
      title: 'A Gift From Earth',
      author: 'Larry Niven',
      cover: 'http://ecx.images-amazon.com/images/I/51VDE1A61GL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 14,
      title: 'Dawn of Fear',
      author: 'Susan Cooper',
      cover: 'http://ecx.images-amazon.com/images/I/51LuqtHHzYL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 13,
      title: 'Greenwitch',
      author: 'Susan Cooper',
      cover: 'http://ecx.images-amazon.com/images/I/51j185RNGCL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 12,
      title: 'The Dark Is Rising',
      author: 'Susan Cooper',
      cover: 'http://ecx.images-amazon.com/images/I/511uMcFfDiL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 11,
      title: 'The Power of Three ',
      author: 'Diana Wynne Jones',
      cover: 'http://ecx.images-amazon.com/images/I/51inc1bRsnL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 10,
      title: 'Drowned Ammet ',
      author: 'Diana Wynne Jones',
      cover: 'http://ecx.images-amazon.com/images/I/51wy1cz212L._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 9,
      title: 'Cart And Cwidder',
      author: 'Diana Wynne Jones',
      cover: 'http://ecx.images-amazon.com/images/I/51l5WaoehXL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 8,
      title: "Archer's Goon ",
      author: 'Diana Wynne Jones',
      cover: 'http://ecx.images-amazon.com/images/I/51iTMpo6+0L._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 7,
      title: 'Nothing to be Afraid Of',
      author: 'Jan Mark',
      cover: 'http://ecx.images-amazon.com/images/I/41QAZ3AAJDL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 6,
      title: 'The Hobbit',
      author: 'J R R Tolkien',
      cover: 'http://ecx.images-amazon.com/images/I/41aQPTCmeVL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 4,
      title: 'Divide And Rule',
      author: 'Jan Mark',
      cover: 'http://ecx.images-amazon.com/images/I/51GtYtQr-NL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 3,
      title: 'The Ennead',
      author: 'Jan Mark',
      cover: 'http://ecx.images-amazon.com/images/I/51-TbYCvYvL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    },
    {
      id: 1,
      title: 'The Lord Of The Rings',
      author: 'J R R Tolkien',
      cover: 'http://ecx.images-amazon.com/images/I/51eq24cRtRL._AA160_.jpg',
      owner: 'rattan.kevin.k@fakegmail.com'
    }
  ];

const reviews = [
  {
    id: 66,
    review: "What can I say?  I read it in 2 days when I was 12... and ever since have wanted to recapture that feeling of reading it for the first time.  The greatest book anyone has ever written - provided, I suspect, you read it at the right time in your life.  I don't know how I would react to it now, but this would be my Desert Island book.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 1
  },
  {
    id: 67,
    review: "One of the best Science Fiction books around.  Like much of Jan Mark's best work, it is not a happy tale - but it is an enormously powerful one.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 3
  },
  {
    id: 68,
    review: "I had the great privelege of knowing Jan Mark a little - though much more as a fan than a friend.  I asked her once whether the central character dies at the end: her reply - that no, the really sad thing was she did not think he did... Not the happiest of books, but it should be on everyone's Must Read list.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 4
  },
  {
    id: 69,
    review: "What can I say?  Read it at 11.  Fell in love with Tolkien. Have never fallen out again.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 6
  },
  {
    id: 70,
    review: "The title story - and another, \"William's Version\" are amongst the most perfect short stories anyone has ever written.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 7
  },
  {
    id: 71,
    review: "A wonderful fantasy that makes the everyday - from council workers to supermarkets - strange and magical. ",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 8
  },
  {
    id: 72,
    review: "Forget Harry Potter.  Diana Wynne Jones writes the best children's fantasy around - and this one is one of her best.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 9
  },
  {
    id: 73,
    review: "A haunting novel, full of betrayal and self-delusion, with an end that fizzes with so much genuine magic, it makes the hair stand up on the back of my neck.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 10
  },
  {
    id: 74,
    review: "How many children's books begin with one of the characters bullying another... and killing him.  Stunning.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 11
  },
  {
    id: 75,
    review: "The second book in the sequence, but the first really good one.  Many of the elements are familiar - child who discovers secret powers/high mission; the wild hunt - but they are put together with originaility and that indefinable quality which makes magic come alive.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 12
  },
  {
    id: 76,
    review: "The middle book in The Dark is Rising sequence, and a wonderful poignant tale.  It captures something of the strange magic that old folk customs have - the lingering mystery of peculiar behaviour kept up for no other reason than it has been the custom locally since time out of mind.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 13
  },
  {
    id: 77,
    review: "A simply perfect story.  ",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 14
  },
  {
    id: 78,
    review: "It seems from the Amazon reviews that not everyone likes this one.  Some of the criticism are particularly stupid (e.g. it's in the future, and they are not using the metric system), and I beg to differ.  One of my favourite Niven's (and that's saying a lot).",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 15
  },
  {
    id: 79,
    review: "Yet more brilliant aliens from Niven.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 16
  },
  {
    id: 80,
    review: "Niven's trademark wonderful aliens... and according to the premise, not quite so alien as they at first appear.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 17
  },
  {
    id: 81,
    review: "Some wonderful aliens in a fun set of stories.  I love puppeteers. ",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 18
  },
  {
    id: 82,
    review: "It's too short!  I want another thousand pages!  Clavell manages to transport you into a different world, and a different way of thinking - and along the way, to make you understand and sympathise with what appears at first site to be an appalling and alien culture.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 19
  },
  {
    id: 83,
    review: "Probably my favourite Flashman.  In a footnote, it lists one of my favourite pearls of wisdom - to paraphrase: if you think an Apache doesn't know right from wrong, wrong him and see what he does.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 20
  },
  {
    id: 84,
    review: "Another fine Flashman - the only man who was in the Thin Red Line, the charge of the Heavy Brigade and, of course, the charge of the Light Brigade.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 21
  },
  {
    id: 85,
    review: "Flashman squeals, bolts and rogers his way through China.  MacDonald Fraser on top form.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 22
  },
  {
    id: 86,
    review: "A wonderful romp through Kipling territory... but perhaps not quite as Kipling himself would have done it.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 23
  },
  {
    id: 87,
    review: "As good as a book as it is as a film.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 24
  },
  {
    id: 88,
    review: "\"Stand up children, your father's passing.\"  ",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 25
  },
  {
    id: 89,
    review: "Do the clothes make the man?  They do in this weird and wonderful romp.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 26
  },
  {
    id: 90,
    review: "It turns out that modern science is simply a dead end.  The real truth is in alchemy...  Just brilliant - and so much more aware of the conditional nature of current certainties than lesser SF.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 27
  },
  {
    id: 91,
    review: "What can I say?  Barry Bailey casually throws in more ideas on a single page than most writers put in a single book.  A man perhaps more admired by other SF writers than known amongst the general public. \n<p>In \"Collision\", an archaeologist in a racist future realises the ruins he is working on are getting younger, not older....</p>",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 28
  },
  {
    id: 92,
    review: "More alchemy from Bailey - and a man with an existential problem to end all existential problems...",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 29
  },
  {
    id: 93,
    review: "Where to begin?  A fun romp through different ideas of time and reality.  Nobody does this kind of thing better.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 30
  },
  {
    id: 94,
    review: "Bailey does the soul.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 31
  },
  {
    id: 95,
    review: "Barry Bailey doing his thing - this time riffing on gambling and luck.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 32
  },
  {
    id: 96,
    review: "I can maim and I can kill, with my Zen Gun....",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 33
  },
  {
    id: 97,
    review: "I read these stories, and felt my mind expanding.  The best collection of SF stories there is.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 34
  },
  {
    id: 98,
    review: "The boyhood of Merlin; neither quite realist nor heavily fantasy - but superb and original.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 35
  },
  {
    id: 99,
    review: "Sequel to the Crystal Cave.  This time it is the childhood of Arthur seen from the point of view of Merlin. ",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 36
  },
  {
    id: 100,
    review: "Not a happy read - what did you expect from the title? - but a magnificent book.  A telepath coming to terms with the fading of his powers.  If this were not SF, it would be regarded as a classic.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 37
  },
  {
    id: 101,
    review: "A vision of a world like ancient Egypt, but not...  Science Fiction, but with a strong fantasy feel.  Wonderful.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 38
  },
  {
    id: 102,
    review: "I find it depressing that this is not as much a part of everyone's childhood as, say, Winnie the Pooh.  If you know a child who has not read this, buy them a copy.  Something is badly wrong with a world where this is out of print.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 39
  },
  {
    id: 103,
    review: "Blew me away when I was eight.  Still does.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 40
  },
  {
    id: 104,
    review: "Forget the film.  Read the book.  Then burn your copy of the film - if you have one.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 41
  },
  {
    id: 105,
    review: "The fosterites, conga-ing for Jesus, remain one of the most powerful images of happy-clappies gone mad that I have ever come across.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 42
  },
  {
    id: 106,
    review: "I read this when I was 11 or so - and this was the book that made me realise that I wasn't just a reader: I was a Science Fiction reader.  The first of the 3 stories is far the best, and its rare for a couple of years to go by without my having re-read it.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 43
  },
  {
    id: 107,
    review: "The US revolution (mutiny!), but the rebelling colony is the moon (and it's a lot more like Australia than the US).  Great fun - and the first example in fiction of a conscious computer.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 44
  },
  {
    id: 108,
    review: "\"All you Zombies\" is the perfect Time Travel story.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 45
  },
  {
    id: 109,
    review: "One of the best of Heinlein's children's books.  SF, but with \"dragons\".  Charming.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 46
  },
  {
    id: 110,
    review: "The original and best story about a spaceship whose inhabitants have forgotten it is a ship, and come to believe that it is a world",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 47
  },
  {
    id: 111,
    review: "Classic Heinlein - time travel and robots.  Lots of fun.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 48
  },
  {
    id: 112,
    review: "A vision of the media as it could become... arguably has beocome in the years since it was written. ",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 49
  },
  {
    id: 113,
    review: "The final paragraph is missing.  It would read: \"and then the world blew up\", but what the heck.  Great book.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 50
  },
  {
    id: 114,
    review: "I read \"Fire\" for the first time about three years ago (thanks for the recommendation, Bernard).  Since then I've re-read it twice.  A stunning novel, with an astonishing breadth of imagination.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 51
  },
  {
    id: 115,
    review: "An elegant alternate history story.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 52
  },
  {
    id: 116,
    review: "Magic as it should be.  The first of the Earthsea books, and it remains one of the best children's fantasy novels.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 53
  },
  {
    id: 117,
    review: "Middle of the original three Earthsea books.  Can be harder to get into, but repays the effort.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 54
  },
  {
    id: 118,
    review: "The third Earthsea book - and the last one to read.  Don't bother with the sequels; they would have been good in themselves, but they come from such a different viewpoint from the original three that they don't really work together.  This one is a medition on death, meaning and existence - and has some of the greatest images ever committed to paper.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 55
  },
  {
    id: 119,
    review: "The last couple of pages blow it, rather, but teh rest of it is a superb claustrophobic tale.  For me, this is far Garner's best book.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 56
  },
  {
    id: 120,
    review: "Not a word out of place.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 57
  },
  {
    id: 121,
    review: "I once michievously piled furniture into a hotel lift with Thomas M. Disch.  Not relevant, I know - but how many people can say that?  For me, this is his best book.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 58
  },
  {
    id: 122,
    review: "A great play - at least to read on the page.  I've still never managed to catch a production.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 59
  },
  {
    id: 123,
    review: "\"Chairman of the Quatrefoil bezzlers\".  Need I say more?",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 60
  },
  {
    id: 124,
    review: "The man is appalling, but the title story of this collection is just perfect.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 61
  },
  {
    id: 125,
    review: "The first - and far the best - of Pullman's trilogy.  Number two suffers from middle book syndrome, and number three is a cop out: what is built up to be a true revolt against God turns into an attack not on the creator, but on some other being who is claiming the credit.  In other - yawn - words, just another attack on -yawn - the established church.  But this one, with its ideas of the changeabale daemons/souls of children, the fixed souls of adults and great chrome in the shape of armoured Polar Bears, is a delight.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 62
  },
  {
    id: 126,
    review: "Not an antidote to Starship Troopers - more a novel about conscripts, where Starship Troopers is about volunteers.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 63
  },
  {
    id: 127,
    review: "Why doesn't someone make a movie of this, instead of all the rubbish they keep churning out.  A book that is flawed, and creaky in places - but utterly wonderful.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 64
  },
  {
    id: 128,
    review: "Feral children live amongst us, facing dangers like the heros of ancient sagas.  Unique and brilliant",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 65
  },
  {
    id: 129,
    review: "The feral Peter Pans massacre things that look and sound remarkably like Wombles...",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 66
  },
  {
    id: 130,
    review: "Magical story of time travel and friendship.",
    owner: "rattan.kevin.k@fakegmail.com",
    name: "Kevin Rattan",
    bookId: 67
  },
  {
    id: 131,
    review: "A timeless epic that continues to captivate readers with its richly imagined world, unforgettable characters, and profound themes of good versus evil.",
    owner: "mwhitwamd@fakemail.ru",
    name: "Mose Whitwam",
    bookId: 1
  },
  {
    id: 132,
    review: "Tolkien's masterful prose brings Middle-earth to life, making you feel like you're right there alongside Frodo and the Fellowship on their perilous journey.",
    owner: "kbridgement6@fakejalbum.net",
    name: "Kary Bridgement",
    bookId: 1
  },
  {
    id: 133,
    review: "An adventure story that transcends genre, offering insights into courage, friendship, and the enduring power of hope.",
    owner: "larnatt5@fakefoxnews.com",
    name: "Luz Arnatt",
    bookId: 1
  },
  {
    id: 134,
    review: "The Lord of the Rings is a masterpiece of fantasy literature, influencing generations of writers and readers with its profound impact.",
    owner: "ghuckett8@fakeprinceton.edu",
    name: "Griffin Huckett",
    bookId: 1
  },
  {
    id: 135,
    review: "A complex and rewarding read that rewards multiple re-readings, revealing new layers of meaning and depth with each encounter.",
    owner: "emohanb@fakeredcross.org",
    name: "Elly Mohan",
    bookId: 1
  },
  {
    id: 136,
    review: "A thought-provoking and unsettling exploration of childhood and the complexities of human relationships.",
    owner: "esaffen0@fakeyale.edu",
    name: "Edithe Saffen",
    bookId: 3
  },
  {
    id: 137,
    review: "Mark's writing is both darkly humorous and deeply insightful, leaving a lasting impression on the reader.",
    owner: "mwhitwamd@fakemail.ru",
    name: "Mose Whitwam",
    bookId: 3
  },
  {
    id: 138,
    review: "A unique and unforgettable coming-of-age story that challenges conventional notions of childhood innocence.",
    owner: "hamdohr1@fakejapanpost.jp",
    name: "Helyn Amdohr",
    bookId: 3
  },
  {
    id: 139,
    review: "A powerful and disturbing novel that examines the impact of war and the psychological effects of trauma.",
    owner: "esaffen0@fakeyale.edu",
    name: "Edithe Saffen",
    bookId: 4
  },
  {
    id: 140,
    review: "Mark's writing is raw and unflinching, forcing readers to confront uncomfortable truths about human nature.",
    owner: "bmenico2@fakealibaba.com",
    name: "Brose Menico",
    bookId: 4
  },
  {
    id: 141,
    review: "A challenging but ultimately rewarding read that stays with you long after you finish the book.",
    owner: "bmenico2@fakealibaba.com",
    name: "Brose Menico",
    bookId: 4
  },
  {
    id: 274,
    review: "A challenging but rewarding read that will stay with you long after you finish the book.",
    owner: "emohanb@fakeredcross.org",
    name: "Elly Mohan",
    bookId: 49
  },
  {
    id: 142,
    review: "A classic children's fantasy that continues to enchant readers of all ages with its whimsical world and endearing characters.",
    owner: "ncasali4@fakethetimes.co.uk",
    name: "Norry Casali",
    bookId: 6
  },
  {
    id: 143,
    review: "Tolkien's imaginative storytelling and vivid descriptions bring the world of Middle-earth to life in a truly magical way.",
    owner: "esaffen0@fakeyale.edu",
    name: "Edithe Saffen",
    bookId: 6
  },
  {
    id: 144,
    review: "A heartwarming tale of courage, friendship, and the importance of perseverance in the face of adversity.",
    owner: "kefford7@fakeusnews.com",
    name: "Keefe Efford",
    bookId: 6
  },
  {
    id: 145,
    review: "A poignant and moving story about childhood fears and the power of friendship to overcome them.",
    owner: "esaffen0@fakeyale.edu",
    name: "Edithe Saffen",
    bookId: 7
  },
  {
    id: 146,
    review: "Mark's writing is simple yet profound, capturing the essence of childhood anxieties and the importance of finding comfort in others.",
    owner: "hamdohr1@fakejapanpost.jp",
    name: "Helyn Amdohr",
    bookId: 7
  },
  {
    id: 147,
    review: "A heartwarming and reassuring tale that reminds us that even in the face of fear, we are not alone.",
    owner: "kefford7@fakeusnews.com",
    name: "Keefe Efford",
    bookId: 7
  },
  {
    id: 148,
    review: "A witty and imaginative fantasy that subverts traditional fairy tale tropes with humor and intelligence.",
    owner: "vjannexe@fakereference.com",
    name: "Vanny Jannex",
    bookId: 8
  },
  {
    id: 149,
    review: "Jones's unique voice shines through in this quirky and entertaining story, filled with memorable characters and surprising twists.",
    owner: "mwhitwamd@fakemail.ru",
    name: "Mose Whitwam",
    bookId: 8
  },
  {
    id: 150,
    review: "A delightful read that will appeal to both children and adults who enjoy a touch of the absurd.",
    owner: "slatimerc@fakelulu.com",
    name: "Shandeigh Latimer",
    bookId: 8
  },
  {
    id: 151,
    review: "A charming and whimsical story with a unique blend of fantasy and humor.",
    owner: "larnatt5@fakefoxnews.com",
    name: "Luz Arnatt",
    bookId: 9
  },
  {
    id: 152,
    review: "Jones's imagination is on full display in this delightful tale, filled with quirky characters and unexpected adventures.",
    owner: "emohanb@fakeredcross.org",
    name: "Elly Mohan",
    bookId: 9
  },
  {
    id: 153,
    review: "A perfect escape for readers of all ages who enjoy a bit of magic and whimsy.",
    owner: "mwhitwamd@fakemail.ru",
    name: "Mose Whitwam",
    bookId: 9
  },
  {
    id: 154,
    review: "A captivating fantasy with a unique blend of humor, adventure, and social commentary.",
    owner: "kbridgement6@fakejalbum.net",
    name: "Kary Bridgement",
    bookId: 10
  },
  {
    id: 155,
    review: "Jones's masterful storytelling draws readers into a richly imagined world filled with eccentric characters and surprising twists.",
    owner: "hamdohr1@fakejapanpost.jp",
    name: "Helyn Amdohr",
    bookId: 10
  },
  {
    id: 156,
    review: "A thought-provoking and entertaining read that will stay with you long after you finish the book.",
    owner: "larnatt5@fakefoxnews.com",
    name: "Luz Arnatt",
    bookId: 10
  },
  {
    id: 157,
    review: "A thrilling fantasy adventure with a unique blend of magic, mystery, and humor.",
    owner: "kbridgement6@fakejalbum.net",
    name: "Kary Bridgement",
    bookId: 11
  },
  {
    id: 158,
    review: "Jones's imaginative storytelling and witty dialogue make this a truly captivating read for readers of all ages.",
    owner: "kmoreing3@fakephotobucket.com",
    name: "Karoline Moreing",
    bookId: 11
  },
  {
    id: 159,
    review: "A fast-paced and exciting story that will keep you turning the pages until the very end.",
    owner: "ghuckett8@fakeprinceton.edu",
    name: "Griffin Huckett",
    bookId: 11
  },
  {
    id: 160,
    review: "A powerful and atmospheric fantasy that explores themes of good versus evil, courage, and the importance of family.",
    owner: "emohanb@fakeredcross.org",
    name: "Elly Mohan",
    bookId: 12
  },
  {
    id: 161,
    review: "Cooper's vivid descriptions and suspenseful storytelling create a truly immersive reading experience.",
    owner: "vjannexe@fakereference.com",
    name: "Vanny Jannex",
    bookId: 12
  },
  {
    id: 162,
    review: "A classic of the fantasy genre that continues to captivate readers with its timeless themes and enduring magic.",
    owner: "kbridgement6@fakejalbum.net",
    name: "Kary Bridgement",
    bookId: 12
  },
  {
    id: 163,
    review: "A captivating sequel that expands the world of The Dark Is Rising and deepens the emotional stakes for Will and his siblings.",
    owner: "larnatt5@fakefoxnews.com",
    name: "Luz Arnatt",
    bookId: 13
  },
  {
    id: 164,
    review: "Cooper's writing is even more powerful in this installment, creating a sense of dread and anticipation that keeps readers on the edge of their seats.",
    owner: "esaffen0@fakeyale.edu",
    name: "Edithe Saffen",
    bookId: 13
  },
  {
    id: 165,
    review: "A must-read for fans of the series, and a compelling entry point for new readers.",
    owner: "mwhitwamd@fakemail.ru",
    name: "Mose Whitwam",
    bookId: 13
  },
  {
    id: 166,
    review: "A thrilling conclusion to the Dark Is Rising series that brings the epic battle between good and evil to a satisfying and emotionally resonant conclusion.",
    owner: "emohanb@fakeredcross.org",
    name: "Elly Mohan",
    bookId: 14
  },
  {
    id: 167,
    review: "Cooper delivers a powerful and moving climax to her epic fantasy, leaving readers with a sense of wonder and awe.",
    owner: "slatimerc@fakelulu.com",
    name: "Shandeigh Latimer",
    bookId: 14
  },
  {
    id: 168,
    review: "A satisfying conclusion to a remarkable series that will stay with readers long after the final page.",
    owner: "mwhitwamd@fakemail.ru",
    name: "Mose Whitwam",
    bookId: 14
  },
  {
    id: 169,
    review: "A thought-provoking and insightful exploration of humanity's place in the universe and the challenges of first contact.",
    owner: "ghuckett8@fakeprinceton.edu",
    name: "Griffin Huckett",
    bookId: 15
  },
  {
    id: 170,
    review: "Niven's masterful world-building and engaging characters make this a compelling and thought-provoking read.",
    owner: "ghuckett8@fakeprinceton.edu",
    name: "Griffin Huckett",
    bookId: 15
  },
  {
    id: 171,
    review: "A classic of science fiction that continues to resonate with readers today.",
    owner: "bmenico2@fakealibaba.com",
    name: "Brose Menico",
    bookId: 15
  },
  {
    id: 172,
    review: "A mind-bending and imaginative exploration of alien cultures and the human condition.",
    owner: "ghuckett8@fakeprinceton.edu",
    name: "Griffin Huckett",
    bookId: 16
  },
  {
    id: 173,
    review: "Niven's creativity shines through in this unique and unforgettable story, filled with bizarre creatures and mind-boggling concepts.",
    owner: "esaffen0@fakeyale.edu",
    name: "Edithe Saffen",
    bookId: 16
  },
  {
    id: 174,
    review: "A challenging but rewarding read for fans of science fiction who enjoy thought-provoking and imaginative stories.",
    owner: "vjannexe@fakereference.com",
    name: "Vanny Jannex",
    bookId: 16
  },
  {
    id: 175,
    review: "A gripping and action-packed story that explores the complexities of power and the dangers of unchecked ambition.",
    owner: "hamdohr1@fakejapanpost.jp",
    name: "Helyn Amdohr",
    bookId: 17
  },
  {
    id: 176,
    review: "Niven's vivid descriptions and fast-paced action will keep you turning the pages until the very end.",
    owner: "ytolossia@fakecdbaby.com",
    name: "Yoshi Tolossi",
    bookId: 17
  },
  {
    id: 177,
    review: "A classic of space opera that continues to entertain and thrill readers today.",
    owner: "slatimerc@fakelulu.com",
    name: "Shandeigh Latimer",
    bookId: 17
  },
  {
    id: 178,
    review: "A thrilling space opera that explores the dangers of unchecked technological advancement and the fragility of human life.",
    owner: "hamdohr1@fakejapanpost.jp",
    name: "Helyn Amdohr",
    bookId: 18
  },
  {
    id: 179,
    review: "Niven's imaginative world-building and suspenseful storytelling make this a truly captivating read.",
    owner: "ghuckett8@fakeprinceton.edu",
    name: "Griffin Huckett",
    bookId: 18
  },
  {
    id: 180,
    review: "A fast-paced and exciting adventure that will appeal to fans of science fiction and space opera.",
    owner: "ghuckett8@fakeprinceton.edu",
    name: "Griffin Huckett",
    bookId: 18
  },
  {
    id: 181,
    review: "A sweeping epic that immerses you in the vibrant and complex world of 17th-century Japan. Clavell's meticulous research shines through in every detail, from the intricate social hierarchy to the stunning portrayal of Japanese culture.",
    owner: "ytolossia@fakecdbaby.com",
    name: "Yoshi Tolossi",
    bookId: 19
  },
  {
    id: 182,
    review: "A thrilling adventure story that explores themes of honor, loyalty, and the clash of cultures. The characters are richly drawn and unforgettable, and the plot is full of unexpected twists and turns.",
    owner: "ncasali4@fakethetimes.co.uk",
    name: "Norry Casali",
    bookId: 19
  },
  {
    id: 183,
    review: "Shogun is a masterpiece of historical fiction that will stay with you long after you finish reading it. It's a powerful and moving story that offers a profound understanding of human nature and the enduring power of the human spirit.",
    owner: "emohanb@fakeredcross.org",
    name: "Elly Mohan",
    bookId: 19
  },
  {
    id: 184,
    review: "A captivating blend of history, adventure, and romance. Clavell's writing is vivid and evocative, transporting you to another time and place.",
    owner: "larnatt5@fakefoxnews.com",
    name: "Luz Arnatt",
    bookId: 19
  },
  {
    id: 185,
    review: "A must-read for anyone interested in Japanese history and culture. Shogun is a rich and rewarding read that offers a unique and insightful perspective on this fascinating period.",
    owner: "ytolossia@fakecdbaby.com",
    name: "Yoshi Tolossi",
    bookId: 19
  },
  {
    id: 186,
    review: "Another hilarious and unforgettable adventure with Harry Flashman, the consummate coward who somehow always finds himself in the thick of history's most famous battles.",
    owner: "kbridgement6@fakejalbum.net",
    name: "Kary Bridgement",
    bookId: 20
  },
  {
    id: 187,
    review: "Fraser's wit and sharp social commentary shine through in this installment, offering a darkly comedic perspective on the American Civil War.",
    owner: "esaffen0@fakeyale.edu",
    name: "Edithe Saffen",
    bookId: 20
  },
  {
    id: 188,
    review: "A fast-paced and entertaining read that will leave you laughing out loud at Flashman's outrageous exploits.",
    owner: "slatimerc@fakelulu.com",
    name: "Shandeigh Latimer",
    bookId: 20
  },
  {
    id: 189,
    review: "Flashman at his most outrageous in this installment, where he finds himself embroiled in the Crimean War.",
    owner: "kefford7@fakeusnews.com",
    name: "Keefe Efford",
    bookId: 21
  },
  {
    id: 190,
    review: "Fraser's masterful use of historical detail brings the horrors and absurdities of war to life with a darkly comedic touch.",
    owner: "larnatt5@fakefoxnews.com",
    name: "Luz Arnatt",
    bookId: 21
  },
  {
    id: 191,
    review: "A witty and engaging read that will appeal to fans of historical fiction and those who appreciate a good laugh at the expense of human folly.",
    owner: "ytolossia@fakecdbaby.com",
    name: "Yoshi Tolossi",
    bookId: 21
  },
  {
    id: 192,
    review: "Flashman faces his most terrifying challenge yet in this installment, encountering the legendary Shaolin monks in China.",
    owner: "phabershaw9@fakesquidoo.com",
    name: "Pat Habershaw",
    bookId: 22
  },
  {
    id: 193,
    review: "Fraser's imagination is on full display in this book, creating a vivid and unforgettable portrait of 19th-century China.",
    owner: "slatimerc@fakelulu.com",
    name: "Shandeigh Latimer",
    bookId: 22
  },
  {
    id: 194,
    review: "A thrilling and hilarious adventure that will keep you turning the pages until the very end.",
    owner: "kefford7@fakeusnews.com",
    name: "Keefe Efford",
    bookId: 22
  },
  {
    id: 195,
    review: "Fraser's meticulous research and sharp wit make this a fascinating and entertaining look at a pivotal period in history.",
    owner: "kefford7@fakeusnews.com",
    name: "Keefe Efford",
    bookId: 23
  },
  {
    id: 196,
    review: "A witty and insightful commentary on imperialism and the human cost of political ambition.",
    owner: "phabershaw9@fakesquidoo.com",
    name: "Pat Habershaw",
    bookId: 23
  },
  {
    id: 197,
    review: "A powerful and disturbing novel that explores the themes of power, control, and the human spirit.",
    owner: "slatimerc@fakelulu.com",
    name: "Shandeigh Latimer",
    bookId: 24
  },
  {
    id: 198,
    review: "Kesey's writing is raw and unflinching, creating a vivid and unforgettable portrait of life inside a mental institution.",
    owner: "vjannexe@fakereference.com",
    name: "Vanny Jannex",
    bookId: 24
  },
  {
    id: 199,
    review: "A classic of American literature that continues to resonate with readers today.",
    owner: "kmoreing3@fakephotobucket.com",
    name: "Karoline Moreing",
    bookId: 24
  },
  {
    id: 200,
    review: "A timeless classic about racial injustice and the importance of standing up for what is right.",
    owner: "slatimerc@fakelulu.com",
    name: "Shandeigh Latimer",
    bookId: 25
  },
  {
    id: 201,
    review: "Lee's powerful storytelling and unforgettable characters make this a truly moving and unforgettable reading experience.",
    owner: "phabershaw9@fakesquidoo.com",
    name: "Pat Habershaw",
    bookId: 25
  },
  {
    id: 202,
    review: "A must-read for anyone who values justice, compassion, and the power of human kindness.",
    owner: "ytolossia@fakecdbaby.com",
    name: "Yoshi Tolossi",
    bookId: 25
  },
  {
    id: 203,
    review: "A thought-provoking and imaginative exploration of the nature of time travel and the consequences of altering the past.",
    owner: "ncasali4@fakethetimes.co.uk",
    name: "Norry Casali",
    bookId: 26
  },
  {
    id: 204,
    review: "Bayley's intricate plot and complex characters create a truly captivating and thought-provoking reading experience.",
    owner: "esaffen0@fakeyale.edu",
    name: "Edithe Saffen",
    bookId: 26
  },
  {
    id: 205,
    review: "A challenging but rewarding read for fans of science fiction who enjoy complex and thought-provoking stories.",
    owner: "kmoreing3@fakephotobucket.com",
    name: "Karoline Moreing",
    bookId: 26
  },
  {
    id: 206,
    review: "A fast-paced and exciting space opera that explores the dangers of interstellar travel and the challenges of human expansion.",
    owner: "ytolossia@fakecdbaby.com",
    name: "Yoshi Tolossi",
    bookId: 27
  },
  {
    id: 207,
    review: "Bayley's imaginative world-building and engaging characters make this a thrilling and unforgettable adventure.",
    owner: "esaffen0@fakeyale.edu",
    name: "Edithe Saffen",
    bookId: 27
  },
  {
    id: 208,
    review: "A classic of science fiction that continues to entertain and inspire readers today.",
    owner: "esaffen0@fakeyale.edu",
    name: "Edithe Saffen",
    bookId: 27
  },
  {
    id: 209,
    review: "A mind-bending time travel adventure that explores the paradoxes and dangers of meddling with the past.",
    owner: "ytolossia@fakecdbaby.com",
    name: "Yoshi Tolossi",
    bookId: 28
  },
  {
    id: 210,
    review: "Bayley's intricate plot and complex characters will keep you guessing until the very end.",
    owner: "hamdohr1@fakejapanpost.jp",
    name: "Helyn Amdohr",
    bookId: 28
  },
  {
    id: 211,
    review: "A challenging but rewarding read for fans of science fiction who enjoy thought-provoking and imaginative stories.",
    owner: "hamdohr1@fakejapanpost.jp",
    name: "Helyn Amdohr",
    bookId: 28
  },
  {
    id: 212,
    review: "A sweeping space opera that explores the rise and fall of civilizations across the galaxy.",
    owner: "ytolossia@fakecdbaby.com",
    name: "Yoshi Tolossi",
    bookId: 29
  },
  {
    id: 213,
    review: "Bayley's masterful world-building and epic scope make this a truly unforgettable reading experience.",
    owner: "phabershaw9@fakesquidoo.com",
    name: "Pat Habershaw",
    bookId: 29
  },
  {
    id: 214,
    review: "A classic of science fiction that continues to inspire and amaze readers today.",
    owner: "hamdohr1@fakejapanpost.jp",
    name: "Helyn Amdohr",
    bookId: 29
  },
  {
    id: 215,
    review: "A dark and disturbing vision of a future where technology has spiraled out of control.",
    owner: "ghuckett8@fakeprinceton.edu",
    name: "Griffin Huckett",
    bookId: 30
  },
  {
    id: 216,
    review: "Bayley's writing is both powerful and unsettling, creating a truly chilling portrait of a dystopian future.",
    owner: "vjannexe@fakereference.com",
    name: "Vanny Jannex",
    bookId: 30
  },
  {
    id: 217,
    review: "A thought-provoking and unsettling read that will stay with you long after you finish the book.",
    owner: "larnatt5@fakefoxnews.com",
    name: "Luz Arnatt",
    bookId: 30
  },
  {
    id: 218,
    review: "A thought-provoking exploration of the nature of consciousness and the potential dangers of artificial intelligence.",
    owner: "vjannexe@fakereference.com",
    name: "Vanny Jannex",
    bookId: 31
  },
  {
    id: 219,
    review: "Bayley's writing is both insightful and entertaining, making this a compelling and thought-provoking read.",
    owner: "larnatt5@fakefoxnews.com",
    name: "Luz Arnatt",
    bookId: 31
  },
  {
    id: 220,
    review: "A classic of science fiction that continues to resonate with readers today.",
    owner: "kmoreing3@fakephotobucket.com",
    name: "Karoline Moreing",
    bookId: 31
  },
  {
    id: 221,
    review: "A sprawling and ambitious space opera that explores the history and culture of a vast and complex galactic civilization.",
    owner: "ghuckett8@fakeprinceton.edu",
    name: "Griffin Huckett",
    bookId: 32
  },
  {
    id: 222,
    review: "Bayley's intricate world-building and engaging characters make this a truly immersive reading experience.",
    owner: "esaffen0@fakeyale.edu",
    name: "Edithe Saffen",
    bookId: 32
  },
  {
    id: 223,
    review: "A challenging but rewarding read for fans of science fiction who enjoy complex and thought-provoking stories.",
    owner: "phabershaw9@fakesquidoo.com",
    name: "Pat Habershaw",
    bookId: 32
  },
  {
    id: 224,
    review: "A fast-paced and exciting thriller that explores the dangers of unchecked technological advancement.",
    owner: "kbridgement6@fakejalbum.net",
    name: "Kary Bridgement",
    bookId: 33
  },
  {
    id: 225,
    review: "Bayley's writing is both suspenseful and insightful, making this a truly captivating read.",
    owner: "ghuckett8@fakeprinceton.edu",
    name: "Griffin Huckett",
    bookId: 33
  },
  {
    id: 226,
    review: "A classic of science fiction that continues to entertain and thrill readers today.",
    owner: "vjannexe@fakereference.com",
    name: "Vanny Jannex",
    bookId: 33
  },
  {
    id: 227,
    review: "A thought-provoking exploration of the nature of reality and the limitations of human understanding.",
    owner: "bmenico2@fakealibaba.com",
    name: "Brose Menico",
    bookId: 34
  },
  {
    id: 228,
    review: "Bayley's writing is both insightful and imaginative, creating a truly unique and unforgettable reading experience.",
    owner: "ghuckett8@fakeprinceton.edu",
    name: "Griffin Huckett",
    bookId: 34
  },
  {
    id: 229,
    review: "A challenging but rewarding read for fans of science fiction who enjoy thought-provoking and mind-bending stories.",
    owner: "kefford7@fakeusnews.com",
    name: "Keefe Efford",
    bookId: 34
  },
  {
    id: 230,
    review: "A captivating historical fantasy that explores the legends of King Arthur and the Knights of the Round Table.",
    owner: "hamdohr1@fakejapanpost.jp",
    name: "Helyn Amdohr",
    bookId: 35
  },
  {
    id: 231,
    review: "Stewart's writing is both lyrical and evocative, bringing the myths and legends of ancient Britain to life.",
    owner: "emohanb@fakeredcross.org",
    name: "Elly Mohan",
    bookId: 35
  },
  {
    id: 232,
    review: "A timeless classic that continues to enchant readers with its magic and mystery.",
    owner: "bmenico2@fakealibaba.com",
    name: "Brose Menico",
    bookId: 35
  },
  {
    id: 233,
    review: "A suspenseful and atmospheric mystery set against the backdrop of the beautiful Welsh countryside.",
    owner: "esaffen0@fakeyale.edu",
    name: "Edithe Saffen",
    bookId: 36
  },
  {
    id: 234,
    review: "Stewart's writing is both lyrical and evocative, creating a truly immersive reading experience.",
    owner: "mwhitwamd@fakemail.ru",
    name: "Mose Whitwam",
    bookId: 36
  },
  {
    id: 235,
    review: "A captivating and suspenseful read that will keep you guessing until the very end.",
    owner: "vjannexe@fakereference.com",
    name: "Vanny Jannex",
    bookId: 36
  },
  {
    id: 236,
    review: "A dark and disturbing novel that explores the psychological effects of fame and the pressures of the entertainment industry.",
    owner: "hamdohr1@fakejapanpost.jp",
    name: "Helyn Amdohr",
    bookId: 37
  },
  {
    id: 237,
    review: "Silverberg's writing is both insightful and unsettling, creating a vivid and unforgettable portrait of a man struggling to maintain his sanity.",
    owner: "slatimerc@fakelulu.com",
    name: "Shandeigh Latimer",
    bookId: 37
  },
  {
    id: 238,
    review: "A challenging but rewarding read that will stay with you long after you finish the book.",
    owner: "slatimerc@fakelulu.com",
    name: "Shandeigh Latimer",
    bookId: 37
  },
  {
    id: 239,
    review: "A thrilling adventure story that explores the power of friendship and the importance of standing up for what is right.",
    owner: "esaffen0@fakeyale.edu",
    name: "Edithe Saffen",
    bookId: 38
  },
  {
    id: 240,
    review: "Dickinson's writing is both suspenseful and engaging, keeping readers on the edge of their seats.",
    owner: "emohanb@fakeredcross.org",
    name: "Elly Mohan",
    bookId: 38
  },
  {
    id: 241,
    review: "A captivating read for young adults and adults alike.",
    owner: "bmenico2@fakealibaba.com",
    name: "Brose Menico",
    bookId: 38
  },
  {
    id: 242,
    review: "A whimsical and imaginative fantasy that explores the magic and mystery of childhood.",
    owner: "slatimerc@fakelulu.com",
    name: "Shandeigh Latimer",
    bookId: 39
  },
  {
    id: 243,
    review: "The author's unique and playful style makes this a truly delightful and unforgettable read.",
    owner: "hamdohr1@fakejapanpost.jp",
    name: "Helyn Amdohr",
    bookId: 39
  },
  {
    id: 244,
    review: "A perfect escape for readers of all ages who enjoy a bit of magic and whimsy.",
    owner: "ghuckett8@fakeprinceton.edu",
    name: "Griffin Huckett",
    bookId: 39
  },
  {
    id: 245,
    review: "A captivating fantasy adventure that explores the power of courage and the importance of friendship.",
    owner: "ncasali4@fakethetimes.co.uk",
    name: "Norry Casali",
    bookId: 40
  },
  {
    id: 246,
    review: "Manning's vivid descriptions and engaging characters make this a truly immersive reading experience.",
    owner: "kefford7@fakeusnews.com",
    name: "Keefe Efford",
    bookId: 40
  },
  {
    id: 247,
    review: "A classic of children's fantasy that continues to enchant readers today.",
    owner: "esaffen0@fakeyale.edu",
    name: "Edithe Saffen",
    bookId: 40
  },
  {
    id: 248,
    review: "A controversial and thought-provoking novel that explores the themes of war, duty, and the nature of freedom.",
    owner: "bmenico2@fakealibaba.com",
    name: "Brose Menico",
    bookId: 41
  },
  {
    id: 249,
    review: "Heinlein's powerful and provocative ideas make this a truly unforgettable and thought-provoking read.",
    owner: "kmoreing3@fakephotobucket.com",
    name: "Karoline Moreing",
    bookId: 41
  },
  {
    id: 250,
    review: "A classic of science fiction that continues to spark debate and discussion today.",
    owner: "hamdohr1@fakejapanpost.jp",
    name: "Helyn Amdohr",
    bookId: 41
  },
  {
    id: 251,
    review: "A groundbreaking and influential novel that explores the nature of religion, sexuality, and the human condition.",
    owner: "kbridgement6@fakejalbum.net",
    name: "Kary Bridgement",
    bookId: 42
  },
  {
    id: 252,
    review: "Heinlein's provocative ideas and insightful social commentary make this a truly unforgettable and thought-provoking read.",
    owner: "slatimerc@fakelulu.com",
    name: "Shandeigh Latimer",
    bookId: 42
  },
  {
    id: 253,
    review: "A classic of science fiction that continues to challenge and inspire readers today.",
    owner: "hamdohr1@fakejapanpost.jp",
    name: "Helyn Amdohr",
    bookId: 42
  },
  {
    id: 254,
    review: "A fast-paced and exciting adventure story set in a future where technology has transformed society.",
    owner: "slatimerc@fakelulu.com",
    name: "Shandeigh Latimer",
    bookId: 43
  },
  {
    id: 255,
    review: "Heinlein's imaginative world-building and engaging characters make this a thrilling and unforgettable read.",
    owner: "ncasali4@fakethetimes.co.uk",
    name: "Norry Casali",
    bookId: 43
  },
  {
    id: 256,
    review: "A classic of science fiction that continues to entertain and inspire readers today.",
    owner: "larnatt5@fakefoxnews.com",
    name: "Luz Arnatt",
    bookId: 43
  },
  {
    id: 257,
    review: "A thought-provoking and insightful exploration of libertarianism and the nature of freedom.",
    owner: "larnatt5@fakefoxnews.com",
    name: "Luz Arnatt",
    bookId: 44
  },
  {
    id: 258,
    review: "Heinlein's powerful ideas and engaging prose make this a truly unforgettable and thought-provoking read.",
    owner: "kefford7@fakeusnews.com",
    name: "Keefe Efford",
    bookId: 44
  },
  {
    id: 259,
    review: "A classic of science fiction that continues to spark debate and discussion today.",
    owner: "phabershaw9@fakesquidoo.com",
    name: "Pat Habershaw",
    bookId: 44
  },
  {
    id: 260,
    review: "A witty and engaging satire that explores the absurdities of bureaucracy and the human condition.",
    owner: "mwhitwamd@fakemail.ru",
    name: "Mose Whitwam",
    bookId: 45
  },
  {
    id: 261,
    review: "Heinlein's sharp wit and insightful social commentary make this a truly entertaining and thought-provoking read.",
    owner: "kefford7@fakeusnews.com",
    name: "Keefe Efford",
    bookId: 45
  },
  {
    id: 262,
    review: "A classic of science fiction that continues to resonate with readers today.",
    owner: "esaffen0@fakeyale.edu",
    name: "Edithe Saffen",
    bookId: 45
  },
  {
    id: 263,
    review: "A fast-paced and exciting adventure story that explores the challenges of interstellar travel and the dangers of alien encounters.",
    owner: "vjannexe@fakereference.com",
    name: "Vanny Jannex",
    bookId: 46
  },
  {
    id: 264,
    review: "Heinlein's imaginative world-building and engaging characters make this a thrilling and unforgettable read.",
    owner: "kefford7@fakeusnews.com",
    name: "Keefe Efford",
    bookId: 46
  },
  {
    id: 265,
    review: "A classic of science fiction that continues to entertain and inspire readers today.",
    owner: "esaffen0@fakeyale.edu",
    name: "Edithe Saffen",
    bookId: 46
  },
  {
    id: 266,
    review: "A gripping and suspenseful story that explores the challenges of survival in a hostile environment.",
    owner: "ytolossia@fakecdbaby.com",
    name: "Yoshi Tolossi",
    bookId: 47
  },
  {
    id: 267,
    review: "Heinlein's powerful storytelling and engaging characters make this a truly unforgettable and thought-provoking read.",
    owner: "slatimerc@fakelulu.com",
    name: "Shandeigh Latimer",
    bookId: 47
  },
  {
    id: 268,
    review: "A classic of science fiction that continues to resonate with readers today.",
    owner: "bmenico2@fakealibaba.com",
    name: "Brose Menico",
    bookId: 47
  },
  {
    id: 269,
    review: "A heartwarming and nostalgic story about the power of love and the importance of second chances.",
    owner: "emohanb@fakeredcross.org",
    name: "Elly Mohan",
    bookId: 48
  },
  {
    id: 270,
    review: "Heinlein's imaginative use of technology and engaging characters make this a truly unforgettable and heartwarming read.",
    owner: "ncasali4@fakethetimes.co.uk",
    name: "Norry Casali",
    bookId: 48
  },
  {
    id: 271,
    review: "A classic of science fiction that continues to entertain and inspire readers today.",
    owner: "kmoreing3@fakephotobucket.com",
    name: "Karoline Moreing",
    bookId: 48
  },
  {
    id: 272,
    review: "A dark and disturbing novel that explores the themes of media manipulation and the erosion of individual freedom.",
    owner: "vjannexe@fakereference.com",
    name: "Vanny Jannex",
    bookId: 49
  },
  {
    id: 273,
    review: "Spinrad's powerful and provocative writing makes this a truly unforgettable and thought-provoking read.",
    owner: "vjannexe@fakereference.com",
    name: "Vanny Jannex",
    bookId: 49
  },
  {
    id: 275,
    review: "A classic of science fiction that explores the themes of revenge, redemption, and the human condition.",
    owner: "kefford7@fakeusnews.com",
    name: "Keefe Efford",
    bookId: 50
  },
  {
    id: 276,
    review: "Bester's powerful and evocative prose makes this a truly unforgettable and thought-provoking read.",
    owner: "kmoreing3@fakephotobucket.com",
    name: "Karoline Moreing",
    bookId: 50
  },
  {
    id: 277,
    review: "A challenging but rewarding read that will stay with you long after you finish the book.",
    owner: "kefford7@fakeusnews.com",
    name: "Keefe Efford",
    bookId: 50
  },
  {
    id: 278,
    review: "A sprawling and ambitious space opera that explores the history and culture of a vast and complex galactic civilization.",
    owner: "vjannexe@fakereference.com",
    name: "Vanny Jannex",
    bookId: 51
  },
  {
    id: 279,
    review: "Vinge's imaginative world-building and engaging characters make this a truly immersive reading experience.",
    owner: "kefford7@fakeusnews.com",
    name: "Keefe Efford",
    bookId: 51
  },
  {
    id: 280,
    review: "A challenging but rewarding read for fans of science fiction who enjoy complex and thought-provoking stories.",
    owner: "kbridgement6@fakejalbum.net",
    name: "Kary Bridgement",
    bookId: 51
  },
  {
    id: 281,
    review: "A satirical and thought-provoking novel that explores the themes of conformity, rebellion, and the dangers of unchecked technology.",
    owner: "slatimerc@fakelulu.com",
    name: "Shandeigh Latimer",
    bookId: 52
  },
  {
    id: 282,
    review: "Amis's wit and insightful social commentary make this a truly entertaining and thought-provoking read.",
    owner: "ytolossia@fakecdbaby.com",
    name: "Yoshi Tolossi",
    bookId: 52
  },
  {
    id: 283,
    review: "A classic of science fiction that continues to resonate with readers today.",
    owner: "ytolossia@fakecdbaby.com",
    name: "Yoshi Tolossi",
    bookId: 52
  },
  {
    id: 284,
    review: "A timeless classic that explores the themes of good versus evil, self-discovery, and the importance of accepting responsibility for one's actions.",
    owner: "kefford7@fakeusnews.com",
    name: "Keefe Efford",
    bookId: 53
  },
  {
    id: 285,
    review: "Le Guin's beautiful prose and insightful storytelling make this a truly unforgettable and moving read.",
    owner: "kmoreing3@fakephotobucket.com",
    name: "Karoline Moreing",
    bookId: 53
  },
  {
    id: 286,
    review: "A must-read for any fan of fantasy and coming-of-age stories.",
    owner: "slatimerc@fakelulu.com",
    name: "Shandeigh Latimer",
    bookId: 53
  },
  {
    id: 287,
    review: "A captivating sequel that delves deeper into the magic and mythology of Earthsea.",
    owner: "kefford7@fakeusnews.com",
    name: "Keefe Efford",
    bookId: 54
  },
  {
    id: 288,
    review: "Le Guin's powerful and evocative prose brings the world of Earthsea to life in a truly unforgettable way.",
    owner: "kbridgement6@fakejalbum.net",
    name: "Kary Bridgement",
    bookId: 54
  },
  {
    id: 289,
    review: "A captivating sequel that delves deeper into the magic and mythology of Earthsea.",
    owner: "esaffen0@fakeyale.edu",
    name: "Edithe Saffen",
    bookId: 54
  },
  {
    id: 290,
    review: "Le Guin's powerful and evocative prose brings the world of Earthsea to life in a truly unforgettable way.",
    owner: "mwhitwamd@fakemail.ru",
    name: "Mose Whitwam",
    bookId: 54
  },
  {
    id: 291,
    review: "A challenging but rewarding read that explores themes of isolation, responsibility, and the nature of good and evil.",
    owner: "ghuckett8@fakeprinceton.edu",
    name: "Griffin Huckett",
    bookId: 54
  },
  {
    id: 292,
    review: "A must-read for any fan of fantasy and coming-of-age stories.",
    owner: "slatimerc@fakelulu.com",
    name: "Shandeigh Latimer",
    bookId: 54
  },
  {
    id: 293,
    review: "A sweeping epic that explores the history and mythology of the Earthsea archipelago.",
    owner: "larnatt5@fakefoxnews.com",
    name: "Luz Arnatt",
    bookId: 55
  },
  {
    id: 294,
    review: "Le Guin's masterful storytelling and insightful social commentary make this a truly unforgettable and thought-provoking read.",
    owner: "hamdohr1@fakejapanpost.jp",
    name: "Helyn Amdohr",
    bookId: 55
  },
  {
    id: 295,
    review: "A classic of fantasy literature that continues to inspire and challenge readers today.",
    owner: "emohanb@fakeredcross.org",
    name: "Elly Mohan",
    bookId: 55
  },
  {
    id: 296,
    review: "A haunting and atmospheric novel that explores the power of myth and the dangers of obsession.",
    owner: "mwhitwamd@fakemail.ru",
    name: "Mose Whitwam",
    bookId: 56
  },
  {
    id: 297,
    review: "Garner's vivid imagery and psychological depth make this a truly unforgettable and unsettling read.",
    owner: "emohanb@fakeredcross.org",
    name: "Elly Mohan",
    bookId: 56
  },
  {
    id: 298,
    review: "A classic of British fantasy that continues to resonate with readers today.",
    owner: "bmenico2@fakealibaba.com",
    name: "Brose Menico",
    bookId: 56
  },
  {
    id: 299,
    review: "A heartwarming and poignant story about the enduring power of friendship and the importance of preserving traditional values.",
    owner: "kbridgement6@fakejalbum.net",
    name: "Kary Bridgement",
    bookId: 57
  },
  {
    id: 300,
    review: "Sherman's simple yet profound writing captures the essence of childhood and the importance of connection to nature.",
    owner: "larnatt5@fakefoxnews.com",
    name: "Luz Arnatt",
    bookId: 57
  },
  {
    id: 301,
    review: "A charming and heartwarming read for readers of all ages.",
    owner: "bmenico2@fakealibaba.com",
    name: "Brose Menico",
    bookId: 57
  },
  {
    id: 302,
    review: "A dark and disturbing novel that explores the horrors of war and the psychological effects of trauma.",
    owner: "kmoreing3@fakephotobucket.com",
    name: "Karoline Moreing",
    bookId: 58
  },
  {
    id: 303,
    review: "Disch's powerful and unflinching writing makes this a truly unsettling and thought-provoking read.",
    owner: "kmoreing3@fakephotobucket.com",
    name: "Karoline Moreing",
    bookId: 58
  },
  {
    id: 304,
    review: "A challenging but rewarding read that will stay with you long after you finish the book.",
    owner: "kbridgement6@fakejalbum.net",
    name: "Kary Bridgement",
    bookId: 58
  },
  {
    id: 305,
    review: "A powerful and moving play that explores the themes of guilt, redemption, and the human condition.",
    owner: "ghuckett8@fakeprinceton.edu",
    name: "Griffin Huckett",
    bookId: 59
  },
  {
    id: 306,
    review: "Behan's raw and unflinching portrayal of life in prison is both disturbing and unforgettable.",
    owner: "slatimerc@fakelulu.com",
    name: "Shandeigh Latimer",
    bookId: 59
  },
  {
    id: 307,
    review: "A classic of Irish literature that continues to resonate with audiences today.",
    owner: "hamdohr1@fakejapanpost.jp",
    name: "Helyn Amdohr",
    bookId: 59
  },
  {
    id: 308,
    review: "A dazzling and imaginative space opera that explores the wonders of the universe and the human desire for adventure.",
    owner: "vjannexe@fakereference.com",
    name: "Vanny Jannex",
    bookId: 60
  },
  {
    id: 309,
    review: "Vance's vivid descriptions and engaging characters make this a truly unforgettable and captivating read.",
    owner: "ncasali4@fakethetimes.co.uk",
    name: "Norry Casali",
    bookId: 60
  },
  {
    id: 310,
    review: "A classic of science fiction that continues to inspire and entertain readers today.",
    owner: "vjannexe@fakereference.com",
    name: "Vanny Jannex",
    bookId: 60
  },
  {
    id: 311,
    review: "A haunting and atmospheric novel that explores the themes of childhood, loss, and the passage of time.",
    owner: "hamdohr1@fakejapanpost.jp",
    name: "Helyn Amdohr",
    bookId: 61
  },
  {
    id: 312,
    review: "Mayne's evocative prose and haunting imagery create a truly unforgettable reading experience.",
    owner: "phabershaw9@fakesquidoo.com",
    name: "Pat Habershaw",
    bookId: 61
  },
  {
    id: 313,
    review: "A challenging but rewarding read that will stay with you long after you finish the book.",
    owner: "vjannexe@fakereference.com",
    name: "Vanny Jannex",
    bookId: 61
  },
  {
    id: 314,
    review: "A thrilling fantasy adventure that explores the themes of good versus evil, courage, and the importance of standing up for what is right.",
    owner: "kbridgement6@fakejalbum.net",
    name: "Kary Bridgement",
    bookId: 62
  },
  {
    id: 315,
    review: "Pullman's imaginative world-building and engaging characters make this a truly unforgettable and captivating read.",
    owner: "phabershaw9@fakesquidoo.com",
    name: "Pat Habershaw",
    bookId: 62
  },
  {
    id: 316,
    review: "A classic of fantasy literature that continues to inspire and entertain readers today.",
    owner: "bmenico2@fakealibaba.com",
    name: "Brose Menico",
    bookId: 62
  },
  {
    id: 317,
    review: "A powerful and thought-provoking novel that explores the horrors of war and the psychological effects of trauma.",
    owner: "bmenico2@fakealibaba.com",
    name: "Brose Menico",
    bookId: 63
  },
  {
    id: 318,
    review: "Haldeman's unflinching portrayal of war's realities makes this a truly unforgettable and unsettling read.",
    owner: "bmenico2@fakealibaba.com",
    name: "Brose Menico",
    bookId: 63
  },
  {
    id: 319,
    review: "A classic of science fiction that continues to resonate with readers today.",
    owner: "ghuckett8@fakeprinceton.edu",
    name: "Griffin Huckett",
    bookId: 63
  },
  {
    id: 320,
    review: "A thought-provoking and unsettling novel that explores the potential consequences of human evolution.",
    owner: "slatimerc@fakelulu.com",
    name: "Shandeigh Latimer",
    bookId: 64
  },
  {
    id: 321,
    review: "Clarke's insightful and imaginative ideas make this a truly unforgettable and thought-provoking read.",
    owner: "kbridgement6@fakejalbum.net",
    name: "Kary Bridgement",
    bookId: 64
  },
  {
    id: 322,
    review: "A classic of science fiction that continues to challenge and inspire readers today.",
    owner: "kmoreing3@fakephotobucket.com",
    name: "Karoline Moreing",
    bookId: 64
  },
  {
    id: 323,
    review: "A darkly humorous and imaginative fantasy that explores the themes of good versus evil and the importance of standing up for what is right.",
    owner: "kefford7@fakeusnews.com",
    name: "Keefe Efford",
    bookId: 65
  },
  {
    id: 324,
    review: "de Larrabeiti's witty dialogue and engaging characters make this a truly entertaining and unforgettable read.",
    owner: "kefford7@fakeusnews.com",
    name: "Keefe Efford",
    bookId: 65
  },
  {
    id: 325,
    review: "A unique and imaginative fantasy that will appeal to readers of all ages.",
    owner: "phabershaw9@fakesquidoo.com",
    name: "Pat Habershaw",
    bookId: 65
  },
  {
    id: 326,
    review: "A thrilling and action-packed sequel that continues the adventures of the Borribles.",
    owner: "larnatt5@fakefoxnews.com",
    name: "Luz Arnatt",
    bookId: 66
  },
  {
    id: 327,
    review: "de Larrabeiti's imaginative world-building and engaging characters make this a truly captivating read.",
    owner: "slatimerc@fakelulu.com",
    name: "Shandeigh Latimer",
    bookId: 66
  },
  {
    id: 328,
    review: "A perfect read for fans of the first book and anyone who enjoys a good fantasy adventure.",
    owner: "vjannexe@fakereference.com",
    name: "Vanny Jannex",
    bookId: 66
  },
  {
    id: 329,
    review: "A heartwarming and nostalgic story about the magic and wonder of childhood.",
    owner: "phabershaw9@fakesquidoo.com",
    name: "Pat Habershaw",
    bookId: 67
  },
  {
    id: 330,
    review: "Pearce's evocative prose and enchanting setting make this a truly unforgettable and heartwarming read.",
    owner: "kbridgement6@fakejalbum.net",
    name: "Kary Bridgement",
    bookId: 67
  },
  {
    id: 331,
    review: "A timeless classic that continues to enchant readers of all ages.",
    owner: "kmoreing3@fakephotobucket.com",
    name: "Karoline Moreing",
    bookId: 67
  }
];

// book methods
exports.books = function (req, res, next) {
    console.log('*** books');
    res.json(books);
};

exports.addBook = function (req, res, next) {
    console.log('*** addBook');
    const maxId = books.reduce((maxId, book) => Math.max(maxId, book.id), 0);
    const book = req.body;
    book.id = maxId + 1;
    books.push(book);
	res.json(book);
};

exports.updateBook = function (req, res, next) {
    const book = req.body;
    console.log('*** updateBook ', book.id);
    const index = books.findIndex((b) => b.id === book.id);
    books[index].cover = book.cover;
    books[index].title  = book.title;
    books[index].author = book.author;
	res.json(book);
};

exports.deleteBook = function (req, res, next) {
    console.log('*** deleteBook ', req.params.id);
    const id = Number(req.params.id);
    const index = books.findIndex((b) => b.id === id);
    books.splice(index, 1);
    res.json(null);
}

// review methods
exports.reviews = function (req, res, next) {
    console.log('*** reviews');
    res.json(reviews);
};

exports.addReview = function (req, res, next) {
    console.log('*** addReview');
    const maxId = reviews.reduce((maxId, review) => Math.max(maxId, review.id), 0);
    const review = req.body;
    review.id = maxId + 1;
    reviews.push(review);
	res.json(review);
};

exports.updateReview = function (req, res, next) {
    const review = req.body;
    console.log('*** updateReview', review.id);

    console.log('reviews length ', reviews.length);
    const index = reviews.findIndex((b) => b.id === review.id);
    console.log("review = ", reviews[index].review);

   console.log('index ', index);

    reviews[index].review = review.review;
	res.json(review);
};

exports.deleteReview = function (req, res, next) {
    console.log('*** deleteReview ', req.params.id);
    const id = Number(req.params.id);
    const index = reviews.findIndex((b) => b.id === id);
    reviews.splice(index, 1);
    res.json(null);
}







