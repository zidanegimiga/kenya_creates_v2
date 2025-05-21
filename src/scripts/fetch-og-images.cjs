#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
const cheerio = require('cheerio')
const stories = [
  {
    name: "Ivan Lucy Okeyo",
    url: "https://nax.today/features/article/2184/stepping-stone-women-group-lifting-voices-silenced-by-hiv-stigma",
    theme: "HIV/AIDS stigmatization in the 21st Century",
    outlet: "nax.today",
    slug: "ivan-lucy-okeyo",
  },
  {
    name: "Asha Bekidusa",
    url: "https://soundcloud.com/shaekidusa/makala-ukosefu-wa-nyumba",
    theme: "Access to Services and Safe space after SGBV",
    outlet: "soundcloud.com",
    slug: "asha-bekidusa",
  },
  {
    name: "Seliphar Musungu",
    url: "https://StorySpotlight.co.ke/redefining-fatherhood-how-a-kenyan-dad-champions-maternal-health-and-right",
    theme: "“I Chose My Family Over My Job”: A Kenyan Dad's Unwavering Journey Through a Maternal Crisis",
    outlet: "storyspotlight.co.ke",
    slug: "seliphar-musungu",
  },
  {
    name: "Betty Luke",
    url: "https://thepresspoint.com/health/silent-scars-the-hidden-trauma-struggles-of-fgm-survivors/",
    theme: "SRHR and Mental Health",
    outlet: "thepresspoint.com",
    slug: "betty-luke",
  },
  {
    name: "Jemimah Lauzi",
    url: "https://soundcloud.com/jmmhlauz/makala-ya-chachu-ya-ufufuaji-social_sharing&si=a25d9b34718943ab9b8ee9a684782fa1",
    theme: "Access to SRHR",
    outlet: "soundcloud.com",
    slug: "jemimah-lauzi",
  },
  {
    name: "Mical Imbukwa",
    url: "https://successafrika.com/articles/navigating-myths-and-realities-on-infertility-and-childbearing",
    theme: "Navigating Myths and Realities on Infertility and Childbearing",
    outlet: "successafrika.com",
    slug: "mical-imbukwa",
  },
  {
    name: "William Abala",
    url: "https://www.talkafrica.co.ke/faith-shame-and-contraception-the-hidden-battle-of-mathares-women/",
    theme: null,
    outlet: "www.talkafrica.co.ke",
    slug: "william-abala",
  },
  {
    name: "Elizabeth Angira",
    url: "https://peopledaily.digital/lifestyle/the-dark-side-of-life-as-an-intersex-in-kenya",
    theme: "The dark side of life as an intersex in Kenya",
    outlet: "peopledaily.digital",
    slug: "elizabeth-angira",
  },
  {
    name: "Cynthia Ouma",
    url: "https://afripods.com/episode/the-pain-we-do-not-talk-about",
    theme: "The Pain We Don't Talk About: How much pain is normal for period pain",
    outlet: "afripods.com",
    slug: "cynthia-ouma",
  },
  {
    name: "Henix Obuchunju",
    url: "https://pamojafm.co.ke/health/pangs-of-corruption-past-a-personal-journey-and-current-realities-access-to-pads",
    theme: "Revisiting the Past: A Personal Journey and Current Realities (Access to Pads)",
    outlet: "pamojafm.co.ke",
    slug: "henix-obuchunju",
  },
  {
    name: "Kimani Karanja",
    url: "https://soundcloud.com/kimani-karanja-248529376/reusable-pads-restoring-dignity-among-refugee-girls-in-kakuma",
    theme: "Reusable Pads Restoring Dignity among Refugee Girls in Kakuma",
    outlet: "soundcloud.com",
    slug: "kimani-karanja",
  },
  {
    name: "Milliam Njeri",
    url: "https://edition.pagesuite.com/html5/reader/product",
    theme: "Access to family planning",
    outlet: "edition.pagesuite.com",
    slug: "milliam-njeri",
  },
  {
    name: "George Odiwuor",
    url: "https://nation.africa/kenya/news/gender/court-orders-mothers-to-protect-them-from-their-own-families-5013118",
    theme: "Teenage pregnancy",
    outlet: "nation.africa",
    slug: "george-odiwuor",
  },
  {
    name: "Otiato Guguyu",
    url: "https://oralseastafrica.news/mtu-wa-ukimwi-why-kenyan-youth-fear-the-shift-to-general-hiv-care",
    theme: "“Mtu wa Ukimwi”: Why Kenyan Youth Fear the Shift to General HIV Care",
    outlet: "oralseastafrica.news",
    slug: "otiato-guguyu",
  },
  {
    name: "NAX.TODAY",
    url: "https://nax.today/features/article/2212/healing-after-silent-struggle-of-postpartum-depression",
    theme: "Maternal Mental Health",
    outlet: "nax.today",
    slug: "nax-today",
  },
  {
    name: "Radio Salaam FM",
    url: "https://soundcloud.com/shaekidusa/makala-mimba-za-ujauzito",
    theme: "Adolescent Sexual and Reproductive Health and Rights (ASRHR)",
    outlet: "soundcloud.com",
    slug: "radio-salaam-fm",
  },
  {
    name: "Story Spotlight",
    url: "https://StorySpotlight.co.ke/shame-is-heavier-than-the-infertility-itself-the-silent-struggle-of-kenyan-men",
    theme: "“Shame Is Heavier Than the Infertility Itself”: The Silent Struggle of Kenyan Men",
    outlet: "storyspotlight.co.ke",
    slug: "story-spotlight",
  },
  {
    name: "The Press Point",
    url: "https://thepresspoint.com/health/amazing-how-healthcare-is-bridging-gap-in-isiolos-remote-communities/",
    theme: "Maternal Health Care",
    outlet: "thepresspoint.com",
    slug: "the-press-point",
  },
  {
    name: null,
    url: "https://soundcloud.com/jmmhlauz/makala-haki-butu?si=ae693976bb2",
    theme: "GBV, access to Justice and legal address",
    outlet: "soundcloud.com",
    slug: "gbv-access-to-justice-and-legal-address",
  },
  {
    name: "Success Afrika",
    url: "https://successafrika.com/articles/between-protection-and-violation-the-reproductive-health-dilemma-for-children-with-disabilities",
    theme: "Between Protection and Violation: The Reproductive Health Dilemma for Children with Disabilities",
    outlet: "successafrika.com",
    slug: "success-afrika",
  },
  {
    name: null,
    url: "https://www.talkafrica.co.ke/stolen-autonomy-intimate-partner-violence-and-the-erosion-of-womens-reproductive-rights-in-kiandutu/",
    theme: null,
    outlet: "www.talkafrica.co.ke",
    slug: "talkafrica-co-ke",
  },
  {
    name: "People Daily Neewspaper",
    url: "https://epaper.peopledaily.digital/html5/reader/product",
    theme: "The emotional turmoil of being branded infertile man",
    outlet: "epaper.peopledaily.digital",
    slug: "people-daily-neewspaper",
  },
  {
    name: "Radio Mikayi",
    url: "https://afripods.com/episode/how-empowering-adolescent-teen-girls-to-prevent-early-pregnancies-through-srhr-education",
    theme: "Knowledge is Power: Empowering Teen Girls to Prevent Early Pregnancies through SRHR Education",
    outlet: "afripods.com",
    slug: "radio-mikayi",
  },
  {
    name: "Pamoja Fm",
    url: "https://pamojafm.co.ke/health/broken-toilets-hidden-profits/",
    theme: "The Infrastructure Gap",
    outlet: "pamojafm.co.ke",
    slug: "pamoja-fm",
  },
  {
    name: "SIFA FM 101.1 ATOO",
    url: "https://on.soundcloud.com/CVseQEu5pKzqSvL",
    theme: "Child Spacing and Polygamy in Turkana",
    outlet: "on.soundcloud.com",
    slug: "sifa-fm-101-1-atoo",
  },
  {
    name: "People Daily Newspaper",
    url: "https://epaper.peopledaily.digital/html5/reader/product",
    theme: "Maternal health",
    outlet: "epaper.peopledaily.digital",
    slug: "people-daily-newspaper",
  },
  {
    name: "nation.africa (Nation Media Group)",
    url: "https://nation.africa/kenya/news/gender/-blood-may-ov...oolgirl-s-struggle-with-period-poverty-during-holidays-5033676",
    theme: "Menstrual hygiene",
    outlet: "nation.africa",
    slug: "nation-africa-nation-media-group",
  },
  {
    name: "Orals East Africa",
    url: "https://oralseastafrica.news/born-on-the-lake-the-difference-a-boat-makes-for-island-mothers/",
    theme: "Born on the lake, the difference a boat makes for island mothers",
    outlet: "oralseastafrica.news",
    slug: "orals-east-africa",
  },
];

let fetchFn
try {
  // v2 or v3 of node-fetch
  const nf = require('node-fetch')
  fetchFn = nf.default || nf
} catch {
  if (typeof fetch === 'function') {
    fetchFn = fetch.bind(globalThis)
  } else {
    throw new Error(
      'No fetch available: install node-fetch (v2 for CommonJS) or upgrade Node.'
    )
  }
}

async function downloadImage(url, filepath) {
  const res = await fetchFn(url)
  if (!res.ok) throw new Error(`Status ${res.status}`)
  const buffer = await res.arrayBuffer()
  fs.writeFileSync(filepath, Buffer.from(buffer))
}

;(async () => {
  const outDir = path.join(process.cwd(), 'public', 'stories')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

  const notFound = []
  const failed   = []

  for (const story of stories) {
    console.log(`🔍  [${story.slug}] Fetching page…`)
    try {
      const pageRes = await fetchFn(story.url)
      if (!pageRes.ok) throw new Error(`Page status ${pageRes.status}`)
      const html = await pageRes.text()
      const $ = cheerio.load(html)

      const imgUrl =
        $('meta[property="og:image"]').attr('content') ||
        $('meta[name="og:image"]').attr('content')

      if (!imgUrl) {
        console.warn(`⚠️  [${story.slug}] No og:image found`)
        notFound.push(story.slug)
        continue
      }

      const extMatch = imgUrl.match(/\.(jpe?g|png|webp|gif)(?:$|\?)/i)
      const ext = extMatch ? extMatch[0].split('?')[0] : '.jpg'
      const filename = `${story.slug}${ext}`
      const filepath = path.join(outDir, filename)

      console.log(`⬇️  [${story.slug}] Downloading image…`)
      await downloadImage(imgUrl, filepath)
      console.log(`✅  [${story.slug}] Saved ${filename}`)
    } catch (err) {
      console.error(`❌  [${story.slug}] Error: ${err.message}`)
      failed.push({ slug: story.slug, error: err.message })
    }
  }

  console.log('\n🎉  All done!\n')
  if (notFound.length) {
    console.log('— Images NOT FOUND (no og:image):')
    notFound.forEach(s => console.log(`  • ${s}`))
  }
  if (failed.length) {
    console.log('\n— Downloads FAILED:')
    failed.forEach(({ slug, error }) =>
      console.log(`  • ${slug}: ${error}`)
    )
  }
})()
