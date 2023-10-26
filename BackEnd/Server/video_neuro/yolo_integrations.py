import cv2
from pathlib import Path
from yolov5.models.experimental import attempt_load
from yolov5.utils.general import non_max_suppression, scale_boxes
from yolov5.utils.torch_utils import select_device, time_sync
import numpy as np


# Инициализация модели YOLOv5
weights_path = '/Server/yolov5/yolov5weapon.pt'
device = select_device()  # Выбираем устройство автоматически

model = attempt_load(weights_path, device=device)
model.eval()

stride = int(model.stride.max())
imgsz = 640

# Определение классов объектов
class_names = ['pistol', 'rifle', 'knife']  # Замените классы на свои


def detect_objects_on_frame(frame):
    # Предобработка кадра
    img0 = cv2.resize(frame, (imgsz, imgsz))
    img = img0[:, :, ::-1].transpose(2, 0, 1)  # BGR to RGB, HWC to CHW
    img = img[np.newaxis]  # добавление batch-измерения
    img = img / 255.0  # нормализация

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

    return frame
