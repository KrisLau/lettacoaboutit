var map = AmCharts.makeChart("mapdiv",{
				type: "map",
				theme: "dark",
				projection: "mercator",
				panEventsEnabled : true,
				backgroundColor : "#a7d2c8",
				backgroundAlpha : 1,
				zoomControl: {
				zoomControlEnabled : true
				},
				dataProvider : {
				map : "worldHigh",
				getAreasFromMap : true,
				areas :
				[
					{
						"id": "FR",
						"showAsSelected": true
					},
					{
						"id": "NL",
						"showAsSelected": true
					},
					{
						"id": "GB",
						"showAsSelected": true
					},
					{
						"id": "US",
						"showAsSelected": true
					},
					{
						"id": "KH",
						"showAsSelected": true
					},
					{
						"id": "MY",
						"showAsSelected": true
					},
					{
						"id": "SG",
						"showAsSelected": true
					},
					{
						"id": "TH",
						"showAsSelected": true
					},
					{
						"id": "VN",
						"showAsSelected": true
					}
				]
				},
				areasSettings : {
				autoZoom : true,
				color : "#f3edef",
				colorSolid : "#fedc3d",
				selectedColor : "#fedc3d",
				outlineColor : "#a7d2c8",
				rollOverColor : "#f2d388",
				rollOverOutlineColor : "#a7d2c8"
				}
				});