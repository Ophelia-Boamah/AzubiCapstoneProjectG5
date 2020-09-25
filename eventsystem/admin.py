from django.contrib import admin
from .models import Event, Booking
# Register your models here.
from eventsystem.models import CustomUser


class CustomUserAdmin(admin.ModelAdmin):
    empty_value_display = '-empty-'
    list_display = ('username', 'first_name', 'last_name',
                    'phone', 'email', 'address', 'city')
    list_filter = ('is_staff',)
    search_fields = ('username', 'first_name', 'last_name')
    pass


class EventAdmin(admin.ModelAdmin):  # add this
    list_display = ('event_date', 'event_times', 'topic',
                    'description', 'room_capacity', 'speaker', 'venue_address')


class BookingAdmin(admin.ModelAdmin):
    empty_value_display = '-empty-'
    list_display = ('event', 'user')
    search_fields = ('event', 'user')
    pass


admin.ModelAdmin.actions_on_top = True
admin.ModelAdmin.actions_on_bottom = True
admin.ModelAdmin.actions_selection_counter = False
admin.ModelAdmin.show_full_result_count = True


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Event, EventAdmin)
admin.site.register(Booking, BookingAdmin)
