import * as SQLite from 'expo-sqlite';
import { ICollection } from '@/types';
async function initializeDatabase() {
  const database = await SQLite.openDatabaseAsync('wordsCollections.db', {
    useNewConnection: true
  });

  return database;
}


export async function setupDatabase() {
  const db = await initializeDatabase();
  try {
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS collections (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          languages TEXT NOT NULL,
          words TEXT NOT NULL,
          words_count INTEGER NOT NULL,
          best_result INTEGER NOT NULL,
          collection_level TEXT NOT NULL
        );
      `);
  } catch (error) {
    console.log('Error creating table:', error);
  } finally {
    await db.closeAsync();
  }

}


export async function addCollection(collection: ICollection) {
  const db = await initializeDatabase();

  const { name, languages, words, words_count, best_result, collection_level } = collection;

  try {
    await db.execAsync(`
        INSERT INTO collections (name, languages, words, words_count, best_result, collection_level)
        VALUES ('${name}', '${languages}', '${words}', ${words_count}, ${best_result}, '${collection_level}');
    `);
  } catch (error) {
    console.log('Error adding collection:', error);
  } finally {
    await db.closeAsync();
  }
}


export async function getCollections() {
  const db = await initializeDatabase();

  try {
    const result = await db.getAllAsync('SELECT * FROM collections');
    return result;
  } catch (error) {
    console.log('Error getting collections:', error);

  } finally {
    await db.closeAsync();
  }


}

export async function updateCollection(collection: ICollection) {
  const db = await initializeDatabase();
  const { id, name, languages, words, words_count, best_result, collection_level } = collection;
  try {
    await db.runAsync(`
        UPDATE collections
        SET name = ?, languages = ?, words = ?, words_count = ?, best_result = ?, collection_level = ?
        WHERE id = ?;
      `, [name, languages, words, words_count, best_result, collection_level, id]);
  } catch (error) {
    console.log('Error updating collection:', error);
  } finally {
    await db.closeAsync();
  }
}

export async function deleteCollection(id: number) {
  const db = await initializeDatabase();
  try {
    await db.runAsync('DELETE FROM collections WHERE id = ?', [id]);
  } catch (error) {
    console.log('Error deleting collection:', error);
  } finally {
    await db.closeAsync();
  }
}


export async function updateBestResult(id: number, newBestResult: number) {
  const db = await initializeDatabase();
  try {
    await db.runAsync(`
        UPDATE collections
        SET best_result = ?
        WHERE id = ? AND best_result < ?;
      `, [newBestResult, id, newBestResult]);
  } catch (error) {
    console.log('Error updating best result:', error);
  } finally {
    await db.closeAsync();
  }
}
