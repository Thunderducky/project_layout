Model
    /config
    /db

Controller
    /routes
    /controllers (Not featured in this project)
    server.js (for really small projects)

Views (Browser centric)
    /public
        (where we use `app.use(express.static("public")`))

Setup Phase Code
    Connect to the Database - Model - /config/db
    Load all of our environment variables
        .env
    Register all of our routes - Controller
        Static
        HTML
        API
    Listen

Operation Phase Code