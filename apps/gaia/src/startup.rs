// use crate::routes::health_check;
use crate::routes::health_check;

use actix_web::dev::Server;
use actix_web::{web, App, HttpServer};
use std::net::TcpListener;

pub struct Application {
    port: u16,
    server: Server,
}

impl Application {
    pub async fn build() -> Result<Self, anyhow::Error> {
        let address = format!("{}:{}", "127.0.0.1", "8080");
        let listener = TcpListener::bind(&address)?;
        let port = listener.local_addr().unwrap().port();
        let server = run(listener).await?;

        Ok(Self { port, server })
    }

    pub fn port(&self) -> u16 {
        self.port
    }

    pub async fn run_until_stopped(self) -> Result<(), std::io::Error> {
        self.server.await
    }
}

pub async fn run(listener: TcpListener) -> Result<Server, std::io::Error> {
    let server =
        HttpServer::new(move || App::new().route("/health_check", web::get().to(health_check)))
            .listen(listener)?
            .run();
    println!("Server started in http://localhost:8080");

    Ok(server)
}
