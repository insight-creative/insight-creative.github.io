# Insight Creative Jekyll Site

This is the repository for the Insight Creative test site. It is automatically transformed into a static site by Jekyll.

## Getting Started

* [Jekyll](http://jekyllrb.com)
* [Try Git](http://try.github.io) – A good beginner tutorial for git.
* [The Book](http://git-scm.com/book) – More in depth and very helpful git information.
* [Markdown Syntax](http://daringfireball.net/projects/markdown/syntax) – The syntax guide for Markdown.

### Directory Structure

Info about how the site is organized here.

## Components

### Blog Images

There are several helper classes to help lay out images in the blog.

* To pull an image left, use `![Alt text](/path/to/image){: .img-left}`
* To pull an image right, use `![Alt text](/path/to/image){: .img-right}`
* To confine an image to the text margins (rather than the default wider margins), use `![Alt text](/path/to/image){: .img-narrow}`
* To make the image larger, use `![Alt text](/path/to/image){: .img-large}`

### Staff Bios

The current staff bios are kept in a data file in `_data/staff.yml`.

#### How to use author bios on the blog

To include an author bio, add `author: First Lastname` to the front matter of the post. It will automatically pull in the bio from `_data/staff.yml` using the markup in `_includes/staff-bio.html`.

### Project Formatting

To add a "View this site" button to the end of a web project post, add `address: example.com` to the front matter of the post. It will automatically generate the button at the end of the post.

#### Animations

#### Buttons