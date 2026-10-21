# Vasileios Michos — personal website

Academic website built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme, hosted on GitHub Pages.

## Publishing

1. Create a new **public** repository on GitHub named `<your-username>.github.io`.
2. In `_config.yml`, set `url: https://<your-username>.github.io` (leave `baseurl:` empty).
3. Push the contents of this folder to the `main` branch.
4. In the repository, go to **Settings → Actions → General → Workflow permissions**, choose **Read and write permissions**, and save.
5. Open the **Actions** tab and wait for the "Deploy site" workflow to finish (a few minutes). It builds the site and pushes it to a `gh-pages` branch.
6. Go to **Settings → Pages**, set **Source** to "Deploy from a branch", pick **`gh-pages`** / `(root)`, and save.

The site will be live at `https://<your-username>.github.io` a minute or two later. Every later push to `main` rebuilds it automatically.

## Where things live

| What                       | File                                                                 |
| -------------------------- | -------------------------------------------------------------------- |
| Name, site description     | `_config.yml`                                                        |
| Bio, subtitle, email line  | `_pages/about.md`                                                    |
| Profile photo              | `assets/img/prof_pic.jpg` (square works best)                        |
| News items on the homepage | `_news/` (one short file per item)                                   |
| Papers                     | `_bibliography/papers.bib` (`selected = {true}` puts it on the homepage) |
| Talks and posters          | `_bibliography/talks.bib`                                            |
| Research page              | `_pages/research.md`                                                 |
| Music in DM page           | `_pages/music.md`                                                    |
| CV link                    | `_pages/cv.md` and `cv_pdf` in `_data/socials.yml`                   |
| Social icons               | `_data/socials.yml`                                                  |
| Co-author links in papers  | `_data/coauthors.yml`                                                |

The theme's own documentation is in `CUSTOMIZE.md`, `INSTALL.md` and `TROUBLESHOOTING.md`.

## Previewing locally (optional)

With Docker installed: `docker compose pull && docker compose up`, then open <http://localhost:8080>.
