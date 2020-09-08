from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class userAccount(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="account")
    address = models.CharField(max_length=250, blank=True)
    phone = models.CharField(max_length=15, blank=True)
    city = models.CharField(max_length=30, blank=True)

    def __str__(self):
        return self.user.username


# class BlackListedToken(models.Model):
#     token = models.CharField(max_length=500)
#     user = models.ForeignKey(User, related_name="token_user", on_delete=models.CASCADE)
#     timestamp = models.DateTimeField(auto_now=True)

#     class Meta:
#         unique_together = ("token", "user")
