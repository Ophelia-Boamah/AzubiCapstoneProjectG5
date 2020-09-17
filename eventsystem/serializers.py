from rest_framework import serializers
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
from .models import CustomUser
from django.contrib.auth import authenticate

from .models import Event


# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'first_name', 'last_name',
                  'username', 'email', 'password')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    # confirm_password = serializers.ReadOnlyField()
    class Meta:
        model = CustomUser
        fields = ('first_name', 'last_name', 'username',
                  'email', 'password', 'confirm_password', 'address', 'phone', 'city')
        #extra_kwargs = {'password': {'write_only': True}}

    # def validate(self, value):
    #     password = value.get('password', None)
    #     confirm_password = value.get('confirm_password', None)

    #     if password != confirm_password:
    #         raise ValidationError('Passwords do not match')

    #     return value

    # def (self, validated_data):
    #     user = User.objects.create_user(
    #         validated_data['username'], validated_data['email'], validated_data['password'])
        # return user


# class LoginUserSerializer(serializers.Serializer):
#     username = serializers.CharField()
#     password = serializers.CharField()

#     def validate(self, data):
#         # import pdb
#         # pdb.set_trace()
#         # print("LoginAPI - post")
#         user = authenticate(**data)
#         if user and user.is_active:
#             return user
#         raise serializers.ValidationError(
#             "Unable to log in with provided credentials.")


class LoginUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class EventSerializer(serializers.ModelSerializer):
    """This class serializes the Event model instance into formats like JSON"""

    class Meta:
        model = Event
        fields = ('id', 'event_date', 'event_times', 'topic',
                  'description', 'room_capacity', 'speaker', 'venue_address')
