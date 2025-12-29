---
layout: page
title: Papers
permalink: /papers/
---

<div class="papers-page-wrapper" style="font-family: 'Crimson Pro', serif; max-width: 100%;">

  <section style="margin-bottom: 40px;">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #999; text-transform: uppercase; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 20px; letter-spacing: 1px;">
      Selected Publications
    </h2>
    <div class="vault-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 15px;">
      {% for pub in site.data.publications %}
      <div class="vault-card-static" style="border: 1px solid #d1d1ca; padding: 15px; background: #fff; display: flex; flex-direction: column; justify-content: space-between; min-height: 120px;">
        <div>
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.55rem; background: #222; color: #fff; padding: 2px 6px; text-transform: uppercase; display: inline-block; margin-bottom: 10px;">PUB</span>
          <h3 style="font-size: 0.95rem; margin: 0 0 5px 0; font-weight: 600; color: #111; line-height: 1.3;">{{ pub.title }}</h3>
          <p style="font-size: 0.8rem; color: #666; font-style: italic; margin: 0;">{{ pub.conference }}</p>
        </div>
        <div style="margin-top: 15px;">
          <a href="{{ pub.url | relative_url }}" target="_blank" style="font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; color: #0044cc; text-decoration: none; font-weight: bold;">[ ACCESS DOCUMENT ]</a>
        </div>
      </div>
      {% endfor %}
    </div>
  </section>

  <section>
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #999; text-transform: uppercase; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 20px; letter-spacing: 1px;">
      Research Logs
    </h2>
    <div class="vault-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 15px;">
      {% assign research_logs = site.papers | sort: "date" | reversed %}
      {% for log in research_logs %}
        {% include post-entry.html post=log %}
      {% endfor %}
    </div>
    {% if research_logs.size == 0 %}
      <p style="text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: #bbb; padding: 40px 0;">[ NO LOGS INDEXED ]</p>
    {% endif %}
  </section>

</div>

<style>
  /* 모바일 대응: 화면이 좁을 때는 1열로 */
  @media (max-width: 650px) {
    .vault-grid {
      grid-template-columns: 1fr !important;
    }
  }

  /* 호버 효과 통일 */
  .vault-card-static:hover, .post-card-mini div:hover {
    border-color: #111 !important;
    background-color: #f9f9f7 !important;
    transform: translateY(-2px);
    transition: all 0.2s ease;
  }
</style>
