from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from .models import Challenge, Participant, Payment
from .serializers import ChallengeSerializer, ParticipantSerializer, PaymentSerializer


class ChallengeList(generics.ListCreateAPIView):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer

class ChallengeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer

class ParticipantList(generics.ListCreateAPIView):
    queryset = Participant.objects.all()
    serializer_class = ParticipantSerializer

class ParticipantDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Participant.objects.all()
    serializer_class = ParticipantSerializer

class PaymentList(generics.ListCreateAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

class PaymentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

class UserLoginView(APIView):
    def post(self, request):
    # get user input data from request
        username = request.data.get('username')
        password = request.data.get('password')
    # authenticate user
        user = authenticate(username=username, password=password)

        if user is not None:
            # generate token if authenticated
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        
        else:
            # authentication failed
            return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)