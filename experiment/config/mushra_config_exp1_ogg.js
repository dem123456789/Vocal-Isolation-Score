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
  "RequireMaxRating": true,
  "Tasksets": [
	  {
	  "Label": "Vocal Isolation",
	  "Description": "In this task you are required to judge how good the separation between the vocal and the instrumental components is. </br></br>\
					  An audio clip with audible vocals and inaudible instrumental should be rated high. \
					  Conversely if the vocal and instrumental components are both equally audible then it should be rated low. \
					  If the vocals are inaudible the clip should have a low rating. </br></br>\
					  In this task it does not matter if the vocals or instrumental components are clear and understandable,\
                      the only criteria for grading is how isolated the vocals are from the rest of the audio present in the mix.</br></br>\
					  <b>Examples:</b> &nbsp \
					  <a href=\"#current\" onclick=\"isogood.playclip()\">High rating example</a> &nbsp &nbsp &nbsp\
					  <a href=\"#current\" onclick=\"isobad.playclip()\">Low rating example</a>",
	  },
	  {
	  "Label": "Vocal Intelligibility",
	  "Description": "In this task you are required to judge the overall intelligibility of the audio.</br></br>\
					  An audio clip which has words that are clearly articulated should be rated higher (i.e., there words are clear and can be understood).\
					  Clips which have words that are difficult to understand (i.e., the words are severely degraded and difficult to make out should be rated lower).</br></br>\
					  In this task it does not matter if you can hear the instrumental portion, you are judging solely on the basis of the intelligibility of the vocals.</br></br>\
					  <b>Examples:</b> &nbsp\
					  <a href=\"#current\" onclick=\"intelgood.playclip()\">High rating example</a> &nbsp &nbsp &nbsp\
					  <a href=\"#current\" onclick=\"intelbad.playclip()\">Low rating example</a>",
	  },
	  {
	  "Label": "Vocal Overall",
	  "Description": "In this task you are required to judge the overall performance of each algorithm.</br></br>\
					  While each algorithm is designed to separate the vocal from the instrumental components,\
                      other quality factors are also important including: background distortion, audio artifacts (e.g., missing sounds, etc.),\
                      and other noisy interference that affect the overall perceived quality of the audio, in spite of the voice/music separation.</br></br>\
					  Rate the clips based on your perception of which algorithms possess the least amount of quality degrading effects\
                      (i.e., algorithms with the fewest perceived audio degradation effects should be rated higher).",
	  },
  ],
"Testsets":[
	// Clip_01_1
	{
	 "Name": "Test Set 1",
	 "TestID": "Clip_01_1",
	 "Files": {
		"Reference": "data01/Clip_01_1_CLV.ogg",
		"Mix": "data01/Clip_01_1_MIX.ogg",
		"1": "data01/Clip_01_1_JL1_VOCALS.ogg",
		"2": "data01/Clip_01_1_RNA_VOCALS.ogg",
		"3": "data01/Clip_01_1_RP1_VOCALS.ogg",
		"4": "data01/Clip_01_1_HDS_VOCALS.ogg",
		"5": "data01/Clip_01_1_ACV.ogg",
		"6": "data01/Clip_01_1_ACM.ogg",
		},
	},
	// Clip_03_3
	{
	 "Name": "Test Set 2",
	 "TestID": "Clip_03_3",
	 "Files": {
		"Reference": "data01/Clip_03_3_CLV.ogg",
		"Mix": "data01/Clip_03_3_MIX.ogg",
		"1": "data01/Clip_03_3_JL1_VOCALS.ogg",
		"2": "data01/Clip_03_3_RNA_VOCALS.ogg",
		"3": "data01/Clip_03_3_RP1_VOCALS.ogg",
		"4": "data01/Clip_03_3_HDS_VOCALS.ogg",
		"5": "data01/Clip_03_3_ACV.ogg",
		"6": "data01/Clip_03_3_ACM.ogg",
		},
	},
	// Clip_05_3
	{
	 "Name": "Test Set 3",
	 "TestID": "Clip_05_3",
	 "Files": {
		"Reference": "data01/Clip_05_3_CLV.ogg",
		"Mix": "data01/Clip_05_3_MIX.ogg",
		"1": "data01/Clip_05_3_JL1_VOCALS.ogg",
		"2": "data01/Clip_05_3_RNA_VOCALS.ogg",
		"3": "data01/Clip_05_3_RP1_VOCALS.ogg",
		"4": "data01/Clip_05_3_HDS_VOCALS.ogg",
		"5": "data01/Clip_05_3_ACV.ogg",
		"6": "data01/Clip_05_3_ACM.ogg",
		},
	},
	// Clip_08_2
	{
	 "Name": "Test Set 4",
	 "TestID": "Clip_08_2",
	 "Files": {
		"Reference": "data01/Clip_08_2_CLV.ogg",
		"Mix": "data01/Clip_08_2_MIX.ogg",
		"1": "data01/Clip_08_2_JL1_VOCALS.ogg",
		"2": "data01/Clip_08_2_RNA_VOCALS.ogg",
		"3": "data01/Clip_08_2_RP1_VOCALS.ogg",
		"4": "data01/Clip_08_2_HDS_VOCALS.ogg",
		"5": "data01/Clip_08_2_ACV.ogg",
		"6": "data01/Clip_08_2_ACM.ogg",
		},
	},
	// Clip_09_1
	{
	 "Name": "Test Set 5",
	 "TestID": "Clip_09_1",
	 "Files": {
		"Reference": "data01/Clip_09_1_CLV.ogg",
		"Mix": "data01/Clip_09_1_MIX.ogg",
		"1": "data01/Clip_09_1_JL1_VOCALS.ogg",
		"2": "data01/Clip_09_1_RNA_VOCALS.ogg",
		"3": "data01/Clip_09_1_RP1_VOCALS.ogg",
		"4": "data01/Clip_09_1_HDS_VOCALS.ogg",
		"5": "data01/Clip_09_1_ACV.ogg",
		"6": "data01/Clip_09_1_ACM.ogg",
		},
	},
	// Clip_10_3
	{
	 "Name": "Test Set 6",
	 "TestID": "Clip_10_3",
	 "Files": {
		"Reference": "data01/Clip_10_3_CLV.ogg",
		"Mix": "data01/Clip_10_3_MIX.ogg",
		"1": "data01/Clip_10_3_JL1_VOCALS.ogg",
		"2": "data01/Clip_10_3_RNA_VOCALS.ogg",
		"3": "data01/Clip_10_3_RP1_VOCALS.ogg",
		"4": "data01/Clip_10_3_HDS_VOCALS.ogg",
		"5": "data01/Clip_10_3_ACV.ogg",
		"6": "data01/Clip_10_3_ACM.ogg",
		},
	},
	// Clip_12_2
	{
	 "Name": "Test Set 7",
	 "TestID": "Clip_12_2",
	 "Files": {
		"Reference": "data01/Clip_12_2_CLV.ogg",
		"Mix": "data01/Clip_12_2_MIX.ogg",
		"1": "data01/Clip_12_2_JL1_VOCALS.ogg",
		"2": "data01/Clip_12_2_RNA_VOCALS.ogg",
		"3": "data01/Clip_12_2_RP1_VOCALS.ogg",
		"4": "data01/Clip_12_2_HDS_VOCALS.ogg",
		"5": "data01/Clip_12_2_ACV.ogg",
		"6": "data01/Clip_12_2_ACM.ogg",
		},
	},
	// Clip_13_2
	{
	 "Name": "Test Set 8",
	 "TestID": "Clip_13_2",
	 "Files": {
		"Reference": "data01/Clip_13_2_CLV.ogg",
		"Mix": "data01/Clip_13_2_MIX.ogg",
		"1": "data01/Clip_13_2_JL1_VOCALS.ogg",
		"2": "data01/Clip_13_2_RNA_VOCALS.ogg",
		"3": "data01/Clip_13_2_RP1_VOCALS.ogg",
		"4": "data01/Clip_13_2_HDS_VOCALS.ogg",
		"5": "data01/Clip_13_2_ACV.ogg",
		"6": "data01/Clip_13_2_ACM.ogg",
		},
	},
	// Clip_14_3
	{
	 "Name": "Test Set 9",
	 "TestID": "Clip_14_3",
	 "Files": {
		"Reference": "data01/Clip_14_3_CLV.ogg",
		"Mix": "data01/Clip_14_3_MIX.ogg",
		"1": "data01/Clip_14_3_JL1_VOCALS.ogg",
		"2": "data01/Clip_14_3_RNA_VOCALS.ogg",
		"3": "data01/Clip_14_3_RP1_VOCALS.ogg",
		"4": "data01/Clip_14_3_HDS_VOCALS.ogg",
		"5": "data01/Clip_14_3_ACV.ogg",
		"6": "data01/Clip_14_3_ACM.ogg",
		},
	},
	// Clip_16_2
	{
	 "Name": "Test Set 10",
	 "TestID": "Clip_16_2",
	 "Files": {
		"Reference": "data01/Clip_16_2_CLV.ogg",
		"Mix": "data01/Clip_16_2_MIX.ogg",
		"1": "data01/Clip_16_2_JL1_VOCALS.ogg",
		"2": "data01/Clip_16_2_RNA_VOCALS.ogg",
		"3": "data01/Clip_16_2_RP1_VOCALS.ogg",
		"4": "data01/Clip_16_2_HDS_VOCALS.ogg",
		"5": "data01/Clip_16_2_ACV.ogg",
		"6": "data01/Clip_16_2_ACM.ogg",
		},
	},
	// Clip_19_1
	{
	 "Name": "Test Set 11",
	 "TestID": "Clip_19_1",
	 "Files": {
		"Reference": "data01/Clip_19_1_CLV.ogg",
		"Mix": "data01/Clip_19_1_MIX.ogg",
		"1": "data01/Clip_19_1_JL1_VOCALS.ogg",
		"2": "data01/Clip_19_1_RNA_VOCALS.ogg",
		"3": "data01/Clip_19_1_RP1_VOCALS.ogg",
		"4": "data01/Clip_19_1_HDS_VOCALS.ogg",
		"5": "data01/Clip_19_1_ACV.ogg",
		"6": "data01/Clip_19_1_ACM.ogg",
		},
	},
	// Clip_20_3
	{
	 "Name": "Test Set 12",
	 "TestID": "Clip_20_3",
	 "Files": {
		"Reference": "data01/Clip_20_3_CLV.ogg",
		"Mix": "data01/Clip_20_3_MIX.ogg",
		"1": "data01/Clip_20_3_JL1_VOCALS.ogg",
		"2": "data01/Clip_20_3_RNA_VOCALS.ogg",
		"3": "data01/Clip_20_3_RP1_VOCALS.ogg",
		"4": "data01/Clip_20_3_HDS_VOCALS.ogg",
		"5": "data01/Clip_20_3_ACV.ogg",
		"6": "data01/Clip_20_3_ACM.ogg",
		},
	},
	// Clip_21_1
	{
	 "Name": "Test Set 13",
	 "TestID": "Clip_21_1",
	 "Files": {
		"Reference": "data01/Clip_21_1_CLV.ogg",
		"Mix": "data01/Clip_21_1_MIX.ogg",
		"1": "data01/Clip_21_1_JL1_VOCALS.ogg",
		"2": "data01/Clip_21_1_RNA_VOCALS.ogg",
		"3": "data01/Clip_21_1_RP1_VOCALS.ogg",
		"4": "data01/Clip_21_1_HDS_VOCALS.ogg",
		"5": "data01/Clip_21_1_ACV.ogg",
		"6": "data01/Clip_21_1_ACM.ogg",
		},
	},
	// Clip_22_2
	{
	 "Name": "Test Set 14",
	 "TestID": "Clip_22_2",
	 "Files": {
		"Reference": "data01/Clip_22_2_CLV.ogg",
		"Mix": "data01/Clip_22_2_MIX.ogg",
		"1": "data01/Clip_22_2_JL1_VOCALS.ogg",
		"2": "data01/Clip_22_2_RNA_VOCALS.ogg",
		"3": "data01/Clip_22_2_RP1_VOCALS.ogg",
		"4": "data01/Clip_22_2_HDS_VOCALS.ogg",
		"5": "data01/Clip_22_2_ACV.ogg",
		"6": "data01/Clip_22_2_ACM.ogg",
		},
	},
	// Clip_23_1
	{
	 "Name": "Test Set 15",
	 "TestID": "Clip_23_1",
	 "Files": {
		"Reference": "data01/Clip_23_1_CLV.ogg",
		"Mix": "data01/Clip_23_1_MIX.ogg",
		"1": "data01/Clip_23_1_JL1_VOCALS.ogg",
		"2": "data01/Clip_23_1_RNA_VOCALS.ogg",
		"3": "data01/Clip_23_1_RP1_VOCALS.ogg",
		"4": "data01/Clip_23_1_HDS_VOCALS.ogg",
		"5": "data01/Clip_23_1_ACV.ogg",
		"6": "data01/Clip_23_1_ACM.ogg",
		},
	},
	// Clip_24_1
	{
	 "Name": "Test Set 16",
	 "TestID": "Clip_24_1",
	 "Files": {
		"Reference": "data01/Clip_24_1_CLV.ogg",
		"Mix": "data01/Clip_24_1_MIX.ogg",
		"1": "data01/Clip_24_1_JL1_VOCALS.ogg",
		"2": "data01/Clip_24_1_RNA_VOCALS.ogg",
		"3": "data01/Clip_24_1_RP1_VOCALS.ogg",
		"4": "data01/Clip_24_1_HDS_VOCALS.ogg",
		"5": "data01/Clip_24_1_ACV.ogg",
		"6": "data01/Clip_24_1_ACM.ogg",
		},
	},
	// Clip_26_2
	{
	 "Name": "Test Set 17",
	 "TestID": "Clip_26_2",
	 "Files": {
		"Reference": "data01/Clip_26_2_CLV.ogg",
		"Mix": "data01/Clip_26_2_MIX.ogg",
		"1": "data01/Clip_26_2_JL1_VOCALS.ogg",
		"2": "data01/Clip_26_2_RNA_VOCALS.ogg",
		"3": "data01/Clip_26_2_RP1_VOCALS.ogg",
		"4": "data01/Clip_26_2_HDS_VOCALS.ogg",
		"5": "data01/Clip_26_2_ACV.ogg",
		"6": "data01/Clip_26_2_ACM.ogg",
		},
	},
	// Clip_27_3
	{
	 "Name": "Test Set 18",
	 "TestID": "Clip_27_3",
	 "Files": {
		"Reference": "data01/Clip_27_3_CLV.ogg",
		"Mix": "data01/Clip_27_3_MIX.ogg",
		"1": "data01/Clip_27_3_JL1_VOCALS.ogg",
		"2": "data01/Clip_27_3_RNA_VOCALS.ogg",
		"3": "data01/Clip_27_3_RP1_VOCALS.ogg",
		"4": "data01/Clip_27_3_HDS_VOCALS.ogg",
		"5": "data01/Clip_27_3_ACV.ogg",
		"6": "data01/Clip_27_3_ACM.ogg",
		},
	},
	// Clip_28_3
	{
	 "Name": "Test Set 19",
	 "TestID": "Clip_28_3",
	 "Files": {
		"Reference": "data01/Clip_28_3_CLV.ogg",
		"Mix": "data01/Clip_28_3_MIX.ogg",
		"1": "data01/Clip_28_3_JL1_VOCALS.ogg",
		"2": "data01/Clip_28_3_RNA_VOCALS.ogg",
		"3": "data01/Clip_28_3_RP1_VOCALS.ogg",
		"4": "data01/Clip_28_3_HDS_VOCALS.ogg",
		"5": "data01/Clip_28_3_ACV.ogg",
		"6": "data01/Clip_28_3_ACM.ogg",
		},
	},
	// Clip_30_3
	{
	 "Name": "Test Set 20",
	 "TestID": "Clip_30_3",
	 "Files": {
		"Reference": "data01/Clip_30_3_CLV.ogg",
		"Mix": "data01/Clip_30_3_MIX.ogg",
		"1": "data01/Clip_30_3_JL1_VOCALS.ogg",
		"2": "data01/Clip_30_3_RNA_VOCALS.ogg",
		"3": "data01/Clip_30_3_RP1_VOCALS.ogg",
		"4": "data01/Clip_30_3_HDS_VOCALS.ogg",
		"5": "data01/Clip_30_3_ACV.ogg",
		"6": "data01/Clip_30_3_ACM.ogg",
		},
	},
	// Clip_35_1
	{
	 "Name": "Test Set 21",
	 "TestID": "Clip_35_1",
	 "Files": {
		"Reference": "data01/Clip_35_1_CLV.ogg",
		"Mix": "data01/Clip_35_1_MIX.ogg",
		"1": "data01/Clip_35_1_JL1_VOCALS.ogg",
		"2": "data01/Clip_35_1_RNA_VOCALS.ogg",
		"3": "data01/Clip_35_1_RP1_VOCALS.ogg",
		"4": "data01/Clip_35_1_HDS_VOCALS.ogg",
		"5": "data01/Clip_35_1_ACV.ogg",
		"6": "data01/Clip_35_1_ACM.ogg",
		},
	},
	// Clip_42_2
	{
	 "Name": "Test Set 22",
	 "TestID": "Clip_42_2",
	 "Files": {
		"Reference": "data01/Clip_42_2_CLV.ogg",
		"Mix": "data01/Clip_42_2_MIX.ogg",
		"1": "data01/Clip_42_2_JL1_VOCALS.ogg",
		"2": "data01/Clip_42_2_RNA_VOCALS.ogg",
		"3": "data01/Clip_42_2_RP1_VOCALS.ogg",
		"4": "data01/Clip_42_2_HDS_VOCALS.ogg",
		"5": "data01/Clip_42_2_ACV.ogg",
		"6": "data01/Clip_42_2_ACM.ogg",
		},
	},
	// Clip_44_3
	{
	 "Name": "Test Set 23",
	 "TestID": "Clip_44_3",
	 "Files": {
		"Reference": "data01/Clip_44_3_CLV.ogg",
		"Mix": "data01/Clip_44_3_MIX.ogg",
		"1": "data01/Clip_44_3_JL1_VOCALS.ogg",
		"2": "data01/Clip_44_3_RNA_VOCALS.ogg",
		"3": "data01/Clip_44_3_RP1_VOCALS.ogg",
		"4": "data01/Clip_44_3_HDS_VOCALS.ogg",
		"5": "data01/Clip_44_3_ACV.ogg",
		"6": "data01/Clip_44_3_ACM.ogg",
		},
	},
	// Clip_45_2
	{
	 "Name": "Test Set 24",
	 "TestID": "Clip_45_2",
	 "Files": {
		"Reference": "data01/Clip_45_2_CLV.ogg",
		"Mix": "data01/Clip_45_2_MIX.ogg",
		"1": "data01/Clip_45_2_JL1_VOCALS.ogg",
		"2": "data01/Clip_45_2_RNA_VOCALS.ogg",
		"3": "data01/Clip_45_2_RP1_VOCALS.ogg",
		"4": "data01/Clip_45_2_HDS_VOCALS.ogg",
		"5": "data01/Clip_45_2_ACV.ogg",
		"6": "data01/Clip_45_2_ACM.ogg",
		},
	},
	// Clip_46_3
	{
	 "Name": "Test Set 25",
	 "TestID": "Clip_46_3",
	 "Files": {
		"Reference": "data01/Clip_46_3_CLV.ogg",
		"Mix": "data01/Clip_46_3_MIX.ogg",
		"1": "data01/Clip_46_3_JL1_VOCALS.ogg",
		"2": "data01/Clip_46_3_RNA_VOCALS.ogg",
		"3": "data01/Clip_46_3_RP1_VOCALS.ogg",
		"4": "data01/Clip_46_3_HDS_VOCALS.ogg",
		"5": "data01/Clip_46_3_ACV.ogg",
		"6": "data01/Clip_46_3_ACM.ogg",
		},
	},
	// Clip_47_1
	{
	 "Name": "Test Set 26",
	 "TestID": "Clip_47_1",
	 "Files": {
		"Reference": "data01/Clip_47_1_CLV.ogg",
		"Mix": "data01/Clip_47_1_MIX.ogg",
		"1": "data01/Clip_47_1_JL1_VOCALS.ogg",
		"2": "data01/Clip_47_1_RNA_VOCALS.ogg",
		"3": "data01/Clip_47_1_RP1_VOCALS.ogg",
		"4": "data01/Clip_47_1_HDS_VOCALS.ogg",
		"5": "data01/Clip_47_1_ACV.ogg",
		"6": "data01/Clip_47_1_ACM.ogg",
		},
	},
	// Clip_48_3
	{
	 "Name": "Test Set 27",
	 "TestID": "Clip_48_3",
	 "Files": {
		"Reference": "data01/Clip_48_3_CLV.ogg",
		"Mix": "data01/Clip_48_3_MIX.ogg",
		"1": "data01/Clip_48_3_JL1_VOCALS.ogg",
		"2": "data01/Clip_48_3_RNA_VOCALS.ogg",
		"3": "data01/Clip_48_3_RP1_VOCALS.ogg",
		"4": "data01/Clip_48_3_HDS_VOCALS.ogg",
		"5": "data01/Clip_48_3_ACV.ogg",
		"6": "data01/Clip_48_3_ACM.ogg",
		},
	},
	// Clip_49_2
	{
	 "Name": "Test Set 28",
	 "TestID": "Clip_49_2",
	 "Files": {
		"Reference": "data01/Clip_49_2_CLV.ogg",
		"Mix": "data01/Clip_49_2_MIX.ogg",
		"1": "data01/Clip_49_2_JL1_VOCALS.ogg",
		"2": "data01/Clip_49_2_RNA_VOCALS.ogg",
		"3": "data01/Clip_49_2_RP1_VOCALS.ogg",
		"4": "data01/Clip_49_2_HDS_VOCALS.ogg",
		"5": "data01/Clip_49_2_ACV.ogg",
		"6": "data01/Clip_49_2_ACM.ogg",
		},
	},
	// Clip_50_3
	{
	 "Name": "Test Set 29",
	 "TestID": "Clip_50_3",
	 "Files": {
		"Reference": "data01/Clip_50_3_CLV.ogg",
		"Mix": "data01/Clip_50_3_MIX.ogg",
		"1": "data01/Clip_50_3_JL1_VOCALS.ogg",
		"2": "data01/Clip_50_3_RNA_VOCALS.ogg",
		"3": "data01/Clip_50_3_RP1_VOCALS.ogg",
		"4": "data01/Clip_50_3_HDS_VOCALS.ogg",
		"5": "data01/Clip_50_3_ACV.ogg",
		"6": "data01/Clip_50_3_ACM.ogg",
		},
	},
	// Clip_51_2
	{
	 "Name": "Test Set 30",
	 "TestID": "Clip_51_2",
	 "Files": {
		"Reference": "data01/Clip_51_2_CLV.ogg",
		"Mix": "data01/Clip_51_2_MIX.ogg",
		"1": "data01/Clip_51_2_JL1_VOCALS.ogg",
		"2": "data01/Clip_51_2_RNA_VOCALS.ogg",
		"3": "data01/Clip_51_2_RP1_VOCALS.ogg",
		"4": "data01/Clip_51_2_HDS_VOCALS.ogg",
		"5": "data01/Clip_51_2_ACV.ogg",
		"6": "data01/Clip_51_2_ACM.ogg",
		},
	},
]

}
