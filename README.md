# MessageMe
A messaging app that allows users to create chatrooms that they can invite other users on the app to join, and then from there they exchange messages with the users in the room.

## Features
### Login Page
The login page has two buttons, one for logging into the app using a Google Account, and one for logging into the app using a Facebook account. When one of the buttons is clicked a small window pops up that requests login information for the respective service. If a user is already logged into the service on the browser they are accessing MessageMe from, then the service might automatically log them in without requiring them to enter any information. You cannot use the same email to sign in through both Google and Facebook, as Firebase considers this to be the same account, and wants you to use that email for only one of the sign in options. As a side note, the account provided at login, is where the user's email and profile picture is collected from.

### Loading Page
The loading page is a simple dark blue screen with a white circular loading graphic. The user is directed to the loading page right after they enter their login credentials, and the app is loading the home page. The loading page also appears whenever the user refreshes the page, and the page needs to reload resources. The purpose of the loading page is to indicate that the app is still responsive but just working on loading their information, after they attempt to login. Some users, with faster internet connections, may not even see the loading page at any point during their interaction with the app.

### Home Page
#### Header
The header has a logo in the center that displays the name "MessageMe" and a logout icon on the left. When the logout icon is pressed, the user is logged out and brought back to the authentication page. 

#### User's Chats
This section starts with a header that reads "My Chats" and to the right of that is a blue icon with a white plus symbol that, when clicked, creates a new chat. All of the user's current chats are displayed below this, with the most recent chat on top, and the oldest chat on the bottom. Each chat is displayed with the name of the chat, A preview of the most recent message sent, and the date of the most recent message in the chat. When these one of these chat previews are clicked, that chat is opened in the chat window. If one of the chats has a message that the user has not read, there will be a little blue circle on the chat to notify the user so.

#### Chat Window
The top of the chat window has a section that has the name of the chat, and right below that is the date and time of the most recent activity. Above a group of new messages is the date and time of the first message. If a message is sent by the logged in user it will appear as blue. If a message, or consecutive group of messages is sent by a user other than the logged in user, above will be the user's email, to the left will be the user's profile picture, and the chats themselves will be gray. Below the most recent chat will be small profile pictures of the users who have seen the chat. If the logged in user is in the chat while another user is typing a message, there will be an indicator that the user is typing. On the bottom of the chat window is the input field that the user can type their message into, and below that are chat options such as bolding or italicizing text and attatching files to a message. There is also a submit icon that can be used to send the message, or a user could also press the enter key to send their message.

#### Chat Information
The chat information shows the profile pictures of some of the chat members at the top, with the name of the chat right underneath. Below that is the "People" dropdown that, when clicked, lists all of the members of the chat with a green circle indicator next to the users that are online, and a red circle indicator next to those that are offline. If the signed in user created the chat then there will also be a search bar that can be used to search users on the platform to add them to the chat, and there will also be small delete icons next the users to remove them from the chat. Below this is the "Photos" section that is designed to show all files that have been sent in the chat, but is labeled photos as that tends to be the main type of file that is send through chat messages. If the logged in user made the chat there will also be an "Options" section that, when clicked, gives the user the option to delete the chat.

## Technologies
The frontend of the application was build using the React framework, the user authentication is handled using Firebase, the backend of the app uses the React Chat Engine API, the currently logged in user is tracked using the React Context API, and the entire application is deployed to the cloud using Heroku.

## How do I start messaging?
You can access the application using this url: https://message-me-heroku.herokuapp.com/

If you would like to see what the app looks like for a user who has existing chats, you can use the demo Google login `messagemedemo@gmail.com` which has a password of `!1234abcd!`, or you could use the demo Facebook login which is `messagemedemofb@gmail.com` and the password is `!1234abcd!`. The Google demo user's chats contain more detailed information about using the app.

You are also able to sign in using your own personal Google or Facebook account.
