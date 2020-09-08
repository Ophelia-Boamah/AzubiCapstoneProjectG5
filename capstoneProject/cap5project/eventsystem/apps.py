from django.apps import AppConfig


class EventsystemConfig(AppConfig):
    name = 'eventsystem'

    def ready(self):
        import eventsystem.signals
