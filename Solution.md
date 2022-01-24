## Routes

1. Install `react-router` and `react-router-dom` to your react app.

```javascript
npm install react-router react-router-dom
```

2. In `index.js` import `BrowserRouter` from `react-router-dom` and wrap `App` with `BrowserRouter`.

```javascript
import { BrowserRouter } from 'react-router-dom';
```

```javascript
<BrowserRouter>
  <App />
</BrowserRouter>
```

3. Import `Route` and `Routes` from `react-router`.

```javascript
import { Routes, Route } from 'react-router';
```

4. In `App.js` Wrap each component with `Route` and add its `path` except the `Nav`.

```javascript
function App() {
  return (
    <div id="page-top">
      <Nav />
      <Route path="/" element={<Home />} />
      <Route path="/trips" element={<TripsList />} />
      <Route path="/detail" element={<TripDetail />} />
    </div>
  );
}
```

5. Wrap all your routes in `Routes`.

```javascript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/trips" element={<TripsList />} />
  <Route path="/details" element={<TripDetail />} />
</Routes>
```

6. Reorganise your routes so the longest paths comes first.

```javascript
<Routes>
  <Route path="/details" element={<TripDetail />} />
  <Route path="/trips" element={<TripsList />} />
  <Route path="/" element={<Home />} />
</Routes>
```

## Navbar Links

1. In `Nav.js` import `NavLink` from `react-router-dom`.

```javascript
import { NavLink } from 'react-router-dom';
```

2. Replace `<a>` tags with `<Link>` tags from react router dom and replace `href` with `to` so that `Home` shows you the `Home.js` component and `Trips` takes you to `TripsList` component.

```javascript
<a className="nav-link py-3 px-0 px-lg-3 rounded" href="#">
  Home
</a>
```

To:

```javascript
<NavLink className="nav-link py-3 px-0 px-lg-3 rounded" to="/">
  Home
</NavLink>
```

And:

```javascript
<a className="nav-link py-3 px-0 px-lg-3 rounded" href="#">
  Trips
</a>
```

To:

```javascript
<NavLink className="nav-link py-3 px-0 px-lg-3 rounded" to="/trips">
  Trips
</NavLink>
```

3. Add a style that if the page is active the link becomes underlined.

```javascript
<NavLink
  style={({ isActive }) =>
    isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' }
  }
  to="/"
>
  {' '}
  Home{' '}
</NavLink>
```

```javascript
<NavLink
  style={({ isActive }) =>
    isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' }
  }
  to="/trips"
>
  {' '}
  Trips{' '}
</NavLink>
```

## Trip Details

1. In `TripItem.js` import `<Link>` again and wrap your whole `div` with it so it takes you to `tripDetail` component.

```javascript
import { Link } from 'react-router-dom';

function TripItem({ trip }) {
  return (
      <div className="col-md-6 col-lg-4 mb-5">
      <Link to="/details">
      ...
      </Link>
      </div>
  )
export default TripItem;
```

2. in `app.js` details route `/details`, add a route param called `tripId`.

```javascript
<Route path="/details/:tripId" element={<TripDetail />} />
```

3. Back to `TripItem.js` change the link to the `tripDetail` page to include the `tripId`.

```javascript
      <Link to={`/details/${trip.id}`}>
```

4. In `TripDetail.js` import `useParams` from `react-router-dom`.

```javascript
import { useParams } from 'react-router-dom';
```

5. Extract the `tripId` coming from the url and store it in a variable called `tripId`.

```javascript
const tripId = useParams().tripId;
```

6. Find the correct trip from the trips data file.

```javascript
const trip = tripsData.find((trip) => trip.id.toString() === tripId);
```

7. Import `Navigate` from `react-router-dom` and if the trip isn't found redirect the user to the home page.

```javascript
import { useParams, Navigate } from 'react-router-dom';
```

```javascript
const trip = tripsData.find((trip) => trip.id.toString() === tripId);
if (!trip) {
  return <Navigate to="/" />;
}
```

8. Switch from using ids to using slugs.

In `App.js`:

```javascript
<Route path="/details/:tripSlug" element={<TripDetail />} />
```

In `TripItem.js`:

```javascript
      <Link to={`/details/${trip.slug}`}>
```

In `TripDetail.js`:

```javascript
const tripSlug = useParams().tripSlug;
const trip = tripsData.find((trip) => trip.slug === tripSlug);
```

## Challenge

You have 3 buttons: easy, moderate and hard. when a button is clicked, filter the trips according to difficulty by changing the url, for example http://www.localhost:8000/trips?difficulty=easy

1. For this challenge, we will learn about a new hook with react router v6 called `useSearchParams`.

2. In `TripsList.js` import `useSearchParams` from `react-router-dom`.

```javascript
import { useSearchParams } from 'react-router-dom';
```

3. `useSearchParams` hook works just like the `useState` hook.

```javascript
let [searchParams, setSearchParams] = useSearchParams();
```

4. We read our search params from the first argument and we change it using the second argument, just like `useState`!

5. Lets assign a default value to our search param hook, the param is an object of a `key` and a `value`, the `key` represents the field that we want to search in, and the `value` represents the value that we want to look for.

6. The field we want to filter according to is the `difficulty` field so let's set our inital state.

```javascript
let [searchParams, setSearchParams] = useSearchParams({ difficulty: '' });
```

7. Now we want to change the `searchParams` value using our buttons. Add an `onClick` property to each button and call `setSearchParams` with the value of that button.

```javascript
          <button
            className="btn btn-primary btn-xl"
            onClick={() => setSearchParams({ difficulty: 'easy' })}
          >
            Easy
          </button>
          <button
            className="btn btn-primary btn-xl"
            onClick={() => setSearchParams({ difficulty: 'moderate' })}
          >
            Moderate
          </button>
          <button
            className="btn btn-primary btn-xl"
            onClick={() => setSearchParams({ difficulty: 'hard' })}
          >
            Hard
          </button>
```

8. The last thing we need to do is to filter the results according to the value of `searchParams`, to get the value of a certain key we use the `get` method of `searchParams`.

```javascript
searchParams.get('difficulty');
```

9. Filter the results:

```javascript
const trips = tripsData
  .filter(
    (trip) =>
      trip.name.toLowerCase().includes(query.toLowerCase()) &&
      trip.difficulty.includes(searchParams.get('difficulty'))
  )
  .map((trip) => <TripItem trip={trip} />);
```
