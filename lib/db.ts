import { db } from './db';

async function testDatabaseConnection() {
  try {
    await db.$connect();
    console.log('Database connection successful!');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    console.error('Error details:', error);
  } finally {
    await db.$disconnect();
  }
}

testDatabaseConnection();