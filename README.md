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

```text
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
