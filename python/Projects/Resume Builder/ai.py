import requests

def generate_resume(data):
    prompt = f"""
    Return JSON only.

    Create ATS optimized resume.

    Name: {data['name']}
    Skills: {data['skills']}
    Projects: {data['projects']}
    Experience: {data['experience']}
    Education: {data['education']}
    Role: {data['role']}
    """

    res = requests.post(
        "https://api-inference.huggingface.co/models/google/flan-t5-large",
        json={"inputs": prompt}
    )

    return res.json()