1. db.bios.find({"awards": {$exists: 1}});
2. db.bios.find({"awards": {$exists: 0}});
3. db.bios.find({$or: [{"contribs": "OOP"}, {"contribs": "UNIX"}]});
4. db.bios.find({"awards" :{$elemMatch:{"award" : "Turing Award"}}});
5. db.bios.find({"_id": {$gt:3, $lt:7}});
6. db.bios.find({"awards" :{$elemMatch:{"year" : {$lt:2000}}}});
7. db.bios.find({"birth": {$exists:1}, "death": {$exists:0}}); 
