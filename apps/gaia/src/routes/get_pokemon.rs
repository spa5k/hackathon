use actix_web::HttpResponse;

pub async fn get_pokemon() -> HttpResponse {
    HttpResponse::Ok().body("PL")
}

