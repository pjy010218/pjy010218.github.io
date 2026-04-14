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

<section class="research-board">
  <div style="margin-bottom: 40px; text-align: center; border-bottom: 1px solid #ddd; padding-bottom: 20px;">
    <h2 style="font-family: 'Crimson Pro', serif; font-size: 1.6rem; color: #222; margin: 0; font-weight: 500;">
      Research Repository
    </h2>
    <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #888; text-transform: uppercase; margin-top: 5px;">
      Interactive Multi-Disciplinary Logs
    </p>
  </div>

  {% assign all_tags = "" %}
  {% for log in site.papers %}
    {% assign first_tag = log.tags | first %}
    {% if first_tag %}
      {% unless all_tags contains first_tag %}
        {% capture all_tags %}{{ all_tags }}{{ first_tag }}|{% endcapture %}
      {% endunless %}
    {% endif %}
  {% endfor %}
  {% assign unique_tags = all_tags | split: "|" %}

  <div class="masonry-board">
    {% for tag in unique_tags %}
      <div class="tag-column">
        <h3 class="tag-header">{{ tag | upcase }}</h3>
        <div class="tag-logs-container">
          {% for log in site.papers %}
            {% assign current_first_tag = log.tags | first %}
            {% if current_first_tag == tag %}
              <details class="floating-log-card">
                 <summary class="log-tab">
                    <span class="log-date">{{ log.date | date: "%y.%m.%d"}}</span>
                    <h4 class="log-title">{{ log.title }}</h4>
                    <span class="expand-icon">+</span>
                 </summary>
                 <div class="log-content markdown-body">{{ log.content }}</div>
              </details>
            {% endif %}
          {% endfor %}
        </div>
      </div>
    {% endfor %}
  </div>
</section>

<style>
  .masonry-board {
    display: flex;
    flex-wrap: nowrap;
    gap: 30px;
    align-items: flex-start;
    overflow-x: auto;
    padding: 20px 10px 80px 10px;
  }

  .tag-column {
    flex: 1;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .tag-header {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    letter-spacing: 2px;
    color: #444;
    text-align: center;
    border-bottom: 2px dashed #ccc;
    padding-bottom: 10px;
    margin-bottom: 10px;
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, 0.9);
    z-index: 10;
    backdrop-filter: blur(4px);
  }

  .tag-logs-container {
    display: flex;
    flex-direction: column;
    gap: 0; /* gap controlled by margins for staggering */
  }

  /* Irregular Floating Architecture */
  .floating-log-card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.06);
    border: 1px solid #eaeaea;
    margin-bottom: 25px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    cursor: pointer;
  }

  /* Give them uneven margins to look floating/irregular */
  .floating-log-card:nth-child(even) {
    margin-left: 20px;
    margin-right: -10px;
  }
  
  .floating-log-card:nth-child(odd) {
    margin-left: -10px;
    margin-right: 20px;
  }
  
  .floating-log-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 35px rgba(0,0,0,0.12);
    border-color: #aaa;
    z-index: 5;
  }

  .log-tab {
    padding: 20px;
    list-style: none; /* hide native arrow */
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
    border-radius: 8px; /* match container */
  }

  .log-tab::-webkit-details-marker {
    display: none;
  }

  .log-date {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    color: #999;
    padding: 2px 6px;
    border: 1px solid #eee;
    border-radius: 12px;
    width: max-content;
  }

  .log-title {
    font-family: 'Crimson Pro', serif;
    font-size: 1.15rem;
    margin: 0;
    color: #222;
    line-height: 1.3;
    font-weight: 600;
  }

  .expand-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    font-family: monospace;
    font-size: 1.2rem;
    color: #ccc;
    transition: transform 0.3s ease;
  }

  .floating-log-card[open] .expand-icon {
    transform: rotate(45deg);
    color: #222;
  }

  /* When opened, reset transforms to prevent cutoff and show full content nicely */
  .floating-log-card[open] {
    margin-left: 0;
    margin-right: 0;
    transform: none;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    z-index: 6;
  }

  .floating-log-card[open] .log-tab {
    border-bottom: 1px dashed #eee;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .log-content {
    background: #fafaf8;
    padding: 25px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    animation: fadeIn 0.4s ease-in-out;
  }

  .log-content h1, .log-content h2, .log-content h3 {
    font-family: 'Crimson Pro', serif;
    color: #222;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  
  .log-content p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #444;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
