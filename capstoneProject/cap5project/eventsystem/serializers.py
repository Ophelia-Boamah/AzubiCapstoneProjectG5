from rest_framework import serializers
from .models import userAccount


class userAccountSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = userAccount
        fields = '__all__'
