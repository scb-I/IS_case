import cv2
from yolov5 import YOLO
from pytube import YouTube

# Установите параметры модели и устройства, как в вашем коде
model_path = "yolov5фыа/weights/yolov5s.pt"
device = "cpu"
yolov5 = YOLOv5(model_path, device)

# URL живого потока с YouTube
url = "https://www.youtube.com/watch?v=3vIzDBhjuDk"

# Инициализируйте объект YouTube и получите живой поток
yt = YouTube(url)
stream = yt.streams.filter(only_video=True, file_extension='mp4').first()

# Открываем видеопоток
cap = cv2.VideoCapture(stream.url)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Проводим инференс на каждом кадре
    results = yolov5.predict(frame)

    # Отображаем результаты на кадре
    frame_with_results = results.render()[0]
    cv2.imshow("YOLOv5", frame_with_results)

    # Для завершения работы при нажатии клавиши 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Освобождаем ресурсы и закрываем окно
cap.release()
cv2.destroyAllWindows()
