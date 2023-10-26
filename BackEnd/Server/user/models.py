from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, Group, Permission
import re


class CustomUserManager(BaseUserManager):
    """
    Класс `CustomUserManager` предоставляет методы для создания и управления пользователями.

    Args:
        BaseUserManager: Базовый менеджер пользователей Django.
    """

    def create_user(self, username: str, password: str):
        """
        Создает и сохраняет нового пользователя.

        Args:
            username (str): Логин пользователя.
            password (str): Пароль пользователя.

        Returns:
            User: Новый объект пользователя.

        Raises:
            ValueError: Если пароль не соответствует критериям.
        """
        if not password:
            raise ValueError('Ошибка, отсутствует Логин или Пароль')

        if not re.match(r'^(?=.*[!@#$%^&*()_+\-=[\]{};:"\\|,.<>?]).{6,}$', password):
            raise ValueError('Длина пароля должна быть более 6 символов и иметь как минимум 1 спец. символ')

        if not re.match(r'^(.*\d.*){2,}$', password):
            raise ValueError('Пароль должен содержать не менее 2 цифр')

        user = self.model(username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username: str, password: str):
        """
        Создает и сохраняет нового суперпользователя (администратора).

        Args:
            username (str): Логин суперпользователя.
            password (str): Пароль суперпользователя.

        Returns:
            User: Новый объект суперпользователя.
        """
        user = self.create_user(username, password)
        user.is_admin = True
        user.save(using=self._db)


class User(AbstractUser):
    """
    Класс `User` представляет модель пользователя, которая расширяет стандартную модель пользователя Django.

    Args:
        AbstractUser: Базовая модель пользователя Django.

    Attributes:
        groups (ManyToManyField): Связь с группами пользователей.
        user_permissions (ManyToManyField): Связь с разрешениями пользователя.

    """

    username = models.CharField(max_length=30, unique=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = CustomUserManager()

    REQUIRED_FIELDS = ['username']

    groups = models.ManyToManyField(Group, related_name='custom_user_groups')
    user_permissions = models.ManyToManyField(Permission, related_name='custom_user_permissions')

    def __str__(self) -> str:
        """
        Возвращает строковое представление объекта пользователя.

        Returns:
            str: Строковое представление пользователя (имя пользователя).
        """
        return self.username

