# data_collection.py
import os
import cv2
import numpy as np
import mediapipe as mp

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(static_image_mode=True, max_num_hands=1, min_detection_confidence=0.5)

# Create dataset directory if not exists
if not os.path.exists('dataset'):
    os.makedirs('dataset')

# Define gestures to collect
GESTURES = ['hi', 'bye', 'yes', 'no', 'peace', 'okay', 'fist', 'rock', 'point']

def collect_samples(gesture_name, num_samples=200):
    """Collect samples for a specific gesture"""
    gesture_dir = os.path.join('dataset', gesture_name)
    if not os.path.exists(gesture_dir):
        os.makedirs(gesture_dir)
    
    cap = cv2.VideoCapture(0)
    print(f"Collecting samples for {gesture_name}. Press 'c' to capture, 'q' to quit")
    
    count = 0
    while count < num_samples:
        ret, frame = cap.read()
        if not ret:
            continue
            
        frame = cv2.flip(frame, 1)
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        
        # Process frame with MediaPipe
        results = hands.process(rgb_frame)
        
        if results.multi_hand_landmarks:
            # Draw landmarks
            for hand_landmarks in results.multi_hand_landmarks:
                mp.solutions.drawing_utils.draw_landmarks(
                    frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)
                
            # Display count
            cv2.putText(frame, f"Collected: {count}/{num_samples}", (10, 30),
                       cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
            cv2.putText(frame, gesture_name, (10, 70),
                       cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
            
            # Show instructions
            cv2.putText(frame, "Press 'c' to capture", (10, 110),
                       cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
            
        cv2.imshow('Data Collection', frame)
        
        key = cv2.waitKey(1)
        if key == ord('c') and results.multi_hand_landmarks:
            # Save landmarks as numpy array
            landmarks = []
            for landmark in results.multi_hand_landmarks[0].landmark:
                landmarks.extend([landmark.x, landmark.y, landmark.z])
            
            np.save(os.path.join(gesture_dir, f"{count}.npy"), np.array(landmarks))
            count += 1
            print(f"Saved sample {count}/{num_samples}")
            
        elif key == ord('q'):
            break
            
    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    print("Available gestures:", GESTURES)
    gesture = input("Enter gesture name to collect: ").lower()
    if gesture in GESTURES:
        collect_samples(gesture)
    else:
        print("Invalid gesture name")