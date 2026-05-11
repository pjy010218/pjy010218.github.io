---
layout: home
---
<div class="research-megalith">
  {% assign grouped_logs = site.papers | group_by_exp: "log", "log.related.first | default: 'Ongoing Research'" %}
  
  {% for group in grouped_logs %}
    {% assign group_clean_name = group.name | replace: '[[', '' | replace: ']]', '' | replace: '.pdf', '' %}
    {% assign name_len = group_clean_name | size %}
    {% if name_len < 15 %}
       {% assign fsize = "clamp(4.5rem, 9vw, 8rem)" %}
       {% assign lh = "0.9" %}
    {% elsif name_len < 30 %}
       {% assign fsize = "clamp(3.5rem, 7vw, 6rem)" %}
       {% assign lh = "1" %}
    {% elsif name_len < 55 %}
       {% assign fsize = "clamp(2.5rem, 5vw, 4rem)" %}
       {% assign lh = "1.05" %}
    {% else %}
       {% assign fsize = "clamp(1.8rem, 3.5vw, 3rem)" %}
       {% assign lh = "1.15" %}
    {% endif %}

    <details class="mega-log">
      <summary class="mega-title" style="font-size: {{ fsize }}; line-height: {{ lh }}; position: relative;">
         <a href="/wiki/{{ group_clean_name | slugify }}/" title="Read Wiki Introduction for {{ group_clean_name }}" style="position: absolute; right: 100%; top: 50%; transform: translateY(-50%); margin-right: 20px; font-size: clamp(1.5rem, 3vw, 2.5rem); text-decoration: none; transition: 0.2s opacity; opacity: 0.5;">📖</a>
         <span class="mega-text">{{ group_clean_name | upcase }}</span>
         <span class="mega-meta">[{{ group.items.size }} LOG{% if group.items.size > 1 %}S{% endif %}]</span>
      </summary>
      <div class="mega-content markdown-body">
         <ul class="log-list" style="list-style: none; padding: 0; margin: 0;">
           {% assign research_logs = group.items | sort: "title" | reverse %}
           {% for log in research_logs %}
             <li style="margin-bottom: 40px; border-bottom: 1px solid #eaeaea; padding-bottom: 30px;">
                <h3 style="margin-top: 0; font-size: 1.8rem; font-family: var(--font-serif); color: #111;">{{ log.title }}</h3>
                <span style="font-family: var(--font-mono); font-size: 0.85rem; color: #666; letter-spacing: 0.05em; display: block; margin-bottom: 15px;">{{ log.date | date: "%Y.%m.%d" }}</span>
                <div style="margin-top: 15px; font-family: var(--font-sans); color: #333;">
                  {{ log.content }}
                </div>
             </li>
           {% endfor %}
         </ul>
      </div>
    </details>
  {% endfor %}

  {% if site.papers.size == 0 %}
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
    position: relative;
    z-index: 1;
  }

  /* Right-aligned staggered cascading visually mapped via MARGIN to fix hitboxes */
  .mega-log:nth-of-type(5n+1) .mega-title { margin-right: 0%; }
  .mega-log:nth-of-type(5n+2) .mega-title { margin-right: 6%; }
  .mega-log:nth-of-type(5n+3) .mega-title { margin-right: 2%; }
  .mega-log:nth-of-type(5n+4) .mega-title { margin-right: 10%; }
  .mega-log:nth-of-type(5n+5) .mega-title { margin-right: 4%; }

  .mega-title {
    display: block;
    width: max-content;
    max-width: 100%;
    margin-left: auto;
    text-align: right;
    
    cursor: pointer;
    list-style: none; /* Make details marker disappear */
    padding: 1.5rem 0;
    font-family: var(--font-serif);
    font-weight: 800;
    letter-spacing: -0.04em;
    color: var(--color-text);
    
    position: relative;
    word-break: keep-all; 
    overflow-wrap: break-word;

    /* Local 3D Transform to prevent vanishing point shifting */
    transform-origin: right center;
    transform: perspective(1200px) rotateY(-8deg) rotateX(2deg);
    transition: color 0.4s ease, transform 0.4s ease, text-shadow 0.4s ease;
    text-shadow: -2px 2px 5px rgba(0,0,0,0.02), -5px 5px 15px rgba(0,0,0,0.02);
  }
  
  .mega-title::-webkit-details-marker {
    display: none;
  }

  .mega-title > a:hover {
    opacity: 1 !important;
  }

  .mega-title:hover {
    color: var(--color-sub);
    transform: perspective(1200px) rotateY(-3deg) rotateX(1deg) scale(0.99);
    text-shadow: -3px 3px 10px rgba(0,0,0,0.05);
    z-index: 10;
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

  /* When expanded, lock it cleanly and flatten the 3D */
  .mega-log[open] {
    margin: 40px 0;
    z-index: 5;
  }
  
  .mega-log[open] .mega-title {
    padding-bottom: 30px;
    margin-bottom: 0px; 
    color: var(--color-accent);
    /* Flatten local 3D effect temporarily */
    transform: perspective(1200px) rotateY(0) rotateX(0); 
    text-shadow: none;
  }

  /* Smooth appearance for log content */
  .mega-content {
    background: #ffffff;
    padding: 3rem 4rem;
    font-size: 1.15rem;
    line-height: 1.8;
    color: #333;
    border: 1px solid var(--color-border);
    box-shadow: 0 15px 40px rgba(0,0,0,0.04);
    animation: slideInDown 0.3s ease-out;
    position: relative;
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
