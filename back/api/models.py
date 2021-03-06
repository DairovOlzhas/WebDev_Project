from django.db import models
from django.contrib.auth.models import User

class Restaurant(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=80)
    phoneNumber = models.CharField(max_length=10)


    def __str__(self):
        return "%s the place" % self.name

class Menu(models.Model):
    restaurant = models.OneToOneField(
        Restaurant,
        on_delete=models.CASCADE,
        primary_key=True,
    )


class Category(models.Model):
    name = models.CharField(max_length=200)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, default=2)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


class FoodItem(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()
    count = models.IntegerField()
    category = models.ForeignKey(Category,
                                 on_delete=models.CASCADE,
                                 related_name='products')

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'count': self.count,
        }

# Create your models here.
