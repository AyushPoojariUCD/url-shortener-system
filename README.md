# 🔗 URL Shortener System

A scalable and efficient URL shortener service built with Node.js, Express, MongoDB, and TypeScript. This system allows users to shorten long URLs, redirect to original URLs using short links, and view analytics for each short link.

## 📗 Features

- Shorten long URLs into short, unique identifiers  
- Redirect short links to their original long URLs  
- Track click analytics for each short URL  
- RESTful API structure  
- Built with scalability and maintainability in mind  

## ⚙️ Tech Stack

**Backend**:
- Node.js  
- Express.js  
- MongoDB with Mongoose  
- TypeScript  

**Frontend**:
- React  
- TypeScript  
- Tailwind CSS (optional)  

## 📂 Project Structure

```
/backend
├── controllers
├── models
├── routes
├── services
├── utils
├── app.ts
└── server.ts

/frontend
├── components
├── pages
├── services
├── App.tsx
└── main.tsx
```

## 🧾 API Endpoints

### POST `/shorten`  
Create a new short URL.

**Request Body**:
```json
{
  "longUrl": "https://example.com"
}
```
**Response**:

{
  "shortUrl": "https://short.ly/abc123"
}

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/url-shortener-system.git
cd url-shortener-system
```


### 2. Backend

```bash
cd url-shortener-backend
npm install
npm run start
```
### 3. Backend

```bash
cd url-shortener-frontend
npm install
npm run dev
```

## 📌 Future Improvements

- User authentication and history tracking  
- Custom short URL aliases  
- Expiry dates for short URLs  
- Rate limiting and abuse prevention  
- Deployment to cloud platforms (e.g., Vercel, Render, AWS)
