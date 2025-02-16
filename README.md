

#  Flashcard Learning App (Leitner System)

A **MERN stack-based Flashcard Learning App** that helps users **study efficiently** using the **Leitner System** (a spaced repetition technique). Users can **add, review, and progress** through flashcards based on their understanding.
## 🚀 Features
✅ **Add, Update, and Delete Flashcards**  
✅ **Leitner System for Spaced Repetition**  
✅ **Dark Mode Support**  
✅ **User Progress Tracking (Due Flashcards Counter)**  
✅ **Fully Responsive UI with TailwindCSS**  
✅ **Deployed on Vercel**  


## 🛠 **Setup Instructions**

### 🔹 **1️⃣ Clone the Repository**
git clone https://github.com/shohidulislam12/flashcard-client
cd flashcard-app


### 🔹 **2️⃣ Install Dependencies**
#### **Backend**
cd backend
npm install

#### **Frontend**
cd frontend
npm install

### 🔹 **3️⃣ Set Up Environment Variables**
Create a **`.env`** file in the **backend** folder:
```
PORT=5000
MONGO_URI=your-mongodb-connection-string
```

### 🔹 **4️⃣ Run the Project**
#### **Start Backend Server**

cd backend
node index.js

#### **Start Frontend**

cd frontend
npm run dev

## 📌 **Deployment**
### ✅ **Frontend Deployment (Vercel)**

cd frontend
vercel --prod

### ✅ **Backend Deployment (Vercel)**

cd backend
vercel --prod



## 🔄 **How the Leitner System Works**
1️⃣ Flashcards start in **Box 1**.  
2️⃣ If a user **answers correctly**, the card moves to the **next level**.  
3️⃣ If they **answer incorrectly**, it goes back to **Box 1**.  
4️⃣ Each level has **longer review intervals**, ensuring **efficient learning**.  

## 🧠 **Thought Process & Design**
🔹 **Why MERN Stack?**  
- React.js for a fast, dynamic frontend.  
- Node.js & Express.js for a scalable backend.  
- MongoDB for flexible flashcard storage.  

🔹 **Why the Leitner System?**  
- **Spaced Repetition** improves retention.  
- Helps users focus on difficult cards.  

🔹 **Why Vercel?**  
- **Easy deployment** for both frontend & backend.  
- **Automatic scaling** for performance.  

---


## 🛠 **Tech Stack**
- **Frontend:** React.js, TailwindCSS, Axios, Framer Motion  
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)  

---

## 📬 **Contributions & Feedback**
Feel free to contribute! Open an issue or submit a pull request. 😊

---
**Made with ❤️ by [Your Name](https://github.com/shohidulislam12)**

## **🚀 Final Steps**
1️⃣ **Save the file as `README.md` in your project root.**  
2️⃣ **Push your project to GitHub:**

git add .
git commit -m "Added README.md"
git push origin main

3️⃣ **Your project now has a professional README on GitHub!** 🎉  

Let me know if you need modifications! 🚀😊