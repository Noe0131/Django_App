from django.urls import path
from .views import csrf
from .views import Login_view

urlpatterns = [
    path("login/", Login_view, name="login"),
    path("crsf/",csrf)
]