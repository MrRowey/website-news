---
layout: page
title: Appendix - use of images
permalink: /about/appendix-images

image:
    path: assets/images/2025/tournament-event-01-2024.png
    alt: A siege of Cybran amphibious units against a Seraphim base.
---

Images spark the imagination. But they can also be a source of frustration. With this article we streamline how we work with images and what the specifications for images are. Unlike a choice of words, these specifications are not up to debate. 

# Content requirements

List of technical requirements:

- 1) All images are in `src/assets/images` or in a subfolder of `src/assets/images`.
- 2) All images have a resolution of 960x540.
- 3) All images have the PNG encoding to ensure lossless quality with a reasonable file size.
- 4) All images should either be copyright-free or be licensed in such a way that we can (re)distribute them.
  
These requirements exist because of various post-processing steps. We use the [Jekyll filters to transcode images](https://github.com/Garanas/jekyll-transcode-image-filters) to make them [responsive](https://developer.mozilla.org/en-US/docs/Web/HTML/Responsive_images#active_learning_implementing_your_own_responsive_images) and prevent [Cumulative layout shifts](https://web.dev/articles/optimize-cls?utm_source=lighthouse&utm_medium=devtools#images_without_dimensions). Through these post-processing steps we create a better user experience when users load in the news website.

# Content guidelines

List of content guidelines:

- 1) The image should be related to Supreme Commander: Forged Alliance Forever in some fashion.
- 2) The image should follow the [official rules](https://faforever.com/rules), in particular the content guidelines section.
- 3) The image should have as little embedded text as possible.
- 4) The alternative text of the image should be relatively accurate of its content. 

These guidelines improve the accessibility of the website. As an example, embedded text can't be read by screen readers.
  
# References

- [Responsive images](https://developer.mozilla.org/en-US/docs/Web/HTML/Responsive_images#active_learning_implementing_your_own_responsive_images)
- [Jank-free page loading](https://blog.logrocket.com/jank-free-page-loading-with-media-aspect-ratios/)
- [Optimize Cumulative Layout Shift](https://web.dev/articles/optimize-cls?utm_source=lighthouse&utm_medium=devtools#images_without_dimensions)

## Jekyll plugins

- [jekyll-transcode-image-filters](https://github.com/Garanas/jekyll-transcode-image-filters)

## HTML

- [img tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
- [source tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)
- [picture tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
