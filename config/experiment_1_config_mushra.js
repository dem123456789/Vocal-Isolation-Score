// configure the test here
var TestConfig = {
  "TestName": "SVS Listening Test (Demo Only)",
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
  "BeaqleServiceURL": "http://svslisteningtest.gatech.edu/experiment/beaqleJS_Service.php",
  "SupervisorContact": "svs.listening@gmail.com",
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 2,
  "RequireMaxRating": false,
  "Tasksets": [
	  {
	  "Label": "Vocal Isolation",
	  "Description": "Vocal Isolation -\
					  In this task you are required to judge how good the separation between the vocal and the instrumental components is. \
					  An audio clip with audible vocals and inaudible instrumental should be rated high. \
					  Conversely if the vocal and instrumental components are both equally audible then it should be rated low. \
					  If the vocals are inaudible the clip should have a low rating. \
					  In this task it does not matter if the vocals or instrumental components are clear and understandable, the only criteria for grading is how isolated the vocals are from the rest of the audio present in the mix.",
	  },
	  {
	  "Label": "Vocal Intelligibility",
	  "Description": "Vocal Intelligibility -\
					  In this task you are required to judge the overall intelligibility of the audio.\
					  An audio clip which has words that are clearly articulated should be rated higher (i.e., there words are clear and can be understood).\
					  Clips which have words that are difficult to understand (i.e., the words are severely degraded and difficult to make out should be rated lower).\
					  In this task it does not matter if you can hear the instrumental portion, you are judging solely on the basis of the intelligibility of the vocals.",
	  },
	  {
	  "Label": "Vocal Overall",
	  "Description": "Vocal Overall -\
					  In this task you are required to judge the overall performance of each algorithm.\
					  While each algorithm is designed to separate the vocal from the instrumental components, other quality factors are also important including: background distortion, audio artifacts (e.g., missing sounds, etc.), and other noisy interference that affect the overall perceived quality of the audio, in spite of the voice/music separation.\
					  Rate the clips based on your perception of which algorithms possess the least amount of quality degrading effects (i.e., algorithms with the fewest perceived audio degradation effects should be rated higher).",
	  },
  ],
  "Testsets": [
    //    
    {
      "Name": "Test1",
	  "TestID": "id_1",
      "Files": {
            "Reference": "audio/01_ref.mp3",
			"Mix": "audio/01_ref.mp3",
            "1": "audio/01.mp3",
            "2": "audio/02.mp3",
            "3": "audio/03.mp3",
            "4": "audio/04.mp3",
			"5": "audio/05.mp3",
            "6": "audio/06.mp3",
        },
    },
    //    
    {
      "Name": "Test2",
	  "TestID": "id_2",	  
       "Files": {
            "Reference": "audio/01_ref.mp3",
			"Mix": "audio/01_ref.mp3",			
            "1": "audio/01.mp3",
            "2": "audio/02.mp3",
            "3": "audio/03.mp3",
            "4": "audio/04.mp3",
			"5": "audio/05.mp3",
            "6": "audio/06.mp3",
        },
    },
	//
	{
      "Name": "Test3",
	  "TestID": "id_3",	  
       "Files": {
            "Reference": "audio/01_ref.mp3",
			"Mix": "audio/01_ref.mp3",			
            "1": "audio/01.mp3",
            "2": "audio/02.mp3",
            "3": "audio/03.mp3",
            "4": "audio/04.mp3",
			"5": "audio/05.mp3",
            "6": "audio/06.mp3",
        },
    },
	//
	{
      "Name": "Test4",
	  "TestID": "id_4",	  
       "Files": {
            "Reference": "audio/01_ref.mp3",
			"Mix": "audio/01_ref.mp3",			
            "1": "audio/01.mp3",
            "2": "audio/02.mp3",
            "3": "audio/03.mp3",
            "4": "audio/04.mp3",
			"5": "audio/05.mp3",
            "6": "audio/06.mp3",
        },
    },
	//
	{
      "Name": "Test5",
	  "TestID": "id_5",	  
       "Files": {
            "Reference": "audio/01_ref.mp3",
			"Mix": "audio/01_ref.mp3",			
            "1": "audio/01.mp3",
            "2": "audio/02.mp3",
            "3": "audio/03.mp3",
            "4": "audio/04.mp3",
			"5": "audio/05.mp3",
            "6": "audio/06.mp3",
        },
    },
	//
	{
      "Name": "Test6",
	  "TestID": "id_6",	  
       "Files": {
            "Reference": "audio/01_ref.mp3",
			"Mix": "audio/01_ref.mp3",			
            "1": "audio/01.mp3",
            "2": "audio/02.mp3",
            "3": "audio/03.mp3",
            "4": "audio/04.mp3",
			"5": "audio/05.mp3",
            "6": "audio/06.mp3",
        },
    },
	//
	{
      "Name": "Test7",
	  "TestID": "id_7",	  
       "Files": {
            "Reference": "audio/01_ref.mp3",
			"Mix": "audio/01_ref.mp3",			
            "1": "audio/01.mp3",
            "2": "audio/02.mp3",
            "3": "audio/03.mp3",
            "4": "audio/04.mp3",
			"5": "audio/05.mp3",
            "6": "audio/06.mp3",
        },
    },
	//
	{
      "Name": "Test8",
	  "TestID": "id_8",	  
       "Files": {
            "Reference": "audio/01_ref.mp3",
			"Mix": "audio/01_ref.mp3",			
            "1": "audio/01.mp3",
            "2": "audio/02.mp3",
            "3": "audio/03.mp3",
            "4": "audio/04.mp3",
			"5": "audio/05.mp3",
            "6": "audio/06.mp3",
        },
    },
	//
	{
      "Name": "Test9",
	  "TestID": "id_9",	  
       "Files": {
            "Reference": "audio/01_ref.mp3",
			"Mix": "audio/01_ref.mp3",			
            "1": "audio/01.mp3",
            "2": "audio/02.mp3",
            "3": "audio/03.mp3",
            "4": "audio/04.mp3",
			"5": "audio/05.mp3",
            "6": "audio/06.mp3",
        },
    },
	//
	{
      "Name": "Test10",
	  "TestID": "id_10",	  
       "Files": {
            "Reference": "audio/01_ref.mp3",
			"Mix": "audio/01_ref.mp3",			
            "1": "audio/01.mp3",
            "2": "audio/02.mp3",
            "3": "audio/03.mp3",
            "4": "audio/04.mp3",
			"5": "audio/05.mp3",
            "6": "audio/06.mp3",
        },
    },
  ]
}
