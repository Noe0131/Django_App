# app/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.api_hello, name='api_hello'),
]
