This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

# Features

This project uses **ReactJS** to create a NewsFeed template UI.

It uses **Redux** as a state management library.

The main page shows a list of posts fetched from a dummy API, each post shows at least 1 comment ( if it has comments ), and also has a CTA to show all the available comments for each individual post.

The comments shown are the ones related to each specific post.

Every post also has a *new comment* form, which to add a comment for a specific post. The new comment is stored in the state using a reducer and it's respective actions.

Since there's no login yet, new comments have their names and email hardcoded, but the comment content is set dynamically by the *new comment* form.

Bootstrap / ReactStrap were used to achieve full responsiveness, along with some custom styles created with SASS and compiled with node-sass.

# Dependencies

- **redux**
- **react-redux**
- **redux-toolkit**
- **react-router-dom**
- **bootstrap**
- **reactstrap**
- **node-sass**

*Once cloned, run `npm install` in order to install all the dependencies listed above* 

# What could be added to this project?

Since the project is based on a Newsfeed concept, it's todo's list could be as follows:

- Add a login.
- Add a user profile section.
- Allow to follow and get followers.
- Add some kind of gamification to the app, maybe based on followers, starts, reactions and sort of.
- Add categories to the posts, in order to create a layout with sections like *"featured posts"*, *"most recent"*, *"highlights"*, etc.
- Create a component to search / filter posts by keywords.
- Create the post-detail view.
- Allow the user to add some post to a *"read later"* section.
- Add reactions to the post and comments.
- Create a mobile app of the project, maybe a PWA.
- Create a more user-friendly design for the app, with a better User Experience.

# Adittional comments

- I had a lot of fun developing this project, some time had passed since the last time i used redux on a project and there was many things to update about it. 
- I'm a fan of React JS, so i like to put my knowledge about it to the test every time its possible.
- Wheter the result of this challenge are, i would like to recieve feedback if it's possible about this project, in order to upgrade my skills an became a better developer.

> Thanks a lot for your attention!