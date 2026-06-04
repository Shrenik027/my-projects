from pydantic import BaseModel

class ResumeRequest(BaseModel):
    name: str
    email: str
    skills: str
    projects: str
    experience: str
    education: str
    role: str