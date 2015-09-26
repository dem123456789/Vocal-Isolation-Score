// configure the test here
var TestConfig = {
  "TestName": "SVS Listening Test - Instrumental Separation Quality",
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
  "BeaqleServiceURL": "http://svslisteningtest.gatech.edu/experiment/beaqleJS_Service_2.php",
  "SupervisorContact": "svs.listening@gmail.com",
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 2,
  "RequireMaxRating": false,
  "Tasksets": [
	  {
	  "Label": "Instrumental Isolation (Vocal Suppression)",
	  "Description": "In this task you are required to judge how good the separation between the instrumental and the vocal components is.\
					  An audio clip with audible instrumental and inaudible vocals should be rated high.\
                      Conversely if the instrumental and vocal components are both equally audible then it should be rated low.\
                      If the instrumentals are inaudible the clip should have a low rating.\
                      In this task it does not matter if the instrumentals or vocal components are clear and understandable,\
                      the only criteria for grading is how suppressed the vocals are compared to the rest of the audio present in the mix.",
	  },
	  {
	  "Label": "Instrumental Overall",
	  "Description": "In this task you are required to judge the overall performance of each algorithm.\
					  While each algorithm is designed to separate the instrumental from the vocal components,\
                      other quality factors are also important including: background distortion, audio artefacts (e.g., missing sounds, etc.),\
                      and other noisy interference that affect the overall perceived quality of the audio, in spite of the voice/music separation.\
                      Rate the clips based on your perception of which algorithms possess the least amount of quality degrading effects\
                      (i.e., algorithms with the fewest perceived audio degradation effects should be rated higher)",
	  },
  ],
  "Testsets":[
  	// Clip_01_1
  	{
  	 "Name": "Test Set 1",
  	 "TestID": "Clip_01_1",
  	 "Files": {
  		"Reference": "data02/Clip_01_1_CLA_ACCOMP.wav",
  		"Mix": "data02/Clip_01_1_MIX.wav",
  		"1": "data02/Clip_01_1_IIY_ACCOMP.wav",
  		"2": "data02/Clip_01_1_JL1_ACCOMP.wav",
  		"3": "data02/Clip_01_1_RNA_ACCOMP.wav",
  		"4": "data02/Clip_01_1_RP1_ACCOMP.wav",
  		"5": "data02/Clip_01_1_HDS_ACCOMP.wav",
  		"6": "data02/Clip_01_1_ACM.wav",
  		},
  	},
  	// Clip_03_1
  	{
  	 "Name": "Test Set 2",
  	 "TestID": "Clip_03_1",
  	 "Files": {
  		"Reference": "data02/Clip_03_1_CLA_ACCOMP.wav",
  		"Mix": "data02/Clip_03_1_MIX.wav",
  		"1": "data02/Clip_03_1_IIY_ACCOMP.wav",
  		"2": "data02/Clip_03_1_JL1_ACCOMP.wav",
  		"3": "data02/Clip_03_1_RNA_ACCOMP.wav",
  		"4": "data02/Clip_03_1_RP1_ACCOMP.wav",
  		"5": "data02/Clip_03_1_HDS_ACCOMP.wav",
  		"6": "data02/Clip_03_1_ACM.wav",
  		},
  	},
  	// Clip_04_3
  	{
  	 "Name": "Test Set 3",
  	 "TestID": "Clip_04_3",
  	 "Files": {
  		"Reference": "data02/Clip_04_3_CLA_ACCOMP.wav",
  		"Mix": "data02/Clip_04_3_MIX.wav",
  		"1": "data02/Clip_04_3_IIY_ACCOMP.wav",
  		"2": "data02/Clip_04_3_JL1_ACCOMP.wav",
  		"3": "data02/Clip_04_3_RNA_ACCOMP.wav",
  		"4": "data02/Clip_04_3_RP1_ACCOMP.wav",
  		"5": "data02/Clip_04_3_HDS_ACCOMP.wav",
  		"6": "data02/Clip_04_3_ACM.wav",
  		},
  	},
  	// Clip_05_3
  	{
  	 "Name": "Test Set 4",
  	 "TestID": "Clip_05_3",
  	 "Files": {
  		"Reference": "data02/Clip_05_3_CLA_ACCOMP.wav",
  		"Mix": "data02/Clip_05_3_MIX.wav",
  		"1": "data02/Clip_05_3_IIY_ACCOMP.wav",
  		"2": "data02/Clip_05_3_JL1_ACCOMP.wav",
  		"3": "data02/Clip_05_3_RNA_ACCOMP.wav",
  		"4": "data02/Clip_05_3_RP1_ACCOMP.wav",
  		"5": "data02/Clip_05_3_HDS_ACCOMP.wav",
  		"6": "data02/Clip_05_3_ACM.wav",
  		},
  	},
  	// Clip_06_3
  	{
  	 "Name": "Test Set 5",
  	 "TestID": "Clip_06_3",
  	 "Files": {
  		"Reference": "data02/Clip_06_3_CLA_ACCOMP.wav",
  		"Mix": "data02/Clip_06_3_MIX.wav",
  		"1": "data02/Clip_06_3_IIY_ACCOMP.wav",
  		"2": "data02/Clip_06_3_JL1_ACCOMP.wav",
  		"3": "data02/Clip_06_3_RNA_ACCOMP.wav",
  		"4": "data02/Clip_06_3_RP1_ACCOMP.wav",
  		"5": "data02/Clip_06_3_HDS_ACCOMP.wav",
  		"6": "data02/Clip_06_3_ACM.wav",
  		},
  	},
  	// Clip_07_1
  	{
  	 "Name": "Test Set 6",
  	 "TestID": "Clip_07_1",
  	 "Files": {
  		"Reference": "data02/Clip_07_1_CLA_ACCOMP.wav",
  		"Mix": "data02/Clip_07_1_MIX.wav",
  		"1": "data02/Clip_07_1_IIY_ACCOMP.wav",
  		"2": "data02/Clip_07_1_JL1_ACCOMP.wav",
  		"3": "data02/Clip_07_1_RNA_ACCOMP.wav",
  		"4": "data02/Clip_07_1_RP1_ACCOMP.wav",
  		"5": "data02/Clip_07_1_HDS_ACCOMP.wav",
  		"6": "data02/Clip_07_1_ACM.wav",
  		},
  	},
  	// Clip_08_1
  	{
  	 "Name": "Test Set 7",
  	 "TestID": "Clip_08_1",
  	 "Files": {
  		"Reference": "data02/Clip_08_1_CLA_ACCOMP.wav",
  		"Mix": "data02/Clip_08_1_MIX.wav",
  		"1": "data02/Clip_08_1_IIY_ACCOMP.wav",
  		"2": "data02/Clip_08_1_JL1_ACCOMP.wav",
  		"3": "data02/Clip_08_1_RNA_ACCOMP.wav",
  		"4": "data02/Clip_08_1_RP1_ACCOMP.wav",
  		"5": "data02/Clip_08_1_HDS_ACCOMP.wav",
  		"6": "data02/Clip_08_1_ACM.wav",
  		},
  	},
  	// Clip_10_2
  	{
  	 "Name": "Test Set 8",
  	 "TestID": "Clip_10_2",
  	 "Files": {
  		"Reference": "data02/Clip_10_2_CLA_ACCOMP.wav",
  		"Mix": "data02/Clip_10_2_MIX.wav",
  		"1": "data02/Clip_10_2_IIY_ACCOMP.wav",
  		"2": "data02/Clip_10_2_JL1_ACCOMP.wav",
  		"3": "data02/Clip_10_2_RNA_ACCOMP.wav",
  		"4": "data02/Clip_10_2_RP1_ACCOMP.wav",
  		"5": "data02/Clip_10_2_HDS_ACCOMP.wav",
  		"6": "data02/Clip_10_2_ACM.wav",
  		},
  	},
  	// Clip_11_2
  	{
  	 "Name": "Test Set 9",
  	 "TestID": "Clip_11_2",
  	 "Files": {
  		"Reference": "data02/Clip_11_2_CLA_ACCOMP.wav",
  		"Mix": "data02/Clip_11_2_MIX.wav",
  		"1": "data02/Clip_11_2_IIY_ACCOMP.wav",
  		"2": "data02/Clip_11_2_JL1_ACCOMP.wav",
  		"3": "data02/Clip_11_2_RNA_ACCOMP.wav",
  		"4": "data02/Clip_11_2_RP1_ACCOMP.wav",
  		"5": "data02/Clip_11_2_HDS_ACCOMP.wav",
  		"6": "data02/Clip_11_2_ACM.wav",
  		},
  	},
  	// Clip_12_2
  	{
  	 "Name": "Test Set 10",
  	 "TestID": "Clip_12_2",
  	 "Files": {
  		"Reference": "data02/Clip_12_2_CLA_ACCOMP.wav",
  		"Mix": "data02/Clip_12_2_MIX.wav",
  		"1": "data02/Clip_12_2_IIY_ACCOMP.wav",
  		"2": "data02/Clip_12_2_JL1_ACCOMP.wav",
  		"3": "data02/Clip_12_2_RNA_ACCOMP.wav",
  		"4": "data02/Clip_12_2_RP1_ACCOMP.wav",
  		"5": "data02/Clip_12_2_HDS_ACCOMP.wav",
  		"6": "data02/Clip_12_2_ACM.wav",
  		},
  	},
  	// Clip_13_2
  	{
  	 "Name": "Test Set 11",
  	 "TestID": "Clip_13_2",
  	 "Files": {
  		"Reference": "data02/Clip_13_2_CLA_ACCOMP.wav",
  		"Mix": "data02/Clip_13_2_MIX.wav",
  		"1": "data02/Clip_13_2_IIY_ACCOMP.wav",
  		"2": "data02/Clip_13_2_JL1_ACCOMP.wav",
  		"3": "data02/Clip_13_2_RNA_ACCOMP.wav",
  		"4": "data02/Clip_13_2_RP1_ACCOMP.wav",
  		"5": "data02/Clip_13_2_HDS_ACCOMP.wav",
  		"6": "data02/Clip_13_2_ACM.wav",
  		},
  	},
  	// Clip_14_2
  	{
  	 "Name": "Test Set 12",
  	 "TestID": "Clip_14_2",
  	 "Files": {
  		"Reference": "data02/Clip_14_2_CLA_ACCOMP.wav",
  		"Mix": "data02/Clip_14_2_MIX.wav",
  		"1": "data02/Clip_14_2_IIY_ACCOMP.wav",
  		"2": "data02/Clip_14_2_JL1_ACCOMP.wav",
  		"3": "data02/Clip_14_2_RNA_ACCOMP.wav",
  		"4": "data02/Clip_14_2_RP1_ACCOMP.wav",
  		"5": "data02/Clip_14_2_HDS_ACCOMP.wav",
  		"6": "data02/Clip_14_2_ACM.wav",
  		},
  	},
  	// Clip_15_2
  	{
  	 "Name": "Test Set 13",
  	 "TestID": "Clip_15_2",
  	 "Files": {
  		"Reference": "data02/Clip_15_2_CLA_ACCOMP.wav",
  		"Mix": "data02/Clip_15_2_MIX.wav",
  		"1": "data02/Clip_15_2_IIY_ACCOMP.wav",
  		"2": "data02/Clip_15_2_JL1_ACCOMP.wav",
  		"3": "data02/Clip_15_2_RNA_ACCOMP.wav",
  		"4": "data02/Clip_15_2_RP1_ACCOMP.wav",
  		"5": "data02/Clip_15_2_HDS_ACCOMP.wav",
  		"6": "data02/Clip_15_2_ACM.wav",
  		},
  	},
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
