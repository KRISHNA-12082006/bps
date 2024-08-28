from django.db import models

# Create your models here.
class Image(models.Model):
    image = models.ImageField(upload_to='images/')
    title = models.CharField(max_length=45)
    datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Image: {self.title}"