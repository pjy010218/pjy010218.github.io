---
layout: home
---
<div class="research-megalith">
  {% assign research_logs = site.papers | sort: "date" | reversed %}
  
  {% for log in research_logs %}
    {% assign title_len = log.title | size %}
    {% if title_len < 15 %}
       {% assign fsize = "clamp(4.5rem, 9vw, 8rem)" %}
       {% assign lh = "0.9" %}
    {% elsif title_len < 30 %}
       {% assign fsize = "clamp(3.5rem, 7vw, 6rem)" %}
       {% assign lh = "1" %}
    {% elsif title_len < 55 %}
       {% assign fsize = "clamp(2.5rem, 5vw, 4rem)" %}
       {% assign lh = "1.05" %}
    {% else %}
       {% assign fsize = "clamp(1.8rem, 3.5vw, 3rem)" %}
       {% assign lh = "1.15" %}
    {% endif %}

    <details class="mega-log">
      <summary class="mega-title" style="font-size: {{ fsize }}; line-height: {{ lh }};">
         <span class="mega-text">{{ log.title | upcase }}</span>
         <span class="mega-meta">[{{ log.tags | first | default: 'LOG' | upcase }}] {{ log.date | date: "%Y.%m.%d" }}</span>
      </summary>
      <div class="mega-content markdown-body">
         {{ log.content }}
      </div>
    </details>
  {% endfor %}

  {% if research_logs.size == 0 %}
    <h2 style="font-size: 3rem; text-align: right; margin-top: 100px; color: #aaa;">NO LOGS YET.</h2>
  {% endif %}
</div>

<style>
  .research-megalith {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 100px;
  }

  .mega-log {
    transition: margin 0.3s ease;
  }

  /* Right-aligned staggered cascading visually */
  .mega-log:nth-child(5n+1) .mega-title { padding-right: 0%; text-align: right; }
  .mega-log:nth-child(5n+2) .mega-title { padding-right: 8%; text-align: right; }
  .mega-log:nth-child(5n+3) .mega-title { padding-right: 3%; text-align: right; }
  .mega-log:nth-child(5n+4) .mega-title { padding-right: 15%; text-align: right; }
  .mega-log:nth-child(5n+5) .mega-title { padding-right: 5%; text-align: right; }

  .mega-title {
    display: block;
    cursor: pointer;
    list-style: none; /* Make details marker disappear */
    padding: 2.5rem 0;
    font-family: var(--font-serif);
    font-weight: 800;
    letter-spacing: -0.04em;
    color: var(--color-text);
    transition: color 0.2s ease, transform 0.2s ease;
    position: relative;
    word-break: keep-all; 
    overflow-wrap: break-word;
  }
  
  .mega-title::-webkit-details-marker {
    display: none;
  }

  .mega-title:hover {
    color: var(--color-sub);
    transform: scale(0.98);
  }

  .mega-meta {
    display: block;
    font-family: var(--font-mono);
    font-size: clamp(0.6rem, 1vw, 0.8rem);
    color: var(--color-sub);
    letter-spacing: 0.1em;
    margin-top: 15px;
    font-weight: 400;
  }

  /* When expanded, lock it cleanly */
  .mega-log[open] {
    margin: 40px 0;
    border-bottom: none;
  }
  
  .mega-log[open] .mega-title {
    padding-bottom: 30px;
    margin-bottom: 0px; /* spacing defined by content padding */
    color: var(--color-accent);
  }

  /* Smooth appearance for log content */
  .mega-content {
    background: #ffffff;
    padding: 3rem 4rem;
    font-size: 1.15rem;
    line-height: 1.8;
    color: #333;
    border: 1px solid var(--color-border);
    border-top: none;
    box-shadow: 0 15px 40px rgba(0,0,0,0.04);
    animation: slideInDown 0.3s ease-out;
  }

  .mega-content h1, .mega-content h2, .mega-content h3 {
    font-family: var(--font-serif);
    color: #111;
    margin-top: 1.2em;
    margin-bottom: 0.5em;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  .mega-content code {
    font-family: var(--font-mono);
    font-size: 0.9em;
    background: #f0f0ea;
    padding: 2px 5px;
    border-radius: 3px;
  }
  
  .mega-content pre {
    background: #f0f0ea;
    padding: 20px;
    border-radius: 5px;
    overflow-x: auto;
  }

  @keyframes slideInDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Mobile scaling adjustments */
  @media (max-width: 900px) {
    .mega-log:nth-child(n) .mega-title {
       padding-right: 0%;
       text-align: left; /* Shift to left align on mobile for readability */
    }
    .mega-content {
       padding: 2rem 1.5rem;
       font-size: 1rem;
    }
  }
</style>
