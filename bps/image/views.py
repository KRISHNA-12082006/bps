from django.shortcuts import render
from .models import Image

# Create your views here.
def view(request):
    images = Image.objects.all()  # Retrieve all images from the database
    return render(request, 'index.html', {'images': images})