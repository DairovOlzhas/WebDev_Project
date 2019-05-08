from rest_framework import serializers
from api.models import Category, FoodItem, Restaurant, Menu
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email',)

class RestaurantSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    class Meta:
        model = FoodItem
        fields = ('id', 'name', 'address', 'phonenumber')

class ItemSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    class Meta:
        model = FoodItem
        fields = ('id', 'name', 'price', 'count', 'category_id')


class CategorySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    created_by = UserSerializer(read_only=True)
    items = ItemSerializer(many=True)


    class Meta:
        model = Category
        fields = ('id', 'name', 'created_by', 'products')

    def create(self, validated_data):
        items = validated_data.pop('products')
        category = Category.objects.create(**validated_data)
        for items in items:
            FoodItem.objects.create(category=category, **items)

        return category

class MenuSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    created_by = UserSerializer(read_only=True)
    category = CategorySerializer(many=True)
    restaurant = RestaurantSerializer(many= False)
    class Meta:
        model = Menu
        fields = ('id', 'name', 'created_by', 'catefory', 'restaurant')
    def create(self, validated_data):
        items = validated_data.pop('items')
        menu = Menu.objects.create(**validated_data)
        for item in items:
            FoodItem.objects.create(menu = menu, **item)
            return menu