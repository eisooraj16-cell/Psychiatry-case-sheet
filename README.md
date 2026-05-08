# Psychiatry Case Sheet — Deployment Guide

## What This Is
A Progressive Web App (PWA) that combines:
- **14 Chapters** of the Adult Psychiatry History-Taking Compendium (demographics, HOPI, MSE, diagnosis, management, etc.)
- **Dimensional Formulation** module (Reading the Patient — HiTOP, 8-domain MSE)

Works fully offline after first open. No server required. No data leaves your device.

---

## Step 1: Create a GitHub Account

1. Go to https://github.com
2. Click "Sign up" (top-right corner)
3. Enter your email, create a password, choose a username
4. Verify your email (check inbox for GitHub verification email)
5. Choose the free plan when asked

---

## Step 2: Create a New Repository

1. Log into GitHub
2. Click the green **"New"** button (top-left, or go to https://github.com/new)
3. Repository name: `psychiatry-case-sheet` (or any name you like)
4. Make it **Public**
5. Check the box: **"Add a README file"**
6. Click **"Create repository"**

---

## Step 3: Upload the Files

### Method A: Drag & Drop (Easiest)

1. Download the app folder as a ZIP from wherever you received it
2. Extract the ZIP on your computer
3. Open your GitHub repository in your browser
4. Click **"Add file"** dropdown → select **"Upload files"**
5. Drag ALL files from the extracted folder into the upload area:
   - `index.html`
   - `ch01.html` through `ch14.html`
   - `dim15.html`
   - `sw.js`
   - `manifest.json`
6. Scroll down, add a commit message: `Initial upload`
7. Click **"Commit changes"**

### Method B: Git Command Line

```bash
cd psychiatry-app
git init
git add .
git commit -m "Initial upload"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/psychiatry-case-sheet.git
git push -u origin main
```

---

## Step 4: Enable GitHub Pages

1. In your GitHub repository, click **"Settings"** tab (top of page)
2. In the left sidebar, click **"Pages"** (under "Code and automation")
3. Under "Source", select: **"Deploy from a branch"**
4. Under "Branch", select: **"main"** and folder: **"/ (root)"**
5. Click **"Save"**
6. Wait 1-2 minutes
7. Your live URL will appear at the top (green box):
   ```
   https://YOUR_USERNAME.github.io/psychiatry-case-sheet/
   ```

---

## Step 5: Open on Your Phone (Install as App)

### Android (Chrome):
1. Open the live URL in Chrome
2. Tap the **3-dot menu** → **"Add to Home screen"**
3. Name it "PsychCase" → Tap **"Add"**
4. The app icon appears on your home screen — opens like a native app

### iPhone (Safari):
1. Open the live URL in Safari
2. Tap the **Share button** (square with arrow)
3. Scroll down → tap **"Add to Home Screen"**
4. Name it "PsychCase" → Tap **"Add"**

---

## How to Use

1. **Open the app** — it loads instantly (offline after first visit)
2. **Tap "New Case"** — start a fresh case
3. **Tap any chapter card** — opens that chapter full-screen
4. **Fill the form** — all your data stays in memory
5. **Tap "Back"** — returns to chapter grid
6. **Tap "Sections"** — jump to any section within the chapter
7. **Tap "Save JSON"** — downloads the complete case as a `.json` file to your device
8. **Tap "Load"** — pick a previously saved `.json` file to resume
9. **Tap "Print Case"** — generates a printable summary of all chapters

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Escape` | Close chapter / Close section navigator |
| `Ctrl+S` | Save case as JSON |

---

## Data Privacy

- **No data is ever sent to any server.**
- All case data stays in your device's memory.
- When you save, a JSON file is downloaded to your device — that's your "database."
- When you close the browser tab, the case is gone from memory (load it back from the JSON file).
- No localStorage, no cookies, no cloud sync.

---

## Updating the App

To update with new versions:
1. Delete the old files from your GitHub repository
2. Upload the new files (same process as Step 3)
3. GitHub Pages updates automatically within 1-2 minutes
4. On your phone: uninstall the old home screen icon, re-add from the updated URL
