# Movie-DB

You can see a live version of this project [here](https://movie-db-psi.vercel.app/).

In this app, you can search for shows and they will render into beautiful cards. You can click on any of the card to go to the details page.

On the details page, you can see more info about the show, add it to a playlist or leave a review.

On the playlists page, you can see your playlists, delete them or add a new one.

If you click on any of the playlists, you can see a details page with all the shows added to that playlist.

The app was built with Next 10, React 17 with hooks, Redux (also with hooks) and Redux Saga.

For styles it uses Tailwind CSS.

For the API requests, it uses Axios.

## Available Scripts

In your console, first you need to clone the repository

### `git clone https://github.com/nachoiacovino/movie-db.git`

After that, you need install the dependencies with:

### `npm install`

Then, you can launch the server with:

### `npm run dev`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Summary questions

- What were the most difficult tasks?
  In the last part, in which I built the details playlist page, I had to reuse a function in my sagas and create a loop to create a new array on my store to have more info on each show in the playlist.

- Did you learn anything new while completing this assignment?
  Yes, I had used React with Redux and Redux Saga many times, but never in a Next.js app, so this was a nice first time. In the end, it was really similar, I enjoyed it a lot.

- What did you not have time to add? What work took the up majority of your time?
  Exhaustive testing, I believe testing is an important part of every project and it's good to test your app. The majority of my time was spent thinking about how to do the "Add to playlist" and the Playlist detail page, I had to plan it first before starting working on it.

- How could the application be improved?
  I would've loved to add more functionality. User auth with a database would be the first thing, then, there are lots that can be done. A profile page in which the user can see their lists and reviews, more info of the show on the detail page, etc.
