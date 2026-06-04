from fastapi import FastAPI
from models import ResumeRequest
from db import collection
from payment import create_order
from ai import generate_resume
from pdf import create_pdf

app = FastAPI()

@app.post("/create-order")
def create_resume(data: ResumeRequest):
    user = data.dict()
    user["status"] = "pending"

    result = collection.insert_one(user)

    order = create_order(99)

    return {
        "order_id": order["id"],
        "user_id": str(result.inserted_id)
    }