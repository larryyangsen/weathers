package main

type Coord struct {
	Lon float64 `json:"lon"`
	Lat float64 `json:"lat"`
}

type Weather struct {
	ID          int16  `json:"id"`
	Main        string `json:"main"`
	Description string `json:"description"`
	Icon        string `json:"icon"`
}
type WeatherMain struct {
	Temp     float32 `json:"temp"`
	Pressure float32 `json:"pressure"`
	Humidity float32 `json:"humidity"`
	TempMin  float32 `json:"temp_min"`
	TempMax  float32 `json:"temp_max"`
}
type Wind struct {
	Speed float32 `json:"speed"`
	Deg   float32 `json:"deg"`
}
type Clouds struct {
	All float32 `json:"all"`
}
type WeatherSys struct {
	Type    int     `json:"type"`
	ID      int16   `json:"id"`
	Message float32 `json:"message"`
	Country string  `json:"country"`
	Sunrise int32   `json:"sunrise"`
	Sunset  int32   `json:"sunset"`
}
type WeatherBody struct {
	Coord      Coord       `json:"coord"`
	Weather    []Weather   `json:"weather"`
	Base       string      `json:"base"`
	Main       WeatherMain `json:"main"`
	Visibility float32     `json:"visibility"`
	Wind       Wind        `json:"wind"`
	Clouds     Clouds      `json:"clouds"`
	Dt         int32       `json:"dt"`
	Sys        WeatherSys  `json:"sys"`
	ID         int32       `json:"id"`
	Name       string      `json:"name"`
	Cod        int         `json:"cod"`
}

type ForecastMain struct {
	Temp      float32 `json:"temp"`
	TempMin   float32 `json:"temp_min"`
	TempMax   float32 `json:"temp_max"`
	Pressure  float32 `json:"pressure"`
	SeaLevel  float32 `json:"sea_level"`
	GrndLevel float32 `json:"grnd_level"`
	Humidity  float32 `json:"humidity"`
	TempKf    float32 `json:"temp_kf"`
}
type ForecastSys struct {
	Pod string `json:"pod"`
}
type List struct {
	Dt      int32        `json:"dt"`
	Main    ForecastMain `json:"main"`
	Weather []Weather    `json:"weather"`
	Clouds  Clouds       `json:"clouds"`
	Wind    Wind         `json:"wind"`
	Sys     ForecastSys  `json:"sys"`
	DtTxt   string       `json:"dt_txt"`
}
type City struct {
	ID      int32  `json:"id"`
	Name    string `json:"name"`
	Coord   Coord  `json:"coord"`
	Country string `json:"country"`
}
type ForecastBody struct {
	Cod     string  `json:"cod"`
	Message float32 `json:"message"`
	Cnt     int     `json:"cnt"`
	List    []List  `json:"list"`
	City    City    `json:"city"`
}
