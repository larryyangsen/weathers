package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

var appid = os.Getenv("appid")

const weatherURL = "https://api.openweathermap.org/data/2.5/weather"
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast"

func main() {
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:1234"},
		AllowMethods:     []string{"GET"},
		AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))
	client := &http.Client{}
	r.GET("/weather", func(c *gin.Context) {
		lat := c.Query("lat")
		lon := c.Query("lon")
		req, err := DoReq(weatherURL, lat, lon)
		if err != nil {
			log.Panic(err)
			c.Error(err)
			return
		}
		res, err := client.Do(req)
		if err != nil {
			log.Panic(err)
			c.Error(err)
			return
		}
		defer res.Body.Close()

		var weatherBody WeatherBody
		err = json.NewDecoder(res.Body).Decode(&weatherBody)
		if err != nil {
			log.Panic(err)
			c.Error(err)
			return
		}
		body, err := ioutil.ReadAll(res.Body)
		if err != nil {
			log.Panic(err)
			c.Error(err)
			return
		}
		if res.StatusCode >= 400 {
			log.Panic(string(body))
			c.String(res.StatusCode, string(body))
			return
		}
		c.JSON(http.StatusOK, weatherBody)
	})
	r.GET("/forecast", func(c *gin.Context) {
		lat := c.Query("lat")
		lon := c.Query("lon")
		req, err := DoReq(forecastURL, lat, lon)
		if err != nil {
			log.Panic(err)
			c.Error(err)
			return
		}
		res, err := client.Do(req)
		if err != nil {
			log.Panic(err)
			c.Error(err)
			return
		}
		defer res.Body.Close()
		var forecastBody ForecastBody
		err = json.NewDecoder(res.Body).Decode(&forecastBody)
		if err != nil {
			log.Panic(err)
			c.Error(err)
			return
		}
		body, err := ioutil.ReadAll(res.Body)
		if err != nil {
			log.Panic(err)
			c.Error(err)
			return
		}
		if res.StatusCode >= 400 {
			log.Panic(string(body))
			c.String(res.StatusCode, string(body))
			return
		}
		c.JSON(http.StatusOK, forecastBody)
	})
	r.Run()
}

// DoReq return a http request from lat ,lon
func DoReq(url, lat, lon string) (*http.Request, error) {
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		log.Panic(err)
		return nil, err
	}
	q := req.URL.Query()
	q.Add("lat", lat)
	q.Add("lon", lon)
	q.Add("units", "metric")
	q.Add("appid", appid)
	req.Header.Set("Content-Type", "application/json")
	req.URL.RawQuery = q.Encode()
	return req, nil
}
