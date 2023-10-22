from django.db import models
from django.contrib.auth.models import User

# Define a model for challenges
class Challenge(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    entry_fee = models.DecimalField(max_digits=10, decimal_places=2)
    organizer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='organized_challenges')
    participants = models.ManyToManyField(User, through='Participant')

    def __str__(self):
        return self.title

# Define a model for participants
class Participant(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    challenge = models.ForeignKey(Challenge, on_delete=models.CASCADE)
    joined_date = models.DateTimeField(auto_now_add=True)
    is_winner = models.BooleanField(default=False)

# Define a model for payments
class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    challenge = models.ForeignKey(Challenge, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_date = models.DateTimeField(auto_now_add=True)
