# Ross McLain Portfolio v2

Portfolio v2 is a Vite + React 19 rebuild with:

- updated route architecture (`/`, `/work`, `/work/:slug`, `/resume`, `/labs`)
- legacy route redirects for old deep links
- MDX-backed project content (`content/projects/*.mdx`)
- preserved visual DNA (galaxy background + retro terminal cues)

## Scripts

```bash
npm install
npm run dev
npm run test
npm run build
```

## Content

- Projects and case studies: `content/projects/*.mdx`
- Home copy and links: `src/content/site.ts`
- Timeline milestones: `src/content/timeline.ts`
- Unity lab runtime config: `src/content/labs.ts`

## Notes

Static SEO files are in `public/robots.txt` and `public/sitemap.xml`.

