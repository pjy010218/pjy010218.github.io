---
layout: page
title: Publications
permalink: /papers/
---

<section class="publications-academic">
  <div class="pubs-header-container" style="text-align: right; margin-bottom: 60px; border-bottom: 1px solid var(--color-border); padding-bottom: 20px;">
    <h2 style="font-family: var(--font-serif); font-size: clamp(3rem, 6vw, 5rem); margin: 0; font-weight: 800; line-height: 1; color: var(--color-text); letter-spacing: -1px;">
      PUBLICATIONS
    </h2>
    <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--color-sub); text-transform: uppercase;">
      Official Academic Works
    </span>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 30px;">
    {% for pub in site.data.publications %}
    <div style="padding: 35px; background: #fff; border: 1px solid var(--color-border); display: flex; flex-direction: column; justify-content: space-between; transition: all 0.2s ease;">
      <div>
        <span style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--color-sub); text-transform: uppercase; margin-bottom: 15px; display: block; letter-spacing: 1px;">
          {{ pub.date | default: 'ISSUED' }}
        </span>
        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin: 0; font-weight: 600; line-height: 1.35; color: var(--color-text);">
          {{ pub.title }}
        </h3>
        <p style="font-family: var(--font-sans); font-size: 0.9rem; color: #666; margin-top: 10px; line-height: 1.5;">
          {{ pub.author }}
        </p>
      </div>
      <a href="{{ pub.url | relative_url }}" target="_blank" style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--color-text); text-decoration: none; margin-top: 35px; display: inline-block; border-bottom: 1px solid var(--color-border); padding-bottom: 3px; width: max-content; font-weight: 600;">
        ACCESS PDF &rarr;
      </a>
    </div>
    {% endfor %}
  </div>

  <style>
    .publications-academic > div > div:hover {
       transform: translateY(-5px);
       border-color: var(--color-text);
       box-shadow: 0 10px 30px rgba(0,0,0,0.03);
    }
  </style>
</section>
