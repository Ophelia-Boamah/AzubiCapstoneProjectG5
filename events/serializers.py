
from django.contrib.auth import authenticate
from django.contrib.auth.models import User

from rest_framework import serializers
from .models import UserAccount
from .models import Event


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('topic', 'description', 'speaker', 'event_date',
                  'event_image', 'room_capacity', 'venue_address')


class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ('user', 'phone', 'address',
                  'accept_terms', 'registered_events')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'phone', 'address')

# class RegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'username', 'email', 'password')
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         user = User.objects.create_user(
#             validated_data['username'],
#             validated_data['email'],
#             validated_data['password']
#         )
#         return user


# class LoginSerializer(serializers.Serializer):
#     username = serializers.CharField()
#     password = serializers.CharField()

#     def validate(self, data):
#         user = authenticate(**data)
#         if user and user.is_active:
#             return user
#         raise serializers.ValidationError("Incorrect Credentials")
