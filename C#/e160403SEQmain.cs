//---e160403SEQmain-------------------------------------------
 using UnityEngine;
 using System.Collections;
 public class e160403SEQmain : MonoBehaviour
 {
//---t mem----------------------------------------------------
 public bool btn1, btn2, btn3, btn4;
 public bool btnnxt, btnbck;
 int testerNumber = 12123123;
 public int productNumber = 1;
 int answer;
 string answers;
//---s brt----------------------------------------------------
 void Start () 
 {

 }	
//---s alv----------------------------------------------------
 void Update () 
 {
 	if(btn1)
 	{
 		answer = 1;
 		answers = "extremely unlikely";
 		btn1 = false;
 	}

 	if(btn2)
 	{
 		answer = 2;
 		answers = "somewhat unlikely";
 		btn2 = false;
 	}

  	if(btn3)
 	{
 		answer = 3;
 		answers = "somewhat likely";
 		btn3 = false;
 	}

 	if(btn4)
 	{
 		answer = 4;
 		answers = "extremely likely";
 		btn4 = false;
 	}

 	if(btnnxt)
 	{
 		if(answer == 0)
 		{

 		}
 		else
 		{
	 		print("user: "+testerNumber+" "+answers+" would buy the "+productNumber);
	 		productNumber++;
	 		btnnxt = false;
	 		answer = 0;
	 		answers = "";
		}
 	}

	if(productNumber>2)
	{
		productNumber=1;
	}


 }
//---t end----------------------------------------------------
 //
 } 
//---t old----------------------------------------------------
 /*

 */
