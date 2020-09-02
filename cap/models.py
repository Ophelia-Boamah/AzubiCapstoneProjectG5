from django.db import models

# Create your models here.
from django.contrib.auth.models import User


class UserAccount(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.IntegerField(max_length=15, unique=True, blank=True)
    address = models.CharField(max_length=150, blank=True)
    accept_terms = models.BooleanField(default=False)
    registered_events = model.ManyToManyField('Events', blank=True)

    REQUIRED_FIELDS = ['accept_terms', 'first_name', 'last_name', 'email']

    def __str__(self):
        return self.user.username


class Events(models.Model):
    EVENT_TIME_CHOICES = [morning, midmorning, afternoon]
    event_date = models.DateField()
    event_time = models.Choices(choices=EVENT_TIME_CHOICES)
    topic = models.CharField(max_length=100)
    description = models.TextField()
    room_capacity = models.IntegerField()
    speaker = models.CharField(max_length=100)
    # event_image = models.ImageField(upload_to)
    venue_address = models.CharField(max_length=200)

    def __str__(self):
        return self.topic


class Registrations(models.Model):
