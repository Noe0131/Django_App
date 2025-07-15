from django.db import models

class login(models.Model):
    mail = models.EmailField(max_length=200)
    gender = models.BooleanField()
    age = models.IntegerField(default=0)
    birthday = models.DateField()

    def __str__(self):
        return f'<login:id={self.id}, mail={self.mail}>'
