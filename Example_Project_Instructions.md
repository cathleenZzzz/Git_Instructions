## Example Project

### Step 1: Download the Starter Code

[Download Starter Files](https://drive.google.com/file/d/1fLdX2koOmXWpN-98rRNIXBsgv_m5kpF2/view?usp=sharing)

### Step 2: Setup GitHub Repository

```bash
git clone https://github.com/YOUR_USERNAME/example-project.git
cd example-project
```

### Step 3: Add Files

- Unzip the starter files
- Move them into your cloned `example-project`
- Then:
```bash
git add .
git commit -m "Add initial example project files"
git push origin main
```

### Step 4: Create a New Branch

```bash
git checkout -b random-circle-color
```

Modify `sketch.js`:

Add inside the mousemove event:
```javascript
circle.style.backgroundColor = getRandomColor();
```

Add the function:
```javascript
function getRandomColor() {
    const colors = ['#4caf50', '#2196f3', '#ff5722', '#9c27b0', '#ffeb3b'];
    return colors[Math.floor(Math.random() * colors.length)];
}
```

Commit and push:
```bash
git add sketch.js
git commit -m "Add random color functionality to circles"
git push origin random-circle-color
```

### Step 5: Make a Pull Request

- Go to GitHub
- Click "Compare & pull request"
- Write a title and message
- Click "Create pull request"

### Step 6: Merge the Changes

**Option A (GitHub):**
- Click "Merge pull request"
- Confirm
- Then locally run:
```bash
git checkout main
git pull origin main
```

**Option B (Terminal):**
```bash
git checkout main
git pull origin main
git merge random-circle-color
git push origin main
```