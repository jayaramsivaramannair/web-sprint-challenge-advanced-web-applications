# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.
`A token is used for verification and authentication of a user. Token allows a user to fetch a specific / protected resource without repeatedly using their username and password`
`Fetching a token usually grants access to a user for a specific time period.`

2. What steps can you take in your web apps to keep your data secure?
`The data on the web apps can be kept secure by putting them behind a Private Route. This private route ensures that the user is allowed access to the protected resource only if he/she is validated using the authorized token. If the user does not provide a valid token while accessing a resource, the user is then denied access to the resource.`

3. Describe how web servers work.
`A web server is a computer which stores all the code and data for serving up a website or an app.`
`The web server sends the data pertaining to an app or website when it receives a request from a browser on the user's computer.`
`The browser connects the user's computer to the server by using an IP address. This IP address is obtained by translating the domain name.`

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
`CRUD acronym stands for Create, Read, Update and Delete`.
`The 'get' method can be used to read / access resources located on a server and it can be mapped to the 'R' in CRUD acronym`
`The 'post' method can be used to create new data / resources on a server and it can be mapped to the 'C' in CRUD acronym`
`The 'put' method can be used to update / change an existing resource on the server and it can be mapped to the 'U' in CRUD acryonym`
`The 'delete' method can be used to delete a resource on the server and it can be mapped to the 'D' in CRUD acronym`