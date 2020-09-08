from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import userAccountListCreateView, userAccountDetailView

urlpatterns = [
    # gets all user accounts and create a new account
    path("all-accounts", userAccountListCreateView.as_view(), name="all-accounts"),
    # retrieves account details of the currently logged in user
    path("account/<int:pk>", userAccountDetailView.as_view(), name="account"),
]
