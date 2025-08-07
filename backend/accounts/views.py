from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated  
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login as auth_login
from .models import Register

#アカウント作成
@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def Register_view(request):
    data = request.data
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username:
        return JsonResponse({"message" : "usernameは必須です"},status=400)
    if not email:
        return JsonResponse({"message" : "emailは必須です"},status=400)
    if not password:
        return JsonResponse({"message" : "passwordは必須です"},status=400)
    if Register.objects.filter(username=username).exists():
        return JsonResponse({"message": "ユーザー名はすでにあります"}, status=400)
    account = Register.objects.create(
        username=username,
        email=email,
        password=make_password(password)
    )
    return JsonResponse({"message": "アカウント作成成功", "username": account.username}, status=200)

#ログイン
@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    data = request.data
    email = data.get('email')
    password = data.get('password')

    try:
        account = Register.objects.get(email=email)
        if check_password(password, account.password):
            auth_login(request, account)
            return JsonResponse({"message": "ログイン成功", "username": account.username}, status=200)
        else:
            return JsonResponse({"message": "パスワードが違います"}, status=401)
    except Register.DoesNotExist:
        return JsonResponse({"message": "アカウントが存在しません"}, status=401)

@login_required
def user_info(request):
    user = request.user
    return JsonResponse({"username": user.username, "email" : user.email, "password" : user.password }, status=200)
    
