# Newshub for FAForever

This repository contains the source of a proposal for an alternative news hub for [FAForever](https://faforever.com/).

## Technologies

- [Jekyll](https://jekyllrb.com/) ([GitHub Pages](https://pages.github.com/)) Tooling to generate the site
  - [jekyll-feed](https://github.com/jekyll/jekyll-feed), Atom/rss feed
  - [jekyll-redirect-from](https://github.com/jekyll/jekyll-redirect-from) Features to redirect pages
  - [jekyll-github-metadata](https://github.com/jekyll/github-metadata), Exposes metadata of GitHub

> The exact version of the Jekyll packages should align with what GitHub expects. This way what you serve locally is more guaranteed to match with what you'll see on GitHub Pages. See also the [GitHub Pages Versions](https://pages.github.com/versions/) page.

- [Node Package Manager](https://nodejs.org/en/download/package-manager)
- [Workbox](https://fredrickb.com/2019/07/25/turning-jekyll-site-into-a-progressive-web-app/) Tooling to generate information required for a progressive webapp
- [Lighthouse](https://github.com/GoogleChrome/lighthouse): tooling to measure website performance, is integrated in Chrome developer tools
  - [Lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci): wrapper to make it easier to do automated testing on website performance

## Branches

- `main`: The default branch.
- `deploy/gh-pages`: The source code that is to be deployed to GitHub Pages.

## Resources

- [Turning a Jekyll site into a Progressive Web App](https://fredrickb.com/2019/07/25/turning-jekyll-site-into-a-progressive-web-app/)
- [Generating a site map](https://independent-software.com/generating-a-sitemap-xml-with-jekyll-without-a-plugin.html)
- [Simple cookie consent](https://jekyllcodex.org/without-plugin/cookie-consent/)
- [Jank-free page loading with media aspect ratios](https://blog.logrocket.com/jank-free-page-loading-with-media-aspect-ratios/)

### Additional tooling

- [Progressive Web App Builder](https://www.pwabuilder.com/)
- [Web app manifest generator](https://app-manifest.firebaseapp.com/)
- [SVG Icon Font generator](https://icomoon.io/app)
- [Favicon generator](https://realfavicongenerator.net/)
