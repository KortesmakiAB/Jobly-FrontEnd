CSS/BootStrap/ReactStrap
Search.js
For either `<Label>` or `<Button>`, why does `className=mx-2` have a weird effect, but `className=mr-2` has no effect?

CompanyCard.js and RoutesComp.js
How can I get the image to move to the right?

RoutesComps.js & RoutesJobs.js
How could I reduce the duplication? each Component essentially runs the same `JoblyApi.func()` twice.

I'm getting this warning in the console.
I'm not sure where this is coming from, but my guess would be Routes.js. Maybe something to do with the way I am handling protected routes.
```
react_devtools_backend.js:2560 Warning: <Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render. 
    at Route (http://localhost:3000/static/js/vendors~main.chunk.js:41595:29)
    at Switch (http://localhost:3000/static/js/vendors~main.chunk.js:41797:29)
    at div
    at div
    at Routes (http://localhost:3000/static/js/main.chunk.js:3909:63)
    at div
    at Jobly (http://localhost:3000/static/js/main.chunk.js:423:89)
    at div
    at App
    at Router (http://localhost:3000/static/js/vendors~main.chunk.js:41230:30)
    at BrowserRouter (http://localhost:3000/static/js/vendors~main.chunk.js:40850:35)
```    