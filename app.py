from flask import Flask, render_template

app = Flask(__name__)

# بيانات الطلاب
students = [
    {"name": "Adam Khaled", "image": "https://via.placeholder.com/100/1e88e5/ffffff?text=Student", "info": "Proud member of the 8A family!"},
    {"name": "Eyad Abdelhay", "image": "https://via.placeholder.com/100/2196f3/ffffff?text=Student", "info": "Proud member of the 8A family!"},
    {"name": "Jasser Al-Sebai", "image": "https://via.placeholder.com/100/42a5f5/ffffff?text=Student", "info": "Proud member of the 8A family!"},
    {"name": "Ziad Ayman", "image": "https://via.placeholder.com/100/64b5f6/ffffff?text=Student", "info": "Proud member of the 8A family!"},
    {"name": "Diaa Ahmed", "image": "https://via.placeholder.com/100/90caf9/ffffff?text=Student", "info": "Proud member of the 8A family!"},
    {"name": "Omar Khayal", "image": "https://i.ibb.co/ymjLkTYx/Whats-App-Image-2025-11-04-at-23-59-47-11886e31.jpg", "info": "Proud member of the 8A family!"},
    {"name": "Kevin Mina", "image": "https://via.placeholder.com/100/1e88e5/ffffff?text=Student", "info": "Proud member of the 8A family!"},
    {"name": "Malik Amr", "image": "https://via.placeholder.com/100/2196f3/ffffff?text=Student", "info": "Proud member of the 8A family!"},
    {"name": "Mohamed Abdulaziz", "image": "https://via.placeholder.com/100?text=27", "info": "Proud member of the 8A family!"},
    {"name": "Mohamed Amr", "image": "https://via.placeholder.com/100/64b5f6/ffffff?text=Student", "info": "Proud member of the 8A family!"},
    {"name": "Marwan Mahmoud", "image": "https://via.placeholder.com/100?text=11", "info": "Proud member of the 8A family!"},
    {"name": "Tasneem Ahmed", "image": "https://via.placeholder.com/100?text=12", "info": "Proud member of the 8A family!"},
    {"name": "Jana Mohamed Hassan", "image": "https://via.placeholder.com/100?text=13", "info": "Proud member of the 8A family!"},
    {"name": "Rofana Mina", "image": "https://via.placeholder.com/100?text=14", "info": "Proud member of the 8A family!"},
    {"name": "Ritaj Wael", "image": "https://via.placeholder.com/100?text=15", "info": "Proud member of the 8A family!"},
    {"name": "Rimas Osama", "image": "https://via.placeholder.com/100?text=16", "info": "Proud member of the 8A family!"},
    {"name": "Sajoud Metwali", "image": "https://via.placeholder.com/100?text=17", "info": "Proud member of the 8A family!"},
    {"name": "Sama Khaled", "image": "https://via.placeholder.com/100?text=18", "info": "Proud member of the 8A family!"},
    {"name": "Klara Samuel", "image": "https://via.placeholder.com/100?text=19", "info": "Proud member of the 8A family!"},
    {"name": "Marley Samy", "image": "https://via.placeholder.com/100?text=20", "info": "Proud member of the 8A family!"},
    {"name": "Mariam Ashraf", "image": "https://via.placeholder.com/100?text=21", "info": "Proud member of the 8A family!"},
    {"name": "Menna Mahmoud", "image": "https://via.placeholder.com/100?text=22", "info": "Proud member of the 8A family!"},
    {"name": "Norai Mohamed", "image": "https://via.placeholder.com/100?text=23", "info": "Proud member of the 8A family!"},
    {"name": "Ahmed Hassan", "image": "https://via.placeholder.com/100?text=24", "info": "Proud member of the 8A family!"},
    {"name": "Osama Ahmed", "image": "https://via.placeholder.com/100?text=25", "info": "Proud member of the 8A family!"},
    {"name": "Eyad Ali", "image": "https://via.placeholder.com/100?text=26", "info": "Proud member of the 8A family!"},
    {"name": "Hazem Mohamed", "image": "https://via.placeholder.com/100?text=27", "info": "Proud member of the 8A family!"},
    {"name": "Sajed Sherif", "image": "https://via.placeholder.com/100?text=28", "info": "Proud member of the 8A family!"},
    {"name": "Omar Elsayed", "image": "https://via.placeholder.com/100?text=29", "info": "Proud member of the 8A family!"},
    {"name": "Malik Ahmed", "image": "https://via.placeholder.com/100?text=30", "info": "Proud member of the 8A family!"},
    {"name": "Mohamed Sameh", "image": "https://via.placeholder.com/100?text=31", "info": "Proud member of the 8A family!"},
    {"name": "Mohamed Abdelfatah", "image": "https://via.placeholder.com/100?text=31", "info": "Proud member of the 8A family!"},
    {"name": "Mahmoud Amr", "image": "https://via.placeholder.com/100?text=33", "info": "Proud member of the 8A family!"},
    {"name": "Yasen Fekry", "image": "https://via.placeholder.com/100?text=34", "info": "Proud member of the 8A family!"},
    {"name": "Jana Reda", "image": "https://via.placeholder.com/100?text=35", "info": "Proud member of the 8A family!"},
    {"name": "Jessica Mina", "image": "https://via.placeholder.com/100?text=36", "info": "Proud member of the 8A family!"},
    {"name": "Ritaj Mohamed", "image": "https://via.placeholder.com/100?text=37", "info": "Proud member of the 8A family!"},
    {"name": "Rital Waleed", "image": "https://via.placeholder.com/100?text=38", "info": "Proud member of the 8A family!"},
    {"name": "Sara Adel", "image": "https://via.placeholder.com/100?text=39", "info": "Proud member of the 8A family!"},
    {"name": "Sama Hossam", "image": "https://via.placeholder.com/100?text=40", "info": "Proud member of the 8A family!"},
    {"name": "Farah Ahmed", "image": "https://via.placeholder.com/100?text=41", "info": "Proud member of the 8A family!"},
    {"name": "Marley Remon", "image": "https://via.placeholder.com/100?text=42", "info": "Proud member of the 8A family!"},
    {"name": "Marley Michael", "image": "https://via.placeholder.com/100?text=43", "info": "Proud member of the 8A family!"},
    {"name": "Mrola Samuel", "image": "https://via.placeholder.com/100?text=44", "info": "Proud member of the 8A family!"}
]

# بيانات المدرسين
teachers = [
    {"name": "Ms. Iman Hassan", "subject": "Agriculture", "description": "Growing green thumbs! 🌱"},
    {"name": "Ms. Marwa Abdulaziz", "subject": "Economics", "description": "Master of money matters! 💰"},
    {"name": "Mr. Magdy Mahmoud", "subject": "Industry", "description": "Building future creators! 🔨"},
    {"name": "Mr. Mohamed Al-Saadi", "subject": "Mathematics", "description": "Math magician! ✨"},
    {"name": "Ms. Hanem Kamel", "subject": "Arabic & Religion", "description": "Language and soul explorer! 📚"},
    {"name": "Mr. Omar Hammad", "subject": "English", "description": "English adventure guide! 🗺️"},
    {"name": "Ms. Seham Shafik", "subject": "Arts", "description": "Creative expression coach! 🎨"},
    {"name": "Ms. Hanan Al-Sayed", "subject": "Science", "description": "Science discoverer! 🔬"},
    {"name": "Ms. Ola Zakaria", "subject": "Studies", "description": "Knowledge navigator! 🧭"},
    {"name": "Ms. Giovanna", "subject": "Christian Religion", "description": "Faith and values mentor! 🙏"},
    {"name": "Ms. Hanan Al-Sayed", "subject": "Entrepreneurship", "description": "Future business builder! 💼"},
    {"name": "Ms. Cecile Saad", "subject": "French", "description": "French language artist! 🇫🇷"},
    {"name": "Mr. Ahmed Samir", "subject": "German", "description": "German language expert! 🇩🇪"},
    {"name": "Ms. Hanan Mohamed Karim", "subject": "ICT", "description": "Tech wizard! 💻"}
]

# بيانات القادة
leaders = [
    {"name": "Ahmed Hassan El-Hadidi", "role": "Class President", "description": "The captain of our ship!"},
    {"name": "Sara Adel", "role": "Vice President", "description": "The awesome right hand!"},
    {"name": "Mohamed Abdulaziz", "role": "Science Whiz", "description": "Making science super cool!"},
    {"name": "Jasser Alsebai", "role": "Sports Star", "description": "Keeping us active and healthy!"},
    {"name": "Omar Khayal", "role": "Spirit Guide", "description": "Nourishing our hearts and souls!"},
    {"name": "Ziad Ayman", "role": "Creative Genius", "description": "Making every moment memorable!"}
]

# بيانات الجدول الدراسي
schedule = [
    {
        "day": "Sunday",
        "sessions": ["Activity 1", "Math", "Arabic", "English", "Break", "Arabic", "Art", "Science"]
    },
    {
        "day": "Monday", 
        "sessions": ["English", "Religion", "Arabic", "Entrepreneurship", "Break", "English", "French/German", "Science"]
    },
    {
        "day": "Tuesday",
        "sessions": ["Religion", "English", "English", "Math", "Break", "Social Studies", "Science", "Arabic"]
    },
    {
        "day": "Wednesday",
        "sessions": ["English", "French/German", "Science", "Social Studies", "Break", "Arabic", "ICT", "English"]
    },
    {
        "day": "Thursday",
        "sessions": ["English", "Activity 2", "Math", "English", "Break", "Arabic", "Arabic", "Social Studies"]
    }
]

@app.route('/')
def index():
    return render_template('index.html', 
                         students=students,
                         teachers=teachers, 
                         leaders=leaders,
                         schedule=schedule)

if __name__ == '__main__':
    app.run(debug=True)