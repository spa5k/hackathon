// Example code that deserializes and serializes the model.
// extern crate serde;
// #[macro_use]
// extern crate serde_derive;
// extern crate serde_json;
//
// use generated_module::[object Object];
//
// fn main() {
//     let json = r#"{"answer": 42}"#;
//     let model: [object Object] = serde_json::from_str(&json).unwrap();
// }

use std::collections::HashMap;

use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Pokemon
{
	#[serde(rename = "abilities")]
	pub abilities: Option<Vec<Ability>>,

	#[serde(rename = "base_experience")]
	pub base_experience: Option<i64>,

	#[serde(rename = "forms")]
	pub forms: Option<Vec<Species>>,

	#[serde(rename = "game_indices")]
	pub game_indices: Option<Vec<GameIndex>>,

	#[serde(rename = "height")]
	pub height: Option<i64>,

	#[serde(rename = "held_items")]
	pub held_items: Option<Vec<Option<serde_json::Value>>>,

	#[serde(rename = "id")]
	pub id: Option<i64>,

	#[serde(rename = "is_default")]
	pub is_default: Option<bool>,

	#[serde(rename = "location_area_encounters")]
	pub location_area_encounters: Option<String>,

	#[serde(rename = "moves")]
	pub moves: Option<Vec<Move>>,

	#[serde(rename = "name")]
	pub name: Option<String>,

	#[serde(rename = "order")]
	pub order: Option<i64>,

	#[serde(rename = "past_types")]
	pub past_types: Option<Vec<Option<serde_json::Value>>>,

	#[serde(rename = "species")]
	pub species: Option<Species>,

	#[serde(rename = "sprites")]
	pub sprites: Box<Option<Sprites>>,

	#[serde(rename = "stats")]
	pub stats: Option<Vec<Stat>>,

	#[serde(rename = "types")]
	pub types: Option<Vec<Type>>,

	#[serde(rename = "weight")]
	pub weight: Option<i64>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Ability
{
	#[serde(rename = "ability")]
	pub ability: Option<Species>,

	#[serde(rename = "is_hidden")]
	pub is_hidden: Option<bool>,

	#[serde(rename = "slot")]
	pub slot: Option<i64>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Species
{
	#[serde(rename = "name")]
	pub name: Option<String>,

	#[serde(rename = "url")]
	pub url: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct GameIndex
{
	#[serde(rename = "game_index")]
	pub game_index: Option<i64>,

	#[serde(rename = "version")]
	pub version: Option<Species>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Move
{
	#[serde(rename = "move")]
	pub move_move: Option<Species>,

	#[serde(rename = "version_group_details")]
	pub version_group_details: Option<Vec<VersionGroupDetail>>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct VersionGroupDetail
{
	#[serde(rename = "level_learned_at")]
	pub level_learned_at: Option<i64>,

	#[serde(rename = "move_learn_method")]
	pub move_learn_method: Option<Species>,

	#[serde(rename = "version_group")]
	pub version_group: Option<Species>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct GenerationV
{
	#[serde(rename = "black-white")]
	pub black_white: Box<Option<Sprites>>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct GenerationIv
{
	#[serde(rename = "diamond-pearl")]
	pub diamond_pearl: Box<Option<Sprites>>,

	#[serde(rename = "heartgold-soulsilver")]
	pub heartgold_soulsilver: Box<Option<Sprites>>,

	#[serde(rename = "platinum")]
	pub platinum: Box<Option<Sprites>>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Versions
{
	#[serde(rename = "generation-i")]
	pub generation_i: Option<GenerationI>,

	#[serde(rename = "generation-ii")]
	pub generation_ii: Option<GenerationIi>,

	#[serde(rename = "generation-iii")]
	pub generation_iii: Option<GenerationIii>,

	#[serde(rename = "generation-iv")]
	pub generation_iv: Option<GenerationIv>,

	#[serde(rename = "generation-v")]
	pub generation_v: Option<GenerationV>,

	#[serde(rename = "generation-vi")]
	pub generation_vi: Option<HashMap<String, Home>>,

	#[serde(rename = "generation-vii")]
	pub generation_vii: Option<GenerationVii>,

	#[serde(rename = "generation-viii")]
	pub generation_viii: Option<GenerationViii>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Sprites
{
	#[serde(rename = "back_default")]
	pub back_default: Option<String>,

	#[serde(rename = "back_female")]
	pub back_female: Option<serde_json::Value>,

	#[serde(rename = "back_shiny")]
	pub back_shiny: Option<String>,

	#[serde(rename = "back_shiny_female")]
	pub back_shiny_female: Option<serde_json::Value>,

	#[serde(rename = "front_default")]
	pub front_default: Option<String>,

	#[serde(rename = "front_female")]
	pub front_female: Option<serde_json::Value>,

	#[serde(rename = "front_shiny")]
	pub front_shiny: Option<String>,

	#[serde(rename = "front_shiny_female")]
	pub front_shiny_female: Option<serde_json::Value>,

	#[serde(rename = "other")]
	pub other: Option<Other>,

	#[serde(rename = "versions")]
	pub versions: Option<Versions>,

	#[serde(rename = "animated")]
	pub animated: Box<Option<Sprites>>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct GenerationI
{
	#[serde(rename = "red-blue")]
	pub red_blue: Option<RedBlue>,

	#[serde(rename = "yellow")]
	pub yellow: Option<RedBlue>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct RedBlue
{
	#[serde(rename = "back_default")]
	pub back_default: Option<String>,

	#[serde(rename = "back_gray")]
	pub back_gray: Option<String>,

	#[serde(rename = "back_transparent")]
	pub back_transparent: Option<String>,

	#[serde(rename = "front_default")]
	pub front_default: Option<String>,

	#[serde(rename = "front_gray")]
	pub front_gray: Option<String>,

	#[serde(rename = "front_transparent")]
	pub front_transparent: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct GenerationIi
{
	#[serde(rename = "crystal")]
	pub crystal: Option<Crystal>,

	#[serde(rename = "gold")]
	pub gold: Option<Gold>,

	#[serde(rename = "silver")]
	pub silver: Option<Gold>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Crystal
{
	#[serde(rename = "back_default")]
	pub back_default: Option<String>,

	#[serde(rename = "back_shiny")]
	pub back_shiny: Option<String>,

	#[serde(rename = "back_shiny_transparent")]
	pub back_shiny_transparent: Option<String>,

	#[serde(rename = "back_transparent")]
	pub back_transparent: Option<String>,

	#[serde(rename = "front_default")]
	pub front_default: Option<String>,

	#[serde(rename = "front_shiny")]
	pub front_shiny: Option<String>,

	#[serde(rename = "front_shiny_transparent")]
	pub front_shiny_transparent: Option<String>,

	#[serde(rename = "front_transparent")]
	pub front_transparent: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Gold
{
	#[serde(rename = "back_default")]
	pub back_default: Option<String>,

	#[serde(rename = "back_shiny")]
	pub back_shiny: Option<String>,

	#[serde(rename = "front_default")]
	pub front_default: Option<String>,

	#[serde(rename = "front_shiny")]
	pub front_shiny: Option<String>,

	#[serde(rename = "front_transparent")]
	pub front_transparent: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct GenerationIii
{
	#[serde(rename = "emerald")]
	pub emerald: Option<Emerald>,

	#[serde(rename = "firered-leafgreen")]
	pub firered_leafgreen: Option<Gold>,

	#[serde(rename = "ruby-sapphire")]
	pub ruby_sapphire: Option<Gold>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Emerald
{
	#[serde(rename = "front_default")]
	pub front_default: Option<String>,

	#[serde(rename = "front_shiny")]
	pub front_shiny: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Home
{
	#[serde(rename = "front_default")]
	pub front_default: Option<String>,

	#[serde(rename = "front_female")]
	pub front_female: Option<serde_json::Value>,

	#[serde(rename = "front_shiny")]
	pub front_shiny: Option<String>,

	#[serde(rename = "front_shiny_female")]
	pub front_shiny_female: Option<serde_json::Value>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct GenerationVii
{
	#[serde(rename = "icons")]
	pub icons: Option<DreamWorld>,

	#[serde(rename = "ultra-sun-ultra-moon")]
	pub ultra_sun_ultra_moon: Option<Home>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct DreamWorld
{
	#[serde(rename = "front_default")]
	pub front_default: Option<String>,

	#[serde(rename = "front_female")]
	pub front_female: Option<serde_json::Value>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct GenerationViii
{
	#[serde(rename = "icons")]
	pub icons: Option<DreamWorld>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Other
{
	#[serde(rename = "dream_world")]
	pub dream_world: Option<DreamWorld>,

	#[serde(rename = "home")]
	pub home: Option<Home>,

	#[serde(rename = "official-artwork")]
	pub official_artwork: Option<OfficialArtwork>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct OfficialArtwork
{
	#[serde(rename = "front_default")]
	pub front_default: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Stat
{
	#[serde(rename = "base_stat")]
	pub base_stat: Option<i64>,

	#[serde(rename = "effort")]
	pub effort: Option<i64>,

	#[serde(rename = "stat")]
	pub stat: Option<Species>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Type
{
	#[serde(rename = "slot")]
	pub slot: Option<i64>,

	#[serde(rename = "type")]
	pub type_type: Option<Species>,
}
