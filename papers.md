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
  
  <div class="posts">
    {% for post in site.papers %}
          <div class="list__item">
      <article class="page__item">
        <h3 class="page__item-title"><a href="{{ post.url | absolute_url }}">{{ post.title | default: post.seotitle }}</a></h3>
        {% if post.author %}<p><strong>Author:</strong> {{ post.author }}</p>{% endif %}
        {% if post.date %}<p><time>{{ post.date | date: "%B %d, %Y" }}</time></p>{% endif %}
        {% if post.description %}<p>{{ post.description }}</p>{% endif %}
      </article>
    </div>
    {% endfor %}
  </div>

</div>
