import { Database } from "https://deno.land/x/aloedb@0.9.0/mod.ts";

// Structure of stored documents
interface Film {
  title: string;
  year: number;
  film: boolean;
  genres: string[];
  authors: { director: string };
}

// Initialization
const db = new Database<Film>({
  path: "./dt/films.json",
  pretty: true,
  autoload: true,
  autosave: true,
  optimize: true,
  immutable: true,
  validator: (document: any) => {},
});

// Insert operations
await db.insertOne({
  title: "Drive",
  year: 2012,
  film: true,
  genres: ["crime", "drama", "noir"],
  authors: { director: "Nicolas Winding Refn" },
});
await db.insertOne({
  title: "Cobra",
  year: 2001,
  film: true,
  genres: ["action", "drama"],
  authors: { director: "Stalone Slay" },
});

// Search operations
const found = await db.findOne({ title: "Drive", film: true });
console.log(found);

// Update operations
await db.updateOne({ title: "Drive" }, { year: 2011 });

// Delete operations
await db.deleteOne({ title: 'Drive' });
