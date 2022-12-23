import { openDB } from "idb";

export async function createDB(dbName: string, storeName: string) {
  const db = await openDB(dbName, 1, {
    upgrade(db) {
      db.createObjectStore(storeName);
    },
  });
  return db;
}
export async function addData(
  dbName: string,
  storeName: string,
  value: any,
  key: string
) {
  const db = await openDB(dbName, 1, {
    upgrade(db) {
      db.createObjectStore(storeName);
    },
  });
  const tx = await db.transaction(storeName, "readwrite");
  const store = tx.objectStore(storeName);
  store.add(value, key);
  await tx.done;
}

export async function updateData(
  dbName: string,
  storeName: string,
  value: any,
  key: string
) {
  const db = await openDB(dbName, 1);
  const tx = await db.transaction(storeName, "readwrite");
  const store = tx.objectStore(storeName);
  store.put(value, key);
  await tx.done;
}

export async function deleteData(
  dbName: string,
  storeName: string,
  key: string
) {
  const db = await openDB(dbName, 1);
  const tx = await db
    .transaction(storeName, "readwrite")
    .objectStore(storeName)
    .delete(key);
  return tx;
}
