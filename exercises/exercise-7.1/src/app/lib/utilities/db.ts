'use client';

import { openDB, IDBPDatabase } from 'idb';
import { Book } from '@/app/lib/models/book';

const storeKey = process.env.NEXT_PUBLIC_STORE_KEY || 'storeKey';
const schemaKey = process.env.NEXT_PUBLIC_SCHEMA_KEY || 'schemaKey';

interface DatabaseSchema {
    favorites: { id: string, value: Book };
}

async function getDb(): Promise<IDBPDatabase<DatabaseSchema> | undefined> {
    if (!('indexedDB' in window)) {
        console.log('This browser does not support IndexedDB');
        return undefined;
    }
    return await openDB<DatabaseSchema>(schemaKey, 1, {
        upgrade(upgradeDb) {
            upgradeDb.createObjectStore(storeKey, {
                keyPath: 'id'
            });
        },
    });
}

export async function getData(storeName: keyof DatabaseSchema): Promise<Book[] | undefined> {
    const db = await getDb();
    if (db) {
        const tx = db.transaction(storeName, 'readonly');
        const table = tx.objectStore(storeName);
        const result = await table.getAll() as Book[];
        return result.length > 0 ? result : undefined;
    }
    return undefined;
}

export async function updateData(storeName: keyof DatabaseSchema, item: Book, add: boolean): Promise<void> {
    const db = await getDb();
    if (db) {
        const tx = db.transaction(storeName, 'readwrite');
        const table = tx.objectStore(storeName);
        try {
            add ? await table.add(item) :  await table.delete(item.id);
            await tx.done;
        } catch (e) {
            tx.abort();
            console.log(e);
        }
    }
}





