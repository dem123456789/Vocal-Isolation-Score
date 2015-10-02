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
  "RequireMaxRating": true,
  "Tasksets": [
	  {
	  "Label": "Instrumental Isolation (Vocal Suppression)",
	  "Description": "In this task you are required to judge how good the separation between the instrumental and the vocal components is.</br></br>\
					  An audio clip with audible instrumental and inaudible vocals should be rated high.\
                      Conversely if the instrumental and vocal components are both equally audible then it should be rated low.\
                      If the instrumentals are inaudible the clip should have a low rating.</br></br>\
                      In this task it does not matter if the instrumentals or vocal components are clear and understandable,\
                      the only criteria for grading is how suppressed the vocals are compared to the rest of the audio present in the mix.</br></br>\
					  <b>Examples:</b> &nbsp\
					  <a href=\"#current\" onclick=\"isogood.playclip()\">High rating example</a> &nbsp &nbsp &nbsp\
					  <a href=\"#current\" onclick=\"isobad.playclip()\">Low rating example</a>",
	  },
	  {
	  "Label": "Instrumental Overall",
	  "Description": "In this task you are required to judge the overall performance of each algorithm.</br></br>\
					  While each algorithm is designed to separate the instrumental from the vocal components,\
                      other quality factors are also important including: background distortion, audio artefacts (e.g., missing sounds, etc.),\
                      and other noisy interference that affect the overall perceived quality of the audio, in spite of the voice/music separation.</br></br>\
                      Rate the clips based on your perception of which algorithms possess the least amount of quality degrading effects\
                      (i.e., algorithms with the fewest perceived audio degradation effects should be rated higher)",
	  },
  ],
"Testsets":[
	// Clip_01_2
	{
	 "Name": "Test Set 1",
	 "TestID": "Clip_01_2",
	 "Files": {
		"Reference": "data02/Clip_01_2_CLA.mp3",
		"Mix": "data02/Clip_01_2_MIX.mp3",
		"1": "data02/Clip_01_2_JL1_ACCOMP.mp3",
		"2": "data02/Clip_01_2_RNA_ACCOMP.mp3",
		"3": "data02/Clip_01_2_RP1_ACCOMP.mp3",
		"4": "data02/Clip_01_2_HDS_ACCOMP.mp3",
		"5": "data02/Clip_01_2_ACM.mp3",
		},
	},
	// Clip_03_1
	{
	 "Name": "Test Set 2",
	 "TestID": "Clip_03_1",
	 "Files": {
		"Reference": "data02/Clip_03_1_CLA.mp3",
		"Mix": "data02/Clip_03_1_MIX.mp3",
		"1": "data02/Clip_03_1_JL1_ACCOMP.mp3",
		"2": "data02/Clip_03_1_RNA_ACCOMP.mp3",
		"3": "data02/Clip_03_1_RP1_ACCOMP.mp3",
		"4": "data02/Clip_03_1_HDS_ACCOMP.mp3",
		"5": "data02/Clip_03_1_ACM.mp3",
		},
	},
	// Clip_05_2
	{
	 "Name": "Test Set 3",
	 "TestID": "Clip_05_2",
	 "Files": {
		"Reference": "data02/Clip_05_2_CLA.mp3",
		"Mix": "data02/Clip_05_2_MIX.mp3",
		"1": "data02/Clip_05_2_JL1_ACCOMP.mp3",
		"2": "data02/Clip_05_2_RNA_ACCOMP.mp3",
		"3": "data02/Clip_05_2_RP1_ACCOMP.mp3",
		"4": "data02/Clip_05_2_HDS_ACCOMP.mp3",
		"5": "data02/Clip_05_2_ACM.mp3",
		},
	},
	// Clip_08_3
	{
	 "Name": "Test Set 4",
	 "TestID": "Clip_08_3",
	 "Files": {
		"Reference": "data02/Clip_08_3_CLA.mp3",
		"Mix": "data02/Clip_08_3_MIX.mp3",
		"1": "data02/Clip_08_3_JL1_ACCOMP.mp3",
		"2": "data02/Clip_08_3_RNA_ACCOMP.mp3",
		"3": "data02/Clip_08_3_RP1_ACCOMP.mp3",
		"4": "data02/Clip_08_3_HDS_ACCOMP.mp3",
		"5": "data02/Clip_08_3_ACM.mp3",
		},
	},
	// Clip_09_3
	{
	 "Name": "Test Set 5",
	 "TestID": "Clip_09_3",
	 "Files": {
		"Reference": "data02/Clip_09_3_CLA.mp3",
		"Mix": "data02/Clip_09_3_MIX.mp3",
		"1": "data02/Clip_09_3_JL1_ACCOMP.mp3",
		"2": "data02/Clip_09_3_RNA_ACCOMP.mp3",
		"3": "data02/Clip_09_3_RP1_ACCOMP.mp3",
		"4": "data02/Clip_09_3_HDS_ACCOMP.mp3",
		"5": "data02/Clip_09_3_ACM.mp3",
		},
	},
	// Clip_10_2
	{
	 "Name": "Test Set 6",
	 "TestID": "Clip_10_2",
	 "Files": {
		"Reference": "data02/Clip_10_2_CLA.mp3",
		"Mix": "data02/Clip_10_2_MIX.mp3",
		"1": "data02/Clip_10_2_JL1_ACCOMP.mp3",
		"2": "data02/Clip_10_2_RNA_ACCOMP.mp3",
		"3": "data02/Clip_10_2_RP1_ACCOMP.mp3",
		"4": "data02/Clip_10_2_HDS_ACCOMP.mp3",
		"5": "data02/Clip_10_2_ACM.mp3",
		},
	},
	// Clip_12_3
	{
	 "Name": "Test Set 7",
	 "TestID": "Clip_12_3",
	 "Files": {
		"Reference": "data02/Clip_12_3_CLA.mp3",
		"Mix": "data02/Clip_12_3_MIX.mp3",
		"1": "data02/Clip_12_3_JL1_ACCOMP.mp3",
		"2": "data02/Clip_12_3_RNA_ACCOMP.mp3",
		"3": "data02/Clip_12_3_RP1_ACCOMP.mp3",
		"4": "data02/Clip_12_3_HDS_ACCOMP.mp3",
		"5": "data02/Clip_12_3_ACM.mp3",
		},
	},
	// Clip_13_3
	{
	 "Name": "Test Set 8",
	 "TestID": "Clip_13_3",
	 "Files": {
		"Reference": "data02/Clip_13_3_CLA.mp3",
		"Mix": "data02/Clip_13_3_MIX.mp3",
		"1": "data02/Clip_13_3_JL1_ACCOMP.mp3",
		"2": "data02/Clip_13_3_RNA_ACCOMP.mp3",
		"3": "data02/Clip_13_3_RP1_ACCOMP.mp3",
		"4": "data02/Clip_13_3_HDS_ACCOMP.mp3",
		"5": "data02/Clip_13_3_ACM.mp3",
		},
	},
	// Clip_14_1
	{
	 "Name": "Test Set 9",
	 "TestID": "Clip_14_1",
	 "Files": {
		"Reference": "data02/Clip_14_1_CLA.mp3",
		"Mix": "data02/Clip_14_1_MIX.mp3",
		"1": "data02/Clip_14_1_JL1_ACCOMP.mp3",
		"2": "data02/Clip_14_1_RNA_ACCOMP.mp3",
		"3": "data02/Clip_14_1_RP1_ACCOMP.mp3",
		"4": "data02/Clip_14_1_HDS_ACCOMP.mp3",
		"5": "data02/Clip_14_1_ACM.mp3",
		},
	},
	// Clip_16_1
	{
	 "Name": "Test Set 10",
	 "TestID": "Clip_16_1",
	 "Files": {
		"Reference": "data02/Clip_16_1_CLA.mp3",
		"Mix": "data02/Clip_16_1_MIX.mp3",
		"1": "data02/Clip_16_1_JL1_ACCOMP.mp3",
		"2": "data02/Clip_16_1_RNA_ACCOMP.mp3",
		"3": "data02/Clip_16_1_RP1_ACCOMP.mp3",
		"4": "data02/Clip_16_1_HDS_ACCOMP.mp3",
		"5": "data02/Clip_16_1_ACM.mp3",
		},
	},
	// Clip_19_2
	{
	 "Name": "Test Set 11",
	 "TestID": "Clip_19_2",
	 "Files": {
		"Reference": "data02/Clip_19_2_CLA.mp3",
		"Mix": "data02/Clip_19_2_MIX.mp3",
		"1": "data02/Clip_19_2_JL1_ACCOMP.mp3",
		"2": "data02/Clip_19_2_RNA_ACCOMP.mp3",
		"3": "data02/Clip_19_2_RP1_ACCOMP.mp3",
		"4": "data02/Clip_19_2_HDS_ACCOMP.mp3",
		"5": "data02/Clip_19_2_ACM.mp3",
		},
	},
	// Clip_20_2
	{
	 "Name": "Test Set 12",
	 "TestID": "Clip_20_2",
	 "Files": {
		"Reference": "data02/Clip_20_2_CLA.mp3",
		"Mix": "data02/Clip_20_2_MIX.mp3",
		"1": "data02/Clip_20_2_JL1_ACCOMP.mp3",
		"2": "data02/Clip_20_2_RNA_ACCOMP.mp3",
		"3": "data02/Clip_20_2_RP1_ACCOMP.mp3",
		"4": "data02/Clip_20_2_HDS_ACCOMP.mp3",
		"5": "data02/Clip_20_2_ACM.mp3",
		},
	},
	// Clip_21_2
	{
	 "Name": "Test Set 13",
	 "TestID": "Clip_21_2",
	 "Files": {
		"Reference": "data02/Clip_21_2_CLA.mp3",
		"Mix": "data02/Clip_21_2_MIX.mp3",
		"1": "data02/Clip_21_2_JL1_ACCOMP.mp3",
		"2": "data02/Clip_21_2_RNA_ACCOMP.mp3",
		"3": "data02/Clip_21_2_RP1_ACCOMP.mp3",
		"4": "data02/Clip_21_2_HDS_ACCOMP.mp3",
		"5": "data02/Clip_21_2_ACM.mp3",
		},
	},
	// Clip_22_3
	{
	 "Name": "Test Set 14",
	 "TestID": "Clip_22_3",
	 "Files": {
		"Reference": "data02/Clip_22_3_CLA.mp3",
		"Mix": "data02/Clip_22_3_MIX.mp3",
		"1": "data02/Clip_22_3_JL1_ACCOMP.mp3",
		"2": "data02/Clip_22_3_RNA_ACCOMP.mp3",
		"3": "data02/Clip_22_3_RP1_ACCOMP.mp3",
		"4": "data02/Clip_22_3_HDS_ACCOMP.mp3",
		"5": "data02/Clip_22_3_ACM.mp3",
		},
	},
	// Clip_23_3
	{
	 "Name": "Test Set 15",
	 "TestID": "Clip_23_3",
	 "Files": {
		"Reference": "data02/Clip_23_3_CLA.mp3",
		"Mix": "data02/Clip_23_3_MIX.mp3",
		"1": "data02/Clip_23_3_JL1_ACCOMP.mp3",
		"2": "data02/Clip_23_3_RNA_ACCOMP.mp3",
		"3": "data02/Clip_23_3_RP1_ACCOMP.mp3",
		"4": "data02/Clip_23_3_HDS_ACCOMP.mp3",
		"5": "data02/Clip_23_3_ACM.mp3",
		},
	},
	// Clip_24_2
	{
	 "Name": "Test Set 16",
	 "TestID": "Clip_24_2",
	 "Files": {
		"Reference": "data02/Clip_24_2_CLA.mp3",
		"Mix": "data02/Clip_24_2_MIX.mp3",
		"1": "data02/Clip_24_2_JL1_ACCOMP.mp3",
		"2": "data02/Clip_24_2_RNA_ACCOMP.mp3",
		"3": "data02/Clip_24_2_RP1_ACCOMP.mp3",
		"4": "data02/Clip_24_2_HDS_ACCOMP.mp3",
		"5": "data02/Clip_24_2_ACM.mp3",
		},
	},
	// Clip_26_1
	{
	 "Name": "Test Set 17",
	 "TestID": "Clip_26_1",
	 "Files": {
		"Reference": "data02/Clip_26_1_CLA.mp3",
		"Mix": "data02/Clip_26_1_MIX.mp3",
		"1": "data02/Clip_26_1_JL1_ACCOMP.mp3",
		"2": "data02/Clip_26_1_RNA_ACCOMP.mp3",
		"3": "data02/Clip_26_1_RP1_ACCOMP.mp3",
		"4": "data02/Clip_26_1_HDS_ACCOMP.mp3",
		"5": "data02/Clip_26_1_ACM.mp3",
		},
	},
	// Clip_27_1
	{
	 "Name": "Test Set 18",
	 "TestID": "Clip_27_1",
	 "Files": {
		"Reference": "data02/Clip_27_1_CLA.mp3",
		"Mix": "data02/Clip_27_1_MIX.mp3",
		"1": "data02/Clip_27_1_JL1_ACCOMP.mp3",
		"2": "data02/Clip_27_1_RNA_ACCOMP.mp3",
		"3": "data02/Clip_27_1_RP1_ACCOMP.mp3",
		"4": "data02/Clip_27_1_HDS_ACCOMP.mp3",
		"5": "data02/Clip_27_1_ACM.mp3",
		},
	},
	// Clip_28_1
	{
	 "Name": "Test Set 19",
	 "TestID": "Clip_28_1",
	 "Files": {
		"Reference": "data02/Clip_28_1_CLA.mp3",
		"Mix": "data02/Clip_28_1_MIX.mp3",
		"1": "data02/Clip_28_1_JL1_ACCOMP.mp3",
		"2": "data02/Clip_28_1_RNA_ACCOMP.mp3",
		"3": "data02/Clip_28_1_RP1_ACCOMP.mp3",
		"4": "data02/Clip_28_1_HDS_ACCOMP.mp3",
		"5": "data02/Clip_28_1_ACM.mp3",
		},
	},
	// Clip_30_1
	{
	 "Name": "Test Set 20",
	 "TestID": "Clip_30_1",
	 "Files": {
		"Reference": "data02/Clip_30_1_CLA.mp3",
		"Mix": "data02/Clip_30_1_MIX.mp3",
		"1": "data02/Clip_30_1_JL1_ACCOMP.mp3",
		"2": "data02/Clip_30_1_RNA_ACCOMP.mp3",
		"3": "data02/Clip_30_1_RP1_ACCOMP.mp3",
		"4": "data02/Clip_30_1_HDS_ACCOMP.mp3",
		"5": "data02/Clip_30_1_ACM.mp3",
		},
	},
	// Clip_35_3
	{
	 "Name": "Test Set 21",
	 "TestID": "Clip_35_3",
	 "Files": {
		"Reference": "data02/Clip_35_3_CLA.mp3",
		"Mix": "data02/Clip_35_3_MIX.mp3",
		"1": "data02/Clip_35_3_JL1_ACCOMP.mp3",
		"2": "data02/Clip_35_3_RNA_ACCOMP.mp3",
		"3": "data02/Clip_35_3_RP1_ACCOMP.mp3",
		"4": "data02/Clip_35_3_HDS_ACCOMP.mp3",
		"5": "data02/Clip_35_3_ACM.mp3",
		},
	},
	// Clip_42_1
	{
	 "Name": "Test Set 22",
	 "TestID": "Clip_42_1",
	 "Files": {
		"Reference": "data02/Clip_42_1_CLA.mp3",
		"Mix": "data02/Clip_42_1_MIX.mp3",
		"1": "data02/Clip_42_1_JL1_ACCOMP.mp3",
		"2": "data02/Clip_42_1_RNA_ACCOMP.mp3",
		"3": "data02/Clip_42_1_RP1_ACCOMP.mp3",
		"4": "data02/Clip_42_1_HDS_ACCOMP.mp3",
		"5": "data02/Clip_42_1_ACM.mp3",
		},
	},
	// Clip_44_1
	{
	 "Name": "Test Set 23",
	 "TestID": "Clip_44_1",
	 "Files": {
		"Reference": "data02/Clip_44_1_CLA.mp3",
		"Mix": "data02/Clip_44_1_MIX.mp3",
		"1": "data02/Clip_44_1_JL1_ACCOMP.mp3",
		"2": "data02/Clip_44_1_RNA_ACCOMP.mp3",
		"3": "data02/Clip_44_1_RP1_ACCOMP.mp3",
		"4": "data02/Clip_44_1_HDS_ACCOMP.mp3",
		"5": "data02/Clip_44_1_ACM.mp3",
		},
	},
	// Clip_45_3
	{
	 "Name": "Test Set 24",
	 "TestID": "Clip_45_3",
	 "Files": {
		"Reference": "data02/Clip_45_3_CLA.mp3",
		"Mix": "data02/Clip_45_3_MIX.mp3",
		"1": "data02/Clip_45_3_JL1_ACCOMP.mp3",
		"2": "data02/Clip_45_3_RNA_ACCOMP.mp3",
		"3": "data02/Clip_45_3_RP1_ACCOMP.mp3",
		"4": "data02/Clip_45_3_HDS_ACCOMP.mp3",
		"5": "data02/Clip_45_3_ACM.mp3",
		},
	},
	// Clip_46_1
	{
	 "Name": "Test Set 25",
	 "TestID": "Clip_46_1",
	 "Files": {
		"Reference": "data02/Clip_46_1_CLA.mp3",
		"Mix": "data02/Clip_46_1_MIX.mp3",
		"1": "data02/Clip_46_1_JL1_ACCOMP.mp3",
		"2": "data02/Clip_46_1_RNA_ACCOMP.mp3",
		"3": "data02/Clip_46_1_RP1_ACCOMP.mp3",
		"4": "data02/Clip_46_1_HDS_ACCOMP.mp3",
		"5": "data02/Clip_46_1_ACM.mp3",
		},
	},
	// Clip_47_2
	{
	 "Name": "Test Set 26",
	 "TestID": "Clip_47_2",
	 "Files": {
		"Reference": "data02/Clip_47_2_CLA.mp3",
		"Mix": "data02/Clip_47_2_MIX.mp3",
		"1": "data02/Clip_47_2_JL1_ACCOMP.mp3",
		"2": "data02/Clip_47_2_RNA_ACCOMP.mp3",
		"3": "data02/Clip_47_2_RP1_ACCOMP.mp3",
		"4": "data02/Clip_47_2_HDS_ACCOMP.mp3",
		"5": "data02/Clip_47_2_ACM.mp3",
		},
	},
	// Clip_48_2
	{
	 "Name": "Test Set 27",
	 "TestID": "Clip_48_2",
	 "Files": {
		"Reference": "data02/Clip_48_2_CLA.mp3",
		"Mix": "data02/Clip_48_2_MIX.mp3",
		"1": "data02/Clip_48_2_JL1_ACCOMP.mp3",
		"2": "data02/Clip_48_2_RNA_ACCOMP.mp3",
		"3": "data02/Clip_48_2_RP1_ACCOMP.mp3",
		"4": "data02/Clip_48_2_HDS_ACCOMP.mp3",
		"5": "data02/Clip_48_2_ACM.mp3",
		},
	},
	// Clip_49_3
	{
	 "Name": "Test Set 28",
	 "TestID": "Clip_49_3",
	 "Files": {
		"Reference": "data02/Clip_49_3_CLA.mp3",
		"Mix": "data02/Clip_49_3_MIX.mp3",
		"1": "data02/Clip_49_3_JL1_ACCOMP.mp3",
		"2": "data02/Clip_49_3_RNA_ACCOMP.mp3",
		"3": "data02/Clip_49_3_RP1_ACCOMP.mp3",
		"4": "data02/Clip_49_3_HDS_ACCOMP.mp3",
		"5": "data02/Clip_49_3_ACM.mp3",
		},
	},
	// Clip_50_1
	{
	 "Name": "Test Set 29",
	 "TestID": "Clip_50_1",
	 "Files": {
		"Reference": "data02/Clip_50_1_CLA.mp3",
		"Mix": "data02/Clip_50_1_MIX.mp3",
		"1": "data02/Clip_50_1_JL1_ACCOMP.mp3",
		"2": "data02/Clip_50_1_RNA_ACCOMP.mp3",
		"3": "data02/Clip_50_1_RP1_ACCOMP.mp3",
		"4": "data02/Clip_50_1_HDS_ACCOMP.mp3",
		"5": "data02/Clip_50_1_ACM.mp3",
		},
	},
	// Clip_51_3
	{
	 "Name": "Test Set 30",
	 "TestID": "Clip_51_3",
	 "Files": {
		"Reference": "data02/Clip_51_3_CLA.mp3",
		"Mix": "data02/Clip_51_3_MIX.mp3",
		"1": "data02/Clip_51_3_JL1_ACCOMP.mp3",
		"2": "data02/Clip_51_3_RNA_ACCOMP.mp3",
		"3": "data02/Clip_51_3_RP1_ACCOMP.mp3",
		"4": "data02/Clip_51_3_HDS_ACCOMP.mp3",
		"5": "data02/Clip_51_3_ACM.mp3",
		},
	},
]
}
