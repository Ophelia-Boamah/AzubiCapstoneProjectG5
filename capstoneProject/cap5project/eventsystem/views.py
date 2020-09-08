from rest_framework.generics import (
    ListCreateAPIView, RetrieveUpdateDestroyAPIView,)
from rest_framework.permissions import IsAuthenticated
from .models import userAccount
from .permissions import IsOwnerAccountOrReadOnly
from .serializers import userAccountSerializer

# Create your views here.


class userAccountListCreateView(ListCreateAPIView):
    queryset = userAccount.objects.all()
    serializer_class = userAccountSerializer
    # permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(user=user)


class userAccountDetailView(RetrieveUpdateDestroyAPIView):
    queryset = userAccount.objects.all()
    serializer_class = userAccountSerializer
    permission_classes = [IsOwnerAccountOrReadOnly, IsAuthenticated]
