from django.urls import path
from .views import login_view,  Register_view, user_info


urlpatterns = [
    path("register/", Register_view, name="register"),
    path("login/", login_view, name="login_view"),
    path("user_info/", user_info, name="user_info"),
]