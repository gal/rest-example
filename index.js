import express from "express";
import Model, {exists} from "./model";

const app = express();
const port = 3000;

app.use("/static", express.static("public"));
/* 
app.get("/api", (request, response) => {
    response.json(model)
}); */

app.get("/user/:name", (request, response) => {
    response.json(new Model(request.params.name))
});

app.get("/search/:name", (request, response) => {
    if (exists(request.params.name)) {
        response.json(new Model(request.params.name))
        }
    else{
        response.sendStatus(404)
        return
    
    }

});

app.listen(port, () => console.log(`Started on port ${port}`));
