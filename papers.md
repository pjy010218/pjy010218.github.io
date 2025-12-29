---
layout: page
title: Papers
permalink: /papers/
description: "Archive of publications and research artifacts."
---

<div class="papers-page-container" style="font-family: 'Crimson Pro', serif;">

  <section style="margin-bottom: 50px;">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #999; text-transform: uppercase; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 20px;">
      Selected Publications
    </h2>
    <div class="papers-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 15px;">
      {% for pub in site.data.publications %}
      <article class="post-card-mini">
        <div style="border: 1px solid #d1d1ca; padding: 12px; background: #fff; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; padding: 1px 5px; background: #222; color: #fff; text-transform: uppercase; margin-bottom: 8px; display: inline-block;">
              PUB
            </span>
            <h3 style="font-size: 0.95rem; margin: 0 0 8px 0; font-weight: 600; line-height: 1.3; color: #222;">
              {{ pub.title }}
            </h3>
            <p style="font-size: 0.8rem; color: #777; margin: 0; font-style: italic; line-height: 1.2;">
              {{ pub.conference }}
            </p>
          </div>
          <div style="margin-top: 12px;">
            <a href="{{ pub.url | relative_url }}" target="_blank" style="font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: #0044cc; text-decoration: none; font-weight: bold;">
              [ PDF DOWNLOAD ]
            </a>
          </div>
        </div>
      </article>
      {% endfor %}
    </div>
  </section>

  <section>
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #999; text-transform: uppercase; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 20px;">
      Research Logs
    </h2>
    <div class="papers-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 15px;">
      {% assign research_logs = site.papers | sort: "date" | reversed %}
      {% for log in research_logs %}
        {% include post-entry.html post=log %}
      {% endfor %}
    </div>
    {% if research_logs.size == 0 %}
      <div style="text-align: center; padding: 30px 0; color: #bbb; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem;">
        [ NO LOGS INDEXED IN DATABASE ]
      </div>
    {% endif %}
  </section>

</div>

<style>
  /* 반응형: 모바일에서는 1열로 전환 */
  @media (max-width: 720px) {
    .papers-grid {
      grid-template-columns: 1fr !important;
    }
  }

  /* 카드 호버 효과 */
  .post-card-mini div:hover {
    border-color: #222 !important;
    background-color: #f9f9f7 !important;
  }
</style>
