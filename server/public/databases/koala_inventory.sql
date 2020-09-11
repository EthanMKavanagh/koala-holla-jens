Database Name: koala_holla

CREATE TABLE "koala_inventory"(
	"id" SERIAL PRIMARY KEY, 
	"name" VARCHAR(256),
	"gender" VARCHAR(256),
	"age" NUMERIC, 
	"ready_to_transfer" boolean,
	"notes" VARCHAR(500)
	);
	
INSERT INTO "koala_inventory" ("name", "gender", "age", "ready_to_transfer", "notes")
	VALUES 
		('Scotty', 'M', 4, 'T', 'Born in Guatemala'),
		('Jean',  'F', 5, 'T', 'Allergic to lots of lava'),
		('Ororo', 'F', 7, 'F', 'Loves listening to Paula (Abdul)'),
		('Logan', 'M', 15, 'F', 'Loves the sauna'),
		('Charlie', 'M', 9,  'T', 'Favorite band is Nirvana'),
		('Betsy', 'F', 4, 'T',  'Has a pet iguana');    
		  