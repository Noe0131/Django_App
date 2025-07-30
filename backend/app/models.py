from django.db import models

# Create your models here.
class Login(models.Model):
    user_name = models.CharField(
        max_length=150,
        verbose_name="ユーザー名"
    )
    
    email = models.EmailField(
        max_length=254,
        verbose_name="",
        unique=True
    )
    
    password = models.CharField(
        max_length=128,
        verbose_name="パスワード"
    )
    
    def __str__(self):
        return self.user_name
    