---
layout: page
title: Appendix - use of images
permalink: /about/appendix-about-images

image:
    path: assets/images/2025/tournament-event-01-2024.png
    alt: A siege of Cybran amphibious units against a Seraphim base.
---

# Introduction

In the digital battlefield, images serve as tactical assets, reinforcing news content with visuals that immerse the reader in the Supreme Commander universe. As part of this operation, all images must adhere to strict specifications to ensure consistency, accessibility, and thematic integrity.

# Requirements

## Technical Requirements

- Resolution: 960x540 pixels (16:9 aspect ratio for optimal display).
- Encoding: PNG format for lossless quality.
- Storage Location: Place all images in `src/assets/images/<year>/<image-name>.png`, ensuring proper organization by year.
- Responsive Optimization: The framework automatically generates responsive versions, so no manual resizing is necessary.

## Content Guidelines

- No Embedded Text: Text within the image is not readable by screen readers. Any necessary text should be introduced via HTML and front matter.
- Thematic Relevance: Every image must feature a Supreme Commander-related subject, such as units, maps, or other elements from the universe.
- Visual Integrity: Avoid compression artifacts or low-quality renders that compromise the visual experience.

## Legal Considerations

- Copyright-Free: Only images with no copyright restrictions are permitted.
- AI-Generated Images: Allowed, provided they align with thematic relevance and quality expectations.
  
## Technical references

> You do not need to read this section to understand how images work. This section exists for developers to lookup and understand the rationale of the current setup.

Just like posts have different requirements, so do users. To save bandwidth, users that navigate to the website via a phone may want thumbnails with a lower resolution. At the same time, a desktop user may want the full and intended experience. In the background we downscale the images 

- [Responsive images](https://developer.mozilla.org/en-US/docs/Web/HTML/Responsive_images#active_learning_implementing_your_own_responsive_images)
- [Jank-free page loading](https://blog.logrocket.com/jank-free-page-loading-with-media-aspect-ratios/)
- [Optimize Cumulative Layout Shift](https://web.dev/articles/optimize-cls?utm_source=lighthouse&utm_medium=devtools#images_without_dimensions)

### Jekyll plugins

- [jekyll-resize](https://github.com/MichaelCurrin/jekyll-resize)

### HTML

- [img tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
- [source tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)
- [picture tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
