# Newshub for FAForever

This repository contains the source of a proposal for an alternative newshub for [FAForever](https://faforever.com/).

## Technologies

- [Jekyll](https://jekyllrb.com/) ([GitHub Pages](https://pages.github.com/)) Tooling to generate the site
  - [jekyll-feed](https://github.com/jekyll/jekyll-feed), Atom/rss feed
  - [jekyll-redirect-from](https://github.com/jekyll/jekyll-redirect-from) Features to redirect pages
  - [jekyll-github-metadata](https://github.com/jekyll/github-metadata), Exposes metadata of GitHub

## Branches

- `main`: The default branch.
- `deploy/gh-pages`: The source code that is to be deployed to GitHub Pages.
- `live/gh-pages`: The compiled source code of `deploy/gh-pages` that is live on GitHub Pages.
