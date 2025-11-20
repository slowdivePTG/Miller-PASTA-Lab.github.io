---
layout: default
title: Team
active: team
permalink: /team/
---

<!--
<nav class="breadcrumb">Home / Team</nav>
-->

<section>
  <h2 class="notice">People</h2>
  <div class="team-grid">
    {% for m in site.data.team.current %}
    <div class="card member-card">
      <img src="{{ '/assets/team/' | append: m.photo | relative_url }}" alt="Headshot of {{ m.name }}" />
      <h3>{{ m.name }}</h3>
      <p class="role">{{ m.role }}</p>
      <p class="bio">{{ m.bio }}</p>
      <div class="links-row">
        {% if m.ads %}
          <a href="{{ m.ads }}" target="_blank" rel="noopener" aria-label="NASA ADS">
            <span class="ads-link">Publications</span>
          </a>
        {% endif %}
        {% if m.github %}
          <a href="{{ m.github }}" target="_blank" rel="noopener" aria-label="GitHub">
            <svg class="icon" viewBox="0 0 16 16" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">

              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
              0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01
              1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
             0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 4 0c1.53-1.03
              2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15
              0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
              0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        {% endif %}
      </div>   
    </div>
    {% endfor %}
  </div>
</section>

<section>
  <h2 class="notice">Former group members</h2>
  <div class="team-grid">
    {% for m in site.data.team.former %}
    <div class="card member-card">
      <img src="{{ '/assets/team/' | append: m.photo | relative_url }}" alt="Headshot of {{ m.name }}" />
      <h3>{{ m.name }}</h3>
      <p class="role">{{ m.role }}</p>
      <p class="bio">{{ m.bio }}</p>
      <div class="links-row">
        {% if m.ads %}
          <a href="{{ m.ads }}" target="_blank" rel="noopener" aria-label="NASA ADS">
            <span class="ads-link">Publications</span>
          </a>
        {% endif %}
        {% if m.github %}
          <a href="{{ m.github }}" target="_blank" rel="noopener" aria-label="GitHub">
            <svg class="icon" viewBox="0 0 16 16" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">

              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
              0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01
              1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
             0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 4 0c1.53-1.03
              2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15
              0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
              0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        {% endif %}
      </div>   
    </div>
    {% endfor %}
  </div>
</section>

<!-- 
<section>
  <div class="notice">
    <p>Headshots: Add JPG/PNG files into <code>assets/team/</code> using the filenames in <code>_data/team.yml</code>.</p>
  </div>
</section>
 -->