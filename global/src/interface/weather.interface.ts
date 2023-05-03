export interface WeatherDataModel {
  windSpeed: number;
  windDir: number;
  humidity: number;
  temperature: number;
  cloudiness: number;
  roughness: number;
}

export interface WeatherStationInfo {
  humidity: string;
  name: string;
  pressure: string;
  rainfall: string;
  sunrise: string;
  sunset: string;
  temperature: string;
  windChill: string;
  windSpeedAvg2Min: string;
  windSpeedAvg10Min: string;
  windSpeed: string;
  windSpeedMax10Min: string;
  windDirection: string;
  windDirectionAvg2Min: string;
  windDirectionAvg10Min: string;
  windDirectionMax10Min: string;
  zone: string;
  cloudCover: string;
  rainfallLast24HrMm: string;
}

export interface JSONSunriseAndSunset {
  results: SunResults;
  status: string;
}

export interface SunResults {
  sunrise: string;
  sunset: string;
  solarNoon: string;
  dayLength: string;
  civilTwilightBegin: string;
  civilTwilightEnd: string;
  nauticalTwilightBegin: string;
  nauticalTwilightEnd: string;
  astronomicalTwilightBegin: string;
  astronomicalTwilightEnd: string;
}
