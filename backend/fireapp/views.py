from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import pyrebase

# To bypass having a CSRF token
from django.views.decorators.csrf import csrf_exempt


config = {
    "apiKey": "AIzaSyBGo6NDbnnd-h15EtlPH7VVE8dUTyq_OLg",
    "authDomain": "tester-4a437.firebaseapp.com",
    "databaseURL": "https://tester-4a437-default-rtdb.europe-west1.firebasedatabase.app",
    "projectId": "tester-4a437",
    "storageBucket": "tester-4a437.appspot.com",
    "messagingSenderId": "743736050369",
    "appId": "1:743736050369:web:8b671777e97b1a789e0a40",
   
}

firebase = pyrebase.initialize_app(config)
authe = firebase.auth()
database = firebase.database()

def index(request):
    data = database.child('Data').get().val()
    return JsonResponse(data, safe=False)
    #return render(request, 'index.html', context)

def pas(request):
    pas = database.child('password').get().val()
    return JsonResponse(pas, safe=False)
    #return render(request, 'index.html', context)

@csrf_exempt
def add(request):

    psuh = database.child('Data').push({
        "date": request.POST.get('date'),
        "image":  request.POST.get('image'),
        "json": request.POST.get('json'),
        "title": request.POST.get('title')       
    })
    

    return JsonResponse(psuh, safe=False)

# Create your views here.
