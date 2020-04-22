// $("#chirp-submit").click(function(){
//     const author = $("#author").val();
    
// })
function loadChirps(){
    $.get("/api/chirps").then(results => {
        console.log(results);
        const chirps = results.map(chirp => {
            return $(`
                <div>
                    <p>${chirp.author}</p>
                    <p>${chirp.body}</p>
                    <p>${chirp.created_at}</p>
                </div>
            `)
        })
        $("#chirp-area").html(chirps);
    });
}
$("#chirp-submit").on("click", function(){
    const body = {
        author: $("#author").val(),
        body: $("#chirp-box").val(),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    }
    $.post("/api/chirps", body).then(results => {
        loadChirps()
    });
})

loadChirps();