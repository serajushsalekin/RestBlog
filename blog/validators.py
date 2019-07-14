from rest_framework.exceptions import ValidationError


def valid_name(value: str):
    if value.lower() == 'rahimvau':
        raise ValidationError("Rahim Vau is not allowed")

    return value