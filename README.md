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

### Images

There are several helper classes to help lay out images across the site.

* `.img-left` – This will float an image to the left and make it smaller so the text wraps around it.
* `.img-right`– This will float an image to the right and make it smaller so the text wraps around it.
* `.img-lg` – This will make the image wider to fill 120% of the default content container and center it.
* `.img-xl` – This will make the image even wider to fill 160% of the default content container and center it.
* `.no-border` – This will only work on the blog and work posts, and it will remove the default grey border.

To use these classes in markdown, use the following syntax:

```
![Image Alt Text](/path/to/image.jpg){: .class }
```

If you want to use more than one class, simply include it with the first class like this:

```
![Image Alt Text](/path/to/image.jpg){: .class1 .class2}
```

### Staff Bios

The current staff bios are kept in a data file in `_data/staff.yml`. The format of the staff bios is kept in an `include` in `_includes/staff-bio.html`.

#### How to use author bios on the blog

To include an author bio, add `author: First Lastname` to the front matter of the post. It will automatically pull in the bio from `_data/staff.yml` using the markup in `_includes/staff-bio.html`.

### Project Formatting

To add a "View this site" button to the end of a web project post, add `address: example.com` to the front matter of the post. It will automatically generate the button at the end of the post.

#### Animations

#### Buttons