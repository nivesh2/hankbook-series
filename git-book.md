# GIT HANDBOOK

**Set/Change remote url:**
- git remote set-url origin <remote repo url>

**Untrack previously tracked files:**
- add the file/folder to .gitignore
- .gitignore only prevents files from being added.
- untrack it individually: 
`git rm --cached <file>`
- untrack it all: `git rm --cached .` then `git add .`
