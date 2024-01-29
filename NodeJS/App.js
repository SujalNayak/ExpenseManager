const express = require("express");
const mongoose= require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 3002;
// app.use(cors());
app.use(cors({
  origin: 'https://stock-market-prediction-theta.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(express.json());

const userRoutes = require("./routes/UserRoutes");
app.use('/user', userRoutes);
const expenseRoutes = require("./routes/ExpenseRoutes");
app.use('/expense', expenseRoutes);
const expenseSubCatRoutes = require("./routes/ExpenseSubCatRoutes");
app.use('/expenseSubCat', expenseSubCatRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/ExpenseManager", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
}).then(()=>{
    console.log("Database Connected Successfully...");
}).catch((err)=>{
    console.log("error..",err);
})

app.get(/,(req,res)=>{
        console.log("app is working");
});

app.listen(PORT, () => {
    console.log("server started on port 3002...");
  });
