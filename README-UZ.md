# ESSENTIAL MASTERY — VS Code va Netlify

To‘liq Next.js loyiha: 30 Unit, 600 so‘z, o‘qish/aytish, eshitish/yozish,
Unit testlari, oldingi Unitlar takrorlashi va mahalliy progress.
Content Studio va sozlamalardagi Gemini AI paneli olib tashlangan.
AI Tutor va matn tekshirish serverdagi umumiy kalit bilan ishlaydi.

## VS Code’da ishga tushirish

1. Node.js 24 LTS o‘rnating: https://nodejs.org/
2. ZIPni oching. `essential-mastery-netlify` papkasini VS Code’da oching.
3. Terminalda:

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Brauzerda http://localhost:3000 ni oching.
Agar Corepack mavjud bo‘lmasa, bir marta `npm install -g pnpm@11.25.0` bajaring.
Windows’da `corepack enable` ruxsat xatosi bersa, terminalni administrator
sifatida bir marta ochib bajaring.

Mahalliy AI uchun `.env.example` nusxasini `.env.local` deb nomlang.
`GEMINI_API_KEY=` dan keyin o‘z kalitingizni yozing va `pnpm dev`ni qayta boshlang.
Kalit ZIPga kiritilmagan; `.env.local` Gitga yuborilmaydi.

## Netlify’ga deploy

1. Loyiha fayllarini GitHub’da yangi repository’ga yuklang.
   `node_modules`, `.next` va `.env.local`ni yuklamang.
2. Netlify’da **Add new project → Import an existing project** orqali
   GitHub repository’ni tanlang.
3. Build command: `pnpm build`; Publish directory: `.next`.
   `netlify.toml`da bu sozlamalar tayyor.
4. Netlify environment variables’ga:
   - `GEMINI_API_KEY`: o‘z Gemini kalitingiz. Secret sifatida belgilang;
     Functions runtime’ga ham ruxsat bering.
   - `GEMINI_MODEL`: `gemini-2.5-flash` (ixtiyoriy).
5. Deployni boshlang. Kalit keyin qo‘shilsa, qayta deploy qiling.

Netlify Next.js adapteri server API route’ni ham deploy qiladi.
Oddiy papkani Netlify Drop’ga tashlash serverdagi AI uchun yetarli emas.
Git orqali build qilish tavsiya etiladi.

Git ishlatmasdan terminal orqali ham mumkin:

```sh
npx netlify-cli login
npx netlify-cli init
npx netlify-cli deploy --build --prod
```

Bu buyruqlarni o‘zingiz ishga tushirasiz. Ushbu topshiriqda Netlify’ga deploy
qilinmagan. CLI bilan ham kalitni Netlify environment variables’da qo‘shing.

## Mikrofon va progress

Chrome’da sayt ruxsatlari: Microphone → Allow.
Speaking nutqni matnga solishtiradi; professional fonetik baholash emas.
Progress IndexedDB’da shu brauzerda saqlanadi.

Eski Sites domenidagi progress yangi Netlify domeniga avtomatik o‘tmaydi.
Eski sayt Sozlamalar → Progress zaxirasi orqali JSONni yuklang.
Yangi sayt Sozlamalar → Zaxirani tiklash orqali uni kiriting.

## Fayllar

- `app/page.tsx`: o‘quv oynalari.
- `app/globals.css`: dizayn.
- `lib/engine.ts`: savollar, testlar va takrorlash.
- `lib/data/`: kitob so‘zlari va misollar.
- `app/api/tutor/route.ts`, `lib/ai.ts`: serverdagi AI.
- `public/`: PWA va ikonlar.
- `netlify.toml`: deploy sozlamalari.

Hujjatlar:
https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/
https://docs.netlify.com/build/environment-variables/get-started/
