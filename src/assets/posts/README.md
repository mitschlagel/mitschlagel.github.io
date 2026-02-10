# How to Add a New Post

Creating a new blog post is easy! Just follow these steps:

## 1. Create a new markdown file

Create a new `.md` file in this directory (`src/assets/notes/`). Name it whatever you want, but using the slug is recommended (e.g., `my-new-post.md`).

## 2. Add frontmatter

At the top of your markdown file, add frontmatter with your post's metadata:

```markdown
---
title: "Your Post Title"
date: "2026-02-10"
slug: "your-post-slug"
---

Your post content goes here...
```

**Required fields:**
- `title` - The title of your post (displayed in the list and at the top of the article)
- `date` - Date in YYYY-MM-DD format (used for sorting)
- `slug` - URL-friendly identifier (lowercase, hyphens instead of spaces)

## 3. Write your content

Below the frontmatter (after the `---`), write your post content in Markdown:

```markdown
This is a paragraph with **bold text** and *italic text*.

## Section Heading

You can add [links](https://example.com) and more!

- Bullet points
- Work too
```

## 4. That's it!

Your post will automatically appear on the site. The system:
- Automatically detects all `.md` files in this directory
- Sorts posts by date (newest first)
- Converts markdown to HTML
- Formats dates nicely

No need to update any other files or manually add imports!

## Example Post

```markdown
---
title: "My Awesome Blog Post"
date: "2026-02-10"
slug: "awesome-post"
---

This is the introduction to my post.

## Main Points

Here are some interesting things I want to share:

1. First point
2. Second point
3. Third point

Check out [this link](https://example.com) for more info!
```

## Markdown Cheat Sheet

- `**bold**` → **bold**
- `*italic*` → *italic*
- `[link text](url)` → clickable link
- `## Heading` → Section heading
- `### Subheading` → Smaller heading
- Blank line = new paragraph
- You can also use HTML if needed!
