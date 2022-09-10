use std::fmt::format;

use actix_web::{get, HttpResponse, web};

// pub async fn get_pokemon(current_pokemon: String) -> HttpResponse {
//     let request_url = format("https://pokeapi.co/api/v2/pokemon/{current_pokemon}");
//     let data = reqwest::get(url).await?;
//     println!("data,{:?}", data);
// }

#[get("/{pokemon}")] // <- define path parameters
async fn get_pokemon(path: web::Path<(String)>) -> Result<String, anyhow::Error> {
    let (current_pokemon) = path.into_inner();
    let request_url = format("https://pokeapi.co/api/v2/pokemon/{current_pokemon}");
    let data = reqwest::get(request_url).await?;
    println!("data,{:?}", data);
    Ok(format!("Welcome {}, user_id {}!", friend, user_id))
}
