
# Real‑Time Sign Language Detection System

*Semester 4 – Gesture Recognition with Python, OpenCV & MediaPipe*

---

## 🎯 Project Overview  
This project delivers a real-time sign language recognition system utilizing webcam input. MediaPipe is used for hand landmark detection, with custom gesture classification logic to map gestures to letters or words. Detected outputs are overlaid on the video stream.

---

## 🧰 Folder Structure

```
Sign_Language_Detection/
├── main.py                          # Entry point to start real-time capture & detection
├── gesture_classifier.py           # Logic to map landmarks to sign labels
├── dataset/                         # Folder containing recorded gesture images or landmark dumps
│   └── [label]/
│       ├── img1.jpg
│       ├── img2.jpg
├── utils.py                         # Utility scripts (e.g. preprocessing, threshold tuning)
├── requirements.txt
└── README.md
```

---

## ⚙️ Setup & How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Shrenik027/my-projects.git
   ```
2. Navigate into the folder:
   ```bash
   cd my-projects/PROJECTS/Sign_Language_Detection
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the application:
   ```bash
   python main.py
   ```
5. Use your webcam to show hand signs; the system will detect each gesture and display the corresponding letter/word on-screen.

---

## 📌 Core Features

- Live hand landmark tracking (21 key-points via MediaPipe)  
- Gesture classification logic: rule-based or simple model using landmark positions  
- Overlay detected sign output on live webcam feed  
- Adjustable parameters for sensitivity & confidence thresholds

---

## 👤 My Contributions

- Led dataset preparation: recorded gestures under varied lighting and angles  
- Developed real-time processing pipeline: webcam input → landmark extraction → classification  
- Tuned classification logic for accuracy and responsiveness  
- Managed integration and demo to peers/instructor

---

## 🧠 Skills Gained

- MediaPipe hand tracking & landmark extraction  
- Real-time OpenCV video stream integration  
- Mapping landmarks to recognized signs  
- UI overlay rendering and real-time feedback loops  
- Handling gesture variability across users

---

## 📅 Timeline

Completed: September 2024 (Semester 4)

---

## 🔮 Future Enhancements

- Build a trained ML model (e.g., CNN classifier or random forest) for improved accuracy  
- Expand to a larger sign vocabulary including words and phrases  
- Deploy via Streamlit or a web/mobile interface for wider accessibility
