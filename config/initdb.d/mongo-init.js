db = db.getSiblingDB('admin');
// move to the admin db - always created in Mongo
db.auth("root", "root");
// log as root admin if you decided to authenticate in your docker-compose file...
db = db.getSiblingDB('deploy');
// create and move to your new database
db.createUser({
    user: "root",
    pwd: "tianshicong",
    roles: [
        { role: "readWrite", db: "deploy", }
    ],
});