from django.http import JsonResponse

def api_hello(request):
    return JsonResponse({"message": "ffff"})
