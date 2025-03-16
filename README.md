download the files from the folder and open the folder in vscode.

you will need to install some tailwind css comeponents in your vscode. open a terminal in vscode and enter the following commands

npm create vite@latest . -- --template react
npm install
npm install tailwindcss @tailwindcss/vite
npm install daisyui@latest
npm install react-icons - save
npm install firebase

after this, connect to firebase by making an account and getting the api key and other components and name them "VITE_FIREBASE_(object in all caps)" in a separate file called ".env"
create a database in firebase and change "if false" to "if true"

enter "npm run dev" in the vscode terminal and go to http://localhost:5173 to see the web app functioning

the web app should be connected to firebase and firebase will be able to correspond to changes made in the site.
