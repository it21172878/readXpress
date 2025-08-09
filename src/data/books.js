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
      title: "Froggy Picks a Pumpkin",
      author: "Jonathan London",
      category: "Kids",
      description:
        "Froggy Picks a Pumpkin written by Jonathan London which was published in August 27, 2019",
      coverImage:
        "https://media.oceanofpdf.com/2025/07/PDF-EPUB-Froggy-Picks-a-Pumpkin-by-Jonathan-London-Download.jpg",
      rating: 5,
      reviews: 2890,
      megaUrl: "https://transfer.it/t/3wWMbRth1bAC",
    }),
    createBook({
      title: "Happy Hippo, Angry Duck",
      author: "Sandra Boynton",
      category: "Kids",
      description:
        "Happy Hippo, Angry Duck written by Sandra Boynton which was published in May 24, 2011",
      coverImage:
        "https://media.oceanofpdf.com/2025/07/PDF-EPUB-Happy-Hippo-Angry-Duck-by-Sandra-Boynton-Download.jpg",
      rating: 4,
      reviews: 1987,
      megaUrl: "https://transfer.it/t/1H3PGIlzBRiQ",
    }),
    createBook({
      title: "Texas Roses (Devil’s Horn Ranch #3)",
      author: "Samantha Christy",
      category: "Romance",
      description:
        "Texas Roses (Devil’s Horn Ranch #3) written by Samantha Christy which was published in April 30, 2022",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Texas-Roses-Devils-Horn-Ranch-3-by-Samantha-Christy-Download.jpg",
      rating: 4,
      reviews: 2789,
      megaUrl: "https://transfer.it/t/XPlATB81VDjA",
    }),
    createBook({
      title: "Make Me Yours (Chicago Railers Hockey #1)",
      author: "Jennifer Sucevic",
      category: "Romance",
      description:
        "Make Me Yours (Chicago Railers Hockey #1) written by Jennifer Sucevic which was published in August 1, 2025",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Make-Me-Yours-Chicago-Railers-Hockey-1-by-Jennifer-Sucevic-Download.jpg",
      rating: 4,
      reviews: 2345,
      megaUrl: "https://transfer.it/t/IwGMLE8hgbwa",
    }),
    createBook({
      title: "Navrh (Off-Campus, #1)",
      author: "Elle Kennedy",
      category: "Romance",
      description:
        "Navrh (Off-Campus, #1) by Elle Kennedy book you can download now.",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Navrh-Off-Campus-1-by-Elle-Kennedy-Download.jpg",
      rating: 5,
      reviews: 3789,
      megaUrl: "https://transfer.it/t/bHgHWI0hBTwJ",
    }),
    createBook({
      title: "Let Me Say It Again (The Morelli Sisters, #5)",
      author: "Dani Ryan",
      category: "Romance",
      description:
        "Let Me Say It Again (The Morelli Sisters, #5) written by Dani Ryan which was published in July 15, 2025",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Let-Me-Say-It-Again-The-Morelli-Sisters-5-by-Dani-Ryan-Download.png",
      rating: 4,
      reviews: 2987,
      megaUrl: "https://transfer.it/t/OP3t6RkzmT5Q",
    }),
    createBook({
      title: "Devil’s Claim (Devil’s Syndicate #2)",
      author: "Piper Stone",
      category: "Romance",
      description:
        "Devil’s Claim (Devil’s Syndicate #2) written by Piper Stone which was published in July 4, 2025",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Devils-Claim-Devils-Syndicate-2-by-Piper-Stone-Download.jpg",
      rating: 5,
      reviews: 4123,
      megaUrl: "https://transfer.it/t/W91WzA8jzbZb",
    }),
  ],

  kids: [
    createBook({
      title: "Froggy Picks a Pumpkin",
      author: "Jonathan London",
      category: "Kids",
      description:
        "Froggy Picks a Pumpkin written by Jonathan London which was published in August 27, 2019",
      coverImage:
        "https://media.oceanofpdf.com/2025/07/PDF-EPUB-Froggy-Picks-a-Pumpkin-by-Jonathan-London-Download.jpg",
      rating: 5,
      reviews: 2890,
      megaUrl: "https://transfer.it/t/3wWMbRth1bAC",
    }),
    createBook({
      title: "Happy Hippo, Angry Duck",
      author: "Sandra Boynton",
      category: "Kids",
      description:
        "Happy Hippo, Angry Duck written by Sandra Boynton which was published in May 24, 2011",
      coverImage:
        "https://media.oceanofpdf.com/2025/07/PDF-EPUB-Happy-Hippo-Angry-Duck-by-Sandra-Boynton-Download.jpg",
      rating: 4,
      reviews: 1987,
      megaUrl: "https://transfer.it/t/1H3PGIlzBRiQ",
    }),
    createBook({
      title: "The Path of the She Wolf",
      author: "Theresa Tomlinson",
      category: "Kids",
      description:
        "The Path of the She Wolf (Forestwife Saga, #3) written by Theresa Tomlinson which was published in June 1, 2000",
      coverImage:
        "https://media.oceanofpdf.com/2025/06/PDF-EPUB-The-Path-of-the-She-Wolf-Forestwife-Saga-3-by-Theresa-Tomlinson-Download.jpg",
      rating: 5,
      reviews: 3456,
      megaUrl: "https://transfer.it/t/5kXbLYlhxJAZ",
    }),
    createBook({
      title: "The Singing Mermaid",
      author: "Julia Donaldson",
      category: "Kids",
      description:
        "The Singing Mermaid written by Julia Donaldson which was published in April 1, 2012",
      coverImage:
        "https://media.oceanofpdf.com/2025/05/PDF-EPUB-The-Singing-Mermaid-by-Julia-Donaldson-Download.jpg",
      rating: 5,
      reviews: 2765,
      megaUrl: "https://transfer.it/t/MraSCQlxGDiD",
    }),
    createBook({
      title: "Alice-Miranda Takes the Lead",
      author: "Jacqueline Harvey",
      category: "Kids",
      description:
        "Alice-Miranda Takes the Lead written by Jacqueline Harvey which was published in February 1, 2011",
      coverImage:
        "https://media.oceanofpdf.com/2025/05/PDF-EPUB-Alice-Miranda-Takes-the-Lead-by-Jacqueline-Harvey-Download.jpg",
      rating: 4,
      reviews: 2123,
      megaUrl: "https://transfer.it/t/3woi7Z031D5L",
    }),
    createBook({
      title: "Rabbit Rabbit",
      author: "Dori Hillestad Butler",
      category: "Kids",
      description:
        "Rabbit Rabbit written by Dori Hillestad Butler which was published in April 15, 2025",
      coverImage:
        "https://media.oceanofpdf.com/2025/05/PDF-EPUB-Rabbit-Rabbit-by-Dori-Hillestad-Butler-Download.jpg",
      rating: 4,
      reviews: 1876,
      megaUrl: "https://transfer.it/t/Xcx2qVtXxDIa",
    }),
    createBook({
      title: "Alice-Miranda at Sea",
      author: "Jacqueline Harvey",
      category: "Kids",
      description:
        "Alice-Miranda at Sea written by Jacqueline Harvey which was published in August 1, 2011",
      coverImage:
        "https://media.oceanofpdf.com/2025/05/PDF-EPUB-Alice-Miranda-at-Sea-by-Jacqueline-Harvey-Download.jpg",
      rating: 5,
      reviews: 2987,
      megaUrl: "https://transfer.it/t/2x4D2JtRXJSA",
    }),
  ],

  romance: [
    createBook({
      title: "Too Good to Be True",
      author: "Sheila O’Flanagan",
      category: "Romance",
      description:
        "Too Good to Be True written by Sheila O’Flanagan which was published in October 13, 2003",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Too-Good-to-Be-True-by-Sheila-OFlanagan-Download.jpg",
      rating: 5,
      reviews: 4567,
      megaUrl: "https://transfer.it/t/QTJB6d0DxbgQ",
    }),
    createBook({
      title: "Spark",
      author: "Lauren Rowe",
      category: "Romance",
      description:
        "Spark written by Lauren Rowe which was published in July 16, 2025",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Spark-by-Lauren-Rowe-Download.jpg",
      rating: 4,
      reviews: 3456,
      megaUrl: "https://transfer.it/t/au2jCB9zhBZT",
    }),
    createBook({
      title: "Texas Roses (Devil’s Horn Ranch #3)",
      author: "Samantha Christy",
      category: "Romance",
      description:
        "Texas Roses (Devil’s Horn Ranch #3) written by Samantha Christy which was published in April 30, 2022",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Texas-Roses-Devils-Horn-Ranch-3-by-Samantha-Christy-Download.jpg",
      rating: 4,
      reviews: 2789,
      megaUrl: "https://transfer.it/t/XPlATB81VDjA",
    }),
    createBook({
      title: "Make Me Yours (Chicago Railers Hockey #1)",
      author: "Jennifer Sucevic",
      category: "Romance",
      description:
        "Make Me Yours (Chicago Railers Hockey #1) written by Jennifer Sucevic which was published in August 1, 2025",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Make-Me-Yours-Chicago-Railers-Hockey-1-by-Jennifer-Sucevic-Download.jpg",
      rating: 4,
      reviews: 2345,
      megaUrl: "https://transfer.it/t/IwGMLE8hgbwa",
    }),
    createBook({
      title: "Navrh (Off-Campus, #1)",
      author: "Elle Kennedy",
      category: "Romance",
      description:
        "Navrh (Off-Campus, #1) by Elle Kennedy book you can download now.",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Navrh-Off-Campus-1-by-Elle-Kennedy-Download.jpg",
      rating: 5,
      reviews: 3789,
      megaUrl: "https://transfer.it/t/bHgHWI0hBTwJ",
    }),
    createBook({
      title: "Let Me Say It Again (The Morelli Sisters, #5)",
      author: "Dani Ryan",
      category: "Romance",
      description:
        "Let Me Say It Again (The Morelli Sisters, #5) written by Dani Ryan which was published in July 15, 2025",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Let-Me-Say-It-Again-The-Morelli-Sisters-5-by-Dani-Ryan-Download.png",
      rating: 4,
      reviews: 2987,
      megaUrl: "https://transfer.it/t/OP3t6RkzmT5Q",
    }),
    createBook({
      title: "Devil’s Claim (Devil’s Syndicate #2)",
      author: "Piper Stone",
      category: "Romance",
      description:
        "Devil’s Claim (Devil’s Syndicate #2) written by Piper Stone which was published in July 4, 2025",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Devils-Claim-Devils-Syndicate-2-by-Piper-Stone-Download.jpg",
      rating: 5,
      reviews: 4123,
      megaUrl: "https://transfer.it/t/W91WzA8jzbZb",
    }),
    createBook({
      title: "Selamat Tinggal",
      author: "Tere Liye",
      category: "Romance",
      description:
        "Selamat Tinggal written by Tere Liye which was published in May 7, 2020",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Selamat-Tinggal-by-Tere-Liye-Download.jpg",
      rating: 4,
      reviews: 1876,
      megaUrl: "https://transfer.it/t/GpcvDV0H0bSK",
    }),
    createBook({
      title: "Dem Abgrund so nah (Danny-Trilogie, #2)",
      author: "Jessica Koch",
      category: "Romance",
      description:
        "Dem Abgrund so nah (Danny-Trilogie, #2) written by Jessica Koch which was published in January 1, 2016",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Dem-Abgrund-so-nah-Danny-Trilogie-2-by-Jessica-Koch-Download.jpg",
      rating: 4,
      reviews: 3245,
      megaUrl: "https://transfer.it/t/EI6wydsBADLa",
    }),
  ],

  fantasy: [
    createBook({
      title: "De Eerste Koning van Shannara (Inleiding op Shannara, #1)",
      author: "Terry Brooks",
      category: "Fantasy",
      description:
        "De Eerste Koning van Shannara (Inleiding op Shannara, #1) written by Terry Brooks which was published in March 21, 1996",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-De-Eerste-Koning-van-Shannara-Inleiding-op-Shannara-1-by-Terry-Brooks-Download.jpg",
      rating: 5,
      reviews: 3876,
      megaUrl: "https://transfer.it/t/UtJurdkRlT5K",
    }),
    createBook({
      title: "Of Gods and Pain (The Curse of Gods #2)",
      author: "Dakota Monroe",
      category: "Fantasy",
      description:
        "Of Gods and Pain (The Curse of Gods #2) written by Dakota Monroe which was published in February 29, 2024",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Of-Gods-and-Pain-The-Curse-of-Gods-2-by-Dakota-Monroe-Download.jpg",
      rating: 5,
      reviews: 5234,
      megaUrl: "https://transfer.it/t/yZ01jZs3mTbJ",
    }),
    createBook({
      title: "Phoenix Fated",
      author: "Ashe Moon",
      category: "Fantasy",
      description:
        "Phoenix Fated (The Phoenix Guardians #4) written by Ashe Moon which was published in June 30, 2025",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Phoenix-Fated-The-Phoenix-Guardians-4-by-Ashe-Moon-Download.jpg",
      rating: 5,
      reviews: 4321,
      megaUrl: "https://transfer.it/t/Pm4GPV9zwLJD",
    }),
    createBook({
      title: "Awakened Destiny",
      author: "Rowan Shane",
      category: "Fantasy",
      description:
        "Awakened Destiny (The Dark Ascendant Series #3) written by Rowan Shane which was published in March 1, 2025",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Awakened-Destiny-The-Dark-Ascendant-Series-3-by-Rowan-Shane-Download.png",
      rating: 5,
      reviews: 6789,
      megaUrl: "https://transfer.it/t/tKkUmB9XRB6R",
    }),
    createBook({
      title: "Hybrid Academy: Year One",
      author: "L.C. Mortimer",
      category: "Fantasy",
      description:
        "Hybrid Academy: Year One written by L.C. Mortimer which was published in July 31, 2019",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Hybrid-Academy-Year-One-by-L.C.-Mortimer-Download.jpg",
      rating: 5,
      reviews: 4567,
      megaUrl: "https://transfer.it/t/fEwPrA8HCTYQ",
    }),
  ],

  mystery: [
    createBook({
      title: "Ready or Not",
      author: "Tracy Darnton",
      category: "Mystery",
      description:
        "Ready or Not written by Tracy Darnton which was published in May 12, 2022",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Ready-or-Not-by-Tracy-Darnton-Download.jpg",
      rating: 4,
      reviews: 3654,
      megaUrl: "https://transfer.it/t/z9o2GZ1hSBgK",
    }),
    createBook({
      title: "The Good Liar",
      author: "Denise Mina",
      category: "Mystery",
      description:
        "The Good Liar written by Denise Mina which was published in July 29, 2025",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-The-Good-Liar-by-Denise-Mina-Download.jpg",
      rating: 4,
      reviews: 2987,
      megaUrl: "https://transfer.it/t/iM8JuYsTCRTS",
    }),
    createBook({
      title: "Dua Dini Hari",
      author: "Chandra Bientang",
      category: "Mystery",
      description:
        "Dua Dini Hari written by Chandra Bientang which was published in August 1, 2019",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Dua-Dini-Hari-by-Chandra-Bientang-Download.jpg",
      rating: 4,
      reviews: 4123,
      megaUrl: "https://transfer.it/t/fsCMnM1nzLaY",
    }),
    createBook({
      title: "Bonne nuit mon ange",
      author: "Aimee Molloy",
      category: "Mystery",
      description:
        "Bonne nuit mon ange written by Aimee Molloy which was published in October 13, 2020",
      coverImage:
        "https://media.oceanofpdf.com/2025/08/PDF-EPUB-Bonne-nuit-mon-ange-by-Aimee-Molloy-Download.jpg",
      rating: 4,
      reviews: 5678,
      megaUrl: "https://transfer.it/t/cdSGbMkFQDBS",
    }),
  ],

  scifi: [
    createBook({
      title: "Warhammer 40K: Crucible Of War Anthology",
      author: "Christian Dunn",
      category: "Sci-Fi",
      description:
        "Warhammer 40K: Crucible Of War Anthology written by Christian Dunn which was published in 2003",
      coverImage:
        "https://media.oceanofpdf.com/2024/10/PDF-EPUB-Warhammer-40K-Crucible-Of-War-Anthology-by-Christian-Dunn-Download.jpg",
      rating: 5,
      reviews: 4567,
      megaUrl: "https://transfer.it/t/utivbZ0HTbaD",
    }),
    createBook({
      title: "The Martian Megapack",
      author: "Wildside Press",
      category: "Sci-Fi",
      description:
        "The Martian Megapack written by Wildside Press which was published in Mar 9, 2012",
      coverImage:
        "https://media.oceanofpdf.com/2024/01/PDF-EPUB-The-Martian-Megapack-by-Wildside-Press-Download.jpg",
      rating: 5,
      reviews: 3789,
      megaUrl: "https://transfer.it/t/gUSZrR1BFBxZ",
    }),
    createBook({
      title: "Contested Dreams",
      author: "Randall N Bills",
      category: "Sci-Fi",
      description:
        "Contested Dreams written by Randall N Bills which was published in November 29, 2019",
      coverImage:
        "https://media.oceanofpdf.com/2023/03/PDF-EPUB-Contested-Dreams-by-Randall-N-Bills-Download.jpg",
      rating: 5,
      reviews: 5234,
      megaUrl: "https://transfer.it/t/qIuuKd01GJ6A",
    }),
    createBook({
      title: "Endless War",
      author: "Randall N Bills",
      category: "Sci-Fi",
      description:
        "Endless War written by Randall N Bills which was published in November 26, 2019",
      coverImage:
        "https://media.oceanofpdf.com/2023/03/PDF-EPUB-Endless-War-by-Randall-N-Bills-Download.jpg",
      rating: 4,
      reviews: 3456,
      megaUrl: "https://transfer.it/t/dx64acsnlJAA",
    }),
  ],

  nonfiction: [
    createBook({
      title: "Quantum Waveguide in Microcircuits, 2E",
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
