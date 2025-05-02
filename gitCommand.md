#!/bin/bash

1. Initialize Git (if not already initialized)
2. Add all files to staging

```sh
$ git init
$ git add .
```




3. Commit changes with a message
```sh
$ git commit -m "Initial commit"
```

4. Set the remote repository (change the URL if needed)
```sh
$ git remote add origin https://github.com/alrayhan587/University-Portal.git
```

5. Rename branch to 'main' (if not already 'main')
```sh
$ git branch -M main
```

6. Push code to the remote repository
```sh
$ git push -u origin main
```
