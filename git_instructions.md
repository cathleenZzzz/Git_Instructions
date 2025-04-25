**Instructions for Version Control in GitHub**

**What is version control?**  
When we work on our painting and drawings we sometimes wish we can go back to a previous stage of our work. While that is nearly impossible for physical works, Github can help you do that with your digital work. That is the purpose of version control.   
Version control can help you:

* Track every change you make  
* Go back to an earlier version if something breaks  
* Work with others on the same project without overwriting each other’s work

**What is Github?**  
GitHub is a platform where you can store your work (such as code, documents, images), track changes, collaborate with others, and publish your work for others to see. It works with a tool called Git—a kind of digital time machine for your projects.  
Let’s begin with installing Github. 

**How to install Github?**  
You need two things,

* Git: the version control tool  
* GitHub account: where your work will live online

  ### **First, create a GitHub Account**

1. Go to [github.com](https://github.com)  
2. Click Sign Up  
3. Follow the setup steps.  
   **Second, install Git.** This step varies on the type of computer you are working on. 

   **Mac:**  
1. Open the Terminal of your computer  
2. Type and enter git \--version  
3. If Git is not installed, a pop-up will prompt you to install it.  
4. Install Git.

   **Windows:**

1. Download Git from [git-scm.com](https://git-scm.com/download/win)  
2. Run the installer. Use default settings unless you know what you're doing.  
3. Open Git Bash (installed with Git) to use Git commands

		**Linux:**

1. Open Terminal of your computer  
2. Type and enter sudo apt update and sudo apt install git

Now you are ready for the next steps\!

**How to do the basics in GitHub?**   
There are a few basic things you need to know in order to get started with GitHub

**GitHub Basic Features and Usage**

* Repositories: These are where your projects live. They store all the files, folders, and revisions.  
* Branches:  Branches allow you to work on different parts of a project without affecting     the main version.  
* Commits:Each change you make can be saved as a “commit,” which tracks your progress over time.  
* Pull Requests: A way to propose changes and discuss them with your team before merging them into the main project.

**Creating a Repository**  
The repository will be the central location for your collaboration, sharing, and version control. In order to create one, you can take the following steps:

1. Log into your GitHub account.  
2. Click on the “+” icon in the top right and select “New repository.”  
3. Name your repo, add a description, choose whether it’s public or private.  
4. Click “Create repository.”  
   Now you have a space to store your project, and can create a folder

 **Creating a Folder in Your Repository**

1. Open your repository on GitHub.  
2.  In the file section, click on the “Add file” button.  
3.  Select “Create new file.”  
4.  In the file name box, type the folder name followed by a slash (e.g., “newfolder/”).  
   You can now add files inside this folder directly.

**Uploading Files to Your Repository**

1. Go to your repository on GitHub.  
2. Click on the “Add file” button and select “Upload files.”  
3. Drag and drop the files you want to upload or use the file picker.  
4. Commit the changes with a short message and click “Commit changes.”

 **Writing a “README”**  
A README is a file that explains what your project is about, how to use it, and any other helpful details.

1. In your repo, click on “Add file” and choose “Create new file.”  
2. Name the file README.md, the .md stands for Markdown, which is a formatting language.  
3. Write your project details in plain text. The outline can include the project name, how to Install it, and usage  
4. Save the file by clicking “Commit changes.”

**Hosting a Web Page with GitHub Pages**  
Webpages may be particularly useful for showcasing portfolios or documentation, and offer benefits like easy version control and deployment

1. Go to your repository’s settings.  
2.  Scroll down to the “GitHub Pages” section.  
3. Under “Source,” select the branch you want to use, usually main, and save.  
4. GitHub will provide you with a link to your new webpage.  
   

**How to version control**   
Version control is a key step to track your code and collaborate with others effectively. Here are several steps we could follow.

**Making Commits**  
Commits are simply the snapshots of the codebase at a certain timestamp.It is best practice to make a commit every time when changes are made. Through commit history, you could easily track how your code has been modified.  
Here are the steps of making commits:

- After making changes to some files, run `git add .` in the terminal to stage the changes. You can also run `git add filename` and replace specific filenames with `filename`.  
- Create a commit using `git commit -m "Your message explaining the changes"`. You can write any descriptive commit messages.  
- Push your commit to Github, sync it with your remote repository, using `git push origin main`.

**Working With Branches**

- Commit every time when changes are made  
- Create different branches when creating new features or making major changes  
- If the new changes are not working, we can revert to previous versions using git commands.  
- If different features are implemented on different branches, we can merge the branches to combine the features.

## **Creating and Managing Branches**

Branches allow you to develop features, fix bugs, or safely experiment with new ideas without affecting the main codebase.

* Create a new branch: `git branch branch-name`  
* Switch to that branch: `git checkout branch-name`  
* Or do both at once: `git checkout -b branch-name`  
* List all branches: `git branch`  
* Delete a branch: `git branch -d branch-name`

## **Merging Changes**

When you're ready to bring your changes from one branch into another:

* Switch to the receiving branch: `git checkout main`  
* Merge your changes: `git merge branch-name`  
* Handle any merge conflicts if they arise  
* Push the merged changes: `git push origin main`

## **Pull Requests**

Pull requests (PRs) are a way to propose changes and collaborate with others:

1. Push your branch to GitHub: `git push origin branch-name`  
2. Go to your repository on [GitHub](https://github.com/)  
3. Click "Compare & pull request"  
4. Add a title and description explaining your changes  
5. Click "Create pull request"  
6. Your team members can review, comment, and approve the changes

## **Handling Conflicts**

Sometimes, when multiple people edit the same file, Git can't automatically resolve differences:

1. Git will mark conflicted sections in your files  
2. Open these files and look for `<<<<<<<`, `=======`, and `>>>>>>>` markers  
3. Edit the file to keep the changes you want  
4. Stage the resolved files: `git add filename`  
5. Complete the merge: `git commit`

## **Useful Git Commands**

* Check repository status: `git status`  
* View commit history: `git log`  
* Discard local changes: `git checkout -- filename`  
* Fetch latest changes without merging: `git fetch`  
* Pull latest changes and merge them: `git pull`  
* Create a tag for releases: `git tag v1.0.0`

## **Best Practices**

* Write clear, descriptive commit messages  
* Commit early and often  
* Create a branch for each new feature or bug fix  
* Keep branches updated with the main branch  
* Review code before merging  
* Use a [.gitignore file](https://git-scm.com/docs/gitignore) to exclude files that shouldn't be tracked

## **Git Resources**

* [Git Documentation](https://git-scm.com/doc)  
* [GitHub Guides](https://guides.github.com/)  
* [Interactive Git Tutorial](https://learngitbranching.js.org/)  
* [GitHub Desktop](https://desktop.github.com/) (GUI alternative for beginners)  
* [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

By following these practices, you'll be able to track changes to your project, collaborate effectively with others, and maintain a clean, organized codebase.

**Example Project**  
Let’s try this with an example project.

### **Step 1: Download the Starter Code**

Here’s a zip file of a simple p5.js sketch. Download it to your computer.  
[https://drive.google.com/file/d/1fLdX2koOmXWpN-98rRNIXBsgv\_m5kpF2/view?usp=sharing](https://drive.google.com/file/d/1fLdX2koOmXWpN-98rRNIXBsgv_m5kpF2/view?usp=sharing)

### **Step 2: Follow the Instructions to Install Git and Create an Account**

**Step 3: Make a Repository**

* Go to [https://github.com](https://github.com)  
* Click "+", choose “New repository”  
* Repository name: `example-project`  
* Public or Private (your choice)  
* Add a README (check the box)  
* Click Create Repository


**Step 4: Clone the Repository to Your Computer**

### In your terminal, navigate to where you want your project to be stored:

	`cd [replace with location, e.g., Documents]`

### Then clone the git repository:

	`git clone https://github.com/YOUR_USERNAME/example-project.git`  
You should see a new folder `example-project` created.   
Navigate to the repository:  
`cd example-project`

**Step 5: Add Files to Your Project**  
	Unzip the downloaded file `example-project-starter.zip`  
	Move all files in the folder to the `example-project` folder from GitHub  
	To commit the changes, type the following commands in the terminal:  
`git add .`  
`git commit -m "Add initial example project files"`  
`git push origin main`

**Step 6: Create a New Branch**  
Type:  
`git checkout -b random-circle-color`  
This creates a new branch called `random-circle-color` and switches you to that branch.   
Open the file `sketch.js` and make the following changes:

* In `document.addEventListener('mousemove', function(event)`, add:

  `circle.style.backgroundColor = getRandomColor();`

* Before `const style = document.createElement('style');`, add:

  `function getRandomColor() {`

      `const colors = ['#4caf50', '#2196f3', '#ff5722', '#9c27b0', '#ffeb3b'];`

      `return colors[Math.floor(Math.random() * colors.length)];`

  `}`

	The full code should now look like:  
		`document.addEventListener('mousemove', function(event) {`  
    `const circle = document.createElement('div');`  
    `circle.className = 'circle';`  
    ``circle.style.left = `${event.pageX - 10}px`;``  
    ``circle.style.top = `${event.pageY - 10}px`;``  
    `circle.style.backgroundColor = getRandomColor();`  
    `document.body.appendChild(circle);`

    `setTimeout(() => {`  
        `circle.remove();`  
    `}, 1000);`  
`});`

`function getRandomColor() {`  
    `const colors = ['#4caf50', '#2196f3', '#ff5722', '#9c27b0', '#ffeb3b'];`  
    `return colors[Math.floor(Math.random() * colors.length)];`  
`}`

`const style = document.createElement('style');`  
`` style.innerHTML = ` ``  
    `.circle {`  
        `position: absolute;`  
        `width: 20px;`  
        `height: 20px;`  
        `border-radius: 50%;`  
        `pointer-events: none;`  
        `opacity: 0.6;`  
    `}`  
`` `; ``  
`document.head.appendChild(style);`  
	Now, in your terminal, run:  
	`git add sketch.js`  
`git commit -m "Add random color functionality to circles"`  
`git push origin random-circle-color`  
Your changes are now staged in the branch and uploaded to GitHub with a description of the change. 

**Step 6: Make a Pull Request**  
You can now make a pull request from the Github website. If you are working in a collaborative project, a pull request simply asks for your changes to be reviewed or merged into the main project.  
To do this:

* Go to your repository on GitHub. You will see a yellow banner suggesting a new branch was pushed.   
* Click "Compare & pull request".  
* Give your pull request a clear title, like "Added random colors for circles".  
* Write a short message explaining what you did. For example: "This change updates the circle animation so that each circle has a random color. Added a helper function to choose colors."  
* Click "Create Pull Request".


**Step 6: Merge a Branch into Main**  
Once your pull request has been reviewed (or if you're working solo), you can merge it into the main branch.  
There are two options for how to merge your branch.  
Option A via GitHub website:  
On GitHub:

* Click "Merge pull request"  
  * Click "Confirm merge"

		In your terminal, update your local main branch:  
		`git checkout main`  
`git pull origin main`  
Option B via terminal:  
	`git checkout main`  
`git pull origin main`  
`git merge random-circle-color`  
`git push origin main`

		

