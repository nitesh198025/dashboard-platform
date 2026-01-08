from fastapi import FastAPI
from app.apps.analytics.router import router as analytics_router

app = FastAPI(title="Dashboard Backend")

app.include_router(analytics_router, prefix="/analytics")

@app.get("/")
def root():
    return{"status": "Backend running"}