// Import MDX files directly
import anxietyGuide from '../blogPosts/anxiety-guide.mdx'
import mindfulnessTherapy from '../blogPosts/mindfulness-therapy.mdx'
import healthyRelationships from '../blogPosts/healthy-relationships.mdx'

// Map of all posts with their frontmatter
const posts = {
  'anxiety-guide': {
    slug: 'anxiety-guide',
    frontmatter: {
      title: "Porozumění úzkosti: Kompletní průvodce",
      date: "2024-03-16",
      readTime: "12 min čtení",
      excerpt: "Komplexní průvodce porozuměním úzkosti, jejím příznakům a efektivním strategiím zvládání pro lepší duševní zdraví.",
      tags: ["Úzkost", "Duševní zdraví", "Sebepéče", "Pohoda"],
      image: "stress.webp",
      author: {
        name: "Tom Nováček",
        role: "Licencovaný psychoterapeut",
        image: "tom-home.webp"
      }
    },
    Component: anxietyGuide
  },
  'mindfulness-therapy': {
    slug: 'mindfulness-therapy',
    frontmatter: {
      title: "Síla všímavosti v terapii",
      date: "2024-03-10",
      readTime: "8 min čtení",
      excerpt: "Objevte, jak mohou praktiky všímavosti posílit vaši terapeutickou cestu a zlepšit celkovou pohodu.",
      tags: ["Všímavost", "Terapie", "Pohoda"],
      image: "mindfulness.webp",
      author: {
        name: "Tom Nováček",
        role: "Licencovaný psychoterapeut",
        image: "tom-home.webp"
      }
    },
    Component: mindfulnessTherapy
  },
  'healthy-relationships': {
    slug: 'healthy-relationships',
    frontmatter: {
      title: "Budování zdravých vztahů: Průvodce propojením",
      date: "2024-03-05",
      readTime: "12 min čtení",
      excerpt: "Naučte se základní strategie pro budování a udržování zdravých vztahů ve všech oblastech vašeho života.",
      tags: ["Vztahy", "Komunikace", "Osobní růst"],
      image: "relationships.webp",
      author: {
        name: "Tom Nováček",
        role: "Licencovaný psychoterapeut",
        image: "tom-home.webp"
      }
    },
    Component: healthyRelationships
  }
}

// Debug log to see what files we're getting
console.log('Dostupné MDX soubory:', Object.keys(posts))

export function getPostBySlug(slug) {
  const post = posts[slug]
  if (!post) {
    console.log('Článek se slugem nenalezen:', slug) // Debug log
    return null
  }

  console.log('Obsah článku pro', slug, ':', post) // Debug log
  
  return post
}

export function getAllPosts() {
  console.log('Načítání všech článků...') // Debug log
  const allPosts = Object.values(posts)
    .filter(post => {
      console.log('Filtrování článku:', post) // Debug log
      return post.frontmatter && post.frontmatter.date
    })
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))

  console.log('Všechny zpracované články:', allPosts) // Debug log
  return allPosts
} 