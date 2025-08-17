from django.http import JsonResponse
from rest_framework.permissions import AllowAny
from django.shortcuts import render
from .models import Product
from rest_framework.decorators import api_view, permission_classes
# Create your views here.

#投稿画面
@api_view(['POST'])
@permission_classes([AllowAny])
def Product_view(request):
    #原因可能性２
    print(request)
    
    data = request.data
    name = data.get('name')
    price = data.get('price')
    image = data.get('image')
    description = data.get('description')
    
    make = Product.objects.create(
       name=name,
       price=price,
       description=description, 
       image=image
    )
    #原因可能性３
        
    return JsonResponse({"message": "success",  "name" : make.name}, status=200)

@api_view(['GET'])
def merchandise_info(request):
    merchandise = Product.objects.order_by("name").all()
    merchandis_list = []
    
    for m in merchandise:
        if m.image:
            print({"画像あり" : m.image.url})
            image_url = m.image.url
        else:
            print({"画像がない"})
            image_url = None
        merchandis_list.append({"name" : m.name, "price" : m.price, "description" : m.description, "image" : image_url})
    return JsonResponse(merchandis_list,safe=False)
    
