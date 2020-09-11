CREATE TABLE "koala_inventory"(
	"id" SERIAL PRIMARY KEY, 
	"name" VARCHAR(256),
	"gender" VARCHAR(256),
	"age" NUMERIC, 
	"ready_to_transfer" VARCHAR(10),
	"notes" VARCHAR(500)
	);
	
INSERT INTO "koala_inventory" ("name", "gender", "age", "ready_to_transfer", "notes")
	VALUES 
		('Scotty', 'M', 4, 'Y', 'Born in Guatemala'),
		('Jean',  'F', 5, 'Y', 'Allergic to lots of lava'),
		('Ororo', 'F', 7, 'N', 'Loves listening to Paula (Abdul)'),
		('Logan', 'M', 15, 'N', 'Loves the sauna'),
		('Charlie', 'M', 9,  'Y', 'Favorite band is Nirvana'),
		('Betsy', 'F', 4, 'Y',  'Has a pet iguana');    