import { BODIES, TITLES } from '@/assets/sharings'

export const generateSharingLink = (url: string, insult: string) => {
  return url
    .replace('$TITLE', encodeURIComponent(prepareRandom(TITLES, insult)))
    .replace('$BODY', encodeURIComponent(prepareRandom(BODIES, insult)))
    .replace(
      '$URL',
      encodeURIComponent(`https://youspoon.iamnoah.dev?insult=${encodeURIComponent(insult)}`)
    )
}

const prepareRandom = (arr: string[], insult: string) => {
  return arr[Math.floor(Math.random() * arr.length)].replace('$INSULT', insult)
}
