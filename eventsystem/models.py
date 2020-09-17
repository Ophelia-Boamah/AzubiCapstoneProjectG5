from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User
# Create your models here.


class CustomUser(AbstractUser):
    address = models.CharField(max_length=250, blank=True)
    phone = models.CharField(max_length=15, blank=True)
    city = models.CharField(max_length=30, blank=True)
    confirm_password = models.CharField(max_length=30, blank=True)
    registered_events = models.ManyToManyField(Events, )

    def __str__(self):
        return self.email

# class UserAccount(models.Model):
#     user = models.OneToOneField(
#         User, on_delete=models.CASCADE, related_name="account")
#     address = models.CharField(max_length=250, blank=True)
#     phone = models.CharField(max_length=15, blank=True)
#     city = models.CharField(max_length=30, blank=True)

#     def __str__(self):
#         return self.email


class Event(models.Model):
    EVENT_TIME_CHOICES = [
        ('morning', 'morning'), ('midmorning', 'midmorning'), ('afternoon', 'afternoon')]
    event_date = models.DateField()
    event_times = models.CharField(max_length=10, choices=EVENT_TIME_CHOICES)
    topic = models.CharField(max_length=100)
    description = models.TextField()
    room_capacity = models.IntegerField()
    speaker = models.CharField(max_length=100)
    event_image = models.ImageField(
        upload_to='eventpics/', null=True, blank=True, editable=True, help_text="Event Thumbnail")
    venue_address = models.CharField(max_length=200)

    def __str__(self):
        return self.topic
