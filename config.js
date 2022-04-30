/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out or empty, is "localhost"
	port: 8086,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
	// you must set the sub path here. basePath must end with a /
	ipWhitelist: [], 	// Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "no",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_bar",
		},

		{
			module: "MMM-Entur-tavle",
			position: "bottom_right",
			header: "AtB - Now +5 minutes",
			config: {
				stopId: '44032',
				stopType: 'StopPlace',
				numResults: 5,
				showName: false,
				highlightRealtime: true,
				showTransportMode: true,
				refresh: 120,
				size: "small",
				delay: [5, 'minutes'],


			}
		},

		{
			module: "MMM-Entur-tavle",
			position: "bottom_right",
			config: {
				stopId: '42660',
				stopType: 'StopPlace',
				numResults: 5,
				showName: false,
				highlightRealtime: true,
				showTransportMode: true,
				refresh: 120,
				size: "small",
				delay: [5, 'minutes'],


			}
		},


		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "NRK",
						url: "https://www.nrk.no/nyheter/siste.rss"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
 		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "e24",
						url: "https://e24.no/rss2/?seksjon=boers-og-finans"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "MMM-Tibber",
			header: "Tibber",
			position: "top_right",
			config: {
				tibberToken: "",
				houseNumber: 2,
				showPowerGauge: false,
				showVoltageGauge: false,
				showCurrentGauge: false,
				graphWidth: 600,

			}
		},

		{
			module: 'MMM-YrNow',
			position: 'top_left',
			config: {
				locationId: '1-211102',
				showWeatherForecast: true
			}
		},

			{
			module: 'MMM-PostDelivery-Norway',
			position: 'top_left',
			config: {
				zipCode: 7083
			}
		},


		{
			module: "MMM-TRV-WastePlan",
			header: "Tømmeplan",
			position: "bottom_left",
			config: {
				id: 2694,
				header: "",
				blnLabel: true,
				blnDate: true,
			}
		},





		{
			module: 'MMM-Tools',
			position: 'bottom_left',
			config: {
				refresh: 1000 * 5,
				itemSIze: null,
				conntainerSize: null,
				MM: { displayMM: false, },
				NODE: { displayNode: false, },
				NPM: { displayNpm: false, },
				CPU: { orderUsage: 3, displayGovernor: false, displayType: false, },
				UPTIME: { displayUptime: false, displayRecord: false, },
				STORAGE: { partitionExclude: ["/boot", "/"], },
				NETWORK: { orderNetwork: 1, },
			}
		},


		{
			module: 'MMM-Worldclock',
			position: 'top_center', // This can be any of the regions, best in top_left or top_right regions
			config: {
				// See 'Configuration options' for more information.
				timeFormat: 'hh:mm A', //Global time format, as defined in moment.js format()
				style: 'left', // Which way do you want the flag and description from the clock? choices are 'top', 'left','right','bottom'
				offsetTimezone: null, // Timezone you want to show the difference from. null, "", or omitted from config will be UTC.
				clocks: [
					{
						title: "Home",
						flag: "no"
					},
					{
						title: "Kolkata", // Too long of a title could cause bad text align.
						timezone: "Asia/Kolkata", //When omitted, Local time will be displayed.
						flag: "in", // If you'd like a flag from the standard library
					},
					{
						timezone: "Asia/Dubai",
						flag: "ae"
					},
					{
						title: "UTC",
						timezone: "UTC",
						timeFormat: "HH:mm DD/MM", // Time format override.
						altflag: "world.png" // if you'd like a flag from a file on your mirror device.
					},
				]
			},
		},





	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
