require('nightwatch-cucumber')({
  cucumberArgs: ['--require', 'helpers/timeout.js', '--require', 'features/step_definitions', '--format', 'pretty', '--format', 'json:reports/cucumber.json', 'features']
})

module.exports = {
	output_folder: '',
	selenium: {
		start_process: true,
		server_path: 'node_modules/selenium-server/lib/runner/selenium-server-standalone-3.0.1.jar',
		host: '127.0.0.1',
		port: 4444,
		cli_args: {
			'webdriver.chrome.driver': require('chromedriver').path
		}
	},
	test_settings: {
		default: {
			launch_url: 'http://localhost',
			selenium_port: 4444,
			selenium_host: 'localhost',
			silent: true,
			screenshots: {
				enabled: false,
				path: ''
			},
			desiredCapabilities: {
				browserName: 'chrome',
				javascriptEnabled: true,
				acceptSslCerts: true
			}
		}
	}
}