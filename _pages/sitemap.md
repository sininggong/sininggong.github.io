---
layout: single
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

## Main Pages

<ul>{% for item in site.data.navigation.main %}<li><a href="{{ item.url | relative_url }}">{{ item.title }}</a></li>{% endfor %}</ul>

## Talks and Presentations

<ul>{% assign talks = site.talks | sort: 'date' | reverse %}{% for talk in talks %}<li><a href="{{ talk.url | relative_url }}">{{ talk.title }}</a></li>{% endfor %}</ul>
