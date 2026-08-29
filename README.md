# ReturnWise — GitHub Pages Ready

Upload ALL files in this folder to the **root of your GitHub repository**.

Required files:
- index.html
- styles.css
- app.js
- returns.csv
- .nojekyll

## GitHub Pages

1. Open your GitHub repository.
2. Click **Add file → Upload files**.
3. Upload the files above directly into the repository root.
4. Commit the changes to `main`.
5. Go to **Settings → Pages**.
6. Select **Deploy from a branch**.
7. Select `main` and `/ (root)`.
8. Save and wait for deployment.

Do NOT put the website files inside another folder.

The app runs in the browser and does not require Python, FastAPI, localhost, or a database server.

## Dashboard requirements included

- Return risk score
- Customer risk factors
- Product risk factors
- Estimated financial impact
- Recommended action
- Decision evidence
- Return trends
- Prevented-loss estimate

## Demo features

- Dashboard KPIs and charts
- Investigate Return
- Modify customer history
- Modify product defect history
- Re-run autonomous decision
- Approve / Inspect / Exchange / Restrict / Escalate comparison
- Customer + product history table
- Import your own CSV from the dashboard

The model is a transparent synthetic hackathon scoring model and is not intended for production fraud decisions.
