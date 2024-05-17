const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.NEXT_MONGO_URL;
import { mongoClient } from "@/lib/mongo";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  const database = client.db("shop");
  const collection = database.collection("products");

  // const product = await collection.insertOne({
  //   _id: randomUUID(),
  //   name: "Caio Stato",
  //   age: 23,
  // }); work

  // const product = await collection.findOne({
  //   _id: "b60f3bf6-d582-4a2b-a960-fc65ee64adb8",
  // }); work

  return NextResponse.json({});
}
