import { MongoClient, ServerApiVersion } from "mongodb"
 
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.v3xvtgx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  try { 
    const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
isConnected = true;
console.log("✅ MongoDB connected");
     const pdfcollection = client.db(`${process.env.DB_USER}`).collection('qrcode')
    return pdfcollection
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
