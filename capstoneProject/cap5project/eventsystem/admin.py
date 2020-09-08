from django.contrib import admin

# Register your models here.
from .models import userAccount


class UserAdmin(admin.ModelAdmin):
    list_display = ('user', 'address', 'phone', 'city')


admin.site.register(userAccount, UserAdmin)
