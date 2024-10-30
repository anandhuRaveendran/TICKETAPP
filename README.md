# TICKETAPP
## requirements
1.Nodejs
2.MongoDB
# STEPS
1.CLone Git repo
```
git clone https://github.com/anandhuRaveendran/TICKETAPP.git
```
```
cd TICKETAPP
```
# Before running the project ,set .ENV file in server folder and set environment variables ( i have provided my secret key for testing)
```
SESSION_SECRET='your code'
GOOGLE_CLIENT_ID='your id'
GOOGLE_CLIENT_SECRET='your secret code'
MONGO_URI='mongodb://localhost:27017/ your db name'
```
# Open terminal and start mongoDB
```
sudo systemctl start mongod
```
2. Open VSC and then
```
cd client
npm i
npm run dev
```
open another terminal in TICKET folder
```
cd server
npm i
node server.js
```
