from django.urls import path, re_path 
from django.views.static import serve
from django.conf import settings
from .views import Product_view, merchandise_info

urlpatterns = [
    re_path(r'^media/(?P<path>.*)$',serve, {'document_root': settings.MEDIA_ROOT}),
    path("product_view/", Product_view, name="product_view"),
    path('merchandise_info/', merchandise_info, name="merchandise_info"),
    
]