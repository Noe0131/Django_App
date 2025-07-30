from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from .models import Login
import json

def Login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        
        try:
            user = Login.objects.get(username=username, password=password, email=email)
            return JsonResponse({'message': 'ログイン成功', 'username': user.username})
        except Login.DoesNotExist:
            return JsonResponse({'message': 'ログイン失敗'}, status=401)
        
    return JsonResponse({"message": "POSTを送ってください"}, status=200)

@ensure_csrf_cookie
def csrf(request):
    # CSRF cookieをセットしたレスポンスだけ返す簡単なエンドポイント
    return JsonResponse({"detail": "CSRF cookie set"})