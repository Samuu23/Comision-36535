from fastapi import FastAPI

app = FastAPI()

movies = [
        { "id": 1, "title": "Doctor Strange (2017)"}, 
        { "id": 2, "title": "Avengers: Age of Ultron (2015)"},
        { "id": 3, "title": "Spiderman: No Way Home (2021)"},
        { "id": 4, "title": "Spiderman (2002)" }
        ]

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/movies")
async def get_movies():
    return movies

@app.get("/movies/{movie_id}")
async def get_movie(movie_id: int): 
    if movie_id > len(movies) or movie_id < 1:
        return {"Error": "Movie not found"}

    return {"Movie": movies[movie_id - 1]}

# Ejemplo user
# Debo utilizar mis rutas en orden sino se presentaran fallas en el funcionamiento
# @app.get("/user/me")
# async def read_user_me():
#     return { "user_id": "The current user" }
# 
# @app.get("/user/{user_id}")
# async def read_user(user_id: str):
#     return { "user_id": user_id }

# Prueba Post
@app.post("/movies")
async def post_movie(movie_title: str):
    movies.append({"id": (len(movies) + 1), "title": movie_title})
    print(len(movies) - 1)
    return{"Message": "Movie added", "Movie": movies[len(movies) - 1]}
