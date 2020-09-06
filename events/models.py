from django.db import models

# Create your models here.
from django.contrib.auth.models import User
User._meta.get_field('email')._unique = True


class UserAccount(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    phone = models.IntegerField(unique=True, blank=True)
    address = models.CharField(max_length=150, blank=True)
    accept_terms = models.BooleanField(default=False, blank=False)
    registered_events = models.ManyToManyField('Event', blank=True)

    REQUIRED_FIELDS = ['accept_terms', 'first_name', 'last_name', 'email']

    def __str__(self):
        return self.user


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
