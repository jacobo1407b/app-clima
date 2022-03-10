export type mainState = {
    lat?: number,
    long?: number,
    keyLocation?: string,
    LocalizedName?: string
}

export type ResponseClima = {
    "LocalObservationDateTime": "2022-03-05T21:35:00-06:00",
    "EpochTime": 1646537700,
    "WeatherText": "Mayormente despejado",
    "WeatherIcon": 34,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": false,
    "Temperature": {
        "Metric": {
            "Value": 14.5,
            "Unit": "C",
            "UnitType": 17
        },
        "Imperial": {
            "Value": 58.0,
            "Unit": "F",
            "UnitType": 18
        }
    },
    "RealFeelTemperature": {
        "Metric": {
            "Value": 14.3,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Fresco"
        },
        "Imperial": {
            "Value": 58.0,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Fresco"
        }
    },
    "RealFeelTemperatureShade": {
        "Metric": {
            "Value": 14.3,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Fresco"
        },
        "Imperial": {
            "Value": 58.0,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Fresco"
        }
    },
    "RelativeHumidity": 44,
    "IndoorRelativeHumidity": 31,
    "DewPoint": {
        "Metric": {
            "Value": 2.4,
            "Unit": "C",
            "UnitType": 17
        },
        "Imperial": {
            "Value": 36.0,
            "Unit": "F",
            "UnitType": 18
        }
    },
    "Wind": {
        "Direction": {
            "Degrees": 135,
            "Localized": "SE",
            "English": "SE"
        },
        "Speed": {
            "Metric": {
                "Value": 7.0,
                "Unit": "km/h",
                "UnitType": 7
            },
            "Imperial": {
                "Value": 4.4,
                "Unit": "mi/h",
                "UnitType": 9
            }
        }
    },
    "WindGust": {
        "Speed": {
            "Metric": {
                "Value": 17.5,
                "Unit": "km/h",
                "UnitType": 7
            },
            "Imperial": {
                "Value": 10.9,
                "Unit": "mi/h",
                "UnitType": 9
            }
        }
    },
    "UVIndex": 0,
    "UVIndexText": "Bajo",
    "Visibility": {
        "Metric": {
            "Value": 16.1,
            "Unit": "km",
            "UnitType": 6
        },
        "Imperial": {
            "Value": 10.0,
            "Unit": "mi",
            "UnitType": 2
        }
    },
    "ObstructionsToVisibility": "",
    "CloudCover": 23,
    "Ceiling": {
        "Metric": {
            "Value": 9144.0,
            "Unit": "m",
            "UnitType": 5
        },
        "Imperial": {
            "Value": 30000.0,
            "Unit": "ft",
            "UnitType": 0
        }
    },
    "Pressure": {
        "Metric": {
            "Value": 1006.9,
            "Unit": "mb",
            "UnitType": 14
        },
        "Imperial": {
            "Value": 29.73,
            "Unit": "inHg",
            "UnitType": 12
        }
    },
    "PressureTendency": {
        "LocalizedText": "Constante",
        "Code": "S"
    },
    "Past24HourTemperatureDeparture": {
        "Metric": {
            "Value": 1.5,
            "Unit": "C",
            "UnitType": 17
        },
        "Imperial": {
            "Value": 3.0,
            "Unit": "F",
            "UnitType": 18
        }
    },
    "ApparentTemperature": {
        "Metric": {
            "Value": 15.6,
            "Unit": "C",
            "UnitType": 17
        },
        "Imperial": {
            "Value": 60.0,
            "Unit": "F",
            "UnitType": 18
        }
    },
    "WindChillTemperature": {
        "Metric": {
            "Value": 14.4,
            "Unit": "C",
            "UnitType": 17
        },
        "Imperial": {
            "Value": 58.0,
            "Unit": "F",
            "UnitType": 18
        }
    },
    "WetBulbTemperature": {
        "Metric": {
            "Value": 8.5,
            "Unit": "C",
            "UnitType": 17
        },
        "Imperial": {
            "Value": 47.0,
            "Unit": "F",
            "UnitType": 18
        }
    },
    "Precip1hr": {
        "Metric": {
            "Value": 0.0,
            "Unit": "mm",
            "UnitType": 3
        },
        "Imperial": {
            "Value": 0.0,
            "Unit": "in",
            "UnitType": 1
        }
    },
    "PrecipitationSummary": {
        "Precipitation": {
            "Metric": {
                "Value": 0.0,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0.0,
                "Unit": "in",
                "UnitType": 1
            }
        },
        "PastHour": {
            "Metric": {
                "Value": 0.0,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0.0,
                "Unit": "in",
                "UnitType": 1
            }
        },
        "Past3Hours": {
            "Metric": {
                "Value": 0.0,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0.0,
                "Unit": "in",
                "UnitType": 1
            }
        },
        "Past6Hours": {
            "Metric": {
                "Value": 0.0,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0.0,
                "Unit": "in",
                "UnitType": 1
            }
        },
        "Past9Hours": {
            "Metric": {
                "Value": 0.0,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0.0,
                "Unit": "in",
                "UnitType": 1
            }
        },
        "Past12Hours": {
            "Metric": {
                "Value": 0.0,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0.0,
                "Unit": "in",
                "UnitType": 1
            }
        },
        "Past18Hours": {
            "Metric": {
                "Value": 0.0,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0.0,
                "Unit": "in",
                "UnitType": 1
            }
        },
        "Past24Hours": {
            "Metric": {
                "Value": 0.0,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0.0,
                "Unit": "in",
                "UnitType": 1
            }
        }
    },
    "TemperatureSummary": {
        "Past6HourRange": {
            "Minimum": {
                "Metric": {
                    "Value": 14.5,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 58.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Maximum": {
                "Metric": {
                    "Value": 24.4,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 76.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            }
        },
        "Past12HourRange": {
            "Minimum": {
                "Metric": {
                    "Value": 11.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 53.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Maximum": {
                "Metric": {
                    "Value": 24.4,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 76.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            }
        },
        "Past24HourRange": {
            "Minimum": {
                "Metric": {
                    "Value": 2.8,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 37.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Maximum": {
                "Metric": {
                    "Value": 24.4,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 76.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            }
        }
    },
    "MobileLink": "http://www.accuweather.com/es/mx/huamantla/236172/current-weather/236172",
    "Link": "http://www.accuweather.com/es/mx/huamantla/236172/current-weather/236172"
}

export type ListHour = {
    "DateTime": string,
    "EpochDateTime": number,
    "WeatherIcon": number,
    "IconPhrase": string,
    "HasPrecipitation": boolean,
    "IsDaylight": boolean,
    "Temperature": {
        "Value": number,
        "Unit": string,
        "UnitType": number
    },
    "PrecipitationProbability": number,
    "MobileLink": string,
    "Link": string
}