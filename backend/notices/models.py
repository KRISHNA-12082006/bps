from django.db import models

# Create your models here.
class Notice(models.Model):
    image = models.ImageField(upload_to="notices")