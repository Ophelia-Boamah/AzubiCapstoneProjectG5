from knox.views import LoginView as KnoxLoginView
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework import permissions
from django.contrib.auth import login
from .serializers import UserSerializer, RegisterSerializer, LoginUserSerializer
from knox.models import AuthToken
from rest_framework.response import Response
from rest_framework import generics, permissions
# from django.contrib.auth.models import User
from .models import CustomUser
import json
from django.contrib.auth import authenticate
from .serializers import EventSerializer
from .models import Event
from django.shortcuts import render
# Register API


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": RegisterSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


# class LoginAPI(KnoxLoginView):
#     permission_classes = (permissions.AllowAny,)

#     def post(self, request, format=None):
#         serializer = AuthTokenSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data['user']
#         login(request, user)
#         return super(LoginAPI, self).post(request, format=None)


# class LoginAPI(generics.GenericAPIView):
#     serializer_class = LoginUserSerializer

#     def post(self, request, *args, **kwargs):
#         # import pdb
#         # pdb.set_trace()
#         # print("LoginAPI - post")
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data['user']
#         return Response({
#             "user": UserSerializer(user, context=self.get_serializer_context()).data,
#             "token": AuthToken.objects.create(user)
#         })


class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        params = json.loads(request.body)
        username = params['username']
        password = params['password']

        if(username == ''):
            return Response({
                "status": False,
                "error-message": "username field empty"
            })
        if(password == ''):
            return Response({
                "status": False,
                "error-message": "password field empty"
            })

        user_exist = CustomUser.objects.get(username=username)

        if(user_exist):

            # user = authenticate(
            #     request, username=username, password=password)

            if user_exist is not None:
                login(request, user_exist)
                return Response({
                    "status": True,
                    "username": user_exist.username,
                    "first_name": user_exist.first_name,
                    "last_name": user_exist.last_name,
                    "email": user_exist.email,
                    "token": AuthToken.objects.create(user_exist)[1]
                })
            else:
                return Response({
                    "status": False,
                    "error-message": "Invalid credentials entered!"
                })
        else:
            return Response({
                "status": False,
                "error-message": "user not found"
            })


class CreateView(generics.ListCreateAPIView):
    """This view performs GET and POST http request to our api"""
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class DetailsView(generics.RetrieveUpdateDestroyAPIView):
    """This view performs GET, PUT and DELETE http requests to our api"""
    queryset = Event.objects.all()
    serializer_class = EventSerializer
