
# Wrong Opinion Blog

---

## Table of Contents

- [Project Description](#project-description)
- [How to run this project](#how-to-run-this-project)
- [How to use this project](#how-to-use-this-project)
- [Credits](#credits)
- [License](#license)

## Project Description

The Wrong Opinion Blog is a demo blog site that lets users share posts with others. It includes login functionality with password encryption. Users can view, create, and delete their own posts from the dashboard or view posts written by other users on the home page.

## How to run this project

Click on the following image to visit the site:

[![Wrong Opinion Blog - demo](</public/assets/images/wrong opinion blog - demo image.png>)](https://wrong-opinion-blog-7a019de71561.herokuapp.com/)

Make sure Node.js is installed on your device. You can open the command terminal and enter "node -v" to check if node is installed. If the command terminal responds back with a version of Node, then it is installed. Otherwise, go to https://nodejs.org/en/download/ and download the LTS version of Node for the appropriate OS that you are using (Windows, Mac, Linux, etc.).

Open the command terminal. Enter "npm run seed" to refresh the tables in the database with their default data. Then enter "npm start" to initiate the program.

## How to use this project

After initiating the program, you can open a browser and navigate to the home page from localhost:3001. From here, you can use the navbar at the top to revisit the home page, login / sign up, or manage your own posts via the dashboard if you are already logged in. If the dashboard link is clicked while you are not logged in, you will be redirected to the login page.

### Home page

On the home page, a guest or user can view all posts created by site users. Click on a post title to view more details about the post, including the title, content, creator's username, and date created.

### Login

On the login page, you will see a form to input your email and password. After entering this information, you can click the "login" button to have the site verify your login information and compare it to the authentication data stored on the server. If login is successful, you will be redirected to the dashboard page. If not, then an alert will show that your login information is incorrect.

### Sign up

If you do not have an account, you can use the sign up section of the login page to create a new account by inputting a username, email, and password.* After entering this information, you can click the sign up button to create the account and you will be redirected to the dashboard page.

*The email must be different from any other accounts made on the site.

### Dashboard

On the dashboard page, you can view all of your previously created posts. Only logged in users can access the dashboard to create or delete their own posts.

#### New post

At the top of the dashboard, you can use the "New Post" form to create a new post. Users must enter a title and content in their respective fields, then click on the submit button to create a new post.

#### Delete post

Below the "New Post" form, a list of your own posts is displayed. Unlike the home page, users will have access to the delete post button below each post to delete any posts that they have created. Clicking the delete post button will remove the post from the user's dashboard and refresh the page, showing an updated list of their created posts.

## Credits

Tyler Odo

## License

Default