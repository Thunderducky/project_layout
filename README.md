# Thinking about Server Things

## MVC
### Model
    /config
    /db

### Controller
    /routes
    /controllers (Not featured in this project)
    server.js (for really small projects)

### Views (Browser centric)
    /public
        (where we use `app.use(express.static("public")`))

## Setup Phase Code
    Connect to the Database - Model - /config/db
    Load all of our environment variables
        .env
    Register all of our routes - Controller
        Static
        HTML
        API
    Listen

## Operation Phase Code
    Request comes in
        -> any middle ware we have gets a hold of it
        -> routed to the correct handler
        -> The Request is handled (often with a trip to the db)
        -> and a response is returned

## Debugging
    WHERE in the process is something breaking
        Is something wrong about the request?
            Does it have the correct URL and method?
            Does it have all the parameters/body that it needs
        Is there an error in our routing?
            Typos
        Is there an error in our handler?
            Do we have a logical error, can I make a test case
            or use postman to test this out without a front-end
        Is there an error in our DB
            Is there a problem with the schema
            Is there a typo?
            Do we not have a place for this information
        