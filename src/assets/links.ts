import { MailSolid, MessageTextSolid } from '@iconoir/vue'
import {
  FacebookIcon,
  LinkedInIcon,
  PinterestIcon,
  TelegramIcon,
  TumblrIcon,
  WhatsAppIcon,
  XIcon
} from 'vue3-simple-icons'

export const LINKS = [
  {
    name: 'X',
    url: 'https://twitter.com/intent/tweet?text=$TITLE.%0A%0A$BODY%0A%0A$URL',
    Icon: XIcon
  },
  {
    name: 'Email',
    url: 'mailto:?body=$BODY%0A%0A$URL&subject=$TITLE',
    Icon: MailSolid
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/sharer/sharer.php?u=$URL',
    Icon: FacebookIcon
  },
  {
    name: 'Telegram',
    url: 'https://t.me/share/url?url=$URL&text=$TITLE.%0A%0A$BODY',
    Icon: TelegramIcon
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me?text=$TITLE.%0A%0A$BODY%0A%0A$URL',
    Icon: WhatsAppIcon
  },
  {
    name: 'Pinterest',
    url: 'https://pinterest.com/pin/create/button/?url=$URL&description=$TITLE.%0A%0A$BODY',
    Icon: PinterestIcon
  },
  {
    name: 'Tumblr',
    url: 'https://www.tumblr.com/widgets/share/tool?posttype=link&url=$URL&caption=$TITLE%0A%0A$BODY',
    Icon: TumblrIcon
  },
  {
    name: 'SMS',
    url: 'sms:?body=$TITLE.%0A%0A$BODY%0A%0A$URL',
    Icon: MessageTextSolid
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/sharing/share-offsite/?url=$URL',
    Icon: LinkedInIcon
  }
]
