from django.urls import include, path 
from django.contrib import admin;

from app.views import hello, noe



urlpatterns = [
    path('admin/', admin.site.urls), 
    path('app/', include('app.urls')),
    path('api/', include('api.urls')),
    path('hello/', hello),
    path('noe/', noe),
    path('api/' , include("accounts.urls"))
]
