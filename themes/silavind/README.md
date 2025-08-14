# Silavind

A minimalist single-page Hugo theme...

**// If you like it. Give me a star, plz. ⭐️**

## Usage

Before start, make sure [Git](https://git-scm.com/) and [Hugo](https://gohugo.io/) are installed.

Create and enter `Website` folder and run the `git init` command:

```bash
git init
```

### Add and Update Theme

Add theme by git submodule:

```bash
git submodule init
git submodule add https://github.com/ertzizart/silavind themes/silavind
```

And updated Theme:

```bash
git submodule update --remote --merge
```

### Content Management

Add a new common article:

```bash
hugo new content writings/20xx-xx-xx-Titile.md
```

Or easily manage images:

```bash
hugo new content writings/20xx-xx-xx-Titile/index.md
cp ~/images/cover.webp content/writings/20xx-xx-xx-Titile/cover.webp
```

## Deployments

[Github Actions Workflow](https://github.com/ertzizart/silavind/blob/pages/.github/workflows/gh-pages.yml)

If you have a domain, add `CNAME` and configure the domain dns settings.

```bash
echo "yourdomain.com" >> CNAME
```

Push to git platforms like Github.

```bash
git add .
git commit -m "first commit"
git branch -M trunk
git remote add origin https://github.com/your-name/repo-name.git
git push -u origin trunk
```

## Copyright

Licensed under [The GNU General Public License v3.0](https://github.com/ertzizart/silavind/blob/trunk/LICENSE)