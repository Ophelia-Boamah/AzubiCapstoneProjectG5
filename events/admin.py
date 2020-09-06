from django.contrib import admin

# Register your models here.
from .models import UserAccount
from .models import Event


# class UserAccountAdmin(admin.ModelAdmin):
#     list_display = ('phone', 'address')


class EventAdmin(admin.ModelAdmin):
    list_display = ('topic', 'description', 'speaker', 'event_date',
                    'event_image', 'room_capacity', 'venue_address')


# Register your models here.
admin.site.register(UserAccount)
admin.site.register(Event, EventAdmin)
