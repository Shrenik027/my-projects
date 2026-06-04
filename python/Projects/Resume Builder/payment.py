import razorpay
import os

client = razorpay.Client(auth=(os.getenv("RAZORPAY_KEY"), os.getenv("RAZORPAY_SECRET")))

def create_order(amount):
    return client.order.create({
        "amount": amount * 100,  # paise
        "currency": "INR",
        "payment_capture": 1
    })