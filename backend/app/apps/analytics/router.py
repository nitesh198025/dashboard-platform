from fastapi import APIRouter

router=APIRouter()

@router.get("/summary")
def analytics_summary():
    return {
            "order": 120,
            "inventory_risk": "High",
            "ai_score": 0.87
    }