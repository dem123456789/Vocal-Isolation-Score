// configure the test here
var TestConfig = {
  "TestName": "Mushra Demo Test",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": true,
  "LoopByDefault": true,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "http://www.prism.gatech.edu/~ediao3/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 2,
  "RequireMaxRating": false,
  "Task1": "Task 1/3: Most important: use high quality studio headphones and a good soundcard! \
				Listen through all test files and test sets before you do any ratings to get used to the material. \
				Rate the quality of the test items only compared to the reference on top. \
				Try to rate the overall impression of a test item and don't concentrate on single aspects.",
  "Task2": "Task 2/3: Most important: use high quality studio headphones and a good soundcard! \
				Listen through all test files and test sets before you do any ratings to get used to the material. \
				Rate the quality of the test items only compared to the reference on top. \
				Try to rate the overall impression of a test item and don't concentrate on single aspects.",
  "Task3": "Task 3/3: Most important: use high quality studio headphones and a good soundcard! \
				Listen through all test files and test sets before you do any ratings to get used to the material. \
				Rate the quality of the test items only compared to the reference on top. \
				Try to rate the overall impression of a test item and don't concentrate on single aspects.",
  "Testsets": [
    //    
    {
      "Name": "Test1",
	  "TestID": "id_1",
      "Files": {
            "Reference": "audio/01_ref.mp3",
			"Mix": "audio/01_ref.mp3",
            "1": "audio/01.mp3",
            "2": "audio/01.mp3",
            "3": "audio/01.mp3",
            "4": "audio/01.mp3",
			"5": "audio/01.mp3",
            "6": "audio/01.mp3",
        },
    },
    //    
    {
      "Name": "Test2",
	  "TestID": "id_2",	  
       "Files": {
            "Reference": "audio/02_ref.mp3",
			"Mix": "audio/02_ref.mp3",			
            "1": "audio/01.mp3",
            "2": "audio/01.mp3",
            "3": "audio/01.mp3",
            "4": "audio/01.mp3",
			"5": "audio/01.mp3",
            "6": "audio/01.mp3",
        },
    },
	//
	{
      "Name": "Test3",
	  "TestID": "id_3",	  
       "Files": {
            "Reference": "audio/02_ref.mp3",
			"Mix": "audio/02_ref.mp3",			
            "1": "audio/01.mp3",
            "2": "audio/01.mp3",
            "3": "audio/01.mp3",
            "4": "audio/01.mp3",
			"5": "audio/01.mp3",
            "6": "audio/01.mp3",
        },
    },
	//
	{
      "Name": "Test4",
	  "TestID": "id_4",	  
       "Files": {
            "Reference": "audio/02_ref.mp3",
			"Mix": "audio/02_ref.mp3",			
            "1": "audio/01.mp3",
            "2": "audio/01.mp3",
            "3": "audio/01.mp3",
            "4": "audio/01.mp3",
			"5": "audio/01.mp3",
            "6": "audio/01.mp3",
        },
    },
	//
	{
      "Name": "Test5",
	  "TestID": "id_5",	  
       "Files": {
            "Reference": "audio/02_ref.mp3",
			"Mix": "audio/02_ref.mp3",			
            "1": "audio/01.mp3",
            "2": "audio/01.mp3",
            "3": "audio/01.mp3",
            "4": "audio/01.mp3",
			"5": "audio/01.mp3",
            "6": "audio/01.mp3",
        },
    },
	//
	{
      "Name": "Test6",
	  "TestID": "id_6",	  
       "Files": {
            "Reference": "audio/02_ref.mp3",
			"Mix": "audio/02_ref.mp3",			
            "1": "audio/01.mp3",
            "2": "audio/01.mp3",
            "3": "audio/01.mp3",
            "4": "audio/01.mp3",
			"5": "audio/01.mp3",
            "6": "audio/01.mp3",
        },
    },
	//
	{
      "Name": "Test7",
	  "TestID": "id_7",	  
       "Files": {
            "Reference": "audio/02_ref.mp3",
			"Mix": "audio/02_ref.mp3",			
            "1": "audio/01.mp3",
            "2": "audio/01.mp3",
            "3": "audio/01.mp3",
            "4": "audio/01.mp3",
			"5": "audio/01.mp3",
            "6": "audio/01.mp3",
        },
    },
	//
	{
      "Name": "Test8",
	  "TestID": "id_8",	  
       "Files": {
            "Reference": "audio/02_ref.mp3",
			"Mix": "audio/02_ref.mp3",			
            "1": "audio/01.mp3",
            "2": "audio/01.mp3",
            "3": "audio/01.mp3",
            "4": "audio/01.mp3",
			"5": "audio/01.mp3",
            "6": "audio/01.mp3",
        },
    },
	//
	{
      "Name": "Test9",
	  "TestID": "id_9",	  
       "Files": {
            "Reference": "audio/02_ref.mp3",
			"Mix": "audio/02_ref.mp3",			
            "1": "audio/01.mp3",
            "2": "audio/01.mp3",
            "3": "audio/01.mp3",
            "4": "audio/01.mp3",
			"5": "audio/01.mp3",
            "6": "audio/01.mp3",
        },
    },
	//
	{
      "Name": "Test10",
	  "TestID": "id_10",	  
       "Files": {
            "Reference": "audio/02_ref.mp3",
			"Mix": "audio/02_ref.mp3",			
            "1": "audio/01.mp3",
            "2": "audio/01.mp3",
            "3": "audio/01.mp3",
            "4": "audio/01.mp3",
			"5": "audio/01.mp3",
            "6": "audio/01.mp3",
        },
    },
  ]
}
