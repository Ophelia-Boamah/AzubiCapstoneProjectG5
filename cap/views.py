from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def signup(response):
    return HttpResponse("Run with me.")

def signin(response):
    return HttpResponse("Signin.")
