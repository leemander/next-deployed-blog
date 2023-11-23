const CATEGORIES = [
  { name: "Sports", catslug: "sports" },
  { name: "Culture", catslug: "culture" },
  { name: "Entertainment", catslug: "entertainment" },
  { name: "Fashion", catslug: "fashion" },
];

const POSTS = [
  {
    title: "The Exciting World of Lucha Libre",
    content:
      "Step into the electrifying world of Lucha Libre, where the roar of the crowd mixes with the acrobatic prowess of masked wrestlers. In this high-octane sport, competitors fly off the ropes, executing gravity-defying maneuvers that keep fans on the edge of their seats. From the iconic masks to the dramatic storytelling in the ring, explore the unique blend of athleticism and theatricality that defines the exciting universe of Lucha Libre.",
    slug: "exciting-world-lucha-libre",
    category: "Sports",
  },
  {
    title: "Behind the Mask: The Mystery of Luchadores",
    content:
      "Delve into the enigmatic world behind the masks worn by Luchadores, the iconic symbols of Mexican wrestling. These masks are more than just accessories; they are embodiments of tradition, identity, and even superstition. Uncover the deep-rooted cultural significance of the masks, as well as the rituals and ceremonies associated with their creation. Join us on a journey to unveil the mystery that lies beneath the surface of these symbolic and often elaborate facial coverings.",
    slug: "behind-the-mask-luchadores",
    category: "Culture",
  },
  {
    title: "Top 10 Lucha Libre Moves You Must See",
    content:
      "Prepare for an adrenaline-fueled ride through the top 10 jaw-dropping Lucha Libre moves that leave audiences in awe. From gravity-defying flips to bone-crushing slams, these maneuvers showcase the incredible athleticism and skill of Luchadores. Whether you're a seasoned fan or a newcomer to the world of Mexican wrestling, this list is your passport to the heart-pounding, high-flying action that defines Lucha Libre in the ring.",
    slug: "top-10-lucha-libre-moves",
    category: "Entertainment",
  },
  {
    title: "Legendary Luchadores: Heroes of the Ring",
    content:
      "Meet the larger-than-life personalities that have etched their names in the annals of Lucha Libre history. These legendary Luchadores are not just athletes; they are cultural icons and heroes. From the iconic El Santo to the contemporary stars making waves today, discover the stories behind the masks and the legacies they've created. Join us as we celebrate the heroes of the ring and their lasting impact on the world of professional wrestling.",
    slug: "legendary-luchadores-heroes",
    category: "Sports",
  },
  {
    title: "Lucha Libre and Cultural Significance",
    content:
      "Beyond the ring, Lucha Libre has woven itself into the cultural fabric of Mexico and beyond. Explore how this dynamic sport reflects the values, traditions, and aspirations of the Mexican people. From its roots in ancient Mesoamerican traditions to its modern-day resonance in popular culture, Lucha Libre has become a symbol of national identity. Join us as we delve into the cultural significance that makes Lucha Libre more than just a sport; it's a vibrant expression of a rich and diverse heritage.",
    slug: "lucha-libre-cultural-significance",
    category: "Culture",
  },
  {
    title: "The Evolution of Lucha Libre Costumes",
    content:
      "Take a visual journey through time as we explore the evolution of Lucha Libre costumes. From the early days of simple, utilitarian attire to the elaborate and vibrant designs of today, these costumes are an integral part of the spectacle. Discover the symbolism behind the colors, patterns, and motifs adorning the iconic masks and capes. Join us in appreciating the artistry and creativity that goes into crafting the visual identity of Lucha Libre and how it continues to captivate audiences worldwide.",
    slug: "evolution-lucha-libre-costumes",
    category: "Fashion",
  },
];

export function getPosts() {
  //to be replaced with API call in future
  return POSTS;
}

export function getPostBySlug(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}

export function getCategories() {
  return CATEGORIES;
}

export function getPostByCategory(catslug: string) {
  return POSTS.filter((post) => post.category === catslug);
}
