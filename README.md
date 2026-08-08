# 🧑 Face Recognition Web App

A browser-based face identification project that uses a webcam and a
custom-trained machine learning model created with Google Teachable
Machine.

The application captures an image through the webcam and uses an
ml5.js image classifier to identify the person in the captured image.

## 🚀 Features

- 📷 Live webcam integration
- 📸 Capture images directly from the webcam
- 🧠 Custom-trained machine learning model
- 🔍 Person identification
- 📊 Prediction confidence display
- 🌐 Runs directly in the browser

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap
- **ml5.js 0.4.3**
- **WebcamJS 1.0.26**
- **Google Teachable Machine**

## 🧠 How It Works

The application uses WebcamJS to access the device's webcam.

When **Capture Image** is clicked, a snapshot is taken from the webcam.

When **Identify Image** is clicked, the captured image is passed to an
ml5.js image classifier.

The classifier uses a custom model trained with Google Teachable
Machine to predict which person the image belongs to. The predicted
class and confidence score are then displayed on the webpage.

### Training Classes

The original model was trained to identify:

- Brother
- Myself
- Father
- Mother
- Grandmother
- Maternal Grandparents

## 🔄 Project Flow

```
Webcam
   ↓
Capture Image
   ↓
Captured Image
   ↓
ml5.js Image Classifier
   ↓
Custom Teachable Machine Model
   ↓
Predicted Person + Confidence
```

▶️ How to Run
Clone or download this repository.
Open the project using a local development server.
Allow webcam access when prompted.
Click Capture Image.
Click Identify Image.
The predicted person and confidence score will be displayed.
📚 What I Learned

This project helped me explore:

Machine learning in the browser
Image classification
Google Teachable Machine
ml5.js
WebcamJS
Webcam integration
Capturing images with JavaScript
Using custom-trained machine learning models
Displaying model predictions and confidence scores
🔮 Future Improvements
Improve the training dataset
Increase prediction accuracy
Add more classes
Enable continuous real-time recognition
Add a registration system for new users
Improve the user interface
Upgrade to a modern machine learning library
👨‍💻 Author

Amit Vikram Mishra

Mechatronics Engineering Student @ SRM KTR

Repository name:
Face-Recognition-Web-App
