# Generated by Django 5.2.1 on 2025-05-22 18:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_driver_available'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ridedetails',
            old_name='esimated_duration',
            new_name='estimated_duration',
        ),
    ]
