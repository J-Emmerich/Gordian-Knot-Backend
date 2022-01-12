# Gordian Backend

This is the back end of Gordian-Knot WebApp. 
Gordian Knot is a ERP-CRM for small-business that is still on prototype stage. 
-
#
1. You can save invoices and download as PDF 
2. A client/CRM database where to save contracts and other client-related files and data #todo
3. Bug tracker for TechBusiness
4. A drag-and-drop to-do list for inside organization.
5. Any user can have any amount of projects users can invite other to their project and share files/data. #todo

#
The backend is built in Node.js, it uses Puppetter for the pdf rendering, Express for the server/routing. MongoDB and Mongoose for the data. Authentication with JWT. Is built with clean-architecture in mind. I'm working now to make it more stable and secure, get a good log system and gracefully deal with errors.
 