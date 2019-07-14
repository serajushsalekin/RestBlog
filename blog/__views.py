# from django.shortcuts import render
from datetime import datetime
from blog.serializers import HalloSerializer
from rest_framework.exceptions import ValidationError
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated


@api_view(http_method_names=['GET', 'POST'])
@permission_classes((IsAuthenticated, ))
def helloapi(request: Request):
    # name = request.POST.get('name')
    message = "hello "
    """
    if name:
        if request.POST.get('dob'):
            try:
                dob = datetime.strptime(request.POST.get('dob'), "%Y-%m-%d")
            except ValueError as e:
                raise ValidationError({'dob': str(e)})
            age = (datetime.now()-dob).days/365
            if age >= 30:
                return Response({'message': 'hello ' + name +' Sir'})
    return Response({'message': "hello people"})    """
    serializer = HalloSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    valid_data = serializer.validated_data
    if valid_data.get('name'):
        message = message + valid_data.get('name')
        age = (datetime.today().date() - valid_data.get('dob')).days / 365
        if age >= 30:
            message += ' Sir'

    return Response({'message': message})
