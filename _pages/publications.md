---
layout: page
permalink: /publications/
title: publications
description: papers and proceedings in reversed chronological order, followed by talks and posters.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

<h2 class="bibliography">talks &amp; posters</h2>

{% bibliography --file talks.bib --group_by none %}

</div>
