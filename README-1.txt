
# NOTES  : 

# npm - node package manager - allows you to manage your node project and its dependencies

# do npm i again to download the node_modules deleted for now 

# 1.For the package json fie to - npm init -y 

# 2.then for package-lock-json do - 

# 3.npm nodemon --save-dev 
( --save dev for developement dependencies
 and -g for global dependencies and 
 --save production )
#

1. Production Dependencies (dependencies)
Used when your project runs in production (i.e., the real world, where users use your app). These are essential for the app to function.

Examples:

express
mongoose
cors

 You install them with: npm install express

"dependencies": {
  "express": "^4.18.2"  # Stuff you NEED for your app to run.
}

 2. Development Dependencies (devDependencies)
Used only during development—stuff like tools, testing libraries, linters, bundlers. Not needed when the app is live.

Examples:

nodemon (auto-restarts server)
eslint (code linter)
jest (testing)
vite (frontend bundler)

npm install --save-dev nodemon

"devDependencies": {
  "nodemon": "^3.0.1"
}# Helpers and tools while you're coding, not needed by end users.


3. Global Dependencies
Installed on your machine globally, not tied to a specific project.

Use this when you need a CLI tool anywhere on your computer.

Examples:

nodemon globally (npm install -g nodemon)
typescript compiler (tsc)
eslint, create-react-app

npm install -g nodemon

#

# 4.Third-party Modules: 
Installed via npm install - you can add any kind of feature to your app via this way

 # 5.for the node_modules - npm i

 # 6.we can delete the node_modules but too restart the server we need to again install it as npm i 

 # 7.in the script part  we added nodemon as a local dependency to our project.

 #  "start": "nodemon firstapp.js", - npm start it will run firstapp.js file .
    # "start-server": "node firstapp.js"

  # The good thing about local dependencies is that you can share projects without the node_modules folder (where they are stored) and you can run npm install in a project to then re-create that node_modules folder. This allows you to share only your source code, hence reducing the size of the shared project vastly.
  #You could install nodemon globally if you wanted (this is NOT required though - because we can just run it locally): npm install -g nodemon would do the trick. Specifically the -g 