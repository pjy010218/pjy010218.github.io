---
layout: home
---

<section class="intro-section" style="margin-bottom: 60px;">
    <h2 style="font-size: 1.2rem; text-transform: uppercase; border-bottom: 1px solid #d1d1ca;">Biographical Abstract</h2>
    <p>
        대한민국에서 사이버 보안을 공부 중인 학생입니다. 
        시스템 보안을 전공하며 AI, 클라우드 및 최신 보안 기술에 주력하고 있습니다.
    </p>
    <p style="font-style: italic; color: #666; margin-top: 10px;">
        현재 인프라와 보안 기술의 융합을 연구 중입니다.
    </p>
</section>

<div style="margin-bottom: 40px;">
  <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #999; text-transform: uppercase; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 15px;">
    Latest Posts & Research
  </h2>
  
  {% assign all_entries = site.papers | sort: "date" | reversed %}

  {% for post in all_entries limit: 5 %}
    {% include post-entry.html %}
  {% endfor %}
  
  {% if latest_logs.size == 0 %}
    <p style="font-family: 'Crimson Pro', serif; font-size: 0.9rem; color: #999; text-align: center; padding: 20px 0;">
      NO RESEARCH LOGS INDEXED.
    </p>
  {% endif %}
</div>

<div style="text-align: center; margin-top: 20px;">
  <a href="/papers/" style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #0044cc; text-decoration: none;">[ VIEW ALL RESEARCH LOGS ]</a>
</div>
