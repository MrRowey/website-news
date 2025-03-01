---
layout: page
title: How to add a news item
permalink: /about/02-add-a-news-item

image:
  path: assets/images/2025/tournament-event-01-2024.png
  alt: A siege of Cybran amphibious units against a Seraphim base.
---

In this article you'll learn everything you need to create a news item. We'll discuss how to configure a news item.

We assume that you have followed the [setup guide](/about/01-setup) and that as a result of that you have a working development environment on your device. We also assume that you use [Visual Studio Code]() as your editor. If you're unfamiliar with the editor then you can read up more about it in the appendix:

- [Appendix - Introduction to Visual Studio Code](/about/appendix-vsc)

# Autonomy of a news item

A news item is just a post. And a post is just a file. The file is composed of [front matter](https://jekyllrb.com/docs/front-matter/) at the top. The content of the news item is structured through [Markdown](https://www.markdownguide.org/).

## File of a news item

You can find all existing news items in the `_posts` folder. They are ordered by year for convenience. The name of the file is relevant. It is formatted as such:

- `YYYY-MM-DD-some-name.md`
- ` DATE       NAME   `

The first section represents a date. This is the publish date of the news item. If the publish date is in the future then the news item won't show up when you build the website. Then there's a name. The name has no other purpose then to distinct one news item from another news item. And last there's the extension. All news items are written in Markdown. Markdown is a simple markup language to help structure a text with headers, tables, lists, paragraphs and common text formatting options such as emphasis, italics, bold and block quotes. There's an [overview of the syntax](https://www.markdownguide.org/basic-syntax/) if you're unfamiliar with Markdown.

## Configuration of a news item

News items can be configured through the Front Matter. The syntax of Front Matter is [Yaml](https://codebeautify.org/yaml-cheat-sheet). It is a human readable language for configuration files. You don't need to know all of it. We primarily use the `key:value`. Note that white spacing matters.

The Front Matter is always found at the top of a file. It starts and ends with `---`. Everything in between is configuration. For this news website we support the following fields that can be configured. The use of `#` indicates a comment, meaning it can help you with understanding the `key:value` pair.

```yaml
---
layout: post # values: post
title: Summer tourney 2024 #
date: 2025-01-12 12:00:00 +0100 # format: YYYY-MM-DD HH:mm:ss +0100
categories: tournament # values: tournament / development / guide / community
type: regular # values: regular / featured
priority: 600 # priority in the news hub

redirectURL: https://forum.faforever.com/category/1/announcements # URL that the news item points to

image:
  path: assets/images/2025/uef-base.png # path to thumbnail
  alt: A UEF base right before a strategic missile explodes. # description of the thumbnail

event: # only applies to news items with a date, like a meeting or a tournament
  dtstart: 2025-01-12 09:00:00 +0100 # format: YYYY-MM-DD HH:mm:ss +0100
  dtend: 2025-01-12 16:00:00 +0100 # format: YYYY-MM-DD HH:mm:ss +0100
---
```

The image field is a YAML object. The indenting shows that it has a `path` and an `alt` field. The `alt` field is an alternative description of the image. This is important for accessibility reasons. The path field is the relative path that starts from the `src` folder. All images should be in the `assets/images` folder, or a subfolder in `assets/images`. If you're unfamiliar about how images work in this repository then you can read up more about it in the appendix:

- [Appendix - about images](/about/appendix-images)

## Content of a news item

The content is relatively straight forward. As an example:

```markdown
Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris curabitur nullam penatibus in torquent, amet feugiat mattis sapien! Eu eros praesent ad interdum est nisi fringilla tristique. Molestie dapibus laoreet ridiculus erat cubilia imperdiet. Ex neque maximus; sapien mus varius natoque. Vitae integer montes sagittis condimentum augue aptent. Nascetur ligula praesent mus himenaeos laoreet nisi quis laoreet. Vehicula sed consectetur accumsan taciti feugiat eros vulputate varius tincidunt.

<!-- excerpt-end -->

Primis ac sociosqu aenean leo odio tincidunt ultricies. Sapien nostra leo nunc sapien parturient id ullamcorper. Montes taciti habitasse consequat magnis sed turpis sodales. Praesent velit ullamcorper nisi ullamcorper; cras lobortis non. Vivamus sagittis dui netus amet nibh iaculis pulvinar. Tempor nulla lobortis consectetur potenti dictum consectetur et gravida. Rutrum sed sed elit sollicitudin blandit aliquet consequat. Faucibus accumsan sollicitudin ultricies accumsan pretium odio. Rhoncus molestie metus tristique habitasse id. Sapien sodales imperdiet platea; ac neque libero.

(...) 
```

The excerpt tag is important. All the content above the excerpt tag will is considered an introduction. The introduction is used in various places. As an example, the preview texts on the news website use the introduction. Another example is the description on [Twitter cards](https://developer.x.com/en/docs/x-for-websites/cards/overview/abouts-cards). 

# In the development environment

With all of that said you have all the information you need to create a news item. If your development environment is running then you should be able to view the news items that you create in the main page. Remember that you can see the website in the browser by navigating to `127.0.0.1:4000`. 

# Share the news item to GitHub

