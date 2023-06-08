// Import dependencies
import express from 'express'
import mongoose from 'mongoose';
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Create Express app
const app = express()
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://sbaramesi:Database_Pass@enkeltjezelfstandigclus.iktaxmi.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


// UserSchema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    }
});
const User = mongoose.model('User', userSchema);
export { User };

// CourseSchema
const courseSchema = new mongoose.Schema({
    name: String,
    imageName: String,
    writtenBy: String,
    dateMade: String,
    title1: String,
    desc1: String,
    title2: String,
    desc2: String,
    ingredient1: String,
    ingredient2: String,
    ingredient3: String,
    desc3: String,
    title3: String,
    desc4: String,
    step1: String,
    step2: String,
    step3: String,
    desc5: String,
});

const Course = mongoose.model('Course', courseSchema);
export { Course };

// Route for user login

app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (user) {

            const result = await bcrypt.compare(req.body.password, user.password);
            if (result) {

                const SECRET = 'liljoojoo';
                const token = await jwt.sign({ username: user.username }, SECRET);
                res.json({ token });

            } else {

                res.status(400).json({ error: "Password doesnt match" });
            }
        } else {

            res.status(400).json({ error: "User doesnt exist" });
        }
    } catch (error) {

        res.status(400).json(console.error(error));
    }
});


app.get('/fetch-courses', async (req, res) => {
    try {
        const course = await Course.find({});
        if (course.length === 0) {
            return res.status(404).send('No Courses could be found')
        }
        res.send(course);
    } catch (error) {
        res.status(400).json(console.error(error));
        console.log('error fetching courses from database')
    }
})

app.get('/fetch-course/:_id', async (req, res) => {
    try {
        const courseId = req.params._id;
        const course = await Course.findById(courseId);
        if (course.length === 0) {
            return res.status(404).send('No Courses could be found')
        }
        res.send(course);
    } catch (error) {
        res.status(400).json(console.error(error));
        console.log('error fetching courses from database')
    }
})

app.get('/latest-courses', async (req, res) => {
    try {
        // Retrieve the latest three documents based on the creation timestamp
        const latestCourses = await Course.find()
            .sort({ createdAt: -1 }) // Sort by descending order of createdAt
            .limit(3); // Limit the results to three documents

        // Send the latest documents as the response
        res.json(latestCourses);
    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.delete('/del-course/:_id', async (req, res) => {
    try {
        const courseId = req.params._id;
        console.log(courseId);

        // Find and delete the todo item by ID
        const deletedCourse = await Course.findByIdAndDelete(courseId);

        if (!deletedCourse) {
            return res.status(404).json({ error: 'Course not found' });
        }

        return res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
});


app.post('/add-course', (req, res) => {
    // Create a new Todo instance based on the req.body data
    console.log(req.body)

    const newCourse = new Course({
        name: req.body.name,
        imageName: req.body.imageName,
        writtenBy: "",
        dateMade: "",
        title1: "",
        desc1: "",
        title2: "",
        desc2: "",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        desc3: "",
        title3: "",
        desc4: "",
        step1: "",
        step2: "",
        step3: "",
        desc5: "",
    });

    newCourse.save().then(() => {
        // Send a response to the client
        res.send(newCourse);
    }).catch(err => {
        // Send an error response to the client
        res.status(500).send(err.message);
    });
});

app.put('/save-course/:_id', async (req, res) => {

    const courseId = req.params._id;
    const updatedCourse = req.body;

    console.log(courseId)
    console.log(updatedCourse)

    const isSuccess = await Course.findByIdAndUpdate(courseId, updatedCourse);

    if (isSuccess) {
        res.json({ message: 'Course updated successfully' });
    } else {
        res.status(500).json({ message: 'Failed to update course' });
    }
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000')
})