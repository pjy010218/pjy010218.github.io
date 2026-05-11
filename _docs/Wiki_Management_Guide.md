# Wiki Pages Management Guide

This guide explains how to create, manage, and link the Wiki introduction pages for your research publishments.

## Overview

Your site acts as both an Obsidian Vault and a Jekyll Blog. We've introduced a `_wiki` collection to serve as centralized introduction pages for your research categories.

On the front page, every grouped publishment category now has a small book icon (📖) next to its title. Clicking this icon leads to its corresponding Wiki page (`/wiki/<category-name>`).

## How it Works

1. **The Category Name**: The title of the group on the front page is determined by the `related` property in your `_papers/*.md` logs.
2. **The Wiki URL**: The book icon links to the slugified version of that category name. 
   - *Example:* If your `related` property is `["AORM Research.pdf"]`, the clean category name is **AORM Research**, and the link will automatically point to `/wiki/aorm-research/`.

## Creating a New Wiki Page

When you start a new research publishment and begin tagging your logs with a new category (e.g., `["My New Paper.pdf"]`), you must create a Wiki page so the book icon doesn't lead to a 404 error.

1. **Open the `_wiki` folder** in your Obsidian vault.
2. **Create a new Markdown file**. The filename **must** be the hyphenated, lowercase version of your category name (the "slug").
   - *Example:* For "AORM Research", name the file `aorm-research.md`.
3. **Add the YAML Frontmatter**:
   At the top of the file, include the necessary frontmatter so Jekyll knows how to render it:
   ```yaml
   ---
   layout: page
   title: "AORM Research Wiki"
   description: "Wiki introduction page for AORM Research"
   ---
   ```

## Writing the Content

You can freely write the content of this Wiki page using standard Markdown in Obsidian.

### Linking to the PDF

To link the Wiki page to the actual PDF stored in `assets/pdfs`, use standard Markdown links and Obsidian embeds. This ensures the PDF is accessible both on the web and natively within Obsidian.

```markdown
# AORM Research

Welcome to the Wiki page for **AORM Research**.

## Related Publishment

[Download / View PDF](/assets/pdfs/AORM_ 위협 수준 탐지를 위한 다계층 구조 기반 위험 모델 제안.pdf)

![[AORM_ 위협 수준 탐지를 위한 다계층 구조 기반 위험 모델 제안.pdf]]

## Notes
Add your methodology, abstract, or introductory notes here!
```

## Summary Checklist for New Publishments

1. Add the new PDF to `assets/pdfs/`.
2. Tag your research logs in `_papers/` using `related: ["[[Your PDF Name.pdf]]"]`.
3. Create a corresponding slugified file in `_wiki/` (e.g., `your-pdf-name.md`).
4. Write your introduction and link the PDF within that new Wiki file.
