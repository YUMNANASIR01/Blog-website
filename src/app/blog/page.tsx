import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { client } from "@/sanity/lib/client"

const blogPosts = [


{
  id: 1,
  title: "Styling Gold Jewellery for Casual Wear",
  excerpt: "Learn how to style gold jewellery to enhance your casual looks effortlessly.",
  image: "/pic1.jpg",
  date: "January 1, 2025",
  readTime: "4 min read",
},
{
  id: 2,
  title: "The Art of Layering Necklaces",
  excerpt: "Master the art of layering necklaces for a chic and modern look.",
  image: "/pic2.webp",
  date: "January 3, 2025",
  readTime: "6 min read",
},
{
  id: 3,
  title: "Gold Jewellery for Formal Events",
  excerpt: "Discover tips for selecting the perfect gold jewellery for formal occasions.",
  image: "/pic3.webp",
  date: "January 5, 2025",
  readTime: "5 min read",
},
{
  id: 4,
  title: "Choosing the Right Gold Earrings",
  excerpt: "Find out how to pick the right gold earrings for any outfit.",
  image: "/pic4.webp",
  date: "January 7, 2025",
  readTime: "3 min read",
},
{
  id: 5,
  title: "Mixing Gold and Silver Jewellery",
  excerpt: "Learn how to combine gold and silver pieces for a stunning look.",
  image: "/pic5.webp",
 date: "January 9, 2025",
  readTime: "7 min read",
},
{
  id: 6,
  title: "Caring for Your Gold Jewellery",
  excerpt: "Explore the best practices for maintaining the shine of your gold jewellery.",
  image: "/pic6.jpg",
  date: "January 11, 2025",
  readTime: "4 min read",
},
{
  id: 7,
  title: "Statement Pieces: When Less is More",
  excerpt: "Discover how to style statement gold pieces effectively.",
  image: "/pic7.jpg",
  date: "January 13, 2025",
  readTime: "5 min read",
},
{
  id: 8,
  title: "Gold Rings: A Timeless Accessory",
  excerpt: "Dive into the timeless elegance of gold rings and how to wear them.",
  image: "/pic8.webp",
  date: "January 15, 2025",
  readTime: "6 min read",
},
{
  id: 9,
  title: "Gold Jewellery for Minimalists",
  excerpt: "Tips for minimalist styling with simple yet elegant gold jewellery.",
  image: "/pic9.webp",
  date: "January 17, 2025",
  readTime: "3 min read",
},
{
  id: 10,
  title: "Modern Gold Jewellery Trends",
  excerpt: "Stay updated with the latest trends in modern gold jewellery.",
  image: "/pic10.webp",
  date: "January 19, 2025",
  readTime: "5 min read",
},
{
  id: 11,
  title: "Custom Gold Jewellery Designs",
  excerpt: "Explore unique custom gold jewellery options for a personal touch.",
  image: "/pic11.jpg",
  date: "January 21, 2025",
  readTime: "7 min read",
},
{
  id: 12,
  title: "Eco-Friendly Gold Jewellery",
  excerpt: "Discover sustainable gold jewellery options for conscious buyers.",
  image: "/pic12.webp",
  date: "January 23, 2025 ",
  readTime: "4 min read",
},

]

export default async function Blog() {
  const res = await client.fetch(
    "*[_type == 'landingPage'][0].sections[1].post[]{ 'postTitle' : postTitle,'postId': postId, 'postDescription': postDescription, 'postImage': postImage.asset->url,  'postReadTime': postReadTime,   'postDate': postDate}"
  )

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Jewellery Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => {
          // Add query parameter conditionally
          const href = parseInt(post.readTime) > 5 
            ? `/blog/${post.id}?showDetails=true`
            : `/blog/${post.id}`

          return (
            <Card key={post.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-4">
                <Link href={href}>
                  <button className="text-sm text-primary font-bold border border-primary px-2 py-1 rounded bg-transparent hover:bg-black hover:text-white focus:underline transition-colors duration-300">
                    Read more
                  </button>
                </Link>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}












































// // \src\app\blog\page.tsx
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import Link from "next/link";
// import Image from "next/image";

// interface BlogPost {
//   id: number;
//   title: string;
//   excerpt: string;
//   image: string;
// }

// const posts:  BlogPost[] = [
//   {
//     id: 1,
//     title: "THE ULTIMATE GUIDE TO BUYING GOLD JEWELLERY",
//     excerpt: "Who doesn't love the gorgeous glamour of gold jewellery?...",
//     image: "/pic1.jpg",
//   },
//   {
//     id: 2,
//     title: "Don't be Conned: Jewellery Myths & Misleading Marketing",
//     excerpt: "Recently I saw an ad for a new jewellery brand which bragged...",
//     image: "/pic2.webp",
//   },
//     {
//     id: 3,
//     title: "Australian Fashion: Christmas & Summer Outfit Ideas",
//     excerpt: "Look dashing as you sleigh this Christmas (and throughout the summer season) in our handmade jewellery. As we do each year, we’ve lined up some of our range with pieces from our fave ethical Austra...",
//     image: "/pic3.webp",
//   },
//     {
//     id: 4,
//     title: "Australian Christmas Gifts: Pair Them Up!",
//     excerpt: "Joy to the world; it’s the time of year to buy pressies for your favourite peoples (and even perhaps those you don’t know heaps well). Not a seasoned gifter? No worries! Our resident present hunter...",
//     image: "/pic4.webp",
//   },
//   {
//     id: 5,
//     title: "Australian Christmas Gifts: 10 Reasons to Choose Handmade Jewellery",
//     excerpt: "As the festive season approaches, the search for the perfect Australian Christmas gifts begins in earnest. While the convenience of big-box retailers and mass online marketplaces may be tempting, t...",
//     image: "/pic5.webp",
//   },
//   {
//     id: 6,
//     title: "How to Choose Gifts for Women in 6 Steps",
//     excerpt: "Are you style challenged? Or do you just lack some confidence about how to choose gifts for women? How do you pick perfect presents for the women in your life? You're not alone: it's not always ea...",
//     image: "/pic6.jpg",
//   },
//   {
//     id: 7,
//     title: "Gift Ideas: Make it Meaningful",
//     excerpt: "A well-made piece of jewellery from a loved one can be a gift we wear every day, with emotional ties to the person from whom it came. Many are lucky enough to have pieces that have been passed dow...",
//     image: "/pic7.jpg",
//   },
//   {
//     id: 8,
//     title: "How to Style Silver Jewellery",
//     excerpt: "Did you know that in Australia the jewellery industry is worth almost $3 billion annually? That's a lot of sparkles. If you're one of the many women who love to accessorise with jewellery, you kno...",
//     image: "/pic8.webp",
//   },
//   {
//     id: 9,
//     title: "7 Online Jewellery Shopping Mistakes to Avoid",
//     excerpt: "Like so many other products, jewellery sales are increasingly moving online rather than taking place in a traditional brick and mortar store. Shopping online is of course quick and convenient, plu...",
//     image: "/pic9.webp",
//   },
//   {
//     id: 10,
//     title: "Are gold rings worth the investment?",
//     excerpt: "Gold rings have been a much sought after jewellery accessory for millennia, with some of the oldest rings in gold found to date having been made around 6,500 years ago. The beauty, elegance, preci...",
//     image: "/pic10.webp",
//   },
//   {
//     id: 11,
//     title: "All about Opal Jewellery",
//     excerpt: "Opal is a unique and fascinating gemstone that has been used in jewellery for millennia. With its distinctive play of colours and iridescence, opal jewellery is both beautiful and eye-catching. Op...",
//     image: "/pic11.jpg",
//   },
//   {
//     id: 12,
//     title: "Most popular jewellery this Christmas (2023)",
//     excerpt: "I'm always fascinated to see which of our Australian jewellery designs will be popular with our lovely customers in the lead up to Christmas - and this year is no exception and I've just put togeth...",
//     image: "/pic12.webp",
//   },
// ];

// export default function Blog() {
//   return (
//     <div className="container mx-auto px-4 py-12 mt-[60px]">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {posts.map((post) => (
//           <Card key={post.id} className="border-none shadow-none overflow-hidden group">
//             <div className="aspect-[4/3] overflow-hidden">
//               <Image
//                 src={post.image}
//                 alt={post.title}
//                 width={600}
//                 height={400}
//                 className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             <CardContent className="pt-6 px-0">
//               <h2 className="font-serif text-xl mb-4 leading-tight">
//                 {post.title}
//               </h2>
//               <p className="text-muted-foreground text-sm leading-relaxed mb-4">
//                 {post.excerpt}
//               </p>
//             </CardContent>

//             <CardFooter className="group">
//               <Link href={`/blog/${post.id}`}>
//                 <button className="text-sm text-primary font-bold hover:underline border border-primary px-2 py-1 rounded bg-transparent group-hover:bg-primary group-hover:text-white transition-colors duration-300">
//                   Read more
//                 </button>
//               </Link>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }




// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import Link from "next/link"
// import Image from "next/image"

// interface BlogPost {
//   id: number
//   title: string
//   excerpt: string
//   image: string
// }

// const posts: BlogPost[] = [
//   {
//     id: 1,
//     title: "THE ULTIMATE GUIDE TO BUYING GOLD JEWELLERY",
//     excerpt: "Who doesn't love the gorgeous glamour of gold jewellery? Its beautiful quality and colour make it the most sought after metal when it comes to jewellery. That said, even gold jewellery won't do mu...",
//     image: "/pic1.jpg",
//   },
//   {
//     id: 2,
//     title: "Don't be Conned: Jewellery Myths & Misleading Marketing",
//     excerpt: "Recently I saw an ad for a new jewellery brand which bragged about the amazing features of their jewellery which they claimed made it superior to other jewellery designs. As a jewellery profession...",
//     image: "/pic2.webp",
//   },
//   {
//     id: 3,
//     title: "Australian Fashion: Christmas & Summer Outfit Ideas",
//     excerpt: "Look dashing as you sleigh this Christmas (and throughout the summer season) in our handmade jewellery. As we do each year, we’ve lined up some of our range with pieces from our fave ethical Austra...",
//     image: "/pic3.webp",
//   },
//     {
//     id: 4,
//     title: "Australian Christmas Gifts: Pair Them Up!",
//     excerpt: "Joy to the world; it’s the time of year to buy pressies for your favourite peoples (and even perhaps those you don’t know heaps well). Not a seasoned gifter? No worries! Our resident present hunter...",
//     image: "/pic4.webp",
//   },
//   {
//     id: 5,
//     title: "Australian Christmas Gifts: 10 Reasons to Choose Handmade Jewellery",
//     excerpt: "As the festive season approaches, the search for the perfect Australian Christmas gifts begins in earnest. While the convenience of big-box retailers and mass online marketplaces may be tempting, t...",
//     image: "/pic5.webp",
//   },
//   {
//     id: 6,
//     title: "How to Choose Gifts for Women in 6 Steps",
//     excerpt: "Are you style challenged? Or do you just lack some confidence about how to choose gifts for women? How do you pick perfect presents for the women in your life? You're not alone: it's not always ea...",
//     image: "/pic6.jpg",
//   },
//   {
//     id: 7,
//     title: "Gift Ideas: Make it Meaningful",
//     excerpt: "A well-made piece of jewellery from a loved one can be a gift we wear every day, with emotional ties to the person from whom it came. Many are lucky enough to have pieces that have been passed dow...",
//     image: "/pic7.jpg",
//   },
//   {
//     id: 8,
//     title: "How to Style Silver Jewellery",
//     excerpt: "Did you know that in Australia the jewellery industry is worth almost $3 billion annually? That's a lot of sparkles. If you're one of the many women who love to accessorise with jewellery, you kno...",
//     image: "/pic8.webp",
//   },
//   {
//     id: 9,
//     title: "7 Online Jewellery Shopping Mistakes to Avoid",
//     excerpt: "Like so many other products, jewellery sales are increasingly moving online rather than taking place in a traditional brick and mortar store. Shopping online is of course quick and convenient, plu...",
//     image: "/pic9.webp",
//   },
//   {
//     id: 10,
//     title: "Are gold rings worth the investment?",
//     excerpt: "Gold rings have been a much sought after jewellery accessory for millennia, with some of the oldest rings in gold found to date having been made around 6,500 years ago. The beauty, elegance, preci...",
//     image: "/pic10.webp",
//   },
//   {
//     id: 11,
//     title: "All about Opal Jewellery",
//     excerpt: "Opal is a unique and fascinating gemstone that has been used in jewellery for millennia. With its distinctive play of colours and iridescence, opal jewellery is both beautiful and eye-catching. Op...",
//     image: "/pic11.jpg",
//   },
//   {
//     id: 12,
//     title: "Most popular jewellery this Christmas (2023)",
//     excerpt: "I'm always fascinated to see which of our Australian jewellery designs will be popular with our lovely customers in the lead up to Christmas - and this year is no exception and I've just put togeth...",
//     image: "/pic12.webp",
//   },

// ]

// export default function BlogGrid() {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {posts.map((post) => (
//           <Card key={post.id} className="border-none shadow-none overflow-hidden group">
//             <div className="aspect-[4/3] overflow-hidden">
//               <Image
//                 src={post.image}
//                 alt={post.title}
//                 width={600}
//                 height={400}
//                 className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             <CardContent className="pt-6 px-0">
//               <h2 className="font-serif text-xl mb-4 leading-tight">
//                 {post.title}
//               </h2>
//               <p className="text-muted-foreground text-sm leading-relaxed mb-4">
//                 {post.excerpt}
//               </p>
//             </CardContent>

//             <CardFooter className="group">
//               <Link href={`/blog/${post.id}`}>
//                 <button className="text-sm text-primary font-bold hover:underline border border-primary px-2 py-1 rounded bg-transparent group-hover:bg-primary group-hover:text-white transition-colors duration-300">
//                   Read more
//                 </button>
//               </Link>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }








// /////----------------------------------blog id
// // 
// const GoldJewelleryGuide = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-6">ULTIMATE GUIDE TO GOLD JEWELLERY</h1>

//       <div className="max-w-3xl mx-auto"> 
//         <div className="flex mb-8 items-center">
//           <div className="w-1/2 pr-6 mt-5">
//             <Image
//               src="/pic1.jpg" 
//               alt="Gold Jewellery"
//               width={200} 
//               height={100} 
//               className="w-full h-auto object-cover rounded-lg"
//             />
//           </div>
//           <div className="w-1/2 mt-[20px]">
//             <p>
//               Who doesn't love the gorgeous glamour of gold jewellery? Its beautiful quality and colour make it the most sought after metal when it comes to jewellery. That said, even gold jewellery won't do much for you if you don't consider how to style it.
//               When styling jewellery, some people make the mistake of overdoing it without panache, leaving them looking overdone - and not in a good way. There are also those who wear the same pieces day in and day out, some of which may be lovely but they get lost in repetition (and I bet they need a good clean too!).
//             you'll really want to make the most of your investment and style it so you look your best when wearing it - and so that you show it off appropriately.
//               Here is our best guide to styling different types of gold jewellery.
//             </p>
//           </div>
//         </div>

//         <p className="text-lg leading-relaxed mb-4">
//           Gold jewellery has an undeniable allure. Its warm glow and timeless elegance have captivated people for centuries. Whether you're a seasoned collector or just beginning your journey into the world of gold, this guide will provide you with valuable insights into selecting, caring for, and styling your precious pieces.
//         </p>

//         <h2 className="text-2xl font-semibold mb-4">Choosing Your Main Piece of Jewellery</h2>

//         <p className="text-lg leading-relaxed mb-4">
//         When it comes to jewellery, you'll often want to create a focal point. In other words, you will want to find a specific area that you want others to be drawn to when they look at you. Consciously or not, this is a way of communicating something about yourself to other people, so it pays to spend some time thinking about it.
// A common mistake people make is either wearing too much jewellery in an unfocused way or wearing other jewellery that visually competes with the main piece of jewellery they want to be the focus.
//         For example, if you're trying to show off a beautiful gold necklace, but also wear a huge pair of hoop earrings, people may end up looking much more at your earrings than your necklace. Even if they don't, the earrings will still be a distraction. Instead of doing this, focus on the one piece of jewellery that you really want to stand out and build the rest of your jewellery styling around 
// If you want the focus to be on your earrings, considering wearing a very subtle necklace - or don't wear a necklace at all and go for delicate bracelets and rings. If the focal point will be your necklace, then wear small earrings and delicate rings.
// For instance, choosing all gold jewellery with the same or similar coloured gemstones appearing in rings, earrings and necklaces can work beautifully, especially if you co-ordinate your clothing. Imagine a bright, colour-blocked dress paired with such a collection of jewellery.
      
//         </p>
//         <div className="mb-8">
//           <Image
//             src="/card1.webp" 
//             alt="Choosing Gold"
//             width={300} 
//             height={300}
//             className="w-full h-auto object-cover rounded-lg"
//           />
//         </div>
//         <ul className="list-disc pl-6 mb-4">
//           <li>
//             <b>Consider the Karatage:</b> Gold purity is measured in karats (K). 24K gold is pure gold, while 18K, 14K, and 10K contain varying amounts of other metals. Higher karatage means a richer color and higher value, but also increased softness.
//           </li>
//           <li>
//             <b>Choose the Right Color:</b> Gold comes in various colors, including yellow, white, and rose gold. Each color has its unique characteristics and complements different skin tones.
//           </li>
//           <li>
//             <b>Think about Style and Occasion:</b> Consider whether you're looking for a statement piece for special occasions or everyday wear. Choose a design that reflects your personal style and complements your wardrobe.
//           </li>
//         </ul>

//         <h2 className="text-2xl font-semibold mb-4">Match Gold Jewellery With Your Outfit</h2>

//         <p className="text-lg leading-relaxed mb-4">
//         Yes, gold jewellery is beautiful, but that does not necessarily mean it will work with every outfit you own. You should always consider jewellery as being part of your wardrobe and think about how it will work with what clothing you're planning on wearing and the other accessories you might choose.

// In particular have a think about which colours will work with your gold jewellery. Wearing clothing with dark yellow, golden, orange or even red tones may cause it to get lost, for instance. Wearing it with neon colours is unlikely to work, but if you can pull it off, then good for you! 
// Plain black or white both always look amazing with gold jewellery as they make the gorgeous warm colouring stand out beautifully. Blue and gold are complimentary colours, so a rich dark blue with gold jewellery will always look wonderful - think of lapis lazuli colourings. You can also consider a conscious clash of colours, such as a vivid magenta paired with gold. 

// Be sure to experiment with different types of jewellery before you leave the house to see what looks best. If you're wearing something simple, you may want to spice up your outfit with a larger pair of earrings, a necklace, or a bracelet.

// On the other hand, if your outfit is more elaborate, it may be better to wear more subdued jewellery, so it doesn't distract from what you are wearing. See above for advice about choosing a focal point.
//         </p>
//         <div className="mb-8">
//           <Image
//             src="/card2.webp" 
//             alt="Caring for Gold"
//             width={400} 
//             height={200} 
//             className="w-full h-auto object-cover rounded-lg"
//           />
//         </div>
//         <ul className="list-disc pl-6 mb-4 ">
//           <li>
//             <b>Store Properly:</b> Store your gold jewellery in a soft-lined box or pouch to prevent scratches and tangles.
//           </li>
//           <li>
//             <b>Clean Regularly:</b> Clean your jewellery regularly with a mild soap and warm water solution. Use a soft brush to remove dirt and grime.
//           </li>
//           <li>
//             <b>Avoid Harsh Chemicals:</b> Avoid exposing your gold jewellery to harsh chemicals, such as chlorine, bleach, and perfumes.
//           </li>
//         </ul>



//         <h2 className="text-2xl font-semibold mb-4">Layer or Stack Your Gold Jewellery</h2>

// <p className="text-lg leading-relaxed mb-4">
// While it's generally a good idea to not overdo the amount of jewellery you're wearing, layering or stacking is a great way to show off multiple pieces of jewellery at once and the layer or stack itself can be the focal point for your outfit. It's also a great solution when you don't know what to wear or if you want to dress up the most boring outfit.

// When it comes to necklaces, layering works best with dainty, lightweight necklaces of different sizes, shapes and lengths so they generally don't overlap. You will often choose a focal point (it's a common theme!) and build the layers around it so that one necklace is the stand out. However, you can also make this look work with a more delicate and sparse array of small but intriguing pendants, each of which will grab the eye at different times.

// You can also wear a variety of different rings in a stack, either on one finger or spread across several. Experiment with mixing gemstones, simple bands combined with an elaborate cocktail ring, etc.. It's all about the look you're wanting to pull off. Gold rings are wonderful to add to a ring stack with other metals as they provide that lovely pop of warm colouring. Ring stacks are a great way to mix metals, but if you can and the outfit suits, go all out and wear an entirely gold stack for a very elegant look.

// Bracelets are also an excellent option for stacking and even earrings if you have multiple piercings.

// Check out our guide to building the perfect ring stack. Also see our handy article about how to mix, match and stack your jewellery.
// </p>
// <div className="mb-8">
//   <Image
//     src="/card3.webp" 
//     alt="Caring for Gold"
//     width={300}
//     height={200} 
//     className="w-full h-auto object-cover rounded-lg"
//   />
// </div>
// <ul className="list-disc pl-6 mb-4 ">
//   <li>
//     <b>Store Properly:</b> Store your gold jewellery in a soft-lined box or pouch to prevent scratches and tangles.
//   </li>
//   <li>
//     <b>Clean Regularly:</b> Clean your jewellery regularly with a mild soap and warm water solution. Use a soft brush to remove dirt and grime.
//   </li>
//   <li>
//     <b>Avoid Harsh Chemicals:</b> Avoid exposing your gold jewellery to harsh chemicals, such as chlorine, bleach, and perfumes.
//   </li>
// </ul>

//         {/* ... Add more sections as needed ... */}
//       </div>
//     </div>
//   );
// };

// export default GoldJewelleryGuide;