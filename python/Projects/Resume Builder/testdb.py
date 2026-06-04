import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

print(os.getenv("MONGO_URI"))  # debug

client = MongoClient(os.getenv("MONGO_URI"))

db = client["test"]
collection = db["test_collection"]

collection.insert_one({"test": "working"})

print("✅ MongoDB Connected Successfully")