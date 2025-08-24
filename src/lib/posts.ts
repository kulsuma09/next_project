export interface Post {
  id: number;
  category: string;
  author: string;
  title: string;
  excerpt: string;
  image: string;
}


export const ALL_POSTS: Post[] = [
  {
    id: 1,
    category: "Technology",
    author:"james mori",
    title: "The Future of AI in Software Development",
    excerpt:
      "Explore how artificial intelligence is transforming the software development landscape, from automated testing to code generation.Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis vero ex iusto a tempora magnam. Blanditiis aspernatur, quas, molestias similique optio iste ad illum quo ratione, ducimus quasi ipsam modi dolore ea voluptatem vel nostrum officia! Magnam, nihil quae dolores quod, debitis exercitationem id ratione illum voluptas perspiciatis possimus voluptates porro adipisci aliquam, quo a aperiam eligendi doloribus! Repudiandae cum magnam, sint delectus quam deleniti corporis vitae quae facilis non similique necessitatibus earum itaque quibusdam dolor! Repellendus, aperiam magni? Culpa nesciunt odit repellendus consequuntur ipsa tempora modi neque eius quod obcaecati, veritatis reiciendis! Alias nesciunt modi cupiditate quibusdam porro, quas illum libero, omnis iusto voluptatibus mollitia magni. Modi hic sapiente illum optio facilis, blanditiis possimus eligendi tempore quia. Perspiciatis minus obcaecati iusto, repudiandae quisquam velit quis eaque magnam impedit magni quasi, voluptatem beatae eum, vitae nesciunt facilis est atque similique? Distinctio odio sapiente nobis sit eos excepturi qui, iusto cum? Dolorem ad ipsa atque quasi vitae voluptas voluptates reprehenderit, doloribus commodi odio! Dolorem ea laboriosam officia laborum perspiciatis ducimus. Ducimus, obcaecati amet rerum omnis quaerat, animi quibusdam deleniti quo assumenda cumque dolorum consectetur accusamus itaque fugit expedita totam, voluptatibus et quae officia! Similique minima ex in fugit quam ab.",
    image: "/assets/images/alex-knight-2EJCSULRwC8-unsplash.jpg",
  },
  {
    id: 2,
    category: "Lifestyle",
    author:"Mamun Khan",
    title: "Mindfulness and Productivity: A Guide",
    excerpt:
      "Learn how incorporating mindfulness practices into your daily routine can boost productivity and reduce stress.",
    image: "/assets/images/alexandre-chambon-aapSemzfsOk-unsplash.jpg",
  },
  {
    id: 3,
    category: "Technology",
    author:"Juned Khan",
    title: "Cybersecurity in the Age of Remote Work",
    excerpt:
      "Discover the latest cybersecurity threats and best practices for securing your data while working remotely.",
    image: "/assets/images/possessed-photography-g29arbbvPjo-unsplash.jpg",
  },
  {
    id: 4,
    category: "Lifestyle",
    author:"Ahmed rafi",
    title: "Sustainable Living: Tips for a Greener Lifestyle",
    excerpt:
      "Practical tips to live more sustainably—from reducing waste to conserving energy.",
    image: "/assets/images/arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg",
  },
  // (Optional extra category—won’t show when filtered to Technology/Lifestyle)
  {
    id: 5,
    category: "Travel",
    author:"Mamun Khan",
    title: "Top 5 Destinations to Visit in 2025",
    excerpt:"From tropical beaches to historic cities, discover the top travel destinations you must visit this year.",
    image: "/assets/images/thomas-ashlock-RAjND0B3HDw-unsplash.jpg",
  },
    {
    id: 6,
    category: "Nature",
    author:"Ahmed rafi",
    title: "Destinations to Visit",
    excerpt:"From tropical beaches to historic cities, discover the top travel destinations you must visit this year.",
    image: "/assets/images/antony-scillitoe-hUN2iVLotQo-unsplash.jpg",
  },
    {
    id: 7,
    category: "Business",
    author:"Junaid Jamsed",
    title: "Top 5 Destinations to Visit in 2025",
    excerpt:"From tropical beaches to historic cities, discover the top travel destinations you must visit this year.",
    image: "/assets/images/mike-kononov-lFv0V3_2H6s-unsplash.jpg",
  },
      {
    id: 8,
    category: "Nature",
     author:"Junaid Jamsed",
    title: "Top 5 Destinations to Visit in 2025",
    excerpt:"From tropical beaches to historic cities, discover the top travel destinations you must visit this year.",
    image: "/assets/images/maahid-photos-SbNheLd8ZGI-unsplash.jpg",
  },
    {
    id: 9,
    category: "Business",
     author:"Junaid Jamsed",
    title: "Top 5 Destinations to Visit in 2025",
    excerpt:"From tropical beaches to historic cities, discover the top travel destinations you must visit this year.",
    image: "/assets/images/sean-pollock-PhYq704ffdA-unsplash.jpg",
  },
];