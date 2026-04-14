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

  <section class="research-logs-section">
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #999; text-transform: uppercase; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 30px;">
      Research Logs
    </h2>

    <div class="rope-ladder">
      {% assign research_logs = site.papers | sort: "date" | reversed %}
      {% for log in research_logs %}
        <details class="ladder-step">
          <summary class="ladder-rung">
            <div class="rung-meta">
              <span class="rung-date">{{ log.date | date: "%Y.%m.%d" }}</span>
              <span class="rung-tag">{{ log.tags | first | default: 'LOG' }}</span>
            </div>
            <h3 class="rung-title">{{ log.title }}</h3>
            <div class="rung-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </summary>
          <div class="ladder-content markdown-body">
            {{ log.content }}
          </div>
        </details>
      {% endfor %}
    </div>

    {% if research_logs.size == 0 %}
      <p style="text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: #bbb; padding: 40px 0;">[ DATABASE EMPTY ]</p>
    {% endif %}
  </section>

</div>

<style>
  .rope-ladder {
    position: relative;
    padding-left: 20px;
    margin-top: 10px;
  }

  /* The main vertical rope */
  .rope-ladder::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 6px;
    width: 2px;
    background: #e0e0d8;
  }

  .ladder-step {
    position: relative;
    margin-bottom: 25px;
  }

  /* The knot connecting the rung to the rope */
  .ladder-step::before {
    content: '';
    position: absolute;
    top: 24px;
    left: -19px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid #222;
    z-index: 2;
    transition: all 0.3s ease;
  }

  .ladder-step[open]::before {
    background: #222;
    box-shadow: 0 0 0 4px rgba(34, 34, 34, 0.1);
  }

  .ladder-rung {
    display: grid;
    grid-template-columns: min-content 1fr auto;
    align-items: center;
    gap: 20px;
    padding: 16px 20px;
    background: #fff;
    border: 1px solid #d1d1ca;
    border-radius: 4px;
    cursor: pointer;
    list-style: none; /* remove native arrow */
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0,0,0,0);
  }

  /* Hide default marker in webkit */
  .ladder-rung::-webkit-details-marker {
    display: none;
  }

  .ladder-rung:hover {
    border-color: #222;
    background: #fafaf8;
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }

  .rung-meta {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 80px;
  }

  .rung-date {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: #888;
  }

  .rung-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.55rem;
    padding: 2px 4px;
    background: #f0f0f0;
    color: #666;
    border-radius: 2px;
    width: max-content;
    text-transform: uppercase;
  }

  .rung-title {
    font-family: 'Crimson Pro', serif;
    font-size: 1.15rem;
    margin: 0;
    color: #222;
    font-weight: 600;
    line-height: 1.4;
  }

  .rung-icon {
    width: 20px;
    height: 20px;
    color: #999;
    transition: transform 0.3s ease;
  }

  .ladder-step[open] .rung-icon {
    transform: rotate(180deg);
  }

  .ladder-step[open] .ladder-rung {
    border-bottom: 1px dashed #d1d1ca;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    margin-bottom: 0px;
  }

  .ladder-content {
    background: #fff;
    border: 1px solid #d1d1ca;
    border-top: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 30px;
    animation: slideDown 0.3s ease-out;
  }

  .ladder-content h1, .ladder-content h2, .ladder-content h3 {
    font-family: 'Crimson Pro', serif;
    color: #222;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  
  .ladder-content p {
    font-size: 1.05rem;
    line-height: 1.7;
    color: #333;
  }

  .ladder-content code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9em;
    background: #f4f4f2;
    padding: 2px 4px;
    border-radius: 3px;
  }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
