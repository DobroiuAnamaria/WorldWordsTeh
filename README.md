# WorldWordsTeh

WorldWordsTeh Documentations
1)Introduction
WorldWordsTeh is a web application that is a mini mental game. In this game the user must guess how many words he or she can in order to achieve badges and a higher place in the ranking. To make this game a bit harder a round takes only 60 seconds and the user must guess the word. In order to guess the word the game gives the user a description about the word. The words in the game can be easy like happy, wet, etc or more challenging. 
2)Technologies 
Backend 
	The backend of WorldWordsTeh is made with ASP.NET Core Web API. 
The backend contains:
	Swagger integration – is used to test the endpoints. 
	View Models – is used to not bring all entities on frontend.
	Migrations – is used to show the modifications made on the database.
	Loggers – is used to make custom prints in order to see some particular errors.
	Mapping profile – is used to mapping object from entity to view model, and vice-versa.
	Controllers – is used to connect the backend part with the frontend.
	Entity Framework (EF) – is used to create the database and store/access element from it. 

Frontend
The frontend of WorldWordsTeh is made using Angular materials(HTML, TypeScript, CSS, SAS). It uses services in order to execute operation on an object and send the modification to the backend.



3)Functionalities 
Register Page
 
In order to enter the game for the user needs to register with the name, email and a password.



![image](https://user-images.githubusercontent.com/74797999/231413793-ee833157-2859-4d66-b42d-fe1a62697e6b.png)




Login Page
![image](https://user-images.githubusercontent.com/74797999/231413868-20e0664e-33b1-4847-a870-4eea809ca78b.png)


 

If the user already register, she or he can login using the email and password.







Home Page
 
 ![image](https://user-images.githubusercontent.com/74797999/231413940-88dfac4b-3db8-40e3-8f44-4a40df533416.png)

After the register/login the user is redirection at the home page where he or she can go to the profile page, dashboard which contains the ranking or the game.










The Ranking
 ![image](https://user-images.githubusercontent.com/74797999/231413996-c0f7d330-999a-4e4a-8648-8b3fb55b892e.png)

In this page is showed the ranking of all the users that played the game.












Profile Page
![image](https://user-images.githubusercontent.com/74797999/231414052-a805efb5-194c-4af8-8d23-4082f6da0468.png)

 
In the profile page are shown the name, email address, accumulated points and the badge of the user. The more points a user has, the more badges she or he has.








The game page
 ![image](https://user-images.githubusercontent.com/74797999/231414120-475fe082-5f51-47d4-adbe-f5f5da620934.png)

Here is the game page, where the challenge begins. The user must type the word and if it is correct the description text will change. All games takes only 60 minutes.  

