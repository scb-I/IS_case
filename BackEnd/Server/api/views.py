import logging
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from .serializers import UserSerializer
from django.contrib.auth import login, authenticate
import os
from django.views.decorators.csrf import csrf_exempt


# Создайте каталог для хранения лог-файлов
log_directory = 'logs'
os.makedirs(log_directory, exist_ok=True)

# Настройка логгирования в файлы
logging.basicConfig(
    filename=os.path.join(log_directory, 'api.log'),
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] [%(name)s]: %(message)s'
)
logger = logging.getLogger(__name__)


@api_view(['POST'])
@permission_classes([AllowAny])
@csrf_exempt
def loging_user(request):
    """
    Аутентифицирует и выполняет вход пользователя.

    Parameters:
        request (Request): HTTP-запрос с данными пользователя для аутентификации.

    Returns:
        Response: HTTP-ответ с данными пользователя, если аутентификация успешна, или ошибкой, если аутентификация не удалась.
    """
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)

        if user:
            login(request, user)
            logger.info(f'Пользователь {user.username} успешно вошел в систему.')
            serializer = UserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)

        logger.error('Ошибка при аутентификации пользователя: неверный логин или пароль.')
        return Response({'error': 'Неверный логин или пароль'}, status=status.HTTP_401_UNAUTHORIZED)


