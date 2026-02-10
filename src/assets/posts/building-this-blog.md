---
title: "Building This Blog: The Laziest Approach"
date: "2026-02-10"
slug: "building-this-blog"
---

I wanted a simple, elegant way to write and publish blog posts without using a 3rd party host or cms like wordpress.

## The Stack

**Core Framework:**
- React 18 with TypeScript
- Vite for blazingly fast development
- Styled Components for styling

**Content Management:**
- Markdown files with frontmatter
- `gray-matter` - Parses YAML frontmatter from markdown
- `marked` - Converts markdown to HTML
- `buffer` - Polyfill for Node.js Buffer API (required by gray-matter in browser)

## Why Markdown?

I initially stored posts as TypeScript template strings with HTML embedded. It worked, but adding new posts required:
1. Creating a new `.ts` file
2. Manually importing it in `App.tsx`
3. Adding it to the posts array with metadata
4. Managing IDs and sorting

With markdown, I just create a file and it automatically appears on the site. No imports, no array updates, no ID management.

## How It Works

### 1. Creating a Post

Create a new `.md` file in `src/assets/notes/` with frontmatter at the top:

```markdown
---
title: "Your Post Title"
date: "2026-02-10"
slug: "your-post-slug"
---

Your content goes here in **markdown**!

## You can use headings

And [links](https://example.com) and all standard markdown features.
```

**Required frontmatter fields:**
- `title` - Displayed in the post list and article header
- `date` - YYYY-MM-DD format, used for sorting (newest first)
- `slug` - URL-friendly identifier

### 2. Auto-Detection

Vite's `import.meta.glob()` automatically finds all `.md` files:

```typescript
const markdownFiles = import.meta.glob('./assets/notes/*.md', { 
  eager: true, 
  query: '?raw', 
  import: 'default' 
});
```

This imports them as raw strings at build time - no manual imports needed!

### 3. Parsing and Rendering

For each file:
1. `gray-matter` extracts the frontmatter and markdown content
2. `marked` converts markdown to HTML
3. Posts are sorted by date (newest first)
4. React renders them dynamically

```typescript
const { data, content: markdownContent } = matter(content);
const htmlContent = marked(markdownContent);
```

### 4. Display

The homepage shows a simple list of post titles and dates. Click one, and the full content renders below the header. Click the header to return to the list.

## What I Love About This Setup

**For writing:**
- Write in markdown (fast, familiar, portable)
- No CMS login or database
- Files live in version control
- Can write offline in any text editor

**For adding posts:**
- Create one file
- That's it

**For development:**
- Hot reload works perfectly
- TypeScript catches errors
- Easy to customize styling
- Markdown stays readable even if I change frameworks later
