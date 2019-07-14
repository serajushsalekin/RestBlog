from rest_framework import serializers
from blog.validators import valid_name
from .models import Post


class HalloSerializer(serializers.Serializer):
    name = serializers.CharField(validators=[valid_name], required=False,
                                 min_length=2,
                                 max_length=4)
    dob = serializers.DateField(input_formats=['%Y-%m-%d'], required=False)


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'body')
