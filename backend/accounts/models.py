from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

# アカウント作成
class Register(AbstractUser):
    def __str__(self):
        return self.username

