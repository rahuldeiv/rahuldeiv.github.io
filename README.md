# rahuldeiv.com

Personal website for `rahuldeiv.com`, hosted with GitHub Pages. A static, responsive page with a warm editorial design. No build step or third-party dependencies.

## Edit and preview

- `index.html` contains the page content. Content is derived from the supplied CV: biography, news, publication, projects, education, experience, certifications, skills, and contact. Update ongoing roles, GPA, and publication status here as they change.
- `styles.css` contains the layout and palette, with color variables at the top.
- `layout.js` fits the desktop composition to a 1440 × 900 reference using both viewport dimensions and measures navigation heights. Desktop screens keep the two-column hero; screens up to 700px use the mobile layout.
- Keep `CNAME` intact to preserve the custom domain.

Open `index.html` directly, or run `python3 -m http.server 8000` here and visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a GitHub repository and add these files to its root.
2. Open **Settings → Pages** in the repository.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then save.
5. Under **Custom domain**, enter `rahuldeiv.com`.
6. Configure the domain's DNS records as shown by GitHub, then enable **Enforce HTTPS** after DNS verification succeeds.
