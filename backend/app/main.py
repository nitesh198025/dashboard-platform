from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.apps.analytics.router import router as analytics_router

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://dashboard-platform-1.onrender.com",  # frontend
        "http://localhost:5173",                      # local dev
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root health check
@app.get("/")
def root():
    return {"status": "ok"}

# ✅ IMPORTANT: mount analytics router
app.include_router(
    analytics_router,
    prefix="/analytics",
    tags=["Analytics"]
)
