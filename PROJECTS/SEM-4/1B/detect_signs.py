# detect_signs.py
import cv2
import numpy as np
import mediapipe as mp
from tensorflow.keras.models import load_model

# Load model and label encoder
model = load_model('models/hand_gesture_model.h5')
label_encoder = np.load('models/label_encoder.npy', allow_pickle=True)

# Initialize MediaPipe Hands
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(static_image_mode=False, max_num_hands=1, min_detection_confidence=0.7)

# Initialize OpenCV
cap = cv2.VideoCapture(0)

while cap.isOpened():
    success, image = cap.read()
    if not success:
        continue
    
    # Flip the image horizontally for a mirror effect
    image = cv2.flip(image, 1)
    
    # Convert the BGR image to RGB
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    
    # Process the image and detect hands
    results = hands.process(image_rgb)
    
    # Draw hand landmarks and detect gestures
    if results.multi_hand_landmarks:
        for hand_landmarks in results.multi_hand_landmarks:
            # Draw hand landmarks
            mp.solutions.drawing_utils.draw_landmarks(
                image, hand_landmarks, mp_hands.HAND_CONNECTIONS)
            
            # Extract landmarks
            landmarks = []
            for landmark in hand_landmarks.landmark:
                landmarks.extend([landmark.x, landmark.y, landmark.z])
            
            # Predict gesture
            prediction = model.predict(np.array([landmarks]))
            predicted_class = np.argmax(prediction)
            confidence = np.max(prediction)
            gesture = label_encoder[predicted_class]
            
            # Display the gesture
            if confidence > 0.8:  # Only show predictions with high confidence
                # Get hand bounding box
                h, w, _ = image.shape
                x_coords = [lm.x * w for lm in hand_landmarks.landmark]
                y_coords = [lm.y * h for lm in hand_landmarks.landmark]
                min_x, max_x = int(min(x_coords)), int(max(x_coords))
                min_y, max_y = int(min(y_coords)), int(max(y_coords))
                
                # Draw text background
                cv2.rectangle(image, (min_x, min_y - 30), (min_x + 150, min_y), (0, 0, 0), -1)
                # Draw text
                cv2.putText(image, f"{gesture} ({confidence:.2f})", (min_x + 10, min_y - 10), 
                           cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
    
    # Display the image
    cv2.imshow('Hand Sign Detector', image)
    
    # Exit on 'q' key press
    if cv2.waitKey(5) & 0xFF == ord('q'):
        break

# Release resources
cap.release()
cv2.destroyAllWindows()