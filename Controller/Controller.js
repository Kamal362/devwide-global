const sendEmail = require('../Utilities/Send_email');
const data = require('../Model/data')


const getHomePage = (req, res) => {
    res.render('home', { title: 'HomePage' });
}

const postFormData = (req, res) => {
    const { name, email, message } = req.body;

    console.log(`Form data: Name: ${name}, Email: ${email}, Message: ${message}`);
    sendEmail.sendEmail(name, email, message);
    res.redirect('/');
}

const getAboutPage = (req, res) => {
    
    res.render('about');
}

const getProjectsPage = async (req, res) => {
    const projects = await data.openSourceProjects;
    res.render('projects', { projects });
}

const getContactPage = (req, res) => {
    res.render('contact');
}

module.exports = {
    getHomePage,
    postFormData,
    getAboutPage,
    getProjectsPage,
    getContactPage
   
}
