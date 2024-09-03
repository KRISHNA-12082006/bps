from django.shortcuts import render
from .models import Notice

# Create your views here.
def notices(request):
    notices = Notice.objects.all()
    return render(request, 'notices.html', {'notices': notices})