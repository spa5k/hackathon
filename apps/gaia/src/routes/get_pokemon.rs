use actix_web::{get, web, HttpResponse};

use crate::models::pokemon::Pokemon;

// pub async fn get_pokemon(current_pokemon: String) -> HttpResponse {
//     let request_url = format("https://pokeapi.co/api/v2/pokemon/{current_pokemon}");
//     let data = reqwest::get(url).await?;
//     println!("data,{:?}", data);
// }

// <- define path parameters
#[get("/pokemon/{pokemon}")] // <- define path parameters
pub async fn get_pokemon(path: web::Path<String>) -> HttpResponse
{
	let current_pokemon = path.into_inner();
	let request_url = format!("https://pokeapi.co/api/v2/pokemon/{}", current_pokemon);
	let data = reqwest::get(request_url).await;
	match data {
		Ok(d) => {
			let json_data = d.json::<Pokemon>().await;
			match json_data {
				Ok(e) => HttpResponse::Ok().json(e),
				Err(_) => HttpResponse::Forbidden().body("Some Error Happened"),
			}
		}
		Err(_) => HttpResponse::NoContent().body("NOT FOUND"),
	}
}
