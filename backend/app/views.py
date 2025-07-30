from django.http import JsonResponse
from django.http import HttpResponse


def index(requset):
    return HttpResponse("index")

def hello(request):
     return JsonResponse({"message": "Hello from Django!"})

def noe(requset):
    return JsonResponse({"noe": "noe"})