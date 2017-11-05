# README
Welcome to Kelp!

This app is a clone of Yelp for users to create, read, update, and delete reviews. 
The technologies used are primarily Ruby on Rails for the back-end and React.js/Redux for the front-end.

I'd like to talk about two features in which I felt like I was venturing into new territory. These were the search and filter features for the business index page. 

The search was done using pg_search gem, which I incorporated into my index action in the business controller to filter out results by the business name. In my ```SearchForm```, I had the ```update``` run with every input from the user, removing the necessity for submitting the form. I passed the user input to the ```BusinessesController``` as params, and then filtered those that do not match any names in the business names column in the backend. 

The filtering was completed in much the same way, with the filtering done in the backend after the params were passed in. However, the challenge in this aspect of the project was that my ```businesses``` and ```detailed_infos``` tables were separate. The ```detailed_infos``` table had the columns to filter the businesses by, as well as the foreign key pointing to the proper business in the ```businesses``` table. The solution was to join the detailed info for each corresponding business and then filter out those businesses which do not match the params criteria. I felt this aspect was worth noting because, although it did not require a complex coding solution, it was a good exercise for me to reinforce my Active Record knowledge.

``` 
update(filter) {
    return e => {
      if (filter === 'name') {
        return this.props.props.updateFiltering(filter, e.currentTarget.value);
      } else {
        if (e.currentTarget.checked) {
            return this.props.props.updateFiltering(filter, true);
        } else {
           return this.props.props.updateFiltering(filter, false);
        }
    }
  };
  }
  ```
  In order to make sure I followed good practice, I tried to keep my code as DRY as possible. I feel the above code is a good example. The filters were packaged together but the input type (text) was different for the search bar than the other filters (checkboxes). 
  
 As I get closer to the end of my project, there are a few aspects I will continue working on. I want to create user profiles to allow more user interactivity. The user profiles should feature all the user's reviews, their photo, and the ability to receive compliments. I'd also like to add the aggregation aspect to reviews, that update the rating for a business based on the average of all the user reviews. The reviews should also be limited to one per business per user. I would also like to add some features to the map, including bounds, an index to correspond businesses with markers, and an info box which opens when the map marker is clicked.
 
