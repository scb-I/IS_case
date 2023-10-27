from django.urls import path
from . import views


app_name = 'api'  # Это устанавливает пространство имен для приложения

urlpatterns = [
    path('login/', views.loging_user, name='login'),
]
