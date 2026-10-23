# Linga Murari — Portfolio

A responsive, recruiter-friendly portfolio built with plain HTML, CSS, and JavaScript. No build step or package installation is required.

## Files

- `index.html` — portfolio content and sections
- `style.css` — responsive styling, project illustrations, and animations
- `script.js` — mobile navigation, reveal animations, project filters, and email-form behavior
- `assets/resume.pdf` — add your own resume PDF here before publishing

## Before publishing

1. Replace `YOUR_EMAIL@example.com` in **both** `index.html` and `script.js` with the email address you want recruiters to use.
2. Add your resume PDF at `assets/resume.pdf`. Keep the filename `resume.pdf`, or update the resume links in `index.html`.
3. Review the LinkedIn URL in `index.html`.
4. Check every project repository link and update links for LLM Guardrails, AI SaaS Chatbot, and Smart Smog if those projects have dedicated repositories.
5. Adjust the skill indicators to reflect your current confidence. They are visual design elements, not standardized scores.
6. Verify project descriptions and metrics against your actual code. No unverified performance metric is presented as a result.

## Run locally

Open `index.html` in your browser, or open this folder in VS Code and use the Live Server extension. The page does not require a build command.

## Publish with GitHub Pages

### Recommended: publish as your user site

1. Create a repository named **`Murari-04.github.io`** under your GitHub account (`Murari-04`).
2. Extract this project ZIP and upload the files and `assets` folder to the **root** of that repository. Make sure `index.html` is at the root, not inside an extra nested folder.
3. Commit the files to the `main` branch.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then save.
7. Wait for the deployment to complete. Your site should be available at `https://murari-04.github.io/`.

### Alternative: use an existing repository

If you want to publish from an existing repository named `portfolio`, go to **Settings → Pages**, choose `main` and `/ (root)`. The URL will normally be `https://murari-04.github.io/portfolio/`. Ensure all assets use relative paths, as they do in this template.

## Contact form behavior

The contact form opens the visitor's default email application with the form contents prefilled. It does not silently send or store data and does not require a server. If you need submissions without an email app, connect a form service or implement a backend later.

## Personalization checklist

- [ ] Add `assets/resume.pdf`
- [ ] Set the contact email in `index.html` and `script.js`
- [ ] Confirm LinkedIn URL
- [ ] Add exact project repository links and live demos
- [ ] Test navigation, filters, and form on mobile and desktop
- [ ] Check keyboard navigation and reduced-motion behavior
