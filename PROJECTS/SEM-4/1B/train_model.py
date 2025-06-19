# train_model.py
import os
import numpy as np
from sklearn.model_selection import train_test_split
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.utils import to_categorical
from sklearn.preprocessing import LabelEncoder

def load_dataset():
    X = []
    y = []
    
    gesture_dirs = os.listdir('dataset')
    for label, gesture in enumerate(gesture_dirs):
        gesture_path = os.path.join('dataset', gesture)
        for file in os.listdir(gesture_path):
            if file.endswith('.npy'):
                data = np.load(os.path.join(gesture_path, file))
                X.append(data)
                y.append(gesture)
    
    return np.array(X), np.array(y)

def create_model(input_shape, num_classes):
    model = Sequential([
        Dense(128, activation='relu', input_shape=input_shape),
        Dropout(0.5),
        Dense(64, activation='relu'),
        Dropout(0.5),
        Dense(num_classes, activation='softmax')
    ])
    
    model.compile(optimizer='adam',
                 loss='categorical_crossentropy',
                 metrics=['accuracy'])
    
    return model

def main():
    # Load dataset
    X, y = load_dataset()
    
    # Encode labels
    le = LabelEncoder()
    y_encoded = le.fit_transform(y)
    y_categorical = to_categorical(y_encoded)
    
    # Split dataset
    X_train, X_test, y_train, y_test = train_test_split(
        X, y_categorical, test_size=0.2, random_state=42)
    
    # Create model
    model = create_model((X.shape[1],), len(le.classes_))
    
    # Train model
    model.fit(X_train, y_train, epochs=50, batch_size=32, validation_data=(X_test, y_test))
    
    # Save model
    if not os.path.exists('models'):
        os.makedirs('models')
    model.save('models/hand_gesture_model.h5')
    
    # Save label encoder
    np.save('models/label_encoder.npy', le.classes_)
    
    print("Model training complete!")

if __name__ == "__main__":
    main()