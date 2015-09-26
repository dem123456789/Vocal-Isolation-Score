// configure the test here
var TestConfig = {
  "TestName": "SVS Listening Test - Vocal Separation Quality",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":50,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "http://svslisteningtest.gatech.edu/experiment/beaqleJS_Service_1.php",
  "SupervisorContact": "svs.listening@gmail.com",
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 2,
  "RequireMaxRating": false,
  "Tasksets": [
	  {
	  "Label": "Vocal Isolation",
	  "Description": "In this task you are <b>required</b> <a href='http://www.w3schools.com/html/'>to</a> <font size='3' color='red'>judge</font> how good the separation between the vocal and the instrumental components is. \
					  An audio clip with audible vocals and inaudible instrumental should be rated high. \
					  Conversely if the vocal and instrumental components are both equally audible then it should be rated low. \
					  If the vocals are inaudible the clip should have a low rating. \
					  In this task it does not matter if the vocals or instrumental components are clear and understandable,\
                      the only criteria for grading is how isolated the vocals are from the rest of the audio present in the mix.",
	  },
	  {
	  "Label": "Vocal Intelligibility",
	  "Description": "In this task you are required to judge the overall intelligibility of the audio.\
					  An audio clip which has words that are clearly articulated should be rated higher (i.e., there words are clear and can be understood).\
					  Clips which have words that are difficult to understand (i.e., the words are severely degraded and difficult to make out should be rated lower).\
					  In this task it does not matter if you can hear the instrumental portion, you are judging solely on the basis of the intelligibility of the vocals.",
	  },
	  {
	  "Label": "Vocal Overall",
	  "Description": "In this task you are required to judge the overall performance of each algorithm.\
					  While each algorithm is designed to separate the vocal from the instrumental components,\
                      other quality factors are also important including: background distortion, audio artifacts (e.g., missing sounds, etc.),\
                      and other noisy interference that affect the overall perceived quality of the audio, in spite of the voice/music separation.\
					  Rate the clips based on your perception of which algorithms possess the least amount of quality degrading effects\
                      (i.e., algorithms with the fewest perceived audio degradation effects should be rated higher).",
	  },
  ],
  "Testsets":[
  	// Clip_01_2
  	{
  	 "Name": "Test Set 1",
  	 "TestID": "Clip_01_2",
  	 "Files": {
  		"Reference": "data01/Clip_01_2_CLV_VOCALS.wav",
  		"Mix": "data01/Clip_01_2_MIX.wav",
  		"1": "data01/Clip_01_2_IIY_VOCALS.wav",
  		"2": "data01/Clip_01_2_JL1_VOCALS.wav",
  		"3": "data01/Clip_01_2_RNA_VOCALS.wav",
  		"4": "data01/Clip_01_2_RP1_VOCALS.wav",
  		"5": "data01/Clip_01_2_HDS_VOCALS.wav",
  		"6": "data01/Clip_01_2_ACV.wav",
  		"7": "data01/Clip_01_2_ACM.wav",
  		},
  	},
  	// Clip_03_2
  	{
  	 "Name": "Test Set 2",
  	 "TestID": "Clip_03_2",
  	 "Files": {
  		"Reference": "data01/Clip_03_2_CLV_VOCALS.wav",
  		"Mix": "data01/Clip_03_2_MIX.wav",
  		"1": "data01/Clip_03_2_IIY_VOCALS.wav",
  		"2": "data01/Clip_03_2_JL1_VOCALS.wav",
  		"3": "data01/Clip_03_2_RNA_VOCALS.wav",
  		"4": "data01/Clip_03_2_RP1_VOCALS.wav",
  		"5": "data01/Clip_03_2_HDS_VOCALS.wav",
  		"6": "data01/Clip_03_2_ACV.wav",
  		"7": "data01/Clip_03_2_ACM.wav",
  		},
  	},
  	// Clip_04_2
  	{
  	 "Name": "Test Set 3",
  	 "TestID": "Clip_04_2",
  	 "Files": {
  		"Reference": "data01/Clip_04_2_CLV_VOCALS.wav",
  		"Mix": "data01/Clip_04_2_MIX.wav",
  		"1": "data01/Clip_04_2_IIY_VOCALS.wav",
  		"2": "data01/Clip_04_2_JL1_VOCALS.wav",
  		"3": "data01/Clip_04_2_RNA_VOCALS.wav",
  		"4": "data01/Clip_04_2_RP1_VOCALS.wav",
  		"5": "data01/Clip_04_2_HDS_VOCALS.wav",
  		"6": "data01/Clip_04_2_ACV.wav",
  		"7": "data01/Clip_04_2_ACM.wav",
  		},
  	},
  	// Clip_05_1
  	{
  	 "Name": "Test Set 4",
  	 "TestID": "Clip_05_1",
  	 "Files": {
  		"Reference": "data01/Clip_05_1_CLV_VOCALS.wav",
  		"Mix": "data01/Clip_05_1_MIX.wav",
  		"1": "data01/Clip_05_1_IIY_VOCALS.wav",
  		"2": "data01/Clip_05_1_JL1_VOCALS.wav",
  		"3": "data01/Clip_05_1_RNA_VOCALS.wav",
  		"4": "data01/Clip_05_1_RP1_VOCALS.wav",
  		"5": "data01/Clip_05_1_HDS_VOCALS.wav",
  		"6": "data01/Clip_05_1_ACV.wav",
  		"7": "data01/Clip_05_1_ACM.wav",
  		},
  	},
  	// Clip_06_2
  	{
  	 "Name": "Test Set 5",
  	 "TestID": "Clip_06_2",
  	 "Files": {
  		"Reference": "data01/Clip_06_2_CLV_VOCALS.wav",
  		"Mix": "data01/Clip_06_2_MIX.wav",
  		"1": "data01/Clip_06_2_IIY_VOCALS.wav",
  		"2": "data01/Clip_06_2_JL1_VOCALS.wav",
  		"3": "data01/Clip_06_2_RNA_VOCALS.wav",
  		"4": "data01/Clip_06_2_RP1_VOCALS.wav",
  		"5": "data01/Clip_06_2_HDS_VOCALS.wav",
  		"6": "data01/Clip_06_2_ACV.wav",
  		"7": "data01/Clip_06_2_ACM.wav",
  		},
  	},
  	// Clip_07_2
  	{
  	 "Name": "Test Set 6",
  	 "TestID": "Clip_07_2",
  	 "Files": {
  		"Reference": "data01/Clip_07_2_CLV_VOCALS.wav",
  		"Mix": "data01/Clip_07_2_MIX.wav",
  		"1": "data01/Clip_07_2_IIY_VOCALS.wav",
  		"2": "data01/Clip_07_2_JL1_VOCALS.wav",
  		"3": "data01/Clip_07_2_RNA_VOCALS.wav",
  		"4": "data01/Clip_07_2_RP1_VOCALS.wav",
  		"5": "data01/Clip_07_2_HDS_VOCALS.wav",
  		"6": "data01/Clip_07_2_ACV.wav",
  		"7": "data01/Clip_07_2_ACM.wav",
  		},
  	},
  	// Clip_08_2
  	{
  	 "Name": "Test Set 7",
  	 "TestID": "Clip_08_2",
  	 "Files": {
  		"Reference": "data01/Clip_08_2_CLV_VOCALS.wav",
  		"Mix": "data01/Clip_08_2_MIX.wav",
  		"1": "data01/Clip_08_2_IIY_VOCALS.wav",
  		"2": "data01/Clip_08_2_JL1_VOCALS.wav",
  		"3": "data01/Clip_08_2_RNA_VOCALS.wav",
  		"4": "data01/Clip_08_2_RP1_VOCALS.wav",
  		"5": "data01/Clip_08_2_HDS_VOCALS.wav",
  		"6": "data01/Clip_08_2_ACV.wav",
  		"7": "data01/Clip_08_2_ACM.wav",
  		},
  	},
  	// Clip_10_1
  	{
  	 "Name": "Test Set 8",
  	 "TestID": "Clip_10_1",
  	 "Files": {
  		"Reference": "data01/Clip_10_1_CLV_VOCALS.wav",
  		"Mix": "data01/Clip_10_1_MIX.wav",
  		"1": "data01/Clip_10_1_IIY_VOCALS.wav",
  		"2": "data01/Clip_10_1_JL1_VOCALS.wav",
  		"3": "data01/Clip_10_1_RNA_VOCALS.wav",
  		"4": "data01/Clip_10_1_RP1_VOCALS.wav",
  		"5": "data01/Clip_10_1_HDS_VOCALS.wav",
  		"6": "data01/Clip_10_1_ACV.wav",
  		"7": "data01/Clip_10_1_ACM.wav",
  		},
  	},
  	// Clip_11_3
  	{
  	 "Name": "Test Set 9",
  	 "TestID": "Clip_11_3",
  	 "Files": {
  		"Reference": "data01/Clip_11_3_CLV_VOCALS.wav",
  		"Mix": "data01/Clip_11_3_MIX.wav",
  		"1": "data01/Clip_11_3_IIY_VOCALS.wav",
  		"2": "data01/Clip_11_3_JL1_VOCALS.wav",
  		"3": "data01/Clip_11_3_RNA_VOCALS.wav",
  		"4": "data01/Clip_11_3_RP1_VOCALS.wav",
  		"5": "data01/Clip_11_3_HDS_VOCALS.wav",
  		"6": "data01/Clip_11_3_ACV.wav",
  		"7": "data01/Clip_11_3_ACM.wav",
  		},
  	},
  	// Clip_12_3
  	{
  	 "Name": "Test Set 10",
  	 "TestID": "Clip_12_3",
  	 "Files": {
  		"Reference": "data01/Clip_12_3_CLV_VOCALS.wav",
  		"Mix": "data01/Clip_12_3_MIX.wav",
  		"1": "data01/Clip_12_3_IIY_VOCALS.wav",
  		"2": "data01/Clip_12_3_JL1_VOCALS.wav",
  		"3": "data01/Clip_12_3_RNA_VOCALS.wav",
  		"4": "data01/Clip_12_3_RP1_VOCALS.wav",
  		"5": "data01/Clip_12_3_HDS_VOCALS.wav",
  		"6": "data01/Clip_12_3_ACV.wav",
  		"7": "data01/Clip_12_3_ACM.wav",
  		},
  	},
  	// Clip_13_1
  	{
  	 "Name": "Test Set 11",
  	 "TestID": "Clip_13_1",
  	 "Files": {
  		"Reference": "data01/Clip_13_1_CLV_VOCALS.wav",
  		"Mix": "data01/Clip_13_1_MIX.wav",
  		"1": "data01/Clip_13_1_IIY_VOCALS.wav",
  		"2": "data01/Clip_13_1_JL1_VOCALS.wav",
  		"3": "data01/Clip_13_1_RNA_VOCALS.wav",
  		"4": "data01/Clip_13_1_RP1_VOCALS.wav",
  		"5": "data01/Clip_13_1_HDS_VOCALS.wav",
  		"6": "data01/Clip_13_1_ACV.wav",
  		"7": "data01/Clip_13_1_ACM.wav",
  		},
  	},
  	// Clip_14_1
  	{
  	 "Name": "Test Set 12",
  	 "TestID": "Clip_14_1",
  	 "Files": {
  		"Reference": "data01/Clip_14_1_CLV_VOCALS.wav",
  		"Mix": "data01/Clip_14_1_MIX.wav",
  		"1": "data01/Clip_14_1_IIY_VOCALS.wav",
  		"2": "data01/Clip_14_1_JL1_VOCALS.wav",
  		"3": "data01/Clip_14_1_RNA_VOCALS.wav",
  		"4": "data01/Clip_14_1_RP1_VOCALS.wav",
  		"5": "data01/Clip_14_1_HDS_VOCALS.wav",
  		"6": "data01/Clip_14_1_ACV.wav",
  		"7": "data01/Clip_14_1_ACM.wav",
  		},
  	},
  	// Clip_15_1
  	{
  	 "Name": "Test Set 13",
  	 "TestID": "Clip_15_1",
  	 "Files": {
  		"Reference": "data01/Clip_15_1_CLV_VOCALS.wav",
  		"Mix": "data01/Clip_15_1_MIX.wav",
  		"1": "data01/Clip_15_1_IIY_VOCALS.wav",
  		"2": "data01/Clip_15_1_JL1_VOCALS.wav",
  		"3": "data01/Clip_15_1_RNA_VOCALS.wav",
  		"4": "data01/Clip_15_1_RP1_VOCALS.wav",
  		"5": "data01/Clip_15_1_HDS_VOCALS.wav",
  		"6": "data01/Clip_15_1_ACV.wav",
  		"7": "data01/Clip_15_1_ACM.wav",
  		},
  	},
  ]
}
