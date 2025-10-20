---
layout: page
title: Papers
permalink: /papers/
---

<div class="page-content">
  <h1>Papers</h1>
  <p>논문 작성과 관련된 일지를 기록하는 공간입니다.</p>

  <ul>
    {% for paper in site.papers %}
      <li>
        <h2><a href="{{ paper.url | relative_url }}">{{ paper.title }}</a></h2>
        <p>{{ paper.excerpt }}</p>
      </li>
    {% endfor %}
  </ul>
</div>