from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie

# Create your views here.
@ensure_csrf_cookie 
def get_csrf_token(request):
    return JsonResponse({'detail': 'CSRF cookie set'})
