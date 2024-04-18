import adjectives from '@/assets/words/adjectives'
import nouns from '@/assets/words/nouns'

export const generateInsult = () => {
  return `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`
}
