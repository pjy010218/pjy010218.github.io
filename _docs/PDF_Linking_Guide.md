# Obsidian & Jekyll PDF Linking Best Practice

To efficiently create your personal Wiki linking markdown logs under `_papers/` to your publishments under `assets/pdfs/`, the best practice is to leverage **Obsidian Properties (YAML Frontmatter)** combined with standard paths for web rendering. This ensures it looks great inside the Obsidian application and renders correctly on your Jekyll blog.

## 1. Structure

I've updated your `template/research_log.md` and all your existing logs in `_papers/` to include two new properties in the YAML frontmatter:

```yaml
related: []
paper_pdf: ""
```

## 2. How to Tag Your Papers

Whenever you want to link a log to a PDF, update these two properties:

### The `related` Property (For Obsidian)

Obsidian properties fully support internal links. By putting a `[[wiki-link]]` inside a list property, Obsidian will display it as a clickable button in your note's Properties view.

Example:

```yaml
related:
    - "[[AORM_ 위협 수준 탐지를 위한 다계층 구조 기반 위험 모델 제안.pdf]]"
```

_Note: Make sure to wrap the `[[ ]]` in quotes in the raw text, or just use the Obsidian Properties UI to add it directly!_

### The `paper_pdf` Property (For Jekyll/Web)

Since Jekyll templates might not understand Obsidian's `[[ ]]` syntax natively, you can provide the direct URL path to the PDF here. You can then update your Jekyll layout (e.g., `_layouts/post.html`) to show a "Download Paper" button if `page.paper_pdf` exists.

Example:

```yaml
paper_pdf: "/assets/pdfs/AORM_ 위협 수준 탐지를 위한 다계층 구조 기반 위험 모델 제안.pdf"
```

## 3. Alternative: In-Body Links

If you prefer to see the link directly in your reading view rather than the top properties bar, you can simply drop standard markdown links anywhere in the body of your log:

```markdown
[Read the Published Paper](/assets/pdfs/AORM\_ 위협 수준 탐지를 위한 다계층 구조 기반 위험 모델 제안.pdf)
```

This syntax works seamlessly across both Obsidian's reading mode and Jekyll's website generator.

## 4. Viewing PDFs directly in Obsidian

If you want the PDF to be fully embedded and readable _inside_ the Obsidian log without opening a new pane, use an embed link in the body:

```markdown
![[AORM_ 위협 수준 탐지를 위한 다계층 구조 기반 위험 모델 제안.pdf]]
```
