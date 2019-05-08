from django.http import Http404
from django.shortcuts import get_object_or_404

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination

from api.models import Category, FoodItem
from api.serializers import CategorySerializer, ItemSerializer, RestaurantSerializer, MenuSerializer

class MenuList(generics.ListCreateAPIView):
    serializer_class = MenuSerializer
    permission_classes = any

    def get_queryset(self):
        return MenuList.objects.for_user(self.request.user)

    def perofrm_create(selfself, serializer):
        serializer.save(created_by=self.request.user)

class MenuItemList(generics.ListCreateAPIView):
    serializer_class = ItemSerializer
    pagination_class = LimitOffsetPagination

    def get_queryset(self):
        try:
            menu = MenuList.objects.get(id=self.kwargs.get('pk'))
        except MenuList.DoesNotExist:
            raise Http404
        queryset = menu.products.all()

        return queryset
