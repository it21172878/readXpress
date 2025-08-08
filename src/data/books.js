// Auto-incrementing ID counter
let idCounter = 0;

// Generate a unique ID using auto-incrementing counter
export const generateUniqueId = () => {
  return ++idCounter;
};

// Generate a UUID (alternative method)
export const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// Helper function to create a book with auto-generated ID
export const createBook = (bookData) => {
  return {
    id: generateUniqueId(),
    ...bookData,
  };
};

export const booksData = {
  featured: [
    createBook({
      title: "The Midnight Library",
      author: "Matt Haig",
      category: "Fiction",
      description:
        "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 1234,
      megaUrl: "https://mega.nz/file/example1#key1",
    }),
    createBook({
      title: "Project Hail Mary",
      author: "Andy Weir",
      category: "Sci-Fi",
      description:
        "A lone astronaut must save the earth when he wakes up to find his crewmates dead and his memories completely gone.",
      coverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 987,
      megaUrl: "https://mega.nz/file/example2#key2",
    }),
    createBook({
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      category: "Romance",
      description:
        "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2156,
      megaUrl: "https://mega.nz/file/example3#key3",
    }),
    createBook({
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      category: "Fiction",
      description:
        "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast.",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 2890,
      megaUrl: "https://mega.nz/file/example4#key4",
    }),
    createBook({
      title: "The Song of Achilles",
      author: "Madeline Miller",
      category: "Fiction",
      description:
        "A tale of gods, kings, immortal fame and the human heart, The Song of Achilles is a dazzling literary feat.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2156,
      megaUrl: "https://mega.nz/file/example5#key5",
    }),
    createBook({
      title: "Circe",
      author: "Madeline Miller",
      category: "Fantasy",
      description:
        "In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2156,
      megaUrl: "https://mega.nz/file/example6#key6",
    }),
    createBook({
      title: "The Invisible Life of Addie LaRue",
      author: "V.E. Schwab",
      category: "Fantasy",
      description:
        "A life no one will remember. A story you will never forget.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2156,
      megaUrl: "https://mega.nz/file/example7#key7",
    }),
    createBook({
      title: "The House in the Cerulean Sea",
      author: "TJ Klune",
      category: "Fantasy",
      description: "A magical island. A dangerous task. A burning secret.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2156,
      megaUrl: "https://mega.nz/file/example8#key8",
    }),
    createBook({
      title: "Mexican Gothic",
      author: "Silvia Moreno-Garcia",
      category: "Horror",
      description:
        "After receiving a frantic letter from her newly-wed cousin begging for someone to save her from a mysterious doom.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2156,
      megaUrl: "https://mega.nz/file/example9#key9",
    }),
    createBook({
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      category: "Sci-Fi",
      description:
        "Klara and the Sun is a thrilling book that offers a look at our changing world through the eyes of an unforgettable narrator.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2156,
      megaUrl: "https://mega.nz/file/example10#key10",
    }),
    createBook({
      title: "The Sanatorium",
      author: "Sarah Pearse",
      category: "Mystery",
      description:
        "An imposing, isolated hotel, high up in the Swiss Alps, is the last place Elin Warner wants to be.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2156,
      megaUrl: "https://mega.nz/file/example11#key11",
    }),
    createBook({
      title: "The Thursday Murder Club",
      author: "Richard Osman",
      category: "Mystery",
      description:
        "In a peaceful retirement village, four unlikely friends meet weekly in the Jigsaw Room to discuss unsolved crimes.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2156,
      megaUrl: "https://mega.nz/file/example12#key12",
    }),
  ],

  kids: [
    createBook({
      title: "Wonder",
      author: "R.J. Palacio",
      category: "Kids",
      description:
        "August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school.",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 2890,
      megaUrl: "https://mega.nz/file/kidsexample1#key1",
    }),
    createBook({
      title: "The Cat in the Hat",
      author: "Dr. Seuss",
      category: "Kids",
      description:
        "A tall cat in a red and white hat visits two children on a rainy day when their mother is away.",
      coverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 1987,
      megaUrl: "https://mega.nz/file/kidsexample2#key2",
    }),
    createBook({
      title: "Charlotte's Web",
      author: "E.B. White",
      category: "Kids",
      description:
        "The story of a little girl named Fern who loved a little pig named Wilbur and of Wilbur's dear friend Charlotte A. Cavatica.",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 3456,
      megaUrl: "https://mega.nz/file/kidsexample3#key3",
    }),
    createBook({
      title: "Matilda",
      author: "Roald Dahl",
      category: "Kids",
      description:
        "An extraordinary girl with a vivid imagination who dares to take a stand and change her destiny.",
      coverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 2765,
      megaUrl: "https://mega.nz/file/kidsexample4#key4",
    }),
    createBook({
      title: "The BFG",
      author: "Roald Dahl",
      category: "Kids",
      description:
        "Sophie meets the Big Friendly Giant who, unlike his neighbors, refuses to eat children.",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2123,
      megaUrl: "https://mega.nz/file/kidsexample5#key5",
    }),
    createBook({
      title: "Where the Wild Things Are",
      author: "Maurice Sendak",
      category: "Kids",
      description:
        "Max's journey to the land of the Wild Things, where he becomes their king.",
      coverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 1876,
      megaUrl: "https://mega.nz/file/kidsexample6#key6",
    }),
    createBook({
      title: "The Giving Tree",
      author: "Shel Silverstein",
      category: "Kids",
      description:
        "A heartwarming story about the relationship between a boy and a tree.",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 2987,
      megaUrl: "https://mega.nz/file/kidsexample7#key7",
    }),
    createBook({
      title: "Green Eggs and Ham",
      author: "Dr. Seuss",
      category: "Kids",
      description:
        "Sam-I-Am tries to convince another character to try green eggs and ham.",
      coverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2234,
      megaUrl: "https://mega.nz/file/kidsexample8#key8",
    }),
    createBook({
      title: "The Very Hungry Caterpillar",
      author: "Eric Carle",
      category: "Kids",
      description:
        "A caterpillar eats his way through a week of food before transforming into a butterfly.",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 3123,
      megaUrl: "https://mega.nz/file/kidsexample9#key9",
    }),
    createBook({
      title: "Goodnight Moon",
      author: "Margaret Wise Brown",
      category: "Kids",
      description: "A little bunny says goodnight to everything around him.",
      coverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 1654,
      megaUrl: "https://mega.nz/file/kidsexample10#key10",
    }),
    createBook({
      title: "If You Give a Mouse a Cookie",
      author: "Laura Numeroff",
      category: "Kids",
      description:
        "A circular tale about a mouse who asks for a cookie and then needs many other things.",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 1987,
      megaUrl: "https://mega.nz/file/kidsexample11#key11",
    }),
    createBook({
      title: "The Polar Express",
      author: "Chris Van Allsburg",
      category: "Kids",
      description: "A magical train ride to the North Pole on Christmas Eve.",
      coverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 2456,
      megaUrl: "https://mega.nz/file/kidsexample12#key12",
    }),
  ],

  romance: [
    createBook({
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Romance",
      description:
        "The classic tale of Elizabeth Bennet and Mr. Darcy's complicated relationship in 19th century England.",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 4567,
      megaUrl: "https://mega.nz/file/romanceexample1#key1",
    }),
    createBook({
      title: "It Ends with Us",
      author: "Colleen Hoover",
      category: "Romance",
      description:
        "A powerful story about love, resilience, and the courage it takes to go against the grain.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 3456,
      megaUrl: "https://mega.nz/file/romanceexample2#key2",
    }),
    createBook({
      title: "The Hating Game",
      author: "Sally Thorne",
      category: "Romance",
      description:
        "Lucy and Joshua hate each other. Or do they? A funny, sexy, enemies-to-lovers contemporary romance.",
      coverImage:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2789,
      megaUrl: "https://mega.nz/file/romanceexample3#key3",
    }),
    createBook({
      title: "The Kiss Quotient",
      author: "Helen Hoang",
      category: "Romance",
      description:
        "A woman with Asperger's hires a male escort to help her learn about intimacy and relationships.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2345,
      megaUrl: "https://mega.nz/file/romanceexample4#key4",
    }),
    createBook({
      title: "Beach Read",
      author: "Emily Henry",
      category: "Romance",
      description:
        "Two rival writers challenge each other to swap genres and write outside their comfort zones.",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 3789,
      megaUrl: "https://mega.nz/file/romanceexample5#key5",
    }),
    createBook({
      title: "The Spanish Love Deception",
      author: "Elena Armas",
      category: "Romance",
      description:
        "A woman asks her colleague to be her fake boyfriend for her sister's wedding in Spain.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2987,
      megaUrl: "https://mega.nz/file/romanceexample6#key6",
    }),
    createBook({
      title: "Red, White & Royal Blue",
      author: "Casey McQuiston",
      category: "Romance",
      description:
        "The son of the President falls in love with the Prince of Wales.",
      coverImage:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 4123,
      megaUrl: "https://mega.nz/file/romanceexample7#key7",
    }),
    createBook({
      title: "The Seven Moons of Maali Almeida",
      author: "Shehan Karunatilaka",
      category: "Romance",
      description:
        "A photographer wakes up dead and has seven moons to solve his own murder.",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 1876,
      megaUrl: "https://mega.nz/file/romanceexample8#key8",
    }),
    createBook({
      title: "People We Meet on Vacation",
      author: "Emily Henry",
      category: "Romance",
      description:
        "Best friends take one last vacation together to save their friendship.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 3245,
      megaUrl: "https://mega.nz/file/romanceexample9#key9",
    }),
    createBook({
      title: "The Proposal",
      author: "Jasmine Guillory",
      category: "Romance",
      description:
        "A fake engagement leads to real feelings in this contemporary romance.",
      coverImage:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2654,
      megaUrl: "https://mega.nz/file/romanceexample10#key10",
    }),
    createBook({
      title: "The Unhoneymooners",
      author: "Christina Lauren",
      category: "Romance",
      description:
        "Enemies are forced to share a honeymoon when everyone else gets food poisoning.",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2987,
      megaUrl: "https://mega.nz/file/romanceexample11#key11",
    }),
    createBook({
      title: "The Wedding Date",
      author: "Jasmine Guillory",
      category: "Romance",
      description:
        "A chance encounter in an elevator leads to a fake wedding date arrangement.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2234,
      megaUrl: "https://mega.nz/file/romanceexample12#key12",
    }),
  ],

  fantasy: [
    createBook({
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      category: "Fantasy",
      description:
        "The riveting first-person narrative of a young man who grows to be the most notorious magician his world has ever seen.",
      coverImage:
        "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 3876,
      megaUrl: "https://mega.nz/file/fantasyexample1#key1",
    }),
    createBook({
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
      description:
        "Bilbo Baggins enjoys a comfortable life until he is swept away on an epic adventure.",
      coverImage:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 5234,
      megaUrl: "https://mega.nz/file/fantasyexample2#key2",
    }),
    createBook({
      title: "A Game of Thrones",
      author: "George R.R. Martin",
      category: "Fantasy",
      description:
        "In the kingdom of Westeros, nobles and commoners, soldiers and sorcerers struggle amidst political upheaval.",
      coverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 4321,
      megaUrl: "https://mega.nz/file/fantasyexample3#key3",
    }),
    createBook({
      title: "The Fellowship of the Ring",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
      description:
        "A hobbit must destroy a powerful ring to save Middle-earth from the Dark Lord.",
      coverImage:
        "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 6789,
      megaUrl: "https://mega.nz/file/fantasyexample4#key4",
    }),
    createBook({
      title: "The Way of Kings",
      author: "Brandon Sanderson",
      category: "Fantasy",
      description:
        "Epic fantasy following knights radiating mystical powers on a storm-ravaged world.",
      coverImage:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 4567,
      megaUrl: "https://mega.nz/file/fantasyexample5#key5",
    }),
    createBook({
      title: "The Wheel of Time",
      author: "Robert Jordan",
      category: "Fantasy",
      description:
        "A young man discovers he may be the prophesied Dragon Reborn who will save or destroy the world.",
      coverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 3456,
      megaUrl: "https://mega.nz/file/fantasyexample6#key6",
    }),
    createBook({
      title: "The Magician's Nephew",
      author: "C.S. Lewis",
      category: "Fantasy",
      description:
        "The creation of Narnia and the adventures that led to The Lion, the Witch and the Wardrobe.",
      coverImage:
        "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2987,
      megaUrl: "https://mega.nz/file/fantasyexample7#key7",
    }),
    createBook({
      title: "The Dark Tower",
      author: "Stephen King",
      category: "Fantasy",
      description:
        "A gunslinger pursues the Dark Tower through a post-apocalyptic landscape.",
      coverImage:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 3789,
      megaUrl: "https://mega.nz/file/fantasyexample8#key8",
    }),
    createBook({
      title: "Mistborn",
      author: "Brandon Sanderson",
      category: "Fantasy",
      description:
        "A street thief discovers she has magical powers and joins a crew planning to overthrow an immortal emperor.",
      coverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 4234,
      megaUrl: "https://mega.nz/file/fantasyexample9#key9",
    }),
    createBook({
      title: "The Sword of Truth",
      author: "Terry Goodkind",
      category: "Fantasy",
      description:
        "A young man discovers he possesses a rare gift for magic and must use it to save his world.",
      coverImage:
        "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2876,
      megaUrl: "https://mega.nz/file/fantasyexample10#key10",
    }),
    createBook({
      title: "The First Law",
      author: "Joe Abercrombie",
      category: "Fantasy",
      description:
        "A gritty fantasy trilogy featuring morally complex characters in a brutal world.",
      coverImage:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 3123,
      megaUrl: "https://mega.nz/file/fantasyexample11#key11",
    }),
    createBook({
      title: "The Earthsea Cycle",
      author: "Ursula K. Le Guin",
      category: "Fantasy",
      description:
        "A young wizard's journey of self-discovery in a world of islands and magic.",
      coverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 2654,
      megaUrl: "https://mega.nz/file/fantasyexample12#key12",
    }),
  ],

  mystery: [
    createBook({
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      category: "Mystery",
      description:
        "A journalist and a young female hacker investigate a wealthy family's dark secrets.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 3654,
      megaUrl: "https://mega.nz/file/mysteryexample1#key1",
    }),
    createBook({
      title: "Gone Girl",
      author: "Gillian Flynn",
      category: "Mystery",
      description:
        "A psychological thriller about a marriage gone wrong and a wife who disappears.",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2987,
      megaUrl: "https://mega.nz/file/mysteryexample2#key2",
    }),
    createBook({
      title: "The Silent Patient",
      author: "Alex Michaelides",
      category: "Mystery",
      description:
        "A woman refuses to speak after allegedly murdering her husband, and a psychotherapist is determined to treat her.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 4123,
      megaUrl: "https://mega.nz/file/mysteryexample3#key3",
    }),
    createBook({
      title: "The Da Vinci Code",
      author: "Dan Brown",
      category: "Mystery",
      description:
        "A symbologist gets involved in a murder mystery that leads to ancient secrets.",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 5678,
      megaUrl: "https://mega.nz/file/mysteryexample4#key4",
    }),
    createBook({
      title: "In the Woods",
      author: "Tana French",
      category: "Mystery",
      description:
        "A detective investigates a child's murder that echoes a case from his own past.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2345,
      megaUrl: "https://mega.nz/file/mysteryexample5#key5",
    }),
    createBook({
      title: "The Big Sleep",
      author: "Raymond Chandler",
      category: "Mystery",
      description:
        "Private detective Philip Marlowe investigates a complex case involving blackmail and murder.",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 3456,
      megaUrl: "https://mega.nz/file/mysteryexample6#key6",
    }),
    createBook({
      title: "The Murder of Roger Ackroyd",
      author: "Agatha Christie",
      category: "Mystery",
      description:
        "Hercule Poirot investigates the murder of a wealthy man in an English village.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 4567,
      megaUrl: "https://mega.nz/file/mysteryexample7#key7",
    }),
    createBook({
      title: "The Maltese Falcon",
      author: "Dashiell Hammett",
      category: "Mystery",
      description:
        "A private detective gets caught up in a complex web of murder and deceit over a valuable bird statue.",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2987,
      megaUrl: "https://mega.nz/file/mysteryexample8#key8",
    }),
    createBook({
      title: "The Woman in White",
      author: "Wilkie Collins",
      category: "Mystery",
      description:
        "A drawing teacher encounters a mysterious woman in white on a moonlit road.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 1876,
      megaUrl: "https://mega.nz/file/mysteryexample9#key9",
    }),
    createBook({
      title: "And Then There Were None",
      author: "Agatha Christie",
      category: "Mystery",
      description:
        "Ten strangers are invited to an island where they are killed one by one.",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 6789,
      megaUrl: "https://mega.nz/file/mysteryexample10#key10",
    }),
    createBook({
      title: "The Girl on the Train",
      author: "Paula Hawkins",
      category: "Mystery",
      description:
        "A troubled woman becomes entangled in a missing person case.",
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 3789,
      megaUrl: "https://mega.nz/file/mysteryexample11#key11",
    }),
    createBook({
      title: "The Cuckoo's Calling",
      author: "Robert Galbraith",
      category: "Mystery",
      description:
        "A private detective investigates the supposed suicide of a supermodel.",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2654,
      megaUrl: "https://mega.nz/file/mysteryexample12#key12",
    }),
  ],

  scifi: [
    createBook({
      title: "Dune",
      author: "Frank Herbert",
      category: "Sci-Fi",
      description:
        "Set in the distant future amidst a feudal interstellar society in which noble houses control planetary fiefs.",
      coverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 4567,
      megaUrl: "https://mega.nz/file/scifiexample1#key1",
    }),
    createBook({
      title: "The Martian",
      author: "Andy Weir",
      category: "Sci-Fi",
      description:
        "An astronaut becomes stranded on Mars and must find a way to survive until rescue arrives.",
      coverImage:
        "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 3789,
      megaUrl: "https://mega.nz/file/scifiexample2#key2",
    }),
    createBook({
      title: "Foundation",
      author: "Isaac Asimov",
      category: "Sci-Fi",
      description:
        "A mathematician develops a science to predict the future and preserve civilization.",
      coverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 5234,
      megaUrl: "https://mega.nz/file/scifiexample3#key3",
    }),
    createBook({
      title: "Neuromancer",
      author: "William Gibson",
      category: "Sci-Fi",
      description:
        "A hacker is hired for one last job in cyberspace in this cyberpunk classic.",
      coverImage:
        "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 3456,
      megaUrl: "https://mega.nz/file/scifiexample4#key4",
    }),
    createBook({
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      category: "Sci-Fi",
      description:
        "An ordinary human's adventures through space after Earth is demolished.",
      coverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 6789,
      megaUrl: "https://mega.nz/file/scifiexample5#key5",
    }),
    createBook({
      title: "Ender's Game",
      author: "Orson Scott Card",
      category: "Sci-Fi",
      description:
        "A young boy is trained in a military academy to fight an alien invasion.",
      coverImage:
        "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 4321,
      megaUrl: "https://mega.nz/file/scifiexample6#key6",
    }),
    createBook({
      title: "1984",
      author: "George Orwell",
      category: "Sci-Fi",
      description:
        "A dystopian vision of a totalitarian society where Big Brother watches everything.",
      coverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 7890,
      megaUrl: "https://mega.nz/file/scifiexample7#key7",
    }),
    createBook({
      title: "Brave New World",
      author: "Aldous Huxley",
      category: "Sci-Fi",
      description:
        "A society where humans are engineered and conditioned for specific roles.",
      coverImage:
        "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 3987,
      megaUrl: "https://mega.nz/file/scifiexample8#key8",
    }),
    createBook({
      title: "The Left Hand of Darkness",
      author: "Ursula K. Le Guin",
      category: "Sci-Fi",
      description:
        "An ambassador visits a planet where inhabitants can change gender.",
      coverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2765,
      megaUrl: "https://mega.nz/file/scifiexample9#key9",
    }),
    createBook({
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      category: "Sci-Fi",
      description:
        "In a future where books are banned, a fireman begins to question his job.",
      coverImage:
        "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 4567,
      megaUrl: "https://mega.nz/file/scifiexample10#key10",
    }),
    createBook({
      title: "The Time Machine",
      author: "H.G. Wells",
      category: "Sci-Fi",
      description:
        "A scientist travels to the distant future and discovers humanity's fate.",
      coverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2345,
      megaUrl: "https://mega.nz/file/scifiexample11#key11",
    }),
    createBook({
      title: "Starship Troopers",
      author: "Robert A. Heinlein",
      category: "Sci-Fi",
      description:
        "A young soldier fights in an interstellar war against alien bugs.",
      coverImage:
        "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 3234,
      megaUrl: "https://mega.nz/file/scifiexample12#key12",
    }),
  ],

  nonfiction: [
    createBook({
      title: "Atomic Habits",
      author: "James Clear",
      category: "Non-Fiction",
      description:
        "An easy and proven way to build good habits and break bad ones through tiny changes with remarkable results.",
      coverImage:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 5432,
      megaUrl: "https://mega.nz/file/nonfictionexample1#key1",
    }),
    createBook({
      title: "Sapiens",
      author: "Yuval Noah Harari",
      category: "Non-Fiction",
      description:
        "A brief history of humankind, exploring how humans have shaped the world we live in.",
      coverImage:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 4321,
      megaUrl: "https://mega.nz/file/nonfictionexample2#key2",
    }),
    createBook({
      title: "Educated",
      author: "Tara Westover",
      category: "Non-Fiction",
      description:
        "A memoir about a woman who grows up in a survivalist family and eventually earns a PhD from Cambridge.",
      coverImage:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 6789,
      megaUrl: "https://mega.nz/file/nonfictionexample3#key3",
    }),
    createBook({
      title: "The Power of Now",
      author: "Eckhart Tolle",
      category: "Non-Fiction",
      description:
        "A guide to spiritual enlightenment through living in the present moment.",
      coverImage:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 3456,
      megaUrl: "https://mega.nz/file/nonfictionexample4#key4",
    }),
    createBook({
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      category: "Non-Fiction",
      description:
        "An exploration of the two systems of thinking that drive human decision-making.",
      coverImage:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 4567,
      megaUrl: "https://mega.nz/file/nonfictionexample5#key5",
    }),
    createBook({
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen R. Covey",
      category: "Non-Fiction",
      description:
        "A self-help book that presents a principle-centered approach for solving personal and professional problems.",
      coverImage:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 5234,
      megaUrl: "https://mega.nz/file/nonfictionexample6#key6",
    }),
    createBook({
      title: "Becoming",
      author: "Michelle Obama",
      category: "Non-Fiction",
      description: "The memoir of the former First Lady of the United States.",
      coverImage:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=top",
      rating: 5,
      reviews: 7890,
      megaUrl: "https://mega.nz/file/nonfictionexample7#key7",
    }),
    createBook({
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      category: "Non-Fiction",
      description:
        "A counterintuitive approach to living a good life through caring about fewer things.",
      coverImage:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 3987,
      megaUrl: "https://mega.nz/file/nonfictionexample8#key8",
    }),
    createBook({
      title: "Homo Deus",
      author: "Yuval Noah Harari",
      category: "Non-Fiction",
      description:
        "A look at what the future might hold for humanity in the 21st century.",
      coverImage:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 3765,
      megaUrl: "https://mega.nz/file/nonfictionexample9#key9",
    }),
    createBook({
      title: "The Lean Startup",
      author: "Eric Ries",
      category: "Non-Fiction",
      description:
        "How today's entrepreneurs use continuous innovation to create radically successful businesses.",
      coverImage:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2876,
      megaUrl: "https://mega.nz/file/nonfictionexample10#key10",
    }),
    createBook({
      title: "Outliers",
      author: "Malcolm Gladwell",
      category: "Non-Fiction",
      description:
        "The story of success and what makes high-achievers different.",
      coverImage:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 4234,
      megaUrl: "https://mega.nz/file/nonfictionexample11#key11",
    }),
    createBook({
      title: "The Four Agreements",
      author: "Don Miguel Ruiz",
      category: "Non-Fiction",
      description:
        "A practical guide to personal freedom based on ancient Toltec wisdom.",
      coverImage:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=top",
      rating: 4,
      reviews: 2543,
      megaUrl: "https://mega.nz/file/nonfictionexample12#key12",
    }),
  ],
};

export const getAllBooks = () => {
  return Object.values(booksData).flat();
};

export const getBooksByCategory = (category) => {
  const categoryMap = {
    kids: booksData.kids,
    romance: booksData.romance,
    fantasy: booksData.fantasy,
    mystery: booksData.mystery,
    "sci-fi": booksData.scifi,
    "non-fiction": booksData.nonfiction,
  };
  return categoryMap[category] || [];
};

// Helper functions for managing books
export const addBook = (category, bookData) => {
  const newBook = createBook(bookData);
  if (booksData[category]) {
    booksData[category].push(newBook);
  }
  return newBook;
};

export const removeBook = (category, bookId) => {
  if (booksData[category]) {
    const index = booksData[category].findIndex((book) => book.id === bookId);
    if (index > -1) {
      return booksData[category].splice(index, 1)[0];
    }
  }
  return null;
};

export const updateBook = (category, bookId, updateData) => {
  if (booksData[category]) {
    const bookIndex = booksData[category].findIndex(
      (book) => book.id === bookId
    );
    if (bookIndex > -1) {
      booksData[category][bookIndex] = {
        ...booksData[category][bookIndex],
        ...updateData,
        id: bookId, // Ensure ID doesn't change
      };
      return booksData[category][bookIndex];
    }
  }
  return null;
};
