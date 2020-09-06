# from django.shortcuts import render
# from django.http import HttpResponse

# # Create your views here.
# def signup(request):
#     return HttpResponse("Run with me.")


# def signin(request):
#     return HttpResponse("Signin.")

from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import UserAccountSerializer
from .serializers import EventSerializer
from .models import UserAccount
from .models import Event


class UserAccountView(viewsets.ModelViewSet):
    serializer_class = UserAccountSerializer
    queryset = UserAccount.objects.all()


class EventView(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all()


class UserEventsView(viewsets.ModelViewSet):
    serializer_class = UserAccountSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.UserAccounts.registered_events.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
