from django.urls import path
from .views import UserLoginView

urlpatterns = [
    # Your other URL patterns
    path('api/auth/login/', UserLoginView.as_view(), name='login'),
]