export const BOOK_NAMES = [
  '"The Times" Su Doku:The Utterly Addictive Number-placing Puzzle:(Bk. 1)',
  'A Child Called It',
  'A Short History of Nearly Everything',
  'A Short History of Tractors in Ukrainian',
  'A Spot of Bother',
  'A Thousand Splendid Suns',
  'Angels and Demons',
  'Anybody Out There?',
  'Atonement',
  'Billy Connolly',
  'Birdsong',
  'Breaking Dawn',
  'Brick Lane',
  'Bridget Jones: The Edge of Reason',
  'Can You Keep a Secret?',
  'Chocolat',
  'Dear Fatty',
  'Deception Point',
  'Digital Fortress',
  'Down Under',
  'Dreams from My Father:A Story of Race and Inheritance',
  'Eats, Shoots and Leaves:The Zero Tolerance Approach to Punctuation',
  'Eclipse',
  'Guinness World Records 2009:2009',
  'Guinness World Records 2010',
  'Happy Days with the Naked Chef',
  'Harry Potter and the Chamber of Secrets',
  'Harry Potter and the Deathly Hallows',
  'Harry Potter and the Goblet of Fire',
  'Harry Potter and the Half-blood Prince',
  'Harry Potter and the Order of the Phoenix',
  'Harry Potter and the Prisoner of Azkaban',
  'I Can Make You Thin',
  'I Know You Got Soul',
  'Jamie at Home:Cook Your Way to the Good Life',
  'Labyrinth',
  'Life of Pi',
  'Man and Boy',
  'Memoirs of a Geisha',
  'New Moon',
  'Nigella Express',
  'No Time for Goodbye',
  'Northern Lights:His Dark Materials S.',
  'Notes from a Small Island',
  'Sharon Osbourne Extreme:My Autobiography',
  'Small Island',
  'Stupid White Men:...and Other Sorry Excuses for the State of the Natio',
  'The Alchemist:A Fable About Following Your Dream',
  'The Amber Spyglass: His Dark Materials S.',
  'The Book Thief',
  'The Boy in the Striped Pyjamas',
  'The Broker',
  'The Catcher in the Rye',
  'The Curious Incident of the Dog in the Night-time',
  'The Da Vinci Code',
  'The Dangerous Book for Boys',
  'The Devil Wears Prada',
  'The Girl Who Played With Fire:Millennium Trilogy',
  'The Girl with the Dragon Tattoo:Millennium Trilogy',
  'The Gruffalo',
  'The House at Riverton',
  'The Interpretation of Murder',
  'The Island',
  'The Kite Runner',
  'The Lost Symbol',
  'The Lovely Bones',
  'The Return of the Naked Chef',
  'The Sound of Laughter',
  'The Subtle Knife:His Dark Materials S.',
  'The Summons',
  'The Tales of Beedle the Bard',
  'The Undomestic Goddess',
  'The Very Hungry Caterpillar:The Very Hungry Caterpillar',
  'The World According to Clarkson',
  'To Kill a Mockingbird',
  'Twilight',
  'White Teeth',
  'You are What You Eat:The Plan That Will Change Your Life',
  "Angela's Ashes:A Memoir of a Childhood",
  "At My Mother's Knee ...:and Other Low Joints",
  "Bridget Jones's Diary:A Novel",
  "Captain Corelli's Mandolin",
  "Delia's How to Cook:(Bk.1)",
  "Delia's How to Cook:(Bk.2)",
  "Dr. Atkins' New Diet Revolution:The No-hunger, Luxurious Weight Loss P",
  "Harry Potter and the Half-blood Prince:Children's Edition",
  "Harry Potter and the Philosopher's Stone",
  "Jamie's 30-minute Meals",
  "Jamie's Italy",
  "Jamie's Ministry of Food:Anyone Can Learn to Cook in 24 Hours",
  "Schott's Original Miscellany",
  "The Girl Who Kicked the Hornets' Nest:Millennium Trilogy",
  "The Memory Keeper's Daughter",
  "The No.1 Ladies' Detective Agency:No.1 Ladies' Detective Agency S.",
  "The Time Traveler's Wife",
  "Why Don't Penguins' Feet Freeze?:And 114 Other Questions",
]

export const BOOK_COLORS = [
  'border-l-lime-600 border-b-lime-600 bg-lime-500 before:border-r-lime-600',
  'border-l-orange-600 border-b-orange-600 bg-orange-500 before:border-r-orange-600',
  'border-l-emerald-500 border-b-emerald-500 bg-emerald-400 before:border-r-emerald-500',
  'border-l-purple-400 border-b-purple-400 bg-purple-300 before:border-r-purple-400',
]

export const BOOKS_WITH_COLORS = BOOK_NAMES.map((name, i) => ({
  name,
  colors: BOOK_COLORS[i % BOOK_COLORS.length],
}))

export const BOOKS = BOOKS_WITH_COLORS.slice(0, 15)
export const UNUSED_BOOKS = BOOKS_WITH_COLORS.slice(15)
