---
layout: page
title: Papers
permalink: /papers/
---

<div class="page-content">
  
  <h1>Publications</h1>
  <p>지금까지 출판하거나 발표한 논문 목록입니다.</p>

  <ul class="publication-list" style="list-style-type: none; padding-left: 0;">
    {% for pub in site.data.publications %}
      <li style="margin-bottom: 1.5em;">
        <strong>⦁ {{ pub.title }}</strong>
        <br>
        <em>{{ pub.conference }}</em>
        <br>
        <a href="{{ pub.url | relative_url }}" target="_blank">[PDF Download]</a>
      </li>
    {% endfor %}
  </ul>

  <hr>

  <h2>Paper Logs</h2>
  <p>논문 작성과 관련된 일지를 기록하는 공간입니다.</p>
  
  <ul class="paper-log-list" style="list-style-type: none; padding-left: 0;">
    {% for paper in site.papers %}
      <li style="margin-bottom: 1.5em;">
        <h3><a href="{{ paper.url | relative_url }}">{{ paper.title }}</a></h3>
        <p>{{ paper.excerpt }}</p>
      </li>
    {% endfor %}
  </ul>

</div>
