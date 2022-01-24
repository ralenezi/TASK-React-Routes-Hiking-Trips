## Hiking Trips - Routes

## Routes

1. Install `react-router-dom` to your react app.

```javascript
npm install react-router react-router-dom
```

2. In `index.js` import `BrowserRouter` from `react-router-dom` and wrap `App` with `BrowserRouter`.

3. Import `Route` and `Routes` from `react-router-dom`.

4. In `App.js` Wrap each component with `Route` and add its `path`.

5. Wrap all your routes in `Routes`.

6. Reorganise your routes so the longest paths comes first.

## Navbar links

1. In `Nav.js` import `Link` from `react-router-dom`.

2. Replace `<a>` tags with `<Link>` tags from react router dom and replace `href` with `to` so that `Home` shows you the `Home.js` component and `Trips` takes you to `TripsList` component.

## Trip Details

1. In `TripItem.js` import `<Link>` again and wrap your whole `tripItem` with it so it takes you to `tripDetail` component.
2. in `app.js` details route `/details`, add a route param called `tripId`.
3. Back to `TripItem.js` change the link to the `tripDetail` page to include the `tripId`.
4. In `TripDetail.js` import `useParams` from `react-router-dom`.
5. Extract the `tripId` coming from the url and store it in a variable called `tripId`.
6. Find the correct trip from the trips data file.
7. Import `Navigate` from `react-router-dom` and if the trip isn't found redirect the user to the home page.
8. Switch from using ids to using slugs.

## Challenge

1. You have 3 buttons: easy, moderate and hard. when a button is clicked, filter the trips according to difficulty by changing the url, for example http://www.localhost:8000/trips?difficulty=easy
