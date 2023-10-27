import cv2
from models.experimental import attempt_load
from utils.general import non_max_suppression, scale_boxes
from utils.torch_utils import select_device
import numpy as np
import torch

# Инициализация модели YOLOv5
weights_path = 'yolov5weapon.pt'
device = select_device()  # Выбираем устройство автоматически

model = attempt_load(weights_path, device=device)
model.eval()

stride = int(model.stride.max())
imgsz = 640

# Определение классов объектов
class_names = ['pistol', 'rifle', 'knife']  # Замените классы на свои

# Открываем видеопоток (здесь используется камера с индексом 0, можно указать путь к видеофайлу)
cap = cv2.VideoCapture('shoot.mp4')

while True:
    # Считываем кадр из видеопотока
    ret, frame = cap.read()

    if not ret:
        break  # Если кадр не считан, завершаем цикл

    # Предобработка кадра
    img0 = cv2.resize(frame, (imgsz, imgsz))
    img = img0[:, :, ::-1].transpose(2, 0, 1)  # BGR to RGB, HWC to CHW
    img = img[np.newaxis]  # добавление batch-измерения
    img = img / 255.0  # нормализация
    img = img.astype(np.float32)  # Преобразование в тип данных float

    # Преобразование массива numpy в объект torch.Tensor
    img = torch.from_numpy(img).to(device)

    # Обнаружение объектов
    pred = model(img)

    # Постобработка результатов
    pred = non_max_suppression(pred, 0.4, 0.5)

    for det in pred[0]:
        det = scale_boxes(img.shape[2:], det[:, :4], frame.shape).round()
        for *xyxy, conf, cls in det:
            label = f'{class_names[int(cls)]} {conf:.2f}'
            xyxy = [int(x) for x in xyxy]
            cv2.rectangle(frame, (xyxy[0], xyxy[1]), (xyxy[2], xyxy[3]), (0, 0, 255), 2)
            cv2.putText(frame, label, (xyxy[0], xyxy[1]), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1)

    # Отображаем обработанный кадр
    cv2.imshow('Video', frame)

    # Выход из цикла по нажатию клавиши 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Закрываем видеопоток и окна
cap.release()
cv2.destroyAllWindows()
