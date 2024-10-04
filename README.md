# City Weather Finder

## Description
City Weather Finder is a web application that allows users to search for current weather information by city name. The application leverages the OpenWeatherMap API to fetch real-time weather data and displays it to the user. The backend is built using Node.js, Express, and MongoDB, with user authentication and session management implemented using Passport.js and MongoStore.

## Features
- User authentication (sign up, log in, log out)
- Fetch and display weather information including temperature, minimum and maximum temperature, humidity, feels-like temperature, and a weather description
- Custom error handling and flash messages for user feedback
- Use of EJS templates for rendering views
- Session management with MongoDB
- Routes for listing weather data and managing user review

## Installation and Setup

### Prerequisites
- Node.js and npm installed
- MongoDB database (local or Atlas)
- OpenWeatherMap API key

### Steps
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/yourusername/city-weather-finder.git
   cd city-weather-finder
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add your environment variables in the following format:
     ```env
     ATLAS_DB_URL=your_mongodb_url
     SECRET=your_secret_key
     ```

4. **Set Up API Key**:
   - Create a file named `APIkey.js` in the `src` directory.
   - Add your OpenWeatherMap API key in the following format:
     ```javascript
     const APIKEY = () => {
         return "YOUR_API_KEY";
     }

     export default APIKEY;
     ```

5. **Run the Application**:
   ```sh
   npm start
   ```

### File Structure

```
city-weather-finder/
├── models/
│   ├── user.js
├── public/
│   ├── css/
│   ├── js/
├── routes/
│   ├── listing.js
│   ├── review.js
│   ├── user.js
├── utils/
│   ├── ExpressError.js
├── views/
│   ├── listings/
│   ├── partials/
│   ├── users/
│   ├── error.ejs
│   ├── index.ejs
├── .env
├── app.js
├── package.json
├── README.md
```

### Dependencies
- express
- mongoose
- dotenv
- ejs
- method-override
- connect-flash
- express-session
- connect-mongo
- passport
- passport-local
- @mui/material (for frontend UI components)

### Usage

1. **Navigate to the Application**:
   Open your browser and go to `http://localhost:8080`.

2. **Register and Log In**:
   Create a new account or log in with an existing account.

3. **Search for Weather Information**:
   Enter a city name in the input field and click "Get Weather". The weather information for the entered city will be displayed.

4. **Manage Listings and Reviews**:
   Create and manage weather listings and reviews.

### Error Handling
Custom error handling is implemented to notify users if the city is not found or if there is a network issue. The application uses flash messages to provide feedback to the user.

### Contributing
Contributions are welcome! Please create an issue or submit a pull request with your changes.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Acknowledgments
- OpenWeatherMap API for providing weather data
- Mongoose for MongoDB interactions
- Passport.js for authentication and session management
- Material UI for frontend components

Feel free to contact me if you have any questions or feedback!
