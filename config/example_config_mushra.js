// configure the test here
var TestConfig = {
  "TestName": "Mushra Demo Test",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": true,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "http://www.prism.gatech.edu/~ediao3/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 3,
  "RequireMaxRating": false,
  "Testsets": [
    //    
    {
      "Name": "Schubert",
      "Files": {
            "Reference": "audio/01_ref.mp3",
			"Mix": "audio/01_ref.mp3",
            "1": "audio/01.mp3",
            "2": "audio/01.mp3",
            "3": "audio/01.mp3",
            "4": "audio/01.mp3",
        },
	  "Instruction": 1
    },
    //    
    {
      "Name": "Castanets",
       "Files": {
            "Reference": "audio/02_ref.mp3",
			"Mix": "audio/02_ref.mp3",			
            "1": "audio/02.mp3",
            "2": "audio/02.mp3",
            "3": "audio/02.mp3",
            "4": "audio/02.mp3",
        },
	   "Instruction": 2
    },
  ]
}
