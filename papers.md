---
layout: page
title: Papers
permalink: /papers/
---

<div class="papers-page-wrapper" style="font-family: 'Crimson Pro', serif;">

  <section style="margin-bottom: 50px;">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #999; text-transform: uppercase; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 20px;">
      Selected Publications
    </h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 15px;">
      {% for pub in site.data.publications %}
      <div style="border: 1px solid #d1d1ca; padding: 15px; background: #fff; min-height: 110px; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.55rem; background: #222; color: #fff; padding: 2px 6px; margin-bottom: 8px; display: inline-block;">PUB</span>
          <h3 style="font-size: 1rem; margin: 0; font-weight: 600; line-height: 1.3;">{{ pub.title }}</h3>
        </div>
        <a href="{{ pub.url | relative_url }}" target="_blank" style="font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; color: #0044cc; text-decoration: none; margin-top: 10px;">[ ACCESS PDF ]</a>
      </div>
      {% endfor %}
    </div>
  </section>

  <section>
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #999; text-transform: uppercase; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 20px;">
      Research Logs
    </h2>

    <div class="logs-list" style="display: flex; flex-direction: column; gap: 5px;">
      {% assign research_logs = site.papers | sort: "date" | reversed %}
      {% for log in research_logs %}
        {% include post-entry.html post=log %}
      {% endfor %}
    </div>

    {% if research_logs.size == 0 %}
      <p style="text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: #bbb; padding: 40px 0;">[ DATABASE EMPTY ]</p>
    {% endif %}
  </section>

</div>

<style>
  /* 호버 효과 */
  .post-card-mini div:hover {
    border-color: #111 !important;
    background-color: #f9f9f7 !important;
  }
</style>
