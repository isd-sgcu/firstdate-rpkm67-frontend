import { StaticImageData } from 'next/image';
import LaijaiLogo from '@public/baan-logo/BaanLaijai.png';
import AgapeLogo from '@public/baan-logo/BaanAgape.png';
import WantedLogo from '@public/baan-logo/BaanWanted.jpeg';
import WorkLogo from '@public/baan-logo/BaanWork.jpg';
import DungPieceLogo from '@public/baan-logo/BaanDungPiece.png';
import KohLogo from '@public/baan-logo/BaanKoh.jpeg';
import KhonnooLogo from '@public/baan-logo/BaanKhunNoo.jpg';
import BhuemLogo from '@public/baan-logo/BaanBhuem.png';
import AChuanLogo from '@public/baan-logo/BaanAChuan.jpg';
import TheLogo from '@public/baan-logo/BaanThe.png';
import BoeLogo from '@public/baan-logo/BaanBoe.jpg';
import JijahLogo from '@public/baan-logo/BaanJijah.png';
import AAumLogo from '@public/baan-logo/BaanAAum.png';
import SodLogo from '@public/baan-logo/BaanSod.png';
import HaawLogo from '@public/baan-logo/BaanHaaw.png';
import KidsLogo from '@public/baan-logo/BaanKids.png';
import JodehLogo from '@public/baan-logo/BaanJodeh.png';
import KoomLogo from '@public/baan-logo/BaanKoom.jpeg';
import SoeiteeLogo from '@public/baan-logo/BaanSoeitee.png';
import JoLogo from '@public/baan-logo/BaanJo+.png';
import RangsLogo from '@public/baan-logo/BaanRangs.png';
import YimLogo from '@public/baan-logo/BaanYim.jpeg';

export interface BaanInfoProps {
  name: {
    th: string;
    en: string;
  };
  logo: StaticImageData;
  max: number;
  size: 'S' | 'M' | 'L' | 'XL' | 'XXL';
  description: {
    th: string;
    en: string;
  };
  ig: string;
  fb?: string;
  message: {
    th: string;
    en: string;
  };
}

export const baanInfos: BaanInfoProps[] = [
  {
    name: {
      th: 'หลายใจ',
      en: 'Laijai',
    },
    logo: LaijaiLogo,
    max: 93,
    size: 'S',
    description: {
      th: 'เรียนผู้โดยสาร CU108 สายการบินรับเพื่อนก้าวใหม่กำลังอยู่ในสถานะแปรปรวนใจ เครื่องบินจะทำการลงจอดพักร้อนพักใจ ณ ‘หลายใจ island’ ที่ที่จะทำให้ชาว CU108 กระชุ่มกระชวยหัวใจและได้รับการดูแลอย่างอบอุ่นจากชาวเกาะหลายใจพื้นเมือง พร้อมสร้างเรื่องราวดี ๆ พร้อมจับมือเข้ารั้วจามจุรีไปด้วยกัน',
      en: 'Dear CU108 passengers, Rub Puen Kaow Mai Airline is currently facing an uncertain state of mind. We will make a landing at ‘Lai Jai Island’ for a short vacation where CU108 can enjoy and have fun with a warm welcome by the Lai Jai Islanders. Get ready to create wonderful memories while holding hands into CU together.',
    },
    ig: 'baanlaijai',
    message: {
      th: 'ถ้ารักเดียวยังอกหัก เชิญมาพักที่เกาะหลายใจ',
      en: `Roses are red, violets are blue
At the Laijai island, we’re waiting for you . 💖`,
    },
  },
  {
    name: {
      th: 'อากาเป้',
      en: 'agape',
    },
    logo: AgapeLogo,
    max: 93,
    size: 'S',
    description: {
      th: 'อากาเป้ (น.) : ด้วยพลังความรักอันไร้เงื่อนไข และด้วยการร่วมแรงกายแรงใจของทุกคนในบ้าน จึงทำให้เครื่องบินลำนี้บินสูงขึ้นไปถึงอวกาศได้ โดยไม่มีเงื่อนไขใดมากำหนดเช่นกัน 🥰✈️',
      en: "agape (n.) /ɑːˈɡɑː.peɪ/ : With the power of everyone's unconditional love and effort, this plane may soar high through the sky into the space, without anything hold us back. 🥰✈️",
    },
    ig: 'baanagapechula',
    fb: 'Baan AGAPE Chula',
    message: {
      th: 'ท่านผู้โดยสารทุกท่าน ขอต้อนรับสู่สายการบินอากาเป้ เที่ยวบินที่ CU108 ซึ่งจะนำทุกท่านมุ่งขึ้นสู่อวกาศ ด้วยการบริการกว่า 25 ปีและด้วยความรักอันไม่มีเงื่อนไขของสายการบินอากาเป้ ขอให้ทุกท่านมั่นใจ เที่ยวบินนี้จะดูแลทุกท่านด้วยความรักแบบไม่มีเงื่อนไข บนท้องฟ้าแห่งความรักนี้ด้วยกัน ✈️🌌🥰',
      en: 'Attention passengers: welcome to agape Airline, Flight CU108, ready to take you, through the skies and into the space, with our unconditional love. For 25 years, agape has served countless passengers with undying love. Join us on our Flight. Join us on our loving skies. ✈️🌌🥰',
    },
  },
  {
    name: {
      th: 'ว้อนท์',
      en: 'Wanted',
    },
    logo: WantedLogo,
    max: 96,
    size: 'S',
    description: {
      th: 'Want ใจเทวพรหม เป็นบ้านที่ประกอบไปด้วยพี่ๆที่น่ารักจากหลากหลายคณะ ที่พร้อมต้อนรับเพื่อนๆ 108 มาพบกันในรั้วจุฬาลงกรณ์อันแสนอบอุ่นในแบบฉบับของวังเทวพรหม คละคลุ้งไปด้วยความทรงจำดีๆฉบับชาววังอย่างมีสไตล์ น่ารัก สดใส มีคุณค่าและความภาคภูมิในฐานะของนิสิตจุฬา เพื่อนๆจะมีความมั่นใจที่จะกล้าพูดว่า ฉัน หม่อมหลวงมารตี มาจากบ้าน Want ใจเทวพรหม!!',
      en: 'Want Jai Dhevaprom. An S-sized house composed of lovely students from a variety of faculties who are ready to welcome #CU108 to the warm embrace of Chulalongkorn University in the unique style of Dhevaprom Palace. Filled with precious memories of royal style, prettiness, shine, value, and pride as Chula students! All of you will be confident and proudly say, ”I am Mom Luang Maratee Dhevaprom from Want Jai Dhevaprom house!“',
    },
    ig: 'baan_wanted',
    fb: 'BaanWanted',
    message: {
      th: 'ถึงเพื่อนๆ ที่ยังไม่รู้ว่าจะเลือกบ้านไหนดี อยากบอกว่าไม่ว่าคุณจะเป็นใคร มาจากที่ไหนบ้านว้อนท์เล็กๆบ้านนี้ก็ยินดีต้อนรับเสมอ พวกเราพร้อมที่จะมอบความสนุกให้กับทุกคน ถึงบ้านเราจะเล็กแต่ความสนุกไม่เล็กนะ แล้วมาเจอกันนะทุกคน😊',
      en: 'Dear lovely friends. If you still unsure about which house to join. We wanna say that our small house always warmly welcome all of you. We are ready to bring fun and happiness to you. Our house may be small but the fun is not. See you soon !!',
    },
  },
  {
    name: {
      th: 'เวิร์ค',
      en: 'Work',
    },
    logo: WorkLogo,
    max: 99,
    size: 'S',
    description: {
      th: 'บ้านเวิร์คเป็นบ้านไซส์ S เป็นบ้านหลังเล็กที่เต็มไปด้วยความอบอุ่น บอกเลยว่าทุกคนในบ้านตอนนี้ อดใจรอไม่ไหวแล้วที่จะได้ต้อนรับเพื่อนๆทุกคน! ยิ่งโดยเฉพาะในปีนี้ บ้านของเราเปิดใจไปกับ inside out 2 พวกเรานั้น พร้อมที่จะโอบรับและพาทุกคนเดินทางไปด้วยกัน',
      en: 'BaanWork is a small-sized (S) group full of warm-hearted crews. We are extremely excited to welcome all of our new friends to our family Especially with our theme this year from “Inside Out 2”. Everyone at BaanWork can’t wait to take an enjoying journey that awaits us in the near future.',
    },
    ig: 'baanwork.cu',
    message: {
      th: 'ไม่ว่าเพื่อนๆอยากจะเข้ามาด้วยความรู้สึกแบบไหน จะอยากสนุก อยากมีเพื่อนรู้ใจ หรือต้องการเพื่อนที่พักพิง อยากจะเป็นตัวของตัวเอง...  พวกเราพร้อมที่จะโอบรับและพาทุกคนเดินทางไปด้วยกัน ระหว่างนี้ มารู้จักเรากันก่อนได้ที่ อินสตาแกรม @baanwork.cu',
      en: 'Whether you come in with any emotions, want to have fun with friends, need a shoulder to cry on, or want to express yourself out loud... We’re here!, ready to embrace all of those and step forward to the next journey together, side by side. Meanwhile, meet us on Instagram @baanwork.cu.',
    },
  },
  {
    name: {
      th: 'ดังพลีส',
      en: 'Dung piece',
    },
    logo: DungPieceLogo,
    max: 114,
    size: 'S',
    description: {
      th: `🚨✨มิตรภาพ ความสนุกสนาน ของรางวัลล้ำค่า ผู้ที่ครอบครองสามสิ่งนี้ทั้งสอง นั้นคือ “คู่หูราชาโจรสลัด” และก่อนที่เขาจะหายสาบสูญไป ก็ได้ทิ้งคำพูดไว้ว่า

“ สมบัติของบ้านดังน่ะหรอ ถ้าอยากได้ก็ไปหาเอาสิไป เราเอาทุกอย่างไปไว้ที่นั่นหมดแล้ว ”⚓️⛵️

ออกตามล่าหาสมบัติของบ้านดัง บ้านไซส์ s  ที่รวมพลคน extroverts ที่ไม่ต้องการเจอคนเยอะ ทำกิจกรรมสนุกๆไปพร้อมกับสนิทเพื่อนใหม่ได้ง่าย เริ่มต้นยุคสมัยใหม่ไปกับพวกเรา มุ่งหน้าสู่ทะเล Dung piece 🏴‍☠️💰`,
      en: `🚨✨ Friendship, fun, and valuable rewards, those who possess both are the 'Pirate King's Duo.' Before they disappear, they left behind these words:

" Treasures of Baandung, if you want it, go and get it. We've taken everything and left it all there. "⚓️⛵️

Embark on the hunt for the treasures of the Baandung, Baan Site S, which gathers people seeking new friends without the need to meet many people. Enjoy fun activities and easily make new close friends. Start a new era with us,  heading towards the sea Dung piece.🏴‍☠️💰`,
    },
    ig: 'baandung.official',
    message: {
      th: 'แล้วมาเป็นโจรสลัดกัน ออกล่าหาสมบัติไปกับบ้านดัง มาลงสมัครกันเยอะๆนะคะ แล้วมาทำความรู้จักเพื่อนๆพี่ๆ และรับสมบัติอันล้ำค่าของบ้านเราไป💖✨💰 #ติดจุฬามาบ้านดัง',
      en: "Let's become pirates together, sailing the seas in search of treasures with BaanDung. Let's all sign up together in great numbers. Let's get to know each other, our friends, and older siblings, bring  precious treasures from BaanDung.💖🫡💰",
    },
  },
  {
    name: {
      th: 'โคะ',
      en: 'koh',
    },
    logo: KohLogo,
    max: 120,
    size: 'S',
    description: {
      th: 'บ้านโคะในเรื่องเล่าของ The kohst radio',
      en: 'The Koh House in the stories of The Kohst Radio',
    },
    ig: 'baankohchula',
    message: {
      th: 'ยินดีต้อนรับ CU108 ทุกคน เข้าสู่บ้านโคะ ในธีม The Kohst Radio พร้อมพบกับประสบการณ์ขนหัวลุกเพราะเรื่องราวสุดฮาจากชีวิตชาวโคะได้ที่นี่ ❤️‍🔥👻 รับรองว่าไม่ผิดหวัง เรามีความรัก ความอบอุ่น ความตลก และสดชื่นนนนนส์ ต้อนรับทุกคนเสมอ แล้วเจอกัน',
      en: "Welcome CU108 everyone, to the Koh House in the theme of The Kohst Radio. Get ready for a hair-raising experience with hilarious stories from the Koh community here ❤️‍🔥👻. We promise you won't be disappointed. We offer love, warmth, laughter, and freshness to welcome everyone. See you soon!",
    },
  },
  {
    name: {
      th: 'คุณหนู',
      en: 'Khunnoo',
    },
    logo: KhonnooLogo,
    max: 156,
    size: 'S',
    description: {
      th: `บ้านคุณหนู บ้านไซส์ S ขนาดเล็กสุดอบอุ่น คุณหนูสามารถรู้จักกันได้อย่างทั่วถึง โดยที่มี "บอร์ดเกม" สำหรับให้คุณหนูเล่นได้ไม่มีเบื่อ นอกจากนี้บ้านคุณหนูยังเป็นบ้านที่ไม่มีการเต้นสันทนาการอีกด้วย! หากคุณหนูท่านไหนสนใจ ก็ขอเชิญชวนให้มาเลือกบ้านคุณหนู บ้านที่ #เน้นเล่นเกมไม่เน้นสัน`,
      en: `Baan Khunnoo is a small, cozy house where everyone can get to know each other. We offer "boardgames" for everyone to enjoy without getting bored. Additionally, Baan Khunnoo is a house without dancing! If you're interested, we invite you to choose #baan_khunnoo`,
    },
    ig: 'baankhunnoo_official',
    fb: 'Baankhunnoo',
    message: {
      th: 'ถ้าคุณหนูท่านไหนสนใจบ้านที่ไม่เน้นการเต้นสัน แต่เน้นการเล่นบอร์ดเกม ก็ขอเชิญชวนให้คุณหนูทุกท่าน #ติดจุฬามาบ้านคุณหนู กันน้า',
      en: "Join the house that's snug and right, roll the dice and meet us at #BaanKhunnoo.",
    },
  },
  {
    name: {
      th: 'เบิ้ม',
      en: 'Bhuem',
    },
    logo: BhuemLogo,
    max: 168,
    size: 'S',
    description: {
      th: 'บ้านเบิ้ม💥 แค่ชื่อบ้านยังฮาจะธรรมดาได้ไง นี่เป็น creative safe space ของทุกความหลากหลาย ที่มาพร้อมกิจกรรมสุดสร้างสรรค์ พวกเราตั้งใจให้บ้านเบิ้มสร้างความประทับใจแรก และเป็นพื้นที่ที่ได้เจอเพื่อนใหม่ในรั้วจามจุรี การันตีความใกล้ชิดในบ้านไซส์ s หลังนี้ แล้วมาสร้างความทรงจำดีๆด้วยกันในช่วงเวลาของการ ‘รับเพื่อนก้าวใหม่’🏃🏻‍♂️🖤',
      en: 'Baanbhuem💥 Judging from the name, there’s no way we’re not fun. 🤭 Here is a creative safe space where you can be yourself to the fullest. We hope to give you the best experience and a good first impression through our fun activities and games. With our small-sized house, we guarantee you will get to make new friends. Let’s create another great memory together! See you at ‘rubpeunkaomai’.🏃‍♂️🖤',
    },
    ig: 'baanbhuem.cu',
    message: {
      th: '🙋🏻🙋🏻‍♀️🙋🏻‍♂️ไหนใครจะมา ‘บ้านเบิ้ม’ 🙋🏻🙋🏻‍♀️🙋🏻‍♂️   พวกเรายินดีต้อนรับทุกท่านนน😼 รับเพื่อนก้าวใหม่นี้ใครยังเบื่อๆ ไม่รู้จะไปไหน พวกเราบ้านเบิ้มอาสาเคียงข้าง ที่ที่จะเปลี่ยนจากคนไม่รู้จักให้กลายมาเป็นเพื่อน จากเพื่อนให้เป็นเพื่อนสนิท และสร้างมิตรภาพที่น่าจดจำในรั้วจุฬาให้ CU108 ทุกคน เพราะพวกเราบ้านเบิ้มคือครอบครัว 3-4 สิงหาคมนี้ มามีโมเมนต์ดีๆไปด้วยกัน!❤️🖤',
      en: '🙋🏻🙋🏻‍♀️🙋🏻‍♂️ Who’s coming to ‘Baan Bheum’? 🙋🏻🙋🏻‍♀️🙋🏻‍♂️  We warmly welcome everyone! 😼 To all the new friends stepping forward, if you’re feeling bored and unsure of where to go, we at Baan Bheum are here for you. The place where strangers become friends, friends become best friends, and unforgettable friendships are forged within CU108. On August 3-4, let’s enjoy the moments together! ❤️🖤  Where friends become family, and Baan Bheum becomes a home.',
    },
  },
  {
    name: {
      th: 'เอช้วน',
      en: 'AChuan',
    },
    logo: AChuanLogo,
    max: 171,
    size: 'S',
    description: {
      th: `บ้านเอช้วน 🅰️🐉🥁✨
มังกรตระหง่าน สันทนาการพลิ้วไหว
เสียงกลองดังสนั่นถึงใจ “เอช้วน” ยิ่งใหญ่ในปฐพี`,
      en: `BaanAChuan🅰️🐉🥁✨
Majestic dragon breathtaking Recreation
"AChuan" the greatest in the world`,
    },
    ig: 'baanachuan_official',
    fb: 'บ้านเอช้วน',
    message: {
      th: 'บ้านนี้อาจจะไม่ได้เป็นบ้านที่ใหญ่มากเเต่เป็นบ้านที่เเอบแฝงไปด้วยความยิ่งใหญ่อลังการเเละความอบอุ่น บ้านนี่รอต้อนรับน้องทุกคนเเล้วเจอกันนะ',
      en: "Even thought this home isn't particularly large, but this home is engulfed in warmth and majesty. This house is eagerly awaiting your arrival. Wish to see you all soon.",
    },
  },
  {
    name: {
      th: 'เดอะ',
      en: 'THE',
    },
    logo: TheLogo,
    max: 201,
    size: 'M',
    description: {
      th: `ถ้าในภาษาอังกฤษ คำว่า "The" มักจะใช้นำหน้าอะไรที่ยิ่งใหญ่และเจาะจง ไม่ว่าจะเป็นเดอะเฟส เดอะว้าว หรือเดอะวันแอนด์โอนลี่ บ้านเดอะ (THE) คือบ้านรับเพื่อนหน้าใหม่ ไฟแรง ที่มาพร้อมความสนุกที่จัดเต็ม และความอบอุ่นแบบครอบครัว บ้านเดอะของเราได้รวบรวมทุกคนที่เรียกได้ว่า “สุด” มารอต้อนรับเพื่อน ๆ แล้ว ถ้าเพื่อน ๆ ใหม่ เลือกบ้านเดอะ รับรองได้เลยว่า น้องจะได้พบกับคำว่า ”ที่สุด” ของจุฬาฯ สมกับคำว่า THE อย่างแน่นอน`,
      en: `In English, "The" is used to hype up something epic, like "The Best," or "The One and Only." Our place, Baan THE, is the spot for new, energetic faces, filled with nonstop fun and a family vibe. We've got THE COOLEST CREW ready to welcome you.  If you choose Baan THE, you're in for THE BEST experience at Chula, totally living up to that "THE" hype!`,
    },
    ig: 'baanthechula.official',
    message: {
      th: 'ถ้าอยากสุด ให้มาหยุดที่บ้านเดอะ',
      en: 'Get ready to be lit with Baan THE',
    },
  },
  {
    name: {
      th: 'โบ้',
      en: 'boe',
    },
    logo: BoeLogo,
    max: 219,
    size: 'M',
    description: {
      th: `📢บรู๊ววววว~🐕 \r 
พร้อมที่จะทำความรู้จักบ้านโบ้กันหรือยังงง‼️

พวกเราเป็นน้องหมาใจดี น่ารัก ขี้เล่น ที่เฟรนลี่กับทุกคน🐶
ไม่ต้องกลัวเหงา เพราะพวกเราชาวโบ้พร้อมเล่นสนุกกับทุกคนเสมอ ! 🙈🪄

🖇 บ้านโบ้ของเราเป็นบ้านไซส์ M อบอุ๊นอบอุ่น💞 ได้รู้จักกับชาวโบ้ทุกคนแน่นอน🌟

📌 ครั้งนี้พวกเรากลับมาในธีม ‘หมาจรกลับบ้าน’ 🏠
ให้บ้านโบ้ได้เป็นที่ที่ทุกคนได้กลับมาเจอกันเพื่อเริ่มต้นบทใหม่ของชีวิต🚪✨ และใช้เวลาด้วยกันอย่างมีความสุขหลังจากที่ทุกคนผ่านอะไรมามากมาย🫧

ที่สำคัญ บ้านโบ้ยินดีต้อนรับทุกคน😽 ไม่ใช่ Dog person ก็มาสนุกไปกับบ้านโบ้ได้❗️ มีกิจกรรมสนุก ๆ รอทุกคนอยู่แน่นอน🏄🏻‍♀️ˎˊ˗

สามารถมาแอบส่องดาวโบ้ที่ IG: baanboe ได้เลย🪐`,
      en: `📢woof woof~🐕
Are you ready to get to know Baan Boe⁉️

We are kind, cute, and energetic puppies that are friendly with everyone.🐶
No need to worry about feeling lonely because us Boes are always ready to have fun with y’all ! 🙈🪄

🖇 Our Baan Boe is a size M Baan. Sooo cozy.💞 You will definitely get to know everyone.🌟

📌 This time, we come back with the theme ‘stray dog returns home’. 🏠
Let Baan Boe be the place that bring everyone back together to start a new chapter of life 🚪✨ and to spend quality time together after having been through a lot of things.🫧

More importantly, Baan Boe welcomes everyone.😽 Even if you're not a dog person, you can still have fun with us❗️ We have tons of fun activities waiting for you.🏄🏻‍♀️ˎˊ˗

You can have a peek at our Boe’s planet at IG: baanboe 🪐`,
    },
    ig: 'baanboe',
    message: {
      th: 'โฮ่ง โฮ่ง โฮ่ง ! 🐶💥 ชาวโบ้ขอยินดีต้อนรับชาว CU108 ทุกคนอีกครั้ง♡‧₊˚  📢พร้อมหรือยังที่จะสนุกไปพร้อมกับบ้านโบ้⁉️ บ้านโบ้ของเรายินดีต้อนรับทุกคน🫶🏻 ไม่ใช่ Dog person ก็ไม่มีปัญหา🐈 มาสนุกกับบ้านโบ้ได้ เอนจอยแน่นอน !🤩 มีกิจกรรมสนุก ๆ รออยู่เพียบบบ🤸🏻‍♂️✨  มาร่วมสร้างความทรงจำที่ดีด้วยกันในงานรับเพื่อนก้าวใหม่· ˚ ༘ 🎫 เพื่อน ๆ ชาวโบ้แสนน่ารักกำลังรอทุกคนอยู่น้าาา🖐🏻💞',
      en: 'Woof woof woof ! 🐶💥 Baan Boe is greatly pleased to welcome every CU108 here.♡‧₊˚  📢Are you ready to have fun with Baan Boe⁉️ Our Baan Boe welcomes everyone.🫶🏻 Not a dog person? Not a problem!🐈 You can still have fun with us Boes. You will definitely enjoy your time here!🤩 We have tooons of fun activities waiting for y’all.🤸🏻‍♂️✨  Let’s make some good memories together at Rubpuenkaomai 2024· ˚ ༘ 🎫 We are excitedly waiting for y’all🖐🏻💞',
    },
  },
  {
    name: {
      th: 'จิ๊จ๊ะ',
      en: 'Jijah',
    },
    logo: JijahLogo,
    max: 228,
    size: 'M',
    description: {
      th: 'บ้านจิ๊จ๊ะ บ้านใหม่ไฟแรง เรากล้าที่จะแตกต่างเพื่อสร้างประสบการณ์ดี ๆให้น้อง ๆ และพวกเรามั่นใจว่าน้องๆจะไม่ผิดหวังแน่นอน',
      en: 'Baan Jijah, a new house with high passion and we dare to be different. We are confident in giving all CU108 the best experience and you will not be disappointed for sure!',
    },
    ig: 'baanjijah.chula',
    message: {
      th: 'น้อง ๆ เลือกมาบ้านจิ๊จ๊ะจะได้คอนเนคกับพวกพี่ๆแบบสนิทสุด ๆ พี่ ๆ ทุกคนอยากที่จะเจอน้อง ๆ มาก ๆ เราจะดูแลและต้อนรับน้อง ๆ สู่รั้วจามจุรีของเรา',
      en: 'At Baan Jijah, we will take care of you and make you feel welcome in the CU community. We seniors are looking forward to forming a strong bond with all of you.',
    },
  },
  {
    name: {
      th: 'อะอึ๋ม',
      en: 'A-AUM',
    },
    logo: AAumLogo,
    max: 237,
    size: 'M',
    description: {
      th: 'บ้านอะอึ๋มเป็นบ้านขนาดปานกลาง ไม่เล็กไม่ใหญ่เกินไป ทำให้จุดเด่นอย่างหนึ่งของบ้านนี้คือความอบอุ่น ที่คนในบ้านรู้จักและสนิทกันหมด  รุ่นพี่รุ่นน้องสามารถพูดคุย เล่นกันได้อย่างสบายใจ บรรยากาศในบ้านจะมีความชิล ๆ ไม่มีการแบ่งฝักแบ่งฝ่าย มีรุ่นพี่บัณฑิตคอยช่วยเหลือ และมาทำกิจกรรมด้วยเสมอ ถึงจะจบกิจกรรมรับเพื่อนก้าวใหม่ไปแล้ว บ้านเราก็ยังมีการนัดเจอกินข้าว เล่นบอร์ดเกมส์ นัดเล่นกีฬากันตลอด รวมถึงทริปบ้าน และสัมมนาบ้าน ที่จะช่วยเพิ่มความสนิทสนมของคนในบ้านมากยิ่งขึ้น',
      en: 'Baan A-AUM is a medium-sized baan, neither too small nor too big, making one of our standout features the warmth that brings the members of Baan A-AUM closer. Everyone can chat and play comfortably together. The atmosphere in Baan A-AUM is relaxed and chill. We do not promote divisions or factions. Everyone in Baan A-AUM is considered friends and family. Graduates are always back to help and participate in Baan’s activities. Moreover, even after Rubpuenkaomai has finished, our members and staff often continue to schedule meals, play board games, engage in sports activities together, and also arrange yearly Baan’s trip and seminar to further enhance the closeness among everyone in our baan.',
    },
    ig: 'baanaaum.official',
    message: {
      th: 'ถ้าน้อง ๆ กำลังมองบ้านรับเพื่อนที่มีขนาดกลาง ๆ กิจกรรมสนุก สันสนุก ได้ทำความรู้จักกับเพื่อนและรุ่นพี่อย่างทั่วถึงจากต่างคณะทั่วมหาวิทยาลัย ต้องบ้านอะอึ๋มเท่านั้น พี่ ๆ ทุกคนรอเจอน้อง ๆ อยู่น้า',
      en: 'If you are looking for a Baan that is a medium-sized, where you can have fun and get to know friends and seniors from different faculties across campus, then Baan A-AUM is the place for you! We are super excited and we cannot wait to meet you, CU108!',
    },
  },
  {
    name: {
      th: 'สด',
      en: 'Sod',
    },
    logo: SodLogo,
    max: 291,
    size: 'L',
    description: {
      th: `เมื่อเหล่าcu108 มาบ้านสดจะได้พับกบ เอ้ย! พบกับ  🎟️sanook : กิจกรรมสนุกๆที่ทำให้ชาวcu108ลืมไม่ลง 
🎟️(gang)ster : ได้มิตรภาพไม่ว่าจะเป็นรุ่นพี่ หรือ เพื่อนต่างคณะ 
🎟️sang : มาร่วมสร้างความทรงจำดีๆไปกับบ้านสดกันน้าา 
🎟️sod(?) : คำว่ามาบ้านสดจะไม่โสดกลับไป เป็นจริงมั้ย ให้ชาวcu108มาลองพิสูจน์กันได้ที่บ้านสด💖💖`,
      en: `Welcome cu108 to Baansod Playground! 🎡🎢 When cu108 comes to Baansod, they will meeeeeeet!  
🎟️Sanook: Fun activities that cu108 will never forget.  
🎟️(Gang)ster: Making friendships with seniors or friends from different faculties.  
🎟️Sang: Let's create great memories together at Baansod.  
🎟️Sod(?): The word 'Baansod' means you won't leave single. Is it true? Let cu108 come and find out for themselves at Baansod! 💖💖")`,
    },
    ig: 'baansod.official',
    message: {
      th: `Welcome cu108 to baansod playground 🎡🎢 บ้านสดเป็นบ้านที่เต็มไปด้วยความสนุก เฮฮา มีเพื่อนๆพี่ๆจากหลากหลายคณะมาทำกิจกรรมสุดแสนสนุกร่วมกัน เหมือนกับธีมของบ้านในปีนี้ นั่นก็คือ"สดสนุก" ทุกๆคนที่มาบ้านสดจะได้รับมิตรภาพและความอบอุ่นที่จะจำได้ไม่ลืมแน่นอน`,
      en: `Welcome cu108 to baansod playground 🎡🎢 Baan Sod is a house full of fun, hilarious. There are friends from various faculties to do fun activities together. Like the theme of this year's house That is "Baan Sod playground". Everyone who comes to the house will receive friendship and warmth that will definitely not forget.`,
    },
  },
  {
    name: {
      th: 'เฮา',
      en: 'Haaw',
    },
    logo: HaawLogo,
    max: 312,
    size: 'L',
    description: {
      th: 'ติดจุฬากลับบ้านเฮา “ชิวๆสไตล์เฮา”',
      en: 'CHILL CHILL STYLE BAAN HAAW',
    },
    ig: 'baan.haaw',
    message: {
      th: 'แอบบอกไว้ก่อนเลยว่าบ้านนี้ไม่เหมือนบ้านไหนแน่นอน เพราะบ้านเฮาเน้นความเป็นกันเอง เพราะคติประจำบ้านของเฮาคืออออออ “ชิวๆสไตล์เฮา”',
      en: 'Baan Haaw: Where Chill Vibes Rule!',
    },
  },
  {
    name: {
      th: 'คิดส์',
      en: 'Kids',
    },
    logo: KidsLogo,
    max: 324,
    size: 'L',
    description: {
      th: "BAANKIDS 2024 เป็นดินแดนแสนสนุกที่จะนำพาทุกคนผจญภัยไปกับกิจกรรมสุดพิเศษมากมาย🌈 และเรายังคงความเหนียว แน่น หนึบ มีมิตรไมตรีที่แสนอบอุ่นน่ารัก💓 พร้อมยินดีต้อนรับ CU108 ทุกคนเข้าสู่อ้อมอกอ้อมใจ😻 🎊ธีมบ้านปีนี้มาในรูปแบบของธีม 🧸Kids Story🧸 ที่จะสื่อถึงกลิ่นอายความสนุกในวัยเด็ก👶🏻ที่เคยเกิดขึ้น🚩เมื่อมองย้อนกลับไป เหมือนกับการที่ทุกคนได้มาเข้าบ้านคิดส์💖💖ตอนในช่วงเวลาของการเป็น 'Freshy'🥺 และเมื่อเวลาผ่านไป และหันกลับมามองความสนุกหรือความอบอุ่นที่เคยเกิดขึ้น🌟 จะทำให้ทุกๆ คนหวนกลับมานึกถึงช่วงเวลาเหล่านั้นอีกครั้ง✨️ รอเจอคนน่ารักทุกคนเล้ยยย แล้วมาพบกันได้ที่ บ้านคิดส์!!!🌻✨",
      en: "BAANKIDS 2024 is a wonderland taking everyone on an adventure with many special activities.🥳 We has kept our distinctive spirit of unity and harmony. 🌷We also have a lovely relationship as well.💕 We are ready to welcome CU108 into our hearts. 🎊 This year, BaanKids comes with a theme of 🧸Kids Story🧸 which will bring back the playful and joyful moments of our childhood 👶🏻 whenever we look back 💖🎁, like when we were with “BaanKids” as a freshy 🌟. As time flies and those fun and warm memories pass, the stories of BaanKids will always brings back a sense of nostalgia 🥺 and happiness 🥰 for everyone✨️ We are looking forward to seeing all of you. Let's meet at BAANKIDS!!!🔥🌟",
    },
    ig: 'baankids.official',
    fb: 'BaanKids',
    message: {
      th: 'ใครกำลังตามหาบ้านไซส์กลาง ๆ ที่จะได้รู้จัก เพื่อน ๆ พี่ ๆ น้อง ๆ สุดเหนียวแน่นหนึบ! บ้านคิดส์นี่แหละตอบโจทย์!🏡 เราพร้อมจะพาทุกคนย้อนกลับไปในวัยเยาว์ ค้นหาสิ่งใหม่ ๆ และร่วมผจญภัยไปด้วยกัน ในคอนเซ็ปท์ ‘Kids Story’🚂🧸 บ้านคิดส์รับประกันความสุข ความสนุก💥ความมันส์ และความอบอุ่นหัวใจ 💝  🌈 ให้บ้านคิดส์ได้เป็นหนึ่งในความทรงจำที่น่าประทับใจในรั้วมหาลัยของทุกคนน้า🌟',
      en: " If you're looking for a cozy mid-sized home and want to connect with awesome friends, look no further than BaanKids! 🏡 We're all about bringing back those childhood memories, discovering new things, and having adventures together. With our 'Kids Story' concept, 🚂🧸 BaanKids guarantees happiness, fun💃🏻, excitement, and heartwarming moments! 💝 🌈 Let BaanKids be a part of your unforgettable college memories! 🌟",
    },
  },
  {
    name: {
      th: 'โจ๊ะเด๊ะ ฮือซา',
      en: 'Jodeh Huesa',
    },
    logo: JodehLogo,
    max: 336,
    size: 'L',
    description: {
      th: 'ปีนี้บ้านโจ๊ะเด๊ะ ฮือซาครั้งที่ 32 มาในธีม “ แฟรี่ ” ในขนาดบ้านไซส์ไม่เล็กไม่ใหญ่ อบอุ่นหัวใจ มาเเล้วได้ความรู้สึกดีๆกลับไปอย่างแน่นอน เพราะบ้านเรามีรุ่นพี่ต่างคณะมากมายทั้งวิศวะ สัตวะ บัญชี ครุ และยังมีอีกหลายคณะ',
      en: `This year,  Jodeh 32nd comes with the theme "Fairy" in a medium house size . If you join our house, you will definitely get good feelings and experiences back because our house has a lot of seniors from various faculties, including engineering, veterinary science, accounting, education, and others`,
    },
    ig: 'jodeh_official',
    message: {
      th: 'บ้านโจ๊ะเด๊ะ ฮือซา เป็นบ้านที่อยู่มานานมากกก ก่อตั้งมานานกว่า 30 ปี แน่นอนว่าเรามีรุ่นพี่หลายต่อหลายรุ่นที่คอยแวะเวียนมาอยู่ตลอด บ้านเราอยู่แล้วอบอุ่นแน่นอนไม่ต้องกลัว เพราะมีพี่ๆคอยให้ความช่วยเหลือน้องๆได้ตลอด รับรองว่าน้องๆจะได้รับความสนุกสนาน และความทรงจำดีๆ จากบ้านโจ๊ะเด๊ะ ฮือซาแน่นอนนน',
      en: `This year,  Jodeh 32nd comes with the theme "Fairy" in a medium house size . If you join our house, you will definitely get good feelings and experiences back because our house has a lot of seniors from various faculties, including engineering, veterinary science, accounting, education, and others    Baan Jodeh Huesa was established around 30 years ago. Of course, we have many seniors who often visit our staff and freshy . You definitely should not be lonely because there are seniors who are always available to help you. We guarantee that you will have fun and good memories from Baan Jodeh Huesa`,
    },
  },
  {
    name: {
      th: 'คุ้ม',
      en: 'KOOM',
    },
    logo: KoomLogo,
    max: 390,
    size: 'XL',
    description: {
      th: 'บ้านไหนที่ใครว่าเยี่ยม ไม่อาจเทียบเทียมบ้านคุ้มจุฬาฯ บ้านคุ้ม บ้านที่มีการสันทนาการเป็นเอกลักษณ์ที่สุดในจุฬาฯ',
      en: `Which house is considered outstanding? None can compare to BAAN KOOM Chula! Known for its exceptional entertainment activities, BAAN KOOM stands out as the most unique house at Chula. It's where unforgettable memories are made and lifelong friendships are created.`,
    },
    ig: 'baankoom.chula',
    message: {
      th: 'บ้านคุ้มรับประกันความม่วน ความเริ่ด ความปัง มาอยู่บ้านคุ้มสักครั้งแล้วจะไม่ผิดหวัง ✨',
      en: `At BAAN KOOM, we guarantee fun, excitement, and a surge in popularity. Come to BAAN KOOM once, and you won't be disappointed. Immerse yourself in the vibrant activities, meet amazing people, and create stories worth sharing.

Join us at BAAN KOOM – where the best moments of your Chula journey await!`,
    },
  },
  {
    name: {
      th: 'โซ้ยตี๋หลีหมวย',
      en: 'SoeiteeLheemouy',
    },
    logo: SoeiteeLogo,
    max: 582,
    size: 'XL',
    description: {
      th: `บ้านโซ้ยตี๋หลีหมวยในปีนี้มาในธีม "Soei-pace
invaders" ที่อิงมาจากเกม space invaders วีดีโอเกมอาร์เคด ยุค 80'sในตู้เกม Arcade Center เห็นทีไรต้องแวะเข้าไปเล่น เปรียบเสมือนสถานที่ที่ทำให้ทุกคนได้สนุกสนานและได้พบปะสังสรรค์กัน เกมส์อาร์เคดมีความคลาสสิคทำให้นึกย้อนถึงช่วงเวลาวัยเด็ก เชื่อมโยงทุกคนให้ได้ปล่อยใจมองย้อนกลับไปในอดีต ที่มีตู้เกมสนุกๆ ร่วมใช้เวลาอยู่ในดินแดน Soei-pace invaders แห่งนี้อย่างมีเพลิดเพลินและอบอุ่นไปด้วยกัน`,
      en: `"Soei-pace invaders" is the theme for this year, which is inspired by the 1980's arcade video game Space Invaders. At Arcade Center, you can come by and play. It represents a place where people have fun together. Retro arcade games that
recall sweet childhood memories. It connects
all people. Everyone should be able to chill out
and have fun playing the games in the cabinet.
and warmly spend time with us in Soei-pace
invaders.`,
    },
    ig: 'baansoeiteelheemouy',
    message: {
      th: '‘โซ้ยตี๋หลีหมวย’ บ้านไซส์ใหญ่ที่อบอุ่นสุดๆ พี่ๆStaff จำนวนมากรอต้อนรับเพื่อนๆ CU108 ทุกคน แน่นอนว่าเพื่อนๆจะได้เจอเพื่อนใหม่จากหลากหลายคณะและได้เล่นกิจกรรมเพื่อทำความรู้จักกับเพื่อนๆพี่ๆแน่นอน บ้านเรายังมีจัดทริปไปเที่ยวและไปแฮงเอาค์บ่อยมากกก‼️ คนไหนอยากมาเป็นอาตี๋อาหมวยหรืออยากเจออาตี๋อาหมวยในบ้านเรา ก็อย่าลืมเล็งบ้านเราไว้ด้วยนะคับ ฝากโซ้ยตี๋หลีหมวยไว้ในอ้อมอกอ้อมใจทุกคนด้วยนะค้าบ🫶🏻 พวกเราบ้านโซ้ยตี๋ ทุกคนรู้ดีบ้านนี้โซ้ยอะไร🤫',
      en: "'SoeiTeeLheeMouy' is a warmly group. All staff members are welcome all CU108 friends. You will meet new friends from various faculties and play activities. Moreover, we frequently go on a trips and hang out very often‼️ Please keep 'BaanSoeiTeeLheeMouy' in everyone's hearts if you would like to join us.",
    },
  },
  {
    name: {
      th: 'โจ๋',
      en: 'JO+',
    },
    logo: JoLogo,
    max: 597,
    size: 'XL',
    description: {
      th: `ดุจอัปสรค่ะ 
อศิระครับ อศิระ จุฑาเทพ 
จุฑาเทพ?
สู้เขาสิวะโจ๋ฑาเทพ‼️
กลับมาอีกครั้งอย่างยิ่งใหญ่กับบ้านโจ๋🪭 บ้านไซส์XL หลังใหญ่อบอุ่น ผู้คนมากหน้าหลายตาที่รักกันเหมือนครอบครัว♥️ ในปีนี้มาในธีม “โจ๋ฑาเทพ” หรือคุณหญิงคุณชาย💃🏻🕺🏻 เธอมันลูกคุณหนูเธอมันหลานคุณนายนั่นเอง💅🏻✨`,
      en: `My name is Dujapsorn.
And I'm Asira Juthathep
Juthathep?
Fighting ! JO+thathep‼️
JO+ House is back in a grand way🪭, an XL-sized, warm home where people from various faculties gather as a loving family.♥️ This year, our theme is 'JO+ THATHEP,' celebrating aristocracy, ladies, and gentlemen.💃🏻🕺🏻 Join us for a splendid time!💅🏻✨`,
    },
    ig: 'baanjochula',
    message: {
      th: 'ชีวันจะถาม คุณสรุจก็แค่ตอบ✨ จะเป็นยังไง? ถ้าคุณชายทั้ง 5 กลับมารวมตัวกันอีกครั้งในยุคปัจจุบัน แต่กลับมีความทรงจำที่เลอะเลือนซะงั้น⁉️ แต่อย่างไรก็ตามยังโชคดีที่มีพี่ ๆ ย่าอ่อนคอยดูแลและให้คำปรึกษา👵🏼❤️ ขอเรียนเชิญสุภาพบุรุษและสุภาพสตรีทั้งหลายจากทั่วเขตแดนรั้วจามจุรีสีชมพูมารวมตัวกันที่วังโจ๋ฑาเทพเพื่อสร้างความทรงจำอันล้ำค่าต่อเติมส่วนที่ขาดหายให้คุณชาย🥀 แล้วพบกันที่งานเต้นรำในคืนพระจันทร์เต็มดวง 🌕💃🏻🕺🏻 มาร่วมสร้างความทรงจำดี ๆ กับบ้านโจ๋กันเยอะ ๆ น้าา🪄',
      en: "Once Cheewan asks, could you reply to me, Mr. Saruj?✨ What will happen if all 5 KhunChais are back together in the present time, but their memories are blurred⁉️ Fortunately, P'granny Orns are here to look after them and give some much-needed advice.👵🏼❤️ Dear all Chula ladies and gentlemen, you are invited to JO+ Tha Thep Palace to help recreate good memories for our KhunChais.🥀 See you at the dance party under the lunar light.🌕💃🕺 Let's create wonderful memories together with JO+family.🪄",
    },
  },
  {
    name: {
      th: 'เเรงส์',
      en: 'rangs',
    },
    logo: RangsLogo,
    max: 840,
    size: 'XXL',
    description: {
      th: 'บ้านแรงส์คือหนึ่งในบ้านรับเพื่อนที่มีมาอย่างยาวนาน โดยบ้านเราเป็นบ้านใหญ่รับเพื่อนๆได้เยอะ เเต่ในขณะเดียวกันก็ดูเเลอย่างทั่วถึงเเละทุกคนได้รู้จักกันอย่างเเน่นอน บ้านเราให้ความสำคัญกับความเป็น 1 เดียวกัน ไม่ว่าจะมาจากที่ไหน ทุกคนคือเพื่อนกัน และบ้านแรงส์คือครอบครัวเดียวกัน พวกเราขอฝากบ้านเเรงส์ไว้ในอ้อมอกอ้อมใจทุกคนน้า',
      en: "Baanrangs is a XXL-sized house that can welcome more than 500 freshmen each year. We ensure everyone gets to know each other more and value unity above all. No matter where you come from, everyone is a friend, and Baanrangs is a family. Please keep Baanrangs in your heart and don't forget to join our activities.",
    },
    ig: 'baanrangs.official',
    message: {
      th: 'สิ้นสุดการรอคอย💥❗️ บ้านแรงส์ยินดีต้อนรับน้องๆ CU108 ทุกคนเข้าสู่ยุค Rangnaissance ❤️‍🔥 มาร่วมเป็นส่วนหนึ่งในการจุดประกาย สร้างสีสัน และเติมเต็มแรงบันดาลใจไปกับพวกเราบ้านแรงส์ 🎭  แล้วพบกันวันที่ 3-4 สิงหาคมนี้',
      en: "📣 The wait is over❗️❗️ Baanrangs is pleased to welcome CU108 with Rangnaissance era🕊️  🎨 Be part of us in igniting renewal with creative passion🔥 Don't miss the chance and come join us  See you on 3-4 August this year",
    },
  },
  {
    name: {
      th: 'ยิ้ม',
      en: 'yim',
    },
    logo: YimLogo,
    max: 843,
    size: 'XXL',
    description: {
      th: 'บ้านที่จะมาพร้อมความสนุกสุดเหวี่ยงกับธีมโจ๊กเกอร์ ด้วยขนาดไซส์ XXL !!',
      en: 'Joker is the man who always run away from the police.Now it’s time for CU108 to catch this thief.BaanYim is waiting for you!!',
    },
    ig: 'baanyimchula',
    message: {
      th: 'บ้านยิ้มบ้านที่จะมาพร้อมความสนุกสุดเหวี่ยง!! พร้อมกับ รอยยิ้มที่น่าจดจำของ JOKER จะเป็นยังไงถ้าเราทุกคนในบ้านขนาดไซส์XXL นี้ช่วยกันตามล่าจับหัวขโมยคนนี้ !!',
      en: 'This exclusive experience from BaanYim is for everyone!Come and join us with the largest baan.Let’s catch this thief',
    },
  },
];
